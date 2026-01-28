import{_ as Cy,h as kS,g as LS,I as US,G as zS,f as BS}from"./index-BN722jHt-dG3f1Axa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Ay(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ry={exports:{}},oc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jS=Symbol.for("react.transitional.element"),HS=Symbol.for("react.fragment");function Ny(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var r in e)r!=="key"&&(n[r]=e[r])}else n=e;return e=n.ref,{$$typeof:jS,type:t,key:i,ref:e!==void 0?e:null,props:n}}oc.Fragment=HS;oc.jsx=Ny;oc.jsxs=Ny;Ry.exports=oc;var _=Ry.exports,xy={exports:{}},U={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh=Symbol.for("react.transitional.element"),PS=Symbol.for("react.portal"),qS=Symbol.for("react.fragment"),VS=Symbol.for("react.strict_mode"),GS=Symbol.for("react.profiler"),FS=Symbol.for("react.consumer"),YS=Symbol.for("react.context"),KS=Symbol.for("react.forward_ref"),QS=Symbol.for("react.suspense"),XS=Symbol.for("react.memo"),Oy=Symbol.for("react.lazy"),WS=Symbol.for("react.activity"),Op=Symbol.iterator;function $S(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var Iy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dy=Object.assign,My={};function Zr(t,e,n){this.props=t,this.context=e,this.refs=My,this.updater=n||Iy}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ky(){}ky.prototype=Zr.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=My,this.updater=n||Iy}var Ch=Th.prototype=new ky;Ch.constructor=Th;Dy(Ch,Zr.prototype);Ch.isPureReactComponent=!0;var Ip=Array.isArray;function Zu(){}var oe={H:null,A:null,T:null,S:null},Ly=Object.prototype.hasOwnProperty;function Ah(t,e,n){var i=n.ref;return{$$typeof:wh,type:t,key:e,ref:i!==void 0?i:null,props:n}}function ZS(t,e){return Ah(t.type,e,t.props)}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===wh}function JS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function Qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JS(""+t.key):e.toString(36)}function ew(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Zu,Zu):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ir(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case wh:case PS:s=!0;break;case Oy:return s=t._init,ir(s(t._payload),e,n,i,r)}}if(s)return r=r(t),s=i===""?"."+Qc(t,0):i,Ip(r)?(n="",s!=null&&(n=s.replace(Dp,"$&/")+"/"),ir(r,e,n,"",function(c){return c})):r!=null&&(Rh(r)&&(r=ZS(r,n+(r.key==null||t&&t.key===r.key?"":(""+r.key).replace(Dp,"$&/")+"/")+s)),e.push(r)),1;s=0;var l=i===""?".":i+":";if(Ip(t))for(var o=0;o<t.length;o++)i=t[o],a=l+Qc(i,o),s+=ir(i,e,n,a,r);else if(o=$S(t),typeof o=="function")for(t=o.call(t),o=0;!(i=t.next()).done;)i=i.value,a=l+Qc(i,o++),s+=ir(i,e,n,a,r);else if(a==="object"){if(typeof t.then=="function")return ir(ew(t),e,n,i,r);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function hl(t,e,n){if(t==null)return t;var i=[],r=0;return ir(t,i,"","",function(a){return e.call(n,a,r++)}),i}function tw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mp=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},nw={map:hl,forEach:function(t,e,n){hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hl(t,function(){e++}),e},toArray:function(t){return hl(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Activity=WS;U.Children=nw;U.Component=Zr;U.Fragment=qS;U.Profiler=GS;U.PureComponent=Th;U.StrictMode=VS;U.Suspense=QS;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe;U.__COMPILER_RUNTIME={__proto__:null,c:function(t){return oe.H.useMemoCache(t)}};U.cache=function(t){return function(){return t.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Dy({},t.props),r=t.key;if(e!=null)for(a in e.key!==void 0&&(r=""+e.key),e)!Ly.call(e,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&e.ref===void 0||(i[a]=e[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];i.children=s}return Ah(t.type,r,i)};U.createContext=function(t){return t={$$typeof:YS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:FS,_context:t},t};U.createElement=function(t,e,n){var i,r={},a=null;if(e!=null)for(i in e.key!==void 0&&(a=""+e.key),e)Ly.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),o=0;o<s;o++)l[o]=arguments[o+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return Ah(t,a,r)};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:KS,render:t}};U.isValidElement=Rh;U.lazy=function(t){return{$$typeof:Oy,_payload:{_status:-1,_result:t},_init:tw}};U.memo=function(t,e){return{$$typeof:XS,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=oe.T,n={};oe.T=n;try{var i=t(),r=oe.S;r!==null&&r(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Zu,Mp)}catch(a){Mp(a)}finally{e!==null&&n.types!==null&&(e.types=n.types),oe.T=e}};U.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()};U.use=function(t){return oe.H.use(t)};U.useActionState=function(t,e,n){return oe.H.useActionState(t,e,n)};U.useCallback=function(t,e){return oe.H.useCallback(t,e)};U.useContext=function(t){return oe.H.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t,e){return oe.H.useDeferredValue(t,e)};U.useEffect=function(t,e){return oe.H.useEffect(t,e)};U.useEffectEvent=function(t){return oe.H.useEffectEvent(t)};U.useId=function(){return oe.H.useId()};U.useImperativeHandle=function(t,e,n){return oe.H.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return oe.H.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return oe.H.useLayoutEffect(t,e)};U.useMemo=function(t,e){return oe.H.useMemo(t,e)};U.useOptimistic=function(t,e){return oe.H.useOptimistic(t,e)};U.useReducer=function(t,e,n){return oe.H.useReducer(t,e,n)};U.useRef=function(t){return oe.H.useRef(t)};U.useState=function(t){return oe.H.useState(t)};U.useSyncExternalStore=function(t,e,n){return oe.H.useSyncExternalStore(t,e,n)};U.useTransition=function(){return oe.H.useTransition()};U.version="19.2.3";xy.exports=U;var E=xy.exports;const Nh=Ay(E);var Uy={exports:{}},cc={},zy={exports:{}},By={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,P){var B=R.length;R.push(P);e:for(;0<B;){var ge=B-1>>>1,Ne=R[ge];if(0<r(Ne,P))R[ge]=P,R[B]=Ne,B=ge;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var P=R[0],B=R.pop();if(B!==P){R[0]=B;e:for(var ge=0,Ne=R.length,cl=Ne>>>1;ge<cl;){var ul=2*(ge+1)-1,Kc=R[ul],Ei=ul+1,fl=R[Ei];if(0>r(Kc,B))Ei<Ne&&0>r(fl,Kc)?(R[ge]=fl,R[Ei]=B,ge=Ei):(R[ge]=Kc,R[ul]=B,ge=ul);else if(Ei<Ne&&0>r(fl,B))R[ge]=fl,R[Ei]=B,ge=Ei;else break e}}return P}function r(R,P){var B=R.sortIndex-P.sortIndex;return B!==0?B:R.id-P.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var o=[],c=[],h=1,f=null,u=3,p=!1,y=!1,b=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function v(R){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=R)i(c),P.sortIndex=P.expirationTime,e(o,P);else break;P=n(c)}}function C(R){if(b=!1,v(R),!y)if(n(o)!==null)y=!0,I||(I=!0,Nn());else{var P=n(c);P!==null&&Yc(C,P.startTime-R)}}var I=!1,A=-1,N=5,D=-1;function L(){return S?!0:!(t.unstable_now()-D<N)}function dt(){if(S=!1,I){var R=t.unstable_now();D=R;var P=!0;try{e:{y=!1,b&&(b=!1,d(A),A=-1),p=!0;var B=u;try{t:{for(v(R),f=n(o);f!==null&&!(f.expirationTime>R&&L());){var ge=f.callback;if(typeof ge=="function"){f.callback=null,u=f.priorityLevel;var Ne=ge(f.expirationTime<=R);if(R=t.unstable_now(),typeof Ne=="function"){f.callback=Ne,v(R),P=!0;break t}f===n(o)&&i(o),v(R)}else i(o);f=n(o)}if(f!==null)P=!0;else{var cl=n(c);cl!==null&&Yc(C,cl.startTime-R),P=!1}}break e}finally{f=null,u=B,p=!1}P=void 0}}finally{P?Nn():I=!1}}}var Nn;if(typeof g=="function")Nn=function(){g(dt)};else if(typeof MessageChannel<"u"){var xp=new MessageChannel,MS=xp.port2;xp.port1.onmessage=dt,Nn=function(){MS.postMessage(null)}}else Nn=function(){m(dt,0)};function Yc(R,P){A=m(function(){R(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(R){switch(u){case 1:case 2:case 3:var P=3;break;default:P=u}var B=u;u=P;try{return R()}finally{u=B}},t.unstable_requestPaint=function(){S=!0},t.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=u;u=R;try{return P()}finally{u=B}},t.unstable_scheduleCallback=function(R,P,B){var ge=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ge+B:ge):B=ge,R){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=B+Ne,R={id:h++,callback:P,priorityLevel:R,startTime:B,expirationTime:Ne,sortIndex:-1},B>ge?(R.sortIndex=B,e(c,R),n(o)===null&&R===n(c)&&(b?(d(A),A=-1):b=!0,Yc(C,B-ge))):(R.sortIndex=Ne,e(o,R),y||p||(y=!0,I||(I=!0,Nn()))),R},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(R){var P=u;return function(){var B=u;u=P;try{return R.apply(this,arguments)}finally{u=B}}}})(By);zy.exports=By;var iw=zy.exports,jy={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rw=E;function Hy(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function xn(){}var Ve={d:{f:xn,r:function(){throw Error(Hy(522))},D:xn,C:xn,L:xn,m:xn,X:xn,S:xn,M:xn},p:0,findDOMNode:null},aw=Symbol.for("react.portal");function sw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:aw,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var La=rw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function uc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ve;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Hy(299));return sw(t,e,null,n)};Ke.flushSync=function(t){var e=La.T,n=Ve.p;try{if(La.T=null,Ve.p=2,t)return t()}finally{La.T=e,Ve.p=n,Ve.d.f()}};Ke.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ve.d.C(t,e))};Ke.prefetchDNS=function(t){typeof t=="string"&&Ve.d.D(t)};Ke.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=uc(n,e.crossOrigin),r=typeof e.integrity=="string"?e.integrity:void 0,a=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Ve.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:a}):n==="script"&&Ve.d.X(t,{crossOrigin:i,integrity:r,fetchPriority:a,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ke.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=uc(e.as,e.crossOrigin);Ve.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Ve.d.M(t)};Ke.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=uc(n,e.crossOrigin);Ve.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ke.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=uc(e.as,e.crossOrigin);Ve.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Ve.d.m(t)};Ke.requestFormReset=function(t){Ve.d.r(t)};Ke.unstable_batchedUpdates=function(t,e){return t(e)};Ke.useFormState=function(t,e,n){return La.H.useFormState(t,e,n)};Ke.useFormStatus=function(){return La.H.useHostTransitionStatus()};Ke.version="19.2.3";function Py(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Py)}catch(t){console.error(t)}}Py(),jy.exports=Ke;var lw=jy.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=iw,qy=E,ow=lw;function w(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fy(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kp(t){if(ks(t)!==t)throw Error(w(188))}function cw(t){var e=t.alternate;if(!e){if(e=ks(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return kp(r),t;if(a===i)return kp(r),e;a=a.sibling}throw Error(w(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,l=r.child;l;){if(l===n){s=!0,n=r,i=a;break}if(l===i){s=!0,i=r,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,i=r;break}if(l===i){s=!0,i=a,n=r;break}l=l.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==i)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Yy(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Yy(t),e!==null)return e;t=t.sibling}return null}var ce=Object.assign,uw=Symbol.for("react.element"),dl=Symbol.for("react.transitional.element"),Oa=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),Ky=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Qy=Symbol.for("react.consumer"),nn=Symbol.for("react.context"),xh=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),nf=Symbol.for("react.activity"),fw=Symbol.for("react.memo_cache_sentinel"),Lp=Symbol.iterator;function ga(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var hw=Symbol.for("react.client.reference");function rf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===hw?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sr:return"Fragment";case Ju:return"Profiler";case Ky:return"StrictMode";case ef:return"Suspense";case tf:return"SuspenseList";case nf:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Oa:return"Portal";case nn:return t.displayName||"Context";case Qy:return(t._context.displayName||"Context")+".Consumer";case xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oh:return e=t.displayName||null,e!==null?e:rf(t.type)||"Memo";case In:e=t._payload,t=t._init;try{return rf(t(e))}catch{}}return null}var Ia=Array.isArray,M=qy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=ow.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ii={pending:!1,data:null,method:null,action:null},af=[],lr=-1;function Gt(t){return{current:t}}function Me(t){0>lr||(t.current=af[lr],af[lr]=null,lr--)}function ae(t,e){lr++,af[lr]=t.current,t.current=e}var Pt=Gt(null),ns=Gt(null),Kn=Gt(null),eo=Gt(null);function to(t,e){switch(ae(Kn,e),ae(ns,t),ae(Pt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Pm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Pm(e),t=pb(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Me(Pt),ae(Pt,t)}function Dr(){Me(Pt),Me(ns),Me(Kn)}function sf(t){t.memoizedState!==null&&ae(eo,t);var e=Pt.current,n=pb(e,t.type);e!==n&&(ae(ns,t),ae(Pt,n))}function no(t){ns.current===t&&(Me(Pt),Me(ns)),eo.current===t&&(Me(eo),ds._currentValue=Ii)}var Xc,Up;function wi(t){if(Xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xc=e&&e[1]||"",Up=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xc+t+Up}var Wc=!1;function $c(t,e){if(!t||Wc)return"";Wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var u=p}Reflect.construct(t,[],f)}else{try{f.call()}catch(p){u=p}t.call(f.prototype)}}else{try{throw Error()}catch(p){u=p}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),s=a[0],l=a[1];if(s&&l){var o=s.split(`
`),c=l.split(`
`);for(r=i=0;i<o.length&&!o[i].includes("DetermineComponentFrameRoot");)i++;for(;r<c.length&&!c[r].includes("DetermineComponentFrameRoot");)r++;if(i===o.length||r===c.length)for(i=o.length-1,r=c.length-1;1<=i&&0<=r&&o[i]!==c[r];)r--;for(;1<=i&&0<=r;i--,r--)if(o[i]!==c[r]){if(i!==1||r!==1)do if(i--,r--,0>r||o[i]!==c[r]){var h=`
`+o[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=r);break}}}finally{Wc=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?wi(n):""}function dw(t,e){switch(t.tag){case 26:case 27:case 5:return wi(t.type);case 16:return wi("Lazy");case 13:return t.child!==e&&e!==null?wi("Suspense Fallback"):wi("Suspense");case 19:return wi("SuspenseList");case 0:case 15:return $c(t.type,!1);case 11:return $c(t.type.render,!1);case 1:return $c(t.type,!0);case 31:return wi("Activity");default:return""}}function zp(t){try{var e="",n=null;do e+=dw(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var lf=Object.prototype.hasOwnProperty,Ih=Re.unstable_scheduleCallback,Zc=Re.unstable_cancelCallback,pw=Re.unstable_shouldYield,mw=Re.unstable_requestPaint,st=Re.unstable_now,gw=Re.unstable_getCurrentPriorityLevel,Xy=Re.unstable_ImmediatePriority,Wy=Re.unstable_UserBlockingPriority,io=Re.unstable_NormalPriority,yw=Re.unstable_LowPriority,$y=Re.unstable_IdlePriority,_w=Re.log,vw=Re.unstable_setDisableYieldValue,Ls=null,lt=null;function Pn(t){if(typeof _w=="function"&&vw(t),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Ls,t)}catch{}}var ot=Math.clz32?Math.clz32:Sw,bw=Math.log,Ew=Math.LN2;function Sw(t){return t>>>=0,t===0?32:31-(bw(t)/Ew|0)|0}var pl=256,ml=262144,gl=4194304;function Ti(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fc(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var r=0,a=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var l=i&134217727;return l!==0?(i=l&~a,i!==0?r=Ti(i):(s&=l,s!==0?r=Ti(s):n||(n=l&~t,n!==0&&(r=Ti(n))))):(l=i&~a,l!==0?r=Ti(l):s!==0?r=Ti(s):n||(n=i&~t,n!==0&&(r=Ti(n)))),r===0?0:e!==0&&e!==r&&!(e&a)&&(a=r&-r,n=e&-e,a>=n||a===32&&(n&4194048)!==0)?e:r}function Us(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ww(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zy(){var t=gl;return gl<<=1,!(gl&62914560)&&(gl=4194304),t}function Jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zs(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Tw(t,e,n,i,r,a){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var l=t.entanglements,o=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var h=31-ot(n),f=1<<h;l[h]=0,o[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var p=u[h];p!==null&&(p.lane&=-536870913)}n&=~f}i!==0&&Jy(t,i,0),a!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=a&~(s&~e))}function Jy(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ot(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function e_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ot(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}function t_(t,e){var n=e&-e;return n=n&42?1:Dh(n),n&(t.suspendedLanes|e)?0:n}function Dh(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mh(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function n_(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Cb(t.type))}function Bp(t,e){var n=X.p;try{return X.p=t,e()}finally{X.p=n}}var yi=Math.random().toString(36).slice(2),ze="__reactFiber$"+yi,et="__reactProps$"+yi,Jr="__reactContainer$"+yi,of="__reactEvents$"+yi,Cw="__reactListeners$"+yi,Aw="__reactHandles$"+yi,jp="__reactResources$"+yi,Bs="__reactMarker$"+yi;function kh(t){delete t[ze],delete t[et],delete t[of],delete t[Cw],delete t[Aw]}function or(t){var e=t[ze];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jr]||n[ze]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ym(t);t!==null;){if(n=t[ze])return n;t=Ym(t)}return e}t=n,n=t.parentNode}return null}function ea(t){if(t=t[ze]||t[Jr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Da(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(w(33))}function br(t){var e=t[jp];return e||(e=t[jp]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function De(t){t[Bs]=!0}var i_=new Set,r_={};function Ki(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(r_[t]=e,t=0;t<e.length;t++)i_.add(e[t])}var Rw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hp={},Pp={};function Nw(t){return lf.call(Pp,t)?!0:lf.call(Hp,t)?!1:Rw.test(t)?Pp[t]=!0:(Hp[t]=!0,!1)}function Dl(t,e,n){if(Nw(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function yl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Qt(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function mt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function a_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xw(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,a=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cf(t){if(!t._valueTracker){var e=a_(t)?"checked":"value";t._valueTracker=xw(t,e,""+t[e])}}function s_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=a_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ro(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ow=/[\n"\\]/g;function _t(t){return t.replace(Ow,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function uf(t,e,n,i,r,a,s,l){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+mt(e)):t.value!==""+mt(e)&&(t.value=""+mt(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?ff(t,s,mt(e)):n!=null?ff(t,s,mt(n)):i!=null&&t.removeAttribute("value"),r==null&&a!=null&&(t.defaultChecked=!!a),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+mt(l):t.removeAttribute("name")}function l_(t,e,n,i,r,a,s,l){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.type=a),e!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||e!=null)){cf(t);return}n=n!=null?""+mt(n):"",e=e!=null?""+mt(e):n,l||e===t.value||(t.value=e),t.defaultValue=e}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=l?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),cf(t)}function ff(t,e,n){e==="number"&&ro(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Er(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mt(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function o_(t,e,n){if(e!=null&&(e=""+mt(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+mt(n):""}function c_(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(w(92));if(Ia(i)){if(1<i.length)throw Error(w(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=mt(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),cf(t)}function kr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Iw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qp(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||Iw.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function u_(t,e,n){if(e!=null&&typeof e!="object")throw Error(w(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var r in e)i=e[r],e.hasOwnProperty(r)&&n[r]!==i&&qp(t,r,i)}else for(var a in e)e.hasOwnProperty(a)&&qp(t,a,e[a])}function Lh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(t){return Mw.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function rn(){}var hf=null;function Uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cr=null,Sr=null;function Vp(t){var e=ea(t);if(e&&(t=e.stateNode)){var n=t[et]||null;e:switch(t=e.stateNode,e.type){case"input":if(uf(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=i[et]||null;if(!r)throw Error(w(90));uf(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&s_(i)}break e;case"textarea":o_(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Er(t,!!n.multiple,e,!1)}}}var eu=!1;function f_(t,e,n){if(eu)return t(e,n);eu=!0;try{var i=t(e);return i}finally{if(eu=!1,(cr!==null||Sr!==null)&&(wc(),cr&&(e=cr,t=Sr,Sr=cr=null,Vp(e),t)))for(e=0;e<t.length;e++)Vp(t[e])}}function is(t,e){var n=t.stateNode;if(n===null)return null;var i=n[et]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=!1;if(mn)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){df=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{df=!1}var qn=null,zh=null,kl=null;function h_(){if(kl)return kl;var t,e=zh,n=e.length,i,r="value"in qn?qn.value:qn.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return kl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Gp(){return!1}function tt(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_l:Gp,this.isPropagationStopped=Gp,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=tt(Qi),js=ce({},Qi,{view:0,detail:0}),kw=tt(js),tu,nu,_a,dc=ce({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(tu=t.screenX-_a.screenX,nu=t.screenY-_a.screenY):nu=tu=0,_a=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:nu}}),Fp=tt(dc),Lw=ce({},dc,{dataTransfer:0}),Uw=tt(Lw),zw=ce({},js,{relatedTarget:0}),iu=tt(zw),Bw=ce({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),jw=tt(Bw),Hw=ce({},Qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pw=tt(Hw),qw=ce({},Qi,{data:0}),Yp=tt(qw),Vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fw[t])?!!e[t]:!1}function Bh(){return Yw}var Kw=ce({},js,{key:function(t){if(t.key){var e=Vw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bh,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qw=tt(Kw),Xw=ce({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=tt(Xw),Ww=ce({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bh}),$w=tt(Ww),Zw=ce({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jw=tt(Zw),eT=ce({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tT=tt(eT),nT=ce({},Qi,{newState:0,oldState:0}),iT=tt(nT),rT=[9,13,27,32],jh=mn&&"CompositionEvent"in window,Ua=null;mn&&"documentMode"in document&&(Ua=document.documentMode);var aT=mn&&"TextEvent"in window&&!Ua,d_=mn&&(!jh||Ua&&8<Ua&&11>=Ua),Qp=" ",Xp=!1;function p_(t,e){switch(t){case"keyup":return rT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function sT(t,e){switch(t){case"compositionend":return m_(e);case"keypress":return e.which!==32?null:(Xp=!0,Qp);case"textInput":return t=e.data,t===Qp&&Xp?null:t;default:return null}}function lT(t,e){if(ur)return t==="compositionend"||!jh&&p_(t,e)?(t=h_(),kl=zh=qn=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d_&&e.locale!=="ko"?null:e.data;default:return null}}var oT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oT[t.type]:e==="textarea"}function g_(t,e,n,i){cr?Sr?Sr.push(i):Sr=[i]:cr=i,e=wo(e,"onChange"),0<e.length&&(n=new hc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var za=null,rs=null;function cT(t){fb(t,0)}function pc(t){var e=Da(t);if(s_(e))return t}function $p(t,e){if(t==="change")return e}var y_=!1;if(mn){var ru;if(mn){var au="oninput"in document;if(!au){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),au=typeof Zp.oninput=="function"}ru=au}else ru=!1;y_=ru&&(!document.documentMode||9<document.documentMode)}function Jp(){za&&(za.detachEvent("onpropertychange",__),rs=za=null)}function __(t){if(t.propertyName==="value"&&pc(rs)){var e=[];g_(e,rs,t,Uh(t)),f_(cT,e)}}function uT(t,e,n){t==="focusin"?(Jp(),za=e,rs=n,za.attachEvent("onpropertychange",__)):t==="focusout"&&Jp()}function fT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(rs)}function hT(t,e){if(t==="click")return pc(e)}function dT(t,e){if(t==="input"||t==="change")return pc(e)}function pT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ut=typeof Object.is=="function"?Object.is:pT;function as(t,e){if(ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lf.call(e,r)||!ut(t[r],e[r]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function v_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ro(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ro(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var mT=mn&&"documentMode"in document&&11>=document.documentMode,fr=null,pf=null,Ba=null,mf=!1;function nm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||fr==null||fr!==ro(i)||(i=fr,"selectionStart"in i&&Hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ba&&as(Ba,i)||(Ba=i,i=wo(pf,"onSelect"),0<i.length&&(e=new hc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fr)))}function Si(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hr={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionrun:Si("Transition","TransitionRun"),transitionstart:Si("Transition","TransitionStart"),transitioncancel:Si("Transition","TransitionCancel"),transitionend:Si("Transition","TransitionEnd")},su={},E_={};mn&&(E_=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Xi(t){if(su[t])return su[t];if(!hr[t])return t;var e=hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in E_)return su[t]=e[n];return t}var S_=Xi("animationend"),w_=Xi("animationiteration"),T_=Xi("animationstart"),gT=Xi("transitionrun"),yT=Xi("transitionstart"),_T=Xi("transitioncancel"),C_=Xi("transitionend"),A_=new Map,gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gf.push("scrollEnd");function Ut(t,e){A_.set(t,e),Ki(e,[t])}var ao=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pt=[],dr=0,Ph=0;function mc(){for(var t=dr,e=Ph=dr=0;e<t;){var n=pt[e];pt[e++]=null;var i=pt[e];pt[e++]=null;var r=pt[e];pt[e++]=null;var a=pt[e];if(pt[e++]=null,i!==null&&r!==null){var s=i.pending;s===null?r.next=r:(r.next=s.next,s.next=r),i.pending=r}a!==0&&R_(n,r,a)}}function gc(t,e,n,i){pt[dr++]=t,pt[dr++]=e,pt[dr++]=n,pt[dr++]=i,Ph|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function qh(t,e,n,i){return gc(t,e,n,i),so(t)}function Wi(t,e){return gc(t,null,null,e),so(t)}function R_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var r=!1,a=t.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(t=a.stateNode,t===null||t._visibility&1||(r=!0)),t=a,a=a.return;return t.tag===3?(a=t.stateNode,r&&e!==null&&(r=31-ot(n),t=a.hiddenUpdates,i=t[r],i===null?t[r]=[e]:i.push(e),e.lane=n|536870912),a):null}function so(t){if(50<Ka)throw Ka=0,zf=null,Error(w(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var pr={};function vT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(t,e,n,i){return new vT(t,e,n,i)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cn(t,e){var n=t.alternate;return n===null?(n=rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function N_(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ul(t,e,n,i,r,a){var s=0;if(i=t,typeof t=="function")Vh(t)&&(s=1);else if(typeof t=="string")s=TC(t,n,Pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case nf:return t=rt(31,n,e,r),t.elementType=nf,t.lanes=a,t;case sr:return Di(n.children,r,a,e);case Ky:s=8,r|=24;break;case Ju:return t=rt(12,n,e,r|2),t.elementType=Ju,t.lanes=a,t;case ef:return t=rt(13,n,e,r),t.elementType=ef,t.lanes=a,t;case tf:return t=rt(19,n,e,r),t.elementType=tf,t.lanes=a,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nn:s=10;break e;case Qy:s=9;break e;case xh:s=11;break e;case Oh:s=14;break e;case In:s=16,i=null;break e}s=29,n=Error(w(130,t===null?"null":typeof t,"")),i=null}return e=rt(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Di(t,e,n,i){return t=rt(7,t,i,e),t.lanes=n,t}function lu(t,e,n){return t=rt(6,t,null,e),t.lanes=n,t}function x_(t){var e=rt(18,null,null,0);return e.stateNode=t,e}function ou(t,e,n){return e=rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var im=new WeakMap;function vt(t,e){if(typeof t=="object"&&t!==null){var n=im.get(t);return n!==void 0?n:(e={value:t,source:e,stack:zp(e)},im.set(t,e),e)}return{value:t,source:e,stack:zp(e)}}var mr=[],gr=0,lo=null,ss=0,gt=[],yt=0,oi=null,Bt=1,jt="";function en(t,e){mr[gr++]=ss,mr[gr++]=lo,lo=t,ss=e}function O_(t,e,n){gt[yt++]=Bt,gt[yt++]=jt,gt[yt++]=oi,oi=t;var i=Bt;t=jt;var r=32-ot(i)-1;i&=~(1<<r),n+=1;var a=32-ot(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Bt=1<<32-ot(e)+r|n<<r|i,jt=a+t}else Bt=1<<a|n<<r|i,jt=t}function Gh(t){t.return!==null&&(en(t,1),O_(t,1,0))}function Fh(t){for(;t===lo;)lo=mr[--gr],mr[gr]=null,ss=mr[--gr],mr[gr]=null;for(;t===oi;)oi=gt[--yt],gt[yt]=null,jt=gt[--yt],gt[yt]=null,Bt=gt[--yt],gt[yt]=null}function I_(t,e){gt[yt++]=Bt,gt[yt++]=jt,gt[yt++]=oi,Bt=e.id,jt=e.overflow,oi=t}var Be=null,le=null,Y=!1,Qn=null,bt=!1,yf=Error(w(519));function ci(t){var e=Error(w(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ls(vt(e,t)),yf}function rm(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[ze]=t,e[et]=i,n){case"dialog":q("cancel",e),q("close",e);break;case"iframe":case"object":case"embed":q("load",e);break;case"video":case"audio":for(n=0;n<fs.length;n++)q(fs[n],e);break;case"source":q("error",e);break;case"img":case"image":case"link":q("error",e),q("load",e);break;case"details":q("toggle",e);break;case"input":q("invalid",e),l_(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":q("invalid",e);break;case"textarea":q("invalid",e),c_(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||db(e.textContent,n)?(i.popover!=null&&(q("beforetoggle",e),q("toggle",e)),i.onScroll!=null&&q("scroll",e),i.onScrollEnd!=null&&q("scrollend",e),i.onClick!=null&&(e.onclick=rn),e=!0):e=!1,e||ci(t,!0)}function am(t){for(Be=t.return;Be;)switch(Be.tag){case 5:case 31:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:Be=Be.return}}function er(t){if(t!==Be)return!1;if(!Y)return am(t),Y=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||qf(t.type,t.memoizedProps)),n=!n),n&&le&&ci(t),am(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));le=Fm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));le=Fm(t)}else e===27?(e=le,_i(t.type)?(t=Yf,Yf=null,le=t):le=e):le=Be?Tt(t.stateNode.nextSibling):null;return!0}function Ui(){le=Be=null,Y=!1}function cu(){var t=Qn;return t!==null&&($e===null?$e=t:$e.push.apply($e,t),Qn=null),t}function ls(t){Qn===null?Qn=[t]:Qn.push(t)}var _f=Gt(null),$i=null,an=null;function Mn(t,e,n){ae(_f,e._currentValue),e._currentValue=n}function un(t){t._currentValue=_f.current,Me(_f)}function vf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bf(t,e,n,i){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var a=r.dependencies;if(a!==null){var s=r.child;a=a.firstContext;e:for(;a!==null;){var l=a;a=r;for(var o=0;o<e.length;o++)if(l.context===e[o]){a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),vf(a.return,n,t),i||(s=null);break e}a=l.next}}else if(r.tag===18){if(s=r.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),vf(s,n,t),s=null}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===t){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}}function ta(t,e,n,i){t=null;for(var r=e,a=!1;r!==null;){if(!a){if(r.flags&524288)a=!0;else if(r.flags&262144)break}if(r.tag===10){var s=r.alternate;if(s===null)throw Error(w(387));if(s=s.memoizedProps,s!==null){var l=r.type;ut(r.pendingProps.value,s.value)||(t!==null?t.push(l):t=[l])}}else if(r===eo.current){if(s=r.alternate,s===null)throw Error(w(387));s.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(ds):t=[ds])}r=r.return}t!==null&&bf(e,t,n,i),e.flags|=262144}function oo(t){for(t=t.firstContext;t!==null;){if(!ut(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zi(t){$i=t,an=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function je(t){return D_($i,t)}function vl(t,e){return $i===null&&zi(t),D_(t,e)}function D_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},an===null){if(t===null)throw Error(w(308));an=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else an=an.next=e;return n}var bT=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},ET=Re.unstable_scheduleCallback,ST=Re.unstable_NormalPriority,Se={$$typeof:nn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yh(){return{controller:new bT,data:new Map,refCount:0}}function Hs(t){t.refCount--,t.refCount===0&&ET(ST,function(){t.controller.abort()})}var ja=null,Ef=0,Lr=0,wr=null;function wT(t,e){if(ja===null){var n=ja=[];Ef=0,Lr=yd(),wr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ef++,e.then(sm,sm),e}function sm(){if(--Ef===0&&ja!==null){wr!==null&&(wr.status="fulfilled");var t=ja;ja=null,Lr=0,wr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function TT(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var lm=M.S;M.S=function(t,e){Yv=st(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&wT(t,e),lm!==null&&lm(t,e)};var Mi=Gt(null);function Kh(){var t=Mi.current;return t!==null?t:ne.pooledCache}function zl(t,e){e===null?ae(Mi,Mi.current):ae(Mi,e.pool)}function M_(){var t=Kh();return t===null?null:{parent:Se._currentValue,pool:t}}var na=Error(w(460)),Qh=Error(w(474)),yc=Error(w(542)),co={then:function(){}};function om(t){return t=t.status,t==="fulfilled"||t==="rejected"}function k_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(rn,rn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,um(t),t;default:if(typeof e.status=="string")e.then(rn,rn);else{if(t=ne,t!==null&&100<t.shellSuspendCounter)throw Error(w(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=i}},function(i){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,um(t),t}throw ki=e,na}}function Ci(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ki=n,na):n}}var ki=null;function cm(){if(ki===null)throw Error(w(459));var t=ki;return ki=null,t}function um(t){if(t===na||t===yc)throw Error(w(483))}var Tr=null,os=0;function bl(t){var e=os;return os+=1,Tr===null&&(Tr=[]),k_(Tr,t,e)}function va(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function El(t,e){throw e.$$typeof===uw?Error(w(525)):(t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function L_(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function i(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(m,d){return m=cn(m,d),m.index=0,m.sibling=null,m}function a(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=67108866,d):g):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function s(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function l(m,d,g,v){return d===null||d.tag!==6?(d=lu(g,m.mode,v),d.return=m,d):(d=r(d,g),d.return=m,d)}function o(m,d,g,v){var C=g.type;return C===sr?h(m,d,g.props.children,v,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===In&&Ci(C)===d.type)?(d=r(d,g.props),va(d,g),d.return=m,d):(d=Ul(g.type,g.key,g.props,null,m.mode,v),va(d,g),d.return=m,d)}function c(m,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=ou(g,m.mode,v),d.return=m,d):(d=r(d,g.children||[]),d.return=m,d)}function h(m,d,g,v,C){return d===null||d.tag!==7?(d=Di(g,m.mode,v,C),d.return=m,d):(d=r(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=lu(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case dl:return g=Ul(d.type,d.key,d.props,null,m.mode,g),va(g,d),g.return=m,g;case Oa:return d=ou(d,m.mode,g),d.return=m,d;case In:return d=Ci(d),f(m,d,g)}if(Ia(d)||ga(d))return d=Di(d,m.mode,g,null),d.return=m,d;if(typeof d.then=="function")return f(m,bl(d),g);if(d.$$typeof===nn)return f(m,vl(m,d),g);El(m,d)}return null}function u(m,d,g,v){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return C!==null?null:l(m,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case dl:return g.key===C?o(m,d,g,v):null;case Oa:return g.key===C?c(m,d,g,v):null;case In:return g=Ci(g),u(m,d,g,v)}if(Ia(g)||ga(g))return C!==null?null:h(m,d,g,v,null);if(typeof g.then=="function")return u(m,d,bl(g),v);if(g.$$typeof===nn)return u(m,d,vl(m,g),v);El(m,g)}return null}function p(m,d,g,v,C){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return m=m.get(g)||null,l(d,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:return m=m.get(v.key===null?g:v.key)||null,o(d,m,v,C);case Oa:return m=m.get(v.key===null?g:v.key)||null,c(d,m,v,C);case In:return v=Ci(v),p(m,d,g,v,C)}if(Ia(v)||ga(v))return m=m.get(g)||null,h(d,m,v,C,null);if(typeof v.then=="function")return p(m,d,g,bl(v),C);if(v.$$typeof===nn)return p(m,d,g,vl(d,v),C);El(d,v)}return null}function y(m,d,g,v){for(var C=null,I=null,A=d,N=d=0,D=null;A!==null&&N<g.length;N++){A.index>N?(D=A,A=null):D=A.sibling;var L=u(m,A,g[N],v);if(L===null){A===null&&(A=D);break}t&&A&&L.alternate===null&&e(m,A),d=a(L,d,N),I===null?C=L:I.sibling=L,I=L,A=D}if(N===g.length)return n(m,A),Y&&en(m,N),C;if(A===null){for(;N<g.length;N++)A=f(m,g[N],v),A!==null&&(d=a(A,d,N),I===null?C=A:I.sibling=A,I=A);return Y&&en(m,N),C}for(A=i(A);N<g.length;N++)D=p(A,m,N,g[N],v),D!==null&&(t&&D.alternate!==null&&A.delete(D.key===null?N:D.key),d=a(D,d,N),I===null?C=D:I.sibling=D,I=D);return t&&A.forEach(function(dt){return e(m,dt)}),Y&&en(m,N),C}function b(m,d,g,v){if(g==null)throw Error(w(151));for(var C=null,I=null,A=d,N=d=0,D=null,L=g.next();A!==null&&!L.done;N++,L=g.next()){A.index>N?(D=A,A=null):D=A.sibling;var dt=u(m,A,L.value,v);if(dt===null){A===null&&(A=D);break}t&&A&&dt.alternate===null&&e(m,A),d=a(dt,d,N),I===null?C=dt:I.sibling=dt,I=dt,A=D}if(L.done)return n(m,A),Y&&en(m,N),C;if(A===null){for(;!L.done;N++,L=g.next())L=f(m,L.value,v),L!==null&&(d=a(L,d,N),I===null?C=L:I.sibling=L,I=L);return Y&&en(m,N),C}for(A=i(A);!L.done;N++,L=g.next())L=p(A,m,N,L.value,v),L!==null&&(t&&L.alternate!==null&&A.delete(L.key===null?N:L.key),d=a(L,d,N),I===null?C=L:I.sibling=L,I=L);return t&&A.forEach(function(Nn){return e(m,Nn)}),Y&&en(m,N),C}function S(m,d,g,v){if(typeof g=="object"&&g!==null&&g.type===sr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case dl:e:{for(var C=g.key;d!==null;){if(d.key===C){if(C=g.type,C===sr){if(d.tag===7){n(m,d.sibling),v=r(d,g.props.children),v.return=m,m=v;break e}}else if(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===In&&Ci(C)===d.type){n(m,d.sibling),v=r(d,g.props),va(v,g),v.return=m,m=v;break e}n(m,d);break}else e(m,d);d=d.sibling}g.type===sr?(v=Di(g.props.children,m.mode,v,g.key),v.return=m,m=v):(v=Ul(g.type,g.key,g.props,null,m.mode,v),va(v,g),v.return=m,m=v)}return s(m);case Oa:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),v=r(d,g.children||[]),v.return=m,m=v;break e}else{n(m,d);break}else e(m,d);d=d.sibling}v=ou(g,m.mode,v),v.return=m,m=v}return s(m);case In:return g=Ci(g),S(m,d,g,v)}if(Ia(g))return y(m,d,g,v);if(ga(g)){if(C=ga(g),typeof C!="function")throw Error(w(150));return g=C.call(g),b(m,d,g,v)}if(typeof g.then=="function")return S(m,d,bl(g),v);if(g.$$typeof===nn)return S(m,d,vl(m,g),v);El(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),v=r(d,g),v.return=m,m=v):(n(m,d),v=lu(g,m.mode,v),v.return=m,m=v),s(m)):n(m,d)}return function(m,d,g,v){try{os=0;var C=S(m,d,g,v);return Tr=null,C}catch(A){if(A===na||A===yc)throw A;var I=rt(29,A,null,m.mode);return I.lanes=v,I.return=m,I}finally{}}}var Bi=L_(!0),U_=L_(!1),Dn=!1;function Xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Q&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,e=so(t),R_(t,null,n),e}return gc(t,i,e,n),so(t)}function Ha(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,e_(t,n)}}function uu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var wf=!1;function Pa(){if(wf){var t=wr;if(t!==null)throw t}}function qa(t,e,n,i){wf=!1;var r=t.updateQueue;Dn=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,s===null?a=c:s.next=c,s=o;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=o))}if(a!==null){var f=r.baseState;s=0,h=c=o=null,l=a;do{var u=l.lane&-536870913,p=u!==l.lane;if(p?(F&u)===u:(i&u)===u){u!==0&&u===Lr&&(wf=!0),h!==null&&(h=h.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var y=t,b=l;u=e;var S=n;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){f=y.call(S,f,u);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,u=typeof y=="function"?y.call(S,f,u):y,u==null)break e;f=ce({},f,u);break e;case 2:Dn=!0}}u=l.callback,u!==null&&(t.flags|=64,p&&(t.flags|=8192),p=r.callbacks,p===null?r.callbacks=[u]:p.push(u))}else p={lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=p,o=f):h=h.next=p,s|=u;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;p=l,l=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);h===null&&(o=f),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=h,a===null&&(r.shared.lanes=0),fi|=s,t.lanes=s,t.memoizedState=f}}function z_(t,e){if(typeof t!="function")throw Error(w(191,t));t.call(e)}function B_(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)z_(n[t],e)}var Ur=Gt(null),uo=Gt(0);function fm(t,e){t=vn,ae(uo,t),ae(Ur,e),vn=t|e.baseLanes}function Tf(){ae(uo,vn),ae(Ur,Ur.current)}function Wh(){vn=uo.current,Me(Ur),Me(uo)}var ft=Gt(null),wt=null;function kn(t){var e=t.alternate;ae(ye,ye.current&1),ae(ft,t),wt===null&&(e===null||Ur.current!==null||e.memoizedState!==null)&&(wt=t)}function Cf(t){ae(ye,ye.current),ae(ft,t),wt===null&&(wt=t)}function j_(t){t.tag===22?(ae(ye,ye.current),ae(ft,t),wt===null&&(wt=t)):Ln()}function Ln(){ae(ye,ye.current),ae(ft,ft.current)}function it(t){Me(ft),wt===t&&(wt=null),Me(ye)}var ye=Gt(0);function fo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gf(n)||Ff(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gn=0,z=null,ee=null,be=null,ho=!1,Cr=!1,ji=!1,po=0,cs=0,Ar=null,CT=0;function he(){throw Error(w(321))}function $h(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ut(t[n],e[n]))return!1;return!0}function Zh(t,e,n,i,r,a){return gn=a,z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=t===null||t.memoizedState===null?gv:cd,ji=!1,a=n(i,r),ji=!1,Cr&&(a=P_(e,n,i,r)),H_(t),a}function H_(t){M.H=us;var e=ee!==null&&ee.next!==null;if(gn=0,be=ee=z=null,ho=!1,cs=0,Ar=null,e)throw Error(w(300));t===null||we||(t=t.dependencies,t!==null&&oo(t)&&(we=!0))}function P_(t,e,n,i){z=t;var r=0;do{if(Cr&&(Ar=null),cs=0,Cr=!1,25<=r)throw Error(w(301));if(r+=1,be=ee=null,t.updateQueue!=null){var a=t.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}M.H=yv,a=e(n,i)}while(Cr);return a}function AT(){var t=M.H,e=t.useState()[0];return e=typeof e.then=="function"?Ps(e):e,t=t.useState()[0],(ee!==null?ee.memoizedState:null)!==t&&(z.flags|=1024),e}function Jh(){var t=po!==0;return po=0,t}function ed(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function td(t){if(ho){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ho=!1}gn=0,be=ee=z=null,Cr=!1,cs=po=0,Ar=null}function qe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?z.memoizedState=be=t:be=be.next=t,be}function ve(){if(ee===null){var t=z.alternate;t=t!==null?t.memoizedState:null}else t=ee.next;var e=be===null?z.memoizedState:be.next;if(e!==null)be=e,ee=t;else{if(t===null)throw z.alternate===null?Error(w(467)):Error(w(310));ee=t,t={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},be===null?z.memoizedState=be=t:be=be.next=t}return be}function _c(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ps(t){var e=cs;return cs+=1,Ar===null&&(Ar=[]),t=k_(Ar,t,e),e=z,(be===null?e.memoizedState:be.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?gv:cd),t}function vc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ps(t);if(t.$$typeof===nn)return je(t)}throw Error(w(438,String(t)))}function nd(t){var e=null,n=z.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=z.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=_c(),z.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=fw;return e.index++,n}function yn(t,e){return typeof e=="function"?e(t):e}function Bl(t){var e=ve();return id(e,ee,t)}function id(t,e,n){var i=t.queue;if(i===null)throw Error(w(311));i.lastRenderedReducer=n;var r=t.baseQueue,a=i.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}e.baseQueue=r=a,i.pending=null}if(a=t.baseState,r===null)t.memoizedState=a;else{e=r.next;var l=s=null,o=null,c=e,h=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(F&f)===f:(gn&f)===f){var u=c.revertLane;if(u===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Lr&&(h=!0);else if((gn&u)===u){c=c.next,u===Lr&&(h=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=f,s=a):o=o.next=f,z.lanes|=u,fi|=u;f=c.action,ji&&n(a,f),a=c.hasEagerState?c.eagerState:n(a,f)}else u={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=u,s=a):o=o.next=u,z.lanes|=f,fi|=f;c=c.next}while(c!==null&&c!==e);if(o===null?s=a:o.next=l,!ut(a,t.memoizedState)&&(we=!0,h&&(n=wr,n!==null)))throw n;t.memoizedState=a,t.baseState=s,t.baseQueue=o,i.lastRenderedState=a}return r===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function fu(t){var e=ve(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);ut(a,e.memoizedState)||(we=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function q_(t,e,n){var i=z,r=ve(),a=Y;if(a){if(n===void 0)throw Error(w(407));n=n()}else n=e();var s=!ut((ee||r).memoizedState,n);if(s&&(r.memoizedState=n,we=!0),r=r.queue,rd(F_.bind(null,i,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(i.flags|=2048,zr(9,{destroy:void 0},G_.bind(null,i,r,n,e),null),ne===null)throw Error(w(349));a||gn&127||V_(i,e,n)}return n}function V_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=z.updateQueue,e===null?(e=_c(),z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G_(t,e,n,i){e.value=n,e.getSnapshot=i,Y_(e)&&K_(t)}function F_(t,e,n){return n(function(){Y_(e)&&K_(t)})}function Y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ut(t,n)}catch{return!0}}function K_(t){var e=Wi(t,2);e!==null&&Je(e,t,2)}function Af(t){var e=qe();if(typeof t=="function"){var n=t;if(t=n(),ji){Pn(!0);try{n()}finally{Pn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:t},e}function Q_(t,e,n,i){return t.baseState=n,id(t,ee,typeof i=="function"?i:yn)}function RT(t,e,n,i,r){if(Ec(t))throw Error(w(485));if(t=e.action,t!==null){var a={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){a.listeners.push(s)}};M.T!==null?n(!0):a.isTransition=!1,i(a),n=e.pending,n===null?(a.next=e.pending=a,X_(e,a)):(a.next=n.next,e.pending=n.next=a)}}function X_(t,e){var n=e.action,i=e.payload,r=t.state;if(e.isTransition){var a=M.T,s={};M.T=s;try{var l=n(r,i),o=M.S;o!==null&&o(s,l),hm(t,e,l)}catch(c){Rf(t,e,c)}finally{a!==null&&s.types!==null&&(a.types=s.types),M.T=a}}else try{a=n(r,i),hm(t,e,a)}catch(c){Rf(t,e,c)}}function hm(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){dm(t,e,i)},function(i){return Rf(t,e,i)}):dm(t,e,n)}function dm(t,e,n){e.status="fulfilled",e.value=n,W_(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,X_(t,n)))}function Rf(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,W_(e),e=e.next;while(e!==i)}t.action=null}function W_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function $_(t,e){return e}function pm(t,e){if(Y){var n=ne.formState;if(n!==null){e:{var i=z;if(Y){if(le){t:{for(var r=le,a=bt;r.nodeType!==8;){if(!a){r=null;break t}if(r=Tt(r.nextSibling),r===null){r=null;break t}}a=r.data,r=a==="F!"||a==="F"?r:null}if(r){le=Tt(r.nextSibling),i=r.data==="F!";break e}}ci(i)}i=!1}i&&(e=n[0])}}return n=qe(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$_,lastRenderedState:e},n.queue=i,n=dv.bind(null,z,i),i.dispatch=n,i=Af(!1),a=od.bind(null,z,!1,i.queue),i=qe(),r={state:e,dispatch:null,action:t,pending:null},i.queue=r,n=RT.bind(null,z,r,a,n),r.dispatch=n,i.memoizedState=t,[e,n,!1]}function mm(t){var e=ve();return Z_(e,ee,t)}function Z_(t,e,n){if(e=id(t,e,$_)[0],t=Bl(yn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Ps(e)}catch(s){throw s===na?yc:s}else i=e;e=ve();var r=e.queue,a=r.dispatch;return n!==e.memoizedState&&(z.flags|=2048,zr(9,{destroy:void 0},NT.bind(null,r,n),null)),[i,a,t]}function NT(t,e){t.action=e}function gm(t){var e=ve(),n=ee;if(n!==null)return Z_(e,n,t);ve(),e=e.memoizedState,n=ve();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function zr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=z.updateQueue,e===null&&(e=_c(),z.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function J_(){return ve().memoizedState}function jl(t,e,n,i){var r=qe();z.flags|=t,r.memoizedState=zr(1|e,{destroy:void 0},n,i===void 0?null:i)}function bc(t,e,n,i){var r=ve();i=i===void 0?null:i;var a=r.memoizedState.inst;ee!==null&&i!==null&&$h(i,ee.memoizedState.deps)?r.memoizedState=zr(e,a,n,i):(z.flags|=t,r.memoizedState=zr(1|e,a,n,i))}function ym(t,e){jl(8390656,8,t,e)}function rd(t,e){bc(2048,8,t,e)}function xT(t){z.flags|=4;var e=z.updateQueue;if(e===null)e=_c(),z.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function ev(t){var e=ve().memoizedState;return xT({ref:e,nextImpl:t}),function(){if(Q&2)throw Error(w(440));return e.impl.apply(void 0,arguments)}}function tv(t,e){return bc(4,2,t,e)}function nv(t,e){return bc(4,4,t,e)}function iv(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rv(t,e,n){n=n!=null?n.concat([t]):null,bc(4,4,iv.bind(null,e,t),n)}function ad(){}function av(t,e){var n=ve();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&$h(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sv(t,e){var n=ve();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&$h(e,i[1]))return i[0];if(i=t(),ji){Pn(!0);try{t()}finally{Pn(!1)}}return n.memoizedState=[i,e],i}function sd(t,e,n){return n===void 0||gn&1073741824&&!(F&261930)?t.memoizedState=e:(t.memoizedState=n,t=Qv(),z.lanes|=t,fi|=t,n)}function lv(t,e,n,i){return ut(n,e)?n:Ur.current!==null?(t=sd(t,n,i),ut(t,e)||(we=!0),t):!(gn&42)||gn&1073741824&&!(F&261930)?(we=!0,t.memoizedState=n):(t=Qv(),z.lanes|=t,fi|=t,e)}function ov(t,e,n,i,r){var a=X.p;X.p=a!==0&&8>a?a:8;var s=M.T,l={};M.T=l,od(t,!1,e,n);try{var o=r(),c=M.S;if(c!==null&&c(l,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var h=TT(o,i);Va(t,e,h,ct(t))}else Va(t,e,i,ct(t))}catch(f){Va(t,e,{then:function(){},status:"rejected",reason:f},ct())}finally{X.p=a,s!==null&&l.types!==null&&(s.types=l.types),M.T=s}}function OT(){}function Nf(t,e,n,i){if(t.tag!==5)throw Error(w(476));var r=cv(t).queue;ov(t,r,e,Ii,n===null?OT:function(){return uv(t),n(i)})}function cv(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Ii,baseState:Ii,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:Ii},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function uv(t){var e=cv(t);e.next===null&&(e=t.alternate.memoizedState),Va(t,e.next.queue,{},ct())}function ld(){return je(ds)}function fv(){return ve().memoizedState}function hv(){return ve().memoizedState}function IT(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ct();t=Xn(n);var i=Wn(e,t,n);i!==null&&(Je(i,e,n),Ha(i,e,n)),e={cache:Yh()},t.payload=e;return}e=e.return}}function DT(t,e,n){var i=ct();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ec(t)?pv(e,n):(n=qh(t,e,n,i),n!==null&&(Je(n,t,i),mv(n,e,i)))}function dv(t,e,n){var i=ct();Va(t,e,n,i)}function Va(t,e,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ec(t))pv(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,l=a(s,n);if(r.hasEagerState=!0,r.eagerState=l,ut(l,s))return gc(t,e,r,0),ne===null&&mc(),!1}catch{}finally{}if(n=qh(t,e,r,i),n!==null)return Je(n,t,i),mv(n,e,i),!0}return!1}function od(t,e,n,i){if(i={lane:2,revertLane:yd(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ec(t)){if(e)throw Error(w(479))}else e=qh(t,n,i,2),e!==null&&Je(e,t,2)}function Ec(t){var e=t.alternate;return t===z||e!==null&&e===z}function pv(t,e){Cr=ho=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mv(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,e_(t,n)}}var us={readContext:je,use:vc,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he};us.useEffectEvent=he;var gv={readContext:je,use:vc,useCallback:function(t,e){return qe().memoizedState=[t,e===void 0?null:e],t},useContext:je,useEffect:ym,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,jl(4194308,4,iv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){jl(4,2,t,e)},useMemo:function(t,e){var n=qe();e=e===void 0?null:e;var i=t();if(ji){Pn(!0);try{t()}finally{Pn(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=qe();if(n!==void 0){var r=n(e);if(ji){Pn(!0);try{n(e)}finally{Pn(!1)}}}else r=e;return i.memoizedState=i.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},i.queue=t,t=t.dispatch=DT.bind(null,z,t),[i.memoizedState,t]},useRef:function(t){var e=qe();return t={current:t},e.memoizedState=t},useState:function(t){t=Af(t);var e=t.queue,n=dv.bind(null,z,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ad,useDeferredValue:function(t,e){var n=qe();return sd(n,t,e)},useTransition:function(){var t=Af(!1);return t=ov.bind(null,z,t.queue,!0,!1),qe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=z,r=qe();if(Y){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),ne===null)throw Error(w(349));F&127||V_(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,ym(F_.bind(null,i,a,t),[t]),i.flags|=2048,zr(9,{destroy:void 0},G_.bind(null,i,a,n,e),null),n},useId:function(){var t=qe(),e=ne.identifierPrefix;if(Y){var n=jt,i=Bt;n=(i&~(1<<32-ot(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=CT++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ld,useFormState:pm,useActionState:pm,useOptimistic:function(t){var e=qe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=od.bind(null,z,!0,n),n.dispatch=e,[t,e]},useMemoCache:nd,useCacheRefresh:function(){return qe().memoizedState=IT.bind(null,z)},useEffectEvent:function(t){var e=qe(),n={impl:t};return e.memoizedState=n,function(){if(Q&2)throw Error(w(440));return n.impl.apply(void 0,arguments)}}},cd={readContext:je,use:vc,useCallback:av,useContext:je,useEffect:rd,useImperativeHandle:rv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:sv,useReducer:Bl,useRef:J_,useState:function(){return Bl(yn)},useDebugValue:ad,useDeferredValue:function(t,e){var n=ve();return lv(n,ee.memoizedState,t,e)},useTransition:function(){var t=Bl(yn)[0],e=ve().memoizedState;return[typeof t=="boolean"?t:Ps(t),e]},useSyncExternalStore:q_,useId:fv,useHostTransitionStatus:ld,useFormState:mm,useActionState:mm,useOptimistic:function(t,e){var n=ve();return Q_(n,ee,t,e)},useMemoCache:nd,useCacheRefresh:hv};cd.useEffectEvent=ev;var yv={readContext:je,use:vc,useCallback:av,useContext:je,useEffect:rd,useImperativeHandle:rv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:sv,useReducer:fu,useRef:J_,useState:function(){return fu(yn)},useDebugValue:ad,useDeferredValue:function(t,e){var n=ve();return ee===null?sd(n,t,e):lv(n,ee.memoizedState,t,e)},useTransition:function(){var t=fu(yn)[0],e=ve().memoizedState;return[typeof t=="boolean"?t:Ps(t),e]},useSyncExternalStore:q_,useId:fv,useHostTransitionStatus:ld,useFormState:gm,useActionState:gm,useOptimistic:function(t,e){var n=ve();return ee!==null?Q_(n,ee,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:nd,useCacheRefresh:hv};yv.useEffectEvent=ev;function hu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xf={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ct(),r=Xn(i);r.payload=e,n!=null&&(r.callback=n),e=Wn(t,r,i),e!==null&&(Je(e,t,i),Ha(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ct(),r=Xn(i);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Wn(t,r,i),e!==null&&(Je(e,t,i),Ha(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),i=Xn(n);i.tag=2,e!=null&&(i.callback=e),e=Wn(t,i,n),e!==null&&(Je(e,t,n),Ha(e,t,n))}};function _m(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!as(n,i)||!as(r,a):!0}function vm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xf.enqueueReplaceState(e,e.state,null)}function Hi(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=ce({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}function _v(t){ao(t)}function vv(t){console.error(t)}function bv(t){ao(t)}function mo(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function bm(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Of(t,e,n){return n=Xn(n),n.tag=3,n.payload={element:null},n.callback=function(){mo(t,e)},n}function Ev(t){return t=Xn(t),t.tag=3,t}function Sv(t,e,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var a=i.value;t.payload=function(){return r(a)},t.callback=function(){bm(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){bm(e,n,i),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function MT(t,e,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&ta(e,n,r,!0),n=ft.current,n!==null){switch(n.tag){case 31:case 13:return wt===null?bo():n.alternate===null&&de===0&&(de=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===co?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),wu(t,i,r)),!1;case 22:return n.flags|=65536,i===co?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),wu(t,i,r)),!1}throw Error(w(435,n.tag))}return wu(t,i,r),bo(),!1}if(Y)return e=ft.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=r,i!==yf&&(t=Error(w(422),{cause:i}),ls(vt(t,n)))):(i!==yf&&(e=Error(w(423),{cause:i}),ls(vt(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,i=vt(i,n),r=Of(t.stateNode,i,r),uu(t,r),de!==4&&(de=2)),!1;var a=Error(w(520),{cause:i});if(a=vt(a,n),Ya===null?Ya=[a]:Ya.push(a),de!==4&&(de=2),e===null)return!0;i=vt(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=Of(n.stateNode,i,t),uu(n,t),!1;case 1:if(e=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&($n===null||!$n.has(a))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Ev(r),Sv(r,t,n,i),uu(n,r),!1}n=n.return}while(n!==null);return!1}var ud=Error(w(461)),we=!1;function Le(t,e,n,i){e.child=t===null?U_(e,null,n,i):Bi(e,t.child,n,i)}function Em(t,e,n,i,r){n=n.render;var a=e.ref;if("ref"in i){var s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}else s=i;return zi(e),i=Zh(t,e,n,s,a,r),l=Jh(),t!==null&&!we?(ed(t,e,r),_n(t,e,r)):(Y&&l&&Gh(e),e.flags|=1,Le(t,e,i,r),e.child)}function Sm(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!Vh(a)&&a.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=a,wv(t,e,a,i,r)):(t=Ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!fd(t,r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:as,n(s,i)&&t.ref===e.ref)return _n(t,e,r)}return e.flags|=1,t=cn(a,i),t.ref=e.ref,t.return=e,e.child=t}function wv(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(as(a,i)&&t.ref===e.ref)if(we=!1,e.pendingProps=i=a,fd(t,r))t.flags&131072&&(we=!0);else return e.lanes=t.lanes,_n(t,e,r)}return If(t,e,n,i,r)}function Tv(t,e,n,i){var r=i.children,a=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(a=a!==null?a.baseLanes|n:n,t!==null){for(i=e.child=t.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~a}else i=0,e.child=null;return wm(t,e,a,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&zl(e,a!==null?a.cachePool:null),a!==null?fm(e,a):Tf(),j_(e);else return i=e.lanes=536870912,wm(t,e,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(zl(e,a.cachePool),fm(e,a),Ln(),e.memoizedState=null):(t!==null&&zl(e,null),Tf(),Ln());return Le(t,e,r,n),e.child}function Ma(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function wm(t,e,n,i,r){var a=Kh();return a=a===null?null:{parent:Se._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&zl(e,null),Tf(),j_(e),t!==null&&ta(t,e,i,!0),e.childLanes=r,null}function Hl(t,e){return e=go({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Tm(t,e,n){return Bi(e,t.child,null,n),t=Hl(e,e.pendingProps),t.flags|=2,it(e),e.memoizedState=null,t}function kT(t,e,n){var i=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Y){if(i.mode==="hidden")return t=Hl(e,i),e.lanes=536870912,Ma(null,t);if(Cf(e),(t=le)?(t=gb(t,bt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:oi!==null?{id:Bt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},n=x_(t),n.return=e,e.child=n,Be=e,le=null)):t=null,t===null)throw ci(e);return e.lanes=536870912,null}return Hl(e,i)}var a=t.memoizedState;if(a!==null){var s=a.dehydrated;if(Cf(e),r)if(e.flags&256)e.flags&=-257,e=Tm(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(w(558));else if(we||ta(t,e,n,!1),r=(n&t.childLanes)!==0,we||r){if(i=ne,i!==null&&(s=t_(i,n),s!==0&&s!==a.retryLane))throw a.retryLane=s,Wi(t,s),Je(i,t,s),ud;bo(),e=Tm(t,e,n)}else t=a.treeContext,le=Tt(s.nextSibling),Be=e,Y=!0,Qn=null,bt=!1,t!==null&&I_(e,t),e=Hl(e,i),e.flags|=4096;return e}return t=cn(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Pl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(w(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function If(t,e,n,i,r){return zi(e),n=Zh(t,e,n,i,void 0,r),i=Jh(),t!==null&&!we?(ed(t,e,r),_n(t,e,r)):(Y&&i&&Gh(e),e.flags|=1,Le(t,e,n,r),e.child)}function Cm(t,e,n,i,r,a){return zi(e),e.updateQueue=null,n=P_(e,i,n,r),H_(t),i=Jh(),t!==null&&!we?(ed(t,e,a),_n(t,e,a)):(Y&&i&&Gh(e),e.flags|=1,Le(t,e,n,a),e.child)}function Am(t,e,n,i,r){if(zi(e),e.stateNode===null){var a=pr,s=n.contextType;typeof s=="object"&&s!==null&&(a=je(s)),a=new n(i,a),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xf,e.stateNode=a,a._reactInternals=e,a=e.stateNode,a.props=i,a.state=e.memoizedState,a.refs={},Xh(e),s=n.contextType,a.context=typeof s=="object"&&s!==null?je(s):pr,a.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(hu(e,n,s,i),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&xf.enqueueReplaceState(a,a.state,null),qa(e,i,a,r),Pa(),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){a=e.stateNode;var l=e.memoizedProps,o=Hi(n,l);a.props=o;var c=a.context,h=n.contextType;s=pr,typeof h=="object"&&h!==null&&(s=je(h));var f=n.getDerivedStateFromProps;h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function",l=e.pendingProps!==l,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l||c!==s)&&vm(e,a,i,s),Dn=!1;var u=e.memoizedState;a.state=u,qa(e,i,a,r),Pa(),c=e.memoizedState,l||u!==c||Dn?(typeof f=="function"&&(hu(e,n,f,i),c=e.memoizedState),(o=Dn||_m(e,n,o,i,u,c,s))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=s,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Sf(t,e),s=e.memoizedProps,h=Hi(n,s),a.props=h,f=e.pendingProps,u=a.context,c=n.contextType,o=pr,typeof c=="object"&&c!==null&&(o=je(c)),l=n.getDerivedStateFromProps,(c=typeof l=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||u!==o)&&vm(e,a,i,o),Dn=!1,u=e.memoizedState,a.state=u,qa(e,i,a,r),Pa();var p=e.memoizedState;s!==f||u!==p||Dn||t!==null&&t.dependencies!==null&&oo(t.dependencies)?(typeof l=="function"&&(hu(e,n,l,i),p=e.memoizedState),(h=Dn||_m(e,n,h,i,u,p,o)||t!==null&&t.dependencies!==null&&oo(t.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,o)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),a.props=i,a.state=p,a.context=o,i=h):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return a=i,Pl(t,e),i=(e.flags&128)!==0,a||i?(a=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),e.flags|=1,t!==null&&i?(e.child=Bi(e,t.child,null,r),e.child=Bi(e,null,n,r)):Le(t,e,n,r),e.memoizedState=a.state,t=e.child):t=_n(t,e,r),t}function Rm(t,e,n,i){return Ui(),e.flags|=256,Le(t,e,n,i),e.child}var du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pu(t){return{baseLanes:t,cachePool:M_()}}function mu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=at),t}function Cv(t,e,n){var i=e.pendingProps,r=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(ye.current&2)!==0),s&&(r=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Y){if(r?kn(e):Ln(),(t=le)?(t=gb(t,bt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:oi!==null?{id:Bt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},n=x_(t),n.return=e,e.child=n,Be=e,le=null)):t=null,t===null)throw ci(e);return Ff(t)?e.lanes=32:e.lanes=536870912,null}var l=i.children;return i=i.fallback,r?(Ln(),r=e.mode,l=go({mode:"hidden",children:l},r),i=Di(i,r,n,null),l.return=e,i.return=e,l.sibling=i,e.child=l,i=e.child,i.memoizedState=pu(n),i.childLanes=mu(t,s,n),e.memoizedState=du,Ma(null,i)):(kn(e),Df(e,l))}var o=t.memoizedState;if(o!==null&&(l=o.dehydrated,l!==null)){if(a)e.flags&256?(kn(e),e.flags&=-257,e=gu(t,e,n)):e.memoizedState!==null?(Ln(),e.child=t.child,e.flags|=128,e=null):(Ln(),l=i.fallback,r=e.mode,i=go({mode:"visible",children:i.children},r),l=Di(l,r,n,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,Bi(e,t.child,null,n),i=e.child,i.memoizedState=pu(n),i.childLanes=mu(t,s,n),e.memoizedState=du,e=Ma(null,i));else if(kn(e),Ff(l)){if(s=l.nextSibling&&l.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(w(419)),i.stack="",i.digest=s,ls({value:i,source:null,stack:null}),e=gu(t,e,n)}else if(we||ta(t,e,n,!1),s=(n&t.childLanes)!==0,we||s){if(s=ne,s!==null&&(i=t_(s,n),i!==0&&i!==o.retryLane))throw o.retryLane=i,Wi(t,i),Je(s,t,i),ud;Gf(l)||bo(),e=gu(t,e,n)}else Gf(l)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,le=Tt(l.nextSibling),Be=e,Y=!0,Qn=null,bt=!1,t!==null&&I_(e,t),e=Df(e,i.children),e.flags|=4096);return e}return r?(Ln(),l=i.fallback,r=e.mode,o=t.child,c=o.sibling,i=cn(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&65011712,c!==null?l=cn(c,l):(l=Di(l,r,n,null),l.flags|=2),l.return=e,i.return=e,i.sibling=l,e.child=i,Ma(null,i),i=e.child,l=t.child.memoizedState,l===null?l=pu(n):(r=l.cachePool,r!==null?(o=Se._currentValue,r=r.parent!==o?{parent:o,pool:o}:r):r=M_(),l={baseLanes:l.baseLanes|n,cachePool:r}),i.memoizedState=l,i.childLanes=mu(t,s,n),e.memoizedState=du,Ma(t.child,i)):(kn(e),n=t.child,t=n.sibling,n=cn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function Df(t,e){return e=go({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function go(t,e){return t=rt(22,t,null,e),t.lanes=0,t}function gu(t,e,n){return Bi(e,t.child,null,n),t=Df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vf(t.return,e,n)}function yu(t,e,n,i,r,a){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:a}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r,s.treeForkCount=a)}function Av(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;i=i.children;var s=ye.current,l=(s&2)!==0;if(l?(s=s&1|2,e.flags|=128):s&=1,ae(ye,s),Le(t,e,i,n),i=Y?ss:0,!l&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nm(t,n,e);else if(t.tag===19)Nm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fo(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yu(e,!1,r,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fo(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yu(e,!0,n,null,a,i);break;case"together":yu(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fi|=e.lanes,!(n&e.childLanes))if(t!==null){if(ta(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fd(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&oo(t)))}function LT(t,e,n){switch(e.tag){case 3:to(e,e.stateNode.containerInfo),Mn(e,Se,t.memoizedState.cache),Ui();break;case 27:case 5:sf(e);break;case 4:to(e,e.stateNode.containerInfo);break;case 10:Mn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Cf(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(kn(e),e.flags|=128,null):n&e.child.childLanes?Cv(t,e,n):(kn(e),t=_n(t,e,n),t!==null?t.sibling:null);kn(e);break;case 19:var r=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(ta(t,e,n,!1),i=(n&e.childLanes)!==0),r){if(i)return Av(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ae(ye,ye.current),i)break;return null;case 22:return e.lanes=0,Tv(t,e,n,e.pendingProps);case 24:Mn(e,Se,t.memoizedState.cache)}return _n(t,e,n)}function Rv(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)we=!0;else{if(!fd(t,n)&&!(e.flags&128))return we=!1,LT(t,e,n);we=!!(t.flags&131072)}else we=!1,Y&&e.flags&1048576&&O_(e,ss,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Ci(e.elementType),e.type=t,typeof t=="function")Vh(t)?(i=Hi(t,i),e.tag=1,e=Am(null,e,t,i,n)):(e.tag=0,e=If(null,e,t,i,n));else{if(t!=null){var r=t.$$typeof;if(r===xh){e.tag=11,e=Em(null,e,t,i,n);break e}else if(r===Oh){e.tag=14,e=Sm(null,e,t,i,n);break e}}throw e=rf(t)||t,Error(w(306,e,""))}}return e;case 0:return If(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,r=Hi(i,e.pendingProps),Am(t,e,i,r,n);case 3:e:{if(to(e,e.stateNode.containerInfo),t===null)throw Error(w(387));i=e.pendingProps;var a=e.memoizedState;r=a.element,Sf(t,e),qa(e,i,null,n);var s=e.memoizedState;if(i=s.cache,Mn(e,Se,i),i!==a.cache&&bf(e,[Se],n,!0),Pa(),i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){e=Rm(t,e,i,n);break e}else if(i!==r){r=vt(Error(w(424)),e),ls(r),e=Rm(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(le=Tt(t.firstChild),Be=e,Y=!0,Qn=null,bt=!0,n=U_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),i===r){e=_n(t,e,n);break e}Le(t,e,i,n)}e=e.child}return e;case 26:return Pl(t,e),t===null?(n=Qm(e.type,null,e.pendingProps,null))?e.memoizedState=n:Y||(n=e.type,t=e.pendingProps,i=To(Kn.current).createElement(n),i[ze]=e,i[et]=t,He(i,n,t),De(i),e.stateNode=i):e.memoizedState=Qm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return sf(e),t===null&&Y&&(i=e.stateNode=yb(e.type,e.pendingProps,Kn.current),Be=e,bt=!0,r=le,_i(e.type)?(Yf=r,le=Tt(i.firstChild)):le=r),Le(t,e,e.pendingProps.children,n),Pl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Y&&((r=i=le)&&(i=fC(i,e.type,e.pendingProps,bt),i!==null?(e.stateNode=i,Be=e,le=Tt(i.firstChild),bt=!1,r=!0):r=!1),r||ci(e)),sf(e),r=e.type,a=e.pendingProps,s=t!==null?t.memoizedProps:null,i=a.children,qf(r,a)?i=null:s!==null&&qf(r,s)&&(e.flags|=32),e.memoizedState!==null&&(r=Zh(t,e,AT,null,null,n),ds._currentValue=r),Pl(t,e),Le(t,e,i,n),e.child;case 6:return t===null&&Y&&((t=n=le)&&(n=hC(n,e.pendingProps,bt),n!==null?(e.stateNode=n,Be=e,le=null,t=!0):t=!1),t||ci(e)),null;case 13:return Cv(t,e,n);case 4:return to(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bi(e,null,i,n):Le(t,e,i,n),e.child;case 11:return Em(t,e,e.type,e.pendingProps,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Mn(e,e.type,i.value),Le(t,e,i.children,n),e.child;case 9:return r=e.type._context,i=e.pendingProps.children,zi(e),r=je(r),i=i(r),e.flags|=1,Le(t,e,i,n),e.child;case 14:return Sm(t,e,e.type,e.pendingProps,n);case 15:return wv(t,e,e.type,e.pendingProps,n);case 19:return Av(t,e,n);case 31:return kT(t,e,n);case 22:return Tv(t,e,n,e.pendingProps);case 24:return zi(e),i=je(Se),t===null?(r=Kh(),r===null&&(r=ne,a=Yh(),r.pooledCache=a,a.refCount++,a!==null&&(r.pooledCacheLanes|=n),r=a),e.memoizedState={parent:i,cache:r},Xh(e),Mn(e,Se,r)):(t.lanes&n&&(Sf(t,e),qa(e,null,null,n),Pa()),r=t.memoizedState,a=e.memoizedState,r.parent!==i?(r={parent:i,cache:i},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Mn(e,Se,i)):(i=a.cache,Mn(e,Se,i),i!==r.cache&&bf(e,[Se],n,!0))),Le(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(w(156,e.tag))}function Xt(t){t.flags|=4}function _u(t,e,n,i,r){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;else if($v())t.flags|=8192;else throw ki=co,Qh}else t.flags&=-16777217}function xm(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!bb(e))if($v())t.flags|=8192;else throw ki=co,Qh}function Sl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Zy():536870912,t.lanes|=e,Br|=e)}function ba(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function UT(t,e,n){var i=e.pendingProps;switch(Fh(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(e),null;case 1:return se(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),un(Se),Dr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(er(e)?Xt(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cu())),se(e),null;case 26:var r=e.type,a=e.memoizedState;return t===null?(Xt(e),a!==null?(se(e),xm(e,a)):(se(e),_u(e,r,null,i,n))):a?a!==t.memoizedState?(Xt(e),se(e),xm(e,a)):(se(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Xt(e),se(e),_u(e,r,t,i,n)),null;case 27:if(no(e),n=Kn.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Xt(e);else{if(!i){if(e.stateNode===null)throw Error(w(166));return se(e),null}t=Pt.current,er(e)?rm(e):(t=yb(r,i,n),e.stateNode=t,Xt(e))}return se(e),null;case 5:if(no(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Xt(e);else{if(!i){if(e.stateNode===null)throw Error(w(166));return se(e),null}if(a=Pt.current,er(e))rm(e);else{var s=To(Kn.current);switch(a){case 1:a=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:a=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":a=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":a=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":a=s.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?s.createElement(r,{is:i.is}):s.createElement(r)}}a[ze]=e,a[et]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=a;e:switch(He(a,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Xt(e)}}return se(e),_u(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Xt(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(w(166));if(t=Kn.current,er(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,r=Be,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}t[ze]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||db(t.nodeValue,n)),t||ci(e,!0)}else t=To(t).createTextNode(i),t[ze]=e,e.stateNode=t}return se(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=er(e),n!==null){if(t===null){if(!i)throw Error(w(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(557));t[ze]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;se(e),t=!1}else n=cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(it(e),e):(it(e),null);if(e.flags&128)throw Error(w(558))}return se(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=er(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(w(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(w(317));r[ze]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;se(e),r=!1}else r=cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(it(e),e):(it(e),null)}return it(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==r&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Sl(e,e.updateQueue),se(e),null);case 4:return Dr(),t===null&&_d(e.stateNode.containerInfo),se(e),null;case 10:return un(e.type),se(e),null;case 19:if(Me(ye),i=e.memoizedState,i===null)return se(e),null;if(r=(e.flags&128)!==0,a=i.rendering,a===null)if(r)ba(i,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=fo(t),a!==null){for(e.flags|=128,ba(i,!1),t=a.updateQueue,e.updateQueue=t,Sl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)N_(n,t),n=n.sibling;return ae(ye,ye.current&1|2),Y&&en(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&st()>_o&&(e.flags|=128,r=!0,ba(i,!1),e.lanes=4194304)}else{if(!r)if(t=fo(a),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Sl(e,t),ba(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Y)return se(e),null}else 2*st()-i.renderingStartTime>_o&&n!==536870912&&(e.flags|=128,r=!0,ba(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(t=i.last,t!==null?t.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=st(),t.sibling=null,n=ye.current,ae(ye,r?n&1|2:n&1),Y&&en(e,i.treeForkCount),t):(se(e),null);case 22:case 23:return it(e),Wh(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(se(e),e.subtreeFlags&6&&(e.flags|=8192)):se(e),n=e.updateQueue,n!==null&&Sl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Me(Mi),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),un(Se),se(e),null;case 25:return null;case 30:return null}throw Error(w(156,e.tag))}function zT(t,e){switch(Fh(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return un(Se),Dr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return no(e),null;case 31:if(e.memoizedState!==null){if(it(e),e.alternate===null)throw Error(w(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(it(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(ye),null;case 4:return Dr(),null;case 10:return un(e.type),null;case 22:case 23:return it(e),Wh(),t!==null&&Me(Mi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return un(Se),null;case 25:return null;default:return null}}function Nv(t,e){switch(Fh(e),e.tag){case 3:un(Se),Dr();break;case 26:case 27:case 5:no(e);break;case 4:Dr();break;case 31:e.memoizedState!==null&&it(e);break;case 13:it(e);break;case 19:Me(ye);break;case 10:un(e.type);break;case 22:case 23:it(e),Wh(),t!==null&&Me(Mi);break;case 24:un(Se)}}function qs(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&t)===t){i=void 0;var a=n.create,s=n.inst;i=a(),s.destroy=i}n=n.next}while(n!==r)}}catch(l){$(e,e.return,l)}}function ui(t,e,n){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var a=r.next;i=a;do{if((i.tag&t)===t){var s=i.inst,l=s.destroy;if(l!==void 0){s.destroy=void 0,r=e;var o=n,c=l;try{c()}catch(h){$(r,o,h)}}}i=i.next}while(i!==a)}}catch(h){$(e,e.return,h)}}function xv(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{B_(e,n)}catch(i){$(t,t.return,i)}}}function Ov(t,e,n){n.props=Hi(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){$(t,e,i)}}function Ga(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(r){$(t,e,r)}}function Ht(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){$(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){$(t,e,r)}else n.current=null}function Iv(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){$(t,t.return,r)}}function vu(t,e,n){try{var i=t.stateNode;aC(i,t.type,n,e),i[et]=e}catch(r){$(t,t.return,r)}}function Dv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&_i(t.type)||t.tag===4}function bu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&_i(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rn));else if(i!==4&&(i===27&&_i(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}function yo(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&_i(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(yo(t,e,n),t=t.sibling;t!==null;)yo(t,e,n),t=t.sibling}function Mv(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);He(e,i,n),e[ze]=t,e[et]=n}catch(a){$(t,t.return,a)}}var tn=!1,Ee=!1,Eu=!1,Om=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function BT(t,e){if(t=t.containerInfo,Hf=No,t=b_(t),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,l=-1,o=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(l=s+r),f!==a||i!==0&&f.nodeType!==3||(o=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(l=s),u===a&&++h===i&&(o=s),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=l===-1||o===-1?null:{start:l,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pf={focusedElem:t,selectionRange:n},No=!1,Oe=e;Oe!==null;)if(e=Oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Oe=t;else for(;Oe!==null;){switch(e=Oe,a=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)r=t[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&a!==null){t=void 0,n=e,r=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var y=Hi(n.type,r);t=i.getSnapshotBeforeUpdate(y,a),i.__reactInternalSnapshotBeforeUpdate=t}catch(b){$(n,n.return,b)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Vf(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(w(163))}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}}function kv(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:$t(t,n),i&4&&qs(5,n);break;case 1:if($t(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){$(n,n.return,s)}else{var r=Hi(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){$(n,n.return,s)}}i&64&&xv(n),i&512&&Ga(n,n.return);break;case 3:if($t(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{B_(t,e)}catch(s){$(n,n.return,s)}}break;case 27:e===null&&i&4&&Mv(n);case 26:case 5:$t(t,n),e===null&&i&4&&Iv(n),i&512&&Ga(n,n.return);break;case 12:$t(t,n);break;case 31:$t(t,n),i&4&&zv(t,n);break;case 13:$t(t,n),i&4&&Bv(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=KT.bind(null,n),dC(t,n))));break;case 22:if(i=n.memoizedState!==null||tn,!i){e=e!==null&&e.memoizedState!==null||Ee,r=tn;var a=Ee;tn=i,(Ee=e)&&!a?Zt(t,n,(n.subtreeFlags&8772)!==0):$t(t,n),tn=r,Ee=a}break;case 30:break;default:$t(t,n)}}function Lv(t){var e=t.alternate;e!==null&&(t.alternate=null,Lv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&kh(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ue=null,We=!1;function Wt(t,e,n){for(n=n.child;n!==null;)Uv(t,e,n),n=n.sibling}function Uv(t,e,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ls,n)}catch{}switch(n.tag){case 26:Ee||Ht(n,e),Wt(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ee||Ht(n,e);var i=ue,r=We;_i(n.type)&&(ue=n.stateNode,We=!1),Wt(t,e,n),Qa(n.stateNode),ue=i,We=r;break;case 5:Ee||Ht(n,e);case 6:if(i=ue,r=We,ue=null,Wt(t,e,n),ue=i,We=r,ue!==null)if(We)try{(ue.nodeType===9?ue.body:ue.nodeName==="HTML"?ue.ownerDocument.body:ue).removeChild(n.stateNode)}catch(a){$(n,e,a)}else try{ue.removeChild(n.stateNode)}catch(a){$(n,e,a)}break;case 18:ue!==null&&(We?(t=ue,Vm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),qr(t)):Vm(ue,n.stateNode));break;case 4:i=ue,r=We,ue=n.stateNode.containerInfo,We=!0,Wt(t,e,n),ue=i,We=r;break;case 0:case 11:case 14:case 15:ui(2,n,e),Ee||ui(4,n,e),Wt(t,e,n);break;case 1:Ee||(Ht(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ov(n,e,i)),Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:Ee=(i=Ee)||n.memoizedState!==null,Wt(t,e,n),Ee=i;break;default:Wt(t,e,n)}}function zv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(n){$(e,e.return,n)}}}function Bv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(n){$(e,e.return,n)}}function jT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Om),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Om),e;default:throw Error(w(435,t.tag))}}function wl(t,e){var n=jT(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var r=QT.bind(null,t,i);i.then(r,r)}})}function Qe(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],a=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 27:if(_i(l.type)){ue=l.stateNode,We=!1;break e}break;case 5:ue=l.stateNode,We=!1;break e;case 3:case 4:ue=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(ue===null)throw Error(w(160));Uv(a,s,r),ue=null,We=!1,a=r.alternate,a!==null&&(a.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)jv(e,t),e=e.sibling}var xt=null;function jv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qe(e,t),Xe(t),i&4&&(ui(3,t,t.return),qs(3,t),ui(5,t,t.return));break;case 1:Qe(e,t),Xe(t),i&512&&(Ee||n===null||Ht(n,n.return)),i&64&&tn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=xt;if(Qe(e,t),Xe(t),i&512&&(Ee||n===null||Ht(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Bs]||a[ze]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(i),r.head.insertBefore(a,r.querySelector("head > title"))),He(a,i,n),a[ze]=t,De(a),i=a;break e;case"link":var s=Wm("link","href",r).get(i+(n.href||""));if(s){for(var l=0;l<s.length;l++)if(a=s[l],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(l,1);break t}}a=r.createElement(i),He(a,i,n),r.head.appendChild(a);break;case"meta":if(s=Wm("meta","content",r).get(i+(n.content||""))){for(l=0;l<s.length;l++)if(a=s[l],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(l,1);break t}}a=r.createElement(i),He(a,i,n),r.head.appendChild(a);break;default:throw Error(w(468,i))}a[ze]=t,De(a),i=a}t.stateNode=i}else $m(r,t.type,t.stateNode);else t.stateNode=Xm(r,i,t.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?$m(r,t.type,t.stateNode):Xm(r,i,t.memoizedProps)):i===null&&t.stateNode!==null&&vu(t,t.memoizedProps,n.memoizedProps)}break;case 27:Qe(e,t),Xe(t),i&512&&(Ee||n===null||Ht(n,n.return)),n!==null&&i&4&&vu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Qe(e,t),Xe(t),i&512&&(Ee||n===null||Ht(n,n.return)),t.flags&32){r=t.stateNode;try{kr(r,"")}catch(y){$(t,t.return,y)}}i&4&&t.stateNode!=null&&(r=t.memoizedProps,vu(t,r,n!==null?n.memoizedProps:r)),i&1024&&(Eu=!0);break;case 6:if(Qe(e,t),Xe(t),i&4){if(t.stateNode===null)throw Error(w(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(y){$(t,t.return,y)}}break;case 3:if(Gl=null,r=xt,xt=Co(e.containerInfo),Qe(e,t),xt=r,Xe(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qr(e.containerInfo)}catch(y){$(t,t.return,y)}Eu&&(Eu=!1,Hv(t));break;case 4:i=xt,xt=Co(t.stateNode.containerInfo),Qe(e,t),Xe(t),xt=i;break;case 12:Qe(e,t),Xe(t);break;case 31:Qe(e,t),Xe(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,wl(t,i)));break;case 13:Qe(e,t),Xe(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Sc=st()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,wl(t,i)));break;case 22:r=t.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,c=tn,h=Ee;if(tn=c||r,Ee=h||o,Qe(e,t),Ee=h,tn=c,Xe(t),i&8192)e:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||o||tn||Ee||Ai(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){o=n=e;try{if(a=o.stateNode,r)s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{l=o.stateNode;var f=o.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null;l.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(y){$(o,o.return,y)}}}else if(e.tag===6){if(n===null){o=e;try{o.stateNode.nodeValue=r?"":o.memoizedProps}catch(y){$(o,o.return,y)}}}else if(e.tag===18){if(n===null){o=e;try{var p=o.stateNode;r?Gm(p,!0):Gm(o.stateNode,!1)}catch(y){$(o,o.return,y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,wl(t,n))));break;case 19:Qe(e,t),Xe(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,wl(t,i)));break;case 30:break;case 21:break;default:Qe(e,t),Xe(t)}}function Xe(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Dv(i)){n=i;break}i=i.return}if(n==null)throw Error(w(160));switch(n.tag){case 27:var r=n.stateNode,a=bu(t);yo(t,a,r);break;case 5:var s=n.stateNode;n.flags&32&&(kr(s,""),n.flags&=-33);var l=bu(t);yo(t,l,s);break;case 3:case 4:var o=n.stateNode.containerInfo,c=bu(t);Mf(t,c,o);break;default:throw Error(w(161))}}catch(h){$(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Hv(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $t(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)kv(t,e.alternate,e),e=e.sibling}function Ai(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ui(4,e,e.return),Ai(e);break;case 1:Ht(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Ov(e,e.return,n),Ai(e);break;case 27:Qa(e.stateNode);case 26:case 5:Ht(e,e.return),Ai(e);break;case 22:e.memoizedState===null&&Ai(e);break;case 30:Ai(e);break;default:Ai(e)}t=t.sibling}}function Zt(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,r=t,a=e,s=a.flags;switch(a.tag){case 0:case 11:case 15:Zt(r,a,n),qs(4,a);break;case 1:if(Zt(r,a,n),i=a,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(c){$(i,i.return,c)}if(i=a,r=i.updateQueue,r!==null){var l=i.stateNode;try{var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)z_(o[r],l)}catch(c){$(i,i.return,c)}}n&&s&64&&xv(a),Ga(a,a.return);break;case 27:Mv(a);case 26:case 5:Zt(r,a,n),n&&i===null&&s&4&&Iv(a),Ga(a,a.return);break;case 12:Zt(r,a,n);break;case 31:Zt(r,a,n),n&&s&4&&zv(r,a);break;case 13:Zt(r,a,n),n&&s&4&&Bv(r,a);break;case 22:a.memoizedState===null&&Zt(r,a,n),Ga(a,a.return);break;case 30:break;default:Zt(r,a,n)}e=e.sibling}}function hd(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Hs(n))}function dd(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hs(t))}function Nt(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pv(t,e,n,i),e=e.sibling}function Pv(t,e,n,i){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Nt(t,e,n,i),r&2048&&qs(9,e);break;case 1:Nt(t,e,n,i);break;case 3:Nt(t,e,n,i),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hs(t)));break;case 12:if(r&2048){Nt(t,e,n,i),t=e.stateNode;try{var a=e.memoizedProps,s=a.id,l=a.onPostCommit;typeof l=="function"&&l(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){$(e,e.return,o)}}else Nt(t,e,n,i);break;case 31:Nt(t,e,n,i);break;case 13:Nt(t,e,n,i);break;case 23:break;case 22:a=e.stateNode,s=e.alternate,e.memoizedState!==null?a._visibility&2?Nt(t,e,n,i):Fa(t,e):a._visibility&2?Nt(t,e,n,i):(a._visibility|=2,rr(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),r&2048&&hd(s,e);break;case 24:Nt(t,e,n,i),r&2048&&dd(e.alternate,e);break;default:Nt(t,e,n,i)}}function rr(t,e,n,i,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var a=t,s=e,l=n,o=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:rr(a,s,l,o,r),qs(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?rr(a,s,l,o,r):Fa(a,s):(h._visibility|=2,rr(a,s,l,o,r)),r&&c&2048&&hd(s.alternate,s);break;case 24:rr(a,s,l,o,r),r&&c&2048&&dd(s.alternate,s);break;default:rr(a,s,l,o,r)}e=e.sibling}}function Fa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,r=i.flags;switch(i.tag){case 22:Fa(n,i),r&2048&&hd(i.alternate,i);break;case 24:Fa(n,i),r&2048&&dd(i.alternate,i);break;default:Fa(n,i)}e=e.sibling}}var ka=8192;function tr(t,e,n){if(t.subtreeFlags&ka)for(t=t.child;t!==null;)qv(t,e,n),t=t.sibling}function qv(t,e,n){switch(t.tag){case 26:tr(t,e,n),t.flags&ka&&t.memoizedState!==null&&CC(n,xt,t.memoizedState,t.memoizedProps);break;case 5:tr(t,e,n);break;case 3:case 4:var i=xt;xt=Co(t.stateNode.containerInfo),tr(t,e,n),xt=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ka,ka=16777216,tr(t,e,n),ka=i):tr(t,e,n));break;default:tr(t,e,n)}}function Vv(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ea(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Oe=i,Fv(i,t)}Vv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gv(t),t=t.sibling}function Gv(t){switch(t.tag){case 0:case 11:case 15:Ea(t),t.flags&2048&&ui(9,t,t.return);break;case 3:Ea(t);break;case 12:Ea(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ql(t)):Ea(t);break;default:Ea(t)}}function ql(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Oe=i,Fv(i,t)}Vv(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ui(8,e,e.return),ql(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ql(e));break;default:ql(e)}t=t.sibling}}function Fv(t,e){for(;Oe!==null;){var n=Oe;switch(n.tag){case 0:case 11:case 15:ui(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Hs(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Oe=i;else e:for(n=t;Oe!==null;){i=Oe;var r=i.sibling,a=i.return;if(Lv(i),i===n){Oe=null;break e}if(r!==null){r.return=a,Oe=r;break e}Oe=a}}}var HT={getCacheForType:function(t){var e=je(Se),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return je(Se).controller.signal}},PT=typeof WeakMap=="function"?WeakMap:Map,Q=0,ne=null,V=null,F=0,W=0,nt=null,Vn=!1,ia=!1,pd=!1,vn=0,de=0,fi=0,Li=0,md=0,at=0,Br=0,Ya=null,$e=null,kf=!1,Sc=0,Yv=0,_o=1/0,vo=null,$n=null,Ce=0,Zn=null,jr=null,fn=0,Lf=0,Uf=null,Kv=null,Ka=0,zf=null;function ct(){return Q&2&&F!==0?F&-F:M.T!==null?yd():n_()}function Qv(){if(at===0)if(!(F&536870912)||Y){var t=ml;ml<<=1,!(ml&3932160)&&(ml=262144),at=t}else at=536870912;return t=ft.current,t!==null&&(t.flags|=32),at}function Je(t,e,n){(t===ne&&(W===2||W===9)||t.cancelPendingCommit!==null)&&(Hr(t,0),Gn(t,F,at,!1)),zs(t,n),(!(Q&2)||t!==ne)&&(t===ne&&(!(Q&2)&&(Li|=n),de===4&&Gn(t,F,at,!1)),Ft(t))}function Xv(t,e,n){if(Q&6)throw Error(w(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Us(t,e),r=i?GT(t,e):Su(t,e,!0),a=i;do{if(r===0){ia&&!i&&Gn(t,e,0,!1);break}else{if(n=t.current.alternate,a&&!qT(n)){r=Su(t,e,!1),a=!1;continue}if(r===2){if(a=e,t.errorRecoveryDisabledLanes&a)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var l=t;r=Ya;var o=l.current.memoizedState.isDehydrated;if(o&&(Hr(l,s).flags|=256),s=Su(l,s,!1),s!==2){if(pd&&!o){l.errorRecoveryDisabledLanes|=a,Li|=a,r=4;break e}a=$e,$e=r,a!==null&&($e===null?$e=a:$e.push.apply($e,a))}r=s}if(a=!1,r!==2)continue}}if(r===1){Hr(t,0),Gn(t,e,0,!0);break}e:{switch(i=t,a=r,a){case 0:case 1:throw Error(w(345));case 4:if((e&4194048)!==e)break;case 6:Gn(i,e,at,!Vn);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(w(329))}if((e&62914560)===e&&(r=Sc+300-st(),10<r)){if(Gn(i,e,at,!Vn),fc(i,0,!0)!==0)break e;fn=e,i.timeoutHandle=mb(Im.bind(null,i,n,$e,vo,kf,e,at,Li,Br,Vn,a,"Throttled",-0,0),r);break e}Im(i,n,$e,vo,kf,e,at,Li,Br,Vn,a,null,-0,0)}}break}while(!0);Ft(t)}function Im(t,e,n,i,r,a,s,l,o,c,h,f,u,p){if(t.timeoutHandle=-1,f=e.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rn},qv(e,a,f);var y=(a&62914560)===a?Sc-st():(a&4194048)===a?Yv-st():0;if(y=AC(f,y),y!==null){fn=a,t.cancelPendingCommit=y(Mm.bind(null,t,e,a,n,i,r,s,l,o,h,f,null,u,p)),Gn(t,a,s,!c);return}}Mm(t,e,a,n,i,r,s,l,o)}function qT(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!ut(a(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e,n,i){e&=~md,e&=~Li,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var r=e;0<r;){var a=31-ot(r),s=1<<a;i[a]=-1,r&=~s}n!==0&&Jy(t,n,e)}function wc(){return Q&6?!0:(Vs(0),!1)}function gd(){if(V!==null){if(W===0)var t=V.return;else t=V,an=$i=null,td(t),Tr=null,os=0,t=V;for(;t!==null;)Nv(t.alternate,t),t=t.return;V=null}}function Hr(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,oC(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),fn=0,gd(),ne=t,V=n=cn(t.current,null),F=e,W=0,nt=null,Vn=!1,ia=Us(t,e),pd=!1,Br=at=md=Li=fi=de=0,$e=Ya=null,kf=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-ot(i),a=1<<r;e|=t[r],i&=~a}return vn=e,mc(),n}function Wv(t,e){z=null,M.H=us,e===na||e===yc?(e=cm(),W=3):e===Qh?(e=cm(),W=4):W=e===ud?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,nt=e,V===null&&(de=1,mo(t,vt(e,t.current)))}function $v(){var t=ft.current;return t===null?!0:(F&4194048)===F?wt===null:(F&62914560)===F||F&536870912?t===wt:!1}function Zv(){var t=M.H;return M.H=us,t===null?us:t}function Jv(){var t=M.A;return M.A=HT,t}function bo(){de=4,Vn||(F&4194048)!==F&&ft.current!==null||(ia=!0),!(fi&134217727)&&!(Li&134217727)||ne===null||Gn(ne,F,at,!1)}function Su(t,e,n){var i=Q;Q|=2;var r=Zv(),a=Jv();(ne!==t||F!==e)&&(vo=null,Hr(t,e)),e=!1;var s=de;e:do try{if(W!==0&&V!==null){var l=V,o=nt;switch(W){case 8:gd(),s=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(e=!0);var c=W;if(W=0,nt=null,yr(t,l,o,c),n&&ia){s=0;break e}break;default:c=W,W=0,nt=null,yr(t,l,o,c)}}VT(),s=de;break}catch(h){Wv(t,h)}while(!0);return e&&t.shellSuspendCounter++,an=$i=null,Q=i,M.H=r,M.A=a,V===null&&(ne=null,F=0,mc()),s}function VT(){for(;V!==null;)eb(V)}function GT(t,e){var n=Q;Q|=2;var i=Zv(),r=Jv();ne!==t||F!==e?(vo=null,_o=st()+500,Hr(t,e)):ia=Us(t,e);e:do try{if(W!==0&&V!==null){e=V;var a=nt;t:switch(W){case 1:W=0,nt=null,yr(t,e,a,1);break;case 2:case 9:if(om(a)){W=0,nt=null,Dm(e);break}e=function(){W!==2&&W!==9||ne!==t||(W=7),Ft(t)},a.then(e,e);break e;case 3:W=7;break e;case 4:W=5;break e;case 7:om(a)?(W=0,nt=null,Dm(e)):(W=0,nt=null,yr(t,e,a,7));break;case 5:var s=null;switch(V.tag){case 26:s=V.memoizedState;case 5:case 27:var l=V;if(s?bb(s):l.stateNode.complete){W=0,nt=null;var o=l.sibling;if(o!==null)V=o;else{var c=l.return;c!==null?(V=c,Tc(c)):V=null}break t}}W=0,nt=null,yr(t,e,a,5);break;case 6:W=0,nt=null,yr(t,e,a,6);break;case 8:gd(),de=6;break e;default:throw Error(w(462))}}FT();break}catch(h){Wv(t,h)}while(!0);return an=$i=null,M.H=i,M.A=r,Q=n,V!==null?0:(ne=null,F=0,mc(),de)}function FT(){for(;V!==null&&!pw();)eb(V)}function eb(t){var e=Rv(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Tc(t):V=e}function Dm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Cm(n,e,e.pendingProps,e.type,void 0,F);break;case 11:e=Cm(n,e,e.pendingProps,e.type.render,e.ref,F);break;case 5:td(e);default:Nv(n,e),e=V=N_(e,vn),e=Rv(n,e,vn)}t.memoizedProps=t.pendingProps,e===null?Tc(t):V=e}function yr(t,e,n,i){an=$i=null,td(e),Tr=null,os=0;var r=e.return;try{if(MT(t,r,e,n,F)){de=1,mo(t,vt(n,t.current)),V=null;return}}catch(a){if(r!==null)throw V=r,a;de=1,mo(t,vt(n,t.current)),V=null;return}e.flags&32768?(Y||i===1?t=!0:ia||F&536870912?t=!1:(Vn=t=!0,(i===2||i===9||i===3||i===6)&&(i=ft.current,i!==null&&i.tag===13&&(i.flags|=16384))),tb(e,t)):Tc(e)}function Tc(t){var e=t;do{if(e.flags&32768){tb(e,Vn);return}t=e.return;var n=UT(e.alternate,e,vn);if(n!==null){V=n;return}if(e=e.sibling,e!==null){V=e;return}V=e=t}while(e!==null);de===0&&(de=5)}function tb(t,e){do{var n=zT(t.alternate,t);if(n!==null){n.flags&=32767,V=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){V=t;return}V=t=n}while(t!==null);de=6,V=null}function Mm(t,e,n,i,r,a,s,l,o){t.cancelPendingCommit=null;do Cc();while(Ce!==0);if(Q&6)throw Error(w(327));if(e!==null){if(e===t.current)throw Error(w(177));if(a=e.lanes|e.childLanes,a|=Ph,Tw(t,n,a,s,l,o),t===ne&&(V=ne=null,F=0),jr=e,Zn=t,fn=n,Lf=a,Uf=r,Kv=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,XT(io,function(){return sb(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=M.T,M.T=null,r=X.p,X.p=2,s=Q,Q|=4;try{BT(t,e,n)}finally{Q=s,X.p=r,M.T=i}}Ce=1,nb(),ib(),rb()}}function nb(){if(Ce===1){Ce=0;var t=Zn,e=jr,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=M.T,M.T=null;var i=X.p;X.p=2;var r=Q;Q|=4;try{jv(e,t);var a=Pf,s=b_(t.containerInfo),l=a.focusedElem,o=a.selectionRange;if(s!==l&&l&&l.ownerDocument&&v_(l.ownerDocument.documentElement,l)){if(o!==null&&Hh(l)){var c=o.start,h=o.end;if(h===void 0&&(h=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(h,l.value.length);else{var f=l.ownerDocument||document,u=f&&f.defaultView||window;if(u.getSelection){var p=u.getSelection(),y=l.textContent.length,b=Math.min(o.start,y),S=o.end===void 0?b:Math.min(o.end,y);!p.extend&&b>S&&(s=S,S=b,b=s);var m=tm(l,b),d=tm(l,S);if(m&&d&&(p.rangeCount!==1||p.anchorNode!==m.node||p.anchorOffset!==m.offset||p.focusNode!==d.node||p.focusOffset!==d.offset)){var g=f.createRange();g.setStart(m.node,m.offset),p.removeAllRanges(),b>S?(p.addRange(g),p.extend(d.node,d.offset)):(g.setEnd(d.node,d.offset),p.addRange(g))}}}}for(f=[],p=l;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<f.length;l++){var v=f[l];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}No=!!Hf,Pf=Hf=null}finally{Q=r,X.p=i,M.T=n}}t.current=e,Ce=2}}function ib(){if(Ce===2){Ce=0;var t=Zn,e=jr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=M.T,M.T=null;var i=X.p;X.p=2;var r=Q;Q|=4;try{kv(t,e.alternate,e)}finally{Q=r,X.p=i,M.T=n}}Ce=3}}function rb(){if(Ce===4||Ce===3){Ce=0,mw();var t=Zn,e=jr,n=fn,i=Kv;e.subtreeFlags&10256||e.flags&10256?Ce=5:(Ce=0,jr=Zn=null,ab(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&($n=null),Mh(n),e=e.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ls,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=M.T,r=X.p,X.p=2,M.T=null;try{for(var a=t.onRecoverableError,s=0;s<i.length;s++){var l=i[s];a(l.value,{componentStack:l.stack})}}finally{M.T=e,X.p=r}}fn&3&&Cc(),Ft(t),r=t.pendingLanes,n&261930&&r&42?t===zf?Ka++:(Ka=0,zf=t):Ka=0,Vs(0)}}function ab(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Hs(e)))}function Cc(){return nb(),ib(),rb(),sb()}function sb(){if(Ce!==5)return!1;var t=Zn,e=Lf;Lf=0;var n=Mh(fn),i=M.T,r=X.p;try{X.p=32>n?32:n,M.T=null,n=Uf,Uf=null;var a=Zn,s=fn;if(Ce=0,jr=Zn=null,fn=0,Q&6)throw Error(w(331));var l=Q;if(Q|=4,Gv(a.current),Pv(a,a.current,s,n),Q=l,Vs(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ls,a)}catch{}return!0}finally{X.p=r,M.T=i,ab(t,e)}}function km(t,e,n){e=vt(n,e),e=Of(t.stateNode,e,2),t=Wn(t,e,2),t!==null&&(zs(t,2),Ft(t))}function $(t,e,n){if(t.tag===3)km(t,t,n);else for(;e!==null;){if(e.tag===3){km(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($n===null||!$n.has(i))){t=vt(n,t),n=Ev(2),i=Wn(e,n,2),i!==null&&(Sv(n,i,e,t),zs(i,2),Ft(i));break}}e=e.return}}function wu(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new PT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(pd=!0,r.add(n),t=YT.bind(null,t,e,n),e.then(t,t))}function YT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,ne===t&&(F&n)===n&&(de===4||de===3&&(F&62914560)===F&&300>st()-Sc?!(Q&2)&&Hr(t,0):md|=n,Br===F&&(Br=0)),Ft(t)}function lb(t,e){e===0&&(e=Zy()),t=Wi(t,e),t!==null&&(zs(t,e),Ft(t))}function KT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lb(t,n)}function QT(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(w(314))}i!==null&&i.delete(e),lb(t,n)}function XT(t,e){return Ih(t,e)}var Eo=null,ar=null,Bf=!1,So=!1,Tu=!1,Fn=0;function Ft(t){t!==ar&&t.next===null&&(ar===null?Eo=ar=t:ar=ar.next=t),So=!0,Bf||(Bf=!0,$T())}function Vs(t,e){if(!Tu&&So){Tu=!0;do for(var n=!1,i=Eo;i!==null;){if(t!==0){var r=i.pendingLanes;if(r===0)var a=0;else{var s=i.suspendedLanes,l=i.pingedLanes;a=(1<<31-ot(42|t)+1)-1,a&=r&~(s&~l),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Lm(i,a))}else a=F,a=fc(i,i===ne?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(a&3)||Us(i,a)||(n=!0,Lm(i,a));i=i.next}while(n);Tu=!1}}function WT(){ob()}function ob(){So=Bf=!1;var t=0;Fn!==0&&lC()&&(t=Fn);for(var e=st(),n=null,i=Eo;i!==null;){var r=i.next,a=cb(i,e);a===0?(i.next=null,n===null?Eo=r:n.next=r,r===null&&(ar=n)):(n=i,(t!==0||a&3)&&(So=!0)),i=r}Ce!==0&&Ce!==5||Vs(t),Fn!==0&&(Fn=0)}function cb(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes&-62914561;0<a;){var s=31-ot(a),l=1<<s,o=r[s];o===-1?(!(l&n)||l&i)&&(r[s]=ww(l,e)):o<=e&&(t.expiredLanes|=l),a&=~l}if(e=ne,n=F,n=fc(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(W===2||W===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Zc(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Us(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Zc(i),Mh(n)){case 2:case 8:n=Wy;break;case 32:n=io;break;case 268435456:n=$y;break;default:n=io}return i=ub.bind(null,t),n=Ih(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Zc(i),t.callbackPriority=2,t.callbackNode=null,2}function ub(t,e){if(Ce!==0&&Ce!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Cc()&&t.callbackNode!==n)return null;var i=F;return i=fc(t,t===ne?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Xv(t,i,e),cb(t,st()),t.callbackNode!=null&&t.callbackNode===n?ub.bind(null,t):null)}function Lm(t,e){if(Cc())return null;Xv(t,e,!0)}function $T(){cC(function(){Q&6?Ih(Xy,WT):ob()})}function yd(){if(Fn===0){var t=Lr;t===0&&(t=pl,pl<<=1,!(pl&261888)&&(pl=256)),Fn=t}return Fn}function Um(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ml(""+t)}function zm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function ZT(t,e,n,i,r){if(e==="submit"&&n&&n.stateNode===r){var a=Um((r[et]||null).action),s=i.submitter;s&&(e=(e=s[et]||null)?Um(e.formAction):s.getAttribute("formAction"),e!==null&&(a=e,s=null));var l=new hc("action","action",null,i,r);t.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Fn!==0){var o=s?zm(r,s):new FormData(r);Nf(n,{pending:!0,data:o,method:r.method,action:a},null,o)}}else typeof a=="function"&&(l.preventDefault(),o=s?zm(r,s):new FormData(r),Nf(n,{pending:!0,data:o,method:r.method,action:a},a,o))},currentTarget:r}]})}}for(var Cu=0;Cu<gf.length;Cu++){var Au=gf[Cu],JT=Au.toLowerCase(),eC=Au[0].toUpperCase()+Au.slice(1);Ut(JT,"on"+eC)}Ut(S_,"onAnimationEnd");Ut(w_,"onAnimationIteration");Ut(T_,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(gT,"onTransitionRun");Ut(yT,"onTransitionStart");Ut(_T,"onTransitionCancel");Ut(C_,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fs));function fb(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var l=i[s],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==a&&r.isPropagationStopped())break e;a=l,r.currentTarget=c;try{a(r)}catch(h){ao(h)}r.currentTarget=null,a=o}else for(s=0;s<i.length;s++){if(l=i[s],o=l.instance,c=l.currentTarget,l=l.listener,o!==a&&r.isPropagationStopped())break e;a=l,r.currentTarget=c;try{a(r)}catch(h){ao(h)}r.currentTarget=null,a=o}}}}function q(t,e){var n=e[of];n===void 0&&(n=e[of]=new Set);var i=t+"__bubble";n.has(i)||(hb(e,t,2,!1),n.add(i))}function Ru(t,e,n){var i=0;e&&(i|=4),hb(n,t,i,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function _d(t){if(!t[Tl]){t[Tl]=!0,i_.forEach(function(n){n!=="selectionchange"&&(tC.has(n)||Ru(n,!1,t),Ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,Ru("selectionchange",!1,e))}}function hb(t,e,n,i){switch(Cb(e)){case 2:var r=xC;break;case 8:r=OC;break;default:r=Sd}n=r.bind(null,e,n,t),r=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nu(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var l=i.stateNode.containerInfo;if(l===r)break;if(s===4)for(s=i.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===r)return;s=s.return}for(;l!==null;){if(s=or(l),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){i=a=s;continue e}l=l.parentNode}}i=i.return}f_(function(){var c=a,h=Uh(n),f=[];e:{var u=A_.get(t);if(u!==void 0){var p=hc,y=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":p=Qw;break;case"focusin":y="focus",p=iu;break;case"focusout":y="blur",p=iu;break;case"beforeblur":case"afterblur":p=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$w;break;case S_:case w_:case T_:p=jw;break;case C_:p=Jw;break;case"scroll":case"scrollend":p=kw;break;case"wheel":p=tT;break;case"copy":case"cut":case"paste":p=Pw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kp;break;case"toggle":case"beforetoggle":p=iT}var b=(e&4)!==0,S=!b&&(t==="scroll"||t==="scrollend"),m=b?u!==null?u+"Capture":null:u;b=[];for(var d=c,g;d!==null;){var v=d;if(g=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||g===null||m===null||(v=is(d,m),v!=null&&b.push(hs(d,v,g))),S)break;d=d.return}0<b.length&&(u=new p(u,y,null,n,h),f.push({event:u,listeners:b}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==hf&&(y=n.relatedTarget||n.fromElement)&&(or(y)||y[Jr]))break e;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?or(y):null,y!==null&&(S=ks(y),b=y.tag,y!==S||b!==5&&b!==27&&b!==6)&&(y=null)):(p=null,y=c),p!==y)){if(b=Fp,v="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(b=Kp,v="onPointerLeave",m="onPointerEnter",d="pointer"),S=p==null?u:Da(p),g=y==null?u:Da(y),u=new b(v,d+"leave",p,n,h),u.target=S,u.relatedTarget=g,v=null,or(h)===c&&(b=new b(m,d+"enter",y,n,h),b.target=g,b.relatedTarget=S,v=b),S=v,p&&y)t:{for(b=nC,m=p,d=y,g=0,v=m;v;v=b(v))g++;v=0;for(var C=d;C;C=b(C))v++;for(;0<g-v;)m=b(m),g--;for(;0<v-g;)d=b(d),v--;for(;g--;){if(m===d||d!==null&&m===d.alternate){b=m;break t}m=b(m),d=b(d)}b=null}else b=null;p!==null&&Bm(f,u,p,b,!1),y!==null&&S!==null&&Bm(f,S,y,b,!0)}}e:{if(u=c?Da(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var I=$p;else if(Wp(u))if(y_)I=dT;else{I=fT;var A=uT}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Lh(c.elementType)&&(I=$p):I=hT;if(I&&(I=I(t,c))){g_(f,I,n,h);break e}A&&A(t,u,c),t==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&ff(u,"number",u.value)}switch(A=c?Da(c):window,t){case"focusin":(Wp(A)||A.contentEditable==="true")&&(fr=A,pf=c,Ba=null);break;case"focusout":Ba=pf=fr=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,nm(f,n,h);break;case"selectionchange":if(mT)break;case"keydown":case"keyup":nm(f,n,h)}var N;if(jh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ur?p_(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(d_&&n.locale!=="ko"&&(ur||D!=="onCompositionStart"?D==="onCompositionEnd"&&ur&&(N=h_()):(qn=h,zh="value"in qn?qn.value:qn.textContent,ur=!0)),A=wo(c,D),0<A.length&&(D=new Yp(D,t,null,n,h),f.push({event:D,listeners:A}),N?D.data=N:(N=m_(n),N!==null&&(D.data=N)))),(N=aT?sT(t,n):lT(t,n))&&(D=wo(c,"onBeforeInput"),0<D.length&&(A=new Yp("onBeforeInput","beforeinput",null,n,h),f.push({event:A,listeners:D}),A.data=N)),ZT(f,t,c,n,h)}fb(f,e)})}function hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||a===null||(r=is(t,n),r!=null&&i.unshift(hs(t,r,a)),r=is(t,e),r!=null&&i.push(hs(t,r,a))),t.tag===3)return i;t=t.return}return[]}function nC(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bm(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var l=n,o=l.alternate,c=l.stateNode;if(l=l.tag,o!==null&&o===i)break;l!==5&&l!==26&&l!==27||c===null||(o=c,r?(c=is(n,a),c!=null&&s.unshift(hs(n,c,o))):r||(c=is(n,a),c!=null&&s.push(hs(n,c,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var iC=/\r\n?/g,rC=/\u0000|\uFFFD/g;function jm(t){return(typeof t=="string"?t:""+t).replace(iC,`
`).replace(rC,"")}function db(t,e){return e=jm(e),jm(t)===e}function Z(t,e,n,i,r,a){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||kr(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&kr(t,""+i);break;case"className":yl(t,"class",i);break;case"tabIndex":yl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":yl(t,n,i);break;case"style":u_(t,i,a);break;case"data":if(e!=="object"){yl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Ml(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(e!=="input"&&Z(t,e,"name",r.name,r,null),Z(t,e,"formEncType",r.formEncType,r,null),Z(t,e,"formMethod",r.formMethod,r,null),Z(t,e,"formTarget",r.formTarget,r,null)):(Z(t,e,"encType",r.encType,r,null),Z(t,e,"method",r.method,r,null),Z(t,e,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Ml(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=rn);break;case"onScroll":i!=null&&q("scroll",t);break;case"onScrollEnd":i!=null&&q("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(w(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(w(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Ml(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":q("beforetoggle",t),q("toggle",t),Dl(t,"popover",i);break;case"xlinkActuate":Qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Qt(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Qt(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Qt(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Qt(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Dl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Dw.get(n)||n,Dl(t,n,i))}}function jf(t,e,n,i,r,a){switch(n){case"style":u_(t,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(w(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(w(60));t.innerHTML=n}}break;case"children":typeof i=="string"?kr(t,i):(typeof i=="number"||typeof i=="bigint")&&kr(t,""+i);break;case"onScroll":i!=null&&q("scroll",t);break;case"onScrollEnd":i!=null&&q("scrollend",t);break;case"onClick":i!=null&&(t.onclick=rn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!r_.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),a=t[et]||null,a=a!=null?a[n]:null,typeof a=="function"&&t.removeEventListener(e,a,r),typeof i=="function")){typeof a!="function"&&a!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,r);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Dl(t,n,i)}}}function He(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",t),q("load",t);var i=!1,r=!1,a;for(a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s!=null)switch(a){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:Z(t,e,a,s,n,null)}}r&&Z(t,e,"srcSet",n.srcSet,n,null),i&&Z(t,e,"src",n.src,n,null);return;case"input":q("invalid",t);var l=a=s=r=null,o=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":r=h;break;case"type":s=h;break;case"checked":o=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(w(137,e));break;default:Z(t,e,i,h,n,null)}}l_(t,a,l,o,c,s,r,!1);return;case"select":q("invalid",t),i=s=a=null;for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"value":a=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Z(t,e,r,l,n,null)}e=a,n=s,t.multiple=!!i,e!=null?Er(t,!!i,e,!1):n!=null&&Er(t,!!i,n,!0);return;case"textarea":q("invalid",t),a=r=i=null;for(s in n)if(n.hasOwnProperty(s)&&(l=n[s],l!=null))switch(s){case"value":i=l;break;case"defaultValue":r=l;break;case"children":a=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(w(91));break;default:Z(t,e,s,l,n,null)}c_(t,i,r,a);return;case"option":for(o in n)if(n.hasOwnProperty(o)&&(i=n[o],i!=null))switch(o){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Z(t,e,o,i,n,null)}return;case"dialog":q("beforetoggle",t),q("toggle",t),q("cancel",t),q("close",t);break;case"iframe":case"object":q("load",t);break;case"video":case"audio":for(i=0;i<fs.length;i++)q(fs[i],t);break;case"image":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"embed":case"source":case"link":q("error",t),q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:Z(t,e,c,i,n,null)}return;default:if(Lh(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&jf(t,e,h,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&Z(t,e,l,i,n,null))}function aC(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,s=null,l=null,o=null,c=null,h=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=f;default:i.hasOwnProperty(p)||Z(t,e,p,null,i,f)}}for(var u in i){var p=i[u];if(f=n[u],i.hasOwnProperty(u)&&(p!=null||f!=null))switch(u){case"type":a=p;break;case"name":r=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(w(137,e));break;default:p!==f&&Z(t,e,u,p,i,f)}}uf(t,s,l,o,c,h,a,r);return;case"select":p=s=l=u=null;for(a in n)if(o=n[a],n.hasOwnProperty(a)&&o!=null)switch(a){case"value":break;case"multiple":p=o;default:i.hasOwnProperty(a)||Z(t,e,a,null,i,o)}for(r in i)if(a=i[r],o=n[r],i.hasOwnProperty(r)&&(a!=null||o!=null))switch(r){case"value":u=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==o&&Z(t,e,r,a,i,o)}e=l,n=s,i=p,u!=null?Er(t,!!n,u,!1):!!i!=!!n&&(e!=null?Er(t,!!n,e,!0):Er(t,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(l in n)if(r=n[l],n.hasOwnProperty(l)&&r!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:Z(t,e,l,null,i,r)}for(s in i)if(r=i[s],a=n[s],i.hasOwnProperty(s)&&(r!=null||a!=null))switch(s){case"value":u=r;break;case"defaultValue":p=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(w(91));break;default:r!==a&&Z(t,e,s,r,i,a)}o_(t,u,p);return;case"option":for(var y in n)if(u=n[y],n.hasOwnProperty(y)&&u!=null&&!i.hasOwnProperty(y))switch(y){case"selected":t.selected=!1;break;default:Z(t,e,y,null,i,u)}for(o in i)if(u=i[o],p=n[o],i.hasOwnProperty(o)&&u!==p&&(u!=null||p!=null))switch(o){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Z(t,e,o,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&Z(t,e,b,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(w(137,e));break;default:Z(t,e,c,u,i,p)}return;default:if(Lh(e)){for(var S in n)u=n[S],n.hasOwnProperty(S)&&u!==void 0&&!i.hasOwnProperty(S)&&jf(t,e,S,void 0,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u===void 0&&p===void 0||jf(t,e,h,u,i,p);return}}for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!=null&&!i.hasOwnProperty(m)&&Z(t,e,m,null,i,u);for(f in i)u=i[f],p=n[f],!i.hasOwnProperty(f)||u===p||u==null&&p==null||Z(t,e,f,u,i,p)}function Hm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sC(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],a=r.transferSize,s=r.initiatorType,l=r.duration;if(a&&l&&Hm(s)){for(s=0,l=r.responseEnd,i+=1;i<n.length;i++){var o=n[i],c=o.startTime;if(c>l)break;var h=o.transferSize,f=o.initiatorType;h&&Hm(f)&&(o=o.responseEnd,s+=h*(o<l?1:(l-c)/(o-c)))}if(--i,e+=8*(a+s)/(r.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hf=null,Pf=null;function To(t){return t.nodeType===9?t:t.ownerDocument}function Pm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pb(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function qf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xu=null;function lC(){var t=window.event;return t&&t.type==="popstate"?t===xu?!1:(xu=t,!0):(xu=null,!1)}var mb=typeof setTimeout=="function"?setTimeout:void 0,oC=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,cC=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(t){return qm.resolve(null).then(t).catch(uC)}:mb;function uC(t){setTimeout(function(){throw t})}function _i(t){return t==="head"}function Vm(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(r),qr(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Qa(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Qa(n);for(var a=n.firstChild;a;){var s=a.nextSibling,l=a.nodeName;a[Bs]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=s}}else n==="body"&&Qa(t.ownerDocument.body);n=r}while(n);qr(e)}function Gm(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Vf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vf(n),kh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function fC(t,e,n,i){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Bs])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(a=t.getAttribute("rel"),a==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(a!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(a=t.getAttribute("src"),(a!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&a&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var a=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===a)return t}else return t;if(t=Tt(t.nextSibling),t===null)break}return null}function hC(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Tt(t.nextSibling),t===null))return null;return t}function gb(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Tt(t.nextSibling),t===null))return null;return t}function Gf(t){return t.data==="$?"||t.data==="$~"}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function dC(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Tt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Yf=null;function Fm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Tt(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Ym(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function yb(t,e,n){switch(e=To(n),t){case"html":if(t=e.documentElement,!t)throw Error(w(452));return t;case"head":if(t=e.head,!t)throw Error(w(453));return t;case"body":if(t=e.body,!t)throw Error(w(454));return t;default:throw Error(w(451))}}function Qa(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);kh(t)}var Ct=new Map,Km=new Set;function Co(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Cn=X.d;X.d={f:pC,r:mC,D:gC,C:yC,L:_C,m:vC,X:EC,S:bC,M:SC};function pC(){var t=Cn.f(),e=wc();return t||e}function mC(t){var e=ea(t);e!==null&&e.tag===5&&e.type==="form"?uv(e):Cn.r(t)}var ra=typeof document>"u"?null:document;function _b(t,e,n){var i=ra;if(i&&typeof e=="string"&&e){var r=_t(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Km.has(r)||(Km.add(r),t={rel:t,crossOrigin:n,href:e},i.querySelector(r)===null&&(e=i.createElement("link"),He(e,"link",t),De(e),i.head.appendChild(e)))}}function gC(t){Cn.D(t),_b("dns-prefetch",t,null)}function yC(t,e){Cn.C(t,e),_b("preconnect",t,e)}function _C(t,e,n){Cn.L(t,e,n);var i=ra;if(i&&t&&e){var r='link[rel="preload"][as="'+_t(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+_t(n.imageSizes)+'"]')):r+='[href="'+_t(t)+'"]';var a=r;switch(e){case"style":a=Pr(t);break;case"script":a=aa(t)}Ct.has(a)||(t=ce({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ct.set(a,t),i.querySelector(r)!==null||e==="style"&&i.querySelector(Gs(a))||e==="script"&&i.querySelector(Fs(a))||(e=i.createElement("link"),He(e,"link",t),De(e),i.head.appendChild(e)))}}function vC(t,e){Cn.m(t,e);var n=ra;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+_t(i)+'"][href="'+_t(t)+'"]',a=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=aa(t)}if(!Ct.has(a)&&(t=ce({rel:"modulepreload",href:t},e),Ct.set(a,t),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Fs(a)))return}i=n.createElement("link"),He(i,"link",t),De(i),n.head.appendChild(i)}}}function bC(t,e,n){Cn.S(t,e,n);var i=ra;if(i&&t){var r=br(i).hoistableStyles,a=Pr(t);e=e||"default";var s=r.get(a);if(!s){var l={loading:0,preload:null};if(s=i.querySelector(Gs(a)))l.loading=5;else{t=ce({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ct.get(a))&&vd(t,n);var o=s=i.createElement("link");De(o),He(o,"link",t),o._p=new Promise(function(c,h){o.onload=c,o.onerror=h}),o.addEventListener("load",function(){l.loading|=1}),o.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Vl(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:l},r.set(a,s)}}}function EC(t,e){Cn.X(t,e);var n=ra;if(n&&t){var i=br(n).hoistableScripts,r=aa(t),a=i.get(r);a||(a=n.querySelector(Fs(r)),a||(t=ce({src:t,async:!0},e),(e=Ct.get(r))&&bd(t,e),a=n.createElement("script"),De(a),He(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}}function SC(t,e){Cn.M(t,e);var n=ra;if(n&&t){var i=br(n).hoistableScripts,r=aa(t),a=i.get(r);a||(a=n.querySelector(Fs(r)),a||(t=ce({src:t,async:!0,type:"module"},e),(e=Ct.get(r))&&bd(t,e),a=n.createElement("script"),De(a),He(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}}function Qm(t,e,n,i){var r=(r=Kn.current)?Co(r):null;if(!r)throw Error(w(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Pr(n.href),n=br(r).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Pr(n.href);var a=br(r).hoistableStyles,s=a.get(t);if(s||(r=r.ownerDocument||r,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(t,s),(a=r.querySelector(Gs(t)))&&!a._p&&(s.instance=a,s.state.loading=5),Ct.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ct.set(t,n),a||wC(r,t,n,s.state))),e&&i===null)throw Error(w(528,""));return s}if(e&&i!==null)throw Error(w(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=aa(n),n=br(r).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(w(444,t))}}function Pr(t){return'href="'+_t(t)+'"'}function Gs(t){return'link[rel="stylesheet"]['+t+"]"}function vb(t){return ce({},t,{"data-precedence":t.precedence,precedence:null})}function wC(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),He(e,"link",n),De(e),t.head.appendChild(e))}function aa(t){return'[src="'+_t(t)+'"]'}function Fs(t){return"script[async]"+t}function Xm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+_t(n.href)+'"]');if(i)return e.instance=i,De(i),i;var r=ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),De(i),He(i,"style",r),Vl(i,n.precedence,t),e.instance=i;case"stylesheet":r=Pr(n.href);var a=t.querySelector(Gs(r));if(a)return e.state.loading|=4,e.instance=a,De(a),a;i=vb(n),(r=Ct.get(r))&&vd(i,r),a=(t.ownerDocument||t).createElement("link"),De(a);var s=a;return s._p=new Promise(function(l,o){s.onload=l,s.onerror=o}),He(a,"link",i),e.state.loading|=4,Vl(a,n.precedence,t),e.instance=a;case"script":return a=aa(n.src),(r=t.querySelector(Fs(a)))?(e.instance=r,De(r),r):(i=n,(r=Ct.get(a))&&(i=ce({},n),bd(i,r)),t=t.ownerDocument||t,r=t.createElement("script"),De(r),He(r,"link",i),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(w(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Vl(i,n.precedence,t));return e.instance}function Vl(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,a=r,s=0;s<i.length;s++){var l=i[s];if(l.dataset.precedence===e)a=l;else if(a!==r)break}a?a.parentNode.insertBefore(t,a.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function vd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function bd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Gl=null;function Wm(t,e,n){if(Gl===null){var i=new Map,r=Gl=new Map;r.set(n,i)}else r=Gl,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var a=n[r];if(!(a[Bs]||a[ze]||t==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var s=a.getAttribute(e)||"";s=t+s;var l=i.get(s);l?l.push(a):i.set(s,[a])}}return i}function $m(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function TC(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function bb(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function CC(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var r=Pr(i.href),a=e.querySelector(Gs(r));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ao.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=a,De(a);return}a=e.ownerDocument||e,i=vb(i),(r=Ct.get(r))&&vd(i,r),a=a.createElement("link"),De(a);var s=a;s._p=new Promise(function(l,o){s.onload=l,s.onerror=o}),He(a,"link",i),n.instance=a}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Ao.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Ou=0;function AC(t,e){return t.stylesheets&&t.count===0&&Fl(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4+e);0<t.imgBytes&&Ou===0&&(Ou=62500*sC());var r=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend)){var a=t.unsuspend;t.unsuspend=null,a()}},(t.imgBytes>Ou?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function Ao(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ro=null;function Fl(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ro=new Map,e.forEach(RC,t),Ro=null,Ao.call(t))}function RC(t,e){if(!(e.state.loading&4)){var n=Ro.get(t);if(n)var i=n.get(null);else{n=new Map,Ro.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var s=r[a];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}r=e.instance,s=r.getAttribute("data-precedence"),a=n.get(s)||i,a===i&&n.set(null,r),n.set(s,r),this.count++,i=Ao.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),a?a.parentNode.insertBefore(r,a.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var ds={$$typeof:nn,Provider:null,Consumer:null,_currentValue:Ii,_currentValue2:Ii,_threadCount:0};function NC(t,e,n,i,r,a,s,l,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.hiddenUpdates=Jc(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Eb(t,e,n,i,r,a,s,l,o,c,h,f){return t=new NC(t,e,n,s,o,c,h,f,l),e=1,a===!0&&(e|=24),a=rt(3,null,null,e),t.current=a,a.stateNode=t,e=Yh(),e.refCount++,t.pooledCache=e,e.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:e},Xh(a),t}function Sb(t){return t?(t=pr,t):pr}function wb(t,e,n,i,r,a){r=Sb(r),i.context===null?i.context=r:i.pendingContext=r,i=Xn(e),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Wn(t,i,e),n!==null&&(Je(n,t,e),Ha(n,t,e))}function Zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ed(t,e){Zm(t,e),(t=t.alternate)&&Zm(t,e)}function Tb(t){if(t.tag===13||t.tag===31){var e=Wi(t,67108864);e!==null&&Je(e,t,67108864),Ed(t,67108864)}}function Jm(t){if(t.tag===13||t.tag===31){var e=ct();e=Dh(e);var n=Wi(t,e);n!==null&&Je(n,t,e),Ed(t,e)}}var No=!0;function xC(t,e,n,i){var r=M.T;M.T=null;var a=X.p;try{X.p=2,Sd(t,e,n,i)}finally{X.p=a,M.T=r}}function OC(t,e,n,i){var r=M.T;M.T=null;var a=X.p;try{X.p=8,Sd(t,e,n,i)}finally{X.p=a,M.T=r}}function Sd(t,e,n,i){if(No){var r=Kf(i);if(r===null)Nu(t,e,i,xo,n),eg(t,i);else if(DC(r,t,e,n,i))i.stopPropagation();else if(eg(t,i),e&4&&-1<IC.indexOf(t)){for(;r!==null;){var a=ea(r);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var s=Ti(a.pendingLanes);if(s!==0){var l=a;for(l.pendingLanes|=2,l.entangledLanes|=2;s;){var o=1<<31-ot(s);l.entanglements[1]|=o,s&=~o}Ft(a),!(Q&6)&&(_o=st()+500,Vs(0))}}break;case 31:case 13:l=Wi(a,2),l!==null&&Je(l,a,2),wc(),Ed(a,2)}if(a=Kf(i),a===null&&Nu(t,e,i,xo,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Nu(t,e,i,null,n)}}function Kf(t){return t=Uh(t),wd(t)}var xo=null;function wd(t){if(xo=null,t=or(t),t!==null){var e=ks(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Gy(e),t!==null)return t;t=null}else if(n===31){if(t=Fy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return xo=t,null}function Cb(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gw()){case Xy:return 2;case Wy:return 8;case io:case yw:return 32;case $y:return 268435456;default:return 32}default:return 32}}var Qf=!1,Jn=null,ei=null,ti=null,ps=new Map,ms=new Map,Un=[],IC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eg(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(e.pointerId)}}function Sa(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=ea(e),e!==null&&Tb(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function DC(t,e,n,i,r){switch(e){case"focusin":return Jn=Sa(Jn,t,e,n,i,r),!0;case"dragenter":return ei=Sa(ei,t,e,n,i,r),!0;case"mouseover":return ti=Sa(ti,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return ps.set(a,Sa(ps.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,ms.set(a,Sa(ms.get(a)||null,t,e,n,i,r)),!0}return!1}function Ab(t){var e=or(t.target);if(e!==null){var n=ks(e);if(n!==null){if(e=n.tag,e===13){if(e=Gy(n),e!==null){t.blockedOn=e,Bp(t.priority,function(){Jm(n)});return}}else if(e===31){if(e=Fy(n),e!==null){t.blockedOn=e,Bp(t.priority,function(){Jm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kf(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hf=i,n.target.dispatchEvent(i),hf=null}else return e=ea(n),e!==null&&Tb(e),t.blockedOn=n,!1;e.shift()}return!0}function tg(t,e,n){Yl(t)&&n.delete(e)}function MC(){Qf=!1,Jn!==null&&Yl(Jn)&&(Jn=null),ei!==null&&Yl(ei)&&(ei=null),ti!==null&&Yl(ti)&&(ti=null),ps.forEach(tg),ms.forEach(tg)}function Cl(t,e){t.blockedOn===e&&(t.blockedOn=null,Qf||(Qf=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,MC)))}var Al=null;function ng(t){Al!==t&&(Al=t,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,function(){Al===t&&(Al=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],r=t[e+2];if(typeof i!="function"){if(wd(i||n)===null)continue;break}var a=ea(n);a!==null&&(t.splice(e,3),e-=3,Nf(a,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function qr(t){function e(o){return Cl(o,t)}Jn!==null&&Cl(Jn,t),ei!==null&&Cl(ei,t),ti!==null&&Cl(ti,t),ps.forEach(e),ms.forEach(e);for(var n=0;n<Un.length;n++){var i=Un[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Ab(n),n.blockedOn===null&&Un.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],a=n[i+1],s=r[et]||null;if(typeof a=="function")s||ng(n);else if(s){var l=null;if(a&&a.hasAttribute("formAction")){if(r=a,s=a[et]||null)l=s.formAction;else if(wd(r)!==null)continue}else l=s.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),ng(n)}}}function Rb(){function t(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(s){return r=s})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function Td(t){this._internalRoot=t}Ac.prototype.render=Td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));var n=e.current,i=ct();wb(n,i,t,e,null,null)};Ac.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wb(t.current,2,null,t,null,null),wc(),e[Jr]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=n_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&Ab(t)}};var ig=qy.version;if(ig!=="19.2.3")throw Error(w(527,ig,"19.2.3"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=cw(e),t=t!==null?Yy(t):null,t=t===null?null:t.stateNode,t};var kC={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{Ls=Rl.inject(kC),lt=Rl}catch{}}cc.createRoot=function(t,e){if(!Vy(t))throw Error(w(299));var n=!1,i="",r=_v,a=vv,s=bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Eb(t,1,!1,null,null,n,i,null,r,a,s,Rb),t[Jr]=e.current,_d(t),new Td(e)};cc.hydrateRoot=function(t,e,n){if(!Vy(t))throw Error(w(299));var i=!1,r="",a=_v,s=vv,l=bv,o=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(o=n.formState)),e=Eb(t,1,!0,e,n??null,i,r,o,a,s,l,Rb),e.context=Sb(null),n=e.current,i=ct(),i=Dh(i),r=Xn(i),r.callback=null,Wn(n,r,i),n=i,e.current.lanes=n,zs(e,n),Ft(e),t[Jr]=e.current,_d(t),new Ac(e)};cc.version="19.2.3";function Nb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nb)}catch(t){console.error(t)}}Nb(),Uy.exports=cc;var LC=Uy.exports;const UC=Ay(LC);/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rg="popstate";function zC(t={}){function e(i,r){let{pathname:a,search:s,hash:l}=i.location;return Xf("",{pathname:a,search:s,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:gs(r)}return jC(e,n,null,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Lt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BC(){return Math.random().toString(36).substring(2,10)}function ag(t,e){return{usr:t.state,key:t.key,idx:e}}function Xf(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?sa(e):e,state:n,key:e&&e.key||i||BC()}}function gs({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function sa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function jC(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:a=!1}=i,s=r.history,l="POP",o=null,c=h();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function h(){return(s.state||{idx:null}).idx}function f(){l="POP";let S=h(),m=S==null?null:S-c;c=S,o&&o({action:l,location:b.location,delta:m})}function u(S,m){l="PUSH";let d=Xf(b.location,S,m);c=h()+1;let g=ag(d,c),v=b.createHref(d);try{s.pushState(g,"",v)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(v)}a&&o&&o({action:l,location:b.location,delta:1})}function p(S,m){l="REPLACE";let d=Xf(b.location,S,m);c=h();let g=ag(d,c),v=b.createHref(d);s.replaceState(g,"",v),a&&o&&o({action:l,location:b.location,delta:0})}function y(S){return HC(S)}let b={get action(){return l},get location(){return t(r,s)},listen(S){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(rg,f),o=S,()=>{r.removeEventListener(rg,f),o=null}},createHref(S){return e(r,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:u,replace:p,go(S){return s.go(S)}};return b}function HC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),fe(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:gs(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function xb(t,e,n="/"){return PC(t,e,n,!1)}function PC(t,e,n,i){let r=typeof e=="string"?sa(e):e,a=bn(r.pathname||"/",n);if(a==null)return null;let s=Ob(t);qC(s);let l=null;for(let o=0;l==null&&o<s.length;++o){let c=JC(a);l=$C(s[o],c,i)}return l}function Ob(t,e=[],n=[],i="",r=!1){let a=(s,l,o=r,c)=>{let h={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(i)&&o)return;fe(h.relativePath.startsWith(i),`Absolute route path "${h.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(i.length)}let f=hn([i,h.relativePath]),u=n.concat(h);s.children&&s.children.length>0&&(fe(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Ob(s.children,e,u,f,o)),!(s.path==null&&!s.index)&&e.push({path:f,score:XC(f,s.index),routesMeta:u})};return t.forEach((s,l)=>{if(s.path===""||!s.path?.includes("?"))a(s,l);else for(let o of Ib(s.path))a(s,l,!0,o)}),e}function Ib(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let s=Ib(i.join("/")),l=[];return l.push(...s.map(o=>o===""?a:[a,o].join("/"))),r&&l.push(...s),l.map(o=>t.startsWith("/")&&o===""?"/":o)}function qC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var VC=/^:[\w-]+$/,GC=3,FC=2,YC=1,KC=10,QC=-2,sg=t=>t==="*";function XC(t,e){let n=t.split("/"),i=n.length;return n.some(sg)&&(i+=QC),e&&(i+=FC),n.filter(r=>!sg(r)).reduce((r,a)=>r+(VC.test(a)?GC:a===""?YC:KC),i)}function WC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function $C(t,e,n=!1){let{routesMeta:i}=t,r={},a="/",s=[];for(let l=0;l<i.length;++l){let o=i[l],c=l===i.length-1,h=a==="/"?e:e.slice(a.length)||"/",f=Oo({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},h),u=o.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=Oo({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},h)),!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:hn([a,f.pathname]),pathnameBase:i1(hn([a,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(a=hn([a,f.pathnameBase]))}return s}function Oo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ZC(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:i.reduce((c,{paramName:h,isOptional:f},u)=>{if(h==="*"){let y=l[u]||"";s=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const p=l[u];return f&&!p?c[h]=void 0:c[h]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:s,pattern:t}}function ZC(t,e=!1,n=!0){Lt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,o)=>(i.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function JC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Lt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function bn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}var Db=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e1=t=>Db.test(t);function t1(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?sa(t):t,a;if(n)if(e1(n))a=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Lt(!1,`Pathnames cannot have embedded double slashes - normalizing ${s} -> ${n}`)}n.startsWith("/")?a=lg(n.substring(1),"/"):a=lg(n,e)}else a=e;return{pathname:a,search:r1(i),hash:a1(r)}}function lg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Iu(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function n1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mb(t){let e=n1(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function kb(t,e,n,i=!1){let r;typeof t=="string"?r=sa(t):(r={...t},fe(!r.pathname||!r.pathname.includes("?"),Iu("?","pathname","search",r)),fe(!r.pathname||!r.pathname.includes("#"),Iu("#","pathname","hash",r)),fe(!r.search||!r.search.includes("#"),Iu("#","search","hash",r)));let a=t===""||r.pathname==="",s=a?"/":r.pathname,l;if(s==null)l=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let u=s.split("/");for(;u[0]==="..";)u.shift(),f-=1;r.pathname=u.join("/")}l=f>=0?e[f]:"/"}let o=t1(r,l),c=s&&s!=="/"&&s.endsWith("/"),h=(a||s===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}var hn=t=>t.join("/").replace(/\/\/+/g,"/"),i1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),r1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,a1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,s1=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function l1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function o1(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Lb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ub(t,e){let n=t;if(typeof n!="string"||!Db.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let i=n,r=!1;if(Lb)try{let a=new URL(window.location.href),s=n.startsWith("//")?new URL(a.protocol+n):new URL(n),l=bn(s.pathname,e);s.origin===a.origin&&l!=null?n=l+s.search+s.hash:r=!0}catch{Lt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:r,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zb=["POST","PUT","PATCH","DELETE"];new Set(zb);var c1=["GET",...zb];new Set(c1);var la=E.createContext(null);la.displayName="DataRouter";var Rc=E.createContext(null);Rc.displayName="DataRouterState";var u1=E.createContext(!1),Bb=E.createContext({isTransitioning:!1});Bb.displayName="ViewTransition";var f1=E.createContext(new Map);f1.displayName="Fetchers";var h1=E.createContext(null);h1.displayName="Await";var Rt=E.createContext(null);Rt.displayName="Navigation";var Ys=E.createContext(null);Ys.displayName="Location";var Yt=E.createContext({outlet:null,matches:[],isDataRoute:!1});Yt.displayName="Route";var Cd=E.createContext(null);Cd.displayName="RouteError";var jb="REACT_ROUTER_ERROR",d1="REDIRECT",p1="ROUTE_ERROR_RESPONSE";function m1(t){if(t.startsWith(`${jb}:${d1}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function g1(t){if(t.startsWith(`${jb}:${p1}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new s1(e.status,e.statusText,e.data)}catch{}}function y1(t,{relative:e}={}){fe(Ks(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=E.useContext(Rt),{hash:r,pathname:a,search:s}=Xs(t,{relative:e}),l=a;return n!=="/"&&(l=a==="/"?n:hn([n,a])),i.createHref({pathname:l,search:s,hash:r})}function Ks(){return E.useContext(Ys)!=null}function vi(){return fe(Ks(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Ys).location}var Hb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pb(t){E.useContext(Rt).static||E.useLayoutEffect(t)}function Qs(){let{isDataRoute:t}=E.useContext(Yt);return t?O1():_1()}function _1(){fe(Ks(),"useNavigate() may be used only in the context of a <Router> component.");let t=E.useContext(la),{basename:e,navigator:n}=E.useContext(Rt),{matches:i}=E.useContext(Yt),{pathname:r}=vi(),a=JSON.stringify(Mb(i)),s=E.useRef(!1);return Pb(()=>{s.current=!0}),E.useCallback((o,c={})=>{if(Lt(s.current,Hb),!s.current)return;if(typeof o=="number"){n.go(o);return}let h=kb(o,JSON.parse(a),r,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:hn([e,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[e,n,a,r,t])}E.createContext(null);function qb(){let{matches:t}=E.useContext(Yt),e=t[t.length-1];return e?e.params:{}}function Xs(t,{relative:e}={}){let{matches:n}=E.useContext(Yt),{pathname:i}=vi(),r=JSON.stringify(Mb(n));return E.useMemo(()=>kb(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function v1(t,e){return Vb(t,e)}function Vb(t,e,n,i,r){fe(Ks(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=E.useContext(Rt),{matches:s}=E.useContext(Yt),l=s[s.length-1],o=l?l.params:{},c=l?l.pathname:"/",h=l?l.pathnameBase:"/",f=l&&l.route;{let d=f&&f.path||"";Fb(c,!f||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let u=vi(),p;if(e){let d=typeof e=="string"?sa(e):e;fe(h==="/"||d.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${d.pathname}" was given in the \`location\` prop.`),p=d}else p=u;let y=p.pathname||"/",b=y;if(h!=="/"){let d=h.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(d.length).join("/")}let S=xb(t,{pathname:b});Lt(f||S!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Lt(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=T1(S&&S.map(d=>Object.assign({},d,{params:Object.assign({},o,d.params),pathname:hn([h,a.encodeLocation?a.encodeLocation(d.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?h:hn([h,a.encodeLocation?a.encodeLocation(d.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathnameBase])})),s,n,i,r);return e&&m?E.createElement(Ys.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},m):m}function b1(){let t=x1(),e=l1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:a},"ErrorBoundary")," or"," ",E.createElement("code",{style:a},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:r},n):null,s)}var E1=E.createElement(b1,null),Gb=class extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=g1(t.digest);n&&(t=n)}let e=t!==void 0?E.createElement(Yt.Provider,{value:this.props.routeContext},E.createElement(Cd.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?E.createElement(S1,{error:t},e):e}};Gb.contextType=u1;var Du=new WeakMap;function S1({children:t,error:e}){let{basename:n}=E.useContext(Rt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=m1(e.digest);if(i){let r=Du.get(e);if(r)throw r;let a=Ub(i.location,n);if(Lb&&!Du.get(e))if(a.isExternal||i.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:i.replace}));throw Du.set(e,s),s}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return t}function w1({routeContext:t,match:e,children:n}){let i=E.useContext(la);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),E.createElement(Yt.Provider,{value:t},n)}function T1(t,e=[],n=null,i=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,s=n?.errors;if(s!=null){let h=a.findIndex(f=>f.route.id&&s?.[f.route.id]!==void 0);fe(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,o=-1;if(n)for(let h=0;h<a.length;h++){let f=a[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=h),f.route.id){let{loaderData:u,errors:p}=n,y=f.route.loader&&!u.hasOwnProperty(f.route.id)&&(!p||p[f.route.id]===void 0);if(f.route.lazy||y){l=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}let c=n&&i?(h,f)=>{i(h,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:o1(n.matches),errorInfo:f})}:void 0;return a.reduceRight((h,f,u)=>{let p,y=!1,b=null,S=null;n&&(p=s&&f.route.id?s[f.route.id]:void 0,b=f.route.errorElement||E1,l&&(o<0&&u===0?(Fb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,S=null):o===u&&(y=!0,S=f.route.hydrateFallbackElement||null)));let m=e.concat(a.slice(0,u+1)),d=()=>{let g;return p?g=b:y?g=S:f.route.Component?g=E.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=h,E.createElement(w1,{match:f,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||u===0)?E.createElement(Gb,{location:n.location,revalidation:n.revalidation,component:b,error:p,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:c}):d()},null)}function Ad(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function C1(t){let e=E.useContext(la);return fe(e,Ad(t)),e}function A1(t){let e=E.useContext(Rc);return fe(e,Ad(t)),e}function R1(t){let e=E.useContext(Yt);return fe(e,Ad(t)),e}function Rd(t){let e=R1(t),n=e.matches[e.matches.length-1];return fe(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function N1(){return Rd("useRouteId")}function x1(){let t=E.useContext(Cd),e=A1("useRouteError"),n=Rd("useRouteError");return t!==void 0?t:e.errors?.[n]}function O1(){let{router:t}=C1("useNavigate"),e=Rd("useNavigate"),n=E.useRef(!1);return Pb(()=>{n.current=!0}),E.useCallback(async(r,a={})=>{Lt(n.current,Hb),n.current&&(typeof r=="number"?await t.navigate(r):await t.navigate(r,{fromRouteId:e,...a}))},[t,e])}var og={};function Fb(t,e,n){!e&&!og[t]&&(og[t]=!0,Lt(!1,n))}E.memo(I1);function I1({routes:t,future:e,state:n,onError:i}){return Vb(t,void 0,n,i,e)}function Ri(t){fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function D1({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:a=!1,unstable_useTransitions:s}){fe(!Ks(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),o=E.useMemo(()=>({basename:l,navigator:r,static:a,unstable_useTransitions:s,future:{}}),[l,r,a,s]);typeof n=="string"&&(n=sa(n));let{pathname:c="/",search:h="",hash:f="",state:u=null,key:p="default"}=n,y=E.useMemo(()=>{let b=bn(c,l);return b==null?null:{location:{pathname:b,search:h,hash:f,state:u,key:p},navigationType:i}},[l,c,h,f,u,p,i]);return Lt(y!=null,`<Router basename="${l}"> is not able to match the URL "${c}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:E.createElement(Rt.Provider,{value:o},E.createElement(Ys.Provider,{children:e,value:y}))}function M1({children:t,location:e}){return v1(Wf(t),e)}function Wf(t,e=[]){let n=[];return E.Children.forEach(t,(i,r)=>{if(!E.isValidElement(i))return;let a=[...e,r];if(i.type===E.Fragment){n.push.apply(n,Wf(i.props.children,a));return}fe(i.type===Ri,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),fe(!i.props.index||!i.props.children,"An index route cannot have child routes.");let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Wf(i.props.children,a)),n.push(s)}),n}var Kl="get",Ql="application/x-www-form-urlencoded";function Nc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function k1(t){return Nc(t)&&t.tagName.toLowerCase()==="button"}function L1(t){return Nc(t)&&t.tagName.toLowerCase()==="form"}function U1(t){return Nc(t)&&t.tagName.toLowerCase()==="input"}function z1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function B1(t,e){return t.button===0&&(!e||e==="_self")&&!z1(t)}var Nl=null;function j1(){if(Nl===null)try{new FormData(document.createElement("form"),0),Nl=!1}catch{Nl=!0}return Nl}var H1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mu(t){return t!=null&&!H1.has(t)?(Lt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ql}"`),null):t}function P1(t,e){let n,i,r,a,s;if(L1(t)){let l=t.getAttribute("action");i=l?bn(l,e):null,n=t.getAttribute("method")||Kl,r=Mu(t.getAttribute("enctype"))||Ql,a=new FormData(t)}else if(k1(t)||U1(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=t.getAttribute("formaction")||l.getAttribute("action");if(i=o?bn(o,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||Kl,r=Mu(t.getAttribute("formenctype"))||Mu(l.getAttribute("enctype"))||Ql,a=new FormData(l,t),!j1()){let{name:c,type:h,value:f}=t;if(h==="image"){let u=c?`${c}.`:"";a.append(`${u}x`,"0"),a.append(`${u}y`,"0")}else c&&a.append(c,f)}}else{if(Nc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Kl,i=null,r=Ql,s=t}return a&&r==="text/plain"&&(s=a,a=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:a,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nd(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function q1(t,e,n,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${i}`:r.pathname=`${r.pathname}.${i}`:r.pathname==="/"?r.pathname=`_root.${i}`:e&&bn(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function V1(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function G1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function F1(t,e,n){let i=await Promise.all(t.map(async r=>{let a=e.routes[r.route.id];if(a){let s=await V1(a,n);return s.links?s.links():[]}return[]}));return X1(i.flat(1).filter(G1).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function cg(t,e,n,i,r,a){let s=(o,c)=>n[c]?o.route.id!==n[c].route.id:!0,l=(o,c)=>n[c].pathname!==o.pathname||n[c].route.path?.endsWith("*")&&n[c].params["*"]!==o.params["*"];return a==="assets"?e.filter((o,c)=>s(o,c)||l(o,c)):a==="data"?e.filter((o,c)=>{let h=i.routes[o.route.id];if(!h||!h.hasLoader)return!1;if(s(o,c)||l(o,c))return!0;if(o.route.shouldRevalidate){let f=o.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Y1(t,e,{includeHydrateFallback:n}={}){return K1(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1))}function K1(t){return[...new Set(t)]}function Q1(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function X1(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let a=JSON.stringify(Q1(r));return n.has(a)||(n.add(a),i.push({key:a,link:r})),i},[])}function Yb(){let t=E.useContext(la);return Nd(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function W1(){let t=E.useContext(Rc);return Nd(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var xd=E.createContext(void 0);xd.displayName="FrameworkContext";function Kb(){let t=E.useContext(xd);return Nd(t,"You must render this element inside a <HydratedRouter> element"),t}function $1(t,e){let n=E.useContext(xd),[i,r]=E.useState(!1),[a,s]=E.useState(!1),{onFocus:l,onBlur:o,onMouseEnter:c,onMouseLeave:h,onTouchStart:f}=e,u=E.useRef(null);E.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let b=m=>{m.forEach(d=>{s(d.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return u.current&&S.observe(u.current),()=>{S.disconnect()}}},[t]),E.useEffect(()=>{if(i){let b=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(b)}}},[i]);let p=()=>{r(!0)},y=()=>{r(!1),s(!1)};return n?t!=="intent"?[a,u,{}]:[a,u,{onFocus:wa(l,p),onBlur:wa(o,y),onMouseEnter:wa(c,p),onMouseLeave:wa(h,y),onTouchStart:wa(f,p)}]:[!1,u,{}]}function wa(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Z1({page:t,...e}){let{router:n}=Yb(),i=E.useMemo(()=>xb(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?E.createElement(eA,{page:t,matches:i,...e}):null}function J1(t){let{manifest:e,routeModules:n}=Kb(),[i,r]=E.useState([]);return E.useEffect(()=>{let a=!1;return F1(t,e,n).then(s=>{a||r(s)}),()=>{a=!0}},[t,e,n]),i}function eA({page:t,matches:e,...n}){let i=vi(),{future:r,manifest:a,routeModules:s}=Kb(),{basename:l}=Yb(),{loaderData:o,matches:c}=W1(),h=E.useMemo(()=>cg(t,e,c,a,i,"data"),[t,e,c,a,i]),f=E.useMemo(()=>cg(t,e,c,a,i,"assets"),[t,e,c,a,i]),u=E.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let b=new Set,S=!1;if(e.forEach(d=>{let g=a.routes[d.route.id];!g||!g.hasLoader||(!h.some(v=>v.route.id===d.route.id)&&d.route.id in o&&s[d.route.id]?.shouldRevalidate||g.hasClientLoader?S=!0:b.add(d.route.id))}),b.size===0)return[];let m=q1(t,l,r.unstable_trailingSlashAwareDataRequests,"data");return S&&b.size>0&&m.searchParams.set("_routes",e.filter(d=>b.has(d.route.id)).map(d=>d.route.id).join(",")),[m.pathname+m.search]},[l,r.unstable_trailingSlashAwareDataRequests,o,i,a,h,e,t,s]),p=E.useMemo(()=>Y1(f,a),[f,a]),y=J1(f);return E.createElement(E.Fragment,null,u.map(b=>E.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),p.map(b=>E.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),y.map(({key:b,link:S})=>E.createElement("link",{key:b,nonce:n.nonce,...S})))}function tA(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var nA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nA&&(window.__reactRouterVersion="7.12.0")}catch{}function iA({basename:t,children:e,unstable_useTransitions:n,window:i}){let r=E.useRef();r.current==null&&(r.current=zC({window:i,v5Compat:!0}));let a=r.current,[s,l]=E.useState({action:a.action,location:a.location}),o=E.useCallback(c=>{n===!1?l(c):E.startTransition(()=>l(c))},[n]);return E.useLayoutEffect(()=>a.listen(o),[a,o]),E.createElement(D1,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:a,unstable_useTransitions:n})}var Qb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xb=E.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:a,replace:s,state:l,target:o,to:c,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:u,...p},y){let{basename:b,unstable_useTransitions:S}=E.useContext(Rt),m=typeof c=="string"&&Qb.test(c),d=Ub(c,b);c=d.to;let g=y1(c,{relative:r}),[v,C,I]=$1(i,p),A=lA(c,{replace:s,state:l,target:o,preventScrollReset:h,relative:r,viewTransition:f,unstable_defaultShouldRevalidate:u,unstable_useTransitions:S});function N(L){e&&e(L),L.defaultPrevented||A(L)}let D=E.createElement("a",{...p,...I,href:d.absoluteURL||g,onClick:d.isExternal||a?e:N,ref:tA(y,C),target:o,"data-discover":!m&&n==="render"?"true":void 0});return v&&!m?E.createElement(E.Fragment,null,D,E.createElement(Z1,{page:g})):D});Xb.displayName="Link";var rA=E.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:a,to:s,viewTransition:l,children:o,...c},h){let f=Xs(s,{relative:c.relative}),u=vi(),p=E.useContext(Rc),{navigator:y,basename:b}=E.useContext(Rt),S=p!=null&&hA(f)&&l===!0,m=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,d=u.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(d=d.toLowerCase(),g=g?g.toLowerCase():null,m=m.toLowerCase()),g&&b&&(g=bn(g,b)||g);const v=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let C=d===m||!r&&d.startsWith(m)&&d.charAt(v)==="/",I=g!=null&&(g===m||!r&&g.startsWith(m)&&g.charAt(m.length)==="/"),A={isActive:C,isPending:I,isTransitioning:S},N=C?e:void 0,D;typeof i=="function"?D=i(A):D=[i,C?"active":null,I?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let L=typeof a=="function"?a(A):a;return E.createElement(Xb,{...c,"aria-current":N,className:D,ref:h,style:L,to:s,viewTransition:l},typeof o=="function"?o(A):o)});rA.displayName="NavLink";var aA=E.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:a,method:s=Kl,action:l,onSubmit:o,relative:c,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:u,...p},y)=>{let{unstable_useTransitions:b}=E.useContext(Rt),S=uA(),m=fA(l,{relative:c}),d=s.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&Qb.test(l),v=C=>{if(o&&o(C),C.defaultPrevented)return;C.preventDefault();let I=C.nativeEvent.submitter,A=I?.getAttribute("formmethod")||s,N=()=>S(I||C.currentTarget,{fetcherKey:e,method:A,navigate:n,replace:r,state:a,relative:c,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:u});b&&n!==!1?E.startTransition(()=>N()):N()};return E.createElement("form",{ref:y,method:d,action:m,onSubmit:i?o:v,...p,"data-discover":!g&&t==="render"?"true":void 0})});aA.displayName="Form";function sA(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wb(t){let e=E.useContext(la);return fe(e,sA(t)),e}function lA(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:a,viewTransition:s,unstable_defaultShouldRevalidate:l,unstable_useTransitions:o}={}){let c=Qs(),h=vi(),f=Xs(t,{relative:a});return E.useCallback(u=>{if(B1(u,e)){u.preventDefault();let p=n!==void 0?n:gs(h)===gs(f),y=()=>c(t,{replace:p,state:i,preventScrollReset:r,relative:a,viewTransition:s,unstable_defaultShouldRevalidate:l});o?E.startTransition(()=>y()):y()}},[h,c,f,n,i,e,t,r,a,s,l,o])}var oA=0,cA=()=>`__${String(++oA)}__`;function uA(){let{router:t}=Wb("useSubmit"),{basename:e}=E.useContext(Rt),n=N1(),i=t.fetch,r=t.navigate;return E.useCallback(async(a,s={})=>{let{action:l,method:o,encType:c,formData:h,body:f}=P1(a,e);if(s.navigate===!1){let u=s.fetcherKey||cA();await i(u,n,s.action||l,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:h,body:f,formMethod:s.method||o,formEncType:s.encType||c,flushSync:s.flushSync})}else await r(s.action||l,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:h,body:f,formMethod:s.method||o,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[i,r,e,n])}function fA(t,{relative:e}={}){let{basename:n}=E.useContext(Rt),i=E.useContext(Yt);fe(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),a={...Xs(t||".",{relative:e})},s=vi();if(t==null){a.search=s.search;let l=new URLSearchParams(a.search),o=l.getAll("index");if(o.some(h=>h==="")){l.delete("index"),o.filter(f=>f).forEach(f=>l.append("index",f));let h=l.toString();a.search=h?`?${h}`:""}}return(!t||t===".")&&r.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:hn([n,a.pathname])),gs(a)}function hA(t,{relative:e}={}){let n=E.useContext(Bb);fe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Wb("useViewTransitionState"),r=Xs(t,{relative:e});if(!n.isTransitioning)return!1;let a=bn(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=bn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Oo(r.pathname,s)!=null||Oo(r.pathname,a)!=null}const dA=()=>{};var ug={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw oa(e)},oa=function(t){return new Error("Firebase Database ("+$b.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},pA=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const a=t[n++];e[i++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=t[n++],s=t[n++],l=t[n++],o=((r&7)<<18|(a&63)<<12|(s&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(o>>10)),e[i++]=String.fromCharCode(56320+(o&1023))}else{const a=t[n++],s=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(a&63)<<6|s&63)}}return e.join("")},Od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const a=t[r],s=r+1<t.length,l=s?t[r+1]:0,o=r+2<t.length,c=o?t[r+2]:0,h=a>>2,f=(a&3)<<4|l>>4;let u=(l&15)<<2|c>>6,p=c&63;o||(p=64,s||(u=64)),i.push(n[h],n[f],n[u],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const a=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,a==null||l==null||c==null||f==null)throw new mA;const u=a<<2|l>>4;if(i.push(u),c!==64){const p=l<<4&240|c>>2;if(i.push(p),f!==64){const y=c<<6&192|f;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jb=function(t){const e=Zb(t);return Od.encodeByteArray(e,!0)},Io=function(t){return Jb(t).replace(/\./g,"")},Do=function(t){try{return Od.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t){return e0(void 0,t)}function e0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yA(n)||(t[n]=e0(t[n],e[n]));return t}function yA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=()=>_A().__FIREBASE_DEFAULTS__,bA=()=>{if(typeof process>"u"||typeof ug>"u")return;const t=ug.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Do(t[1]);return e&&JSON.parse(e)},Id=()=>{try{return dA()||vA()||bA()||EA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},t0=t=>Id()?.emulatorHosts?.[t],SA=t=>{const e=t0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},n0=()=>Id()?.config,i0=t=>Id()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function r0(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Io(JSON.stringify(n)),Io(JSON.stringify(s)),""].join(".")}const Xa={};function TA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xa))Xa[e]?t.emulator.push(e):t.prod.push(e);return t}function CA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let fg=!1;function a0(t,e){if(typeof window>"u"||typeof document>"u"||!ca(window.location.host)||Xa[t]===e||Xa[t]||fg)return;Xa[t]=e;function n(u){return`__firebase__banner__${u}`}const i="__firebase__banner",a=TA().prod.length>0;function s(){const u=document.getElementById(i);u&&u.remove()}function l(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function o(u,p){u.setAttribute("width","24"),u.setAttribute("id",p),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{fg=!0,s()},u}function h(u,p){u.setAttribute("id",p),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function f(){const u=CA(i),p=n("text"),y=document.getElementById(p)||document.createElement("span"),b=n("learnmore"),S=document.getElementById(b)||document.createElement("a"),m=n("preprendIcon"),d=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const g=u.element;l(g),h(S,b);const v=c();o(d,m),g.append(d,y,S,v),document.body.appendChild(g)}a?(y.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(d.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function AA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function s0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NA(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xA(){return $b.NODE_ADMIN===!0}function OA(){try{return typeof indexedDB=="object"}catch{return!1}}function IA(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="FirebaseError";class bi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=DA,Object.setPrototypeOf(this,bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,a=this.errors[e],s=a?MA(a,i):"Error",l=`${this.serviceName}: ${s} (${r}).`;return new bi(r,l,i)}}function MA(t,e){return t.replace(kA,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const kA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=function(t){let e={},n={},i={},r="";try{const a=t.split(".");e=ys(Do(a[0])||""),n=ys(Do(a[1])||""),r=a[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},LA=function(t){const e=l0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},UA=function(t){const e=l0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $f(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mo(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Pi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const a=t[r],s=e[r];if(hg(a)&&hg(s)){if(!Pi(a,s))return!1}else if(a!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function hg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const u=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(u<<1|u>>>31)&4294967295}let r=this.chain_[0],a=this.chain_[1],s=this.chain_[2],l=this.chain_[3],o=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=l^a&(s^l),h=1518500249):(c=a^s^l,h=1859775393):f<60?(c=a&s|l&(a|s),h=2400959708):(c=a^s^l,h=3395469782);const u=(r<<5|r>>>27)+c+o+h+i[f]&4294967295;o=l,l=s,s=(a<<30|a>>>2)&4294967295,a=r,r=u}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+o&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const a=this.buf_;let s=this.inbuf_;for(;r<n;){if(s===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(a[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(a),s=0;break}}else for(;r<n;)if(a[s]=e[r],++s,++r,s===this.blockSize){this.compress_(a),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let a=24;a>=0;a-=8)e[i]=this.chain_[r]>>a&255,++i;return e}}function BA(t,e){const n=new jA(t,e);return n.subscribe.bind(n)}class jA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");HA(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=ku),r.error===void 0&&(r.error=ku),r.complete===void 0&&(r.complete=ku);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ku(){}function xc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const a=r-55296;i++,T(i<t.length,"Surrogate pair missing trail surrogate.");const s=t.charCodeAt(i)-56320;r=65536+(a<<10)+s}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Oc=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t&&t._delegate?t._delegate:t}class qi{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ws;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GA(e))try{this.getOrInitializeService({instanceIdentifier:Ni})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:r});i.resolve(a)}catch{}}}}clearInstance(e=Ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ni){return this.instances.has(e)}getOptions(e=Ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[a,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);i===l&&s.resolve(r)}return r}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:VA(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ni){return this.component?this.component.multipleInstances?e:Ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VA(t){return t===Ni?void 0:t}function GA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const YA={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},KA=J.INFO,QA={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},XA=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=QA[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Md{constructor(e){this.name=e,this._logLevel=KA,this._logHandler=XA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const WA=(t,e)=>e.some(n=>t instanceof n);let dg,pg;function $A(){return dg||(dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZA(){return pg||(pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o0=new WeakMap,Zf=new WeakMap,c0=new WeakMap,Lu=new WeakMap,kd=new WeakMap;function JA(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{n(ni(t.result)),r()},s=()=>{i(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&o0.set(n,t)}).catch(()=>{}),kd.set(e,t),e}function eR(t){if(Zf.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{n(),r()},s=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Zf.set(t,e)}let Jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||c0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ni(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tR(t){Jf=t(Jf)}function nR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Uu(this),e,...n);return c0.set(i,e.sort?e.sort():[e]),ni(i)}:ZA().includes(t)?function(...e){return t.apply(Uu(this),e),ni(o0.get(this))}:function(...e){return ni(t.apply(Uu(this),e))}}function iR(t){return typeof t=="function"?nR(t):(t instanceof IDBTransaction&&eR(t),WA(t,$A())?new Proxy(t,Jf):t)}function ni(t){if(t instanceof IDBRequest)return JA(t);if(Lu.has(t))return Lu.get(t);const e=iR(t);return e!==t&&(Lu.set(t,e),kd.set(e,t)),e}const Uu=t=>kd.get(t);function rR(t,e,{blocked:n,upgrade:i,blocking:r,terminated:a}={}){const s=indexedDB.open(t,e),l=ni(s);return i&&s.addEventListener("upgradeneeded",o=>{i(ni(s.result),o.oldVersion,o.newVersion,ni(s.transaction),o)}),n&&s.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),l.then(o=>{a&&o.addEventListener("close",()=>a()),r&&o.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const aR=["get","getKey","getAll","getAllKeys","count"],sR=["put","add","delete","clear"],zu=new Map;function mg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zu.get(e))return zu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=sR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||aR.includes(n)))return;const a=async function(s,...l){const o=this.transaction(s,r?"readwrite":"readonly");let c=o.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),r&&o.done]))[0]};return zu.set(e,a),a}tR(t=>({...t,get:(e,n,i)=>mg(e,n)||t.get(e,n,i),has:(e,n)=>!!mg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function oR(t){return t.getComponent()?.type==="VERSION"}const eh="@firebase/app",gg="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Md("@firebase/app"),cR="@firebase/app-compat",uR="@firebase/analytics-compat",fR="@firebase/analytics",hR="@firebase/app-check-compat",dR="@firebase/app-check",pR="@firebase/auth",mR="@firebase/auth-compat",gR="@firebase/database",yR="@firebase/data-connect",_R="@firebase/database-compat",vR="@firebase/functions",bR="@firebase/functions-compat",ER="@firebase/installations",SR="@firebase/installations-compat",wR="@firebase/messaging",TR="@firebase/messaging-compat",CR="@firebase/performance",AR="@firebase/performance-compat",RR="@firebase/remote-config",NR="@firebase/remote-config-compat",xR="@firebase/storage",OR="@firebase/storage-compat",IR="@firebase/firestore",DR="@firebase/ai",MR="@firebase/firestore-compat",kR="firebase",LR="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="[DEFAULT]",UR={[eh]:"fire-core",[cR]:"fire-core-compat",[fR]:"fire-analytics",[uR]:"fire-analytics-compat",[dR]:"fire-app-check",[hR]:"fire-app-check-compat",[pR]:"fire-auth",[mR]:"fire-auth-compat",[gR]:"fire-rtdb",[yR]:"fire-data-connect",[_R]:"fire-rtdb-compat",[vR]:"fire-fn",[bR]:"fire-fn-compat",[ER]:"fire-iid",[SR]:"fire-iid-compat",[wR]:"fire-fcm",[TR]:"fire-fcm-compat",[CR]:"fire-perf",[AR]:"fire-perf-compat",[RR]:"fire-rc",[NR]:"fire-rc-compat",[xR]:"fire-gcs",[OR]:"fire-gcs-compat",[IR]:"fire-fst",[MR]:"fire-fst-compat",[DR]:"fire-vertex","fire-js":"fire-js",[kR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map,zR=new Map,nh=new Map;function yg(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(nh.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;nh.set(e,t);for(const n of ko.values())yg(n,t);for(const n of zR.values())yg(n,t);return!0}function Ld(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new $s("app","Firebase",BR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=LR;function u0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:th,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw ii.create("bad-app-name",{appName:String(r)});if(n||(n=n0()),!n)throw ii.create("no-options");const a=ko.get(r);if(a){if(Pi(n,a.options)&&Pi(i,a.config))return a;throw ii.create("duplicate-app",{appName:r})}const s=new FA(r);for(const o of nh.values())s.addComponent(o);const l=new jR(n,i,s);return ko.set(r,l),l}function f0(t=th){const e=ko.get(t);if(!e&&t===th&&n0())return u0();if(!e)throw ii.create("no-app",{appName:t});return e}function ri(t,e,n){let i=UR[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const s=[`Unable to register library "${i}" with version "${e}":`];r&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&a&&s.push("and"),a&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(s.join(" "));return}Gr(new qi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="firebase-heartbeat-database",PR=1,_s="firebase-heartbeat-store";let Bu=null;function h0(){return Bu||(Bu=rR(HR,PR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_s)}catch(n){console.warn(n)}}}}).catch(t=>{throw ii.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function qR(t){try{const n=(await h0()).transaction(_s),i=await n.objectStore(_s).get(d0(t));return await n.done,i}catch(e){if(e instanceof bi)En.warn(e.message);else{const n=ii.create("idb-get",{originalErrorMessage:e?.message});En.warn(n.message)}}}async function _g(t,e){try{const i=(await h0()).transaction(_s,"readwrite");await i.objectStore(_s).put(e,d0(t)),await i.done}catch(n){if(n instanceof bi)En.warn(n.message);else{const i=ii.create("idb-set",{originalErrorMessage:n?.message});En.warn(i.message)}}}function d0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=1024,GR=30;class FR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KR(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>GR){const r=QR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){En.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vg(),{heartbeatsToSend:n,unsentEntries:i}=YR(this._heartbeatsCache.heartbeats),r=Io(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return En.warn(e),""}}}function vg(){return new Date().toISOString().substring(0,10)}function YR(t,e=VR){const n=[];let i=t.slice();for(const r of t){const a=n.find(s=>s.agent===r.agent);if(a){if(a.dates.push(r.date),bg(n)>e){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),bg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class KR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OA()?IA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qR(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bg(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}function QR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t){Gr(new qi("platform-logger",e=>new lR(e),"PRIVATE")),Gr(new qi("heartbeat",e=>new FR(e),"PRIVATE")),ri(eh,gg,t),ri(eh,gg,"esm2020"),ri("fire-js","")}XR("");function p0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WR=p0,m0=new $s("auth","Firebase",p0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Md("@firebase/auth");function $R(t,...e){Lo.logLevel<=J.WARN&&Lo.warn(`Auth (${fa}): ${t}`,...e)}function Xl(t,...e){Lo.logLevel<=J.ERROR&&Lo.error(`Auth (${fa}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,...e){throw Ud(t,...e)}function qt(t,...e){return Ud(t,...e)}function g0(t,e,n){const i={...WR(),[e]:n};return new $s("auth","Firebase",i).create(e,{appName:t.name})}function ai(t){return g0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ud(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return m0.create(t,...e)}function k(t,e,...n){if(!t)throw Ud(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xl(e),new Error(e)}function wn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(){return typeof self<"u"&&self.location?.href||""}function ZR(){return Eg()==="http:"||Eg()==="https:"}function Eg(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZR()||RA()||"connection"in navigator)?navigator.onLine:!0}function eN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=Dd()||s0()}get(){return JR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iN=new Zs(3e4,6e4);function Ic(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ha(t,e,n,i,r={}){return _0(t,r,async()=>{let a={},s={};i&&(e==="GET"?s=i:a={body:JSON.stringify(i)});const l=ua({key:t.config.apiKey,...s}).slice(1),o=await t._getAdditionalHeaders();o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:o,...a};return AA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ca(t.emulatorConfig.host)&&(c.credentials="include"),y0.fetch()(await b0(t,t.config.apiHost,n,l),c)})}async function _0(t,e,n){t._canInitEmulator=!1;const i={...tN,...e};try{const r=new rN(t),a=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw xl(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const l=a.ok?s.errorMessage:s.error.message,[o,c]=l.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw xl(t,"user-disabled",s);const h=i[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw g0(t,h,c);Sn(t,h)}}catch(r){if(r instanceof bi)throw r;Sn(t,"network-request-failed",{message:String(r)})}}async function v0(t,e,n,i,r={}){const a=await ha(t,e,n,i,r);return"mfaPendingCredential"in a&&Sn(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function b0(t,e,n,i){const r=`${e}${n}?${i}`,a=t,s=a.config.emulator?zd(t.config,r):`${t.config.apiScheme}://${r}`;return nN.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(s).toString():s}class rN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(qt(this.auth,"network-request-failed")),iN.get())})}}function xl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=qt(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t,e){return ha(t,"POST","/v1/accounts:delete",e)}async function Uo(t,e){return ha(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sN(t,e=!1){const n=ht(t),i=await n.getIdToken(e),r=Bd(i);k(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const a=typeof r.firebase=="object"?r.firebase:void 0,s=a?.sign_in_provider;return{claims:r,token:i,authTime:Wa(ju(r.auth_time)),issuedAtTime:Wa(ju(r.iat)),expirationTime:Wa(ju(r.exp)),signInProvider:s||null,signInSecondFactor:a?.sign_in_second_factor||null}}function ju(t){return Number(t)*1e3}function Bd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Xl("JWT malformed, contained fewer than 3 sections"),null;try{const r=Do(n);return r?JSON.parse(r):(Xl("Failed to decode base64 JWT payload"),null)}catch(r){return Xl("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Sg(t){const e=Bd(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof bi&&lN(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function lN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t){const e=t.auth,n=await t.getIdToken(),i=await vs(t,Uo(e,{idToken:n}));k(i?.users.length,e,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const a=r.providerUserInfo?.length?E0(r.providerUserInfo):[],s=uN(t.providerData,a),l=t.isAnonymous,o=!(t.email&&r.passwordHash)&&!s?.length,c=l?o:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new rh(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function cN(t){const e=ht(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uN(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function E0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(t,e){const n=await _0(t,{},async()=>{const i=ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:a}=t.config,s=await b0(t,r,"/v1/token",`key=${a}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:l,body:i};return t.emulatorConfig&&ca(t.emulatorConfig.host)&&(o.credentials="include"),y0.fetch()(s,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hN(t,e){return ha(t,"POST","/v2/accounts:revokeToken",Ic(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){k(e.length!==0,"internal-error");const n=Sg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:a}=await fN(e,n);this.updateTokensAndExpiration(i,r,Number(a))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:a}=n,s=new Rr;return i&&(k(typeof i=="string","internal-error",{appName:e}),s.refreshToken=i),r&&(k(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),a&&(k(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dt{constructor({uid:e,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new oN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new rh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sN(this,e)}reload(){return cN(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(ai(this.auth));const e=await this.getIdToken();return await vs(this,aN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,r=n.email??void 0,a=n.phoneNumber??void 0,s=n.photoURL??void 0,l=n.tenantId??void 0,o=n._redirectEventId??void 0,c=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:u,isAnonymous:p,providerData:y,stsTokenManager:b}=n;k(f&&b,e,"internal-error");const S=Rr.fromJSON(this.name,b);k(typeof f=="string",e,"internal-error"),On(i,e.name),On(r,e.name),k(typeof u=="boolean",e,"internal-error"),k(typeof p=="boolean",e,"internal-error"),On(a,e.name),On(s,e.name),On(l,e.name),On(o,e.name),On(c,e.name),On(h,e.name);const m=new Dt({uid:f,auth:e,email:r,emailVerified:u,displayName:i,isAnonymous:p,photoURL:s,phoneNumber:a,tenantId:l,stsTokenManager:S,createdAt:c,lastLoginAt:h});return y&&Array.isArray(y)&&(m.providerData=y.map(d=>({...d}))),o&&(m._redirectEventId=o),m}static async _fromIdTokenResponse(e,n,i=!1){const r=new Rr;r.updateFromServerResponse(n);const a=new Dt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await zo(a),a}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];k(r.localId!==void 0,"internal-error");const a=r.providerUserInfo!==void 0?E0(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!a?.length,l=new Rr;l.updateFromIdToken(i);const o=new Dt({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new rh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!a?.length};return Object.assign(o,c),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new Map;function ln(t){wn(t instanceof Function,"Expected a class definition");let e=wg.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}S0.type="NONE";const Tg=S0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e,n){return`firebase:${t}:${e}:${n}`}class Nr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:a}=this.auth;this.fullUserKey=Wl(this.userKey,r.apiKey,a),this.fullPersistenceKey=Wl("persistence",r.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Uo(this.auth,{idToken:e}).catch(()=>{});return n?Dt._fromGetAccountInfoResponse(this.auth,n,e):null}return Dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Nr(ln(Tg),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let a=r[0]||ln(Tg);const s=Wl(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(s);if(h){let f;if(typeof h=="string"){const u=await Uo(e,{idToken:h}).catch(()=>{});if(!u)break;f=await Dt._fromGetAccountInfoResponse(e,u,h)}else f=Dt._fromJSON(e,h);c!==a&&(l=f),a=c;break}}catch{}const o=r.filter(c=>c._shouldAllowMigration);return!a._shouldAllowMigration||!o.length?new Nr(a,e,i):(a=o[0],l&&await a._set(s,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==a)try{await c._remove(s)}catch{}})),new Nr(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(N0(e))return"Blackberry";if(x0(e))return"Webos";if(T0(e))return"Safari";if((e.includes("chrome/")||C0(e))&&!e.includes("edge/"))return"Chrome";if(R0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function w0(t=Ye()){return/firefox\//i.test(t)}function T0(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C0(t=Ye()){return/crios\//i.test(t)}function A0(t=Ye()){return/iemobile/i.test(t)}function R0(t=Ye()){return/android/i.test(t)}function N0(t=Ye()){return/blackberry/i.test(t)}function x0(t=Ye()){return/webos/i.test(t)}function jd(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dN(t=Ye()){return jd(t)&&!!window.navigator?.standalone}function pN(){return NA()&&document.documentMode===10}function O0(t=Ye()){return jd(t)||R0(t)||x0(t)||N0(t)||/windows phone/i.test(t)||A0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e=[]){let n;switch(t){case"Browser":n=Cg(Ye());break;case"Worker":n=`${Cg(Ye())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fa}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=a=>new Promise((s,l)=>{try{const o=e(a);s(o)}catch(o){l(o)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e={}){return ha(t,"GET","/v2/passwordPolicy",Ic(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=6;class _N{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??yN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ag(this),this.idTokenSubscription=new Ag(this),this.beforeStateQueue=new mN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Nr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uo(this,{idToken:e}),i=await Dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(s,s))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,s=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===s)&&l?.user&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(ai(this));const n=e?ht(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gN(this),n=new _N(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await hN(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(l,this,"internal-error"),l.then(()=>{s||a(this.currentUser)}),typeof n=="function"){const o=e.addObserver(n,i,r);return()=>{s=!0,o()}}else{const o=e.addObserver(n);return()=>{s=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&$R(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Dc(t){return ht(t)}class Ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=BA(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bN(t){Hd=t}function EN(t){return Hd.loadJS(t)}function SN(){return Hd.gapiScript}function wN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t,e){const n=Ld(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),a=n.getOptions();if(Pi(a,e??{}))return r;Sn(r,"already-initialized")}return n.initialize({options:e})}function CN(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(ln);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function AN(t,e,n){const i=Dc(t);k(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,a=D0(e),{host:s,port:l}=RN(e),o=l===null?"":`:${l}`,c={url:`${a}//${s}${o}/`},h=Object.freeze({host:s,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){k(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),k(Pi(c,i.config.emulator)&&Pi(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,ca(s)?(r0(`${a}//${s}${o}`),a0("Auth",!0)):NN()}function D0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RN(t){const e=D0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const a=r[1];return{host:a,port:Rg(i.substr(a.length+1))}}else{const[a,s]=i.split(":");return{host:a,port:Rg(s)}}}function Rg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(t,e){return v0(t,"POST","/v1/accounts:signInWithIdp",Ic(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN="http://localhost";class Vi extends M0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...a}=n;if(!i||!r)return null;const s=new Vi(i,r);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return xr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,xr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xr(e,n)}buildRequest(){const e={requestUri:xN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ua(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends k0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Js{constructor(){super("facebook.com")}static credential(e){return Vi._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vi._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Bn.credential(n,i)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Js{constructor(){super("github.com")}static credential(e){return Vi._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Js{constructor(){super("twitter.com")}static credential(e,n){return Vi._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Hn.credential(n,i)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e){return v0(t,"POST","/v1/accounts:signUp",Ic(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const a=await Dt._fromIdTokenResponse(e,i,r),s=Ng(i);return new hi({user:a,providerId:s,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Ng(i);return new hi({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t){if(Ot(t.app))return Promise.reject(ai(t));const e=Dc(t);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new hi({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await ON(e,{returnSecureToken:!0}),i=await hi._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends bi{constructor(e,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Bo(e,n,i,r)}}function L0(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(t,a,e,i):a})}async function DN(t,e,n=!1){const i=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,e,n=!1){const{auth:i}=t;if(Ot(i.app))return Promise.reject(ai(i));const r="reauthenticate";try{const a=await vs(t,L0(i,r,e,t),n);k(a.idToken,i,"internal-error");const s=Bd(a.idToken);k(s,i,"internal-error");const{sub:l}=s;return k(t.uid===l,i,"user-mismatch"),hi._forOperation(t,r,a)}catch(a){throw a?.code==="auth/user-not-found"&&Sn(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(t,e,n=!1){if(Ot(t.app))return Promise.reject(ai(t));const i="signIn",r=await L0(t,i,e),a=await hi._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(a.user),a}function LN(t,e,n,i){return ht(t).onIdTokenChanged(e,n,i)}function UN(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function zN(t,e,n,i){return ht(t).onAuthStateChanged(e,n,i)}const jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=1e3,jN=10;class z0 extends U0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=O0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,o)=>{this.notifyListeners(s,o)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const s=this.storage.getItem(i);!n&&this.localCache[i]===s||this.notifyListeners(i,s)},a=this.storage.getItem(i);pN()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jN):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},BN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}z0.type="LOCAL";const HN=z0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends U0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}B0.type="SESSION";const j0=B0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Mc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:a}=n.data,s=this.handlersMap[r];if(!s?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(s).map(async c=>c(n.origin,a)),o=await PN(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,s;return new Promise((l,o)=>{const c=Pd("",20);r.port1.start();const h=setTimeout(()=>{o(new Error("unsupported_event"))},i);s={messageChannel:r,onMessage(f){const u=f;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(h),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(u.data.response);break;default:clearTimeout(h),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function VN(t){Vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function GN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FN(){return navigator?.serviceWorker?.controller||null}function YN(){return H0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="firebaseLocalStorageDb",KN=1,Ho="firebaseLocalStorage",q0="fbase_key";class el{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function QN(){const t=indexedDB.deleteDatabase(P0);return new el(t).toPromise()}function ah(){const t=indexedDB.open(P0,KN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ho,{keyPath:q0})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ho)?e(i):(i.close(),await QN(),e(await ah()))})})}async function xg(t,e,n){const i=kc(t,!0).put({[q0]:e,value:n});return new el(i).toPromise()}async function XN(t,e){const n=kc(t,!1).get(e),i=await new el(n).toPromise();return i===void 0?null:i.value}function Og(t,e){const n=kc(t,!0).delete(e);return new el(n).toPromise()}const WN=800,$N=3;class V0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>$N)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return H0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(YN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await GN(),!this.activeServiceWorker)return;this.sender=new qN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await xg(e,jo,"1"),await Og(e,jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>xg(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>XN(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const a=kc(r,!1).getAll();return new el(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:a}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V0.type="LOCAL";const ZN=V0;new Zs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t,e){return e?ln(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends M0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ex(t){return kN(t.auth,new qd(t),t.bypassAuthState)}function tx(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),MN(n,new qd(t),t.bypassAuthState)}async function nx(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),DN(n,new qd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,i,r,a=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:a,error:s,type:l}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:n,sessionId:i,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(o))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ex;case"linkViaPopup":case"linkViaRedirect":return nx;case"reauthViaPopup":case"reauthViaRedirect":return tx;default:Sn(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=new Zs(2e3,1e4);class _r extends G0{constructor(e,n,i,r,a){super(e,n,r,a),this.provider=i,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ix.get())};e()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="pendingRedirect",$l=new Map;class ax extends G0{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const i=await sx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sx(t,e){const n=cx(e),i=ox(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function lx(t,e){$l.set(t._key(),e)}function ox(t){return ln(t._redirectPersistence)}function cx(t){return Wl(rx,t.config.apiKey,t.name)}async function ux(t,e,n=!1){if(Ot(t.app))return Promise.reject(ai(t));const i=Dc(t),r=JN(i,e),s=await new ax(i,r,n).execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=10*60*1e3;class hx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!F0(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ig(e))}saveEventToCache(e){this.cachedEventUids.add(Ig(e)),this.lastProcessedEventTime=Date.now()}}function Ig(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F0({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function dx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e={}){return ha(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gx=/^https?/;async function yx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await px(t);for(const n of e)try{if(_x(n))return}catch{}Sn(t,"unauthorized-domain")}function _x(t){const e=ih(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===i}if(!gx.test(n))return!1;if(mx.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=new Zs(3e4,6e4);function Dg(){const t=Vt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bx(t){return new Promise((e,n)=>{function i(){Dg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dg(),n(qt(t,"network-request-failed"))},timeout:vx.get()})}if(Vt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Vt().gapi?.load)i();else{const r=wN("iframefcb");return Vt()[r]=()=>{gapi.load?i():n(qt(t,"network-request-failed"))},EN(`${SN()}?onload=${r}`).catch(a=>n(a))}}).catch(e=>{throw Zl=null,e})}let Zl=null;function Ex(t){return Zl=Zl||bx(t),Zl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=new Zs(5e3,15e3),wx="__/auth/iframe",Tx="emulator/auth/iframe",Cx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ax=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rx(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zd(e,Tx):`https://${t.config.authDomain}/${wx}`,i={apiKey:e.apiKey,appName:t.name,v:fa},r=Ax.get(t.config.apiHost);r&&(i.eid=r);const a=t._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${ua(i).slice(1)}`}async function Nx(t){const e=await Ex(t),n=Vt().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:Rx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cx,dontclear:!0},i=>new Promise(async(r,a)=>{await i.restyle({setHideOnLeave:!1});const s=qt(t,"network-request-failed"),l=Vt().setTimeout(()=>{a(s)},Sx.get());function o(){Vt().clearTimeout(l),r(i)}i.ping(o).then(o,()=>{a(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ox=500,Ix=600,Dx="_blank",Mx="http://localhost";class Mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kx(t,e,n,i=Ox,r=Ix){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const o={...xx,width:i.toString(),height:r.toString(),top:a,left:s},c=Ye().toLowerCase();n&&(l=C0(c)?Dx:n),w0(c)&&(e=e||Mx,o.scrollbars="yes");const h=Object.entries(o).reduce((u,[p,y])=>`${u}${p}=${y},`,"");if(dN(c)&&l!=="_self")return Lx(e||"",l),new Mg(null);const f=window.open(e||"",l,h);k(f,t,"popup-blocked");try{f.focus()}catch{}return new Mg(f)}function Lx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="__/auth/handler",zx="emulator/auth/handler",Bx=encodeURIComponent("fac");async function kg(t,e,n,i,r,a){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:fa,eventId:r};if(e instanceof k0){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",$f(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))s[h]=f}if(e instanceof Js){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const o=await t._getAppCheckToken(),c=o?`#${Bx}=${encodeURIComponent(o)}`:"";return`${jx(t)}?${ua(l).slice(1)}${c}`}function jx({config:t}){return t.emulator?zd(t,zx):`https://${t.authDomain}/${Ux}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="webStorageSupport";class Hx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=j0,this._completeRedirectFn=ux,this._overrideRedirectResult=lx}async _openPopup(e,n,i,r){wn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await kg(e,n,i,ih(),r);return kx(e,a,Pd())}async _openRedirect(e,n,i,r){await this._originValidation(e);const a=await kg(e,n,i,ih(),r);return VN(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:a}=this.eventManagers[n];return r?Promise.resolve(r):(wn(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Nx(e),i=new hx(e);return n.register("authEvent",r=>(k(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},r=>{const a=r?.[0]?.[Hu];a!==void 0&&n(!!a),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return O0()||T0()||jd()}}const Px=Hx;var Lg="@firebase/auth",Ug="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gx(t){Gr(new qi("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=i.options;k(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const o={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I0(t)},c=new vN(i,r,a,o);return CN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Gr(new qi("auth-internal",e=>{const n=Dc(e.getProvider("auth").getImmediate());return(i=>new qx(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ri(Lg,Ug,Vx(t)),ri(Lg,Ug,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=5*60,Yx=i0("authIdTokenMaxAge")||Fx;let zg=null;const Kx=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Yx)return;const r=n?.token;zg!==r&&(zg=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Qx(t=f0()){const e=Ld(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TN(t,{popupRedirectResolver:Px,persistence:[ZN,HN,j0]}),i=i0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const s=Kx(a.toString());UN(n,s,()=>s(n.currentUser)),LN(n,l=>s(l))}}const r=t0("auth");return r&&AN(n,`http://${r}`),n}function Xx(){return document.getElementsByTagName("head")?.[0]??document}bN({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const a=qt("internal-error");a.customData=r,n(a)},i.type="text/javascript",i.charset="UTF-8",Xx().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gx("Browser");var Wx="firebase",$x="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri(Wx,$x,"app");var Bg={};const jg="@firebase/database",Hg="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y0="";function Zx(t){Y0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ys(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jx(e)}}catch{}return new eO},Oi=K0("localStorage"),tO=K0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Md("@firebase/database"),nO=function(){let t=1;return function(){return t++}}(),Q0=function(t){const e=PA(t),n=new zA;n.update(e);const i=n.digest();return Od.encodeByteArray(i)},tl=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=tl.apply(null,i):typeof i=="object"?e+=Ae(i):e+=i,e+=" "}return e};let $a=null,Pg=!0;const iO=function(t,e){T(!0,"Can't turn on custom loggers persistently."),Or.logLevel=J.VERBOSE,$a=Or.log.bind(Or)},Ue=function(...t){if(Pg===!0&&(Pg=!1,$a===null&&tO.get("logging_enabled")===!0&&iO()),$a){const e=tl.apply(null,t);$a(e)}},nl=function(t){return function(...e){Ue(t,...e)}},sh=function(...t){const e="FIREBASE INTERNAL ERROR: "+tl(...t);Or.error(e)},Tn=function(...t){const e=`FIREBASE FATAL ERROR: ${tl(...t)}`;throw Or.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+tl(...t);Or.warn(e)},rO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},aO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fr="[MIN_NAME]",Gi="[MAX_NAME]",Zi=function(t,e){if(t===e)return 0;if(t===Fr||e===Gi)return-1;if(e===Fr||t===Gi)return 1;{const n=qg(t),i=qg(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},sO=function(t,e){return t===e?0:t<e?-1:1},Ta=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},Gd=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ae(e[i]),n+=":",n+=Gd(t[e[i]]);return n+="}",n},X0=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const W0=function(t){T(!Vd(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,a,s,l,o;t===0?(a=0,s=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),a=l+i,s=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(a=0,s=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(o=n;o;o-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(o=e;o;o-=1)c.push(a%2?1:0),a=Math.floor(a/2);c.push(r?1:0),c.reverse();const h=c.join("");let f="";for(o=0;o<64;o+=8){let u=parseInt(h.substr(o,8),2).toString(16);u.length===1&&(u="0"+u),f=f+u}return f.toLowerCase()},lO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const uO=new RegExp("^-?(0*)\\d{1,10}$"),fO=-2147483648,hO=2147483647,qg=function(t){if(uO.test(t)){const e=Number(t);if(e>=fO&&e<=hO)return e}return null},da=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},dO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Za=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ot(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Jl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="5",$0="v",Z0="s",J0="r",eE="f",tE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nE="ls",iE="p",lh="ac",rE="websocket",aE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n,i,r,a=!1,s="",l=!1,o=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=a,this.persistenceKey=s,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=o,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Oi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function lE(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let i;if(e===rE)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===aE)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gO(t)&&(n.ns=t.namespace);const r=[];return Pe(n,(a,s)=>{r.push(a+"="+s)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(){this.counters_={}}incrementCounter(e,n=1){Kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={},qu={};function Yd(t){const e=t.toString();return Pu[e]||(Pu[e]=new yO),Pu[e]}function _O(t,e){const n=t.toString();return qu[n]||(qu[n]=e()),qu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&da(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="start",bO="close",EO="pLPCommand",SO="pRTLPCB",oE="id",cE="pw",uE="ser",wO="cb",TO="seg",CO="ts",AO="d",RO="dframe",fE=1870,hE=30,NO=fE-hE,xO=25e3,OO=3e4;class vr{constructor(e,n,i,r,a,s,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=a,this.transportSessionId=s,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=nl(e),this.stats_=Yd(n),this.urlFn=o=>(this.appCheckToken&&(o[lh]=this.appCheckToken),lE(n,aE,o))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(OO)),aO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kd((...a)=>{const[s,l,o,c,h]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===Vg)this.id=l,this.password=o;else if(s===bO)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...a)=>{const[s,l]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(s,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Vg]="t",i[uE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[wO]=this.scriptTagHolder.uniqueCallbackIdentifier),i[$0]=Fd,this.transportSessionId&&(i[Z0]=this.transportSessionId),this.lastSessionId&&(i[nE]=this.lastSessionId),this.applicationId&&(i[iE]=this.applicationId),this.appCheckToken&&(i[lh]=this.appCheckToken),typeof location<"u"&&location.hostname&&tE.test(location.hostname)&&(i[J0]=eE);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vr.forceAllow_=!0}static forceDisallow(){vr.forceDisallow_=!0}static isAvailable(){return vr.forceAllow_?!0:!vr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lO()&&!oO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Jb(n),r=X0(i,NO);for(let a=0;a<r.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[RO]="t",i[oE]=e,i[cE]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kd{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nO(),window[EO+this.uniqueCallbackIdentifier]=e,window[SO+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kd.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(l){Ue("frame writing exception"),l.stack&&Ue(l.stack),Ue(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oE]=this.myID,e[cE]=this.myPW,e[uE]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hE+i.length<=fE;){const s=this.pendingSegs.shift();i=i+"&"+TO+r+"="+s.seg+"&"+CO+r+"="+s.ts+"&"+AO+r+"="+s.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(xO)),a=()=>{clearTimeout(r),i()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=16384,DO=45e3;let Po=null;typeof MozWebSocket<"u"?Po=MozWebSocket:typeof WebSocket<"u"&&(Po=WebSocket);class It{constructor(e,n,i,r,a,s,l){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=nl(this.connId),this.stats_=Yd(n),this.connURL=It.connectionURL_(n,s,l,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,a){const s={};return s[$0]=Fd,typeof location<"u"&&location.hostname&&tE.test(location.hostname)&&(s[J0]=eE),n&&(s[Z0]=n),i&&(s[nE]=i),r&&(s[lh]=r),a&&(s[iE]=a),lE(e,rE,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oi.set("previous_websocket_failure",!0);try{let i;xA(),this.mySock=new Po(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){It.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Po!==null&&!It.forceDisallow_}static previouslyFailed(){return Oi.isInMemoryStorage||Oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ys(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=X0(n,IO);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(DO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}It.responsesRequiredToBeHealthy=2;It.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static get ALL_TRANSPORTS(){return[vr,It]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=It&&It.isAvailable();let i=n&&!It.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[It];else{const r=this.transports_=[];for(const a of bs.ALL_TRANSPORTS)a&&a.isAvailable()&&r.push(a);bs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=6e4,kO=5e3,LO=10*1024,UO=100*1024,Vu="t",Gg="d",zO="s",Fg="r",BO="e",Yg="o",Kg="a",Qg="n",Xg="p",jO="h";class HO{constructor(e,n,i,r,a,s,l,o,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=a,this.onMessage_=s,this.onReady_=l,this.onDisconnect_=o,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=nl("c:"+this.id+":"),this.transportManager_=new bs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Za(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vu in e){const n=e[Vu];n===Kg?this.upgradeIfSecondaryHealthy_():n===Fg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ta("t",e),i=Ta("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ta("t",e),i=Ta("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ta(Vu,e);if(Gg in e){const i=e[Gg];if(n===jO){const r={...i};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Qg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zO?this.onConnectionShutdown_(i):n===Fg?this.onReset_(i):n===BO?sh("Server Error: "+i):n===Yg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fd!==i&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Za(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(MO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Za(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let a=0;a<r.length;a++)if(r[a].callback===n&&(!i||i===r[a].context)){r.splice(a,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends pE{static getInstance(){return new qo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=32,$g=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new te("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function di(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function Qd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function PO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Es(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function pe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof te)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new te(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=j(t),i=j(e);if(n===null)return e;if(n===i)return Ge(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qO(t,e){const n=Es(t,0),i=Es(e,0);for(let r=0;r<n.length&&r<i.length;r++){const a=Zi(n[r],i[r]);if(a!==0)return a}return n.length===i.length?0:n.length<i.length?-1:1}function Xd(t,e){if(di(t)!==di(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Et(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(di(t)>di(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class VO{constructor(e,n){this.errorPrefix_=n,this.parts_=Es(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Oc(this.parts_[i]);gE(this)}}function GO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oc(e),gE(t)}function FO(t){const e=t.parts_.pop();t.byteLength_-=Oc(e),t.parts_.length>0&&(t.byteLength_-=1)}function gE(t){if(t.byteLength_>$g)throw new Error(t.errorPrefix_+"has a key path longer than "+$g+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wg+") or object contains a cycle "+xi(t))}function xi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends pE{static getInstance(){return new Wd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=1e3,YO=60*5*1e3,Zg=30*1e3,KO=1.3,QO=3e4,XO="server_kill",Jg=3;class dn extends dE{constructor(e,n,i,r,a,s,l,o){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=a,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.authOverride_=o,this.id=dn.nextPersistentConnectionId_++,this.log_=nl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ca,this.maxReconnectDelay_=YO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,a={r,a:e,b:n};this.log_(Ae(a)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Ws,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:s=>{const l=s.d;s.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,i,r){this.initConnection_();const a=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+a),this.listens.has(s)||this.listens.set(s,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(s).has(a),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(s).set(a,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const a={p:i},s="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(s,a,l=>{const o=l.d,c=l.s;dn.warnOnListenWarnings_(o,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,o))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kt(e,"w")){const i=Vr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||UA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=LA(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const a=r.s,s=r.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const a={p:e},s="n";r&&(a.q=i,a.t=r),this.sendRequest(s,a)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const a={p:n,d:i};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,s=>{r&&setTimeout(()=>{r(s.s,s.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,a){this.initConnection_();const s={p:n,d:i};a!==void 0&&(s.h=a),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const a=i.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sh("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ca,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ca,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>QO&&(this.reconnectDelay_=Ca),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+dn.nextConnectionId_++,a=this.lastSessionId;let s=!1,l=null;const o=function(){l?l.close():(s=!0,i())},c=function(f){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:o,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);s?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=u&&u.token,l=new HO(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{Fe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(XO)},a))}catch(f){this.log_("Failed to get token: "+f),s||(this.repoInfo_.nodeAdmin&&Fe(f),o())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$f(this.interruptReasons_)&&(this.reconnectDelay_=Ca,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(a=>Gd(a)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new te(e).toString();let r;if(this.listens.has(i)){const a=this.listens.get(i);r=a.get(n),a.delete(n),a.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jg&&(this.reconnectDelay_=Zg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Y0.replace(/\./g,"-")]=1,Dd()?e["framework.cordova"]=1:s0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qo.getInstance().currentlyOnline();return $f(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new H(Fr,e),r=new H(Fr,n);return this.compare(i,r)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class yE extends Lc{static get __EMPTY_NODE(){return Ol}static set __EMPTY_NODE(e){Ol=e}compare(e,n){return Zi(e.name,n.name)}isDefinedOn(e){throw oa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Gi,Ol)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Ol)}toString(){return".key"}}const Ir=new yE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,i,r,a=null){this.isReverse_=r,this.resultGenerator_=a,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=n?i(e.key,n):1,r&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,i,r,a){this.key=e,this.value=n,this.color=i??Ie.RED,this.left=r??Ze.EMPTY_NODE,this.right=a??Ze.EMPTY_NODE}copy(e,n,i,r,a){return new Ie(e??this.key,n??this.value,i??this.color,r??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const a=i(e,r.key);return a<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):a===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class WO{copy(e,n,i,r,a){return this}insert(e,n,i){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ze{constructor(e,n=Ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Il(this.root_,null,this.comparator_,!0,e)}}Ze.EMPTY_NODE=new WO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t,e){return Zi(t.name,e.name)}function $d(t,e){return Zi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh;function ZO(t){oh=t}const _E=function(t){return typeof t=="number"?"number:"+W0(t):"string:"+t},vE=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kt(e,".sv"),"Priority must be a string or number.")}else T(t===oh||t.isEmpty(),"priority of unexpected type.");T(t===oh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey;class xe{static set __childrenNodeConstructor(e){ey=e}static get __childrenNodeConstructor(){return ey}constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:j(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=j(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(T(i!==".priority"||di(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_E(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=W0(this.value_):e+=this.value_,this.lazyHash_=Q0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=xe.VALUE_TYPE_ORDER.indexOf(n),a=xe.VALUE_TYPE_ORDER.indexOf(i);return T(r>=0,"Unknown leaf type: "+n),T(a>=0,"Unknown leaf type: "+i),r===a?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bE,EE;function JO(t){bE=t}function eI(t){EE=t}class tI extends Lc{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),a=i.compareTo(r);return a===0?Zi(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Gi,new xe("[PRIORITY-POST]",EE))}makePost(e,n){const i=bE(e);return new H(n,new xe("[PRIORITY-POST]",i))}toString(){return".priority"}}const me=new tI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=Math.log(2);class iI{constructor(e){const n=a=>parseInt(Math.log(a)/nI,10),i=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vo=function(t,e,n,i){t.sort(e);const r=function(o,c){const h=c-o;let f,u;if(h===0)return null;if(h===1)return f=t[o],u=n?n(f):f,new Ie(u,f.node,Ie.BLACK,null,null);{const p=parseInt(h/2,10)+o,y=r(o,p),b=r(p+1,c);return f=t[p],u=n?n(f):f,new Ie(u,f.node,Ie.BLACK,y,b)}},a=function(o){let c=null,h=null,f=t.length;const u=function(y,b){const S=f-y,m=f;f-=y;const d=r(S+1,m),g=t[S],v=n?n(g):g;p(new Ie(v,g.node,b,null,d))},p=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<o.count;++y){const b=o.nextBitIsOne(),S=Math.pow(2,o.count-(y+1));b?u(S,Ie.BLACK):(u(S,Ie.BLACK),u(S,Ie.RED))}return h},s=new iI(t.length),l=a(s);return new Ze(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu;const nr={};class on{static get Default(){return T(nr&&me,"ChildrenNode.ts has not been loaded"),Gu=Gu||new on({".priority":nr},{".priority":me}),Gu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ze?n:null}hasIndex(e){return Kt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Ir,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const a=n.getIterator(H.Wrap);let s=a.getNext();for(;s;)r=r||e.isDefinedOn(s.node),i.push(s),s=a.getNext();let l;r?l=Vo(i,e.getCompare()):l=nr;const o=e.toString(),c={...this.indexSet_};c[o]=e;const h={...this.indexes_};return h[o]=l,new on(h,c)}addToIndexes(e,n){const i=Mo(this.indexes_,(r,a)=>{const s=Vr(this.indexSet_,a);if(T(s,"Missing index implementation for "+a),r===nr)if(s.isDefinedOn(e.node)){const l=[],o=n.getIterator(H.Wrap);let c=o.getNext();for(;c;)c.name!==e.name&&l.push(c),c=o.getNext();return l.push(e),Vo(l,s.getCompare())}else return nr;else{const l=n.get(e.name);let o=r;return l&&(o=o.remove(new H(e.name,l))),o.insert(e,e.node)}});return new on(i,this.indexSet_)}removeFromIndexes(e,n){const i=Mo(this.indexes_,r=>{if(r===nr)return r;{const a=n.get(e.name);return a?r.remove(new H(e.name,a)):r}});return new on(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;class O{static get EMPTY_NODE(){return Aa||(Aa=new O(new Ze($d),null,on.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&vE(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Aa}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Aa:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new H(e,n);let r,a;n.isEmpty()?(r=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(i,this.children_));const s=r.isEmpty()?Aa:this.priorityNode_;return new O(r,s,a)}}updateChild(e,n){const i=j(e);if(i===null)return n;{T(j(e)!==".priority"||di(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(re(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,a=!0;if(this.forEachChild(me,(s,l)=>{n[s]=l.val(e),i++,a&&O.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):a=!1}),!e&&a&&r<2*i){const s=[];for(const l in n)s[l]=n[l];return s}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_E(this.getPriority().val())+":"),this.forEachChild(me,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Q0(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const a=r.getPredecessorKey(new H(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,H.Wrap);let a=r.peek();for(;a!=null&&n.compare(a,e)<0;)r.getNext(),a=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let a=r.peek();for(;a!=null&&n.compare(a,e)>0;)r.getNext(),a=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===il?-1:0}withIndex(e){if(e===Ir||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ir||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(me),r=n.getIterator(me);let a=i.getNext(),s=r.getNext();for(;a&&s;){if(a.name!==s.name||!a.node.equals(s.node))return!1;a=i.getNext(),s=r.getNext()}return a===null&&s===null}else return!1;else return!1}}resolveIndex_(e){return e===Ir?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rI extends O{constructor(){super(new Ze($d),O.EMPTY_NODE,on.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const il=new rI;Object.defineProperties(H,{MIN:{value:new H(Fr,O.EMPTY_NODE)},MAX:{value:new H(Gi,il)}});yE.__EMPTY_NODE=O.EMPTY_NODE;xe.__childrenNodeConstructor=O;ZO(il);eI(il);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=!0;function Te(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,Te(e))}if(!(t instanceof Array)&&aI){const n=[];let i=!1;if(Pe(t,(s,l)=>{if(s.substring(0,1)!=="."){const o=Te(l);o.isEmpty()||(i=i||!o.getPriority().isEmpty(),n.push(new H(s,o)))}}),n.length===0)return O.EMPTY_NODE;const a=Vo(n,$O,s=>s.name,$d);if(i){const s=Vo(n,me.getCompare());return new O(a,Te(e),new on({".priority":s},{".priority":me}))}else return new O(a,Te(e),on.Default)}else{let n=O.EMPTY_NODE;return Pe(t,(i,r)=>{if(Kt(t,i)&&i.substring(0,1)!=="."){const a=Te(r);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(i,a))}}),n.updatePriority(Te(e))}}JO(Te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI extends Lc{constructor(e){super(),this.indexPath_=e,T(!G(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),a=i.compareTo(r);return a===0?Zi(e.name,n.name):a}makePost(e,n){const i=Te(e),r=O.EMPTY_NODE.updateChild(this.indexPath_,i);return new H(n,r)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,il);return new H(Gi,e)}toString(){return Es(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI extends Lc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Zi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const i=Te(e);return new H(n,i)}toString(){return".value"}}const oI=new lI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t){return{type:"value",snapshotNode:t}}function Yr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ss(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ws(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.index_=e}updateChild(e,n,i,r,a,s){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(r).equals(i.getChild(r))&&l.isEmpty()===i.isEmpty()||(s!=null&&(i.isEmpty()?e.hasChild(n)?s.trackChildChange(Ss(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?s.trackChildChange(Yr(n,i)):s.trackChildChange(ws(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(me,(r,a)=>{n.hasChild(r)||i.trackChildChange(Ss(r,a))}),n.isLeafNode()||n.forEachChild(me,(r,a)=>{if(e.hasChild(r)){const s=e.getImmediateChild(r);s.equals(a)||i.trackChildChange(ws(r,a,s))}else i.trackChildChange(Yr(r,a))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.indexedFilter_=new Zd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ts.getStartPost_(e),this.endPost_=Ts.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,a,s){return this.matches(new H(n,i))||(i=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,a,s)}updateFullNode(e,n,i){n.isLeafNode()&&(n=O.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(O.EMPTY_NODE);const a=this;return n.forEachChild(me,(s,l)=>{a.matches(new H(s,l))||(r=r.updateImmediateChild(s,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,a,s){return this.rangedFilter_.matches(new H(n,i))||(i=O.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,a,s):this.fullLimitUpdateChild_(e,n,i,a,s)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=O.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;a.hasNext()&&s<this.limit_;){const l=a.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))r=r.updateImmediateChild(l.name,l.node),s++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(O.EMPTY_NODE);let a;this.reverse_?a=r.getReverseIterator(this.index_):a=r.getIterator(this.index_);let s=0;for(;a.hasNext();){const l=a.getNext();s<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?s++:r=r.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,a){let s;if(this.reverse_){const f=this.index_.getCompare();s=(u,p)=>f(p,u)}else s=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const o=new H(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(o);if(l.hasChild(n)){const f=l.getImmediateChild(n);let u=r.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||l.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const p=u==null?1:s(u,o);if(h&&!i.isEmpty()&&p>=0)return a?.trackChildChange(ws(n,i,f)),l.updateImmediateChild(n,i);{a?.trackChildChange(Ss(n,f));const b=l.updateImmediateChild(n,O.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(a?.trackChildChange(Yr(u.name,u.node)),b.updateImmediateChild(u.name,u.node)):b}}else return i.isEmpty()?e:h&&s(c,o)>=0?(a!=null&&(a.trackChildChange(Ss(c.name,c.node)),a.trackChildChange(Yr(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fr}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Jd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fI(t){return t.loadsAllData()?new Zd(t.getIndex()):t.hasLimit()?new uI(t):new Ts(t)}function ty(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===oI?n="$value":t.index_===Ir?n="$key":(T(t.index_ instanceof sI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ae(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ae(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ae(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ny(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends dE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=nl("p:rest:"),this.listens_={}}listen(e,n,i,r){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const s=Go.getListenId_(e,i),l={};this.listens_[s]=l;const o=ty(e._queryParams);this.restRequest_(a+".json",o,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(a,f,!1,i),Vr(this.listens_,s)===l){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",r(u,null)}})}unlisten(e,n){const i=Go.getListenId_(e,n);delete this.listens_[i]}get(e){const n=ty(e._queryParams),i=e._path.toString(),r=new Ws;return this.restRequest_(i+".json",n,(a,s)=>{let l=s;a===404&&(l=null,a=null),a===null?(this.onDataUpdate_(i,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,a])=>{r&&r.accessToken&&(n.auth=r.accessToken),a&&a.token&&(n.ac=a.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ua(n);this.log_("Sending REST request for "+s);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+s+" received. status:",l.status,"response:",l.responseText);let o=null;if(l.status>=200&&l.status<300){try{o=ys(l.responseText)}catch{Fe("Failed to parse JSON response for "+s+": "+l.responseText)}i(null,o)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+s+" Status: "+l.status),i(l.status);i=null}},l.open("GET",s,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){return{value:null,children:new Map}}function wE(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=j(e);t.children.has(i)||t.children.set(i,Fo());const r=t.children.get(i);e=re(e),wE(r,e,n)}}function ch(t,e,n){t.value!==null?n(e,t.value):dI(t,(i,r)=>{const a=new te(e.toString()+"/"+i);ch(r,a,n)})}function dI(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Pe(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=10*1e3,mI=30*1e3,gI=5*60*1e3;class yI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pI(e);const i=iy+(mI-iy)*Math.random();Za(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Pe(e,(r,a)=>{a>0&&Kt(this.statsToReport_,r)&&(n[r]=a,i=!0)}),i&&this.server_.reportStats(n),Za(this.reportStats_.bind(this),Math.floor(Math.random()*2*gI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mt||(Mt={}));function ep(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function np(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Mt.ACK_USER_WRITE,this.source=ep()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new Yo(K(),n,this.revert)}}else return T(j(this.path)===e,"operationForChild called for unrelated child."),new Yo(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.source=e,this.path=n,this.type=Mt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Cs(this.source,K()):new Cs(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Mt.OVERWRITE}operationForChild(e){return G(this.path)?new Fi(this.source,K(),this.snap.getImmediateChild(e)):new Fi(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Mt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new Fi(this.source,K(),n.value):new Kr(this.source,K(),n)}else return T(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kr(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vI(t,e,n,i){const r=[],a=[];return e.forEach(s=>{s.type==="child_changed"&&t.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&a.push(cI(s.childName,s.snapshotNode))}),Ra(t,r,"child_removed",e,i,n),Ra(t,r,"child_added",e,i,n),Ra(t,r,"child_moved",a,i,n),Ra(t,r,"child_changed",e,i,n),Ra(t,r,"value",e,i,n),r}function Ra(t,e,n,i,r,a){const s=i.filter(l=>l.type===n);s.sort((l,o)=>EI(t,l,o)),s.forEach(l=>{const o=bI(t,l,a);r.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(o,t.query_))})})}function bI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function EI(t,e,n){if(e.childName==null||n.childName==null)throw oa("Should only compare child_ events.");const i=new H(e.childName,e.snapshotNode),r=new H(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t,e){return{eventCache:t,serverCache:e}}function Ja(t,e,n,i){return Uc(new pi(e,n,i),t.serverCache)}function TE(t,e,n,i){return Uc(t.eventCache,new pi(e,n,i))}function Ko(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu;const SI=()=>(Fu||(Fu=new Ze(sO)),Fu);class ie{static fromObject(e){let n=new ie(null);return Pe(e,(i,r)=>{n=n.set(new te(i),r)}),n}constructor(e,n=SI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(G(e))return null;{const i=j(e),r=this.children.get(i);if(r!==null){const a=r.findRootMostMatchingPathAndValue(re(e),n);return a!=null?{path:pe(new te(i),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=j(e),i=this.children.get(n);return i!==null?i.subtree(re(e)):new ie(null)}}set(e,n){if(G(e))return new ie(n,this.children);{const i=j(e),a=(this.children.get(i)||new ie(null)).set(re(e),n),s=this.children.insert(i,a);return new ie(this.value,s)}}remove(e){if(G(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=j(e),i=this.children.get(n);if(i){const r=i.remove(re(e));let a;return r.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,r),this.value===null&&a.isEmpty()?new ie(null):new ie(this.value,a)}else return this}}get(e){if(G(e))return this.value;{const n=j(e),i=this.children.get(n);return i?i.get(re(e)):null}}setTree(e,n){if(G(e))return n;{const i=j(e),a=(this.children.get(i)||new ie(null)).setTree(re(e),n);let s;return a.isEmpty()?s=this.children.remove(i):s=this.children.insert(i,a),new ie(this.value,s)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,a)=>{i[r]=a.fold_(pe(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(G(e))return null;{const a=j(e),s=this.children.get(a);return s?s.findOnPath_(re(e),pe(n,a),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,i){if(G(e))return this;{this.value&&i(n,this.value);const r=j(e),a=this.children.get(r);return a?a.foreachOnPath_(re(e),pe(n,r),i):new ie(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(pe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new ie(null))}}function es(t,e,n){if(G(e))return new kt(new ie(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let a=i.value;const s=Ge(r,e);return a=a.updateChild(s,n),new kt(t.writeTree_.set(r,a))}else{const r=new ie(n),a=t.writeTree_.setTree(e,r);return new kt(a)}}}function uh(t,e,n){let i=t;return Pe(n,(r,a)=>{i=es(i,pe(e,r),a)}),i}function ry(t,e){if(G(e))return kt.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new kt(n)}}function fh(t,e){return Ji(t,e)!=null}function Ji(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function ay(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(i,r)=>{e.push(new H(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new H(i,r.value))}),e}function si(t,e){if(G(e))return t;{const n=Ji(t,e);return n!=null?new kt(new ie(n)):new kt(t.writeTree_.subtree(e))}}function hh(t){return t.writeTree_.isEmpty()}function Qr(t,e){return CE(K(),t.writeTree_,e)}function CE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,a)=>{r===".priority"?(T(a.value!==null,"Priority writes must always be leaf nodes"),i=a.value):n=CE(pe(t,r),a,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(pe(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e){return xE(e,t)}function wI(t,e,n,i,r){T(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=es(t.visibleWrites,e,n)),t.lastWriteId=i}function TI(t,e,n,i){T(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=uh(t.visibleWrites,e,n),t.lastWriteId=i}function CI(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function AI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,a=!1,s=t.allWrites.length-1;for(;r&&s>=0;){const l=t.allWrites[s];l.visible&&(s>=n&&RI(l,i.path)?r=!1:Et(i.path,l.path)&&(a=!0)),s--}if(r){if(a)return NI(t),!0;if(i.snap)t.visibleWrites=ry(t.visibleWrites,i.path);else{const l=i.children;Pe(l,o=>{t.visibleWrites=ry(t.visibleWrites,pe(i.path,o))})}return!0}else return!1}function RI(t,e){if(t.snap)return Et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Et(pe(t.path,n),e))return!0;return!1}function NI(t){t.visibleWrites=AE(t.allWrites,xI,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xI(t){return t.visible}function AE(t,e,n){let i=kt.empty();for(let r=0;r<t.length;++r){const a=t[r];if(e(a)){const s=a.path;let l;if(a.snap)Et(n,s)?(l=Ge(n,s),i=es(i,l,a.snap)):Et(s,n)&&(l=Ge(s,n),i=es(i,K(),a.snap.getChild(l)));else if(a.children){if(Et(n,s))l=Ge(n,s),i=uh(i,l,a.children);else if(Et(s,n))if(l=Ge(s,n),G(l))i=uh(i,K(),a.children);else{const o=Vr(a.children,j(l));if(o){const c=o.getChild(re(l));i=es(i,K(),c)}}}else throw oa("WriteRecord should have .snap or .children")}}return i}function RE(t,e,n,i,r){if(!i&&!r){const a=Ji(t.visibleWrites,e);if(a!=null)return a;{const s=si(t.visibleWrites,e);if(hh(s))return n;if(n==null&&!fh(s,K()))return null;{const l=n||O.EMPTY_NODE;return Qr(s,l)}}}else{const a=si(t.visibleWrites,e);if(!r&&hh(a))return n;if(!r&&n==null&&!fh(a,K()))return null;{const s=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Et(c.path,e)||Et(e,c.path))},l=AE(t.allWrites,s,e),o=n||O.EMPTY_NODE;return Qr(l,o)}}}function OI(t,e,n){let i=O.EMPTY_NODE;const r=Ji(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(me,(a,s)=>{i=i.updateImmediateChild(a,s)}),i;if(n){const a=si(t.visibleWrites,e);return n.forEachChild(me,(s,l)=>{const o=Qr(si(a,new te(s)),l);i=i.updateImmediateChild(s,o)}),ay(a).forEach(s=>{i=i.updateImmediateChild(s.name,s.node)}),i}else{const a=si(t.visibleWrites,e);return ay(a).forEach(s=>{i=i.updateImmediateChild(s.name,s.node)}),i}}function II(t,e,n,i,r){T(i||r,"Either existingEventSnap or existingServerSnap must exist");const a=pe(e,n);if(fh(t.visibleWrites,a))return null;{const s=si(t.visibleWrites,a);return hh(s)?r.getChild(n):Qr(s,r.getChild(n))}}function DI(t,e,n,i){const r=pe(e,n),a=Ji(t.visibleWrites,r);if(a!=null)return a;if(i.isCompleteForChild(n)){const s=si(t.visibleWrites,r);return Qr(s,i.getNode().getImmediateChild(n))}else return null}function MI(t,e){return Ji(t.visibleWrites,e)}function kI(t,e,n,i,r,a,s){let l;const o=si(t.visibleWrites,e),c=Ji(o,K());if(c!=null)l=c;else if(n!=null)l=Qr(o,n);else return[];if(l=l.withIndex(s),!l.isEmpty()&&!l.isLeafNode()){const h=[],f=s.getCompare(),u=a?l.getReverseIteratorFrom(i,s):l.getIteratorFrom(i,s);let p=u.getNext();for(;p&&h.length<r;)f(p,i)!==0&&h.push(p),p=u.getNext();return h}else return[]}function LI(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Qo(t,e,n,i){return RE(t.writeTree,t.treePath,e,n,i)}function ip(t,e){return OI(t.writeTree,t.treePath,e)}function sy(t,e,n,i){return II(t.writeTree,t.treePath,e,n,i)}function Xo(t,e){return MI(t.writeTree,pe(t.treePath,e))}function UI(t,e,n,i,r,a){return kI(t.writeTree,t.treePath,e,n,i,r,a)}function rp(t,e,n){return DI(t.writeTree,t.treePath,e,n)}function NE(t,e){return xE(pe(t.treePath,e),t.writeTree)}function xE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const a=r.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(i,ws(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(i,Ss(i,r.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(i,Yr(i,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(i,ws(i,e.snapshotNode,r.oldSnap));else throw oa("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const OE=new BI;class ap{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new pi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rp(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yi(this.viewCache_),a=UI(this.writes_,r,n,1,i,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){return{filter:t}}function HI(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function PI(t,e,n,i,r){const a=new zI;let s,l;if(n.type===Mt.OVERWRITE){const c=n;c.source.fromUser?s=dh(t,e,c.path,c.snap,i,r,a):(T(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),s=Wo(t,e,c.path,c.snap,i,r,l,a))}else if(n.type===Mt.MERGE){const c=n;c.source.fromUser?s=VI(t,e,c.path,c.children,i,r,a):(T(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),s=ph(t,e,c.path,c.children,i,r,l,a))}else if(n.type===Mt.ACK_USER_WRITE){const c=n;c.revert?s=YI(t,e,c.path,i,r,a):s=GI(t,e,c.path,c.affectedTree,i,r,a)}else if(n.type===Mt.LISTEN_COMPLETE)s=FI(t,e,n.path,i,a);else throw oa("Unknown operation type: "+n.type);const o=a.getChanges();return qI(e,s,o),{viewCache:s,changes:o}}function qI(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),a=Ko(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(a)||!i.getNode().getPriority().equals(a.getPriority()))&&n.push(SE(Ko(e)))}}function IE(t,e,n,i,r,a){const s=e.eventCache;if(Xo(i,n)!=null)return e;{let l,o;if(G(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Yi(e),h=c instanceof O?c:O.EMPTY_NODE,f=ip(i,h);l=t.filter.updateFullNode(e.eventCache.getNode(),f,a)}else{const c=Qo(i,Yi(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,a)}else{const c=j(n);if(c===".priority"){T(di(n)===1,"Can't have a priority with additional path components");const h=s.getNode();o=e.serverCache.getNode();const f=sy(i,n,h,o);f!=null?l=t.filter.updatePriority(h,f):l=s.getNode()}else{const h=re(n);let f;if(s.isCompleteForChild(c)){o=e.serverCache.getNode();const u=sy(i,n,s.getNode(),o);u!=null?f=s.getNode().getImmediateChild(c).updateChild(h,u):f=s.getNode().getImmediateChild(c)}else f=rp(i,c,e.serverCache);f!=null?l=t.filter.updateChild(s.getNode(),c,f,h,r,a):l=s.getNode()}}return Ja(e,l,s.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Wo(t,e,n,i,r,a,s,l){const o=e.serverCache;let c;const h=s?t.filter:t.filter.getIndexedFilter();if(G(n))c=h.updateFullNode(o.getNode(),i,null);else if(h.filtersNodes()&&!o.isFiltered()){const p=o.getNode().updateChild(n,i);c=h.updateFullNode(o.getNode(),p,null)}else{const p=j(n);if(!o.isCompleteForPath(n)&&di(n)>1)return e;const y=re(n),S=o.getNode().getImmediateChild(p).updateChild(y,i);p===".priority"?c=h.updatePriority(o.getNode(),S):c=h.updateChild(o.getNode(),p,S,y,OE,null)}const f=TE(e,c,o.isFullyInitialized()||G(n),h.filtersNodes()),u=new ap(r,f,a);return IE(t,f,n,r,u,l)}function dh(t,e,n,i,r,a,s){const l=e.eventCache;let o,c;const h=new ap(r,e,a);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,s),o=Ja(e,c,!0,t.filter.filtersNodes());else{const f=j(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),o=Ja(e,c,l.isFullyInitialized(),l.isFiltered());else{const u=re(n),p=l.getNode().getImmediateChild(f);let y;if(G(u))y=i;else{const b=h.getCompleteChild(f);b!=null?Qd(u)===".priority"&&b.getChild(mE(u)).isEmpty()?y=b:y=b.updateChild(u,i):y=O.EMPTY_NODE}if(p.equals(y))o=e;else{const b=t.filter.updateChild(l.getNode(),f,y,u,h,s);o=Ja(e,b,l.isFullyInitialized(),t.filter.filtersNodes())}}}return o}function ly(t,e){return t.eventCache.isCompleteForChild(e)}function VI(t,e,n,i,r,a,s){let l=e;return i.foreach((o,c)=>{const h=pe(n,o);ly(e,j(h))&&(l=dh(t,l,h,c,r,a,s))}),i.foreach((o,c)=>{const h=pe(n,o);ly(e,j(h))||(l=dh(t,l,h,c,r,a,s))}),l}function oy(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ph(t,e,n,i,r,a,s,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o=e,c;G(n)?c=i:c=new ie(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,u)=>{if(h.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),y=oy(t,p,u);o=Wo(t,o,new te(f),y,r,a,s,l)}}),c.children.inorderTraversal((f,u)=>{const p=!e.serverCache.isCompleteForChild(f)&&u.value===null;if(!h.hasChild(f)&&!p){const y=e.serverCache.getNode().getImmediateChild(f),b=oy(t,y,u);o=Wo(t,o,new te(f),b,r,a,s,l)}}),o}function GI(t,e,n,i,r,a,s){if(Xo(r,n)!=null)return e;const l=e.serverCache.isFiltered(),o=e.serverCache;if(i.value!=null){if(G(n)&&o.isFullyInitialized()||o.isCompleteForPath(n))return Wo(t,e,n,o.getNode().getChild(n),r,a,l,s);if(G(n)){let c=new ie(null);return o.getNode().forEachChild(Ir,(h,f)=>{c=c.set(new te(h),f)}),ph(t,e,n,c,r,a,l,s)}else return e}else{let c=new ie(null);return i.foreach((h,f)=>{const u=pe(n,h);o.isCompleteForPath(u)&&(c=c.set(h,o.getNode().getChild(u)))}),ph(t,e,n,c,r,a,l,s)}}function FI(t,e,n,i,r){const a=e.serverCache,s=TE(e,a.getNode(),a.isFullyInitialized()||G(n),a.isFiltered());return IE(t,s,n,i,OE,r)}function YI(t,e,n,i,r,a){let s;if(Xo(i,n)!=null)return e;{const l=new ap(i,e,r),o=e.eventCache.getNode();let c;if(G(n)||j(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Qo(i,Yi(e));else{const f=e.serverCache.getNode();T(f instanceof O,"serverChildren would be complete if leaf node"),h=ip(i,f)}h=h,c=t.filter.updateFullNode(o,h,a)}else{const h=j(n);let f=rp(i,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=o.getImmediateChild(h)),f!=null?c=t.filter.updateChild(o,h,f,re(n),l,a):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(o,h,O.EMPTY_NODE,re(n),l,a):c=o,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=Qo(i,Yi(e)),s.isLeafNode()&&(c=t.filter.updateFullNode(c,s,a)))}return s=e.serverCache.isFullyInitialized()||Xo(i,K())!=null,Ja(e,c,s,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Zd(i.getIndex()),a=fI(i);this.processor_=jI(a);const s=n.serverCache,l=n.eventCache,o=r.updateFullNode(O.EMPTY_NODE,s.getNode(),null),c=a.updateFullNode(O.EMPTY_NODE,l.getNode(),null),h=new pi(o,s.isFullyInitialized(),r.filtersNodes()),f=new pi(c,l.isFullyInitialized(),a.filtersNodes());this.viewCache_=Uc(f,h),this.eventGenerator_=new _I(this.query_)}get query(){return this.query_}}function QI(t){return t.viewCache_.serverCache.getNode()}function XI(t){return Ko(t.viewCache_)}function WI(t,e){const n=Yi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function cy(t){return t.eventRegistrations_.length===0}function $I(t,e){t.eventRegistrations_.push(e)}function uy(t,e,n){const i=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(a=>{const s=a.createCancelEvent(n,r);s&&i.push(s)})}if(e){let r=[];for(let a=0;a<t.eventRegistrations_.length;++a){const s=t.eventRegistrations_[a];if(!s.matches(e))r.push(s);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(a+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function fy(t,e,n,i){e.type===Mt.MERGE&&e.source.queryId!==null&&(T(Yi(t.viewCache_),"We should always have a full cache before handling merges"),T(Ko(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,a=PI(t.processor_,r,e,n,i);return HI(t.processor_,a.viewCache),T(a.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=a.viewCache,DE(t,a.changes,a.viewCache.eventCache.getNode(),null)}function ZI(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(a,s)=>{i.push(Yr(a,s))}),n.isFullyInitialized()&&i.push(SE(n.getNode())),DE(t,i,n.getNode(),e)}function DE(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return vI(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;class ME{constructor(){this.views=new Map}}function JI(t){T(!$o,"__referenceConstructor has already been defined"),$o=t}function eD(){return T($o,"Reference.ts has not been loaded"),$o}function tD(t){return t.views.size===0}function sp(t,e,n,i){const r=e.source.queryId;if(r!==null){const a=t.views.get(r);return T(a!=null,"SyncTree gave us an op for an invalid query."),fy(a,e,n,i)}else{let a=[];for(const s of t.views.values())a=a.concat(fy(s,e,n,i));return a}}function kE(t,e,n,i,r){const a=e._queryIdentifier,s=t.views.get(a);if(!s){let l=Qo(n,r?i:null),o=!1;l?o=!0:i instanceof O?(l=ip(n,i),o=!1):(l=O.EMPTY_NODE,o=!1);const c=Uc(new pi(l,o,!1),new pi(i,r,!1));return new KI(e,c)}return s}function nD(t,e,n,i,r,a){const s=kE(t,e,i,r,a);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),$I(s,n),ZI(s,n)}function iD(t,e,n,i){const r=e._queryIdentifier,a=[];let s=[];const l=mi(t);if(r==="default")for(const[o,c]of t.views.entries())s=s.concat(uy(c,n,i)),cy(c)&&(t.views.delete(o),c.query._queryParams.loadsAllData()||a.push(c.query));else{const o=t.views.get(r);o&&(s=s.concat(uy(o,n,i)),cy(o)&&(t.views.delete(r),o.query._queryParams.loadsAllData()||a.push(o.query)))}return l&&!mi(t)&&a.push(new(eD())(e._repo,e._path)),{removed:a,events:s}}function LE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function li(t,e){let n=null;for(const i of t.views.values())n=n||WI(i,e);return n}function UE(t,e){if(e._queryParams.loadsAllData())return Bc(t);{const i=e._queryIdentifier;return t.views.get(i)}}function zE(t,e){return UE(t,e)!=null}function mi(t){return Bc(t)!=null}function Bc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;function rD(t){T(!Zo,"__referenceConstructor has already been defined"),Zo=t}function aD(){return T(Zo,"Reference.ts has not been loaded"),Zo}let sD=1;class hy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=LI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function BE(t,e,n,i,r){return wI(t.pendingWriteTree_,e,n,i,r),r?pa(t,new Fi(ep(),e,n)):[]}function lD(t,e,n,i){TI(t.pendingWriteTree_,e,n,i);const r=ie.fromObject(n);return pa(t,new Kr(ep(),e,r))}function Yn(t,e,n=!1){const i=CI(t.pendingWriteTree_,e);if(AI(t.pendingWriteTree_,e)){let a=new ie(null);return i.snap!=null?a=a.set(K(),!0):Pe(i.children,s=>{a=a.set(new te(s),!0)}),pa(t,new Yo(i.path,a,n))}else return[]}function rl(t,e,n){return pa(t,new Fi(tp(),e,n))}function oD(t,e,n){const i=ie.fromObject(n);return pa(t,new Kr(tp(),e,i))}function cD(t,e){return pa(t,new Cs(tp(),e))}function uD(t,e,n){const i=op(t,n);if(i){const r=cp(i),a=r.path,s=r.queryId,l=Ge(a,e),o=new Cs(np(s),l);return up(t,a,o)}else return[]}function Jo(t,e,n,i,r=!1){const a=e._path,s=t.syncPointTree_.get(a);let l=[];if(s&&(e._queryIdentifier==="default"||zE(s,e))){const o=iD(s,e,n,i);tD(s)&&(t.syncPointTree_=t.syncPointTree_.remove(a));const c=o.removed;if(l=o.events,!r){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(a,(u,p)=>mi(p));if(h&&!f){const u=t.syncPointTree_.subtree(a);if(!u.isEmpty()){const p=dD(u);for(let y=0;y<p.length;++y){const b=p[y],S=b.query,m=qE(t,b);t.listenProvider_.startListening(ts(S),As(t,S),m.hashFn,m.onComplete)}}}!f&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(ts(e),null):c.forEach(u=>{const p=t.queryToTagMap.get(jc(u));t.listenProvider_.stopListening(ts(u),p)}))}pD(t,c)}return l}function jE(t,e,n,i){const r=op(t,i);if(r!=null){const a=cp(r),s=a.path,l=a.queryId,o=Ge(s,e),c=new Fi(np(l),o,n);return up(t,s,c)}else return[]}function fD(t,e,n,i){const r=op(t,i);if(r){const a=cp(r),s=a.path,l=a.queryId,o=Ge(s,e),c=ie.fromObject(n),h=new Kr(np(l),o,c);return up(t,s,h)}else return[]}function mh(t,e,n,i=!1){const r=e._path;let a=null,s=!1;t.syncPointTree_.foreachOnPath(r,(u,p)=>{const y=Ge(u,r);a=a||li(p,y),s=s||mi(p)});let l=t.syncPointTree_.get(r);l?(s=s||mi(l),a=a||li(l,K())):(l=new ME,t.syncPointTree_=t.syncPointTree_.set(r,l));let o;a!=null?o=!0:(o=!1,a=O.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,y)=>{const b=li(y,K());b&&(a=a.updateImmediateChild(p,b))}));const c=zE(l,e);if(!c&&!e._queryParams.loadsAllData()){const u=jc(e);T(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=mD();t.queryToTagMap.set(u,p),t.tagToQueryMap.set(p,u)}const h=zc(t.pendingWriteTree_,r);let f=nD(l,e,n,h,a,o);if(!c&&!s&&!i){const u=UE(l,e);f=f.concat(gD(t,e,u))}return f}function lp(t,e,n){const r=t.pendingWriteTree_,a=t.syncPointTree_.findOnPath(e,(s,l)=>{const o=Ge(s,e),c=li(l,o);if(c)return c});return RE(r,e,a,n,!0)}function hD(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Ge(c,n);i=i||li(h,f)});let r=t.syncPointTree_.get(n);r?i=i||li(r,K()):(r=new ME,t.syncPointTree_=t.syncPointTree_.set(n,r));const a=i!=null,s=a?new pi(i,!0,!1):null,l=zc(t.pendingWriteTree_,e._path),o=kE(r,e,l,a?s.getNode():O.EMPTY_NODE,a);return XI(o)}function pa(t,e){return HE(e,t.syncPointTree_,null,zc(t.pendingWriteTree_,K()))}function HE(t,e,n,i){if(G(t.path))return PE(t,e,n,i);{const r=e.get(K());n==null&&r!=null&&(n=li(r,K()));let a=[];const s=j(t.path),l=t.operationForChild(s),o=e.children.get(s);if(o&&l){const c=n?n.getImmediateChild(s):null,h=NE(i,s);a=a.concat(HE(l,o,c,h))}return r&&(a=a.concat(sp(r,t,i,n))),a}}function PE(t,e,n,i){const r=e.get(K());n==null&&r!=null&&(n=li(r,K()));let a=[];return e.children.inorderTraversal((s,l)=>{const o=n?n.getImmediateChild(s):null,c=NE(i,s),h=t.operationForChild(s);h&&(a=a.concat(PE(h,l,o,c)))}),r&&(a=a.concat(sp(r,t,i,n))),a}function qE(t,e){const n=e.query,i=As(t,n);return{hashFn:()=>(QI(e)||O.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?uD(t,n._path,i):cD(t,n._path);{const a=cO(r,n);return Jo(t,n,null,a)}}}}function As(t,e){const n=jc(e);return t.queryToTagMap.get(n)}function jc(t){return t._path.toString()+"$"+t._queryIdentifier}function op(t,e){return t.tagToQueryMap.get(e)}function cp(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function up(t,e,n){const i=t.syncPointTree_.get(e);T(i,"Missing sync point for query tag that we're tracking");const r=zc(t.pendingWriteTree_,e);return sp(i,n,r,null)}function dD(t){return t.fold((e,n,i)=>{if(n&&mi(n))return[Bc(n)];{let r=[];return n&&(r=LE(n)),Pe(i,(a,s)=>{r=r.concat(s)}),r}})}function ts(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(aD())(t._repo,t._path):t}function pD(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=jc(i),a=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(a)}}}function mD(){return sD++}function gD(t,e,n){const i=e._path,r=As(t,e),a=qE(t,n),s=t.listenProvider_.startListening(ts(e),r,a.hashFn,a.onComplete),l=t.syncPointTree_.subtree(i);if(r)T(!mi(l.value),"If we're adding a query, it shouldn't be shadowed");else{const o=l.fold((c,h,f)=>{if(!G(c)&&h&&mi(h))return[Bc(h).query];{let u=[];return h&&(u=u.concat(LE(h).map(p=>p.query))),Pe(f,(p,y)=>{u=u.concat(y)}),u}});for(let c=0;c<o.length;++c){const h=o[c];t.listenProvider_.stopListening(ts(h),As(t,h))}}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fp(n)}node(){return this.node_}}class hp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new hp(this.syncTree_,n)}node(){return lp(this.syncTree_,this.path_)}}const yD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dy=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _D(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vD(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_D=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},vD=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&T(!1,"Unexpected increment value: "+i);const r=e.node();if(T(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return typeof s!="number"?i:s+i},VE=function(t,e,n,i){return dp(e,new hp(n,t),i)},GE=function(t,e,n){return dp(t,new fp(e),n)};function dp(t,e,n){const i=t.getPriority().val(),r=dy(i,e.getImmediateChild(".priority"),n);let a;if(t.isLeafNode()){const s=t,l=dy(s.getValue(),e,n);return l!==s.getValue()||r!==s.getPriority().val()?new xe(l,Te(r)):t}else{const s=t;return a=s,r!==s.getPriority().val()&&(a=a.updatePriority(new xe(r))),s.forEachChild(me,(l,o)=>{const c=dp(o,e.getImmediateChild(l),n);c!==o&&(a=a.updateImmediateChild(l,c))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function mp(t,e){let n=e instanceof te?e:new te(e),i=t,r=j(n);for(;r!==null;){const a=Vr(i.node.children,r)||{children:{},childCount:0};i=new pp(r,i,a),n=re(n),r=j(n)}return i}function ma(t){return t.node.value}function FE(t,e){t.node.value=e,gh(t)}function YE(t){return t.node.childCount>0}function bD(t){return ma(t)===void 0&&!YE(t)}function Hc(t,e){Pe(t.node.children,(n,i)=>{e(new pp(n,t,i))})}function KE(t,e,n,i){n&&e(t),Hc(t,r=>{KE(r,e,!0)})}function ED(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function al(t){return new te(t.parent===null?t.name:al(t.parent)+"/"+t.name)}function gh(t){t.parent!==null&&SD(t.parent,t.name,t)}function SD(t,e,n){const i=bD(n),r=Kt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,gh(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,gh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=/[\[\].#$\/\u0000-\u001F\u007F]/,TD=/[\[\].#$\u0000-\u001F\u007F]/,Yu=10*1024*1024,gp=function(t){return typeof t=="string"&&t.length!==0&&!wD.test(t)},QE=function(t){return typeof t=="string"&&t.length!==0&&!TD.test(t)},CD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),QE(t)},AD=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Vd(t)||t&&typeof t=="object"&&Kt(t,".sv")},RD=function(t,e,n,i){Pc(xc(t,"value"),e,n)},Pc=function(t,e,n){const i=n instanceof te?new VO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xi(i));if(typeof e=="function")throw new Error(t+"contains a function "+xi(i)+" with contents = "+e.toString());if(Vd(e))throw new Error(t+"contains "+e.toString()+" "+xi(i));if(typeof e=="string"&&e.length>Yu/3&&Oc(e)>Yu)throw new Error(t+"contains a string greater than "+Yu+" utf8 bytes "+xi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,a=!1;if(Pe(e,(s,l)=>{if(s===".value")r=!0;else if(s!==".priority"&&s!==".sv"&&(a=!0,!gp(s)))throw new Error(t+" contains an invalid key ("+s+") "+xi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GO(i,s),Pc(t,l,i),FO(i)}),r&&a)throw new Error(t+' contains ".value" child '+xi(i)+" in addition to actual children.")}},ND=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const a=Es(i);for(let s=0;s<a.length;s++)if(!(a[s]===".priority"&&s===a.length-1)){if(!gp(a[s]))throw new Error(t+"contains an invalid key ("+a[s]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(qO);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&Et(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},xD=function(t,e,n,i){const r=xc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const a=[];Pe(e,(s,l)=>{const o=new te(s);if(Pc(r,l,pe(n,o)),Qd(o)===".priority"&&!AD(l))throw new Error(r+"contains an invalid value for '"+o.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(o)}),ND(r,a)},XE=function(t,e,n,i){if(!QE(n))throw new Error(xc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OD=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),XE(t,e,n)},ID=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},DD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CD(n))throw new Error(xc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qc(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],a=r.getPath();n!==null&&!Xd(a,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(r)}n&&t.eventLists_.push(n)}function WE(t,e,n){qc(t,n),$E(t,i=>Xd(i,e))}function At(t,e,n){qc(t,n),$E(t,i=>Et(i,e)||Et(e,i))}function $E(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const a=r.path;e(a)?(kD(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();$a&&Ue("event: "+n.toString()),da(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD="repo_interrupt",UD=25;class zD{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new MD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fo(),this.transactionQueueTree_=new pp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BD(t,e,n){if(t.stats_=Yd(t.repoInfo_),t.forceRestClient_||dO())t.server_=new Go(t.repoInfo_,(i,r,a,s)=>{py(t,i,r,a,s)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>my(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new dn(t.repoInfo_,e,(i,r,a,s)=>{py(t,i,r,a,s)},i=>{my(t,i)},i=>{HD(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=_O(t.repoInfo_,()=>new yI(t.stats_,t.server_)),t.infoData_=new hI,t.infoSyncTree_=new hy({startListening:(i,r,a,s)=>{let l=[];const o=t.infoData_.getNode(i._path);return o.isEmpty()||(l=rl(t.infoSyncTree_,i._path,o),setTimeout(()=>{s("ok")},0)),l},stopListening:()=>{}}),yp(t,"connected",!1),t.serverSyncTree_=new hy({startListening:(i,r,a,s)=>(t.server_.listen(i,a,r,(l,o)=>{const c=s(l,o);At(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function jD(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return yD({timestamp:jD(t)})}function py(t,e,n,i,r){t.dataUpdateCount++;const a=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let s=[];if(r)if(i){const o=Mo(n,c=>Te(c));s=fD(t.serverSyncTree_,a,o,r)}else{const o=Te(n);s=jE(t.serverSyncTree_,a,o,r)}else if(i){const o=Mo(n,c=>Te(c));s=oD(t.serverSyncTree_,a,o)}else{const o=Te(n);s=rl(t.serverSyncTree_,a,o)}let l=a;s.length>0&&(l=Xr(t,a)),At(t.eventQueue_,l,s)}function my(t,e){yp(t,"connected",e),e===!1&&GD(t)}function HD(t,e){Pe(e,(n,i)=>{yp(t,n,i)})}function yp(t,e,n){const i=new te("/.info/"+e),r=Te(n);t.infoData_.updateSnapshot(i,r);const a=rl(t.infoSyncTree_,i,r);At(t.eventQueue_,i,a)}function _p(t){return t.nextWriteId_++}function PD(t,e,n){const i=hD(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const a=Te(r).withIndex(e._queryParams.getIndex());mh(t.serverSyncTree_,e,n,!0);let s;if(e._queryParams.loadsAllData())s=rl(t.serverSyncTree_,e._path,a);else{const l=As(t.serverSyncTree_,e);s=jE(t.serverSyncTree_,e._path,a,l)}return At(t.eventQueue_,e._path,s),Jo(t.serverSyncTree_,e,n,null,!0),a},r=>(sl(t,"get for query "+Ae(e)+" failed: "+r),Promise.reject(new Error(r))))}function qD(t,e,n,i,r){sl(t,"set",{path:e.toString(),value:n,priority:i});const a=Vc(t),s=Te(n,i),l=lp(t.serverSyncTree_,e),o=GE(s,l,a),c=_p(t),h=BE(t.serverSyncTree_,e,o,c,!0);qc(t.eventQueue_,h),t.server_.put(e.toString(),s.val(!0),(u,p)=>{const y=u==="ok";y||Fe("set at "+e+" failed: "+u);const b=Yn(t.serverSyncTree_,c,!y);At(t.eventQueue_,e,b),yh(t,r,u,p)});const f=bp(t,e);Xr(t,f),At(t.eventQueue_,f,[])}function VD(t,e,n,i){sl(t,"update",{path:e.toString(),value:n});let r=!0;const a=Vc(t),s={};if(Pe(n,(l,o)=>{r=!1,s[l]=VE(pe(e,l),Te(o),t.serverSyncTree_,a)}),r)Ue("update() called with empty data.  Don't do anything."),yh(t,i,"ok",void 0);else{const l=_p(t),o=lD(t.serverSyncTree_,e,s,l);qc(t.eventQueue_,o),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Fe("update at "+e+" failed: "+c);const u=Yn(t.serverSyncTree_,l,!f),p=u.length>0?Xr(t,e):e;At(t.eventQueue_,p,u),yh(t,i,c,h)}),Pe(n,c=>{const h=bp(t,pe(e,c));Xr(t,h)}),At(t.eventQueue_,e,[])}}function GD(t){sl(t,"onDisconnectEvents");const e=Vc(t),n=Fo();ch(t.onDisconnect_,K(),(r,a)=>{const s=VE(r,a,t.serverSyncTree_,e);wE(n,r,s)});let i=[];ch(n,K(),(r,a)=>{i=i.concat(rl(t.serverSyncTree_,r,a));const s=bp(t,r);Xr(t,s)}),t.onDisconnect_=Fo(),At(t.eventQueue_,K(),i)}function FD(t,e,n){let i;j(e._path)===".info"?i=mh(t.infoSyncTree_,e,n):i=mh(t.serverSyncTree_,e,n),WE(t.eventQueue_,e._path,i)}function ZE(t,e,n){let i;j(e._path)===".info"?i=Jo(t.infoSyncTree_,e,n):i=Jo(t.serverSyncTree_,e,n),WE(t.eventQueue_,e._path,i)}function YD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(LD)}function sl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function yh(t,e,n,i){e&&da(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let a=r;i&&(a+=": "+i);const s=new Error(a);s.code=r,e(s)}})}function JE(t,e,n){return lp(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function vp(t,e=t.transactionQueueTree_){if(e||Gc(t,e),ma(e)){const n=tS(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&KD(t,al(e),n)}else YE(e)&&Hc(e,n=>{vp(t,n)})}function KD(t,e,n){const i=n.map(c=>c.currentWriteId),r=JE(t,e,i);let a=r;const s=r.hash();for(let c=0;c<n.length;c++){const h=n[c];T(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Ge(e,h.path);a=a.updateChild(f,h.currentOutputSnapshotRaw)}const l=a.val(!0),o=e;t.server_.put(o.toString(),l,c=>{sl(t,"transaction put response",{path:o.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let u=0;u<n.length;u++)n[u].status=2,h=h.concat(Yn(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&f.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();Gc(t,mp(t.transactionQueueTree_,e)),vp(t,t.transactionQueueTree_),At(t.eventQueue_,e,h);for(let u=0;u<f.length;u++)da(f[u])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Fe("transaction at "+o.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Xr(t,e)}},s)}function Xr(t,e){const n=eS(t,e),i=al(n),r=tS(t,n);return QD(t,r,i),i}function QD(t,e,n){if(e.length===0)return;const i=[];let r=[];const s=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const o=e[l],c=Ge(n,o.path);let h=!1,f;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),o.status===4)h=!0,f=o.abortReason,r=r.concat(Yn(t.serverSyncTree_,o.currentWriteId,!0));else if(o.status===0)if(o.retryCount>=UD)h=!0,f="maxretry",r=r.concat(Yn(t.serverSyncTree_,o.currentWriteId,!0));else{const u=JE(t,o.path,s);o.currentInputSnapshot=u;const p=e[l].update(u.val());if(p!==void 0){Pc("transaction failed: Data returned ",p,o.path);let y=Te(p);typeof p=="object"&&p!=null&&Kt(p,".priority")||(y=y.updatePriority(u.getPriority()));const S=o.currentWriteId,m=Vc(t),d=GE(y,u,m);o.currentOutputSnapshotRaw=y,o.currentOutputSnapshotResolved=d,o.currentWriteId=_p(t),s.splice(s.indexOf(S),1),r=r.concat(BE(t.serverSyncTree_,o.path,d,o.currentWriteId,o.applyLocally)),r=r.concat(Yn(t.serverSyncTree_,S,!0))}else h=!0,f="nodata",r=r.concat(Yn(t.serverSyncTree_,o.currentWriteId,!0))}At(t.eventQueue_,n,r),r=[],h&&(e[l].status=2,function(u){setTimeout(u,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(f),!1,null))))}Gc(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)da(i[l]);vp(t,t.transactionQueueTree_)}function eS(t,e){let n,i=t.transactionQueueTree_;for(n=j(e);n!==null&&ma(i)===void 0;)i=mp(i,n),e=re(e),n=j(e);return i}function tS(t,e){const n=[];return nS(t,e,n),n.sort((i,r)=>i.order-r.order),n}function nS(t,e,n){const i=ma(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Hc(e,r=>{nS(t,r,n)})}function Gc(t,e){const n=ma(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,FE(e,n.length>0?n:void 0)}Hc(e,i=>{Gc(t,i)})}function bp(t,e){const n=al(eS(t,e)),i=mp(t.transactionQueueTree_,e);return ED(i,r=>{Ku(t,r)}),Ku(t,i),KE(i,r=>{Ku(t,r)}),n}function Ku(t,e){const n=ma(e);if(n){const i=[];let r=[],a=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(T(a===s-1,"All SENT items should be at beginning of queue."),a=s,n[s].status=3,n[s].abortReason="set"):(T(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),r=r.concat(Yn(t.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&i.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));a===-1?FE(e,void 0):n.length=a+1,At(t.eventQueue_,al(e),r);for(let s=0;s<i.length;s++)da(i[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function WD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const gy=function(t,e){const n=$D(t),i=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rO();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sE(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new te(n.pathString)}},$D=function(t){let e="",n="",i="",r="",a="",s=!0,l="https",o=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(r=XD(t.substring(h,f)));const u=WD(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(s=l==="https"||l==="wss",o=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),a=i}"ns"in u&&(a=u.ns)}return{host:e,port:o,domain:n,subdomain:i,secure:s,scheme:l,pathString:r,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class JD{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return G(this._path)?null:Qd(this._path)}get ref(){return new An(this._repo,this._path)}get _queryIdentifier(){const e=ny(this._queryParams),n=Gd(e);return n==="{}"?"default":n}get _queryObject(){return ny(this._queryParams)}isEqual(e){if(e=ht(e),!(e instanceof Sp))return!1;const n=this._repo===e._repo,i=Xd(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+PO(this._path)}}class An extends Sp{constructor(e,n){super(e,n,new Jd,!1)}get parent(){const e=mE(this._path);return e===null?null:new An(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rs{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),i=_h(this.ref,e);return new Rs(this._node.getChild(n),i,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Rs(r,_h(this.ref,i),me)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Na(t,e){return t=ht(t),t._checkNotDeleted("ref"),e!==void 0?_h(t._root,e):t._root}function _h(t,e){return t=ht(t),j(t._path)===null?OD("child","path",e):XE("child","path",e),new An(t._repo,pe(t._path,e))}function yy(t,e){t=ht(t),ID("set",t._path),RD("set",e,t._path);const n=new Ws;return qD(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function e2(t,e){xD("update",e,t._path);const n=new Ws;return VD(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function t2(t){t=ht(t);const e=new Ep(()=>{}),n=new ll(e);return PD(t._repo,t,n).then(i=>new Rs(i,new An(t._repo,t._path),t._queryParams.getIndex()))}class ll{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new ZD("value",this,new Rs(e.snapshotNode,new An(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new JD(this,e,n):null}matches(e){return e instanceof ll?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function n2(t,e,n,i,r){const a=new Ep(n,void 0),s=new ll(a);return FD(t._repo,t,s),()=>ZE(t._repo,t,s)}function i2(t,e,n,i){return n2(t,"value",e)}function r2(t,e,n){let i=null;const r=n?new Ep(n):null;i=new ll(r),ZE(t._repo,t,i)}JI(An);rD(An);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2="FIREBASE_DATABASE_EMULATOR_HOST",vh={};let s2=!1;function l2(t,e,n,i){const r=e.lastIndexOf(":"),a=e.substring(0,r),s=ca(a);t.repoInfo_=new sE(e,s,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function o2(t,e,n,i,r){let a=i||t.options.databaseURL;a===void 0&&(t.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),a=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s=gy(a,r),l=s.repoInfo,o;typeof process<"u"&&Bg&&(o=Bg[a2]),o?(a=`http://${o}?ns=${l.namespace}`,s=gy(a,r),l=s.repoInfo):s.repoInfo.secure;const c=new mO(t.name,t.options,e);DD("Invalid Firebase Database URL",s),G(s.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=u2(l,t,c,new pO(t,n));return new f2(h,t)}function c2(t,e){const n=vh[e];(!n||n[t.key]!==t)&&Tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),YD(t),delete n[t.key]}function u2(t,e,n,i){let r=vh[e.name];r||(r={},vh[e.name]=r);let a=r[t.toURLString()];return a&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new zD(t,s2,n,i),r[t.toURLString()]=a,a}class f2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new An(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(c2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function h2(t=f0(),e){const n=Ld(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=SA("database");i&&d2(n,...i)}return n}function d2(t,e,n,i={}){t=ht(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,a=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&Pi(i,a.repoInfo_.emulatorOptions))return;Tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let s;if(a.repoInfo_.nodeAdmin)i.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Jl(Jl.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:wA(i.mockUserToken,t.app.options.projectId);s=new Jl(l)}ca(e)&&(r0(e),a0("Database",!0)),l2(a,r,i,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){Zx(fa),Gr(new qi("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return o2(i,r,a,n)},"PUBLIC").setMultipleInstances(!0)),ri(jg,Hg,t),ri(jg,Hg,"esm2020")}dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};p2();const iS={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",databaseURL:""},m2=!!iS.apiKey;let ec=null,zt=null;try{m2?(ec=u0(iS),zt=h2(ec),console.log("Firebase initialized successfully")):console.warn("Firebase configuration missing. Using Mock Mode.")}catch(t){console.error("Firebase initialization failed:",t)}let Jt=null;if(ec)try{Jt=Qx(ec)}catch{console.warn("Auth initialization failed, falling back to mock")}const _y={uid:"mock-user-"+Math.floor(Math.random()*1e4),isAnonymous:!0,displayName:"Guest"},bh={signIn:async()=>{if(!Jt)return console.log("Mock SignIn successful"),await new Promise(t=>setTimeout(t,500)),_y;try{return(await IN(Jt)).user}catch(t){throw console.error("Error signing in anonymously:",t),t}},onAuthStateChange:t=>Jt?zN(Jt,t):(t(null),()=>{}),getCurrentUser:()=>Jt?Jt.currentUser:_y,signOut:()=>Jt?Jt.signOut():Promise.resolve()},xa=()=>{try{return JSON.parse(localStorage.getItem("web-hitster-rooms")||"{}")}catch{return{}}},Qu=t=>{localStorage.setItem("web-hitster-rooms",JSON.stringify(t))},tc={createRoom:async t=>{const e=g2(),n={hostId:t.uid,status:"LOBBY",createdAt:Date.now(),players:{[t.uid]:{id:t.uid,name:"Host",score:0,isHost:!0}}};if(zt){const i=Na(zt,`rooms/${e}`);await yy(i,n)}else{const i=xa();i[e]=n,Qu(i),console.log("Mock Room Created:",e)}return e},joinRoom:async(t,e,n)=>{if(zt){const i=Na(zt,`rooms/${t}`),r=await t2(i);if(!r.exists())throw new Error("Room not found");const a=r.val(),s=Na(zt,`rooms/${t}/players/${e.uid}`);return await yy(s,{id:e.uid,name:n,score:0,isHost:!1}),a}else{const i=xa(),r=i[t];if(!r)throw new Error("Room not found (Mock)");return r.players[e.uid]={id:e.uid,name:n,score:0,isHost:!1},Qu(i),r}},subscribeToRoom:(t,e)=>{if(zt){const n=Na(zt,`rooms/${t}`),i=i2(n,r=>{const a=r.val();a&&e(a)});return()=>r2(n,"value",i)}else{const n=setInterval(()=>{const a=xa()[t];a&&e(a)},500),i=xa()[t];return i&&e(i),()=>clearInterval(n)}},startGame:async t=>{if(zt){const e=Na(zt,`rooms/${t}`);await e2(e,{status:"PLAYING"})}else{const e=xa();e[t]&&(e[t].status="PLAYING",Qu(e))}}};function g2(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let e="";for(let n=0;n<4;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_2=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),vy=t=>{const e=_2(t);return e.charAt(0).toUpperCase()+e.slice(1)},rS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),v2=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:a,iconNode:s,...l},o)=>E.createElement("svg",{ref:o,...b2,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:rS("lucide",r),...!a&&!v2(l)&&{"aria-hidden":"true"},...l},[...s.map(([c,h])=>E.createElement(c,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=(t,e)=>{const n=E.forwardRef(({className:i,...r},a)=>E.createElement(E2,{ref:a,iconNode:e,className:rS(`lucide-${y2(vy(t))}`,`lucide-${t}`,i),...r}));return n.displayName=vy(t),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],w2=Rn("check",S2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],C2=Rn("circle-check-big",T2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],R2=Rn("circle-x",A2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],x2=Rn("copy",N2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],I2=Rn("house",O2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],M2=Rn("music",D2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],wp=Rn("play",k2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],U2=Rn("trophy",L2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],aS=Rn("users",z2),sS={credentialsUpdated:"CredentialsUpdatedMessage"};class ke extends Error{errorCode;constructor(e,n){super(e,n),Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ke),this.name="TidalError",this.errorCode=e}}class nc extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,nc.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nc),this.name="IllegalArgumentError"}}class Ns extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,Ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns),this.name="NetworkError"}}class gi extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,gi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi),this.name="RetryableError"}}class B2{#e;#t=!1;#n;#i;constructor(e){this.#i=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{const e=await fetch(this.#i);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,n){let i;if(n){if(i=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===n),!i)throw new ReferenceError(`There is no performance entry named "${e}" with detail "${n}"`)}else i=performance.getEntriesByName(e).pop();return i?i.startTime:void 0}}const Tp=new B2("https://api.tidal.com/v1/ping");class ic extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,ic.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ic),this.name="AuthenticationError"}}class rc extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,rc.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rc),this.name="TokenResponseError"}}class Wr extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,Wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr),this.name="UnexpectedError"}}const _e={authenticationError:"A0000",illegalArgumentError:"A0007",initError:"A0001",networkError:"A0002",retryableError:"A0003",storageError:"A0004",tokenResponseError:"A0005",unexpectedError:"A0006"},Xu="AuthDB";function j2(t){return String.fromCharCode(...new Uint8Array(t))}function H2(t){const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0,r=t.length;i<r;i++)n[i]=t.charCodeAt(i);return n}const St={getItem:t=>{const e=globalThis.localStorage.getItem(`${Xu}/${t}`);return e?H2(e):void 0},removeItem:t=>{globalThis.localStorage.removeItem(`${Xu}/${t}`)},setItem:(t,e)=>{globalThis.localStorage.setItem(`${Xu}/${t}`,j2(e))}},lS=t=>{const e=new TextEncoder;return globalThis.crypto.subtle.importKey("raw",e.encode(t),{name:"PBKDF2"},!1,["deriveBits","deriveKey"])},oS=(t,e)=>globalThis.crypto.subtle.deriveKey({hash:"SHA-256",iterations:1e5,name:"PBKDF2",salt:e},t,{length:256,name:"AES-KW"},!0,["wrapKey","unwrapKey"]),P2=async(t,e)=>{const n=await lS(e);return oS(n,t)},q2=t=>new TextEncoder().encode(t),V2=t=>new TextDecoder().decode(t),G2=async({keyToWrap:t,password:e,salt:n})=>{const i=await lS(e),r=await oS(i,n);return globalThis.crypto.subtle.wrapKey("raw",t,r,"AES-KW")},cS=async({password:t,salt:e,wrappedKeyBuffer:n})=>{const i=await P2(e,t);return globalThis.crypto.subtle.unwrapKey("raw",n,i,"AES-KW","AES-CTR",!0,["encrypt","decrypt"])},F2=({content:t,counter:e,key:n})=>globalThis.crypto.subtle.encrypt({counter:e,length:64,name:"AES-CTR"},n,t),Y2=({counter:t,encryptedCredentials:e,key:n})=>globalThis.crypto.subtle.decrypt({counter:t,length:64,name:"AES-CTR"},n,e),K2=()=>globalThis.crypto.subtle.generateKey({length:256,name:"AES-CTR"},!0,["encrypt","decrypt"]),Q2=async({password:t,storageKey:e})=>{const n=await K2(),i=globalThis.crypto.getRandomValues(new Uint8Array(16)),r=globalThis.crypto.getRandomValues(new Uint8Array(16)),a=await G2({keyToWrap:n,password:t,salt:r});try{St.setItem(`${e}Counter`,i),St.setItem(`${e}Salt`,r),St.setItem(`${e}Key`,a)}catch(s){throw new ke(_e.storageError,{cause:s})}},uS=t=>({counter:St.getItem(`${t}Counter`),encryptedCredentials:St.getItem(`${t}Data`),salt:St.getItem(`${t}Salt`),wrappedKey:St.getItem(`${t}Key`)}),fS=async t=>{const{counter:e,encryptedCredentials:n,salt:i,wrappedKey:r}=uS(t);if(n&&e&&r&&i)try{const a=await cS({password:t,salt:i,wrappedKeyBuffer:r}),s=await Y2({counter:e,encryptedCredentials:n,key:a});return JSON.parse(V2(s))}catch{throw new ke(_e.storageError)}else return Q2({password:t,storageKey:t})},X2=async t=>{const n={...await fS(t.credentialsStorageKey),...t},{counter:i,salt:r,wrappedKey:a}=uS(t.credentialsStorageKey);if(!a||!i||!r)throw new ke(_e.storageError);try{const s=await cS({password:n.credentialsStorageKey,salt:r,wrappedKeyBuffer:a}),l=await F2({content:q2(JSON.stringify(n)),counter:i,key:s});St.setItem(`${n.credentialsStorageKey}Data`,l)}catch(s){throw new ke(_e.storageError,{cause:s})}},W2=t=>{St.removeItem(`${t}Data`),St.removeItem(`${t}Counter`),St.removeItem(`${t}Salt`),St.removeItem(`${t}Key`)},$2=async t=>{if(t.status===0)return new Ns(_e.networkError);if(t.status>=400&&t.status<500)return new Wr(_e.unexpectedError);if(t.status>=500&&t.status<600)return new gi(_e.retryableError);const{error:e}=await t.json();return new rc(_e.tokenResponseError,{cause:e})},Cp=async({body:t,credentials:e})=>{const{options:n,url:i}=hS({body:t,credentials:e,path:"oauth2/token"}),r=await dS({request:()=>globalThis.fetch(i,n),retry:a=>a.status>=500&&a.status<600});return r.ok?r:await $2(r)},hS=({body:t,credentials:e,path:n})=>{const i=`${e.tidalAuthServiceBaseUri}${n}`;return{options:{body:new URLSearchParams(t).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},method:"POST"},url:i}},dS=async({delayInMs:t=500,request:e,retry:n})=>{let i=1;const r=()=>i>32;for(;!r();){await new Promise(l=>setTimeout(l,i*t));const a=await e();if(i*=2,!n(a)||r())return a}throw new Wr(_e.unexpectedError)},Z2=async t=>{const e=new TextEncoder().encode(t),n=await globalThis.crypto.subtle.digest("SHA-256",e),i=new Uint8Array(n),r=i.byteLength;let a="";for(let s=0;s<r;s+=1)a+=String.fromCharCode(i[s]);return globalThis.btoa(a)},pS=t=>t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),J2=()=>{const t=new Uint8Array(100);return pS(btoa(globalThis.crypto.getRandomValues(t).toString())).slice(0,128)},x={pending:!1,pendingPromises:[]},eM="https://login.tidal.com/",tM="https://auth.tidal.com/v1/",nM=["11003","6001","11001","11002","11101"],iM=t=>globalThis.addEventListener("authEventBus",t),mS=t=>{const e=new CustomEvent("authEventBus",{detail:t});globalThis.dispatchEvent(e)},rM=t=>{mS({payload:t,type:sS.credentialsUpdated})},gS=async({clientId:t,clientSecret:e,clientUniqueKey:n,credentialsStorageKey:i,scopes:r,tidalAuthServiceBaseUri:a,tidalLoginServiceBaseUri:s})=>{const l=await fS(i),o={...l,clientId:t,...e&&{clientSecret:e},clientUniqueKey:n,credentialsStorageKey:i,previousClientSecret:l?.clientSecret,scopes:r??[],tidalAuthServiceBaseUri:a??l?.tidalAuthServiceBaseUri??tM,tidalLoginServiceBaseUri:s??l?.tidalLoginServiceBaseUri??eM};await Rp(o),await Tp.synchronize()},yS=async({loginConfig:t,redirectUri:e})=>{if(!x.credentials)throw new ke(_e.initError);const n=J2(),i=await Z2(n);await Rp({...x.credentials,codeChallenge:n,redirectUri:e});const r={...t,client_id:x.credentials.clientId,...x.credentials.clientUniqueKey&&{client_unique_key:x.credentials.clientUniqueKey},code_challenge:pS(i),code_challenge_method:"S256",redirect_uri:e,response_type:"code",scope:x.credentials.scopes.join(" ")},a=new URLSearchParams(r).toString();return`${x.credentials.tidalLoginServiceBaseUri}authorize?${a}`},_S=async t=>{if(!x.credentials?.credentialsStorageKey||!x.credentials?.codeChallenge||!x.credentials?.redirectUri)throw new ke(_e.initError);const{clientId:e,clientSecret:n,clientUniqueKey:i,codeChallenge:r,redirectUri:a,scopes:s}=x.credentials,l=Object.fromEntries(new URLSearchParams(t));if(!l.code)throw new ic(_e.authenticationError);const o={client_id:e,...i&&{client_unique_key:i},...n&&{client_secret:n},code:l.code,code_verifier:r,grant_type:"authorization_code",redirect_uri:a,scope:s.join(" ")},c=await Cp({body:o,credentials:x.credentials});if(c instanceof Error)throw c;const h=await c.json();await Fc(h)},ac=()=>{mS({type:sS.credentialsUpdated}),x.credentials?.credentialsStorageKey&&W2(x.credentials.credentialsStorageKey),delete x.credentials,delete x.limitedDeviceResponse},aM=async()=>{if(x.credentials?.refreshToken){const t={...x.credentials.clientSecret&&{client_secret:x.credentials.clientSecret},client_id:x.credentials.clientId,grant_type:"refresh_token",refresh_token:x.credentials.refreshToken,scope:x.credentials.scopes.join(" ")},e=await Cp({body:t,credentials:x.credentials});if(e instanceof Error)return e;const n=await e.json();return Fc(n)}else return Ap()},sM=async()=>{if(x.credentials?.refreshToken){const t={...x.credentials.clientSecret&&{client_secret:x.credentials.clientSecret},client_id:x.credentials.clientId,grant_type:"update_client",refresh_token:x.credentials.refreshToken,scope:x.credentials.scopes.join(" ")},{options:e,url:n}=hS({body:t,credentials:x.credentials,path:"oauth2/token"}),i=await dS({request:()=>globalThis.fetch(n,e),retry:a=>a.status>=400&&a.status<600});if(!i.ok)throw i.status===0?new Ns(_e.networkError):new gi(_e.retryableError);const r=await i.json();return Fc(r)}else{if(x.credentials){const t=await Ap();if(t&&"token"in t)return x.credentials.previousClientSecret=x.credentials.clientSecret,t;throw new gi(_e.retryableError)}throw new ke(_e.unexpectedError)}},Ap=async()=>{if(x.credentials?.clientSecret){const t={client_id:x.credentials.clientId,client_secret:x.credentials.clientSecret,grant_type:"client_credentials"},e=await Cp({body:t,credentials:x.credentials});if(e instanceof Error)return e;const n=await e.json();return Fc(n)}},lM=async t=>(x.pending&&await new Promise(e=>{x.pendingPromises.push(e)}),oM(t).finally(()=>{const e=x.pendingPromises.shift();e&&e(),x.pending=!1})),oM=async t=>{if(x.credentials){x.pending=!0;const{accessToken:e}=x.credentials,n=60*1e3;if(e){const i=x.credentials.scopes.every(l=>e.grantedScopes?.includes(l));if(x.credentials.clientUniqueKey!==e.clientUniqueKey||e.userId&&i===!1)throw ac(),new nc(_e.illegalArgumentError);if(x.credentials.clientId!==e?.clientId||!!(x.credentials.previousClientSecret&&x.credentials.previousClientSecret!==x.credentials.clientSecret)){const l=await sM();if(l&&"token"in l)return l;throw new gi(_e.retryableError)}if(!!!(t&&nM.includes(t))&&e.expires&&e.expires>Tp.now()+n)return e;const s=await aM();if(s&&"token"in s)return s;if(s instanceof Wr)throw ac(),s;if(s instanceof gi)throw s}else if(x.credentials.clientSecret){const i=await Ap();if(i&&"token"in i)return i;if(i instanceof Error)throw i}else return{clientId:x.credentials.clientId,requestedScopes:x.credentials.scopes}}throw new ke(_e.initError)},Rp=t=>{x.credentials=t;const e={...x.credentials.accessToken,clientId:x.credentials.clientId,requestedScopes:x.credentials.scopes};return rM(e),X2(x.credentials)},Fc=async t=>{if(!x.credentials)throw new ke(_e.initError);const{clientId:e,clientUniqueKey:n,scopes:i}=x.credentials,r=t.scope?.length?t.scope?.split(" "):[],a={clientId:e,clientUniqueKey:n,expires:Tp.now()+t.expires_in*1e3,grantedScopes:r,requestedScopes:i,token:t.access_token,...t.user_id&&{userId:t.user_id.toString()}};return await Rp({...x.credentials,accessToken:a,...t.refresh_token&&{refreshToken:t.refresh_token}}),a},$r={bus:iM,getCredentials:lM},cM=Object.freeze(Object.defineProperty({__proto__:null,authErrorCodeMap:_e,credentialsProvider:$r,finalizeLogin:_S,init:gS,initializeLogin:yS,logout:ac},Symbol.toStringTag,{value:"Module"}));class xs extends Error{errorCode;constructor(e,n){super(e,n),Object.setPrototypeOf(this,xs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs),this.name="TidalError",this.errorCode=e}}class Os extends xs{constructor(e,n){super(e,n),Object.setPrototypeOf(this,Os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os),this.name="IllegalArgumentError"}}let Eh=!1;class sc extends xs{constructor(e,n){super(e,n),Object.setPrototypeOf(this,sc.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sc),this.name="OutageStartError"}}const uM={name:"OutageEndMessage"},by=t=>{Eh!==t&&(Eh=t,vS(t?new sc("1"):uM))},fM=()=>Eh,hM=t=>globalThis.addEventListener("eventProducerEventBus",t),vS=t=>{const e=new CustomEvent("eventProducerEventBus",{detail:t});globalThis.dispatchEvent(e)},dM=Object.freeze(Object.defineProperty({__proto__:null,bus:hM,postMessage:vS},Symbol.toStringTag,{value:"Module"}));let Is;const pM=t=>{Is=t},mM=t=>{Is.credentialsProvider=t},gM=t=>{Is.blockedConsentCategories={...Is.blockedConsentCategories,...t}},ol=()=>Is;class yM{#e;#t=!1;#n;#i;constructor(e){this.#i=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{const e=await fetch(this.#i);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,n){let i;if(n){if(i=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===n),!i)throw new ReferenceError(`There is no performance entry named "${e}" with detail "${n}"`)}else i=performance.getEntriesByName(e).pop();return i?i.startTime:void 0}}const Np=new yM("https://api.tidal.com/v1/ping"),bS=`var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $r(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
function ae(L) {
  throw new Error('Could not dynamically require "' + L + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pe = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
var ze;
function Vr() {
  return ze || (ze = 1, function(L, X) {
    (function(P) {
      L.exports = P();
    })(function() {
      return function P(Y, Q, E) {
        function C(T, z) {
          if (!Q[T]) {
            if (!Y[T]) {
              var v = typeof ae == "function" && ae;
              if (!z && v) return v(T, !0);
              if (b) return b(T, !0);
              var h = new Error("Cannot find module '" + T + "'");
              throw h.code = "MODULE_NOT_FOUND", h;
            }
            var I = Q[T] = { exports: {} };
            Y[T][0].call(I.exports, function(A) {
              var W = Y[T][1][A];
              return C(W || A);
            }, I, I.exports, P, Y, Q, E);
          }
          return Q[T].exports;
        }
        for (var b = typeof ae == "function" && ae, B = 0; B < E.length; B++) C(E[B]);
        return C;
      }({ 1: [function(P, Y, Q) {
        (function(E) {
          var C = E.MutationObserver || E.WebKitMutationObserver, b;
          if (C) {
            var B = 0, T = new C(A), z = E.document.createTextNode("");
            T.observe(z, {
              characterData: !0
            }), b = function() {
              z.data = B = ++B % 2;
            };
          } else if (!E.setImmediate && typeof E.MessageChannel < "u") {
            var v = new E.MessageChannel();
            v.port1.onmessage = A, b = function() {
              v.port2.postMessage(0);
            };
          } else "document" in E && "onreadystatechange" in E.document.createElement("script") ? b = function() {
            var D = E.document.createElement("script");
            D.onreadystatechange = function() {
              A(), D.onreadystatechange = null, D.parentNode.removeChild(D), D = null;
            }, E.document.documentElement.appendChild(D);
          } : b = function() {
            setTimeout(A, 0);
          };
          var h, I = [];
          function A() {
            h = !0;
            for (var D, $, N = I.length; N; ) {
              for ($ = I, I = [], D = -1; ++D < N; )
                $[D]();
              N = I.length;
            }
            h = !1;
          }
          Y.exports = W;
          function W(D) {
            I.push(D) === 1 && !h && b();
          }
        }).call(this, typeof oe < "u" ? oe : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 2: [function(P, Y, Q) {
        var E = P(1);
        function C() {
        }
        var b = {}, B = ["REJECTED"], T = ["FULFILLED"], z = ["PENDING"];
        Y.exports = v;
        function v(l) {
          if (typeof l != "function")
            throw new TypeError("resolver must be a function");
          this.state = z, this.queue = [], this.outcome = void 0, l !== C && W(this, l);
        }
        v.prototype.catch = function(l) {
          return this.then(null, l);
        }, v.prototype.then = function(l, p) {
          if (typeof l != "function" && this.state === T || typeof p != "function" && this.state === B)
            return this;
          var y = new this.constructor(C);
          if (this.state !== z) {
            var w = this.state === T ? l : p;
            I(y, w, this.outcome);
          } else
            this.queue.push(new h(y, l, p));
          return y;
        };
        function h(l, p, y) {
          this.promise = l, typeof p == "function" && (this.onFulfilled = p, this.callFulfilled = this.otherCallFulfilled), typeof y == "function" && (this.onRejected = y, this.callRejected = this.otherCallRejected);
        }
        h.prototype.callFulfilled = function(l) {
          b.resolve(this.promise, l);
        }, h.prototype.otherCallFulfilled = function(l) {
          I(this.promise, this.onFulfilled, l);
        }, h.prototype.callRejected = function(l) {
          b.reject(this.promise, l);
        }, h.prototype.otherCallRejected = function(l) {
          I(this.promise, this.onRejected, l);
        };
        function I(l, p, y) {
          E(function() {
            var w;
            try {
              w = p(y);
            } catch (x) {
              return b.reject(l, x);
            }
            w === l ? b.reject(l, new TypeError("Cannot resolve promise with itself")) : b.resolve(l, w);
          });
        }
        b.resolve = function(l, p) {
          var y = D(A, p);
          if (y.status === "error")
            return b.reject(l, y.value);
          var w = y.value;
          if (w)
            W(l, w);
          else {
            l.state = T, l.outcome = p;
            for (var x = -1, O = l.queue.length; ++x < O; )
              l.queue[x].callFulfilled(p);
          }
          return l;
        }, b.reject = function(l, p) {
          l.state = B, l.outcome = p;
          for (var y = -1, w = l.queue.length; ++y < w; )
            l.queue[y].callRejected(p);
          return l;
        };
        function A(l) {
          var p = l && l.then;
          if (l && (typeof l == "object" || typeof l == "function") && typeof p == "function")
            return function() {
              p.apply(l, arguments);
            };
        }
        function W(l, p) {
          var y = !1;
          function w(M) {
            y || (y = !0, b.reject(l, M));
          }
          function x(M) {
            y || (y = !0, b.resolve(l, M));
          }
          function O() {
            p(x, w);
          }
          var F = D(O);
          F.status === "error" && w(F.value);
        }
        function D(l, p) {
          var y = {};
          try {
            y.value = l(p), y.status = "success";
          } catch (w) {
            y.status = "error", y.value = w;
          }
          return y;
        }
        v.resolve = $;
        function $(l) {
          return l instanceof this ? l : b.resolve(new this(C), l);
        }
        v.reject = N;
        function N(l) {
          var p = new this(C);
          return b.reject(p, l);
        }
        v.all = ie;
        function ie(l) {
          var p = this;
          if (Object.prototype.toString.call(l) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var y = l.length, w = !1;
          if (!y)
            return this.resolve([]);
          for (var x = new Array(y), O = 0, F = -1, M = new this(C); ++F < y; )
            V(l[F], F);
          return M;
          function V(Z, re) {
            p.resolve(Z).then(fe, function(J) {
              w || (w = !0, b.reject(M, J));
            });
            function fe(J) {
              x[re] = J, ++O === y && !w && (w = !0, b.resolve(M, x));
            }
          }
        }
        v.race = j;
        function j(l) {
          var p = this;
          if (Object.prototype.toString.call(l) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var y = l.length, w = !1;
          if (!y)
            return this.resolve([]);
          for (var x = -1, O = new this(C); ++x < y; )
            F(l[x]);
          return O;
          function F(M) {
            p.resolve(M).then(function(V) {
              w || (w = !0, b.resolve(O, V));
            }, function(V) {
              w || (w = !0, b.reject(O, V));
            });
          }
        }
      }, { 1: 1 }], 3: [function(P, Y, Q) {
        (function(E) {
          typeof E.Promise != "function" && (E.Promise = P(2));
        }).call(this, typeof oe < "u" ? oe : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { 2: 2 }], 4: [function(P, Y, Q) {
        var E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        function C(e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function b() {
          try {
            if (typeof indexedDB < "u")
              return indexedDB;
            if (typeof webkitIndexedDB < "u")
              return webkitIndexedDB;
            if (typeof mozIndexedDB < "u")
              return mozIndexedDB;
            if (typeof OIndexedDB < "u")
              return OIndexedDB;
            if (typeof msIndexedDB < "u")
              return msIndexedDB;
          } catch {
            return;
          }
        }
        var B = b();
        function T() {
          try {
            if (!B || !B.open)
              return !1;
            var e = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), n = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!e || n) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
            // and HTC Android devices <4.4 are missing IDBKeyRange
            // See: https://github.com/mozilla/localForage/issues/128
            // See: https://github.com/mozilla/localForage/issues/272
            typeof IDBKeyRange < "u";
          } catch {
            return !1;
          }
        }
        function z(e, n) {
          e = e || [], n = n || {};
          try {
            return new Blob(e, n);
          } catch (t) {
            if (t.name !== "TypeError")
              throw t;
            for (var r = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, o = new r(), a = 0; a < e.length; a += 1)
              o.append(e[a]);
            return o.getBlob(n.type);
          }
        }
        typeof Promise > "u" && P(3);
        var v = Promise;
        function h(e, n) {
          n && e.then(function(r) {
            n(null, r);
          }, function(r) {
            n(r);
          });
        }
        function I(e, n, r) {
          typeof n == "function" && e.then(n), typeof r == "function" && e.catch(r);
        }
        function A(e) {
          return typeof e != "string" && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e;
        }
        function W() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function")
            return arguments[arguments.length - 1];
        }
        var D = "local-forage-detect-blob-support", $ = void 0, N = {}, ie = Object.prototype.toString, j = "readonly", l = "readwrite";
        function p(e) {
          for (var n = e.length, r = new ArrayBuffer(n), o = new Uint8Array(r), a = 0; a < n; a++)
            o[a] = e.charCodeAt(a);
          return r;
        }
        function y(e) {
          return new v(function(n) {
            var r = e.transaction(D, l), o = z([""]);
            r.objectStore(D).put(o, "key"), r.onabort = function(a) {
              a.preventDefault(), a.stopPropagation(), n(!1);
            }, r.oncomplete = function() {
              var a = navigator.userAgent.match(/Chrome\\/(\\d+)/), t = navigator.userAgent.match(/Edge\\//);
              n(t || !a || parseInt(a[1], 10) >= 43);
            };
          }).catch(function() {
            return !1;
          });
        }
        function w(e) {
          return typeof $ == "boolean" ? v.resolve($) : y(e).then(function(n) {
            return $ = n, $;
          });
        }
        function x(e) {
          var n = N[e.name], r = {};
          r.promise = new v(function(o, a) {
            r.resolve = o, r.reject = a;
          }), n.deferredOperations.push(r), n.dbReady ? n.dbReady = n.dbReady.then(function() {
            return r.promise;
          }) : n.dbReady = r.promise;
        }
        function O(e) {
          var n = N[e.name], r = n.deferredOperations.pop();
          if (r)
            return r.resolve(), r.promise;
        }
        function F(e, n) {
          var r = N[e.name], o = r.deferredOperations.pop();
          if (o)
            return o.reject(n), o.promise;
        }
        function M(e, n) {
          return new v(function(r, o) {
            if (N[e.name] = N[e.name] || be(), e.db)
              if (n)
                x(e), e.db.close();
              else
                return r(e.db);
            var a = [e.name];
            n && a.push(e.version);
            var t = B.open.apply(B, a);
            n && (t.onupgradeneeded = function(i) {
              var f = t.result;
              try {
                f.createObjectStore(e.storeName), i.oldVersion <= 1 && f.createObjectStore(D);
              } catch (u) {
                if (u.name === "ConstraintError")
                  console.warn('The database "' + e.name + '" has been upgraded from version ' + i.oldVersion + " to version " + i.newVersion + ', but the storage "' + e.storeName + '" already exists.');
                else
                  throw u;
              }
            }), t.onerror = function(i) {
              i.preventDefault(), o(t.error);
            }, t.onsuccess = function() {
              var i = t.result;
              i.onversionchange = function(f) {
                f.target.close();
              }, r(i), O(e);
            };
          });
        }
        function V(e) {
          return M(e, !1);
        }
        function Z(e) {
          return M(e, !0);
        }
        function re(e, n) {
          if (!e.db)
            return !0;
          var r = !e.db.objectStoreNames.contains(e.storeName), o = e.version < e.db.version, a = e.version > e.db.version;
          if (o && (e.version !== n && console.warn('The database "' + e.name + \`" can't be downgraded from version \` + e.db.version + " to version " + e.version + "."), e.version = e.db.version), a || r) {
            if (r) {
              var t = e.db.version + 1;
              t > e.version && (e.version = t);
            }
            return !0;
          }
          return !1;
        }
        function fe(e) {
          return new v(function(n, r) {
            var o = new FileReader();
            o.onerror = r, o.onloadend = function(a) {
              var t = btoa(a.target.result || "");
              n({
                __local_forage_encoded_blob: !0,
                data: t,
                type: e.type
              });
            }, o.readAsBinaryString(e);
          });
        }
        function J(e) {
          var n = p(atob(e.data));
          return z([n], { type: e.type });
        }
        function _e(e) {
          return e && e.__local_forage_encoded_blob;
        }
        function Ve(e) {
          var n = this, r = n._initReady().then(function() {
            var o = N[n._dbInfo.name];
            if (o && o.dbReady)
              return o.dbReady;
          });
          return I(r, e, e), r;
        }
        function Ke(e) {
          x(e);
          for (var n = N[e.name], r = n.forages, o = 0; o < r.length; o++) {
            var a = r[o];
            a._dbInfo.db && (a._dbInfo.db.close(), a._dbInfo.db = null);
          }
          return e.db = null, V(e).then(function(t) {
            return e.db = t, re(e) ? Z(e) : t;
          }).then(function(t) {
            e.db = n.db = t;
            for (var i = 0; i < r.length; i++)
              r[i]._dbInfo.db = t;
          }).catch(function(t) {
            throw F(e, t), t;
          });
        }
        function K(e, n, r, o) {
          o === void 0 && (o = 1);
          try {
            var a = e.db.transaction(e.storeName, n);
            r(null, a);
          } catch (t) {
            if (o > 0 && (!e.db || t.name === "InvalidStateError" || t.name === "NotFoundError"))
              return v.resolve().then(function() {
                if (!e.db || t.name === "NotFoundError" && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version)
                  return e.db && (e.version = e.db.version + 1), Z(e);
              }).then(function() {
                return Ke(e).then(function() {
                  K(e, n, r, o - 1);
                });
              }).catch(r);
            r(t);
          }
        }
        function be() {
          return {
            // Running localForages sharing a database.
            forages: [],
            // Shared database.
            db: null,
            // Database readiness (promise).
            dbReady: null,
            // Deferred operations on the database.
            deferredOperations: []
          };
        }
        function Qe(e) {
          var n = this, r = {
            db: null
          };
          if (e)
            for (var o in e)
              r[o] = e[o];
          var a = N[r.name];
          a || (a = be(), N[r.name] = a), a.forages.push(n), n._initReady || (n._initReady = n.ready, n.ready = Ve);
          var t = [];
          function i() {
            return v.resolve();
          }
          for (var f = 0; f < a.forages.length; f++) {
            var u = a.forages[f];
            u !== n && t.push(u._initReady().catch(i));
          }
          var s = a.forages.slice(0);
          return v.all(t).then(function() {
            return r.db = a.db, V(r);
          }).then(function(c) {
            return r.db = c, re(r, n._defaultConfig.version) ? Z(r) : c;
          }).then(function(c) {
            r.db = a.db = c, n._dbInfo = r;
            for (var d = 0; d < s.length; d++) {
              var m = s[d];
              m !== n && (m._dbInfo.db = r.db, m._dbInfo.version = r.version);
            }
          });
        }
        function Ge(e, n) {
          var r = this;
          e = A(e);
          var o = new v(function(a, t) {
            r.ready().then(function() {
              K(r._dbInfo, j, function(i, f) {
                if (i)
                  return t(i);
                try {
                  var u = f.objectStore(r._dbInfo.storeName), s = u.get(e);
                  s.onsuccess = function() {
                    var c = s.result;
                    c === void 0 && (c = null), _e(c) && (c = J(c)), a(c);
                  }, s.onerror = function() {
                    t(s.error);
                  };
                } catch (c) {
                  t(c);
                }
              });
            }).catch(t);
          });
          return h(o, n), o;
        }
        function He(e, n) {
          var r = this, o = new v(function(a, t) {
            r.ready().then(function() {
              K(r._dbInfo, j, function(i, f) {
                if (i)
                  return t(i);
                try {
                  var u = f.objectStore(r._dbInfo.storeName), s = u.openCursor(), c = 1;
                  s.onsuccess = function() {
                    var d = s.result;
                    if (d) {
                      var m = d.value;
                      _e(m) && (m = J(m));
                      var g = e(m, d.key, c++);
                      g !== void 0 ? a(g) : d.continue();
                    } else
                      a();
                  }, s.onerror = function() {
                    t(s.error);
                  };
                } catch (d) {
                  t(d);
                }
              });
            }).catch(t);
          });
          return h(o, n), o;
        }
        function Xe(e, n, r) {
          var o = this;
          e = A(e);
          var a = new v(function(t, i) {
            var f;
            o.ready().then(function() {
              return f = o._dbInfo, ie.call(n) === "[object Blob]" ? w(f.db).then(function(u) {
                return u ? n : fe(n);
              }) : n;
            }).then(function(u) {
              K(o._dbInfo, l, function(s, c) {
                if (s)
                  return i(s);
                try {
                  var d = c.objectStore(o._dbInfo.storeName);
                  u === null && (u = void 0);
                  var m = d.put(u, e);
                  c.oncomplete = function() {
                    u === void 0 && (u = null), t(u);
                  }, c.onabort = c.onerror = function() {
                    var g = m.error ? m.error : m.transaction.error;
                    i(g);
                  };
                } catch (g) {
                  i(g);
                }
              });
            }).catch(i);
          });
          return h(a, r), a;
        }
        function je(e, n) {
          var r = this;
          e = A(e);
          var o = new v(function(a, t) {
            r.ready().then(function() {
              K(r._dbInfo, l, function(i, f) {
                if (i)
                  return t(i);
                try {
                  var u = f.objectStore(r._dbInfo.storeName), s = u.delete(e);
                  f.oncomplete = function() {
                    a();
                  }, f.onerror = function() {
                    t(s.error);
                  }, f.onabort = function() {
                    var c = s.error ? s.error : s.transaction.error;
                    t(c);
                  };
                } catch (c) {
                  t(c);
                }
              });
            }).catch(t);
          });
          return h(o, n), o;
        }
        function Je(e) {
          var n = this, r = new v(function(o, a) {
            n.ready().then(function() {
              K(n._dbInfo, l, function(t, i) {
                if (t)
                  return a(t);
                try {
                  var f = i.objectStore(n._dbInfo.storeName), u = f.clear();
                  i.oncomplete = function() {
                    o();
                  }, i.onabort = i.onerror = function() {
                    var s = u.error ? u.error : u.transaction.error;
                    a(s);
                  };
                } catch (s) {
                  a(s);
                }
              });
            }).catch(a);
          });
          return h(r, e), r;
        }
        function qe(e) {
          var n = this, r = new v(function(o, a) {
            n.ready().then(function() {
              K(n._dbInfo, j, function(t, i) {
                if (t)
                  return a(t);
                try {
                  var f = i.objectStore(n._dbInfo.storeName), u = f.count();
                  u.onsuccess = function() {
                    o(u.result);
                  }, u.onerror = function() {
                    a(u.error);
                  };
                } catch (s) {
                  a(s);
                }
              });
            }).catch(a);
          });
          return h(r, e), r;
        }
        function Ze(e, n) {
          var r = this, o = new v(function(a, t) {
            if (e < 0) {
              a(null);
              return;
            }
            r.ready().then(function() {
              K(r._dbInfo, j, function(i, f) {
                if (i)
                  return t(i);
                try {
                  var u = f.objectStore(r._dbInfo.storeName), s = !1, c = u.openKeyCursor();
                  c.onsuccess = function() {
                    var d = c.result;
                    if (!d) {
                      a(null);
                      return;
                    }
                    e === 0 || s ? a(d.key) : (s = !0, d.advance(e));
                  }, c.onerror = function() {
                    t(c.error);
                  };
                } catch (d) {
                  t(d);
                }
              });
            }).catch(t);
          });
          return h(o, n), o;
        }
        function ke(e) {
          var n = this, r = new v(function(o, a) {
            n.ready().then(function() {
              K(n._dbInfo, j, function(t, i) {
                if (t)
                  return a(t);
                try {
                  var f = i.objectStore(n._dbInfo.storeName), u = f.openKeyCursor(), s = [];
                  u.onsuccess = function() {
                    var c = u.result;
                    if (!c) {
                      o(s);
                      return;
                    }
                    s.push(c.key), c.continue();
                  }, u.onerror = function() {
                    a(u.error);
                  };
                } catch (c) {
                  a(c);
                }
              });
            }).catch(a);
          });
          return h(r, e), r;
        }
        function er(e, n) {
          n = W.apply(this, arguments);
          var r = this.config();
          e = typeof e != "function" && e || {}, e.name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName);
          var o = this, a;
          if (!e.name)
            a = v.reject("Invalid arguments");
          else {
            var t = e.name === r.name && o._dbInfo.db, i = t ? v.resolve(o._dbInfo.db) : V(e).then(function(f) {
              var u = N[e.name], s = u.forages;
              u.db = f;
              for (var c = 0; c < s.length; c++)
                s[c]._dbInfo.db = f;
              return f;
            });
            e.storeName ? a = i.then(function(f) {
              if (f.objectStoreNames.contains(e.storeName)) {
                var u = f.version + 1;
                x(e);
                var s = N[e.name], c = s.forages;
                f.close();
                for (var d = 0; d < c.length; d++) {
                  var m = c[d];
                  m._dbInfo.db = null, m._dbInfo.version = u;
                }
                var g = new v(function(_, R) {
                  var S = B.open(e.name, u);
                  S.onerror = function(U) {
                    var ee = S.result;
                    ee.close(), R(U);
                  }, S.onupgradeneeded = function() {
                    var U = S.result;
                    U.deleteObjectStore(e.storeName);
                  }, S.onsuccess = function() {
                    var U = S.result;
                    U.close(), _(U);
                  };
                });
                return g.then(function(_) {
                  s.db = _;
                  for (var R = 0; R < c.length; R++) {
                    var S = c[R];
                    S._dbInfo.db = _, O(S._dbInfo);
                  }
                }).catch(function(_) {
                  throw (F(e, _) || v.resolve()).catch(function() {
                  }), _;
                });
              }
            }) : a = i.then(function(f) {
              x(e);
              var u = N[e.name], s = u.forages;
              f.close();
              for (var c = 0; c < s.length; c++) {
                var d = s[c];
                d._dbInfo.db = null;
              }
              var m = new v(function(g, _) {
                var R = B.deleteDatabase(e.name);
                R.onerror = function() {
                  var S = R.result;
                  S && S.close(), _(R.error);
                }, R.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + e.name + '" until all open connections are closed');
                }, R.onsuccess = function() {
                  var S = R.result;
                  S && S.close(), g(S);
                };
              });
              return m.then(function(g) {
                u.db = g;
                for (var _ = 0; _ < s.length; _++) {
                  var R = s[_];
                  O(R._dbInfo);
                }
              }).catch(function(g) {
                throw (F(e, g) || v.resolve()).catch(function() {
                }), g;
              });
            });
          }
          return h(a, n), a;
        }
        var rr = {
          _driver: "asyncStorage",
          _initStorage: Qe,
          _support: T(),
          iterate: He,
          getItem: Ge,
          setItem: Xe,
          removeItem: je,
          clear: Je,
          length: qe,
          key: Ze,
          keys: ke,
          dropInstance: er
        };
        function nr() {
          return typeof openDatabase == "function";
        }
        var G = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tr = "~~local_forage_type~", we = /^~~local_forage_type~([^~]+)~/, ne = "__lfsc__:", ue = ne.length, se = "arbf", ce = "blob", Ee = "si08", Se = "ui08", Ie = "uic8", Re = "si16", Ae = "si32", De = "ur16", Ne = "ui32", Te = "fl32", xe = "fl64", Be = ue + se.length, Ce = Object.prototype.toString;
        function Oe(e) {
          var n = e.length * 0.75, r = e.length, o, a = 0, t, i, f, u;
          e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
          var s = new ArrayBuffer(n), c = new Uint8Array(s);
          for (o = 0; o < r; o += 4)
            t = G.indexOf(e[o]), i = G.indexOf(e[o + 1]), f = G.indexOf(e[o + 2]), u = G.indexOf(e[o + 3]), c[a++] = t << 2 | i >> 4, c[a++] = (i & 15) << 4 | f >> 2, c[a++] = (f & 3) << 6 | u & 63;
          return s;
        }
        function le(e) {
          var n = new Uint8Array(e), r = "", o;
          for (o = 0; o < n.length; o += 3)
            r += G[n[o] >> 2], r += G[(n[o] & 3) << 4 | n[o + 1] >> 4], r += G[(n[o + 1] & 15) << 2 | n[o + 2] >> 6], r += G[n[o + 2] & 63];
          return n.length % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r;
        }
        function or(e, n) {
          var r = "";
          if (e && (r = Ce.call(e)), e && (r === "[object ArrayBuffer]" || e.buffer && Ce.call(e.buffer) === "[object ArrayBuffer]")) {
            var o, a = ne;
            e instanceof ArrayBuffer ? (o = e, a += se) : (o = e.buffer, r === "[object Int8Array]" ? a += Ee : r === "[object Uint8Array]" ? a += Se : r === "[object Uint8ClampedArray]" ? a += Ie : r === "[object Int16Array]" ? a += Re : r === "[object Uint16Array]" ? a += De : r === "[object Int32Array]" ? a += Ae : r === "[object Uint32Array]" ? a += Ne : r === "[object Float32Array]" ? a += Te : r === "[object Float64Array]" ? a += xe : n(new Error("Failed to get type for BinaryArray"))), n(a + le(o));
          } else if (r === "[object Blob]") {
            var t = new FileReader();
            t.onload = function() {
              var i = tr + e.type + "~" + le(this.result);
              n(ne + ce + i);
            }, t.readAsArrayBuffer(e);
          } else
            try {
              n(JSON.stringify(e));
            } catch (i) {
              console.error("Couldn't convert value into a JSON string: ", e), n(null, i);
            }
        }
        function ar(e) {
          if (e.substring(0, ue) !== ne)
            return JSON.parse(e);
          var n = e.substring(Be), r = e.substring(ue, Be), o;
          if (r === ce && we.test(n)) {
            var a = n.match(we);
            o = a[1], n = n.substring(a[0].length);
          }
          var t = Oe(n);
          switch (r) {
            case se:
              return t;
            case ce:
              return z([t], { type: o });
            case Ee:
              return new Int8Array(t);
            case Se:
              return new Uint8Array(t);
            case Ie:
              return new Uint8ClampedArray(t);
            case Re:
              return new Int16Array(t);
            case De:
              return new Uint16Array(t);
            case Ae:
              return new Int32Array(t);
            case Ne:
              return new Uint32Array(t);
            case Te:
              return new Float32Array(t);
            case xe:
              return new Float64Array(t);
            default:
              throw new Error("Unkown type: " + r);
          }
        }
        var ve = {
          serialize: or,
          deserialize: ar,
          stringToBuffer: Oe,
          bufferToString: le
        };
        function Le(e, n, r, o) {
          e.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, o);
        }
        function ir(e) {
          var n = this, r = {
            db: null
          };
          if (e)
            for (var o in e)
              r[o] = typeof e[o] != "string" ? e[o].toString() : e[o];
          var a = new v(function(t, i) {
            try {
              r.db = openDatabase(r.name, String(r.version), r.description, r.size);
            } catch (f) {
              return i(f);
            }
            r.db.transaction(function(f) {
              Le(f, r, function() {
                n._dbInfo = r, t();
              }, function(u, s) {
                i(s);
              });
            }, i);
          });
          return r.serializer = ve, a;
        }
        function H(e, n, r, o, a, t) {
          e.executeSql(r, o, a, function(i, f) {
            f.code === f.SYNTAX_ERR ? i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [n.storeName], function(u, s) {
              s.rows.length ? t(u, f) : Le(u, n, function() {
                u.executeSql(r, o, a, t);
              }, t);
            }, t) : t(i, f);
          }, t);
        }
        function fr(e, n) {
          var r = this;
          e = A(e);
          var o = new v(function(a, t) {
            r.ready().then(function() {
              var i = r._dbInfo;
              i.db.transaction(function(f) {
                H(f, i, "SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [e], function(u, s) {
                  var c = s.rows.length ? s.rows.item(0).value : null;
                  c && (c = i.serializer.deserialize(c)), a(c);
                }, function(u, s) {
                  t(s);
                });
              });
            }).catch(t);
          });
          return h(o, n), o;
        }
        function ur(e, n) {
          var r = this, o = new v(function(a, t) {
            r.ready().then(function() {
              var i = r._dbInfo;
              i.db.transaction(function(f) {
                H(f, i, "SELECT * FROM " + i.storeName, [], function(u, s) {
                  for (var c = s.rows, d = c.length, m = 0; m < d; m++) {
                    var g = c.item(m), _ = g.value;
                    if (_ && (_ = i.serializer.deserialize(_)), _ = e(_, g.key, m + 1), _ !== void 0) {
                      a(_);
                      return;
                    }
                  }
                  a();
                }, function(u, s) {
                  t(s);
                });
              });
            }).catch(t);
          });
          return h(o, n), o;
        }
        function Pe(e, n, r, o) {
          var a = this;
          e = A(e);
          var t = new v(function(i, f) {
            a.ready().then(function() {
              n === void 0 && (n = null);
              var u = n, s = a._dbInfo;
              s.serializer.serialize(n, function(c, d) {
                d ? f(d) : s.db.transaction(function(m) {
                  H(m, s, "INSERT OR REPLACE INTO " + s.storeName + " (key, value) VALUES (?, ?)", [e, c], function() {
                    i(u);
                  }, function(g, _) {
                    f(_);
                  });
                }, function(m) {
                  if (m.code === m.QUOTA_ERR) {
                    if (o > 0) {
                      i(Pe.apply(a, [e, u, r, o - 1]));
                      return;
                    }
                    f(m);
                  }
                });
              });
            }).catch(f);
          });
          return h(t, r), t;
        }
        function sr(e, n, r) {
          return Pe.apply(this, [e, n, r, 1]);
        }
        function cr(e, n) {
          var r = this;
          e = A(e);
          var o = new v(function(a, t) {
            r.ready().then(function() {
              var i = r._dbInfo;
              i.db.transaction(function(f) {
                H(f, i, "DELETE FROM " + i.storeName + " WHERE key = ?", [e], function() {
                  a();
                }, function(u, s) {
                  t(s);
                });
              });
            }).catch(t);
          });
          return h(o, n), o;
        }
        function lr(e) {
          var n = this, r = new v(function(o, a) {
            n.ready().then(function() {
              var t = n._dbInfo;
              t.db.transaction(function(i) {
                H(i, t, "DELETE FROM " + t.storeName, [], function() {
                  o();
                }, function(f, u) {
                  a(u);
                });
              });
            }).catch(a);
          });
          return h(r, e), r;
        }
        function vr(e) {
          var n = this, r = new v(function(o, a) {
            n.ready().then(function() {
              var t = n._dbInfo;
              t.db.transaction(function(i) {
                H(i, t, "SELECT COUNT(key) as c FROM " + t.storeName, [], function(f, u) {
                  var s = u.rows.item(0).c;
                  o(s);
                }, function(f, u) {
                  a(u);
                });
              });
            }).catch(a);
          });
          return h(r, e), r;
        }
        function dr(e, n) {
          var r = this, o = new v(function(a, t) {
            r.ready().then(function() {
              var i = r._dbInfo;
              i.db.transaction(function(f) {
                H(f, i, "SELECT key FROM " + i.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(u, s) {
                  var c = s.rows.length ? s.rows.item(0).key : null;
                  a(c);
                }, function(u, s) {
                  t(s);
                });
              });
            }).catch(t);
          });
          return h(o, n), o;
        }
        function hr(e) {
          var n = this, r = new v(function(o, a) {
            n.ready().then(function() {
              var t = n._dbInfo;
              t.db.transaction(function(i) {
                H(i, t, "SELECT key FROM " + t.storeName, [], function(f, u) {
                  for (var s = [], c = 0; c < u.rows.length; c++)
                    s.push(u.rows.item(c).key);
                  o(s);
                }, function(f, u) {
                  a(u);
                });
              });
            }).catch(a);
          });
          return h(r, e), r;
        }
        function mr(e) {
          return new v(function(n, r) {
            e.transaction(function(o) {
              o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(a, t) {
                for (var i = [], f = 0; f < t.rows.length; f++)
                  i.push(t.rows.item(f).name);
                n({
                  db: e,
                  storeNames: i
                });
              }, function(a, t) {
                r(t);
              });
            }, function(o) {
              r(o);
            });
          });
        }
        function yr(e, n) {
          n = W.apply(this, arguments);
          var r = this.config();
          e = typeof e != "function" && e || {}, e.name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName);
          var o = this, a;
          return e.name ? a = new v(function(t) {
            var i;
            e.name === r.name ? i = o._dbInfo.db : i = openDatabase(e.name, "", "", 0), e.storeName ? t({
              db: i,
              storeNames: [e.storeName]
            }) : t(mr(i));
          }).then(function(t) {
            return new v(function(i, f) {
              t.db.transaction(function(u) {
                function s(g) {
                  return new v(function(_, R) {
                    u.executeSql("DROP TABLE IF EXISTS " + g, [], function() {
                      _();
                    }, function(S, U) {
                      R(U);
                    });
                  });
                }
                for (var c = [], d = 0, m = t.storeNames.length; d < m; d++)
                  c.push(s(t.storeNames[d]));
                v.all(c).then(function() {
                  i();
                }).catch(function(g) {
                  f(g);
                });
              }, function(u) {
                f(u);
              });
            });
          }) : a = v.reject("Invalid arguments"), h(a, n), a;
        }
        var pr = {
          _driver: "webSQLStorage",
          _initStorage: ir,
          _support: nr(),
          iterate: ur,
          getItem: fr,
          setItem: sr,
          removeItem: cr,
          clear: lr,
          length: vr,
          key: dr,
          keys: hr,
          dropInstance: yr
        };
        function gr() {
          try {
            return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
            !!localStorage.setItem;
          } catch {
            return !1;
          }
        }
        function Fe(e, n) {
          var r = e.name + "/";
          return e.storeName !== n.storeName && (r += e.storeName + "/"), r;
        }
        function _r() {
          var e = "_localforage_support_test";
          try {
            return localStorage.setItem(e, !0), localStorage.removeItem(e), !1;
          } catch {
            return !0;
          }
        }
        function br() {
          return !_r() || localStorage.length > 0;
        }
        function wr(e) {
          var n = this, r = {};
          if (e)
            for (var o in e)
              r[o] = e[o];
          return r.keyPrefix = Fe(e, n._defaultConfig), br() ? (n._dbInfo = r, r.serializer = ve, v.resolve()) : v.reject();
        }
        function Er(e) {
          var n = this, r = n.ready().then(function() {
            for (var o = n._dbInfo.keyPrefix, a = localStorage.length - 1; a >= 0; a--) {
              var t = localStorage.key(a);
              t.indexOf(o) === 0 && localStorage.removeItem(t);
            }
          });
          return h(r, e), r;
        }
        function Sr(e, n) {
          var r = this;
          e = A(e);
          var o = r.ready().then(function() {
            var a = r._dbInfo, t = localStorage.getItem(a.keyPrefix + e);
            return t && (t = a.serializer.deserialize(t)), t;
          });
          return h(o, n), o;
        }
        function Ir(e, n) {
          var r = this, o = r.ready().then(function() {
            for (var a = r._dbInfo, t = a.keyPrefix, i = t.length, f = localStorage.length, u = 1, s = 0; s < f; s++) {
              var c = localStorage.key(s);
              if (c.indexOf(t) === 0) {
                var d = localStorage.getItem(c);
                if (d && (d = a.serializer.deserialize(d)), d = e(d, c.substring(i), u++), d !== void 0)
                  return d;
              }
            }
          });
          return h(o, n), o;
        }
        function Rr(e, n) {
          var r = this, o = r.ready().then(function() {
            var a = r._dbInfo, t;
            try {
              t = localStorage.key(e);
            } catch {
              t = null;
            }
            return t && (t = t.substring(a.keyPrefix.length)), t;
          });
          return h(o, n), o;
        }
        function Ar(e) {
          var n = this, r = n.ready().then(function() {
            for (var o = n._dbInfo, a = localStorage.length, t = [], i = 0; i < a; i++) {
              var f = localStorage.key(i);
              f.indexOf(o.keyPrefix) === 0 && t.push(f.substring(o.keyPrefix.length));
            }
            return t;
          });
          return h(r, e), r;
        }
        function Dr(e) {
          var n = this, r = n.keys().then(function(o) {
            return o.length;
          });
          return h(r, e), r;
        }
        function Nr(e, n) {
          var r = this;
          e = A(e);
          var o = r.ready().then(function() {
            var a = r._dbInfo;
            localStorage.removeItem(a.keyPrefix + e);
          });
          return h(o, n), o;
        }
        function Tr(e, n, r) {
          var o = this;
          e = A(e);
          var a = o.ready().then(function() {
            n === void 0 && (n = null);
            var t = n;
            return new v(function(i, f) {
              var u = o._dbInfo;
              u.serializer.serialize(n, function(s, c) {
                if (c)
                  f(c);
                else
                  try {
                    localStorage.setItem(u.keyPrefix + e, s), i(t);
                  } catch (d) {
                    (d.name === "QuotaExceededError" || d.name === "NS_ERROR_DOM_QUOTA_REACHED") && f(d), f(d);
                  }
              });
            });
          });
          return h(a, r), a;
        }
        function xr(e, n) {
          if (n = W.apply(this, arguments), e = typeof e != "function" && e || {}, !e.name) {
            var r = this.config();
            e.name = e.name || r.name, e.storeName = e.storeName || r.storeName;
          }
          var o = this, a;
          return e.name ? a = new v(function(t) {
            e.storeName ? t(Fe(e, o._defaultConfig)) : t(e.name + "/");
          }).then(function(t) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
              var f = localStorage.key(i);
              f.indexOf(t) === 0 && localStorage.removeItem(f);
            }
          }) : a = v.reject("Invalid arguments"), h(a, n), a;
        }
        var Br = {
          _driver: "localStorageWrapper",
          _initStorage: wr,
          _support: gr(),
          iterate: Ir,
          getItem: Sr,
          setItem: Tr,
          removeItem: Nr,
          clear: Er,
          length: Dr,
          key: Rr,
          keys: Ar,
          dropInstance: xr
        }, Cr = function(n, r) {
          return n === r || typeof n == "number" && typeof r == "number" && isNaN(n) && isNaN(r);
        }, Or = function(n, r) {
          for (var o = n.length, a = 0; a < o; ) {
            if (Cr(n[a], r))
              return !0;
            a++;
          }
          return !1;
        }, Me = Array.isArray || function(e) {
          return Object.prototype.toString.call(e) === "[object Array]";
        }, k = {}, Ue = {}, q = {
          INDEXEDDB: rr,
          WEBSQL: pr,
          LOCALSTORAGE: Br
        }, Lr = [q.INDEXEDDB._driver, q.WEBSQL._driver, q.LOCALSTORAGE._driver], te = ["dropInstance"], de = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(te), Pr = {
          description: "",
          driver: Lr.slice(),
          name: "localforage",
          // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
          // we can use without a prompt.
          size: 4980736,
          storeName: "keyvaluepairs",
          version: 1
        };
        function Fr(e, n) {
          e[n] = function() {
            var r = arguments;
            return e.ready().then(function() {
              return e[n].apply(e, r);
            });
          };
        }
        function he() {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            if (n)
              for (var r in n)
                n.hasOwnProperty(r) && (Me(n[r]) ? arguments[0][r] = n[r].slice() : arguments[0][r] = n[r]);
          }
          return arguments[0];
        }
        var Mr = function() {
          function e(n) {
            C(this, e);
            for (var r in q)
              if (q.hasOwnProperty(r)) {
                var o = q[r], a = o._driver;
                this[r] = a, k[a] || this.defineDriver(o);
              }
            this._defaultConfig = he({}, Pr), this._config = he({}, this._defaultConfig, n), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
            });
          }
          return e.prototype.config = function(r) {
            if ((typeof r > "u" ? "undefined" : E(r)) === "object") {
              if (this._ready)
                return new Error("Can't call config() after localforage has been used.");
              for (var o in r) {
                if (o === "storeName" && (r[o] = r[o].replace(/\\W/g, "_")), o === "version" && typeof r[o] != "number")
                  return new Error("Database version must be a number.");
                this._config[o] = r[o];
              }
              return "driver" in r && r.driver ? this.setDriver(this._config.driver) : !0;
            } else return typeof r == "string" ? this._config[r] : this._config;
          }, e.prototype.defineDriver = function(r, o, a) {
            var t = new v(function(i, f) {
              try {
                var u = r._driver, s = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!r._driver) {
                  f(s);
                  return;
                }
                for (var c = de.concat("_initStorage"), d = 0, m = c.length; d < m; d++) {
                  var g = c[d], _ = !Or(te, g);
                  if ((_ || r[g]) && typeof r[g] != "function") {
                    f(s);
                    return;
                  }
                }
                var R = function() {
                  for (var ee = function(zr) {
                    return function() {
                      var Wr = new Error("Method " + zr + " is not implemented by the current driver"), Ye = v.reject(Wr);
                      return h(Ye, arguments[arguments.length - 1]), Ye;
                    };
                  }, me = 0, Yr = te.length; me < Yr; me++) {
                    var ye = te[me];
                    r[ye] || (r[ye] = ee(ye));
                  }
                };
                R();
                var S = function(ee) {
                  k[u] && console.info("Redefining LocalForage driver: " + u), k[u] = r, Ue[u] = ee, i();
                };
                "_support" in r ? r._support && typeof r._support == "function" ? r._support().then(S, f) : S(!!r._support) : S(!0);
              } catch (U) {
                f(U);
              }
            });
            return I(t, o, a), t;
          }, e.prototype.driver = function() {
            return this._driver || null;
          }, e.prototype.getDriver = function(r, o, a) {
            var t = k[r] ? v.resolve(k[r]) : v.reject(new Error("Driver not found."));
            return I(t, o, a), t;
          }, e.prototype.getSerializer = function(r) {
            var o = v.resolve(ve);
            return I(o, r), o;
          }, e.prototype.ready = function(r) {
            var o = this, a = o._driverSet.then(function() {
              return o._ready === null && (o._ready = o._initDriver()), o._ready;
            });
            return I(a, r, r), a;
          }, e.prototype.setDriver = function(r, o, a) {
            var t = this;
            Me(r) || (r = [r]);
            var i = this._getSupportedDrivers(r);
            function f() {
              t._config.driver = t.driver();
            }
            function u(d) {
              return t._extend(d), f(), t._ready = t._initStorage(t._config), t._ready;
            }
            function s(d) {
              return function() {
                var m = 0;
                function g() {
                  for (; m < d.length; ) {
                    var _ = d[m];
                    return m++, t._dbInfo = null, t._ready = null, t.getDriver(_).then(u).catch(g);
                  }
                  f();
                  var R = new Error("No available storage method found.");
                  return t._driverSet = v.reject(R), t._driverSet;
                }
                return g();
              };
            }
            var c = this._driverSet !== null ? this._driverSet.catch(function() {
              return v.resolve();
            }) : v.resolve();
            return this._driverSet = c.then(function() {
              var d = i[0];
              return t._dbInfo = null, t._ready = null, t.getDriver(d).then(function(m) {
                t._driver = m._driver, f(), t._wrapLibraryMethodsWithReady(), t._initDriver = s(i);
              });
            }).catch(function() {
              f();
              var d = new Error("No available storage method found.");
              return t._driverSet = v.reject(d), t._driverSet;
            }), I(this._driverSet, o, a), this._driverSet;
          }, e.prototype.supports = function(r) {
            return !!Ue[r];
          }, e.prototype._extend = function(r) {
            he(this, r);
          }, e.prototype._getSupportedDrivers = function(r) {
            for (var o = [], a = 0, t = r.length; a < t; a++) {
              var i = r[a];
              this.supports(i) && o.push(i);
            }
            return o;
          }, e.prototype._wrapLibraryMethodsWithReady = function() {
            for (var r = 0, o = de.length; r < o; r++)
              Fr(this, de[r]);
          }, e.prototype.createInstance = function(r) {
            return new e(r);
          }, e;
        }(), Ur = new Mr();
        Y.exports = Ur;
      }, { 3: 3 }] }, {}, [4])(4);
    });
  }(pe)), pe.exports;
}
var Kr = Vr(), We = /* @__PURE__ */ $r(Kr);
const ge = We.createInstance({
  driver: We.INDEXEDDB,
  name: "EventProducerDB",
  version: 1
});
let $e = !1;
async function Qr() {
  return await ge.getItem(
    "events",
    (X) => {
      if (X)
        throw console.error("Error in restoring events:", X), X;
    }
  ) ?? void 0;
}
const Gr = async () => {
  $e || (await ge.ready(), $e = !0);
};
self.onmessage = async (L) => {
  const { data: X } = L;
  switch (X.action) {
    case "init": {
      await Gr();
      const P = await Qr();
      self.postMessage({ action: "initSuccess", events: P });
      break;
    }
    case "persist":
      ge.setItem("events", X.events).catch(console.error);
      break;
  }
};
`,Ey=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",bS],{type:"text/javascript;charset=utf-8"});function _M(t){let e;try{if(e=Ey&&(self.URL||self.webkitURL).createObjectURL(Ey),!e)throw"";const n=new Worker(e,{type:"module",name:t?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(bS),{type:"module",name:t?.name})}}if(!window.Worker)throw new Error("Web Workers are not supported in this browser");const Sh=new _M;let Ds=[];function Ms(){return Ds}function vM(){const t=Ms();return t.length>=10?t.slice(0,10):t}function ES(t){Ds=t}const bM=t=>new Promise((e,n)=>{Sh.addEventListener("message",i=>{const{data:r}=i;switch(r.action){case"initSuccess":{if(r.events){const a=t?.feralEventTypes??[],s=a.length>0?r.events.filter(l=>!a.includes(l.name)):r.events;ES(Ms().concat(s))}e();break}default:console.error("Unknown action:",i),n(new Error("Unknown action"))}}),Sh.postMessage({action:"init"})});function SS(){Sh.postMessage({action:"persist",events:Ms()})}function EM(t){Ds=Ds.filter(e=>!t.includes(e.id)),SS()}function SM(t){Ds.push(t),SS()}const wS=({appInfo:{appName:t,appVersion:e},authorize:n=!0,consentCategory:i,credentials:r,platformData:{browserName:a,browserVersion:s,osName:l},sentTimestamp:o,suppliedHeaders:c})=>{const h=r?.token,f=r?.clientId??"clientIDMissing!",u={"app-name":t,"app-version":e,"browser-name":a,"browser-version":s,"client-id":f,"consent-category":i,"os-name":l,"requested-sent-timestamp":o};return n&&h&&(u.authorization=h),c&&Object.entries(c).forEach(([p,y])=>{u[p]=y}),u};function TS(t){const e=new URLSearchParams;return t.forEach((n,i)=>{const r=`SendMessageBatchRequestEntry.${i+1}`,a=`${r}.MessageAttribute`;e.append(`${r}.Id`,n.id),e.append(`${r}.MessageBody`,typeof n.payload=="string"?n.payload:JSON.stringify(n.payload)),e.append(`${a}.1.Name`,"Name"),e.append(`${a}.1.Value.StringValue`,n.name),e.append(`${a}.1.Value.DataType`,"String"),n.headers&&(e.append(`${a}.2.Name`,"Headers"),e.append(`${a}.2.Value.DataType`,"String"),e.append(`${a}.2.Value.StringValue`,JSON.stringify(n.headers)))}),e}let lc=typeof globalThis?.crypto?.randomUUID=="function";const wM=()=>globalThis.crypto?.randomUUID();let CS=lc?wM:()=>{if(!lc)throw new Error("Uuid not initialized; run await init(); before using uuid.");return"UUID_NOT_INITIALIZED"};async function TM(){if(!lc){const{nanoid:t}=await Cy(async()=>{const{nanoid:e}=await import("./index.browser-CvC356_9-Chm4Pe-a.js");return{nanoid:e}},[]);CS=()=>t()}lc=!0}const AS=()=>CS();let pn={consentFilteredEvents:{},storingFailedEvents:{},validationFailedEvents:{}};const CM=()=>{pn.consentFilteredEvents={},pn.storingFailedEvents={},pn.validationFailedEvents={}},RS=({eventName:t,reason:e})=>{const n=pn[e][t]??0;pn[e][t]=n+1},AM=()=>Object.keys(pn.consentFilteredEvents).length+Object.keys(pn.storingFailedEvents).length+Object.keys(pn.validationFailedEvents).length>0,RM=async()=>{if(AM()){const t=ol();if(!t.credentialsProvider)throw new Error("CredentialsProvider not set");const e=new Headers({"Content-Type":"application/x-www-form-urlencoded"}),n={headers:wS({appInfo:t.appInfo,authorize:!1,consentCategory:"NECESSARY",credentials:await t.credentialsProvider?.getCredentials(),platformData:t.platform,sentTimestamp:Np.now()}),id:AS(),name:"tep-tl-monitoring",payload:JSON.stringify(pn)};globalThis.__tepTlDebug?.debug&&console.log("monitoringEvent sent:",n);const i=TS([n]);fetch(t.tlPublicConsumerUri,{body:i,headers:e,method:"post"}).catch(console.error),CM()}return Promise.resolve()},NS=async({config:t})=>{const e=vM();if(e.length===0)return Promise.resolve();const n=new Headers({"Content-Type":"application/x-www-form-urlencoded"});if(!t.credentialsProvider)return Promise.reject(new Os("CredentialsProvider not set"));const i=(await t.credentialsProvider?.getCredentials()).token;i&&n.set("Authorization",`Bearer ${i}`);const r=i?t.tlConsumerUri:t.tlPublicConsumerUri,a=TS(e),s=await fetch(r,{body:a,headers:n,method:"post"});if(s.ok){fM()&&by(!1);const l=await s.text(),o=new window.DOMParser().parseFromString(l,"text/xml"),c=[];if(o.querySelectorAll("SendMessageBatchResponse SendMessageBatchResult SendMessageBatchResultEntry Id").forEach(h=>{h.textContent&&c.push(h.textContent)}),o.querySelectorAll("SendMessageBatchResponse SendMessageBatchResult BatchResultErrorEntry").forEach(h=>{const f=h.querySelector("Id")?.textContent,u=h.querySelector("SenderFault")?.textContent==="true";if(f&&u){c.push(f);const p=e.find(y=>y.id===f);p&&RS({eventName:p.name,reason:"validationFailedEvents"})}}),EM(c),Ms().length>0)return NS({config:t})}else{const l=await s.text();console.error("Error sending event batch:",l),by(!0);const o=new window.DOMParser().parseFromString(l,"text/xml");if(o.querySelector("ErrorResponse Error Type")?.textContent==="Sender"&&o.querySelector("ErrorResponse Error Code")?.textContent==="AWS.SimpleQueueService.BatchEntryIdsNotDistinct"){const c=Ms(),h={},f=new Set(c.map(p=>(h[p.id]=p,p.id))),u=Array.from(f).map(p=>h[p]);ES(u)}}return Promise.resolve()},NM=30*1e3,xM=60*1e3;let Wu,$u;const OM=t=>{Wu&&clearInterval(Wu);const e=t?.eventBatchInterval??NM;Wu=setInterval(()=>{NS({config:ol()}).catch(console.error)},e),$u&&clearInterval($u);const n=t?.monitoringInterval??xM;$u=setInterval(()=>{RM().catch(console.error)},n)},IM=async t=>{pM(t),await Promise.all([Np.synchronize(),TM(),bM({feralEventTypes:t.feralEventTypes})]),OM(ol())},DM=new TextEncoder,MM=t=>t.isWellFormed?t.isWellFormed():!0,kM=t=>DM.encode(t).length<20480,LM=({payload:t,...e})=>{const n=JSON.stringify(e)+t;return kM(n)&&MM(n)},UM=({event:t,id:e,ts:n})=>{const{consentCategory:i,...r}=t;return JSON.stringify({...r,ts:n,uuid:e})},zM=async({config:t,credentialsProvider:e,event:n})=>{const i=AS(),r=Np.now();return{headers:wS({appInfo:t.appInfo,consentCategory:n.consentCategory,credentials:await e?.getCredentials(),platformData:t.platform,sentTimestamp:r,suppliedHeaders:n.headers}),id:i,name:n.name,payload:UM({event:n,id:i,ts:r})}},BM=t=>{if(!t.payload)throw new Error(`Event is missing payload!: ${JSON.stringify(t)}`);if(!t.name)throw new Error(`Event is missing name! ${JSON.stringify(t)}`);if(!t.consentCategory)throw new Error(`Event is missing consentCategory! ${JSON.stringify(t)}`)},jM=async({config:t,credentialsProvider:e,event:n})=>{if(t.strictMode&&BM(n),t.blockedConsentCategories[n.consentCategory])return RS({eventName:n.name,reason:"consentFilteredEvents"}),Promise.resolve();const i=await zM({config:t,credentialsProvider:e,event:n});return LM(i)?SM(i):Promise.resolve()},HM=t=>{const e=ol(),{credentialsProvider:n}=e;if(n)jM({config:e,credentialsProvider:n,event:t}).catch(console.error);else throw new Os("CredentialsProvider not set")},xS=t=>IM(t),Sy=Object.freeze(Object.defineProperty({__proto__:null,bus:dM,getConfig:ol,init:xS,sendEvent:HM,setConsentCategory:gM,setCredentialsProvider:mM},Symbol.toStringTag,{value:"Module"}));let wy=!1;const OS=async()=>{if(!wy)try{kS($r),console.log("Initializing EventProducer with:",Sy),await xS({appInfo:{appName:"Web-Hitster",appVersion:"1.0.0"},platform:{browserName:"Chrome",browserVersion:"110",osName:"Windows"},blockedConsentCategories:{NECESSARY:!1,PERFORMANCE:!0,TARGETING:!0},tlConsumerUri:"https://tl.tidal.com/v1/log/batch",tlPublicConsumerUri:"https://tl.tidal.com/v1/log/batch",credentialsProvider:$r,feralEventTypes:[]}),LS(Sy),await US({players:[{player:"browser"}]}),wy=!0,console.log("Tidal Player initialized")}catch(t){console.error("Error initializing Tidal Player:",t),(t.message?.includes("A0007")||t.errorCode==="A0007")&&(console.warn("Stale credentials detected (A0007). Clearing and reloading..."),localStorage.removeItem("tidal_credentials"),window.location.reload())}},IS=async()=>{try{await gS({clientId:"KGztvO6qzZCJMKoN",credentialsStorageKey:"tidal_credentials",scopes:[]}),console.log("Tidal Auth initialized"),await OS()}catch(t){console.error("Failed to initialize Tidal Auth",t)}},PM=async()=>{const t="https://strawbirdies.com/tidal-callback",{initializeLogin:e}=await Cy(async()=>{const{initializeLogin:i}=await Promise.resolve().then(()=>cM);return{initializeLogin:i}},void 0),n=await e({redirectUri:t});window.location.href=n},qM=async()=>{try{const t=await $r.getCredentials(),e=t?.token||t?.accessToken;if(!t||!e)throw new Error("No access token available");return{Authorization:`Bearer ${e}`,"Content-Type":"application/vnd.tidal.v1+json"}}catch(t){throw console.error("Error getting Tidal access token",t),t}},DS=async(t,e=["TRACKS"])=>{const n=await qM(),i=e.map(s=>s.toLowerCase()),r=[{url:"https://openapi.tidal.com/v2/searchResults",params:{query:t,type:i.join(","),limit:10,countryCode:"US"}},{url:"https://openapi.tidal.com/search",params:{query:t,type:i.join(","),limit:10,countryCode:"US"}},{url:"https://api.tidal.com/v1/search",params:{query:t,type:i.join(","),limit:10,countryCode:"US"}}];let a;for(const s of r)try{const l=new URL(s.url);Object.entries(s.params).forEach(([c,h])=>l.searchParams.append(c,h)),console.log(`Trying Tidal Search: ${s.url}`);const o=await fetch(l.toString(),{method:"GET",headers:n});if(o.ok)return console.log(`Success with endpoint: ${s.url}`),await o.json();console.warn(`Failed ${s.url}: ${o.status}`)}catch(l){console.error(`Error on ${s.url}`,l),a=l}throw new Error(`All Tidal Search endpoints failed. Last error: ${a?.message||"Unknown"}`)},VM=async t=>{try{await OS(),await zS({productId:t,productType:"track",sourceId:"web-hitster",sourceType:"search"},0,!1),await BS(),console.log(`Playing track ${t}`)}catch(e){throw console.error("Tidal Player Error:",e),e}};function GM(){const t=Qs(),[e,n]=E.useState(""),[i,r]=E.useState(""),[a,s]=E.useState(!1),[l,o]=E.useState(!1),[c,h]=E.useState(null),[f,u]=E.useState(!1);E.useEffect(()=>{(async()=>{try{const S=await $r.getCredentials();S&&(S.token||S.accessToken)&&u(!0)}catch{}})()},[]);const p=async()=>{o(!0),h(null);try{const b=await bh.signIn(),S=await tc.createRoom(b);t(`/lobby/${S}`)}catch(b){console.error(b),h("Failed to create room. check console.")}finally{o(!1)}},y=async b=>{if(b.preventDefault(),!(!e||!i)){o(!0),h(null);try{const S=await bh.signIn();await tc.joinRoom(e.toUpperCase(),S,i),t(`/lobby/${e.toUpperCase()}`)}catch(S){console.error(S),h(S.message||"Failed to join room.")}finally{o(!1)}}};return _.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4 text-white",children:_.jsxs("div",{className:"max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20",children:[_.jsxs("div",{className:"flex flex-col items-center mb-8",children:[_.jsx("div",{className:"bg-gradient-to-tr from-pink-500 to-orange-400 p-4 rounded-full mb-4 shadow-lg shadow-pink-500/20",children:_.jsx(M2,{className:"w-12 h-12 text-white"})}),_.jsx("h1",{className:"text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-orange-200",children:"Web-Hitster"}),_.jsx("p",{className:"text-white/60 mt-2 text-center",children:"The Timeline Music Game"})]}),c&&_.jsx("div",{className:"bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg mb-6 text-sm text-center",children:c}),_.jsx("div",{className:"mb-8",children:f?_.jsxs("button",{disabled:!0,className:"w-full bg-emerald-500/20 text-emerald-300 font-bold py-3 rounded-xl border border-emerald-500/50 flex items-center justify-center gap-3 cursor-default",children:[_.jsx(w2,{className:"w-5 h-5"}),"Tidal Connected"]}):_.jsxs(_.Fragment,{children:[_.jsxs("button",{onClick:PM,className:"w-full bg-black text-white font-bold py-3 rounded-xl border border-white/20 hover:bg-zinc-900 transition-all flex items-center justify-center gap-3",children:[_.jsx("img",{src:"https://tidal.com/favicon.ico",alt:"Tidal",className:"w-5 h-5"}),"Connect Tidal Account"]}),_.jsx("p",{className:"text-xs text-white/40 text-center mt-2",children:"Required to play music snippets"})]})}),a?_.jsxs("form",{onSubmit:y,className:"space-y-4 animate-in fade-in slide-in-from-bottom-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-white/70 mb-1",children:"Room Code"}),_.jsx("input",{type:"text",placeholder:"ABCD",maxLength:4,value:e,onChange:b=>n(b.target.value.toUpperCase()),className:"w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-2xl font-mono text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-white/20 text-white uppercase"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-white/70 mb-1",children:"Your Name"}),_.jsx("input",{type:"text",placeholder:"Enter your name",value:i,onChange:b=>r(b.target.value),className:"w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-white/20 text-white"})]}),_.jsxs("div",{className:"flex gap-3 mt-6",children:[_.jsx("button",{type:"button",onClick:()=>s(!1),className:"flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-xl hover:bg-white/10 transition-colors",children:"Back"}),_.jsx("button",{type:"submit",disabled:l||!e||!i,className:"flex-[2] bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25 disabled:opacity-50 disabled:cursor-not-allowed",children:l?"Joining...":"Join Game"})]})]}):_.jsxs("div",{className:"space-y-4",children:[_.jsx("button",{onClick:p,disabled:l,className:"w-full bg-white text-purple-900 font-bold py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg",children:l?"Creating...":_.jsxs(_.Fragment,{children:[_.jsx(wp,{className:"w-5 h-5 fill-current"}),"Start New Game"]})}),_.jsxs("button",{onClick:()=>s(!0),className:"w-full bg-white/5 border border-white/10 text-white font-medium py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3",children:[_.jsx(aS,{className:"w-5 h-5"}),"Join Existing Game"]})]})]})})}function FM(){const{roomId:t}=qb(),e=Qs(),[n,i]=E.useState(null),[r,a]=E.useState(null),[s,l]=E.useState(!0);E.useEffect(()=>{const u=bh.getCurrentUser();if(!u){e("/");return}a(u);const p=tc.subscribeToRoom(t,y=>{i(y),l(!1),y.status==="PLAYING"&&e(`/game/${t}`)});return()=>p()},[t,e]);const o=async()=>{try{await tc.startGame(t)}catch(u){console.error("Failed to start game:",u)}},c=()=>{navigator.clipboard.writeText(t)};if(s)return _.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center text-white",children:_.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-white"})});if(!n)return _.jsx("div",{className:"text-white text-center pt-20",children:"Room not found"});const h=Object.values(n.players||{}),f=n.hostId===r?.uid;return _.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 font-sans text-white",children:_.jsxs("div",{className:"max-w-2xl mx-auto pt-10",children:[_.jsxs("div",{className:"text-center mb-12",children:[_.jsx("p",{className:"text-white/60 uppercase tracking-widest text-sm mb-2",children:"Room Code"}),_.jsxs("div",{onClick:c,className:"inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-8 py-4 cursor-pointer hover:bg-white/20 transition-colors",children:[_.jsx("span",{className:"text-6xl font-mono font-bold tracking-wider",children:t}),_.jsx(x2,{className:"w-6 h-6 text-white/50"})]}),_.jsx("p",{className:"text-white/40 text-xs mt-2",children:"Click to copy code"})]}),_.jsxs("div",{className:"bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-8",children:[_.jsxs("div",{className:"flex items-center justify-between mb-6",children:[_.jsxs("h2",{className:"text-2xl font-bold flex items-center gap-3",children:[_.jsx(aS,{className:"w-6 h-6 text-pink-400"}),"Players (",h.length,")"]}),f&&_.jsx("span",{className:"px-3 py-1 bg-pink-500/20 text-pink-300 text-xs font-bold rounded-full uppercase tracking-wider",children:"You are Host"})]}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:h.map(u=>_.jsxs("div",{className:"flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/5",children:[_.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                  ${u.isHost?"bg-gradient-to-tr from-pink-500 to-orange-400":"bg-slate-700"}
                `,children:u.name.charAt(0).toUpperCase()}),_.jsxs("div",{children:[_.jsx("div",{className:"font-bold",children:u.name}),u.isHost&&_.jsx("div",{className:"text-xs text-white/50",children:"Host"})]})]},u.id))})]}),f?_.jsxs("button",{onClick:o,className:"w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-5 rounded-2xl hover:opacity-90 transition-all transform hover:scale-[1.01] shadow-xl shadow-pink-500/20 flex items-center justify-center gap-3 text-xl",children:[_.jsx(wp,{className:"fill-current w-6 h-6"}),"Start Game"]}):_.jsx("div",{className:"text-center text-white/50 animate-pulse",children:"Waiting for host to start..."})]})})}const YM=[{id:"1",name:"Billie Jean",artist:"Michael Jackson",year:1982,image:"https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",tidalUrl:"https://listen.tidal.com/track/10237021"},{id:"2",name:"Smells Like Teen Spirit",artist:"Nirvana",year:1991,image:"https://upload.wikimedia.org/wikipedia/en/3/32/Nirvana-Smells_Like_Teen_Spirit.jpg",tidalUrl:"https://listen.tidal.com/track/68644558"},{id:"3",name:"Hey Ya!",artist:"OutKast",year:2003,image:"https://upload.wikimedia.org/wikipedia/en/1/1e/OutKast_-_Hey_Ya%21_cover.jpg",tidalUrl:"https://listen.tidal.com/track/34217316"},{id:"4",name:"Bohemian Rhapsody",artist:"Queen",year:1975,image:"https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png",tidalUrl:"https://listen.tidal.com/track/77626961"},{id:"5",name:"Uptown Funk",artist:"Mark Ronson ft. Bruno Mars",year:2014,image:"https://upload.wikimedia.org/wikipedia/en/a/ad/Mark_Ronson_-_Uptown_Funk_%28feat._Bruno_Mars%29_%28Official_Single_Cover%29.png",tidalUrl:"https://listen.tidal.com/track/39327917"},{id:"6",name:"Blinding Lights",artist:"The Weeknd",year:2019,image:"https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",tidalUrl:"https://listen.tidal.com/track/134988755"},{id:"7",name:"Rolling in the Deep",artist:"Adele",year:2010,image:"https://upload.wikimedia.org/wikipedia/en/7/74/Adele_-_Rolling_in_the_Deep.png",tidalUrl:"https://listen.tidal.com/track/68625296"},{id:"8",name:"I Want to Hold Your Hand",artist:"The Beatles",year:1963,image:"https://upload.wikimedia.org/wikipedia/en/b/bf/I_want_to_hold_your_hand_single.png",tidalUrl:"https://listen.tidal.com/track/78642289"},{id:"9",name:"Like a Prayer",artist:"Madonna",year:1989,image:"https://upload.wikimedia.org/wikipedia/en/2/27/Like_a_prayer_single.jpg",tidalUrl:"https://listen.tidal.com/track/54434"},{id:"10",name:"Wannabe",artist:"Spice Girls",year:1996,image:"https://upload.wikimedia.org/wikipedia/en/a/a5/Spice_Girls_-_Wannabe_cover.png",tidalUrl:"https://listen.tidal.com/track/2501007"}],KM={getPlaylistTracks:async()=>(await new Promise(t=>setTimeout(t,800)),[...YM].sort(()=>Math.random()-.5)),playTrack:async t=>(console.log(`Playing mock track ${t}`),!0)},QM=()=>{const{roomId:t}=qb(),e=Qs(),[n,i]=E.useState([]),[r,a]=E.useState([]),[s,l]=E.useState(null),[o,c]=E.useState("loading"),[h,f]=E.useState(0),[u,p]=E.useState(null);E.useEffect(()=>{(async()=>{const g=[...await KM.getPlaylistTracks()].sort(()=>Math.random()-.5),v=g.pop(),C=g.pop();a([v]),l(C),i(g),c("playing")})()},[]);const y=async m=>{try{let d;if(m.tidalUrl){const g=m.tidalUrl.match(/track\/(\d+)/);g&&(d=g[1])}if(!d){const g=`${m.name} ${m.artist}`;console.log("Searching Tidal for:",g);const v=await DS(g),C=v.tracks?.items?.[0]||v.items?.[0]||v.tracks?.[0];C&&(d=C.id)}d?(console.log("Refined Playback: Playing Track ID:",d),await VM(d)):(console.warn("No Tidal track found"),alert("Could not find this track on Tidal."))}catch(d){console.error("Playback error:",d),alert("Playback failed. Please ensure you are logged into Tidal.")}},b=m=>{if(o!=="playing")return;const d=m>0?r[m-1]:null,g=m<r.length?r[m]:null,v=d?d.year:-1/0,C=g?g.year:1/0;if(s.year>=v&&s.year<=C){f(N=>N+1),p({type:"correct",index:m});const A=[...r];A.splice(m,0,s),setTimeout(()=>{a(A),p(null),S()},1e3)}else{let A=0;for(let N=0;N<=r.length;N++){const D=N>0?r[N-1].year:-1/0,L=N<r.length?r[N].year:1/0;if(s.year>=D&&s.year<=L){A=N;break}}p({type:"wrong",correctIndex:A}),c("gameEnd")}},S=()=>{if(n.length===0){c("gameEnd");return}const m=n.pop();i([...n]),l(m),c("playing")};return o==="loading"?_.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center text-white",children:"Loading..."}):o==="gameEnd"?_.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center text-white p-4",children:_.jsxs("div",{className:"bg-slate-900 p-8 rounded-2xl max-w-md w-full text-center border border-slate-800",children:[_.jsx(U2,{className:`w-16 h-16 mx-auto mb-6 ${h>5?"text-yellow-500":"text-slate-500"}`}),_.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Game Over!"}),_.jsx("p",{className:"text-slate-400 mb-8",children:u?.type==="wrong"?"Wrong placement!":"You cleared the deck!"}),u?.type==="wrong"&&s&&_.jsxs("div",{className:"mb-6 bg-red-500/10 border border-red-500/50 p-4 rounded-xl",children:[_.jsx("p",{className:"text-sm text-red-200 mb-2",children:"The song was from"}),_.jsx("p",{className:"text-2xl font-bold text-white",children:s.year}),_.jsxs("p",{className:"text-sm opacity-75",children:[s.name," - ",s.artist]})]}),_.jsxs("div",{className:"bg-slate-800 rounded-xl p-6 mb-8",children:[_.jsx("span",{className:"text-slate-400 text-sm uppercase tracking-wider",children:"Top Score"}),_.jsx("div",{className:"text-5xl font-bold text-purple-400 mt-2",children:h})]}),_.jsx("button",{onClick:()=>window.location.reload(),className:"w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl mb-4",children:"Play Again"}),_.jsxs("button",{onClick:()=>e("/"),className:"w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2",children:[_.jsx(I2,{className:"w-5 h-5"})," Home"]})]})}):_.jsxs("div",{className:"min-h-screen bg-slate-950 text-white p-4 flex flex-col items-center overflow-x-hidden",children:[_.jsxs("div",{className:"w-full max-w-5xl flex justify-between items-center mb-8 pt-4",children:[_.jsxs("div",{className:"text-purple-400 font-bold text-xl",children:["Score: ",h]}),_.jsxs("div",{className:"text-slate-400 text-sm",children:["Deck: ",n.length]})]}),_.jsx("div",{className:`mb-12 transition-all duration-500 ${u?"opacity-0 translate-y-10":"opacity-100"}`,children:_.jsxs("div",{className:"bg-slate-900 border-2 border-purple-500 p-8 rounded-xl w-64 shadow-2xl shadow-purple-900/20 text-center flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 -z-10"}),_.jsx("div",{className:"w-32 h-32 bg-black rounded-full shadow-xl flex items-center justify-center animate-spin-slow mb-6 border-4 border-slate-800",children:_.jsx("div",{className:"w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center",children:_.jsx("div",{className:"w-3 h-3 bg-black rounded-full"})})}),_.jsx("h2",{className:"font-bold text-xl mb-4 text-purple-200",children:"Mystery Track"}),_.jsxs("button",{onClick:()=>y(s),className:"bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full flex items-center gap-2 transform transition-all hover:scale-105 shadow-lg shadow-green-500/20",children:[_.jsx(wp,{className:"fill-current w-5 h-5"})," Play"]}),_.jsx("p",{className:"text-xs text-slate-500 mt-6",children:"Listen to guess the year!"})]})}),_.jsx("div",{className:"w-full max-w-6xl overflow-x-auto pb-12 flex items-center justify-center min-h-[300px] px-8",children:_.jsxs("div",{className:"flex items-center gap-2",children:[r.map((m,d)=>_.jsxs(Nh.Fragment,{children:[_.jsx(Ty,{index:d,onClick:()=>b(d),isActive:!u,isCurrentFeedback:u?.index===d||u?.correctIndex===d,feedbackType:u?.index===d?u.type:u?.correctIndex===d?"hint":null}),_.jsxs("div",{className:"relative group",children:[_.jsxs("div",{className:"bg-slate-800 p-3 rounded-lg w-40 text-center border border-slate-700 transition-all hover:-translate-y-2",children:[_.jsx("img",{src:m.image,alt:m.name,className:"w-full h-32 object-cover rounded-md mb-2 opacity-75 group-hover:opacity-100"}),_.jsx("h3",{className:"font-bold text-xs truncate",children:m.name}),_.jsx("p",{className:"text-slate-400 text-[10px] truncate mb-1",children:m.artist}),_.jsx("div",{className:"font-bold text-xl text-yellow-400",children:m.year})]}),_.jsx("div",{className:"absolute top-1/2 -right-4 w-4 h-[2px] bg-slate-700 -z-10"})]})]},m.id)),_.jsx(Ty,{index:r.length,onClick:()=>b(r.length),isActive:!u,isCurrentFeedback:u?.index===r.length||u?.correctIndex===r.length,feedbackType:u?.index===r.length?u.type:u?.correctIndex===r.length?"hint":null})]})}),_.jsx("div",{className:"text-center text-slate-500 text-sm mt-auto pb-4",children:"Scroll to view full timeline • Click + to place the card"})]})},Ty=({index:t,onClick:e,isActive:n,isCurrentFeedback:i,feedbackType:r})=>{let a="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mx-2 ";if(i){if(r==="correct")return _.jsx("div",{className:a+"bg-green-500 scale-125 shadow-lg shadow-green-500/50",children:_.jsx(C2,{className:"text-white w-6 h-6"})});if(r==="wrong")return _.jsx("div",{className:a+"bg-red-500 scale-125 shadow-lg shadow-red-500/50",children:_.jsx(R2,{className:"text-white w-6 h-6"})});if(r==="hint")return _.jsx("div",{className:a+"bg-yellow-500/20 border-2 border-yellow-500 animate-pulse",children:_.jsx("div",{className:"text-yellow-500 font-bold text-xs text-center",children:"Here"})})}return n?_.jsx("button",{onClick:e,className:`${a} bg-slate-800/50 hover:bg-purple-600 hover:scale-110 border-2 border-dashed border-slate-600 hover:border-purple-400 group`,children:_.jsx("span",{className:"text-slate-500 group-hover:text-white font-bold text-xl",children:"+"})}):_.jsx("div",{className:"w-4 mx-1"})},XM=()=>{const t=Qs();return console.log("TidalCallback Component MOUNTED"),E.useEffect(()=>{(async()=>{try{const n=await _S(window.location.search);console.log("Tidal login successful. Credentials received:",n),t("/")}catch(n){console.error("Tidal login failed",n),t("/")}})()},[t]),_.jsx("div",{className:"flex items-center justify-center min-h-screen bg-black text-white",children:_.jsxs("div",{className:"text-center",children:[_.jsx("h2",{className:"text-xl font-bold mb-4",children:"Finalizing login..."}),_.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto"})]})})},WM=()=>{const[t,e]=E.useState(""),[n,i]=E.useState(null),[r,a]=E.useState(null),[s,l]=E.useState(null);E.useEffect(()=>{IS(),(async()=>{try{const u=await $r.getCredentials();u&&u.accessToken&&l({loggedIn:!0})}catch{}})()},[]);const o=async()=>{try{const f=await yS({redirectUri:"https://strawbirdies.com/tidal-callback"});f&&(window.location.href=f)}catch(f){console.error("Login initialization failed",f),a("Failed to start login: "+f.message)}},c=async f=>{f.preventDefault(),a(null);try{const u=await DS(t);i(u)}catch(u){a(u.message)}},h=async()=>{await ac(),l(null)};return _.jsxs("div",{className:"min-h-screen bg-neutral-900 text-white p-8",children:[_.jsx("h1",{className:"text-3xl font-bold mb-8 text-cyan-400",children:"Tidal API Integration Demo"}),s?_.jsxs("div",{children:[_.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[_.jsx("span",{className:"text-green-400 text-sm",children:"✓ Authenticated"}),_.jsx("button",{onClick:h,className:"text-xs text-gray-500 hover:text-white",children:"Logout"})]}),_.jsxs("form",{onSubmit:c,className:"mb-8 flex gap-4",children:[_.jsx("input",{type:"text",value:t,onChange:f=>e(f.target.value),placeholder:"Search for an artist or track...",className:"flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 transition-colors"}),_.jsx("button",{type:"submit",className:"bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-lg transition-colors",children:"Search"})]}),r&&_.jsx("div",{className:"bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg mb-8",children:r}),n&&_.jsxs("div",{className:"space-y-8",children:[n.tracks&&_.jsxs("section",{children:[_.jsx("h2",{className:"text-xl font-bold mb-4 text-gray-300",children:"Tracks"}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:n.tracks.items.slice(0,6).map(f=>_.jsxs("div",{className:"bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition-colors",children:[_.jsx("div",{className:"font-bold truncate",children:f.title}),_.jsx("div",{className:"text-sm text-gray-400 truncate",children:f.artist.name})]},f.id))})]}),_.jsxs("div",{className:"text-xs text-gray-600 mt-8",children:["Raw Output:",_.jsx("pre",{className:"mt-2 p-4 bg-black rounded overflow-auto max-h-60",children:JSON.stringify(n,null,2)})]})]})]}):_.jsxs("div",{className:"text-center py-20",children:[_.jsx("p",{className:"mb-4 text-gray-400",children:"Please authenticate to continue"}),_.jsx("button",{onClick:o,className:"bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-full transition-colors",children:"Log in with Tidal"})]})]})};function $M(){return _.jsxs(_.Fragment,{children:[_.jsx(ZM,{}),_.jsxs(M1,{children:[_.jsx(Ri,{path:"/",element:_.jsx(GM,{})}),_.jsx(Ri,{path:"/lobby/:roomId",element:_.jsx(FM,{})}),_.jsx(Ri,{path:"/game/:roomId",element:_.jsx(QM,{})}),_.jsx(Ri,{path:"/tidal-callback",element:_.jsx(XM,{})}),_.jsx(Ri,{path:"/tidal-demo",element:_.jsx(WM,{})}),_.jsx(Ri,{path:"*",element:_.jsxs("div",{className:"text-white p-10",children:["404: Route Not Found: ",window.location.pathname]})})]})]})}function ZM(){const t=vi();return Nh.useEffect(()=>{console.log("Current Route Path:",t.pathname),console.log("Full URL:",window.location.href)},[t]),null}IS().then(()=>{UC.createRoot(document.getElementById("root")).render(_.jsx(Nh.StrictMode,{children:_.jsx(iA,{children:_.jsx($M,{})})}))});
