function dv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Yu={exports:{}},io={},$u={exports:{}},qt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function fv(){if(pm)return qt;pm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(G){return G===null||typeof G!="object"?null:(G=y&&G[y]||G["@@iterator"],typeof G=="function"?G:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,L={};function S(G,ne,$e){this.props=G,this.context=ne,this.refs=L,this.updater=$e||M}S.prototype.isReactComponent={},S.prototype.setState=function(G,ne){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,ne,"setState")},S.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function _(){}_.prototype=S.prototype;function D(G,ne,$e){this.props=G,this.context=ne,this.refs=L,this.updater=$e||M}var R=D.prototype=new _;R.constructor=D,C(R,S.prototype),R.isPureReactComponent=!0;var N=Array.isArray,H=Object.prototype.hasOwnProperty,F={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function w(G,ne,$e){var rt,Ue={},de=null,be=null;if(ne!=null)for(rt in ne.ref!==void 0&&(be=ne.ref),ne.key!==void 0&&(de=""+ne.key),ne)H.call(ne,rt)&&!z.hasOwnProperty(rt)&&(Ue[rt]=ne[rt]);var ye=arguments.length-2;if(ye===1)Ue.children=$e;else if(1<ye){for(var ke=Array(ye),ot=0;ot<ye;ot++)ke[ot]=arguments[ot+2];Ue.children=ke}if(G&&G.defaultProps)for(rt in ye=G.defaultProps,ye)Ue[rt]===void 0&&(Ue[rt]=ye[rt]);return{$$typeof:s,type:G,key:de,ref:be,props:Ue,_owner:F.current}}function I(G,ne){return{$$typeof:s,type:G.type,key:ne,ref:G.ref,props:G.props,_owner:G._owner}}function q(G){return typeof G=="object"&&G!==null&&G.$$typeof===s}function k(G){var ne={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function($e){return ne[$e]})}var Z=/\/+/g;function le(G,ne){return typeof G=="object"&&G!==null&&G.key!=null?k(""+G.key):ne.toString(36)}function pe(G,ne,$e,rt,Ue){var de=typeof G;(de==="undefined"||de==="boolean")&&(G=null);var be=!1;if(G===null)be=!0;else switch(de){case"string":case"number":be=!0;break;case"object":switch(G.$$typeof){case s:case e:be=!0}}if(be)return be=G,Ue=Ue(be),G=rt===""?"."+le(be,0):rt,N(Ue)?($e="",G!=null&&($e=G.replace(Z,"$&/")+"/"),pe(Ue,ne,$e,"",function(ot){return ot})):Ue!=null&&(q(Ue)&&(Ue=I(Ue,$e+(!Ue.key||be&&be.key===Ue.key?"":(""+Ue.key).replace(Z,"$&/")+"/")+G)),ne.push(Ue)),1;if(be=0,rt=rt===""?".":rt+":",N(G))for(var ye=0;ye<G.length;ye++){de=G[ye];var ke=rt+le(de,ye);be+=pe(de,ne,$e,ke,Ue)}else if(ke=x(G),typeof ke=="function")for(G=ke.call(G),ye=0;!(de=G.next()).done;)de=de.value,ke=rt+le(de,ye++),be+=pe(de,ne,$e,ke,Ue);else if(de==="object")throw ne=String(G),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return be}function j(G,ne,$e){if(G==null)return G;var rt=[],Ue=0;return pe(G,rt,"","",function(de){return ne.call($e,de,Ue++)}),rt}function oe(G){if(G._status===-1){var ne=G._result;ne=ne(),ne.then(function($e){(G._status===0||G._status===-1)&&(G._status=1,G._result=$e)},function($e){(G._status===0||G._status===-1)&&(G._status=2,G._result=$e)}),G._status===-1&&(G._status=0,G._result=ne)}if(G._status===1)return G._result.default;throw G._result}var te={current:null},se={transition:null},fe={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:se,ReactCurrentOwner:F};function ce(){throw Error("act(...) is not supported in production builds of React.")}return qt.Children={map:j,forEach:function(G,ne,$e){j(G,function(){ne.apply(this,arguments)},$e)},count:function(G){var ne=0;return j(G,function(){ne++}),ne},toArray:function(G){return j(G,function(ne){return ne})||[]},only:function(G){if(!q(G))throw Error("React.Children.only expected to receive a single React element child.");return G}},qt.Component=S,qt.Fragment=t,qt.Profiler=o,qt.PureComponent=D,qt.StrictMode=r,qt.Suspense=h,qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,qt.act=ce,qt.cloneElement=function(G,ne,$e){if(G==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+G+".");var rt=C({},G.props),Ue=G.key,de=G.ref,be=G._owner;if(ne!=null){if(ne.ref!==void 0&&(de=ne.ref,be=F.current),ne.key!==void 0&&(Ue=""+ne.key),G.type&&G.type.defaultProps)var ye=G.type.defaultProps;for(ke in ne)H.call(ne,ke)&&!z.hasOwnProperty(ke)&&(rt[ke]=ne[ke]===void 0&&ye!==void 0?ye[ke]:ne[ke])}var ke=arguments.length-2;if(ke===1)rt.children=$e;else if(1<ke){ye=Array(ke);for(var ot=0;ot<ke;ot++)ye[ot]=arguments[ot+2];rt.children=ye}return{$$typeof:s,type:G.type,key:Ue,ref:de,props:rt,_owner:be}},qt.createContext=function(G){return G={$$typeof:u,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},G.Provider={$$typeof:l,_context:G},G.Consumer=G},qt.createElement=w,qt.createFactory=function(G){var ne=w.bind(null,G);return ne.type=G,ne},qt.createRef=function(){return{current:null}},qt.forwardRef=function(G){return{$$typeof:f,render:G}},qt.isValidElement=q,qt.lazy=function(G){return{$$typeof:v,_payload:{_status:-1,_result:G},_init:oe}},qt.memo=function(G,ne){return{$$typeof:m,type:G,compare:ne===void 0?null:ne}},qt.startTransition=function(G){var ne=se.transition;se.transition={};try{G()}finally{se.transition=ne}},qt.unstable_act=ce,qt.useCallback=function(G,ne){return te.current.useCallback(G,ne)},qt.useContext=function(G){return te.current.useContext(G)},qt.useDebugValue=function(){},qt.useDeferredValue=function(G){return te.current.useDeferredValue(G)},qt.useEffect=function(G,ne){return te.current.useEffect(G,ne)},qt.useId=function(){return te.current.useId()},qt.useImperativeHandle=function(G,ne,$e){return te.current.useImperativeHandle(G,ne,$e)},qt.useInsertionEffect=function(G,ne){return te.current.useInsertionEffect(G,ne)},qt.useLayoutEffect=function(G,ne){return te.current.useLayoutEffect(G,ne)},qt.useMemo=function(G,ne){return te.current.useMemo(G,ne)},qt.useReducer=function(G,ne,$e){return te.current.useReducer(G,ne,$e)},qt.useRef=function(G){return te.current.useRef(G)},qt.useState=function(G){return te.current.useState(G)},qt.useSyncExternalStore=function(G,ne,$e){return te.current.useSyncExternalStore(G,ne,$e)},qt.useTransition=function(){return te.current.useTransition()},qt.version="18.3.1",qt}var mm;function Pf(){return mm||(mm=1,$u.exports=fv()),$u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function hv(){if(gm)return io;gm=1;var s=Pf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var v,y={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(y[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)y[v]===void 0&&(y[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:M,props:y,_owner:o.current}}return io.Fragment=t,io.jsx=u,io.jsxs=u,io}var xm;function pv(){return xm||(xm=1,Yu.exports=hv()),Yu.exports}var p=pv(),Ie=Pf();const If=dv(Ie);var wl={},qu={exports:{}},fi={},Ku={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function mv(){return vm||(vm=1,(function(s){function e(se,fe){var ce=se.length;se.push(fe);e:for(;0<ce;){var G=ce-1>>>1,ne=se[G];if(0<o(ne,fe))se[G]=fe,se[ce]=ne,ce=G;else break e}}function t(se){return se.length===0?null:se[0]}function r(se){if(se.length===0)return null;var fe=se[0],ce=se.pop();if(ce!==fe){se[0]=ce;e:for(var G=0,ne=se.length,$e=ne>>>1;G<$e;){var rt=2*(G+1)-1,Ue=se[rt],de=rt+1,be=se[de];if(0>o(Ue,ce))de<ne&&0>o(be,Ue)?(se[G]=be,se[de]=ce,G=de):(se[G]=Ue,se[rt]=ce,G=rt);else if(de<ne&&0>o(be,ce))se[G]=be,se[de]=ce,G=de;else break e}}return fe}function o(se,fe){var ce=se.sortIndex-fe.sortIndex;return ce!==0?ce:se.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],v=1,y=null,x=3,M=!1,C=!1,L=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(se){for(var fe=t(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=se)r(m),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=t(m)}}function N(se){if(L=!1,R(se),!C)if(t(h)!==null)C=!0,oe(H);else{var fe=t(m);fe!==null&&te(N,fe.startTime-se)}}function H(se,fe){C=!1,L&&(L=!1,_(w),w=-1),M=!0;var ce=x;try{for(R(fe),y=t(h);y!==null&&(!(y.expirationTime>fe)||se&&!k());){var G=y.callback;if(typeof G=="function"){y.callback=null,x=y.priorityLevel;var ne=G(y.expirationTime<=fe);fe=s.unstable_now(),typeof ne=="function"?y.callback=ne:y===t(h)&&r(h),R(fe)}else r(h);y=t(h)}if(y!==null)var $e=!0;else{var rt=t(m);rt!==null&&te(N,rt.startTime-fe),$e=!1}return $e}finally{y=null,x=ce,M=!1}}var F=!1,z=null,w=-1,I=5,q=-1;function k(){return!(s.unstable_now()-q<I)}function Z(){if(z!==null){var se=s.unstable_now();q=se;var fe=!0;try{fe=z(!0,se)}finally{fe?le():(F=!1,z=null)}}else F=!1}var le;if(typeof D=="function")le=function(){D(Z)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,j=pe.port2;pe.port1.onmessage=Z,le=function(){j.postMessage(null)}}else le=function(){S(Z,0)};function oe(se){z=se,F||(F=!0,le())}function te(se,fe){w=S(function(){se(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(se){se.callback=null},s.unstable_continueExecution=function(){C||M||(C=!0,oe(H))},s.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<se?Math.floor(1e3/se):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(se){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var ce=x;x=fe;try{return se()}finally{x=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(se,fe){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ce=x;x=se;try{return fe()}finally{x=ce}},s.unstable_scheduleCallback=function(se,fe,ce){var G=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?G+ce:G):ce=G,se){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ce+ne,se={id:v++,callback:fe,priorityLevel:se,startTime:ce,expirationTime:ne,sortIndex:-1},ce>G?(se.sortIndex=ce,e(m,se),t(h)===null&&se===t(m)&&(L?(_(w),w=-1):L=!0,te(N,ce-G))):(se.sortIndex=ne,e(h,se),C||M||(C=!0,oe(H))),se},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(se){var fe=x;return function(){var ce=x;x=fe;try{return se.apply(this,arguments)}finally{x=ce}}}})(Zu)),Zu}var _m;function gv(){return _m||(_m=1,Ku.exports=mv()),Ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function xv(){if(ym)return fi;ym=1;var s=Pf(),e=gv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function x(n){return h.call(y,n)?!0:h.call(v,n)?!1:m.test(n)?y[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function C(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function L(n,i,a,c,d,g,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new L(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new L(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new L(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new L(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new L(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new L(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new L(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new L(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new L(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,D);S[i]=new L(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,D);S[i]=new L(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,D);S[i]=new L(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new L(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new L(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(C(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),F=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),k=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),se=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=se&&n[se]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,G;function ne(n){if(G===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);G=i&&i[1]||""}return`
`+G+n}var $e=!1;function rt(n,i){if(!n||$e)return"";$e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var c=me}Reflect.construct(n,[],i)}else{try{i.call()}catch(me){c=me}n.call(i.prototype)}else{try{throw Error()}catch(me){c=me}n()}}catch(me){if(me&&c&&typeof me.stack=="string"){for(var d=me.stack.split(`
`),g=c.stack.split(`
`),A=d.length-1,V=g.length-1;1<=A&&0<=V&&d[A]!==g[V];)V--;for(;1<=A&&0<=V;A--,V--)if(d[A]!==g[V]){if(A!==1||V!==1)do if(A--,V--,0>V||d[A]!==g[V]){var $=`
`+d[A].replace(" at new "," at ");return n.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",n.displayName)),$}while(1<=A&&0<=V);break}}}finally{$e=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function Ue(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=rt(n.type,!1),n;case 11:return n=rt(n.type.render,!1),n;case 1:return n=rt(n.type,!0),n;default:return""}}function de(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case F:return"Portal";case I:return"Profiler";case w:return"StrictMode";case le:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case q:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:de(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return de(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ot(n){var i=ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function et(n){n._valueTracker||(n._valueTracker=ot(n))}function wt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function yt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Et(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function jt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bt(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Bt(n,i){bt(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?en(n,i.type,a):i.hasOwnProperty("defaultValue")&&en(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Rt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function en(n,i,a){(i!=="number"||yt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var J=Array.isArray;function Lt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function _t(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ft(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(J(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function We(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ot(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?U(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,Ee=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ne(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(n){je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Be[i]=Be[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Be.hasOwnProperty(n)&&Be[n]?(""+i).trim():i+"px"}function Se(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var tt=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(n,i){if(i){if(tt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Te(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function dt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Nt=null,ft=null,B=null;function ze(n){if(n=Ha(n)){if(typeof Nt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ko(i),Nt(n.stateNode,n.type,i))}}function ge(n){ft?B?B.push(n):B=[n]:ft=n}function it(){if(ft){var n=ft,i=B;if(B=ft=null,ze(n),i)for(n=0;n<i.length;n++)ze(i[n])}}function Le(n,i){return n(i)}function ve(){}var Qe=!1;function vt(n,i,a){if(Qe)return n(i,a);Qe=!0;try{return Le(n,i,a)}finally{Qe=!1,(ft!==null||B!==null)&&(ve(),it())}}function Ht(n,i){var a=n.stateNode;if(a===null)return null;var c=ko(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Yt=!1;if(f)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Yt=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Yt=!1}function Bn(n,i,a,c,d,g,A,V,$){var me=Array.prototype.slice.call(arguments,3);try{i.apply(a,me)}catch(Oe){this.onError(Oe)}}var mi=!1,Ji=null,ki=!1,Dn=null,Jn={onError:function(n){mi=!0,Ji=n}};function Bi(n,i,a,c,d,g,A,V,$){mi=!1,Ji=null,Bn.apply(Jn,arguments)}function si(n,i,a,c,d,g,A,V,$){if(Bi.apply(this,arguments),mi){if(mi){var me=Ji;mi=!1,Ji=null}else throw Error(t(198));ki||(ki=!0,Dn=me)}}function Sn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Qn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function zi(n){if(Sn(n)!==n)throw Error(t(188))}function bi(n){var i=n.alternate;if(!i){if(i=Sn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return zi(d),n;if(g===c)return zi(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var A=!1,V=d.child;V;){if(V===a){A=!0,a=d,c=g;break}if(V===c){A=!0,c=d,a=g;break}V=V.sibling}if(!A){for(V=g.child;V;){if(V===a){A=!0,a=g,c=d;break}if(V===c){A=!0,c=g,a=d;break}V=V.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function gi(n){return n=bi(n),n!==null?ai(n):null}function ai(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ai(n);if(i!==null)return i;n=n.sibling}return null}var hr=e.unstable_scheduleCallback,Ti=e.unstable_cancelCallback,X=e.unstable_shouldYield,De=e.unstable_requestPaint,Me=e.unstable_now,qe=e.unstable_getCurrentPriorityLevel,ct=e.unstable_ImmediatePriority,T=e.unstable_UserBlockingPriority,W=e.unstable_NormalPriority,re=e.unstable_LowPriority,K=e.unstable_IdlePriority,Y=null,Ce=null;function Ge(n){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Y,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Pe,Ke=Math.log,Xe=Math.LN2;function Pe(n){return n>>>=0,n===0?32:31-(Ke(n)/Xe|0)|0}var nt=64,Je=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function kt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,A=a&268435455;if(A!==0){var V=A&~d;V!==0?c=St(V):(g&=A,g!==0&&(c=St(g)))}else A=a&~d,A!==0?c=St(A):g!==0&&(c=St(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ae(i),d=1<<a,c|=n[a],i&=~d;return c}function Kt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-Ae(g),V=1<<A,$=d[A];$===-1?((V&a)===0||(V&c)!==0)&&(d[A]=Kt(V,i)):$<=i&&(n.expiredLanes|=V),g&=~V}}function Ct(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ze(){var n=nt;return nt<<=1,(nt&4194240)===0&&(nt=64),n}function tn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Mt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ae(i),n[i]=a}function b(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ae(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function O(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ae(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var P=0;function ee(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var we,_e,Ve,lt,Qt,Pt=!1,an=[],Vt=null,on=null,dn=null,Ln=new Map,hn=new Map,Gn=[],mt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $t(n,i){switch(n){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Ln.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(i.pointerId)}}function Cn(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Ha(i),i!==null&&_e(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function os(n,i,a,c,d){switch(i){case"focusin":return Vt=Cn(Vt,n,i,a,c,d),!0;case"dragenter":return on=Cn(on,n,i,a,c,d),!0;case"mouseover":return dn=Cn(dn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Ln.set(g,Cn(Ln.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,hn.set(g,Cn(hn.get(g)||null,n,i,a,c,d)),!0}return!1}function Ca(n){var i=cs(n.target);if(i!==null){var a=Sn(i);if(a!==null){if(i=a.tag,i===13){if(i=Qn(a),i!==null){n.blockedOn=i,Qt(n.priority,function(){Ve(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ls(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=yc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Re=c,a.target.dispatchEvent(c),Re=null}else return i=Ha(a),i!==null&&_e(i),n.blockedOn=a,!1;i.shift()}return!0}function cn(n,i,a){ls(n)&&a.delete(i)}function vc(){Pt=!1,Vt!==null&&ls(Vt)&&(Vt=null),on!==null&&ls(on)&&(on=null),dn!==null&&ls(dn)&&(dn=null),Ln.forEach(cn),hn.forEach(cn)}function Ra(n,i){n.blockedOn===i&&(n.blockedOn=null,Pt||(Pt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vc)))}function Na(n){function i(d){return Ra(d,n)}if(0<an.length){Ra(an[0],n);for(var a=1;a<an.length;a++){var c=an[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Vt!==null&&Ra(Vt,n),on!==null&&Ra(on,n),dn!==null&&Ra(dn,n),Ln.forEach(i),hn.forEach(i),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)Ca(a),a.blockedOn===null&&Gn.shift()}var Fs=N.ReactCurrentBatchConfig,bo=!0;function Fg(n,i,a,c){var d=P,g=Fs.transition;Fs.transition=null;try{P=1,_c(n,i,a,c)}finally{P=d,Fs.transition=g}}function Og(n,i,a,c){var d=P,g=Fs.transition;Fs.transition=null;try{P=4,_c(n,i,a,c)}finally{P=d,Fs.transition=g}}function _c(n,i,a,c){if(bo){var d=yc(n,i,a,c);if(d===null)Oc(n,i,c,To,a),$t(n,c);else if(os(d,n,i,a,c))c.stopPropagation();else if($t(n,c),i&4&&-1<mt.indexOf(n)){for(;d!==null;){var g=Ha(d);if(g!==null&&we(g),g=yc(n,i,a,c),g===null&&Oc(n,i,c,To,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Oc(n,i,c,null,a)}}var To=null;function yc(n,i,a,c){if(To=null,n=dt(c),n=cs(n),n!==null)if(i=Sn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Qn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return To=n,null}function eh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qe()){case ct:return 1;case T:return 4;case W:case re:return 16;case K:return 536870912;default:return 16}default:return 16}}var Lr=null,Sc=null,Ao=null;function th(){if(Ao)return Ao;var n,i=Sc,a=i.length,c,d="value"in Lr?Lr.value:Lr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===d[g-c];c++);return Ao=d.slice(n,1<c?1-c:void 0)}function Co(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ro(){return!0}function nh(){return!1}function xi(n){function i(a,c,d,g,A){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(g):g[V]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ro:nh,this.isPropagationStopped=nh,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),i}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mc=xi(Os),Pa=ce({},Os,{view:0,detail:0}),kg=xi(Pa),wc,Ec,Ia,No=ce({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ia&&(Ia&&n.type==="mousemove"?(wc=n.screenX-Ia.screenX,Ec=n.screenY-Ia.screenY):Ec=wc=0,Ia=n),wc)},movementY:function(n){return"movementY"in n?n.movementY:Ec}}),ih=xi(No),Bg=ce({},No,{dataTransfer:0}),zg=xi(Bg),Vg=ce({},Pa,{relatedTarget:0}),bc=xi(Vg),Hg=ce({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),Gg=xi(Hg),jg=ce({},Os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wg=xi(jg),Xg=ce({},Os,{data:0}),rh=xi(Xg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=qg[n])?!!i[n]:!1}function Tc(){return Kg}var Zg=ce({},Pa,{key:function(n){if(n.key){var i=Yg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Co(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$g[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(n){return n.type==="keypress"?Co(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Co(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jg=xi(Zg),Qg=ce({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=xi(Qg),ex=ce({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),tx=xi(ex),nx=ce({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=xi(nx),rx=ce({},No,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=xi(rx),ax=[9,13,27,32],Ac=f&&"CompositionEvent"in window,Da=null;f&&"documentMode"in document&&(Da=document.documentMode);var ox=f&&"TextEvent"in window&&!Da,ah=f&&(!Ac||Da&&8<Da&&11>=Da),oh=" ",lh=!1;function ch(n,i){switch(n){case"keyup":return ax.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ks=!1;function lx(n,i){switch(n){case"compositionend":return uh(i);case"keypress":return i.which!==32?null:(lh=!0,oh);case"textInput":return n=i.data,n===oh&&lh?null:n;default:return null}}function cx(n,i){if(ks)return n==="compositionend"||!Ac&&ch(n,i)?(n=th(),Ao=Sc=Lr=null,ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ah&&i.locale!=="ko"?null:i.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ux[n.type]:i==="textarea"}function fh(n,i,a,c){ge(c),i=Uo(i,"onChange"),0<i.length&&(a=new Mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var La=null,Ua=null;function dx(n){Nh(n,0)}function Po(n){var i=Gs(n);if(wt(i))return n}function fx(n,i){if(n==="change")return i}var hh=!1;if(f){var Cc;if(f){var Rc="oninput"in document;if(!Rc){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),Rc=typeof ph.oninput=="function"}Cc=Rc}else Cc=!1;hh=Cc&&(!document.documentMode||9<document.documentMode)}function mh(){La&&(La.detachEvent("onpropertychange",gh),Ua=La=null)}function gh(n){if(n.propertyName==="value"&&Po(Ua)){var i=[];fh(i,Ua,n,dt(n)),vt(dx,i)}}function hx(n,i,a){n==="focusin"?(mh(),La=i,Ua=a,La.attachEvent("onpropertychange",gh)):n==="focusout"&&mh()}function px(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Po(Ua)}function mx(n,i){if(n==="click")return Po(i)}function gx(n,i){if(n==="input"||n==="change")return Po(i)}function xx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Vi=typeof Object.is=="function"?Object.is:xx;function Fa(n,i){if(Vi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!Vi(n[d],i[d]))return!1}return!0}function xh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vh(n,i){var a=xh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xh(a)}}function _h(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?_h(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function yh(){for(var n=window,i=yt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=yt(n.document)}return i}function Nc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function vx(n){var i=yh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&_h(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=vh(a,g);var A=vh(a,c);d&&A&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _x=f&&"documentMode"in document&&11>=document.documentMode,Bs=null,Pc=null,Oa=null,Ic=!1;function Sh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||Bs==null||Bs!==yt(c)||(c=Bs,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Oa&&Fa(Oa,c)||(Oa=c,c=Uo(Pc,"onSelect"),0<c.length&&(i=new Mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Bs)))}function Io(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var zs={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Dc={},Mh={};f&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Do(n){if(Dc[n])return Dc[n];if(!zs[n])return n;var i=zs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mh)return Dc[n]=i[a];return n}var wh=Do("animationend"),Eh=Do("animationiteration"),bh=Do("animationstart"),Th=Do("transitionend"),Ah=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,i){Ah.set(n,i),l(i,[n])}for(var Lc=0;Lc<Ch.length;Lc++){var Uc=Ch[Lc],yx=Uc.toLowerCase(),Sx=Uc[0].toUpperCase()+Uc.slice(1);Ur(yx,"on"+Sx)}Ur(wh,"onAnimationEnd"),Ur(Eh,"onAnimationIteration"),Ur(bh,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Th,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function Rh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,si(c,i,void 0,n),n.currentTarget=null}function Nh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var A=c.length-1;0<=A;A--){var V=c[A],$=V.instance,me=V.currentTarget;if(V=V.listener,$!==g&&d.isPropagationStopped())break e;Rh(d,V,me),g=$}else for(A=0;A<c.length;A++){if(V=c[A],$=V.instance,me=V.currentTarget,V=V.listener,$!==g&&d.isPropagationStopped())break e;Rh(d,V,me),g=$}}}if(ki)throw n=Dn,ki=!1,Dn=null,n}function pn(n,i){var a=i[Gc];a===void 0&&(a=i[Gc]=new Set);var c=n+"__bubble";a.has(c)||(Ph(i,n,2,!1),a.add(c))}function Fc(n,i,a){var c=0;i&&(c|=4),Ph(a,n,c,i)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Ba(n){if(!n[Lo]){n[Lo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Mx.has(a)||Fc(a,!1,n),Fc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Lo]||(i[Lo]=!0,Fc("selectionchange",!1,i))}}function Ph(n,i,a,c){switch(eh(i)){case 1:var d=Fg;break;case 4:d=Og;break;default:d=_c}a=d.bind(null,i,a,n),d=void 0,!Yt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Oc(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var V=c.stateNode.containerInfo;if(V===d||V.nodeType===8&&V.parentNode===d)break;if(A===4)for(A=c.return;A!==null;){var $=A.tag;if(($===3||$===4)&&($=A.stateNode.containerInfo,$===d||$.nodeType===8&&$.parentNode===d))return;A=A.return}for(;V!==null;){if(A=cs(V),A===null)return;if($=A.tag,$===5||$===6){c=g=A;continue e}V=V.parentNode}}c=c.return}vt(function(){var me=g,Oe=dt(a),He=[];e:{var Fe=Ah.get(n);if(Fe!==void 0){var ut=Mc,pt=n;switch(n){case"keypress":if(Co(a)===0)break e;case"keydown":case"keyup":ut=Jg;break;case"focusin":pt="focus",ut=bc;break;case"focusout":pt="blur",ut=bc;break;case"beforeblur":case"afterblur":ut=bc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=tx;break;case wh:case Eh:case bh:ut=Gg;break;case Th:ut=ix;break;case"scroll":ut=kg;break;case"wheel":ut=sx;break;case"copy":case"cut":case"paste":ut=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=sh}var gt=(i&4)!==0,Mn=!gt&&n==="scroll",ue=gt?Fe!==null?Fe+"Capture":null:Fe;gt=[];for(var Q=me,he;Q!==null;){he=Q;var Ye=he.stateNode;if(he.tag===5&&Ye!==null&&(he=Ye,ue!==null&&(Ye=Ht(Q,ue),Ye!=null&&gt.push(za(Q,Ye,he)))),Mn)break;Q=Q.return}0<gt.length&&(Fe=new ut(Fe,pt,null,a,Oe),He.push({event:Fe,listeners:gt}))}}if((i&7)===0){e:{if(Fe=n==="mouseover"||n==="pointerover",ut=n==="mouseout"||n==="pointerout",Fe&&a!==Re&&(pt=a.relatedTarget||a.fromElement)&&(cs(pt)||pt[pr]))break e;if((ut||Fe)&&(Fe=Oe.window===Oe?Oe:(Fe=Oe.ownerDocument)?Fe.defaultView||Fe.parentWindow:window,ut?(pt=a.relatedTarget||a.toElement,ut=me,pt=pt?cs(pt):null,pt!==null&&(Mn=Sn(pt),pt!==Mn||pt.tag!==5&&pt.tag!==6)&&(pt=null)):(ut=null,pt=me),ut!==pt)){if(gt=ih,Ye="onMouseLeave",ue="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(gt=sh,Ye="onPointerLeave",ue="onPointerEnter",Q="pointer"),Mn=ut==null?Fe:Gs(ut),he=pt==null?Fe:Gs(pt),Fe=new gt(Ye,Q+"leave",ut,a,Oe),Fe.target=Mn,Fe.relatedTarget=he,Ye=null,cs(Oe)===me&&(gt=new gt(ue,Q+"enter",pt,a,Oe),gt.target=he,gt.relatedTarget=Mn,Ye=gt),Mn=Ye,ut&&pt)t:{for(gt=ut,ue=pt,Q=0,he=gt;he;he=Vs(he))Q++;for(he=0,Ye=ue;Ye;Ye=Vs(Ye))he++;for(;0<Q-he;)gt=Vs(gt),Q--;for(;0<he-Q;)ue=Vs(ue),he--;for(;Q--;){if(gt===ue||ue!==null&&gt===ue.alternate)break t;gt=Vs(gt),ue=Vs(ue)}gt=null}else gt=null;ut!==null&&Ih(He,Fe,ut,gt,!1),pt!==null&&Mn!==null&&Ih(He,Mn,pt,gt,!0)}}e:{if(Fe=me?Gs(me):window,ut=Fe.nodeName&&Fe.nodeName.toLowerCase(),ut==="select"||ut==="input"&&Fe.type==="file")var xt=fx;else if(dh(Fe))if(hh)xt=gx;else{xt=px;var Tt=hx}else(ut=Fe.nodeName)&&ut.toLowerCase()==="input"&&(Fe.type==="checkbox"||Fe.type==="radio")&&(xt=mx);if(xt&&(xt=xt(n,me))){fh(He,xt,a,Oe);break e}Tt&&Tt(n,Fe,me),n==="focusout"&&(Tt=Fe._wrapperState)&&Tt.controlled&&Fe.type==="number"&&en(Fe,"number",Fe.value)}switch(Tt=me?Gs(me):window,n){case"focusin":(dh(Tt)||Tt.contentEditable==="true")&&(Bs=Tt,Pc=me,Oa=null);break;case"focusout":Oa=Pc=Bs=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Sh(He,a,Oe);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":Sh(He,a,Oe)}var At;if(Ac)e:{switch(n){case"compositionstart":var Ut="onCompositionStart";break e;case"compositionend":Ut="onCompositionEnd";break e;case"compositionupdate":Ut="onCompositionUpdate";break e}Ut=void 0}else ks?ch(n,a)&&(Ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ut="onCompositionStart");Ut&&(ah&&a.locale!=="ko"&&(ks||Ut!=="onCompositionStart"?Ut==="onCompositionEnd"&&ks&&(At=th()):(Lr=Oe,Sc="value"in Lr?Lr.value:Lr.textContent,ks=!0)),Tt=Uo(me,Ut),0<Tt.length&&(Ut=new rh(Ut,n,null,a,Oe),He.push({event:Ut,listeners:Tt}),At?Ut.data=At:(At=uh(a),At!==null&&(Ut.data=At)))),(At=ox?lx(n,a):cx(n,a))&&(me=Uo(me,"onBeforeInput"),0<me.length&&(Oe=new rh("onBeforeInput","beforeinput",null,a,Oe),He.push({event:Oe,listeners:me}),Oe.data=At))}Nh(He,i)})}function za(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Uo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Ht(n,a),g!=null&&c.unshift(za(n,g,d)),g=Ht(n,i),g!=null&&c.push(za(n,g,d))),n=n.return}return c}function Vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ih(n,i,a,c,d){for(var g=i._reactName,A=[];a!==null&&a!==c;){var V=a,$=V.alternate,me=V.stateNode;if($!==null&&$===c)break;V.tag===5&&me!==null&&(V=me,d?($=Ht(a,g),$!=null&&A.unshift(za(a,$,V))):d||($=Ht(a,g),$!=null&&A.push(za(a,$,V)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var wx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Dh(n){return(typeof n=="string"?n:""+n).replace(wx,`
`).replace(Ex,"")}function Fo(n,i,a){if(i=Dh(i),Dh(n)!==i&&a)throw Error(t(425))}function Oo(){}var kc=null,Bc=null;function zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,Tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(n){return Lh.resolve(null).then(n).catch(Ax)}:Vc;function Ax(n){setTimeout(function(){throw n})}function Hc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Na(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Na(i)}function Fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Uh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Qi="__reactFiber$"+Hs,Va="__reactProps$"+Hs,pr="__reactContainer$"+Hs,Gc="__reactEvents$"+Hs,Cx="__reactListeners$"+Hs,Rx="__reactHandles$"+Hs;function cs(n){var i=n[Qi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[pr]||a[Qi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Uh(n);n!==null;){if(a=n[Qi])return a;n=Uh(n)}return i}n=a,a=n.parentNode}return null}function Ha(n){return n=n[Qi]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ko(n){return n[Va]||null}var jc=[],js=-1;function Or(n){return{current:n}}function mn(n){0>js||(n.current=jc[js],jc[js]=null,js--)}function fn(n,i){js++,jc[js]=n.current,n.current=i}var kr={},jn=Or(kr),oi=Or(!1),us=kr;function Ws(n,i){var a=n.type.contextTypes;if(!a)return kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function li(n){return n=n.childContextTypes,n!=null}function Bo(){mn(oi),mn(jn)}function Fh(n,i,a){if(jn.current!==kr)throw Error(t(168));fn(jn,i),fn(oi,a)}function Oh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return ce({},a,c)}function zo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,us=jn.current,fn(jn,n),fn(oi,oi.current),!0}function kh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Oh(n,i,us),c.__reactInternalMemoizedMergedChildContext=n,mn(oi),mn(jn),fn(jn,n)):mn(oi),fn(oi,a)}var mr=null,Vo=!1,Wc=!1;function Bh(n){mr===null?mr=[n]:mr.push(n)}function Nx(n){Vo=!0,Bh(n)}function Br(){if(!Wc&&mr!==null){Wc=!0;var n=0,i=P;try{var a=mr;for(P=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}mr=null,Vo=!1}catch(d){throw mr!==null&&(mr=mr.slice(n+1)),hr(ct,Br),d}finally{P=i,Wc=!1}}return null}var Xs=[],Ys=0,Ho=null,Go=0,Ai=[],Ci=0,ds=null,gr=1,xr="";function fs(n,i){Xs[Ys++]=Go,Xs[Ys++]=Ho,Ho=n,Go=i}function zh(n,i,a){Ai[Ci++]=gr,Ai[Ci++]=xr,Ai[Ci++]=ds,ds=n;var c=gr;n=xr;var d=32-Ae(c)-1;c&=~(1<<d),a+=1;var g=32-Ae(i)+d;if(30<g){var A=d-d%5;g=(c&(1<<A)-1).toString(32),c>>=A,d-=A,gr=1<<32-Ae(i)+d|a<<d|c,xr=g+n}else gr=1<<g|a<<d|c,xr=n}function Xc(n){n.return!==null&&(fs(n,1),zh(n,1,0))}function Yc(n){for(;n===Ho;)Ho=Xs[--Ys],Xs[Ys]=null,Go=Xs[--Ys],Xs[Ys]=null;for(;n===ds;)ds=Ai[--Ci],Ai[Ci]=null,xr=Ai[--Ci],Ai[Ci]=null,gr=Ai[--Ci],Ai[Ci]=null}var vi=null,_i=null,gn=!1,Hi=null;function Vh(n,i){var a=Ii(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Hh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,vi=n,_i=Fr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,vi=n,_i=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ds!==null?{id:gr,overflow:xr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ii(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,vi=n,_i=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qc(n){if(gn){var i=_i;if(i){var a=i;if(!Hh(n,i)){if($c(n))throw Error(t(418));i=Fr(a.nextSibling);var c=vi;i&&Hh(n,i)?Vh(c,a):(n.flags=n.flags&-4097|2,gn=!1,vi=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,gn=!1,vi=n}}}function Gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vi=n}function jo(n){if(n!==vi)return!1;if(!gn)return Gh(n),gn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!zc(n.type,n.memoizedProps)),i&&(i=_i)){if($c(n))throw jh(),Error(t(418));for(;i;)Vh(n,i),i=Fr(i.nextSibling)}if(Gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){_i=Fr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}_i=null}}else _i=vi?Fr(n.stateNode.nextSibling):null;return!0}function jh(){for(var n=_i;n;)n=Fr(n.nextSibling)}function $s(){_i=vi=null,gn=!1}function Kc(n){Hi===null?Hi=[n]:Hi.push(n)}var Px=N.ReactCurrentBatchConfig;function Ga(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(A){var V=d.refs;A===null?delete V[g]:V[g]=A},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Wh(n){var i=n._init;return i(n._payload)}function Xh(n){function i(ue,Q){if(n){var he=ue.deletions;he===null?(ue.deletions=[Q],ue.flags|=16):he.push(Q)}}function a(ue,Q){if(!n)return null;for(;Q!==null;)i(ue,Q),Q=Q.sibling;return null}function c(ue,Q){for(ue=new Map;Q!==null;)Q.key!==null?ue.set(Q.key,Q):ue.set(Q.index,Q),Q=Q.sibling;return ue}function d(ue,Q){return ue=Yr(ue,Q),ue.index=0,ue.sibling=null,ue}function g(ue,Q,he){return ue.index=he,n?(he=ue.alternate,he!==null?(he=he.index,he<Q?(ue.flags|=2,Q):he):(ue.flags|=2,Q)):(ue.flags|=1048576,Q)}function A(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,Q,he,Ye){return Q===null||Q.tag!==6?(Q=Vu(he,ue.mode,Ye),Q.return=ue,Q):(Q=d(Q,he),Q.return=ue,Q)}function $(ue,Q,he,Ye){var xt=he.type;return xt===z?Oe(ue,Q,he.props.children,Ye,he.key):Q!==null&&(Q.elementType===xt||typeof xt=="object"&&xt!==null&&xt.$$typeof===oe&&Wh(xt)===Q.type)?(Ye=d(Q,he.props),Ye.ref=Ga(ue,Q,he),Ye.return=ue,Ye):(Ye=ml(he.type,he.key,he.props,null,ue.mode,Ye),Ye.ref=Ga(ue,Q,he),Ye.return=ue,Ye)}function me(ue,Q,he,Ye){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==he.containerInfo||Q.stateNode.implementation!==he.implementation?(Q=Hu(he,ue.mode,Ye),Q.return=ue,Q):(Q=d(Q,he.children||[]),Q.return=ue,Q)}function Oe(ue,Q,he,Ye,xt){return Q===null||Q.tag!==7?(Q=ys(he,ue.mode,Ye,xt),Q.return=ue,Q):(Q=d(Q,he),Q.return=ue,Q)}function He(ue,Q,he){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=Vu(""+Q,ue.mode,he),Q.return=ue,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case H:return he=ml(Q.type,Q.key,Q.props,null,ue.mode,he),he.ref=Ga(ue,null,Q),he.return=ue,he;case F:return Q=Hu(Q,ue.mode,he),Q.return=ue,Q;case oe:var Ye=Q._init;return He(ue,Ye(Q._payload),he)}if(J(Q)||fe(Q))return Q=ys(Q,ue.mode,he,null),Q.return=ue,Q;Wo(ue,Q)}return null}function Fe(ue,Q,he,Ye){var xt=Q!==null?Q.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return xt!==null?null:V(ue,Q,""+he,Ye);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case H:return he.key===xt?$(ue,Q,he,Ye):null;case F:return he.key===xt?me(ue,Q,he,Ye):null;case oe:return xt=he._init,Fe(ue,Q,xt(he._payload),Ye)}if(J(he)||fe(he))return xt!==null?null:Oe(ue,Q,he,Ye,null);Wo(ue,he)}return null}function ut(ue,Q,he,Ye,xt){if(typeof Ye=="string"&&Ye!==""||typeof Ye=="number")return ue=ue.get(he)||null,V(Q,ue,""+Ye,xt);if(typeof Ye=="object"&&Ye!==null){switch(Ye.$$typeof){case H:return ue=ue.get(Ye.key===null?he:Ye.key)||null,$(Q,ue,Ye,xt);case F:return ue=ue.get(Ye.key===null?he:Ye.key)||null,me(Q,ue,Ye,xt);case oe:var Tt=Ye._init;return ut(ue,Q,he,Tt(Ye._payload),xt)}if(J(Ye)||fe(Ye))return ue=ue.get(he)||null,Oe(Q,ue,Ye,xt,null);Wo(Q,Ye)}return null}function pt(ue,Q,he,Ye){for(var xt=null,Tt=null,At=Q,Ut=Q=0,On=null;At!==null&&Ut<he.length;Ut++){At.index>Ut?(On=At,At=null):On=At.sibling;var sn=Fe(ue,At,he[Ut],Ye);if(sn===null){At===null&&(At=On);break}n&&At&&sn.alternate===null&&i(ue,At),Q=g(sn,Q,Ut),Tt===null?xt=sn:Tt.sibling=sn,Tt=sn,At=On}if(Ut===he.length)return a(ue,At),gn&&fs(ue,Ut),xt;if(At===null){for(;Ut<he.length;Ut++)At=He(ue,he[Ut],Ye),At!==null&&(Q=g(At,Q,Ut),Tt===null?xt=At:Tt.sibling=At,Tt=At);return gn&&fs(ue,Ut),xt}for(At=c(ue,At);Ut<he.length;Ut++)On=ut(At,ue,Ut,he[Ut],Ye),On!==null&&(n&&On.alternate!==null&&At.delete(On.key===null?Ut:On.key),Q=g(On,Q,Ut),Tt===null?xt=On:Tt.sibling=On,Tt=On);return n&&At.forEach(function($r){return i(ue,$r)}),gn&&fs(ue,Ut),xt}function gt(ue,Q,he,Ye){var xt=fe(he);if(typeof xt!="function")throw Error(t(150));if(he=xt.call(he),he==null)throw Error(t(151));for(var Tt=xt=null,At=Q,Ut=Q=0,On=null,sn=he.next();At!==null&&!sn.done;Ut++,sn=he.next()){At.index>Ut?(On=At,At=null):On=At.sibling;var $r=Fe(ue,At,sn.value,Ye);if($r===null){At===null&&(At=On);break}n&&At&&$r.alternate===null&&i(ue,At),Q=g($r,Q,Ut),Tt===null?xt=$r:Tt.sibling=$r,Tt=$r,At=On}if(sn.done)return a(ue,At),gn&&fs(ue,Ut),xt;if(At===null){for(;!sn.done;Ut++,sn=he.next())sn=He(ue,sn.value,Ye),sn!==null&&(Q=g(sn,Q,Ut),Tt===null?xt=sn:Tt.sibling=sn,Tt=sn);return gn&&fs(ue,Ut),xt}for(At=c(ue,At);!sn.done;Ut++,sn=he.next())sn=ut(At,ue,Ut,sn.value,Ye),sn!==null&&(n&&sn.alternate!==null&&At.delete(sn.key===null?Ut:sn.key),Q=g(sn,Q,Ut),Tt===null?xt=sn:Tt.sibling=sn,Tt=sn);return n&&At.forEach(function(uv){return i(ue,uv)}),gn&&fs(ue,Ut),xt}function Mn(ue,Q,he,Ye){if(typeof he=="object"&&he!==null&&he.type===z&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case H:e:{for(var xt=he.key,Tt=Q;Tt!==null;){if(Tt.key===xt){if(xt=he.type,xt===z){if(Tt.tag===7){a(ue,Tt.sibling),Q=d(Tt,he.props.children),Q.return=ue,ue=Q;break e}}else if(Tt.elementType===xt||typeof xt=="object"&&xt!==null&&xt.$$typeof===oe&&Wh(xt)===Tt.type){a(ue,Tt.sibling),Q=d(Tt,he.props),Q.ref=Ga(ue,Tt,he),Q.return=ue,ue=Q;break e}a(ue,Tt);break}else i(ue,Tt);Tt=Tt.sibling}he.type===z?(Q=ys(he.props.children,ue.mode,Ye,he.key),Q.return=ue,ue=Q):(Ye=ml(he.type,he.key,he.props,null,ue.mode,Ye),Ye.ref=Ga(ue,Q,he),Ye.return=ue,ue=Ye)}return A(ue);case F:e:{for(Tt=he.key;Q!==null;){if(Q.key===Tt)if(Q.tag===4&&Q.stateNode.containerInfo===he.containerInfo&&Q.stateNode.implementation===he.implementation){a(ue,Q.sibling),Q=d(Q,he.children||[]),Q.return=ue,ue=Q;break e}else{a(ue,Q);break}else i(ue,Q);Q=Q.sibling}Q=Hu(he,ue.mode,Ye),Q.return=ue,ue=Q}return A(ue);case oe:return Tt=he._init,Mn(ue,Q,Tt(he._payload),Ye)}if(J(he))return pt(ue,Q,he,Ye);if(fe(he))return gt(ue,Q,he,Ye);Wo(ue,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,Q!==null&&Q.tag===6?(a(ue,Q.sibling),Q=d(Q,he),Q.return=ue,ue=Q):(a(ue,Q),Q=Vu(he,ue.mode,Ye),Q.return=ue,ue=Q),A(ue)):a(ue,Q)}return Mn}var qs=Xh(!0),Yh=Xh(!1),Xo=Or(null),Yo=null,Ks=null,Zc=null;function Jc(){Zc=Ks=Yo=null}function Qc(n){var i=Xo.current;mn(Xo),n._currentValue=i}function eu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Zs(n,i){Yo=n,Zc=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ci=!0),n.firstContext=null)}function Ri(n){var i=n._currentValue;if(Zc!==n)if(n={context:n,memoizedValue:i,next:null},Ks===null){if(Yo===null)throw Error(t(308));Ks=n,Yo.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return i}var hs=null;function tu(n){hs===null?hs=[n]:hs.push(n)}function $h(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,tu(i)):(a.next=d.next,d.next=a),i.interleaved=a,vr(n,c)}function vr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var zr=!1;function nu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Vr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(nn&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,vr(n,a)}return d=c.interleaved,d===null?(i.next=i,tu(c)):(i.next=d.next,d.next=i),c.interleaved=i,vr(n,a)}function $o(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,O(n,a)}}function Kh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=A:g=g.next=A,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qo(n,i,a,c){var d=n.updateQueue;zr=!1;var g=d.firstBaseUpdate,A=d.lastBaseUpdate,V=d.shared.pending;if(V!==null){d.shared.pending=null;var $=V,me=$.next;$.next=null,A===null?g=me:A.next=me,A=$;var Oe=n.alternate;Oe!==null&&(Oe=Oe.updateQueue,V=Oe.lastBaseUpdate,V!==A&&(V===null?Oe.firstBaseUpdate=me:V.next=me,Oe.lastBaseUpdate=$))}if(g!==null){var He=d.baseState;A=0,Oe=me=$=null,V=g;do{var Fe=V.lane,ut=V.eventTime;if((c&Fe)===Fe){Oe!==null&&(Oe=Oe.next={eventTime:ut,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var pt=n,gt=V;switch(Fe=i,ut=a,gt.tag){case 1:if(pt=gt.payload,typeof pt=="function"){He=pt.call(ut,He,Fe);break e}He=pt;break e;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=gt.payload,Fe=typeof pt=="function"?pt.call(ut,He,Fe):pt,Fe==null)break e;He=ce({},He,Fe);break e;case 2:zr=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Fe=d.effects,Fe===null?d.effects=[V]:Fe.push(V))}else ut={eventTime:ut,lane:Fe,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Oe===null?(me=Oe=ut,$=He):Oe=Oe.next=ut,A|=Fe;if(V=V.next,V===null){if(V=d.shared.pending,V===null)break;Fe=V,V=Fe.next,Fe.next=null,d.lastBaseUpdate=Fe,d.shared.pending=null}}while(!0);if(Oe===null&&($=He),d.baseState=$,d.firstBaseUpdate=me,d.lastBaseUpdate=Oe,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);gs|=A,n.lanes=A,n.memoizedState=He}}function Zh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ja={},er=Or(ja),Wa=Or(ja),Xa=Or(ja);function ps(n){if(n===ja)throw Error(t(174));return n}function iu(n,i){switch(fn(Xa,i),fn(Wa,n),fn(er,ja),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}mn(er),fn(er,i)}function Js(){mn(er),mn(Wa),mn(Xa)}function Jh(n){ps(Xa.current);var i=ps(er.current),a=E(i,n.type);i!==a&&(fn(Wa,n),fn(er,a))}function ru(n){Wa.current===n&&(mn(er),mn(Wa))}var xn=Or(0);function Ko(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var su=[];function au(){for(var n=0;n<su.length;n++)su[n]._workInProgressVersionPrimary=null;su.length=0}var Zo=N.ReactCurrentDispatcher,ou=N.ReactCurrentBatchConfig,ms=0,vn=null,Rn=null,Un=null,Jo=!1,Ya=!1,$a=0,Ix=0;function Wn(){throw Error(t(321))}function lu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Vi(n[a],i[a]))return!1;return!0}function cu(n,i,a,c,d,g){if(ms=g,vn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Zo.current=n===null||n.memoizedState===null?Fx:Ox,n=a(c,d),Ya){g=0;do{if(Ya=!1,$a=0,25<=g)throw Error(t(301));g+=1,Un=Rn=null,i.updateQueue=null,Zo.current=kx,n=a(c,d)}while(Ya)}if(Zo.current=tl,i=Rn!==null&&Rn.next!==null,ms=0,Un=Rn=vn=null,Jo=!1,i)throw Error(t(300));return n}function uu(){var n=$a!==0;return $a=0,n}function tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Un===null?vn.memoizedState=Un=n:Un=Un.next=n,Un}function Ni(){if(Rn===null){var n=vn.alternate;n=n!==null?n.memoizedState:null}else n=Rn.next;var i=Un===null?vn.memoizedState:Un.next;if(i!==null)Un=i,Rn=n;else{if(n===null)throw Error(t(310));Rn=n,n={memoizedState:Rn.memoizedState,baseState:Rn.baseState,baseQueue:Rn.baseQueue,queue:Rn.queue,next:null},Un===null?vn.memoizedState=Un=n:Un=Un.next=n}return Un}function qa(n,i){return typeof i=="function"?i(n):i}function du(n){var i=Ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Rn,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var A=d.next;d.next=g.next,g.next=A}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var V=A=null,$=null,me=g;do{var Oe=me.lane;if((ms&Oe)===Oe)$!==null&&($=$.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),c=me.hasEagerState?me.eagerState:n(c,me.action);else{var He={lane:Oe,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};$===null?(V=$=He,A=c):$=$.next=He,vn.lanes|=Oe,gs|=Oe}me=me.next}while(me!==null&&me!==g);$===null?A=c:$.next=V,Vi(c,i.memoizedState)||(ci=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=$,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,vn.lanes|=g,gs|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function fu(n){var i=Ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var A=d=d.next;do g=n(g,A.action),A=A.next;while(A!==d);Vi(g,i.memoizedState)||(ci=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Qh(){}function ep(n,i){var a=vn,c=Ni(),d=i(),g=!Vi(c.memoizedState,d);if(g&&(c.memoizedState=d,ci=!0),c=c.queue,hu(ip.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Un!==null&&Un.memoizedState.tag&1){if(a.flags|=2048,Ka(9,np.bind(null,a,c,d,i),void 0,null),Fn===null)throw Error(t(349));(ms&30)!==0||tp(a,i,d)}return d}function tp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=vn.updateQueue,i===null?(i={lastEffect:null,stores:null},vn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function np(n,i,a,c){i.value=a,i.getSnapshot=c,rp(i)&&sp(n)}function ip(n,i,a){return a(function(){rp(i)&&sp(n)})}function rp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Vi(n,a)}catch{return!0}}function sp(n){var i=vr(n,1);i!==null&&Xi(i,n,1,-1)}function ap(n){var i=tr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},i.queue=n,n=n.dispatch=Ux.bind(null,vn,n),[i.memoizedState,n]}function Ka(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=vn.updateQueue,i===null?(i={lastEffect:null,stores:null},vn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function op(){return Ni().memoizedState}function Qo(n,i,a,c){var d=tr();vn.flags|=n,d.memoizedState=Ka(1|i,a,void 0,c===void 0?null:c)}function el(n,i,a,c){var d=Ni();c=c===void 0?null:c;var g=void 0;if(Rn!==null){var A=Rn.memoizedState;if(g=A.destroy,c!==null&&lu(c,A.deps)){d.memoizedState=Ka(i,a,g,c);return}}vn.flags|=n,d.memoizedState=Ka(1|i,a,g,c)}function lp(n,i){return Qo(8390656,8,n,i)}function hu(n,i){return el(2048,8,n,i)}function cp(n,i){return el(4,2,n,i)}function up(n,i){return el(4,4,n,i)}function dp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function fp(n,i,a){return a=a!=null?a.concat([n]):null,el(4,4,dp.bind(null,i,n),a)}function pu(){}function hp(n,i){var a=Ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function pp(n,i){var a=Ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function mp(n,i,a){return(ms&21)===0?(n.baseState&&(n.baseState=!1,ci=!0),n.memoizedState=a):(Vi(a,i)||(a=Ze(),vn.lanes|=a,gs|=a,n.baseState=!0),i)}function Dx(n,i){var a=P;P=a!==0&&4>a?a:4,n(!0);var c=ou.transition;ou.transition={};try{n(!1),i()}finally{P=a,ou.transition=c}}function gp(){return Ni().memoizedState}function Lx(n,i,a){var c=Wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},xp(n))vp(i,a);else if(a=$h(n,i,a,c),a!==null){var d=ti();Xi(a,n,c,d),_p(a,i,c)}}function Ux(n,i,a){var c=Wr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(xp(n))vp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var A=i.lastRenderedState,V=g(A,a);if(d.hasEagerState=!0,d.eagerState=V,Vi(V,A)){var $=i.interleaved;$===null?(d.next=d,tu(i)):(d.next=$.next,$.next=d),i.interleaved=d;return}}catch{}finally{}a=$h(n,i,d,c),a!==null&&(d=ti(),Xi(a,n,c,d),_p(a,i,c))}}function xp(n){var i=n.alternate;return n===vn||i!==null&&i===vn}function vp(n,i){Ya=Jo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function _p(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,O(n,a)}}var tl={readContext:Ri,useCallback:Wn,useContext:Wn,useEffect:Wn,useImperativeHandle:Wn,useInsertionEffect:Wn,useLayoutEffect:Wn,useMemo:Wn,useReducer:Wn,useRef:Wn,useState:Wn,useDebugValue:Wn,useDeferredValue:Wn,useTransition:Wn,useMutableSource:Wn,useSyncExternalStore:Wn,useId:Wn,unstable_isNewReconciler:!1},Fx={readContext:Ri,useCallback:function(n,i){return tr().memoizedState=[n,i===void 0?null:i],n},useContext:Ri,useEffect:lp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Qo(4194308,4,dp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qo(4,2,n,i)},useMemo:function(n,i){var a=tr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=tr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Lx.bind(null,vn,n),[c.memoizedState,n]},useRef:function(n){var i=tr();return n={current:n},i.memoizedState=n},useState:ap,useDebugValue:pu,useDeferredValue:function(n){return tr().memoizedState=n},useTransition:function(){var n=ap(!1),i=n[0];return n=Dx.bind(null,n[1]),tr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=vn,d=tr();if(gn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Fn===null)throw Error(t(349));(ms&30)!==0||tp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,lp(ip.bind(null,c,g,n),[n]),c.flags|=2048,Ka(9,np.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=tr(),i=Fn.identifierPrefix;if(gn){var a=xr,c=gr;a=(c&~(1<<32-Ae(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=$a++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ix++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ox={readContext:Ri,useCallback:hp,useContext:Ri,useEffect:hu,useImperativeHandle:fp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:du,useRef:op,useState:function(){return du(qa)},useDebugValue:pu,useDeferredValue:function(n){var i=Ni();return mp(i,Rn.memoizedState,n)},useTransition:function(){var n=du(qa)[0],i=Ni().memoizedState;return[n,i]},useMutableSource:Qh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1},kx={readContext:Ri,useCallback:hp,useContext:Ri,useEffect:hu,useImperativeHandle:fp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:fu,useRef:op,useState:function(){return fu(qa)},useDebugValue:pu,useDeferredValue:function(n){var i=Ni();return Rn===null?i.memoizedState=n:mp(i,Rn.memoizedState,n)},useTransition:function(){var n=fu(qa)[0],i=Ni().memoizedState;return[n,i]},useMutableSource:Qh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1};function Gi(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function mu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nl={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=ti(),d=Wr(n),g=_r(c,d);g.payload=i,a!=null&&(g.callback=a),i=Vr(n,g,d),i!==null&&(Xi(i,n,d,c),$o(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=ti(),d=Wr(n),g=_r(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Vr(n,g,d),i!==null&&(Xi(i,n,d,c),$o(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ti(),c=Wr(n),d=_r(a,c);d.tag=2,i!=null&&(d.callback=i),i=Vr(n,d,c),i!==null&&(Xi(i,n,c,a),$o(i,n,c))}};function yp(n,i,a,c,d,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):i.prototype&&i.prototype.isPureReactComponent?!Fa(a,c)||!Fa(d,g):!0}function Sp(n,i,a){var c=!1,d=kr,g=i.contextType;return typeof g=="object"&&g!==null?g=Ri(g):(d=li(i)?us:jn.current,c=i.contextTypes,g=(c=c!=null)?Ws(n,d):kr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Mp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&nl.enqueueReplaceState(i,i.state,null)}function gu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},nu(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Ri(g):(g=li(i)?us:jn.current,d.context=Ws(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(mu(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&nl.enqueueReplaceState(d,d.state,null),qo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Qs(n,i){try{var a="",c=i;do a+=Ue(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function xu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function vu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Bx=typeof WeakMap=="function"?WeakMap:Map;function wp(n,i,a){a=_r(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){cl||(cl=!0,Du=c),vu(n,i)},a}function Ep(n,i,a){a=_r(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){vu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){vu(n,i),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function bp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Bx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Qx.bind(null,n,i,a),i.then(n,n))}function Tp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ap(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=_r(-1,1),i.tag=2,Vr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var zx=N.ReactCurrentOwner,ci=!1;function ei(n,i,a,c){i.child=n===null?Yh(i,null,a,c):qs(i,n.child,a,c)}function Cp(n,i,a,c,d){a=a.render;var g=i.ref;return Zs(i,d),c=cu(n,i,a,c,g,d),a=uu(),n!==null&&!ci?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,yr(n,i,d)):(gn&&a&&Xc(i),i.flags|=1,ei(n,i,c,d),i.child)}function Rp(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!zu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Np(n,i,g,c,d)):(n=ml(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var A=g.memoizedProps;if(a=a.compare,a=a!==null?a:Fa,a(A,c)&&n.ref===i.ref)return yr(n,i,d)}return i.flags|=1,n=Yr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Np(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(Fa(g,c)&&n.ref===i.ref)if(ci=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(ci=!0);else return i.lanes=n.lanes,yr(n,i,d)}return _u(n,i,a,c,d)}function Pp(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},fn(ta,yi),yi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,fn(ta,yi),yi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,fn(ta,yi),yi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,fn(ta,yi),yi|=c;return ei(n,i,d,a),i.child}function Ip(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function _u(n,i,a,c,d){var g=li(a)?us:jn.current;return g=Ws(i,g),Zs(i,d),a=cu(n,i,a,c,g,d),c=uu(),n!==null&&!ci?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,yr(n,i,d)):(gn&&c&&Xc(i),i.flags|=1,ei(n,i,a,d),i.child)}function Dp(n,i,a,c,d){if(li(a)){var g=!0;zo(i)}else g=!1;if(Zs(i,d),i.stateNode===null)rl(n,i),Sp(i,a,c),gu(i,a,c,d),c=!0;else if(n===null){var A=i.stateNode,V=i.memoizedProps;A.props=V;var $=A.context,me=a.contextType;typeof me=="object"&&me!==null?me=Ri(me):(me=li(a)?us:jn.current,me=Ws(i,me));var Oe=a.getDerivedStateFromProps,He=typeof Oe=="function"||typeof A.getSnapshotBeforeUpdate=="function";He||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(V!==c||$!==me)&&Mp(i,A,c,me),zr=!1;var Fe=i.memoizedState;A.state=Fe,qo(i,c,A,d),$=i.memoizedState,V!==c||Fe!==$||oi.current||zr?(typeof Oe=="function"&&(mu(i,a,Oe,c),$=i.memoizedState),(V=zr||yp(i,a,V,c,Fe,$,me))?(He||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=$),A.props=c,A.state=$,A.context=me,c=V):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,qh(n,i),V=i.memoizedProps,me=i.type===i.elementType?V:Gi(i.type,V),A.props=me,He=i.pendingProps,Fe=A.context,$=a.contextType,typeof $=="object"&&$!==null?$=Ri($):($=li(a)?us:jn.current,$=Ws(i,$));var ut=a.getDerivedStateFromProps;(Oe=typeof ut=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(V!==He||Fe!==$)&&Mp(i,A,c,$),zr=!1,Fe=i.memoizedState,A.state=Fe,qo(i,c,A,d);var pt=i.memoizedState;V!==He||Fe!==pt||oi.current||zr?(typeof ut=="function"&&(mu(i,a,ut,c),pt=i.memoizedState),(me=zr||yp(i,a,me,c,Fe,pt,$)||!1)?(Oe||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,pt,$),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,pt,$)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||V===n.memoizedProps&&Fe===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Fe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=pt),A.props=c,A.state=pt,A.context=$,c=me):(typeof A.componentDidUpdate!="function"||V===n.memoizedProps&&Fe===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Fe===n.memoizedState||(i.flags|=1024),c=!1)}return yu(n,i,a,c,g,d)}function yu(n,i,a,c,d,g){Ip(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return d&&kh(i,a,!1),yr(n,i,g);c=i.stateNode,zx.current=i;var V=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=qs(i,n.child,null,g),i.child=qs(i,null,V,g)):ei(n,i,V,g),i.memoizedState=c.state,d&&kh(i,a,!0),i.child}function Lp(n){var i=n.stateNode;i.pendingContext?Fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Fh(n,i.context,!1),iu(n,i.containerInfo)}function Up(n,i,a,c,d){return $s(),Kc(d),i.flags|=256,ei(n,i,a,c),i.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fp(n,i,a){var c=i.pendingProps,d=xn.current,g=!1,A=(i.flags&128)!==0,V;if((V=A)||(V=n!==null&&n.memoizedState===null?!1:(d&2)!==0),V?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),fn(xn,d&1),n===null)return qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=i.mode,g=i.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=gl(A,c,0,null),n=ys(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Mu(a),i.memoizedState=Su,n):wu(i,A));if(d=n.memoizedState,d!==null&&(V=d.dehydrated,V!==null))return Vx(n,i,A,c,V,d,a);if(g){g=c.fallback,A=i.mode,d=n.child,V=d.sibling;var $={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=$,i.deletions=null):(c=Yr(d,$),c.subtreeFlags=d.subtreeFlags&14680064),V!==null?g=Yr(V,g):(g=ys(g,A,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,A=n.child.memoizedState,A=A===null?Mu(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~a,i.memoizedState=Su,c}return g=n.child,n=g.sibling,c=Yr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function wu(n,i){return i=gl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function il(n,i,a,c){return c!==null&&Kc(c),qs(i,n.child,null,a),n=wu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Vx(n,i,a,c,d,g,A){if(a)return i.flags&256?(i.flags&=-257,c=xu(Error(t(422))),il(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=gl({mode:"visible",children:c.children},d,0,null),g=ys(g,d,A,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&qs(i,n.child,null,A),i.child.memoizedState=Mu(A),i.memoizedState=Su,g);if((i.mode&1)===0)return il(n,i,A,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var V=c.dgst;return c=V,g=Error(t(419)),c=xu(g,c,void 0),il(n,i,A,c)}if(V=(A&n.childLanes)!==0,ci||V){if(c=Fn,c!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|A))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,vr(n,d),Xi(c,n,d,-1))}return Bu(),c=xu(Error(t(421))),il(n,i,A,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=ev.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,_i=Fr(d.nextSibling),vi=i,gn=!0,Hi=null,n!==null&&(Ai[Ci++]=gr,Ai[Ci++]=xr,Ai[Ci++]=ds,gr=n.id,xr=n.overflow,ds=i),i=wu(i,c.children),i.flags|=4096,i)}function Op(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),eu(n.return,i,a)}function Eu(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function kp(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(ei(n,i,c.children,a),c=xn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Op(n,a,i);else if(n.tag===19)Op(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(fn(xn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Ko(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Eu(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ko(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Eu(i,!0,a,null,g);break;case"together":Eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function rl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function yr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),gs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Yr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Yr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Hx(n,i,a){switch(i.tag){case 3:Lp(i),$s();break;case 5:Jh(i);break;case 1:li(i.type)&&zo(i);break;case 4:iu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;fn(Xo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(fn(xn,xn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Fp(n,i,a):(fn(xn,xn.current&1),n=yr(n,i,a),n!==null?n.sibling:null);fn(xn,xn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return kp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),fn(xn,xn.current),c)break;return null;case 22:case 23:return i.lanes=0,Pp(n,i,a)}return yr(n,i,a)}var Bp,bu,zp,Vp;Bp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},bu=function(){},zp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ps(er.current);var g=null;switch(a){case"input":d=Et(n,d),c=Et(n,c),g=[];break;case"select":d=ce({},d,{value:void 0}),c=ce({},c,{value:void 0}),g=[];break;case"textarea":d=_t(n,d),c=_t(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Oo)}st(a,c);var A;a=null;for(me in d)if(!c.hasOwnProperty(me)&&d.hasOwnProperty(me)&&d[me]!=null)if(me==="style"){var V=d[me];for(A in V)V.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(o.hasOwnProperty(me)?g||(g=[]):(g=g||[]).push(me,null));for(me in c){var $=c[me];if(V=d!=null?d[me]:void 0,c.hasOwnProperty(me)&&$!==V&&($!=null||V!=null))if(me==="style")if(V){for(A in V)!V.hasOwnProperty(A)||$&&$.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in $)$.hasOwnProperty(A)&&V[A]!==$[A]&&(a||(a={}),a[A]=$[A])}else a||(g||(g=[]),g.push(me,a)),a=$;else me==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,V=V?V.__html:void 0,$!=null&&V!==$&&(g=g||[]).push(me,$)):me==="children"?typeof $!="string"&&typeof $!="number"||(g=g||[]).push(me,""+$):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(o.hasOwnProperty(me)?($!=null&&me==="onScroll"&&pn("scroll",n),g||V===$||(g=[])):(g=g||[]).push(me,$))}a&&(g=g||[]).push("style",a);var me=g;(i.updateQueue=me)&&(i.flags|=4)}},Vp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Za(n,i){if(!gn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Gx(n,i,a){var c=i.pendingProps;switch(Yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(i),null;case 1:return li(i.type)&&Bo(),Xn(i),null;case 3:return c=i.stateNode,Js(),mn(oi),mn(jn),au(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(jo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hi!==null&&(Fu(Hi),Hi=null))),bu(n,i),Xn(i),null;case 5:ru(i);var d=ps(Xa.current);if(a=i.type,n!==null&&i.stateNode!=null)zp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Xn(i),null}if(n=ps(er.current),jo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Qi]=i,c[Va]=g,n=(i.mode&1)!==0,a){case"dialog":pn("cancel",c),pn("close",c);break;case"iframe":case"object":case"embed":pn("load",c);break;case"video":case"audio":for(d=0;d<ka.length;d++)pn(ka[d],c);break;case"source":pn("error",c);break;case"img":case"image":case"link":pn("error",c),pn("load",c);break;case"details":pn("toggle",c);break;case"input":jt(c,g),pn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},pn("invalid",c);break;case"textarea":Ft(c,g),pn("invalid",c)}st(a,g),d=null;for(var A in g)if(g.hasOwnProperty(A)){var V=g[A];A==="children"?typeof V=="string"?c.textContent!==V&&(g.suppressHydrationWarning!==!0&&Fo(c.textContent,V,n),d=["children",V]):typeof V=="number"&&c.textContent!==""+V&&(g.suppressHydrationWarning!==!0&&Fo(c.textContent,V,n),d=["children",""+V]):o.hasOwnProperty(A)&&V!=null&&A==="onScroll"&&pn("scroll",c)}switch(a){case"input":et(c),Rt(c,g,!0);break;case"textarea":et(c),Ot(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Oo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[Qi]=i,n[Va]=c,Bp(n,i,!1,!1),i.stateNode=n;e:{switch(A=Te(a,c),a){case"dialog":pn("cancel",n),pn("close",n),d=c;break;case"iframe":case"object":case"embed":pn("load",n),d=c;break;case"video":case"audio":for(d=0;d<ka.length;d++)pn(ka[d],n);d=c;break;case"source":pn("error",n),d=c;break;case"img":case"image":case"link":pn("error",n),pn("load",n),d=c;break;case"details":pn("toggle",n),d=c;break;case"input":jt(n,c),d=Et(n,c),pn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ce({},c,{value:void 0}),pn("invalid",n);break;case"textarea":Ft(n,c),d=_t(n,c),pn("invalid",n);break;default:d=c}st(a,d),V=d;for(g in V)if(V.hasOwnProperty(g)){var $=V[g];g==="style"?Se(n,$):g==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&Ee(n,$)):g==="children"?typeof $=="string"?(a!=="textarea"||$!=="")&&Ne(n,$):typeof $=="number"&&Ne(n,""+$):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?$!=null&&g==="onScroll"&&pn("scroll",n):$!=null&&R(n,g,$,A))}switch(a){case"input":et(n),Rt(n,c,!1);break;case"textarea":et(n),Ot(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Lt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Lt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Oo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Xn(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ps(Xa.current),ps(er.current),jo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Qi]=i,(g=c.nodeValue!==a)&&(n=vi,n!==null))switch(n.tag){case 3:Fo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qi]=i,i.stateNode=c}return Xn(i),null;case 13:if(mn(xn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(gn&&_i!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jh(),$s(),i.flags|=98560,g=!1;else if(g=jo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Qi]=i}else $s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xn(i),g=!1}else Hi!==null&&(Fu(Hi),Hi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(xn.current&1)!==0?Nn===0&&(Nn=3):Bu())),i.updateQueue!==null&&(i.flags|=4),Xn(i),null);case 4:return Js(),bu(n,i),n===null&&Ba(i.stateNode.containerInfo),Xn(i),null;case 10:return Qc(i.type._context),Xn(i),null;case 17:return li(i.type)&&Bo(),Xn(i),null;case 19:if(mn(xn),g=i.memoizedState,g===null)return Xn(i),null;if(c=(i.flags&128)!==0,A=g.rendering,A===null)if(c)Za(g,!1);else{if(Nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=Ko(n),A!==null){for(i.flags|=128,Za(g,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return fn(xn,xn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Me()>na&&(i.flags|=128,c=!0,Za(g,!1),i.lanes=4194304)}else{if(!c)if(n=Ko(A),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!gn)return Xn(i),null}else 2*Me()-g.renderingStartTime>na&&a!==1073741824&&(i.flags|=128,c=!0,Za(g,!1),i.lanes=4194304);g.isBackwards?(A.sibling=i.child,i.child=A):(a=g.last,a!==null?a.sibling=A:i.child=A,g.last=A)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Me(),i.sibling=null,a=xn.current,fn(xn,c?a&1|2:a&1),i):(Xn(i),null);case 22:case 23:return ku(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(yi&1073741824)!==0&&(Xn(i),i.subtreeFlags&6&&(i.flags|=8192)):Xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function jx(n,i){switch(Yc(i),i.tag){case 1:return li(i.type)&&Bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Js(),mn(oi),mn(jn),au(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ru(i),null;case 13:if(mn(xn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));$s()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return mn(xn),null;case 4:return Js(),null;case 10:return Qc(i.type._context),null;case 22:case 23:return ku(),null;case 24:return null;default:return null}}var sl=!1,Yn=!1,Wx=typeof WeakSet=="function"?WeakSet:Set,ht=null;function ea(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){yn(n,i,c)}else a.current=null}function Tu(n,i,a){try{a()}catch(c){yn(n,i,c)}}var Hp=!1;function Xx(n,i){if(kc=bo,n=yh(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var A=0,V=-1,$=-1,me=0,Oe=0,He=n,Fe=null;t:for(;;){for(var ut;He!==a||d!==0&&He.nodeType!==3||(V=A+d),He!==g||c!==0&&He.nodeType!==3||($=A+c),He.nodeType===3&&(A+=He.nodeValue.length),(ut=He.firstChild)!==null;)Fe=He,He=ut;for(;;){if(He===n)break t;if(Fe===a&&++me===d&&(V=A),Fe===g&&++Oe===c&&($=A),(ut=He.nextSibling)!==null)break;He=Fe,Fe=He.parentNode}He=ut}a=V===-1||$===-1?null:{start:V,end:$}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:n,selectionRange:a},bo=!1,ht=i;ht!==null;)if(i=ht,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ht=n;else for(;ht!==null;){i=ht;try{var pt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(pt!==null){var gt=pt.memoizedProps,Mn=pt.memoizedState,ue=i.stateNode,Q=ue.getSnapshotBeforeUpdate(i.elementType===i.type?gt:Gi(i.type,gt),Mn);ue.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ye){yn(i,i.return,Ye)}if(n=i.sibling,n!==null){n.return=i.return,ht=n;break}ht=i.return}return pt=Hp,Hp=!1,pt}function Ja(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Tu(i,a,g)}d=d.next}while(d!==c)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Au(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Gp(n){var i=n.alternate;i!==null&&(n.alternate=null,Gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Qi],delete i[Va],delete i[Gc],delete i[Cx],delete i[Rx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jp(n){return n.tag===5||n.tag===3||n.tag===4}function Wp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Oo));else if(c!==4&&(n=n.child,n!==null))for(Cu(n,i,a),n=n.sibling;n!==null;)Cu(n,i,a),n=n.sibling}function Ru(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ru(n,i,a),n=n.sibling;n!==null;)Ru(n,i,a),n=n.sibling}var zn=null,ji=!1;function Hr(n,i,a){for(a=a.child;a!==null;)Xp(n,i,a),a=a.sibling}function Xp(n,i,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Y,a)}catch{}switch(a.tag){case 5:Yn||ea(a,i);case 6:var c=zn,d=ji;zn=null,Hr(n,i,a),zn=c,ji=d,zn!==null&&(ji?(n=zn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):zn.removeChild(a.stateNode));break;case 18:zn!==null&&(ji?(n=zn,a=a.stateNode,n.nodeType===8?Hc(n.parentNode,a):n.nodeType===1&&Hc(n,a),Na(n)):Hc(zn,a.stateNode));break;case 4:c=zn,d=ji,zn=a.stateNode.containerInfo,ji=!0,Hr(n,i,a),zn=c,ji=d;break;case 0:case 11:case 14:case 15:if(!Yn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&Tu(a,i,A),d=d.next}while(d!==c)}Hr(n,i,a);break;case 1:if(!Yn&&(ea(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(V){yn(a,i,V)}Hr(n,i,a);break;case 21:Hr(n,i,a);break;case 22:a.mode&1?(Yn=(c=Yn)||a.memoizedState!==null,Hr(n,i,a),Yn=c):Hr(n,i,a);break;default:Hr(n,i,a)}}function Yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Wx),i.forEach(function(c){var d=tv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Wi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,A=i,V=A;e:for(;V!==null;){switch(V.tag){case 5:zn=V.stateNode,ji=!1;break e;case 3:zn=V.stateNode.containerInfo,ji=!0;break e;case 4:zn=V.stateNode.containerInfo,ji=!0;break e}V=V.return}if(zn===null)throw Error(t(160));Xp(g,A,d),zn=null,ji=!1;var $=d.alternate;$!==null&&($.return=null),d.return=null}catch(me){yn(d,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$p(i,n),i=i.sibling}function $p(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wi(i,n),nr(n),c&4){try{Ja(3,n,n.return),al(3,n)}catch(gt){yn(n,n.return,gt)}try{Ja(5,n,n.return)}catch(gt){yn(n,n.return,gt)}}break;case 1:Wi(i,n),nr(n),c&512&&a!==null&&ea(a,a.return);break;case 5:if(Wi(i,n),nr(n),c&512&&a!==null&&ea(a,a.return),n.flags&32){var d=n.stateNode;try{Ne(d,"")}catch(gt){yn(n,n.return,gt)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,A=a!==null?a.memoizedProps:g,V=n.type,$=n.updateQueue;if(n.updateQueue=null,$!==null)try{V==="input"&&g.type==="radio"&&g.name!=null&&bt(d,g),Te(V,A);var me=Te(V,g);for(A=0;A<$.length;A+=2){var Oe=$[A],He=$[A+1];Oe==="style"?Se(d,He):Oe==="dangerouslySetInnerHTML"?Ee(d,He):Oe==="children"?Ne(d,He):R(d,Oe,He,me)}switch(V){case"input":Bt(d,g);break;case"textarea":We(d,g);break;case"select":var Fe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var ut=g.value;ut!=null?Lt(d,!!g.multiple,ut,!1):Fe!==!!g.multiple&&(g.defaultValue!=null?Lt(d,!!g.multiple,g.defaultValue,!0):Lt(d,!!g.multiple,g.multiple?[]:"",!1))}d[Va]=g}catch(gt){yn(n,n.return,gt)}}break;case 6:if(Wi(i,n),nr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(gt){yn(n,n.return,gt)}}break;case 3:if(Wi(i,n),nr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Na(i.containerInfo)}catch(gt){yn(n,n.return,gt)}break;case 4:Wi(i,n),nr(n);break;case 13:Wi(i,n),nr(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Iu=Me())),c&4&&Yp(n);break;case 22:if(Oe=a!==null&&a.memoizedState!==null,n.mode&1?(Yn=(me=Yn)||Oe,Wi(i,n),Yn=me):Wi(i,n),nr(n),c&8192){if(me=n.memoizedState!==null,(n.stateNode.isHidden=me)&&!Oe&&(n.mode&1)!==0)for(ht=n,Oe=n.child;Oe!==null;){for(He=ht=Oe;ht!==null;){switch(Fe=ht,ut=Fe.child,Fe.tag){case 0:case 11:case 14:case 15:Ja(4,Fe,Fe.return);break;case 1:ea(Fe,Fe.return);var pt=Fe.stateNode;if(typeof pt.componentWillUnmount=="function"){c=Fe,a=Fe.return;try{i=c,pt.props=i.memoizedProps,pt.state=i.memoizedState,pt.componentWillUnmount()}catch(gt){yn(c,a,gt)}}break;case 5:ea(Fe,Fe.return);break;case 22:if(Fe.memoizedState!==null){Zp(He);continue}}ut!==null?(ut.return=Fe,ht=ut):Zp(He)}Oe=Oe.sibling}e:for(Oe=null,He=n;;){if(He.tag===5){if(Oe===null){Oe=He;try{d=He.stateNode,me?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(V=He.stateNode,$=He.memoizedProps.style,A=$!=null&&$.hasOwnProperty("display")?$.display:null,V.style.display=xe("display",A))}catch(gt){yn(n,n.return,gt)}}}else if(He.tag===6){if(Oe===null)try{He.stateNode.nodeValue=me?"":He.memoizedProps}catch(gt){yn(n,n.return,gt)}}else if((He.tag!==22&&He.tag!==23||He.memoizedState===null||He===n)&&He.child!==null){He.child.return=He,He=He.child;continue}if(He===n)break e;for(;He.sibling===null;){if(He.return===null||He.return===n)break e;Oe===He&&(Oe=null),He=He.return}Oe===He&&(Oe=null),He.sibling.return=He.return,He=He.sibling}}break;case 19:Wi(i,n),nr(n),c&4&&Yp(n);break;case 21:break;default:Wi(i,n),nr(n)}}function nr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(jp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ne(d,""),c.flags&=-33);var g=Wp(n);Ru(n,g,d);break;case 3:case 4:var A=c.stateNode.containerInfo,V=Wp(n);Cu(n,V,A);break;default:throw Error(t(161))}}catch($){yn(n,n.return,$)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Yx(n,i,a){ht=n,qp(n)}function qp(n,i,a){for(var c=(n.mode&1)!==0;ht!==null;){var d=ht,g=d.child;if(d.tag===22&&c){var A=d.memoizedState!==null||sl;if(!A){var V=d.alternate,$=V!==null&&V.memoizedState!==null||Yn;V=sl;var me=Yn;if(sl=A,(Yn=$)&&!me)for(ht=d;ht!==null;)A=ht,$=A.child,A.tag===22&&A.memoizedState!==null?Jp(d):$!==null?($.return=A,ht=$):Jp(d);for(;g!==null;)ht=g,qp(g),g=g.sibling;ht=d,sl=V,Yn=me}Kp(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ht=g):Kp(n)}}function Kp(n){for(;ht!==null;){var i=ht;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Yn||al(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Yn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Gi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Zh(i,g,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Zh(i,A,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var $=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&a.focus();break;case"img":$.src&&(a.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var Oe=me.memoizedState;if(Oe!==null){var He=Oe.dehydrated;He!==null&&Na(He)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yn||i.flags&512&&Au(i)}catch(Fe){yn(i,i.return,Fe)}}if(i===n){ht=null;break}if(a=i.sibling,a!==null){a.return=i.return,ht=a;break}ht=i.return}}function Zp(n){for(;ht!==null;){var i=ht;if(i===n){ht=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ht=a;break}ht=i.return}}function Jp(n){for(;ht!==null;){var i=ht;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{al(4,i)}catch($){yn(i,a,$)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch($){yn(i,d,$)}}var g=i.return;try{Au(i)}catch($){yn(i,g,$)}break;case 5:var A=i.return;try{Au(i)}catch($){yn(i,A,$)}}}catch($){yn(i,i.return,$)}if(i===n){ht=null;break}var V=i.sibling;if(V!==null){V.return=i.return,ht=V;break}ht=i.return}}var $x=Math.ceil,ol=N.ReactCurrentDispatcher,Nu=N.ReactCurrentOwner,Pi=N.ReactCurrentBatchConfig,nn=0,Fn=null,bn=null,Vn=0,yi=0,ta=Or(0),Nn=0,Qa=null,gs=0,ll=0,Pu=0,eo=null,ui=null,Iu=0,na=1/0,Sr=null,cl=!1,Du=null,Gr=null,ul=!1,jr=null,dl=0,to=0,Lu=null,fl=-1,hl=0;function ti(){return(nn&6)!==0?Me():fl!==-1?fl:fl=Me()}function Wr(n){return(n.mode&1)===0?1:(nn&2)!==0&&Vn!==0?Vn&-Vn:Px.transition!==null?(hl===0&&(hl=Ze()),hl):(n=P,n!==0||(n=window.event,n=n===void 0?16:eh(n.type)),n)}function Xi(n,i,a,c){if(50<to)throw to=0,Lu=null,Error(t(185));Mt(n,a,c),((nn&2)===0||n!==Fn)&&(n===Fn&&((nn&2)===0&&(ll|=a),Nn===4&&Xr(n,Vn)),di(n,c),a===1&&nn===0&&(i.mode&1)===0&&(na=Me()+500,Vo&&Br()))}function di(n,i){var a=n.callbackNode;Gt(n,i);var c=kt(n,n===Fn?Vn:0);if(c===0)a!==null&&Ti(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ti(a),i===1)n.tag===0?Nx(em.bind(null,n)):Bh(em.bind(null,n)),Tx(function(){(nn&6)===0&&Br()}),a=null;else{switch(ee(c)){case 1:a=ct;break;case 4:a=T;break;case 16:a=W;break;case 536870912:a=K;break;default:a=W}a=lm(a,Qp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Qp(n,i){if(fl=-1,hl=0,(nn&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ia()&&n.callbackNode!==a)return null;var c=kt(n,n===Fn?Vn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=pl(n,c);else{i=c;var d=nn;nn|=2;var g=nm();(Fn!==n||Vn!==i)&&(Sr=null,na=Me()+500,vs(n,i));do try{Zx();break}catch(V){tm(n,V)}while(!0);Jc(),ol.current=g,nn=d,bn!==null?i=0:(Fn=null,Vn=0,i=Nn)}if(i!==0){if(i===2&&(d=Ct(n),d!==0&&(c=d,i=Uu(n,d))),i===1)throw a=Qa,vs(n,0),Xr(n,c),di(n,Me()),a;if(i===6)Xr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!qx(d)&&(i=pl(n,c),i===2&&(g=Ct(n),g!==0&&(c=g,i=Uu(n,g))),i===1))throw a=Qa,vs(n,0),Xr(n,c),di(n,Me()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:_s(n,ui,Sr);break;case 3:if(Xr(n,c),(c&130023424)===c&&(i=Iu+500-Me(),10<i)){if(kt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){ti(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Vc(_s.bind(null,n,ui,Sr),i);break}_s(n,ui,Sr);break;case 4:if(Xr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var A=31-Ae(c);g=1<<A,A=i[A],A>d&&(d=A),c&=~g}if(c=d,c=Me()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*$x(c/1960))-c,10<c){n.timeoutHandle=Vc(_s.bind(null,n,ui,Sr),c);break}_s(n,ui,Sr);break;case 5:_s(n,ui,Sr);break;default:throw Error(t(329))}}}return di(n,Me()),n.callbackNode===a?Qp.bind(null,n):null}function Uu(n,i){var a=eo;return n.current.memoizedState.isDehydrated&&(vs(n,i).flags|=256),n=pl(n,i),n!==2&&(i=ui,ui=a,i!==null&&Fu(i)),n}function Fu(n){ui===null?ui=n:ui.push.apply(ui,n)}function qx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Vi(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xr(n,i){for(i&=~Pu,i&=~ll,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ae(i),c=1<<a;n[a]=-1,i&=~c}}function em(n){if((nn&6)!==0)throw Error(t(327));ia();var i=kt(n,0);if((i&1)===0)return di(n,Me()),null;var a=pl(n,i);if(n.tag!==0&&a===2){var c=Ct(n);c!==0&&(i=c,a=Uu(n,c))}if(a===1)throw a=Qa,vs(n,0),Xr(n,i),di(n,Me()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_s(n,ui,Sr),di(n,Me()),null}function Ou(n,i){var a=nn;nn|=1;try{return n(i)}finally{nn=a,nn===0&&(na=Me()+500,Vo&&Br())}}function xs(n){jr!==null&&jr.tag===0&&(nn&6)===0&&ia();var i=nn;nn|=1;var a=Pi.transition,c=P;try{if(Pi.transition=null,P=1,n)return n()}finally{P=c,Pi.transition=a,nn=i,(nn&6)===0&&Br()}}function ku(){yi=ta.current,mn(ta)}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,bx(a)),bn!==null)for(a=bn.return;a!==null;){var c=a;switch(Yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bo();break;case 3:Js(),mn(oi),mn(jn),au();break;case 5:ru(c);break;case 4:Js();break;case 13:mn(xn);break;case 19:mn(xn);break;case 10:Qc(c.type._context);break;case 22:case 23:ku()}a=a.return}if(Fn=n,bn=n=Yr(n.current,null),Vn=yi=i,Nn=0,Qa=null,Pu=ll=gs=0,ui=eo=null,hs!==null){for(i=0;i<hs.length;i++)if(a=hs[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var A=g.next;g.next=d,c.next=A}a.pending=c}hs=null}return n}function tm(n,i){do{var a=bn;try{if(Jc(),Zo.current=tl,Jo){for(var c=vn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Jo=!1}if(ms=0,Un=Rn=vn=null,Ya=!1,$a=0,Nu.current=null,a===null||a.return===null){Nn=1,Qa=i,bn=null;break}e:{var g=n,A=a.return,V=a,$=i;if(i=Vn,V.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var me=$,Oe=V,He=Oe.tag;if((Oe.mode&1)===0&&(He===0||He===11||He===15)){var Fe=Oe.alternate;Fe?(Oe.updateQueue=Fe.updateQueue,Oe.memoizedState=Fe.memoizedState,Oe.lanes=Fe.lanes):(Oe.updateQueue=null,Oe.memoizedState=null)}var ut=Tp(A);if(ut!==null){ut.flags&=-257,Ap(ut,A,V,g,i),ut.mode&1&&bp(g,me,i),i=ut,$=me;var pt=i.updateQueue;if(pt===null){var gt=new Set;gt.add($),i.updateQueue=gt}else pt.add($);break e}else{if((i&1)===0){bp(g,me,i),Bu();break e}$=Error(t(426))}}else if(gn&&V.mode&1){var Mn=Tp(A);if(Mn!==null){(Mn.flags&65536)===0&&(Mn.flags|=256),Ap(Mn,A,V,g,i),Kc(Qs($,V));break e}}g=$=Qs($,V),Nn!==4&&(Nn=2),eo===null?eo=[g]:eo.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=wp(g,$,i);Kh(g,ue);break e;case 1:V=$;var Q=g.type,he=g.stateNode;if((g.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Gr===null||!Gr.has(he)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ye=Ep(g,V,i);Kh(g,Ye);break e}}g=g.return}while(g!==null)}rm(a)}catch(xt){i=xt,bn===a&&a!==null&&(bn=a=a.return);continue}break}while(!0)}function nm(){var n=ol.current;return ol.current=tl,n===null?tl:n}function Bu(){(Nn===0||Nn===3||Nn===2)&&(Nn=4),Fn===null||(gs&268435455)===0&&(ll&268435455)===0||Xr(Fn,Vn)}function pl(n,i){var a=nn;nn|=2;var c=nm();(Fn!==n||Vn!==i)&&(Sr=null,vs(n,i));do try{Kx();break}catch(d){tm(n,d)}while(!0);if(Jc(),nn=a,ol.current=c,bn!==null)throw Error(t(261));return Fn=null,Vn=0,Nn}function Kx(){for(;bn!==null;)im(bn)}function Zx(){for(;bn!==null&&!X();)im(bn)}function im(n){var i=om(n.alternate,n,yi);n.memoizedProps=n.pendingProps,i===null?rm(n):bn=i,Nu.current=null}function rm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Gx(a,i,yi),a!==null){bn=a;return}}else{if(a=jx(a,i),a!==null){a.flags&=32767,bn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Nn=6,bn=null;return}}if(i=i.sibling,i!==null){bn=i;return}bn=i=n}while(i!==null);Nn===0&&(Nn=5)}function _s(n,i,a){var c=P,d=Pi.transition;try{Pi.transition=null,P=1,Jx(n,i,a,c)}finally{Pi.transition=d,P=c}return null}function Jx(n,i,a,c){do ia();while(jr!==null);if((nn&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(b(n,g),n===Fn&&(bn=Fn=null,Vn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ul||(ul=!0,lm(W,function(){return ia(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Pi.transition,Pi.transition=null;var A=P;P=1;var V=nn;nn|=4,Nu.current=null,Xx(n,a),$p(a,n),vx(Bc),bo=!!kc,Bc=kc=null,n.current=a,Yx(a),De(),nn=V,P=A,Pi.transition=g}else n.current=a;if(ul&&(ul=!1,jr=n,dl=d),g=n.pendingLanes,g===0&&(Gr=null),Ge(a.stateNode),di(n,Me()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(cl)throw cl=!1,n=Du,Du=null,n;return(dl&1)!==0&&n.tag!==0&&ia(),g=n.pendingLanes,(g&1)!==0?n===Lu?to++:(to=0,Lu=n):to=0,Br(),null}function ia(){if(jr!==null){var n=ee(dl),i=Pi.transition,a=P;try{if(Pi.transition=null,P=16>n?16:n,jr===null)var c=!1;else{if(n=jr,jr=null,dl=0,(nn&6)!==0)throw Error(t(331));var d=nn;for(nn|=4,ht=n.current;ht!==null;){var g=ht,A=g.child;if((ht.flags&16)!==0){var V=g.deletions;if(V!==null){for(var $=0;$<V.length;$++){var me=V[$];for(ht=me;ht!==null;){var Oe=ht;switch(Oe.tag){case 0:case 11:case 15:Ja(8,Oe,g)}var He=Oe.child;if(He!==null)He.return=Oe,ht=He;else for(;ht!==null;){Oe=ht;var Fe=Oe.sibling,ut=Oe.return;if(Gp(Oe),Oe===me){ht=null;break}if(Fe!==null){Fe.return=ut,ht=Fe;break}ht=ut}}}var pt=g.alternate;if(pt!==null){var gt=pt.child;if(gt!==null){pt.child=null;do{var Mn=gt.sibling;gt.sibling=null,gt=Mn}while(gt!==null)}}ht=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,ht=A;else e:for(;ht!==null;){if(g=ht,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ja(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,ht=ue;break e}ht=g.return}}var Q=n.current;for(ht=Q;ht!==null;){A=ht;var he=A.child;if((A.subtreeFlags&2064)!==0&&he!==null)he.return=A,ht=he;else e:for(A=Q;ht!==null;){if(V=ht,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:al(9,V)}}catch(xt){yn(V,V.return,xt)}if(V===A){ht=null;break e}var Ye=V.sibling;if(Ye!==null){Ye.return=V.return,ht=Ye;break e}ht=V.return}}if(nn=d,Br(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Y,n)}catch{}c=!0}return c}finally{P=a,Pi.transition=i}}return!1}function sm(n,i,a){i=Qs(a,i),i=wp(n,i,1),n=Vr(n,i,1),i=ti(),n!==null&&(Mt(n,1,i),di(n,i))}function yn(n,i,a){if(n.tag===3)sm(n,n,a);else for(;i!==null;){if(i.tag===3){sm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=Qs(a,n),n=Ep(i,n,1),i=Vr(i,n,1),n=ti(),i!==null&&(Mt(i,1,n),di(i,n));break}}i=i.return}}function Qx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=ti(),n.pingedLanes|=n.suspendedLanes&a,Fn===n&&(Vn&a)===a&&(Nn===4||Nn===3&&(Vn&130023424)===Vn&&500>Me()-Iu?vs(n,0):Pu|=a),di(n,i)}function am(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var a=ti();n=vr(n,i),n!==null&&(Mt(n,i,a),di(n,a))}function ev(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),am(n,a)}function tv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),am(n,a)}var om;om=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||oi.current)ci=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ci=!1,Hx(n,i,a);ci=(n.flags&131072)!==0}else ci=!1,gn&&(i.flags&1048576)!==0&&zh(i,Go,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;rl(n,i),n=i.pendingProps;var d=Ws(i,jn.current);Zs(i,a),d=cu(null,i,c,n,d,a);var g=uu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,li(c)?(g=!0,zo(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nu(i),d.updater=nl,i.stateNode=d,d._reactInternals=i,gu(i,c,n,a),i=yu(null,i,c,!0,g,a)):(i.tag=0,gn&&g&&Xc(i),ei(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(rl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=iv(c),n=Gi(c,n),d){case 0:i=_u(null,i,c,n,a);break e;case 1:i=Dp(null,i,c,n,a);break e;case 11:i=Cp(null,i,c,n,a);break e;case 14:i=Rp(null,i,c,Gi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Gi(c,d),_u(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Gi(c,d),Dp(n,i,c,d,a);case 3:e:{if(Lp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,qh(n,i),qo(i,c,null,a);var A=i.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Qs(Error(t(423)),i),i=Up(n,i,c,a,d);break e}else if(c!==d){d=Qs(Error(t(424)),i),i=Up(n,i,c,a,d);break e}else for(_i=Fr(i.stateNode.containerInfo.firstChild),vi=i,gn=!0,Hi=null,a=Yh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($s(),c===d){i=yr(n,i,a);break e}ei(n,i,c,a)}i=i.child}return i;case 5:return Jh(i),n===null&&qc(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,A=d.children,zc(c,d)?A=null:g!==null&&zc(c,g)&&(i.flags|=32),Ip(n,i),ei(n,i,A,a),i.child;case 6:return n===null&&qc(i),null;case 13:return Fp(n,i,a);case 4:return iu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=qs(i,null,c,a):ei(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Gi(c,d),Cp(n,i,c,d,a);case 7:return ei(n,i,i.pendingProps,a),i.child;case 8:return ei(n,i,i.pendingProps.children,a),i.child;case 12:return ei(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,A=d.value,fn(Xo,c._currentValue),c._currentValue=A,g!==null)if(Vi(g.value,A)){if(g.children===d.children&&!oi.current){i=yr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var V=g.dependencies;if(V!==null){A=g.child;for(var $=V.firstContext;$!==null;){if($.context===c){if(g.tag===1){$=_r(-1,a&-a),$.tag=2;var me=g.updateQueue;if(me!==null){me=me.shared;var Oe=me.pending;Oe===null?$.next=$:($.next=Oe.next,Oe.next=$),me.pending=$}}g.lanes|=a,$=g.alternate,$!==null&&($.lanes|=a),eu(g.return,a,i),V.lanes|=a;break}$=$.next}}else if(g.tag===10)A=g.type===i.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=a,V=A.alternate,V!==null&&(V.lanes|=a),eu(A,a,i),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===i){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}ei(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Zs(i,a),d=Ri(d),c=c(d),i.flags|=1,ei(n,i,c,a),i.child;case 14:return c=i.type,d=Gi(c,i.pendingProps),d=Gi(c.type,d),Rp(n,i,c,d,a);case 15:return Np(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Gi(c,d),rl(n,i),i.tag=1,li(c)?(n=!0,zo(i)):n=!1,Zs(i,a),Sp(i,c,d),gu(i,c,d,a),yu(null,i,c,!0,n,a);case 19:return kp(n,i,a);case 22:return Pp(n,i,a)}throw Error(t(156,i.tag))};function lm(n,i){return hr(n,i)}function nv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(n,i,a,c){return new nv(n,i,a,c)}function zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function iv(n){if(typeof n=="function")return zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===j)return 14}return 2}function Yr(n,i){var a=n.alternate;return a===null?(a=Ii(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ml(n,i,a,c,d,g){var A=2;if(c=n,typeof n=="function")zu(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case z:return ys(a.children,d,g,i);case w:A=8,d|=8;break;case I:return n=Ii(12,a,i,d|2),n.elementType=I,n.lanes=g,n;case le:return n=Ii(13,a,i,d),n.elementType=le,n.lanes=g,n;case pe:return n=Ii(19,a,i,d),n.elementType=pe,n.lanes=g,n;case te:return gl(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case q:A=10;break e;case k:A=9;break e;case Z:A=11;break e;case j:A=14;break e;case oe:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ii(A,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function ys(n,i,a,c){return n=Ii(7,n,c,i),n.lanes=a,n}function gl(n,i,a,c){return n=Ii(22,n,c,i),n.elementType=te,n.lanes=a,n.stateNode={isHidden:!1},n}function Vu(n,i,a){return n=Ii(6,n,null,i),n.lanes=a,n}function Hu(n,i,a){return i=Ii(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function rv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tn(0),this.expirationTimes=tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Gu(n,i,a,c,d,g,A,V,$){return n=new rv(n,i,a,V,$),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ii(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(g),n}function sv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function cm(n){if(!n)return kr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(li(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(li(a))return Oh(n,a,i)}return i}function um(n,i,a,c,d,g,A,V,$){return n=Gu(a,c,!0,n,d,g,A,V,$),n.context=cm(null),a=n.current,c=ti(),d=Wr(a),g=_r(c,d),g.callback=i??null,Vr(a,g,d),n.current.lanes=d,Mt(n,d,c),di(n,c),n}function xl(n,i,a,c){var d=i.current,g=ti(),A=Wr(d);return a=cm(a),i.context===null?i.context=a:i.pendingContext=a,i=_r(g,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Vr(d,i,A),n!==null&&(Xi(n,d,A,g),$o(n,d,A)),A}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ju(n,i){dm(n,i),(n=n.alternate)&&dm(n,i)}function av(){return null}var fm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wu(n){this._internalRoot=n}_l.prototype.render=Wu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));xl(n,i,null,null)},_l.prototype.unmount=Wu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;xs(function(){xl(null,n,null,null)}),i[pr]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=lt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Gn.length&&i!==0&&i<Gn[a].priority;a++);Gn.splice(a,0,n),a===0&&Ca(n)}};function Xu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hm(){}function ov(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var me=vl(A);g.call(me)}}var A=um(i,c,n,0,null,!1,!1,"",hm);return n._reactRootContainer=A,n[pr]=A.current,Ba(n.nodeType===8?n.parentNode:n),xs(),A}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var V=c;c=function(){var me=vl($);V.call(me)}}var $=Gu(n,0,!1,null,null,!1,!1,"",hm);return n._reactRootContainer=$,n[pr]=$.current,Ba(n.nodeType===8?n.parentNode:n),xs(function(){xl(i,$,a,c)}),$}function Sl(n,i,a,c,d){var g=a._reactRootContainer;if(g){var A=g;if(typeof d=="function"){var V=d;d=function(){var $=vl(A);V.call($)}}xl(i,A,n,d)}else A=ov(a,i,n,d,c);return vl(A)}we=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=St(i.pendingLanes);a!==0&&(O(i,a|1),di(i,Me()),(nn&6)===0&&(na=Me()+500,Br()))}break;case 13:xs(function(){var c=vr(n,1);if(c!==null){var d=ti();Xi(c,n,1,d)}}),ju(n,1)}},_e=function(n){if(n.tag===13){var i=vr(n,134217728);if(i!==null){var a=ti();Xi(i,n,134217728,a)}ju(n,134217728)}},Ve=function(n){if(n.tag===13){var i=Wr(n),a=vr(n,i);if(a!==null){var c=ti();Xi(a,n,i,c)}ju(n,i)}},lt=function(){return P},Qt=function(n,i){var a=P;try{return P=n,i()}finally{P=a}},Nt=function(n,i,a){switch(i){case"input":if(Bt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=ko(c);if(!d)throw Error(t(90));wt(c),Bt(c,d)}}}break;case"textarea":We(n,a);break;case"select":i=a.value,i!=null&&Lt(n,!!a.multiple,i,!1)}},Le=Ou,ve=xs;var lv={usingClientEntryPoint:!1,Events:[Ha,Gs,ko,ge,it,Ou]},no={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cv={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gi(n),n===null?null:n.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||av,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Y=Ml.inject(cv),Ce=Ml}catch{}}return fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv,fi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(i))throw Error(t(200));return sv(n,i,null,a)},fi.createRoot=function(n,i){if(!Xu(n))throw Error(t(299));var a=!1,c="",d=fm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Gu(n,1,!1,null,null,a,!1,c,d),n[pr]=i.current,Ba(n.nodeType===8?n.parentNode:n),new Wu(i)},fi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=gi(i),n=n===null?null:n.stateNode,n},fi.flushSync=function(n){return xs(n)},fi.hydrate=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!0,a)},fi.hydrateRoot=function(n,i,a){if(!Xu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",A=fm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=um(i,null,n,1,a??null,d,!1,g,A),n[pr]=i.current,Ba(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new _l(i)},fi.render=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!1,a)},fi.unmountComponentAtNode=function(n){if(!yl(n))throw Error(t(40));return n._reactRootContainer?(xs(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},fi.unstable_batchedUpdates=Ou,fi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!yl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sl(n,i,a,!1,c)},fi.version="18.3.1-next-f1338f8080-20240426",fi}var Sm;function vv(){if(Sm)return qu.exports;Sm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),qu.exports=xv(),qu.exports}var Mm;function _v(){if(Mm)return wl;Mm=1;var s=vv();return wl.createRoot=s.createRoot,wl.hydrateRoot=s.hydrateRoot,wl}var yv=_v();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Df="184",Sv=0,wm=1,Mv=2,ql=1,wv=2,ho=3,as=0,pi=1,Ar=2,Rr=0,ya=1,Em=2,bm=3,Tm=4,Ev=5,As=100,bv=101,Tv=102,Av=103,Cv=104,Rv=200,Nv=201,Pv=202,Iv=203,Od=204,kd=205,Dv=206,Lv=207,Uv=208,Fv=209,Ov=210,kv=211,Bv=212,zv=213,Vv=214,Bd=0,zd=1,Vd=2,Ma=3,Hd=4,Gd=5,jd=6,Wd=7,H0=0,Hv=1,Gv=2,lr=0,G0=1,j0=2,W0=3,X0=4,Y0=5,$0=6,q0=7,K0=300,Is=301,wa=302,Ju=303,Qu=304,hc=306,Xd=1e3,Cr=1001,Yd=1002,Hn=1003,jv=1004,El=1005,Zn=1006,ed=1007,Rs=1008,Oi=1009,Z0=1010,J0=1011,yo=1012,Lf=1013,dr=1014,ar=1015,Pr=1016,Uf=1017,Ff=1018,So=1020,Q0=35902,eg=35899,tg=1021,ng=1022,Zi=1023,Ir=1026,Ns=1027,ig=1028,Of=1029,Ds=1030,kf=1031,Bf=1033,Kl=33776,Zl=33777,Jl=33778,Ql=33779,$d=35840,qd=35841,Kd=35842,Zd=35843,Jd=36196,Qd=37492,ef=37496,tf=37488,nf=37489,nc=37490,rf=37491,sf=37808,af=37809,of=37810,lf=37811,cf=37812,uf=37813,df=37814,ff=37815,hf=37816,pf=37817,mf=37818,gf=37819,xf=37820,vf=37821,_f=36492,yf=36494,Sf=36495,Mf=36283,wf=36284,ic=36285,Ef=36286,Wv=3200,Am=0,Xv=1,is="",Ui="srgb",rc="srgb-linear",sc="linear",ln="srgb",ra=7680,Cm=519,Yv=512,$v=513,qv=514,zf=515,Kv=516,Zv=517,Vf=518,Jv=519,Rm=35044,Nm="300 es",or=2e3,ac=2001;function Qv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function e_(){const s=oc("canvas");return s.style.display="block",s}const Pm={};function Im(...s){const e="THREE."+s.shift();console.log(e,...s)}function rg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function It(...s){s=rg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function rn(...s){s=rg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function bf(...s){const e=s.join(" ");e in Pm||(Pm[e]=!0,It(...s))}function t_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const n_={[Bd]:zd,[Vd]:jd,[Hd]:Wd,[Ma]:Gd,[zd]:Bd,[jd]:Vd,[Wd]:Hd,[Gd]:Ma};class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=Math.PI/180,Tf=180/Math.PI;function Mo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($n[s&255]+$n[s>>8&255]+$n[s>>16&255]+$n[s>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[t&63|128]+$n[t>>8&255]+"-"+$n[t>>16&255]+$n[t>>24&255]+$n[r&255]+$n[r>>8&255]+$n[r>>16&255]+$n[r>>24&255]).toLowerCase()}function Zt(s,e,t){return Math.max(e,Math.min(t,s))}function i_(s,e){return(s%e+e)%e}function nd(s,e,t){return(1-t)*s+t*e}function ro(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function hi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qf=class qf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Zt(this.x,e.x,t.x),this.y=Zt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Zt(this.x,e,t),this.y=Zt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Zt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qf.prototype.isVector2=!0;let Dt=qf;class Ta{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],m=r[o+1],v=r[o+2],y=r[o+3],x=l[u+0],M=l[u+1],C=l[u+2],L=l[u+3];if(y!==L||h!==x||m!==M||v!==C){let S=h*x+m*M+v*C+y*L;S<0&&(x=-x,M=-M,C=-C,L=-L,S=-S);let _=1-f;if(S<.9995){const D=Math.acos(S),R=Math.sin(D);_=Math.sin(_*D)/R,f=Math.sin(f*D)/R,h=h*_+x*f,m=m*_+M*f,v=v*_+C*f,y=y*_+L*f}else{h=h*_+x*f,m=m*_+M*f,v=v*_+C*f,y=y*_+L*f;const D=1/Math.sqrt(h*h+m*m+v*v+y*y);h*=D,m*=D,v*=D,y*=D}}e[t]=h,e[t+1]=m,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],m=r[o+2],v=r[o+3],y=l[u],x=l[u+1],M=l[u+2],C=l[u+3];return e[t]=f*C+v*y+h*M-m*x,e[t+1]=h*C+v*x+m*y-f*M,e[t+2]=m*C+v*M+f*x-h*y,e[t+3]=v*C-f*y-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),v=f(o/2),y=f(l/2),x=h(r/2),M=h(o/2),C=h(l/2);switch(u){case"XYZ":this._x=x*v*y+m*M*C,this._y=m*M*y-x*v*C,this._z=m*v*C+x*M*y,this._w=m*v*y-x*M*C;break;case"YXZ":this._x=x*v*y+m*M*C,this._y=m*M*y-x*v*C,this._z=m*v*C-x*M*y,this._w=m*v*y+x*M*C;break;case"ZXY":this._x=x*v*y-m*M*C,this._y=m*M*y+x*v*C,this._z=m*v*C+x*M*y,this._w=m*v*y-x*M*C;break;case"ZYX":this._x=x*v*y-m*M*C,this._y=m*M*y+x*v*C,this._z=m*v*C-x*M*y,this._w=m*v*y+x*M*C;break;case"YZX":this._x=x*v*y+m*M*C,this._y=m*M*y+x*v*C,this._z=m*v*C-x*M*y,this._w=m*v*y-x*M*C;break;case"XZY":this._x=x*v*y-m*M*C,this._y=m*M*y-x*v*C,this._z=m*v*C+x*M*y,this._w=m*v*y+x*M*C;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],m=t[2],v=t[6],y=t[10],x=r+f+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>f&&r>y){const M=2*Math.sqrt(1+r-f-y);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(f>y){const M=2*Math.sqrt(1+f-r-y);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+y-r-f);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,m=t._z,v=t._w;return this._x=r*v+u*f+o*m-l*h,this._y=o*v+u*h+l*f-r*m,this._z=l*v+u*m+r*h-o*f,this._w=u*v-r*f-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const m=Math.acos(f),v=Math.sin(m);h=Math.sin(h*m)/v,t=Math.sin(t*m)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kf=class Kf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),v=2*(f*t-l*o),y=2*(l*r-u*t);return this.x=t+h*m+u*y-f*v,this.y=r+h*v+f*m-l*y,this.z=o+h*y+l*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Zt(this.x,e.x,t.x),this.y=Zt(this.y,e.y,t.y),this.z=Zt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Zt(this.x,e,t),this.y=Zt(this.y,e,t),this.z=Zt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Zt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kf.prototype.isVector3=!0;let ie=Kf;const id=new ie,Dm=new Ta,Zf=class Zf{constructor(e,t,r,o,l,u,f,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,m)}set(e,t,r,o,l,u,f,h,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],v=r[4],y=r[7],x=r[2],M=r[5],C=r[8],L=o[0],S=o[3],_=o[6],D=o[1],R=o[4],N=o[7],H=o[2],F=o[5],z=o[8];return l[0]=u*L+f*D+h*H,l[3]=u*S+f*R+h*F,l[6]=u*_+f*N+h*z,l[1]=m*L+v*D+y*H,l[4]=m*S+v*R+y*F,l[7]=m*_+v*N+y*z,l[2]=x*L+M*D+C*H,l[5]=x*S+M*R+C*F,l[8]=x*_+M*N+C*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8];return t*u*v-t*f*m-r*l*v+r*f*h+o*l*m-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8],y=v*u-f*m,x=f*h-v*l,M=m*l-u*h,C=t*y+r*x+o*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=y*L,e[1]=(o*m-v*r)*L,e[2]=(f*r-o*u)*L,e[3]=x*L,e[4]=(v*t-o*h)*L,e[5]=(o*l-f*t)*L,e[6]=M*L,e[7]=(r*h-m*t)*L,e[8]=(u*t-r*l)*L,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(rd.makeScale(e,t)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,t){return this.premultiply(rd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zf.prototype.isMatrix3=!0;let zt=Zf;const rd=new zt,Lm=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r_(){const s={enabled:!0,workingColorSpace:rc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===ln&&(o.r=Nr(o.r),o.g=Nr(o.g),o.b=Nr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ln&&(o.r=Sa(o.r),o.g=Sa(o.g),o.b=Sa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===is?sc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return bf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return bf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[rc]:{primaries:e,whitePoint:r,transfer:sc,toXYZ:Lm,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:e,whitePoint:r,transfer:ln,toXYZ:Lm,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),s}const Jt=r_();function Nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Sa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let sa;class s_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{sa===void 0&&(sa=oc("canvas")),sa.width=e.width,sa.height=e.height;const o=sa.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=sa}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Nr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Nr(t[r]/255)*255):t[r]=Nr(t[r]);return{data:t,width:e.width,height:e.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a_=0;class Hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(sd(o[u].image)):l.push(sd(o[u]))}else l=sd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function sd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?s_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let o_=0;const ad=new ie;class ii extends Us{constructor(e=ii.DEFAULT_IMAGE,t=ii.DEFAULT_MAPPING,r=Cr,o=Cr,l=Zn,u=Rs,f=Zi,h=Oi,m=ii.DEFAULT_ANISOTROPY,v=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Mo(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){It(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){It(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=K0;ii.DEFAULT_ANISOTROPY=1;const Jf=class Jf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,m=h[0],v=h[4],y=h[8],x=h[1],M=h[5],C=h[9],L=h[2],S=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(y-L)<.01&&Math.abs(C-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+L)<.1&&Math.abs(C+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(m+1)/2,N=(M+1)/2,H=(_+1)/2,F=(v+x)/4,z=(y+L)/4,w=(C+S)/4;return R>N&&R>H?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=F/r,l=z/r):N>H?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=F/o,l=w/o):H<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),r=z/l,o=w/l),this.set(r,o,l,t),this}let D=Math.sqrt((S-C)*(S-C)+(y-L)*(y-L)+(x-v)*(x-v));return Math.abs(D)<.001&&(D=1),this.x=(S-C)/D,this.y=(y-L)/D,this.z=(x-v)/D,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Zt(this.x,e.x,t.x),this.y=Zt(this.y,e.y,t.y),this.z=Zt(this.z,e.z,t.z),this.w=Zt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Zt(this.x,e,t),this.y=Zt(this.y,e,t),this.z=Zt(this.z,e,t),this.w=Zt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jf.prototype.isVector4=!0;let wn=Jf;class l_ extends Us{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new wn(0,0,e,t),this.scissorTest=!1,this.viewport=new wn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new ii(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Hf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends l_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class sg extends ii{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c_ extends ii{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fc=class fc{constructor(e,t,r,o,l,u,f,h,m,v,y,x,M,C,L,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,m,v,y,x,M,C,L,S)}set(e,t,r,o,l,u,f,h,m,v,y,x,M,C,L,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=m,_[6]=v,_[10]=y,_[14]=x,_[3]=M,_[7]=C,_[11]=L,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/aa.setFromMatrixColumn(e,0).length(),l=1/aa.setFromMatrixColumn(e,1).length(),u=1/aa.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*y,C=f*v,L=f*y;t[0]=h*v,t[4]=-h*y,t[8]=m,t[1]=M+C*m,t[5]=x-L*m,t[9]=-f*h,t[2]=L-x*m,t[6]=C+M*m,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,M=h*y,C=m*v,L=m*y;t[0]=x+L*f,t[4]=C*f-M,t[8]=u*m,t[1]=u*y,t[5]=u*v,t[9]=-f,t[2]=M*f-C,t[6]=L+x*f,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,M=h*y,C=m*v,L=m*y;t[0]=x-L*f,t[4]=-u*y,t[8]=C+M*f,t[1]=M+C*f,t[5]=u*v,t[9]=L-x*f,t[2]=-u*m,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,M=u*y,C=f*v,L=f*y;t[0]=h*v,t[4]=C*m-M,t[8]=x*m+L,t[1]=h*y,t[5]=L*m+x,t[9]=M*m-C,t[2]=-m,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*m,C=f*h,L=f*m;t[0]=h*v,t[4]=L-x*y,t[8]=C*y+M,t[1]=y,t[5]=u*v,t[9]=-f*v,t[2]=-m*v,t[6]=M*y+C,t[10]=x-L*y}else if(e.order==="XZY"){const x=u*h,M=u*m,C=f*h,L=f*m;t[0]=h*v,t[4]=-y,t[8]=m*v,t[1]=x*y+L,t[5]=u*v,t[9]=M*y-C,t[2]=C*y-M,t[6]=f*v,t[10]=L*y+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u_,e,d_)}lookAt(e,t,r){const o=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),qr.crossVectors(r,Si),qr.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),qr.crossVectors(r,Si)),qr.normalize(),bl.crossVectors(Si,qr),o[0]=qr.x,o[4]=bl.x,o[8]=Si.x,o[1]=qr.y,o[5]=bl.y,o[9]=Si.y,o[2]=qr.z,o[6]=bl.z,o[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],v=r[1],y=r[5],x=r[9],M=r[13],C=r[2],L=r[6],S=r[10],_=r[14],D=r[3],R=r[7],N=r[11],H=r[15],F=o[0],z=o[4],w=o[8],I=o[12],q=o[1],k=o[5],Z=o[9],le=o[13],pe=o[2],j=o[6],oe=o[10],te=o[14],se=o[3],fe=o[7],ce=o[11],G=o[15];return l[0]=u*F+f*q+h*pe+m*se,l[4]=u*z+f*k+h*j+m*fe,l[8]=u*w+f*Z+h*oe+m*ce,l[12]=u*I+f*le+h*te+m*G,l[1]=v*F+y*q+x*pe+M*se,l[5]=v*z+y*k+x*j+M*fe,l[9]=v*w+y*Z+x*oe+M*ce,l[13]=v*I+y*le+x*te+M*G,l[2]=C*F+L*q+S*pe+_*se,l[6]=C*z+L*k+S*j+_*fe,l[10]=C*w+L*Z+S*oe+_*ce,l[14]=C*I+L*le+S*te+_*G,l[3]=D*F+R*q+N*pe+H*se,l[7]=D*z+R*k+N*j+H*fe,l[11]=D*w+R*Z+N*oe+H*ce,l[15]=D*I+R*le+N*te+H*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],m=e[13],v=e[2],y=e[6],x=e[10],M=e[14],C=e[3],L=e[7],S=e[11],_=e[15],D=h*M-m*x,R=f*M-m*y,N=f*x-h*y,H=u*M-m*v,F=u*x-h*v,z=u*y-f*v;return t*(L*D-S*R+_*N)-r*(C*D-S*H+_*F)+o*(C*R-L*H+_*z)-l*(C*N-L*F+S*z)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8],y=e[9],x=e[10],M=e[11],C=e[12],L=e[13],S=e[14],_=e[15],D=t*f-r*u,R=t*h-o*u,N=t*m-l*u,H=r*h-o*f,F=r*m-l*f,z=o*m-l*h,w=v*L-y*C,I=v*S-x*C,q=v*_-M*C,k=y*S-x*L,Z=y*_-M*L,le=x*_-M*S,pe=D*le-R*Z+N*k+H*q-F*I+z*w;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/pe;return e[0]=(f*le-h*Z+m*k)*j,e[1]=(o*Z-r*le-l*k)*j,e[2]=(L*z-S*F+_*H)*j,e[3]=(x*F-y*z-M*H)*j,e[4]=(h*q-u*le-m*I)*j,e[5]=(t*le-o*q+l*I)*j,e[6]=(S*N-C*z-_*R)*j,e[7]=(v*z-x*N+M*R)*j,e[8]=(u*Z-f*q+m*w)*j,e[9]=(r*q-t*Z-l*w)*j,e[10]=(C*F-L*N+_*D)*j,e[11]=(y*N-v*F-M*D)*j,e[12]=(f*I-u*k-h*w)*j,e[13]=(t*k-r*I+o*w)*j,e[14]=(L*R-C*H-S*D)*j,e[15]=(v*H-y*R+x*D)*j,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,m=l*u,v=l*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,v*f+r,v*h-o*u,0,m*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,m=l+l,v=u+u,y=f+f,x=l*m,M=l*v,C=l*y,L=u*v,S=u*y,_=f*y,D=h*m,R=h*v,N=h*y,H=r.x,F=r.y,z=r.z;return o[0]=(1-(L+_))*H,o[1]=(M+N)*H,o[2]=(C-R)*H,o[3]=0,o[4]=(M-N)*F,o[5]=(1-(x+_))*F,o[6]=(S+D)*F,o[7]=0,o[8]=(C+R)*z,o[9]=(S-D)*z,o[10]=(1-(x+L))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=aa.set(o[0],o[1],o[2]).length();const f=aa.set(o[4],o[5],o[6]).length(),h=aa.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Yi.copy(this);const m=1/u,v=1/f,y=1/h;return Yi.elements[0]*=m,Yi.elements[1]*=m,Yi.elements[2]*=m,Yi.elements[4]*=v,Yi.elements[5]*=v,Yi.elements[6]*=v,Yi.elements[8]*=y,Yi.elements[9]*=y,Yi.elements[10]*=y,t.setFromRotationMatrix(Yi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=or,h=!1){const m=this.elements,v=2*l/(t-e),y=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let C,L;if(h)C=l/(u-l),L=u*l/(u-l);else if(f===or)C=-(u+l)/(u-l),L=-2*u*l/(u-l);else if(f===ac)C=-u/(u-l),L=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=y,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=C,m[14]=L,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=or,h=!1){const m=this.elements,v=2/(t-e),y=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let C,L;if(h)C=1/(u-l),L=u/(u-l);else if(f===or)C=-2/(u-l),L=-(u+l)/(u-l);else if(f===ac)C=-1/(u-l),L=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=y,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=C,m[14]=L,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};fc.prototype.isMatrix4=!0;let An=fc;const aa=new ie,Yi=new An,u_=new ie(0,0,0),d_=new ie(1,1,1),qr=new ie,bl=new ie,Si=new ie,Fm=new An,Om=new Ta;class Ls{constructor(e=0,t=0,r=0,o=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],m=o[5],v=o[9],y=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Zt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";let ag=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},f_=0;const km=new ie,oa=new Ta,Mr=new An,Tl=new ie,so=new ie,h_=new ie,p_=new Ta,Bm=new ie(1,0,0),zm=new ie(0,1,0),Vm=new ie(0,0,1),Hm={type:"added"},m_={type:"removed"},la={type:"childadded",child:null},od={type:"childremoved",child:null};class wi extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wi.DEFAULT_UP.clone();const e=new ie,t=new Ls,r=new Ta,o=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new An},normalMatrix:{value:new zt}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=wi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.multiply(oa),this}rotateOnWorldAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.premultiply(oa),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Tl.copy(e):Tl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(so,Tl,this.up):Mr.lookAt(Tl,so,this.up),this.quaternion.setFromRotationMatrix(Mr),o&&(Mr.extractRotation(o.matrixWorld),oa.setFromRotationMatrix(Mr),this.quaternion.premultiply(oa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),la.child=e,this.dispatchEvent(la),la.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m_),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),la.child=e,this.dispatchEvent(la),la.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,h_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const y=h[m];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),v=u(e.images),y=u(e.shapes),x=u(e.skeletons),M=u(e.animations),C=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),C.length>0&&(r.nodes=C)}return r.object=o,r;function u(f){const h=[];for(const m in f){const v=f[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}wi.DEFAULT_UP=new ie(0,1,0);wi.DEFAULT_MATRIX_AUTO_UPDATE=!0;wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ps extends wi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g_={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const L of e.hand.values()){const S=t.getJointPose(L,r),_=this._getHandJoint(m,L);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=v.position.distanceTo(y.position),M=.02,C=.005;m.inputState.pinching&&x>M+C?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-C&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ps;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function cd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class un{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Jt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Jt.workingColorSpace){if(e=i_(e,1),t=Zt(t,0,1),r=Zt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=cd(u,l,e+1/3),this.g=cd(u,l,e),this.b=cd(u,l,e-1/3)}return Jt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ui){function r(l){l!==void 0&&parseFloat(l)<1&&It("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:It("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);It("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ui){const r=og[e.toLowerCase()];return r!==void 0?this.setHex(r,t):It("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return Jt.workingToColorSpace(qn.copy(this),e),Math.round(Zt(qn.r*255,0,255))*65536+Math.round(Zt(qn.g*255,0,255))*256+Math.round(Zt(qn.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.workingToColorSpace(qn.copy(this),t);const r=qn.r,o=qn.g,l=qn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,m;const v=(f+u)/2;if(f===u)h=0,m=0;else{const y=u-f;switch(m=v<=.5?y/(u+f):y/(2-u-f),u){case r:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-r)/y+2;break;case l:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,t=Jt.workingColorSpace){return Jt.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Ui){Jt.workingToColorSpace(qn.copy(this),e);const t=qn.r,r=qn.g,o=qn.b;return e!==Ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(Al);const r=nd(Kr.h,Al.h,t),o=nd(Kr.s,Al.s,t),l=nd(Kr.l,Al.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new un;un.NAMES=og;class x_ extends wi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ls,this.environmentIntensity=1,this.environmentRotation=new Ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $i=new ie,wr=new ie,ud=new ie,Er=new ie,ca=new ie,ua=new ie,Gm=new ie,dd=new ie,fd=new ie,hd=new ie,pd=new wn,md=new wn,gd=new wn;class Ki{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),$i.subVectors(e,t),o.cross($i);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){$i.subVectors(o,t),wr.subVectors(r,t),ud.subVectors(e,t);const u=$i.dot($i),f=$i.dot(wr),h=$i.dot(ud),m=wr.dot(wr),v=wr.dot(ud),y=u*m-f*f;if(y===0)return l.set(0,0,0),null;const x=1/y,M=(m*h-f*v)*x,C=(u*v-f*h)*x;return l.set(1-M-C,C,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,Er)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Er.x),h.addScaledVector(u,Er.y),h.addScaledVector(f,Er.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,t),md.fromBufferAttribute(e,r),gd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(pd,l.x),u.addScaledVector(md,l.y),u.addScaledVector(gd,l.z),u}static isFrontFacing(e,t,r,o){return $i.subVectors(r,t),wr.subVectors(e,t),$i.cross(wr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),$i.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ki.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ki.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ca.subVectors(o,r),ua.subVectors(l,r),dd.subVectors(e,r);const h=ca.dot(dd),m=ua.dot(dd);if(h<=0&&m<=0)return t.copy(r);fd.subVectors(e,o);const v=ca.dot(fd),y=ua.dot(fd);if(v>=0&&y<=v)return t.copy(o);const x=h*y-v*m;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ca,u);hd.subVectors(e,l);const M=ca.dot(hd),C=ua.dot(hd);if(C>=0&&M<=C)return t.copy(l);const L=M*m-h*C;if(L<=0&&m>=0&&C<=0)return f=m/(m-C),t.copy(r).addScaledVector(ua,f);const S=v*C-M*y;if(S<=0&&y-v>=0&&M-C>=0)return Gm.subVectors(l,o),f=(y-v)/(y-v+(M-C)),t.copy(o).addScaledVector(Gm,f);const _=1/(S+L+x);return u=L*_,f=x*_,t.copy(r).addScaledVector(ca,u).addScaledVector(ua,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,qi):qi.fromBufferAttribute(l,u),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cl.copy(r.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Rl.subVectors(this.max,ao),da.subVectors(e.a,ao),fa.subVectors(e.b,ao),ha.subVectors(e.c,ao),Zr.subVectors(fa,da),Jr.subVectors(ha,fa),Ss.subVectors(da,ha);let t=[0,-Zr.z,Zr.y,0,-Jr.z,Jr.y,0,-Ss.z,Ss.y,Zr.z,0,-Zr.x,Jr.z,0,-Jr.x,Ss.z,0,-Ss.x,-Zr.y,Zr.x,0,-Jr.y,Jr.x,0,-Ss.y,Ss.x,0];return!xd(t,da,fa,ha,Rl)||(t=[1,0,0,0,1,0,0,0,1],!xd(t,da,fa,ha,Rl))?!1:(Nl.crossVectors(Zr,Jr),t=[Nl.x,Nl.y,Nl.z],xd(t,da,fa,ha,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const br=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],qi=new ie,Cl=new wo,da=new ie,fa=new ie,ha=new ie,Zr=new ie,Jr=new ie,Ss=new ie,ao=new ie,Rl=new ie,Nl=new ie,Ms=new ie;function xd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Ms.fromArray(s,l);const f=o.x*Math.abs(Ms.x)+o.y*Math.abs(Ms.y)+o.z*Math.abs(Ms.z),h=e.dot(Ms),m=t.dot(Ms),v=r.dot(Ms);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>f)return!1}return!0}const Tn=new ie,Pl=new Dt;let v_=0;class ur extends Us{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Rm,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ro(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=hi(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),r=hi(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),r=hi(r,this.array),o=hi(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),r=hi(r,this.array),o=hi(o,this.array),l=hi(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class lg extends ur{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class cg extends ur{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class En extends ur{constructor(e,t,r){super(new Float32Array(e),t,r)}}const __=new wo,oo=new ie,vd=new ie;class Gf{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):__.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(oo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(vd)),this.expandByPoint(oo.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let y_=0;const Di=new An,_d=new wi,pa=new ie,Mi=new wo,lo=new wo,kn=new ie;class Ei extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qv(e)?cg:lg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new zt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,r){return Di.makeTranslation(e,t,r),this.applyMatrix4(Di),this}scale(e,t,r){return Di.makeScale(e,t,r),this.applyMatrix4(Di),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pa).negate(),this.translate(pa.x,pa.y,pa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new En(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];lo.setFromBufferAttribute(f),this.morphTargetsRelative?(kn.addVectors(Mi.min,lo.min),Mi.expandByPoint(kn),kn.addVectors(Mi.max,lo.max),Mi.expandByPoint(kn)):(Mi.expandByPoint(lo.min),Mi.expandByPoint(lo.max))}Mi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)kn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(kn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)kn.fromBufferAttribute(f,m),h&&(pa.fromBufferAttribute(e,m),kn.add(pa)),o=Math.max(o,r.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ur(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new ie,h[w]=new ie;const m=new ie,v=new ie,y=new ie,x=new Dt,M=new Dt,C=new Dt,L=new ie,S=new ie;function _(w,I,q){m.fromBufferAttribute(r,w),v.fromBufferAttribute(r,I),y.fromBufferAttribute(r,q),x.fromBufferAttribute(l,w),M.fromBufferAttribute(l,I),C.fromBufferAttribute(l,q),v.sub(m),y.sub(m),M.sub(x),C.sub(x);const k=1/(M.x*C.y-C.x*M.y);isFinite(k)&&(L.copy(v).multiplyScalar(C.y).addScaledVector(y,-M.y).multiplyScalar(k),S.copy(y).multiplyScalar(M.x).addScaledVector(v,-C.x).multiplyScalar(k),f[w].add(L),f[I].add(L),f[q].add(L),h[w].add(S),h[I].add(S),h[q].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let w=0,I=D.length;w<I;++w){const q=D[w],k=q.start,Z=q.count;for(let le=k,pe=k+Z;le<pe;le+=3)_(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const R=new ie,N=new ie,H=new ie,F=new ie;function z(w){H.fromBufferAttribute(o,w),F.copy(H);const I=f[w];R.copy(I),R.sub(H.multiplyScalar(H.dot(I))).normalize(),N.crossVectors(F,I);const k=N.dot(h[w])<0?-1:1;u.setXYZW(w,R.x,R.y,R.z,k)}for(let w=0,I=D.length;w<I;++w){const q=D[w],k=q.start,Z=q.count;for(let le=k,pe=k+Z;le<pe;le+=3)z(e.getX(le+0)),z(e.getX(le+1)),z(e.getX(le+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ur(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,h=new ie,m=new ie,v=new ie,y=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const C=e.getX(x+0),L=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,C),l.fromBufferAttribute(t,L),u.fromBufferAttribute(t,S),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),f.fromBufferAttribute(r,C),h.fromBufferAttribute(r,L),m.fromBufferAttribute(r,S),f.add(v),h.add(v),m.add(v),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(L,h.x,h.y,h.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(f,h){const m=f.array,v=f.itemSize,y=f.normalized,x=new m.constructor(h.length*v);let M=0,C=0;for(let L=0,S=h.length;L<S;L++){f.isInterleavedBufferAttribute?M=h[L]*f.data.stride+f.offset:M=h[L]*v;for(let _=0;_<v;_++)x[C++]=m[M++]}return new ur(x,v,y)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let v=0,y=m.length;v<y;v++){const x=m[v],M=e(x,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],y=l[m];for(let x=0,M=y.length;x<M;x++)v.push(y[x].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let S_=0;class pc extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Mo(),this.name="",this.type="Material",this.blending=ya,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=kd,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new un(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){It(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){It(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ya&&(r.blending=this.blending),this.side!==as&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Od&&(r.blendSrc=this.blendSrc),this.blendDst!==kd&&(r.blendDst=this.blendDst),this.blendEquation!==As&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ra&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ra&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ra&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Tr=new ie,yd=new ie,Il=new ie,Qr=new ie,Sd=new ie,Dl=new ie,Md=new ie;class M_{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){yd.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(yd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Il),f=Qr.dot(this.direction),h=-Qr.dot(Il),m=Qr.lengthSq(),v=Math.abs(1-u*u);let y,x,M,C;if(v>0)if(y=u*h-f,x=u*f-h,C=l*v,y>=0)if(x>=-C)if(x<=C){const L=1/v;y*=L,x*=L,M=y*(y+u*x+2*f)+x*(u*y+x+2*h)+m}else x=l,y=Math.max(0,-(u*x+f)),M=-y*y+x*(x+2*h)+m;else x=-l,y=Math.max(0,-(u*x+f)),M=-y*y+x*(x+2*h)+m;else x<=-C?(y=Math.max(0,-(-u*l+f)),x=y>0?-l:Math.min(Math.max(-l,-h),l),M=-y*y+x*(x+2*h)+m):x<=C?(y=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+m):(y=Math.max(0,-(u*l+f)),x=y>0?l:Math.min(Math.max(-l,-h),l),M=-y*y+x*(x+2*h)+m);else x=u>0?-l:l,y=Math.max(0,-(u*x+f)),M=-y*y+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(yd).addScaledVector(Il,x),M}intersectSphere(e,t){Tr.subVectors(e.center,this.origin);const r=Tr.dot(this.direction),o=Tr.dot(Tr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-x.z)*y,h=(e.max.z-x.z)*y):(f=(e.max.z-x.z)*y,h=(e.min.z-x.z)*y),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,r,o,l){Sd.subVectors(t,e),Dl.subVectors(r,e),Md.crossVectors(Sd,Dl);let u=this.direction.dot(Md),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Qr.subVectors(this.origin,e);const h=f*this.direction.dot(Dl.crossVectors(Qr,Dl));if(h<0)return null;const m=f*this.direction.dot(Sd.cross(Qr));if(m<0||h+m>u)return null;const v=-f*Qr.dot(Md);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ss extends pc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new un(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.combine=H0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jm=new An,ws=new M_,Ll=new Gf,Wm=new ie,Ul=new ie,Fl=new ie,Ol=new ie,wd=new ie,kl=new ie,Xm=new ie,Bl=new ie;class ri extends wi{constructor(e=new Ei,t=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){kl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const v=f[h],y=l[h];v!==0&&(wd.fromBufferAttribute(y,e),u?kl.addScaledVector(wd,v):kl.addScaledVector(wd.sub(t),v))}t.add(kl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(l),ws.copy(e.ray).recast(e.near),!(Ll.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Ll,Wm)===null||ws.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(jm.copy(l).invert(),ws.copy(e.ray).applyMatrix4(jm),!(r.boundingBox!==null&&ws.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let C=0,L=x.length;C<L;C++){const S=x[C],_=u[S.materialIndex],D=Math.max(S.start,M.start),R=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let N=D,H=R;N<H;N+=3){const F=f.getX(N),z=f.getX(N+1),w=f.getX(N+2);o=zl(this,_,e,r,m,v,y,F,z,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),L=Math.min(f.count,M.start+M.count);for(let S=C,_=L;S<_;S+=3){const D=f.getX(S),R=f.getX(S+1),N=f.getX(S+2);o=zl(this,u,e,r,m,v,y,D,R,N),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let C=0,L=x.length;C<L;C++){const S=x[C],_=u[S.materialIndex],D=Math.max(S.start,M.start),R=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let N=D,H=R;N<H;N+=3){const F=N,z=N+1,w=N+2;o=zl(this,_,e,r,m,v,y,F,z,w),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const C=Math.max(0,M.start),L=Math.min(h.count,M.start+M.count);for(let S=C,_=L;S<_;S+=3){const D=S,R=S+1,N=S+2;o=zl(this,u,e,r,m,v,y,D,R,N),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function w_(s,e,t,r,o,l,u,f){let h;if(e.side===pi?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===as,f),h===null)return null;Bl.copy(f),Bl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Bl);return m<t.near||m>t.far?null:{distance:m,point:Bl.clone(),object:s}}function zl(s,e,t,r,o,l,u,f,h,m){s.getVertexPosition(f,Ul),s.getVertexPosition(h,Fl),s.getVertexPosition(m,Ol);const v=w_(s,e,t,r,Ul,Fl,Ol,Xm);if(v){const y=new ie;Ki.getBarycoord(Xm,Ul,Fl,Ol,y),o&&(v.uv=Ki.getInterpolatedAttribute(o,f,h,m,y,new Dt)),l&&(v.uv1=Ki.getInterpolatedAttribute(l,f,h,m,y,new Dt)),u&&(v.normal=Ki.getInterpolatedAttribute(u,f,h,m,y,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new ie,materialIndex:0};Ki.getNormal(Ul,Fl,Ol,x.normal),v.face=x,v.barycoord=y}return v}class E_ extends ii{constructor(e=null,t=1,r=1,o,l,u,f,h,m=Hn,v=Hn,y,x){super(null,u,f,h,m,v,o,l,y,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new ie,b_=new ie,T_=new zt;class Ts{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Ed.subVectors(r,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Ed),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||T_.getNormalMatrix(e),o=this.coplanarPoint(Ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Gf,A_=new Dt(.5,.5),Vl=new ie;class ug{constructor(e=new Ts,t=new Ts,r=new Ts,o=new Ts,l=new Ts,u=new Ts){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=or,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],m=l[3],v=l[4],y=l[5],x=l[6],M=l[7],C=l[8],L=l[9],S=l[10],_=l[11],D=l[12],R=l[13],N=l[14],H=l[15];if(o[0].setComponents(m-u,M-v,_-C,H-D).normalize(),o[1].setComponents(m+u,M+v,_+C,H+D).normalize(),o[2].setComponents(m+f,M+y,_+L,H+R).normalize(),o[3].setComponents(m-f,M-y,_-L,H-R).normalize(),r)o[4].setComponents(h,x,S,N).normalize(),o[5].setComponents(m-h,M-x,_-S,H-N).normalize();else if(o[4].setComponents(m-h,M-x,_-S,H-N).normalize(),t===or)o[5].setComponents(m+h,M+x,_+S,H+N).normalize();else if(t===ac)o[5].setComponents(h,x,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=A_.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Vl.x=o.normal.x>0?e.max.x:e.min.x,Vl.y=o.normal.y>0?e.max.y:e.min.y,Vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dg extends ii{constructor(e=[],t=Is,r,o,l,u,f,h,m,v){super(e,t,r,o,l,u,f,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ea extends ii{constructor(e,t,r=dr,o,l,u,f=Hn,h=Hn,m,v=Ir,y=1){if(v!==Ir&&v!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:y};super(x,o,l,u,f,h,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class C_ extends Ea{constructor(e,t=dr,r=Is,o,l,u=Hn,f=Hn,h,m=Ir){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fg extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Eo extends Ei{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],v=[],y=[];let x=0,M=0;C("z","y","x",-1,-1,r,t,e,u,l,0),C("z","y","x",1,-1,r,t,-e,u,l,1),C("x","z","y",1,1,e,r,t,o,u,2),C("x","z","y",1,-1,e,r,-t,o,u,3),C("x","y","z",1,-1,e,t,r,o,l,4),C("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new En(m,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(y,2));function C(L,S,_,D,R,N,H,F,z,w,I){const q=N/z,k=H/w,Z=N/2,le=H/2,pe=F/2,j=z+1,oe=w+1;let te=0,se=0;const fe=new ie;for(let ce=0;ce<oe;ce++){const G=ce*k-le;for(let ne=0;ne<j;ne++){const $e=ne*q-Z;fe[L]=$e*D,fe[S]=G*R,fe[_]=pe,m.push(fe.x,fe.y,fe.z),fe[L]=0,fe[S]=0,fe[_]=F>0?1:-1,v.push(fe.x,fe.y,fe.z),y.push(ne/z),y.push(1-ce/w),te+=1}}for(let ce=0;ce<w;ce++)for(let G=0;G<z;G++){const ne=x+G+j*ce,$e=x+G+j*(ce+1),rt=x+(G+1)+j*(ce+1),Ue=x+(G+1)+j*ce;h.push(ne,$e,Ue),h.push($e,rt,Ue),se+=6}f.addGroup(M,se,I),M+=se,x+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jf extends Ei{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const m=this;o=Math.floor(o),l=Math.floor(l);const v=[],y=[],x=[],M=[];let C=0;const L=[],S=r/2;let _=0;D(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new En(y,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(M,2));function D(){const N=new ie,H=new ie;let F=0;const z=(t-e)/r;for(let w=0;w<=l;w++){const I=[],q=w/l,k=q*(t-e)+e;for(let Z=0;Z<=o;Z++){const le=Z/o,pe=le*h+f,j=Math.sin(pe),oe=Math.cos(pe);H.x=k*j,H.y=-q*r+S,H.z=k*oe,y.push(H.x,H.y,H.z),N.set(j,z,oe).normalize(),x.push(N.x,N.y,N.z),M.push(le,1-q),I.push(C++)}L.push(I)}for(let w=0;w<o;w++)for(let I=0;I<l;I++){const q=L[I][w],k=L[I+1][w],Z=L[I+1][w+1],le=L[I][w+1];(e>0||I!==0)&&(v.push(q,k,le),F+=3),(t>0||I!==l-1)&&(v.push(k,Z,le),F+=3)}m.addGroup(_,F,0),_+=F}function R(N){const H=C,F=new Dt,z=new ie;let w=0;const I=N===!0?e:t,q=N===!0?1:-1;for(let Z=1;Z<=o;Z++)y.push(0,S*q,0),x.push(0,q,0),M.push(.5,.5),C++;const k=C;for(let Z=0;Z<=o;Z++){const pe=Z/o*h+f,j=Math.cos(pe),oe=Math.sin(pe);z.x=I*oe,z.y=S*q,z.z=I*j,y.push(z.x,z.y,z.z),x.push(0,q,0),F.x=j*.5+.5,F.y=oe*.5*q+.5,M.push(F.x,F.y),C++}for(let Z=0;Z<o;Z++){const le=H+Z,pe=k+Z;N===!0?v.push(pe,pe+1,le):v.push(pe+1,pe,le),w+=3}m.addGroup(_,w,N===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lc extends jf{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new lc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,m;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),m=r[o]-u,m<0)f=o+1;else if(m>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const v=r[o],x=r[o+1]-v,M=(u-v)/x;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new Dt:new ie);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new ie,o=[],l=[],u=[],f=new ie,h=new An;for(let M=0;M<=e;M++){const C=M/e;o[M]=this.getTangentAt(C,new ie)}l[0]=new ie,u[0]=new ie;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),y=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=m&&(m=v,r.set(1,0,0)),y<=m&&(m=y,r.set(0,1,0)),x<=m&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),f.crossVectors(o[M-1],o[M]),f.length()>Number.EPSILON){f.normalize();const C=Math.acos(Zt(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(f,C))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(Zt(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(M=-M);for(let C=1;C<=e;C++)l[C].applyMatrix4(h.makeRotationAxis(o[C],M*C)),u[C].crossVectors(o[C],l[C])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hg extends Dr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Dt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),m=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),y=Math.sin(this.aRotation),x=h-this.aX,M=m-this.aY;h=x*v-M*y+this.aX,m=x*y+M*v+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class R_ extends hg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Wf(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,m){o(u,f,m*(f-l),m*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,m,v,y){let x=(u-l)/m-(f-l)/(m+v)+(f-u)/v,M=(f-u)/v-(h-u)/(v+y)+(h-f)/y;x*=v,M*=v,o(u,f,x,M)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const Ym=new ie,$m=new ie,bd=new Wf,Td=new Wf,Ad=new Wf;class Xf extends Dr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new ie){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let m,v;this.closed||f>0?m=o[(f-1)%l]:($m.subVectors(o[0],o[1]).add(o[0]),m=$m);const y=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Ym.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Ym),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let C=Math.pow(m.distanceToSquared(y),M),L=Math.pow(y.distanceToSquared(x),M),S=Math.pow(x.distanceToSquared(v),M);L<1e-4&&(L=1),C<1e-4&&(C=L),S<1e-4&&(S=L),bd.initNonuniformCatmullRom(m.x,y.x,x.x,v.x,C,L,S),Td.initNonuniformCatmullRom(m.y,y.y,x.y,v.y,C,L,S),Ad.initNonuniformCatmullRom(m.z,y.z,x.z,v.z,C,L,S)}else this.curveType==="catmullrom"&&(bd.initCatmullRom(m.x,y.x,x.x,v.x,this.tension),Td.initCatmullRom(m.y,y.y,x.y,v.y,this.tension),Ad.initCatmullRom(m.z,y.z,x.z,v.z,this.tension));return r.set(bd.calc(h),Td.calc(h),Ad.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ie().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function N_(s,e){const t=1-s;return t*t*e}function P_(s,e){return 2*(1-s)*s*e}function I_(s,e){return s*s*e}function vo(s,e,t,r){return N_(s,e)+P_(s,t)+I_(s,r)}function D_(s,e){const t=1-s;return t*t*t*e}function L_(s,e){const t=1-s;return 3*t*t*s*e}function U_(s,e){return 3*(1-s)*s*s*e}function F_(s,e){return s*s*s*e}function _o(s,e,t,r,o){return D_(s,e)+L_(s,t)+U_(s,r)+F_(s,o)}class O_ extends Dr{constructor(e=new Dt,t=new Dt,r=new Dt,o=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Dt){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(_o(e,o.x,l.x,u.x,f.x),_o(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class k_ extends Dr{constructor(e=new ie,t=new ie,r=new ie,o=new ie){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(_o(e,o.x,l.x,u.x,f.x),_o(e,o.y,l.y,u.y,f.y),_o(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class B_ extends Dr{constructor(e=new Dt,t=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Dt){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Dt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z_ extends Dr{constructor(e=new ie,t=new ie){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ie){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V_ extends Dr{constructor(e=new Dt,t=new Dt,r=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Dt){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(vo(e,o.x,l.x,u.x),vo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pg extends Dr{constructor(e=new ie,t=new ie,r=new ie){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ie){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(vo(e,o.x,l.x,u.x),vo(e,o.y,l.y,u.y),vo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H_ extends Dr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Dt){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],m=o[u],v=o[u>o.length-2?o.length-1:u+1],y=o[u>o.length-3?o.length-1:u+2];return r.set(qm(f,h.x,m.x,v.x,y.x),qm(f,h.y,m.y,v.y,y.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Dt().fromArray(o))}return this}}var G_=Object.freeze({__proto__:null,ArcCurve:R_,CatmullRomCurve3:Xf,CubicBezierCurve:O_,CubicBezierCurve3:k_,EllipseCurve:hg,LineCurve:B_,LineCurve3:z_,QuadraticBezierCurve:V_,QuadraticBezierCurve3:pg,SplineCurve:H_});class mc extends Ei{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),m=f+1,v=h+1,y=e/f,x=t/h,M=[],C=[],L=[],S=[];for(let _=0;_<v;_++){const D=_*x-u;for(let R=0;R<m;R++){const N=R*y-l;C.push(N,-D,0),L.push(0,0,1),S.push(R/f),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let D=0;D<f;D++){const R=D+m*_,N=D+m*(_+1),H=D+1+m*(_+1),F=D+1+m*_;M.push(R,N,F),M.push(N,H,F)}this.setIndex(M),this.setAttribute("position",new En(C,3)),this.setAttribute("normal",new En(L,3)),this.setAttribute("uv",new En(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yf extends Ei{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],m=[],v=[];let y=e;const x=(t-e)/o,M=new ie,C=new Dt;for(let L=0;L<=o;L++){for(let S=0;S<=r;S++){const _=l+S/r*u;M.x=y*Math.cos(_),M.y=y*Math.sin(_),h.push(M.x,M.y,M.z),m.push(0,0,1),C.x=(M.x/t+1)/2,C.y=(M.y/t+1)/2,v.push(C.x,C.y)}y+=x}for(let L=0;L<o;L++){const S=L*(r+1);for(let _=0;_<r;_++){const D=_+S,R=D,N=D+r+1,H=D+r+2,F=D+1;f.push(R,N,F),f.push(N,H,F)}}this.setIndex(f),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(m,3)),this.setAttribute("uv",new En(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cc extends Ei{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const v=[],y=new ie,x=new ie,M=[],C=[],L=[],S=[];for(let _=0;_<=r;_++){const D=[],R=_/r;let N=0;_===0&&u===0?N=.5/t:_===r&&h===Math.PI&&(N=-.5/t);for(let H=0;H<=t;H++){const F=H/t;y.x=-e*Math.cos(o+F*l)*Math.sin(u+R*f),y.y=e*Math.cos(u+R*f),y.z=e*Math.sin(o+F*l)*Math.sin(u+R*f),C.push(y.x,y.y,y.z),x.copy(y).normalize(),L.push(x.x,x.y,x.z),S.push(F+N,1-R),D.push(m++)}v.push(D)}for(let _=0;_<r;_++)for(let D=0;D<t;D++){const R=v[_][D+1],N=v[_][D],H=v[_+1][D],F=v[_+1][D+1];(_!==0||u>0)&&M.push(R,N,F),(_!==r-1||h<Math.PI)&&M.push(N,H,F)}this.setIndex(M),this.setAttribute("position",new En(C,3)),this.setAttribute("normal",new En(L,3)),this.setAttribute("uv",new En(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $f extends Ei{constructor(e=new pg(new ie(-1,-1,0),new ie(-1,1,0),new ie(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new ie,h=new ie,m=new Dt;let v=new ie;const y=[],x=[],M=[],C=[];L(),this.setIndex(C),this.setAttribute("position",new En(y,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(M,2));function L(){for(let R=0;R<t;R++)S(R);S(l===!1?t:0),D(),_()}function S(R){v=e.getPointAt(R/t,v);const N=u.normals[R],H=u.binormals[R];for(let F=0;F<=o;F++){const z=F/o*Math.PI*2,w=Math.sin(z),I=-Math.cos(z);h.x=I*N.x+w*H.x,h.y=I*N.y+w*H.y,h.z=I*N.z+w*H.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,y.push(f.x,f.y,f.z)}}function _(){for(let R=1;R<=t;R++)for(let N=1;N<=o;N++){const H=(o+1)*(R-1)+(N-1),F=(o+1)*R+(N-1),z=(o+1)*R+N,w=(o+1)*(R-1)+N;C.push(H,F,w),C.push(F,z,w)}}function D(){for(let R=0;R<=t;R++)for(let N=0;N<=o;N++)m.x=R/t,m.y=N/o,M.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $f(new G_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ba(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Km(o))o.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Km(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function ni(s){const e={};for(let t=0;t<s.length;t++){const r=ba(s[t]);for(const o in r)e[o]=r[o]}return e}function Km(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function j_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Jt.workingColorSpace}const W_={clone:ba,merge:ni};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends pc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=Y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=j_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class $_ extends fr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class q_ extends pc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K_ extends pc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hl=new ie,Gl=new Ta,ir=new ie;let gg=class extends wi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=or,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Gl,ir),ir.x===1&&ir.y===1&&ir.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,ir.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hl,Gl,ir),ir.x===1&&ir.y===1&&ir.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,ir.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const es=new ie,Zm=new Dt,Jm=new Dt;class Fi extends gg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tf*2*Math.atan(Math.tan(td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Zm,Jm),t.subVectors(Jm,Zm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(td*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xg extends gg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ma=-90,ga=1;class Z_ extends wi{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Fi(ma,ga,e,t);o.layers=this.layers,this.add(o);const l=new Fi(ma,ga,e,t);l.layers=this.layers,this.add(l);const u=new Fi(ma,ga,e,t);u.layers=this.layers,this.add(u);const f=new Fi(ma,ga,e,t);f.layers=this.layers,this.add(f);const h=new Fi(ma,ga,e,t);h.layers=this.layers,this.add(h);const m=new Fi(ma,ga,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const m of t)this.remove(m);if(e===or)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ac)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,m,v]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const L=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=L,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(y,x,M),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class J_ extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qf=class Qf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Qf.prototype.isMatrix2=!0;let Qm=Qf;function e0(s,e,t,r){const o=Q_(r);switch(t){case tg:return s*e;case ig:return s*e/o.components*o.byteLength;case Of:return s*e/o.components*o.byteLength;case Ds:return s*e*2/o.components*o.byteLength;case kf:return s*e*2/o.components*o.byteLength;case ng:return s*e*3/o.components*o.byteLength;case Zi:return s*e*4/o.components*o.byteLength;case Bf:return s*e*4/o.components*o.byteLength;case Kl:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:case Zd:return Math.max(s,16)*Math.max(e,8)/4;case $d:case Kd:return Math.max(s,8)*Math.max(e,8)/2;case Jd:case Qd:case tf:case nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ef:case nc:case rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case of:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case lf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case cf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case uf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case df:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case hf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case mf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case gf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case xf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _f:case yf:case Sf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Mf:case wf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ic:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Q_(s){switch(s){case Oi:case Z0:return{byteLength:1,components:1};case yo:case J0:case Pr:return{byteLength:2,components:1};case Uf:case Ff:return{byteLength:2,components:4};case dr:case Lf:case ar:return{byteLength:4,components:1};case Q0:case eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ey(s){const e=new WeakMap;function t(f,h){const m=f.array,v=f.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,h,m){const v=h.array,y=h.updateRanges;if(s.bindBuffer(m,f),y.length===0)s.bufferSubData(m,0,v);else{y.sort((M,C)=>M.start-C.start);let x=0;for(let M=1;M<y.length;M++){const C=y[x],L=y[M];L.start<=C.start+C.count+1?C.count=Math.max(C.count,L.start+L.count-C.start):(++x,y[x]=L)}y.length=x+1;for(let M=0,C=y.length;M<C;M++){const L=y[M];s.bufferSubData(m,L.start*v.BYTES_PER_ELEMENT,v,L.start,L.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:l,update:u}}var ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ny=`#ifdef USE_ALPHAHASH
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
#endif`,iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
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
#endif`,ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cy=`#ifdef USE_BATCHING
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
#endif`,uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,py=`#ifdef USE_IRIDESCENCE
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
#endif`,my=`#ifdef USE_BUMPMAP
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
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
} // validated`,by=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ty=`vec3 transformedNormal = objectNormal;
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
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,By=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hy=`#ifdef USE_GRADIENTMAP
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
}`,Gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yy=`#ifdef USE_ENVMAP
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
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jy=`PhysicalMaterial material;
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
#endif`,Qy=`uniform sampler2D dfgLUT;
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
}`,eS=`
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dS=`#if defined( USE_POINTS_UV )
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
#endif`,fS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xS=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
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
#endif`,bS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,US=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zS=`float getShadowMask() {
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
}`,VS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,GS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$S=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n1=`uniform sampler2D t2D;
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`#include <common>
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
}`,l1=`#if DEPTH_PACKING == 3200
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
}`,c1=`#define DISTANCE
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
}`,u1=`#define DISTANCE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`uniform float scale;
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#include <common>
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
}`,g1=`uniform vec3 diffuse;
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
}`,x1=`#define LAMBERT
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
}`,v1=`#define LAMBERT
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
}`,_1=`#define MATCAP
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
}`,y1=`#define MATCAP
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
}`,S1=`#define NORMAL
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
}`,M1=`#define NORMAL
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
}`,w1=`#define PHONG
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
}`,b1=`#define STANDARD
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
}`,T1=`#define STANDARD
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
}`,A1=`#define TOON
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
}`,C1=`#define TOON
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
}`,R1=`uniform float size;
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
}`,N1=`uniform vec3 diffuse;
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
}`,P1=`#include <common>
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
}`,I1=`uniform vec3 color;
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
}`,D1=`uniform float rotation;
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
}`,L1=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:ty,alphahash_pars_fragment:ny,alphamap_fragment:iy,alphamap_pars_fragment:ry,alphatest_fragment:sy,alphatest_pars_fragment:ay,aomap_fragment:oy,aomap_pars_fragment:ly,batching_pars_vertex:cy,batching_vertex:uy,begin_vertex:dy,beginnormal_vertex:fy,bsdfs:hy,iridescence_fragment:py,bumpmap_pars_fragment:my,clipping_planes_fragment:gy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:vy,clipping_planes_vertex:_y,color_fragment:yy,color_pars_fragment:Sy,color_pars_vertex:My,color_vertex:wy,common:Ey,cube_uv_reflection_fragment:by,defaultnormal_vertex:Ty,displacementmap_pars_vertex:Ay,displacementmap_vertex:Cy,emissivemap_fragment:Ry,emissivemap_pars_fragment:Ny,colorspace_fragment:Py,colorspace_pars_fragment:Iy,envmap_fragment:Dy,envmap_common_pars_fragment:Ly,envmap_pars_fragment:Uy,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:Yy,envmap_vertex:Oy,fog_vertex:ky,fog_pars_vertex:By,fog_fragment:zy,fog_pars_fragment:Vy,gradientmap_pars_fragment:Hy,lightmap_pars_fragment:Gy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Wy,lights_pars_begin:Xy,lights_toon_fragment:$y,lights_toon_pars_fragment:qy,lights_phong_fragment:Ky,lights_phong_pars_fragment:Zy,lights_physical_fragment:Jy,lights_physical_pars_fragment:Qy,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,lightprobes_pars_fragment:iS,logdepthbuf_fragment:rS,logdepthbuf_pars_fragment:sS,logdepthbuf_pars_vertex:aS,logdepthbuf_vertex:oS,map_fragment:lS,map_pars_fragment:cS,map_particle_fragment:uS,map_particle_pars_fragment:dS,metalnessmap_fragment:fS,metalnessmap_pars_fragment:hS,morphinstance_vertex:pS,morphcolor_vertex:mS,morphnormal_vertex:gS,morphtarget_pars_vertex:xS,morphtarget_vertex:vS,normal_fragment_begin:_S,normal_fragment_maps:yS,normal_pars_fragment:SS,normal_pars_vertex:MS,normal_vertex:wS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:bS,clearcoat_normal_fragment_maps:TS,clearcoat_pars_fragment:AS,iridescence_pars_fragment:CS,opaque_fragment:RS,packing:NS,premultiplied_alpha_fragment:PS,project_vertex:IS,dithering_fragment:DS,dithering_pars_fragment:LS,roughnessmap_fragment:US,roughnessmap_pars_fragment:FS,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:kS,shadowmap_vertex:BS,shadowmask_pars_fragment:zS,skinbase_vertex:VS,skinning_pars_vertex:HS,skinning_vertex:GS,skinnormal_vertex:jS,specularmap_fragment:WS,specularmap_pars_fragment:XS,tonemapping_fragment:YS,tonemapping_pars_fragment:$S,transmission_fragment:qS,transmission_pars_fragment:KS,uv_pars_fragment:ZS,uv_pars_vertex:JS,uv_vertex:QS,worldpos_vertex:e1,background_vert:t1,background_frag:n1,backgroundCube_vert:i1,backgroundCube_frag:r1,cube_vert:s1,cube_frag:a1,depth_vert:o1,depth_frag:l1,distance_vert:c1,distance_frag:u1,equirect_vert:d1,equirect_frag:f1,linedashed_vert:h1,linedashed_frag:p1,meshbasic_vert:m1,meshbasic_frag:g1,meshlambert_vert:x1,meshlambert_frag:v1,meshmatcap_vert:_1,meshmatcap_frag:y1,meshnormal_vert:S1,meshnormal_frag:M1,meshphong_vert:w1,meshphong_frag:E1,meshphysical_vert:b1,meshphysical_frag:T1,meshtoon_vert:A1,meshtoon_frag:C1,points_vert:R1,points_frag:N1,shadow_vert:P1,shadow_frag:I1,sprite_vert:D1,sprite_frag:L1},at={common:{diffuse:{value:new un(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new un(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new un(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new un(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},sr={basic:{uniforms:ni([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:ni([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new un(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:ni([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new un(0)},specular:{value:new un(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:ni([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new un(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:ni([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new un(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:ni([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:ni([at.points,at.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:ni([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:ni([at.common,at.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:ni([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:ni([at.sprite,at.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:ni([at.common,at.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:ni([at.lights,at.fog,{color:{value:new un(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};sr.physical={uniforms:ni([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new un(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new un(0)},specularColor:{value:new un(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const jl={r:0,b:0,g:0},U1=new An,_g=new zt;_g.set(-1,0,0,0,1,0,0,0,1);function F1(s,e,t,r,o,l){const u=new un(0);let f=o===!0?0:1,h,m,v=null,y=0,x=null;function M(D){let R=D.isScene===!0?D.background:null;if(R&&R.isTexture){const N=D.backgroundBlurriness>0;R=e.get(R,N)}return R}function C(D){let R=!1;const N=M(D);N===null?S(u,f):N&&N.isColor&&(S(N,1),R=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?t.buffers.color.setClear(0,0,0,1,l):H==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function L(D,R){const N=M(R);N&&(N.isCubeTexture||N.mapping===hc)?(m===void 0&&(m=new ri(new Eo(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:ba(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(H,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(R.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(_g),m.material.toneMapped=Jt.getTransfer(N.colorSpace)!==ln,(v!==N||y!==N.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,v=N,y=N.version,x=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new ri(new mc(2,2),new fr({name:"BackgroundMaterial",uniforms:ba(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(N.colorSpace)!==ln,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||y!==N.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,v=N,y=N.version,x=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function S(D,R){D.getRGB(jl,mg(s)),t.buffers.color.setClear(jl.r,jl.g,jl.b,R,l)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,R=1){u.set(D),f=R,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,S(u,f)},render:C,addToRenderList:L,dispose:_}}function O1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(k,Z,le,pe,j){let oe=!1;const te=y(k,pe,le,Z);l!==te&&(l=te,m(l.object)),oe=M(k,pe,le,j),oe&&C(k,pe,le,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,N(k,Z,le,pe),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function h(){return s.createVertexArray()}function m(k){return s.bindVertexArray(k)}function v(k){return s.deleteVertexArray(k)}function y(k,Z,le,pe){const j=pe.wireframe===!0;let oe=r[Z.id];oe===void 0&&(oe={},r[Z.id]=oe);const te=k.isInstancedMesh===!0?k.id:0;let se=oe[te];se===void 0&&(se={},oe[te]=se);let fe=se[le.id];fe===void 0&&(fe={},se[le.id]=fe);let ce=fe[j];return ce===void 0&&(ce=x(h()),fe[j]=ce),ce}function x(k){const Z=[],le=[],pe=[];for(let j=0;j<t;j++)Z[j]=0,le[j]=0,pe[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:le,attributeDivisors:pe,object:k,attributes:{},index:null}}function M(k,Z,le,pe){const j=l.attributes,oe=Z.attributes;let te=0;const se=le.getAttributes();for(const fe in se)if(se[fe].location>=0){const G=j[fe];let ne=oe[fe];if(ne===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor)),G===void 0||G.attribute!==ne||ne&&G.data!==ne.data)return!0;te++}return l.attributesNum!==te||l.index!==pe}function C(k,Z,le,pe){const j={},oe=Z.attributes;let te=0;const se=le.getAttributes();for(const fe in se)if(se[fe].location>=0){let G=oe[fe];G===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(G=k.instanceColor));const ne={};ne.attribute=G,G&&G.data&&(ne.data=G.data),j[fe]=ne,te++}l.attributes=j,l.attributesNum=te,l.index=pe}function L(){const k=l.newAttributes;for(let Z=0,le=k.length;Z<le;Z++)k[Z]=0}function S(k){_(k,0)}function _(k,Z){const le=l.newAttributes,pe=l.enabledAttributes,j=l.attributeDivisors;le[k]=1,pe[k]===0&&(s.enableVertexAttribArray(k),pe[k]=1),j[k]!==Z&&(s.vertexAttribDivisor(k,Z),j[k]=Z)}function D(){const k=l.newAttributes,Z=l.enabledAttributes;for(let le=0,pe=Z.length;le<pe;le++)Z[le]!==k[le]&&(s.disableVertexAttribArray(le),Z[le]=0)}function R(k,Z,le,pe,j,oe,te){te===!0?s.vertexAttribIPointer(k,Z,le,j,oe):s.vertexAttribPointer(k,Z,le,pe,j,oe)}function N(k,Z,le,pe){L();const j=pe.attributes,oe=le.getAttributes(),te=Z.defaultAttributeValues;for(const se in oe){const fe=oe[se];if(fe.location>=0){let ce=j[se];if(ce===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(ce=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(ce=k.instanceColor)),ce!==void 0){const G=ce.normalized,ne=ce.itemSize,$e=e.get(ce);if($e===void 0)continue;const rt=$e.buffer,Ue=$e.type,de=$e.bytesPerElement,be=Ue===s.INT||Ue===s.UNSIGNED_INT||ce.gpuType===Lf;if(ce.isInterleavedBufferAttribute){const ye=ce.data,ke=ye.stride,ot=ce.offset;if(ye.isInstancedInterleavedBuffer){for(let et=0;et<fe.locationSize;et++)_(fe.location+et,ye.meshPerAttribute);k.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<fe.locationSize;et++)S(fe.location+et);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let et=0;et<fe.locationSize;et++)R(fe.location+et,ne/fe.locationSize,Ue,G,ke*de,(ot+ne/fe.locationSize*et)*de,be)}else{if(ce.isInstancedBufferAttribute){for(let ye=0;ye<fe.locationSize;ye++)_(fe.location+ye,ce.meshPerAttribute);k.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<fe.locationSize;ye++)S(fe.location+ye);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let ye=0;ye<fe.locationSize;ye++)R(fe.location+ye,ne/fe.locationSize,Ue,G,ne*de,ne/fe.locationSize*ye*de,be)}}else if(te!==void 0){const G=te[se];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(fe.location,G);break;case 3:s.vertexAttrib3fv(fe.location,G);break;case 4:s.vertexAttrib4fv(fe.location,G);break;default:s.vertexAttrib1fv(fe.location,G)}}}}D()}function H(){I();for(const k in r){const Z=r[k];for(const le in Z){const pe=Z[le];for(const j in pe){const oe=pe[j];for(const te in oe)v(oe[te].object),delete oe[te];delete pe[j]}}delete r[k]}}function F(k){if(r[k.id]===void 0)return;const Z=r[k.id];for(const le in Z){const pe=Z[le];for(const j in pe){const oe=pe[j];for(const te in oe)v(oe[te].object),delete oe[te];delete pe[j]}}delete r[k.id]}function z(k){for(const Z in r){const le=r[Z];for(const pe in le){const j=le[pe];if(j[k.id]===void 0)continue;const oe=j[k.id];for(const te in oe)v(oe[te].object),delete oe[te];delete j[k.id]}}}function w(k){for(const Z in r){const le=r[Z],pe=k.isInstancedMesh===!0?k.id:0,j=le[pe];if(j!==void 0){for(const oe in j){const te=j[oe];for(const se in te)v(te[se].object),delete te[se];delete j[oe]}delete le[pe],Object.keys(le).length===0&&delete r[Z]}}}function I(){q(),u=!0,l!==o&&(l=o,m(l.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:q,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfObject:w,releaseStatesOfProgram:z,initAttributes:L,enableAttribute:S,disableUnusedAttributes:D}}function k1(s,e,t){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,v){v!==0&&(s.drawArraysInstanced(r,h,m,v),t.update(m,r,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,v);let x=0;for(let M=0;M<v;M++)x+=m[M];t.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function B1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Zi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const w=z===Pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Oi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ar&&!w)}function h(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=h(m);v!==m&&(It("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:C,maxTextureSize:L,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:N,maxSamples:H,samples:F}}function z1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ts,f=new zt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||o;return o=x,r=y.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,x){t=v(y,x,0)},this.setState=function(y,x,M){const C=y.clippingPlanes,L=y.clipIntersection,S=y.clipShadows,_=s.get(y);if(!o||C===null||C.length===0||l&&!S)l?v(null):m();else{const D=l?0:r,R=D*4;let N=_.clippingState||null;h.value=N,N=v(C,x,R,M);for(let H=0;H!==R;++H)N[H]=t[H];_.clippingState=N,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,x,M,C){const L=y!==null?y.length:0;let S=null;if(L!==0){if(S=h.value,C!==!0||S===null){const _=M+L*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<_)&&(S=new Float32Array(_));for(let R=0,N=M;R!==L;++R,N+=4)u.copy(y[R]).applyMatrix4(D,f),u.normal.toArray(S,N),S[N+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,S}}const rs=4,t0=[.125,.215,.35,.446,.526,.582],Cs=20,V1=256,co=new xg,n0=new un;let Cd=null,Rd=0,Nd=0,Pd=!1;const H1=new ie;class i0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=H1}=l;Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,Rd,Nd),this._renderer.xr.enabled=Pd,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Pr,format:Zi,colorSpace:rc,depthBuffer:!1},o=r0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G1(l)),this._blurMaterial=W1(l,e,t),this._ggxMaterial=j1(l,e,t)}return o}_compileMaterial(e){const t=new ri(new Ei,e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,r,o,l){const h=new Fi(90,1,t,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,x=y.autoClear,M=y.toneMapping;y.getClearColor(n0),y.toneMapping=lr,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new Eo,new ss({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,S=L.material;let _=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,_=!0):(S.color.copy(n0),_=!0);for(let R=0;R<6;R++){const N=R%3;N===0?(h.up.set(0,m[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[R],l.y,l.z)):N===1?(h.up.set(0,0,m[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[R],l.z)):(h.up.set(0,m[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[R]));const H=this._cubeSize;xa(o,N*H,R>2?H:0,H,H),y.setRenderTarget(o),_&&y.render(L,h),y.render(e,h)}y.toneMapping=M,y.autoClear=x,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Is||e.mapping===wa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;xa(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,co)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),y=Math.sqrt(m*m-v*v),x=0+m*1.25,M=y*x,{_lodMax:C}=this,L=this._sizeLods[r],S=3*L*(r>C-rs?r-C+rs:0),_=4*(this._cubeSize-L);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=C-t,xa(l,S,_,3*L,2*L),o.setRenderTarget(l),o.render(f,co),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=C-r,xa(e,S,_,3*L,2*L),o.setRenderTarget(e),o.render(f,co)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[o];y.material=m;const x=m.uniforms,M=this._sizeLods[r]-1,C=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Cs-1),L=l/C,S=isFinite(l)?1+Math.floor(v*L):Cs;S>Cs&&It(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cs}`);const _=[];let D=0;for(let z=0;z<Cs;++z){const w=z/L,I=Math.exp(-w*w/2);_.push(I),z===0?D+=I:z<S&&(D+=2*I)}for(let z=0;z<_.length;z++)_[z]=_[z]/D;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=C,x.mipInt.value=R-r;const N=this._sizeLods[o],H=3*N*(o>R-rs?o-R+rs:0),F=4*(this._cubeSize-N);xa(t,H,F,3*N,2*N),h.setRenderTarget(t),h.render(y,co)}}function G1(s){const e=[],t=[],r=[];let o=s;const l=s-rs+1+t0.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-rs?h=t0[u-s+rs-1]:u===0&&(h=0),t.push(h);const m=1/(f-2),v=-m,y=1+m,x=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,C=6,L=3,S=2,_=1,D=new Float32Array(L*C*M),R=new Float32Array(S*C*M),N=new Float32Array(_*C*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,w=F>2?0:-1,I=[z,w,0,z+2/3,w,0,z+2/3,w+1,0,z,w,0,z+2/3,w+1,0,z,w+1,0];D.set(I,L*C*F),R.set(x,S*C*F);const q=[F,F,F,F,F,F];N.set(q,_*C*F)}const H=new Ei;H.setAttribute("position",new ur(D,L)),H.setAttribute("uv",new ur(R,S)),H.setAttribute("faceIndex",new ur(N,_)),r.push(new ri(H,null)),o>rs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function r0(s,e,t){const r=new cr(s,e,t);return r.texture.mapping=hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xa(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function j1(s,e,t){return new fr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function W1(s,e,t){const r=new Float32Array(Cs),o=new ie(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function s0(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function a0(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}class yg extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new dg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Eo(5,5,5),l=new fr({name:"CubemapFromEquirect",uniforms:ba(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:pi,blending:Rr});l.uniforms.tEquirect.value=t;const u=new ri(o,l),f=t.minFilter;return t.minFilter===Rs&&(t.minFilter=Zn),new Z_(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function X1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===Ju||M===Qu)if(e.has(x)){const C=e.get(x).texture;return f(C,x.mapping)}else{const C=x.image;if(C&&C.height>0){const L=new yg(C.height);return L.fromEquirectangularTexture(s,x),e.set(x,L),x.addEventListener("dispose",m),f(L.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,C=M===Ju||M===Qu,L=M===Is||M===wa;if(C||L){let S=t.get(x);const _=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new i0(s)),S=C?r.fromEquirectangular(x,S):r.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,t.set(x,S),S.texture;if(S!==void 0)return S.texture;{const D=x.image;return C&&D&&D.height>0||L&&D&&h(D)?(r===null&&(r=new i0(s)),S=C?r.fromEquirectangular(x):r.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,t.set(x,S),x.addEventListener("dispose",v),S.texture):null}}}return x}function f(x,M){return M===Ju?x.mapping=Is:M===Qu&&(x.mapping=wa),x}function h(x){let M=0;const C=6;for(let L=0;L<C;L++)x[L]!==void 0&&M++;return M===C}function m(x){const M=x.target;M.removeEventListener("dispose",m);const C=e.get(M);C!==void 0&&(e.delete(M),C.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const C=t.get(M);C!==void 0&&(t.delete(M),C.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function Y1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&bf("WebGLRenderer: "+r+" extension not supported."),o}}}function $1(s,e,t,r){const o={},l=new WeakMap;function u(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const C in x.attributes)e.remove(x.attributes[C]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(y,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function h(y){const x=y.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(y){const x=[],M=y.index,C=y.attributes.position;let L=0;if(C===void 0)return;if(M!==null){const D=M.array;L=M.version;for(let R=0,N=D.length;R<N;R+=3){const H=D[R+0],F=D[R+1],z=D[R+2];x.push(H,F,F,z,z,H)}}else{const D=C.array;L=C.version;for(let R=0,N=D.length/3-1;R<N;R+=3){const H=R+0,F=R+1,z=R+2;x.push(H,F,F,z,z,H)}}const S=new(C.count>=65535?cg:lg)(x,1);S.version=L;const _=l.get(y);_&&e.remove(_),l.set(y,S)}function v(y){const x=l.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return l.get(y)}return{get:f,update:h,getWireframeAttribute:v}}function q1(s,e,t){let r;function o(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function h(y,x){s.drawElements(r,x,l,y*u),t.update(x,r,1)}function m(y,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,y*u,M),t.update(x,r,M))}function v(y,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,y,0,M);let L=0;for(let S=0;S<M;S++)L+=x[S];t.update(L,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=v}function K1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:rn("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Z1(s,e,t){const r=new WeakMap,o=new wn;function l(u,f,h){const m=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==y){let q=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",q)};var M=q;x!==void 0&&x.texture.dispose();const C=f.morphAttributes.position!==void 0,L=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let N=0;C===!0&&(N=1),L===!0&&(N=2),S===!0&&(N=3);let H=f.attributes.position.count*N,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*F*4*y),w=new sg(z,H,F,y);w.type=ar,w.needsUpdate=!0;const I=N*4;for(let k=0;k<y;k++){const Z=_[k],le=D[k],pe=R[k],j=H*F*4*k;for(let oe=0;oe<Z.count;oe++){const te=oe*I;C===!0&&(o.fromBufferAttribute(Z,oe),z[j+te+0]=o.x,z[j+te+1]=o.y,z[j+te+2]=o.z,z[j+te+3]=0),L===!0&&(o.fromBufferAttribute(le,oe),z[j+te+4]=o.x,z[j+te+5]=o.y,z[j+te+6]=o.z,z[j+te+7]=0),S===!0&&(o.fromBufferAttribute(pe,oe),z[j+te+8]=o.x,z[j+te+9]=o.y,z[j+te+10]=o.z,z[j+te+11]=pe.itemSize===4?o.w:1)}}x={count:y,texture:w,size:new Dt(H,F)},r.set(f,x),f.addEventListener("dispose",q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let C=0;for(let S=0;S<m.length;S++)C+=m[S];const L=f.morphTargetsRelative?1:1-C;h.getUniforms().setValue(s,"morphTargetBaseInfluence",L),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function J1(s,e,t,r,o){let l=new WeakMap;function u(m){const v=o.render.frame,y=m.geometry,x=e.get(m,y);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==v&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function f(){l=new WeakMap}function h(m){const v=m.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const Q1={[G0]:"LINEAR_TONE_MAPPING",[j0]:"REINHARD_TONE_MAPPING",[W0]:"CINEON_TONE_MAPPING",[X0]:"ACES_FILMIC_TONE_MAPPING",[$0]:"AGX_TONE_MAPPING",[q0]:"NEUTRAL_TONE_MAPPING",[Y0]:"CUSTOM_TONE_MAPPING"};function eM(s,e,t,r,o){const l=new cr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Ea(e,t):void 0}),u=new cr(e,t,{type:Pr,depthBuffer:!1,stencilBuffer:!1}),f=new Ei;f.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new En([0,2,0,0,2,0],2));const h=new $_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new ri(f,h),v=new xg(-1,1,1,-1,0,1);let y=null,x=null,M=!1,C,L=null,S=[],_=!1;this.setSize=function(D,R){l.setSize(D,R),u.setSize(D,R);for(let N=0;N<S.length;N++){const H=S[N];H.setSize&&H.setSize(D,R)}},this.setEffects=function(D){S=D,_=S.length>0&&S[0].isRenderPass===!0;const R=l.width,N=l.height;for(let H=0;H<S.length;H++){const F=S[H];F.setSize&&F.setSize(R,N)}},this.begin=function(D,R){if(M||D.toneMapping===lr&&S.length===0)return!1;if(L=R,R!==null){const N=R.width,H=R.height;(l.width!==N||l.height!==H)&&this.setSize(N,H)}return _===!1&&D.setRenderTarget(l),C=D.toneMapping,D.toneMapping=lr,!0},this.hasRenderPass=function(){return _},this.end=function(D,R){D.toneMapping=C,M=!0;let N=l,H=u;for(let F=0;F<S.length;F++){const z=S[F];if(z.enabled!==!1&&(z.render(D,H,N,R),z.needsSwap!==!1)){const w=N;N=H,H=w}}if(y!==D.outputColorSpace||x!==D.toneMapping){y=D.outputColorSpace,x=D.toneMapping,h.defines={},Jt.getTransfer(y)===ln&&(h.defines.SRGB_TRANSFER="");const F=Q1[x];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(L),D.render(m,v),L=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const Sg=new ii,Af=new Ea(1,1),Mg=new sg,wg=new c_,Eg=new dg,o0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),d0=new Float32Array(4);function Aa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=o0[o];if(l===void 0&&(l=new Float32Array(o),o0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function Pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function In(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function xc(s,e){let t=l0[e];t===void 0&&(t=new Int32Array(e),l0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function tM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;s.uniform2fv(this.addr,e),In(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;s.uniform3fv(this.addr,e),In(t,e)}}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;s.uniform4fv(this.addr,e),In(t,e)}}function sM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,r))return;d0.set(r),s.uniformMatrix2fv(this.addr,!1,d0),In(t,r)}}function aM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,r))return;u0.set(r),s.uniformMatrix3fv(this.addr,!1,u0),In(t,r)}}function oM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,r))return;c0.set(r),s.uniformMatrix4fv(this.addr,!1,c0),In(t,r)}}function lM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;s.uniform2iv(this.addr,e),In(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;s.uniform3iv(this.addr,e),In(t,e)}}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;s.uniform4iv(this.addr,e),In(t,e)}}function fM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;s.uniform2uiv(this.addr,e),In(t,e)}}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;s.uniform3uiv(this.addr,e),In(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;s.uniform4uiv(this.addr,e),In(t,e)}}function gM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Af.compareFunction=t.isReversedDepthBuffer()?Vf:zf,l=Af):l=Sg,t.setTexture2D(e||l,o)}function xM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||wg,o)}function vM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Eg,o)}function _M(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Mg,o)}function yM(s){switch(s){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return dM;case 5125:return fM;case 36294:return hM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return _M}}function SM(s,e){s.uniform1fv(this.addr,e)}function MM(s,e){const t=Aa(e,this.size,2);s.uniform2fv(this.addr,t)}function wM(s,e){const t=Aa(e,this.size,3);s.uniform3fv(this.addr,t)}function EM(s,e){const t=Aa(e,this.size,4);s.uniform4fv(this.addr,t)}function bM(s,e){const t=Aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function TM(s,e){const t=Aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function AM(s,e){const t=Aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function CM(s,e){s.uniform1iv(this.addr,e)}function RM(s,e){s.uniform2iv(this.addr,e)}function NM(s,e){s.uniform3iv(this.addr,e)}function PM(s,e){s.uniform4iv(this.addr,e)}function IM(s,e){s.uniform1uiv(this.addr,e)}function DM(s,e){s.uniform2uiv(this.addr,e)}function LM(s,e){s.uniform3uiv(this.addr,e)}function UM(s,e){s.uniform4uiv(this.addr,e)}function FM(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);Pn(r,l)||(s.uniform1iv(this.addr,l),In(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Af:u=Sg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function OM(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);Pn(r,l)||(s.uniform1iv(this.addr,l),In(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||wg,l[u])}function kM(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);Pn(r,l)||(s.uniform1iv(this.addr,l),In(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Eg,l[u])}function BM(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);Pn(r,l)||(s.uniform1iv(this.addr,l),In(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Mg,l[u])}function zM(s){switch(s){case 5126:return SM;case 35664:return MM;case 35665:return wM;case 35666:return EM;case 35674:return bM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return CM;case 35667:case 35671:return RM;case 35668:case 35672:return NM;case 35669:case 35673:return PM;case 5125:return IM;case 36294:return DM;case 36295:return LM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return BM}}class VM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=yM(t.type)}}class HM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zM(t.type)}}class GM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function f0(s,e){s.seq.push(e),s.map[e.id]=e}function jM(s,e,t){const r=s.name,o=r.length;for(Id.lastIndex=0;;){const l=Id.exec(r),u=Id.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){f0(t,m===void 0?new VM(f,s,e):new HM(f,s,e));break}else{let y=t.map[f];y===void 0&&(y=new GM(f),f0(t,y)),t=y}}}class ec{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);jM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function h0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const WM=37297;let XM=0;function YM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const p0=new zt;function $M(s){Jt._getMatrix(p0,Jt.workingColorSpace,s);const e=`mat3( ${p0.elements.map(t=>t.toFixed(4))} )`;switch(Jt.getTransfer(s)){case sc:return[e,"LinearTransferOETF"];case ln:return[e,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function m0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+YM(s.getShaderSource(e),f)}else return l}function qM(s,e){const t=$M(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const KM={[G0]:"Linear",[j0]:"Reinhard",[W0]:"Cineon",[X0]:"ACESFilmic",[$0]:"AgX",[q0]:"Neutral",[Y0]:"Custom"};function ZM(s,e){const t=KM[e];return t===void 0?(It("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new ie;function JM(){Jt.getLuminanceCoefficients(Wl);const s=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function ew(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function tw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function po(s){return s!==""}function g0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(s){return s.replace(nw,rw)}const iw=new Map;function rw(s,e){let t=Wt[e];if(t===void 0){const r=iw.get(e);if(r!==void 0)t=Wt[r],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cf(t)}const sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(s){return s.replace(sw,aw)}function aw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function _0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const ow={[ql]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};function lw(s){return ow[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cw={[Is]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE",[hc]:"ENVMAP_TYPE_CUBE_UV"};function uw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":cw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const dw={[wa]:"ENVMAP_MODE_REFRACTION"};function fw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":dw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hw={[H0]:"ENVMAP_BLENDING_MULTIPLY",[Hv]:"ENVMAP_BLENDING_MIX",[Gv]:"ENVMAP_BLENDING_ADD"};function pw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hw[s.combine]||"ENVMAP_BLENDING_NONE"}function mw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function gw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=lw(t),m=uw(t),v=fw(t),y=pw(t),x=mw(t),M=QM(t),C=ew(l),L=o.createProgram();let S,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(po).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(po).join(`
`),_.length>0&&(_+=`
`)):(S=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),_=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Wt.tonemapping_pars_fragment:"",t.toneMapping!==lr?ZM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,qM("linearToOutputTexel",t.outputColorSpace),JM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),u=Cf(u),u=g0(u,t),u=x0(u,t),f=Cf(f),f=g0(f,t),f=x0(f,t),u=v0(u),f=v0(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=D+S+u,N=D+_+f,H=h0(o,o.VERTEX_SHADER,R),F=h0(o,o.FRAGMENT_SHADER,N);o.attachShader(L,H),o.attachShader(L,F),t.index0AttributeName!==void 0?o.bindAttribLocation(L,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(L,0,"position"),o.linkProgram(L);function z(k){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(L)||"",le=o.getShaderInfoLog(H)||"",pe=o.getShaderInfoLog(F)||"",j=Z.trim(),oe=le.trim(),te=pe.trim();let se=!0,fe=!0;if(o.getProgramParameter(L,o.LINK_STATUS)===!1)if(se=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,L,H,F);else{const ce=m0(o,H,"vertex"),G=m0(o,F,"fragment");rn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(L,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+j+`
`+ce+`
`+G)}else j!==""?It("WebGLProgram: Program Info Log:",j):(oe===""||te==="")&&(fe=!1);fe&&(k.diagnostics={runnable:se,programLog:j,vertexShader:{log:oe,prefix:S},fragmentShader:{log:te,prefix:_}})}o.deleteShader(H),o.deleteShader(F),w=new ec(o,L),I=tw(o,L)}let w;this.getUniforms=function(){return w===void 0&&z(this),w};let I;this.getAttributes=function(){return I===void 0&&z(this),I};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(L,WM)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XM++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=H,this.fragmentShader=F,this}let xw=0;class vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new _w(e),t.set(e,r)),r}}class _w{constructor(e){this.id=xw++,this.code=e,this.usedTimes=0}}function yw(s){return s===Ds||s===nc||s===ic}function Sw(s,e,t,r,o,l){const u=new ag,f=new vw,h=new Set,m=[],v=new Map,y=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return h.add(w),w===0?"uv":`uv${w}`}function L(w,I,q,k,Z,le){const pe=k.fog,j=Z.geometry,oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,se=e.get(w.envMap||oe,te),fe=se&&se.mapping===hc?se.image.height:null,ce=M[w.type];w.precision!==null&&(x=r.getMaxPrecision(w.precision),x!==w.precision&&It("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const G=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ne=G!==void 0?G.length:0;let $e=0;j.morphAttributes.position!==void 0&&($e=1),j.morphAttributes.normal!==void 0&&($e=2),j.morphAttributes.color!==void 0&&($e=3);let rt,Ue,de,be;if(ce){const vt=sr[ce];rt=vt.vertexShader,Ue=vt.fragmentShader}else rt=w.vertexShader,Ue=w.fragmentShader,f.update(w),de=f.getVertexShaderID(w),be=f.getFragmentShaderID(w);const ye=s.getRenderTarget(),ke=s.state.buffers.depth.getReversed(),ot=Z.isInstancedMesh===!0,et=Z.isBatchedMesh===!0,wt=!!w.map,yt=!!w.matcap,Et=!!se,jt=!!w.aoMap,bt=!!w.lightMap,Bt=!!w.bumpMap,Rt=!!w.normalMap,en=!!w.displacementMap,J=!!w.emissiveMap,Lt=!!w.metalnessMap,_t=!!w.roughnessMap,Ft=w.anisotropy>0,We=w.clearcoat>0,Ot=w.dispersion>0,U=w.iridescence>0,E=w.sheen>0,ae=w.transmission>0,Ee=Ft&&!!w.anisotropyMap,Ne=We&&!!w.clearcoatMap,Be=We&&!!w.clearcoatNormalMap,je=We&&!!w.clearcoatRoughnessMap,xe=U&&!!w.iridescenceMap,Se=U&&!!w.iridescenceThicknessMap,tt=E&&!!w.sheenColorMap,st=E&&!!w.sheenRoughnessMap,Te=!!w.specularMap,Re=!!w.specularColorMap,dt=!!w.specularIntensityMap,Nt=ae&&!!w.transmissionMap,ft=ae&&!!w.thicknessMap,B=!!w.gradientMap,ze=!!w.alphaMap,ge=w.alphaTest>0,it=!!w.alphaHash,Le=!!w.extensions;let ve=lr;w.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Qe={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:rt,fragmentShader:Ue,defines:w.defines,customVertexShaderID:de,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:et,batchingColor:et&&Z._colorsTexture!==null,instancing:ot,instancingColor:ot&&Z.instanceColor!==null,instancingMorph:ot&&Z.morphTexture!==null,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:wt,matcap:yt,envMap:Et,envMapMode:Et&&se.mapping,envMapCubeUVHeight:fe,aoMap:jt,lightMap:bt,bumpMap:Bt,normalMap:Rt,displacementMap:en,emissiveMap:J,normalMapObjectSpace:Rt&&w.normalMapType===Xv,normalMapTangentSpace:Rt&&w.normalMapType===Am,packedNormalMap:Rt&&w.normalMapType===Am&&yw(w.normalMap.format),metalnessMap:Lt,roughnessMap:_t,anisotropy:Ft,anisotropyMap:Ee,clearcoat:We,clearcoatMap:Ne,clearcoatNormalMap:Be,clearcoatRoughnessMap:je,dispersion:Ot,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:E,sheenColorMap:tt,sheenRoughnessMap:st,specularMap:Te,specularColorMap:Re,specularIntensityMap:dt,transmission:ae,transmissionMap:Nt,thicknessMap:ft,gradientMap:B,opaque:w.transparent===!1&&w.blending===ya&&w.alphaToCoverage===!1,alphaMap:ze,alphaTest:ge,alphaHash:it,combine:w.combine,mapUv:wt&&C(w.map.channel),aoMapUv:jt&&C(w.aoMap.channel),lightMapUv:bt&&C(w.lightMap.channel),bumpMapUv:Bt&&C(w.bumpMap.channel),normalMapUv:Rt&&C(w.normalMap.channel),displacementMapUv:en&&C(w.displacementMap.channel),emissiveMapUv:J&&C(w.emissiveMap.channel),metalnessMapUv:Lt&&C(w.metalnessMap.channel),roughnessMapUv:_t&&C(w.roughnessMap.channel),anisotropyMapUv:Ee&&C(w.anisotropyMap.channel),clearcoatMapUv:Ne&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Be&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:st&&C(w.sheenRoughnessMap.channel),specularMapUv:Te&&C(w.specularMap.channel),specularColorMapUv:Re&&C(w.specularColorMap.channel),specularIntensityMapUv:dt&&C(w.specularIntensityMap.channel),transmissionMapUv:Nt&&C(w.transmissionMap.channel),thicknessMapUv:ft&&C(w.thicknessMap.channel),alphaMapUv:ze&&C(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Rt||Ft),vertexNormals:!!j.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(wt||ze),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||j.attributes.normal===void 0&&Rt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ke,skinning:Z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:$e,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:wt&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===ln,decodeVideoTextureEmissive:J&&w.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(w.emissiveMap.colorSpace)===ln,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ar,flipSided:w.side===pi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Qe.vertexUv1s=h.has(1),Qe.vertexUv2s=h.has(2),Qe.vertexUv3s=h.has(3),h.clear(),Qe}function S(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const q in w.defines)I.push(q),I.push(w.defines[q]);return w.isRawShaderMaterial===!1&&(_(I,w),D(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function _(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function D(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function R(w){const I=M[w.type];let q;if(I){const k=sr[I];q=W_.clone(k.uniforms)}else q=w.uniforms;return q}function N(w,I){let q=v.get(I);return q!==void 0?++q.usedTimes:(q=new gw(s,I,w,o),m.push(q),v.set(I,q)),q}function H(w){if(--w.usedTimes===0){const I=m.indexOf(w);m[I]=m[m.length-1],m.pop(),v.delete(w.cacheKey),w.destroy()}}function F(w){f.remove(w)}function z(){f.dispose()}return{getParameters:L,getProgramCacheKey:S,getUniforms:R,acquireProgram:N,releaseProgram:H,releaseShaderCache:F,programs:m,dispose:z}}function Mw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function ww(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function y0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function S0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,C,L,S,_){let D=s[e];return D===void 0?(D={id:x.id,object:x,geometry:M,material:C,materialVariant:u(x),groupOrder:L,renderOrder:x.renderOrder,z:S,group:_},s[e]=D):(D.id=x.id,D.object=x,D.geometry=M,D.material=C,D.materialVariant=u(x),D.groupOrder=L,D.renderOrder=x.renderOrder,D.z=S,D.group=_),e++,D}function h(x,M,C,L,S,_){const D=f(x,M,C,L,S,_);C.transmission>0?r.push(D):C.transparent===!0?o.push(D):t.push(D)}function m(x,M,C,L,S,_){const D=f(x,M,C,L,S,_);C.transmission>0?r.unshift(D):C.transparent===!0?o.unshift(D):t.unshift(D)}function v(x,M){t.length>1&&t.sort(x||ww),r.length>1&&r.sort(M||y0),o.length>1&&o.sort(M||y0)}function y(){for(let x=e,M=s.length;x<M;x++){const C=s[x];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:y,sort:v}}function Ew(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new S0,s.set(r,[u])):o>=l.length?(u=new S0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new un};break;case"SpotLight":t={position:new ie,direction:new ie,color:new un,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new un,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new un,groundColor:new un};break;case"RectAreaLight":t={color:new un,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function Tw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Aw=0;function Cw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Rw(s){const e=new bw,t=Tw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,l=new An,u=new An;function f(m){let v=0,y=0,x=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let M=0,C=0,L=0,S=0,_=0,D=0,R=0,N=0,H=0,F=0,z=0;m.sort(Cw);for(let I=0,q=m.length;I<q;I++){const k=m[I],Z=k.color,le=k.intensity,pe=k.distance;let j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ds?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=Z.r*le,y+=Z.g*le,x+=Z.b*le;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(k.sh.coefficients[oe],le);z++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const te=k.shadow,se=t.get(k);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,r.directionalShadow[M]=se,r.directionalShadowMap[M]=j,r.directionalShadowMatrix[M]=k.shadow.matrix,D++}r.directional[M]=oe,M++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(Z).multiplyScalar(le),oe.distance=pe,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,r.spot[L]=oe;const te=k.shadow;if(k.map&&(r.spotLightMap[H]=k.map,H++,te.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[L]=te.matrix,k.castShadow){const se=t.get(k);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,r.spotShadow[L]=se,r.spotShadowMap[L]=j,N++}L++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(Z).multiplyScalar(le),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=oe,S++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const te=k.shadow,se=t.get(k);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,r.pointShadow[C]=se,r.pointShadowMap[C]=j,r.pointShadowMatrix[C]=k.shadow.matrix,R++}r.point[C]=oe,C++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(le),oe.groundColor.copy(k.groundColor).multiplyScalar(le),r.hemi[_]=oe,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=at.LTC_FLOAT_1,r.rectAreaLTC2=at.LTC_FLOAT_2):(r.rectAreaLTC1=at.LTC_HALF_1,r.rectAreaLTC2=at.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==M||w.pointLength!==C||w.spotLength!==L||w.rectAreaLength!==S||w.hemiLength!==_||w.numDirectionalShadows!==D||w.numPointShadows!==R||w.numSpotShadows!==N||w.numSpotMaps!==H||w.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=L,r.rectArea.length=S,r.point.length=C,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=N+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=z,w.directionalLength=M,w.pointLength=C,w.spotLength=L,w.rectAreaLength=S,w.hemiLength=_,w.numDirectionalShadows=D,w.numPointShadows=R,w.numSpotShadows=N,w.numSpotMaps=H,w.numLightProbes=z,r.version=Aw++)}function h(m,v){let y=0,x=0,M=0,C=0,L=0;const S=v.matrixWorldInverse;for(let _=0,D=m.length;_<D;_++){const R=m[_];if(R.isDirectionalLight){const N=r.directional[y];N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),y++}else if(R.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),M++}else if(R.isRectAreaLight){const N=r.rectArea[C];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),C++}else if(R.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(S),x++}else if(R.isHemisphereLight){const N=r.hemi[L];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(S),L++}}}return{setup:f,setupView:h,state:r}}function M0(s){const e=new Rw(s),t=[],r=[],o=[];function l(x){y.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function m(){e.setup(t)}function v(x){e.setupView(t,x)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:m,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function Nw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new M0(s),e.set(o,[f])):l>=u.length?(f=new M0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
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
}`,Dw=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],Lw=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],w0=new An,uo=new ie,Dd=new ie;function Uw(s,e,t){let r=new ug;const o=new Dt,l=new Dt,u=new wn,f=new q_,h=new K_,m={},v=t.maxTextureSize,y={[as]:pi,[pi]:as,[Ar]:Ar},x=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Pw,fragmentShader:Iw}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const C=new Ei;C.setAttribute("position",new ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new ri(C,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let _=this.type;this.render=function(F,z,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;this.type===wv&&(It("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ql);const I=s.getRenderTarget(),q=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Rr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const le=_!==this.type;le&&z.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(j=>j.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,j=F.length;pe<j;pe++){const oe=F[pe],te=oe.shadow;if(te===void 0){It("WebGLShadowMap:",oe,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const se=te.getFrameExtents();o.multiply(se),l.copy(te.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/se.x),o.x=l.x*se.x,te.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/se.y),o.y=l.y*se.y,te.mapSize.y=l.y));const fe=s.state.buffers.depth.getReversed();if(te.camera._reversedDepth=fe,te.map===null||le===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===ho){if(oe.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new cr(o.x,o.y,{format:Ds,type:Pr,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),te.map.texture.name=oe.name+".shadowMap",te.map.depthTexture=new Ea(o.x,o.y,ar),te.map.depthTexture.name=oe.name+".shadowMapDepth",te.map.depthTexture.format=Ir,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Hn,te.map.depthTexture.magFilter=Hn}else oe.isPointLight?(te.map=new yg(o.x),te.map.depthTexture=new C_(o.x,dr)):(te.map=new cr(o.x,o.y),te.map.depthTexture=new Ea(o.x,o.y,dr)),te.map.depthTexture.name=oe.name+".shadowMap",te.map.depthTexture.format=Ir,this.type===ql?(te.map.depthTexture.compareFunction=fe?Vf:zf,te.map.depthTexture.minFilter=Zn,te.map.depthTexture.magFilter=Zn):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Hn,te.map.depthTexture.magFilter=Hn);te.camera.updateProjectionMatrix()}const ce=te.map.isWebGLCubeRenderTarget?6:1;for(let G=0;G<ce;G++){if(te.map.isWebGLCubeRenderTarget)s.setRenderTarget(te.map,G),s.clear();else{G===0&&(s.setRenderTarget(te.map),s.clear());const ne=te.getViewport(G);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),Z.viewport(u)}if(oe.isPointLight){const ne=te.camera,$e=te.matrix,rt=oe.distance||ne.far;rt!==ne.far&&(ne.far=rt,ne.updateProjectionMatrix()),uo.setFromMatrixPosition(oe.matrixWorld),ne.position.copy(uo),Dd.copy(ne.position),Dd.add(Dw[G]),ne.up.copy(Lw[G]),ne.lookAt(Dd),ne.updateMatrixWorld(),$e.makeTranslation(-uo.x,-uo.y,-uo.z),w0.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),te._frustum.setFromProjectionMatrix(w0,ne.coordinateSystem,ne.reversedDepth)}else te.updateMatrices(oe);r=te.getFrustum(),N(z,w,te.camera,oe,this.type)}te.isPointLightShadow!==!0&&this.type===ho&&D(te,w),te.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(I,q,k)};function D(F,z){const w=e.update(L);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new cr(o.x,o.y,{format:Ds,type:Pr})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(z,null,w,x,L,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(z,null,w,M,L,null)}function R(F,z,w,I){let q=null;const k=w.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)q=k;else if(q=w.isPointLight===!0?h:f,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=q.uuid,le=z.uuid;let pe=m[Z];pe===void 0&&(pe={},m[Z]=pe);let j=pe[le];j===void 0&&(j=q.clone(),pe[le]=j,z.addEventListener("dispose",H)),q=j}if(q.visible=z.visible,q.wireframe=z.wireframe,I===ho?q.side=z.shadowSide!==null?z.shadowSide:z.side:q.side=z.shadowSide!==null?z.shadowSide:y[z.side],q.alphaMap=z.alphaMap,q.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,q.map=z.map,q.clipShadows=z.clipShadows,q.clippingPlanes=z.clippingPlanes,q.clipIntersection=z.clipIntersection,q.displacementMap=z.displacementMap,q.displacementScale=z.displacementScale,q.displacementBias=z.displacementBias,q.wireframeLinewidth=z.wireframeLinewidth,q.linewidth=z.linewidth,w.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Z=s.properties.get(q);Z.light=w}return q}function N(F,z,w,I,q){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&q===ho)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,F.matrixWorld);const le=e.update(F),pe=F.material;if(Array.isArray(pe)){const j=le.groups;for(let oe=0,te=j.length;oe<te;oe++){const se=j[oe],fe=pe[se.materialIndex];if(fe&&fe.visible){const ce=R(F,fe,I,q);F.onBeforeShadow(s,F,z,w,le,ce,se),s.renderBufferDirect(w,null,le,ce,F,se),F.onAfterShadow(s,F,z,w,le,ce,se)}}}else if(pe.visible){const j=R(F,pe,I,q);F.onBeforeShadow(s,F,z,w,le,j,null),s.renderBufferDirect(w,null,le,j,F,null),F.onAfterShadow(s,F,z,w,le,j,null)}}const Z=F.children;for(let le=0,pe=Z.length;le<pe;le++)N(Z[le],z,w,I,q)}function H(F){F.target.removeEventListener("dispose",H);for(const w in m){const I=m[w],q=F.target.uuid;q in I&&(I[q].dispose(),delete I[q])}}}function Fw(s,e){function t(){let B=!1;const ze=new wn;let ge=null;const it=new wn(0,0,0,0);return{setMask:function(Le){ge!==Le&&!B&&(s.colorMask(Le,Le,Le,Le),ge=Le)},setLocked:function(Le){B=Le},setClear:function(Le,ve,Qe,vt,Ht){Ht===!0&&(Le*=vt,ve*=vt,Qe*=vt),ze.set(Le,ve,Qe,vt),it.equals(ze)===!1&&(s.clearColor(Le,ve,Qe,vt),it.copy(ze))},reset:function(){B=!1,ge=null,it.set(-1,0,0,0)}}}function r(){let B=!1,ze=!1,ge=null,it=null,Le=null;return{setReversed:function(ve){if(ze!==ve){const Qe=e.get("EXT_clip_control");ve?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),ze=ve;const vt=Le;Le=null,this.setClear(vt)}},getReversed:function(){return ze},setTest:function(ve){ve?ye(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!B&&(s.depthMask(ve),ge=ve)},setFunc:function(ve){if(ze&&(ve=n_[ve]),it!==ve){switch(ve){case Bd:s.depthFunc(s.NEVER);break;case zd:s.depthFunc(s.ALWAYS);break;case Vd:s.depthFunc(s.LESS);break;case Ma:s.depthFunc(s.LEQUAL);break;case Hd:s.depthFunc(s.EQUAL);break;case Gd:s.depthFunc(s.GEQUAL);break;case jd:s.depthFunc(s.GREATER);break;case Wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=ve}},setLocked:function(ve){B=ve},setClear:function(ve){Le!==ve&&(Le=ve,ze&&(ve=1-ve),s.clearDepth(ve))},reset:function(){B=!1,ge=null,it=null,Le=null,ze=!1}}}function o(){let B=!1,ze=null,ge=null,it=null,Le=null,ve=null,Qe=null,vt=null,Ht=null;return{setTest:function(Yt){B||(Yt?ye(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(Yt){ze!==Yt&&!B&&(s.stencilMask(Yt),ze=Yt)},setFunc:function(Yt,_n,Bn){(ge!==Yt||it!==_n||Le!==Bn)&&(s.stencilFunc(Yt,_n,Bn),ge=Yt,it=_n,Le=Bn)},setOp:function(Yt,_n,Bn){(ve!==Yt||Qe!==_n||vt!==Bn)&&(s.stencilOp(Yt,_n,Bn),ve=Yt,Qe=_n,vt=Bn)},setLocked:function(Yt){B=Yt},setClear:function(Yt){Ht!==Yt&&(s.clearStencil(Yt),Ht=Yt)},reset:function(){B=!1,ze=null,ge=null,it=null,Le=null,ve=null,Qe=null,vt=null,Ht=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,m=new WeakMap;let v={},y={},x={},M=new WeakMap,C=[],L=null,S=!1,_=null,D=null,R=null,N=null,H=null,F=null,z=null,w=new un(0,0,0),I=0,q=!1,k=null,Z=null,le=null,pe=null,j=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,se=0;const fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(fe)[1]),te=se>=1):fe.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),te=se>=2);let ce=null,G={};const ne=s.getParameter(s.SCISSOR_BOX),$e=s.getParameter(s.VIEWPORT),rt=new wn().fromArray(ne),Ue=new wn().fromArray($e);function de(B,ze,ge,it){const Le=new Uint8Array(4),ve=s.createTexture();s.bindTexture(B,ve),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<ge;Qe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ze,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(ze+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return ve}const be={};be[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ye(s.DEPTH_TEST),u.setFunc(Ma),Bt(!1),Rt(wm),ye(s.CULL_FACE),jt(Rr);function ye(B){v[B]!==!0&&(s.enable(B),v[B]=!0)}function ke(B){v[B]!==!1&&(s.disable(B),v[B]=!1)}function ot(B,ze){return x[B]!==ze?(s.bindFramebuffer(B,ze),x[B]=ze,B===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=ze),B===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=ze),!0):!1}function et(B,ze){let ge=C,it=!1;if(B){ge=M.get(ze),ge===void 0&&(ge=[],M.set(ze,ge));const Le=B.textures;if(ge.length!==Le.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Qe=Le.length;ve<Qe;ve++)ge[ve]=s.COLOR_ATTACHMENT0+ve;ge.length=Le.length,it=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,it=!0);it&&s.drawBuffers(ge)}function wt(B){return L!==B?(s.useProgram(B),L=B,!0):!1}const yt={[As]:s.FUNC_ADD,[bv]:s.FUNC_SUBTRACT,[Tv]:s.FUNC_REVERSE_SUBTRACT};yt[Av]=s.MIN,yt[Cv]=s.MAX;const Et={[Rv]:s.ZERO,[Nv]:s.ONE,[Pv]:s.SRC_COLOR,[Od]:s.SRC_ALPHA,[Ov]:s.SRC_ALPHA_SATURATE,[Uv]:s.DST_COLOR,[Dv]:s.DST_ALPHA,[Iv]:s.ONE_MINUS_SRC_COLOR,[kd]:s.ONE_MINUS_SRC_ALPHA,[Fv]:s.ONE_MINUS_DST_COLOR,[Lv]:s.ONE_MINUS_DST_ALPHA,[kv]:s.CONSTANT_COLOR,[Bv]:s.ONE_MINUS_CONSTANT_COLOR,[zv]:s.CONSTANT_ALPHA,[Vv]:s.ONE_MINUS_CONSTANT_ALPHA};function jt(B,ze,ge,it,Le,ve,Qe,vt,Ht,Yt){if(B===Rr){S===!0&&(ke(s.BLEND),S=!1);return}if(S===!1&&(ye(s.BLEND),S=!0),B!==Ev){if(B!==_||Yt!==q){if((D!==As||H!==As)&&(s.blendEquation(s.FUNC_ADD),D=As,H=As),Yt)switch(B){case ya:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFunc(s.ONE,s.ONE);break;case bm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rn("WebGLState: Invalid blending: ",B);break}else switch(B){case ya:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bm:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tm:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",B);break}R=null,N=null,F=null,z=null,w.set(0,0,0),I=0,_=B,q=Yt}return}Le=Le||ze,ve=ve||ge,Qe=Qe||it,(ze!==D||Le!==H)&&(s.blendEquationSeparate(yt[ze],yt[Le]),D=ze,H=Le),(ge!==R||it!==N||ve!==F||Qe!==z)&&(s.blendFuncSeparate(Et[ge],Et[it],Et[ve],Et[Qe]),R=ge,N=it,F=ve,z=Qe),(vt.equals(w)===!1||Ht!==I)&&(s.blendColor(vt.r,vt.g,vt.b,Ht),w.copy(vt),I=Ht),_=B,q=!1}function bt(B,ze){B.side===Ar?ke(s.CULL_FACE):ye(s.CULL_FACE);let ge=B.side===pi;ze&&(ge=!ge),Bt(ge),B.blending===ya&&B.transparent===!1?jt(Rr):jt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const it=B.stencilWrite;f.setTest(it),it&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),J(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(B){k!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),k=B)}function Rt(B){B!==Sv?(ye(s.CULL_FACE),B!==Z&&(B===wm?s.cullFace(s.BACK):B===Mv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),Z=B}function en(B){B!==le&&(te&&s.lineWidth(B),le=B)}function J(B,ze,ge){B?(ye(s.POLYGON_OFFSET_FILL),(pe!==ze||j!==ge)&&(pe=ze,j=ge,u.getReversed()&&(ze=-ze),s.polygonOffset(ze,ge))):ke(s.POLYGON_OFFSET_FILL)}function Lt(B){B?ye(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function _t(B){B===void 0&&(B=s.TEXTURE0+oe-1),ce!==B&&(s.activeTexture(B),ce=B)}function Ft(B,ze,ge){ge===void 0&&(ce===null?ge=s.TEXTURE0+oe-1:ge=ce);let it=G[ge];it===void 0&&(it={type:void 0,texture:void 0},G[ge]=it),(it.type!==B||it.texture!==ze)&&(ce!==ge&&(s.activeTexture(ge),ce=ge),s.bindTexture(B,ze||be[B]),it.type=B,it.texture=ze)}function We(){const B=G[ce];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ot(){try{s.compressedTexImage2D(...arguments)}catch(B){rn("WebGLState:",B)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(B){rn("WebGLState:",B)}}function E(){try{s.texSubImage2D(...arguments)}catch(B){rn("WebGLState:",B)}}function ae(){try{s.texSubImage3D(...arguments)}catch(B){rn("WebGLState:",B)}}function Ee(){try{s.compressedTexSubImage2D(...arguments)}catch(B){rn("WebGLState:",B)}}function Ne(){try{s.compressedTexSubImage3D(...arguments)}catch(B){rn("WebGLState:",B)}}function Be(){try{s.texStorage2D(...arguments)}catch(B){rn("WebGLState:",B)}}function je(){try{s.texStorage3D(...arguments)}catch(B){rn("WebGLState:",B)}}function xe(){try{s.texImage2D(...arguments)}catch(B){rn("WebGLState:",B)}}function Se(){try{s.texImage3D(...arguments)}catch(B){rn("WebGLState:",B)}}function tt(B){return y[B]!==void 0?y[B]:s.getParameter(B)}function st(B,ze){y[B]!==ze&&(s.pixelStorei(B,ze),y[B]=ze)}function Te(B){rt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),rt.copy(B))}function Re(B){Ue.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Ue.copy(B))}function dt(B,ze){let ge=m.get(ze);ge===void 0&&(ge=new WeakMap,m.set(ze,ge));let it=ge.get(B);it===void 0&&(it=s.getUniformBlockIndex(ze,B.name),ge.set(B,it))}function Nt(B,ze){const it=m.get(ze).get(B);h.get(ze)!==it&&(s.uniformBlockBinding(ze,it,B.__bindingPointIndex),h.set(ze,it))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},y={},ce=null,G={},x={},M=new WeakMap,C=[],L=null,S=!1,_=null,D=null,R=null,N=null,H=null,F=null,z=null,w=new un(0,0,0),I=0,q=!1,k=null,Z=null,le=null,pe=null,j=null,rt.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ye,disable:ke,bindFramebuffer:ot,drawBuffers:et,useProgram:wt,setBlending:jt,setMaterial:bt,setFlipSided:Bt,setCullFace:Rt,setLineWidth:en,setPolygonOffset:J,setScissorTest:Lt,activeTexture:_t,bindTexture:Ft,unbindTexture:We,compressedTexImage2D:Ot,compressedTexImage3D:U,texImage2D:xe,texImage3D:Se,pixelStorei:st,getParameter:tt,updateUBOMapping:dt,uniformBlockBinding:Nt,texStorage2D:Be,texStorage3D:je,texSubImage2D:E,texSubImage3D:ae,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ne,scissor:Te,viewport:Re,reset:ft}}function Ow(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Dt,v=new WeakMap,y=new Set;let x;const M=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(U,E){return C?new OffscreenCanvas(U,E):oc("canvas")}function S(U,E,ae){let Ee=1;const Ne=Ot(U);if((Ne.width>ae||Ne.height>ae)&&(Ee=ae/Math.max(Ne.width,Ne.height)),Ee<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Be=Math.floor(Ee*Ne.width),je=Math.floor(Ee*Ne.height);x===void 0&&(x=L(Be,je));const xe=E?L(Be,je):x;return xe.width=Be,xe.height=je,xe.getContext("2d").drawImage(U,0,0,Be,je),It("WebGLRenderer: Texture has been resized from ("+Ne.width+"x"+Ne.height+") to ("+Be+"x"+je+")."),xe}else return"data"in U&&It("WebGLRenderer: Image in DataTexture is too big ("+Ne.width+"x"+Ne.height+")."),U;return U}function _(U){return U.generateMipmaps}function D(U){s.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,E,ae,Ee,Ne,Be=!1){if(U!==null){if(s[U]!==void 0)return s[U];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let je;Ee&&(je=e.get("EXT_texture_norm16"),je||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=E;if(E===s.RED&&(ae===s.FLOAT&&(xe=s.R32F),ae===s.HALF_FLOAT&&(xe=s.R16F),ae===s.UNSIGNED_BYTE&&(xe=s.R8),ae===s.UNSIGNED_SHORT&&je&&(xe=je.R16_EXT),ae===s.SHORT&&je&&(xe=je.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.R8UI),ae===s.UNSIGNED_SHORT&&(xe=s.R16UI),ae===s.UNSIGNED_INT&&(xe=s.R32UI),ae===s.BYTE&&(xe=s.R8I),ae===s.SHORT&&(xe=s.R16I),ae===s.INT&&(xe=s.R32I)),E===s.RG&&(ae===s.FLOAT&&(xe=s.RG32F),ae===s.HALF_FLOAT&&(xe=s.RG16F),ae===s.UNSIGNED_BYTE&&(xe=s.RG8),ae===s.UNSIGNED_SHORT&&je&&(xe=je.RG16_EXT),ae===s.SHORT&&je&&(xe=je.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ae===s.UNSIGNED_INT&&(xe=s.RG32UI),ae===s.BYTE&&(xe=s.RG8I),ae===s.SHORT&&(xe=s.RG16I),ae===s.INT&&(xe=s.RG32I)),E===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ae===s.UNSIGNED_INT&&(xe=s.RGB32UI),ae===s.BYTE&&(xe=s.RGB8I),ae===s.SHORT&&(xe=s.RGB16I),ae===s.INT&&(xe=s.RGB32I)),E===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ae===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ae===s.BYTE&&(xe=s.RGBA8I),ae===s.SHORT&&(xe=s.RGBA16I),ae===s.INT&&(xe=s.RGBA32I)),E===s.RGB&&(ae===s.UNSIGNED_SHORT&&je&&(xe=je.RGB16_EXT),ae===s.SHORT&&je&&(xe=je.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),E===s.RGBA){const Se=Be?sc:Jt.getTransfer(Ne);ae===s.FLOAT&&(xe=s.RGBA32F),ae===s.HALF_FLOAT&&(xe=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(xe=Se===ln?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&je&&(xe=je.RGBA16_EXT),ae===s.SHORT&&je&&(xe=je.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function H(U,E){let ae;return U?E===null||E===dr||E===So?ae=s.DEPTH24_STENCIL8:E===ar?ae=s.DEPTH32F_STENCIL8:E===yo&&(ae=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===dr||E===So?ae=s.DEPTH_COMPONENT24:E===ar?ae=s.DEPTH_COMPONENT32F:E===yo&&(ae=s.DEPTH_COMPONENT16),ae}function F(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Hn&&U.minFilter!==Zn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function z(U){const E=U.target;E.removeEventListener("dispose",z),I(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&y.delete(E)}function w(U){const E=U.target;E.removeEventListener("dispose",w),k(E)}function I(U){const E=r.get(U);if(E.__webglInit===void 0)return;const ae=U.source,Ee=M.get(ae);if(Ee){const Ne=Ee[E.__cacheKey];Ne.usedTimes--,Ne.usedTimes===0&&q(U),Object.keys(Ee).length===0&&M.delete(ae)}r.remove(U)}function q(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const ae=U.source,Ee=M.get(ae);delete Ee[E.__cacheKey],u.memory.textures--}function k(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(E.__webglFramebuffer[Ee]))for(let Ne=0;Ne<E.__webglFramebuffer[Ee].length;Ne++)s.deleteFramebuffer(E.__webglFramebuffer[Ee][Ne]);else s.deleteFramebuffer(E.__webglFramebuffer[Ee]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let Ee=0;Ee<E.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(E.__webglFramebuffer[Ee]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Ee=0;Ee<E.__webglColorRenderbuffer.length;Ee++)E.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Ee]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ae=U.textures;for(let Ee=0,Ne=ae.length;Ee<Ne;Ee++){const Be=r.get(ae[Ee]);Be.__webglTexture&&(s.deleteTexture(Be.__webglTexture),u.memory.textures--),r.remove(ae[Ee])}r.remove(U)}let Z=0;function le(){Z=0}function pe(){return Z}function j(U){Z=U}function oe(){const U=Z;return U>=o.maxTextures&&It("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),Z+=1,U}function te(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function se(U,E){const ae=r.get(U);if(U.isVideoTexture&&Ft(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ae.__version!==U.version){const Ee=U.image;if(Ee===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(ae,U,E);return}}else U.isExternalTexture&&(ae.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+E)}function fe(U,E){const ae=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ae.__version!==U.version){ke(ae,U,E);return}else U.isExternalTexture&&(ae.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+E)}function ce(U,E){const ae=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ae.__version!==U.version){ke(ae,U,E);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+E)}function G(U,E){const ae=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ae.__version!==U.version){ot(ae,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+E)}const ne={[Xd]:s.REPEAT,[Cr]:s.CLAMP_TO_EDGE,[Yd]:s.MIRRORED_REPEAT},$e={[Hn]:s.NEAREST,[jv]:s.NEAREST_MIPMAP_NEAREST,[El]:s.NEAREST_MIPMAP_LINEAR,[Zn]:s.LINEAR,[ed]:s.LINEAR_MIPMAP_NEAREST,[Rs]:s.LINEAR_MIPMAP_LINEAR},rt={[Yv]:s.NEVER,[Jv]:s.ALWAYS,[$v]:s.LESS,[zf]:s.LEQUAL,[qv]:s.EQUAL,[Vf]:s.GEQUAL,[Kv]:s.GREATER,[Zv]:s.NOTEQUAL};function Ue(U,E){if(E.type===ar&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zn||E.magFilter===ed||E.magFilter===El||E.magFilter===Rs||E.minFilter===Zn||E.minFilter===ed||E.minFilter===El||E.minFilter===Rs)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ne[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ne[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ne[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,$e[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,$e[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,rt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==El&&E.minFilter!==Rs||E.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function de(U,E){let ae=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",z));const Ee=E.source;let Ne=M.get(Ee);Ne===void 0&&(Ne={},M.set(Ee,Ne));const Be=te(E);if(Be!==U.__cacheKey){Ne[Be]===void 0&&(Ne[Be]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Ne[Be].usedTimes++;const je=Ne[U.__cacheKey];je!==void 0&&(Ne[U.__cacheKey].usedTimes--,je.usedTimes===0&&q(E)),U.__cacheKey=Be,U.__webglTexture=Ne[Be].texture}return ae}function be(U,E,ae){return Math.floor(Math.floor(U/ae)/E)}function ye(U,E,ae,Ee){const Be=U.updateRanges;if(Be.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ae,Ee,E.data);else{Be.sort((st,Te)=>st.start-Te.start);let je=0;for(let st=1;st<Be.length;st++){const Te=Be[je],Re=Be[st],dt=Te.start+Te.count,Nt=be(Re.start,E.width,4),ft=be(Te.start,E.width,4);Re.start<=dt+1&&Nt===ft&&be(Re.start+Re.count-1,E.width,4)===Nt?Te.count=Math.max(Te.count,Re.start+Re.count-Te.start):(++je,Be[je]=Re)}Be.length=je+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),Se=t.getParameter(s.UNPACK_SKIP_PIXELS),tt=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let st=0,Te=Be.length;st<Te;st++){const Re=Be[st],dt=Math.floor(Re.start/4),Nt=Math.ceil(Re.count/4),ft=dt%E.width,B=Math.floor(dt/E.width),ze=Nt,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,ft,B,ze,ge,ae,Ee,E.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,tt)}}function ke(U,E,ae){let Ee=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Ee=s.TEXTURE_3D);const Ne=de(U,E),Be=E.source;t.bindTexture(Ee,U.__webglTexture,s.TEXTURE0+ae);const je=r.get(Be);if(Be.version!==je.__version||Ne===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ge=Jt.getPrimaries(Jt.workingColorSpace),it=E.colorSpace===is?null:Jt.getPrimaries(E.colorSpace),Le=E.colorSpace===is||ge===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let Se=S(E.image,!1,o.maxTextureSize);Se=We(E,Se);const tt=l.convert(E.format,E.colorSpace),st=l.convert(E.type);let Te=N(E.internalFormat,tt,st,E.normalized,E.colorSpace,E.isVideoTexture);Ue(Ee,E);let Re;const dt=E.mipmaps,Nt=E.isVideoTexture!==!0,ft=je.__version===void 0||Ne===!0,B=Be.dataReady,ze=F(E,Se);if(E.isDepthTexture)Te=H(E.format===Ns,E.type),ft&&(Nt?t.texStorage2D(s.TEXTURE_2D,1,Te,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,Te,Se.width,Se.height,0,tt,st,null));else if(E.isDataTexture)if(dt.length>0){Nt&&ft&&t.texStorage2D(s.TEXTURE_2D,ze,Te,dt[0].width,dt[0].height);for(let ge=0,it=dt.length;ge<it;ge++)Re=dt[ge],Nt?B&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Re.width,Re.height,tt,st,Re.data):t.texImage2D(s.TEXTURE_2D,ge,Te,Re.width,Re.height,0,tt,st,Re.data);E.generateMipmaps=!1}else Nt?(ft&&t.texStorage2D(s.TEXTURE_2D,ze,Te,Se.width,Se.height),B&&ye(E,Se,tt,st)):t.texImage2D(s.TEXTURE_2D,0,Te,Se.width,Se.height,0,tt,st,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Nt&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Te,dt[0].width,dt[0].height,Se.depth);for(let ge=0,it=dt.length;ge<it;ge++)if(Re=dt[ge],E.format!==Zi)if(tt!==null)if(Nt){if(B)if(E.layerUpdates.size>0){const Le=e0(Re.width,Re.height,E.format,E.type);for(const ve of E.layerUpdates){const Qe=Re.data.subarray(ve*Le/Re.data.BYTES_PER_ELEMENT,(ve+1)*Le/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,ve,Re.width,Re.height,1,tt,Qe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,Se.depth,tt,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Te,Re.width,Re.height,Se.depth,0,Re.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,Se.depth,tt,st,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Te,Re.width,Re.height,Se.depth,0,tt,st,Re.data)}else{Nt&&ft&&t.texStorage2D(s.TEXTURE_2D,ze,Te,dt[0].width,dt[0].height);for(let ge=0,it=dt.length;ge<it;ge++)Re=dt[ge],E.format!==Zi?tt!==null?Nt?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Re.width,Re.height,tt,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Te,Re.width,Re.height,0,Re.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?B&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Re.width,Re.height,tt,st,Re.data):t.texImage2D(s.TEXTURE_2D,ge,Te,Re.width,Re.height,0,tt,st,Re.data)}else if(E.isDataArrayTexture)if(Nt){if(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Te,Se.width,Se.height,Se.depth),B)if(E.layerUpdates.size>0){const ge=e0(Se.width,Se.height,E.format,E.type);for(const it of E.layerUpdates){const Le=Se.data.subarray(it*ge/Se.data.BYTES_PER_ELEMENT,(it+1)*ge/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,Se.width,Se.height,1,tt,st,Le)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,tt,st,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,Se.width,Se.height,Se.depth,0,tt,st,Se.data);else if(E.isData3DTexture)Nt?(ft&&t.texStorage3D(s.TEXTURE_3D,ze,Te,Se.width,Se.height,Se.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,tt,st,Se.data)):t.texImage3D(s.TEXTURE_3D,0,Te,Se.width,Se.height,Se.depth,0,tt,st,Se.data);else if(E.isFramebufferTexture){if(ft)if(Nt)t.texStorage2D(s.TEXTURE_2D,ze,Te,Se.width,Se.height);else{let ge=Se.width,it=Se.height;for(let Le=0;Le<ze;Le++)t.texImage2D(s.TEXTURE_2D,Le,Te,ge,it,0,tt,st,null),ge>>=1,it>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),Se.parentNode!==ge){ge.appendChild(Se),y.add(E),ge.onpaint=vt=>{const Ht=vt.changedElements;for(const Yt of y)Ht.includes(Yt.image)&&(Yt.needsUpdate=!0)},ge.requestPaint();return}const it=0,Le=s.RGBA,ve=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,it,Le,ve,Qe,Se),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(Nt&&ft){const ge=Ot(dt[0]);t.texStorage2D(s.TEXTURE_2D,ze,Te,ge.width,ge.height)}for(let ge=0,it=dt.length;ge<it;ge++)Re=dt[ge],Nt?B&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,tt,st,Re):t.texImage2D(s.TEXTURE_2D,ge,Te,tt,st,Re);E.generateMipmaps=!1}else if(Nt){if(ft){const ge=Ot(Se);t.texStorage2D(s.TEXTURE_2D,ze,Te,ge.width,ge.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,tt,st,Se)}else t.texImage2D(s.TEXTURE_2D,0,Te,tt,st,Se);_(E)&&D(Ee),je.__version=Be.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ot(U,E,ae){if(E.image.length!==6)return;const Ee=de(U,E),Ne=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ae);const Be=r.get(Ne);if(Ne.version!==Be.__version||Ee===!0){t.activeTexture(s.TEXTURE0+ae);const je=Jt.getPrimaries(Jt.workingColorSpace),xe=E.colorSpace===is?null:Jt.getPrimaries(E.colorSpace),Se=E.colorSpace===is||je===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!tt&&!st?Te[ve]=S(E.image[ve],!0,o.maxCubemapSize):Te[ve]=st?E.image[ve].image:E.image[ve],Te[ve]=We(E,Te[ve]);const Re=Te[0],dt=l.convert(E.format,E.colorSpace),Nt=l.convert(E.type),ft=N(E.internalFormat,dt,Nt,E.normalized,E.colorSpace),B=E.isVideoTexture!==!0,ze=Be.__version===void 0||Ee===!0,ge=Ne.dataReady;let it=F(E,Re);Ue(s.TEXTURE_CUBE_MAP,E);let Le;if(tt){B&&ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,it,ft,Re.width,Re.height);for(let ve=0;ve<6;ve++){Le=Te[ve].mipmaps;for(let Qe=0;Qe<Le.length;Qe++){const vt=Le[Qe];E.format!==Zi?dt!==null?B?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,vt.width,vt.height,dt,vt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,ft,vt.width,vt.height,0,vt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,vt.width,vt.height,dt,Nt,vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,ft,vt.width,vt.height,0,dt,Nt,vt.data)}}}else{if(Le=E.mipmaps,B&&ze){Le.length>0&&it++;const ve=Ot(Te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,it,ft,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(st){B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,dt,Nt,Te[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,Te[ve].width,Te[ve].height,0,dt,Nt,Te[ve].data);for(let Qe=0;Qe<Le.length;Qe++){const Ht=Le[Qe].image[ve].image;B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Ht.width,Ht.height,dt,Nt,Ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,ft,Ht.width,Ht.height,0,dt,Nt,Ht.data)}}else{B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,dt,Nt,Te[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,dt,Nt,Te[ve]);for(let Qe=0;Qe<Le.length;Qe++){const vt=Le[Qe];B?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,dt,Nt,vt.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,ft,dt,Nt,vt.image[ve])}}}_(E)&&D(s.TEXTURE_CUBE_MAP),Be.__version=Ne.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function et(U,E,ae,Ee,Ne,Be){const je=l.convert(ae.format,ae.colorSpace),xe=l.convert(ae.type),Se=N(ae.internalFormat,je,xe,ae.normalized,ae.colorSpace),tt=r.get(E),st=r.get(ae);if(st.__renderTarget=E,!tt.__hasExternalTextures){const Te=Math.max(1,E.width>>Be),Re=Math.max(1,E.height>>Be);Ne===s.TEXTURE_3D||Ne===s.TEXTURE_2D_ARRAY?t.texImage3D(Ne,Be,Se,Te,Re,E.depth,0,je,xe,null):t.texImage2D(Ne,Be,Se,Te,Re,0,je,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),_t(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,Ne,st.__webglTexture,0,Lt(E)):(Ne===s.TEXTURE_2D||Ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,Ne,st.__webglTexture,Be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(U,E,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const Ee=E.depthTexture,Ne=Ee&&Ee.isDepthTexture?Ee.type:null,Be=H(E.stencilBuffer,Ne),je=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(E),Be,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(E),Be,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Be,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,U)}else{const Ee=E.textures;for(let Ne=0;Ne<Ee.length;Ne++){const Be=Ee[Ne],je=l.convert(Be.format,Be.colorSpace),xe=l.convert(Be.type),Se=N(Be.internalFormat,je,xe,Be.normalized,Be.colorSpace);_t(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(E),Se,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(E),Se,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Se,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function yt(U,E,ae){const Ee=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ne=r.get(E.depthTexture);if(Ne.__renderTarget=E,(!Ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Ee){if(Ne.__webglInit===void 0&&(Ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),Ne.__webglTexture===void 0){Ne.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Ne.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,E.depthTexture);const tt=l.convert(E.depthTexture.format),st=l.convert(E.depthTexture.type);let Te;E.depthTexture.format===Ir?Te=s.DEPTH_COMPONENT24:E.depthTexture.format===Ns&&(Te=s.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Te,E.width,E.height,0,tt,st,null)}}else se(E.depthTexture,0);const Be=Ne.__webglTexture,je=Lt(E),xe=Ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,Se=E.depthTexture.format===Ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ir)_t(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Be,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Be,0);else if(E.depthTexture.format===Ns)_t(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Be,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Be,0);else throw new Error("Unknown depthTexture format")}function Et(U){const E=r.get(U),ae=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const Ee=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Ee){const Ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Ee.removeEventListener("dispose",Ne)};Ee.addEventListener("dispose",Ne),E.__depthDisposeCallback=Ne}E.__boundDepthTexture=Ee}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(ae)for(let Ee=0;Ee<6;Ee++)yt(E.__webglFramebuffer[Ee],U,Ee);else{const Ee=U.texture.mipmaps;Ee&&Ee.length>0?yt(E.__webglFramebuffer[0],U,0):yt(E.__webglFramebuffer,U,0)}else if(ae){E.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Ee]),E.__webglDepthbuffer[Ee]===void 0)E.__webglDepthbuffer[Ee]=s.createRenderbuffer(),wt(E.__webglDepthbuffer[Ee],U,!1);else{const Ne=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=E.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,Be),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,Be)}}else{const Ee=U.texture.mipmaps;if(Ee&&Ee.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),wt(E.__webglDepthbuffer,U,!1);else{const Ne=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Be),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,Be)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(U,E,ae){const Ee=r.get(U);E!==void 0&&et(Ee.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Et(U)}function bt(U){const E=U.texture,ae=r.get(U),Ee=r.get(E);U.addEventListener("dispose",w);const Ne=U.textures,Be=U.isWebGLCubeRenderTarget===!0,je=Ne.length>1;if(je||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=E.version,u.memory.textures++),Be){ae.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer[xe]=[];for(let Se=0;Se<E.mipmaps.length;Se++)ae.__webglFramebuffer[xe][Se]=s.createFramebuffer()}else ae.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)ae.__webglFramebuffer[xe]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(je)for(let xe=0,Se=Ne.length;xe<Se;xe++){const tt=r.get(Ne[xe]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&_t(U)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let xe=0;xe<Ne.length;xe++){const Se=Ne[xe];ae.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]);const tt=l.convert(Se.format,Se.colorSpace),st=l.convert(Se.type),Te=N(Se.internalFormat,tt,st,Se.normalized,Se.colorSpace,U.isXRRenderTarget===!0),Re=Lt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Te,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ae.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),wt(ae.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Be){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,E);for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)et(ae.__webglFramebuffer[xe][Se],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else et(ae.__webglFramebuffer[xe],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(E)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let xe=0,Se=Ne.length;xe<Se;xe++){const tt=Ne[xe],st=r.get(tt);let Te=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,st.__webglTexture),Ue(Te,tt),et(ae.__webglFramebuffer,U,tt,s.COLOR_ATTACHMENT0+xe,Te,0),_(tt)&&D(Te)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ee.__webglTexture),Ue(xe,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)et(ae.__webglFramebuffer[Se],U,E,s.COLOR_ATTACHMENT0,xe,Se);else et(ae.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,xe,0);_(E)&&D(xe),t.unbindTexture()}U.depthBuffer&&Et(U)}function Bt(U){const E=U.textures;for(let ae=0,Ee=E.length;ae<Ee;ae++){const Ne=E[ae];if(_(Ne)){const Be=R(U),je=r.get(Ne).__webglTexture;t.bindTexture(Be,je),D(Be),t.unbindTexture()}}}const Rt=[],en=[];function J(U){if(U.samples>0){if(_t(U)===!1){const E=U.textures,ae=U.width,Ee=U.height;let Ne=s.COLOR_BUFFER_BIT;const Be=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(U),xe=E.length>1;if(xe)for(let tt=0;tt<E.length;tt++)t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Se=U.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let tt=0;tt<E.length;tt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ne|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ne|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const st=r.get(E[tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,ae,Ee,0,0,ae,Ee,Ne,s.NEAREST),h===!0&&(Rt.length=0,en.length=0,Rt.push(s.COLOR_ATTACHMENT0+tt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Rt.push(Be),en.push(Be),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,en)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let tt=0;tt<E.length;tt++){t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const st=r.get(E[tt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,st,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Lt(U){return Math.min(o.maxSamples,U.samples)}function _t(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ft(U){const E=u.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function We(U,E){const ae=U.colorSpace,Ee=U.format,Ne=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ae!==rc&&ae!==is&&(Jt.getTransfer(ae)===ln?(Ee!==Zi||Ne!==Oi)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",ae)),E}function Ot(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=le,this.getTextureUnits=pe,this.setTextureUnits=j,this.setTexture2D=se,this.setTexture2DArray=fe,this.setTexture3D=ce,this.setTextureCube=G,this.rebindTextures=jt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=et,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kw(s,e){function t(r,o=is){let l;const u=Jt.getTransfer(o);if(r===Oi)return s.UNSIGNED_BYTE;if(r===Uf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Q0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===eg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Z0)return s.BYTE;if(r===J0)return s.SHORT;if(r===yo)return s.UNSIGNED_SHORT;if(r===Lf)return s.INT;if(r===dr)return s.UNSIGNED_INT;if(r===ar)return s.FLOAT;if(r===Pr)return s.HALF_FLOAT;if(r===tg)return s.ALPHA;if(r===ng)return s.RGB;if(r===Zi)return s.RGBA;if(r===Ir)return s.DEPTH_COMPONENT;if(r===Ns)return s.DEPTH_STENCIL;if(r===ig)return s.RED;if(r===Of)return s.RED_INTEGER;if(r===Ds)return s.RG;if(r===kf)return s.RG_INTEGER;if(r===Bf)return s.RGBA_INTEGER;if(r===Kl||r===Zl||r===Jl||r===Ql)if(u===ln)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$d||r===qd||r===Kd||r===Zd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===$d)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jd||r===Qd||r===ef||r===tf||r===nf||r===nc||r===rf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Jd||r===Qd)return u===ln?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ef)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===tf)return l.COMPRESSED_R11_EAC;if(r===nf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===nc)return l.COMPRESSED_RG11_EAC;if(r===rf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===sf||r===af||r===of||r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===xf||r===vf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===sf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===af)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===of)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===df)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ff)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vf)return u===ln?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_f||r===yf||r===Sf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===_f)return u===ln?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mf||r===wf||r===ic||r===Ef)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Mf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===wf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ic)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ef)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===So?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zw=`
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

}`;class Vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new fg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new fr({vertexShader:Bw,fragmentShader:zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new mc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hw extends Us{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,m=null,v=null,y=null,x=null,M=null,C=null;const L=typeof XRWebGLBinding<"u",S=new Vw,_={},D=t.getContextAttributes();let R=null,N=null;const H=[],F=[],z=new Dt;let w=null;const I=new Fi;I.viewport=new wn;const q=new Fi;q.viewport=new wn;const k=[I,q],Z=new J_;let le=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let be=H[de];return be===void 0&&(be=new ld,H[de]=be),be.getTargetRaySpace()},this.getControllerGrip=function(de){let be=H[de];return be===void 0&&(be=new ld,H[de]=be),be.getGripSpace()},this.getHand=function(de){let be=H[de];return be===void 0&&(be=new ld,H[de]=be),be.getHandSpace()};function j(de){const be=F.indexOf(de.inputSource);if(be===-1)return;const ye=H[be];ye!==void 0&&(ye.update(de.inputSource,de.frame,m||u),ye.dispatchEvent({type:de.type,data:de.inputSource}))}function oe(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",te);for(let de=0;de<H.length;de++){const be=F[de];be!==null&&(F[de]=null,H[de].disconnect(be))}le=null,pe=null,S.reset();for(const de in _)delete _[de];e.setRenderTarget(R),M=null,x=null,y=null,o=null,N=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){l=de,r.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){f=de,r.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(de){m=de},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y===null&&L&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return C},this.getSession=function(){return o},this.setSession=async function(de){if(o=de,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",te),D.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(z),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,ot=null;D.depth&&(ot=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=D.stencil?Ns:Ir,ke=D.stencil?So:dr);const et={colorFormat:t.RGBA8,depthFormat:ot,scaleFactor:l};y=this.getBinding(),x=y.createProjectionLayer(et),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new cr(x.textureWidth,x.textureHeight,{format:Zi,type:Oi,depthTexture:new Ea(x.textureWidth,x.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new cr(M.framebufferWidth,M.framebufferHeight,{format:Zi,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function te(de){for(let be=0;be<de.removed.length;be++){const ye=de.removed[be],ke=F.indexOf(ye);ke>=0&&(F[ke]=null,H[ke].disconnect(ye))}for(let be=0;be<de.added.length;be++){const ye=de.added[be];let ke=F.indexOf(ye);if(ke===-1){for(let et=0;et<H.length;et++)if(et>=F.length){F.push(ye),ke=et;break}else if(F[et]===null){F[et]=ye,ke=et;break}if(ke===-1)break}const ot=H[ke];ot&&ot.connect(ye)}}const se=new ie,fe=new ie;function ce(de,be,ye){se.setFromMatrixPosition(be.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const ke=se.distanceTo(fe),ot=be.projectionMatrix.elements,et=ye.projectionMatrix.elements,wt=ot[14]/(ot[10]-1),yt=ot[14]/(ot[10]+1),Et=(ot[9]+1)/ot[5],jt=(ot[9]-1)/ot[5],bt=(ot[8]-1)/ot[0],Bt=(et[8]+1)/et[0],Rt=wt*bt,en=wt*Bt,J=ke/(-bt+Bt),Lt=J*-bt;if(be.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(Lt),de.translateZ(J),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),ot[10]===-1)de.projectionMatrix.copy(be.projectionMatrix),de.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const _t=wt+J,Ft=yt+J,We=Rt-Lt,Ot=en+(ke-Lt),U=Et*yt/Ft*_t,E=jt*yt/Ft*_t;de.projectionMatrix.makePerspective(We,Ot,U,E,_t,Ft),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function G(de,be){be===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(be.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(o===null)return;let be=de.near,ye=de.far;S.texture!==null&&(S.depthNear>0&&(be=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),Z.near=q.near=I.near=be,Z.far=q.far=I.far=ye,(le!==Z.near||pe!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),le=Z.near,pe=Z.far),Z.layers.mask=de.layers.mask|6,I.layers.mask=Z.layers.mask&-5,q.layers.mask=Z.layers.mask&-3;const ke=de.parent,ot=Z.cameras;G(Z,ke);for(let et=0;et<ot.length;et++)G(ot[et],ke);ot.length===2?ce(Z,I,q):Z.projectionMatrix.copy(I.projectionMatrix),ne(de,Z,ke)};function ne(de,be,ye){ye===null?de.matrix.copy(be.matrixWorld):(de.matrix.copy(ye.matrixWorld),de.matrix.invert(),de.matrix.multiply(be.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(be.projectionMatrix),de.projectionMatrixInverse.copy(be.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=Tf*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(de){h=de,x!==null&&(x.fixedFoveation=de),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=de)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(de){return _[de]};let $e=null;function rt(de,be){if(v=be.getViewerPose(m||u),C=be,v!==null){const ye=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let ke=!1;ye.length!==Z.cameras.length&&(Z.cameras.length=0,ke=!0);for(let yt=0;yt<ye.length;yt++){const Et=ye[yt];let jt=null;if(M!==null)jt=M.getViewport(Et);else{const Bt=y.getViewSubImage(x,Et);jt=Bt.viewport,yt===0&&(e.setRenderTargetTextures(N,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(N))}let bt=k[yt];bt===void 0&&(bt=new Fi,bt.layers.enable(yt),bt.viewport=new wn,k[yt]=bt),bt.matrix.fromArray(Et.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Et.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(jt.x,jt.y,jt.width,jt.height),yt===0&&(Z.matrix.copy(bt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ke===!0&&Z.cameras.push(bt)}const ot=o.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&L){y=r.getBinding();const yt=y.getDepthInformation(ye[0]);yt&&yt.isValid&&yt.texture&&S.init(yt,o.renderState)}if(ot&&ot.includes("camera-access")&&L){e.state.unbindTexture(),y=r.getBinding();for(let yt=0;yt<ye.length;yt++){const Et=ye[yt].camera;if(Et){let jt=_[Et];jt||(jt=new fg,_[Et]=jt);const bt=y.getCameraImage(Et);jt.sourceTexture=bt}}}}for(let ye=0;ye<H.length;ye++){const ke=F[ye],ot=H[ye];ke!==null&&ot!==void 0&&ot.update(ke,be,m||u)}$e&&$e(de,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),C=null}const Ue=new vg;Ue.setAnimationLoop(rt),this.setAnimationLoop=function(de){$e=de},this.dispose=function(){}}}const Gw=new An,bg=new zt;bg.set(-1,0,0,0,1,0,0,0,1);function jw(s,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,mg(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,D,R,N){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(S,_):_.isMeshLambertMaterial?(l(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(S,_),y(S,_)):_.isMeshPhongMaterial?(l(S,_),v(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,N)):_.isMeshMatcapMaterial?(l(S,_),C(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),L(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?h(S,_,D,R):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===pi&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===pi&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const D=e.get(_),R=D.envMap,N=D.envMapRotation;R&&(S.envMap.value=R,S.envMapRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(N)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(bg),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function h(S,_,D,R){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*D,S.scale.value=R*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function y(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,D){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===pi&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function C(S,_){_.matcap&&(S.matcap.value=_.matcap)}function L(S,_){const D=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Ww(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,R){const N=R.program;r.uniformBlockBinding(D,N)}function m(D,R){let N=o[D.id];N===void 0&&(C(D),N=v(D),o[D.id]=N,D.addEventListener("dispose",S));const H=R.program;r.updateUBOMapping(D,H);const F=e.render.frame;l[D.id]!==F&&(x(D),l[D.id]=F)}function v(D){const R=y();D.__bindingPointIndex=R;const N=s.createBuffer(),H=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,H,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,N),N}function y(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const R=o[D.id],N=D.uniforms,H=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let F=0,z=N.length;F<z;F++){const w=Array.isArray(N[F])?N[F]:[N[F]];for(let I=0,q=w.length;I<q;I++){const k=w[I];if(M(k,F,I,H)===!0){const Z=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let j=0;j<le.length;j++){const oe=le[j],te=L(oe);typeof oe=="number"||typeof oe=="boolean"?(k.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,Z+pe,k.__data)):oe.isMatrix3?(k.__data[0]=oe.elements[0],k.__data[1]=oe.elements[1],k.__data[2]=oe.elements[2],k.__data[3]=0,k.__data[4]=oe.elements[3],k.__data[5]=oe.elements[4],k.__data[6]=oe.elements[5],k.__data[7]=0,k.__data[8]=oe.elements[6],k.__data[9]=oe.elements[7],k.__data[10]=oe.elements[8],k.__data[11]=0):ArrayBuffer.isView(oe)?k.__data.set(new oe.constructor(oe.buffer,oe.byteOffset,k.__data.length)):(oe.toArray(k.__data,pe),pe+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,R,N,H){const F=D.value,z=R+"_"+N;if(H[z]===void 0)return typeof F=="number"||typeof F=="boolean"?H[z]=F:ArrayBuffer.isView(F)?H[z]=F.slice():H[z]=F.clone(),!0;{const w=H[z];if(typeof F=="number"||typeof F=="boolean"){if(w!==F)return H[z]=F,!0}else{if(ArrayBuffer.isView(F))return!0;if(w.equals(F)===!1)return w.copy(F),!0}}return!1}function C(D){const R=D.uniforms;let N=0;const H=16;for(let z=0,w=R.length;z<w;z++){const I=Array.isArray(R[z])?R[z]:[R[z]];for(let q=0,k=I.length;q<k;q++){const Z=I[q],le=Array.isArray(Z.value)?Z.value:[Z.value];for(let pe=0,j=le.length;pe<j;pe++){const oe=le[pe],te=L(oe),se=N%H,fe=se%te.boundary,ce=se+fe;N+=fe,ce!==0&&H-ce<te.storage&&(N+=H-ce),Z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=N,N+=te.storage}}}const F=N%H;return F>0&&(N+=H-F),D.__size=N,D.__cache={},this}function L(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(R.boundary=16,R.storage=D.byteLength):It("WebGLRenderer: Unsupported uniform value type.",D),R}function S(D){const R=D.target;R.removeEventListener("dispose",S);const N=u.indexOf(R.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function _(){for(const D in o)s.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:h,update:m,dispose:_}}const Xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let rr=null;function Yw(){return rr===null&&(rr=new E_(Xw,16,16,Ds,Pr),rr.name="DFG_LUT",rr.minFilter=Zn,rr.magFilter=Zn,rr.wrapS=Cr,rr.wrapT=Cr,rr.generateMipmaps=!1,rr.needsUpdate=!0),rr}class $w{constructor(e={}){const{canvas:t=e_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Oi}=e;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=u;const L=M,S=new Set([Bf,kf,Of]),_=new Set([Oi,dr,yo,So,Uf,Ff]),D=new Uint32Array(4),R=new Int32Array(4),N=new ie;let H=null,F=null;const z=[],w=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let k=!1,Z=null;this._outputColorSpace=Ui;let le=0,pe=0,j=null,oe=-1,te=null;const se=new wn,fe=new wn;let ce=null;const G=new un(0);let ne=0,$e=t.width,rt=t.height,Ue=1,de=null,be=null;const ye=new wn(0,0,$e,rt),ke=new wn(0,0,$e,rt);let ot=!1;const et=new ug;let wt=!1,yt=!1;const Et=new An,jt=new ie,bt=new wn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function en(){return j===null?Ue:1}let J=r;function Lt(T,W){return t.getContext(T,W)}try{const T={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Df}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",vt,!1),J===null){const W="webgl2";if(J=Lt(W,T),J===null)throw Lt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw rn("WebGLRenderer: "+T.message),T}let _t,Ft,We,Ot,U,E,ae,Ee,Ne,Be,je,xe,Se,tt,st,Te,Re,dt,Nt,ft,B,ze,ge;function it(){_t=new Y1(J),_t.init(),B=new kw(J,_t),Ft=new B1(J,_t,e,B),We=new Fw(J,_t),Ft.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),Ot=new K1(J),U=new Mw,E=new Ow(J,_t,We,U,Ft,B,Ot),ae=new X1(q),Ee=new ey(J),ze=new O1(J,Ee),Ne=new $1(J,Ee,Ot,ze),Be=new J1(J,Ne,Ee,ze,Ot),dt=new Z1(J,Ft,E),st=new z1(U),je=new Sw(q,ae,_t,Ft,ze,st),xe=new jw(q,U),Se=new Ew,tt=new Nw(_t),Re=new F1(q,ae,We,Be,C,h),Te=new Uw(q,Be,Ft),ge=new Ww(J,Ot,Ft,We),Nt=new k1(J,_t,Ot),ft=new q1(J,_t,Ot),Ot.programs=je.programs,q.capabilities=Ft,q.extensions=_t,q.properties=U,q.renderLists=Se,q.shadowMap=Te,q.state=We,q.info=Ot}it(),L!==Oi&&(I=new eM(L,t.width,t.height,o,l));const Le=new Hw(q,J);this.xr=Le,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const T=_t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(T){T!==void 0&&(Ue=T,this.setSize($e,rt,!1))},this.getSize=function(T){return T.set($e,rt)},this.setSize=function(T,W,re=!0){if(Le.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=T,rt=W,t.width=Math.floor(T*Ue),t.height=Math.floor(W*Ue),re===!0&&(t.style.width=T+"px",t.style.height=W+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set($e*Ue,rt*Ue).floor()},this.setDrawingBufferSize=function(T,W,re){$e=T,rt=W,Ue=re,t.width=Math.floor(T*re),t.height=Math.floor(W*re),this.setViewport(0,0,T,W)},this.setEffects=function(T){if(L===Oi){rn("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let W=0;W<T.length;W++)if(T[W].isOutputPass===!0){It("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(se)},this.getViewport=function(T){return T.copy(ye)},this.setViewport=function(T,W,re,K){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,W,re,K),We.viewport(se.copy(ye).multiplyScalar(Ue).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,W,re,K){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,W,re,K),We.scissor(fe.copy(ke).multiplyScalar(Ue).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){We.setScissorTest(ot=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){be=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,re=!0){let K=0;if(T){let Y=!1;if(j!==null){const Ce=j.texture.format;Y=S.has(Ce)}if(Y){const Ce=j.texture.type,Ge=_.has(Ce),Ae=Re.getClearColor(),Ke=Re.getClearAlpha(),Xe=Ae.r,Pe=Ae.g,nt=Ae.b;Ge?(D[0]=Xe,D[1]=Pe,D[2]=nt,D[3]=Ke,J.clearBufferuiv(J.COLOR,0,D)):(R[0]=Xe,R[1]=Pe,R[2]=nt,R[3]=Ke,J.clearBufferiv(J.COLOR,0,R))}else K|=J.COLOR_BUFFER_BIT}W&&(K|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(K|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&J.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Z=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),Re.dispose(),Se.dispose(),tt.dispose(),U.dispose(),ae.dispose(),Be.dispose(),ze.dispose(),ge.dispose(),je.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",ki),Le.removeEventListener("sessionend",Dn),Jn.stop()};function ve(T){T.preventDefault(),Im("WebGLRenderer: Context Lost."),k=!0}function Qe(){Im("WebGLRenderer: Context Restored."),k=!1;const T=Ot.autoReset,W=Te.enabled,re=Te.autoUpdate,K=Te.needsUpdate,Y=Te.type;it(),Ot.autoReset=T,Te.enabled=W,Te.autoUpdate=re,Te.needsUpdate=K,Te.type=Y}function vt(T){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ht(T){const W=T.target;W.removeEventListener("dispose",Ht),Yt(W)}function Yt(T){_n(T),U.remove(T)}function _n(T){const W=U.get(T).programs;W!==void 0&&(W.forEach(function(re){je.releaseProgram(re)}),T.isShaderMaterial&&je.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,re,K,Y,Ce){W===null&&(W=Bt);const Ge=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=Ti(T,W,re,K,Y);We.setMaterial(K,Ge);let Ke=re.index,Xe=1;if(K.wireframe===!0){if(Ke=Ne.getWireframeAttribute(re),Ke===void 0)return;Xe=2}const Pe=re.drawRange,nt=re.attributes.position;let Je=Pe.start*Xe,St=(Pe.start+Pe.count)*Xe;Ce!==null&&(Je=Math.max(Je,Ce.start*Xe),St=Math.min(St,(Ce.start+Ce.count)*Xe)),Ke!==null?(Je=Math.max(Je,0),St=Math.min(St,Ke.count)):nt!=null&&(Je=Math.max(Je,0),St=Math.min(St,nt.count));const kt=St-Je;if(kt<0||kt===1/0)return;ze.setup(Y,K,Ae,re,Ke);let Kt,Gt=Nt;if(Ke!==null&&(Kt=Ee.get(Ke),Gt=ft,Gt.setIndex(Kt)),Y.isMesh)K.wireframe===!0?(We.setLineWidth(K.wireframeLinewidth*en()),Gt.setMode(J.LINES)):Gt.setMode(J.TRIANGLES);else if(Y.isLine){let Ct=K.linewidth;Ct===void 0&&(Ct=1),We.setLineWidth(Ct*en()),Y.isLineSegments?Gt.setMode(J.LINES):Y.isLineLoop?Gt.setMode(J.LINE_LOOP):Gt.setMode(J.LINE_STRIP)}else Y.isPoints?Gt.setMode(J.POINTS):Y.isSprite&&Gt.setMode(J.TRIANGLES);if(Y.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ct=Y._multiDrawStarts,Ze=Y._multiDrawCounts,tn=Y._multiDrawCount,Mt=Ke?Ee.get(Ke).bytesPerElement:1,b=U.get(K).currentProgram.getUniforms();for(let O=0;O<tn;O++)b.setValue(J,"_gl_DrawID",O),Gt.render(Ct[O]/Mt,Ze[O])}else if(Y.isInstancedMesh)Gt.renderInstances(Je,kt,Y.count);else if(re.isInstancedBufferGeometry){const Ct=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ze=Math.min(re.instanceCount,Ct);Gt.renderInstances(Je,kt,Ze)}else Gt.render(Je,kt)};function Bn(T,W,re){T.transparent===!0&&T.side===Ar&&T.forceSinglePass===!1?(T.side=pi,T.needsUpdate=!0,bi(T,W,re),T.side=as,T.needsUpdate=!0,bi(T,W,re),T.side=Ar):bi(T,W,re)}this.compile=function(T,W,re=null){re===null&&(re=T),F=tt.get(re),F.init(W),w.push(F),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(F.pushLight(Y),Y.castShadow&&F.pushShadow(Y))}),T!==re&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(F.pushLight(Y),Y.castShadow&&F.pushShadow(Y))}),F.setupLights();const K=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Ge=0;Ge<Ce.length;Ge++){const Ae=Ce[Ge];Bn(Ae,re,Y),K.add(Ae)}else Bn(Ce,re,Y),K.add(Ce)}),F=w.pop(),K},this.compileAsync=function(T,W,re=null){const K=this.compile(T,W,re);return new Promise(Y=>{function Ce(){if(K.forEach(function(Ge){U.get(Ge).currentProgram.isReady()&&K.delete(Ge)}),K.size===0){Y(T);return}setTimeout(Ce,10)}_t.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let mi=null;function Ji(T){mi&&mi(T)}function ki(){Jn.stop()}function Dn(){Jn.start()}const Jn=new vg;Jn.setAnimationLoop(Ji),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(T){mi=T,Le.setAnimationLoop(T),T===null?Jn.stop():Jn.start()},Le.addEventListener("sessionstart",ki),Le.addEventListener("sessionend",Dn),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Z!==null&&Z.renderStart(T,W);const re=Le.enabled===!0&&Le.isPresenting===!0,K=I!==null&&(j===null||re)&&I.begin(q,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(W),W=Le.getCamera()),T.isScene===!0&&T.onBeforeRender(q,T,W,j),F=tt.get(T,w.length),F.init(W),F.state.textureUnits=E.getTextureUnits(),w.push(F),Et.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),et.setFromProjectionMatrix(Et,or,W.reversedDepth),yt=this.localClippingEnabled,wt=st.init(this.clippingPlanes,yt),H=Se.get(T,z.length),H.init(),z.push(H),Le.enabled===!0&&Le.isPresenting===!0){const Ge=q.xr.getDepthSensingMesh();Ge!==null&&Bi(Ge,W,-1/0,q.sortObjects)}Bi(T,W,0,q.sortObjects),H.finish(),q.sortObjects===!0&&H.sort(de,be),Rt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Rt&&Re.addToRenderList(H,T),this.info.render.frame++,wt===!0&&st.beginShadows();const Y=F.state.shadowsArray;if(Te.render(Y,T,W),wt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&I.hasRenderPass())===!1){const Ge=H.opaque,Ae=H.transmissive;if(F.setupLights(),W.isArrayCamera){const Ke=W.cameras;if(Ae.length>0)for(let Xe=0,Pe=Ke.length;Xe<Pe;Xe++){const nt=Ke[Xe];Sn(Ge,Ae,T,nt)}Rt&&Re.render(T);for(let Xe=0,Pe=Ke.length;Xe<Pe;Xe++){const nt=Ke[Xe];si(H,T,nt,nt.viewport)}}else Ae.length>0&&Sn(Ge,Ae,T,W),Rt&&Re.render(T),si(H,T,W)}j!==null&&pe===0&&(E.updateMultisampleRenderTarget(j),E.updateRenderTargetMipmap(j)),K&&I.end(q),T.isScene===!0&&T.onAfterRender(q,T,W),ze.resetDefaultState(),oe=-1,te=null,w.pop(),w.length>0?(F=w[w.length-1],E.setTextureUnits(F.state.textureUnits),wt===!0&&st.setGlobalState(q.clippingPlanes,F.state.camera)):F=null,z.pop(),z.length>0?H=z[z.length-1]:H=null,Z!==null&&Z.renderEnd()};function Bi(T,W,re,K){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)re=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLightProbeGrid)F.pushLightProbeGrid(T);else if(T.isLight)F.pushLight(T),T.castShadow&&F.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||et.intersectsSprite(T)){K&&bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Et);const Ge=Be.update(T),Ae=T.material;Ae.visible&&H.push(T,Ge,Ae,re,bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||et.intersectsObject(T))){const Ge=Be.update(T),Ae=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),bt.copy(T.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),bt.copy(Ge.boundingSphere.center)),bt.applyMatrix4(T.matrixWorld).applyMatrix4(Et)),Array.isArray(Ae)){const Ke=Ge.groups;for(let Xe=0,Pe=Ke.length;Xe<Pe;Xe++){const nt=Ke[Xe],Je=Ae[nt.materialIndex];Je&&Je.visible&&H.push(T,Ge,Je,re,bt.z,nt)}}else Ae.visible&&H.push(T,Ge,Ae,re,bt.z,null)}}const Ce=T.children;for(let Ge=0,Ae=Ce.length;Ge<Ae;Ge++)Bi(Ce[Ge],W,re,K)}function si(T,W,re,K){const{opaque:Y,transmissive:Ce,transparent:Ge}=T;F.setupLightsView(re),wt===!0&&st.setGlobalState(q.clippingPlanes,re),K&&We.viewport(se.copy(K)),Y.length>0&&Qn(Y,W,re),Ce.length>0&&Qn(Ce,W,re),Ge.length>0&&Qn(Ge,W,re),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Sn(T,W,re,K){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[K.id]===void 0){const Je=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[K.id]=new cr(1,1,{generateMipmaps:!0,type:Je?Pr:Oi,minFilter:Rs,samples:Math.max(4,Ft.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const Ce=F.state.transmissionRenderTarget[K.id],Ge=K.viewport||se;Ce.setSize(Ge.z*q.transmissionResolutionScale,Ge.w*q.transmissionResolutionScale);const Ae=q.getRenderTarget(),Ke=q.getActiveCubeFace(),Xe=q.getActiveMipmapLevel();q.setRenderTarget(Ce),q.getClearColor(G),ne=q.getClearAlpha(),ne<1&&q.setClearColor(16777215,.5),q.clear(),Rt&&Re.render(re);const Pe=q.toneMapping;q.toneMapping=lr;const nt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),F.setupLightsView(K),wt===!0&&st.setGlobalState(q.clippingPlanes,K),Qn(T,re,K),E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let St=0,kt=W.length;St<kt;St++){const Kt=W[St],{object:Gt,geometry:Ct,material:Ze,group:tn}=Kt;if(Ze.side===Ar&&Gt.layers.test(K.layers)){const Mt=Ze.side;Ze.side=pi,Ze.needsUpdate=!0,zi(Gt,re,K,Ct,Ze,tn),Ze.side=Mt,Ze.needsUpdate=!0,Je=!0}}Je===!0&&(E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce))}q.setRenderTarget(Ae,Ke,Xe),q.setClearColor(G,ne),nt!==void 0&&(K.viewport=nt),q.toneMapping=Pe}function Qn(T,W,re){const K=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Ce=T.length;Y<Ce;Y++){const Ge=T[Y],{object:Ae,geometry:Ke,group:Xe}=Ge;let Pe=Ge.material;Pe.allowOverride===!0&&K!==null&&(Pe=K),Ae.layers.test(re.layers)&&zi(Ae,W,re,Ke,Pe,Xe)}}function zi(T,W,re,K,Y,Ce){T.onBeforeRender(q,W,re,K,Y,Ce),T.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(q,W,re,K,T,Ce),Y.transparent===!0&&Y.side===Ar&&Y.forceSinglePass===!1?(Y.side=pi,Y.needsUpdate=!0,q.renderBufferDirect(re,W,K,Y,T,Ce),Y.side=as,Y.needsUpdate=!0,q.renderBufferDirect(re,W,K,Y,T,Ce),Y.side=Ar):q.renderBufferDirect(re,W,K,Y,T,Ce),T.onAfterRender(q,W,re,K,Y,Ce)}function bi(T,W,re){W.isScene!==!0&&(W=Bt);const K=U.get(T),Y=F.state.lights,Ce=F.state.shadowsArray,Ge=Y.state.version,Ae=je.getParameters(T,Y.state,Ce,W,re,F.state.lightProbeGridArray),Ke=je.getProgramCacheKey(Ae);let Xe=K.programs;K.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?W.environment:null,K.fog=W.fog;const Pe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;K.envMap=ae.get(T.envMap||K.environment,Pe),K.envMapRotation=K.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Ht),Xe=new Map,K.programs=Xe);let nt=Xe.get(Ke);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===Ge)return ai(T,Ae),nt}else Ae.uniforms=je.getUniforms(T),Z!==null&&T.isNodeMaterial&&Z.build(T,re,Ae),T.onBeforeCompile(Ae,q),nt=je.acquireProgram(Ae,Ke),Xe.set(Ke,nt),K.uniforms=Ae.uniforms;const Je=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Je.clippingPlanes=st.uniform),ai(T,Ae),K.needsLights=De(T),K.lightsStateVersion=Ge,K.needsLights&&(Je.ambientLightColor.value=Y.state.ambient,Je.lightProbe.value=Y.state.probe,Je.directionalLights.value=Y.state.directional,Je.directionalLightShadows.value=Y.state.directionalShadow,Je.spotLights.value=Y.state.spot,Je.spotLightShadows.value=Y.state.spotShadow,Je.rectAreaLights.value=Y.state.rectArea,Je.ltc_1.value=Y.state.rectAreaLTC1,Je.ltc_2.value=Y.state.rectAreaLTC2,Je.pointLights.value=Y.state.point,Je.pointLightShadows.value=Y.state.pointShadow,Je.hemisphereLights.value=Y.state.hemi,Je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Je.spotLightMatrix.value=Y.state.spotLightMatrix,Je.spotLightMap.value=Y.state.spotLightMap,Je.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.lightProbeGrid=F.state.lightProbeGridArray.length>0,K.currentProgram=nt,K.uniformsList=null,nt}function gi(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=ec.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function ai(T,W){const re=U.get(T);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function hr(T,W){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;N.setFromMatrixPosition(W.matrixWorld);for(let re=0,K=T.length;re<K;re++){const Y=T[re];if(Y.texture!==null&&Y.boundingBox.containsPoint(N))return Y}return null}function Ti(T,W,re,K,Y){W.isScene!==!0&&(W=Bt),E.resetTextureUnits();const Ce=W.fog,Ge=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?W.environment:null,Ae=j===null?q.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Jt.workingColorSpace,Ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Xe=ae.get(K.envMap||Ge,Ke),Pe=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Je=!!re.morphAttributes.position,St=!!re.morphAttributes.normal,kt=!!re.morphAttributes.color;let Kt=lr;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Kt=q.toneMapping);const Gt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ct=Gt!==void 0?Gt.length:0,Ze=U.get(K),tn=F.state.lights;if(wt===!0&&(yt===!0||T!==te)){const lt=T===te&&K.id===oe;st.setState(K,T,lt)}let Mt=!1;K.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==tn.state.version||Ze.outputColorSpace!==Ae||Y.isBatchedMesh&&Ze.batching===!1||!Y.isBatchedMesh&&Ze.batching===!0||Y.isBatchedMesh&&Ze.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ze.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ze.instancing===!1||!Y.isInstancedMesh&&Ze.instancing===!0||Y.isSkinnedMesh&&Ze.skinning===!1||!Y.isSkinnedMesh&&Ze.skinning===!0||Y.isInstancedMesh&&Ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ze.instancingMorph===!1&&Y.morphTexture!==null||Ze.envMap!==Xe||K.fog===!0&&Ze.fog!==Ce||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==st.numPlanes||Ze.numIntersection!==st.numIntersection)||Ze.vertexAlphas!==Pe||Ze.vertexTangents!==nt||Ze.morphTargets!==Je||Ze.morphNormals!==St||Ze.morphColors!==kt||Ze.toneMapping!==Kt||Ze.morphTargetsCount!==Ct||!!Ze.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ze.__version=K.version);let b=Ze.currentProgram;Mt===!0&&(b=bi(K,W,Y),Z&&K.isNodeMaterial&&Z.onUpdateProgram(K,b,Ze));let O=!1,P=!1,ee=!1;const we=b.getUniforms(),_e=Ze.uniforms;if(We.useProgram(b.program)&&(O=!0,P=!0,ee=!0),K.id!==oe&&(oe=K.id,P=!0),Ze.needsLights){const lt=hr(F.state.lightProbeGridArray,Y);Ze.lightProbeGrid!==lt&&(Ze.lightProbeGrid=lt,P=!0)}if(O||te!==T){We.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),we.setValue(J,"projectionMatrix",T.projectionMatrix),we.setValue(J,"viewMatrix",T.matrixWorldInverse);const Qt=we.map.cameraPosition;Qt!==void 0&&Qt.setValue(J,jt.setFromMatrixPosition(T.matrixWorld)),Ft.logarithmicDepthBuffer&&we.setValue(J,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&we.setValue(J,"isOrthographic",T.isOrthographicCamera===!0),te!==T&&(te=T,P=!0,ee=!0)}if(Ze.needsLights&&(tn.state.directionalShadowMap.length>0&&we.setValue(J,"directionalShadowMap",tn.state.directionalShadowMap,E),tn.state.spotShadowMap.length>0&&we.setValue(J,"spotShadowMap",tn.state.spotShadowMap,E),tn.state.pointShadowMap.length>0&&we.setValue(J,"pointShadowMap",tn.state.pointShadowMap,E)),Y.isSkinnedMesh){we.setOptional(J,Y,"bindMatrix"),we.setOptional(J,Y,"bindMatrixInverse");const lt=Y.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),we.setValue(J,"boneTexture",lt.boneTexture,E))}Y.isBatchedMesh&&(we.setOptional(J,Y,"batchingTexture"),we.setValue(J,"batchingTexture",Y._matricesTexture,E),we.setOptional(J,Y,"batchingIdTexture"),we.setValue(J,"batchingIdTexture",Y._indirectTexture,E),we.setOptional(J,Y,"batchingColorTexture"),Y._colorsTexture!==null&&we.setValue(J,"batchingColorTexture",Y._colorsTexture,E));const Ve=re.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&dt.update(Y,re,b),(P||Ze.receiveShadow!==Y.receiveShadow)&&(Ze.receiveShadow=Y.receiveShadow,we.setValue(J,"receiveShadow",Y.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&W.environment!==null&&(_e.envMapIntensity.value=W.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=Yw()),P){if(we.setValue(J,"toneMappingExposure",q.toneMappingExposure),Ze.needsLights&&X(_e,ee),Ce&&K.fog===!0&&xe.refreshFogUniforms(_e,Ce),xe.refreshMaterialUniforms(_e,K,Ue,rt,F.state.transmissionRenderTarget[T.id]),Ze.needsLights&&Ze.lightProbeGrid){const lt=Ze.lightProbeGrid;_e.probesSH.value=lt.texture,_e.probesMin.value.copy(lt.boundingBox.min),_e.probesMax.value.copy(lt.boundingBox.max),_e.probesResolution.value.copy(lt.resolution)}ec.upload(J,gi(Ze),_e,E)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ec.upload(J,gi(Ze),_e,E),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&we.setValue(J,"center",Y.center),we.setValue(J,"modelViewMatrix",Y.modelViewMatrix),we.setValue(J,"normalMatrix",Y.normalMatrix),we.setValue(J,"modelMatrix",Y.matrixWorld),K.uniformsGroups!==void 0){const lt=K.uniformsGroups;for(let Qt=0,Pt=lt.length;Qt<Pt;Qt++){const an=lt[Qt];ge.update(an,b),ge.bind(an,b)}}return b}function X(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function De(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,W,re){const K=U.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),U.get(T.texture).__webglTexture=W,U.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:re,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const re=U.get(T);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const Me=J.createFramebuffer();this.setRenderTarget=function(T,W=0,re=0){j=T,le=W,pe=re;let K=null,Y=!1,Ce=!1;if(T){const Ae=U.get(T);if(Ae.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(J.FRAMEBUFFER,Ae.__webglFramebuffer),se.copy(T.viewport),fe.copy(T.scissor),ce=T.scissorTest,We.viewport(se),We.scissor(fe),We.setScissorTest(ce),oe=-1;return}else if(Ae.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Ae.__hasExternalTextures)E.rebindTextures(T,U.get(T.texture).__webglTexture,U.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pe=T.depthTexture;if(Ae.__boundDepthTexture!==Pe){if(Pe!==null&&U.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ce=!0);const Xe=U.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?K=Xe[W][re]:K=Xe[W],Y=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?K=U.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?K=Xe[re]:K=Xe,se.copy(T.viewport),fe.copy(T.scissor),ce=T.scissorTest}else se.copy(ye).multiplyScalar(Ue).floor(),fe.copy(ke).multiplyScalar(Ue).floor(),ce=ot;if(re!==0&&(K=Me),We.bindFramebuffer(J.FRAMEBUFFER,K)&&We.drawBuffers(T,K),We.viewport(se),We.scissor(fe),We.setScissorTest(ce),Y){const Ae=U.get(T.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,re)}else if(Ce){const Ae=W;for(let Ke=0;Ke<T.textures.length;Ke++){const Xe=U.get(T.textures[Ke]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Ke,Xe.__webglTexture,re,Ae)}}else if(T!==null&&re!==0){const Ae=U.get(T.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ae.__webglTexture,re)}oe=-1},this.readRenderTargetPixels=function(T,W,re,K,Y,Ce,Ge,Ae=0){if(!(T&&T.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ke=Ke[Ge]),Ke){We.bindFramebuffer(J.FRAMEBUFFER,Ke);try{const Xe=T.textures[Ae],Pe=Xe.format,nt=Xe.type;if(T.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ae),!Ft.textureFormatReadable(Pe)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(nt)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-K&&re>=0&&re<=T.height-Y&&J.readPixels(W,re,K,Y,B.convert(Pe),B.convert(nt),Ce)}finally{const Xe=j!==null?U.get(j).__webglFramebuffer:null;We.bindFramebuffer(J.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,W,re,K,Y,Ce,Ge,Ae=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ke=Ke[Ge]),Ke)if(W>=0&&W<=T.width-K&&re>=0&&re<=T.height-Y){We.bindFramebuffer(J.FRAMEBUFFER,Ke);const Xe=T.textures[Ae],Pe=Xe.format,nt=Xe.type;if(T.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ae),!Ft.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Je),J.bufferData(J.PIXEL_PACK_BUFFER,Ce.byteLength,J.STREAM_READ),J.readPixels(W,re,K,Y,B.convert(Pe),B.convert(nt),0);const St=j!==null?U.get(j).__webglFramebuffer:null;We.bindFramebuffer(J.FRAMEBUFFER,St);const kt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await t_(J,kt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Je),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ce),J.deleteBuffer(Je),J.deleteSync(kt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,re=0){const K=Math.pow(2,-re),Y=Math.floor(T.image.width*K),Ce=Math.floor(T.image.height*K),Ge=W!==null?W.x:0,Ae=W!==null?W.y:0;E.setTexture2D(T,0),J.copyTexSubImage2D(J.TEXTURE_2D,re,0,0,Ge,Ae,Y,Ce),We.unbindTexture()};const qe=J.createFramebuffer(),ct=J.createFramebuffer();this.copyTextureToTexture=function(T,W,re=null,K=null,Y=0,Ce=0){let Ge,Ae,Ke,Xe,Pe,nt,Je,St,kt;const Kt=T.isCompressedTexture?T.mipmaps[Ce]:T.image;if(re!==null)Ge=re.max.x-re.min.x,Ae=re.max.y-re.min.y,Ke=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,Pe=re.min.y,nt=re.isBox3?re.min.z:0;else{const _e=Math.pow(2,-Y);Ge=Math.floor(Kt.width*_e),Ae=Math.floor(Kt.height*_e),T.isDataArrayTexture?Ke=Kt.depth:T.isData3DTexture?Ke=Math.floor(Kt.depth*_e):Ke=1,Xe=0,Pe=0,nt=0}K!==null?(Je=K.x,St=K.y,kt=K.z):(Je=0,St=0,kt=0);const Gt=B.convert(W.format),Ct=B.convert(W.type);let Ze;W.isData3DTexture?(E.setTexture3D(W,0),Ze=J.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(E.setTexture2DArray(W,0),Ze=J.TEXTURE_2D_ARRAY):(E.setTexture2D(W,0),Ze=J.TEXTURE_2D),We.activeTexture(J.TEXTURE0),We.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,W.flipY),We.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),We.pixelStorei(J.UNPACK_ALIGNMENT,W.unpackAlignment);const tn=We.getParameter(J.UNPACK_ROW_LENGTH),Mt=We.getParameter(J.UNPACK_IMAGE_HEIGHT),b=We.getParameter(J.UNPACK_SKIP_PIXELS),O=We.getParameter(J.UNPACK_SKIP_ROWS),P=We.getParameter(J.UNPACK_SKIP_IMAGES);We.pixelStorei(J.UNPACK_ROW_LENGTH,Kt.width),We.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Kt.height),We.pixelStorei(J.UNPACK_SKIP_PIXELS,Xe),We.pixelStorei(J.UNPACK_SKIP_ROWS,Pe),We.pixelStorei(J.UNPACK_SKIP_IMAGES,nt);const ee=T.isDataArrayTexture||T.isData3DTexture,we=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const _e=U.get(T),Ve=U.get(W),lt=U.get(_e.__renderTarget),Qt=U.get(Ve.__renderTarget);We.bindFramebuffer(J.READ_FRAMEBUFFER,lt.__webglFramebuffer),We.bindFramebuffer(J.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let Pt=0;Pt<Ke;Pt++)ee&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,U.get(T).__webglTexture,Y,nt+Pt),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,U.get(W).__webglTexture,Ce,kt+Pt)),J.blitFramebuffer(Xe,Pe,Ge,Ae,Je,St,Ge,Ae,J.DEPTH_BUFFER_BIT,J.NEAREST);We.bindFramebuffer(J.READ_FRAMEBUFFER,null),We.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||U.has(T)){const _e=U.get(T),Ve=U.get(W);We.bindFramebuffer(J.READ_FRAMEBUFFER,qe),We.bindFramebuffer(J.DRAW_FRAMEBUFFER,ct);for(let lt=0;lt<Ke;lt++)ee?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,_e.__webglTexture,Y,nt+lt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,_e.__webglTexture,Y),we?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ve.__webglTexture,Ce,kt+lt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ve.__webglTexture,Ce),Y!==0?J.blitFramebuffer(Xe,Pe,Ge,Ae,Je,St,Ge,Ae,J.COLOR_BUFFER_BIT,J.NEAREST):we?J.copyTexSubImage3D(Ze,Ce,Je,St,kt+lt,Xe,Pe,Ge,Ae):J.copyTexSubImage2D(Ze,Ce,Je,St,Xe,Pe,Ge,Ae);We.bindFramebuffer(J.READ_FRAMEBUFFER,null),We.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else we?T.isDataTexture||T.isData3DTexture?J.texSubImage3D(Ze,Ce,Je,St,kt,Ge,Ae,Ke,Gt,Ct,Kt.data):W.isCompressedArrayTexture?J.compressedTexSubImage3D(Ze,Ce,Je,St,kt,Ge,Ae,Ke,Gt,Kt.data):J.texSubImage3D(Ze,Ce,Je,St,kt,Ge,Ae,Ke,Gt,Ct,Kt):T.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ce,Je,St,Ge,Ae,Gt,Ct,Kt.data):T.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ce,Je,St,Kt.width,Kt.height,Gt,Kt.data):J.texSubImage2D(J.TEXTURE_2D,Ce,Je,St,Ge,Ae,Gt,Ct,Kt);We.pixelStorei(J.UNPACK_ROW_LENGTH,tn),We.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Mt),We.pixelStorei(J.UNPACK_SKIP_PIXELS,b),We.pixelStorei(J.UNPACK_SKIP_ROWS,O),We.pixelStorei(J.UNPACK_SKIP_IMAGES,P),Ce===0&&W.generateMipmaps&&J.generateMipmap(Ze),We.unbindTexture()},this.initRenderTarget=function(T){U.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),We.unbindTexture()},this.resetState=function(){le=0,pe=0,j=null,We.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=Ie.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Ie.createElement("svg",{ref:h,...Kw,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Tg("lucide",o),...f},[...u.map(([m,v])=>Ie.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=(s,e)=>{const t=Ie.forwardRef(({className:r,...o},l)=>Ie.createElement(Zw,{ref:l,iconNode:e,className:Tg(`lucide-${qw(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=Xt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=Xt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=Xt("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=Xt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=Xt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=Xt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=Xt("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=Xt("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=Xt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=Xt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=Xt("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=Xt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=Xt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=Xt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=Xt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=Xt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=Xt("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=Xt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=Xt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=Xt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=Xt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=Xt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=Xt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=Xt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=Xt("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=Xt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=Xt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=Xt("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=Xt("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=Xt("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=Xt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=Xt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Xt("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=Xt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=Xt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=Xt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=Xt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=Xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=Xt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=Xt("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),I0=(s,e,t)=>{const r=new Image;r.onload=()=>{let o=r.width,l=r.height;(o>e||l>e)&&(o>l?(l=Math.round(l*e/o),o=e):(o=Math.round(o*e/l),l=e));const u=document.createElement("canvas");u.width=o,u.height=l,u.getContext("2d").drawImage(r,0,0,o,l),t(u.toDataURL("image/jpeg",.7))},r.onerror=()=>t(s),r.src=s},fE=({direction:s,className:e})=>{const r={none:R0,up:Ng,down:Ag,left:Cg,right:Rg,"up-left":eE,"up-right":tE,"down-left":Jw,"down-right":Qw}[s]||R0;return p.jsx(r,{className:e})},Kn=s=>{if(!s)return 0;const e=s.toUpperCase().trim();if(e.startsWith("B")){const r=parseInt(e.substring(1));return isNaN(r)?-99:-r}const t=parseInt(e);return isNaN(t)?0:t},ns=s=>(s==null?void 0:s.bounds)||{blX:0,blY:0,trX:100,trY:100},Li=s=>JSON.parse(JSON.stringify(s)),D0=(s,e)=>(s-e+540)%360-180,uc=s=>s==null||Number.isNaN(s)?null:(s%360+360)%360,L0=(s,e)=>s==null||e==null?null:uc(s-e),hE=s=>s&&typeof s.webkitCompassHeading=="number"?uc(s.webkitCompassHeading):s&&typeof s.alpha=="number"?uc(360-s.alpha):null,pE=(s,e)=>{if(!s||!e)return null;const t=s.physX??s.x,r=s.physY??s.y,o=e.physX??e.x,l=e.physY??e.y;return[t,r,o,l].some(u=>typeof u!="number")?null:uc(Math.atan2(o-t,r-l)*180/Math.PI)},U0=(s,e,t,r=1)=>{if(!s||s.length<2)return null;const o=new Xf(s),l=new $f(o,Math.max(8,s.length*12),e,12,!1),u=new ss({color:t,transparent:r<1,opacity:r});return new ri(l,u)},F0=(s,e)=>{if(!s||s.length===0)return null;let t=e;for(let l=0;l<s.length-1;l++){const u=s[l],f=s[l+1],h=Math.hypot(f.x-u.x,f.y-u.y);if(!(h<=.001)){if(t<=h){const m=t/h;return{x:u.x+(f.x-u.x)*m,y:u.y+(f.y-u.y)*m,angle:Math.atan2(f.y-u.y,f.x-u.x)}}t-=h}}const r=s[s.length-1],o=s[s.length-2]||r;return{x:r.x,y:r.y,angle:Math.atan2(r.y-o.y,r.x-o.x)}},O0=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return e+Math.hypot(t.x-o.x,t.y-o.y)},0),mE=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>e+t.distanceTo(s[r]),0),gE=s=>!s||s.length<2?0:s.slice(1).reduce((e,t,r)=>{const o=s[r];return!o||!t?e:o.fId!==t.fId?e+5:e+Math.hypot((t.physX||0)-(o.physX||0),(t.physY||0)-(o.physY||0))},0),k0=(s,e,t)=>s+(e-s)*t,xE=(s,e,t=.36)=>s?{...e,x:k0(s.x,e.x,t),y:k0(s.y,e.y,t)}:e,B0=(s=[],e=[],t=.36)=>e.map((r,o)=>xE(s[o],r,t)),vE=s=>{if(!s||s.length<2)return null;const e=new Xf(s),t=Math.max(mE(s),.001),r=Math.max(4,Math.min(16,Math.ceil(t/.34))),o=[],l=new Ps;for(let u=0;u<r;u++){const f=new Ps,h=new ri(new lc(.14,.34,24),new ss({color:16777215,transparent:!0,opacity:.22})),m=new ri(new lc(.09,.28,24),new ss({color:16777215,transparent:!0,opacity:.98}));f.add(h),f.add(m),f.userData.flowOffset=u/r,o.push(f),l.add(f)}return l.userData.flow={curve:e,arrows:o},l},_E=(s,e)=>{var r;const t=(r=s==null?void 0:s.userData)==null?void 0:r.flow;t&&t.arrows.forEach(o=>{const l=(o.userData.flowOffset+e*28e-5)%1,u=t.curve.getPointAt(l),f=t.curve.getTangentAt(l).normalize();o.position.copy(u),o.position.y+=.11,o.quaternion.setFromUnitVectors(new ie(0,1,0),f),o.children.forEach((h,m)=>{h.material.opacity=(m===0?.16:.58)+(m===0?.18:.4)*Math.sin(l*Math.PI)})})},_a=(s="新導引專案")=>({projectName:s,lerpFactor:15}),xo=()=>[{id:`b_${Date.now()}`,name:"預設場域",floors:[{id:`f_${Date.now()}`,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}],yE=(s="新導引專案",e="")=>({id:`project_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:s,description:e,updatedAt:new Date().toISOString(),systemConfig:_a(s),buildings:xo()}),Yl=s=>{var e,t,r,o,l,u;return{id:((e=s==null?void 0:s.project)==null?void 0:e.id)||"published",name:((t=s==null?void 0:s.project)==null?void 0:t.name)||((r=s==null?void 0:s.systemConfig)==null?void 0:r.projectName)||"AR導覽",description:((o=s==null?void 0:s.project)==null?void 0:o.description)||"",updatedAt:((l=s==null?void 0:s.project)==null?void 0:l.updatedAt)||new Date().toISOString(),systemConfig:{..._a(((u=s==null?void 0:s.project)==null?void 0:u.name)||"AR導覽"),...(s==null?void 0:s.systemConfig)||{}},buildings:Array.isArray(s==null?void 0:s.buildings)?s.buildings:[]}},Fd=(s,e=null)=>Array.isArray(s==null?void 0:s.projects)?s.projects.find(t=>{var r;return((r=t==null?void 0:t.project)==null?void 0:r.id)===e})||s.projects.find(t=>{var r;return((r=t==null?void 0:t.project)==null?void 0:r.id)===s.activeProjectId})||s.projects[0]||{}:s||{};function SE({embedded:s=!1,initialTab:e="map",publicOnly:t=!1}){var Ct,Ze,tn,Mt;const[r,o]=Ie.useState(e),[l,u]=Ie.useState(!1),[f,h]=Ie.useState({isOpen:!1,title:"",placeholder:"",onSubmit:null,defaultValue:""}),[m,v]=Ie.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[y,x]=Ie.useState({isOpen:!1,message:""}),[M,C]=Ie.useState({isOpen:!1,isLoading:!1,projects:[],error:""}),[L,S]=Ie.useState(!1),[_,D]=Ie.useState({isOpen:!1,blX:0,blY:0,trX:100,trY:100}),R=Ie.useRef(!1),[N,H]=Ie.useState(()=>{if(t)return[Yl({})];try{const P=localStorage.getItem("arManager_projects");if(P){const ee=JSON.parse(P);if(Array.isArray(ee)&&ee.length>0)return ee}}catch(P){console.error("Project load error:",P)}let b=_a("預設導引專案"),O=xo();try{const P=localStorage.getItem("arManager_config");P&&(b={...b,...JSON.parse(P)});const ee=localStorage.getItem("arManager_buildings");ee&&(O=JSON.parse(ee))}catch(P){console.error("Legacy AR data migration error:",P)}return[{id:`project_${Date.now()}`,name:b.projectName||"預設導引專案",description:"由既有 AR 導引資料自動建立",updatedAt:new Date().toISOString(),systemConfig:b,buildings:O}]}),[F,z]=Ie.useState((Ct=N[0])==null?void 0:Ct.id),w=N.find(b=>b.id===F)||N[0],[I,q]=Ie.useState(()=>Li((w==null?void 0:w.systemConfig)||_a())),[k,Z]=Ie.useState(()=>Li((w==null?void 0:w.buildings)||xo())),[le,pe]=Ie.useState((Ze=k[0])==null?void 0:Ze.id),[j,oe]=Ie.useState((Mt=(tn=k[0])==null?void 0:tn.floors[0])==null?void 0:Mt.id),[te,se]=Ie.useState(""),[fe,ce]=Ie.useState(null),[G,ne]=Ie.useState(null),[$e,rt]=Ie.useState(null),[Ue,de]=Ie.useState(!1),[be,ye]=Ie.useState(!1),[ke,ot]=Ie.useState(!1),[et,wt]=Ie.useState(null),[yt,Et]=Ie.useState(null),[jt,bt]=Ie.useState(!1),[Bt,Rt]=Ie.useState({x:0,y:0}),[en,J]=Ie.useState({x:0,y:0}),[Lt,_t]=Ie.useState(!1),[Ft,We]=Ie.useState(!1),[Ot,U]=Ie.useState([]),[E,ae]=Ie.useState(!1),[Ee,Ne]=Ie.useState([]),[Be,je]=Ie.useState([]),xe=Ie.useRef(null),Se=Ie.useRef(null),tt=Ie.useRef(null),st=Ie.useRef(null),[Te,Re]=Ie.useState({x:0,y:0,scale:1}),dt=(b,O=null)=>{var we,_e,Ve;const P=Fd(b,O);if(!Array.isArray(P==null?void 0:P.buildings)||P.buildings.length===0)throw new Error("雲端目前沒有可載入的 AR 平面圖資料。");const ee=Yl(P);return H([ee]),z(ee.id),q(Li(ee.systemConfig)),Z(Li(ee.buildings)),pe((we=ee.buildings[0])==null?void 0:we.id),oe((Ve=(_e=ee.buildings[0])==null?void 0:_e.floors[0])==null?void 0:Ve.id),se(""),ce(null),ne(null),wt(null),Re({x:0,y:0,scale:1}),localStorage.setItem("arManager_lastCloudSyncAt",ee.updatedAt||new Date().toISOString()),ee};Ie.useEffect(()=>{const b=O=>{var ee;const P=(ee=O==null?void 0:O.detail)==null?void 0:ee.tab;["map","list","settings","export"].includes(P)&&K(P)};return window.addEventListener("ar-manager:set-tab",b),()=>window.removeEventListener("ar-manager:set-tab",b)},[]),Ie.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_projects",JSON.stringify(N))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"專案資料太大，請先匯出 JSON 或移除不需要的圖片資料。"})}},[N,t]),Ie.useEffect(()=>{if(!t)return;let b=!1;return(async()=>{const P=await fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"});if(P.ok)return P.json();const ee=await fetch(`/ar-data.json?ts=${Date.now()}`,{cache:"no-store"});if(!ee.ok)throw new Error(`Unable to load AR data: ${ee.status}`);return ee.json()})().then(P=>{var we,_e,Ve;if(b)return;const ee=Yl(Fd(P));H([ee]),z(ee.id),q(Li(ee.systemConfig)),Z(Li(ee.buildings)),pe((we=ee.buildings[0])==null?void 0:we.id),oe((Ve=(_e=ee.buildings[0])==null?void 0:_e.floors[0])==null?void 0:Ve.id)}).catch(P=>{console.warn("Published AR data unavailable",P),b||(H([Yl({})]),q(_a("AR導覽")),Z([]))}),()=>{b=!0}},[t]),Ie.useEffect(()=>{if(t||localStorage.getItem("arManager_projects"))return;let b=!1;return fetch(`/api/ar-content?ts=${Date.now()}`,{cache:"no-store"}).then(O=>{if(!O.ok)throw new Error(`Unable to load AR data: ${O.status}`);return O.json()}).then(O=>{const P=Fd(O);b||!Array.isArray(P==null?void 0:P.buildings)||P.buildings.length===0||dt(P)}).catch(O=>console.warn("Published AR admin seed unavailable",O)),()=>{b=!0}},[t]),Ie.useEffect(()=>{var O,P,ee;if(t||!w)return;R.current=!0;const b=Li(w.buildings||xo());q(Li(w.systemConfig||_a(w.name))),Z(b),pe((O=b[0])==null?void 0:O.id),oe((ee=(P=b[0])==null?void 0:P.floors[0])==null?void 0:ee.id),ce(null),ne(null),se(""),Re({x:0,y:0,scale:1})},[F,t]),Ie.useEffect(()=>{if(!t&&F){if(R.current){R.current=!1;return}H(b=>b.map(O=>O.id===F?{...O,name:I.projectName||O.name,systemConfig:Li(I),buildings:Li(k),updatedAt:new Date().toISOString()}:O))}},[F,k,I,t]),Ie.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_buildings",JSON.stringify(k))}catch(b){b.name==="QuotaExceededError"&&x({isOpen:!0,message:"⚠️ 瀏覽器本地暫存空間已滿！"})}},[k,t]),Ie.useEffect(()=>{if(!t)try{localStorage.setItem("arManager_config",JSON.stringify(I))}catch(b){console.error("Config save error:",b)}},[I,t]),Ie.useEffect(()=>{var O;const b=k.find(P=>P.id===le);b?b.floors.find(P=>P.id===j)||b.floors.length>0&&oe(b.floors[0].id):k.length>0&&(pe(k[0].id),oe((O=k[0].floors[0])==null?void 0:O.id))},[k,le,j]),Ie.useEffect(()=>{te===j&&se("")},[j,te]),Ie.useEffect(()=>{de(!1)},[fe,G]),Ie.useEffect(()=>{sessionStorage.getItem("ar_permissions_asked")||S(!0)},[]);const Nt=async()=>{try{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})).getTracks().forEach(O=>O.stop())}catch{}try{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()}catch{}sessionStorage.setItem("ar_permissions_asked","true"),S(!1)},ft=k.find(b=>b.id===le)||k[0],B=ft==null?void 0:ft.floors.find(b=>b.id===j),ze=(B==null?void 0:B.markers)||[],ge=(B==null?void 0:B.waypoints)||[],it=(B==null?void 0:B.edges)||[],Le=ns(B),ve=(b,O,P=!0)=>{Z(ee=>{let we=null,_e=null,Ve=null;if(ee.forEach(Vt=>Vt.floors.forEach(on=>{const dn=P?on.markers:on.waypoints,Ln=dn==null?void 0:dn.find(hn=>hn.id===b);Ln&&(we=Ln,_e=Vt.id,Ve=on)})),!we)return ee;const lt=O.shaftId!==void 0?O.shaftId:we.shaftId,Pt=(O.isVerticalShaft!==void 0?O.isVerticalShaft:we.isVerticalShaft)&&lt,an=ns(Ve);return ee.map(Vt=>Vt.id!==_e&&!Pt?Vt:{...Vt,floors:Vt.floors.map(on=>{let dn=P?[...on.markers||[]]:[...on.waypoints||[]];const Ln=hn=>{const Gn={...hn,...O};if((O.x!==void 0||O.y!==void 0)&&on.id!==Ve.id){const mt=ns(on);if(O.x!==void 0){const $t=an.blX+O.x*(an.trX-an.blX);Gn.x=mt.trX!==mt.blX?($t-mt.blX)/(mt.trX-mt.blX):.5}if(O.y!==void 0){const $t=an.trY-O.y*(an.trY-an.blY);Gn.y=mt.trY!==mt.blY?(mt.trY-$t)/(mt.trY-mt.blY):.5}}return Gn};return Pt?dn=dn.map(hn=>hn.shaftId===lt||hn.id===b?Ln(hn):hn):dn=dn.map(hn=>hn.id===b?Ln(hn):hn),P?{...on,markers:dn}:{...on,waypoints:dn}})})})},Qe=(b,O,P)=>ve(b,{[O]:P},!0),vt=(b,O,P)=>ve(b,{[O]:P},!1),Ht=(b,O,P=!0)=>{if(O){const ee=P?"shaft_m_":"shaft_wp_",_e={isVerticalShaft:!0,shaftId:b.shaftId||`${ee}${Date.now()}`,linkedFloorIds:[j]};P||(_e.sourceFloorId=j),ve(b.id,_e,P)}else{const ee=b.shaftId;Z(we=>we.map(_e=>_e.id!==le?_e:{..._e,floors:_e.floors.map(Ve=>{const lt=Qt=>(Qt||[]).filter(Pt=>!(Ve.id!==j&&Pt.shaftId===ee)).map(Pt=>Pt.id===b.id?{...Pt,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:null}:Pt);return P?{...Ve,markers:lt(Ve.markers)}:{...Ve,waypoints:lt(Ve.waypoints)}})}))}},Yt=(b,O,P,ee=!0)=>{const we=b.shaftId,_e=b.linkedFloorIds||[j],Ve=P?[..._e,O]:_e.filter(lt=>lt!==O);Z(lt=>lt.map(Qt=>Qt.id!==le?Qt:{...Qt,floors:Qt.floors.map(Pt=>{let an=ee?[...Pt.markers||[]]:[...Pt.waypoints||[]];if(P&&Pt.id===O){const Vt=ns(Pt),on=ns(B),dn=on.blX+b.x*(on.trX-on.blX),Ln=on.trY-b.y*(on.trY-on.blY),hn=Vt.trX!==Vt.blX?(dn-Vt.blX)/(Vt.trX-Vt.blX):.5,Gn=Vt.trY!==Vt.blY?(Vt.trY-Ln)/(Vt.trY-Vt.blY):.5,mt=ee?"marker_":"wp_";an.push({...b,id:`${mt}${Date.now()}_${Math.random().toString(36).substr(2,5)}_${Pt.id}`,x:hn,y:Gn,linkedFloorIds:Ve})}else!P&&Pt.id===O?an=an.filter(Vt=>Vt.shaftId!==we):an=an.map(Vt=>Vt.shaftId===we?{...Vt,linkedFloorIds:Ve}:Vt);return ee?{...Pt,markers:an}:{...Pt,waypoints:an}})}))},_n=b=>{let O=null,P=new Set([b]);k.forEach(ee=>ee.floors.forEach(we=>{var _e;we.markers.forEach(Ve=>{Ve.id===b&&Ve.isVerticalShaft&&(O=Ve.shaftId)}),(_e=we.waypoints)==null||_e.forEach(Ve=>{Ve.id===b&&Ve.isVerticalShaft&&(O=Ve.shaftId)})})),O&&k.forEach(ee=>ee.floors.forEach(we=>{var _e;we.markers.forEach(Ve=>{Ve.shaftId===O&&P.add(Ve.id)}),(_e=we.waypoints)==null||_e.forEach(Ve=>{Ve.shaftId===O&&P.add(Ve.id)})})),Z(ee=>ee.map(we=>({...we,floors:we.floors.map(_e=>({..._e,markers:(_e.markers||[]).filter(Ve=>!P.has(Ve.id)),waypoints:(_e.waypoints||[]).filter(Ve=>!P.has(Ve.id)),edges:(_e.edges||[]).filter(Ve=>!P.has(Ve.start)&&!P.has(Ve.end))}))}))),P.has(fe)&&ce(null),P.has(G)&&ne(null),P.has(et)&&(wt(null),Et(null)),de(!1)},Bn=()=>{h({isOpen:!0,title:"新增建築物",placeholder:"請輸入新建築物名稱 (例如: 行政大樓)",defaultValue:"新建築物",onSubmit:b=>{if(!b)return;const O=`b_${Date.now()}`,P=`f_${Date.now()}`;Z(ee=>[...ee,{id:O,name:b,floors:[{id:P,name:"1F",imageUrl:null,markers:[],waypoints:[],edges:[],bounds:{blX:0,blY:0,trX:100,trY:100}}]}]),pe(O),oe(P)}})},mi=()=>{ft&&h({isOpen:!0,title:`新增 ${ft.name} 的樓層`,placeholder:"請輸入新樓層名稱 (例如: 2F)",defaultValue:"新樓層",onSubmit:b=>{if(!b)return;const O=`f_${Date.now()}`,P=B?{...ns(B)}:{blX:0,blY:0,trX:100,trY:100};Z(ee=>ee.map(we=>we.id===le?{...we,floors:[...we.floors,{id:O,name:b,imageUrl:null,markers:[],waypoints:[],edges:[],bounds:P}]}:we)),oe(O)}})},Ji=b=>{const O=b.target.files[0],P=b.target;if(O&&le&&j){const ee=le,we=j,_e=new FileReader;_e.onload=Ve=>{I0(Ve.target.result,1600,lt=>{Z(Qt=>Qt.map(Pt=>Pt.id===ee?{...Pt,floors:Pt.floors.map(an=>an.id===we?{...an,imageUrl:lt}:an)}:Pt)),_t(!1)})},_e.readAsDataURL(O)}P.value=""},ki=(b,O)=>{const P=`wp_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,ee={id:P,x:b,y:O,isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],sourceFloorId:j};Z(we=>we.map(_e=>_e.id===le?{..._e,floors:_e.floors.map(Ve=>{if(Ve.id!==j)return Ve;const lt=et?[...Ve.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:et,end:P}]:Ve.edges||[];return{...Ve,waypoints:[...Ve.waypoints||[],ee],edges:lt}})}:_e)),wt(P)},Dn=b=>{if(et===b){wt(null),Et(null);return}et&&et!==b&&(it.some(P=>P.start===et&&P.end===b||P.end===et&&P.start===b)||Z(P=>P.map(ee=>ee.id===le?{...ee,floors:ee.floors.map(we=>we.id===j?{...we,edges:[...we.edges||[],{id:`edge_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,start:et,end:b}]}:we)}:ee))),wt(b)},Jn=(b,O)=>{for(let ee of ze)if(Math.hypot(ee.x-b,ee.y-O)<.03)return ee.id;for(let ee of ge)if(Math.hypot(ee.x-b,ee.y-O)<.03)return ee.id;return null};Ie.useEffect(()=>{const b=O=>{O.key==="Escape"&&be&&(wt(null),Et(null))};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[be]);const Bi=(b,O)=>{const P={},ee=[],we={};k.forEach(mt=>{mt.floors.forEach($t=>{var Ca,ls;const Cn=$t.bounds||{blX:0,blY:0,trX:100,trY:100},os=(cn,vc)=>({physX:Cn.blX+cn*(Cn.trX-Cn.blX),physY:Cn.trY-vc*(Cn.trY-Cn.blY)});$t.markers.forEach(cn=>{P[cn.id]={...cn,...os(cn.x,cn.y),fId:$t.id,fName:$t.name},cn.isVerticalShaft&&cn.shaftId&&(we[cn.shaftId]||(we[cn.shaftId]=[]),we[cn.shaftId].push(cn.id))}),(Ca=$t.waypoints)==null||Ca.forEach(cn=>{P[cn.id]={...cn,...os(cn.x,cn.y),fId:$t.id,fName:$t.name},cn.isVerticalShaft&&cn.shaftId&&(we[cn.shaftId]||(we[cn.shaftId]=[]),we[cn.shaftId].push(cn.id))}),(ls=$t.edges)==null||ls.forEach(cn=>ee.push(cn))})});const _e={};Object.keys(P).forEach(mt=>{_e[mt]={}}),ee.forEach(mt=>{if(P[mt.start]&&P[mt.end]){const $t=Math.hypot(P[mt.start].physX-P[mt.end].physX,P[mt.start].physY-P[mt.end].physY);_e[mt.start][mt.end]=$t,_e[mt.end][mt.start]=$t}}),Object.values(we).forEach(mt=>{for(let $t=0;$t<mt.length;$t++)for(let Cn=$t+1;Cn<mt.length;Cn++)_e[mt[$t]][mt[Cn]]=5,_e[mt[Cn]][mt[$t]]=5});const Ve=mt=>Object.keys(_e[mt]).length>0;let lt=null,Qt=1/0,Pt=null,an=1/0;if(Object.values(P).forEach(mt=>{if(Ve(mt.id)){if(mt.fId===b.fId){const $t=Math.hypot(mt.x-b.x,mt.y-b.y);$t<Qt&&(Qt=$t,lt=mt.id)}if(mt.fId===O.fId){const $t=Math.hypot(mt.x-O.x,mt.y-O.y);$t<an&&(an=$t,Pt=mt.id)}}}),!lt||!Pt){x({isOpen:!0,message:"無法找到鄰近的路網節點。請確認起點與終點的樓層皆有繪製路網路線！"}),Ne([]),je([]);return}const Vt={},on={},dn=new Set(Object.keys(P));for(Object.keys(P).forEach(mt=>{Vt[mt]=1/0,on[mt]=null}),Vt[lt]=0;dn.size>0;){let mt=null;if(dn.forEach($t=>{(mt===null||Vt[$t]<Vt[mt])&&(mt=$t)}),Vt[mt]===1/0||mt===Pt)break;dn.delete(mt),Object.entries(_e[mt]).forEach(([$t,Cn])=>{if(dn.has($t)){const os=Vt[mt]+Cn;os<Vt[$t]&&(Vt[$t]=os,on[$t]=mt)}})}const Ln=[];let hn=Pt;for(;hn;)Ln.unshift(hn),hn=on[hn];if(Ln.length===0||Ln[0]!==lt){x({isOpen:!0,message:"無法計算跨樓層路徑，請確認上下樓的電梯/樓梯節點有正確連接到路網！"}),Ne([]),je([]);return}const Gn=[{x:b.x,y:b.y,fId:b.fId,fName:b.fName,isVirtual:!0},...Ln.map(mt=>P[mt]),{x:O.x,y:O.y,fId:O.fId,fName:O.fName,isVirtual:!0}];je(Gn)};Ie.useEffect(()=>{const b=xe.current;if(!b||r!=="map")return;const O=P=>{P.preventDefault();const ee=b.getBoundingClientRect(),we=P.clientX-ee.left,_e=P.clientY-ee.top,Ve=P.deltaY<0?1.1:.9;Re(lt=>{const Qt=Math.max(.1,Math.min(10,lt.scale*Ve)),Pt=Qt/lt.scale;return{x:we-(we-lt.x)*Pt,y:_e-(_e-lt.y)*Pt,scale:Qt}})};return b.addEventListener("wheel",O,{passive:!1}),()=>b.removeEventListener("wheel",O)},[r]);const si=b=>{b.button!==void 0&&b.button!==0||b.target.closest(".marker-pin")||b.target.closest(".waypoint-pin")||(bt(!0),Rt({x:b.clientX-Te.x,y:b.clientY-Te.y}),J({x:b.clientX,y:b.clientY}),b.target.setPointerCapture(b.pointerId))},Sn=b=>{if(jt)Re(O=>({...O,x:b.clientX-Bt.x,y:b.clientY-Bt.y}));else if(be&&et&&Se.current){const O=Se.current.getBoundingClientRect();let P=Math.max(0,Math.min(1,(b.clientX-O.left)/O.width)),ee=Math.max(0,Math.min(1,(b.clientY-O.top)/O.height));Et({x:P,y:ee})}else if($e&&Se.current){const O=Se.current.getBoundingClientRect();let P=Math.max(0,Math.min(1,(b.clientX-O.left)/O.width)),ee=Math.max(0,Math.min(1,(b.clientY-O.top)/O.height));$e.startsWith("marker_")?(Qe($e,"x",P),Qe($e,"y",ee)):$e.startsWith("wp_")&&(vt($e,"x",P),vt($e,"y",ee))}},Qn=b=>{if(jt&&(bt(!1),b.target.releasePointerCapture(b.pointerId),Math.hypot(b.clientX-en.x,b.clientY-en.y)<5)){if(!(B!=null&&B.imageUrl)||!Se.current)return;const P=Se.current.getBoundingClientRect();let ee=Math.max(0,Math.min(1,(b.clientX-P.left)/P.width)),we=Math.max(0,Math.min(1,(b.clientY-P.top)/P.height));if(E){const _e={x:ee,y:we,fId:j,fName:B==null?void 0:B.name},Ve=Ee.length>=2?[_e]:[...Ee,_e];Ne(Ve),Ve.length===1&&je([]),Ve.length===2&&Bi(Ve[0],Ve[1])}else if(be){const _e=Jn(ee,we);_e?Dn(_e):ki(ee,we)}else if(Lt){const _e=k.reduce((lt,Qt)=>lt+Qt.floors.reduce((Pt,an)=>Pt+an.markers.length,0),0),Ve={id:`marker_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,code:`N${_e+1}`,title:"新增辨識點",description:"",arrowDirection:"none",isVerticalShaft:!1,shaftId:null,linkedFloorIds:[],x:ee,y:we,imageUrl:null,enabled:!0,recognitionStatus:"untested"};Z(lt=>lt.map(Qt=>Qt.id===le?{...Qt,floors:Qt.floors.map(Pt=>Pt.id===j?{...Pt,markers:[...Pt.markers,Ve]}:Pt)}:Qt)),ce(Ve.id),ne(null),_t(!1)}else Ft?U(_e=>_e.length>=2?[{x:ee,y:we}]:[..._e,{x:ee,y:we}]):(ce(null),ne(null))}},zi=b=>{const O=b.target.files[0],P=b.target;if(O&&fe){const ee=fe,we=new FileReader;we.onload=_e=>{I0(_e.target.result,800,Ve=>{Qe(ee,"imageUrl",Ve),Qe(ee,"recognitionStatus","untested")})},we.readAsDataURL(O)}P.value=""},bi=(b,O,P)=>{pe(b),oe(O),ce(P),ne(null),o("map")},gi=b=>(b||[]).reduce((O,P)=>((P.floors||[]).forEach(ee=>{ee.imageUrl&&(O.floorPlans+=1),O.markers+=(ee.markers||[]).length,O.waypoints+=(ee.waypoints||[]).length,O.edges+=(ee.edges||[]).length}),O),{floorPlans:0,markers:0,waypoints:0,edges:0}),ai=b=>{const O=gi(b);return O.floorPlans>0||O.markers>0||O.waypoints>0||O.edges>0},hr=async()=>{if(!ai(k)){x({isOpen:!0,message:"目前專案還是空的，尚未有平面圖、AR 點位或路網資料。為避免覆蓋雲端既有專案，請先載入雲端資料或新增內容後再同步。"});return}const b={version:"7.0",project:{id:F,name:I.projectName||(w==null?void 0:w.name)||"AR導覽",description:(w==null?void 0:w.description)||"",updatedAt:new Date().toISOString()},systemConfig:Li(I),buildings:Li(k)};H(O=>O.map(P=>P.id===F?{...P,name:b.project.name,systemConfig:b.systemConfig,buildings:b.buildings,updatedAt:b.project.updatedAt}:P));try{const O=await fetch("/api/save-ar-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}),P=await O.json().catch(()=>({}));if(!O.ok)throw new Error(P.error||`Save failed: ${O.status}`);localStorage.setItem("arManager_lastCloudSyncAt",b.project.updatedAt),x({isOpen:!0,message:`「${b.project.name}」已儲存到 Web 端。民眾端會透過 /api/ar-content 讀取最新平面圖、AR 點位與路網資料。`})}catch(O){x({isOpen:!0,message:`已儲存在後台暫存，但發布到網站失敗：${O.message}`})}},Ti=async()=>{if(!ai(k)){x({isOpen:!0,message:"目前專案還是空的，尚未有平面圖、AR 點位或路網資料。為避免覆蓋雲端既有專案，請先載入雲端資料或新增內容後再同步。"});return}const b=gi(k);v({isOpen:!0,title:"確認同步到雲端",message:`即將把「${I.projectName||(w==null?void 0:w.name)||"AR 專案"}」同步到雲端，並覆蓋目前網站使用的 AR 資料。內容包含 ${b.floorPlans} 張平面圖、${b.markers} 個 AR 點位、${b.waypoints} 個路網節點、${b.edges} 條路線連線。確定要同步嗎？`,onConfirm:hr})},X=async()=>{C({isOpen:!0,isLoading:!0,projects:[],error:""});try{const b=await fetch(`/api/ar-content?list=1&ts=${Date.now()}`,{cache:"no-store"});if(!b.ok)throw new Error(`Load failed: ${b.status}`);const O=await b.json(),P=Array.isArray(O==null?void 0:O.projects)?O.projects:[];if(P.length===0)throw new Error("雲端目前沒有可載入的 AR 專案。");C({isOpen:!0,isLoading:!1,projects:P,error:""})}catch(b){C({isOpen:!0,isLoading:!1,projects:[],error:`無法取得雲端專案列表：${b.message}`})}},De=async b=>{C(O=>({...O,isLoading:!0,error:""}));try{const O=await fetch(`/api/ar-content?projectId=${encodeURIComponent(b)}&ts=${Date.now()}`,{cache:"no-store"});if(!O.ok)throw new Error(`Load failed: ${O.status}`);const P=await O.json(),ee=dt(P,b);C({isOpen:!1,isLoading:!1,projects:[],error:""}),x({isOpen:!0,message:`已從雲端載入「${ee.name}」。桌機與手機現在會使用這個專案的平面圖、AR 點位與路網資料。`})}catch(O){C(P=>({...P,isLoading:!1,error:`無法載入指定專案：${O.message}`}))}},Me=()=>{h({isOpen:!0,title:"新增 AR 導引專案",placeholder:"請輸入場域或導引服務名稱",defaultValue:`導引專案 ${N.length+1}`,onSubmit:b=>{if(!b)return;const O=yE(b);H(P=>[...P,O]),z(O.id),o("map")}})},qe=()=>{h({isOpen:!0,title:"編輯專案名稱",placeholder:"請輸入專案名稱",defaultValue:(w==null?void 0:w.name)||I.projectName||"",onSubmit:b=>{b&&(q(O=>({...O,projectName:b})),H(O=>O.map(P=>P.id===F?{...P,name:b,systemConfig:{...P.systemConfig,projectName:b},updatedAt:new Date().toISOString()}:P)))}})},ct=()=>{if(N.length<=1){x({isOpen:!0,message:"至少需要保留一個 AR 導引專案。"});return}v({isOpen:!0,title:"刪除 AR 導引專案",message:`確定要刪除「${(w==null?void 0:w.name)||I.projectName}」嗎？此專案內的平面圖、路徑與 AR 點位都會一併移除。`,onConfirm:()=>{H(b=>{var P;const O=b.filter(ee=>ee.id!==F);return z((P=O[0])==null?void 0:P.id),O})}})},T=()=>{Z(xo()),ce(null),ne(null),Re({x:0,y:0,scale:1}),_t(!1),ye(!1),ot(!1),wt(null),Et(null),ae(!1),Ne([]),je([]),x({isOpen:!0,message:"目前專案的 AR 資料已清除。"})},W=()=>{const b=(I.projectName||(w==null?void 0:w.name)||"ar_project").replace(/[^\w\u4e00-\u9fff-]+/g,"_"),O="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"7.0",project:{id:F,name:I.projectName||(w==null?void 0:w.name),description:(w==null?void 0:w.description)||"",updatedAt:w==null?void 0:w.updatedAt},systemConfig:I,buildings:k},null,2)),P=document.createElement("a");P.setAttribute("href",O),P.setAttribute("download",`${b}_ar_config_v7.json`),document.body.appendChild(P),P.click(),P.remove()},re=()=>{if(!(B!=null&&B.imageUrl)||!xe.current||!Se.current){Re({x:0,y:0,scale:1});return}const b=xe.current,O=Se.current.querySelector("img");if(!O||O.naturalWidth===0)return;const{width:P,height:ee}=b.getBoundingClientRect(),we=Math.min(P/O.naturalWidth,ee/O.naturalHeight,1)*.9;Re({x:(P-O.naturalWidth*we)/2,y:(ee-O.naturalHeight*we)/2,scale:we})},K=b=>{o(b),u(!1),_t(!1),We(!1),ye(!1),ot(!1),wt(null),Et(null),ae(!1),Ne([]),je([])};let Y=null,Ce=null;k.forEach(b=>b.floors.forEach(O=>{var P;O.markers.forEach(ee=>{ee.id===fe&&(Y=ee,b.name,O.name)}),(P=O.waypoints)==null||P.forEach(ee=>{ee.id===G&&(Ce=ee,b.name,O.name)})}));let Ge=0,Ae=0;const Ke=document.getElementById("current-map-image"),Xe=Le.trX-Le.blX,Pe=Le.trY-Le.blY;if(Ke&&Xe>0){const b=Ke.offsetWidth*Te.scale;if(b>0){const O=Xe/b,P=100*O;Ge=[.5,1,2,5,10,20,50,100,200,500,1e3,2e3,5e3].slice().reverse().find(we=>we<=P)||.5,Ae=Ge/O}}const nt=k.reduce((b,O)=>b+O.floors.reduce((P,ee)=>P+(ee.markers||[]).length,0),0),Je=k.reduce((b,O)=>b+O.floors.length,0),St=()=>p.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-5 shadow-lg mb-5",children:[p.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center justify-between gap-4",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1",children:"AR 導引專案"}),p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-3",children:[p.jsx("select",{value:F,onChange:b=>z(b.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 min-w-[220px]",children:N.map(b=>p.jsx("option",{value:b.id,className:"bg-slate-950",children:b.name},b.id))}),p.jsxs("div",{className:"text-xs text-slate-500",children:["共 ",N.length," 個專案 · ",k.length," 棟建築 · ",Je," 個樓層 · ",nt," 個 AR 點位"]})]})]}),p.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full xl:w-auto",children:[p.jsxs("button",{onClick:Me,className:"inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors",children:[p.jsx(Xl,{className:"w-4 h-4"}),"新增專案"]}),p.jsxs("button",{onClick:qe,className:"inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg text-xs transition-colors",children:[p.jsx(Ld,{className:"w-4 h-4"}),"編輯"]}),p.jsxs("button",{onClick:Ti,className:"inline-flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[p.jsx(tc,{className:"w-4 h-4"}),"儲存"]}),p.jsxs("button",{onClick:Ti,className:"inline-flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-2 rounded-lg text-xs transition-colors",title:"把目前這台裝置的 AR 資料同步到雲端，讓其他裝置可以載入",children:[p.jsx(P0,{className:"w-4 h-4"}),"同步雲端"]}),p.jsxs("button",{onClick:X,className:"inline-flex items-center justify-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-2 rounded-lg text-xs transition-colors",title:"從雲端載入已上架的 AR 資料，會覆蓋目前後台顯示的本機暫存",children:[p.jsx(fo,{className:"w-4 h-4"}),"從雲端載入"]}),p.jsxs("button",{onClick:ct,className:"inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2 rounded-lg text-xs transition-colors",children:[p.jsx(Ud,{className:"w-4 h-4"}),"刪除"]})]})]}),p.jsx("div",{className:"mt-3 text-xs text-slate-500",children:"每個專案都會獨立保存平面圖、路徑節點、AR 導引點與系統設定。切換專案後，下方維護區會載入該場域自己的資料。"})]}),kt=()=>{const b=new Set,O=k.flatMap(P=>P.floors.flatMap(ee=>(ee.markers||[]).reduce((we,_e)=>{if(_e.isVerticalShaft&&_e.shaftId){if(b.has(_e.shaftId))return we;b.add(_e.shaftId)}return we.push({..._e,bId:P.id,fId:ee.id,buildingName:P.name,floorName:ee.name}),we},[])));return p.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[St(),p.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:p.jsx(go,{className:"w-6 h-6"})}),p.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[p.jsx(mo,{className:"mr-2 md:mr-3 text-cyan-400"})," 點位總覽"]})]}),p.jsxs("span",{className:"bg-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-500/30",children:["共 ",O.length," 組節點"]})]}),O.length===0?p.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 text-center text-slate-500 flex flex-col items-center",children:[p.jsx(mo,{className:"w-12 h-12 md:w-16 md:h-16 mb-4 opacity-30"}),p.jsx("p",{className:"text-base md:text-lg mb-2",children:"目前沒有任何點位資料"}),p.jsx("button",{onClick:()=>K("map"),className:"mt-6 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 rounded-lg transition-all text-sm",children:"前往平面圖"})]}):p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"md:hidden space-y-3",children:O.map(P=>p.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg",children:[p.jsxs("div",{className:"flex items-start gap-3",children:[P.imageUrl?p.jsx("img",{src:P.imageUrl,alt:P.code,className:"w-12 h-12 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"}):p.jsx("div",{className:"w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 shrink-0",children:p.jsx(A0,{className:"w-5 h-5"})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsxs("div",{className:"flex items-center justify-between gap-2",children:[p.jsx("div",{className:"font-mono text-cyan-400 font-bold text-sm",children:P.code}),p.jsx(Nf,{status:P.recognitionStatus})]}),p.jsx("div",{className:"font-bold text-slate-100 mt-1 truncate",children:P.title||"未命名點位"}),p.jsxs("div",{className:"text-xs text-slate-500 mt-1 truncate",children:[P.buildingName," · ",P.floorName]})]})]}),p.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[p.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-medium ${P.enabled?"bg-green-500/10 text-green-400 border border-green-500/20":"bg-slate-800 text-slate-400 border border-slate-700"}`,children:P.enabled?"已啟用":"未啟用"}),p.jsxs("button",{onClick:()=>bi(P.bId,P.fId,P.id),className:"inline-flex items-center gap-2 px-3 py-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg transition-colors text-sm",children:[p.jsx(Ld,{className:"w-4 h-4"}),"編輯"]})]})]},P.id))}),p.jsx("div",{className:"hidden md:block bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden",children:p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"w-full text-left text-sm text-slate-300 min-w-[900px]",children:[p.jsx("thead",{className:"bg-slate-950/80 border-b border-slate-800 text-slate-400 whitespace-nowrap",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-4 py-4 font-semibold w-24",children:"所在位置"}),p.jsx("th",{className:"px-4 py-4 font-semibold w-20",children:"縮圖"}),p.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"代號 & 類型"}),p.jsx("th",{className:"px-4 py-4 font-semibold",children:"標題 & 描述"}),p.jsx("th",{className:"px-4 py-4 font-semibold w-28",children:"啟用狀態"}),p.jsx("th",{className:"px-4 py-4 font-semibold w-36",children:"測試狀態"}),p.jsx("th",{className:"px-4 py-4 font-semibold w-24 text-right",children:"操作"})]})}),p.jsx("tbody",{className:"divide-y divide-slate-800",children:O.map(P=>{var we;const ee=P.isVerticalShaft?(we=k.find(_e=>_e.id===P.bId))==null?void 0:we.floors.filter(_e=>{var Ve;return(Ve=P.linkedFloorIds)==null?void 0:Ve.includes(_e.id)}).sort((_e,Ve)=>Kn(Ve.name)-Kn(_e.name)).map(_e=>_e.name).join(", "):P.floorName;return p.jsxs("tr",{className:`hover:bg-slate-800/50 transition-colors ${P.isVerticalShaft?"bg-purple-900/5":""}`,children:[p.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[p.jsx("div",{className:"text-xs font-bold text-slate-300",children:P.buildingName}),p.jsx("div",{className:`text-[10px] mt-0.5 ${P.isVerticalShaft?"text-purple-400 font-bold":"text-cyan-400"}`,children:ee})]}),p.jsx("td",{className:"px-4 py-4",children:P.imageUrl?p.jsx("img",{src:P.imageUrl,alt:P.code,className:"w-10 h-10 object-cover rounded bg-slate-950 border border-slate-700"}):p.jsx("div",{className:"w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600",children:p.jsx(A0,{className:"w-4 h-4"})})}),p.jsxs("td",{className:"px-4 py-4 whitespace-nowrap",children:[p.jsx("div",{className:"font-mono text-cyan-400 font-bold mb-1",children:P.code}),P.isVerticalShaft?p.jsxs("div",{className:"inline-flex items-center bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[p.jsx(bs,{className:"w-3 h-3 mr-1"})," 垂直貫穿"]}):P.arrowDirection!=="none"&&p.jsxs("div",{className:"inline-flex items-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]",children:[p.jsx(fE,{direction:P.arrowDirection,className:"w-3 h-3 mr-1"})," 方向"]})]}),p.jsxs("td",{className:"px-4 py-4",children:[p.jsx("div",{className:"font-bold text-slate-200 mb-1 line-clamp-1 max-w-[200px]",children:P.title||"未命名"}),p.jsx("div",{className:"text-xs text-slate-500 line-clamp-1 max-w-[200px]",children:P.description||"無描述"})]}),p.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:P.enabled?p.jsx("span",{className:"px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs font-medium",children:"已啟用"}):p.jsx("span",{className:"px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-medium",children:"已停用"})}),p.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:p.jsx(Nf,{status:P.recognitionStatus})}),p.jsx("td",{className:"px-4 py-4 text-right",children:p.jsx("button",{onClick:()=>bi(P.bId,P.fId,P.id),className:"p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors",title:"前往此樓層編輯",children:p.jsx(Ld,{className:"w-4 h-4"})})})]},P.id)})})]})})})]})]})})},Kt=()=>p.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:p.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 md:space-y-8",children:[St(),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center mb-2",children:[p.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:p.jsx(go,{className:"w-6 h-6"})}),p.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[p.jsx(N0,{className:"mr-2 md:mr-3 text-cyan-400"})," 系統設定"]})]}),p.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),p.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg",children:[p.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-300 mb-4 md:mb-6 flex items-center",children:[p.jsx(T0,{className:"w-5 h-5 mr-2 text-blue-400"})," 基礎環境參數"]}),p.jsxs("div",{className:"space-y-4 md:space-y-5",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5",children:"系統專案名稱"}),p.jsx("input",{type:"text",value:I.projectName,onChange:b=>q({...I,projectName:b.target.value}),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"})]}),p.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[p.jsx("label",{className:"block text-xs md:text-sm font-medium text-slate-400 mb-1.5 mt-2",children:"防抖強度預設值 (Lerp Factor)"}),p.jsx("input",{type:"range",min:"5",max:"50",value:I.lerpFactor,onChange:b=>q({...I,lerpFactor:parseInt(b.target.value)}),className:"w-full accent-cyan-500"})]})]})]}),p.jsxs("div",{className:"bg-slate-900 border border-red-900/30 rounded-xl p-4 md:p-6 shadow-lg",children:[p.jsxs("h3",{className:"text-base md:text-lg font-bold text-red-400 mb-2 flex items-center",children:[p.jsx(b0,{className:"w-5 h-5 mr-2"})," 資料庫管理"]}),p.jsx("p",{className:"text-xs md:text-sm text-slate-500 mb-4 md:mb-6",children:"這些操作將會對目前的配置造成不可逆的影響，請謹慎操作。"}),p.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950 rounded-lg border border-red-900/50 gap-4",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-bold text-slate-300 text-sm md:text-base",children:"清空所有系統資料"}),p.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"刪除所有建築物、樓層平面圖與點位。"})]}),p.jsx("button",{onClick:()=>{v({isOpen:!0,title:"清空所有資料",message:"確定要清空所有資料嗎？此操作無法復原。",onConfirm:()=>T()})},className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap",children:"清空資料"})]})]})]})}),Gt=()=>p.jsx("div",{className:"flex-1 p-4 md:p-8 overflow-auto bg-slate-950",children:p.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[St(),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center mb-2",children:[p.jsx("button",{className:"md:hidden mr-3 text-slate-400 hover:text-white shrink-0",onClick:()=>u(!0),children:p.jsx(go,{className:"w-6 h-6"})}),p.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-slate-200 flex items-center",children:[p.jsx(fo,{className:"mr-2 md:mr-3 text-cyan-400"})," 匯出JSON"]})]}),p.jsx("p",{className:"text-slate-500 text-xs md:text-sm",children:"匯出目前 AR 導引資料，包含大樓、樓層、平面圖、點位、路徑與設定資料。"})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[p.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[p.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:k.length}),p.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"大樓數量"})]}),p.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[p.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:k.reduce((b,O)=>b+O.floors.length,0)}),p.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"樓層數量"})]}),p.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5",children:[p.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:k.reduce((b,O)=>b+O.floors.reduce((P,ee)=>P+(ee.markers||[]).length,0),0)}),p.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"AR 點位數量"})]})]}),p.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-lg",children:[p.jsxs("h3",{className:"text-base md:text-lg font-bold text-slate-200 mb-3 flex items-center",children:[p.jsx(b0,{className:"w-5 h-5 mr-2 text-cyan-400"})," JSON 配置檔"]}),p.jsxs("p",{className:"text-sm text-slate-400 mb-5",children:["按下按鈕後會下載一份目前專案的 ",p.jsx("span",{className:"text-cyan-300 font-mono",children:"AR JSON v7"}),"，可供後續系統串接、備份或移轉使用。"]}),p.jsxs("button",{onClick:W,className:"w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_18px_rgba(6,182,212,0.28)]",children:[p.jsx(fo,{className:"w-5 h-5"}),p.jsx("span",{children:"下載 JSON 配置"})]})]})]})});return t?p.jsx("div",{className:"flex h-[100dvh] w-full bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative",children:p.jsx(z0,{buildings:k,systemConfig:I,onMenuClick:()=>{}})}):p.jsxs("div",{className:`${s?"flex min-h-[760px] w-full":"flex h-[100dvh] w-full"} bg-slate-950 text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30 relative`,children:[!s&&l&&p.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)}),!s&&p.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-[82vw] max-w-xs md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 transition-transform duration-300 shadow-2xl md:relative md:translate-x-0 ${l?"translate-x-0":"-translate-x-full"}`,children:[p.jsxs("div",{children:[p.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 justify-between md:justify-start",children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx(va,{className:"w-7 h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"}),p.jsx("span",{className:"ml-3 font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"AR導引功能"})]}),p.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>u(!1),children:p.jsx(ts,{className:"w-6 h-6"})})]}),p.jsxs("nav",{className:"p-4 space-y-2",children:[p.jsx($l,{icon:p.jsx(C0,{}),label:"平面圖管理",active:r==="map",onClick:()=>K("map")}),p.jsx($l,{icon:p.jsx(mo,{}),label:"點位列表",active:r==="list",onClick:()=>K("list")}),p.jsx($l,{icon:p.jsx(N0,{}),label:"系統設定",active:r==="settings",onClick:()=>K("settings")}),p.jsx($l,{icon:p.jsx(fo,{}),label:"匯出JSON",active:r==="export",onClick:()=>K("export")})]})]}),p.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900/50",children:p.jsx("div",{className:"text-[11px] leading-relaxed text-slate-500",children:"管理平面圖、點位、系統參數，並匯出 AR 導引 JSON。"})})]}),r==="frontend"&&p.jsx(z0,{buildings:k,systemConfig:I,onMenuClick:()=>u(!0)}),r==="list"&&kt(),r==="settings"&&Kt(),r==="export"&&Gt(),r==="map"&&p.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950 w-full",children:[p.jsxs("div",{className:"absolute top-3 left-2 right-2 md:top-4 md:left-4 md:right-56 lg:right-72 z-40 flex flex-wrap items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2 rounded-xl shadow-lg overflow-visible",children:[!s&&p.jsx("button",{className:"md:hidden text-slate-400 hover:text-white mr-1",onClick:()=>u(!0),children:p.jsx(go,{className:"w-5 h-5"})}),p.jsxs("div",{className:"flex items-center",children:[p.jsx(va,{className:"w-4 h-4 text-cyan-400 ml-1 mr-2"}),p.jsx("select",{className:"bg-transparent text-cyan-300 text-sm font-bold focus:outline-none max-w-[120px] md:max-w-[150px] truncate",value:F,onChange:b=>z(b.target.value),children:N.map(b=>p.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),p.jsx("button",{onClick:Me,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"新增專案",children:p.jsx(Xl,{className:"w-4 h-4"})}),p.jsx("button",{onClick:Ti,className:"px-1 text-green-400 hover:text-green-300 transition-colors",title:"儲存專案",children:p.jsx(tc,{className:"w-4 h-4"})})]}),p.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),p.jsxs("div",{className:"flex items-center",children:[p.jsx(nE,{className:"w-4 h-4 text-slate-500 ml-1 mr-2"}),p.jsx("select",{className:"bg-transparent text-slate-200 text-sm font-medium focus:outline-none max-w-[110px] md:max-w-[120px] truncate",value:le,onChange:b=>pe(b.target.value),children:k.map(b=>p.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),p.jsx("button",{onClick:Bn,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:p.jsx(Xl,{className:"w-4 h-4"})})]}),p.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1"}),ft&&p.jsxs("div",{className:"flex items-center",children:[p.jsx(rE,{className:"w-4 h-4 text-slate-500 mr-2"}),p.jsx("select",{className:"bg-transparent text-cyan-400 font-bold text-sm focus:outline-none max-w-[100px] truncate",value:j,onChange:b=>oe(b.target.value),children:ft.floors.slice().sort((b,O)=>Kn(O.name)-Kn(b.name)).map(b=>p.jsx("option",{value:b.id,className:"bg-slate-900",children:b.name},b.id))}),p.jsx("button",{onClick:mi,className:"ml-1 px-1 text-cyan-400 hover:text-cyan-300 transition-colors",children:p.jsx(Xl,{className:"w-4 h-4"})})]}),p.jsx("div",{className:"w-px h-5 bg-slate-700 mx-1 hidden md:block"}),p.jsxs("div",{className:"hidden md:flex items-center",title:"透視其他樓層",children:[p.jsx(iE,{className:"w-4 h-4 text-slate-500 mr-1"}),p.jsxs("select",{className:"bg-transparent text-slate-400 text-xs focus:outline-none max-w-[90px] truncate",value:te,onChange:b=>se(b.target.value),children:[p.jsx("option",{value:"",className:"bg-slate-900",children:"-- 關閉透視 --"}),k.flatMap(b=>b.floors.filter(O=>O.id!==j).sort((O,P)=>Kn(P.name)-Kn(O.name)).map(O=>p.jsxs("option",{value:O.id,className:"bg-slate-900",children:[b.name,"-",O.name]},O.id)))]})]})]}),p.jsxs("div",{className:"absolute left-2 right-2 bottom-3 md:left-auto md:right-4 md:bottom-auto md:top-4 z-40 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible bg-slate-950/60 md:bg-transparent backdrop-blur md:backdrop-blur-0 p-2 md:p-0 rounded-xl md:rounded-none border border-slate-800/70 md:border-0",children:[p.jsxs("button",{onClick:X,className:"flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30",title:"從雲端載入已上架的 AR 資料",children:[p.jsx(fo,{className:"w-5 h-5"}),p.jsx("span",{children:"載入雲端"})]}),p.jsxs("button",{onClick:Ti,className:"flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs bg-green-500/10 hover:bg-green-500/20 text-green-300 border border-green-500/30",title:"把目前這台裝置的 AR 資料同步到雲端",children:[p.jsx(T0,{className:"w-5 h-5"}),p.jsx("span",{children:"同步雲端"})]}),p.jsxs("button",{onClick:()=>{B!=null&&B.imageUrl&&(ae(!E),ye(!1),ot(!1),_t(!1),We(!1),wt(null),ce(null),ne(null),Et(null),Ne([]),je([]))},disabled:!(B!=null&&B.imageUrl),className:`flex shrink-0 items-center justify-center gap-2 h-10 px-3 rounded-xl transition-all shadow-lg font-bold text-xs ${E?"bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"}`,title:"路網分析測試",children:[E?p.jsx(ts,{className:"w-5 h-5"}):p.jsx(E0,{className:"w-5 h-5"}),p.jsx("span",{children:"路網測試"})]}),(B==null?void 0:B.imageUrl)&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"hidden md:block w-6 h-px bg-slate-700 mx-auto my-0.5"}),p.jsx("button",{onClick:()=>{ot(!ke),ye(!1),ae(!1),_t(!1),We(!1),wt(null),ce(null),ne(null),Et(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${ke?"bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-green-400 hover:bg-slate-800"}`,title:"指定跨樓層轉折點 (點擊節點切換)",children:ke?p.jsx(ts,{className:"w-5 h-5"}):p.jsx(bs,{className:"w-5 h-5"})}),p.jsx("button",{onClick:()=>{ye(!be),ot(!1),ae(!1),_t(!1),We(!1),wt(null),ce(null),ne(null),Et(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${be?"bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-orange-400 hover:bg-slate-800"}`,title:"路徑建置 (一般轉折點與連線)",children:be?p.jsx(ts,{className:"w-5 h-5"}):p.jsx(lE,{className:"w-5 h-5"})}),p.jsx("button",{onClick:()=>{We(!Ft),ot(!1),ae(!1),_t(!1),ye(!1),U([]),Et(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Ft?"bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-purple-400 hover:bg-slate-800"}`,title:"尺規量測",children:Ft?p.jsx(ts,{className:"w-5 h-5"}):p.jsx(cE,{className:"w-5 h-5"})}),p.jsx("button",{onClick:()=>{_t(!Lt),ot(!1),ae(!1),We(!1),ye(!1),Et(null)},className:`flex shrink-0 items-center justify-center w-10 h-10 rounded-xl transition-all shadow-lg ${Lt?"bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]":"bg-slate-900/90 backdrop-blur border border-slate-700 text-cyan-400 hover:bg-slate-800"}`,title:"新增 AR 點位",children:Lt?p.jsx(ts,{className:"w-5 h-5"}):p.jsx(mo,{className:"w-5 h-5"})}),p.jsx("button",{onClick:()=>D({isOpen:!0,blX:Le.blX,blY:Le.blY,trX:Le.trX,trY:Le.trY}),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-blue-400 hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"座標與比例尺設定",children:p.jsx(va,{className:"w-5 h-5"})})]}),p.jsx("input",{type:"file",ref:tt,onChange:Ji,className:"hidden",accept:"image/*"}),p.jsx("button",{onClick:()=>tt.current.click(),className:"flex shrink-0 items-center justify-center w-10 h-10 bg-slate-900/90 backdrop-blur border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all shadow-lg",title:"上傳底圖",children:p.jsx(P0,{className:"w-5 h-5"})})]}),p.jsxs("div",{ref:xe,className:`flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 touch-none select-none ${be?"cursor-crosshair":ke?"cursor-pointer":Lt||Ft||E?"cursor-crosshair":jt?"cursor-grabbing":"cursor-grab"}`,onPointerDown:si,onPointerMove:Sn,onPointerUp:Qn,onPointerCancel:Qn,children:[B&&p.jsxs("div",{className:"absolute left-4 top-24 md:top-20 z-30 rounded-full border border-cyan-400/30 bg-slate-950/85 px-4 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md pointer-events-none",children:[(ft==null?void 0:ft.name)||"目前場域"," / ",B.name||"未命名樓層"]}),p.jsxs("div",{ref:Se,className:"absolute top-0 left-0 origin-top-left will-change-transform",style:{transform:`translate(${Te.x}px, ${Te.y}px) scale(${Te.scale})`},children:[te&&(()=>{let b=null;if(k.forEach(Ve=>Ve.floors.forEach(lt=>{lt.id===te&&(b=lt)})),!b)return null;const O=ns(b),P=Xe!==0?(O.trX-O.blX)/Xe:1,ee=Pe!==0?(O.trY-O.blY)/Pe:1,we=Xe!==0?(O.blX-Le.blX)/Xe:0,_e=Pe!==0?(Le.trY-O.trY)/Pe:0;return p.jsxs("div",{className:"absolute z-0 pointer-events-none",style:{left:`${we*100}%`,top:`${_e*100}%`,width:`${P*100}%`,height:`${ee*100}%`,opacity:.4},children:[b.imageUrl&&p.jsx("img",{src:b.imageUrl,className:"w-full h-full object-cover rounded-lg filter grayscale sepia",alt:"reference"}),b.markers.map(Ve=>p.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",style:{left:`${Ve.x*100}%`,top:`${Ve.y*100}%`},children:p.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-dashed border-cyan-400 bg-cyan-400/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]",children:p.jsx("span",{className:"text-[8px] text-cyan-200",style:{transform:`scale(${1/Math.max(.5,Te.scale)})`},children:Ve.code})})},Ve.id))]})})(),(B==null?void 0:B.imageUrl)&&p.jsx("img",{id:"current-map-image",src:B.imageUrl,alt:"Floor Plan",onLoad:re,className:`select-none pointer-events-none block max-w-none rounded-lg relative z-10 transition-opacity ${te?"opacity-70 mix-blend-screen":"opacity-100"}`}),p.jsxs("svg",{className:"absolute inset-0 w-full h-full z-20 pointer-events-none",style:{overflow:"visible"},children:[p.jsx("defs",{children:p.jsx("marker",{id:"arrowhead-test",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:p.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#3b82f6"})})}),it.map(b=>{const O=ze.find(ee=>ee.id===b.start)||ge.find(ee=>ee.id===b.start),P=ze.find(ee=>ee.id===b.end)||ge.find(ee=>ee.id===b.end);return O&&P?p.jsx("line",{x1:`${O.x*100}%`,y1:`${O.y*100}%`,x2:`${P.x*100}%`,y2:`${P.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Te.scale),strokeOpacity:"0.7"},b.id):null}),be&&et&&yt&&(()=>{const b=ze.find(O=>O.id===et)||ge.find(O=>O.id===et);return b?p.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${yt.x*100}%`,y2:`${yt.y*100}%`,stroke:"#f97316",strokeWidth:3/Math.max(.2,Te.scale),strokeDasharray:"6,6",opacity:"0.8",className:"animate-[dash_0.5s_linear_infinite]"}):null})(),E&&Be.length>0&&Be.map((b,O)=>{if(O===Be.length-1)return null;const P=Be[O+1],ee=[];return b.fId===j&&P.fId===j?ee.push(p.jsx("line",{x1:`${b.x*100}%`,y1:`${b.y*100}%`,x2:`${P.x*100}%`,y2:`${P.y*100}%`,stroke:"#3b82f6",strokeWidth:5/Math.max(.2,Te.scale),strokeDasharray:"15, 10",markerEnd:"url(#arrowhead-test)",className:"animate-[dash_1s_linear_infinite] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"},`testline_${O}`)):b.fId===j&&P.fId!==j?ee.push(p.jsxs("g",{children:[p.jsxs("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:12/Math.max(.5,Te.scale),fill:"none",stroke:"#ef4444",strokeWidth:3/Math.max(.5,Te.scale),children:[p.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Te.scale),to:35/Math.max(.5,Te.scale),dur:"1.5s",repeatCount:"indefinite"}),p.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),p.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.5,Te.scale),fill:"#ef4444"}),p.jsxs("text",{x:`${b.x*100}%`,y:`${b.y*100}%`,dy:"-20",fill:"#ef4444",fontSize:12/Math.max(.5,Te.scale),textAnchor:"middle",fontWeight:"bold",children:["搭乘至 ",P.fName]})]},`leave_${O}`)):b.fId!==j&&P.fId===j&&ee.push(p.jsxs("g",{children:[p.jsxs("circle",{cx:`${P.x*100}%`,cy:`${P.y*100}%`,r:12/Math.max(.5,Te.scale),fill:"none",stroke:"#22c55e",strokeWidth:3/Math.max(.5,Te.scale),children:[p.jsx("animate",{attributeName:"r",from:12/Math.max(.5,Te.scale),to:35/Math.max(.5,Te.scale),dur:"1.5s",repeatCount:"indefinite"}),p.jsx("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1.5s",repeatCount:"indefinite"})]}),p.jsx("circle",{cx:`${P.x*100}%`,cy:`${P.y*100}%`,r:6/Math.max(.5,Te.scale),fill:"#22c55e"}),p.jsxs("text",{x:`${P.x*100}%`,y:`${P.y*100}%`,dy:"-20",fill:"#22c55e",fontSize:12/Math.max(.5,Te.scale),textAnchor:"middle",fontWeight:"bold",children:["來自 ",b.fName]})]},`enter_${O}`)),p.jsx(If.Fragment,{children:ee},`testfrag_${O}`)})]}),ge.map(b=>{const O=G===b.id,P=et===b.id,ee=b.isVerticalShaft&&b.sourceFloorId&&b.sourceFloorId!==j;let we="bg-orange-500",_e="border-white",Ve="";return b.isVerticalShaft&&(we="bg-green-500"),P?(we="bg-white",_e=ee?"border-green-500":"border-orange-500",Ve=ee?"shadow-[0_0_10px_green]":"shadow-[0_0_10px_orange]"):O&&(_e="border-cyan-400 border-2",Ve="shadow-[0_0_10px_cyan]"),p.jsx("div",{className:`waypoint-pin absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer ${O?"z-40":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:lt=>{lt.stopPropagation(),lt.button===0&&(be?Dn(b.id):ke?(b.isVerticalShaft||Ht(b,!0,!1),ce(null),ne(b.id)):!E&&!Ft&&!jt&&!Lt&&(ce(null),ne(b.id),rt(b.id),lt.target.setPointerCapture(lt.pointerId)))},onPointerUp:lt=>{lt.stopPropagation(),lt.target.releasePointerCapture(lt.pointerId)},onContextMenu:lt=>{lt.preventDefault(),be?_n(b.id):ke?b.isVerticalShaft&&Ht(b,!1,!1):!E&&!Ft&&!Lt&&(ce(null),ne(b.id))},children:p.jsx("div",{className:`rounded-full transition-all flex items-center justify-center ${we} ${_e} ${Ve}`,style:{width:`${(P?14:10)/Math.max(.5,Te.scale)}px`,height:`${(P?14:10)/Math.max(.5,Te.scale)}px`,borderWidth:O?"2px":"1px"},children:b.isVerticalShaft&&p.jsx(bs,{className:P?"text-slate-800":"text-white",style:{width:`${6/Math.max(.5,Te.scale)}px`,height:`${6/Math.max(.5,Te.scale)}px`}})})},b.id)}),E&&Ee.map((b,O)=>b.fId!==j?null:p.jsx("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 z-[35] pointer-events-none",style:{left:`${b.x*100}%`,top:`${b.y*100}%`},children:p.jsx("div",{className:"rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)] flex items-center justify-center text-[8px] font-bold text-white",style:{width:`${16/Math.max(.5,Te.scale)}px`,height:`${16/Math.max(.5,Te.scale)}px`},children:O===0?"起":"終"})},`testpt_${O}`)),Ft&&Ot.length>0&&p.jsxs("div",{className:"absolute inset-0 z-40 pointer-events-none",children:[p.jsxs("svg",{className:"w-full h-full",style:{overflow:"visible"},children:[Ot.length===2&&p.jsx("line",{x1:`${Ot[0].x*100}%`,y1:`${Ot[0].y*100}%`,x2:`${Ot[1].x*100}%`,y2:`${Ot[1].y*100}%`,stroke:"#a855f7",strokeWidth:3/Math.max(.1,Te.scale),strokeDasharray:"5,5"}),Ot.map((b,O)=>p.jsx("circle",{cx:`${b.x*100}%`,cy:`${b.y*100}%`,r:6/Math.max(.1,Te.scale),fill:"#a855f7",stroke:"#fff",strokeWidth:2/Math.max(.1,Te.scale)},O))]}),Ot.length===2&&p.jsxs("div",{className:"absolute bg-purple-900/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-purple-400 shadow-xl whitespace-nowrap",style:{left:`${(Ot[0].x+Ot[1].x)*50}%`,top:`${(Ot[0].y+Ot[1].y)*50}%`,transform:`translate(-50%, -150%) scale(${1/Math.max(.5,Te.scale)})`},children:[Math.hypot((Ot[1].x-Ot[0].x)*Xe,(Ot[1].y-Ot[0].y)*Pe).toFixed(1)," m"]})]}),ze.map(b=>{const O=b.isVerticalShaft?ft==null?void 0:ft.floors.filter(P=>{var ee;return(ee=b.linkedFloorIds)==null?void 0:ee.includes(P.id)}).sort((P,ee)=>Kn(ee.name)-Kn(P.name)).map(P=>P.name).join(", "):"";return p.jsxs("div",{className:`marker-pin absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group z-50 ${fe===b.id?"z-[60]":""} ${et===b.id?"scale-125":""}`,style:{left:`${b.x*100}%`,top:`${b.y*100}%`},onPointerDown:P=>{P.stopPropagation(),P.button===0&&(be?Dn(b.id):ke?(b.isVerticalShaft||Ht(b,!0,!0),ne(null),ce(b.id)):!E&&!Lt&&!Ft&&!jt&&(ne(null),rt(b.id),ce(b.id),P.target.setPointerCapture(P.pointerId)))},onPointerUp:P=>{P.stopPropagation(),P.target.releasePointerCapture(P.pointerId)},onContextMenu:P=>{P.preventDefault(),be?_n(b.id):ke?b.isVerticalShaft&&Ht(b,!1,!0):!E&&!Ft&&!Lt&&(ne(null),ce(b.id))},children:[p.jsxs("div",{className:"relative pointer-events-none",children:[p.jsx("div",{className:`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${fe===b.id?"bg-cyan-500 border-white text-slate-950 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.8)]":b.enabled?b.isVerticalShaft?"bg-purple-600 border-purple-400 text-white":"bg-slate-800 border-cyan-500/50 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400":"bg-slate-900 border-slate-700 text-slate-600 opacity-70"} ${et===b.id?"border-orange-500 shadow-[0_0_15px_orange]":""}`,children:b.isVerticalShaft?p.jsx(bs,{className:"w-3.5 h-3.5",style:{transform:`scale(${1/Math.max(.5,Te.scale)})`}}):p.jsx("span",{className:"text-[10px] md:text-xs font-bold",style:{transform:`scale(${1/Math.max(.5,Te.scale)})`},children:b.code})}),p.jsx("div",{className:`absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent transition-all ${fe===b.id?"border-t-white":b.enabled?b.isVerticalShaft?"border-t-purple-400":"border-t-cyan-500/50 group-hover:border-t-cyan-400":"border-t-slate-700 opacity-70"} ${et===b.id?"border-t-orange-500":""}`})]}),p.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 whitespace-nowrap px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-900 border text-[10px] md:text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg ${fe===b.id?"opacity-100 border-cyan-500 text-cyan-400":b.enabled?"border-slate-700 text-slate-300":"border-slate-800 text-slate-500"}`,style:{transform:`scale(${1/Math.max(.5,Te.scale)})`,transformOrigin:"top center"},children:[b.title||"未命名"," ",b.isVerticalShaft&&p.jsxs("span",{className:"text-purple-400 block mt-0.5",children:["(貫通: ",O,")"]})]})]},b.id)})]}),ke&&p.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-green-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center pointer-events-auto z-50",children:[p.jsx(bs,{className:"w-5 h-5 mr-3 shrink-0"}),p.jsxs("div",{className:"flex flex-col",children:[p.jsx("span",{children:"點擊既有節點指定為「跨樓層轉折點」，右鍵取消。"}),p.jsx("span",{className:"text-green-200 font-normal",children:"指定後將自動開啟右側面板，請勾選要連通的樓層。"})]})]}),be&&p.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-orange-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center pointer-events-auto z-50",children:[p.jsx(aE,{className:"w-5 h-5 mr-3 shrink-0"}),p.jsxs("div",{className:"flex flex-col",children:[p.jsx("span",{children:"點擊空處建立轉折點與連線路網 (AR 標籤不須強迫連線)。"}),p.jsx("span",{className:"text-orange-200 font-normal",children:"點擊「目前發光點」或按 ESC 中斷畫線。右鍵刪除節點。"})]})]}),E&&p.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 bg-blue-500/95 text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center pointer-events-auto z-50",children:[p.jsx(E0,{className:"w-5 h-5 mr-3 shrink-0 animate-pulse"}),p.jsxs("div",{className:"flex flex-col",children:[p.jsx("span",{children:"路網分析測試模式：已啟用自動吸附演算"}),p.jsx("span",{className:"text-blue-200 font-normal",children:"請在地圖上任意點擊兩處，系統將模擬導航並畫出藍色最佳路徑。"})]})]}),!(B!=null&&B.imageUrl)&&p.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center text-slate-500 pointer-events-none px-4",children:[p.jsx(C0,{className:"w-12 h-12 mx-auto mb-3 opacity-50 text-cyan-500/30"}),p.jsxs("p",{className:"text-base md:text-lg mb-1",children:["尚未載入 ",ft==null?void 0:ft.name," - ",B==null?void 0:B.name," 的平面圖"]}),p.jsx("p",{className:"text-xs",children:"點擊右側工具列「上傳底圖」"})]}),(B==null?void 0:B.imageUrl)&&Ae>0&&p.jsxs("div",{onClick:()=>D({isOpen:!0,blX:Le.blX,blY:Le.blY,trX:Le.trX,trY:Le.trY}),className:"absolute top-20 right-3 md:top-4 md:right-20 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-2.5 rounded-lg shadow-lg cursor-pointer hover:bg-slate-800 transition-colors",title:"點擊校正全域座標",children:[p.jsxs("span",{className:"text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center",children:[p.jsx(va,{className:"w-3 h-3 mr-1"})," 比例尺: ",Ge," m"]}),p.jsx("div",{className:"h-1.5 bg-cyan-500/50 border-x-2 border-cyan-400",style:{width:`${Ae}px`}})]}),(B==null?void 0:B.imageUrl)&&p.jsxs("div",{className:"absolute bottom-28 right-3 md:bottom-4 md:right-4 flex flex-col space-y-2 z-40",children:[p.jsx("button",{onClick:()=>Re(b=>({...b,scale:Math.min(10,b.scale*1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:p.jsx(Ig,{className:"w-5 h-5"})}),p.jsx("button",{onClick:()=>Re(b=>({...b,scale:Math.max(.1,b.scale/1.2)})),className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors",children:p.jsx(Dg,{className:"w-5 h-5"})}),p.jsx("button",{onClick:re,className:"p-2 bg-slate-900/90 backdrop-blur border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl shadow-lg transition-colors mt-1",children:p.jsx(sE,{className:"w-5 h-5"})})]})]})]}),_.isOpen&&p.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:p.jsxs("div",{className:"bg-slate-900 border border-blue-900/50 rounded-xl w-full max-w-md p-6",children:[p.jsxs("h3",{className:"text-lg font-bold text-blue-400 mb-4 flex items-center",children:[p.jsx(va,{className:"w-5 h-5 mr-2"})," 樓層實體座標與比例尺設定"]}),p.jsxs("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:["設定此樓層對應的真實物理座標 (公尺)。",p.jsx("br",{}),"修改差值即等同設定這張圖片在真實空間的總寬度與總長度。"]}),p.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[p.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[p.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↙️ 左下角 (Bottom-Left)"}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),p.jsx("input",{type:"number",value:_.blX,onChange:b=>D({..._,blX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),p.jsx("input",{type:"number",value:_.blY,onChange:b=>D({..._,blY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]}),p.jsxs("div",{className:"space-y-3 p-3 bg-slate-950 rounded border border-slate-800",children:[p.jsx("h4",{className:"text-xs font-bold text-slate-300",children:"↗️ 右上角 (Top-Right)"}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[10px] text-slate-500",children:"X 座標 (m)"}),p.jsx("input",{type:"number",value:_.trX,onChange:b=>D({..._,trX:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[10px] text-slate-500",children:"Y 座標 (m)"}),p.jsx("input",{type:"number",value:_.trY,onChange:b=>D({..._,trY:parseFloat(b.target.value)||0}),className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-200 mt-1"})]})]})]}),p.jsx("button",{onClick:()=>{Z(b=>b.map(O=>O.id===le?{...O,floors:O.floors.map(P=>P.id===j?{...P,bounds:{blX:_.blX,blY:_.blY,trX:_.trX,trY:_.trY}}:P)}:O)),D({isOpen:!1}),x({isOpen:!0,message:"樓層座標已更新！"})},className:"w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg",children:"儲存套用"})]})}),M.isOpen&&p.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:p.jsxs("div",{className:"bg-slate-900 border border-amber-500/40 rounded-xl w-full max-w-2xl p-6 shadow-2xl",children:[p.jsxs("div",{className:"flex items-start justify-between gap-4 mb-5",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"選擇要載入的雲端專案"}),p.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"載入後會覆蓋目前後台顯示的本機暫存，但不會同步上架，除非你再次按「同步雲端」。"})]}),p.jsx("button",{onClick:()=>C({isOpen:!1,isLoading:!1,projects:[],error:""}),className:"text-slate-400 hover:text-white p-1",children:p.jsx(ts,{className:"w-5 h-5"})})]}),M.isLoading&&p.jsx("div",{className:"rounded-xl border border-slate-800 bg-slate-950 p-6 text-center text-sm text-slate-300",children:"正在讀取雲端專案列表..."}),!M.isLoading&&M.error&&p.jsx("div",{className:"rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200",children:M.error}),!M.isLoading&&!M.error&&p.jsx("div",{className:"max-h-[60vh] overflow-y-auto space-y-3 pr-1",children:M.projects.map(b=>{var ee;const O=b.stats||gi(b.buildings||[]),P=b.project||{};return p.jsx("button",{onClick:()=>De(P.id),className:"w-full text-left rounded-xl border border-slate-800 bg-slate-950 hover:border-amber-400/60 hover:bg-slate-900 p-4 transition-colors",children:p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"font-bold text-slate-100 truncate",children:P.name||((ee=b.systemConfig)==null?void 0:ee.projectName)||"未命名 AR 專案"}),p.jsxs("div",{className:"text-[11px] text-slate-500 mt-1",children:["更新時間：",P.updatedAt?new Date(P.updatedAt).toLocaleString():"未知"]})]}),p.jsxs("div",{className:"text-[11px] text-amber-200 shrink-0",children:[O.floorPlans," 張圖 · ",O.markers," 點位 · ",O.waypoints," 節點 · ",O.edges," 路線"]})]})},P.id)})})]})}),f.isOpen&&p.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:p.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[p.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:f.title}),p.jsx("input",{autoFocus:!0,type:"text",placeholder:f.placeholder,defaultValue:f.defaultValue,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 mb-6",onKeyDown:b=>{b.key==="Enter"&&(f.onSubmit(b.target.value),h({isOpen:!1}))}}),p.jsxs("div",{className:"flex space-x-3 justify-end",children:[p.jsx("button",{onClick:()=>h({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),p.jsx("button",{onClick:b=>{f.onSubmit(b.target.parentElement.previousElementSibling.value),h({isOpen:!1})},className:"px-5 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"確定"})]})]})}),m.isOpen&&p.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:p.jsxs("div",{className:"bg-slate-900 border border-red-900/50 rounded-xl w-full max-w-sm p-6 shadow-2xl",children:[p.jsx("h3",{className:"text-lg font-bold text-red-400 mb-2",children:m.title}),p.jsx("p",{className:"text-slate-300 text-sm mb-6",children:m.message}),p.jsxs("div",{className:"flex space-x-3 justify-end",children:[p.jsx("button",{onClick:()=>v({isOpen:!1}),className:"px-5 py-2 bg-slate-800 text-slate-300 rounded-lg",children:"取消"}),p.jsx("button",{onClick:()=>{m.onConfirm(),v({isOpen:!1})},className:"px-5 py-2 bg-red-500 text-white font-bold rounded-lg",children:"確定執行"})]})]})}),y.isOpen&&p.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4",children:p.jsxs("div",{className:"bg-slate-900 border border-yellow-500/50 rounded-xl w-full max-w-sm p-6 shadow-2xl text-center",children:[p.jsx(Pg,{className:"w-16 h-16 text-yellow-500 mx-auto mb-4"}),p.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"系統提示"}),p.jsx("p",{className:"text-slate-300 text-sm mb-6",children:y.message}),p.jsx("button",{onClick:()=>x({isOpen:!1}),className:"w-full px-5 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg",children:"我知道了"})]})}),L&&p.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[200] flex items-center justify-center p-4",children:p.jsxs("div",{className:"bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-md p-8 shadow-2xl text-center",children:[p.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[p.jsx("div",{className:"bg-cyan-500/20 p-4 rounded-full border border-cyan-500/30",children:p.jsx(Rf,{className:"w-10 h-10 text-cyan-400"})}),p.jsx("div",{className:"bg-purple-500/20 p-4 rounded-full border border-purple-500/30",children:p.jsx(dE,{className:"w-10 h-10 text-purple-400"})})]}),p.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"歡迎使用 AR 導覽"}),p.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-8",children:["為了提供最佳的空間定位體驗，本系統需要使用您的",p.jsx("b",{children:"「相機」"}),"進行掃描，以及",p.jsx("b",{children:"「陀螺儀」"}),"來偵測手機方位。請在下一步允許存取。"]}),p.jsxs("button",{onClick:Nt,className:"w-full px-6 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]",children:[p.jsx(tc,{className:"w-5 h-5 mr-2"})," 允許權限並開始"]})]})}),p.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 max-h-[86dvh] rounded-t-2xl border-t border-slate-800 bg-slate-900 shadow-2xl md:inset-x-auto md:inset-y-0 md:right-0 md:max-h-none md:w-80 md:rounded-none md:border-t-0 md:border-l lg:w-96 flex flex-col shrink-0 transition-transform duration-300 ${r==="map"&&(fe||G)?"translate-y-0 md:translate-x-0":"translate-y-full md:translate-y-0 md:translate-x-full absolute invisible"}`,children:[p.jsxs("div",{className:"h-16 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur shrink-0",children:[p.jsx("h2",{className:"font-bold text-slate-200",children:fe?"AR 點位設定":"轉折點 (Waypoint) 設定"}),p.jsx("button",{onClick:()=>{ce(null),ne(null)},className:"text-slate-400 hover:text-white p-2",children:p.jsx(ts,{})})]}),Y&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:[p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex space-x-3",children:[p.jsxs("div",{className:"flex-1",children:[p.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"代號"}),p.jsx("input",{type:"text",value:Y.code,onChange:b=>Qe(Y.id,"code",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),p.jsxs("div",{className:"flex-[2]",children:[p.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"標題"}),p.jsx("input",{type:"text",value:Y.title,onChange:b=>Qe(Y.id,"title",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"描述說明"}),p.jsx("textarea",{value:Y.description||"",onChange:b=>Qe(Y.id,"description",b.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 resize-none"})]}),p.jsxs("div",{className:"flex space-x-3",children:[p.jsxs("div",{className:"flex-1",children:[p.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),p.jsx("input",{type:"number",step:"0.1",value:+(Y.x*100).toFixed(1),onChange:b=>Qe(Y.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),p.jsxs("div",{className:"flex-1",children:[p.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),p.jsx("input",{type:"number",step:"0.1",value:+(Y.y*100).toFixed(1),onChange:b=>Qe(Y.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),p.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("label",{className:"text-xs font-medium text-purple-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-m",children:[p.jsx(bs,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通節點"]}),p.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[p.jsx("input",{type:"checkbox",id:"toggle-shaft-m",checked:Y.isVerticalShaft||!1,onChange:b=>Ht(Y,b.target.checked,!0),className:"sr-only peer"}),p.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-purple-500 peer-checked:after:bg-white shadow-inner"})]})]}),Y.isVerticalShaft?p.jsx("div",{className:"pt-2 border-t border-slate-800/50",children:p.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:ft==null?void 0:ft.floors.slice().sort((b,O)=>Kn(O.name)-Kn(b.name)).map(b=>{var ee;const O=(ee=Y.linkedFloorIds)==null?void 0:ee.includes(b.id),P=b.id===j;return p.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${O?"bg-purple-500/20 border-purple-500/50 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[p.jsx("input",{type:"checkbox",className:"mr-2 accent-purple-500 rounded",disabled:P,checked:O||P,onChange:we=>Yt(Y,b.id,we.target.checked,!0)}),p.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",P&&"(目前)"]})]},b.id)})})}):p.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[p.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"強制導引方向 (一般節點用)"}),p.jsxs("select",{value:Y.arrowDirection||"none",onChange:b=>Qe(Y.id,"arrowDirection",b.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200 focus:border-cyan-500",children:[p.jsx("option",{value:"none",children:"無/自動計算方向 (Auto)"}),p.jsx("option",{value:"up",children:"上 (Up)"}),p.jsx("option",{value:"down",children:"下 (Down)"}),p.jsx("option",{value:"left",children:"左 (Left)"}),p.jsx("option",{value:"right",children:"右 (Right)"})]})]})]}),p.jsxs("div",{className:"flex items-center justify-between pt-1",children:[p.jsx("label",{className:"text-xs font-medium text-slate-300 cursor-pointer",htmlFor:"toggle-enable-m",children:"啟用此點位辨識"}),p.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[p.jsx("input",{type:"checkbox",id:"toggle-enable-m",checked:Y.enabled,onChange:b=>Qe(Y.id,"enabled",b.target.checked),className:"sr-only peer"}),p.jsx("div",{className:"w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-white shadow-inner"})]})]})]}),p.jsx("hr",{className:"border-slate-800"}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("h3",{className:"text-xs font-semibold text-cyan-400",children:"Target Image 辨識圖"}),p.jsx("input",{type:"file",ref:st,onChange:zi,className:"hidden",accept:"image/*"}),p.jsx("button",{onClick:()=>st.current.click(),className:"text-[10px] text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors border border-slate-700",children:"上傳/更換"})]}),p.jsx("div",{className:"border border-slate-800 bg-slate-950 rounded-xl p-2 flex items-center justify-center min-h-[140px]",children:Y.imageUrl?p.jsx("img",{src:Y.imageUrl,alt:"Target",className:"max-w-full max-h-40 object-contain rounded"}):p.jsxs("div",{className:"text-center text-slate-600",children:[p.jsx(Rf,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),p.jsx("span",{className:"text-xs",children:"未上傳辨識圖"})]})})]}),p.jsx(ME,{marker:Y,onUpdateStatus:b=>Qe(Y.id,"recognitionStatus",b),showAlert:b=>x({isOpen:!0,message:b})})]}),p.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:Ue?p.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[p.jsx("button",{onClick:()=>de(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),p.jsx("button",{onClick:()=>_n(Y.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):p.jsxs("div",{className:"flex space-x-3",children:[p.jsx("button",{onClick:()=>de(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:p.jsx(Ud,{className:"w-5 h-5"})}),p.jsx("button",{onClick:()=>ce(null),className:"flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm",children:"完成設定"})]})})]}),Ce&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 pb-8",children:p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex space-x-3",children:[p.jsxs("div",{className:"flex-1",children:[p.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 X (%)"}),p.jsx("input",{type:"number",step:"0.1",value:+(Ce.x*100).toFixed(1),onChange:b=>vt(Ce.id,"x",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]}),p.jsxs("div",{className:"flex-1",children:[p.jsx("label",{className:"block text-[11px] text-slate-400 mb-1",children:"相對 Y (%)"}),p.jsx("input",{type:"number",step:"0.1",value:+(Ce.y*100).toFixed(1),onChange:b=>vt(Ce.id,"y",Math.max(0,Math.min(100,parseFloat(b.target.value)||0))/100),className:"w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200"})]})]}),p.jsxs("div",{className:"p-3 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 mt-4",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("label",{className:"text-xs font-medium text-green-400 cursor-pointer flex items-center",htmlFor:"toggle-shaft-wp",children:[p.jsx(bs,{className:"w-4 h-4 mr-1.5"})," 設為垂直貫通轉折點"]}),p.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[p.jsx("input",{type:"checkbox",id:"toggle-shaft-wp",checked:Ce.isVerticalShaft||!1,onChange:b=>Ht(Ce,b.target.checked,!1),className:"sr-only peer"}),p.jsx("div",{className:"w-8 h-4 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white shadow-inner"})]})]}),Ce.isVerticalShaft&&p.jsxs("div",{className:"pt-2 border-t border-slate-800/50",children:[p.jsx("p",{className:"text-[10px] text-slate-400 mb-2 leading-relaxed",children:"勾選後，此點位將會以綠色顯示於其他樓層，您可以在該樓層直接將其與路網連線，系統將自動支援跨樓層導航。"}),p.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:ft==null?void 0:ft.floors.slice().sort((b,O)=>Kn(O.name)-Kn(b.name)).map(b=>{var ee;const O=(ee=Ce.linkedFloorIds)==null?void 0:ee.includes(b.id),P=b.id===j;return p.jsxs("label",{className:`flex items-center p-2 rounded-lg border transition-colors ${O?"bg-green-500/20 border-green-500/50 text-green-300":"bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 cursor-pointer"}`,children:[p.jsx("input",{type:"checkbox",className:"mr-2 accent-green-500 rounded",disabled:P,checked:O||P,onChange:we=>Yt(Ce,b.id,we.target.checked,!1)}),p.jsxs("span",{className:"text-xs font-bold",children:[b.name," ",P&&"(目前)"]})]},b.id)})})]})]})]})}),p.jsx("div",{className:"p-4 border-t border-slate-800 bg-slate-900 shrink-0 pb-safe",children:Ue?p.jsxs("div",{className:"flex space-x-2 animate-in fade-in slide-in-from-bottom-2",children:[p.jsx("button",{onClick:()=>de(!1),className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2.5 rounded-xl border border-slate-700 text-sm",children:"取消"}),p.jsx("button",{onClick:()=>_n(Ce.id),className:"flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2.5 rounded-xl shadow-[0_0_10px_rgba(239,68,68,0.4)] text-sm",children:"確定刪除"})]}):p.jsxs("div",{className:"flex space-x-3",children:[p.jsx("button",{onClick:()=>de(!0),className:"flex items-center justify-center p-3 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-xl border border-red-500/20",children:p.jsx(Ud,{className:"w-5 h-5"})}),p.jsx("button",{onClick:()=>ne(null),className:"flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm",children:"完成設定"})]})})]})]})]})}function $l({icon:s,label:e,active:t,onClick:r}){return p.jsxs("div",{onClick:r,className:`flex items-center p-3 rounded-xl cursor-pointer transition-all ${t?"bg-cyan-500/10 text-cyan-400 font-bold shadow-inner":"text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[p.jsx("div",{className:`w-5 h-5 shrink-0 ${t?"scale-110":""}`,children:s}),p.jsx("span",{className:"ml-3 text-sm md:text-base flex-1",children:e})]})}function Nf({status:s}){const e={untested:{color:"text-slate-400",border:"border-slate-700",bg:"bg-slate-800/50",text:"尚未測試",icon:null},testing:{color:"text-yellow-400",border:"border-yellow-500/50",bg:"bg-yellow-500/10",text:"測試中...",icon:p.jsx("span",{className:"animate-spin mr-1 w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"})},success:{color:"text-green-400",border:"border-green-500/50",bg:"bg-green-500/10",text:"高辨識度",icon:p.jsx(tc,{className:"w-3 h-3 mr-1 inline"})},unstable:{color:"text-orange-400",border:"border-orange-500/50",bg:"bg-orange-500/10",text:"不穩定",icon:p.jsx(Pg,{className:"w-3 h-3 mr-1 inline"})}},t=e[s]||e.untested;return p.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${t.bg} ${t.border} ${t.color}`,children:[t.icon," ",t.text]})}function ME({marker:s,onUpdateStatus:e,showAlert:t}){const[r,o]=Ie.useState("idle"),[l,u]=Ie.useState({fps:0,matches:0,inliers:0,status:"OFFLINE"}),f=Ie.useRef(null),h=Ie.useRef(null),m=Ie.useRef(null),v=Ie.useRef(null),y=Ie.useRef(null),x=Ie.useRef({refGray:null,refKeypoints:null,refDescriptors:null,orbDetector:null,matcher:null}),M=Ie.useRef({frames:0,lockedFrames:0});Ie.useEffect(()=>{if(window.cv&&window.cv.Mat){o("ready");return}if(o("loading"),window.Module={onRuntimeInitialized:()=>{o("ready")}},!document.getElementById("opencv-script")){const R=document.createElement("script");R.id="opencv-script",R.src="https://docs.opencv.org/3.4.16/opencv.js",R.async=!0,document.body.appendChild(R)}},[]);const C=()=>{if(!window.cv||!m.current||!s.imageUrl)return!1;try{const R=window.cv,N=x.current;N.refGray&&N.refGray.delete(),N.refKeypoints&&N.refKeypoints.delete(),N.refDescriptors&&N.refDescriptors.delete(),N.orbDetector&&N.orbDetector.delete(),N.matcher&&N.matcher.delete();const H=document.createElement("canvas"),F=H.getContext("2d"),z=m.current,w=320;let I=z.naturalWidth||z.width,q=z.naturalHeight||z.height;(I>w||q>w)&&(I>q?(q=Math.round(q*w/I),I=w):(I=Math.round(I*w/q),q=w)),H.width=I,H.height=q,F.drawImage(z,0,0,I,q);const k=R.imread(H),Z=new R.Mat;R.cvtColor(k,Z,R.COLOR_RGBA2GRAY);const le=new R.ORB,pe=new R.KeyPointVector,j=new R.Mat;le.detectAndCompute(Z,new R.Mat,pe,j);const oe=new R.BFMatcher(R.NORM_HAMMING,!0);return x.current={refGray:Z,refKeypoints:pe,refDescriptors:j,orbDetector:le,matcher:oe},k.delete(),!0}catch{return!1}},L=R=>{if(R.length<4)return!1;let N=[];for(let H=0;H<4;H++){let F=R[(H+1)%4].x-R[H].x,z=R[(H+1)%4].y-R[H].y,w=R[(H+2)%4].x-R[(H+1)%4].x,I=R[(H+2)%4].y-R[(H+1)%4].y;N.push(F*I-z*w>0)}return N.every(H=>H===N[0])},S=async()=>{if(!s.imageUrl){t("請先上傳辨識圖片！");return}if(r==="ready"){if(o("testing"),e("testing"),M.current={frames:0,lockedFrames:0},!C()){t("特徵提取失敗，請嘗試更換辨識圖片。"),o("ready");return}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t("⚠️ 無法啟動相機！請確認環境是否支援。"),o("ready");return}try{if(window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function")try{await window.DeviceOrientationEvent.requestPermission()}catch(N){console.warn("Device orientation permission was not granted.",N)}const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});v.current=R,f.current.srcObject=R,f.current.play(),f.current.onloadedmetadata=()=>{h.current.width=f.current.videoWidth,h.current.height=f.current.videoHeight,D()}}catch{t("無法存取相機。"),o("ready")}}},_=()=>{y.current&&(cancelAnimationFrame(y.current),y.current=null),v.current&&(v.current.getTracks().forEach(R=>R.stop()),v.current=null),f.current&&(f.current.srcObject=null),M.current.frames>30?M.current.lockedFrames/M.current.frames>.2?e("success"):e("unstable"):M.current.frames>0&&e("untested"),o("ready"),h.current&&h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height)};Ie.useEffect(()=>()=>{_();const R=x.current;R.refGray&&(R.refGray.delete(),R.refKeypoints.delete(),R.refDescriptors.delete(),R.orbDetector.delete(),R.matcher.delete())},[]);const D=()=>{const R=window.cv,N=x.current,H=f.current,F=h.current,z=F.getContext("2d");let w=performance.now(),I=null;const q=.15;let k=0;const Z=3;let le=0;const pe=10;let j=null;const oe=()=>{if(!H||!H.srcObject||!N.refDescriptors)return;const te=performance.now(),se=Math.round(1e3/(te-w));w=te,z.drawImage(H,0,0,F.width,F.height);let fe=0,ce=0,G=!1,ne=null,$e=k%Z===0;if(k++,$e){try{const Ue=R.imread(F),de=new R.Mat;R.cvtColor(Ue,de,R.COLOR_RGBA2GRAY);const be=new R.KeyPointVector,ye=new R.Mat;if(N.orbDetector.detectAndCompute(de,new R.Mat,be,ye),!ye.empty()&&ye.rows>0){const ke=new R.DMatchVector;N.matcher.match(N.refDescriptors,ye,ke);let ot=[];for(let wt=0;wt<ke.size();wt++)ot.push(ke.get(wt));ot.sort((wt,yt)=>wt.distance-yt.distance);let et=ot.filter(wt=>wt.distance<=50).slice(0,60);if(fe=et.length,et.length>=12){const wt=[],yt=[];for(let Rt=0;Rt<et.length;Rt++){let en=et[Rt];wt.push(N.refKeypoints.get(en.queryIdx).pt.x,N.refKeypoints.get(en.queryIdx).pt.y),yt.push(be.get(en.trainIdx).pt.x,be.get(en.trainIdx).pt.y)}const Et=R.matFromArray(wt.length/2,1,R.CV_32FC2,wt),jt=R.matFromArray(yt.length/2,1,R.CV_32FC2,yt),bt=new R.Mat,Bt=R.findHomography(Et,jt,R.RANSAC,4,bt);for(let Rt=0;Rt<bt.rows;Rt++)bt.data[Rt]===1&&ce++;if(!Bt.empty()&&ce>=10&&ce/et.length>=.35){const Rt=N.refGray.cols,en=N.refGray.rows,J=[0,0,1,Rt,0,1,Rt,en,1,0,en,1];let Lt=[];for(let _t=0;_t<4;_t++){let Ft=J[_t*3],We=J[_t*3+1],Ot=Bt.data64F[0]*Ft+Bt.data64F[1]*We+Bt.data64F[2],U=Bt.data64F[3]*Ft+Bt.data64F[4]*We+Bt.data64F[5],E=Bt.data64F[6]*Ft+Bt.data64F[7]*We+Bt.data64F[8];Lt.push({x:Ot/E,y:U/E})}L(Lt)&&(ne=Lt,G=!0)}Et.delete(),jt.delete(),bt.delete(),Bt.delete()}ke.delete()}Ue.delete(),de.delete(),be.delete(),ye.delete()}catch{}G?(j=ne,le=pe):le>0?le--:j=null}const rt=j!==null;if(rt){if(!I)I=JSON.parse(JSON.stringify(j));else for(let Ue=0;Ue<4;Ue++)I[Ue].x=I[Ue].x*(1-q)+j[Ue].x*q,I[Ue].y=I[Ue].y*(1-q)+j[Ue].y*q;z.strokeStyle="#00ffcc",z.lineWidth=3,z.shadowBlur=10,z.shadowColor="#00ffcc",z.beginPath(),z.moveTo(I[0].x,I[0].y),z.lineTo(I[1].x,I[1].y),z.lineTo(I[2].x,I[2].y),z.lineTo(I[3].x,I[3].y),z.closePath(),z.stroke(),z.shadowBlur=0}else{I=null;const Ue=Math.min(F.width,F.height)*.5,de=(F.width-Ue)/2,be=(F.height-Ue)/2;z.strokeStyle="rgba(255, 70, 70, 0.5)",z.lineWidth=2,z.strokeRect(de,be,Ue,Ue)}u(Ue=>({fps:se,matches:$e?fe:Ue.matches,inliers:$e?ce:Ue.inliers,status:rt?"LOCKED":"SEARCHING"})),M.current.frames++,rt&&M.current.lockedFrames++,y.current=requestAnimationFrame(oe)};oe()};return p.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden bg-slate-950 shadow-md",children:[s.imageUrl&&p.jsx("img",{ref:m,src:s.imageUrl,alt:"ref",className:"hidden"}),p.jsxs("div",{className:"bg-slate-900/80 px-3 py-2 border-b border-slate-800 flex justify-between items-center",children:[p.jsx("h3",{className:"text-[10px] font-bold text-slate-300 tracking-wider",children:"AR ENGINE TESTER"}),p.jsx(Nf,{status:s.recognitionStatus})]}),p.jsxs("div",{className:"p-3 space-y-3",children:[p.jsxs("div",{className:"relative bg-[#05070f] border border-slate-800 rounded-lg aspect-video w-full min-h-[160px] flex flex-col items-center justify-center font-mono text-[10px] text-cyan-500/70 overflow-hidden shadow-inner",children:[p.jsx("video",{ref:f,playsInline:!0,muted:!0,className:"hidden"}),p.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover ${r!=="testing"&&"hidden"}`}),r==="testing"&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,24,48,0.1)_0%,rgba(10,13,20,0.7)_100%)] pointer-events-none z-10"}),p.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#00ffcc] animate-[scan_2s_linear_infinite] z-10"})]}),(r==="idle"||r==="ready"||r==="loading")&&p.jsx("div",{className:"text-center z-20",children:r==="loading"?p.jsxs("div",{className:"animate-pulse text-yellow-500",children:[p.jsx("span",{className:"animate-spin inline-block w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full mr-2"}),"載入中..."]}):p.jsxs(p.Fragment,{children:[p.jsx(Rf,{className:"w-8 h-8 mx-auto mb-2 opacity-30"}),p.jsx("p",{className:"text-xs",children:"READY"})]})}),r==="testing"&&p.jsxs("div",{className:"absolute top-2 left-3 z-20 flex flex-col space-y-1 text-[10px] text-slate-300 drop-shadow-md",children:[p.jsxs("span",{className:l.status==="LOCKED"?"text-cyan-400 font-bold":"text-red-400 font-bold",children:["STATE: ",l.status]}),p.jsxs("span",{children:["INLIERS: ",l.inliers]}),p.jsxs("span",{children:["FPS: ",l.fps]})]})]}),r==="testing"?p.jsx("button",{onClick:_,className:"w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold transition-colors",children:"停止測試"}):p.jsxs("button",{onClick:S,disabled:r==="loading"||!s.imageUrl,className:"w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 transition-colors flex items-center justify-center",children:[p.jsx(oE,{className:"w-4 h-4 mr-2 text-cyan-400"})," ",r==="loading"?"準備中...":"實測相機"]})]}),p.jsx("style",{dangerouslySetInnerHTML:{__html:"@keyframes scan { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(240px); opacity: 0; } }"}})]})}function z0({buildings:s,systemConfig:e,onMenuClick:t}){var hr,Ti;const[r,o]=Ie.useState("idle"),[l,u]=Ie.useState(null),[f,h]=Ie.useState(null),[m,v]=Ie.useState([]),[y,x]=Ie.useState(!1),[M,C]=Ie.useState(0),[L,S]=Ie.useState("idle"),[_,D]=Ie.useState("checking"),[R,N]=Ie.useState("idle"),[H,F]=Ie.useState(0),[z,w]=Ie.useState(0),[I,q]=Ie.useState({}),[k,Z]=Ie.useState(!1),[le,pe]=Ie.useState(""),j=Ie.useRef(null),oe=Ie.useRef(null),te=Ie.useRef(null),se=Ie.useRef(null),fe=Ie.useRef(null),ce=Ie.useRef(null),G=Ie.useRef(null),ne=Ie.useRef(null),$e=Ie.useRef(null),rt=Ie.useRef(null),Ue=Ie.useRef(!1),de=Ie.useRef([]),be=Ie.useRef({matcher:null}),ye=Ie.useRef(null),ke=Ie.useRef(null),ot=Ie.useRef(!1),et=Ie.useRef({}),wt=Ie.useRef([]),yt=Ie.useRef({nodes:{},edges:[]}),Et=Ie.useRef(null),jt=Ie.useRef("idle"),bt=Ie.useRef({heading:null,pitch:0,roll:0}),Bt=Ie.useRef(null),Rt=If.useMemo(()=>{const X={},De=[];return s.forEach(Me=>Me.floors.forEach(qe=>{var W,re;const ct=qe.bounds||{blX:0,blY:0,trX:100,trY:100},T=(K,Y)=>({physX:ct.blX+K*(ct.trX-ct.blX),physY:ct.trY-Y*(ct.trY-ct.blY)});qe.markers.forEach(K=>{K.enabled&&(X[K.id]={...K,...T(K.x,K.y),isMarker:!0,bId:Me.id,fId:qe.id,bName:Me.name,fName:qe.name,bounds:ct})}),(W=qe.waypoints)==null||W.forEach(K=>{X[K.id]={...K,...T(K.x,K.y),isMarker:!1,bId:Me.id,fId:qe.id,bName:Me.name,fName:qe.name,bounds:ct}}),(re=qe.edges)==null||re.forEach(K=>{De.push({...K,fId:qe.id})})})),{nodes:X,edges:De}},[s]);Ie.useEffect(()=>{yt.current=Rt},[Rt]),Ie.useEffect(()=>{wt.current=m},[m]),Ie.useEffect(()=>{w(0)},[l,m]),Ie.useEffect(()=>{if(!l||m.length<2){F(0);return}const X=performance.now(),De=Me=>{F((Me-X)/5200%1),Bt.current=requestAnimationFrame(De)};return Bt.current=requestAnimationFrame(De),()=>{Bt.current&&cancelAnimationFrame(Bt.current)}},[l,m]),Ie.useEffect(()=>{Et.current=null,ke.current=null,en("idle")},[l]);const en=X=>{jt.current!==X&&(jt.current=X,S(X))},J=()=>new URLSearchParams(window.location.search).get("debugAR")==="1"||localStorage.getItem("debugAR")==="1",Lt=X=>{J()&&(et.current={...et.current,...X,isSecureContext:window.isSecureContext,lastUpdateTime:new Date().toLocaleTimeString()},q(et.current))};Ie.useEffect(()=>{let X=!0;return(async()=>{if(!navigator.xr||!window.isSecureContext){X&&D("unsupported");return}try{const Me=await navigator.xr.isSessionSupported("immersive-ar");X&&D(Me?"supported":"unsupported")}catch{X&&D("unsupported")}})(),()=>{X=!1}},[]);const _t=(X,De)=>{const{nodes:Me,edges:qe}=Rt,ct={};Object.keys(Me).forEach(Pe=>{ct[Pe]={}}),qe.forEach(Pe=>{if(Me[Pe.start]&&Me[Pe.end]){const nt=Math.hypot(Me[Pe.start].physX-Me[Pe.end].physX,Me[Pe.start].physY-Me[Pe.end].physY);ct[Pe.start][Pe.end]=nt,ct[Pe.end][Pe.start]=nt}});const T={};Object.values(Me).forEach(Pe=>{Pe.isVerticalShaft&&Pe.shaftId&&(T[Pe.shaftId]||(T[Pe.shaftId]=[]),T[Pe.shaftId].push(Pe.id))}),Object.values(T).forEach(Pe=>{for(let nt=0;nt<Pe.length;nt++)for(let Je=nt+1;Je<Pe.length;Je++)ct[Pe[nt]][Pe[Je]]=5,ct[Pe[Je]][Pe[nt]]=5});const W=Pe=>Object.keys(ct[Pe]).length>0,re=Pe=>{if(W(Pe))return Pe;const nt=Me[Pe];let Je=1/0,St=Pe;return Object.keys(Me).forEach(kt=>{if(Me[kt].fId===nt.fId&&W(kt)){const Kt=Math.hypot(Me[kt].physX-nt.physX,Me[kt].physY-nt.physY);Kt<Je&&(Je=Kt,St=kt)}}),St},K=re(X),Y=re(De),Ce={},Ge={},Ae=new Set(Object.keys(Me));for(Object.keys(Me).forEach(Pe=>{Ce[Pe]=1/0,Ge[Pe]=null}),Ce[K]=0;Ae.size>0;){let Pe=null;if(Ae.forEach(nt=>{(Pe===null||Ce[nt]<Ce[Pe])&&(Pe=nt)}),Ce[Pe]===1/0||Pe===Y)break;Ae.delete(Pe),Object.entries(ct[Pe]).forEach(([nt,Je])=>{if(Ae.has(nt)){const St=Ce[Pe]+Je;St<Ce[nt]&&(Ce[nt]=St,Ge[nt]=Pe)}})}const Ke=[];let Xe=Y;for(;Xe;)Ke.unshift(Xe),Xe=Ge[Xe];return Ke.length===0||Ke[0]!==K?[]:(K!==X&&Ke.unshift(X),Y!==De&&Ke.push(De),Ke)};Ie.useEffect(()=>{v(f&&l&&f!==l?_t(f,l):[])},[f,l,Rt]),Ie.useEffect(()=>{if(!window.cv||!window.cv.Mat){if(o("loading"),window.Module={onRuntimeInitialized:()=>o("idle")},!document.getElementById("opencv-script")){const qe=document.createElement("script");qe.id="opencv-script",qe.src="https://docs.opencv.org/3.4.16/opencv.js",qe.async=!0,document.body.appendChild(qe)}}else o("idle");let X=0;const De=qe=>{const ct=hE(qe);Lt({alpha:qe.alpha,beta:qe.beta,gamma:qe.gamma,webkitCompassHeading:qe.webkitCompassHeading,currentHeading:ct}),ct!=null&&(ke.current==null&&(ke.current=ct),bt.current={heading:ct,pitch:qe.beta||0,roll:qe.gamma||0},ye.current=ct,ot.current||(ot.current=!0,Z(!0)),Lt({baseHeading:ke.current,relativeHeading:L0(ct,ke.current),orientationEventActive:!0}))};window.DeviceOrientationEvent&&(window.addEventListener("deviceorientation",De,!0),"ondeviceorientationabsolute"in window&&window.addEventListener("deviceorientationabsolute",De,!0));const Me=setInterval(()=>{if(!ot.current)return;let qe=ye.current;if(qe==null)return;let ct=qe-(X%360+360)%360;ct>180&&(ct-=360),ct<-180&&(ct+=360),X+=ct,C(X)},200);return()=>{E(),clearInterval(Me),window.removeEventListener("deviceorientation",De,!0),"ondeviceorientationabsolute"in window&&window.removeEventListener("deviceorientationabsolute",De,!0)}},[]);const Ft=async()=>{const X=window.cv;if(!X)return!1;de.current=[],be.current.matcher=new X.BFMatcher(X.NORM_HAMMING,!0);const Me=Object.values(Rt.nodes).filter(qe=>qe.isMarker&&qe.imageUrl).map(qe=>new Promise(ct=>{const T=new Image;T.onload=()=>{try{const W=document.createElement("canvas"),re=W.getContext("2d");W.width=320,W.height=Math.round(320*(T.height/T.width)),re.drawImage(T,0,0,W.width,W.height);const K=X.imread(W),Y=new X.Mat;X.cvtColor(K,Y,X.COLOR_RGBA2GRAY);const Ce=new X.ORB,Ge=new X.KeyPointVector,Ae=new X.Mat;Ce.detectAndCompute(Y,new X.Mat,Ge,Ae),de.current.push({markerId:qe.id,gray:Y,kp:Ge,des:Ae,orb:Ce,width:Y.cols,height:Y.rows}),K.delete(),ct(!0)}catch{ct(!1)}},T.onerror=()=>ct(!1),T.src=qe.imageUrl}));return await Promise.all(Me),de.current.length>0},We=async()=>{const X={orientationPermission:"not-required",motionPermission:"not-required",granted:!0,reason:null};if(!window.isSecureContext&&location.hostname!=="localhost")return X.granted=!1,X.reason="AR 方向感測需要 HTTPS 或 localhost。",Lt(X),X;try{window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function"&&(X.orientationPermission=await window.DeviceOrientationEvent.requestPermission(),X.orientationPermission!=="granted"&&(X.granted=!1)),window.DeviceMotionEvent&&typeof window.DeviceMotionEvent.requestPermission=="function"&&(X.motionPermission=await window.DeviceMotionEvent.requestPermission(),X.motionPermission!=="granted"&&(X.granted=!1))}catch(De){X.granted=!1,X.reason=(De==null?void 0:De.message)||"方向感測授權失敗。"}return Lt(X),X},Ot=async()=>{const X=await We();return X.granted?pe("已送出動作與方向啟用請求，請轉動手機確認羅盤資料是否開始變化。"):pe(X.reason||"瀏覽器未允許動作與方向存取，請在 Safari 設定中開啟「動作與方向存取」。"),X},U=async()=>{if(r!=="idle")return;if(o("loading"),!await Ft()){o("idle"),alert("無法提取特徵");return}try{await Ot();const De=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640}},audio:!1});te.current=De,j.current.srcObject=De,j.current.play(),j.current.onloadedmetadata=()=>{oe.current.width=j.current.videoWidth,oe.current.height=j.current.videoHeight,o("scanning"),Te()}}catch{alert("無相機權限"),o("idle")}},E=()=>{se.current&&cancelAnimationFrame(se.current),te.current&&te.current.getTracks().forEach(X=>X.stop()),Et.current=null,ke.current=null,en("idle"),o("idle")},ae=(X,De,Me=!1)=>{if(!De||De.length<2)return!1;const qe=O0(De);if(X.save(),X.beginPath(),De.forEach((ct,T)=>{T===0?X.moveTo(ct.x,ct.y):X.lineTo(ct.x,ct.y)}),X.strokeStyle=Me?"rgba(255, 255, 255, 0.18)":"rgba(255, 255, 255, 0.24)",X.lineWidth=Me?8:10,X.lineCap="round",X.lineJoin="round",X.shadowBlur=Me?8:12,X.shadowColor="#ffffff",X.stroke(),qe>8){const ct=Me?86:74,T=Me?26:30,W=Date.now()/18%ct;X.shadowBlur=Me?10:16,X.shadowColor="#ffffff",X.fillStyle="rgba(255,255,255,0.98)",X.strokeStyle="rgba(0,0,0,0.34)",X.lineWidth=2.5;for(let re=W;re<qe;re+=ct){const K=F0(De,re);K&&(X.save(),X.translate(K.x,K.y),X.rotate(K.angle),X.beginPath(),X.moveTo(T*.55,0),X.lineTo(-T*.35,-T*.32),X.lineTo(-T*.15,0),X.lineTo(-T*.35,T*.32),X.closePath(),X.stroke(),X.fill(),X.restore())}}return X.restore(),!0},Ee=(X,De=[])=>{De.forEach(Me=>{if(!Me||typeof Me.x!="number"||typeof Me.y!="number")return;const qe=Me.type==="destination",ct=qe?"#ef4444":"#a855f7",T=Me.label||(qe?"目的地":"路段末端");X.save(),X.translate(Me.x,Me.y),X.shadowBlur=16,X.shadowColor=ct,X.fillStyle=ct,X.strokeStyle="#ffffff",X.lineWidth=3,X.beginPath(),X.arc(0,-18,qe?15:13,0,Math.PI*2),X.fill(),X.stroke(),X.beginPath(),X.moveTo(-8,-6),X.lineTo(0,12),X.lineTo(8,-6),X.closePath(),X.fill(),X.stroke(),X.fillStyle="#ffffff",X.shadowBlur=0,X.font="bold 18px sans-serif",X.textAlign="center",X.textBaseline="middle",X.fillText(qe?"!":"↑",0,-18),X.font="bold 13px sans-serif";const W=X.measureText(T).width+18;X.fillStyle="rgba(15, 23, 42, 0.86)",X.strokeStyle="rgba(255, 255, 255, 0.35)",X.lineWidth=1,X.beginPath(),X.roundRect(-W/2,20,W,26,13),X.fill(),X.stroke(),X.fillStyle="#ffffff",X.fillText(T,0,33),X.restore()})},Ne=(X,De)=>{!De||typeof De.x!="number"||typeof De.y!="number"||(X.save(),X.translate(De.x,De.y),X.shadowBlur=14,X.shadowColor="#22d3ee",X.strokeStyle="rgba(255,255,255,0.95)",X.fillStyle="rgba(34,211,238,0.95)",X.lineWidth=3,X.beginPath(),X.arc(0,0,10,0,Math.PI*2),X.fill(),X.stroke(),X.beginPath(),X.arc(0,0,20,0,Math.PI*2),X.strokeStyle="rgba(34,211,238,0.55)",X.stroke(),X.restore())},Be=X=>{const De=Et.current;if(!De||!De.points||De.points.length<2)return!1;const Me=bt.current,qe=ot.current&&Me.heading!=null&&De.orientation.heading!=null,ct=qe?D0(Me.heading,De.orientation.heading):0,T=qe?Me.pitch-De.orientation.pitch:0,W=qe?Me.roll-De.orientation.roll:0,re=(W-ct)*Math.PI/180,K=Math.cos(re),Y=Math.sin(re),Ce=De.anchor||De.points[0],Ge=X.canvas.width/2,Ae=X.canvas.height/2,Ke=Ce.x*X.canvas.width,Xe=Ce.y*X.canvas.height,Pe=Math.max(X.canvas.width,X.canvas.height)*.95,nt=X.canvas.width*1.8,Je=X.canvas.height*1.2,St=Math.max(-nt,Math.min(nt,Math.tan(ct*Math.PI/180)*Pe)),kt=Math.max(-Je,Math.min(Je,Math.tan(T*Math.PI/180)*Pe*.75)),Gt=((P,ee)=>{const we=P-Ge,_e=ee-Ae;return{x:Ge+we*K-_e*Y-St,y:Ae+we*Y+_e*K+kt}})(Ke,Xe),Ct=P=>{const ee=P.x*X.canvas.width,we=P.y*X.canvas.height,_e=ee-Ke,Ve=we-Xe;return{x:Gt.x+_e*K-Ve*Y,y:Gt.y+_e*Y+Ve*K}},Ze=De.points.map(Ct),tn=(De.pins||[]).map(Ct).map((P,ee)=>{var we,_e;return{...P,type:(we=De.pins[ee])==null?void 0:we.type,label:(_e=De.pins[ee])==null?void 0:_e.label}}),Mt=L0(Me.heading,De.baseHeading),b=De.targetBearing!=null&&Mt!=null?D0(De.targetBearing,Mt):null;Lt({currentHeading:Me.heading,baseHeading:De.baseHeading,relativeHeading:Mt,targetBearing:De.targetBearing,headingDelta:ct,arrowRotation:b,finalArrowRotation:b==null?null:b+W,currentARMode:"camera-overlay"});const O=ae(X,Ze,!0);return O&&(Ne(X,Gt),Ee(X,tn)),O},je=()=>{if(wt.current.length>1)return wt.current;const X=Object.values(yt.current.nodes).filter(Me=>Me.isMarker&&Me.id!==l).map(Me=>Me.id),De=f||X[0];return!De||!l||De===l?[]:_t(De,l)},xe=()=>{const X=je(),De=yt.current.nodes,Me=X.map(Ae=>De[Ae]).filter(Boolean);if(Me.length<2)return null;const qe=Me[0],ct=.08,T=Me.map(Ae=>new ie((Ae.physX-qe.physX)*ct,.03,-(Ae.physY-qe.physY)*ct)),W=new Ps,re=U0(T,.045,16777215,.18),K=U0(T,.016,16777215,.36);re&&W.add(re),K&&W.add(K);const Y=vE(T);Y&&W.add(Y);const Ce=new ri(new cc(.1,24,24),new ss({color:2282478}));Ce.position.copy(T[0]),Ce.position.y+=.08,W.add(Ce);const Ge=new ri(new cc(.12,24,24),new ss({color:16731471}));return Ge.position.copy(T[T.length-1]),Ge.position.y+=.1,W.add(Ge),W},Se=async()=>{const X=ce.current;if(X)try{await X.end()}catch{}else tt()},tt=()=>{ne.current&&ne.current.traverse(X=>{X.geometry&&X.geometry.dispose(),X.material&&X.material.dispose()}),G.current&&(G.current.setAnimationLoop(null),G.current.dispose(),G.current.domElement.remove()),ce.current=null,G.current=null,ne.current=null,$e.current=null,rt.current=null,Ue.current=!1,N("idle")},st=async()=>{var X;if(!(_!=="supported"||!navigator.xr||ce.current)){N("starting"),E();try{const De={requiredFeatures:["hit-test"],optionalFeatures:fe.current?["local-floor","dom-overlay","anchors"]:["local-floor","anchors"]};fe.current&&(De.domOverlay={root:fe.current});const Me=await navigator.xr.requestSession("immersive-ar",De),qe=new $w({alpha:!0,antialias:!0});qe.xr.enabled=!0,qe.setPixelRatio(window.devicePixelRatio||1),qe.setSize(window.innerWidth,window.innerHeight),qe.domElement.className="absolute inset-0 h-full w-full",(X=fe.current)==null||X.appendChild(qe.domElement),await qe.xr.setSession(Me);const ct=new x_,T=new Fi,W=new ri(new Yf(.18,.22,32).rotateX(-Math.PI/2),new ss({color:65484,transparent:!0,opacity:.85}));W.matrixAutoUpdate=!1,W.visible=!1,ct.add(W);const re=await Me.requestReferenceSpace("local-floor").catch(()=>Me.requestReferenceSpace("local")),K=await Me.requestReferenceSpace("viewer"),Y=await Me.requestHitTestSource({space:K});ce.current=Me,G.current=qe,$e.current=Y,rt.current=re,N("placing");const Ce=Ge=>{if(Ue.current)return;const Ae=xe();if(!Ae){N("no-route");return}Ae.matrix.fromArray(Ge),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),ct.add(Ae),ne.current=Ae,Ue.current=!0,N("anchored")};Me.addEventListener("select",()=>{W.visible&&Ce(W.matrix.elements)}),Me.addEventListener("end",tt),qe.setAnimationLoop((Ge,Ae)=>{if(ne.current&&ne.current.traverse(Ke=>_E(Ke,Ge)),Ae&&!Ue.current){const Ke=Ae.getHitTestResults(Y);if(Ke.length){const Xe=Ke[0].getPose(re);Xe&&(W.visible=!0,W.matrix.fromArray(Xe.transform.matrix))}else W.visible=!1}else W.visible=!1;qe.render(ct,T)})}catch(De){console.warn("Unable to start WebXR AR mode.",De),tt(),N("failed")}}},Te=()=>{const X=window.cv,De=j.current,Me=oe.current,qe=Me.getContext("2d"),ct=be.current.matcher;let T=0,W=null,re=null,K=0,Y=0;const Ce=()=>{if(!De||!De.srcObject)return;qe.drawImage(De,0,0,Me.width,Me.height);let Ge=!1;if(T%4===0){try{const Xe=X.imread(Me),Pe=new X.Mat;X.cvtColor(Xe,Pe,X.COLOR_RGBA2GRAY);const nt=new X.KeyPointVector,Je=new X.Mat;if(de.current[0].orb.detectAndCompute(Pe,new X.Mat,nt,Je),!Je.empty())for(let St of de.current){const kt=new X.DMatchVector;ct.match(St.des,Je,kt);let Kt=[];for(let Ct=0;Ct<kt.size();Ct++)Kt.push(kt.get(Ct));Kt.sort((Ct,Ze)=>Ct.distance-Ze.distance);const Gt=Kt.filter(Ct=>Ct.distance<=50).slice(0,60);if(Gt.length>=12){const Ct=[],Ze=[];for(let ee of Gt)Ct.push(St.kp.get(ee.queryIdx).pt.x,St.kp.get(ee.queryIdx).pt.y),Ze.push(nt.get(ee.trainIdx).pt.x,nt.get(ee.trainIdx).pt.y);const tn=X.matFromArray(Ct.length/2,1,X.CV_32FC2,Ct),Mt=X.matFromArray(Ze.length/2,1,X.CV_32FC2,Ze),b=new X.Mat,O=X.findHomography(tn,Mt,X.RANSAC,4,b);let P=0;for(let ee=0;ee<b.rows;ee++)b.data[ee]===1&&P++;!O.empty()&&P>=10&&(W&&W.delete(),W=O.clone(),re=St.markerId,h(re),Ge=!0),tn.delete(),Mt.delete(),b.delete(),O.delete()}if(kt.delete(),Ge)break}Xe.delete(),Pe.delete(),nt.delete(),Je.delete()}catch{}Ge?(Y=8,K=Date.now()):Y>0?Y--:(W&&(W.delete(),W=null),re=null)}T++,!K&&!Et.current&&(W&&(W.delete(),W=null),re=null);const Ae=yt.current,Ke=wt.current;if(W&&re&&Ke.length>1){const Xe=Ae.nodes[re],Pe=de.current.find(nt=>nt.markerId===re);if(Xe&&Pe){const nt=Pe.width/.3,Je=[],St=[],kt=Ke.indexOf(re),Kt=kt>=0?kt:0,Gt=pE(Ae.nodes[Ke[Kt]],Ae.nodes[Ke[Kt+1]]);for(let Ct=0;Ct<Ke.length;Ct++){const Ze=Ke[Ct],tn=Ae.nodes[Ze];if(!tn||tn.fId!==Xe.fId)break;const Mt=tn.physX-Xe.physX,b=-(tn.physY-Xe.physY),O=Pe.width/2+Mt*nt,P=Pe.height/2+b*nt,ee=W.data64F,we=ee[6]*O+ee[7]*P+ee[8];if(we>0){const _e=(ee[0]*O+ee[1]*P+ee[2])/we,Ve=(ee[3]*O+ee[4]*P+ee[5])/we;Je.push({x:_e,y:Ve}),St.push({x:_e,y:Ve,nodeId:Ze})}}if(Je.length>=2){const Ct=Et.current,Ze=Je.map(_e=>({x:_e.x/Me.width,y:_e.y/Me.height})),tn=Ze[0],Mt=St[St.length-1],b=St.find(_e=>_e.nodeId===l),O=[];Mt&&O.push({x:Mt.x,y:Mt.y,type:b?"destination":"endpoint",label:b?"目的地":"路段末端"}),b&&b!==Mt&&O.push({x:b.x,y:b.y,type:"destination",label:"目的地"}),ke.current==null&&bt.current.heading!=null&&(ke.current=bt.current.heading);const P=B0(Ct==null?void 0:Ct.points,Ze,Ct?.45:1);P.length>0&&(P[0]=tn);const ee=O.map(_e=>({x:_e.x/Me.width,y:_e.y/Me.height,type:_e.type,label:_e.label})),we={markerId:re,orientation:{...bt.current},baseHeading:ke.current,targetBearing:Gt,updatedAt:Date.now(),anchor:tn,points:P,pins:B0(Ct==null?void 0:Ct.pins,ee,Ct?.45:1)};Et.current={...we},Be(qe),Lt({arrowElementFound:!0,targetBearing:Gt,baseHeading:ke.current,currentARMode:"camera-overlay"}),en("locked")}}}else{const Xe=Ke.length>1&&Be(qe);if(en(Xe?"holding":"searching"),!Xe){const Pe=Math.min(Me.width,Me.height)*.6;qe.strokeStyle="rgba(0, 255, 204, 0.4)",qe.lineWidth=2,qe.strokeRect((Me.width-Pe)/2,(Me.height-Pe)/2,Pe,Pe)}}se.current=requestAnimationFrame(Ce)};Ce()};if(!l){const X=Object.values(Rt.nodes).filter(De=>De.isMarker).reduce((De,Me)=>{const qe=`${Me.bName} - ${Me.fName}`;return De[qe]||(De[qe]=[]),De[qe].push(Me),De},{});return p.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-slate-950",children:[p.jsx("div",{className:"absolute top-4 left-4 z-40 md:hidden",children:p.jsx("button",{onClick:t,className:"bg-slate-800 text-slate-300 p-2.5 rounded-lg border border-slate-700 hover:text-white shadow-lg transition-colors",children:p.jsx(go,{className:"w-5 h-5"})})}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-6 pt-20",children:[p.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center md:mt-0 mt-2",children:[p.jsx(mo,{className:"mr-3 text-cyan-400"})," 請選擇目的地"]}),Object.keys(X).length===0?p.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50 mt-10",children:[p.jsx(va,{className:"w-16 h-16 text-slate-700 mb-4"}),p.jsx("h3",{className:"text-lg font-bold text-slate-400 mb-2",children:"目前尚無可用目的地"}),p.jsxs("p",{className:"text-sm text-slate-500 max-w-sm",children:["系統中尚未建立任何啟用中的 AR 點位。",p.jsx("br",{}),"請點擊左上角選單，切換至「平面圖管理」進行新增。"]})]}):Object.entries(X).map(([De,Me])=>p.jsxs("div",{className:"mb-6",children:[p.jsx("h3",{className:"text-slate-400 font-bold mb-3",children:De}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Me.map(qe=>p.jsxs("button",{onClick:()=>u(qe.id),className:"p-4 bg-slate-900 border border-slate-800 rounded-xl flex text-left hover:border-cyan-500 hover:bg-slate-800 transition-colors group",children:[p.jsx("span",{className:"font-mono text-cyan-400 font-bold mr-3 group-hover:scale-110 transition-transform",children:qe.code}),p.jsx("div",{className:"flex-1",children:p.jsx("div",{className:"text-white font-bold",children:qe.title})})]},qe.id))})]},De))]})]})}const Re=Rt.nodes[l],dt=f?Rt.nodes[f]:null,Nt=m.length>1?m[1]:null;Nt&&Rt.nodes[Nt];const ft=X=>{if(!X)return"";if(X.fName)return X.fName;for(const De of s){const Me=De.floors.find(qe=>qe.id===X.fId);if(Me!=null&&Me.name)return Me.name}return X.fId||""},B=m.map(X=>Rt.nodes[X]).filter(Boolean),ze=gE(B),ge=[];B.forEach(X=>{const De=ge[ge.length-1];!De||De.floorId!==X.fId?ge.push({floorId:X.fId,floorName:ft(X),nodes:[X]}):De.nodes.push(X)});const it=dt||Re?{floorId:(dt||Re).fId,floorName:ft(dt||Re),nodes:[dt||Re]}:null,Le=ge.length?Math.min(z,ge.length-1):0,ve=ge[Le]||it,Qe=ge[Le-1]||null,vt=ge[Le+1]||null,Ht=(hr=ve==null?void 0:ve.nodes)==null?void 0:hr[ve.nodes.length-1];(Ti=ve==null?void 0:ve.nodes)==null||Ti[0];const Yt=vt?Kn(vt.floorName)-Kn(ve.floorName):0,_n=Yt>0?"上樓":Yt<0?"下樓":"前往",Bn=Qe?Kn(ve.floorName)-Kn(Qe.floorName):0,mi=Bn>0?"上樓":Bn<0?"下樓":"前往",Ji=f===l?"已抵達目的地":vt?`請依照 ${ve.floorName} 平面圖前往轉乘點，接著${_n}至 ${vt.floorName}`:ve?`請依照 ${ve.floorName} 平面圖前往目的地`:"請先掃描導引圖以建立路徑",ki=!!(vt||Qe);let Dn=ve?ve.floorId:dt?dt.fId:Re.fId,Jn=null,Bi=ve?ve.floorName:dt?dt.fName:Re.fName,si={blX:0,blY:0,trX:100,trY:100};s.forEach(X=>X.floors.forEach(De=>{De.id===Dn&&(Jn=De.imageUrl,si=ns(De),Bi=De.name)}));const Sn=(X,De)=>{const Me=si.trX-si.blX,qe=si.trY-si.blY,ct=Me!==0?(X-si.blX)/Me*100:50,T=qe!==0?(si.trY-De)/qe*100:50;return{x:ct,y:T}},Qn=(ve==null?void 0:ve.nodes)||[],zi=Qn.filter(X=>X&&X.fId===Dn).map(X=>Sn(X.physX,X.physY)),bi=O0(zi),gi=dt&&dt.fId===Dn?dt:zi.length?null:Re,ai=bi>0?F0(zi,H*bi):gi?Sn(gi.physX,gi.physY):null;return p.jsxs("div",{className:"flex-1 bg-black flex flex-col relative overflow-hidden",children:[p.jsx("div",{className:"absolute top-4 left-4 z-40",children:p.jsx("button",{onClick:()=>{E(),u(null),h(null)},className:"bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors",children:"重新選擇目的地"})}),p.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[p.jsx("div",{ref:fe,className:`absolute inset-0 z-10 ${R==="idle"?"pointer-events-none":""}`}),p.jsx("video",{ref:j,playsInline:!0,muted:!0,className:"hidden"}),p.jsx("canvas",{ref:oe,className:`absolute inset-0 w-full h-full object-cover ${r!=="scanning"&&"hidden"}`}),r==="scanning"&&p.jsxs("div",{className:"absolute top-4 right-4 z-40 rounded-full border border-cyan-400/30 bg-slate-950/75 px-3 py-2 text-xs font-bold text-cyan-100 shadow-lg backdrop-blur-md",children:[L==="locked"&&"AR 路徑已鎖定",L==="holding"&&"陀螺儀空間錨點",L==="searching"&&"請重新對準導引圖",L==="idle"&&"準備定位"]}),r==="scanning"&&!k&&p.jsxs("div",{className:"absolute left-4 right-4 top-16 z-40 rounded-2xl border border-yellow-400/40 bg-slate-950/88 p-4 text-sm leading-relaxed text-yellow-50 shadow-xl backdrop-blur-md md:left-auto md:max-w-sm",children:[p.jsx("div",{className:"mb-1 font-bold text-yellow-200",children:"需要開啟動作與方向"}),p.jsx("div",{className:"mb-3 text-xs text-yellow-100/85",children:"若沒有啟用，AR 箭頭無法隨手機轉向套疊在實景中。"}),le&&p.jsx("div",{className:"mt-2 text-xs text-yellow-100/90",children:le})]}),r==="scanning"&&J()&&p.jsxs("div",{className:"absolute right-4 top-16 z-40 max-w-[260px] rounded-xl border border-slate-600 bg-slate-950/85 p-3 text-[10px] leading-relaxed text-slate-200 shadow-xl backdrop-blur-md",children:[p.jsx("div",{className:"mb-1 font-bold text-cyan-300",children:"AR Debug"}),[["secure",String(I.isSecureContext)],["permission",`${I.orientationPermission||"-"} / ${I.motionPermission||"-"}`],["alpha",I.alpha==null?"-":Math.round(I.alpha)],["webkit",I.webkitCompassHeading==null?"-":Math.round(I.webkitCompassHeading)],["heading",I.currentHeading==null?"-":Math.round(I.currentHeading)],["base",I.baseHeading==null?"-":Math.round(I.baseHeading)],["relative",I.relativeHeading==null?"-":Math.round(I.relativeHeading)],["target",I.targetBearing==null?"-":Math.round(I.targetBearing)],["rotate",I.arrowRotation==null?"-":Math.round(I.arrowRotation)],["mode",I.currentARMode||"-"],["updated",I.lastUpdateTime||"-"]].map(([X,De])=>p.jsxs("div",{className:"flex justify-between gap-3 border-t border-white/5 py-0.5",children:[p.jsx("span",{className:"text-slate-400",children:X}),p.jsx("span",{className:"font-mono text-white",children:De})]},X))]}),r==="scanning"&&Jn&&p.jsxs("div",{onClick:()=>x(!y),className:`absolute transition-all duration-300 z-30 bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer ${y?"top-16 left-4 right-4 bottom-32 rounded-2xl":"top-20 right-4 w-32 h-32 md:w-48 md:h-48 rounded-xl"}`,children:[p.jsxs("div",{className:"relative w-full h-full",children:[p.jsx("img",{src:Jn,className:"absolute inset-0 w-full h-full opacity-50",style:{objectFit:"fill"}}),p.jsx("div",{className:"absolute left-2 top-2 z-30 rounded-full border border-white/25 bg-black/75 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm",children:ki?`自動切換至 ${Bi}`:`目前平面圖 ${Bi}`}),p.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},children:[p.jsx("defs",{children:p.jsx("marker",{id:"minimap-arrow",markerWidth:"6",markerHeight:"4",refX:"5",refY:"2",orient:"auto",children:p.jsx("polygon",{points:"0 0, 6 2, 0 4",fill:"#00ffcc"})})}),Qn.map((X,De)=>{if(De===Qn.length-1)return null;const Me=Qn[De+1];if(X.fId===Dn&&Me.fId===Dn){const qe=Sn(X.physX,X.physY),ct=Sn(Me.physX,Me.physY);return p.jsx("line",{x1:`${qe.x}%`,y1:`${qe.y}%`,x2:`${ct.x}%`,y2:`${ct.y}%`,stroke:"#00ffcc",strokeWidth:"2",strokeDasharray:"6 4",markerEnd:"url(#minimap-arrow)",className:"animate-[dash_1s_linear_infinite]"},De)}return null})]}),ai&&p.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${ai.x}%`,top:`${ai.y}%`,transform:`translate3d(-50%, -82%, 0) rotate(${ai.angle||0}rad)`,willChange:"transform"},children:p.jsxs("div",{className:"relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center",children:[p.jsx("div",{className:"absolute inset-1 rounded-full bg-white/35 blur-md"}),p.jsx("img",{src:"assets/ar/mascot-walking-small.png",alt:"導引吉祥物",className:"relative h-full w-full rounded-full border-2 border-white/80 bg-white object-cover shadow-[0_0_16px_rgba(255,255,255,0.9)]",style:{transform:`rotate(${-(ai.angle||0)}rad)`,backfaceVisibility:"hidden",willChange:"transform"}})]})}),vt&&Ht&&Ht.fId===Dn&&p.jsx("div",{className:"absolute z-30 pointer-events-none",style:{left:`${Sn(Ht.physX,Ht.physY).x}%`,top:`${Sn(Ht.physX,Ht.physY).y}%`,transform:"translate(-50%, -140%)"},children:p.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-purple-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.85)]",children:Yt>=0?p.jsx(Ng,{className:"h-8 w-8 stroke-[3.5]"}):p.jsx(Ag,{className:"h-8 w-8 stroke-[3.5]"})})}),!1,Re&&Re.fId===Dn&&p.jsx("div",{className:"absolute z-20 pointer-events-none",style:{left:`${Sn(Re.physX,Re.physY).x}%`,top:`${Sn(Re.physX,Re.physY).y}%`,transform:"translate(-50%, -50%)"},children:p.jsxs("div",{className:"relative w-6 h-6 flex items-center justify-center",children:[p.jsx("div",{className:"absolute w-full h-full border-2 border-red-500 rounded-full animate-ping opacity-75"}),p.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full z-10"})]})})]}),p.jsx("div",{className:"absolute bottom-1.5 right-1.5 bg-black/60 p-1.5 rounded-lg text-white pointer-events-none",children:y?p.jsx(Dg,{className:"w-4 h-4"}):p.jsx(Ig,{className:"w-4 h-4"})}),p.jsxs("div",{className:"absolute bottom-0 left-0 w-full text-center bg-black/70 text-[10px] text-white py-1 backdrop-blur-sm pointer-events-none",children:[y?"縮小":"放大"," - ",dt?dt.fName:Re.fName," ",k?`(${Math.round((M%360+360)%360)}°)`:"(等待羅盤訊號...)"]})]}),r!=="scanning"&&R==="idle"&&p.jsxs("div",{className:"z-20 w-full max-w-md px-6 text-center",children:[p.jsx(uE,{className:"w-20 h-20 text-cyan-500/50 mb-6 mx-auto"}),p.jsx("h2",{className:"text-2xl font-bold text-white mb-3",children:"開啟 AR 導引"}),p.jsx("p",{className:"mb-6 text-sm leading-relaxed text-slate-300",children:"真 AR 模式會把路徑建立成 3D 物件並鎖定在空間；不支援 WebXR 的裝置可使用相機疊圖備援。"}),p.jsxs("div",{className:"space-y-3",children:[!k&&p.jsxs("div",{className:"rounded-2xl border border-yellow-400/35 bg-yellow-400/10 p-4 text-left text-sm leading-relaxed text-yellow-50",children:[p.jsx("div",{className:"mb-2 font-bold text-yellow-200",children:"請開啟「動作與方向」權限"}),p.jsx("div",{className:"mb-3 text-xs text-yellow-100/85",children:"AR 箭頭需要手機羅盤資料才能隨轉向正確套疊。iPhone 請用 Safari 開啟，並允許動作與方向存取。"}),le&&p.jsx("div",{className:"mt-3 text-xs text-yellow-100/90",children:le})]}),p.jsx("button",{onClick:st,disabled:_!=="supported",className:"w-full rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-45",children:_==="checking"?"檢查真 AR 支援中...":_==="supported"?"開啟真 AR 空間模式":"此裝置不支援真 AR 模式"}),p.jsx("button",{onClick:U,disabled:r==="loading",className:"w-full rounded-full border border-slate-600 bg-slate-900/80 px-8 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-800 disabled:opacity-50",children:r==="loading"?"系統準備中...":"開啟動作與方向及相機"})]}),_==="unsupported"&&p.jsx("div",{className:"mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left text-xs leading-relaxed text-yellow-100",children:"iPhone Safari 或未支援 WebXR 的瀏覽器無法做真正空間錨定，只能使用備援模式。Android Chrome 支援時會優先使用真 AR。"})]}),!1]}),R!=="idle"&&p.jsxs("div",{className:"absolute inset-x-4 bottom-6 z-40 rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 text-center text-sm text-cyan-50 shadow-2xl backdrop-blur-md",children:[R==="starting"&&"正在啟動真 AR 空間模式...",R==="placing"&&"請對準地面，點一下畫面放置 AR 路徑。",R==="anchored"&&"AR 路徑已鎖定在空間中。",R==="no-route"&&"目前找不到可用路徑，請先確認後台路網與目的地。",R==="failed"&&"真 AR 啟動失敗，請改用相機疊圖備援。",p.jsx("button",{onClick:Se,className:"mt-3 rounded-full border border-slate-500 px-4 py-2 text-xs font-bold text-slate-100",children:"關閉真 AR"})]}),p.jsx("div",{className:`absolute bottom-0 left-0 w-full p-4 z-40 transition-transform duration-500 ease-out flex justify-center ${dt?"translate-y-0":"translate-y-full"}`,children:p.jsxs("div",{className:"bg-slate-900/95 backdrop-blur-xl border border-slate-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden",children:[p.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"}),p.jsxs("div",{className:"grid grid-cols-[44px_1fr_44px] items-stretch gap-3",children:[p.jsx("button",{onClick:()=>w(X=>Math.max(0,X-1)),disabled:!Qe,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-200 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-25",title:"上一張平面圖",children:p.jsx(Cg,{className:"h-5 w-5"})}),p.jsxs("div",{className:"min-w-0 rounded-xl border border-slate-700 bg-slate-800/80 p-4 shadow-inner",children:[p.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 text-xs font-bold text-slate-400",children:[p.jsxs("span",{children:[(ve==null?void 0:ve.floorName)||ft(dt||Re)," ","平面圖"]}),ge.length>1&&p.jsxs("span",{children:[Le+1," / ",ge.length]})]}),p.jsx("div",{className:`text-sm font-bold leading-relaxed ${f===l?"text-green-400":vt?"text-purple-300":"text-yellow-300"}`,children:Ji}),ze>0&&p.jsxs("div",{className:"mt-2 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-bold text-cyan-100",children:["預估路徑長度：",ze<100?ze.toFixed(1):Math.round(ze)," m"]}),Qe&&p.jsxs("div",{className:"mt-2 text-[11px] text-slate-500",children:["上一張：",Qe.floorName,"；本張是",mi,"後的導引段。"]})]}),p.jsx("button",{onClick:()=>w(X=>Math.min(ge.length-1,X+1)),disabled:!vt,className:"flex h-full min-h-20 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/20 text-purple-200 transition-colors hover:bg-purple-500/30 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800/80 disabled:text-slate-500 disabled:opacity-35",title:"下一張平面圖",children:p.jsx(Rg,{className:"h-5 w-5"})})]})]})}),p.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes scan { 0% { transform: translateY(-300px); opacity: 1; } 100% { transform: translateY(300px); opacity: 0; } }
        @keyframes dash { to { stroke-dashoffset: -20; } }
      `}})]})}const dc=document.getElementById("ar-root");if(!dc)throw new Error("Missing #ar-root element.");const Lg=new URLSearchParams(window.location.search),wE=window.location.pathname.endsWith("/admin-ar.html"),Ug=dc.dataset.embedded==="true"||Lg.get("embedded")==="1",V0=wE||Ug;yv.createRoot(dc).render(p.jsx(If.StrictMode,{children:p.jsx(SE,{embedded:Ug,initialTab:V0?dc.dataset.initialTab||Lg.get("tab")||"map":"frontend",publicOnly:!V0})}));
