import{h as lS,g as oS,I as cS,_ as uS,G as fS,f as hS}from"./index-BN722jHt-dG3f1Axa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function cy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var uy={exports:{}},Jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dS=Symbol.for("react.transitional.element"),pS=Symbol.for("react.fragment");function fy(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var r in e)r!=="key"&&(n[r]=e[r])}else n=e;return e=n.ref,{$$typeof:dS,type:t,key:i,ref:e!==void 0?e:null,props:n}}Jo.Fragment=pS;Jo.jsx=fy;Jo.jsxs=fy;uy.exports=Jo;var _=uy.exports,hy={exports:{}},U={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=Symbol.for("react.transitional.element"),mS=Symbol.for("react.portal"),gS=Symbol.for("react.fragment"),yS=Symbol.for("react.strict_mode"),_S=Symbol.for("react.profiler"),vS=Symbol.for("react.consumer"),bS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),SS=Symbol.for("react.suspense"),wS=Symbol.for("react.memo"),dy=Symbol.for("react.lazy"),TS=Symbol.for("react.activity"),gp=Symbol.iterator;function CS(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var py={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},my=Object.assign,gy={};function Wr(t,e,n){this.props=t,this.context=e,this.refs=gy,this.updater=n||py}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yy(){}yy.prototype=Wr.prototype;function fh(t,e,n){this.props=t,this.context=e,this.refs=gy,this.updater=n||py}var hh=fh.prototype=new yy;hh.constructor=fh;my(hh,Wr.prototype);hh.isPureReactComponent=!0;var yp=Array.isArray;function Pu(){}var oe={H:null,A:null,T:null,S:null},_y=Object.prototype.hasOwnProperty;function dh(t,e,n){var i=n.ref;return{$$typeof:uh,type:t,key:e,ref:i!==void 0?i:null,props:n}}function AS(t,e){return dh(t.type,e,t.props)}function ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===uh}function RS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _p=/\/+/g;function jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RS(""+t.key):e.toString(36)}function NS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Pu,Pu):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function nr(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case uh:case mS:s=!0;break;case dy:return s=t._init,nr(s(t._payload),e,n,i,r)}}if(s)return r=r(t),s=i===""?"."+jc(t,0):i,yp(r)?(n="",s!=null&&(n=s.replace(_p,"$&/")+"/"),nr(r,e,n,"",function(c){return c})):r!=null&&(ph(r)&&(r=AS(r,n+(r.key==null||t&&t.key===r.key?"":(""+r.key).replace(_p,"$&/")+"/")+s)),e.push(r)),1;s=0;var l=i===""?".":i+":";if(yp(t))for(var o=0;o<t.length;o++)i=t[o],a=l+jc(i,o),s+=nr(i,e,n,a,r);else if(o=CS(t),typeof o=="function")for(t=o.call(t),o=0;!(i=t.next()).done;)i=i.value,a=l+jc(i,o++),s+=nr(i,e,n,a,r);else if(a==="object"){if(typeof t.then=="function")return nr(NS(t),e,n,i,r);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function al(t,e,n){if(t==null)return t;var i=[],r=0;return nr(t,i,"","",function(a){return e.call(n,a,r++)}),i}function xS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vp=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},OS={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Activity=TS;U.Children=OS;U.Component=Wr;U.Fragment=gS;U.Profiler=_S;U.PureComponent=fh;U.StrictMode=yS;U.Suspense=SS;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe;U.__COMPILER_RUNTIME={__proto__:null,c:function(t){return oe.H.useMemoCache(t)}};U.cache=function(t){return function(){return t.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=my({},t.props),r=t.key;if(e!=null)for(a in e.key!==void 0&&(r=""+e.key),e)!_y.call(e,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&e.ref===void 0||(i[a]=e[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];i.children=s}return dh(t.type,r,i)};U.createContext=function(t){return t={$$typeof:bS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:vS,_context:t},t};U.createElement=function(t,e,n){var i,r={},a=null;if(e!=null)for(i in e.key!==void 0&&(a=""+e.key),e)_y.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),o=0;o<s;o++)l[o]=arguments[o+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return dh(t,a,r)};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:ES,render:t}};U.isValidElement=ph;U.lazy=function(t){return{$$typeof:dy,_payload:{_status:-1,_result:t},_init:xS}};U.memo=function(t,e){return{$$typeof:wS,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=oe.T,n={};oe.T=n;try{var i=t(),r=oe.S;r!==null&&r(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Pu,vp)}catch(a){vp(a)}finally{e!==null&&n.types!==null&&(e.types=n.types),oe.T=e}};U.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()};U.use=function(t){return oe.H.use(t)};U.useActionState=function(t,e,n){return oe.H.useActionState(t,e,n)};U.useCallback=function(t,e){return oe.H.useCallback(t,e)};U.useContext=function(t){return oe.H.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t,e){return oe.H.useDeferredValue(t,e)};U.useEffect=function(t,e){return oe.H.useEffect(t,e)};U.useEffectEvent=function(t){return oe.H.useEffectEvent(t)};U.useId=function(){return oe.H.useId()};U.useImperativeHandle=function(t,e,n){return oe.H.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return oe.H.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return oe.H.useLayoutEffect(t,e)};U.useMemo=function(t,e){return oe.H.useMemo(t,e)};U.useOptimistic=function(t,e){return oe.H.useOptimistic(t,e)};U.useReducer=function(t,e,n){return oe.H.useReducer(t,e,n)};U.useRef=function(t){return oe.H.useRef(t)};U.useState=function(t){return oe.H.useState(t)};U.useSyncExternalStore=function(t,e,n){return oe.H.useSyncExternalStore(t,e,n)};U.useTransition=function(){return oe.H.useTransition()};U.version="19.2.3";hy.exports=U;var E=hy.exports;const mh=cy(E);var vy={exports:{}},ec={},by={exports:{}},Ey={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,P){var B=R.length;R.push(P);e:for(;0<B;){var ge=B-1>>>1,Ne=R[ge];if(0<r(Ne,P))R[ge]=P,R[B]=Ne,B=ge;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var P=R[0],B=R.pop();if(B!==P){R[0]=B;e:for(var ge=0,Ne=R.length,nl=Ne>>>1;ge<nl;){var il=2*(ge+1)-1,Bc=R[il],bi=il+1,rl=R[bi];if(0>r(Bc,B))bi<Ne&&0>r(rl,Bc)?(R[ge]=rl,R[bi]=B,ge=bi):(R[ge]=Bc,R[il]=B,ge=il);else if(bi<Ne&&0>r(rl,B))R[ge]=rl,R[bi]=B,ge=bi;else break e}}return P}function r(R,P){var B=R.sortIndex-P.sortIndex;return B!==0?B:R.id-P.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var o=[],c=[],h=1,f=null,u=3,p=!1,y=!1,b=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function v(R){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=R)i(c),P.sortIndex=P.expirationTime,e(o,P);else break;P=n(c)}}function C(R){if(b=!1,v(R),!y)if(n(o)!==null)y=!0,I||(I=!0,Rn());else{var P=n(c);P!==null&&zc(C,P.startTime-R)}}var I=!1,A=-1,N=5,D=-1;function L(){return S?!0:!(t.unstable_now()-D<N)}function dt(){if(S=!1,I){var R=t.unstable_now();D=R;var P=!0;try{e:{y=!1,b&&(b=!1,d(A),A=-1),p=!0;var B=u;try{t:{for(v(R),f=n(o);f!==null&&!(f.expirationTime>R&&L());){var ge=f.callback;if(typeof ge=="function"){f.callback=null,u=f.priorityLevel;var Ne=ge(f.expirationTime<=R);if(R=t.unstable_now(),typeof Ne=="function"){f.callback=Ne,v(R),P=!0;break t}f===n(o)&&i(o),v(R)}else i(o);f=n(o)}if(f!==null)P=!0;else{var nl=n(c);nl!==null&&zc(C,nl.startTime-R),P=!1}}break e}finally{f=null,u=B,p=!1}P=void 0}}finally{P?Rn():I=!1}}}var Rn;if(typeof g=="function")Rn=function(){g(dt)};else if(typeof MessageChannel<"u"){var mp=new MessageChannel,sS=mp.port2;mp.port1.onmessage=dt,Rn=function(){sS.postMessage(null)}}else Rn=function(){m(dt,0)};function zc(R,P){A=m(function(){R(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(R){switch(u){case 1:case 2:case 3:var P=3;break;default:P=u}var B=u;u=P;try{return R()}finally{u=B}},t.unstable_requestPaint=function(){S=!0},t.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=u;u=R;try{return P()}finally{u=B}},t.unstable_scheduleCallback=function(R,P,B){var ge=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ge+B:ge):B=ge,R){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=B+Ne,R={id:h++,callback:P,priorityLevel:R,startTime:B,expirationTime:Ne,sortIndex:-1},B>ge?(R.sortIndex=B,e(c,R),n(o)===null&&R===n(c)&&(b?(d(A),A=-1):b=!0,zc(C,B-ge))):(R.sortIndex=Ne,e(o,R),y||p||(y=!0,I||(I=!0,Rn()))),R},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(R){var P=u;return function(){var B=u;u=P;try{return R.apply(this,arguments)}finally{u=B}}}})(Ey);by.exports=Ey;var IS=by.exports,Sy={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DS=E;function wy(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Nn(){}var Ve={d:{f:Nn,r:function(){throw Error(wy(522))},D:Nn,C:Nn,L:Nn,m:Nn,X:Nn,S:Nn,M:Nn},p:0,findDOMNode:null},MS=Symbol.for("react.portal");function kS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:MS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var Ma=DS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function tc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ve;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(wy(299));return kS(t,e,null,n)};Ke.flushSync=function(t){var e=Ma.T,n=Ve.p;try{if(Ma.T=null,Ve.p=2,t)return t()}finally{Ma.T=e,Ve.p=n,Ve.d.f()}};Ke.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ve.d.C(t,e))};Ke.prefetchDNS=function(t){typeof t=="string"&&Ve.d.D(t)};Ke.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=tc(n,e.crossOrigin),r=typeof e.integrity=="string"?e.integrity:void 0,a=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Ve.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:a}):n==="script"&&Ve.d.X(t,{crossOrigin:i,integrity:r,fetchPriority:a,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ke.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=tc(e.as,e.crossOrigin);Ve.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Ve.d.M(t)};Ke.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=tc(n,e.crossOrigin);Ve.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ke.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=tc(e.as,e.crossOrigin);Ve.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Ve.d.m(t)};Ke.requestFormReset=function(t){Ve.d.r(t)};Ke.unstable_batchedUpdates=function(t,e){return t(e)};Ke.useFormState=function(t,e,n){return Ma.H.useFormState(t,e,n)};Ke.useFormStatus=function(){return Ma.H.useHostTransitionStatus()};Ke.version="19.2.3";function Ty(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ty)}catch(t){console.error(t)}}Ty(),Sy.exports=Ke;var LS=Sy.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=IS,Cy=E,US=LS;function w(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ay(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ry(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ny(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bp(t){if(Rs(t)!==t)throw Error(w(188))}function zS(t){var e=t.alternate;if(!e){if(e=Rs(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return bp(r),t;if(a===i)return bp(r),e;a=a.sibling}throw Error(w(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,l=r.child;l;){if(l===n){s=!0,n=r,i=a;break}if(l===i){s=!0,i=r,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,i=r;break}if(l===i){s=!0,i=a,n=r;break}l=l.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==i)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function xy(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=xy(t),e!==null)return e;t=t.sibling}return null}var ce=Object.assign,BS=Symbol.for("react.element"),sl=Symbol.for("react.transitional.element"),Na=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Oy=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),Iy=Symbol.for("react.consumer"),nn=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),yh=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),Fu=Symbol.for("react.activity"),jS=Symbol.for("react.memo_cache_sentinel"),Ep=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var HS=Symbol.for("react.client.reference");function Yu(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===HS?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ar:return"Fragment";case qu:return"Profiler";case Oy:return"StrictMode";case Vu:return"Suspense";case Gu:return"SuspenseList";case Fu:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Na:return"Portal";case nn:return t.displayName||"Context";case Iy:return(t._context.displayName||"Context")+".Consumer";case gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yh:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case On:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}var xa=Array.isArray,M=Cy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=US.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Oi={pending:!1,data:null,method:null,action:null},Ku=[],sr=-1;function Gt(t){return{current:t}}function Me(t){0>sr||(t.current=Ku[sr],Ku[sr]=null,sr--)}function ae(t,e){sr++,Ku[sr]=t.current,t.current=e}var Pt=Gt(null),es=Gt(null),Yn=Gt(null),Kl=Gt(null);function Ql(t,e){switch(ae(Yn,e),ae(es,t),ae(Pt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Rm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Rm(e),t=$v(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Me(Pt),ae(Pt,t)}function Ir(){Me(Pt),Me(es),Me(Yn)}function Qu(t){t.memoizedState!==null&&ae(Kl,t);var e=Pt.current,n=$v(e,t.type);e!==n&&(ae(es,t),ae(Pt,n))}function Xl(t){es.current===t&&(Me(Pt),Me(es)),Kl.current===t&&(Me(Kl),fs._currentValue=Oi)}var Hc,Sp;function Si(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||"",Sp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hc+t+Sp}var Pc=!1;function qc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var u=p}Reflect.construct(t,[],f)}else{try{f.call()}catch(p){u=p}t.call(f.prototype)}}else{try{throw Error()}catch(p){u=p}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),s=a[0],l=a[1];if(s&&l){var o=s.split(`
`),c=l.split(`
`);for(r=i=0;i<o.length&&!o[i].includes("DetermineComponentFrameRoot");)i++;for(;r<c.length&&!c[r].includes("DetermineComponentFrameRoot");)r++;if(i===o.length||r===c.length)for(i=o.length-1,r=c.length-1;1<=i&&0<=r&&o[i]!==c[r];)r--;for(;1<=i&&0<=r;i--,r--)if(o[i]!==c[r]){if(i!==1||r!==1)do if(i--,r--,0>r||o[i]!==c[r]){var h=`
`+o[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=r);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Si(n):""}function PS(t,e){switch(t.tag){case 26:case 27:case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return t.child!==e&&e!==null?Si("Suspense Fallback"):Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return qc(t.type,!1);case 11:return qc(t.type.render,!1);case 1:return qc(t.type,!0);case 31:return Si("Activity");default:return""}}function wp(t){try{var e="",n=null;do e+=PS(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Xu=Object.prototype.hasOwnProperty,_h=Re.unstable_scheduleCallback,Vc=Re.unstable_cancelCallback,qS=Re.unstable_shouldYield,VS=Re.unstable_requestPaint,st=Re.unstable_now,GS=Re.unstable_getCurrentPriorityLevel,Dy=Re.unstable_ImmediatePriority,My=Re.unstable_UserBlockingPriority,Wl=Re.unstable_NormalPriority,FS=Re.unstable_LowPriority,ky=Re.unstable_IdlePriority,YS=Re.log,KS=Re.unstable_setDisableYieldValue,Ns=null,lt=null;function Hn(t){if(typeof YS=="function"&&KS(t),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Ns,t)}catch{}}var ot=Math.clz32?Math.clz32:WS,QS=Math.log,XS=Math.LN2;function WS(t){return t>>>=0,t===0?32:31-(QS(t)/XS|0)|0}var ll=256,ol=262144,cl=4194304;function wi(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function nc(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var r=0,a=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var l=i&134217727;return l!==0?(i=l&~a,i!==0?r=wi(i):(s&=l,s!==0?r=wi(s):n||(n=l&~t,n!==0&&(r=wi(n))))):(l=i&~a,l!==0?r=wi(l):s!==0?r=wi(s):n||(n=i&~t,n!==0&&(r=wi(n)))),r===0?0:e!==0&&e!==r&&!(e&a)&&(a=r&-r,n=e&-e,a>=n||a===32&&(n&4194048)!==0)?e:r}function xs(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function $S(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ly(){var t=cl;return cl<<=1,!(cl&62914560)&&(cl=4194304),t}function Gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Os(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ZS(t,e,n,i,r,a){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var l=t.entanglements,o=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var h=31-ot(n),f=1<<h;l[h]=0,o[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var p=u[h];p!==null&&(p.lane&=-536870913)}n&=~f}i!==0&&Uy(t,i,0),a!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=a&~(s&~e))}function Uy(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ot(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function zy(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ot(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}function By(t,e){var n=e&-e;return n=n&42?1:vh(n),n&(t.suspendedLanes|e)?0:n}function vh(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bh(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function jy(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:o0(t.type))}function Tp(t,e){var n=X.p;try{return X.p=t,e()}finally{X.p=n}}var gi=Math.random().toString(36).slice(2),ze="__reactFiber$"+gi,et="__reactProps$"+gi,$r="__reactContainer$"+gi,Wu="__reactEvents$"+gi,JS="__reactListeners$"+gi,ew="__reactHandles$"+gi,Cp="__reactResources$"+gi,Is="__reactMarker$"+gi;function Eh(t){delete t[ze],delete t[et],delete t[Wu],delete t[JS],delete t[ew]}function lr(t){var e=t[ze];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$r]||n[ze]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dm(t);t!==null;){if(n=t[ze])return n;t=Dm(t)}return e}t=n,n=t.parentNode}return null}function Zr(t){if(t=t[ze]||t[$r]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Oa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(w(33))}function vr(t){var e=t[Cp];return e||(e=t[Cp]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function De(t){t[Is]=!0}var Hy=new Set,Py={};function Yi(t,e){Dr(t,e),Dr(t+"Capture",e)}function Dr(t,e){for(Py[t]=e,t=0;t<e.length;t++)Hy.add(e[t])}var tw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ap={},Rp={};function nw(t){return Xu.call(Rp,t)?!0:Xu.call(Ap,t)?!1:tw.test(t)?Rp[t]=!0:(Ap[t]=!0,!1)}function Cl(t,e,n){if(nw(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function ul(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Qt(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function mt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iw(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,a=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $u(t){if(!t._valueTracker){var e=qy(t)?"checked":"value";t._valueTracker=iw(t,e,""+t[e])}}function Vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qy(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rw=/[\n"\\]/g;function _t(t){return t.replace(rw,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Zu(t,e,n,i,r,a,s,l){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+mt(e)):t.value!==""+mt(e)&&(t.value=""+mt(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Ju(t,s,mt(e)):n!=null?Ju(t,s,mt(n)):i!=null&&t.removeAttribute("value"),r==null&&a!=null&&(t.defaultChecked=!!a),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+mt(l):t.removeAttribute("name")}function Gy(t,e,n,i,r,a,s,l){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.type=a),e!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||e!=null)){$u(t);return}n=n!=null?""+mt(n):"",e=e!=null?""+mt(e):n,l||e===t.value||(t.value=e),t.defaultValue=e}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=l?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),$u(t)}function Ju(t,e,n){e==="number"&&$l(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function br(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mt(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fy(t,e,n){if(e!=null&&(e=""+mt(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+mt(n):""}function Yy(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(w(92));if(xa(i)){if(1<i.length)throw Error(w(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=mt(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),$u(t)}function Mr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Np(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||aw.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Ky(t,e,n){if(e!=null&&typeof e!="object")throw Error(w(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var r in e)i=e[r],e.hasOwnProperty(r)&&n[r]!==i&&Np(t,r,i)}else for(var a in e)e.hasOwnProperty(a)&&Np(t,a,e[a])}function Sh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(t){return lw.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function rn(){}var ef=null;function wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var or=null,Er=null;function xp(t){var e=Zr(t);if(e&&(t=e.stateNode)){var n=t[et]||null;e:switch(t=e.stateNode,e.type){case"input":if(Zu(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=i[et]||null;if(!r)throw Error(w(90));Zu(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Vy(i)}break e;case"textarea":Fy(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&br(t,!!n.multiple,e,!1)}}}var Fc=!1;function Qy(t,e,n){if(Fc)return t(e,n);Fc=!0;try{var i=t(e);return i}finally{if(Fc=!1,(or!==null||Er!==null)&&(pc(),or&&(e=or,t=Er,Er=or=null,xp(e),t)))for(e=0;e<t.length;e++)xp(t[e])}}function ts(t,e){var n=t.stateNode;if(n===null)return null;var i=n[et]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=!1;if(pn)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){tf=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{tf=!1}var Pn=null,Th=null,Rl=null;function Xy(){if(Rl)return Rl;var t,e=Th,n=e.length,i,r="value"in Pn?Pn.value:Pn.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return Rl=r.slice(t,1<i?1-i:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function Op(){return!1}function tt(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?fl:Op,this.isPropagationStopped=Op,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=tt(Ki),Ds=ce({},Ki,{view:0,detail:0}),ow=tt(Ds),Yc,Kc,ga,rc=ce({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ch,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(Yc=t.screenX-ga.screenX,Kc=t.screenY-ga.screenY):Kc=Yc=0,ga=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Ip=tt(rc),cw=ce({},rc,{dataTransfer:0}),uw=tt(cw),fw=ce({},Ds,{relatedTarget:0}),Qc=tt(fw),hw=ce({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),dw=tt(hw),pw=ce({},Ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mw=tt(pw),gw=ce({},Ki,{data:0}),Dp=tt(gw),yw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_w={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vw[t])?!!e[t]:!1}function Ch(){return bw}var Ew=ce({},Ds,{key:function(t){if(t.key){var e=yw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_w[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ch,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sw=tt(Ew),ww=ce({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=tt(ww),Tw=ce({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ch}),Cw=tt(Tw),Aw=ce({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rw=tt(Aw),Nw=ce({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xw=tt(Nw),Ow=ce({},Ki,{newState:0,oldState:0}),Iw=tt(Ow),Dw=[9,13,27,32],Ah=pn&&"CompositionEvent"in window,ka=null;pn&&"documentMode"in document&&(ka=document.documentMode);var Mw=pn&&"TextEvent"in window&&!ka,Wy=pn&&(!Ah||ka&&8<ka&&11>=ka),kp=" ",Lp=!1;function $y(t,e){switch(t){case"keyup":return Dw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cr=!1;function kw(t,e){switch(t){case"compositionend":return Zy(e);case"keypress":return e.which!==32?null:(Lp=!0,kp);case"textInput":return t=e.data,t===kp&&Lp?null:t;default:return null}}function Lw(t,e){if(cr)return t==="compositionend"||!Ah&&$y(t,e)?(t=Xy(),Rl=Th=Pn=null,cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wy&&e.locale!=="ko"?null:e.data;default:return null}}var Uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Uw[t.type]:e==="textarea"}function Jy(t,e,n,i){or?Er?Er.push(i):Er=[i]:or=i,e=go(e,"onChange"),0<e.length&&(n=new ic("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,ns=null;function zw(t){Qv(t,0)}function ac(t){var e=Oa(t);if(Vy(e))return t}function zp(t,e){if(t==="change")return e}var e_=!1;if(pn){var Xc;if(pn){var Wc="oninput"in document;if(!Wc){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Wc=typeof Bp.oninput=="function"}Xc=Wc}else Xc=!1;e_=Xc&&(!document.documentMode||9<document.documentMode)}function jp(){La&&(La.detachEvent("onpropertychange",t_),ns=La=null)}function t_(t){if(t.propertyName==="value"&&ac(ns)){var e=[];Jy(e,ns,t,wh(t)),Qy(zw,e)}}function Bw(t,e,n){t==="focusin"?(jp(),La=e,ns=n,La.attachEvent("onpropertychange",t_)):t==="focusout"&&jp()}function jw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(ns)}function Hw(t,e){if(t==="click")return ac(e)}function Pw(t,e){if(t==="input"||t==="change")return ac(e)}function qw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ut=typeof Object.is=="function"?Object.is:qw;function is(t,e){if(ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xu.call(e,r)||!ut(t[r],e[r]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=Hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function n_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=$l(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Vw=pn&&"documentMode"in document&&11>=document.documentMode,ur=null,nf=null,Ua=null,rf=!1;function qp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rf||ur==null||ur!==$l(i)||(i=ur,"selectionStart"in i&&Rh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ua&&is(Ua,i)||(Ua=i,i=go(nf,"onSelect"),0<i.length&&(e=new ic("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ur)))}function Ei(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fr={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionrun:Ei("Transition","TransitionRun"),transitionstart:Ei("Transition","TransitionStart"),transitioncancel:Ei("Transition","TransitionCancel"),transitionend:Ei("Transition","TransitionEnd")},$c={},r_={};pn&&(r_=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Qi(t){if($c[t])return $c[t];if(!fr[t])return t;var e=fr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r_)return $c[t]=e[n];return t}var a_=Qi("animationend"),s_=Qi("animationiteration"),l_=Qi("animationstart"),Gw=Qi("transitionrun"),Fw=Qi("transitionstart"),Yw=Qi("transitioncancel"),o_=Qi("transitionend"),c_=new Map,af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");af.push("scrollEnd");function Ut(t,e){c_.set(t,e),Yi(e,[t])}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pt=[],hr=0,Nh=0;function sc(){for(var t=hr,e=Nh=hr=0;e<t;){var n=pt[e];pt[e++]=null;var i=pt[e];pt[e++]=null;var r=pt[e];pt[e++]=null;var a=pt[e];if(pt[e++]=null,i!==null&&r!==null){var s=i.pending;s===null?r.next=r:(r.next=s.next,s.next=r),i.pending=r}a!==0&&u_(n,r,a)}}function lc(t,e,n,i){pt[hr++]=t,pt[hr++]=e,pt[hr++]=n,pt[hr++]=i,Nh|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function xh(t,e,n,i){return lc(t,e,n,i),Jl(t)}function Xi(t,e){return lc(t,null,null,e),Jl(t)}function u_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var r=!1,a=t.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(t=a.stateNode,t===null||t._visibility&1||(r=!0)),t=a,a=a.return;return t.tag===3?(a=t.stateNode,r&&e!==null&&(r=31-ot(n),t=a.hiddenUpdates,i=t[r],i===null?t[r]=[e]:i.push(e),e.lane=n|536870912),a):null}function Jl(t){if(50<Fa)throw Fa=0,Af=null,Error(w(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var dr={};function Kw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(t,e,n,i){return new Kw(t,e,n,i)}function Oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cn(t,e){var n=t.alternate;return n===null?(n=rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function f_(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function xl(t,e,n,i,r,a){var s=0;if(i=t,typeof t=="function")Oh(t)&&(s=1);else if(typeof t=="string")s=ZT(t,n,Pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Fu:return t=rt(31,n,e,r),t.elementType=Fu,t.lanes=a,t;case ar:return Ii(n.children,r,a,e);case Oy:s=8,r|=24;break;case qu:return t=rt(12,n,e,r|2),t.elementType=qu,t.lanes=a,t;case Vu:return t=rt(13,n,e,r),t.elementType=Vu,t.lanes=a,t;case Gu:return t=rt(19,n,e,r),t.elementType=Gu,t.lanes=a,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nn:s=10;break e;case Iy:s=9;break e;case gh:s=11;break e;case yh:s=14;break e;case On:s=16,i=null;break e}s=29,n=Error(w(130,t===null?"null":typeof t,"")),i=null}return e=rt(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Ii(t,e,n,i){return t=rt(7,t,i,e),t.lanes=n,t}function Zc(t,e,n){return t=rt(6,t,null,e),t.lanes=n,t}function h_(t){var e=rt(18,null,null,0);return e.stateNode=t,e}function Jc(t,e,n){return e=rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Vp=new WeakMap;function vt(t,e){if(typeof t=="object"&&t!==null){var n=Vp.get(t);return n!==void 0?n:(e={value:t,source:e,stack:wp(e)},Vp.set(t,e),e)}return{value:t,source:e,stack:wp(e)}}var pr=[],mr=0,eo=null,rs=0,gt=[],yt=0,li=null,Bt=1,jt="";function en(t,e){pr[mr++]=rs,pr[mr++]=eo,eo=t,rs=e}function d_(t,e,n){gt[yt++]=Bt,gt[yt++]=jt,gt[yt++]=li,li=t;var i=Bt;t=jt;var r=32-ot(i)-1;i&=~(1<<r),n+=1;var a=32-ot(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Bt=1<<32-ot(e)+r|n<<r|i,jt=a+t}else Bt=1<<a|n<<r|i,jt=t}function Ih(t){t.return!==null&&(en(t,1),d_(t,1,0))}function Dh(t){for(;t===eo;)eo=pr[--mr],pr[mr]=null,rs=pr[--mr],pr[mr]=null;for(;t===li;)li=gt[--yt],gt[yt]=null,jt=gt[--yt],gt[yt]=null,Bt=gt[--yt],gt[yt]=null}function p_(t,e){gt[yt++]=Bt,gt[yt++]=jt,gt[yt++]=li,Bt=e.id,jt=e.overflow,li=t}var Be=null,le=null,Y=!1,Kn=null,bt=!1,sf=Error(w(519));function oi(t){var e=Error(w(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw as(vt(e,t)),sf}function Gp(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[ze]=t,e[et]=i,n){case"dialog":q("cancel",e),q("close",e);break;case"iframe":case"object":case"embed":q("load",e);break;case"video":case"audio":for(n=0;n<cs.length;n++)q(cs[n],e);break;case"source":q("error",e);break;case"img":case"image":case"link":q("error",e),q("load",e);break;case"details":q("toggle",e);break;case"input":q("invalid",e),Gy(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":q("invalid",e);break;case"textarea":q("invalid",e),Yy(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Wv(e.textContent,n)?(i.popover!=null&&(q("beforetoggle",e),q("toggle",e)),i.onScroll!=null&&q("scroll",e),i.onScrollEnd!=null&&q("scrollend",e),i.onClick!=null&&(e.onclick=rn),e=!0):e=!1,e||oi(t,!0)}function Fp(t){for(Be=t.return;Be;)switch(Be.tag){case 5:case 31:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:Be=Be.return}}function Ji(t){if(t!==Be)return!1;if(!Y)return Fp(t),Y=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||If(t.type,t.memoizedProps)),n=!n),n&&le&&oi(t),Fp(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));le=Im(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));le=Im(t)}else e===27?(e=le,yi(t.type)?(t=Lf,Lf=null,le=t):le=e):le=Be?Tt(t.stateNode.nextSibling):null;return!0}function Li(){le=Be=null,Y=!1}function eu(){var t=Kn;return t!==null&&($e===null?$e=t:$e.push.apply($e,t),Kn=null),t}function as(t){Kn===null?Kn=[t]:Kn.push(t)}var lf=Gt(null),Wi=null,an=null;function Dn(t,e,n){ae(lf,e._currentValue),e._currentValue=n}function un(t){t._currentValue=lf.current,Me(lf)}function of(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cf(t,e,n,i){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var a=r.dependencies;if(a!==null){var s=r.child;a=a.firstContext;e:for(;a!==null;){var l=a;a=r;for(var o=0;o<e.length;o++)if(l.context===e[o]){a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),of(a.return,n,t),i||(s=null);break e}a=l.next}}else if(r.tag===18){if(s=r.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),of(s,n,t),s=null}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===t){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}}function Jr(t,e,n,i){t=null;for(var r=e,a=!1;r!==null;){if(!a){if(r.flags&524288)a=!0;else if(r.flags&262144)break}if(r.tag===10){var s=r.alternate;if(s===null)throw Error(w(387));if(s=s.memoizedProps,s!==null){var l=r.type;ut(r.pendingProps.value,s.value)||(t!==null?t.push(l):t=[l])}}else if(r===Kl.current){if(s=r.alternate,s===null)throw Error(w(387));s.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(fs):t=[fs])}r=r.return}t!==null&&cf(e,t,n,i),e.flags|=262144}function to(t){for(t=t.firstContext;t!==null;){if(!ut(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ui(t){Wi=t,an=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function je(t){return m_(Wi,t)}function hl(t,e){return Wi===null&&Ui(t),m_(t,e)}function m_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},an===null){if(t===null)throw Error(w(308));an=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else an=an.next=e;return n}var Qw=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Xw=Re.unstable_scheduleCallback,Ww=Re.unstable_NormalPriority,Se={$$typeof:nn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mh(){return{controller:new Qw,data:new Map,refCount:0}}function Ms(t){t.refCount--,t.refCount===0&&Xw(Ww,function(){t.controller.abort()})}var za=null,uf=0,kr=0,Sr=null;function $w(t,e){if(za===null){var n=za=[];uf=0,kr=rd(),Sr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return uf++,e.then(Yp,Yp),e}function Yp(){if(--uf===0&&za!==null){Sr!==null&&(Sr.status="fulfilled");var t=za;za=null,kr=0,Sr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Zw(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var Kp=M.S;M.S=function(t,e){xv=st(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&$w(t,e),Kp!==null&&Kp(t,e)};var Di=Gt(null);function kh(){var t=Di.current;return t!==null?t:ne.pooledCache}function Ol(t,e){e===null?ae(Di,Di.current):ae(Di,e.pool)}function g_(){var t=kh();return t===null?null:{parent:Se._currentValue,pool:t}}var ea=Error(w(460)),Lh=Error(w(474)),oc=Error(w(542)),no={then:function(){}};function Qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function y_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(rn,rn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Wp(t),t;default:if(typeof e.status=="string")e.then(rn,rn);else{if(t=ne,t!==null&&100<t.shellSuspendCounter)throw Error(w(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=i}},function(i){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Wp(t),t}throw Mi=e,ea}}function Ti(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Mi=n,ea):n}}var Mi=null;function Xp(){if(Mi===null)throw Error(w(459));var t=Mi;return Mi=null,t}function Wp(t){if(t===ea||t===oc)throw Error(w(483))}var wr=null,ss=0;function dl(t){var e=ss;return ss+=1,wr===null&&(wr=[]),y_(wr,t,e)}function ya(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function pl(t,e){throw e.$$typeof===BS?Error(w(525)):(t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function __(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function i(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(m,d){return m=cn(m,d),m.index=0,m.sibling=null,m}function a(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=67108866,d):g):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function s(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function l(m,d,g,v){return d===null||d.tag!==6?(d=Zc(g,m.mode,v),d.return=m,d):(d=r(d,g),d.return=m,d)}function o(m,d,g,v){var C=g.type;return C===ar?h(m,d,g.props.children,v,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===On&&Ti(C)===d.type)?(d=r(d,g.props),ya(d,g),d.return=m,d):(d=xl(g.type,g.key,g.props,null,m.mode,v),ya(d,g),d.return=m,d)}function c(m,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Jc(g,m.mode,v),d.return=m,d):(d=r(d,g.children||[]),d.return=m,d)}function h(m,d,g,v,C){return d===null||d.tag!==7?(d=Ii(g,m.mode,v,C),d.return=m,d):(d=r(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Zc(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case sl:return g=xl(d.type,d.key,d.props,null,m.mode,g),ya(g,d),g.return=m,g;case Na:return d=Jc(d,m.mode,g),d.return=m,d;case On:return d=Ti(d),f(m,d,g)}if(xa(d)||pa(d))return d=Ii(d,m.mode,g,null),d.return=m,d;if(typeof d.then=="function")return f(m,dl(d),g);if(d.$$typeof===nn)return f(m,hl(m,d),g);pl(m,d)}return null}function u(m,d,g,v){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return C!==null?null:l(m,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sl:return g.key===C?o(m,d,g,v):null;case Na:return g.key===C?c(m,d,g,v):null;case On:return g=Ti(g),u(m,d,g,v)}if(xa(g)||pa(g))return C!==null?null:h(m,d,g,v,null);if(typeof g.then=="function")return u(m,d,dl(g),v);if(g.$$typeof===nn)return u(m,d,hl(m,g),v);pl(m,g)}return null}function p(m,d,g,v,C){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return m=m.get(g)||null,l(d,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sl:return m=m.get(v.key===null?g:v.key)||null,o(d,m,v,C);case Na:return m=m.get(v.key===null?g:v.key)||null,c(d,m,v,C);case On:return v=Ti(v),p(m,d,g,v,C)}if(xa(v)||pa(v))return m=m.get(g)||null,h(d,m,v,C,null);if(typeof v.then=="function")return p(m,d,g,dl(v),C);if(v.$$typeof===nn)return p(m,d,g,hl(d,v),C);pl(d,v)}return null}function y(m,d,g,v){for(var C=null,I=null,A=d,N=d=0,D=null;A!==null&&N<g.length;N++){A.index>N?(D=A,A=null):D=A.sibling;var L=u(m,A,g[N],v);if(L===null){A===null&&(A=D);break}t&&A&&L.alternate===null&&e(m,A),d=a(L,d,N),I===null?C=L:I.sibling=L,I=L,A=D}if(N===g.length)return n(m,A),Y&&en(m,N),C;if(A===null){for(;N<g.length;N++)A=f(m,g[N],v),A!==null&&(d=a(A,d,N),I===null?C=A:I.sibling=A,I=A);return Y&&en(m,N),C}for(A=i(A);N<g.length;N++)D=p(A,m,N,g[N],v),D!==null&&(t&&D.alternate!==null&&A.delete(D.key===null?N:D.key),d=a(D,d,N),I===null?C=D:I.sibling=D,I=D);return t&&A.forEach(function(dt){return e(m,dt)}),Y&&en(m,N),C}function b(m,d,g,v){if(g==null)throw Error(w(151));for(var C=null,I=null,A=d,N=d=0,D=null,L=g.next();A!==null&&!L.done;N++,L=g.next()){A.index>N?(D=A,A=null):D=A.sibling;var dt=u(m,A,L.value,v);if(dt===null){A===null&&(A=D);break}t&&A&&dt.alternate===null&&e(m,A),d=a(dt,d,N),I===null?C=dt:I.sibling=dt,I=dt,A=D}if(L.done)return n(m,A),Y&&en(m,N),C;if(A===null){for(;!L.done;N++,L=g.next())L=f(m,L.value,v),L!==null&&(d=a(L,d,N),I===null?C=L:I.sibling=L,I=L);return Y&&en(m,N),C}for(A=i(A);!L.done;N++,L=g.next())L=p(A,m,N,L.value,v),L!==null&&(t&&L.alternate!==null&&A.delete(L.key===null?N:L.key),d=a(L,d,N),I===null?C=L:I.sibling=L,I=L);return t&&A.forEach(function(Rn){return e(m,Rn)}),Y&&en(m,N),C}function S(m,d,g,v){if(typeof g=="object"&&g!==null&&g.type===ar&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case sl:e:{for(var C=g.key;d!==null;){if(d.key===C){if(C=g.type,C===ar){if(d.tag===7){n(m,d.sibling),v=r(d,g.props.children),v.return=m,m=v;break e}}else if(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===On&&Ti(C)===d.type){n(m,d.sibling),v=r(d,g.props),ya(v,g),v.return=m,m=v;break e}n(m,d);break}else e(m,d);d=d.sibling}g.type===ar?(v=Ii(g.props.children,m.mode,v,g.key),v.return=m,m=v):(v=xl(g.type,g.key,g.props,null,m.mode,v),ya(v,g),v.return=m,m=v)}return s(m);case Na:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),v=r(d,g.children||[]),v.return=m,m=v;break e}else{n(m,d);break}else e(m,d);d=d.sibling}v=Jc(g,m.mode,v),v.return=m,m=v}return s(m);case On:return g=Ti(g),S(m,d,g,v)}if(xa(g))return y(m,d,g,v);if(pa(g)){if(C=pa(g),typeof C!="function")throw Error(w(150));return g=C.call(g),b(m,d,g,v)}if(typeof g.then=="function")return S(m,d,dl(g),v);if(g.$$typeof===nn)return S(m,d,hl(m,g),v);pl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),v=r(d,g),v.return=m,m=v):(n(m,d),v=Zc(g,m.mode,v),v.return=m,m=v),s(m)):n(m,d)}return function(m,d,g,v){try{ss=0;var C=S(m,d,g,v);return wr=null,C}catch(A){if(A===ea||A===oc)throw A;var I=rt(29,A,null,m.mode);return I.lanes=v,I.return=m,I}finally{}}}var zi=__(!0),v_=__(!1),In=!1;function Uh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Q&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,e=Jl(t),u_(t,null,n),e}return lc(t,i,e,n),Jl(t)}function Ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zy(t,n)}}function tu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var hf=!1;function ja(){if(hf){var t=Sr;if(t!==null)throw t}}function Ha(t,e,n,i){hf=!1;var r=t.updateQueue;In=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,s===null?a=c:s.next=c,s=o;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=o))}if(a!==null){var f=r.baseState;s=0,h=c=o=null,l=a;do{var u=l.lane&-536870913,p=u!==l.lane;if(p?(F&u)===u:(i&u)===u){u!==0&&u===kr&&(hf=!0),h!==null&&(h=h.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var y=t,b=l;u=e;var S=n;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){f=y.call(S,f,u);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,u=typeof y=="function"?y.call(S,f,u):y,u==null)break e;f=ce({},f,u);break e;case 2:In=!0}}u=l.callback,u!==null&&(t.flags|=64,p&&(t.flags|=8192),p=r.callbacks,p===null?r.callbacks=[u]:p.push(u))}else p={lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=p,o=f):h=h.next=p,s|=u;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;p=l,l=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);h===null&&(o=f),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=h,a===null&&(r.shared.lanes=0),ui|=s,t.lanes=s,t.memoizedState=f}}function b_(t,e){if(typeof t!="function")throw Error(w(191,t));t.call(e)}function E_(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)b_(n[t],e)}var Lr=Gt(null),io=Gt(0);function $p(t,e){t=_n,ae(io,t),ae(Lr,e),_n=t|e.baseLanes}function df(){ae(io,_n),ae(Lr,Lr.current)}function zh(){_n=io.current,Me(Lr),Me(io)}var ft=Gt(null),wt=null;function Mn(t){var e=t.alternate;ae(ye,ye.current&1),ae(ft,t),wt===null&&(e===null||Lr.current!==null||e.memoizedState!==null)&&(wt=t)}function pf(t){ae(ye,ye.current),ae(ft,t),wt===null&&(wt=t)}function S_(t){t.tag===22?(ae(ye,ye.current),ae(ft,t),wt===null&&(wt=t)):kn()}function kn(){ae(ye,ye.current),ae(ft,ft.current)}function it(t){Me(ft),wt===t&&(wt=null),Me(ye)}var ye=Gt(0);function ro(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Mf(n)||kf(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mn=0,z=null,ee=null,be=null,ao=!1,Tr=!1,Bi=!1,so=0,ls=0,Cr=null,Jw=0;function he(){throw Error(w(321))}function Bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ut(t[n],e[n]))return!1;return!0}function jh(t,e,n,i,r,a){return mn=a,z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=t===null||t.memoizedState===null?J_:Wh,Bi=!1,a=n(i,r),Bi=!1,Tr&&(a=T_(e,n,i,r)),w_(t),a}function w_(t){M.H=os;var e=ee!==null&&ee.next!==null;if(mn=0,be=ee=z=null,ao=!1,ls=0,Cr=null,e)throw Error(w(300));t===null||we||(t=t.dependencies,t!==null&&to(t)&&(we=!0))}function T_(t,e,n,i){z=t;var r=0;do{if(Tr&&(Cr=null),ls=0,Tr=!1,25<=r)throw Error(w(301));if(r+=1,be=ee=null,t.updateQueue!=null){var a=t.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}M.H=ev,a=e(n,i)}while(Tr);return a}function eT(){var t=M.H,e=t.useState()[0];return e=typeof e.then=="function"?ks(e):e,t=t.useState()[0],(ee!==null?ee.memoizedState:null)!==t&&(z.flags|=1024),e}function Hh(){var t=so!==0;return so=0,t}function Ph(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function qh(t){if(ao){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ao=!1}mn=0,be=ee=z=null,Tr=!1,ls=so=0,Cr=null}function qe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?z.memoizedState=be=t:be=be.next=t,be}function ve(){if(ee===null){var t=z.alternate;t=t!==null?t.memoizedState:null}else t=ee.next;var e=be===null?z.memoizedState:be.next;if(e!==null)be=e,ee=t;else{if(t===null)throw z.alternate===null?Error(w(467)):Error(w(310));ee=t,t={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},be===null?z.memoizedState=be=t:be=be.next=t}return be}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ks(t){var e=ls;return ls+=1,Cr===null&&(Cr=[]),t=y_(Cr,t,e),e=z,(be===null?e.memoizedState:be.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?J_:Wh),t}function uc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ks(t);if(t.$$typeof===nn)return je(t)}throw Error(w(438,String(t)))}function Vh(t){var e=null,n=z.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=z.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=cc(),z.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=jS;return e.index++,n}function gn(t,e){return typeof e=="function"?e(t):e}function Il(t){var e=ve();return Gh(e,ee,t)}function Gh(t,e,n){var i=t.queue;if(i===null)throw Error(w(311));i.lastRenderedReducer=n;var r=t.baseQueue,a=i.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}e.baseQueue=r=a,i.pending=null}if(a=t.baseState,r===null)t.memoizedState=a;else{e=r.next;var l=s=null,o=null,c=e,h=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(F&f)===f:(mn&f)===f){var u=c.revertLane;if(u===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===kr&&(h=!0);else if((mn&u)===u){c=c.next,u===kr&&(h=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=f,s=a):o=o.next=f,z.lanes|=u,ui|=u;f=c.action,Bi&&n(a,f),a=c.hasEagerState?c.eagerState:n(a,f)}else u={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=u,s=a):o=o.next=u,z.lanes|=f,ui|=f;c=c.next}while(c!==null&&c!==e);if(o===null?s=a:o.next=l,!ut(a,t.memoizedState)&&(we=!0,h&&(n=Sr,n!==null)))throw n;t.memoizedState=a,t.baseState=s,t.baseQueue=o,i.lastRenderedState=a}return r===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function nu(t){var e=ve(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);ut(a,e.memoizedState)||(we=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function C_(t,e,n){var i=z,r=ve(),a=Y;if(a){if(n===void 0)throw Error(w(407));n=n()}else n=e();var s=!ut((ee||r).memoizedState,n);if(s&&(r.memoizedState=n,we=!0),r=r.queue,Fh(N_.bind(null,i,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(i.flags|=2048,Ur(9,{destroy:void 0},R_.bind(null,i,r,n,e),null),ne===null)throw Error(w(349));a||mn&127||A_(i,e,n)}return n}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=z.updateQueue,e===null?(e=cc(),z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function R_(t,e,n,i){e.value=n,e.getSnapshot=i,x_(e)&&O_(t)}function N_(t,e,n){return n(function(){x_(e)&&O_(t)})}function x_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ut(t,n)}catch{return!0}}function O_(t){var e=Xi(t,2);e!==null&&Je(e,t,2)}function mf(t){var e=qe();if(typeof t=="function"){var n=t;if(t=n(),Bi){Hn(!0);try{n()}finally{Hn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:t},e}function I_(t,e,n,i){return t.baseState=n,Gh(t,ee,typeof i=="function"?i:gn)}function tT(t,e,n,i,r){if(hc(t))throw Error(w(485));if(t=e.action,t!==null){var a={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){a.listeners.push(s)}};M.T!==null?n(!0):a.isTransition=!1,i(a),n=e.pending,n===null?(a.next=e.pending=a,D_(e,a)):(a.next=n.next,e.pending=n.next=a)}}function D_(t,e){var n=e.action,i=e.payload,r=t.state;if(e.isTransition){var a=M.T,s={};M.T=s;try{var l=n(r,i),o=M.S;o!==null&&o(s,l),Zp(t,e,l)}catch(c){gf(t,e,c)}finally{a!==null&&s.types!==null&&(a.types=s.types),M.T=a}}else try{a=n(r,i),Zp(t,e,a)}catch(c){gf(t,e,c)}}function Zp(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Jp(t,e,i)},function(i){return gf(t,e,i)}):Jp(t,e,n)}function Jp(t,e,n){e.status="fulfilled",e.value=n,M_(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,D_(t,n)))}function gf(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,M_(e),e=e.next;while(e!==i)}t.action=null}function M_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function k_(t,e){return e}function em(t,e){if(Y){var n=ne.formState;if(n!==null){e:{var i=z;if(Y){if(le){t:{for(var r=le,a=bt;r.nodeType!==8;){if(!a){r=null;break t}if(r=Tt(r.nextSibling),r===null){r=null;break t}}a=r.data,r=a==="F!"||a==="F"?r:null}if(r){le=Tt(r.nextSibling),i=r.data==="F!";break e}}oi(i)}i=!1}i&&(e=n[0])}}return n=qe(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:k_,lastRenderedState:e},n.queue=i,n=W_.bind(null,z,i),i.dispatch=n,i=mf(!1),a=Xh.bind(null,z,!1,i.queue),i=qe(),r={state:e,dispatch:null,action:t,pending:null},i.queue=r,n=tT.bind(null,z,r,a,n),r.dispatch=n,i.memoizedState=t,[e,n,!1]}function tm(t){var e=ve();return L_(e,ee,t)}function L_(t,e,n){if(e=Gh(t,e,k_)[0],t=Il(gn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=ks(e)}catch(s){throw s===ea?oc:s}else i=e;e=ve();var r=e.queue,a=r.dispatch;return n!==e.memoizedState&&(z.flags|=2048,Ur(9,{destroy:void 0},nT.bind(null,r,n),null)),[i,a,t]}function nT(t,e){t.action=e}function nm(t){var e=ve(),n=ee;if(n!==null)return L_(e,n,t);ve(),e=e.memoizedState,n=ve();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Ur(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=z.updateQueue,e===null&&(e=cc(),z.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function U_(){return ve().memoizedState}function Dl(t,e,n,i){var r=qe();z.flags|=t,r.memoizedState=Ur(1|e,{destroy:void 0},n,i===void 0?null:i)}function fc(t,e,n,i){var r=ve();i=i===void 0?null:i;var a=r.memoizedState.inst;ee!==null&&i!==null&&Bh(i,ee.memoizedState.deps)?r.memoizedState=Ur(e,a,n,i):(z.flags|=t,r.memoizedState=Ur(1|e,a,n,i))}function im(t,e){Dl(8390656,8,t,e)}function Fh(t,e){fc(2048,8,t,e)}function iT(t){z.flags|=4;var e=z.updateQueue;if(e===null)e=cc(),z.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function z_(t){var e=ve().memoizedState;return iT({ref:e,nextImpl:t}),function(){if(Q&2)throw Error(w(440));return e.impl.apply(void 0,arguments)}}function B_(t,e){return fc(4,2,t,e)}function j_(t,e){return fc(4,4,t,e)}function H_(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){n=n!=null?n.concat([t]):null,fc(4,4,H_.bind(null,e,t),n)}function Yh(){}function q_(t,e){var n=ve();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Bh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function V_(t,e){var n=ve();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Bh(e,i[1]))return i[0];if(i=t(),Bi){Hn(!0);try{t()}finally{Hn(!1)}}return n.memoizedState=[i,e],i}function Kh(t,e,n){return n===void 0||mn&1073741824&&!(F&261930)?t.memoizedState=e:(t.memoizedState=n,t=Iv(),z.lanes|=t,ui|=t,n)}function G_(t,e,n,i){return ut(n,e)?n:Lr.current!==null?(t=Kh(t,n,i),ut(t,e)||(we=!0),t):!(mn&42)||mn&1073741824&&!(F&261930)?(we=!0,t.memoizedState=n):(t=Iv(),z.lanes|=t,ui|=t,e)}function F_(t,e,n,i,r){var a=X.p;X.p=a!==0&&8>a?a:8;var s=M.T,l={};M.T=l,Xh(t,!1,e,n);try{var o=r(),c=M.S;if(c!==null&&c(l,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var h=Zw(o,i);Pa(t,e,h,ct(t))}else Pa(t,e,i,ct(t))}catch(f){Pa(t,e,{then:function(){},status:"rejected",reason:f},ct())}finally{X.p=a,s!==null&&l.types!==null&&(s.types=l.types),M.T=s}}function rT(){}function yf(t,e,n,i){if(t.tag!==5)throw Error(w(476));var r=Y_(t).queue;F_(t,r,e,Oi,n===null?rT:function(){return K_(t),n(i)})}function Y_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Oi,baseState:Oi,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:Oi},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function K_(t){var e=Y_(t);e.next===null&&(e=t.alternate.memoizedState),Pa(t,e.next.queue,{},ct())}function Qh(){return je(fs)}function Q_(){return ve().memoizedState}function X_(){return ve().memoizedState}function aT(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ct();t=Qn(n);var i=Xn(e,t,n);i!==null&&(Je(i,e,n),Ba(i,e,n)),e={cache:Mh()},t.payload=e;return}e=e.return}}function sT(t,e,n){var i=ct();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hc(t)?$_(e,n):(n=xh(t,e,n,i),n!==null&&(Je(n,t,i),Z_(n,e,i)))}function W_(t,e,n){var i=ct();Pa(t,e,n,i)}function Pa(t,e,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hc(t))$_(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,l=a(s,n);if(r.hasEagerState=!0,r.eagerState=l,ut(l,s))return lc(t,e,r,0),ne===null&&sc(),!1}catch{}finally{}if(n=xh(t,e,r,i),n!==null)return Je(n,t,i),Z_(n,e,i),!0}return!1}function Xh(t,e,n,i){if(i={lane:2,revertLane:rd(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},hc(t)){if(e)throw Error(w(479))}else e=xh(t,n,i,2),e!==null&&Je(e,t,2)}function hc(t){var e=t.alternate;return t===z||e!==null&&e===z}function $_(t,e){Tr=ao=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z_(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zy(t,n)}}var os={readContext:je,use:uc,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he};os.useEffectEvent=he;var J_={readContext:je,use:uc,useCallback:function(t,e){return qe().memoizedState=[t,e===void 0?null:e],t},useContext:je,useEffect:im,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Dl(4194308,4,H_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){Dl(4,2,t,e)},useMemo:function(t,e){var n=qe();e=e===void 0?null:e;var i=t();if(Bi){Hn(!0);try{t()}finally{Hn(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=qe();if(n!==void 0){var r=n(e);if(Bi){Hn(!0);try{n(e)}finally{Hn(!1)}}}else r=e;return i.memoizedState=i.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},i.queue=t,t=t.dispatch=sT.bind(null,z,t),[i.memoizedState,t]},useRef:function(t){var e=qe();return t={current:t},e.memoizedState=t},useState:function(t){t=mf(t);var e=t.queue,n=W_.bind(null,z,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Yh,useDeferredValue:function(t,e){var n=qe();return Kh(n,t,e)},useTransition:function(){var t=mf(!1);return t=F_.bind(null,z,t.queue,!0,!1),qe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=z,r=qe();if(Y){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),ne===null)throw Error(w(349));F&127||A_(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,im(N_.bind(null,i,a,t),[t]),i.flags|=2048,Ur(9,{destroy:void 0},R_.bind(null,i,a,n,e),null),n},useId:function(){var t=qe(),e=ne.identifierPrefix;if(Y){var n=jt,i=Bt;n=(i&~(1<<32-ot(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=Jw++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Qh,useFormState:em,useActionState:em,useOptimistic:function(t){var e=qe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Xh.bind(null,z,!0,n),n.dispatch=e,[t,e]},useMemoCache:Vh,useCacheRefresh:function(){return qe().memoizedState=aT.bind(null,z)},useEffectEvent:function(t){var e=qe(),n={impl:t};return e.memoizedState=n,function(){if(Q&2)throw Error(w(440));return n.impl.apply(void 0,arguments)}}},Wh={readContext:je,use:uc,useCallback:q_,useContext:je,useEffect:Fh,useImperativeHandle:P_,useInsertionEffect:B_,useLayoutEffect:j_,useMemo:V_,useReducer:Il,useRef:U_,useState:function(){return Il(gn)},useDebugValue:Yh,useDeferredValue:function(t,e){var n=ve();return G_(n,ee.memoizedState,t,e)},useTransition:function(){var t=Il(gn)[0],e=ve().memoizedState;return[typeof t=="boolean"?t:ks(t),e]},useSyncExternalStore:C_,useId:Q_,useHostTransitionStatus:Qh,useFormState:tm,useActionState:tm,useOptimistic:function(t,e){var n=ve();return I_(n,ee,t,e)},useMemoCache:Vh,useCacheRefresh:X_};Wh.useEffectEvent=z_;var ev={readContext:je,use:uc,useCallback:q_,useContext:je,useEffect:Fh,useImperativeHandle:P_,useInsertionEffect:B_,useLayoutEffect:j_,useMemo:V_,useReducer:nu,useRef:U_,useState:function(){return nu(gn)},useDebugValue:Yh,useDeferredValue:function(t,e){var n=ve();return ee===null?Kh(n,t,e):G_(n,ee.memoizedState,t,e)},useTransition:function(){var t=nu(gn)[0],e=ve().memoizedState;return[typeof t=="boolean"?t:ks(t),e]},useSyncExternalStore:C_,useId:Q_,useHostTransitionStatus:Qh,useFormState:nm,useActionState:nm,useOptimistic:function(t,e){var n=ve();return ee!==null?I_(n,ee,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Vh,useCacheRefresh:X_};ev.useEffectEvent=z_;function iu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _f={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ct(),r=Qn(i);r.payload=e,n!=null&&(r.callback=n),e=Xn(t,r,i),e!==null&&(Je(e,t,i),Ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ct(),r=Qn(i);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Xn(t,r,i),e!==null&&(Je(e,t,i),Ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),i=Qn(n);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,n),e!==null&&(Je(e,t,n),Ba(e,t,n))}};function rm(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!is(n,i)||!is(r,a):!0}function am(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_f.enqueueReplaceState(e,e.state,null)}function ji(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=ce({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}function tv(t){Zl(t)}function nv(t){console.error(t)}function iv(t){Zl(t)}function lo(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function sm(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function vf(t,e,n){return n=Qn(n),n.tag=3,n.payload={element:null},n.callback=function(){lo(t,e)},n}function rv(t){return t=Qn(t),t.tag=3,t}function av(t,e,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var a=i.value;t.payload=function(){return r(a)},t.callback=function(){sm(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){sm(e,n,i),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function lT(t,e,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Jr(e,n,r,!0),n=ft.current,n!==null){switch(n.tag){case 31:case 13:return wt===null?ho():n.alternate===null&&de===0&&(de=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===no?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),pu(t,i,r)),!1;case 22:return n.flags|=65536,i===no?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),pu(t,i,r)),!1}throw Error(w(435,n.tag))}return pu(t,i,r),ho(),!1}if(Y)return e=ft.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=r,i!==sf&&(t=Error(w(422),{cause:i}),as(vt(t,n)))):(i!==sf&&(e=Error(w(423),{cause:i}),as(vt(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,i=vt(i,n),r=vf(t.stateNode,i,r),tu(t,r),de!==4&&(de=2)),!1;var a=Error(w(520),{cause:i});if(a=vt(a,n),Ga===null?Ga=[a]:Ga.push(a),de!==4&&(de=2),e===null)return!0;i=vt(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=vf(n.stateNode,i,t),tu(n,t),!1;case 1:if(e=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Wn===null||!Wn.has(a))))return n.flags|=65536,r&=-r,n.lanes|=r,r=rv(r),av(r,t,n,i),tu(n,r),!1}n=n.return}while(n!==null);return!1}var $h=Error(w(461)),we=!1;function Le(t,e,n,i){e.child=t===null?v_(e,null,n,i):zi(e,t.child,n,i)}function lm(t,e,n,i,r){n=n.render;var a=e.ref;if("ref"in i){var s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}else s=i;return Ui(e),i=jh(t,e,n,s,a,r),l=Hh(),t!==null&&!we?(Ph(t,e,r),yn(t,e,r)):(Y&&l&&Ih(e),e.flags|=1,Le(t,e,i,r),e.child)}function om(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!Oh(a)&&a.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=a,sv(t,e,a,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!Zh(t,r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:is,n(s,i)&&t.ref===e.ref)return yn(t,e,r)}return e.flags|=1,t=cn(a,i),t.ref=e.ref,t.return=e,e.child=t}function sv(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(is(a,i)&&t.ref===e.ref)if(we=!1,e.pendingProps=i=a,Zh(t,r))t.flags&131072&&(we=!0);else return e.lanes=t.lanes,yn(t,e,r)}return bf(t,e,n,i,r)}function lv(t,e,n,i){var r=i.children,a=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(a=a!==null?a.baseLanes|n:n,t!==null){for(i=e.child=t.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~a}else i=0,e.child=null;return cm(t,e,a,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ol(e,a!==null?a.cachePool:null),a!==null?$p(e,a):df(),S_(e);else return i=e.lanes=536870912,cm(t,e,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Ol(e,a.cachePool),$p(e,a),kn(),e.memoizedState=null):(t!==null&&Ol(e,null),df(),kn());return Le(t,e,r,n),e.child}function Ia(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function cm(t,e,n,i,r){var a=kh();return a=a===null?null:{parent:Se._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&Ol(e,null),df(),S_(e),t!==null&&Jr(t,e,i,!0),e.childLanes=r,null}function Ml(t,e){return e=oo({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function um(t,e,n){return zi(e,t.child,null,n),t=Ml(e,e.pendingProps),t.flags|=2,it(e),e.memoizedState=null,t}function oT(t,e,n){var i=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Y){if(i.mode==="hidden")return t=Ml(e,i),e.lanes=536870912,Ia(null,t);if(pf(e),(t=le)?(t=Jv(t,bt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:li!==null?{id:Bt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},n=h_(t),n.return=e,e.child=n,Be=e,le=null)):t=null,t===null)throw oi(e);return e.lanes=536870912,null}return Ml(e,i)}var a=t.memoizedState;if(a!==null){var s=a.dehydrated;if(pf(e),r)if(e.flags&256)e.flags&=-257,e=um(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(w(558));else if(we||Jr(t,e,n,!1),r=(n&t.childLanes)!==0,we||r){if(i=ne,i!==null&&(s=By(i,n),s!==0&&s!==a.retryLane))throw a.retryLane=s,Xi(t,s),Je(i,t,s),$h;ho(),e=um(t,e,n)}else t=a.treeContext,le=Tt(s.nextSibling),Be=e,Y=!0,Kn=null,bt=!1,t!==null&&p_(e,t),e=Ml(e,i),e.flags|=4096;return e}return t=cn(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function kl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(w(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function bf(t,e,n,i,r){return Ui(e),n=jh(t,e,n,i,void 0,r),i=Hh(),t!==null&&!we?(Ph(t,e,r),yn(t,e,r)):(Y&&i&&Ih(e),e.flags|=1,Le(t,e,n,r),e.child)}function fm(t,e,n,i,r,a){return Ui(e),e.updateQueue=null,n=T_(e,i,n,r),w_(t),i=Hh(),t!==null&&!we?(Ph(t,e,a),yn(t,e,a)):(Y&&i&&Ih(e),e.flags|=1,Le(t,e,n,a),e.child)}function hm(t,e,n,i,r){if(Ui(e),e.stateNode===null){var a=dr,s=n.contextType;typeof s=="object"&&s!==null&&(a=je(s)),a=new n(i,a),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=_f,e.stateNode=a,a._reactInternals=e,a=e.stateNode,a.props=i,a.state=e.memoizedState,a.refs={},Uh(e),s=n.contextType,a.context=typeof s=="object"&&s!==null?je(s):dr,a.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(iu(e,n,s,i),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&_f.enqueueReplaceState(a,a.state,null),Ha(e,i,a,r),ja(),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){a=e.stateNode;var l=e.memoizedProps,o=ji(n,l);a.props=o;var c=a.context,h=n.contextType;s=dr,typeof h=="object"&&h!==null&&(s=je(h));var f=n.getDerivedStateFromProps;h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function",l=e.pendingProps!==l,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l||c!==s)&&am(e,a,i,s),In=!1;var u=e.memoizedState;a.state=u,Ha(e,i,a,r),ja(),c=e.memoizedState,l||u!==c||In?(typeof f=="function"&&(iu(e,n,f,i),c=e.memoizedState),(o=In||rm(e,n,o,i,u,c,s))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=s,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ff(t,e),s=e.memoizedProps,h=ji(n,s),a.props=h,f=e.pendingProps,u=a.context,c=n.contextType,o=dr,typeof c=="object"&&c!==null&&(o=je(c)),l=n.getDerivedStateFromProps,(c=typeof l=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||u!==o)&&am(e,a,i,o),In=!1,u=e.memoizedState,a.state=u,Ha(e,i,a,r),ja();var p=e.memoizedState;s!==f||u!==p||In||t!==null&&t.dependencies!==null&&to(t.dependencies)?(typeof l=="function"&&(iu(e,n,l,i),p=e.memoizedState),(h=In||rm(e,n,h,i,u,p,o)||t!==null&&t.dependencies!==null&&to(t.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,o)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),a.props=i,a.state=p,a.context=o,i=h):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return a=i,kl(t,e),i=(e.flags&128)!==0,a||i?(a=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),e.flags|=1,t!==null&&i?(e.child=zi(e,t.child,null,r),e.child=zi(e,null,n,r)):Le(t,e,n,r),e.memoizedState=a.state,t=e.child):t=yn(t,e,r),t}function dm(t,e,n,i){return Li(),e.flags|=256,Le(t,e,n,i),e.child}var ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function au(t){return{baseLanes:t,cachePool:g_()}}function su(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=at),t}function ov(t,e,n){var i=e.pendingProps,r=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(ye.current&2)!==0),s&&(r=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Y){if(r?Mn(e):kn(),(t=le)?(t=Jv(t,bt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:li!==null?{id:Bt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},n=h_(t),n.return=e,e.child=n,Be=e,le=null)):t=null,t===null)throw oi(e);return kf(t)?e.lanes=32:e.lanes=536870912,null}var l=i.children;return i=i.fallback,r?(kn(),r=e.mode,l=oo({mode:"hidden",children:l},r),i=Ii(i,r,n,null),l.return=e,i.return=e,l.sibling=i,e.child=l,i=e.child,i.memoizedState=au(n),i.childLanes=su(t,s,n),e.memoizedState=ru,Ia(null,i)):(Mn(e),Ef(e,l))}var o=t.memoizedState;if(o!==null&&(l=o.dehydrated,l!==null)){if(a)e.flags&256?(Mn(e),e.flags&=-257,e=lu(t,e,n)):e.memoizedState!==null?(kn(),e.child=t.child,e.flags|=128,e=null):(kn(),l=i.fallback,r=e.mode,i=oo({mode:"visible",children:i.children},r),l=Ii(l,r,n,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,zi(e,t.child,null,n),i=e.child,i.memoizedState=au(n),i.childLanes=su(t,s,n),e.memoizedState=ru,e=Ia(null,i));else if(Mn(e),kf(l)){if(s=l.nextSibling&&l.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(w(419)),i.stack="",i.digest=s,as({value:i,source:null,stack:null}),e=lu(t,e,n)}else if(we||Jr(t,e,n,!1),s=(n&t.childLanes)!==0,we||s){if(s=ne,s!==null&&(i=By(s,n),i!==0&&i!==o.retryLane))throw o.retryLane=i,Xi(t,i),Je(s,t,i),$h;Mf(l)||ho(),e=lu(t,e,n)}else Mf(l)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,le=Tt(l.nextSibling),Be=e,Y=!0,Kn=null,bt=!1,t!==null&&p_(e,t),e=Ef(e,i.children),e.flags|=4096);return e}return r?(kn(),l=i.fallback,r=e.mode,o=t.child,c=o.sibling,i=cn(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&65011712,c!==null?l=cn(c,l):(l=Ii(l,r,n,null),l.flags|=2),l.return=e,i.return=e,i.sibling=l,e.child=i,Ia(null,i),i=e.child,l=t.child.memoizedState,l===null?l=au(n):(r=l.cachePool,r!==null?(o=Se._currentValue,r=r.parent!==o?{parent:o,pool:o}:r):r=g_(),l={baseLanes:l.baseLanes|n,cachePool:r}),i.memoizedState=l,i.childLanes=su(t,s,n),e.memoizedState=ru,Ia(t.child,i)):(Mn(e),n=t.child,t=n.sibling,n=cn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function Ef(t,e){return e=oo({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function oo(t,e){return t=rt(22,t,null,e),t.lanes=0,t}function lu(t,e,n){return zi(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),of(t.return,e,n)}function ou(t,e,n,i,r,a){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:a}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r,s.treeForkCount=a)}function cv(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;i=i.children;var s=ye.current,l=(s&2)!==0;if(l?(s=s&1|2,e.flags|=128):s&=1,ae(ye,s),Le(t,e,i,n),i=Y?rs:0,!l&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,n,e);else if(t.tag===19)pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ro(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ou(e,!1,r,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ro(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ou(e,!0,n,null,a,i);break;case"together":ou(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ui|=e.lanes,!(n&e.childLanes))if(t!==null){if(Jr(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zh(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&to(t)))}function cT(t,e,n){switch(e.tag){case 3:Ql(e,e.stateNode.containerInfo),Dn(e,Se,t.memoizedState.cache),Li();break;case 27:case 5:Qu(e);break;case 4:Ql(e,e.stateNode.containerInfo);break;case 10:Dn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,pf(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Mn(e),e.flags|=128,null):n&e.child.childLanes?ov(t,e,n):(Mn(e),t=yn(t,e,n),t!==null?t.sibling:null);Mn(e);break;case 19:var r=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Jr(t,e,n,!1),i=(n&e.childLanes)!==0),r){if(i)return cv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ae(ye,ye.current),i)break;return null;case 22:return e.lanes=0,lv(t,e,n,e.pendingProps);case 24:Dn(e,Se,t.memoizedState.cache)}return yn(t,e,n)}function uv(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)we=!0;else{if(!Zh(t,n)&&!(e.flags&128))return we=!1,cT(t,e,n);we=!!(t.flags&131072)}else we=!1,Y&&e.flags&1048576&&d_(e,rs,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Ti(e.elementType),e.type=t,typeof t=="function")Oh(t)?(i=ji(t,i),e.tag=1,e=hm(null,e,t,i,n)):(e.tag=0,e=bf(null,e,t,i,n));else{if(t!=null){var r=t.$$typeof;if(r===gh){e.tag=11,e=lm(null,e,t,i,n);break e}else if(r===yh){e.tag=14,e=om(null,e,t,i,n);break e}}throw e=Yu(t)||t,Error(w(306,e,""))}}return e;case 0:return bf(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,r=ji(i,e.pendingProps),hm(t,e,i,r,n);case 3:e:{if(Ql(e,e.stateNode.containerInfo),t===null)throw Error(w(387));i=e.pendingProps;var a=e.memoizedState;r=a.element,ff(t,e),Ha(e,i,null,n);var s=e.memoizedState;if(i=s.cache,Dn(e,Se,i),i!==a.cache&&cf(e,[Se],n,!0),ja(),i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){e=dm(t,e,i,n);break e}else if(i!==r){r=vt(Error(w(424)),e),as(r),e=dm(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(le=Tt(t.firstChild),Be=e,Y=!0,Kn=null,bt=!0,n=v_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Li(),i===r){e=yn(t,e,n);break e}Le(t,e,i,n)}e=e.child}return e;case 26:return kl(t,e),t===null?(n=km(e.type,null,e.pendingProps,null))?e.memoizedState=n:Y||(n=e.type,t=e.pendingProps,i=yo(Yn.current).createElement(n),i[ze]=e,i[et]=t,He(i,n,t),De(i),e.stateNode=i):e.memoizedState=km(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Qu(e),t===null&&Y&&(i=e.stateNode=e0(e.type,e.pendingProps,Yn.current),Be=e,bt=!0,r=le,yi(e.type)?(Lf=r,le=Tt(i.firstChild)):le=r),Le(t,e,e.pendingProps.children,n),kl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Y&&((r=i=le)&&(i=jT(i,e.type,e.pendingProps,bt),i!==null?(e.stateNode=i,Be=e,le=Tt(i.firstChild),bt=!1,r=!0):r=!1),r||oi(e)),Qu(e),r=e.type,a=e.pendingProps,s=t!==null?t.memoizedProps:null,i=a.children,If(r,a)?i=null:s!==null&&If(r,s)&&(e.flags|=32),e.memoizedState!==null&&(r=jh(t,e,eT,null,null,n),fs._currentValue=r),kl(t,e),Le(t,e,i,n),e.child;case 6:return t===null&&Y&&((t=n=le)&&(n=HT(n,e.pendingProps,bt),n!==null?(e.stateNode=n,Be=e,le=null,t=!0):t=!1),t||oi(e)),null;case 13:return ov(t,e,n);case 4:return Ql(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zi(e,null,i,n):Le(t,e,i,n),e.child;case 11:return lm(t,e,e.type,e.pendingProps,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Dn(e,e.type,i.value),Le(t,e,i.children,n),e.child;case 9:return r=e.type._context,i=e.pendingProps.children,Ui(e),r=je(r),i=i(r),e.flags|=1,Le(t,e,i,n),e.child;case 14:return om(t,e,e.type,e.pendingProps,n);case 15:return sv(t,e,e.type,e.pendingProps,n);case 19:return cv(t,e,n);case 31:return oT(t,e,n);case 22:return lv(t,e,n,e.pendingProps);case 24:return Ui(e),i=je(Se),t===null?(r=kh(),r===null&&(r=ne,a=Mh(),r.pooledCache=a,a.refCount++,a!==null&&(r.pooledCacheLanes|=n),r=a),e.memoizedState={parent:i,cache:r},Uh(e),Dn(e,Se,r)):(t.lanes&n&&(ff(t,e),Ha(e,null,null,n),ja()),r=t.memoizedState,a=e.memoizedState,r.parent!==i?(r={parent:i,cache:i},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Dn(e,Se,i)):(i=a.cache,Dn(e,Se,i),i!==r.cache&&cf(e,[Se],n,!0))),Le(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(w(156,e.tag))}function Xt(t){t.flags|=4}function cu(t,e,n,i,r){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;else if(kv())t.flags|=8192;else throw Mi=no,Lh}else t.flags&=-16777217}function mm(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!i0(e))if(kv())t.flags|=8192;else throw Mi=no,Lh}function ml(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ly():536870912,t.lanes|=e,zr|=e)}function _a(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function uT(t,e,n){var i=e.pendingProps;switch(Dh(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(e),null;case 1:return se(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),un(Se),Ir(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ji(e)?Xt(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,eu())),se(e),null;case 26:var r=e.type,a=e.memoizedState;return t===null?(Xt(e),a!==null?(se(e),mm(e,a)):(se(e),cu(e,r,null,i,n))):a?a!==t.memoizedState?(Xt(e),se(e),mm(e,a)):(se(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Xt(e),se(e),cu(e,r,t,i,n)),null;case 27:if(Xl(e),n=Yn.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Xt(e);else{if(!i){if(e.stateNode===null)throw Error(w(166));return se(e),null}t=Pt.current,Ji(e)?Gp(e):(t=e0(r,i,n),e.stateNode=t,Xt(e))}return se(e),null;case 5:if(Xl(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Xt(e);else{if(!i){if(e.stateNode===null)throw Error(w(166));return se(e),null}if(a=Pt.current,Ji(e))Gp(e);else{var s=yo(Yn.current);switch(a){case 1:a=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:a=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":a=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":a=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":a=s.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?s.createElement(r,{is:i.is}):s.createElement(r)}}a[ze]=e,a[et]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=a;e:switch(He(a,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Xt(e)}}return se(e),cu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Xt(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(w(166));if(t=Yn.current,Ji(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,r=Be,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}t[ze]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Wv(t.nodeValue,n)),t||oi(e,!0)}else t=yo(t).createTextNode(i),t[ze]=e,e.stateNode=t}return se(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Ji(e),n!==null){if(t===null){if(!i)throw Error(w(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(557));t[ze]=e}else Li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;se(e),t=!1}else n=eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(it(e),e):(it(e),null);if(e.flags&128)throw Error(w(558))}return se(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=Ji(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(w(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(w(317));r[ze]=e}else Li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;se(e),r=!1}else r=eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(it(e),e):(it(e),null)}return it(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==r&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),ml(e,e.updateQueue),se(e),null);case 4:return Ir(),t===null&&ad(e.stateNode.containerInfo),se(e),null;case 10:return un(e.type),se(e),null;case 19:if(Me(ye),i=e.memoizedState,i===null)return se(e),null;if(r=(e.flags&128)!==0,a=i.rendering,a===null)if(r)_a(i,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ro(t),a!==null){for(e.flags|=128,_a(i,!1),t=a.updateQueue,e.updateQueue=t,ml(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)f_(n,t),n=n.sibling;return ae(ye,ye.current&1|2),Y&&en(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&st()>uo&&(e.flags|=128,r=!0,_a(i,!1),e.lanes=4194304)}else{if(!r)if(t=ro(a),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,ml(e,t),_a(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Y)return se(e),null}else 2*st()-i.renderingStartTime>uo&&n!==536870912&&(e.flags|=128,r=!0,_a(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(t=i.last,t!==null?t.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=st(),t.sibling=null,n=ye.current,ae(ye,r?n&1|2:n&1),Y&&en(e,i.treeForkCount),t):(se(e),null);case 22:case 23:return it(e),zh(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(se(e),e.subtreeFlags&6&&(e.flags|=8192)):se(e),n=e.updateQueue,n!==null&&ml(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Me(Di),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),un(Se),se(e),null;case 25:return null;case 30:return null}throw Error(w(156,e.tag))}function fT(t,e){switch(Dh(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return un(Se),Ir(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Xl(e),null;case 31:if(e.memoizedState!==null){if(it(e),e.alternate===null)throw Error(w(340));Li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(it(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(ye),null;case 4:return Ir(),null;case 10:return un(e.type),null;case 22:case 23:return it(e),zh(),t!==null&&Me(Di),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return un(Se),null;case 25:return null;default:return null}}function fv(t,e){switch(Dh(e),e.tag){case 3:un(Se),Ir();break;case 26:case 27:case 5:Xl(e);break;case 4:Ir();break;case 31:e.memoizedState!==null&&it(e);break;case 13:it(e);break;case 19:Me(ye);break;case 10:un(e.type);break;case 22:case 23:it(e),zh(),t!==null&&Me(Di);break;case 24:un(Se)}}function Ls(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&t)===t){i=void 0;var a=n.create,s=n.inst;i=a(),s.destroy=i}n=n.next}while(n!==r)}}catch(l){$(e,e.return,l)}}function ci(t,e,n){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var a=r.next;i=a;do{if((i.tag&t)===t){var s=i.inst,l=s.destroy;if(l!==void 0){s.destroy=void 0,r=e;var o=n,c=l;try{c()}catch(h){$(r,o,h)}}}i=i.next}while(i!==a)}}catch(h){$(e,e.return,h)}}function hv(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{E_(e,n)}catch(i){$(t,t.return,i)}}}function dv(t,e,n){n.props=ji(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){$(t,e,i)}}function qa(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(r){$(t,e,r)}}function Ht(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){$(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){$(t,e,r)}else n.current=null}function pv(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){$(t,t.return,r)}}function uu(t,e,n){try{var i=t.stateNode;MT(i,t.type,n,e),i[et]=e}catch(r){$(t,t.return,r)}}function mv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&yi(t.type)||t.tag===4}function fu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&yi(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rn));else if(i!==4&&(i===27&&yi(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Sf(t,e,n),t=t.sibling;t!==null;)Sf(t,e,n),t=t.sibling}function co(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&yi(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(co(t,e,n),t=t.sibling;t!==null;)co(t,e,n),t=t.sibling}function gv(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);He(e,i,n),e[ze]=t,e[et]=n}catch(a){$(t,t.return,a)}}var tn=!1,Ee=!1,hu=!1,gm=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function hT(t,e){if(t=t.containerInfo,xf=Eo,t=i_(t),Rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,l=-1,o=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(l=s+r),f!==a||i!==0&&f.nodeType!==3||(o=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(l=s),u===a&&++h===i&&(o=s),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=l===-1||o===-1?null:{start:l,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Of={focusedElem:t,selectionRange:n},Eo=!1,Oe=e;Oe!==null;)if(e=Oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Oe=t;else for(;Oe!==null;){switch(e=Oe,a=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)r=t[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&a!==null){t=void 0,n=e,r=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var y=ji(n.type,r);t=i.getSnapshotBeforeUpdate(y,a),i.__reactInternalSnapshotBeforeUpdate=t}catch(b){$(n,n.return,b)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Df(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Df(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(w(163))}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}}function yv(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:$t(t,n),i&4&&Ls(5,n);break;case 1:if($t(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){$(n,n.return,s)}else{var r=ji(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){$(n,n.return,s)}}i&64&&hv(n),i&512&&qa(n,n.return);break;case 3:if($t(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{E_(t,e)}catch(s){$(n,n.return,s)}}break;case 27:e===null&&i&4&&gv(n);case 26:case 5:$t(t,n),e===null&&i&4&&pv(n),i&512&&qa(n,n.return);break;case 12:$t(t,n);break;case 31:$t(t,n),i&4&&bv(t,n);break;case 13:$t(t,n),i&4&&Ev(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=ET.bind(null,n),PT(t,n))));break;case 22:if(i=n.memoizedState!==null||tn,!i){e=e!==null&&e.memoizedState!==null||Ee,r=tn;var a=Ee;tn=i,(Ee=e)&&!a?Zt(t,n,(n.subtreeFlags&8772)!==0):$t(t,n),tn=r,Ee=a}break;case 30:break;default:$t(t,n)}}function _v(t){var e=t.alternate;e!==null&&(t.alternate=null,_v(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Eh(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ue=null,We=!1;function Wt(t,e,n){for(n=n.child;n!==null;)vv(t,e,n),n=n.sibling}function vv(t,e,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ns,n)}catch{}switch(n.tag){case 26:Ee||Ht(n,e),Wt(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ee||Ht(n,e);var i=ue,r=We;yi(n.type)&&(ue=n.stateNode,We=!1),Wt(t,e,n),Ya(n.stateNode),ue=i,We=r;break;case 5:Ee||Ht(n,e);case 6:if(i=ue,r=We,ue=null,Wt(t,e,n),ue=i,We=r,ue!==null)if(We)try{(ue.nodeType===9?ue.body:ue.nodeName==="HTML"?ue.ownerDocument.body:ue).removeChild(n.stateNode)}catch(a){$(n,e,a)}else try{ue.removeChild(n.stateNode)}catch(a){$(n,e,a)}break;case 18:ue!==null&&(We?(t=ue,xm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Pr(t)):xm(ue,n.stateNode));break;case 4:i=ue,r=We,ue=n.stateNode.containerInfo,We=!0,Wt(t,e,n),ue=i,We=r;break;case 0:case 11:case 14:case 15:ci(2,n,e),Ee||ci(4,n,e),Wt(t,e,n);break;case 1:Ee||(Ht(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&dv(n,e,i)),Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:Ee=(i=Ee)||n.memoizedState!==null,Wt(t,e,n),Ee=i;break;default:Wt(t,e,n)}}function bv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Pr(t)}catch(n){$(e,e.return,n)}}}function Ev(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pr(t)}catch(n){$(e,e.return,n)}}function dT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new gm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new gm),e;default:throw Error(w(435,t.tag))}}function gl(t,e){var n=dT(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var r=ST.bind(null,t,i);i.then(r,r)}})}function Qe(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],a=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 27:if(yi(l.type)){ue=l.stateNode,We=!1;break e}break;case 5:ue=l.stateNode,We=!1;break e;case 3:case 4:ue=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(ue===null)throw Error(w(160));vv(a,s,r),ue=null,We=!1,a=r.alternate,a!==null&&(a.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Sv(e,t),e=e.sibling}var xt=null;function Sv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qe(e,t),Xe(t),i&4&&(ci(3,t,t.return),Ls(3,t),ci(5,t,t.return));break;case 1:Qe(e,t),Xe(t),i&512&&(Ee||n===null||Ht(n,n.return)),i&64&&tn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=xt;if(Qe(e,t),Xe(t),i&512&&(Ee||n===null||Ht(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Is]||a[ze]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(i),r.head.insertBefore(a,r.querySelector("head > title"))),He(a,i,n),a[ze]=t,De(a),i=a;break e;case"link":var s=Um("link","href",r).get(i+(n.href||""));if(s){for(var l=0;l<s.length;l++)if(a=s[l],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(l,1);break t}}a=r.createElement(i),He(a,i,n),r.head.appendChild(a);break;case"meta":if(s=Um("meta","content",r).get(i+(n.content||""))){for(l=0;l<s.length;l++)if(a=s[l],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(l,1);break t}}a=r.createElement(i),He(a,i,n),r.head.appendChild(a);break;default:throw Error(w(468,i))}a[ze]=t,De(a),i=a}t.stateNode=i}else zm(r,t.type,t.stateNode);else t.stateNode=Lm(r,i,t.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?zm(r,t.type,t.stateNode):Lm(r,i,t.memoizedProps)):i===null&&t.stateNode!==null&&uu(t,t.memoizedProps,n.memoizedProps)}break;case 27:Qe(e,t),Xe(t),i&512&&(Ee||n===null||Ht(n,n.return)),n!==null&&i&4&&uu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Qe(e,t),Xe(t),i&512&&(Ee||n===null||Ht(n,n.return)),t.flags&32){r=t.stateNode;try{Mr(r,"")}catch(y){$(t,t.return,y)}}i&4&&t.stateNode!=null&&(r=t.memoizedProps,uu(t,r,n!==null?n.memoizedProps:r)),i&1024&&(hu=!0);break;case 6:if(Qe(e,t),Xe(t),i&4){if(t.stateNode===null)throw Error(w(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(y){$(t,t.return,y)}}break;case 3:if(zl=null,r=xt,xt=_o(e.containerInfo),Qe(e,t),xt=r,Xe(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(e.containerInfo)}catch(y){$(t,t.return,y)}hu&&(hu=!1,wv(t));break;case 4:i=xt,xt=_o(t.stateNode.containerInfo),Qe(e,t),Xe(t),xt=i;break;case 12:Qe(e,t),Xe(t);break;case 31:Qe(e,t),Xe(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,gl(t,i)));break;case 13:Qe(e,t),Xe(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(dc=st()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,gl(t,i)));break;case 22:r=t.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,c=tn,h=Ee;if(tn=c||r,Ee=h||o,Qe(e,t),Ee=h,tn=c,Xe(t),i&8192)e:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||o||tn||Ee||Ci(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){o=n=e;try{if(a=o.stateNode,r)s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{l=o.stateNode;var f=o.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null;l.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(y){$(o,o.return,y)}}}else if(e.tag===6){if(n===null){o=e;try{o.stateNode.nodeValue=r?"":o.memoizedProps}catch(y){$(o,o.return,y)}}}else if(e.tag===18){if(n===null){o=e;try{var p=o.stateNode;r?Om(p,!0):Om(o.stateNode,!1)}catch(y){$(o,o.return,y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,gl(t,n))));break;case 19:Qe(e,t),Xe(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,gl(t,i)));break;case 30:break;case 21:break;default:Qe(e,t),Xe(t)}}function Xe(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(mv(i)){n=i;break}i=i.return}if(n==null)throw Error(w(160));switch(n.tag){case 27:var r=n.stateNode,a=fu(t);co(t,a,r);break;case 5:var s=n.stateNode;n.flags&32&&(Mr(s,""),n.flags&=-33);var l=fu(t);co(t,l,s);break;case 3:case 4:var o=n.stateNode.containerInfo,c=fu(t);Sf(t,c,o);break;default:throw Error(w(161))}}catch(h){$(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;wv(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $t(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)yv(t,e.alternate,e),e=e.sibling}function Ci(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ci(4,e,e.return),Ci(e);break;case 1:Ht(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&dv(e,e.return,n),Ci(e);break;case 27:Ya(e.stateNode);case 26:case 5:Ht(e,e.return),Ci(e);break;case 22:e.memoizedState===null&&Ci(e);break;case 30:Ci(e);break;default:Ci(e)}t=t.sibling}}function Zt(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,r=t,a=e,s=a.flags;switch(a.tag){case 0:case 11:case 15:Zt(r,a,n),Ls(4,a);break;case 1:if(Zt(r,a,n),i=a,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(c){$(i,i.return,c)}if(i=a,r=i.updateQueue,r!==null){var l=i.stateNode;try{var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)b_(o[r],l)}catch(c){$(i,i.return,c)}}n&&s&64&&hv(a),qa(a,a.return);break;case 27:gv(a);case 26:case 5:Zt(r,a,n),n&&i===null&&s&4&&pv(a),qa(a,a.return);break;case 12:Zt(r,a,n);break;case 31:Zt(r,a,n),n&&s&4&&bv(r,a);break;case 13:Zt(r,a,n),n&&s&4&&Ev(r,a);break;case 22:a.memoizedState===null&&Zt(r,a,n),qa(a,a.return);break;case 30:break;default:Zt(r,a,n)}e=e.sibling}}function Jh(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Ms(n))}function ed(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ms(t))}function Nt(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tv(t,e,n,i),e=e.sibling}function Tv(t,e,n,i){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Nt(t,e,n,i),r&2048&&Ls(9,e);break;case 1:Nt(t,e,n,i);break;case 3:Nt(t,e,n,i),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ms(t)));break;case 12:if(r&2048){Nt(t,e,n,i),t=e.stateNode;try{var a=e.memoizedProps,s=a.id,l=a.onPostCommit;typeof l=="function"&&l(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){$(e,e.return,o)}}else Nt(t,e,n,i);break;case 31:Nt(t,e,n,i);break;case 13:Nt(t,e,n,i);break;case 23:break;case 22:a=e.stateNode,s=e.alternate,e.memoizedState!==null?a._visibility&2?Nt(t,e,n,i):Va(t,e):a._visibility&2?Nt(t,e,n,i):(a._visibility|=2,ir(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),r&2048&&Jh(s,e);break;case 24:Nt(t,e,n,i),r&2048&&ed(e.alternate,e);break;default:Nt(t,e,n,i)}}function ir(t,e,n,i,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var a=t,s=e,l=n,o=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:ir(a,s,l,o,r),Ls(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?ir(a,s,l,o,r):Va(a,s):(h._visibility|=2,ir(a,s,l,o,r)),r&&c&2048&&Jh(s.alternate,s);break;case 24:ir(a,s,l,o,r),r&&c&2048&&ed(s.alternate,s);break;default:ir(a,s,l,o,r)}e=e.sibling}}function Va(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,r=i.flags;switch(i.tag){case 22:Va(n,i),r&2048&&Jh(i.alternate,i);break;case 24:Va(n,i),r&2048&&ed(i.alternate,i);break;default:Va(n,i)}e=e.sibling}}var Da=8192;function er(t,e,n){if(t.subtreeFlags&Da)for(t=t.child;t!==null;)Cv(t,e,n),t=t.sibling}function Cv(t,e,n){switch(t.tag){case 26:er(t,e,n),t.flags&Da&&t.memoizedState!==null&&JT(n,xt,t.memoizedState,t.memoizedProps);break;case 5:er(t,e,n);break;case 3:case 4:var i=xt;xt=_o(t.stateNode.containerInfo),er(t,e,n),xt=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Da,Da=16777216,er(t,e,n),Da=i):er(t,e,n));break;default:er(t,e,n)}}function Av(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function va(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Oe=i,Nv(i,t)}Av(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rv(t),t=t.sibling}function Rv(t){switch(t.tag){case 0:case 11:case 15:va(t),t.flags&2048&&ci(9,t,t.return);break;case 3:va(t);break;case 12:va(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ll(t)):va(t);break;default:va(t)}}function Ll(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Oe=i,Nv(i,t)}Av(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ci(8,e,e.return),Ll(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(e));break;default:Ll(e)}t=t.sibling}}function Nv(t,e){for(;Oe!==null;){var n=Oe;switch(n.tag){case 0:case 11:case 15:ci(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ms(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Oe=i;else e:for(n=t;Oe!==null;){i=Oe;var r=i.sibling,a=i.return;if(_v(i),i===n){Oe=null;break e}if(r!==null){r.return=a,Oe=r;break e}Oe=a}}}var pT={getCacheForType:function(t){var e=je(Se),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return je(Se).controller.signal}},mT=typeof WeakMap=="function"?WeakMap:Map,Q=0,ne=null,V=null,F=0,W=0,nt=null,qn=!1,ta=!1,td=!1,_n=0,de=0,ui=0,ki=0,nd=0,at=0,zr=0,Ga=null,$e=null,wf=!1,dc=0,xv=0,uo=1/0,fo=null,Wn=null,Ce=0,$n=null,Br=null,fn=0,Tf=0,Cf=null,Ov=null,Fa=0,Af=null;function ct(){return Q&2&&F!==0?F&-F:M.T!==null?rd():jy()}function Iv(){if(at===0)if(!(F&536870912)||Y){var t=ol;ol<<=1,!(ol&3932160)&&(ol=262144),at=t}else at=536870912;return t=ft.current,t!==null&&(t.flags|=32),at}function Je(t,e,n){(t===ne&&(W===2||W===9)||t.cancelPendingCommit!==null)&&(jr(t,0),Vn(t,F,at,!1)),Os(t,n),(!(Q&2)||t!==ne)&&(t===ne&&(!(Q&2)&&(ki|=n),de===4&&Vn(t,F,at,!1)),Ft(t))}function Dv(t,e,n){if(Q&6)throw Error(w(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||xs(t,e),r=i?_T(t,e):du(t,e,!0),a=i;do{if(r===0){ta&&!i&&Vn(t,e,0,!1);break}else{if(n=t.current.alternate,a&&!gT(n)){r=du(t,e,!1),a=!1;continue}if(r===2){if(a=e,t.errorRecoveryDisabledLanes&a)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var l=t;r=Ga;var o=l.current.memoizedState.isDehydrated;if(o&&(jr(l,s).flags|=256),s=du(l,s,!1),s!==2){if(td&&!o){l.errorRecoveryDisabledLanes|=a,ki|=a,r=4;break e}a=$e,$e=r,a!==null&&($e===null?$e=a:$e.push.apply($e,a))}r=s}if(a=!1,r!==2)continue}}if(r===1){jr(t,0),Vn(t,e,0,!0);break}e:{switch(i=t,a=r,a){case 0:case 1:throw Error(w(345));case 4:if((e&4194048)!==e)break;case 6:Vn(i,e,at,!qn);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(w(329))}if((e&62914560)===e&&(r=dc+300-st(),10<r)){if(Vn(i,e,at,!qn),nc(i,0,!0)!==0)break e;fn=e,i.timeoutHandle=Zv(ym.bind(null,i,n,$e,fo,wf,e,at,ki,zr,qn,a,"Throttled",-0,0),r);break e}ym(i,n,$e,fo,wf,e,at,ki,zr,qn,a,null,-0,0)}}break}while(!0);Ft(t)}function ym(t,e,n,i,r,a,s,l,o,c,h,f,u,p){if(t.timeoutHandle=-1,f=e.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rn},Cv(e,a,f);var y=(a&62914560)===a?dc-st():(a&4194048)===a?xv-st():0;if(y=e1(f,y),y!==null){fn=a,t.cancelPendingCommit=y(vm.bind(null,t,e,a,n,i,r,s,l,o,h,f,null,u,p)),Vn(t,a,s,!c);return}}vm(t,e,a,n,i,r,s,l,o)}function gT(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!ut(a(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e,n,i){e&=~nd,e&=~ki,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var r=e;0<r;){var a=31-ot(r),s=1<<a;i[a]=-1,r&=~s}n!==0&&Uy(t,n,e)}function pc(){return Q&6?!0:(Us(0),!1)}function id(){if(V!==null){if(W===0)var t=V.return;else t=V,an=Wi=null,qh(t),wr=null,ss=0,t=V;for(;t!==null;)fv(t.alternate,t),t=t.return;V=null}}function jr(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,UT(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),fn=0,id(),ne=t,V=n=cn(t.current,null),F=e,W=0,nt=null,qn=!1,ta=xs(t,e),td=!1,zr=at=nd=ki=ui=de=0,$e=Ga=null,wf=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-ot(i),a=1<<r;e|=t[r],i&=~a}return _n=e,sc(),n}function Mv(t,e){z=null,M.H=os,e===ea||e===oc?(e=Xp(),W=3):e===Lh?(e=Xp(),W=4):W=e===$h?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,nt=e,V===null&&(de=1,lo(t,vt(e,t.current)))}function kv(){var t=ft.current;return t===null?!0:(F&4194048)===F?wt===null:(F&62914560)===F||F&536870912?t===wt:!1}function Lv(){var t=M.H;return M.H=os,t===null?os:t}function Uv(){var t=M.A;return M.A=pT,t}function ho(){de=4,qn||(F&4194048)!==F&&ft.current!==null||(ta=!0),!(ui&134217727)&&!(ki&134217727)||ne===null||Vn(ne,F,at,!1)}function du(t,e,n){var i=Q;Q|=2;var r=Lv(),a=Uv();(ne!==t||F!==e)&&(fo=null,jr(t,e)),e=!1;var s=de;e:do try{if(W!==0&&V!==null){var l=V,o=nt;switch(W){case 8:id(),s=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(e=!0);var c=W;if(W=0,nt=null,gr(t,l,o,c),n&&ta){s=0;break e}break;default:c=W,W=0,nt=null,gr(t,l,o,c)}}yT(),s=de;break}catch(h){Mv(t,h)}while(!0);return e&&t.shellSuspendCounter++,an=Wi=null,Q=i,M.H=r,M.A=a,V===null&&(ne=null,F=0,sc()),s}function yT(){for(;V!==null;)zv(V)}function _T(t,e){var n=Q;Q|=2;var i=Lv(),r=Uv();ne!==t||F!==e?(fo=null,uo=st()+500,jr(t,e)):ta=xs(t,e);e:do try{if(W!==0&&V!==null){e=V;var a=nt;t:switch(W){case 1:W=0,nt=null,gr(t,e,a,1);break;case 2:case 9:if(Qp(a)){W=0,nt=null,_m(e);break}e=function(){W!==2&&W!==9||ne!==t||(W=7),Ft(t)},a.then(e,e);break e;case 3:W=7;break e;case 4:W=5;break e;case 7:Qp(a)?(W=0,nt=null,_m(e)):(W=0,nt=null,gr(t,e,a,7));break;case 5:var s=null;switch(V.tag){case 26:s=V.memoizedState;case 5:case 27:var l=V;if(s?i0(s):l.stateNode.complete){W=0,nt=null;var o=l.sibling;if(o!==null)V=o;else{var c=l.return;c!==null?(V=c,mc(c)):V=null}break t}}W=0,nt=null,gr(t,e,a,5);break;case 6:W=0,nt=null,gr(t,e,a,6);break;case 8:id(),de=6;break e;default:throw Error(w(462))}}vT();break}catch(h){Mv(t,h)}while(!0);return an=Wi=null,M.H=i,M.A=r,Q=n,V!==null?0:(ne=null,F=0,sc(),de)}function vT(){for(;V!==null&&!qS();)zv(V)}function zv(t){var e=uv(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?mc(t):V=e}function _m(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=fm(n,e,e.pendingProps,e.type,void 0,F);break;case 11:e=fm(n,e,e.pendingProps,e.type.render,e.ref,F);break;case 5:qh(e);default:fv(n,e),e=V=f_(e,_n),e=uv(n,e,_n)}t.memoizedProps=t.pendingProps,e===null?mc(t):V=e}function gr(t,e,n,i){an=Wi=null,qh(e),wr=null,ss=0;var r=e.return;try{if(lT(t,r,e,n,F)){de=1,lo(t,vt(n,t.current)),V=null;return}}catch(a){if(r!==null)throw V=r,a;de=1,lo(t,vt(n,t.current)),V=null;return}e.flags&32768?(Y||i===1?t=!0:ta||F&536870912?t=!1:(qn=t=!0,(i===2||i===9||i===3||i===6)&&(i=ft.current,i!==null&&i.tag===13&&(i.flags|=16384))),Bv(e,t)):mc(e)}function mc(t){var e=t;do{if(e.flags&32768){Bv(e,qn);return}t=e.return;var n=uT(e.alternate,e,_n);if(n!==null){V=n;return}if(e=e.sibling,e!==null){V=e;return}V=e=t}while(e!==null);de===0&&(de=5)}function Bv(t,e){do{var n=fT(t.alternate,t);if(n!==null){n.flags&=32767,V=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){V=t;return}V=t=n}while(t!==null);de=6,V=null}function vm(t,e,n,i,r,a,s,l,o){t.cancelPendingCommit=null;do gc();while(Ce!==0);if(Q&6)throw Error(w(327));if(e!==null){if(e===t.current)throw Error(w(177));if(a=e.lanes|e.childLanes,a|=Nh,ZS(t,n,a,s,l,o),t===ne&&(V=ne=null,F=0),Br=e,$n=t,fn=n,Tf=a,Cf=r,Ov=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,wT(Wl,function(){return Vv(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=M.T,M.T=null,r=X.p,X.p=2,s=Q,Q|=4;try{hT(t,e,n)}finally{Q=s,X.p=r,M.T=i}}Ce=1,jv(),Hv(),Pv()}}function jv(){if(Ce===1){Ce=0;var t=$n,e=Br,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=M.T,M.T=null;var i=X.p;X.p=2;var r=Q;Q|=4;try{Sv(e,t);var a=Of,s=i_(t.containerInfo),l=a.focusedElem,o=a.selectionRange;if(s!==l&&l&&l.ownerDocument&&n_(l.ownerDocument.documentElement,l)){if(o!==null&&Rh(l)){var c=o.start,h=o.end;if(h===void 0&&(h=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(h,l.value.length);else{var f=l.ownerDocument||document,u=f&&f.defaultView||window;if(u.getSelection){var p=u.getSelection(),y=l.textContent.length,b=Math.min(o.start,y),S=o.end===void 0?b:Math.min(o.end,y);!p.extend&&b>S&&(s=S,S=b,b=s);var m=Pp(l,b),d=Pp(l,S);if(m&&d&&(p.rangeCount!==1||p.anchorNode!==m.node||p.anchorOffset!==m.offset||p.focusNode!==d.node||p.focusOffset!==d.offset)){var g=f.createRange();g.setStart(m.node,m.offset),p.removeAllRanges(),b>S?(p.addRange(g),p.extend(d.node,d.offset)):(g.setEnd(d.node,d.offset),p.addRange(g))}}}}for(f=[],p=l;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<f.length;l++){var v=f[l];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Eo=!!xf,Of=xf=null}finally{Q=r,X.p=i,M.T=n}}t.current=e,Ce=2}}function Hv(){if(Ce===2){Ce=0;var t=$n,e=Br,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=M.T,M.T=null;var i=X.p;X.p=2;var r=Q;Q|=4;try{yv(t,e.alternate,e)}finally{Q=r,X.p=i,M.T=n}}Ce=3}}function Pv(){if(Ce===4||Ce===3){Ce=0,VS();var t=$n,e=Br,n=fn,i=Ov;e.subtreeFlags&10256||e.flags&10256?Ce=5:(Ce=0,Br=$n=null,qv(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(Wn=null),bh(n),e=e.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ns,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=M.T,r=X.p,X.p=2,M.T=null;try{for(var a=t.onRecoverableError,s=0;s<i.length;s++){var l=i[s];a(l.value,{componentStack:l.stack})}}finally{M.T=e,X.p=r}}fn&3&&gc(),Ft(t),r=t.pendingLanes,n&261930&&r&42?t===Af?Fa++:(Fa=0,Af=t):Fa=0,Us(0)}}function qv(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ms(e)))}function gc(){return jv(),Hv(),Pv(),Vv()}function Vv(){if(Ce!==5)return!1;var t=$n,e=Tf;Tf=0;var n=bh(fn),i=M.T,r=X.p;try{X.p=32>n?32:n,M.T=null,n=Cf,Cf=null;var a=$n,s=fn;if(Ce=0,Br=$n=null,fn=0,Q&6)throw Error(w(331));var l=Q;if(Q|=4,Rv(a.current),Tv(a,a.current,s,n),Q=l,Us(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ns,a)}catch{}return!0}finally{X.p=r,M.T=i,qv(t,e)}}function bm(t,e,n){e=vt(n,e),e=vf(t.stateNode,e,2),t=Xn(t,e,2),t!==null&&(Os(t,2),Ft(t))}function $(t,e,n){if(t.tag===3)bm(t,t,n);else for(;e!==null;){if(e.tag===3){bm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wn===null||!Wn.has(i))){t=vt(n,t),n=rv(2),i=Xn(e,n,2),i!==null&&(av(n,i,e,t),Os(i,2),Ft(i));break}}e=e.return}}function pu(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new mT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(td=!0,r.add(n),t=bT.bind(null,t,e,n),e.then(t,t))}function bT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,ne===t&&(F&n)===n&&(de===4||de===3&&(F&62914560)===F&&300>st()-dc?!(Q&2)&&jr(t,0):nd|=n,zr===F&&(zr=0)),Ft(t)}function Gv(t,e){e===0&&(e=Ly()),t=Xi(t,e),t!==null&&(Os(t,e),Ft(t))}function ET(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gv(t,n)}function ST(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(w(314))}i!==null&&i.delete(e),Gv(t,n)}function wT(t,e){return _h(t,e)}var po=null,rr=null,Rf=!1,mo=!1,mu=!1,Gn=0;function Ft(t){t!==rr&&t.next===null&&(rr===null?po=rr=t:rr=rr.next=t),mo=!0,Rf||(Rf=!0,CT())}function Us(t,e){if(!mu&&mo){mu=!0;do for(var n=!1,i=po;i!==null;){if(t!==0){var r=i.pendingLanes;if(r===0)var a=0;else{var s=i.suspendedLanes,l=i.pingedLanes;a=(1<<31-ot(42|t)+1)-1,a&=r&~(s&~l),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Em(i,a))}else a=F,a=nc(i,i===ne?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(a&3)||xs(i,a)||(n=!0,Em(i,a));i=i.next}while(n);mu=!1}}function TT(){Fv()}function Fv(){mo=Rf=!1;var t=0;Gn!==0&&LT()&&(t=Gn);for(var e=st(),n=null,i=po;i!==null;){var r=i.next,a=Yv(i,e);a===0?(i.next=null,n===null?po=r:n.next=r,r===null&&(rr=n)):(n=i,(t!==0||a&3)&&(mo=!0)),i=r}Ce!==0&&Ce!==5||Us(t),Gn!==0&&(Gn=0)}function Yv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes&-62914561;0<a;){var s=31-ot(a),l=1<<s,o=r[s];o===-1?(!(l&n)||l&i)&&(r[s]=$S(l,e)):o<=e&&(t.expiredLanes|=l),a&=~l}if(e=ne,n=F,n=nc(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(W===2||W===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Vc(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||xs(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Vc(i),bh(n)){case 2:case 8:n=My;break;case 32:n=Wl;break;case 268435456:n=ky;break;default:n=Wl}return i=Kv.bind(null,t),n=_h(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Vc(i),t.callbackPriority=2,t.callbackNode=null,2}function Kv(t,e){if(Ce!==0&&Ce!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(gc()&&t.callbackNode!==n)return null;var i=F;return i=nc(t,t===ne?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Dv(t,i,e),Yv(t,st()),t.callbackNode!=null&&t.callbackNode===n?Kv.bind(null,t):null)}function Em(t,e){if(gc())return null;Dv(t,e,!0)}function CT(){zT(function(){Q&6?_h(Dy,TT):Fv()})}function rd(){if(Gn===0){var t=kr;t===0&&(t=ll,ll<<=1,!(ll&261888)&&(ll=256)),Gn=t}return Gn}function Sm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Al(""+t)}function wm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function AT(t,e,n,i,r){if(e==="submit"&&n&&n.stateNode===r){var a=Sm((r[et]||null).action),s=i.submitter;s&&(e=(e=s[et]||null)?Sm(e.formAction):s.getAttribute("formAction"),e!==null&&(a=e,s=null));var l=new ic("action","action",null,i,r);t.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Gn!==0){var o=s?wm(r,s):new FormData(r);yf(n,{pending:!0,data:o,method:r.method,action:a},null,o)}}else typeof a=="function"&&(l.preventDefault(),o=s?wm(r,s):new FormData(r),yf(n,{pending:!0,data:o,method:r.method,action:a},a,o))},currentTarget:r}]})}}for(var gu=0;gu<af.length;gu++){var yu=af[gu],RT=yu.toLowerCase(),NT=yu[0].toUpperCase()+yu.slice(1);Ut(RT,"on"+NT)}Ut(a_,"onAnimationEnd");Ut(s_,"onAnimationIteration");Ut(l_,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(Gw,"onTransitionRun");Ut(Fw,"onTransitionStart");Ut(Yw,"onTransitionCancel");Ut(o_,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cs));function Qv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var l=i[s],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==a&&r.isPropagationStopped())break e;a=l,r.currentTarget=c;try{a(r)}catch(h){Zl(h)}r.currentTarget=null,a=o}else for(s=0;s<i.length;s++){if(l=i[s],o=l.instance,c=l.currentTarget,l=l.listener,o!==a&&r.isPropagationStopped())break e;a=l,r.currentTarget=c;try{a(r)}catch(h){Zl(h)}r.currentTarget=null,a=o}}}}function q(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var i=t+"__bubble";n.has(i)||(Xv(e,t,2,!1),n.add(i))}function _u(t,e,n){var i=0;e&&(i|=4),Xv(n,t,i,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function ad(t){if(!t[yl]){t[yl]=!0,Hy.forEach(function(n){n!=="selectionchange"&&(xT.has(n)||_u(n,!1,t),_u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,_u("selectionchange",!1,e))}}function Xv(t,e,n,i){switch(o0(e)){case 2:var r=i1;break;case 8:r=r1;break;default:r=cd}n=r.bind(null,e,n,t),r=void 0,!tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function vu(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var l=i.stateNode.containerInfo;if(l===r)break;if(s===4)for(s=i.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===r)return;s=s.return}for(;l!==null;){if(s=lr(l),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){i=a=s;continue e}l=l.parentNode}}i=i.return}Qy(function(){var c=a,h=wh(n),f=[];e:{var u=c_.get(t);if(u!==void 0){var p=ic,y=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":p=Sw;break;case"focusin":y="focus",p=Qc;break;case"focusout":y="blur",p=Qc;break;case"beforeblur":case"afterblur":p=Qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Cw;break;case a_:case s_:case l_:p=dw;break;case o_:p=Rw;break;case"scroll":case"scrollend":p=ow;break;case"wheel":p=xw;break;case"copy":case"cut":case"paste":p=mw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mp;break;case"toggle":case"beforetoggle":p=Iw}var b=(e&4)!==0,S=!b&&(t==="scroll"||t==="scrollend"),m=b?u!==null?u+"Capture":null:u;b=[];for(var d=c,g;d!==null;){var v=d;if(g=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||g===null||m===null||(v=ts(d,m),v!=null&&b.push(us(d,v,g))),S)break;d=d.return}0<b.length&&(u=new p(u,y,null,n,h),f.push({event:u,listeners:b}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==ef&&(y=n.relatedTarget||n.fromElement)&&(lr(y)||y[$r]))break e;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?lr(y):null,y!==null&&(S=Rs(y),b=y.tag,y!==S||b!==5&&b!==27&&b!==6)&&(y=null)):(p=null,y=c),p!==y)){if(b=Ip,v="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(b=Mp,v="onPointerLeave",m="onPointerEnter",d="pointer"),S=p==null?u:Oa(p),g=y==null?u:Oa(y),u=new b(v,d+"leave",p,n,h),u.target=S,u.relatedTarget=g,v=null,lr(h)===c&&(b=new b(m,d+"enter",y,n,h),b.target=g,b.relatedTarget=S,v=b),S=v,p&&y)t:{for(b=OT,m=p,d=y,g=0,v=m;v;v=b(v))g++;v=0;for(var C=d;C;C=b(C))v++;for(;0<g-v;)m=b(m),g--;for(;0<v-g;)d=b(d),v--;for(;g--;){if(m===d||d!==null&&m===d.alternate){b=m;break t}m=b(m),d=b(d)}b=null}else b=null;p!==null&&Tm(f,u,p,b,!1),y!==null&&S!==null&&Tm(f,S,y,b,!0)}}e:{if(u=c?Oa(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var I=zp;else if(Up(u))if(e_)I=Pw;else{I=jw;var A=Bw}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Sh(c.elementType)&&(I=zp):I=Hw;if(I&&(I=I(t,c))){Jy(f,I,n,h);break e}A&&A(t,u,c),t==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Ju(u,"number",u.value)}switch(A=c?Oa(c):window,t){case"focusin":(Up(A)||A.contentEditable==="true")&&(ur=A,nf=c,Ua=null);break;case"focusout":Ua=nf=ur=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,qp(f,n,h);break;case"selectionchange":if(Vw)break;case"keydown":case"keyup":qp(f,n,h)}var N;if(Ah)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else cr?$y(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Wy&&n.locale!=="ko"&&(cr||D!=="onCompositionStart"?D==="onCompositionEnd"&&cr&&(N=Xy()):(Pn=h,Th="value"in Pn?Pn.value:Pn.textContent,cr=!0)),A=go(c,D),0<A.length&&(D=new Dp(D,t,null,n,h),f.push({event:D,listeners:A}),N?D.data=N:(N=Zy(n),N!==null&&(D.data=N)))),(N=Mw?kw(t,n):Lw(t,n))&&(D=go(c,"onBeforeInput"),0<D.length&&(A=new Dp("onBeforeInput","beforeinput",null,n,h),f.push({event:A,listeners:D}),A.data=N)),AT(f,t,c,n,h)}Qv(f,e)})}function us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function go(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||a===null||(r=ts(t,n),r!=null&&i.unshift(us(t,r,a)),r=ts(t,e),r!=null&&i.push(us(t,r,a))),t.tag===3)return i;t=t.return}return[]}function OT(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tm(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var l=n,o=l.alternate,c=l.stateNode;if(l=l.tag,o!==null&&o===i)break;l!==5&&l!==26&&l!==27||c===null||(o=c,r?(c=ts(n,a),c!=null&&s.unshift(us(n,c,o))):r||(c=ts(n,a),c!=null&&s.push(us(n,c,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var IT=/\r\n?/g,DT=/\u0000|\uFFFD/g;function Cm(t){return(typeof t=="string"?t:""+t).replace(IT,`
`).replace(DT,"")}function Wv(t,e){return e=Cm(e),Cm(t)===e}function Z(t,e,n,i,r,a){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Mr(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Mr(t,""+i);break;case"className":ul(t,"class",i);break;case"tabIndex":ul(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ul(t,n,i);break;case"style":Ky(t,i,a);break;case"data":if(e!=="object"){ul(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Al(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(e!=="input"&&Z(t,e,"name",r.name,r,null),Z(t,e,"formEncType",r.formEncType,r,null),Z(t,e,"formMethod",r.formMethod,r,null),Z(t,e,"formTarget",r.formTarget,r,null)):(Z(t,e,"encType",r.encType,r,null),Z(t,e,"method",r.method,r,null),Z(t,e,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Al(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=rn);break;case"onScroll":i!=null&&q("scroll",t);break;case"onScrollEnd":i!=null&&q("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(w(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(w(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Al(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":q("beforetoggle",t),q("toggle",t),Cl(t,"popover",i);break;case"xlinkActuate":Qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Qt(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Qt(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Qt(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Qt(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Cl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=sw.get(n)||n,Cl(t,n,i))}}function Nf(t,e,n,i,r,a){switch(n){case"style":Ky(t,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(w(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(w(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Mr(t,i):(typeof i=="number"||typeof i=="bigint")&&Mr(t,""+i);break;case"onScroll":i!=null&&q("scroll",t);break;case"onScrollEnd":i!=null&&q("scrollend",t);break;case"onClick":i!=null&&(t.onclick=rn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Py.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),a=t[et]||null,a=a!=null?a[n]:null,typeof a=="function"&&t.removeEventListener(e,a,r),typeof i=="function")){typeof a!="function"&&a!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,r);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Cl(t,n,i)}}}function He(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",t),q("load",t);var i=!1,r=!1,a;for(a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s!=null)switch(a){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:Z(t,e,a,s,n,null)}}r&&Z(t,e,"srcSet",n.srcSet,n,null),i&&Z(t,e,"src",n.src,n,null);return;case"input":q("invalid",t);var l=a=s=r=null,o=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":r=h;break;case"type":s=h;break;case"checked":o=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(w(137,e));break;default:Z(t,e,i,h,n,null)}}Gy(t,a,l,o,c,s,r,!1);return;case"select":q("invalid",t),i=s=a=null;for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"value":a=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Z(t,e,r,l,n,null)}e=a,n=s,t.multiple=!!i,e!=null?br(t,!!i,e,!1):n!=null&&br(t,!!i,n,!0);return;case"textarea":q("invalid",t),a=r=i=null;for(s in n)if(n.hasOwnProperty(s)&&(l=n[s],l!=null))switch(s){case"value":i=l;break;case"defaultValue":r=l;break;case"children":a=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(w(91));break;default:Z(t,e,s,l,n,null)}Yy(t,i,r,a);return;case"option":for(o in n)if(n.hasOwnProperty(o)&&(i=n[o],i!=null))switch(o){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Z(t,e,o,i,n,null)}return;case"dialog":q("beforetoggle",t),q("toggle",t),q("cancel",t),q("close",t);break;case"iframe":case"object":q("load",t);break;case"video":case"audio":for(i=0;i<cs.length;i++)q(cs[i],t);break;case"image":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"embed":case"source":case"link":q("error",t),q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:Z(t,e,c,i,n,null)}return;default:if(Sh(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Nf(t,e,h,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&Z(t,e,l,i,n,null))}function MT(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,s=null,l=null,o=null,c=null,h=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=f;default:i.hasOwnProperty(p)||Z(t,e,p,null,i,f)}}for(var u in i){var p=i[u];if(f=n[u],i.hasOwnProperty(u)&&(p!=null||f!=null))switch(u){case"type":a=p;break;case"name":r=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(w(137,e));break;default:p!==f&&Z(t,e,u,p,i,f)}}Zu(t,s,l,o,c,h,a,r);return;case"select":p=s=l=u=null;for(a in n)if(o=n[a],n.hasOwnProperty(a)&&o!=null)switch(a){case"value":break;case"multiple":p=o;default:i.hasOwnProperty(a)||Z(t,e,a,null,i,o)}for(r in i)if(a=i[r],o=n[r],i.hasOwnProperty(r)&&(a!=null||o!=null))switch(r){case"value":u=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==o&&Z(t,e,r,a,i,o)}e=l,n=s,i=p,u!=null?br(t,!!n,u,!1):!!i!=!!n&&(e!=null?br(t,!!n,e,!0):br(t,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(l in n)if(r=n[l],n.hasOwnProperty(l)&&r!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:Z(t,e,l,null,i,r)}for(s in i)if(r=i[s],a=n[s],i.hasOwnProperty(s)&&(r!=null||a!=null))switch(s){case"value":u=r;break;case"defaultValue":p=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(w(91));break;default:r!==a&&Z(t,e,s,r,i,a)}Fy(t,u,p);return;case"option":for(var y in n)if(u=n[y],n.hasOwnProperty(y)&&u!=null&&!i.hasOwnProperty(y))switch(y){case"selected":t.selected=!1;break;default:Z(t,e,y,null,i,u)}for(o in i)if(u=i[o],p=n[o],i.hasOwnProperty(o)&&u!==p&&(u!=null||p!=null))switch(o){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Z(t,e,o,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&Z(t,e,b,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(w(137,e));break;default:Z(t,e,c,u,i,p)}return;default:if(Sh(e)){for(var S in n)u=n[S],n.hasOwnProperty(S)&&u!==void 0&&!i.hasOwnProperty(S)&&Nf(t,e,S,void 0,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u===void 0&&p===void 0||Nf(t,e,h,u,i,p);return}}for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!=null&&!i.hasOwnProperty(m)&&Z(t,e,m,null,i,u);for(f in i)u=i[f],p=n[f],!i.hasOwnProperty(f)||u===p||u==null&&p==null||Z(t,e,f,u,i,p)}function Am(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],a=r.transferSize,s=r.initiatorType,l=r.duration;if(a&&l&&Am(s)){for(s=0,l=r.responseEnd,i+=1;i<n.length;i++){var o=n[i],c=o.startTime;if(c>l)break;var h=o.transferSize,f=o.initiatorType;h&&Am(f)&&(o=o.responseEnd,s+=h*(o<l?1:(l-c)/(o-c)))}if(--i,e+=8*(a+s)/(r.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xf=null,Of=null;function yo(t){return t.nodeType===9?t:t.ownerDocument}function Rm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $v(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bu=null;function LT(){var t=window.event;return t&&t.type==="popstate"?t===bu?!1:(bu=t,!0):(bu=null,!1)}var Zv=typeof setTimeout=="function"?setTimeout:void 0,UT=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,zT=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(BT)}:Zv;function BT(t){setTimeout(function(){throw t})}function yi(t){return t==="head"}function xm(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(r),Pr(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ya(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Ya(n);for(var a=n.firstChild;a;){var s=a.nextSibling,l=a.nodeName;a[Is]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=s}}else n==="body"&&Ya(t.ownerDocument.body);n=r}while(n);Pr(e)}function Om(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Df(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Df(n),Eh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function jT(t,e,n,i){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Is])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(a=t.getAttribute("rel"),a==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(a!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(a=t.getAttribute("src"),(a!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&a&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var a=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===a)return t}else return t;if(t=Tt(t.nextSibling),t===null)break}return null}function HT(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Tt(t.nextSibling),t===null))return null;return t}function Jv(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Tt(t.nextSibling),t===null))return null;return t}function Mf(t){return t.data==="$?"||t.data==="$~"}function kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function PT(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Tt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Lf=null;function Im(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Tt(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function e0(t,e,n){switch(e=yo(n),t){case"html":if(t=e.documentElement,!t)throw Error(w(452));return t;case"head":if(t=e.head,!t)throw Error(w(453));return t;case"body":if(t=e.body,!t)throw Error(w(454));return t;default:throw Error(w(451))}}function Ya(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Eh(t)}var Ct=new Map,Mm=new Set;function _o(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Tn=X.d;X.d={f:qT,r:VT,D:GT,C:FT,L:YT,m:KT,X:XT,S:QT,M:WT};function qT(){var t=Tn.f(),e=pc();return t||e}function VT(t){var e=Zr(t);e!==null&&e.tag===5&&e.type==="form"?K_(e):Tn.r(t)}var na=typeof document>"u"?null:document;function t0(t,e,n){var i=na;if(i&&typeof e=="string"&&e){var r=_t(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Mm.has(r)||(Mm.add(r),t={rel:t,crossOrigin:n,href:e},i.querySelector(r)===null&&(e=i.createElement("link"),He(e,"link",t),De(e),i.head.appendChild(e)))}}function GT(t){Tn.D(t),t0("dns-prefetch",t,null)}function FT(t,e){Tn.C(t,e),t0("preconnect",t,e)}function YT(t,e,n){Tn.L(t,e,n);var i=na;if(i&&t&&e){var r='link[rel="preload"][as="'+_t(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+_t(n.imageSizes)+'"]')):r+='[href="'+_t(t)+'"]';var a=r;switch(e){case"style":a=Hr(t);break;case"script":a=ia(t)}Ct.has(a)||(t=ce({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ct.set(a,t),i.querySelector(r)!==null||e==="style"&&i.querySelector(zs(a))||e==="script"&&i.querySelector(Bs(a))||(e=i.createElement("link"),He(e,"link",t),De(e),i.head.appendChild(e)))}}function KT(t,e){Tn.m(t,e);var n=na;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+_t(i)+'"][href="'+_t(t)+'"]',a=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=ia(t)}if(!Ct.has(a)&&(t=ce({rel:"modulepreload",href:t},e),Ct.set(a,t),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bs(a)))return}i=n.createElement("link"),He(i,"link",t),De(i),n.head.appendChild(i)}}}function QT(t,e,n){Tn.S(t,e,n);var i=na;if(i&&t){var r=vr(i).hoistableStyles,a=Hr(t);e=e||"default";var s=r.get(a);if(!s){var l={loading:0,preload:null};if(s=i.querySelector(zs(a)))l.loading=5;else{t=ce({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ct.get(a))&&sd(t,n);var o=s=i.createElement("link");De(o),He(o,"link",t),o._p=new Promise(function(c,h){o.onload=c,o.onerror=h}),o.addEventListener("load",function(){l.loading|=1}),o.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ul(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:l},r.set(a,s)}}}function XT(t,e){Tn.X(t,e);var n=na;if(n&&t){var i=vr(n).hoistableScripts,r=ia(t),a=i.get(r);a||(a=n.querySelector(Bs(r)),a||(t=ce({src:t,async:!0},e),(e=Ct.get(r))&&ld(t,e),a=n.createElement("script"),De(a),He(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}}function WT(t,e){Tn.M(t,e);var n=na;if(n&&t){var i=vr(n).hoistableScripts,r=ia(t),a=i.get(r);a||(a=n.querySelector(Bs(r)),a||(t=ce({src:t,async:!0,type:"module"},e),(e=Ct.get(r))&&ld(t,e),a=n.createElement("script"),De(a),He(a,"link",t),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}}function km(t,e,n,i){var r=(r=Yn.current)?_o(r):null;if(!r)throw Error(w(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Hr(n.href),n=vr(r).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Hr(n.href);var a=vr(r).hoistableStyles,s=a.get(t);if(s||(r=r.ownerDocument||r,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(t,s),(a=r.querySelector(zs(t)))&&!a._p&&(s.instance=a,s.state.loading=5),Ct.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ct.set(t,n),a||$T(r,t,n,s.state))),e&&i===null)throw Error(w(528,""));return s}if(e&&i!==null)throw Error(w(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ia(n),n=vr(r).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(w(444,t))}}function Hr(t){return'href="'+_t(t)+'"'}function zs(t){return'link[rel="stylesheet"]['+t+"]"}function n0(t){return ce({},t,{"data-precedence":t.precedence,precedence:null})}function $T(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),He(e,"link",n),De(e),t.head.appendChild(e))}function ia(t){return'[src="'+_t(t)+'"]'}function Bs(t){return"script[async]"+t}function Lm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+_t(n.href)+'"]');if(i)return e.instance=i,De(i),i;var r=ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),De(i),He(i,"style",r),Ul(i,n.precedence,t),e.instance=i;case"stylesheet":r=Hr(n.href);var a=t.querySelector(zs(r));if(a)return e.state.loading|=4,e.instance=a,De(a),a;i=n0(n),(r=Ct.get(r))&&sd(i,r),a=(t.ownerDocument||t).createElement("link"),De(a);var s=a;return s._p=new Promise(function(l,o){s.onload=l,s.onerror=o}),He(a,"link",i),e.state.loading|=4,Ul(a,n.precedence,t),e.instance=a;case"script":return a=ia(n.src),(r=t.querySelector(Bs(a)))?(e.instance=r,De(r),r):(i=n,(r=Ct.get(a))&&(i=ce({},n),ld(i,r)),t=t.ownerDocument||t,r=t.createElement("script"),De(r),He(r,"link",i),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(w(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Ul(i,n.precedence,t));return e.instance}function Ul(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,a=r,s=0;s<i.length;s++){var l=i[s];if(l.dataset.precedence===e)a=l;else if(a!==r)break}a?a.parentNode.insertBefore(t,a.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function sd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ld(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var zl=null;function Um(t,e,n){if(zl===null){var i=new Map,r=zl=new Map;r.set(n,i)}else r=zl,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var a=n[r];if(!(a[Is]||a[ze]||t==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var s=a.getAttribute(e)||"";s=t+s;var l=i.get(s);l?l.push(a):i.set(s,[a])}}return i}function zm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function ZT(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function i0(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function JT(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var r=Hr(i.href),a=e.querySelector(zs(r));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=vo.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=a,De(a);return}a=e.ownerDocument||e,i=n0(i),(r=Ct.get(r))&&sd(i,r),a=a.createElement("link"),De(a);var s=a;s._p=new Promise(function(l,o){s.onload=l,s.onerror=o}),He(a,"link",i),n.instance=a}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=vo.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Eu=0;function e1(t,e){return t.stylesheets&&t.count===0&&Bl(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Bl(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4+e);0<t.imgBytes&&Eu===0&&(Eu=62500*kT());var r=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bl(t,t.stylesheets),t.unsuspend)){var a=t.unsuspend;t.unsuspend=null,a()}},(t.imgBytes>Eu?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bo=null;function Bl(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bo=new Map,e.forEach(t1,t),bo=null,vo.call(t))}function t1(t,e){if(!(e.state.loading&4)){var n=bo.get(t);if(n)var i=n.get(null);else{n=new Map,bo.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var s=r[a];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}r=e.instance,s=r.getAttribute("data-precedence"),a=n.get(s)||i,a===i&&n.set(null,r),n.set(s,r),this.count++,i=vo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),a?a.parentNode.insertBefore(r,a.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var fs={$$typeof:nn,Provider:null,Consumer:null,_currentValue:Oi,_currentValue2:Oi,_threadCount:0};function n1(t,e,n,i,r,a,s,l,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.hiddenUpdates=Gc(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function r0(t,e,n,i,r,a,s,l,o,c,h,f){return t=new n1(t,e,n,s,o,c,h,f,l),e=1,a===!0&&(e|=24),a=rt(3,null,null,e),t.current=a,a.stateNode=t,e=Mh(),e.refCount++,t.pooledCache=e,e.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:e},Uh(a),t}function a0(t){return t?(t=dr,t):dr}function s0(t,e,n,i,r,a){r=a0(r),i.context===null?i.context=r:i.pendingContext=r,i=Qn(e),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Xn(t,i,e),n!==null&&(Je(n,t,e),Ba(n,t,e))}function Bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function od(t,e){Bm(t,e),(t=t.alternate)&&Bm(t,e)}function l0(t){if(t.tag===13||t.tag===31){var e=Xi(t,67108864);e!==null&&Je(e,t,67108864),od(t,67108864)}}function jm(t){if(t.tag===13||t.tag===31){var e=ct();e=vh(e);var n=Xi(t,e);n!==null&&Je(n,t,e),od(t,e)}}var Eo=!0;function i1(t,e,n,i){var r=M.T;M.T=null;var a=X.p;try{X.p=2,cd(t,e,n,i)}finally{X.p=a,M.T=r}}function r1(t,e,n,i){var r=M.T;M.T=null;var a=X.p;try{X.p=8,cd(t,e,n,i)}finally{X.p=a,M.T=r}}function cd(t,e,n,i){if(Eo){var r=Uf(i);if(r===null)vu(t,e,i,So,n),Hm(t,i);else if(s1(r,t,e,n,i))i.stopPropagation();else if(Hm(t,i),e&4&&-1<a1.indexOf(t)){for(;r!==null;){var a=Zr(r);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var s=wi(a.pendingLanes);if(s!==0){var l=a;for(l.pendingLanes|=2,l.entangledLanes|=2;s;){var o=1<<31-ot(s);l.entanglements[1]|=o,s&=~o}Ft(a),!(Q&6)&&(uo=st()+500,Us(0))}}break;case 31:case 13:l=Xi(a,2),l!==null&&Je(l,a,2),pc(),od(a,2)}if(a=Uf(i),a===null&&vu(t,e,i,So,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else vu(t,e,i,null,n)}}function Uf(t){return t=wh(t),ud(t)}var So=null;function ud(t){if(So=null,t=lr(t),t!==null){var e=Rs(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Ry(e),t!==null)return t;t=null}else if(n===31){if(t=Ny(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return So=t,null}function o0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(GS()){case Dy:return 2;case My:return 8;case Wl:case FS:return 32;case ky:return 268435456;default:return 32}default:return 32}}var zf=!1,Zn=null,Jn=null,ei=null,hs=new Map,ds=new Map,Ln=[],a1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ds.delete(e.pointerId)}}function ba(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=Zr(e),e!==null&&l0(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function s1(t,e,n,i,r){switch(e){case"focusin":return Zn=ba(Zn,t,e,n,i,r),!0;case"dragenter":return Jn=ba(Jn,t,e,n,i,r),!0;case"mouseover":return ei=ba(ei,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return hs.set(a,ba(hs.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,ds.set(a,ba(ds.get(a)||null,t,e,n,i,r)),!0}return!1}function c0(t){var e=lr(t.target);if(e!==null){var n=Rs(e);if(n!==null){if(e=n.tag,e===13){if(e=Ry(n),e!==null){t.blockedOn=e,Tp(t.priority,function(){jm(n)});return}}else if(e===31){if(e=Ny(n),e!==null){t.blockedOn=e,Tp(t.priority,function(){jm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uf(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ef=i,n.target.dispatchEvent(i),ef=null}else return e=Zr(n),e!==null&&l0(e),t.blockedOn=n,!1;e.shift()}return!0}function Pm(t,e,n){jl(t)&&n.delete(e)}function l1(){zf=!1,Zn!==null&&jl(Zn)&&(Zn=null),Jn!==null&&jl(Jn)&&(Jn=null),ei!==null&&jl(ei)&&(ei=null),hs.forEach(Pm),ds.forEach(Pm)}function _l(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,l1)))}var vl=null;function qm(t){vl!==t&&(vl=t,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,function(){vl===t&&(vl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],r=t[e+2];if(typeof i!="function"){if(ud(i||n)===null)continue;break}var a=Zr(n);a!==null&&(t.splice(e,3),e-=3,yf(a,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Pr(t){function e(o){return _l(o,t)}Zn!==null&&_l(Zn,t),Jn!==null&&_l(Jn,t),ei!==null&&_l(ei,t),hs.forEach(e),ds.forEach(e);for(var n=0;n<Ln.length;n++){var i=Ln[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)c0(n),n.blockedOn===null&&Ln.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],a=n[i+1],s=r[et]||null;if(typeof a=="function")s||qm(n);else if(s){var l=null;if(a&&a.hasAttribute("formAction")){if(r=a,s=a[et]||null)l=s.formAction;else if(ud(r)!==null)continue}else l=s.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),qm(n)}}}function u0(){function t(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(s){return r=s})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function fd(t){this._internalRoot=t}yc.prototype.render=fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));var n=e.current,i=ct();s0(n,i,t,e,null,null)};yc.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;s0(t.current,2,null,t,null,null),pc(),e[$r]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=jy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&c0(t)}};var Vm=Cy.version;if(Vm!=="19.2.3")throw Error(w(527,Vm,"19.2.3"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=zS(e),t=t!==null?xy(t):null,t=t===null?null:t.stateNode,t};var o1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Ns=bl.inject(o1),lt=bl}catch{}}ec.createRoot=function(t,e){if(!Ay(t))throw Error(w(299));var n=!1,i="",r=tv,a=nv,s=iv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=r0(t,1,!1,null,null,n,i,null,r,a,s,u0),t[$r]=e.current,ad(t),new fd(e)};ec.hydrateRoot=function(t,e,n){if(!Ay(t))throw Error(w(299));var i=!1,r="",a=tv,s=nv,l=iv,o=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(o=n.formState)),e=r0(t,1,!0,e,n??null,i,r,o,a,s,l,u0),e.context=a0(null),n=e.current,i=ct(),i=vh(i),r=Qn(i),r.callback=null,Xn(n,r,i),n=i,e.current.lanes=n,Os(e,n),Ft(e),t[$r]=e.current,ad(t),new yc(e)};ec.version="19.2.3";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(t){console.error(t)}}f0(),vy.exports=ec;var c1=vy.exports;const u1=cy(c1);/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Gm="popstate";function f1(t={}){function e(i,r){let{pathname:a,search:s,hash:l}=i.location;return Bf("",{pathname:a,search:s,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ps(r)}return d1(e,n,null,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Lt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function h1(){return Math.random().toString(36).substring(2,10)}function Fm(t,e){return{usr:t.state,key:t.key,idx:e}}function Bf(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ra(e):e,state:n,key:e&&e.key||i||h1()}}function ps({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ra(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function d1(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:a=!1}=i,s=r.history,l="POP",o=null,c=h();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function h(){return(s.state||{idx:null}).idx}function f(){l="POP";let S=h(),m=S==null?null:S-c;c=S,o&&o({action:l,location:b.location,delta:m})}function u(S,m){l="PUSH";let d=Bf(b.location,S,m);c=h()+1;let g=Fm(d,c),v=b.createHref(d);try{s.pushState(g,"",v)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(v)}a&&o&&o({action:l,location:b.location,delta:1})}function p(S,m){l="REPLACE";let d=Bf(b.location,S,m);c=h();let g=Fm(d,c),v=b.createHref(d);s.replaceState(g,"",v),a&&o&&o({action:l,location:b.location,delta:0})}function y(S){return p1(S)}let b={get action(){return l},get location(){return t(r,s)},listen(S){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Gm,f),o=S,()=>{r.removeEventListener(Gm,f),o=null}},createHref(S){return e(r,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:u,replace:p,go(S){return s.go(S)}};return b}function p1(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),fe(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:ps(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function h0(t,e,n="/"){return m1(t,e,n,!1)}function m1(t,e,n,i){let r=typeof e=="string"?ra(e):e,a=vn(r.pathname||"/",n);if(a==null)return null;let s=d0(t);g1(s);let l=null;for(let o=0;l==null&&o<s.length;++o){let c=R1(a);l=C1(s[o],c,i)}return l}function d0(t,e=[],n=[],i="",r=!1){let a=(s,l,o=r,c)=>{let h={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(i)&&o)return;fe(h.relativePath.startsWith(i),`Absolute route path "${h.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(i.length)}let f=hn([i,h.relativePath]),u=n.concat(h);s.children&&s.children.length>0&&(fe(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),d0(s.children,e,u,f,o)),!(s.path==null&&!s.index)&&e.push({path:f,score:w1(f,s.index),routesMeta:u})};return t.forEach((s,l)=>{if(s.path===""||!s.path?.includes("?"))a(s,l);else for(let o of p0(s.path))a(s,l,!0,o)}),e}function p0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let s=p0(i.join("/")),l=[];return l.push(...s.map(o=>o===""?a:[a,o].join("/"))),r&&l.push(...s),l.map(o=>t.startsWith("/")&&o===""?"/":o)}function g1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:T1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var y1=/^:[\w-]+$/,_1=3,v1=2,b1=1,E1=10,S1=-2,Ym=t=>t==="*";function w1(t,e){let n=t.split("/"),i=n.length;return n.some(Ym)&&(i+=S1),e&&(i+=v1),n.filter(r=>!Ym(r)).reduce((r,a)=>r+(y1.test(a)?_1:a===""?b1:E1),i)}function T1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function C1(t,e,n=!1){let{routesMeta:i}=t,r={},a="/",s=[];for(let l=0;l<i.length;++l){let o=i[l],c=l===i.length-1,h=a==="/"?e:e.slice(a.length)||"/",f=wo({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},h),u=o.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=wo({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},h)),!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:hn([a,f.pathname]),pathnameBase:I1(hn([a,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(a=hn([a,f.pathnameBase]))}return s}function wo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=A1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:i.reduce((c,{paramName:h,isOptional:f},u)=>{if(h==="*"){let y=l[u]||"";s=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const p=l[u];return f&&!p?c[h]=void 0:c[h]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:s,pattern:t}}function A1(t,e=!1,n=!0){Lt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,o)=>(i.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function R1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Lt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function vn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}var m0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N1=t=>m0.test(t);function x1(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ra(t):t,a;if(n)if(N1(n))a=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Lt(!1,`Pathnames cannot have embedded double slashes - normalizing ${s} -> ${n}`)}n.startsWith("/")?a=Km(n.substring(1),"/"):a=Km(n,e)}else a=e;return{pathname:a,search:D1(i),hash:M1(r)}}function Km(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Su(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function O1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function g0(t){let e=O1(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function y0(t,e,n,i=!1){let r;typeof t=="string"?r=ra(t):(r={...t},fe(!r.pathname||!r.pathname.includes("?"),Su("?","pathname","search",r)),fe(!r.pathname||!r.pathname.includes("#"),Su("#","pathname","hash",r)),fe(!r.search||!r.search.includes("#"),Su("#","search","hash",r)));let a=t===""||r.pathname==="",s=a?"/":r.pathname,l;if(s==null)l=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let u=s.split("/");for(;u[0]==="..";)u.shift(),f-=1;r.pathname=u.join("/")}l=f>=0?e[f]:"/"}let o=x1(r,l),c=s&&s!=="/"&&s.endsWith("/"),h=(a||s===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}var hn=t=>t.join("/").replace(/\/\/+/g,"/"),I1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),D1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,M1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,k1=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function L1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function U1(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var _0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function v0(t,e){let n=t;if(typeof n!="string"||!m0.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let i=n,r=!1;if(_0)try{let a=new URL(window.location.href),s=n.startsWith("//")?new URL(a.protocol+n):new URL(n),l=vn(s.pathname,e);s.origin===a.origin&&l!=null?n=l+s.search+s.hash:r=!0}catch{Lt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:r,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var b0=["POST","PUT","PATCH","DELETE"];new Set(b0);var z1=["GET",...b0];new Set(z1);var aa=E.createContext(null);aa.displayName="DataRouter";var _c=E.createContext(null);_c.displayName="DataRouterState";var B1=E.createContext(!1),E0=E.createContext({isTransitioning:!1});E0.displayName="ViewTransition";var j1=E.createContext(new Map);j1.displayName="Fetchers";var H1=E.createContext(null);H1.displayName="Await";var Rt=E.createContext(null);Rt.displayName="Navigation";var js=E.createContext(null);js.displayName="Location";var Yt=E.createContext({outlet:null,matches:[],isDataRoute:!1});Yt.displayName="Route";var hd=E.createContext(null);hd.displayName="RouteError";var S0="REACT_ROUTER_ERROR",P1="REDIRECT",q1="ROUTE_ERROR_RESPONSE";function V1(t){if(t.startsWith(`${S0}:${P1}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function G1(t){if(t.startsWith(`${S0}:${q1}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new k1(e.status,e.statusText,e.data)}catch{}}function F1(t,{relative:e}={}){fe(Hs(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=E.useContext(Rt),{hash:r,pathname:a,search:s}=qs(t,{relative:e}),l=a;return n!=="/"&&(l=a==="/"?n:hn([n,a])),i.createHref({pathname:l,search:s,hash:r})}function Hs(){return E.useContext(js)!=null}function _i(){return fe(Hs(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(js).location}var w0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function T0(t){E.useContext(Rt).static||E.useLayoutEffect(t)}function Ps(){let{isDataRoute:t}=E.useContext(Yt);return t?rC():Y1()}function Y1(){fe(Hs(),"useNavigate() may be used only in the context of a <Router> component.");let t=E.useContext(aa),{basename:e,navigator:n}=E.useContext(Rt),{matches:i}=E.useContext(Yt),{pathname:r}=_i(),a=JSON.stringify(g0(i)),s=E.useRef(!1);return T0(()=>{s.current=!0}),E.useCallback((o,c={})=>{if(Lt(s.current,w0),!s.current)return;if(typeof o=="number"){n.go(o);return}let h=y0(o,JSON.parse(a),r,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:hn([e,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[e,n,a,r,t])}E.createContext(null);function C0(){let{matches:t}=E.useContext(Yt),e=t[t.length-1];return e?e.params:{}}function qs(t,{relative:e}={}){let{matches:n}=E.useContext(Yt),{pathname:i}=_i(),r=JSON.stringify(g0(n));return E.useMemo(()=>y0(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function K1(t,e){return A0(t,e)}function A0(t,e,n,i,r){fe(Hs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=E.useContext(Rt),{matches:s}=E.useContext(Yt),l=s[s.length-1],o=l?l.params:{},c=l?l.pathname:"/",h=l?l.pathnameBase:"/",f=l&&l.route;{let d=f&&f.path||"";N0(c,!f||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let u=_i(),p;if(e){let d=typeof e=="string"?ra(e):e;fe(h==="/"||d.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${d.pathname}" was given in the \`location\` prop.`),p=d}else p=u;let y=p.pathname||"/",b=y;if(h!=="/"){let d=h.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(d.length).join("/")}let S=h0(t,{pathname:b});Lt(f||S!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Lt(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=Z1(S&&S.map(d=>Object.assign({},d,{params:Object.assign({},o,d.params),pathname:hn([h,a.encodeLocation?a.encodeLocation(d.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?h:hn([h,a.encodeLocation?a.encodeLocation(d.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathnameBase])})),s,n,i,r);return e&&m?E.createElement(js.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},m):m}function Q1(){let t=iC(),e=L1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:a},"ErrorBoundary")," or"," ",E.createElement("code",{style:a},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:r},n):null,s)}var X1=E.createElement(Q1,null),R0=class extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=G1(t.digest);n&&(t=n)}let e=t!==void 0?E.createElement(Yt.Provider,{value:this.props.routeContext},E.createElement(hd.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?E.createElement(W1,{error:t},e):e}};R0.contextType=B1;var wu=new WeakMap;function W1({children:t,error:e}){let{basename:n}=E.useContext(Rt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=V1(e.digest);if(i){let r=wu.get(e);if(r)throw r;let a=v0(i.location,n);if(_0&&!wu.get(e))if(a.isExternal||i.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:i.replace}));throw wu.set(e,s),s}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return t}function $1({routeContext:t,match:e,children:n}){let i=E.useContext(aa);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),E.createElement(Yt.Provider,{value:t},n)}function Z1(t,e=[],n=null,i=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,s=n?.errors;if(s!=null){let h=a.findIndex(f=>f.route.id&&s?.[f.route.id]!==void 0);fe(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,o=-1;if(n)for(let h=0;h<a.length;h++){let f=a[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=h),f.route.id){let{loaderData:u,errors:p}=n,y=f.route.loader&&!u.hasOwnProperty(f.route.id)&&(!p||p[f.route.id]===void 0);if(f.route.lazy||y){l=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}let c=n&&i?(h,f)=>{i(h,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:U1(n.matches),errorInfo:f})}:void 0;return a.reduceRight((h,f,u)=>{let p,y=!1,b=null,S=null;n&&(p=s&&f.route.id?s[f.route.id]:void 0,b=f.route.errorElement||X1,l&&(o<0&&u===0?(N0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,S=null):o===u&&(y=!0,S=f.route.hydrateFallbackElement||null)));let m=e.concat(a.slice(0,u+1)),d=()=>{let g;return p?g=b:y?g=S:f.route.Component?g=E.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=h,E.createElement($1,{match:f,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||u===0)?E.createElement(R0,{location:n.location,revalidation:n.revalidation,component:b,error:p,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:c}):d()},null)}function dd(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J1(t){let e=E.useContext(aa);return fe(e,dd(t)),e}function eC(t){let e=E.useContext(_c);return fe(e,dd(t)),e}function tC(t){let e=E.useContext(Yt);return fe(e,dd(t)),e}function pd(t){let e=tC(t),n=e.matches[e.matches.length-1];return fe(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function nC(){return pd("useRouteId")}function iC(){let t=E.useContext(hd),e=eC("useRouteError"),n=pd("useRouteError");return t!==void 0?t:e.errors?.[n]}function rC(){let{router:t}=J1("useNavigate"),e=pd("useNavigate"),n=E.useRef(!1);return T0(()=>{n.current=!0}),E.useCallback(async(r,a={})=>{Lt(n.current,w0),n.current&&(typeof r=="number"?await t.navigate(r):await t.navigate(r,{fromRouteId:e,...a}))},[t,e])}var Qm={};function N0(t,e,n){!e&&!Qm[t]&&(Qm[t]=!0,Lt(!1,n))}E.memo(aC);function aC({routes:t,future:e,state:n,onError:i}){return A0(t,void 0,n,i,e)}function Ai(t){fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sC({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:a=!1,unstable_useTransitions:s}){fe(!Hs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),o=E.useMemo(()=>({basename:l,navigator:r,static:a,unstable_useTransitions:s,future:{}}),[l,r,a,s]);typeof n=="string"&&(n=ra(n));let{pathname:c="/",search:h="",hash:f="",state:u=null,key:p="default"}=n,y=E.useMemo(()=>{let b=vn(c,l);return b==null?null:{location:{pathname:b,search:h,hash:f,state:u,key:p},navigationType:i}},[l,c,h,f,u,p,i]);return Lt(y!=null,`<Router basename="${l}"> is not able to match the URL "${c}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:E.createElement(Rt.Provider,{value:o},E.createElement(js.Provider,{children:e,value:y}))}function lC({children:t,location:e}){return K1(jf(t),e)}function jf(t,e=[]){let n=[];return E.Children.forEach(t,(i,r)=>{if(!E.isValidElement(i))return;let a=[...e,r];if(i.type===E.Fragment){n.push.apply(n,jf(i.props.children,a));return}fe(i.type===Ai,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),fe(!i.props.index||!i.props.children,"An index route cannot have child routes.");let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=jf(i.props.children,a)),n.push(s)}),n}var Hl="get",Pl="application/x-www-form-urlencoded";function vc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function oC(t){return vc(t)&&t.tagName.toLowerCase()==="button"}function cC(t){return vc(t)&&t.tagName.toLowerCase()==="form"}function uC(t){return vc(t)&&t.tagName.toLowerCase()==="input"}function fC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hC(t,e){return t.button===0&&(!e||e==="_self")&&!fC(t)}var El=null;function dC(){if(El===null)try{new FormData(document.createElement("form"),0),El=!1}catch{El=!0}return El}var pC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tu(t){return t!=null&&!pC.has(t)?(Lt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pl}"`),null):t}function mC(t,e){let n,i,r,a,s;if(cC(t)){let l=t.getAttribute("action");i=l?vn(l,e):null,n=t.getAttribute("method")||Hl,r=Tu(t.getAttribute("enctype"))||Pl,a=new FormData(t)}else if(oC(t)||uC(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=t.getAttribute("formaction")||l.getAttribute("action");if(i=o?vn(o,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||Hl,r=Tu(t.getAttribute("formenctype"))||Tu(l.getAttribute("enctype"))||Pl,a=new FormData(l,t),!dC()){let{name:c,type:h,value:f}=t;if(h==="image"){let u=c?`${c}.`:"";a.append(`${u}x`,"0"),a.append(`${u}y`,"0")}else c&&a.append(c,f)}}else{if(vc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Hl,i=null,r=Pl,s=t}return a&&r==="text/plain"&&(s=a,a=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:a,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function md(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gC(t,e,n,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${i}`:r.pathname=`${r.pathname}.${i}`:r.pathname==="/"?r.pathname=`_root.${i}`:e&&vn(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function yC(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _C(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function vC(t,e,n){let i=await Promise.all(t.map(async r=>{let a=e.routes[r.route.id];if(a){let s=await yC(a,n);return s.links?s.links():[]}return[]}));return wC(i.flat(1).filter(_C).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Xm(t,e,n,i,r,a){let s=(o,c)=>n[c]?o.route.id!==n[c].route.id:!0,l=(o,c)=>n[c].pathname!==o.pathname||n[c].route.path?.endsWith("*")&&n[c].params["*"]!==o.params["*"];return a==="assets"?e.filter((o,c)=>s(o,c)||l(o,c)):a==="data"?e.filter((o,c)=>{let h=i.routes[o.route.id];if(!h||!h.hasLoader)return!1;if(s(o,c)||l(o,c))return!0;if(o.route.shouldRevalidate){let f=o.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function bC(t,e,{includeHydrateFallback:n}={}){return EC(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1))}function EC(t){return[...new Set(t)]}function SC(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function wC(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let a=JSON.stringify(SC(r));return n.has(a)||(n.add(a),i.push({key:a,link:r})),i},[])}function x0(){let t=E.useContext(aa);return md(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function TC(){let t=E.useContext(_c);return md(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var gd=E.createContext(void 0);gd.displayName="FrameworkContext";function O0(){let t=E.useContext(gd);return md(t,"You must render this element inside a <HydratedRouter> element"),t}function CC(t,e){let n=E.useContext(gd),[i,r]=E.useState(!1),[a,s]=E.useState(!1),{onFocus:l,onBlur:o,onMouseEnter:c,onMouseLeave:h,onTouchStart:f}=e,u=E.useRef(null);E.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let b=m=>{m.forEach(d=>{s(d.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return u.current&&S.observe(u.current),()=>{S.disconnect()}}},[t]),E.useEffect(()=>{if(i){let b=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(b)}}},[i]);let p=()=>{r(!0)},y=()=>{r(!1),s(!1)};return n?t!=="intent"?[a,u,{}]:[a,u,{onFocus:Ea(l,p),onBlur:Ea(o,y),onMouseEnter:Ea(c,p),onMouseLeave:Ea(h,y),onTouchStart:Ea(f,p)}]:[!1,u,{}]}function Ea(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function AC({page:t,...e}){let{router:n}=x0(),i=E.useMemo(()=>h0(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?E.createElement(NC,{page:t,matches:i,...e}):null}function RC(t){let{manifest:e,routeModules:n}=O0(),[i,r]=E.useState([]);return E.useEffect(()=>{let a=!1;return vC(t,e,n).then(s=>{a||r(s)}),()=>{a=!0}},[t,e,n]),i}function NC({page:t,matches:e,...n}){let i=_i(),{future:r,manifest:a,routeModules:s}=O0(),{basename:l}=x0(),{loaderData:o,matches:c}=TC(),h=E.useMemo(()=>Xm(t,e,c,a,i,"data"),[t,e,c,a,i]),f=E.useMemo(()=>Xm(t,e,c,a,i,"assets"),[t,e,c,a,i]),u=E.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let b=new Set,S=!1;if(e.forEach(d=>{let g=a.routes[d.route.id];!g||!g.hasLoader||(!h.some(v=>v.route.id===d.route.id)&&d.route.id in o&&s[d.route.id]?.shouldRevalidate||g.hasClientLoader?S=!0:b.add(d.route.id))}),b.size===0)return[];let m=gC(t,l,r.unstable_trailingSlashAwareDataRequests,"data");return S&&b.size>0&&m.searchParams.set("_routes",e.filter(d=>b.has(d.route.id)).map(d=>d.route.id).join(",")),[m.pathname+m.search]},[l,r.unstable_trailingSlashAwareDataRequests,o,i,a,h,e,t,s]),p=E.useMemo(()=>bC(f,a),[f,a]),y=RC(f);return E.createElement(E.Fragment,null,u.map(b=>E.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),p.map(b=>E.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),y.map(({key:b,link:S})=>E.createElement("link",{key:b,nonce:n.nonce,...S})))}function xC(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var OC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{OC&&(window.__reactRouterVersion="7.12.0")}catch{}function IC({basename:t,children:e,unstable_useTransitions:n,window:i}){let r=E.useRef();r.current==null&&(r.current=f1({window:i,v5Compat:!0}));let a=r.current,[s,l]=E.useState({action:a.action,location:a.location}),o=E.useCallback(c=>{n===!1?l(c):E.startTransition(()=>l(c))},[n]);return E.useLayoutEffect(()=>a.listen(o),[a,o]),E.createElement(sC,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:a,unstable_useTransitions:n})}var I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D0=E.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:a,replace:s,state:l,target:o,to:c,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:u,...p},y){let{basename:b,unstable_useTransitions:S}=E.useContext(Rt),m=typeof c=="string"&&I0.test(c),d=v0(c,b);c=d.to;let g=F1(c,{relative:r}),[v,C,I]=CC(i,p),A=LC(c,{replace:s,state:l,target:o,preventScrollReset:h,relative:r,viewTransition:f,unstable_defaultShouldRevalidate:u,unstable_useTransitions:S});function N(L){e&&e(L),L.defaultPrevented||A(L)}let D=E.createElement("a",{...p,...I,href:d.absoluteURL||g,onClick:d.isExternal||a?e:N,ref:xC(y,C),target:o,"data-discover":!m&&n==="render"?"true":void 0});return v&&!m?E.createElement(E.Fragment,null,D,E.createElement(AC,{page:g})):D});D0.displayName="Link";var DC=E.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:a,to:s,viewTransition:l,children:o,...c},h){let f=qs(s,{relative:c.relative}),u=_i(),p=E.useContext(_c),{navigator:y,basename:b}=E.useContext(Rt),S=p!=null&&HC(f)&&l===!0,m=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,d=u.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(d=d.toLowerCase(),g=g?g.toLowerCase():null,m=m.toLowerCase()),g&&b&&(g=vn(g,b)||g);const v=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let C=d===m||!r&&d.startsWith(m)&&d.charAt(v)==="/",I=g!=null&&(g===m||!r&&g.startsWith(m)&&g.charAt(m.length)==="/"),A={isActive:C,isPending:I,isTransitioning:S},N=C?e:void 0,D;typeof i=="function"?D=i(A):D=[i,C?"active":null,I?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let L=typeof a=="function"?a(A):a;return E.createElement(D0,{...c,"aria-current":N,className:D,ref:h,style:L,to:s,viewTransition:l},typeof o=="function"?o(A):o)});DC.displayName="NavLink";var MC=E.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:a,method:s=Hl,action:l,onSubmit:o,relative:c,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:u,...p},y)=>{let{unstable_useTransitions:b}=E.useContext(Rt),S=BC(),m=jC(l,{relative:c}),d=s.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&I0.test(l),v=C=>{if(o&&o(C),C.defaultPrevented)return;C.preventDefault();let I=C.nativeEvent.submitter,A=I?.getAttribute("formmethod")||s,N=()=>S(I||C.currentTarget,{fetcherKey:e,method:A,navigate:n,replace:r,state:a,relative:c,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:u});b&&n!==!1?E.startTransition(()=>N()):N()};return E.createElement("form",{ref:y,method:d,action:m,onSubmit:i?o:v,...p,"data-discover":!g&&t==="render"?"true":void 0})});MC.displayName="Form";function kC(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function M0(t){let e=E.useContext(aa);return fe(e,kC(t)),e}function LC(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:a,viewTransition:s,unstable_defaultShouldRevalidate:l,unstable_useTransitions:o}={}){let c=Ps(),h=_i(),f=qs(t,{relative:a});return E.useCallback(u=>{if(hC(u,e)){u.preventDefault();let p=n!==void 0?n:ps(h)===ps(f),y=()=>c(t,{replace:p,state:i,preventScrollReset:r,relative:a,viewTransition:s,unstable_defaultShouldRevalidate:l});o?E.startTransition(()=>y()):y()}},[h,c,f,n,i,e,t,r,a,s,l,o])}var UC=0,zC=()=>`__${String(++UC)}__`;function BC(){let{router:t}=M0("useSubmit"),{basename:e}=E.useContext(Rt),n=nC(),i=t.fetch,r=t.navigate;return E.useCallback(async(a,s={})=>{let{action:l,method:o,encType:c,formData:h,body:f}=mC(a,e);if(s.navigate===!1){let u=s.fetcherKey||zC();await i(u,n,s.action||l,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:h,body:f,formMethod:s.method||o,formEncType:s.encType||c,flushSync:s.flushSync})}else await r(s.action||l,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:h,body:f,formMethod:s.method||o,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[i,r,e,n])}function jC(t,{relative:e}={}){let{basename:n}=E.useContext(Rt),i=E.useContext(Yt);fe(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),a={...qs(t||".",{relative:e})},s=_i();if(t==null){a.search=s.search;let l=new URLSearchParams(a.search),o=l.getAll("index");if(o.some(h=>h==="")){l.delete("index"),o.filter(f=>f).forEach(f=>l.append("index",f));let h=l.toString();a.search=h?`?${h}`:""}}return(!t||t===".")&&r.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:hn([n,a.pathname])),ps(a)}function HC(t,{relative:e}={}){let n=E.useContext(E0);fe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=M0("useViewTransitionState"),r=qs(t,{relative:e});if(!n.isTransitioning)return!1;let a=vn(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=vn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return wo(r.pathname,s)!=null||wo(r.pathname,a)!=null}const PC=()=>{};var Wm={};/**
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
 */const k0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw sa(e)},sa=function(t){return new Error("Firebase Database ("+k0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const L0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},qC=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const a=t[n++];e[i++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=t[n++],s=t[n++],l=t[n++],o=((r&7)<<18|(a&63)<<12|(s&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(o>>10)),e[i++]=String.fromCharCode(56320+(o&1023))}else{const a=t[n++],s=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(a&63)<<6|s&63)}}return e.join("")},yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const a=t[r],s=r+1<t.length,l=s?t[r+1]:0,o=r+2<t.length,c=o?t[r+2]:0,h=a>>2,f=(a&3)<<4|l>>4;let u=(l&15)<<2|c>>6,p=c&63;o||(p=64,s||(u=64)),i.push(n[h],n[f],n[u],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(L0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const a=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,a==null||l==null||c==null||f==null)throw new VC;const u=a<<2|l>>4;if(i.push(u),c!==64){const p=l<<4&240|c>>2;if(i.push(p),f!==64){const y=c<<6&192|f;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U0=function(t){const e=L0(t);return yd.encodeByteArray(e,!0)},To=function(t){return U0(t).replace(/\./g,"")},Co=function(t){try{return yd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GC(t){return z0(void 0,t)}function z0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!FC(n)||(t[n]=z0(t[n],e[n]));return t}function FC(t){return t!=="__proto__"}/**
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
 */function YC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KC=()=>YC().__FIREBASE_DEFAULTS__,QC=()=>{if(typeof process>"u"||typeof Wm>"u")return;const t=Wm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Co(t[1]);return e&&JSON.parse(e)},_d=()=>{try{return PC()||KC()||QC()||XC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B0=t=>_d()?.emulatorHosts?.[t],WC=t=>{const e=B0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},j0=()=>_d()?.config,H0=t=>_d()?.[`_${t}`];/**
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
 */class Vs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function la(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function P0(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function $C(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...t};return[To(JSON.stringify(n)),To(JSON.stringify(s)),""].join(".")}const Ka={};function ZC(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ka))Ka[e]?t.emulator.push(e):t.prod.push(e);return t}function JC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let $m=!1;function q0(t,e){if(typeof window>"u"||typeof document>"u"||!la(window.location.host)||Ka[t]===e||Ka[t]||$m)return;Ka[t]=e;function n(u){return`__firebase__banner__${u}`}const i="__firebase__banner",a=ZC().prod.length>0;function s(){const u=document.getElementById(i);u&&u.remove()}function l(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function o(u,p){u.setAttribute("width","24"),u.setAttribute("id",p),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{$m=!0,s()},u}function h(u,p){u.setAttribute("id",p),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function f(){const u=JC(i),p=n("text"),y=document.getElementById(p)||document.createElement("span"),b=n("learnmore"),S=document.getElementById(b)||document.createElement("a"),m=n("preprendIcon"),d=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const g=u.element;l(g),h(S,b);const v=c();o(d,m),g.append(d,y,S,v),document.body.appendChild(g)}a?(y.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function eA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function V0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nA(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iA(){return k0.NODE_ADMIN===!0}function rA(){try{return typeof indexedDB=="object"}catch{return!1}}function aA(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const sA="FirebaseError";class vi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=sA,Object.setPrototypeOf(this,vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gs.prototype.create)}}class Gs{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,a=this.errors[e],s=a?lA(a,i):"Error",l=`${this.serviceName}: ${s} (${r}).`;return new vi(r,l,i)}}function lA(t,e){return t.replace(oA,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const oA=/\{\$([^}]+)}/g;/**
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
 */function ms(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
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
 */const G0=function(t){let e={},n={},i={},r="";try{const a=t.split(".");e=ms(Co(a[0])||""),n=ms(Co(a[1])||""),r=a[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},cA=function(t){const e=G0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uA=function(t){const e=G0(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ao(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Hi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const a=t[r],s=e[r];if(Zm(a)&&Zm(s)){if(!Hi(a,s))return!1}else if(a!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Zm(t){return t!==null&&typeof t=="object"}/**
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
 */function oa(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class fA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const u=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(u<<1|u>>>31)&4294967295}let r=this.chain_[0],a=this.chain_[1],s=this.chain_[2],l=this.chain_[3],o=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=l^a&(s^l),h=1518500249):(c=a^s^l,h=1859775393):f<60?(c=a&s|l&(a|s),h=2400959708):(c=a^s^l,h=3395469782);const u=(r<<5|r>>>27)+c+o+h+i[f]&4294967295;o=l,l=s,s=(a<<30|a>>>2)&4294967295,a=r,r=u}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+o&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const a=this.buf_;let s=this.inbuf_;for(;r<n;){if(s===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(a[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(a),s=0;break}}else for(;r<n;)if(a[s]=e[r],++s,++r,s===this.blockSize){this.compress_(a),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let a=24;a>=0;a-=8)e[i]=this.chain_[r]>>a&255,++i;return e}}function hA(t,e){const n=new dA(t,e);return n.subscribe.bind(n)}class dA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");pA(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Cu),r.error===void 0&&(r.error=Cu),r.complete===void 0&&(r.complete=Cu);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cu(){}function bc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const mA=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const a=r-55296;i++,T(i<t.length,"Surrogate pair missing trail surrogate.");const s=t.charCodeAt(i)-56320;r=65536+(a<<10)+s}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ec=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class Pi{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ri="[DEFAULT]";/**
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
 */class gA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Vs;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_A(e))try{this.getOrInitializeService({instanceIdentifier:Ri})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:r});i.resolve(a)}catch{}}}}clearInstance(e=Ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ri){return this.instances.has(e)}getOptions(e=Ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[a,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);i===l&&s.resolve(r)}return r}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:yA(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ri){return this.component?this.component.multipleInstances?e:Ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yA(t){return t===Ri?void 0:t}function _A(t){return t.instantiationMode==="EAGER"}/**
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
 */class vA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const bA={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},EA=J.INFO,SA={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},wA=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=SA[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bd{constructor(e){this.name=e,this._logLevel=EA,this._logHandler=wA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const TA=(t,e)=>e.some(n=>t instanceof n);let Jm,eg;function CA(){return Jm||(Jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AA(){return eg||(eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F0=new WeakMap,Pf=new WeakMap,Y0=new WeakMap,Au=new WeakMap,Ed=new WeakMap;function RA(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{n(ti(t.result)),r()},s=()=>{i(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&F0.set(n,t)}).catch(()=>{}),Ed.set(e,t),e}function NA(t){if(Pf.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{n(),r()},s=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Pf.set(t,e)}let qf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Y0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xA(t){qf=t(qf)}function OA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ru(this),e,...n);return Y0.set(i,e.sort?e.sort():[e]),ti(i)}:AA().includes(t)?function(...e){return t.apply(Ru(this),e),ti(F0.get(this))}:function(...e){return ti(t.apply(Ru(this),e))}}function IA(t){return typeof t=="function"?OA(t):(t instanceof IDBTransaction&&NA(t),TA(t,CA())?new Proxy(t,qf):t)}function ti(t){if(t instanceof IDBRequest)return RA(t);if(Au.has(t))return Au.get(t);const e=IA(t);return e!==t&&(Au.set(t,e),Ed.set(e,t)),e}const Ru=t=>Ed.get(t);function DA(t,e,{blocked:n,upgrade:i,blocking:r,terminated:a}={}){const s=indexedDB.open(t,e),l=ti(s);return i&&s.addEventListener("upgradeneeded",o=>{i(ti(s.result),o.oldVersion,o.newVersion,ti(s.transaction),o)}),n&&s.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),l.then(o=>{a&&o.addEventListener("close",()=>a()),r&&o.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const MA=["get","getKey","getAll","getAllKeys","count"],kA=["put","add","delete","clear"],Nu=new Map;function tg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nu.get(e))return Nu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=kA.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||MA.includes(n)))return;const a=async function(s,...l){const o=this.transaction(s,r?"readwrite":"readonly");let c=o.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),r&&o.done]))[0]};return Nu.set(e,a),a}xA(t=>({...t,get:(e,n,i)=>tg(e,n)||t.get(e,n,i),has:(e,n)=>!!tg(e,n)||t.has(e,n)}));/**
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
 */class LA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UA(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function UA(t){return t.getComponent()?.type==="VERSION"}const Vf="@firebase/app",ng="0.14.7";/**
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
 */const bn=new bd("@firebase/app"),zA="@firebase/app-compat",BA="@firebase/analytics-compat",jA="@firebase/analytics",HA="@firebase/app-check-compat",PA="@firebase/app-check",qA="@firebase/auth",VA="@firebase/auth-compat",GA="@firebase/database",FA="@firebase/data-connect",YA="@firebase/database-compat",KA="@firebase/functions",QA="@firebase/functions-compat",XA="@firebase/installations",WA="@firebase/installations-compat",$A="@firebase/messaging",ZA="@firebase/messaging-compat",JA="@firebase/performance",eR="@firebase/performance-compat",tR="@firebase/remote-config",nR="@firebase/remote-config-compat",iR="@firebase/storage",rR="@firebase/storage-compat",aR="@firebase/firestore",sR="@firebase/ai",lR="@firebase/firestore-compat",oR="firebase",cR="12.8.0";/**
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
 */const Gf="[DEFAULT]",uR={[Vf]:"fire-core",[zA]:"fire-core-compat",[jA]:"fire-analytics",[BA]:"fire-analytics-compat",[PA]:"fire-app-check",[HA]:"fire-app-check-compat",[qA]:"fire-auth",[VA]:"fire-auth-compat",[GA]:"fire-rtdb",[FA]:"fire-data-connect",[YA]:"fire-rtdb-compat",[KA]:"fire-fn",[QA]:"fire-fn-compat",[XA]:"fire-iid",[WA]:"fire-iid-compat",[$A]:"fire-fcm",[ZA]:"fire-fcm-compat",[JA]:"fire-perf",[eR]:"fire-perf-compat",[tR]:"fire-rc",[nR]:"fire-rc-compat",[iR]:"fire-gcs",[rR]:"fire-gcs-compat",[aR]:"fire-fst",[lR]:"fire-fst-compat",[sR]:"fire-vertex","fire-js":"fire-js",[oR]:"fire-js-all"};/**
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
 */const Ro=new Map,fR=new Map,Ff=new Map;function ig(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Ff.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;Ff.set(e,t);for(const n of Ro.values())ig(n,t);for(const n of fR.values())ig(n,t);return!0}function Sd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
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
 */const hR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ni=new Gs("app","Firebase",hR);/**
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
 */class dR{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Pi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ni.create("app-deleted",{appName:this._name})}}/**
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
 */const ca=cR;function K0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Gf,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw ni.create("bad-app-name",{appName:String(r)});if(n||(n=j0()),!n)throw ni.create("no-options");const a=Ro.get(r);if(a){if(Hi(n,a.options)&&Hi(i,a.config))return a;throw ni.create("duplicate-app",{appName:r})}const s=new vA(r);for(const o of Ff.values())s.addComponent(o);const l=new dR(n,i,s);return Ro.set(r,l),l}function Q0(t=Gf){const e=Ro.get(t);if(!e&&t===Gf&&j0())return K0();if(!e)throw ni.create("no-app",{appName:t});return e}function ii(t,e,n){let i=uR[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const s=[`Unable to register library "${i}" with version "${e}":`];r&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&a&&s.push("and"),a&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(s.join(" "));return}Vr(new Pi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pR="firebase-heartbeat-database",mR=1,gs="firebase-heartbeat-store";let xu=null;function X0(){return xu||(xu=DA(pR,mR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw ni.create("idb-open",{originalErrorMessage:t.message})})),xu}async function gR(t){try{const n=(await X0()).transaction(gs),i=await n.objectStore(gs).get(W0(t));return await n.done,i}catch(e){if(e instanceof vi)bn.warn(e.message);else{const n=ni.create("idb-get",{originalErrorMessage:e?.message});bn.warn(n.message)}}}async function rg(t,e){try{const i=(await X0()).transaction(gs,"readwrite");await i.objectStore(gs).put(e,W0(t)),await i.done}catch(n){if(n instanceof vi)bn.warn(n.message);else{const i=ni.create("idb-set",{originalErrorMessage:n?.message});bn.warn(i.message)}}}function W0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yR=1024,_R=30;class vR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ER(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ag();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>_R){const r=SR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){bn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ag(),{heartbeatsToSend:n,unsentEntries:i}=bR(this._heartbeatsCache.heartbeats),r=To(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return bn.warn(e),""}}}function ag(){return new Date().toISOString().substring(0,10)}function bR(t,e=yR){const n=[];let i=t.slice();for(const r of t){const a=n.find(s=>s.agent===r.agent);if(a){if(a.dates.push(r.date),sg(n)>e){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),sg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ER{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rA()?aA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gR(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sg(t){return To(JSON.stringify({version:2,heartbeats:t})).length}function SR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function wR(t){Vr(new Pi("platform-logger",e=>new LA(e),"PRIVATE")),Vr(new Pi("heartbeat",e=>new vR(e),"PRIVATE")),ii(Vf,ng,t),ii(Vf,ng,"esm2020"),ii("fire-js","")}wR("");function $0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TR=$0,Z0=new Gs("auth","Firebase",$0());/**
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
 */const No=new bd("@firebase/auth");function CR(t,...e){No.logLevel<=J.WARN&&No.warn(`Auth (${ca}): ${t}`,...e)}function ql(t,...e){No.logLevel<=J.ERROR&&No.error(`Auth (${ca}): ${t}`,...e)}/**
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
 */function En(t,...e){throw wd(t,...e)}function qt(t,...e){return wd(t,...e)}function J0(t,e,n){const i={...TR(),[e]:n};return new Gs("auth","Firebase",i).create(e,{appName:t.name})}function ri(t){return J0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Z0.create(t,...e)}function k(t,e,...n){if(!t)throw wd(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function Sn(t,e){t||sn(e)}/**
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
 */function Yf(){return typeof self<"u"&&self.location?.href||""}function AR(){return lg()==="http:"||lg()==="https:"}function lg(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function RR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AR()||tA()||"connection"in navigator)?navigator.onLine:!0}function NR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=vd()||V0()}get(){return RR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Td(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class eb{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],IR=new Fs(3e4,6e4);function Sc(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ua(t,e,n,i,r={}){return tb(t,r,async()=>{let a={},s={};i&&(e==="GET"?s=i:a={body:JSON.stringify(i)});const l=oa({key:t.config.apiKey,...s}).slice(1),o=await t._getAdditionalHeaders();o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:o,...a};return eA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&la(t.emulatorConfig.host)&&(c.credentials="include"),eb.fetch()(await ib(t,t.config.apiHost,n,l),c)})}async function tb(t,e,n){t._canInitEmulator=!1;const i={...xR,...e};try{const r=new DR(t),a=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw Sl(t,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const l=a.ok?s.errorMessage:s.error.message,[o,c]=l.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sl(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw Sl(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw Sl(t,"user-disabled",s);const h=i[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw J0(t,h,c);En(t,h)}}catch(r){if(r instanceof vi)throw r;En(t,"network-request-failed",{message:String(r)})}}async function nb(t,e,n,i,r={}){const a=await ua(t,e,n,i,r);return"mfaPendingCredential"in a&&En(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function ib(t,e,n,i){const r=`${e}${n}?${i}`,a=t,s=a.config.emulator?Td(t.config,r):`${t.config.apiScheme}://${r}`;return OR.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(s).toString():s}class DR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(qt(this.auth,"network-request-failed")),IR.get())})}}function Sl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=qt(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function MR(t,e){return ua(t,"POST","/v1/accounts:delete",e)}async function xo(t,e){return ua(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kR(t,e=!1){const n=ht(t),i=await n.getIdToken(e),r=Cd(i);k(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const a=typeof r.firebase=="object"?r.firebase:void 0,s=a?.sign_in_provider;return{claims:r,token:i,authTime:Qa(Ou(r.auth_time)),issuedAtTime:Qa(Ou(r.iat)),expirationTime:Qa(Ou(r.exp)),signInProvider:s||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Ou(t){return Number(t)*1e3}function Cd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const r=Co(n);return r?JSON.parse(r):(ql("Failed to decode base64 JWT payload"),null)}catch(r){return ql("Caught error parsing JWT payload as JSON",r?.toString()),null}}function og(t){const e=Cd(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ys(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof vi&&LR(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function LR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class UR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oo(t){const e=t.auth,n=await t.getIdToken(),i=await ys(t,xo(e,{idToken:n}));k(i?.users.length,e,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const a=r.providerUserInfo?.length?rb(r.providerUserInfo):[],s=BR(t.providerData,a),l=t.isAnonymous,o=!(t.email&&r.passwordHash)&&!s?.length,c=l?o:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Kf(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function zR(t){const e=ht(t);await Oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BR(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function rb(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function jR(t,e){const n=await tb(t,{},async()=>{const i=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:a}=t.config,s=await ib(t,r,"/v1/token",`key=${a}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:l,body:i};return t.emulatorConfig&&la(t.emulatorConfig.host)&&(o.credentials="include"),eb.fetch()(s,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HR(t,e){return ua(t,"POST","/v2/accounts:revokeToken",Sc(t,e))}/**
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
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){k(e.length!==0,"internal-error");const n=og(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:a}=await jR(e,n);this.updateTokensAndExpiration(i,r,Number(a))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:a}=n,s=new Ar;return i&&(k(typeof i=="string","internal-error",{appName:e}),s.refreshToken=i),r&&(k(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),a&&(k(typeof a=="number","internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
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
 */function xn(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dt{constructor({uid:e,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new UR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Kf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ys(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kR(this,e)}reload(){return zR(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Oo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(ri(this.auth));const e=await this.getIdToken();return await ys(this,MR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,r=n.email??void 0,a=n.phoneNumber??void 0,s=n.photoURL??void 0,l=n.tenantId??void 0,o=n._redirectEventId??void 0,c=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:u,isAnonymous:p,providerData:y,stsTokenManager:b}=n;k(f&&b,e,"internal-error");const S=Ar.fromJSON(this.name,b);k(typeof f=="string",e,"internal-error"),xn(i,e.name),xn(r,e.name),k(typeof u=="boolean",e,"internal-error"),k(typeof p=="boolean",e,"internal-error"),xn(a,e.name),xn(s,e.name),xn(l,e.name),xn(o,e.name),xn(c,e.name),xn(h,e.name);const m=new Dt({uid:f,auth:e,email:r,emailVerified:u,displayName:i,isAnonymous:p,photoURL:s,phoneNumber:a,tenantId:l,stsTokenManager:S,createdAt:c,lastLoginAt:h});return y&&Array.isArray(y)&&(m.providerData=y.map(d=>({...d}))),o&&(m._redirectEventId=o),m}static async _fromIdTokenResponse(e,n,i=!1){const r=new Ar;r.updateFromServerResponse(n);const a=new Dt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Oo(a),a}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];k(r.localId!==void 0,"internal-error");const a=r.providerUserInfo!==void 0?rb(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!a?.length,l=new Ar;l.updateFromIdToken(i);const o=new Dt({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Kf(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!a?.length};return Object.assign(o,c),o}}/**
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
 */const cg=new Map;function ln(t){Sn(t instanceof Function,"Expected a class definition");let e=cg.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cg.set(t,e),e)}/**
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
 */class ab{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ab.type="NONE";const ug=ab;/**
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
 */function Vl(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:a}=this.auth;this.fullUserKey=Vl(this.userKey,r.apiKey,a),this.fullPersistenceKey=Vl("persistence",r.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xo(this.auth,{idToken:e}).catch(()=>{});return n?Dt._fromGetAccountInfoResponse(this.auth,n,e):null}return Dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Rr(ln(ug),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let a=r[0]||ln(ug);const s=Vl(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(s);if(h){let f;if(typeof h=="string"){const u=await xo(e,{idToken:h}).catch(()=>{});if(!u)break;f=await Dt._fromGetAccountInfoResponse(e,u,h)}else f=Dt._fromJSON(e,h);c!==a&&(l=f),a=c;break}}catch{}const o=r.filter(c=>c._shouldAllowMigration);return!a._shouldAllowMigration||!o.length?new Rr(a,e,i):(a=o[0],l&&await a._set(s,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==a)try{await c._remove(s)}catch{}})),new Rr(a,e,i))}}/**
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
 */function fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fb(e))return"Blackberry";if(hb(e))return"Webos";if(lb(e))return"Safari";if((e.includes("chrome/")||ob(e))&&!e.includes("edge/"))return"Chrome";if(ub(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function sb(t=Ye()){return/firefox\//i.test(t)}function lb(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ob(t=Ye()){return/crios\//i.test(t)}function cb(t=Ye()){return/iemobile/i.test(t)}function ub(t=Ye()){return/android/i.test(t)}function fb(t=Ye()){return/blackberry/i.test(t)}function hb(t=Ye()){return/webos/i.test(t)}function Ad(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PR(t=Ye()){return Ad(t)&&!!window.navigator?.standalone}function qR(){return nA()&&document.documentMode===10}function db(t=Ye()){return Ad(t)||ub(t)||hb(t)||fb(t)||/windows phone/i.test(t)||cb(t)}/**
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
 */function pb(t,e=[]){let n;switch(t){case"Browser":n=fg(Ye());break;case"Worker":n=`${fg(Ye())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ca}/${i}`}/**
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
 */class VR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=a=>new Promise((s,l)=>{try{const o=e(a);s(o)}catch(o){l(o)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function GR(t,e={}){return ua(t,"GET","/v2/passwordPolicy",Sc(t,e))}/**
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
 */const FR=6;class YR{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??FR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class KR{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hg(this),this.idTokenSubscription=new hg(this),this.beforeStateQueue=new VR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xo(this,{idToken:e}),i=await Dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(s,s))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,s=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===s)&&l?.user&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(ri(this));const n=e?ht(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(ri(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(ri(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GR(this),n=new YR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gs("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await HR(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(l,this,"internal-error"),l.then(()=>{s||a(this.currentUser)}),typeof n=="function"){const o=e.addObserver(n,i,r);return()=>{s=!0,o()}}else{const o=e.addObserver(n);return()=>{s=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&CR(`Error while retrieving App Check token: ${e.error}`),e?.token}}function wc(t){return ht(t)}class hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=hA(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QR(t){Rd=t}function XR(t){return Rd.loadJS(t)}function WR(){return Rd.gapiScript}function $R(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ZR(t,e){const n=Sd(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),a=n.getOptions();if(Hi(a,e??{}))return r;En(r,"already-initialized")}return n.initialize({options:e})}function JR(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(ln);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function eN(t,e,n){const i=wc(t);k(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,a=mb(e),{host:s,port:l}=tN(e),o=l===null?"":`:${l}`,c={url:`${a}//${s}${o}/`},h=Object.freeze({host:s,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){k(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),k(Hi(c,i.config.emulator)&&Hi(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,la(s)?(P0(`${a}//${s}${o}`),q0("Auth",!0)):nN()}function mb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tN(t){const e=mb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const a=r[1];return{host:a,port:dg(i.substr(a.length+1))}}else{const[a,s]=i.split(":");return{host:a,port:dg(s)}}}function dg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gb{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
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
 */async function Nr(t,e){return nb(t,"POST","/v1/accounts:signInWithIdp",Sc(t,e))}/**
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
 */const iN="http://localhost";class qi extends gb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...a}=n;if(!i||!r)return null;const s=new qi(i,r);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Nr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Nr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nr(e,n)}buildRequest(){const e={requestUri:iN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
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
 */class yb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ys extends yb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends Ys{constructor(){super("facebook.com")}static credential(e){return qi._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class zn extends Ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qi._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return zn.credential(n,i)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class Bn extends Ys{constructor(){super("github.com")}static credential(e){return qi._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
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
 */class jn extends Ys{constructor(){super("twitter.com")}static credential(e,n){return qi._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return jn.credential(n,i)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */async function rN(t,e){return nb(t,"POST","/v1/accounts:signUp",Sc(t,e))}/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const a=await Dt._fromIdTokenResponse(e,i,r),s=pg(i);return new fi({user:a,providerId:s,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=pg(i);return new fi({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function pg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function aN(t){if(Ot(t.app))return Promise.reject(ri(t));const e=wc(t);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new fi({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await rN(e,{returnSecureToken:!0}),i=await fi._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(i.user),i}/**
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
 */class Io extends vi{constructor(e,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Io(e,n,i,r)}}function _b(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(t,a,e,i):a})}async function sN(t,e,n=!1){const i=await ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",i)}/**
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
 */async function lN(t,e,n=!1){const{auth:i}=t;if(Ot(i.app))return Promise.reject(ri(i));const r="reauthenticate";try{const a=await ys(t,_b(i,r,e,t),n);k(a.idToken,i,"internal-error");const s=Cd(a.idToken);k(s,i,"internal-error");const{sub:l}=s;return k(t.uid===l,i,"user-mismatch"),fi._forOperation(t,r,a)}catch(a){throw a?.code==="auth/user-not-found"&&En(i,"user-mismatch"),a}}/**
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
 */async function oN(t,e,n=!1){if(Ot(t.app))return Promise.reject(ri(t));const i="signIn",r=await _b(t,i,e),a=await fi._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(a.user),a}function cN(t,e,n,i){return ht(t).onIdTokenChanged(e,n,i)}function uN(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function fN(t,e,n,i){return ht(t).onAuthStateChanged(e,n,i)}const Do="__sak";/**
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
 */class vb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Do,"1"),this.storage.removeItem(Do),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const hN=1e3,dN=10;class bb extends vb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=db(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,o)=>{this.notifyListeners(s,o)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const s=this.storage.getItem(i);!n&&this.localCache[i]===s||this.notifyListeners(i,s)},a=this.storage.getItem(i);qR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,dN):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},hN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bb.type="LOCAL";const pN=bb;/**
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
 */class Eb extends vb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eb.type="SESSION";const Sb=Eb;/**
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
 */function mN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Tc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:a}=n.data,s=this.handlersMap[r];if(!s?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(s).map(async c=>c(n.origin,a)),o=await mN(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tc.receivers=[];/**
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
 */function Nd(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,s;return new Promise((l,o)=>{const c=Nd("",20);r.port1.start();const h=setTimeout(()=>{o(new Error("unsupported_event"))},i);s={messageChannel:r,onMessage(f){const u=f;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(h),a=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(u.data.response);break;default:clearTimeout(h),clearTimeout(a),o(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Vt(){return window}function yN(t){Vt().location.href=t}/**
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
 */function wb(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function _N(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vN(){return navigator?.serviceWorker?.controller||null}function bN(){return wb()?self:null}/**
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
 */const Tb="firebaseLocalStorageDb",EN=1,Mo="firebaseLocalStorage",Cb="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cc(t,e){return t.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function SN(){const t=indexedDB.deleteDatabase(Tb);return new Ks(t).toPromise()}function Qf(){const t=indexedDB.open(Tb,EN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Mo,{keyPath:Cb})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Mo)?e(i):(i.close(),await SN(),e(await Qf()))})})}async function mg(t,e,n){const i=Cc(t,!0).put({[Cb]:e,value:n});return new Ks(i).toPromise()}async function wN(t,e){const n=Cc(t,!1).get(e),i=await new Ks(n).toPromise();return i===void 0?null:i.value}function gg(t,e){const n=Cc(t,!0).delete(e);return new Ks(n).toPromise()}const TN=800,CN=3;class Ab{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>CN)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tc._getInstance(bN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await _N(),!this.activeServiceWorker)return;this.sender=new gN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qf();return await mg(e,Do,"1"),await gg(e,Do),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>mg(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>wN(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const a=Cc(r,!1).getAll();return new Ks(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:a}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ab.type="LOCAL";const AN=Ab;new Fs(3e4,6e4);/**
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
 */function RN(t,e){return e?ln(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xd extends gb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NN(t){return oN(t.auth,new xd(t),t.bypassAuthState)}function xN(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),lN(n,new xd(t),t.bypassAuthState)}async function ON(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),sN(n,new xd(t),t.bypassAuthState)}/**
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
 */class Rb{constructor(e,n,i,r,a=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:a,error:s,type:l}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:n,sessionId:i,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(o))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NN;case"linkViaPopup":case"linkViaRedirect":return ON;case"reauthViaPopup":case"reauthViaRedirect":return xN;default:En(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IN=new Fs(2e3,1e4);class yr extends Rb{constructor(e,n,i,r,a){super(e,n,r,a),this.provider=i,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=Nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IN.get())};e()}}yr.currentPopupAction=null;/**
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
 */const DN="pendingRedirect",Gl=new Map;class MN extends Rb{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Gl.get(this.auth._key());if(!e){try{const i=await kN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Gl.set(this.auth._key(),e)}return this.bypassAuthState||Gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kN(t,e){const n=zN(e),i=UN(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function LN(t,e){Gl.set(t._key(),e)}function UN(t){return ln(t._redirectPersistence)}function zN(t){return Vl(DN,t.config.apiKey,t.name)}async function BN(t,e,n=!1){if(Ot(t.app))return Promise.reject(ri(t));const i=wc(t),r=RN(i,e),s=await new MN(i,r,n).execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}/**
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
 */const jN=10*60*1e3;class HN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Nb(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jN&&this.cachedEventUids.clear(),this.cachedEventUids.has(yg(e))}saveEventToCache(e){this.cachedEventUids.add(yg(e)),this.lastProcessedEventTime=Date.now()}}function yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nb({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function PN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nb(t);default:return!1}}/**
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
 */async function qN(t,e={}){return ua(t,"GET","/v1/projects",e)}/**
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
 */const VN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GN=/^https?/;async function FN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qN(t);for(const n of e)try{if(YN(n))return}catch{}En(t,"unauthorized-domain")}function YN(t){const e=Yf(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===i}if(!GN.test(n))return!1;if(VN.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const KN=new Fs(3e4,6e4);function _g(){const t=Vt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QN(t){return new Promise((e,n)=>{function i(){_g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_g(),n(qt(t,"network-request-failed"))},timeout:KN.get()})}if(Vt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Vt().gapi?.load)i();else{const r=$R("iframefcb");return Vt()[r]=()=>{gapi.load?i():n(qt(t,"network-request-failed"))},XR(`${WR()}?onload=${r}`).catch(a=>n(a))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function XN(t){return Fl=Fl||QN(t),Fl}/**
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
 */const WN=new Fs(5e3,15e3),$N="__/auth/iframe",ZN="emulator/auth/iframe",JN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ex=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tx(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Td(e,ZN):`https://${t.config.authDomain}/${$N}`,i={apiKey:e.apiKey,appName:t.name,v:ca},r=ex.get(t.config.apiHost);r&&(i.eid=r);const a=t._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${oa(i).slice(1)}`}async function nx(t){const e=await XN(t),n=Vt().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:tx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JN,dontclear:!0},i=>new Promise(async(r,a)=>{await i.restyle({setHideOnLeave:!1});const s=qt(t,"network-request-failed"),l=Vt().setTimeout(()=>{a(s)},WN.get());function o(){Vt().clearTimeout(l),r(i)}i.ping(o).then(o,()=>{a(s)})}))}/**
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
 */const ix={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rx=500,ax=600,sx="_blank",lx="http://localhost";class vg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ox(t,e,n,i=rx,r=ax){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const o={...ix,width:i.toString(),height:r.toString(),top:a,left:s},c=Ye().toLowerCase();n&&(l=ob(c)?sx:n),sb(c)&&(e=e||lx,o.scrollbars="yes");const h=Object.entries(o).reduce((u,[p,y])=>`${u}${p}=${y},`,"");if(PR(c)&&l!=="_self")return cx(e||"",l),new vg(null);const f=window.open(e||"",l,h);k(f,t,"popup-blocked");try{f.focus()}catch{}return new vg(f)}function cx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const ux="__/auth/handler",fx="emulator/auth/handler",hx=encodeURIComponent("fac");async function bg(t,e,n,i,r,a){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ca,eventId:r};if(e instanceof yb){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Hf(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))s[h]=f}if(e instanceof Ys){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const o=await t._getAppCheckToken(),c=o?`#${hx}=${encodeURIComponent(o)}`:"";return`${dx(t)}?${oa(l).slice(1)}${c}`}function dx({config:t}){return t.emulator?Td(t,fx):`https://${t.authDomain}/${ux}`}/**
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
 */const Iu="webStorageSupport";class px{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sb,this._completeRedirectFn=BN,this._overrideRedirectResult=LN}async _openPopup(e,n,i,r){Sn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await bg(e,n,i,Yf(),r);return ox(e,a,Nd())}async _openRedirect(e,n,i,r){await this._originValidation(e);const a=await bg(e,n,i,Yf(),r);return yN(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:a}=this.eventManagers[n];return r?Promise.resolve(r):(Sn(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await nx(e),i=new HN(e);return n.register("authEvent",r=>(k(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Iu,{type:Iu},r=>{const a=r?.[0]?.[Iu];a!==void 0&&n(!!a),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return db()||lb()||Ad()}}const mx=px;var Eg="@firebase/auth",Sg="1.12.0";/**
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
 */class gx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _x(t){Vr(new Pi("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=i.options;k(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const o={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pb(t)},c=new KR(i,r,a,o);return JR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Vr(new Pi("auth-internal",e=>{const n=wc(e.getProvider("auth").getImmediate());return(i=>new gx(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ii(Eg,Sg,yx(t)),ii(Eg,Sg,"esm2020")}/**
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
 */const vx=5*60,bx=H0("authIdTokenMaxAge")||vx;let wg=null;const Ex=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>bx)return;const r=n?.token;wg!==r&&(wg=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Sx(t=Q0()){const e=Sd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZR(t,{popupRedirectResolver:mx,persistence:[AN,pN,Sb]}),i=H0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const s=Ex(a.toString());uN(n,s,()=>s(n.currentUser)),cN(n,l=>s(l))}}const r=B0("auth");return r&&eN(n,`http://${r}`),n}function wx(){return document.getElementsByTagName("head")?.[0]??document}QR({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const a=qt("internal-error");a.customData=r,n(a)},i.type="text/javascript",i.charset="UTF-8",wx().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_x("Browser");var Tx="firebase",Cx="12.8.0";/**
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
 */ii(Tx,Cx,"app");var Tg={};const Cg="@firebase/database",Ag="1.1.0";/**
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
 */let xb="";function Ax(t){xb=t}/**
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
 */class Rx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ms(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Nx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ob=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Rx(e)}}catch{}return new Nx},xi=Ob("localStorage"),xx=Ob("sessionStorage");/**
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
 */const xr=new bd("@firebase/database"),Ox=function(){let t=1;return function(){return t++}}(),Ib=function(t){const e=mA(t),n=new fA;n.update(e);const i=n.digest();return yd.encodeByteArray(i)},Qs=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Qs.apply(null,i):typeof i=="object"?e+=Ae(i):e+=i,e+=" "}return e};let Xa=null,Rg=!0;const Ix=function(t,e){T(!0,"Can't turn on custom loggers persistently."),xr.logLevel=J.VERBOSE,Xa=xr.log.bind(xr)},Ue=function(...t){if(Rg===!0&&(Rg=!1,Xa===null&&xx.get("logging_enabled")===!0&&Ix()),Xa){const e=Qs.apply(null,t);Xa(e)}},Xs=function(t){return function(...e){Ue(t,...e)}},Xf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Qs(...t);xr.error(e)},wn=function(...t){const e=`FIREBASE FATAL ERROR: ${Qs(...t)}`;throw xr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Qs(...t);xr.warn(e)},Dx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Od=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Mx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gr="[MIN_NAME]",Vi="[MAX_NAME]",$i=function(t,e){if(t===e)return 0;if(t===Gr||e===Vi)return-1;if(e===Gr||t===Vi)return 1;{const n=Ng(t),i=Ng(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},kx=function(t,e){return t===e?0:t<e?-1:1},Sa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},Id=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ae(e[i]),n+=":",n+=Id(t[e[i]]);return n+="}",n},Db=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Mb=function(t){T(!Od(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,a,s,l,o;t===0?(a=0,s=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),a=l+i,s=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(a=0,s=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(o=n;o;o-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(o=e;o;o-=1)c.push(a%2?1:0),a=Math.floor(a/2);c.push(r?1:0),c.reverse();const h=c.join("");let f="";for(o=0;o<64;o+=8){let u=parseInt(h.substr(o,8),2).toString(16);u.length===1&&(u="0"+u),f=f+u}return f.toLowerCase()},Lx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ux=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zx(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Bx=new RegExp("^-?(0*)\\d{1,10}$"),jx=-2147483648,Hx=2147483647,Ng=function(t){if(Bx.test(t)){const e=Number(t);if(e>=jx&&e<=Hx)return e}return null},fa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Px=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class qx{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ot(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Vx{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Yl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yl.OWNER="owner";/**
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
 */const Dd="5",kb="v",Lb="s",Ub="r",zb="f",Bb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jb="ls",Hb="p",Wf="ac",Pb="websocket",qb="long_polling";/**
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
 */class Vb{constructor(e,n,i,r,a=!1,s="",l=!1,o=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=a,this.persistenceKey=s,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=o,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Gx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gb(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let i;if(e===Pb)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qb)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gx(t)&&(n.ns=t.namespace);const r=[];return Pe(n,(a,s)=>{r.push(a+"="+s)}),i+r.join("&")}/**
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
 */class Fx{constructor(){this.counters_={}}incrementCounter(e,n=1){Kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return GC(this.counters_)}}/**
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
 */const Du={},Mu={};function Md(t){const e=t.toString();return Du[e]||(Du[e]=new Fx),Du[e]}function Yx(t,e){const n=t.toString();return Mu[n]||(Mu[n]=e()),Mu[n]}/**
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
 */class Kx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&fa(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const xg="start",Qx="close",Xx="pLPCommand",Wx="pRTLPCB",Fb="id",Yb="pw",Kb="ser",$x="cb",Zx="seg",Jx="ts",eO="d",tO="dframe",Qb=1870,Xb=30,nO=Qb-Xb,iO=25e3,rO=3e4;class _r{constructor(e,n,i,r,a,s,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=a,this.transportSessionId=s,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xs(e),this.stats_=Md(n),this.urlFn=o=>(this.appCheckToken&&(o[Wf]=this.appCheckToken),Gb(n,qb,o))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Kx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rO)),Mx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kd((...a)=>{const[s,l,o,c,h]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===xg)this.id=l,this.password=o;else if(s===Qx)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...a)=>{const[s,l]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(s,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[xg]="t",i[Kb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$x]=this.scriptTagHolder.uniqueCallbackIdentifier),i[kb]=Dd,this.transportSessionId&&(i[Lb]=this.transportSessionId),this.lastSessionId&&(i[jb]=this.lastSessionId),this.applicationId&&(i[Hb]=this.applicationId),this.appCheckToken&&(i[Wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bb.test(location.hostname)&&(i[Ub]=zb);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_r.forceAllow_=!0}static forceDisallow(){_r.forceDisallow_=!0}static isAvailable(){return _r.forceAllow_?!0:!_r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Lx()&&!Ux()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=U0(n),r=Db(i,nO);for(let a=0;a<r.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[tO]="t",i[Fb]=e,i[Yb]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kd{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ox(),window[Xx+this.uniqueCallbackIdentifier]=e,window[Wx+this.uniqueCallbackIdentifier]=n,this.myIFrame=kd.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(l){Ue("frame writing exception"),l.stack&&Ue(l.stack),Ue(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fb]=this.myID,e[Yb]=this.myPW,e[Kb]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Xb+i.length<=Qb;){const s=this.pendingSegs.shift();i=i+"&"+Zx+r+"="+s.seg+"&"+Jx+r+"="+s.ts+"&"+eO+r+"="+s.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(iO)),a=()=>{clearTimeout(r),i()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const aO=16384,sO=45e3;let ko=null;typeof MozWebSocket<"u"?ko=MozWebSocket:typeof WebSocket<"u"&&(ko=WebSocket);class It{constructor(e,n,i,r,a,s,l){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xs(this.connId),this.stats_=Md(n),this.connURL=It.connectionURL_(n,s,l,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,a){const s={};return s[kb]=Dd,typeof location<"u"&&location.hostname&&Bb.test(location.hostname)&&(s[Ub]=zb),n&&(s[Lb]=n),i&&(s[jb]=i),r&&(s[Wf]=r),a&&(s[Hb]=a),Gb(e,Pb,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xi.set("previous_websocket_failure",!0);try{let i;iA(),this.mySock=new ko(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){It.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ko!==null&&!It.forceDisallow_}static previouslyFailed(){return xi.isInMemoryStorage||xi.get("previous_websocket_failure")===!0}markConnectionHealthy(){xi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ms(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Db(n,aO);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}It.responsesRequiredToBeHealthy=2;It.healthyTimeout=3e4;/**
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
 */class _s{static get ALL_TRANSPORTS(){return[_r,It]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=It&&It.isAvailable();let i=n&&!It.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[It];else{const r=this.transports_=[];for(const a of _s.ALL_TRANSPORTS)a&&a.isAvailable()&&r.push(a);_s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_s.globalTransportInitialized_=!1;/**
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
 */const lO=6e4,oO=5e3,cO=10*1024,uO=100*1024,ku="t",Og="d",fO="s",Ig="r",hO="e",Dg="o",Mg="a",kg="n",Lg="p",dO="h";class pO{constructor(e,n,i,r,a,s,l,o,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=a,this.onMessage_=s,this.onReady_=l,this.onDisconnect_=o,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xs("c:"+this.id+":"),this.transportManager_=new _s(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Wa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ku in e){const n=e[ku];n===Mg?this.upgradeIfSecondaryHealthy_():n===Ig?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Sa("t",e),i=Sa("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Sa("t",e),i=Sa("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Sa(ku,e);if(Og in e){const i=e[Og];if(n===dO){const r={...i};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===kg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fO?this.onConnectionShutdown_(i):n===Ig?this.onReset_(i):n===hO?Xf("Server Error: "+i):n===Dg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dd!==i&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Wa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Wb{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $b{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let a=0;a<r.length;a++)if(r[a].callback===n&&(!i||i===r[a].context)){r.splice(a,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Lo extends $b{static getInstance(){return new Lo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ug=32,zg=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new te("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hi(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function Ld(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function pe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof te)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new te(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=j(t),i=j(e);if(n===null)return e;if(n===i)return Ge(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gO(t,e){const n=vs(t,0),i=vs(e,0);for(let r=0;r<n.length&&r<i.length;r++){const a=$i(n[r],i[r]);if(a!==0)return a}return n.length===i.length?0:n.length<i.length?-1:1}function Ud(t,e){if(hi(t)!==hi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Et(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(hi(t)>hi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class yO{constructor(e,n){this.errorPrefix_=n,this.parts_=vs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ec(this.parts_[i]);Jb(this)}}function _O(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ec(e),Jb(t)}function vO(t){const e=t.parts_.pop();t.byteLength_-=Ec(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jb(t){if(t.byteLength_>zg)throw new Error(t.errorPrefix_+"has a key path longer than "+zg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ug)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ug+") or object contains a cycle "+Ni(t))}function Ni(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class zd extends $b{static getInstance(){return new zd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const wa=1e3,bO=60*5*1e3,Bg=30*1e3,EO=1.3,SO=3e4,wO="server_kill",jg=3;class dn extends Wb{constructor(e,n,i,r,a,s,l,o){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=a,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.authOverride_=o,this.id=dn.nextPersistentConnectionId_++,this.log_=Xs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wa,this.maxReconnectDelay_=bO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,a={r,a:e,b:n};this.log_(Ae(a)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Vs,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:s=>{const l=s.d;s.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,i,r){this.initConnection_();const a=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+a),this.listens.has(s)||this.listens.set(s,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(s).has(a),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(s).set(a,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const a={p:i},s="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(s,a,l=>{const o=l.d,c=l.s;dn.warnOnListenWarnings_(o,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,o))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kt(e,"w")){const i=qr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cA(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const a=r.s,s=r.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const a={p:e},s="n";r&&(a.q=i,a.t=r),this.sendRequest(s,a)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const a={p:n,d:i};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,s=>{r&&setTimeout(()=>{r(s.s,s.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,a){this.initConnection_();const s={p:n,d:i};a!==void 0&&(s.h=a),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const a=i.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xf("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SO&&(this.reconnectDelay_=wa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+dn.nextConnectionId_++,a=this.lastSessionId;let s=!1,l=null;const o=function(){l?l.close():(s=!0,i())},c=function(f){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:o,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);s?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=u&&u.token,l=new pO(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{Fe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(wO)},a))}catch(f){this.log_("Failed to get token: "+f),s||(this.repoInfo_.nodeAdmin&&Fe(f),o())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hf(this.interruptReasons_)&&(this.reconnectDelay_=wa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(a=>Id(a)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new te(e).toString();let r;if(this.listens.has(i)){const a=this.listens.get(i);r=a.get(n),a.delete(n),a.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jg&&(this.reconnectDelay_=Bg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xb.replace(/\./g,"-")]=1,vd()?e["framework.cordova"]=1:V0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lo.getInstance().currentlyOnline();return Hf(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
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
 */class Ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new H(Gr,e),r=new H(Gr,n);return this.compare(i,r)!==0}minPost(){return H.MIN}}/**
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
 */let wl;class eE extends Ac{static get __EMPTY_NODE(){return wl}static set __EMPTY_NODE(e){wl=e}compare(e,n){return $i(e.name,n.name)}isDefinedOn(e){throw sa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Vi,wl)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,wl)}toString(){return".key"}}const Or=new eE;/**
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
 */class Tl{constructor(e,n,i,r,a=null){this.isReverse_=r,this.resultGenerator_=a,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=n?i(e.key,n):1,r&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,i,r,a){this.key=e,this.value=n,this.color=i??Ie.RED,this.left=r??Ze.EMPTY_NODE,this.right=a??Ze.EMPTY_NODE}copy(e,n,i,r,a){return new Ie(e??this.key,n??this.value,i??this.color,r??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const a=i(e,r.key);return a<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):a===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class TO{copy(e,n,i,r,a){return this}insert(e,n,i){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ze{constructor(e,n=Ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tl(this.root_,null,this.comparator_,!0,e)}}Ze.EMPTY_NODE=new TO;/**
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
 */function CO(t,e){return $i(t.name,e.name)}function Bd(t,e){return $i(t,e)}/**
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
 */let $f;function AO(t){$f=t}const tE=function(t){return typeof t=="number"?"number:"+Mb(t):"string:"+t},nE=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kt(e,".sv"),"Priority must be a string or number.")}else T(t===$f||t.isEmpty(),"priority of unexpected type.");T(t===$f||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Hg;class xe{static set __childrenNodeConstructor(e){Hg=e}static get __childrenNodeConstructor(){return Hg}constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:j(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=j(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(T(i!==".priority"||hi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Mb(this.value_):e+=this.value_,this.lazyHash_=Ib(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=xe.VALUE_TYPE_ORDER.indexOf(n),a=xe.VALUE_TYPE_ORDER.indexOf(i);return T(r>=0,"Unknown leaf type: "+n),T(a>=0,"Unknown leaf type: "+i),r===a?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let iE,rE;function RO(t){iE=t}function NO(t){rE=t}class xO extends Ac{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),a=i.compareTo(r);return a===0?$i(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Vi,new xe("[PRIORITY-POST]",rE))}makePost(e,n){const i=iE(e);return new H(n,new xe("[PRIORITY-POST]",i))}toString(){return".priority"}}const me=new xO;/**
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
 */const OO=Math.log(2);class IO{constructor(e){const n=a=>parseInt(Math.log(a)/OO,10),i=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Uo=function(t,e,n,i){t.sort(e);const r=function(o,c){const h=c-o;let f,u;if(h===0)return null;if(h===1)return f=t[o],u=n?n(f):f,new Ie(u,f.node,Ie.BLACK,null,null);{const p=parseInt(h/2,10)+o,y=r(o,p),b=r(p+1,c);return f=t[p],u=n?n(f):f,new Ie(u,f.node,Ie.BLACK,y,b)}},a=function(o){let c=null,h=null,f=t.length;const u=function(y,b){const S=f-y,m=f;f-=y;const d=r(S+1,m),g=t[S],v=n?n(g):g;p(new Ie(v,g.node,b,null,d))},p=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<o.count;++y){const b=o.nextBitIsOne(),S=Math.pow(2,o.count-(y+1));b?u(S,Ie.BLACK):(u(S,Ie.BLACK),u(S,Ie.RED))}return h},s=new IO(t.length),l=a(s);return new Ze(i||e,l)};/**
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
 */let Lu;const tr={};class on{static get Default(){return T(tr&&me,"ChildrenNode.ts has not been loaded"),Lu=Lu||new on({".priority":tr},{".priority":me}),Lu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=qr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ze?n:null}hasIndex(e){return Kt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Or,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const a=n.getIterator(H.Wrap);let s=a.getNext();for(;s;)r=r||e.isDefinedOn(s.node),i.push(s),s=a.getNext();let l;r?l=Uo(i,e.getCompare()):l=tr;const o=e.toString(),c={...this.indexSet_};c[o]=e;const h={...this.indexes_};return h[o]=l,new on(h,c)}addToIndexes(e,n){const i=Ao(this.indexes_,(r,a)=>{const s=qr(this.indexSet_,a);if(T(s,"Missing index implementation for "+a),r===tr)if(s.isDefinedOn(e.node)){const l=[],o=n.getIterator(H.Wrap);let c=o.getNext();for(;c;)c.name!==e.name&&l.push(c),c=o.getNext();return l.push(e),Uo(l,s.getCompare())}else return tr;else{const l=n.get(e.name);let o=r;return l&&(o=o.remove(new H(e.name,l))),o.insert(e,e.node)}});return new on(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ao(this.indexes_,r=>{if(r===tr)return r;{const a=n.get(e.name);return a?r.remove(new H(e.name,a)):r}});return new on(i,this.indexSet_)}}/**
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
 */let Ta;class O{static get EMPTY_NODE(){return Ta||(Ta=new O(new Ze(Bd),null,on.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&nE(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ta}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ta:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new H(e,n);let r,a;n.isEmpty()?(r=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(i,this.children_));const s=r.isEmpty()?Ta:this.priorityNode_;return new O(r,s,a)}}updateChild(e,n){const i=j(e);if(i===null)return n;{T(j(e)!==".priority"||hi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(re(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,a=!0;if(this.forEachChild(me,(s,l)=>{n[s]=l.val(e),i++,a&&O.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):a=!1}),!e&&a&&r<2*i){const s=[];for(const l in n)s[l]=n[l];return s}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tE(this.getPriority().val())+":"),this.forEachChild(me,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Ib(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const a=r.getPredecessorKey(new H(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,H.Wrap);let a=r.peek();for(;a!=null&&n.compare(a,e)<0;)r.getNext(),a=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let a=r.peek();for(;a!=null&&n.compare(a,e)>0;)r.getNext(),a=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ws?-1:0}withIndex(e){if(e===Or||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Or||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(me),r=n.getIterator(me);let a=i.getNext(),s=r.getNext();for(;a&&s;){if(a.name!==s.name||!a.node.equals(s.node))return!1;a=i.getNext(),s=r.getNext()}return a===null&&s===null}else return!1;else return!1}}resolveIndex_(e){return e===Or?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DO extends O{constructor(){super(new Ze(Bd),O.EMPTY_NODE,on.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Ws=new DO;Object.defineProperties(H,{MIN:{value:new H(Gr,O.EMPTY_NODE)},MAX:{value:new H(Vi,Ws)}});eE.__EMPTY_NODE=O.EMPTY_NODE;xe.__childrenNodeConstructor=O;AO(Ws);NO(Ws);/**
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
 */const MO=!0;function Te(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,Te(e))}if(!(t instanceof Array)&&MO){const n=[];let i=!1;if(Pe(t,(s,l)=>{if(s.substring(0,1)!=="."){const o=Te(l);o.isEmpty()||(i=i||!o.getPriority().isEmpty(),n.push(new H(s,o)))}}),n.length===0)return O.EMPTY_NODE;const a=Uo(n,CO,s=>s.name,Bd);if(i){const s=Uo(n,me.getCompare());return new O(a,Te(e),new on({".priority":s},{".priority":me}))}else return new O(a,Te(e),on.Default)}else{let n=O.EMPTY_NODE;return Pe(t,(i,r)=>{if(Kt(t,i)&&i.substring(0,1)!=="."){const a=Te(r);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(i,a))}}),n.updatePriority(Te(e))}}RO(Te);/**
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
 */class kO extends Ac{constructor(e){super(),this.indexPath_=e,T(!G(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),a=i.compareTo(r);return a===0?$i(e.name,n.name):a}makePost(e,n){const i=Te(e),r=O.EMPTY_NODE.updateChild(this.indexPath_,i);return new H(n,r)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Ws);return new H(Vi,e)}toString(){return vs(this.indexPath_,0).join("/")}}/**
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
 */class LO extends Ac{compare(e,n){const i=e.node.compareTo(n.node);return i===0?$i(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const i=Te(e);return new H(n,i)}toString(){return".value"}}const UO=new LO;/**
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
 */function aE(t){return{type:"value",snapshotNode:t}}function Fr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Es(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function zO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class jd{constructor(e){this.index_=e}updateChild(e,n,i,r,a,s){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(r).equals(i.getChild(r))&&l.isEmpty()===i.isEmpty()||(s!=null&&(i.isEmpty()?e.hasChild(n)?s.trackChildChange(bs(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?s.trackChildChange(Fr(n,i)):s.trackChildChange(Es(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(me,(r,a)=>{n.hasChild(r)||i.trackChildChange(bs(r,a))}),n.isLeafNode()||n.forEachChild(me,(r,a)=>{if(e.hasChild(r)){const s=e.getImmediateChild(r);s.equals(a)||i.trackChildChange(Es(r,a,s))}else i.trackChildChange(Fr(r,a))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ss{constructor(e){this.indexedFilter_=new jd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ss.getStartPost_(e),this.endPost_=Ss.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,a,s){return this.matches(new H(n,i))||(i=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,a,s)}updateFullNode(e,n,i){n.isLeafNode()&&(n=O.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(O.EMPTY_NODE);const a=this;return n.forEachChild(me,(s,l)=>{a.matches(new H(s,l))||(r=r.updateImmediateChild(s,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class BO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,a,s){return this.rangedFilter_.matches(new H(n,i))||(i=O.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,a,s):this.fullLimitUpdateChild_(e,n,i,a,s)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=O.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;a.hasNext()&&s<this.limit_;){const l=a.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))r=r.updateImmediateChild(l.name,l.node),s++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(O.EMPTY_NODE);let a;this.reverse_?a=r.getReverseIterator(this.index_):a=r.getIterator(this.index_);let s=0;for(;a.hasNext();){const l=a.getNext();s<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?s++:r=r.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,a){let s;if(this.reverse_){const f=this.index_.getCompare();s=(u,p)=>f(p,u)}else s=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const o=new H(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(o);if(l.hasChild(n)){const f=l.getImmediateChild(n);let u=r.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||l.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const p=u==null?1:s(u,o);if(h&&!i.isEmpty()&&p>=0)return a?.trackChildChange(Es(n,i,f)),l.updateImmediateChild(n,i);{a?.trackChildChange(bs(n,f));const b=l.updateImmediateChild(n,O.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(a?.trackChildChange(Fr(u.name,u.node)),b.updateImmediateChild(u.name,u.node)):b}}else return i.isEmpty()?e:h&&s(c,o)>=0?(a!=null&&(a.trackChildChange(bs(c.name,c.node)),a.trackChildChange(Fr(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
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
 */class Hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jO(t){return t.loadsAllData()?new jd(t.getIndex()):t.hasLimit()?new BO(t):new Ss(t)}function Pg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===UO?n="$value":t.index_===Or?n="$key":(T(t.index_ instanceof kO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ae(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ae(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ae(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
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
 */class zo extends Wb{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Xs("p:rest:"),this.listens_={}}listen(e,n,i,r){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const s=zo.getListenId_(e,i),l={};this.listens_[s]=l;const o=Pg(e._queryParams);this.restRequest_(a+".json",o,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(a,f,!1,i),qr(this.listens_,s)===l){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",r(u,null)}})}unlisten(e,n){const i=zo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Pg(e._queryParams),i=e._path.toString(),r=new Vs;return this.restRequest_(i+".json",n,(a,s)=>{let l=s;a===404&&(l=null,a=null),a===null?(this.onDataUpdate_(i,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,a])=>{r&&r.accessToken&&(n.auth=r.accessToken),a&&a.token&&(n.ac=a.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oa(n);this.log_("Sending REST request for "+s);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+s+" received. status:",l.status,"response:",l.responseText);let o=null;if(l.status>=200&&l.status<300){try{o=ms(l.responseText)}catch{Fe("Failed to parse JSON response for "+s+": "+l.responseText)}i(null,o)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+s+" Status: "+l.status),i(l.status);i=null}},l.open("GET",s,!0),l.send()})}}/**
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
 */class HO{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Bo(){return{value:null,children:new Map}}function sE(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=j(e);t.children.has(i)||t.children.set(i,Bo());const r=t.children.get(i);e=re(e),sE(r,e,n)}}function Zf(t,e,n){t.value!==null?n(e,t.value):PO(t,(i,r)=>{const a=new te(e.toString()+"/"+i);Zf(r,a,n)})}function PO(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class qO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Pe(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Vg=10*1e3,VO=30*1e3,GO=5*60*1e3;class FO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qO(e);const i=Vg+(VO-Vg)*Math.random();Wa(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Pe(e,(r,a)=>{a>0&&Kt(this.statsToReport_,r)&&(n[r]=a,i=!0)}),i&&this.server_.reportStats(n),Wa(this.reportStats_.bind(this),Math.floor(Math.random()*2*GO))}}/**
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
 */var Mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mt||(Mt={}));function Pd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class jo{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Mt.ACK_USER_WRITE,this.source=Pd()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new jo(K(),n,this.revert)}}else return T(j(this.path)===e,"operationForChild called for unrelated child."),new jo(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class ws{constructor(e,n){this.source=e,this.path=n,this.type=Mt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new ws(this.source,K()):new ws(this.source,re(this.path))}}/**
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
 */class Gi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Mt.OVERWRITE}operationForChild(e){return G(this.path)?new Gi(this.source,K(),this.snap.getImmediateChild(e)):new Gi(this.source,re(this.path),this.snap)}}/**
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
 */class Yr{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Mt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new Gi(this.source,K(),n.value):new Yr(this.source,K(),n)}else return T(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yr(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class di{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class YO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function KO(t,e,n,i){const r=[],a=[];return e.forEach(s=>{s.type==="child_changed"&&t.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&a.push(zO(s.childName,s.snapshotNode))}),Ca(t,r,"child_removed",e,i,n),Ca(t,r,"child_added",e,i,n),Ca(t,r,"child_moved",a,i,n),Ca(t,r,"child_changed",e,i,n),Ca(t,r,"value",e,i,n),r}function Ca(t,e,n,i,r,a){const s=i.filter(l=>l.type===n);s.sort((l,o)=>XO(t,l,o)),s.forEach(l=>{const o=QO(t,l,a);r.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(o,t.query_))})})}function QO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function XO(t,e,n){if(e.childName==null||n.childName==null)throw sa("Should only compare child_ events.");const i=new H(e.childName,e.snapshotNode),r=new H(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function Rc(t,e){return{eventCache:t,serverCache:e}}function $a(t,e,n,i){return Rc(new di(e,n,i),t.serverCache)}function lE(t,e,n,i){return Rc(t.eventCache,new di(e,n,i))}function Ho(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Uu;const WO=()=>(Uu||(Uu=new Ze(kx)),Uu);class ie{static fromObject(e){let n=new ie(null);return Pe(e,(i,r)=>{n=n.set(new te(i),r)}),n}constructor(e,n=WO()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(G(e))return null;{const i=j(e),r=this.children.get(i);if(r!==null){const a=r.findRootMostMatchingPathAndValue(re(e),n);return a!=null?{path:pe(new te(i),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=j(e),i=this.children.get(n);return i!==null?i.subtree(re(e)):new ie(null)}}set(e,n){if(G(e))return new ie(n,this.children);{const i=j(e),a=(this.children.get(i)||new ie(null)).set(re(e),n),s=this.children.insert(i,a);return new ie(this.value,s)}}remove(e){if(G(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=j(e),i=this.children.get(n);if(i){const r=i.remove(re(e));let a;return r.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,r),this.value===null&&a.isEmpty()?new ie(null):new ie(this.value,a)}else return this}}get(e){if(G(e))return this.value;{const n=j(e),i=this.children.get(n);return i?i.get(re(e)):null}}setTree(e,n){if(G(e))return n;{const i=j(e),a=(this.children.get(i)||new ie(null)).setTree(re(e),n);let s;return a.isEmpty()?s=this.children.remove(i):s=this.children.insert(i,a),new ie(this.value,s)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,a)=>{i[r]=a.fold_(pe(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(G(e))return null;{const a=j(e),s=this.children.get(a);return s?s.findOnPath_(re(e),pe(n,a),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,i){if(G(e))return this;{this.value&&i(n,this.value);const r=j(e),a=this.children.get(r);return a?a.foreachOnPath_(re(e),pe(n,r),i):new ie(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(pe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new ie(null))}}function Za(t,e,n){if(G(e))return new kt(new ie(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let a=i.value;const s=Ge(r,e);return a=a.updateChild(s,n),new kt(t.writeTree_.set(r,a))}else{const r=new ie(n),a=t.writeTree_.setTree(e,r);return new kt(a)}}}function Jf(t,e,n){let i=t;return Pe(n,(r,a)=>{i=Za(i,pe(e,r),a)}),i}function Gg(t,e){if(G(e))return kt.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new kt(n)}}function eh(t,e){return Zi(t,e)!=null}function Zi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function Fg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(i,r)=>{e.push(new H(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new H(i,r.value))}),e}function ai(t,e){if(G(e))return t;{const n=Zi(t,e);return n!=null?new kt(new ie(n)):new kt(t.writeTree_.subtree(e))}}function th(t){return t.writeTree_.isEmpty()}function Kr(t,e){return oE(K(),t.writeTree_,e)}function oE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,a)=>{r===".priority"?(T(a.value!==null,"Priority writes must always be leaf nodes"),i=a.value):n=oE(pe(t,r),a,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(pe(t,".priority"),i)),n}}/**
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
 */function Nc(t,e){return hE(e,t)}function $O(t,e,n,i,r){T(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Za(t.visibleWrites,e,n)),t.lastWriteId=i}function ZO(t,e,n,i){T(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Jf(t.visibleWrites,e,n),t.lastWriteId=i}function JO(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function eI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,a=!1,s=t.allWrites.length-1;for(;r&&s>=0;){const l=t.allWrites[s];l.visible&&(s>=n&&tI(l,i.path)?r=!1:Et(i.path,l.path)&&(a=!0)),s--}if(r){if(a)return nI(t),!0;if(i.snap)t.visibleWrites=Gg(t.visibleWrites,i.path);else{const l=i.children;Pe(l,o=>{t.visibleWrites=Gg(t.visibleWrites,pe(i.path,o))})}return!0}else return!1}function tI(t,e){if(t.snap)return Et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Et(pe(t.path,n),e))return!0;return!1}function nI(t){t.visibleWrites=cE(t.allWrites,iI,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function iI(t){return t.visible}function cE(t,e,n){let i=kt.empty();for(let r=0;r<t.length;++r){const a=t[r];if(e(a)){const s=a.path;let l;if(a.snap)Et(n,s)?(l=Ge(n,s),i=Za(i,l,a.snap)):Et(s,n)&&(l=Ge(s,n),i=Za(i,K(),a.snap.getChild(l)));else if(a.children){if(Et(n,s))l=Ge(n,s),i=Jf(i,l,a.children);else if(Et(s,n))if(l=Ge(s,n),G(l))i=Jf(i,K(),a.children);else{const o=qr(a.children,j(l));if(o){const c=o.getChild(re(l));i=Za(i,K(),c)}}}else throw sa("WriteRecord should have .snap or .children")}}return i}function uE(t,e,n,i,r){if(!i&&!r){const a=Zi(t.visibleWrites,e);if(a!=null)return a;{const s=ai(t.visibleWrites,e);if(th(s))return n;if(n==null&&!eh(s,K()))return null;{const l=n||O.EMPTY_NODE;return Kr(s,l)}}}else{const a=ai(t.visibleWrites,e);if(!r&&th(a))return n;if(!r&&n==null&&!eh(a,K()))return null;{const s=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Et(c.path,e)||Et(e,c.path))},l=cE(t.allWrites,s,e),o=n||O.EMPTY_NODE;return Kr(l,o)}}}function rI(t,e,n){let i=O.EMPTY_NODE;const r=Zi(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(me,(a,s)=>{i=i.updateImmediateChild(a,s)}),i;if(n){const a=ai(t.visibleWrites,e);return n.forEachChild(me,(s,l)=>{const o=Kr(ai(a,new te(s)),l);i=i.updateImmediateChild(s,o)}),Fg(a).forEach(s=>{i=i.updateImmediateChild(s.name,s.node)}),i}else{const a=ai(t.visibleWrites,e);return Fg(a).forEach(s=>{i=i.updateImmediateChild(s.name,s.node)}),i}}function aI(t,e,n,i,r){T(i||r,"Either existingEventSnap or existingServerSnap must exist");const a=pe(e,n);if(eh(t.visibleWrites,a))return null;{const s=ai(t.visibleWrites,a);return th(s)?r.getChild(n):Kr(s,r.getChild(n))}}function sI(t,e,n,i){const r=pe(e,n),a=Zi(t.visibleWrites,r);if(a!=null)return a;if(i.isCompleteForChild(n)){const s=ai(t.visibleWrites,r);return Kr(s,i.getNode().getImmediateChild(n))}else return null}function lI(t,e){return Zi(t.visibleWrites,e)}function oI(t,e,n,i,r,a,s){let l;const o=ai(t.visibleWrites,e),c=Zi(o,K());if(c!=null)l=c;else if(n!=null)l=Kr(o,n);else return[];if(l=l.withIndex(s),!l.isEmpty()&&!l.isLeafNode()){const h=[],f=s.getCompare(),u=a?l.getReverseIteratorFrom(i,s):l.getIteratorFrom(i,s);let p=u.getNext();for(;p&&h.length<r;)f(p,i)!==0&&h.push(p),p=u.getNext();return h}else return[]}function cI(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Po(t,e,n,i){return uE(t.writeTree,t.treePath,e,n,i)}function Gd(t,e){return rI(t.writeTree,t.treePath,e)}function Yg(t,e,n,i){return aI(t.writeTree,t.treePath,e,n,i)}function qo(t,e){return lI(t.writeTree,pe(t.treePath,e))}function uI(t,e,n,i,r,a){return oI(t.writeTree,t.treePath,e,n,i,r,a)}function Fd(t,e,n){return sI(t.writeTree,t.treePath,e,n)}function fE(t,e){return hE(pe(t.treePath,e),t.writeTree)}function hE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class fI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const a=r.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(i,Es(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(i,bs(i,r.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(i,Fr(i,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(i,Es(i,e.snapshotNode,r.oldSnap));else throw sa("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hI{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const dE=new hI;class Yd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new di(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fi(this.viewCache_),a=uI(this.writes_,r,n,1,i,e);return a.length===0?null:a[0]}}/**
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
 */function dI(t){return{filter:t}}function pI(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mI(t,e,n,i,r){const a=new fI;let s,l;if(n.type===Mt.OVERWRITE){const c=n;c.source.fromUser?s=nh(t,e,c.path,c.snap,i,r,a):(T(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),s=Vo(t,e,c.path,c.snap,i,r,l,a))}else if(n.type===Mt.MERGE){const c=n;c.source.fromUser?s=yI(t,e,c.path,c.children,i,r,a):(T(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),s=ih(t,e,c.path,c.children,i,r,l,a))}else if(n.type===Mt.ACK_USER_WRITE){const c=n;c.revert?s=bI(t,e,c.path,i,r,a):s=_I(t,e,c.path,c.affectedTree,i,r,a)}else if(n.type===Mt.LISTEN_COMPLETE)s=vI(t,e,n.path,i,a);else throw sa("Unknown operation type: "+n.type);const o=a.getChanges();return gI(e,s,o),{viewCache:s,changes:o}}function gI(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),a=Ho(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(a)||!i.getNode().getPriority().equals(a.getPriority()))&&n.push(aE(Ho(e)))}}function pE(t,e,n,i,r,a){const s=e.eventCache;if(qo(i,n)!=null)return e;{let l,o;if(G(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fi(e),h=c instanceof O?c:O.EMPTY_NODE,f=Gd(i,h);l=t.filter.updateFullNode(e.eventCache.getNode(),f,a)}else{const c=Po(i,Fi(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,a)}else{const c=j(n);if(c===".priority"){T(hi(n)===1,"Can't have a priority with additional path components");const h=s.getNode();o=e.serverCache.getNode();const f=Yg(i,n,h,o);f!=null?l=t.filter.updatePriority(h,f):l=s.getNode()}else{const h=re(n);let f;if(s.isCompleteForChild(c)){o=e.serverCache.getNode();const u=Yg(i,n,s.getNode(),o);u!=null?f=s.getNode().getImmediateChild(c).updateChild(h,u):f=s.getNode().getImmediateChild(c)}else f=Fd(i,c,e.serverCache);f!=null?l=t.filter.updateChild(s.getNode(),c,f,h,r,a):l=s.getNode()}}return $a(e,l,s.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Vo(t,e,n,i,r,a,s,l){const o=e.serverCache;let c;const h=s?t.filter:t.filter.getIndexedFilter();if(G(n))c=h.updateFullNode(o.getNode(),i,null);else if(h.filtersNodes()&&!o.isFiltered()){const p=o.getNode().updateChild(n,i);c=h.updateFullNode(o.getNode(),p,null)}else{const p=j(n);if(!o.isCompleteForPath(n)&&hi(n)>1)return e;const y=re(n),S=o.getNode().getImmediateChild(p).updateChild(y,i);p===".priority"?c=h.updatePriority(o.getNode(),S):c=h.updateChild(o.getNode(),p,S,y,dE,null)}const f=lE(e,c,o.isFullyInitialized()||G(n),h.filtersNodes()),u=new Yd(r,f,a);return pE(t,f,n,r,u,l)}function nh(t,e,n,i,r,a,s){const l=e.eventCache;let o,c;const h=new Yd(r,e,a);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,s),o=$a(e,c,!0,t.filter.filtersNodes());else{const f=j(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),o=$a(e,c,l.isFullyInitialized(),l.isFiltered());else{const u=re(n),p=l.getNode().getImmediateChild(f);let y;if(G(u))y=i;else{const b=h.getCompleteChild(f);b!=null?Ld(u)===".priority"&&b.getChild(Zb(u)).isEmpty()?y=b:y=b.updateChild(u,i):y=O.EMPTY_NODE}if(p.equals(y))o=e;else{const b=t.filter.updateChild(l.getNode(),f,y,u,h,s);o=$a(e,b,l.isFullyInitialized(),t.filter.filtersNodes())}}}return o}function Kg(t,e){return t.eventCache.isCompleteForChild(e)}function yI(t,e,n,i,r,a,s){let l=e;return i.foreach((o,c)=>{const h=pe(n,o);Kg(e,j(h))&&(l=nh(t,l,h,c,r,a,s))}),i.foreach((o,c)=>{const h=pe(n,o);Kg(e,j(h))||(l=nh(t,l,h,c,r,a,s))}),l}function Qg(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ih(t,e,n,i,r,a,s,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o=e,c;G(n)?c=i:c=new ie(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,u)=>{if(h.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),y=Qg(t,p,u);o=Vo(t,o,new te(f),y,r,a,s,l)}}),c.children.inorderTraversal((f,u)=>{const p=!e.serverCache.isCompleteForChild(f)&&u.value===null;if(!h.hasChild(f)&&!p){const y=e.serverCache.getNode().getImmediateChild(f),b=Qg(t,y,u);o=Vo(t,o,new te(f),b,r,a,s,l)}}),o}function _I(t,e,n,i,r,a,s){if(qo(r,n)!=null)return e;const l=e.serverCache.isFiltered(),o=e.serverCache;if(i.value!=null){if(G(n)&&o.isFullyInitialized()||o.isCompleteForPath(n))return Vo(t,e,n,o.getNode().getChild(n),r,a,l,s);if(G(n)){let c=new ie(null);return o.getNode().forEachChild(Or,(h,f)=>{c=c.set(new te(h),f)}),ih(t,e,n,c,r,a,l,s)}else return e}else{let c=new ie(null);return i.foreach((h,f)=>{const u=pe(n,h);o.isCompleteForPath(u)&&(c=c.set(h,o.getNode().getChild(u)))}),ih(t,e,n,c,r,a,l,s)}}function vI(t,e,n,i,r){const a=e.serverCache,s=lE(e,a.getNode(),a.isFullyInitialized()||G(n),a.isFiltered());return pE(t,s,n,i,dE,r)}function bI(t,e,n,i,r,a){let s;if(qo(i,n)!=null)return e;{const l=new Yd(i,e,r),o=e.eventCache.getNode();let c;if(G(n)||j(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Po(i,Fi(e));else{const f=e.serverCache.getNode();T(f instanceof O,"serverChildren would be complete if leaf node"),h=Gd(i,f)}h=h,c=t.filter.updateFullNode(o,h,a)}else{const h=j(n);let f=Fd(i,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=o.getImmediateChild(h)),f!=null?c=t.filter.updateChild(o,h,f,re(n),l,a):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(o,h,O.EMPTY_NODE,re(n),l,a):c=o,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=Po(i,Fi(e)),s.isLeafNode()&&(c=t.filter.updateFullNode(c,s,a)))}return s=e.serverCache.isFullyInitialized()||qo(i,K())!=null,$a(e,c,s,t.filter.filtersNodes())}}/**
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
 */class EI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new jd(i.getIndex()),a=jO(i);this.processor_=dI(a);const s=n.serverCache,l=n.eventCache,o=r.updateFullNode(O.EMPTY_NODE,s.getNode(),null),c=a.updateFullNode(O.EMPTY_NODE,l.getNode(),null),h=new di(o,s.isFullyInitialized(),r.filtersNodes()),f=new di(c,l.isFullyInitialized(),a.filtersNodes());this.viewCache_=Rc(f,h),this.eventGenerator_=new YO(this.query_)}get query(){return this.query_}}function SI(t){return t.viewCache_.serverCache.getNode()}function wI(t){return Ho(t.viewCache_)}function TI(t,e){const n=Fi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Xg(t){return t.eventRegistrations_.length===0}function CI(t,e){t.eventRegistrations_.push(e)}function Wg(t,e,n){const i=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(a=>{const s=a.createCancelEvent(n,r);s&&i.push(s)})}if(e){let r=[];for(let a=0;a<t.eventRegistrations_.length;++a){const s=t.eventRegistrations_[a];if(!s.matches(e))r.push(s);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(a+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function $g(t,e,n,i){e.type===Mt.MERGE&&e.source.queryId!==null&&(T(Fi(t.viewCache_),"We should always have a full cache before handling merges"),T(Ho(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,a=mI(t.processor_,r,e,n,i);return pI(t.processor_,a.viewCache),T(a.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=a.viewCache,mE(t,a.changes,a.viewCache.eventCache.getNode(),null)}function AI(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(a,s)=>{i.push(Fr(a,s))}),n.isFullyInitialized()&&i.push(aE(n.getNode())),mE(t,i,n.getNode(),e)}function mE(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return KO(t.eventGenerator_,e,n,r)}/**
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
 */let Go;class gE{constructor(){this.views=new Map}}function RI(t){T(!Go,"__referenceConstructor has already been defined"),Go=t}function NI(){return T(Go,"Reference.ts has not been loaded"),Go}function xI(t){return t.views.size===0}function Kd(t,e,n,i){const r=e.source.queryId;if(r!==null){const a=t.views.get(r);return T(a!=null,"SyncTree gave us an op for an invalid query."),$g(a,e,n,i)}else{let a=[];for(const s of t.views.values())a=a.concat($g(s,e,n,i));return a}}function yE(t,e,n,i,r){const a=e._queryIdentifier,s=t.views.get(a);if(!s){let l=Po(n,r?i:null),o=!1;l?o=!0:i instanceof O?(l=Gd(n,i),o=!1):(l=O.EMPTY_NODE,o=!1);const c=Rc(new di(l,o,!1),new di(i,r,!1));return new EI(e,c)}return s}function OI(t,e,n,i,r,a){const s=yE(t,e,i,r,a);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),CI(s,n),AI(s,n)}function II(t,e,n,i){const r=e._queryIdentifier,a=[];let s=[];const l=pi(t);if(r==="default")for(const[o,c]of t.views.entries())s=s.concat(Wg(c,n,i)),Xg(c)&&(t.views.delete(o),c.query._queryParams.loadsAllData()||a.push(c.query));else{const o=t.views.get(r);o&&(s=s.concat(Wg(o,n,i)),Xg(o)&&(t.views.delete(r),o.query._queryParams.loadsAllData()||a.push(o.query)))}return l&&!pi(t)&&a.push(new(NI())(e._repo,e._path)),{removed:a,events:s}}function _E(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function si(t,e){let n=null;for(const i of t.views.values())n=n||TI(i,e);return n}function vE(t,e){if(e._queryParams.loadsAllData())return xc(t);{const i=e._queryIdentifier;return t.views.get(i)}}function bE(t,e){return vE(t,e)!=null}function pi(t){return xc(t)!=null}function xc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Fo;function DI(t){T(!Fo,"__referenceConstructor has already been defined"),Fo=t}function MI(){return T(Fo,"Reference.ts has not been loaded"),Fo}let kI=1;class Zg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=cI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function EE(t,e,n,i,r){return $O(t.pendingWriteTree_,e,n,i,r),r?ha(t,new Gi(Pd(),e,n)):[]}function LI(t,e,n,i){ZO(t.pendingWriteTree_,e,n,i);const r=ie.fromObject(n);return ha(t,new Yr(Pd(),e,r))}function Fn(t,e,n=!1){const i=JO(t.pendingWriteTree_,e);if(eI(t.pendingWriteTree_,e)){let a=new ie(null);return i.snap!=null?a=a.set(K(),!0):Pe(i.children,s=>{a=a.set(new te(s),!0)}),ha(t,new jo(i.path,a,n))}else return[]}function $s(t,e,n){return ha(t,new Gi(qd(),e,n))}function UI(t,e,n){const i=ie.fromObject(n);return ha(t,new Yr(qd(),e,i))}function zI(t,e){return ha(t,new ws(qd(),e))}function BI(t,e,n){const i=Xd(t,n);if(i){const r=Wd(i),a=r.path,s=r.queryId,l=Ge(a,e),o=new ws(Vd(s),l);return $d(t,a,o)}else return[]}function Yo(t,e,n,i,r=!1){const a=e._path,s=t.syncPointTree_.get(a);let l=[];if(s&&(e._queryIdentifier==="default"||bE(s,e))){const o=II(s,e,n,i);xI(s)&&(t.syncPointTree_=t.syncPointTree_.remove(a));const c=o.removed;if(l=o.events,!r){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(a,(u,p)=>pi(p));if(h&&!f){const u=t.syncPointTree_.subtree(a);if(!u.isEmpty()){const p=PI(u);for(let y=0;y<p.length;++y){const b=p[y],S=b.query,m=CE(t,b);t.listenProvider_.startListening(Ja(S),Ts(t,S),m.hashFn,m.onComplete)}}}!f&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(Ja(e),null):c.forEach(u=>{const p=t.queryToTagMap.get(Oc(u));t.listenProvider_.stopListening(Ja(u),p)}))}qI(t,c)}return l}function SE(t,e,n,i){const r=Xd(t,i);if(r!=null){const a=Wd(r),s=a.path,l=a.queryId,o=Ge(s,e),c=new Gi(Vd(l),o,n);return $d(t,s,c)}else return[]}function jI(t,e,n,i){const r=Xd(t,i);if(r){const a=Wd(r),s=a.path,l=a.queryId,o=Ge(s,e),c=ie.fromObject(n),h=new Yr(Vd(l),o,c);return $d(t,s,h)}else return[]}function rh(t,e,n,i=!1){const r=e._path;let a=null,s=!1;t.syncPointTree_.foreachOnPath(r,(u,p)=>{const y=Ge(u,r);a=a||si(p,y),s=s||pi(p)});let l=t.syncPointTree_.get(r);l?(s=s||pi(l),a=a||si(l,K())):(l=new gE,t.syncPointTree_=t.syncPointTree_.set(r,l));let o;a!=null?o=!0:(o=!1,a=O.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,y)=>{const b=si(y,K());b&&(a=a.updateImmediateChild(p,b))}));const c=bE(l,e);if(!c&&!e._queryParams.loadsAllData()){const u=Oc(e);T(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=VI();t.queryToTagMap.set(u,p),t.tagToQueryMap.set(p,u)}const h=Nc(t.pendingWriteTree_,r);let f=OI(l,e,n,h,a,o);if(!c&&!s&&!i){const u=vE(l,e);f=f.concat(GI(t,e,u))}return f}function Qd(t,e,n){const r=t.pendingWriteTree_,a=t.syncPointTree_.findOnPath(e,(s,l)=>{const o=Ge(s,e),c=si(l,o);if(c)return c});return uE(r,e,a,n,!0)}function HI(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Ge(c,n);i=i||si(h,f)});let r=t.syncPointTree_.get(n);r?i=i||si(r,K()):(r=new gE,t.syncPointTree_=t.syncPointTree_.set(n,r));const a=i!=null,s=a?new di(i,!0,!1):null,l=Nc(t.pendingWriteTree_,e._path),o=yE(r,e,l,a?s.getNode():O.EMPTY_NODE,a);return wI(o)}function ha(t,e){return wE(e,t.syncPointTree_,null,Nc(t.pendingWriteTree_,K()))}function wE(t,e,n,i){if(G(t.path))return TE(t,e,n,i);{const r=e.get(K());n==null&&r!=null&&(n=si(r,K()));let a=[];const s=j(t.path),l=t.operationForChild(s),o=e.children.get(s);if(o&&l){const c=n?n.getImmediateChild(s):null,h=fE(i,s);a=a.concat(wE(l,o,c,h))}return r&&(a=a.concat(Kd(r,t,i,n))),a}}function TE(t,e,n,i){const r=e.get(K());n==null&&r!=null&&(n=si(r,K()));let a=[];return e.children.inorderTraversal((s,l)=>{const o=n?n.getImmediateChild(s):null,c=fE(i,s),h=t.operationForChild(s);h&&(a=a.concat(TE(h,l,o,c)))}),r&&(a=a.concat(Kd(r,t,i,n))),a}function CE(t,e){const n=e.query,i=Ts(t,n);return{hashFn:()=>(SI(e)||O.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?BI(t,n._path,i):zI(t,n._path);{const a=zx(r,n);return Yo(t,n,null,a)}}}}function Ts(t,e){const n=Oc(e);return t.queryToTagMap.get(n)}function Oc(t){return t._path.toString()+"$"+t._queryIdentifier}function Xd(t,e){return t.tagToQueryMap.get(e)}function Wd(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function $d(t,e,n){const i=t.syncPointTree_.get(e);T(i,"Missing sync point for query tag that we're tracking");const r=Nc(t.pendingWriteTree_,e);return Kd(i,n,r,null)}function PI(t){return t.fold((e,n,i)=>{if(n&&pi(n))return[xc(n)];{let r=[];return n&&(r=_E(n)),Pe(i,(a,s)=>{r=r.concat(s)}),r}})}function Ja(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(MI())(t._repo,t._path):t}function qI(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Oc(i),a=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(a)}}}function VI(){return kI++}function GI(t,e,n){const i=e._path,r=Ts(t,e),a=CE(t,n),s=t.listenProvider_.startListening(Ja(e),r,a.hashFn,a.onComplete),l=t.syncPointTree_.subtree(i);if(r)T(!pi(l.value),"If we're adding a query, it shouldn't be shadowed");else{const o=l.fold((c,h,f)=>{if(!G(c)&&h&&pi(h))return[xc(h).query];{let u=[];return h&&(u=u.concat(_E(h).map(p=>p.query))),Pe(f,(p,y)=>{u=u.concat(y)}),u}});for(let c=0;c<o.length;++c){const h=o[c];t.listenProvider_.stopListening(Ja(h),Ts(t,h))}}return s}/**
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
 */class Zd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zd(n)}node(){return this.node_}}class Jd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new Jd(this.syncTree_,n)}node(){return Qd(this.syncTree_,this.path_)}}const FI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Jg=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return YI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KI(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},YI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},KI=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&T(!1,"Unexpected increment value: "+i);const r=e.node();if(T(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return typeof s!="number"?i:s+i},AE=function(t,e,n,i){return ep(e,new Jd(n,t),i)},RE=function(t,e,n){return ep(t,new Zd(e),n)};function ep(t,e,n){const i=t.getPriority().val(),r=Jg(i,e.getImmediateChild(".priority"),n);let a;if(t.isLeafNode()){const s=t,l=Jg(s.getValue(),e,n);return l!==s.getValue()||r!==s.getPriority().val()?new xe(l,Te(r)):t}else{const s=t;return a=s,r!==s.getPriority().val()&&(a=a.updatePriority(new xe(r))),s.forEachChild(me,(l,o)=>{const c=ep(o,e.getImmediateChild(l),n);c!==o&&(a=a.updateImmediateChild(l,c))}),a}}/**
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
 */class tp{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function np(t,e){let n=e instanceof te?e:new te(e),i=t,r=j(n);for(;r!==null;){const a=qr(i.node.children,r)||{children:{},childCount:0};i=new tp(r,i,a),n=re(n),r=j(n)}return i}function da(t){return t.node.value}function NE(t,e){t.node.value=e,ah(t)}function xE(t){return t.node.childCount>0}function QI(t){return da(t)===void 0&&!xE(t)}function Ic(t,e){Pe(t.node.children,(n,i)=>{e(new tp(n,t,i))})}function OE(t,e,n,i){n&&e(t),Ic(t,r=>{OE(r,e,!0)})}function XI(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Zs(t){return new te(t.parent===null?t.name:Zs(t.parent)+"/"+t.name)}function ah(t){t.parent!==null&&WI(t.parent,t.name,t)}function WI(t,e,n){const i=QI(n),r=Kt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,ah(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,ah(t))}/**
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
 */const $I=/[\[\].#$\/\u0000-\u001F\u007F]/,ZI=/[\[\].#$\u0000-\u001F\u007F]/,zu=10*1024*1024,ip=function(t){return typeof t=="string"&&t.length!==0&&!$I.test(t)},IE=function(t){return typeof t=="string"&&t.length!==0&&!ZI.test(t)},JI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),IE(t)},eD=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Od(t)||t&&typeof t=="object"&&Kt(t,".sv")},tD=function(t,e,n,i){Dc(bc(t,"value"),e,n)},Dc=function(t,e,n){const i=n instanceof te?new yO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ni(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ni(i)+" with contents = "+e.toString());if(Od(e))throw new Error(t+"contains "+e.toString()+" "+Ni(i));if(typeof e=="string"&&e.length>zu/3&&Ec(e)>zu)throw new Error(t+"contains a string greater than "+zu+" utf8 bytes "+Ni(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,a=!1;if(Pe(e,(s,l)=>{if(s===".value")r=!0;else if(s!==".priority"&&s!==".sv"&&(a=!0,!ip(s)))throw new Error(t+" contains an invalid key ("+s+") "+Ni(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_O(i,s),Dc(t,l,i),vO(i)}),r&&a)throw new Error(t+' contains ".value" child '+Ni(i)+" in addition to actual children.")}},nD=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const a=vs(i);for(let s=0;s<a.length;s++)if(!(a[s]===".priority"&&s===a.length-1)){if(!ip(a[s]))throw new Error(t+"contains an invalid key ("+a[s]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gO);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&Et(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},iD=function(t,e,n,i){const r=bc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const a=[];Pe(e,(s,l)=>{const o=new te(s);if(Dc(r,l,pe(n,o)),Ld(o)===".priority"&&!eD(l))throw new Error(r+"contains an invalid value for '"+o.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(o)}),nD(r,a)},DE=function(t,e,n,i){if(!IE(n))throw new Error(bc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rD=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),DE(t,e,n)},aD=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},sD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ip(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JI(n))throw new Error(bc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class lD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mc(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],a=r.getPath();n!==null&&!Ud(a,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(r)}n&&t.eventLists_.push(n)}function ME(t,e,n){Mc(t,n),kE(t,i=>Ud(i,e))}function At(t,e,n){Mc(t,n),kE(t,i=>Et(i,e)||Et(e,i))}function kE(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const a=r.path;e(a)?(oD(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function oD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Xa&&Ue("event: "+n.toString()),fa(i)}}}/**
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
 */const cD="repo_interrupt",uD=25;class fD{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bo(),this.transactionQueueTree_=new tp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hD(t,e,n){if(t.stats_=Md(t.repoInfo_),t.forceRestClient_||Px())t.server_=new zo(t.repoInfo_,(i,r,a,s)=>{ey(t,i,r,a,s)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ty(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new dn(t.repoInfo_,e,(i,r,a,s)=>{ey(t,i,r,a,s)},i=>{ty(t,i)},i=>{pD(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Yx(t.repoInfo_,()=>new FO(t.stats_,t.server_)),t.infoData_=new HO,t.infoSyncTree_=new Zg({startListening:(i,r,a,s)=>{let l=[];const o=t.infoData_.getNode(i._path);return o.isEmpty()||(l=$s(t.infoSyncTree_,i._path,o),setTimeout(()=>{s("ok")},0)),l},stopListening:()=>{}}),rp(t,"connected",!1),t.serverSyncTree_=new Zg({startListening:(i,r,a,s)=>(t.server_.listen(i,a,r,(l,o)=>{const c=s(l,o);At(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function dD(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kc(t){return FI({timestamp:dD(t)})}function ey(t,e,n,i,r){t.dataUpdateCount++;const a=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let s=[];if(r)if(i){const o=Ao(n,c=>Te(c));s=jI(t.serverSyncTree_,a,o,r)}else{const o=Te(n);s=SE(t.serverSyncTree_,a,o,r)}else if(i){const o=Ao(n,c=>Te(c));s=UI(t.serverSyncTree_,a,o)}else{const o=Te(n);s=$s(t.serverSyncTree_,a,o)}let l=a;s.length>0&&(l=Qr(t,a)),At(t.eventQueue_,l,s)}function ty(t,e){rp(t,"connected",e),e===!1&&_D(t)}function pD(t,e){Pe(e,(n,i)=>{rp(t,n,i)})}function rp(t,e,n){const i=new te("/.info/"+e),r=Te(n);t.infoData_.updateSnapshot(i,r);const a=$s(t.infoSyncTree_,i,r);At(t.eventQueue_,i,a)}function ap(t){return t.nextWriteId_++}function mD(t,e,n){const i=HI(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const a=Te(r).withIndex(e._queryParams.getIndex());rh(t.serverSyncTree_,e,n,!0);let s;if(e._queryParams.loadsAllData())s=$s(t.serverSyncTree_,e._path,a);else{const l=Ts(t.serverSyncTree_,e);s=SE(t.serverSyncTree_,e._path,a,l)}return At(t.eventQueue_,e._path,s),Yo(t.serverSyncTree_,e,n,null,!0),a},r=>(Js(t,"get for query "+Ae(e)+" failed: "+r),Promise.reject(new Error(r))))}function gD(t,e,n,i,r){Js(t,"set",{path:e.toString(),value:n,priority:i});const a=kc(t),s=Te(n,i),l=Qd(t.serverSyncTree_,e),o=RE(s,l,a),c=ap(t),h=EE(t.serverSyncTree_,e,o,c,!0);Mc(t.eventQueue_,h),t.server_.put(e.toString(),s.val(!0),(u,p)=>{const y=u==="ok";y||Fe("set at "+e+" failed: "+u);const b=Fn(t.serverSyncTree_,c,!y);At(t.eventQueue_,e,b),sh(t,r,u,p)});const f=lp(t,e);Qr(t,f),At(t.eventQueue_,f,[])}function yD(t,e,n,i){Js(t,"update",{path:e.toString(),value:n});let r=!0;const a=kc(t),s={};if(Pe(n,(l,o)=>{r=!1,s[l]=AE(pe(e,l),Te(o),t.serverSyncTree_,a)}),r)Ue("update() called with empty data.  Don't do anything."),sh(t,i,"ok",void 0);else{const l=ap(t),o=LI(t.serverSyncTree_,e,s,l);Mc(t.eventQueue_,o),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Fe("update at "+e+" failed: "+c);const u=Fn(t.serverSyncTree_,l,!f),p=u.length>0?Qr(t,e):e;At(t.eventQueue_,p,u),sh(t,i,c,h)}),Pe(n,c=>{const h=lp(t,pe(e,c));Qr(t,h)}),At(t.eventQueue_,e,[])}}function _D(t){Js(t,"onDisconnectEvents");const e=kc(t),n=Bo();Zf(t.onDisconnect_,K(),(r,a)=>{const s=AE(r,a,t.serverSyncTree_,e);sE(n,r,s)});let i=[];Zf(n,K(),(r,a)=>{i=i.concat($s(t.serverSyncTree_,r,a));const s=lp(t,r);Qr(t,s)}),t.onDisconnect_=Bo(),At(t.eventQueue_,K(),i)}function vD(t,e,n){let i;j(e._path)===".info"?i=rh(t.infoSyncTree_,e,n):i=rh(t.serverSyncTree_,e,n),ME(t.eventQueue_,e._path,i)}function LE(t,e,n){let i;j(e._path)===".info"?i=Yo(t.infoSyncTree_,e,n):i=Yo(t.serverSyncTree_,e,n),ME(t.eventQueue_,e._path,i)}function bD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cD)}function Js(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function sh(t,e,n,i){e&&fa(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let a=r;i&&(a+=": "+i);const s=new Error(a);s.code=r,e(s)}})}function UE(t,e,n){return Qd(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function sp(t,e=t.transactionQueueTree_){if(e||Lc(t,e),da(e)){const n=BE(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&ED(t,Zs(e),n)}else xE(e)&&Ic(e,n=>{sp(t,n)})}function ED(t,e,n){const i=n.map(c=>c.currentWriteId),r=UE(t,e,i);let a=r;const s=r.hash();for(let c=0;c<n.length;c++){const h=n[c];T(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Ge(e,h.path);a=a.updateChild(f,h.currentOutputSnapshotRaw)}const l=a.val(!0),o=e;t.server_.put(o.toString(),l,c=>{Js(t,"transaction put response",{path:o.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let u=0;u<n.length;u++)n[u].status=2,h=h.concat(Fn(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&f.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();Lc(t,np(t.transactionQueueTree_,e)),sp(t,t.transactionQueueTree_),At(t.eventQueue_,e,h);for(let u=0;u<f.length;u++)fa(f[u])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Fe("transaction at "+o.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Qr(t,e)}},s)}function Qr(t,e){const n=zE(t,e),i=Zs(n),r=BE(t,n);return SD(t,r,i),i}function SD(t,e,n){if(e.length===0)return;const i=[];let r=[];const s=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const o=e[l],c=Ge(n,o.path);let h=!1,f;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),o.status===4)h=!0,f=o.abortReason,r=r.concat(Fn(t.serverSyncTree_,o.currentWriteId,!0));else if(o.status===0)if(o.retryCount>=uD)h=!0,f="maxretry",r=r.concat(Fn(t.serverSyncTree_,o.currentWriteId,!0));else{const u=UE(t,o.path,s);o.currentInputSnapshot=u;const p=e[l].update(u.val());if(p!==void 0){Dc("transaction failed: Data returned ",p,o.path);let y=Te(p);typeof p=="object"&&p!=null&&Kt(p,".priority")||(y=y.updatePriority(u.getPriority()));const S=o.currentWriteId,m=kc(t),d=RE(y,u,m);o.currentOutputSnapshotRaw=y,o.currentOutputSnapshotResolved=d,o.currentWriteId=ap(t),s.splice(s.indexOf(S),1),r=r.concat(EE(t.serverSyncTree_,o.path,d,o.currentWriteId,o.applyLocally)),r=r.concat(Fn(t.serverSyncTree_,S,!0))}else h=!0,f="nodata",r=r.concat(Fn(t.serverSyncTree_,o.currentWriteId,!0))}At(t.eventQueue_,n,r),r=[],h&&(e[l].status=2,function(u){setTimeout(u,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(f),!1,null))))}Lc(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)fa(i[l]);sp(t,t.transactionQueueTree_)}function zE(t,e){let n,i=t.transactionQueueTree_;for(n=j(e);n!==null&&da(i)===void 0;)i=np(i,n),e=re(e),n=j(e);return i}function BE(t,e){const n=[];return jE(t,e,n),n.sort((i,r)=>i.order-r.order),n}function jE(t,e,n){const i=da(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ic(e,r=>{jE(t,r,n)})}function Lc(t,e){const n=da(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,NE(e,n.length>0?n:void 0)}Ic(e,i=>{Lc(t,i)})}function lp(t,e){const n=Zs(zE(t,e)),i=np(t.transactionQueueTree_,e);return XI(i,r=>{Bu(t,r)}),Bu(t,i),OE(i,r=>{Bu(t,r)}),n}function Bu(t,e){const n=da(e);if(n){const i=[];let r=[],a=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(T(a===s-1,"All SENT items should be at beginning of queue."),a=s,n[s].status=3,n[s].abortReason="set"):(T(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),r=r.concat(Fn(t.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&i.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));a===-1?NE(e,void 0):n.length=a+1,At(t.eventQueue_,Zs(e),r);for(let s=0;s<i.length;s++)fa(i[s])}}/**
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
 */function wD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function TD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ny=function(t,e){const n=CD(t),i=n.namespace;n.domain==="firebase.com"&&wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Dx();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Vb(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new te(n.pathString)}},CD=function(t){let e="",n="",i="",r="",a="",s=!0,l="https",o=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(r=wD(t.substring(h,f)));const u=TD(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(s=l==="https"||l==="wss",o=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),a=i}"ns"in u&&(a=u.ns)}return{host:e,port:o,domain:n,subdomain:i,secure:s,scheme:l,pathString:r,namespace:a}};/**
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
 */class AD{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class RD{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class op{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cp{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return G(this._path)?null:Ld(this._path)}get ref(){return new Cn(this._repo,this._path)}get _queryIdentifier(){const e=qg(this._queryParams),n=Id(e);return n==="{}"?"default":n}get _queryObject(){return qg(this._queryParams)}isEqual(e){if(e=ht(e),!(e instanceof cp))return!1;const n=this._repo===e._repo,i=Ud(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mO(this._path)}}class Cn extends cp{constructor(e,n){super(e,n,new Hd,!1)}get parent(){const e=Zb(this._path);return e===null?null:new Cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cs{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),i=lh(this.ref,e);return new Cs(this._node.getChild(n),i,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Cs(r,lh(this.ref,i),me)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Aa(t,e){return t=ht(t),t._checkNotDeleted("ref"),e!==void 0?lh(t._root,e):t._root}function lh(t,e){return t=ht(t),j(t._path)===null?rD("child","path",e):DE("child","path",e),new Cn(t._repo,pe(t._path,e))}function iy(t,e){t=ht(t),aD("set",t._path),tD("set",e,t._path);const n=new Vs;return gD(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ND(t,e){iD("update",e,t._path);const n=new Vs;return yD(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function xD(t){t=ht(t);const e=new op(()=>{}),n=new el(e);return mD(t._repo,t,n).then(i=>new Cs(i,new Cn(t._repo,t._path),t._queryParams.getIndex()))}class el{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new AD("value",this,new Cs(e.snapshotNode,new Cn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RD(this,e,n):null}matches(e){return e instanceof el?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function OD(t,e,n,i,r){const a=new op(n,void 0),s=new el(a);return vD(t._repo,t,s),()=>LE(t._repo,t,s)}function ID(t,e,n,i){return OD(t,"value",e)}function DD(t,e,n){let i=null;const r=n?new op(n):null;i=new el(r),LE(t._repo,t,i)}RI(Cn);DI(Cn);/**
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
 */const MD="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let kD=!1;function LD(t,e,n,i){const r=e.lastIndexOf(":"),a=e.substring(0,r),s=la(a);t.repoInfo_=new Vb(e,s,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function UD(t,e,n,i,r){let a=i||t.options.databaseURL;a===void 0&&(t.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),a=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s=ny(a,r),l=s.repoInfo,o;typeof process<"u"&&Tg&&(o=Tg[MD]),o?(a=`http://${o}?ns=${l.namespace}`,s=ny(a,r),l=s.repoInfo):s.repoInfo.secure;const c=new Vx(t.name,t.options,e);sD("Invalid Firebase Database URL",s),G(s.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=BD(l,t,c,new qx(t,n));return new jD(h,t)}function zD(t,e){const n=oh[e];(!n||n[t.key]!==t)&&wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),bD(t),delete n[t.key]}function BD(t,e,n,i){let r=oh[e.name];r||(r={},oh[e.name]=r);let a=r[t.toURLString()];return a&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new fD(t,kD,n,i),r[t.toURLString()]=a,a}class jD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cn(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function HD(t=Q0(),e){const n=Sd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=WC("database");i&&PD(n,...i)}return n}function PD(t,e,n,i={}){t=ht(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,a=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&Hi(i,a.repoInfo_.emulatorOptions))return;wn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let s;if(a.repoInfo_.nodeAdmin)i.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Yl(Yl.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:$C(i.mockUserToken,t.app.options.projectId);s=new Yl(l)}la(e)&&(P0(e),q0("Database",!0)),LD(a,r,i,s)}/**
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
 */function qD(t){Ax(ca),Vr(new Pi("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return UD(i,r,a,n)},"PUBLIC").setMultipleInstances(!0)),ii(Cg,Ag,t),ii(Cg,Ag,"esm2020")}dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};qD();const HE={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",databaseURL:""},VD=!!HE.apiKey;let Ko=null,zt=null;try{VD?(Ko=K0(HE),zt=HD(Ko),console.log("Firebase initialized successfully")):console.warn("Firebase configuration missing. Using Mock Mode.")}catch(t){console.error("Firebase initialization failed:",t)}let Jt=null;if(Ko)try{Jt=Sx(Ko)}catch{console.warn("Auth initialization failed, falling back to mock")}const ry={uid:"mock-user-"+Math.floor(Math.random()*1e4),isAnonymous:!0,displayName:"Guest"},ch={signIn:async()=>{if(!Jt)return console.log("Mock SignIn successful"),await new Promise(t=>setTimeout(t,500)),ry;try{return(await aN(Jt)).user}catch(t){throw console.error("Error signing in anonymously:",t),t}},onAuthStateChange:t=>Jt?fN(Jt,t):(t(null),()=>{}),getCurrentUser:()=>Jt?Jt.currentUser:ry,signOut:()=>Jt?Jt.signOut():Promise.resolve()},Ra=()=>{try{return JSON.parse(localStorage.getItem("web-hitster-rooms")||"{}")}catch{return{}}},ju=t=>{localStorage.setItem("web-hitster-rooms",JSON.stringify(t))},Qo={createRoom:async t=>{const e=GD(),n={hostId:t.uid,status:"LOBBY",createdAt:Date.now(),players:{[t.uid]:{id:t.uid,name:"Host",score:0,isHost:!0}}};if(zt){const i=Aa(zt,`rooms/${e}`);await iy(i,n)}else{const i=Ra();i[e]=n,ju(i),console.log("Mock Room Created:",e)}return e},joinRoom:async(t,e,n)=>{if(zt){const i=Aa(zt,`rooms/${t}`),r=await xD(i);if(!r.exists())throw new Error("Room not found");const a=r.val(),s=Aa(zt,`rooms/${t}/players/${e.uid}`);return await iy(s,{id:e.uid,name:n,score:0,isHost:!1}),a}else{const i=Ra(),r=i[t];if(!r)throw new Error("Room not found (Mock)");return r.players[e.uid]={id:e.uid,name:n,score:0,isHost:!1},ju(i),r}},subscribeToRoom:(t,e)=>{if(zt){const n=Aa(zt,`rooms/${t}`),i=ID(n,r=>{const a=r.val();a&&e(a)});return()=>DD(n,"value",i)}else{const n=setInterval(()=>{const a=Ra()[t];a&&e(a)},500),i=Ra()[t];return i&&e(i),()=>clearInterval(n)}},startGame:async t=>{if(zt){const e=Aa(zt,`rooms/${t}`);await ND(e,{status:"PLAYING"})}else{const e=Ra();e[t]&&(e[t].status="PLAYING",ju(e))}}};function GD(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let e="";for(let n=0;n<4;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),YD=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),ay=t=>{const e=YD(t);return e.charAt(0).toUpperCase()+e.slice(1)},PE=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),KD=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:a,iconNode:s,...l},o)=>E.createElement("svg",{ref:o,...QD,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:PE("lucide",r),...!a&&!KD(l)&&{"aria-hidden":"true"},...l},[...s.map(([c,h])=>E.createElement(c,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=(t,e)=>{const n=E.forwardRef(({className:i,...r},a)=>E.createElement(XD,{ref:a,iconNode:e,className:PE(`lucide-${FD(ay(t))}`,`lucide-${t}`,i),...r}));return n.displayName=ay(t),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$D=An("check",WD);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],JD=An("circle-check-big",ZD);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],t2=An("circle-x",e2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],i2=An("copy",n2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],a2=An("house",r2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],l2=An("music",s2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],up=An("play",o2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],u2=An("trophy",c2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],qE=An("users",f2),VE={credentialsUpdated:"CredentialsUpdatedMessage"};class ke extends Error{errorCode;constructor(e,n){super(e,n),Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ke),this.name="TidalError",this.errorCode=e}}class Xo extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,Xo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xo),this.name="IllegalArgumentError"}}class As extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,As.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As),this.name="NetworkError"}}class mi extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi),this.name="RetryableError"}}class h2{#e;#t=!1;#n;#i;constructor(e){this.#i=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{const e=await fetch(this.#i);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,n){let i;if(n){if(i=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===n),!i)throw new ReferenceError(`There is no performance entry named "${e}" with detail "${n}"`)}else i=performance.getEntriesByName(e).pop();return i?i.startTime:void 0}}const fp=new h2("https://api.tidal.com/v1/ping");class Wo extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,Wo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wo),this.name="AuthenticationError"}}class $o extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,$o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$o),this.name="TokenResponseError"}}class Xr extends ke{constructor(e,n){super(e,n),Object.setPrototypeOf(this,Xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr),this.name="UnexpectedError"}}const _e={authenticationError:"A0000",illegalArgumentError:"A0007",initError:"A0001",networkError:"A0002",retryableError:"A0003",storageError:"A0004",tokenResponseError:"A0005",unexpectedError:"A0006"},Hu="AuthDB";function d2(t){return String.fromCharCode(...new Uint8Array(t))}function p2(t){const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0,r=t.length;i<r;i++)n[i]=t.charCodeAt(i);return n}const St={getItem:t=>{const e=globalThis.localStorage.getItem(`${Hu}/${t}`);return e?p2(e):void 0},removeItem:t=>{globalThis.localStorage.removeItem(`${Hu}/${t}`)},setItem:(t,e)=>{globalThis.localStorage.setItem(`${Hu}/${t}`,d2(e))}},GE=t=>{const e=new TextEncoder;return globalThis.crypto.subtle.importKey("raw",e.encode(t),{name:"PBKDF2"},!1,["deriveBits","deriveKey"])},FE=(t,e)=>globalThis.crypto.subtle.deriveKey({hash:"SHA-256",iterations:1e5,name:"PBKDF2",salt:e},t,{length:256,name:"AES-KW"},!0,["wrapKey","unwrapKey"]),m2=async(t,e)=>{const n=await GE(e);return FE(n,t)},g2=t=>new TextEncoder().encode(t),y2=t=>new TextDecoder().decode(t),_2=async({keyToWrap:t,password:e,salt:n})=>{const i=await GE(e),r=await FE(i,n);return globalThis.crypto.subtle.wrapKey("raw",t,r,"AES-KW")},YE=async({password:t,salt:e,wrappedKeyBuffer:n})=>{const i=await m2(e,t);return globalThis.crypto.subtle.unwrapKey("raw",n,i,"AES-KW","AES-CTR",!0,["encrypt","decrypt"])},v2=({content:t,counter:e,key:n})=>globalThis.crypto.subtle.encrypt({counter:e,length:64,name:"AES-CTR"},n,t),b2=({counter:t,encryptedCredentials:e,key:n})=>globalThis.crypto.subtle.decrypt({counter:t,length:64,name:"AES-CTR"},n,e),E2=()=>globalThis.crypto.subtle.generateKey({length:256,name:"AES-CTR"},!0,["encrypt","decrypt"]),S2=async({password:t,storageKey:e})=>{const n=await E2(),i=globalThis.crypto.getRandomValues(new Uint8Array(16)),r=globalThis.crypto.getRandomValues(new Uint8Array(16)),a=await _2({keyToWrap:n,password:t,salt:r});try{St.setItem(`${e}Counter`,i),St.setItem(`${e}Salt`,r),St.setItem(`${e}Key`,a)}catch(s){throw new ke(_e.storageError,{cause:s})}},KE=t=>({counter:St.getItem(`${t}Counter`),encryptedCredentials:St.getItem(`${t}Data`),salt:St.getItem(`${t}Salt`),wrappedKey:St.getItem(`${t}Key`)}),QE=async t=>{const{counter:e,encryptedCredentials:n,salt:i,wrappedKey:r}=KE(t);if(n&&e&&r&&i)try{const a=await YE({password:t,salt:i,wrappedKeyBuffer:r}),s=await b2({counter:e,encryptedCredentials:n,key:a});return JSON.parse(y2(s))}catch{throw new ke(_e.storageError)}else return S2({password:t,storageKey:t})},w2=async t=>{const n={...await QE(t.credentialsStorageKey),...t},{counter:i,salt:r,wrappedKey:a}=KE(t.credentialsStorageKey);if(!a||!i||!r)throw new ke(_e.storageError);try{const s=await YE({password:n.credentialsStorageKey,salt:r,wrappedKeyBuffer:a}),l=await v2({content:g2(JSON.stringify(n)),counter:i,key:s});St.setItem(`${n.credentialsStorageKey}Data`,l)}catch(s){throw new ke(_e.storageError,{cause:s})}},T2=t=>{St.removeItem(`${t}Data`),St.removeItem(`${t}Counter`),St.removeItem(`${t}Salt`),St.removeItem(`${t}Key`)},C2=async t=>{if(t.status===0)return new As(_e.networkError);if(t.status>=400&&t.status<500)return new Xr(_e.unexpectedError);if(t.status>=500&&t.status<600)return new mi(_e.retryableError);const{error:e}=await t.json();return new $o(_e.tokenResponseError,{cause:e})},hp=async({body:t,credentials:e})=>{const{options:n,url:i}=XE({body:t,credentials:e,path:"oauth2/token"}),r=await WE({request:()=>globalThis.fetch(i,n),retry:a=>a.status>=500&&a.status<600});return r.ok?r:await C2(r)},XE=({body:t,credentials:e,path:n})=>{const i=`${e.tidalAuthServiceBaseUri}${n}`;return{options:{body:new URLSearchParams(t).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},method:"POST"},url:i}},WE=async({delayInMs:t=500,request:e,retry:n})=>{let i=1;const r=()=>i>32;for(;!r();){await new Promise(l=>setTimeout(l,i*t));const a=await e();if(i*=2,!n(a)||r())return a}throw new Xr(_e.unexpectedError)},A2=async t=>{const e=new TextEncoder().encode(t),n=await globalThis.crypto.subtle.digest("SHA-256",e),i=new Uint8Array(n),r=i.byteLength;let a="";for(let s=0;s<r;s+=1)a+=String.fromCharCode(i[s]);return globalThis.btoa(a)},$E=t=>t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),R2=()=>{const t=new Uint8Array(100);return $E(btoa(globalThis.crypto.getRandomValues(t).toString())).slice(0,128)},x={pending:!1,pendingPromises:[]},N2="https://login.tidal.com/",x2="https://auth.tidal.com/v1/",O2=["11003","6001","11001","11002","11101"],I2=t=>globalThis.addEventListener("authEventBus",t),ZE=t=>{const e=new CustomEvent("authEventBus",{detail:t});globalThis.dispatchEvent(e)},D2=t=>{ZE({payload:t,type:VE.credentialsUpdated})},JE=async({clientId:t,clientSecret:e,clientUniqueKey:n,credentialsStorageKey:i,scopes:r,tidalAuthServiceBaseUri:a,tidalLoginServiceBaseUri:s})=>{const l=await QE(i),o={...l,clientId:t,...e&&{clientSecret:e},clientUniqueKey:n,credentialsStorageKey:i,previousClientSecret:l?.clientSecret,scopes:r??[],tidalAuthServiceBaseUri:a??l?.tidalAuthServiceBaseUri??x2,tidalLoginServiceBaseUri:s??l?.tidalLoginServiceBaseUri??N2};await pp(o),await fp.synchronize()},eS=async({loginConfig:t,redirectUri:e})=>{if(!x.credentials)throw new ke(_e.initError);const n=R2(),i=await A2(n);await pp({...x.credentials,codeChallenge:n,redirectUri:e});const r={...t,client_id:x.credentials.clientId,...x.credentials.clientUniqueKey&&{client_unique_key:x.credentials.clientUniqueKey},code_challenge:$E(i),code_challenge_method:"S256",redirect_uri:e,response_type:"code",scope:x.credentials.scopes.join(" ")},a=new URLSearchParams(r).toString();return`${x.credentials.tidalLoginServiceBaseUri}authorize?${a}`},tS=async t=>{if(!x.credentials?.credentialsStorageKey||!x.credentials?.codeChallenge||!x.credentials?.redirectUri)throw new ke(_e.initError);const{clientId:e,clientSecret:n,clientUniqueKey:i,codeChallenge:r,redirectUri:a,scopes:s}=x.credentials,l=Object.fromEntries(new URLSearchParams(t));if(!l.code)throw new Wo(_e.authenticationError);const o={client_id:e,...i&&{client_unique_key:i},...n&&{client_secret:n},code:l.code,code_verifier:r,grant_type:"authorization_code",redirect_uri:a,scope:s.join(" ")},c=await hp({body:o,credentials:x.credentials});if(c instanceof Error)throw c;const h=await c.json();await Uc(h)},Zo=()=>{ZE({type:VE.credentialsUpdated}),x.credentials?.credentialsStorageKey&&T2(x.credentials.credentialsStorageKey),delete x.credentials,delete x.limitedDeviceResponse},M2=async()=>{if(x.credentials?.refreshToken){const t={...x.credentials.clientSecret&&{client_secret:x.credentials.clientSecret},client_id:x.credentials.clientId,grant_type:"refresh_token",refresh_token:x.credentials.refreshToken,scope:x.credentials.scopes.join(" ")},e=await hp({body:t,credentials:x.credentials});if(e instanceof Error)return e;const n=await e.json();return Uc(n)}else return dp()},k2=async()=>{if(x.credentials?.refreshToken){const t={...x.credentials.clientSecret&&{client_secret:x.credentials.clientSecret},client_id:x.credentials.clientId,grant_type:"update_client",refresh_token:x.credentials.refreshToken,scope:x.credentials.scopes.join(" ")},{options:e,url:n}=XE({body:t,credentials:x.credentials,path:"oauth2/token"}),i=await WE({request:()=>globalThis.fetch(n,e),retry:a=>a.status>=400&&a.status<600});if(!i.ok)throw i.status===0?new As(_e.networkError):new mi(_e.retryableError);const r=await i.json();return Uc(r)}else{if(x.credentials){const t=await dp();if(t&&"token"in t)return x.credentials.previousClientSecret=x.credentials.clientSecret,t;throw new mi(_e.retryableError)}throw new ke(_e.unexpectedError)}},dp=async()=>{if(x.credentials?.clientSecret){const t={client_id:x.credentials.clientId,client_secret:x.credentials.clientSecret,grant_type:"client_credentials"},e=await hp({body:t,credentials:x.credentials});if(e instanceof Error)return e;const n=await e.json();return Uc(n)}},L2=async t=>(x.pending&&await new Promise(e=>{x.pendingPromises.push(e)}),U2(t).finally(()=>{const e=x.pendingPromises.shift();e&&e(),x.pending=!1})),U2=async t=>{if(x.credentials){x.pending=!0;const{accessToken:e}=x.credentials,n=60*1e3;if(e){const i=x.credentials.scopes.every(l=>e.grantedScopes?.includes(l));if(x.credentials.clientUniqueKey!==e.clientUniqueKey||e.userId&&i===!1)throw Zo(),new Xo(_e.illegalArgumentError);if(x.credentials.clientId!==e?.clientId||!!(x.credentials.previousClientSecret&&x.credentials.previousClientSecret!==x.credentials.clientSecret)){const l=await k2();if(l&&"token"in l)return l;throw new mi(_e.retryableError)}if(!!!(t&&O2.includes(t))&&e.expires&&e.expires>fp.now()+n)return e;const s=await M2();if(s&&"token"in s)return s;if(s instanceof Xr)throw Zo(),s;if(s instanceof mi)throw s}else if(x.credentials.clientSecret){const i=await dp();if(i&&"token"in i)return i;if(i instanceof Error)throw i}else return{clientId:x.credentials.clientId,requestedScopes:x.credentials.scopes}}throw new ke(_e.initError)},pp=t=>{x.credentials=t;const e={...x.credentials.accessToken,clientId:x.credentials.clientId,requestedScopes:x.credentials.scopes};return D2(e),w2(x.credentials)},Uc=async t=>{if(!x.credentials)throw new ke(_e.initError);const{clientId:e,clientUniqueKey:n,scopes:i}=x.credentials,r=t.scope?.length?t.scope?.split(" "):[],a={clientId:e,clientUniqueKey:n,expires:fp.now()+t.expires_in*1e3,grantedScopes:r,requestedScopes:i,token:t.access_token,...t.user_id&&{userId:t.user_id.toString()}};return await pp({...x.credentials,accessToken:a,...t.refresh_token&&{refreshToken:t.refresh_token}}),a},tl={bus:I2,getCredentials:L2},z2=Object.freeze(Object.defineProperty({__proto__:null,authErrorCodeMap:_e,credentialsProvider:tl,finalizeLogin:tS,init:JE,initializeLogin:eS,logout:Zo},Symbol.toStringTag,{value:"Module"}));class B2{#e;#t=!1;#n;#i;constructor(e){this.#i=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{const e=await fetch(this.#i);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,n){let i;if(n){if(i=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===n),!i)throw new ReferenceError(`There is no performance entry named "${e}" with detail "${n}"`)}else i=performance.getEntriesByName(e).pop();return i?i.startTime:void 0}}new B2("https://api.tidal.com/v1/ping");const nS=`var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
`,sy=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",nS],{type:"text/javascript;charset=utf-8"});function j2(t){let e;try{if(e=sy&&(self.URL||self.webkitURL).createObjectURL(sy),!e)throw"";const n=new Worker(e,{type:"module",name:t?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(nS),{type:"module",name:t?.name})}}if(!window.Worker)throw new Error("Web Workers are not supported in this browser");new j2;new TextEncoder;let ly=!1;const iS=async()=>{if(!ly)try{lS(tl),oS({sendEvent:e=>{}}),await cS({players:[{player:"browser"}]}),ly=!0,console.log("Tidal Player initialized")}catch(t){console.error("Error initializing Tidal Player:",t),(t.message?.includes("A0007")||t.errorCode==="A0007")&&(console.warn("Stale credentials detected (A0007). Clearing and reloading..."),localStorage.removeItem("tidal_credentials"),window.location.reload())}},rS=async()=>{try{await JE({clientId:"KGztvO6qzZCJMKoN",credentialsStorageKey:"tidal_credentials",scopes:[]}),console.log("Tidal Auth initialized"),await iS()}catch(t){console.error("Failed to initialize Tidal Auth",t)}},H2=async()=>{const t="https://strawbirdies.com/tidal-callback",{initializeLogin:e}=await uS(async()=>{const{initializeLogin:i}=await Promise.resolve().then(()=>z2);return{initializeLogin:i}},[]),n=await e({redirectUri:t});window.location.href=n},P2=async()=>{try{const t=await tl.getCredentials(),e=t?.token||t?.accessToken;if(!t||!e)throw new Error("No access token available");return{Authorization:`Bearer ${e}`,"Content-Type":"application/vnd.tidal.v1+json"}}catch(t){throw console.error("Error getting Tidal access token",t),t}},aS=async(t,e=["TRACKS"])=>{const n=await P2(),i=e.map(s=>s.toLowerCase()),r=[{url:"https://openapi.tidal.com/v2/searchResults",params:{query:t,type:i.join(","),limit:10,countryCode:"US"}},{url:"https://openapi.tidal.com/search",params:{query:t,type:i.join(","),limit:10,countryCode:"US"}},{url:"https://api.tidal.com/v1/search",params:{query:t,type:i.join(","),limit:10,countryCode:"US"}}];let a;for(const s of r)try{const l=new URL(s.url);Object.entries(s.params).forEach(([c,h])=>l.searchParams.append(c,h)),console.log(`Trying Tidal Search: ${s.url}`);const o=await fetch(l.toString(),{method:"GET",headers:n});if(o.ok)return console.log(`Success with endpoint: ${s.url}`),await o.json();console.warn(`Failed ${s.url}: ${o.status}`)}catch(l){console.error(`Error on ${s.url}`,l),a=l}throw new Error(`All Tidal Search endpoints failed. Last error: ${a?.message||"Unknown"}`)},q2=async t=>{try{await iS(),await fS({productId:t,productType:"track",sourceId:"web-hitster",sourceType:"search"},0,!1),await hS(),console.log(`Playing track ${t}`)}catch(e){throw console.error("Tidal Player Error:",e),e}};function V2(){const t=Ps(),[e,n]=E.useState(""),[i,r]=E.useState(""),[a,s]=E.useState(!1),[l,o]=E.useState(!1),[c,h]=E.useState(null),[f,u]=E.useState(!1);E.useEffect(()=>{(async()=>{try{const S=await tl.getCredentials();S&&(S.token||S.accessToken)&&u(!0)}catch{}})()},[]);const p=async()=>{o(!0),h(null);try{const b=await ch.signIn(),S=await Qo.createRoom(b);t(`/lobby/${S}`)}catch(b){console.error(b),h("Failed to create room. check console.")}finally{o(!1)}},y=async b=>{if(b.preventDefault(),!(!e||!i)){o(!0),h(null);try{const S=await ch.signIn();await Qo.joinRoom(e.toUpperCase(),S,i),t(`/lobby/${e.toUpperCase()}`)}catch(S){console.error(S),h(S.message||"Failed to join room.")}finally{o(!1)}}};return _.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4 text-white",children:_.jsxs("div",{className:"max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20",children:[_.jsxs("div",{className:"flex flex-col items-center mb-8",children:[_.jsx("div",{className:"bg-gradient-to-tr from-pink-500 to-orange-400 p-4 rounded-full mb-4 shadow-lg shadow-pink-500/20",children:_.jsx(l2,{className:"w-12 h-12 text-white"})}),_.jsx("h1",{className:"text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-orange-200",children:"Web-Hitster"}),_.jsx("p",{className:"text-white/60 mt-2 text-center",children:"The Timeline Music Game"})]}),c&&_.jsx("div",{className:"bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg mb-6 text-sm text-center",children:c}),_.jsx("div",{className:"mb-8",children:f?_.jsxs("button",{disabled:!0,className:"w-full bg-emerald-500/20 text-emerald-300 font-bold py-3 rounded-xl border border-emerald-500/50 flex items-center justify-center gap-3 cursor-default",children:[_.jsx($D,{className:"w-5 h-5"}),"Tidal Connected"]}):_.jsxs(_.Fragment,{children:[_.jsxs("button",{onClick:H2,className:"w-full bg-black text-white font-bold py-3 rounded-xl border border-white/20 hover:bg-zinc-900 transition-all flex items-center justify-center gap-3",children:[_.jsx("img",{src:"https://tidal.com/favicon.ico",alt:"Tidal",className:"w-5 h-5"}),"Connect Tidal Account"]}),_.jsx("p",{className:"text-xs text-white/40 text-center mt-2",children:"Required to play music snippets"})]})}),a?_.jsxs("form",{onSubmit:y,className:"space-y-4 animate-in fade-in slide-in-from-bottom-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-white/70 mb-1",children:"Room Code"}),_.jsx("input",{type:"text",placeholder:"ABCD",maxLength:4,value:e,onChange:b=>n(b.target.value.toUpperCase()),className:"w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-2xl font-mono text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-white/20 text-white uppercase"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-white/70 mb-1",children:"Your Name"}),_.jsx("input",{type:"text",placeholder:"Enter your name",value:i,onChange:b=>r(b.target.value),className:"w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-white/20 text-white"})]}),_.jsxs("div",{className:"flex gap-3 mt-6",children:[_.jsx("button",{type:"button",onClick:()=>s(!1),className:"flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-xl hover:bg-white/10 transition-colors",children:"Back"}),_.jsx("button",{type:"submit",disabled:l||!e||!i,className:"flex-[2] bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25 disabled:opacity-50 disabled:cursor-not-allowed",children:l?"Joining...":"Join Game"})]})]}):_.jsxs("div",{className:"space-y-4",children:[_.jsx("button",{onClick:p,disabled:l,className:"w-full bg-white text-purple-900 font-bold py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg",children:l?"Creating...":_.jsxs(_.Fragment,{children:[_.jsx(up,{className:"w-5 h-5 fill-current"}),"Start New Game"]})}),_.jsxs("button",{onClick:()=>s(!0),className:"w-full bg-white/5 border border-white/10 text-white font-medium py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3",children:[_.jsx(qE,{className:"w-5 h-5"}),"Join Existing Game"]})]})]})})}function G2(){const{roomId:t}=C0(),e=Ps(),[n,i]=E.useState(null),[r,a]=E.useState(null),[s,l]=E.useState(!0);E.useEffect(()=>{const u=ch.getCurrentUser();if(!u){e("/");return}a(u);const p=Qo.subscribeToRoom(t,y=>{i(y),l(!1),y.status==="PLAYING"&&e(`/game/${t}`)});return()=>p()},[t,e]);const o=async()=>{try{await Qo.startGame(t)}catch(u){console.error("Failed to start game:",u)}},c=()=>{navigator.clipboard.writeText(t)};if(s)return _.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center text-white",children:_.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-white"})});if(!n)return _.jsx("div",{className:"text-white text-center pt-20",children:"Room not found"});const h=Object.values(n.players||{}),f=n.hostId===r?.uid;return _.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 font-sans text-white",children:_.jsxs("div",{className:"max-w-2xl mx-auto pt-10",children:[_.jsxs("div",{className:"text-center mb-12",children:[_.jsx("p",{className:"text-white/60 uppercase tracking-widest text-sm mb-2",children:"Room Code"}),_.jsxs("div",{onClick:c,className:"inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-8 py-4 cursor-pointer hover:bg-white/20 transition-colors",children:[_.jsx("span",{className:"text-6xl font-mono font-bold tracking-wider",children:t}),_.jsx(i2,{className:"w-6 h-6 text-white/50"})]}),_.jsx("p",{className:"text-white/40 text-xs mt-2",children:"Click to copy code"})]}),_.jsxs("div",{className:"bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-8",children:[_.jsxs("div",{className:"flex items-center justify-between mb-6",children:[_.jsxs("h2",{className:"text-2xl font-bold flex items-center gap-3",children:[_.jsx(qE,{className:"w-6 h-6 text-pink-400"}),"Players (",h.length,")"]}),f&&_.jsx("span",{className:"px-3 py-1 bg-pink-500/20 text-pink-300 text-xs font-bold rounded-full uppercase tracking-wider",children:"You are Host"})]}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:h.map(u=>_.jsxs("div",{className:"flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/5",children:[_.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                  ${u.isHost?"bg-gradient-to-tr from-pink-500 to-orange-400":"bg-slate-700"}
                `,children:u.name.charAt(0).toUpperCase()}),_.jsxs("div",{children:[_.jsx("div",{className:"font-bold",children:u.name}),u.isHost&&_.jsx("div",{className:"text-xs text-white/50",children:"Host"})]})]},u.id))})]}),f?_.jsxs("button",{onClick:o,className:"w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-5 rounded-2xl hover:opacity-90 transition-all transform hover:scale-[1.01] shadow-xl shadow-pink-500/20 flex items-center justify-center gap-3 text-xl",children:[_.jsx(up,{className:"fill-current w-6 h-6"}),"Start Game"]}):_.jsx("div",{className:"text-center text-white/50 animate-pulse",children:"Waiting for host to start..."})]})})}const F2=[{id:"1",name:"Billie Jean",artist:"Michael Jackson",year:1982,image:"https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",tidalUrl:"https://listen.tidal.com/track/10237021"},{id:"2",name:"Smells Like Teen Spirit",artist:"Nirvana",year:1991,image:"https://upload.wikimedia.org/wikipedia/en/3/32/Nirvana-Smells_Like_Teen_Spirit.jpg",tidalUrl:"https://listen.tidal.com/track/68644558"},{id:"3",name:"Hey Ya!",artist:"OutKast",year:2003,image:"https://upload.wikimedia.org/wikipedia/en/1/1e/OutKast_-_Hey_Ya%21_cover.jpg",tidalUrl:"https://listen.tidal.com/track/34217316"},{id:"4",name:"Bohemian Rhapsody",artist:"Queen",year:1975,image:"https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png",tidalUrl:"https://listen.tidal.com/track/77626961"},{id:"5",name:"Uptown Funk",artist:"Mark Ronson ft. Bruno Mars",year:2014,image:"https://upload.wikimedia.org/wikipedia/en/a/ad/Mark_Ronson_-_Uptown_Funk_%28feat._Bruno_Mars%29_%28Official_Single_Cover%29.png",tidalUrl:"https://listen.tidal.com/track/39327917"},{id:"6",name:"Blinding Lights",artist:"The Weeknd",year:2019,image:"https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",tidalUrl:"https://listen.tidal.com/track/134988755"},{id:"7",name:"Rolling in the Deep",artist:"Adele",year:2010,image:"https://upload.wikimedia.org/wikipedia/en/7/74/Adele_-_Rolling_in_the_Deep.png",tidalUrl:"https://listen.tidal.com/track/68625296"},{id:"8",name:"I Want to Hold Your Hand",artist:"The Beatles",year:1963,image:"https://upload.wikimedia.org/wikipedia/en/b/bf/I_want_to_hold_your_hand_single.png",tidalUrl:"https://listen.tidal.com/track/78642289"},{id:"9",name:"Like a Prayer",artist:"Madonna",year:1989,image:"https://upload.wikimedia.org/wikipedia/en/2/27/Like_a_prayer_single.jpg",tidalUrl:"https://listen.tidal.com/track/54434"},{id:"10",name:"Wannabe",artist:"Spice Girls",year:1996,image:"https://upload.wikimedia.org/wikipedia/en/a/a5/Spice_Girls_-_Wannabe_cover.png",tidalUrl:"https://listen.tidal.com/track/2501007"}],Y2={getPlaylistTracks:async()=>(await new Promise(t=>setTimeout(t,800)),[...F2].sort(()=>Math.random()-.5)),playTrack:async t=>(console.log(`Playing mock track ${t}`),!0)},K2=()=>{const{roomId:t}=C0(),e=Ps(),[n,i]=E.useState([]),[r,a]=E.useState([]),[s,l]=E.useState(null),[o,c]=E.useState("loading"),[h,f]=E.useState(0),[u,p]=E.useState(null);E.useEffect(()=>{(async()=>{const g=[...await Y2.getPlaylistTracks()].sort(()=>Math.random()-.5),v=g.pop(),C=g.pop();a([v]),l(C),i(g),c("playing")})()},[]);const y=async m=>{try{let d;if(m.tidalUrl){const g=m.tidalUrl.match(/track\/(\d+)/);g&&(d=g[1])}if(!d){const g=`${m.name} ${m.artist}`;console.log("Searching Tidal for:",g);const v=await aS(g),C=v.tracks?.items?.[0]||v.items?.[0]||v.tracks?.[0];C&&(d=C.id)}d?(console.log("Refined Playback: Playing Track ID:",d),await q2(d)):(console.warn("No Tidal track found"),alert("Could not find this track on Tidal."))}catch(d){console.error("Playback error:",d),alert("Playback failed. Please ensure you are logged into Tidal.")}},b=m=>{if(o!=="playing")return;const d=m>0?r[m-1]:null,g=m<r.length?r[m]:null,v=d?d.year:-1/0,C=g?g.year:1/0;if(s.year>=v&&s.year<=C){f(N=>N+1),p({type:"correct",index:m});const A=[...r];A.splice(m,0,s),setTimeout(()=>{a(A),p(null),S()},1e3)}else{let A=0;for(let N=0;N<=r.length;N++){const D=N>0?r[N-1].year:-1/0,L=N<r.length?r[N].year:1/0;if(s.year>=D&&s.year<=L){A=N;break}}p({type:"wrong",correctIndex:A}),c("gameEnd")}},S=()=>{if(n.length===0){c("gameEnd");return}const m=n.pop();i([...n]),l(m),c("playing")};return o==="loading"?_.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center text-white",children:"Loading..."}):o==="gameEnd"?_.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center text-white p-4",children:_.jsxs("div",{className:"bg-slate-900 p-8 rounded-2xl max-w-md w-full text-center border border-slate-800",children:[_.jsx(u2,{className:`w-16 h-16 mx-auto mb-6 ${h>5?"text-yellow-500":"text-slate-500"}`}),_.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Game Over!"}),_.jsx("p",{className:"text-slate-400 mb-8",children:u?.type==="wrong"?"Wrong placement!":"You cleared the deck!"}),u?.type==="wrong"&&s&&_.jsxs("div",{className:"mb-6 bg-red-500/10 border border-red-500/50 p-4 rounded-xl",children:[_.jsx("p",{className:"text-sm text-red-200 mb-2",children:"The song was from"}),_.jsx("p",{className:"text-2xl font-bold text-white",children:s.year}),_.jsxs("p",{className:"text-sm opacity-75",children:[s.name," - ",s.artist]})]}),_.jsxs("div",{className:"bg-slate-800 rounded-xl p-6 mb-8",children:[_.jsx("span",{className:"text-slate-400 text-sm uppercase tracking-wider",children:"Top Score"}),_.jsx("div",{className:"text-5xl font-bold text-purple-400 mt-2",children:h})]}),_.jsx("button",{onClick:()=>window.location.reload(),className:"w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl mb-4",children:"Play Again"}),_.jsxs("button",{onClick:()=>e("/"),className:"w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2",children:[_.jsx(a2,{className:"w-5 h-5"})," Home"]})]})}):_.jsxs("div",{className:"min-h-screen bg-slate-950 text-white p-4 flex flex-col items-center overflow-x-hidden",children:[_.jsxs("div",{className:"w-full max-w-5xl flex justify-between items-center mb-8 pt-4",children:[_.jsxs("div",{className:"text-purple-400 font-bold text-xl",children:["Score: ",h]}),_.jsxs("div",{className:"text-slate-400 text-sm",children:["Deck: ",n.length]})]}),_.jsx("div",{className:`mb-12 transition-all duration-500 ${u?"opacity-0 translate-y-10":"opacity-100"}`,children:_.jsxs("div",{className:"bg-slate-900 border-2 border-purple-500 p-8 rounded-xl w-64 shadow-2xl shadow-purple-900/20 text-center flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 -z-10"}),_.jsx("div",{className:"w-32 h-32 bg-black rounded-full shadow-xl flex items-center justify-center animate-spin-slow mb-6 border-4 border-slate-800",children:_.jsx("div",{className:"w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center",children:_.jsx("div",{className:"w-3 h-3 bg-black rounded-full"})})}),_.jsx("h2",{className:"font-bold text-xl mb-4 text-purple-200",children:"Mystery Track"}),_.jsxs("button",{onClick:()=>y(s),className:"bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full flex items-center gap-2 transform transition-all hover:scale-105 shadow-lg shadow-green-500/20",children:[_.jsx(up,{className:"fill-current w-5 h-5"})," Play"]}),_.jsx("p",{className:"text-xs text-slate-500 mt-6",children:"Listen to guess the year!"})]})}),_.jsx("div",{className:"w-full max-w-6xl overflow-x-auto pb-12 flex items-center justify-center min-h-[300px] px-8",children:_.jsxs("div",{className:"flex items-center gap-2",children:[r.map((m,d)=>_.jsxs(mh.Fragment,{children:[_.jsx(oy,{index:d,onClick:()=>b(d),isActive:!u,isCurrentFeedback:u?.index===d||u?.correctIndex===d,feedbackType:u?.index===d?u.type:u?.correctIndex===d?"hint":null}),_.jsxs("div",{className:"relative group",children:[_.jsxs("div",{className:"bg-slate-800 p-3 rounded-lg w-40 text-center border border-slate-700 transition-all hover:-translate-y-2",children:[_.jsx("img",{src:m.image,alt:m.name,className:"w-full h-32 object-cover rounded-md mb-2 opacity-75 group-hover:opacity-100"}),_.jsx("h3",{className:"font-bold text-xs truncate",children:m.name}),_.jsx("p",{className:"text-slate-400 text-[10px] truncate mb-1",children:m.artist}),_.jsx("div",{className:"font-bold text-xl text-yellow-400",children:m.year})]}),_.jsx("div",{className:"absolute top-1/2 -right-4 w-4 h-[2px] bg-slate-700 -z-10"})]})]},m.id)),_.jsx(oy,{index:r.length,onClick:()=>b(r.length),isActive:!u,isCurrentFeedback:u?.index===r.length||u?.correctIndex===r.length,feedbackType:u?.index===r.length?u.type:u?.correctIndex===r.length?"hint":null})]})}),_.jsx("div",{className:"text-center text-slate-500 text-sm mt-auto pb-4",children:"Scroll to view full timeline • Click + to place the card"})]})},oy=({index:t,onClick:e,isActive:n,isCurrentFeedback:i,feedbackType:r})=>{let a="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mx-2 ";if(i){if(r==="correct")return _.jsx("div",{className:a+"bg-green-500 scale-125 shadow-lg shadow-green-500/50",children:_.jsx(JD,{className:"text-white w-6 h-6"})});if(r==="wrong")return _.jsx("div",{className:a+"bg-red-500 scale-125 shadow-lg shadow-red-500/50",children:_.jsx(t2,{className:"text-white w-6 h-6"})});if(r==="hint")return _.jsx("div",{className:a+"bg-yellow-500/20 border-2 border-yellow-500 animate-pulse",children:_.jsx("div",{className:"text-yellow-500 font-bold text-xs text-center",children:"Here"})})}return n?_.jsx("button",{onClick:e,className:`${a} bg-slate-800/50 hover:bg-purple-600 hover:scale-110 border-2 border-dashed border-slate-600 hover:border-purple-400 group`,children:_.jsx("span",{className:"text-slate-500 group-hover:text-white font-bold text-xl",children:"+"})}):_.jsx("div",{className:"w-4 mx-1"})},Q2=()=>{const t=Ps();return console.log("TidalCallback Component MOUNTED"),E.useEffect(()=>{(async()=>{try{const n=await tS(window.location.search);console.log("Tidal login successful. Credentials received:",n),t("/")}catch(n){console.error("Tidal login failed",n),t("/")}})()},[t]),_.jsx("div",{className:"flex items-center justify-center min-h-screen bg-black text-white",children:_.jsxs("div",{className:"text-center",children:[_.jsx("h2",{className:"text-xl font-bold mb-4",children:"Finalizing login..."}),_.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto"})]})})},X2=()=>{const[t,e]=E.useState(""),[n,i]=E.useState(null),[r,a]=E.useState(null),[s,l]=E.useState(null);E.useEffect(()=>{rS(),(async()=>{try{const u=await tl.getCredentials();u&&u.accessToken&&l({loggedIn:!0})}catch{}})()},[]);const o=async()=>{try{const f=await eS({redirectUri:"https://strawbirdies.com/tidal-callback"});f&&(window.location.href=f)}catch(f){console.error("Login initialization failed",f),a("Failed to start login: "+f.message)}},c=async f=>{f.preventDefault(),a(null);try{const u=await aS(t);i(u)}catch(u){a(u.message)}},h=async()=>{await Zo(),l(null)};return _.jsxs("div",{className:"min-h-screen bg-neutral-900 text-white p-8",children:[_.jsx("h1",{className:"text-3xl font-bold mb-8 text-cyan-400",children:"Tidal API Integration Demo"}),s?_.jsxs("div",{children:[_.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[_.jsx("span",{className:"text-green-400 text-sm",children:"✓ Authenticated"}),_.jsx("button",{onClick:h,className:"text-xs text-gray-500 hover:text-white",children:"Logout"})]}),_.jsxs("form",{onSubmit:c,className:"mb-8 flex gap-4",children:[_.jsx("input",{type:"text",value:t,onChange:f=>e(f.target.value),placeholder:"Search for an artist or track...",className:"flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 transition-colors"}),_.jsx("button",{type:"submit",className:"bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-lg transition-colors",children:"Search"})]}),r&&_.jsx("div",{className:"bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg mb-8",children:r}),n&&_.jsxs("div",{className:"space-y-8",children:[n.tracks&&_.jsxs("section",{children:[_.jsx("h2",{className:"text-xl font-bold mb-4 text-gray-300",children:"Tracks"}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:n.tracks.items.slice(0,6).map(f=>_.jsxs("div",{className:"bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition-colors",children:[_.jsx("div",{className:"font-bold truncate",children:f.title}),_.jsx("div",{className:"text-sm text-gray-400 truncate",children:f.artist.name})]},f.id))})]}),_.jsxs("div",{className:"text-xs text-gray-600 mt-8",children:["Raw Output:",_.jsx("pre",{className:"mt-2 p-4 bg-black rounded overflow-auto max-h-60",children:JSON.stringify(n,null,2)})]})]})]}):_.jsxs("div",{className:"text-center py-20",children:[_.jsx("p",{className:"mb-4 text-gray-400",children:"Please authenticate to continue"}),_.jsx("button",{onClick:o,className:"bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-full transition-colors",children:"Log in with Tidal"})]})]})};function W2(){return _.jsxs(_.Fragment,{children:[_.jsx($2,{}),_.jsxs(lC,{children:[_.jsx(Ai,{path:"/",element:_.jsx(V2,{})}),_.jsx(Ai,{path:"/lobby/:roomId",element:_.jsx(G2,{})}),_.jsx(Ai,{path:"/game/:roomId",element:_.jsx(K2,{})}),_.jsx(Ai,{path:"/tidal-callback",element:_.jsx(Q2,{})}),_.jsx(Ai,{path:"/tidal-demo",element:_.jsx(X2,{})}),_.jsx(Ai,{path:"*",element:_.jsxs("div",{className:"text-white p-10",children:["404: Route Not Found: ",window.location.pathname]})})]})]})}function $2(){const t=_i();return mh.useEffect(()=>{console.log("Current Route Path:",t.pathname),console.log("Full URL:",window.location.href)},[t]),null}rS().then(()=>{u1.createRoot(document.getElementById("root")).render(_.jsx(mh.StrictMode,{children:_.jsx(IC,{children:_.jsx(W2,{})})}))});
