(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Hw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $g={exports:{}},Tl={},Hg={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),qw=Symbol.for("react.portal"),Ww=Symbol.for("react.fragment"),Kw=Symbol.for("react.strict_mode"),Gw=Symbol.for("react.profiler"),Qw=Symbol.for("react.provider"),Yw=Symbol.for("react.context"),Xw=Symbol.for("react.forward_ref"),Jw=Symbol.for("react.suspense"),Zw=Symbol.for("react.memo"),eE=Symbol.for("react.lazy"),mp=Symbol.iterator;function tE(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wg=Object.assign,Kg={};function Mi(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||qg}Mi.prototype.isReactComponent={};Mi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gg(){}Gg.prototype=Mi.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||qg}var Rh=kh.prototype=new Gg;Rh.constructor=kh;Wg(Rh,Mi.prototype);Rh.isPureReactComponent=!0;var gp=Array.isArray,Qg=Object.prototype.hasOwnProperty,Ch={current:null},Yg={key:!0,ref:!0,__self:!0,__source:!0};function Xg(t,e,n){var r,i={},o=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)Qg.call(e,r)&&!Yg.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),d=0;d<u;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:oo,type:t,key:o,ref:a,props:i,_owner:Ch.current}}function nE(t,e){return{$$typeof:oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===oo}function rE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yp=/\/+/g;function Au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rE(""+t.key):e.toString(36)}function fa(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case oo:case qw:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Au(a,0):r,gp(i)?(n="",t!=null&&(n=t.replace(yp,"$&/")+"/"),fa(i,e,n,"",function(d){return d})):i!=null&&(Ph(i)&&(i=nE(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(yp,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",gp(t))for(var u=0;u<t.length;u++){o=t[u];var c=r+Au(o,u);a+=fa(o,e,n,c,i)}else if(c=tE(t),typeof c=="function")for(t=c.call(t),u=0;!(o=t.next()).done;)o=o.value,c=r+Au(o,u++),a+=fa(o,e,n,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function qo(t,e,n){if(t==null)return t;var r=[],i=0;return fa(t,r,"","",function(o){return e.call(n,o,i++)}),r}function iE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},pa={transition:null},sE={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:pa,ReactCurrentOwner:Ch};function Jg(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!Ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Mi;ee.Fragment=Ww;ee.Profiler=Gw;ee.PureComponent=kh;ee.StrictMode=Kw;ee.Suspense=Jw;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sE;ee.act=Jg;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wg({},t.props),i=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Ch.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in e)Qg.call(e,c)&&!Yg.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&u!==void 0?u[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:oo,type:t.type,key:i,ref:o,props:r,_owner:a}};ee.createContext=function(t){return t={$$typeof:Yw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qw,_context:t},t.Consumer=t};ee.createElement=Xg;ee.createFactory=function(t){var e=Xg.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:Xw,render:t}};ee.isValidElement=Ph;ee.lazy=function(t){return{$$typeof:eE,_payload:{_status:-1,_result:t},_init:iE}};ee.memo=function(t,e){return{$$typeof:Zw,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=pa.transition;pa.transition={};try{t()}finally{pa.transition=e}};ee.unstable_act=Jg;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";Hg.exports=ee;var ue=Hg.exports;const oE=Hw(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aE=ue,lE=Symbol.for("react.element"),uE=Symbol.for("react.fragment"),cE=Object.prototype.hasOwnProperty,hE=aE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dE={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)cE.call(e,r)&&!dE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lE,type:t,key:o,ref:a,props:i,_owner:hE.current}}Tl.Fragment=uE;Tl.jsx=Zg;Tl.jsxs=Zg;$g.exports=Tl;var k=$g.exports,uc={},ey={exports:{}},At={},ty={exports:{}},ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,K){var G=U.length;U.push(K);e:for(;0<G;){var de=G-1>>>1,ie=U[de];if(0<i(ie,K))U[de]=K,U[G]=ie,G=de;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var K=U[0],G=U.pop();if(G!==K){U[0]=G;e:for(var de=0,ie=U.length,fe=ie>>>1;de<fe;){var Rt=2*(de+1)-1,Ct=U[Rt],rn=Rt+1,sn=U[rn];if(0>i(Ct,G))rn<ie&&0>i(sn,Ct)?(U[de]=sn,U[rn]=G,de=rn):(U[de]=Ct,U[Rt]=G,de=Rt);else if(rn<ie&&0>i(sn,G))U[de]=sn,U[rn]=G,de=rn;else break e}}return K}function i(U,K){var G=U.sortIndex-K.sortIndex;return G!==0?G:U.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,u=a.now();t.unstable_now=function(){return a.now()-u}}var c=[],d=[],p=1,g=null,_=3,R=!1,P=!1,D=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(U){for(var K=n(d);K!==null;){if(K.callback===null)r(d);else if(K.startTime<=U)r(d),K.sortIndex=K.expirationTime,e(c,K);else break;K=n(d)}}function M(U){if(D=!1,A(U),!P)if(n(c)!==null)P=!0,X(j);else{var K=n(d);K!==null&&oe(M,K.startTime-U)}}function j(U,K){P=!1,D&&(D=!1,S(y),y=-1),R=!0;var G=_;try{for(A(K),g=n(c);g!==null&&(!(g.expirationTime>K)||U&&!C());){var de=g.callback;if(typeof de=="function"){g.callback=null,_=g.priorityLevel;var ie=de(g.expirationTime<=K);K=t.unstable_now(),typeof ie=="function"?g.callback=ie:g===n(c)&&r(c),A(K)}else r(c);g=n(c)}if(g!==null)var fe=!0;else{var Rt=n(d);Rt!==null&&oe(M,Rt.startTime-K),fe=!1}return fe}finally{g=null,_=G,R=!1}}var z=!1,E=null,y=-1,v=5,T=-1;function C(){return!(t.unstable_now()-T<v)}function x(){if(E!==null){var U=t.unstable_now();T=U;var K=!0;try{K=E(!0,U)}finally{K?I():(z=!1,E=null)}}else z=!1}var I;if(typeof w=="function")I=function(){w(x)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,qt=ht.port2;ht.port1.onmessage=x,I=function(){qt.postMessage(null)}}else I=function(){O(x,0)};function X(U){E=U,z||(z=!0,I())}function oe(U,K){y=O(function(){U(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){P||R||(P=!0,X(j))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var G=_;_=K;try{return U()}finally{_=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var G=_;_=U;try{return K()}finally{_=G}},t.unstable_scheduleCallback=function(U,K,G){var de=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?de+G:de):G=de,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=G+ie,U={id:p++,callback:K,priorityLevel:U,startTime:G,expirationTime:ie,sortIndex:-1},G>de?(U.sortIndex=G,e(d,U),n(c)===null&&U===n(d)&&(D?(S(y),y=-1):D=!0,oe(M,G-de))):(U.sortIndex=ie,e(c,U),P||R||(P=!0,X(j))),U},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(U){var K=_;return function(){var G=_;_=K;try{return U.apply(this,arguments)}finally{_=G}}}})(ny);ty.exports=ny;var fE=ty.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pE=ue,St=fE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ry=new Set,Os={};function Fr(t,e){vi(t,e),vi(t+"Capture",e)}function vi(t,e){for(Os[t]=e,t=0;t<e.length;t++)ry.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,mE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_p={},vp={};function gE(t){return cc.call(vp,t)?!0:cc.call(_p,t)?!1:mE.test(t)?vp[t]=!0:(_p[t]=!0,!1)}function yE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _E(t,e,n,r){if(e===null||typeof e>"u"||yE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function Nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xh,Nh);He[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xh,Nh);He[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xh,Nh);He[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dh(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_E(e,n,i,r)&&(n=null),r||i===null?gE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=pE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),Vh=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),iy=Symbol.for("react.provider"),sy=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),Mh=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),oy=Symbol.for("react.offscreen"),wp=Symbol.iterator;function rs(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,ku;function ds(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var Ru=!1;function Cu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,u=o.length-1;1<=a&&0<=u&&i[a]!==o[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==o[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==o[u]){var c=`
`+i[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=u);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ds(t):""}function vE(t){switch(t.tag){case 5:return ds(t.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return t=Cu(t.type,!1),t;case 11:return t=Cu(t.type.render,!1),t;case 1:return t=Cu(t.type,!0),t;default:return""}}function pc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Yr:return"Portal";case hc:return"Profiler";case Vh:return"StrictMode";case dc:return"Suspense";case fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sy:return(t.displayName||"Context")+".Consumer";case iy:return(t._context.displayName||"Context")+".Provider";case Oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mh:return e=t.displayName||null,e!==null?e:pc(t.type)||"Memo";case On:e=t._payload,t=t._init;try{return pc(t(e))}catch{}}return null}function wE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(e);case 8:return e===Vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ay(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EE(t){var e=ay(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){t._valueTracker||(t._valueTracker=EE(t))}function ly(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ay(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mc(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uy(t,e){e=e.checked,e!=null&&Dh(t,"checked",e,!1)}function gc(t,e){uy(t,e);var n=ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&yc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yc(t,e,n){(e!=="number"||Ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fs=Array.isArray;function ui(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(fs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function cy(t,e){var n=ir(e.value),r=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,dy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TE=["Webkit","ms","Moz","O"];Object.keys(ws).forEach(function(t){TE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ws[e]=ws[t]})});function fy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ws.hasOwnProperty(t)&&ws[t]?(""+e).trim():e+"px"}function py(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var IE=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wc(t,e){if(e){if(IE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Ec(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tc=null;function Lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ic=null,ci=null,hi=null;function Ap(t){if(t=uo(t)){if(typeof Ic!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Rl(e),Ic(t.stateNode,t.type,e))}}function my(t){ci?hi?hi.push(t):hi=[t]:ci=t}function gy(){if(ci){var t=ci,e=hi;if(hi=ci=null,Ap(t),e)for(t=0;t<e.length;t++)Ap(e[t])}}function yy(t,e){return t(e)}function _y(){}var Pu=!1;function vy(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return yy(t,e,n)}finally{Pu=!1,(ci!==null||hi!==null)&&(_y(),gy())}}function Ls(t,e){var n=t.stateNode;if(n===null)return null;var r=Rl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Sc=!1;if(yn)try{var is={};Object.defineProperty(is,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{Sc=!1}function SE(t,e,n,r,i,o,a,u,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Es=!1,La=null,ba=!1,Ac=null,AE={onError:function(t){Es=!0,La=t}};function kE(t,e,n,r,i,o,a,u,c){Es=!1,La=null,SE.apply(AE,arguments)}function RE(t,e,n,r,i,o,a,u,c){if(kE.apply(this,arguments),Es){if(Es){var d=La;Es=!1,La=null}else throw Error(F(198));ba||(ba=!0,Ac=d)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kp(t){if(Ur(t)!==t)throw Error(F(188))}function CE(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return kp(i),t;if(o===r)return kp(i),e;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=o;break}if(u===r){a=!0,r=i,n=o;break}u=u.sibling}if(!a){for(u=o.child;u;){if(u===n){a=!0,n=o,r=i;break}if(u===r){a=!0,r=o,n=i;break}u=u.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Ey(t){return t=CE(t),t!==null?Ty(t):null}function Ty(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ty(t);if(e!==null)return e;t=t.sibling}return null}var Iy=St.unstable_scheduleCallback,Rp=St.unstable_cancelCallback,PE=St.unstable_shouldYield,xE=St.unstable_requestPaint,Ce=St.unstable_now,NE=St.unstable_getCurrentPriorityLevel,bh=St.unstable_ImmediatePriority,Sy=St.unstable_UserBlockingPriority,Fa=St.unstable_NormalPriority,DE=St.unstable_LowPriority,Ay=St.unstable_IdlePriority,Il=null,Yt=null;function VE(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:LE,OE=Math.log,ME=Math.LN2;function LE(t){return t>>>=0,t===0?32:31-(OE(t)/ME|0)|0}var Qo=64,Yo=4194304;function ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ua(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var u=a&~i;u!==0?r=ps(u):(o&=a,o!==0&&(r=ps(o)))}else a=n&~i,a!==0?r=ps(a):o!==0&&(r=ps(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function bE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-jt(o),u=1<<a,c=i[a];c===-1?(!(u&n)||u&r)&&(i[a]=bE(u,e)):c<=e&&(t.expiredLanes|=u),o&=~u}}function kc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ky(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function UE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Ry(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cy,Uh,Py,xy,Ny,Rc=!1,Xo=[],qn=null,Wn=null,Kn=null,bs=new Map,Fs=new Map,Ln=[],jE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(e.pointerId)}}function ss(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=uo(e),e!==null&&Uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function zE(t,e,n,r,i){switch(e){case"focusin":return qn=ss(qn,t,e,n,r,i),!0;case"dragenter":return Wn=ss(Wn,t,e,n,r,i),!0;case"mouseover":return Kn=ss(Kn,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return bs.set(o,ss(bs.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fs.set(o,ss(Fs.get(o)||null,t,e,n,r,i)),!0}return!1}function Dy(t){var e=wr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=wy(n),e!==null){t.blockedOn=e,Ny(t.priority,function(){Py(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tc=r,n.target.dispatchEvent(r),Tc=null}else return e=uo(n),e!==null&&Uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Pp(t,e,n){ma(t)&&n.delete(e)}function BE(){Rc=!1,qn!==null&&ma(qn)&&(qn=null),Wn!==null&&ma(Wn)&&(Wn=null),Kn!==null&&ma(Kn)&&(Kn=null),bs.forEach(Pp),Fs.forEach(Pp)}function os(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,BE)))}function Us(t){function e(i){return os(i,t)}if(0<Xo.length){os(Xo[0],t);for(var n=1;n<Xo.length;n++){var r=Xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&os(qn,t),Wn!==null&&os(Wn,t),Kn!==null&&os(Kn,t),bs.forEach(e),Fs.forEach(e),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)Dy(n),n.blockedOn===null&&Ln.shift()}var di=Rn.ReactCurrentBatchConfig,ja=!0;function $E(t,e,n,r){var i=ce,o=di.transition;di.transition=null;try{ce=1,jh(t,e,n,r)}finally{ce=i,di.transition=o}}function HE(t,e,n,r){var i=ce,o=di.transition;di.transition=null;try{ce=4,jh(t,e,n,r)}finally{ce=i,di.transition=o}}function jh(t,e,n,r){if(ja){var i=Cc(t,e,n,r);if(i===null)ju(t,e,r,za,n),Cp(t,r);else if(zE(i,t,e,n,r))r.stopPropagation();else if(Cp(t,r),e&4&&-1<jE.indexOf(t)){for(;i!==null;){var o=uo(i);if(o!==null&&Cy(o),o=Cc(t,e,n,r),o===null&&ju(t,e,r,za,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ju(t,e,r,null,n)}}var za=null;function Cc(t,e,n,r){if(za=null,t=Lh(r),t=wr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return za=t,null}function Vy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NE()){case bh:return 1;case Sy:return 4;case Fa:case DE:return 16;case Ay:return 536870912;default:return 16}default:return 16}}var Bn=null,zh=null,ga=null;function Oy(){if(ga)return ga;var t,e=zh,n=e.length,r,i="value"in Bn?Bn.value:Bn.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[o-r];r++);return ga=i.slice(t,1<r?1-r:void 0)}function ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function xp(){return!1}function kt(t){function e(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jo:xp,this.isPropagationStopped=xp,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=kt(Li),lo=Ie({},Li,{view:0,detail:0}),qE=kt(lo),Nu,Du,as,Sl=Ie({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$h,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==as&&(as&&t.type==="mousemove"?(Nu=t.screenX-as.screenX,Du=t.screenY-as.screenY):Du=Nu=0,as=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),Np=kt(Sl),WE=Ie({},Sl,{dataTransfer:0}),KE=kt(WE),GE=Ie({},lo,{relatedTarget:0}),Vu=kt(GE),QE=Ie({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),YE=kt(QE),XE=Ie({},Li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JE=kt(XE),ZE=Ie({},Li,{data:0}),Dp=kt(ZE),eT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nT[t])?!!e[t]:!1}function $h(){return rT}var iT=Ie({},lo,{key:function(t){if(t.key){var e=eT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$h,charCode:function(t){return t.type==="keypress"?ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sT=kt(iT),oT=Ie({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=kt(oT),aT=Ie({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$h}),lT=kt(aT),uT=Ie({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),cT=kt(uT),hT=Ie({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dT=kt(hT),fT=[9,13,27,32],Hh=yn&&"CompositionEvent"in window,Ts=null;yn&&"documentMode"in document&&(Ts=document.documentMode);var pT=yn&&"TextEvent"in window&&!Ts,My=yn&&(!Hh||Ts&&8<Ts&&11>=Ts),Op=" ",Mp=!1;function Ly(t,e){switch(t){case"keyup":return fT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function by(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function mT(t,e){switch(t){case"compositionend":return by(e);case"keypress":return e.which!==32?null:(Mp=!0,Op);case"textInput":return t=e.data,t===Op&&Mp?null:t;default:return null}}function gT(t,e){if(Jr)return t==="compositionend"||!Hh&&Ly(t,e)?(t=Oy(),ga=zh=Bn=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return My&&e.locale!=="ko"?null:e.data;default:return null}}var yT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yT[t.type]:e==="textarea"}function Fy(t,e,n,r){my(r),e=Ba(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Is=null,js=null;function _T(t){Qy(t,0)}function Al(t){var e=ti(t);if(ly(e))return t}function vT(t,e){if(t==="change")return e}var Uy=!1;if(yn){var Ou;if(yn){var Mu="oninput"in document;if(!Mu){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),Mu=typeof bp.oninput=="function"}Ou=Mu}else Ou=!1;Uy=Ou&&(!document.documentMode||9<document.documentMode)}function Fp(){Is&&(Is.detachEvent("onpropertychange",jy),js=Is=null)}function jy(t){if(t.propertyName==="value"&&Al(js)){var e=[];Fy(e,js,t,Lh(t)),vy(_T,e)}}function wT(t,e,n){t==="focusin"?(Fp(),Is=e,js=n,Is.attachEvent("onpropertychange",jy)):t==="focusout"&&Fp()}function ET(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(js)}function TT(t,e){if(t==="click")return Al(e)}function IT(t,e){if(t==="input"||t==="change")return Al(e)}function ST(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:ST;function zs(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function Up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,e){var n=Up(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Up(n)}}function zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function By(){for(var t=window,e=Ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ma(t.document)}return e}function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AT(t){var e=By(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zy(n.ownerDocument.documentElement,n)){if(r!==null&&qh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=jp(n,o);var a=jp(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kT=yn&&"documentMode"in document&&11>=document.documentMode,Zr=null,Pc=null,Ss=null,xc=!1;function zp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||Zr==null||Zr!==Ma(r)||(r=Zr,"selectionStart"in r&&qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ss&&zs(Ss,r)||(Ss=r,r=Ba(Pc,"onSelect"),0<r.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zr)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ei={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},Lu={},$y={};yn&&($y=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function kl(t){if(Lu[t])return Lu[t];if(!ei[t])return t;var e=ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $y)return Lu[t]=e[n];return t}var Hy=kl("animationend"),qy=kl("animationiteration"),Wy=kl("animationstart"),Ky=kl("transitionend"),Gy=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Gy.set(t,e),Fr(e,[t])}for(var bu=0;bu<Bp.length;bu++){var Fu=Bp[bu],RT=Fu.toLowerCase(),CT=Fu[0].toUpperCase()+Fu.slice(1);ur(RT,"on"+CT)}ur(Hy,"onAnimationEnd");ur(qy,"onAnimationIteration");ur(Wy,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Ky,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function $p(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RE(r,e,void 0,t),t.currentTarget=null}function Qy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var a=r.length-1;0<=a;a--){var u=r[a],c=u.instance,d=u.currentTarget;if(u=u.listener,c!==o&&i.isPropagationStopped())break e;$p(i,u,d),o=c}else for(a=0;a<r.length;a++){if(u=r[a],c=u.instance,d=u.currentTarget,u=u.listener,c!==o&&i.isPropagationStopped())break e;$p(i,u,d),o=c}}}if(ba)throw t=Ac,ba=!1,Ac=null,t}function ye(t,e){var n=e[Mc];n===void 0&&(n=e[Mc]=new Set);var r=t+"__bubble";n.has(r)||(Yy(e,t,2,!1),n.add(r))}function Uu(t,e,n){var r=0;e&&(r|=4),Yy(n,t,r,e)}var ea="_reactListening"+Math.random().toString(36).slice(2);function Bs(t){if(!t[ea]){t[ea]=!0,ry.forEach(function(n){n!=="selectionchange"&&(PT.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ea]||(e[ea]=!0,Uu("selectionchange",!1,e))}}function Yy(t,e,n,r){switch(Vy(e)){case 1:var i=$E;break;case 4:i=HE;break;default:i=jh}n=i.bind(null,e,n,t),i=void 0,!Sc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ju(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;u!==null;){if(a=wr(u),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}u=u.parentNode}}r=r.return}vy(function(){var d=o,p=Lh(n),g=[];e:{var _=Gy.get(t);if(_!==void 0){var R=Bh,P=t;switch(t){case"keypress":if(ya(n)===0)break e;case"keydown":case"keyup":R=sT;break;case"focusin":P="focus",R=Vu;break;case"focusout":P="blur",R=Vu;break;case"beforeblur":case"afterblur":R=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=KE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=lT;break;case Hy:case qy:case Wy:R=YE;break;case Ky:R=cT;break;case"scroll":R=qE;break;case"wheel":R=dT;break;case"copy":case"cut":case"paste":R=JE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Vp}var D=(e&4)!==0,O=!D&&t==="scroll",S=D?_!==null?_+"Capture":null:_;D=[];for(var w=d,A;w!==null;){A=w;var M=A.stateNode;if(A.tag===5&&M!==null&&(A=M,S!==null&&(M=Ls(w,S),M!=null&&D.push($s(w,M,A)))),O)break;w=w.return}0<D.length&&(_=new R(_,P,null,n,p),g.push({event:_,listeners:D}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",_&&n!==Tc&&(P=n.relatedTarget||n.fromElement)&&(wr(P)||P[_n]))break e;if((R||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,R?(P=n.relatedTarget||n.toElement,R=d,P=P?wr(P):null,P!==null&&(O=Ur(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(R=null,P=d),R!==P)){if(D=Np,M="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(D=Vp,M="onPointerLeave",S="onPointerEnter",w="pointer"),O=R==null?_:ti(R),A=P==null?_:ti(P),_=new D(M,w+"leave",R,n,p),_.target=O,_.relatedTarget=A,M=null,wr(p)===d&&(D=new D(S,w+"enter",P,n,p),D.target=A,D.relatedTarget=O,M=D),O=M,R&&P)t:{for(D=R,S=P,w=0,A=D;A;A=Wr(A))w++;for(A=0,M=S;M;M=Wr(M))A++;for(;0<w-A;)D=Wr(D),w--;for(;0<A-w;)S=Wr(S),A--;for(;w--;){if(D===S||S!==null&&D===S.alternate)break t;D=Wr(D),S=Wr(S)}D=null}else D=null;R!==null&&Hp(g,_,R,D,!1),P!==null&&O!==null&&Hp(g,O,P,D,!0)}}e:{if(_=d?ti(d):window,R=_.nodeName&&_.nodeName.toLowerCase(),R==="select"||R==="input"&&_.type==="file")var j=vT;else if(Lp(_))if(Uy)j=IT;else{j=ET;var z=wT}else(R=_.nodeName)&&R.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(j=TT);if(j&&(j=j(t,d))){Fy(g,j,n,p);break e}z&&z(t,_,d),t==="focusout"&&(z=_._wrapperState)&&z.controlled&&_.type==="number"&&yc(_,"number",_.value)}switch(z=d?ti(d):window,t){case"focusin":(Lp(z)||z.contentEditable==="true")&&(Zr=z,Pc=d,Ss=null);break;case"focusout":Ss=Pc=Zr=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,zp(g,n,p);break;case"selectionchange":if(kT)break;case"keydown":case"keyup":zp(g,n,p)}var E;if(Hh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Jr?Ly(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(My&&n.locale!=="ko"&&(Jr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Jr&&(E=Oy()):(Bn=p,zh="value"in Bn?Bn.value:Bn.textContent,Jr=!0)),z=Ba(d,y),0<z.length&&(y=new Dp(y,t,null,n,p),g.push({event:y,listeners:z}),E?y.data=E:(E=by(n),E!==null&&(y.data=E)))),(E=pT?mT(t,n):gT(t,n))&&(d=Ba(d,"onBeforeInput"),0<d.length&&(p=new Dp("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=E))}Qy(g,e)})}function $s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ba(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ls(t,n),o!=null&&r.unshift($s(t,o,i)),o=Ls(t,e),o!=null&&r.push($s(t,o,i))),t=t.return}return r}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hp(t,e,n,r,i){for(var o=e._reactName,a=[];n!==null&&n!==r;){var u=n,c=u.alternate,d=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&d!==null&&(u=d,i?(c=Ls(n,o),c!=null&&a.unshift($s(n,c,u))):i||(c=Ls(n,o),c!=null&&a.push($s(n,c,u)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var xT=/\r\n?/g,NT=/\u0000|\uFFFD/g;function qp(t){return(typeof t=="string"?t:""+t).replace(xT,`
`).replace(NT,"")}function ta(t,e,n){if(e=qp(e),qp(t)!==e&&n)throw Error(F(425))}function $a(){}var Nc=null,Dc=null;function Vc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,DT=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,VT=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(t){return Wp.resolve(null).then(t).catch(OT)}:Oc;function OT(t){setTimeout(function(){throw t})}function zu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Us(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Us(e)}function Gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bi=Math.random().toString(36).slice(2),Gt="__reactFiber$"+bi,Hs="__reactProps$"+bi,_n="__reactContainer$"+bi,Mc="__reactEvents$"+bi,MT="__reactListeners$"+bi,LT="__reactHandles$"+bi;function wr(t){var e=t[Gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kp(t);t!==null;){if(n=t[Gt])return n;t=Kp(t)}return e}t=n,n=t.parentNode}return null}function uo(t){return t=t[Gt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Rl(t){return t[Hs]||null}var Lc=[],ni=-1;function cr(t){return{current:t}}function ve(t){0>ni||(t.current=Lc[ni],Lc[ni]=null,ni--)}function me(t,e){ni++,Lc[ni]=t.current,t.current=e}var sr={},rt=cr(sr),mt=cr(!1),Cr=sr;function wi(t,e){var n=t.type.contextTypes;if(!n)return sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Ha(){ve(mt),ve(rt)}function Gp(t,e,n){if(rt.current!==sr)throw Error(F(168));me(rt,e),me(mt,n)}function Xy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,wE(t)||"Unknown",i));return Ie({},n,r)}function qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Cr=rt.current,me(rt,t),me(mt,mt.current),!0}function Qp(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Xy(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,ve(mt),ve(rt),me(rt,t)):ve(mt),me(mt,n)}var un=null,Cl=!1,Bu=!1;function Jy(t){un===null?un=[t]:un.push(t)}function bT(t){Cl=!0,Jy(t)}function hr(){if(!Bu&&un!==null){Bu=!0;var t=0,e=ce;try{var n=un;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Cl=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),Iy(bh,hr),i}finally{ce=e,Bu=!1}}return null}var ri=[],ii=0,Wa=null,Ka=0,Pt=[],xt=0,Pr=null,cn=1,hn="";function yr(t,e){ri[ii++]=Ka,ri[ii++]=Wa,Wa=t,Ka=e}function Zy(t,e,n){Pt[xt++]=cn,Pt[xt++]=hn,Pt[xt++]=Pr,Pr=t;var r=cn;t=hn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var o=32-jt(e)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,cn=1<<32-jt(e)+i|n<<i|r,hn=o+t}else cn=1<<o|n<<i|r,hn=t}function Wh(t){t.return!==null&&(yr(t,1),Zy(t,1,0))}function Kh(t){for(;t===Wa;)Wa=ri[--ii],ri[ii]=null,Ka=ri[--ii],ri[ii]=null;for(;t===Pr;)Pr=Pt[--xt],Pt[xt]=null,hn=Pt[--xt],Pt[xt]=null,cn=Pt[--xt],Pt[xt]=null}var It=null,Et=null,we=!1,Ut=null;function e_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,Et=Gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,Et=null,!0):!1;default:return!1}}function bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fc(t){if(we){var e=Et;if(e){var n=e;if(!Yp(t,e)){if(bc(t))throw Error(F(418));e=Gn(n.nextSibling);var r=It;e&&Yp(t,e)?e_(r,n):(t.flags=t.flags&-4097|2,we=!1,It=t)}}else{if(bc(t))throw Error(F(418));t.flags=t.flags&-4097|2,we=!1,It=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function na(t){if(t!==It)return!1;if(!we)return Xp(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vc(t.type,t.memoizedProps)),e&&(e=Et)){if(bc(t))throw t_(),Error(F(418));for(;e;)e_(t,e),e=Gn(e.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=Gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=It?Gn(t.stateNode.nextSibling):null;return!0}function t_(){for(var t=Et;t;)t=Gn(t.nextSibling)}function Ei(){Et=It=null,we=!1}function Gh(t){Ut===null?Ut=[t]:Ut.push(t)}var FT=Rn.ReactCurrentBatchConfig;function ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var u=i.refs;a===null?delete u[o]:u[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jp(t){var e=t._init;return e(t._payload)}function n_(t){function e(S,w){if(t){var A=S.deletions;A===null?(S.deletions=[w],S.flags|=16):A.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=Jn(S,w),S.index=0,S.sibling=null,S}function o(S,w,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<w?(S.flags|=2,w):A):(S.flags|=2,w)):(S.flags|=1048576,w)}function a(S){return t&&S.alternate===null&&(S.flags|=2),S}function u(S,w,A,M){return w===null||w.tag!==6?(w=Qu(A,S.mode,M),w.return=S,w):(w=i(w,A),w.return=S,w)}function c(S,w,A,M){var j=A.type;return j===Xr?p(S,w,A.props.children,M,A.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===On&&Jp(j)===w.type)?(M=i(w,A.props),M.ref=ls(S,w,A),M.return=S,M):(M=Sa(A.type,A.key,A.props,null,S.mode,M),M.ref=ls(S,w,A),M.return=S,M)}function d(S,w,A,M){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Yu(A,S.mode,M),w.return=S,w):(w=i(w,A.children||[]),w.return=S,w)}function p(S,w,A,M,j){return w===null||w.tag!==7?(w=Ar(A,S.mode,M,j),w.return=S,w):(w=i(w,A),w.return=S,w)}function g(S,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Qu(""+w,S.mode,A),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wo:return A=Sa(w.type,w.key,w.props,null,S.mode,A),A.ref=ls(S,null,w),A.return=S,A;case Yr:return w=Yu(w,S.mode,A),w.return=S,w;case On:var M=w._init;return g(S,M(w._payload),A)}if(fs(w)||rs(w))return w=Ar(w,S.mode,A,null),w.return=S,w;ra(S,w)}return null}function _(S,w,A,M){var j=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:u(S,w,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Wo:return A.key===j?c(S,w,A,M):null;case Yr:return A.key===j?d(S,w,A,M):null;case On:return j=A._init,_(S,w,j(A._payload),M)}if(fs(A)||rs(A))return j!==null?null:p(S,w,A,M,null);ra(S,A)}return null}function R(S,w,A,M,j){if(typeof M=="string"&&M!==""||typeof M=="number")return S=S.get(A)||null,u(w,S,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Wo:return S=S.get(M.key===null?A:M.key)||null,c(w,S,M,j);case Yr:return S=S.get(M.key===null?A:M.key)||null,d(w,S,M,j);case On:var z=M._init;return R(S,w,A,z(M._payload),j)}if(fs(M)||rs(M))return S=S.get(A)||null,p(w,S,M,j,null);ra(w,M)}return null}function P(S,w,A,M){for(var j=null,z=null,E=w,y=w=0,v=null;E!==null&&y<A.length;y++){E.index>y?(v=E,E=null):v=E.sibling;var T=_(S,E,A[y],M);if(T===null){E===null&&(E=v);break}t&&E&&T.alternate===null&&e(S,E),w=o(T,w,y),z===null?j=T:z.sibling=T,z=T,E=v}if(y===A.length)return n(S,E),we&&yr(S,y),j;if(E===null){for(;y<A.length;y++)E=g(S,A[y],M),E!==null&&(w=o(E,w,y),z===null?j=E:z.sibling=E,z=E);return we&&yr(S,y),j}for(E=r(S,E);y<A.length;y++)v=R(E,S,y,A[y],M),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),w=o(v,w,y),z===null?j=v:z.sibling=v,z=v);return t&&E.forEach(function(C){return e(S,C)}),we&&yr(S,y),j}function D(S,w,A,M){var j=rs(A);if(typeof j!="function")throw Error(F(150));if(A=j.call(A),A==null)throw Error(F(151));for(var z=j=null,E=w,y=w=0,v=null,T=A.next();E!==null&&!T.done;y++,T=A.next()){E.index>y?(v=E,E=null):v=E.sibling;var C=_(S,E,T.value,M);if(C===null){E===null&&(E=v);break}t&&E&&C.alternate===null&&e(S,E),w=o(C,w,y),z===null?j=C:z.sibling=C,z=C,E=v}if(T.done)return n(S,E),we&&yr(S,y),j;if(E===null){for(;!T.done;y++,T=A.next())T=g(S,T.value,M),T!==null&&(w=o(T,w,y),z===null?j=T:z.sibling=T,z=T);return we&&yr(S,y),j}for(E=r(S,E);!T.done;y++,T=A.next())T=R(E,S,y,T.value,M),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),w=o(T,w,y),z===null?j=T:z.sibling=T,z=T);return t&&E.forEach(function(x){return e(S,x)}),we&&yr(S,y),j}function O(S,w,A,M){if(typeof A=="object"&&A!==null&&A.type===Xr&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Wo:e:{for(var j=A.key,z=w;z!==null;){if(z.key===j){if(j=A.type,j===Xr){if(z.tag===7){n(S,z.sibling),w=i(z,A.props.children),w.return=S,S=w;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===On&&Jp(j)===z.type){n(S,z.sibling),w=i(z,A.props),w.ref=ls(S,z,A),w.return=S,S=w;break e}n(S,z);break}else e(S,z);z=z.sibling}A.type===Xr?(w=Ar(A.props.children,S.mode,M,A.key),w.return=S,S=w):(M=Sa(A.type,A.key,A.props,null,S.mode,M),M.ref=ls(S,w,A),M.return=S,S=M)}return a(S);case Yr:e:{for(z=A.key;w!==null;){if(w.key===z)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(S,w.sibling),w=i(w,A.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Yu(A,S.mode,M),w.return=S,S=w}return a(S);case On:return z=A._init,O(S,w,z(A._payload),M)}if(fs(A))return P(S,w,A,M);if(rs(A))return D(S,w,A,M);ra(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,A),w.return=S,S=w):(n(S,w),w=Qu(A,S.mode,M),w.return=S,S=w),a(S)):n(S,w)}return O}var Ti=n_(!0),r_=n_(!1),Ga=cr(null),Qa=null,si=null,Qh=null;function Yh(){Qh=si=Qa=null}function Xh(t){var e=Ga.current;ve(Ga),t._currentValue=e}function Uc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fi(t,e){Qa=t,Qh=si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(Qh!==t)if(t={context:t,memoizedValue:e,next:null},si===null){if(Qa===null)throw Error(F(308));si=t,Qa.dependencies={lanes:0,firstContext:t}}else si=si.next=t;return e}var Er=null;function Jh(t){Er===null?Er=[t]:Er.push(t)}function i_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jh(e)):(n.next=i.next,i.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vn(t,n)}return i=r.interleaved,i===null?(e.next=e,Jh(r)):(e.next=i.next,i.next=e),r.interleaved=e,vn(t,n)}function _a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}function Zp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ya(t,e,n,r){var i=t.updateQueue;Mn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,d=c.next;c.next=null,a===null?o=d:a.next=d,a=c;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==a&&(u===null?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=c))}if(o!==null){var g=i.baseState;a=0,p=d=c=null,u=o;do{var _=u.lane,R=u.eventTime;if((r&_)===_){p!==null&&(p=p.next={eventTime:R,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var P=t,D=u;switch(_=e,R=n,D.tag){case 1:if(P=D.payload,typeof P=="function"){g=P.call(R,g,_);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=D.payload,_=typeof P=="function"?P.call(R,g,_):P,_==null)break e;g=Ie({},g,_);break e;case 2:Mn=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[u]:_.push(u))}else R={eventTime:R,lane:_,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(d=p=R,c=g):p=p.next=R,a|=_;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;_=u,u=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(p===null&&(c=g),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Nr|=a,t.lanes=a,t.memoizedState=g}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var co={},Xt=cr(co),qs=cr(co),Ws=cr(co);function Tr(t){if(t===co)throw Error(F(174));return t}function ed(t,e){switch(me(Ws,e),me(qs,t),me(Xt,co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vc(e,t)}ve(Xt),me(Xt,e)}function Ii(){ve(Xt),ve(qs),ve(Ws)}function o_(t){Tr(Ws.current);var e=Tr(Xt.current),n=vc(e,t.type);e!==n&&(me(qs,t),me(Xt,n))}function td(t){qs.current===t&&(ve(Xt),ve(qs))}var Ee=cr(0);function Xa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $u=[];function nd(){for(var t=0;t<$u.length;t++)$u[t]._workInProgressVersionPrimary=null;$u.length=0}var va=Rn.ReactCurrentDispatcher,Hu=Rn.ReactCurrentBatchConfig,xr=0,Te=null,De=null,Le=null,Ja=!1,As=!1,Ks=0,UT=0;function Xe(){throw Error(F(321))}function rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function id(t,e,n,r,i,o){if(xr=o,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,va.current=t===null||t.memoizedState===null?$T:HT,t=n(r,i),As){o=0;do{if(As=!1,Ks=0,25<=o)throw Error(F(301));o+=1,Le=De=null,e.updateQueue=null,va.current=qT,t=n(r,i)}while(As)}if(va.current=Za,e=De!==null&&De.next!==null,xr=0,Le=De=Te=null,Ja=!1,e)throw Error(F(300));return t}function sd(){var t=Ks!==0;return Ks=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?Te.memoizedState=Le=t:Le=Le.next=t,Le}function Ot(){if(De===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Le===null?Te.memoizedState:Le.next;if(e!==null)Le=e,De=t;else{if(t===null)throw Error(F(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Le===null?Te.memoizedState=Le=t:Le=Le.next=t}return Le}function Gs(t,e){return typeof e=="function"?e(t):e}function qu(t){var e=Ot(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=a=null,c=null,d=o;do{var p=d.lane;if((xr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(u=c=g,a=r):c=c.next=g,Te.lanes|=p,Nr|=p}d=d.next}while(d!==null&&d!==o);c===null?a=r:c.next=u,$t(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Te.lanes|=o,Nr|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wu(t){var e=Ot(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=t(o,a.action),a=a.next;while(a!==i);$t(o,e.memoizedState)||(pt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function a_(){}function l_(t,e){var n=Te,r=Ot(),i=e(),o=!$t(r.memoizedState,i);if(o&&(r.memoizedState=i,pt=!0),r=r.queue,od(h_.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Qs(9,c_.bind(null,n,r,i,e),void 0,null),be===null)throw Error(F(349));xr&30||u_(n,e,i)}return i}function u_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function c_(t,e,n,r){e.value=n,e.getSnapshot=r,d_(e)&&f_(t)}function h_(t,e,n){return n(function(){d_(e)&&f_(t)})}function d_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function f_(t){var e=vn(t,1);e!==null&&zt(e,t,1,-1)}function tm(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:t},e.queue=t,t=t.dispatch=BT.bind(null,Te,t),[e.memoizedState,t]}function Qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function p_(){return Ot().memoizedState}function wa(t,e,n,r){var i=Kt();Te.flags|=t,i.memoizedState=Qs(1|e,n,void 0,r===void 0?null:r)}function Pl(t,e,n,r){var i=Ot();r=r===void 0?null:r;var o=void 0;if(De!==null){var a=De.memoizedState;if(o=a.destroy,r!==null&&rd(r,a.deps)){i.memoizedState=Qs(e,n,o,r);return}}Te.flags|=t,i.memoizedState=Qs(1|e,n,o,r)}function nm(t,e){return wa(8390656,8,t,e)}function od(t,e){return Pl(2048,8,t,e)}function m_(t,e){return Pl(4,2,t,e)}function g_(t,e){return Pl(4,4,t,e)}function y_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function __(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,y_.bind(null,e,t),n)}function ad(){}function v_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function w_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function E_(t,e,n){return xr&21?($t(n,e)||(n=ky(),Te.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function jT(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Hu.transition;Hu.transition={};try{t(!1),e()}finally{ce=n,Hu.transition=r}}function T_(){return Ot().memoizedState}function zT(t,e,n){var r=Xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},I_(t))S_(e,n);else if(n=i_(t,e,n,r),n!==null){var i=lt();zt(n,t,r,i),A_(n,e,r)}}function BT(t,e,n){var r=Xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(I_(t))S_(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(i.hasEagerState=!0,i.eagerState=u,$t(u,a)){var c=e.interleaved;c===null?(i.next=i,Jh(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=i_(t,e,i,r),n!==null&&(i=lt(),zt(n,t,r,i),A_(n,e,r))}}function I_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function S_(t,e){As=Ja=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function A_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}var Za={readContext:Vt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},$T={readContext:Vt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wa(4194308,4,y_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return wa(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=zT.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:tm,useDebugValue:ad,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=tm(!1),e=t[0];return t=jT.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=Kt();if(we){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),be===null)throw Error(F(349));xr&30||u_(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,nm(h_.bind(null,r,o,t),[t]),r.flags|=2048,Qs(9,c_.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Kt(),e=be.identifierPrefix;if(we){var n=hn,r=cn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ks++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=UT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HT={readContext:Vt,useCallback:v_,useContext:Vt,useEffect:od,useImperativeHandle:__,useInsertionEffect:m_,useLayoutEffect:g_,useMemo:w_,useReducer:qu,useRef:p_,useState:function(){return qu(Gs)},useDebugValue:ad,useDeferredValue:function(t){var e=Ot();return E_(e,De.memoizedState,t)},useTransition:function(){var t=qu(Gs)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:l_,useId:T_,unstable_isNewReconciler:!1},qT={readContext:Vt,useCallback:v_,useContext:Vt,useEffect:od,useImperativeHandle:__,useInsertionEffect:m_,useLayoutEffect:g_,useMemo:w_,useReducer:Wu,useRef:p_,useState:function(){return Wu(Gs)},useDebugValue:ad,useDeferredValue:function(t){var e=Ot();return De===null?e.memoizedState=t:E_(e,De.memoizedState,t)},useTransition:function(){var t=Wu(Gs)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:l_,useId:T_,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=Xn(t),o=mn(r,i);o.payload=e,n!=null&&(o.callback=n),e=Qn(t,o,i),e!==null&&(zt(e,t,i,r),_a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=Xn(t),o=mn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Qn(t,o,i),e!==null&&(zt(e,t,i,r),_a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=Xn(t),i=mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qn(t,i,r),e!==null&&(zt(e,t,r,n),_a(e,t,r))}};function rm(t,e,n,r,i,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,a):e.prototype&&e.prototype.isPureReactComponent?!zs(n,r)||!zs(i,o):!0}function k_(t,e,n){var r=!1,i=sr,o=e.contextType;return typeof o=="object"&&o!==null?o=Vt(o):(i=gt(e)?Cr:rt.current,r=e.contextTypes,o=(r=r!=null)?wi(t,i):sr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function im(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xl.enqueueReplaceState(e,e.state,null)}function zc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Zh(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Vt(o):(o=gt(e)?Cr:rt.current,i.context=wi(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(jc(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xl.enqueueReplaceState(i,i.state,null),Ya(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Si(t,e){try{var n="",r=e;do n+=vE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Ku(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WT=typeof WeakMap=="function"?WeakMap:Map;function R_(t,e,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tl||(tl=!0,Jc=r),Bc(t,e)},n}function C_(t,e,n){n=mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bc(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bc(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function sm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new WT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oI.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mn(-1,1),e.tag=2,Qn(n,e,1))),n.lanes|=1),t)}var KT=Rn.ReactCurrentOwner,pt=!1;function at(t,e,n,r){e.child=t===null?r_(e,null,n,r):Ti(e,t.child,n,r)}function lm(t,e,n,r,i){n=n.render;var o=e.ref;return fi(e,i),r=id(t,e,n,r,o,i),n=sd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(we&&n&&Wh(e),e.flags|=1,at(t,e,r,i),e.child)}function um(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!md(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,P_(t,e,o,r,i)):(t=Sa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:zs,n(a,r)&&t.ref===e.ref)return wn(t,e,i)}return e.flags|=1,t=Jn(o,r),t.ref=e.ref,t.return=e,e.child=t}function P_(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(zs(o,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,wn(t,e,i)}return $c(t,e,n,r,i)}function x_(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ai,wt),wt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(ai,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(ai,wt),wt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,me(ai,wt),wt|=r;return at(t,e,i,n),e.child}function N_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $c(t,e,n,r,i){var o=gt(n)?Cr:rt.current;return o=wi(e,o),fi(e,i),n=id(t,e,n,r,o,i),r=sd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(we&&r&&Wh(e),e.flags|=1,at(t,e,n,i),e.child)}function cm(t,e,n,r,i){if(gt(n)){var o=!0;qa(e)}else o=!1;if(fi(e,i),e.stateNode===null)Ea(t,e),k_(e,n,r),zc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,u=e.memoizedProps;a.props=u;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Vt(d):(d=gt(n)?Cr:rt.current,d=wi(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||c!==d)&&im(e,a,r,d),Mn=!1;var _=e.memoizedState;a.state=_,Ya(e,r,a,i),c=e.memoizedState,u!==r||_!==c||mt.current||Mn?(typeof p=="function"&&(jc(e,n,p,r),c=e.memoizedState),(u=Mn||rm(e,n,u,r,_,c,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),a.props=r,a.state=c,a.context=d,r=u):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,s_(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:bt(e.type,u),a.props=d,g=e.pendingProps,_=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Vt(c):(c=gt(n)?Cr:rt.current,c=wi(e,c));var R=n.getDerivedStateFromProps;(p=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==g||_!==c)&&im(e,a,r,c),Mn=!1,_=e.memoizedState,a.state=_,Ya(e,r,a,i);var P=e.memoizedState;u!==g||_!==P||mt.current||Mn?(typeof R=="function"&&(jc(e,n,R,r),P=e.memoizedState),(d=Mn||rm(e,n,d,r,_,P,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,P,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,P,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),a.props=r,a.state=P,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Hc(t,e,n,r,o,i)}function Hc(t,e,n,r,i,o){N_(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Qp(e,n,!1),wn(t,e,o);r=e.stateNode,KT.current=e;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Ti(e,t.child,null,o),e.child=Ti(e,null,u,o)):at(t,e,u,o),e.memoizedState=r.state,i&&Qp(e,n,!0),e.child}function D_(t){var e=t.stateNode;e.pendingContext?Gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(t,e.context,!1),ed(t,e.containerInfo)}function hm(t,e,n,r,i){return Ei(),Gh(i),e.flags|=256,at(t,e,n,r),e.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function V_(t,e,n){var r=e.pendingProps,i=Ee.current,o=!1,a=(e.flags&128)!==0,u;if((u=a)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Ee,i&1),t===null)return Fc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,o?(r=e.mode,o=e.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Vl(a,r,0,null),t=Ar(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Wc(n),e.memoizedState=qc,t):ld(e,a));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return GT(t,e,a,r,u,i,n);if(o){o=r.fallback,a=e.mode,i=t.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Jn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Jn(u,o):(o=Ar(o,a,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,a=t.child.memoizedState,a=a===null?Wc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=qc,r}return o=t.child,t=o.sibling,r=Jn(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ld(t,e){return e=Vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ia(t,e,n,r){return r!==null&&Gh(r),Ti(e,t.child,null,n),t=ld(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GT(t,e,n,r,i,o,a){if(n)return e.flags&256?(e.flags&=-257,r=Ku(Error(F(422))),ia(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Vl({mode:"visible",children:r.children},i,0,null),o=Ar(o,i,a,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ti(e,t.child,null,a),e.child.memoizedState=Wc(a),e.memoizedState=qc,o);if(!(e.mode&1))return ia(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(F(419)),r=Ku(o,r,void 0),ia(t,e,a,r)}if(u=(a&t.childLanes)!==0,pt||u){if(r=be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vn(t,i),zt(r,t,i,-1))}return pd(),r=Ku(Error(F(421))),ia(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aI.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Et=Gn(i.nextSibling),It=e,we=!0,Ut=null,t!==null&&(Pt[xt++]=cn,Pt[xt++]=hn,Pt[xt++]=Pr,cn=t.id,hn=t.overflow,Pr=e),e=ld(e,r.children),e.flags|=4096,e)}function dm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uc(t.return,e,n)}function Gu(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function O_(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(at(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,n,e);else if(t.tag===19)dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gu(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gu(e,!0,n,null,o);break;case"together":Gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QT(t,e,n){switch(e.tag){case 3:D_(e),Ei();break;case 5:o_(e);break;case 1:gt(e.type)&&qa(e);break;case 4:ed(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Ga,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?V_(t,e,n):(me(Ee,Ee.current&1),t=wn(t,e,n),t!==null?t.sibling:null);me(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return O_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,x_(t,e,n)}return wn(t,e,n)}var M_,Kc,L_,b_;M_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kc=function(){};L_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tr(Xt.current);var o=null;switch(n){case"input":i=mc(t,i),r=mc(t,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=_c(t,i),r=_c(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$a)}wc(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var u=i[d];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Os.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(u=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==u&&(c!=null||u!=null))if(d==="style")if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Os.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ye("scroll",t),o||u===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};b_=function(t,e,n,r){n!==r&&(e.flags|=4)};function us(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function YT(t,e,n){var r=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return gt(e.type)&&Ha(),Je(e),null;case 3:return r=e.stateNode,Ii(),ve(mt),ve(rt),nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(th(Ut),Ut=null))),Kc(t,e),Je(e),null;case 5:td(e);var i=Tr(Ws.current);if(n=e.type,t!==null&&e.stateNode!=null)L_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Je(e),null}if(t=Tr(Xt.current),na(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Gt]=e,r[Hs]=o,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<ms.length;i++)ye(ms[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Ep(r,o),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ye("invalid",r);break;case"textarea":Ip(r,o),ye("invalid",r)}wc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var u=o[a];a==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&ta(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&ta(r.textContent,u,t),i=["children",""+u]):Os.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":Ko(r),Tp(r,o,!0);break;case"textarea":Ko(r),Sp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$a)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Gt]=e,t[Hs]=r,M_(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ec(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<ms.length;i++)ye(ms[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":Ep(t,r),i=mc(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Ip(t,r),i=_c(t,r),ye("invalid",t);break;default:i=r}wc(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var c=u[o];o==="style"?py(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&dy(t,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ms(t,c):typeof c=="number"&&Ms(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Os.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ye("scroll",t):c!=null&&Dh(t,o,c,a))}switch(n){case"input":Ko(t),Tp(t,r,!1);break;case"textarea":Ko(t),Sp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ir(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ui(t,!!r.multiple,o,!1):r.defaultValue!=null&&ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$a)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)b_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Tr(Ws.current),Tr(Xt.current),na(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gt]=e,(o=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ta(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=e,e.stateNode=r}return Je(e),null;case 13:if(ve(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Et!==null&&e.mode&1&&!(e.flags&128))t_(),Ei(),e.flags|=98560,o=!1;else if(o=na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(F(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[Gt]=e}else Ei(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),o=!1}else Ut!==null&&(th(Ut),Ut=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Ve===0&&(Ve=3):pd())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return Ii(),Kc(t,e),t===null&&Bs(e.stateNode.containerInfo),Je(e),null;case 10:return Xh(e.type._context),Je(e),null;case 17:return gt(e.type)&&Ha(),Je(e),null;case 19:if(ve(Ee),o=e.memoizedState,o===null)return Je(e),null;if(r=(e.flags&128)!==0,a=o.rendering,a===null)if(r)us(o,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Xa(t),a!==null){for(e.flags|=128,us(o,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Ee,Ee.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ce()>Ai&&(e.flags|=128,r=!0,us(o,!1),e.lanes=4194304)}else{if(!r)if(t=Xa(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),us(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!we)return Je(e),null}else 2*Ce()-o.renderingStartTime>Ai&&n!==1073741824&&(e.flags|=128,r=!0,us(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ce(),e.sibling=null,n=Ee.current,me(Ee,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return fd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function XT(t,e){switch(Kh(e),e.tag){case 1:return gt(e.type)&&Ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ii(),ve(mt),ve(rt),nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return td(e),null;case 13:if(ve(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Ee),null;case 4:return Ii(),null;case 10:return Xh(e.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var sa=!1,tt=!1,JT=typeof WeakSet=="function"?WeakSet:Set,$=null;function oi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Gc(t,e,n){try{n()}catch(r){ke(t,e,r)}}var fm=!1;function ZT(t,e){if(Nc=ja,t=By(),qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,u=-1,c=-1,d=0,p=0,g=t,_=null;t:for(;;){for(var R;g!==n||i!==0&&g.nodeType!==3||(u=a+i),g!==o||r!==0&&g.nodeType!==3||(c=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(R=g.firstChild)!==null;)_=g,g=R;for(;;){if(g===t)break t;if(_===n&&++d===i&&(u=a),_===o&&++p===r&&(c=a),(R=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=R}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:t,selectionRange:n},ja=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var D=P.memoizedProps,O=P.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?D:bt(e.type,D),O);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(M){ke(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=fm,fm=!1,P}function ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gc(e,n,o)}i=i.next}while(i!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F_(t){var e=t.alternate;e!==null&&(t.alternate=null,F_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gt],delete e[Hs],delete e[Mc],delete e[MT],delete e[LT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U_(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$a));else if(r!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}function Xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xc(t,e,n),t=t.sibling;t!==null;)Xc(t,e,n),t=t.sibling}var Ue=null,Ft=!1;function Dn(t,e,n){for(n=n.child;n!==null;)j_(t,e,n),n=n.sibling}function j_(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:tt||oi(n,e);case 6:var r=Ue,i=Ft;Ue=null,Dn(t,e,n),Ue=r,Ft=i,Ue!==null&&(Ft?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ft?(t=Ue,n=n.stateNode,t.nodeType===8?zu(t.parentNode,n):t.nodeType===1&&zu(t,n),Us(t)):zu(Ue,n.stateNode));break;case 4:r=Ue,i=Ft,Ue=n.stateNode.containerInfo,Ft=!0,Dn(t,e,n),Ue=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Gc(n,e,a),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!tt&&(oi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ke(n,e,u)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Dn(t,e,n),tt=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JT),e.forEach(function(r){var i=lI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,a=e,u=a;e:for(;u!==null;){switch(u.tag){case 5:Ue=u.stateNode,Ft=!1;break e;case 3:Ue=u.stateNode.containerInfo,Ft=!0;break e;case 4:Ue=u.stateNode.containerInfo,Ft=!0;break e}u=u.return}if(Ue===null)throw Error(F(160));j_(o,a,i),Ue=null,Ft=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){ke(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z_(e,t),e=e.sibling}function z_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Wt(t),r&4){try{ks(3,t,t.return),Nl(3,t)}catch(D){ke(t,t.return,D)}try{ks(5,t,t.return)}catch(D){ke(t,t.return,D)}}break;case 1:Lt(e,t),Wt(t),r&512&&n!==null&&oi(n,n.return);break;case 5:if(Lt(e,t),Wt(t),r&512&&n!==null&&oi(n,n.return),t.flags&32){var i=t.stateNode;try{Ms(i,"")}catch(D){ke(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,u=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&uy(i,o),Ec(u,a);var d=Ec(u,o);for(a=0;a<c.length;a+=2){var p=c[a],g=c[a+1];p==="style"?py(i,g):p==="dangerouslySetInnerHTML"?dy(i,g):p==="children"?Ms(i,g):Dh(i,p,g,d)}switch(u){case"input":gc(i,o);break;case"textarea":cy(i,o);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var R=o.value;R!=null?ui(i,!!o.multiple,R,!1):_!==!!o.multiple&&(o.defaultValue!=null?ui(i,!!o.multiple,o.defaultValue,!0):ui(i,!!o.multiple,o.multiple?[]:"",!1))}i[Hs]=o}catch(D){ke(t,t.return,D)}}break;case 6:if(Lt(e,t),Wt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(D){ke(t,t.return,D)}}break;case 3:if(Lt(e,t),Wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Us(e.containerInfo)}catch(D){ke(t,t.return,D)}break;case 4:Lt(e,t),Wt(t);break;case 13:Lt(e,t),Wt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hd=Ce())),r&4&&mm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(d=tt)||p,Lt(e,t),tt=d):Lt(e,t),Wt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(g=$=p;$!==null;){switch(_=$,R=_.child,_.tag){case 0:case 11:case 14:case 15:ks(4,_,_.return);break;case 1:oi(_,_.return);var P=_.stateNode;if(typeof P.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(D){ke(r,n,D)}}break;case 5:oi(_,_.return);break;case 22:if(_.memoizedState!==null){ym(g);continue}}R!==null?(R.return=_,$=R):ym(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=g.stateNode,c=g.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=fy("display",a))}catch(D){ke(t,t.return,D)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(D){ke(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Lt(e,t),Wt(t),r&4&&mm(t);break;case 21:break;default:Lt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ms(i,""),r.flags&=-33);var o=pm(t);Xc(t,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=pm(t);Yc(t,u,a);break;default:throw Error(F(161))}}catch(c){ke(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eI(t,e,n){$=t,B_(t)}function B_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||sa;if(!a){var u=i.alternate,c=u!==null&&u.memoizedState!==null||tt;u=sa;var d=tt;if(sa=a,(tt=c)&&!d)for($=i;$!==null;)a=$,c=a.child,a.tag===22&&a.memoizedState!==null?_m(i):c!==null?(c.return=a,$=c):_m(i);for(;o!==null;)$=o,B_(o),o=o.sibling;$=i,sa=u,tt=d}gm(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):gm(t)}}function gm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&em(e,o,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,a,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Us(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||e.flags&512&&Qc(e)}catch(_){ke(e,e.return,_)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function ym(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function _m(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(c){ke(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){ke(e,i,c)}}var o=e.return;try{Qc(e)}catch(c){ke(e,o,c)}break;case 5:var a=e.return;try{Qc(e)}catch(c){ke(e,a,c)}}}catch(c){ke(e,e.return,c)}if(e===t){$=null;break}var u=e.sibling;if(u!==null){u.return=e.return,$=u;break}$=e.return}}var tI=Math.ceil,el=Rn.ReactCurrentDispatcher,ud=Rn.ReactCurrentOwner,Dt=Rn.ReactCurrentBatchConfig,se=0,be=null,xe=null,Be=0,wt=0,ai=cr(0),Ve=0,Ys=null,Nr=0,Dl=0,cd=0,Rs=null,dt=null,hd=0,Ai=1/0,ln=null,tl=!1,Jc=null,Yn=null,oa=!1,$n=null,nl=0,Cs=0,Zc=null,Ta=-1,Ia=0;function lt(){return se&6?Ce():Ta!==-1?Ta:Ta=Ce()}function Xn(t){return t.mode&1?se&2&&Be!==0?Be&-Be:FT.transition!==null?(Ia===0&&(Ia=ky()),Ia):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Vy(t.type)),t):1}function zt(t,e,n,r){if(50<Cs)throw Cs=0,Zc=null,Error(F(185));ao(t,n,r),(!(se&2)||t!==be)&&(t===be&&(!(se&2)&&(Dl|=n),Ve===4&&bn(t,Be)),yt(t,r),n===1&&se===0&&!(e.mode&1)&&(Ai=Ce()+500,Cl&&hr()))}function yt(t,e){var n=t.callbackNode;FE(t,e);var r=Ua(t,t===be?Be:0);if(r===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?bT(vm.bind(null,t)):Jy(vm.bind(null,t)),VT(function(){!(se&6)&&hr()}),n=null;else{switch(Ry(r)){case 1:n=bh;break;case 4:n=Sy;break;case 16:n=Fa;break;case 536870912:n=Ay;break;default:n=Fa}n=Y_(n,$_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $_(t,e){if(Ta=-1,Ia=0,se&6)throw Error(F(327));var n=t.callbackNode;if(pi()&&t.callbackNode!==n)return null;var r=Ua(t,t===be?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=rl(t,r);else{e=r;var i=se;se|=2;var o=q_();(be!==t||Be!==e)&&(ln=null,Ai=Ce()+500,Sr(t,e));do try{iI();break}catch(u){H_(t,u)}while(!0);Yh(),el.current=o,se=i,xe!==null?e=0:(be=null,Be=0,e=Ve)}if(e!==0){if(e===2&&(i=kc(t),i!==0&&(r=i,e=eh(t,i))),e===1)throw n=Ys,Sr(t,0),bn(t,r),yt(t,Ce()),n;if(e===6)bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!nI(i)&&(e=rl(t,r),e===2&&(o=kc(t),o!==0&&(r=o,e=eh(t,o))),e===1))throw n=Ys,Sr(t,0),bn(t,r),yt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:_r(t,dt,ln);break;case 3:if(bn(t,r),(r&130023424)===r&&(e=hd+500-Ce(),10<e)){if(Ua(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oc(_r.bind(null,t,dt,ln),e);break}_r(t,dt,ln);break;case 4:if(bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-jt(r);o=1<<a,a=e[a],a>i&&(i=a),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tI(r/1960))-r,10<r){t.timeoutHandle=Oc(_r.bind(null,t,dt,ln),r);break}_r(t,dt,ln);break;case 5:_r(t,dt,ln);break;default:throw Error(F(329))}}}return yt(t,Ce()),t.callbackNode===n?$_.bind(null,t):null}function eh(t,e){var n=Rs;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=rl(t,e),t!==2&&(e=dt,dt=n,e!==null&&th(e)),t}function th(t){dt===null?dt=t:dt.push.apply(dt,t)}function nI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$t(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(t,e){for(e&=~cd,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function vm(t){if(se&6)throw Error(F(327));pi();var e=Ua(t,0);if(!(e&1))return yt(t,Ce()),null;var n=rl(t,e);if(t.tag!==0&&n===2){var r=kc(t);r!==0&&(e=r,n=eh(t,r))}if(n===1)throw n=Ys,Sr(t,0),bn(t,e),yt(t,Ce()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,dt,ln),yt(t,Ce()),null}function dd(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Ai=Ce()+500,Cl&&hr())}}function Dr(t){$n!==null&&$n.tag===0&&!(se&6)&&pi();var e=se;se|=1;var n=Dt.transition,r=ce;try{if(Dt.transition=null,ce=1,t)return t()}finally{ce=r,Dt.transition=n,se=e,!(se&6)&&hr()}}function fd(){wt=ai.current,ve(ai)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DT(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Kh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ha();break;case 3:Ii(),ve(mt),ve(rt),nd();break;case 5:td(r);break;case 4:Ii();break;case 13:ve(Ee);break;case 19:ve(Ee);break;case 10:Xh(r.type._context);break;case 22:case 23:fd()}n=n.return}if(be=t,xe=t=Jn(t.current,null),Be=wt=e,Ve=0,Ys=null,cd=Dl=Nr=0,dt=Rs=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Er=null}return t}function H_(t,e){do{var n=xe;try{if(Yh(),va.current=Za,Ja){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ja=!1}if(xr=0,Le=De=Te=null,As=!1,Ks=0,ud.current=null,n===null||n.return===null){Ve=1,Ys=e,xe=null;break}e:{var o=t,a=n.return,u=n,c=e;if(e=Be,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=u,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var R=om(a);if(R!==null){R.flags&=-257,am(R,a,u,o,e),R.mode&1&&sm(o,d,e),e=R,c=d;var P=e.updateQueue;if(P===null){var D=new Set;D.add(c),e.updateQueue=D}else P.add(c);break e}else{if(!(e&1)){sm(o,d,e),pd();break e}c=Error(F(426))}}else if(we&&u.mode&1){var O=om(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),am(O,a,u,o,e),Gh(Si(c,u));break e}}o=c=Si(c,u),Ve!==4&&(Ve=2),Rs===null?Rs=[o]:Rs.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var S=R_(o,c,e);Zp(o,S);break e;case 1:u=c;var w=o.type,A=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Yn===null||!Yn.has(A)))){o.flags|=65536,e&=-e,o.lanes|=e;var M=C_(o,u,e);Zp(o,M);break e}}o=o.return}while(o!==null)}K_(n)}catch(j){e=j,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function q_(){var t=el.current;return el.current=Za,t===null?Za:t}function pd(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),be===null||!(Nr&268435455)&&!(Dl&268435455)||bn(be,Be)}function rl(t,e){var n=se;se|=2;var r=q_();(be!==t||Be!==e)&&(ln=null,Sr(t,e));do try{rI();break}catch(i){H_(t,i)}while(!0);if(Yh(),se=n,el.current=r,xe!==null)throw Error(F(261));return be=null,Be=0,Ve}function rI(){for(;xe!==null;)W_(xe)}function iI(){for(;xe!==null&&!PE();)W_(xe)}function W_(t){var e=Q_(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?K_(t):xe=e,ud.current=null}function K_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XT(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,xe=null;return}}else if(n=YT(n,e,wt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Ve===0&&(Ve=5)}function _r(t,e,n){var r=ce,i=Dt.transition;try{Dt.transition=null,ce=1,sI(t,e,n,r)}finally{Dt.transition=i,ce=r}return null}function sI(t,e,n,r){do pi();while($n!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(UE(t,o),t===be&&(xe=be=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oa||(oa=!0,Y_(Fa,function(){return pi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dt.transition,Dt.transition=null;var a=ce;ce=1;var u=se;se|=4,ud.current=null,ZT(t,n),z_(n,t),AT(Dc),ja=!!Nc,Dc=Nc=null,t.current=n,eI(n),xE(),se=u,ce=a,Dt.transition=o}else t.current=n;if(oa&&(oa=!1,$n=t,nl=i),o=t.pendingLanes,o===0&&(Yn=null),VE(n.stateNode),yt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tl)throw tl=!1,t=Jc,Jc=null,t;return nl&1&&t.tag!==0&&pi(),o=t.pendingLanes,o&1?t===Zc?Cs++:(Cs=0,Zc=t):Cs=0,hr(),null}function pi(){if($n!==null){var t=Ry(nl),e=Dt.transition,n=ce;try{if(Dt.transition=null,ce=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,nl=0,se&6)throw Error(F(331));var i=se;for(se|=4,$=t.current;$!==null;){var o=$,a=o.child;if($.flags&16){var u=o.deletions;if(u!==null){for(var c=0;c<u.length;c++){var d=u[c];for($=d;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:ks(8,p,o)}var g=p.child;if(g!==null)g.return=p,$=g;else for(;$!==null;){p=$;var _=p.sibling,R=p.return;if(F_(p),p===d){$=null;break}if(_!==null){_.return=R,$=_;break}$=R}}}var P=o.alternate;if(P!==null){var D=P.child;if(D!==null){P.child=null;do{var O=D.sibling;D.sibling=null,D=O}while(D!==null)}}$=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,$=a;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ks(9,o,o.return)}var S=o.sibling;if(S!==null){S.return=o.return,$=S;break e}$=o.return}}var w=t.current;for($=w;$!==null;){a=$;var A=a.child;if(a.subtreeFlags&2064&&A!==null)A.return=a,$=A;else e:for(a=w;$!==null;){if(u=$,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Nl(9,u)}}catch(j){ke(u,u.return,j)}if(u===a){$=null;break e}var M=u.sibling;if(M!==null){M.return=u.return,$=M;break e}$=u.return}}if(se=i,hr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Il,t)}catch{}r=!0}return r}finally{ce=n,Dt.transition=e}}return!1}function wm(t,e,n){e=Si(n,e),e=R_(t,e,1),t=Qn(t,e,1),e=lt(),t!==null&&(ao(t,1,e),yt(t,e))}function ke(t,e,n){if(t.tag===3)wm(t,t,n);else for(;e!==null;){if(e.tag===3){wm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Si(n,t),t=C_(e,t,1),e=Qn(e,t,1),t=lt(),e!==null&&(ao(e,1,t),yt(e,t));break}}e=e.return}}function oI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(Be&n)===n&&(Ve===4||Ve===3&&(Be&130023424)===Be&&500>Ce()-hd?Sr(t,0):cd|=n),yt(t,e)}function G_(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var n=lt();t=vn(t,e),t!==null&&(ao(t,e,n),yt(t,n))}function aI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G_(t,n)}function lI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),G_(t,n)}var Q_;Q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,QT(t,e,n);pt=!!(t.flags&131072)}else pt=!1,we&&e.flags&1048576&&Zy(e,Ka,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ea(t,e),t=e.pendingProps;var i=wi(e,rt.current);fi(e,n),i=id(null,e,r,t,i,n);var o=sd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(o=!0,qa(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zh(e),i.updater=xl,e.stateNode=i,i._reactInternals=e,zc(e,r,t,n),e=Hc(null,e,r,!0,o,n)):(e.tag=0,we&&o&&Wh(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ea(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cI(r),t=bt(r,t),i){case 0:e=$c(null,e,r,t,n);break e;case 1:e=cm(null,e,r,t,n);break e;case 11:e=lm(null,e,r,t,n);break e;case 14:e=um(null,e,r,bt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),$c(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),cm(t,e,r,i,n);case 3:e:{if(D_(e),t===null)throw Error(F(387));r=e.pendingProps,o=e.memoizedState,i=o.element,s_(t,e),Ya(e,r,null,n);var a=e.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Si(Error(F(423)),e),e=hm(t,e,r,n,i);break e}else if(r!==i){i=Si(Error(F(424)),e),e=hm(t,e,r,n,i);break e}else for(Et=Gn(e.stateNode.containerInfo.firstChild),It=e,we=!0,Ut=null,n=r_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ei(),r===i){e=wn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return o_(e),t===null&&Fc(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,Vc(r,i)?a=null:o!==null&&Vc(r,o)&&(e.flags|=32),N_(t,e),at(t,e,a,n),e.child;case 6:return t===null&&Fc(e),null;case 13:return V_(t,e,n);case 4:return ed(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ti(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),lm(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,a=i.value,me(Ga,r._currentValue),r._currentValue=a,o!==null)if($t(o.value,a)){if(o.children===i.children&&!mt.current){e=wn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){a=o.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=mn(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Uc(o.return,n,e),u.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(F(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Uc(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fi(e,n),i=Vt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),um(t,e,r,i,n);case 15:return P_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Ea(t,e),e.tag=1,gt(r)?(t=!0,qa(e)):t=!1,fi(e,n),k_(e,r,i),zc(e,r,i,n),Hc(null,e,r,!0,t,n);case 19:return O_(t,e,n);case 22:return x_(t,e,n)}throw Error(F(156,e.tag))};function Y_(t,e){return Iy(t,e)}function uI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new uI(t,e,n,r)}function md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cI(t){if(typeof t=="function")return md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oh)return 11;if(t===Mh)return 14}return 2}function Jn(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sa(t,e,n,r,i,o){var a=2;if(r=t,typeof t=="function")md(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Xr:return Ar(n.children,i,o,e);case Vh:a=8,i|=8;break;case hc:return t=Nt(12,n,e,i|2),t.elementType=hc,t.lanes=o,t;case dc:return t=Nt(13,n,e,i),t.elementType=dc,t.lanes=o,t;case fc:return t=Nt(19,n,e,i),t.elementType=fc,t.lanes=o,t;case oy:return Vl(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iy:a=10;break e;case sy:a=9;break e;case Oh:a=11;break e;case Mh:a=14;break e;case On:a=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Nt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Ar(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Vl(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=oy,t.lanes=n,t.stateNode={isHidden:!1},t}function Qu(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Yu(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gd(t,e,n,r,i,o,a,u,c){return t=new hI(t,e,n,u,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Nt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(o),t}function dI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function X_(t){if(!t)return sr;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(gt(n))return Xy(t,n,e)}return e}function J_(t,e,n,r,i,o,a,u,c){return t=gd(n,r,!0,t,i,o,a,u,c),t.context=X_(null),n=t.current,r=lt(),i=Xn(n),o=mn(r,i),o.callback=e??null,Qn(n,o,i),t.current.lanes=i,ao(t,i,r),yt(t,r),t}function Ol(t,e,n,r){var i=e.current,o=lt(),a=Xn(i);return n=X_(n),e.context===null?e.context=n:e.pendingContext=n,e=mn(o,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qn(i,e,a),t!==null&&(zt(t,i,a,o),_a(t,i,a)),a}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yd(t,e){Em(t,e),(t=t.alternate)&&Em(t,e)}function fI(){return null}var Z_=typeof reportError=="function"?reportError:function(t){console.error(t)};function _d(t){this._internalRoot=t}Ml.prototype.render=_d.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ol(t,e,null,null)};Ml.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Ol(null,t,null,null)}),e[_n]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=xy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&Dy(t)}};function vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function pI(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=il(a);o.call(d)}}var a=J_(e,r,t,0,null,!1,!1,"",Tm);return t._reactRootContainer=a,t[_n]=a.current,Bs(t.nodeType===8?t.parentNode:t),Dr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var d=il(c);u.call(d)}}var c=gd(t,0,!1,null,null,!1,!1,"",Tm);return t._reactRootContainer=c,t[_n]=c.current,Bs(t.nodeType===8?t.parentNode:t),Dr(function(){Ol(e,c,n,r)}),c}function bl(t,e,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var u=i;i=function(){var c=il(a);u.call(c)}}Ol(e,a,t,i)}else a=pI(n,e,t,i,r);return il(a)}Cy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ps(e.pendingLanes);n!==0&&(Fh(e,n|1),yt(e,Ce()),!(se&6)&&(Ai=Ce()+500,hr()))}break;case 13:Dr(function(){var r=vn(t,1);if(r!==null){var i=lt();zt(r,t,1,i)}}),yd(t,1)}};Uh=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=lt();zt(e,t,134217728,n)}yd(t,134217728)}};Py=function(t){if(t.tag===13){var e=Xn(t),n=vn(t,e);if(n!==null){var r=lt();zt(n,t,e,r)}yd(t,e)}};xy=function(){return ce};Ny=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Ic=function(t,e,n){switch(e){case"input":if(gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rl(r);if(!i)throw Error(F(90));ly(r),gc(r,i)}}}break;case"textarea":cy(t,n);break;case"select":e=n.value,e!=null&&ui(t,!!n.multiple,e,!1)}};yy=dd;_y=Dr;var mI={usingClientEntryPoint:!1,Events:[uo,ti,Rl,my,gy,dd]},cs={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gI={bundleType:cs.bundleType,version:cs.version,rendererPackageName:cs.rendererPackageName,rendererConfig:cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ey(t),t===null?null:t.stateNode},findFiberByHostInstance:cs.findFiberByHostInstance||fI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!aa.isDisabled&&aa.supportsFiber)try{Il=aa.inject(gI),Yt=aa}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mI;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(e))throw Error(F(200));return dI(t,e,null,n)};At.createRoot=function(t,e){if(!vd(t))throw Error(F(299));var n=!1,r="",i=Z_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gd(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,Bs(t.nodeType===8?t.parentNode:t),new _d(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Ey(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return Dr(t)};At.hydrate=function(t,e,n){if(!Ll(e))throw Error(F(200));return bl(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!vd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Z_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=J_(e,null,t,1,n??null,i,!1,o,a),t[_n]=e.current,Bs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ml(e)};At.render=function(t,e,n){if(!Ll(e))throw Error(F(200));return bl(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(F(40));return t._reactRootContainer?(Dr(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};At.unstable_batchedUpdates=dd;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ll(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return bl(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev)}catch(t){console.error(t)}}ev(),ey.exports=At;var yI=ey.exports,Im=yI;uc.createRoot=Im.createRoot,uc.hydrateRoot=Im.hydrateRoot;var Sm={};/**
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
 */const tv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_I=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],u=t[n++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},nv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,u=a?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,p=o>>2,g=(o&3)<<4|u>>4;let _=(u&15)<<2|d>>6,R=d&63;c||(R=64,a||(_=64)),r.push(n[p],n[g],n[_],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||u==null||d==null||g==null)throw new vI;const _=o<<2|u>>4;if(r.push(_),d!==64){const R=u<<4&240|d>>2;if(r.push(R),g!==64){const P=d<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wI=function(t){const e=tv(t);return nv.encodeByteArray(e,!0)},sl=function(t){return wI(t).replace(/\./g,"")},rv=function(t){try{return nv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function EI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TI=()=>EI().__FIREBASE_DEFAULTS__,II=()=>{if(typeof process>"u"||typeof Sm>"u")return;const t=Sm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rv(t[1]);return e&&JSON.parse(e)},Fl=()=>{try{return TI()||II()||SI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iv=t=>{var e,n;return(n=(e=Fl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AI=t=>{const e=iv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sv=()=>{var t;return(t=Fl())===null||t===void 0?void 0:t.config},ov=t=>{var e;return(e=Fl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function RI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sl(JSON.stringify(n)),sl(JSON.stringify(a)),""].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function PI(){var t;const e=(t=Fl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function DI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VI(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OI(){return!PI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MI(){try{return typeof indexedDB=="object"}catch{return!1}}function LI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const bI="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bI,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ho.prototype.create)}}class ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?FI(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Cn(i,u,r)}}function FI(t,e){return t.replace(UI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UI=/\{\$([^}]+)}/g;function jI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ol(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],a=e[i];if(Am(o)&&Am(a)){if(!ol(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Am(t){return t!==null&&typeof t=="object"}/**
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
 */function fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zI(t,e){const n=new BI(t,e);return n.subscribe.bind(n)}class BI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$I(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xu),i.error===void 0&&(i.error=Xu),i.complete===void 0&&(i.complete=Xu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $I(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xu(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vr="[DEFAULT]";/**
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
 */class HI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WI(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qI(t){return t===vr?void 0:t}function WI(t){return t.instantiationMode==="EAGER"}/**
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
 */class KI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const GI={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},QI=ne.INFO,YI={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},XI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wd{constructor(e){this.name=e,this._logLevel=QI,this._logHandler=XI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const JI=(t,e)=>e.some(n=>t instanceof n);let km,Rm;function ZI(){return km||(km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e1(){return Rm||(Rm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const av=new WeakMap,nh=new WeakMap,lv=new WeakMap,Ju=new WeakMap,Ed=new WeakMap;function t1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Zn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&av.set(n,t)}).catch(()=>{}),Ed.set(e,t),e}function n1(t){if(nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});nh.set(t,e)}let rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function r1(t){rh=t(rh)}function i1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zu(this),e,...n);return lv.set(r,e.sort?e.sort():[e]),Zn(r)}:e1().includes(t)?function(...e){return t.apply(Zu(this),e),Zn(av.get(this))}:function(...e){return Zn(t.apply(Zu(this),e))}}function s1(t){return typeof t=="function"?i1(t):(t instanceof IDBTransaction&&n1(t),JI(t,ZI())?new Proxy(t,rh):t)}function Zn(t){if(t instanceof IDBRequest)return t1(t);if(Ju.has(t))return Ju.get(t);const e=s1(t);return e!==t&&(Ju.set(t,e),Ed.set(e,t)),e}const Zu=t=>Ed.get(t);function o1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),u=Zn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Zn(a.result),c.oldVersion,c.newVersion,Zn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const a1=["get","getKey","getAll","getAllKeys","count"],l1=["put","add","delete","clear"],ec=new Map;function Cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ec.get(e))return ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=l1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||a1.includes(n)))return;const o=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),i&&c.done]))[0]};return ec.set(e,o),o}r1(t=>({...t,get:(e,n,r)=>Cm(e,n)||t.get(e,n,r),has:(e,n)=>!!Cm(e,n)||t.has(e,n)}));/**
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
 */class u1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(c1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function c1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ih="@firebase/app",Pm="0.10.13";/**
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
 */const En=new wd("@firebase/app"),h1="@firebase/app-compat",d1="@firebase/analytics-compat",f1="@firebase/analytics",p1="@firebase/app-check-compat",m1="@firebase/app-check",g1="@firebase/auth",y1="@firebase/auth-compat",_1="@firebase/database",v1="@firebase/data-connect",w1="@firebase/database-compat",E1="@firebase/functions",T1="@firebase/functions-compat",I1="@firebase/installations",S1="@firebase/installations-compat",A1="@firebase/messaging",k1="@firebase/messaging-compat",R1="@firebase/performance",C1="@firebase/performance-compat",P1="@firebase/remote-config",x1="@firebase/remote-config-compat",N1="@firebase/storage",D1="@firebase/storage-compat",V1="@firebase/firestore",O1="@firebase/vertexai-preview",M1="@firebase/firestore-compat",L1="firebase",b1="10.14.1";/**
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
 */const sh="[DEFAULT]",F1={[ih]:"fire-core",[h1]:"fire-core-compat",[f1]:"fire-analytics",[d1]:"fire-analytics-compat",[m1]:"fire-app-check",[p1]:"fire-app-check-compat",[g1]:"fire-auth",[y1]:"fire-auth-compat",[_1]:"fire-rtdb",[v1]:"fire-data-connect",[w1]:"fire-rtdb-compat",[E1]:"fire-fn",[T1]:"fire-fn-compat",[I1]:"fire-iid",[S1]:"fire-iid-compat",[A1]:"fire-fcm",[k1]:"fire-fcm-compat",[R1]:"fire-perf",[C1]:"fire-perf-compat",[P1]:"fire-rc",[x1]:"fire-rc-compat",[N1]:"fire-gcs",[D1]:"fire-gcs-compat",[V1]:"fire-fst",[M1]:"fire-fst-compat",[O1]:"fire-vertex","fire-js":"fire-js",[L1]:"fire-js-all"};/**
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
 */const al=new Map,U1=new Map,oh=new Map;function xm(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ki(t){const e=t.name;if(oh.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;oh.set(e,t);for(const n of al.values())xm(n,t);for(const n of U1.values())xm(n,t);return!0}function Td(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t.settings!==void 0}/**
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
 */const j1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new ho("app","Firebase",j1);/**
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
 */class z1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
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
 */const Fi=b1;function uv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw er.create("bad-app-name",{appName:String(i)});if(n||(n=sv()),!n)throw er.create("no-options");const o=al.get(i);if(o){if(ol(n,o.options)&&ol(r,o.config))return o;throw er.create("duplicate-app",{appName:i})}const a=new KI(i);for(const c of oh.values())a.addComponent(c);const u=new z1(n,r,a);return al.set(i,u),u}function cv(t=sh){const e=al.get(t);if(!e&&t===sh&&sv())return uv();if(!e)throw er.create("no-app",{appName:t});return e}function tr(t,e,n){var r;let i=(r=F1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(u.join(" "));return}ki(new Vr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const B1="firebase-heartbeat-database",$1=1,Xs="firebase-heartbeat-store";let tc=null;function hv(){return tc||(tc=o1(B1,$1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xs)}catch(n){console.warn(n)}}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),tc}async function H1(t){try{const n=(await hv()).transaction(Xs),r=await n.objectStore(Xs).get(dv(t));return await n.done,r}catch(e){if(e instanceof Cn)En.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Nm(t,e){try{const r=(await hv()).transaction(Xs,"readwrite");await r.objectStore(Xs).put(e,dv(t)),await r.done}catch(n){if(n instanceof Cn)En.warn(n.message);else{const r=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function dv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const q1=1024,W1=30*24*60*60*1e3;class K1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Dm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=W1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dm(),{heartbeatsToSend:r,unsentEntries:i}=G1(this._heartbeatsCache.heartbeats),o=sl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return En.warn(n),""}}}function Dm(){return new Date().toISOString().substring(0,10)}function G1(t,e=q1){const n=[];let r=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Vm(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Q1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MI()?LI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await H1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vm(t){return sl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Y1(t){ki(new Vr("platform-logger",e=>new u1(e),"PRIVATE")),ki(new Vr("heartbeat",e=>new K1(e),"PRIVATE")),tr(ih,Pm,t),tr(ih,Pm,"esm2017"),tr("fire-js","")}Y1("");var X1="firebase",J1="10.14.1";/**
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
 */tr(X1,J1,"app");function Id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z1=fv,pv=new ho("auth","Firebase",fv());/**
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
 */const ll=new wd("@firebase/auth");function eS(t,...e){ll.logLevel<=ne.WARN&&ll.warn(`Auth (${Fi}): ${t}`,...e)}function Aa(t,...e){ll.logLevel<=ne.ERROR&&ll.error(`Auth (${Fi}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw Sd(t,...e)}function Jt(t,...e){return Sd(t,...e)}function mv(t,e,n){const r=Object.assign(Object.assign({},Z1()),{[e]:n});return new ho("auth","Firebase",r).create(e,{appName:t.name})}function gn(t){return mv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pv.create(t,...e)}function Q(t,e,...n){if(!t)throw Sd(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function In(t,e){t||dn(e)}/**
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
 */function ah(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tS(){return Om()==="http:"||Om()==="https:"}function Om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tS()||NI()||"connection"in navigator)?navigator.onLine:!0}function rS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class po{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=CI()||DI()}get(){return nS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ad(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sS=new po(3e4,6e4);function mo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ui(t,e,n,r,i={}){return yv(t,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=fo(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},o);return xI()||(d.referrerPolicy="no-referrer"),gv.fetch()(_v(t,t.config.apiHost,n,u),d)})}async function yv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iS),e);try{const i=new oS(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw la(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[c,d]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw la(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw la(t,"user-disabled",a);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw mv(t,p,d);Tn(t,p)}}catch(i){if(i instanceof Cn)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function kd(t,e,n,r,i={}){const o=await Ui(t,e,n,r,i);return"mfaPendingCredential"in o&&Tn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function _v(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ad(t.config,i):`${t.config.apiScheme}://${i}`}class oS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),sS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function aS(t,e){return Ui(t,"POST","/v1/accounts:delete",e)}async function vv(t,e){return Ui(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ps(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lS(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=Rd(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ps(nc(i.auth_time)),issuedAtTime:Ps(nc(i.iat)),expirationTime:Ps(nc(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function nc(t){return Number(t)*1e3}function Rd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=rv(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mm(t){const e=Rd(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&uS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ul(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Js(t,vv(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?wv(o.providerUserInfo):[],u=dS(t.providerData,a),c=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),p=c?d:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new lh(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function hS(t){const e=qe(t);await ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wv(t){return t.map(e=>{var{providerId:n}=e,r=Id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fS(t,e){const n=await yv(t,{},async()=>{const r=fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=_v(t,i,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",gv.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pS(t,e){return Ui(t,"POST","/v2/accounts:revokeToken",mo(t,e))}/**
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
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Mm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await fS(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new mi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(Q(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function Vn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new lh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lS(this,e)}reload(){return hS(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await Js(this,aS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,a,u,c,d,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,R=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,D=(u=n.tenantId)!==null&&u!==void 0?u:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(d=n.createdAt)!==null&&d!==void 0?d:void 0,w=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:A,emailVerified:M,isAnonymous:j,providerData:z,stsTokenManager:E}=n;Q(A&&E,e,"internal-error");const y=mi.fromJSON(this.name,E);Q(typeof A=="string",e,"internal-error"),Vn(g,e.name),Vn(_,e.name),Q(typeof M=="boolean",e,"internal-error"),Q(typeof j=="boolean",e,"internal-error"),Vn(R,e.name),Vn(P,e.name),Vn(D,e.name),Vn(O,e.name),Vn(S,e.name),Vn(w,e.name);const v=new fn({uid:A,auth:e,email:_,emailVerified:M,displayName:g,isAnonymous:j,photoURL:P,phoneNumber:R,tenantId:D,stsTokenManager:y,createdAt:S,lastLoginAt:w});return z&&Array.isArray(z)&&(v.providerData=z.map(T=>Object.assign({},T))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new mi;i.updateFromServerResponse(n);const o=new fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ul(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?wv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new mi;u.updateFromIdToken(r);const c=new fn({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new lh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,d),c}}/**
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
 */const Lm=new Map;function pn(t){In(t instanceof Function,"Expected a class definition");let e=Lm.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lm.set(t,e),e)}/**
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
 */class Ev{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ev.type="NONE";const bm=Ev;/**
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
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ka(this.userKey,i.apiKey,o),this.fullPersistenceKey=ka("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gi(pn(bm),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||pn(bm);const a=ka(r,e.config.apiKey,e.name);let u=null;for(const d of n)try{const p=await d._get(a);if(p){const g=fn._fromJSON(e,p);d!==o&&(u=g),o=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new gi(o,e,r):(o=c[0],u&&await o._set(a,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new gi(o,e,r))}}/**
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
 */function Fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Av(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rv(e))return"Blackberry";if(Cv(e))return"Webos";if(Iv(e))return"Safari";if((e.includes("chrome/")||Sv(e))&&!e.includes("edge/"))return"Chrome";if(kv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tv(t=it()){return/firefox\//i.test(t)}function Iv(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sv(t=it()){return/crios\//i.test(t)}function Av(t=it()){return/iemobile/i.test(t)}function kv(t=it()){return/android/i.test(t)}function Rv(t=it()){return/blackberry/i.test(t)}function Cv(t=it()){return/webos/i.test(t)}function Cd(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mS(t=it()){var e;return Cd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gS(){return VI()&&document.documentMode===10}function Pv(t=it()){return Cd(t)||kv(t)||Cv(t)||Rv(t)||/windows phone/i.test(t)||Av(t)}/**
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
 */function xv(t,e=[]){let n;switch(t){case"Browser":n=Fm(it());break;case"Worker":n=`${Fm(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${r}`}/**
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
 */class yS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,u)=>{try{const c=e(o);a(c)}catch(c){u(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _S(t,e={}){return Ui(t,"GET","/v2/passwordPolicy",mo(t,e))}/**
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
 */const vS=6;class wS{constructor(e){var n,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:vS,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class ES{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Um(this),this.idTokenSubscription=new Um(this),this.beforeStateQueue=new yS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vv(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===u)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(gn(this));const n=e?qe(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _S(this),n=new wS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function go(t){return qe(t)}class Um{constructor(e){this.auth=e,this.observer=null,this.addObserver=zI(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TS(t){Pd=t}function IS(t){return Pd.loadJS(t)}function SS(){return Pd.gapiScript}function AS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kS(t,e){const n=Td(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ol(o,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function RS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CS(t,e,n){const r=go(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Nv(e),{host:a,port:u}=PS(e),c=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),xS()}function Nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PS(t){const e=Nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:jm(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:jm(a)}}}function jm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Dv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
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
 */async function yi(t,e){return kd(t,"POST","/v1/accounts:signInWithIdp",mo(t,e))}/**
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
 */const NS="http://localhost";class Or extends Dv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Id(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Or(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:NS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fo(n)}return e}}/**
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
 */class Vv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yo extends Vv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends yo{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class Un extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
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
 */class jn extends yo{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
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
 */class zn extends yo{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */async function DS(t,e){return kd(t,"POST","/v1/accounts:signUp",mo(t,e))}/**
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
 */class Sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await fn._fromIdTokenResponse(e,r,i),a=zm(r);return new Sn({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zm(r);return new Sn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function VS(t){var e;if(Qt(t.app))return Promise.reject(gn(t));const n=go(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Sn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await DS(n,{returnSecureToken:!0}),i=await Sn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class cl extends Cn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cl.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cl(e,n,r,i)}}function Ov(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?cl._fromErrorAndOperation(t,o,e,r):o})}async function OS(t,e,n=!1){const r=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sn._forOperation(t,"link",r)}/**
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
 */async function MS(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(gn(r));const i="reauthenticate";try{const o=await Js(t,Ov(r,i,e,t),n);Q(o.idToken,r,"internal-error");const a=Rd(o.idToken);Q(a,r,"internal-error");const{sub:u}=a;return Q(t.uid===u,r,"user-mismatch"),Sn._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),o}}/**
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
 */async function LS(t,e,n=!1){if(Qt(t.app))return Promise.reject(gn(t));const r="signIn",i=await Ov(t,r,e),o=await Sn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}/**
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
 */async function bS(t,e){return kd(t,"POST","/v1/accounts:signInWithCustomToken",mo(t,e))}/**
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
 */async function FS(t,e){if(Qt(t.app))return Promise.reject(gn(t));const n=go(t),r=await bS(n,{token:e,returnSecureToken:!0}),i=await Sn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function US(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function jS(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function zS(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}const hl="__sak";/**
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
 */class Mv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hl,"1"),this.storage.removeItem(hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BS=1e3,$S=10;class Lv extends Mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);gS()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$S):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lv.type="LOCAL";const HS=Lv;/**
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
 */class bv extends Mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bv.type="SESSION";const Fv=bv;/**
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
 */function qS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(n.origin,o)),c=await qS(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
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
 */function xd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,c)=>{const d=xd("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const _=g;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(_.data.response);break;default:clearTimeout(p),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Zt(){return window}function KS(t){Zt().location.href=t}/**
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
 */function Uv(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function GS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YS(){return Uv()?self:null}/**
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
 */const jv="firebaseLocalStorageDb",XS=1,dl="firebaseLocalStorage",zv="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([dl],e?"readwrite":"readonly").objectStore(dl)}function JS(){const t=indexedDB.deleteDatabase(jv);return new _o(t).toPromise()}function uh(){const t=indexedDB.open(jv,XS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dl,{keyPath:zv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dl)?e(r):(r.close(),await JS(),e(await uh()))})})}async function Bm(t,e,n){const r=jl(t,!0).put({[zv]:e,value:n});return new _o(r).toPromise()}async function ZS(t,e){const n=jl(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function $m(t,e){const n=jl(t,!0).delete(e);return new _o(n).toPromise()}const eA=800,tA=3;class Bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(YS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GS(),!this.activeServiceWorker)return;this.sender=new WS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uh();return await Bm(e,hl,"1"),await $m(e,hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=jl(i,!1).getAll();return new _o(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bv.type="LOCAL";const nA=Bv;new po(3e4,6e4);/**
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
 */function rA(t,e){return e?pn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nd extends Dv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iA(t){return LS(t.auth,new Nd(t),t.bypassAuthState)}function sA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),MS(n,new Nd(t),t.bypassAuthState)}async function oA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),OS(n,new Nd(t),t.bypassAuthState)}/**
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
 */class $v{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iA;case"linkViaPopup":case"linkViaRedirect":return oA;case"reauthViaPopup":case"reauthViaRedirect":return sA;default:Tn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aA=new po(2e3,1e4);class li extends $v{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aA.get())};e()}}li.currentPopupAction=null;/**
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
 */const lA="pendingRedirect",Ra=new Map;class uA extends $v{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await cA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cA(t,e){const n=fA(e),r=dA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function hA(t,e){Ra.set(t._key(),e)}function dA(t){return pn(t._redirectPersistence)}function fA(t){return ka(lA,t.config.apiKey,t.name)}async function pA(t,e,n=!1){if(Qt(t.app))return Promise.reject(gn(t));const r=go(t),i=rA(r,e),a=await new uA(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const mA=10*60*1e3;class gA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hm(e))}saveEventToCache(e){this.cachedEventUids.add(Hm(e)),this.lastProcessedEventTime=Date.now()}}function Hm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hv(t);default:return!1}}/**
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
 */async function _A(t,e={}){return Ui(t,"GET","/v1/projects",e)}/**
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
 */const vA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wA=/^https?/;async function EA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _A(t);for(const n of e)try{if(TA(n))return}catch{}Tn(t,"unauthorized-domain")}function TA(t){const e=ah(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!wA.test(n))return!1;if(vA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const IA=new po(3e4,6e4);function qm(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SA(t){return new Promise((e,n)=>{var r,i,o;function a(){qm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qm(),n(Jt(t,"network-request-failed"))},timeout:IA.get()})}if(!((i=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Zt().gapi)===null||o===void 0)&&o.load)a();else{const u=AS("iframefcb");return Zt()[u]=()=>{gapi.load?a():n(Jt(t,"network-request-failed"))},IS(`${SS()}?onload=${u}`).catch(c=>n(c))}}).catch(e=>{throw Ca=null,e})}let Ca=null;function AA(t){return Ca=Ca||SA(t),Ca}/**
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
 */const kA=new po(5e3,15e3),RA="__/auth/iframe",CA="emulator/auth/iframe",PA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NA(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ad(e,CA):`https://${t.config.authDomain}/${RA}`,r={apiKey:e.apiKey,appName:t.name,v:Fi},i=xA.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${fo(r).slice(1)}`}async function DA(t){const e=await AA(t),n=Zt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:NA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PA,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Jt(t,"network-request-failed"),u=Zt().setTimeout(()=>{o(a)},kA.get());function c(){Zt().clearTimeout(u),i(r)}r.ping(c).then(c,()=>{o(a)})}))}/**
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
 */const VA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OA=500,MA=600,LA="_blank",bA="http://localhost";class Wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FA(t,e,n,r=OA,i=MA){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},VA),{width:r.toString(),height:i.toString(),top:o,left:a}),d=it().toLowerCase();n&&(u=Sv(d)?LA:n),Tv(d)&&(e=e||bA,c.scrollbars="yes");const p=Object.entries(c).reduce((_,[R,P])=>`${_}${R}=${P},`,"");if(mS(d)&&u!=="_self")return UA(e||"",u),new Wm(null);const g=window.open(e||"",u,p);Q(g,t,"popup-blocked");try{g.focus()}catch{}return new Wm(g)}function UA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jA="__/auth/handler",zA="emulator/auth/handler",BA=encodeURIComponent("fac");async function Km(t,e,n,r,i,o){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fi,eventId:i};if(e instanceof Vv){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",jI(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof yo){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const c=await t._getAppCheckToken(),d=c?`#${BA}=${encodeURIComponent(c)}`:"";return`${$A(t)}?${fo(u).slice(1)}${d}`}function $A({config:t}){return t.emulator?Ad(t,zA):`https://${t.authDomain}/${jA}`}/**
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
 */const rc="webStorageSupport";class HA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fv,this._completeRedirectFn=pA,this._overrideRedirectResult=hA}async _openPopup(e,n,r,i){var o;In((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Km(e,n,r,ah(),i);return FA(e,a,xd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Km(e,n,r,ah(),i);return KS(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(In(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DA(e),r=new gA(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[rc];a!==void 0&&n(!!a),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pv()||Iv()||Cd()}}const qA=HA;var Gm="@firebase/auth",Qm="1.7.9";/**
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
 */class WA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GA(t){ki(new Vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;Q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xv(t)},d=new ES(r,i,o,c);return RS(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ki(new Vr("auth-internal",e=>{const n=go(e.getProvider("auth").getImmediate());return(r=>new WA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Gm,Qm,KA(t)),tr(Gm,Qm,"esm2017")}/**
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
 */const QA=5*60,YA=ov("authIdTokenMaxAge")||QA;let Ym=null;const XA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YA)return;const i=n==null?void 0:n.token;Ym!==i&&(Ym=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JA(t=cv()){const e=Td(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kS(t,{popupRedirectResolver:qA,persistence:[nA,HS,Fv]}),r=ov("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=XA(o.toString());jS(n,a,()=>a(n.currentUser)),US(n,u=>a(u))}}const i=iv("auth");return i&&CS(n,`http://${i}`),n}function ZA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Jt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",ZA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GA("Browser");var Xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,qv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,C,x){for(var I=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)I[ht-2]=arguments[ht];return y.prototype[C].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)T[C]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(C=0;16>C;++C)T[C]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],C=E.g[2];var x=E.g[3],I=y+(x^v&(C^x))+T[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=x+(C^y&(v^C))+T[1]+3905402710&4294967295,x=y+(I<<12&4294967295|I>>>20),I=C+(v^x&(y^v))+T[2]+606105819&4294967295,C=x+(I<<17&4294967295|I>>>15),I=v+(y^C&(x^y))+T[3]+3250441966&4294967295,v=C+(I<<22&4294967295|I>>>10),I=y+(x^v&(C^x))+T[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=x+(C^y&(v^C))+T[5]+1200080426&4294967295,x=y+(I<<12&4294967295|I>>>20),I=C+(v^x&(y^v))+T[6]+2821735955&4294967295,C=x+(I<<17&4294967295|I>>>15),I=v+(y^C&(x^y))+T[7]+4249261313&4294967295,v=C+(I<<22&4294967295|I>>>10),I=y+(x^v&(C^x))+T[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=x+(C^y&(v^C))+T[9]+2336552879&4294967295,x=y+(I<<12&4294967295|I>>>20),I=C+(v^x&(y^v))+T[10]+4294925233&4294967295,C=x+(I<<17&4294967295|I>>>15),I=v+(y^C&(x^y))+T[11]+2304563134&4294967295,v=C+(I<<22&4294967295|I>>>10),I=y+(x^v&(C^x))+T[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=x+(C^y&(v^C))+T[13]+4254626195&4294967295,x=y+(I<<12&4294967295|I>>>20),I=C+(v^x&(y^v))+T[14]+2792965006&4294967295,C=x+(I<<17&4294967295|I>>>15),I=v+(y^C&(x^y))+T[15]+1236535329&4294967295,v=C+(I<<22&4294967295|I>>>10),I=y+(C^x&(v^C))+T[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=x+(v^C&(y^v))+T[6]+3225465664&4294967295,x=y+(I<<9&4294967295|I>>>23),I=C+(y^v&(x^y))+T[11]+643717713&4294967295,C=x+(I<<14&4294967295|I>>>18),I=v+(x^y&(C^x))+T[0]+3921069994&4294967295,v=C+(I<<20&4294967295|I>>>12),I=y+(C^x&(v^C))+T[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=x+(v^C&(y^v))+T[10]+38016083&4294967295,x=y+(I<<9&4294967295|I>>>23),I=C+(y^v&(x^y))+T[15]+3634488961&4294967295,C=x+(I<<14&4294967295|I>>>18),I=v+(x^y&(C^x))+T[4]+3889429448&4294967295,v=C+(I<<20&4294967295|I>>>12),I=y+(C^x&(v^C))+T[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=x+(v^C&(y^v))+T[14]+3275163606&4294967295,x=y+(I<<9&4294967295|I>>>23),I=C+(y^v&(x^y))+T[3]+4107603335&4294967295,C=x+(I<<14&4294967295|I>>>18),I=v+(x^y&(C^x))+T[8]+1163531501&4294967295,v=C+(I<<20&4294967295|I>>>12),I=y+(C^x&(v^C))+T[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=x+(v^C&(y^v))+T[2]+4243563512&4294967295,x=y+(I<<9&4294967295|I>>>23),I=C+(y^v&(x^y))+T[7]+1735328473&4294967295,C=x+(I<<14&4294967295|I>>>18),I=v+(x^y&(C^x))+T[12]+2368359562&4294967295,v=C+(I<<20&4294967295|I>>>12),I=y+(v^C^x)+T[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=x+(y^v^C)+T[8]+2272392833&4294967295,x=y+(I<<11&4294967295|I>>>21),I=C+(x^y^v)+T[11]+1839030562&4294967295,C=x+(I<<16&4294967295|I>>>16),I=v+(C^x^y)+T[14]+4259657740&4294967295,v=C+(I<<23&4294967295|I>>>9),I=y+(v^C^x)+T[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=x+(y^v^C)+T[4]+1272893353&4294967295,x=y+(I<<11&4294967295|I>>>21),I=C+(x^y^v)+T[7]+4139469664&4294967295,C=x+(I<<16&4294967295|I>>>16),I=v+(C^x^y)+T[10]+3200236656&4294967295,v=C+(I<<23&4294967295|I>>>9),I=y+(v^C^x)+T[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=x+(y^v^C)+T[0]+3936430074&4294967295,x=y+(I<<11&4294967295|I>>>21),I=C+(x^y^v)+T[3]+3572445317&4294967295,C=x+(I<<16&4294967295|I>>>16),I=v+(C^x^y)+T[6]+76029189&4294967295,v=C+(I<<23&4294967295|I>>>9),I=y+(v^C^x)+T[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=x+(y^v^C)+T[12]+3873151461&4294967295,x=y+(I<<11&4294967295|I>>>21),I=C+(x^y^v)+T[15]+530742520&4294967295,C=x+(I<<16&4294967295|I>>>16),I=v+(C^x^y)+T[2]+3299628645&4294967295,v=C+(I<<23&4294967295|I>>>9),I=y+(C^(v|~x))+T[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=x+(v^(y|~C))+T[7]+1126891415&4294967295,x=y+(I<<10&4294967295|I>>>22),I=C+(y^(x|~v))+T[14]+2878612391&4294967295,C=x+(I<<15&4294967295|I>>>17),I=v+(x^(C|~y))+T[5]+4237533241&4294967295,v=C+(I<<21&4294967295|I>>>11),I=y+(C^(v|~x))+T[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=x+(v^(y|~C))+T[3]+2399980690&4294967295,x=y+(I<<10&4294967295|I>>>22),I=C+(y^(x|~v))+T[10]+4293915773&4294967295,C=x+(I<<15&4294967295|I>>>17),I=v+(x^(C|~y))+T[1]+2240044497&4294967295,v=C+(I<<21&4294967295|I>>>11),I=y+(C^(v|~x))+T[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=x+(v^(y|~C))+T[15]+4264355552&4294967295,x=y+(I<<10&4294967295|I>>>22),I=C+(y^(x|~v))+T[6]+2734768916&4294967295,C=x+(I<<15&4294967295|I>>>17),I=v+(x^(C|~y))+T[13]+1309151649&4294967295,v=C+(I<<21&4294967295|I>>>11),I=y+(C^(v|~x))+T[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=x+(v^(y|~C))+T[11]+3174756917&4294967295,x=y+(I<<10&4294967295|I>>>22),I=C+(y^(x|~v))+T[2]+718787259&4294967295,C=x+(I<<15&4294967295|I>>>17),I=v+(x^(C|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,T=this.B,C=this.h,x=0;x<y;){if(C==0)for(;x<=v;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<y;)if(T[C++]=E.charCodeAt(x++),C==this.blockSize){i(this,T),C=0;break}}else for(;x<y;)if(T[C++]=E[x++],C==this.blockSize){i(this,T),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)E[v++]=this.g[y]>>>T&255;return E};function o(E,y){var v=u;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function a(E,y){this.h=y;for(var v=[],T=!0,C=E.length-1;0<=C;C--){var x=E[C]|0;T&&x==y||(v[C]=x,T=!1)}this.g=v}var u={};function c(E){return-128<=E&&128>E?o(E,function(y){return new a([y|0],0>y?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return O(d(-E));for(var y=[],v=1,T=0;E>=v;T++)y[T]=E/v|0,v*=4294967296;return new a(y,0)}function p(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(p(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(y,8)),T=g,C=0;C<E.length;C+=8){var x=Math.min(8,E.length-C),I=parseInt(E.substring(C,C+x),y);8>x?(x=d(Math.pow(y,x)),T=T.j(x).add(d(I))):(T=T.j(v),T=T.add(d(I)))}return T}var g=c(0),_=c(1),R=c(16777216);t=a.prototype,t.m=function(){if(D(this))return-O(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(D(this))return"-"+O(this).toString(E);for(var y=d(Math.pow(E,6)),v=this,T="";;){var C=M(v,y).g;v=S(v,C.j(y));var x=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=C,P(v))return x+T;for(;6>x.length;)x="0"+x;T=x+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function D(E){return E.h==-1}t.l=function(E){return E=S(this,E),D(E)?-1:P(E)?0:1};function O(E){for(var y=E.g.length,v=[],T=0;T<y;T++)v[T]=~E.g[T];return new a(v,~E.h).add(_)}t.abs=function(){return D(this)?O(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0,C=0;C<=y;C++){var x=T+(this.i(C)&65535)+(E.i(C)&65535),I=(x>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);T=I>>>16,x&=65535,I&=65535,v[C]=I<<16|x}return new a(v,v[v.length-1]&-2147483648?-1:0)};function S(E,y){return E.add(O(y))}t.j=function(E){if(P(this)||P(E))return g;if(D(this))return D(E)?O(this).j(O(E)):O(O(this).j(E));if(D(E))return O(this.j(O(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<E.g.length;C++){var x=this.i(T)>>>16,I=this.i(T)&65535,ht=E.i(C)>>>16,qt=E.i(C)&65535;v[2*T+2*C]+=I*qt,w(v,2*T+2*C),v[2*T+2*C+1]+=x*qt,w(v,2*T+2*C+1),v[2*T+2*C+1]+=I*ht,w(v,2*T+2*C+1),v[2*T+2*C+2]+=x*ht,w(v,2*T+2*C+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new a(v,0)};function w(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function M(E,y){if(P(y))throw Error("division by zero");if(P(E))return new A(g,g);if(D(E))return y=M(O(E),y),new A(O(y.g),O(y.h));if(D(y))return y=M(E,O(y)),new A(O(y.g),y.h);if(30<E.g.length){if(D(E)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var v=_,T=y;0>=T.l(E);)v=j(v),T=j(T);var C=z(v,1),x=z(T,1);for(T=z(T,2),v=z(v,2);!P(T);){var I=x.add(T);0>=I.l(E)&&(C=C.add(v),x=I),T=z(T,1),v=z(v,1)}return y=S(E,C.j(y)),new A(C,y)}for(C=g;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),x=d(v),I=x.j(y);D(I)||0<I.l(E);)v-=T,x=d(v),I=x.j(y);P(x)&&(x=_),C=C.add(x),E=S(E,I)}return new A(C,E)}t.A=function(E){return M(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&E.i(T);return new a(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|E.i(T);return new a(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^E.i(T);return new a(v,this.h^E.h)};function j(E){for(var y=E.g.length+1,v=[],T=0;T<y;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(v,E.h)}function z(E,y){var v=y>>5;y%=32;for(var T=E.g.length-v,C=[],x=0;x<T;x++)C[x]=0<y?E.i(x+v)>>>y|E.i(x+v+1)<<32-y:E.i(x+v);return new a(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qv=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,kr=a}).apply(typeof Xm<"u"?Xm:typeof self<"u"?self:typeof window<"u"?window:{});var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wv,gs,Kv,Pa,ch,Gv,Qv,Yv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,f){return l==Array.prototype||l==Object.prototype||(l[h]=f.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ua=="object"&&ua];for(var h=0;h<l.length;++h){var f=l[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var f=r;l=l.split(".");for(var m=0;m<l.length-1;m++){var N=l[m];if(!(N in f))break e;f=f[N]}l=l[l.length-1],m=f[l],h=h(m),h!=m&&h!=null&&e(f,l,{configurable:!0,writable:!0,value:h})}}function o(l,h){l instanceof String&&(l+="");var f=0,m=!1,N={next:function(){if(!m&&f<l.length){var V=f++;return{value:h(V,l[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return o(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function d(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function p(l,h,f){return l.call.apply(l.bind,arguments)}function g(l,h,f){if(!l)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),l.apply(h,N)}}return function(){return l.apply(h,arguments)}}function _(l,h,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,_.apply(null,arguments)}function R(l,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),l.apply(this,m)}}function P(l,h){function f(){}f.prototype=h.prototype,l.aa=h.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(m,N,V){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return h.prototype[N].apply(m,B)}}function D(l){const h=l.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=l[m];return f}return[]}function O(l,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const N=l.length||0,V=m.length||0;l.length=N+V;for(let B=0;B<V;B++)l[N+B]=m[B]}else l.push(m)}}class S{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=u.navigator;return l&&(l=l.userAgent)?l:""}function M(l){return M[" "](l),l}M[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function z(l,h,f){for(const m in l)h.call(f,l[m],m,l)}function E(l,h){for(const f in l)h.call(void 0,l[f],f,l)}function y(l){const h={};for(const f in l)h[f]=l[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(l,h){let f,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(f in m)l[f]=m[f];for(let V=0;V<v.length;V++)f=v[V],Object.prototype.hasOwnProperty.call(m,f)&&(l[f]=m[f])}}function C(l){var h=1;l=l.split(":");const f=[];for(;0<h&&l.length;)f.push(l.shift()),h--;return l.length&&f.push(l.join(":")),f}function x(l){u.setTimeout(()=>{throw l},0)}function I(){var l=K;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ht{constructor(){this.h=this.g=null}add(h,f){const m=qt.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var qt=new S(()=>new X,l=>l.reset());class X{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,U=!1,K=new ht,G=()=>{const l=u.Promise.resolve(void 0);oe=()=>{l.then(de)}};var de=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(f){x(f)}var h=qt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}U=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Rt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};u.addEventListener("test",f,h),u.removeEventListener("test",f,h)}catch{}return l}();function Ct(l,h){if(fe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,m=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{M(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=l.fromElement:f=="mouseout"&&(h=l.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:rn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ct.aa.h.call(this)}}P(Ct,fe);var rn={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),fw=0;function pw(l,h,f,m,N){this.listener=l,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=N,this.key=++fw,this.da=this.fa=!1}function Ro(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Co(l){this.src=l,this.g={},this.h=0}Co.prototype.add=function(l,h,f,m,N){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var B=ru(l,h,m,N);return-1<B?(h=l[B],f||(h.fa=!1)):(h=new pw(h,this.src,V,!!m,N),h.fa=f,l.push(h)),h};function nu(l,h){var f=h.type;if(f in l.g){var m=l.g[f],N=Array.prototype.indexOf.call(m,h,void 0),V;(V=0<=N)&&Array.prototype.splice.call(m,N,1),V&&(Ro(h),l.g[f].length==0&&(delete l.g[f],l.h--))}}function ru(l,h,f,m){for(var N=0;N<l.length;++N){var V=l[N];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==m)return N}return-1}var iu="closure_lm_"+(1e6*Math.random()|0),su={};function gf(l,h,f,m,N){if(Array.isArray(h)){for(var V=0;V<h.length;V++)gf(l,h[V],f,m,N);return null}return f=vf(f),l&&l[sn]?l.K(h,f,d(m)?!!m.capture:!1,N):mw(l,h,f,!1,m,N)}function mw(l,h,f,m,N,V){if(!h)throw Error("Invalid event type");var B=d(N)?!!N.capture:!!N,pe=au(l);if(pe||(l[iu]=pe=new Co(l)),f=pe.add(h,f,m,B,V),f.proxy)return f;if(m=gw(),f.proxy=m,m.src=l,m.listener=f,l.addEventListener)Rt||(N=B),N===void 0&&(N=!1),l.addEventListener(h.toString(),m,N);else if(l.attachEvent)l.attachEvent(_f(h.toString()),m);else if(l.addListener&&l.removeListener)l.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function gw(){function l(f){return h.call(l.src,l.listener,f)}const h=yw;return l}function yf(l,h,f,m,N){if(Array.isArray(h))for(var V=0;V<h.length;V++)yf(l,h[V],f,m,N);else m=d(m)?!!m.capture:!!m,f=vf(f),l&&l[sn]?(l=l.i,h=String(h).toString(),h in l.g&&(V=l.g[h],f=ru(V,f,m,N),-1<f&&(Ro(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete l.g[h],l.h--)))):l&&(l=au(l))&&(h=l.g[h.toString()],l=-1,h&&(l=ru(h,f,m,N)),(f=-1<l?h[l]:null)&&ou(f))}function ou(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[sn])nu(h.i,l);else{var f=l.type,m=l.proxy;h.removeEventListener?h.removeEventListener(f,m,l.capture):h.detachEvent?h.detachEvent(_f(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=au(h))?(nu(f,l),f.h==0&&(f.src=null,h[iu]=null)):Ro(l)}}}function _f(l){return l in su?su[l]:su[l]="on"+l}function yw(l,h){if(l.da)l=!0;else{h=new Ct(h,this);var f=l.listener,m=l.ha||l.src;l.fa&&ou(l),l=f.call(m,h)}return l}function au(l){return l=l[iu],l instanceof Co?l:null}var lu="__closure_events_fn_"+(1e9*Math.random()>>>0);function vf(l){return typeof l=="function"?l:(l[lu]||(l[lu]=function(h){return l.handleEvent(h)}),l[lu])}function Ge(){ie.call(this),this.i=new Co(this),this.M=this,this.F=null}P(Ge,ie),Ge.prototype[sn]=!0,Ge.prototype.removeEventListener=function(l,h,f,m){yf(this,l,h,f,m)};function st(l,h){var f,m=l.F;if(m)for(f=[];m;m=m.F)f.push(m);if(l=l.M,m=h.type||h,typeof h=="string")h=new fe(h,l);else if(h instanceof fe)h.target=h.target||l;else{var N=h;h=new fe(m,l),T(h,N)}if(N=!0,f)for(var V=f.length-1;0<=V;V--){var B=h.g=f[V];N=Po(B,m,!0,h)&&N}if(B=h.g=l,N=Po(B,m,!0,h)&&N,N=Po(B,m,!1,h)&&N,f)for(V=0;V<f.length;V++)B=h.g=f[V],N=Po(B,m,!1,h)&&N}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var f=l.g[h],m=0;m<f.length;m++)Ro(f[m]);delete l.g[h],l.h--}}this.F=null},Ge.prototype.K=function(l,h,f,m){return this.i.add(String(l),h,!1,f,m)},Ge.prototype.L=function(l,h,f,m){return this.i.add(String(l),h,!0,f,m)};function Po(l,h,f,m){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,V=0;V<h.length;++V){var B=h[V];if(B&&!B.da&&B.capture==f){var pe=B.listener,Fe=B.ha||B.src;B.fa&&nu(l.i,B),N=pe.call(Fe,m)!==!1&&N}}return N&&!m.defaultPrevented}function wf(l,h,f){if(typeof l=="function")f&&(l=_(l,f));else if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:u.setTimeout(l,h||0)}function Ef(l){l.g=wf(()=>{l.g=null,l.i&&(l.i=!1,Ef(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class _w extends ie{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ef(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hi(l){ie.call(this),this.h=l,this.g={}}P(Hi,ie);var Tf=[];function If(l){z(l.g,function(h,f){this.g.hasOwnProperty(f)&&ou(h)},l),l.g={}}Hi.prototype.N=function(){Hi.aa.N.call(this),If(this)},Hi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uu=u.JSON.stringify,vw=u.JSON.parse,ww=class{stringify(l){return u.JSON.stringify(l,void 0)}parse(l){return u.JSON.parse(l,void 0)}};function cu(){}cu.prototype.h=null;function Sf(l){return l.h||(l.h=l.i())}function Af(){}var qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hu(){fe.call(this,"d")}P(hu,fe);function du(){fe.call(this,"c")}P(du,fe);var fr={},kf=null;function xo(){return kf=kf||new Ge}fr.La="serverreachability";function Rf(l){fe.call(this,fr.La,l)}P(Rf,fe);function Wi(l){const h=xo();st(h,new Rf(h))}fr.STAT_EVENT="statevent";function Cf(l,h){fe.call(this,fr.STAT_EVENT,l),this.stat=h}P(Cf,fe);function ot(l){const h=xo();st(h,new Cf(h,l))}fr.Ma="timingevent";function Pf(l,h){fe.call(this,fr.Ma,l),this.size=h}P(Pf,fe);function Ki(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){l()},h)}function Gi(){this.g=!0}Gi.prototype.xa=function(){this.g=!1};function Ew(l,h,f,m,N,V){l.info(function(){if(l.g)if(V)for(var B="",pe=V.split("&"),Fe=0;Fe<pe.length;Fe++){var ae=pe[Fe].split("=");if(1<ae.length){var Qe=ae[0];ae=ae[1];var Ye=Qe.split("_");B=2<=Ye.length&&Ye[1]=="type"?B+(Qe+"="+ae+"&"):B+(Qe+"=redacted&")}}else B=null;else B=V;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+h+`
`+f+`
`+B})}function Tw(l,h,f,m,N,V,B){l.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+h+`
`+f+`
`+V+" "+B})}function Br(l,h,f,m){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+Sw(l,f)+(m?" "+m:"")})}function Iw(l,h){l.info(function(){return"TIMEOUT: "+h})}Gi.prototype.info=function(){};function Sw(l,h){if(!l.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var m=f[l];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return uu(f)}catch{return h}}var No={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fu;function Do(){}P(Do,cu),Do.prototype.g=function(){return new XMLHttpRequest},Do.prototype.i=function(){return{}},fu=new Do;function Pn(l,h,f,m){this.j=l,this.i=h,this.l=f,this.R=m||1,this.U=new Hi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nf}function Nf(){this.i=null,this.g="",this.h=!1}var Df={},pu={};function mu(l,h,f){l.L=1,l.v=Lo(on(h)),l.m=f,l.P=!0,Vf(l,null)}function Vf(l,h){l.F=Date.now(),Vo(l),l.A=on(l.v);var f=l.A,m=l.R;Array.isArray(m)||(m=[String(m)]),Kf(f.i,"t",m),l.C=0,f=l.j.J,l.h=new Nf,l.g=hp(l.j,f?h:null,!l.m),0<l.O&&(l.M=new _w(_(l.Y,l,l.g),l.O)),h=l.U,f=l.g,m=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(Tf[0]=N.toString()),N=Tf);for(var V=0;V<N.length;V++){var B=gf(f,N[V],m||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Wi(),Ew(l.i,l.u,l.A,l.l,l.R,l.m)}Pn.prototype.ca=function(l){l=l.target;const h=this.M;h&&an(l)==3?h.j():this.Y(l)},Pn.prototype.Y=function(l){try{if(l==this.g)e:{const Ye=an(this.g);var h=this.g.Ba();const qr=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||ep(this.g)))){this.J||Ye!=4||h==7||(h==8||0>=qr?Wi(3):Wi(2)),gu(this);var f=this.g.Z();this.X=f;t:if(Of(this)){var m=ep(this.g);l="";var N=m.length,V=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),Qi(this);var B="";break t}this.h.i=new u.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,l+=this.h.i.decode(m[h],{stream:!(V&&h==N-1)});m.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,Tw(this.i,this.u,this.A,this.l,this.R,Ye,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Fe=this.g;if((pe=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(pe)){var ae=pe;break t}}ae=null}if(f=ae)Br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yu(this,f);else{this.o=!1,this.s=3,ot(12),pr(this),Qi(this);break e}}if(this.P){f=!0;let Mt;for(;!this.J&&this.C<B.length;)if(Mt=Aw(this,B),Mt==pu){Ye==4&&(this.s=4,ot(14),f=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==Df){this.s=4,ot(15),Br(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Br(this.i,this.l,Mt,null),yu(this,Mt);if(Of(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||B.length!=0||this.h.h||(this.s=1,ot(16),f=!1),this.o=this.o&&f,!f)Br(this.i,this.l,B,"[Invalid Chunked Response]"),pr(this),Qi(this);else if(0<B.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Iu(Qe),Qe.M=!0,ot(11))}}else Br(this.i,this.l,B,null),yu(this,B);Ye==4&&pr(this),this.o&&!this.J&&(Ye==4?ap(this.j,this):(this.o=!1,Vo(this)))}else Bw(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),pr(this),Qi(this)}}}catch{}finally{}};function Of(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Aw(l,h){var f=l.C,m=h.indexOf(`
`,f);return m==-1?pu:(f=Number(h.substring(f,m)),isNaN(f)?Df:(m+=1,m+f>h.length?pu:(h=h.slice(m,m+f),l.C=m+f,h)))}Pn.prototype.cancel=function(){this.J=!0,pr(this)};function Vo(l){l.S=Date.now()+l.I,Mf(l,l.I)}function Mf(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ki(_(l.ba,l),h)}function gu(l){l.B&&(u.clearTimeout(l.B),l.B=null)}Pn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Iw(this.i,this.A),this.L!=2&&(Wi(),ot(17)),pr(this),this.s=2,Qi(this)):Mf(this,this.S-l)};function Qi(l){l.j.G==0||l.J||ap(l.j,l)}function pr(l){gu(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,If(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function yu(l,h){try{var f=l.j;if(f.G!=0&&(f.g==l||_u(f.h,l))){if(!l.K&&_u(f.h,l)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)Bo(f),jo(f);else break e;Tu(f),ot(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ki(_(f.Za,f),6e3));if(1>=Ff(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else gr(f,11)}else if((l.K||f.g==l)&&Bo(f),!w(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let ae=N[h];if(f.T=ae[0],ae=ae[1],f.G==2)if(ae[0]=="c"){f.K=ae[1],f.ia=ae[2];const Qe=ae[3];Qe!=null&&(f.la=Qe,f.j.info("VER="+f.la));const Ye=ae[4];Ye!=null&&(f.Aa=Ye,f.j.info("SVER="+f.Aa));const qr=ae[5];qr!=null&&typeof qr=="number"&&0<qr&&(m=1.5*qr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Mt=l.g;if(Mt){const Ho=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ho){var V=m.h;V.g||Ho.indexOf("spdy")==-1&&Ho.indexOf("quic")==-1&&Ho.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(vu(V,V.h),V.h=null))}if(m.D){const Su=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Su&&(m.ya=Su,ge(m.I,m.D,Su))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var B=l;if(m.qa=cp(m,m.J?m.ia:null,m.W),B.K){Uf(m.h,B);var pe=B,Fe=m.L;Fe&&(pe.I=Fe),pe.B&&(gu(pe),Vo(pe)),m.g=B}else sp(m);0<f.i.length&&zo(f)}else ae[0]!="stop"&&ae[0]!="close"||gr(f,7);else f.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?gr(f,7):Eu(f):ae[0]!="noop"&&f.l&&f.l.ta(ae),f.v=0)}}Wi(4)}catch{}}var kw=class{constructor(l,h){this.g=l,this.map=h}};function Lf(l){this.l=l||10,u.PerformanceNavigationTiming?(l=u.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ff(l){return l.h?1:l.g?l.g.size:0}function _u(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function vu(l,h){l.g?l.g.add(h):l.h=h}function Uf(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Lf.prototype.cancel=function(){if(this.i=jf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function jf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const f of l.g.values())h=h.concat(f.D);return h}return D(l.i)}function Rw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],f=l.length,m=0;m<f;m++)h.push(l[m]);return h}h=[],f=0;for(m in l)h[f++]=l[m];return h}function Cw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var f=0;f<l;f++)h.push(f);return h}h=[],f=0;for(const m in l)h[f++]=m;return h}}}function zf(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var f=Cw(l),m=Rw(l),N=m.length,V=0;V<N;V++)h.call(void 0,m[V],f&&f[V],l)}var Bf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pw(l,h){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var m=l[f].indexOf("="),N=null;if(0<=m){var V=l[f].substring(0,m);N=l[f].substring(m+1)}else V=l[f];h(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function mr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof mr){this.h=l.h,Oo(this,l.j),this.o=l.o,this.g=l.g,Mo(this,l.s),this.l=l.l;var h=l.i,f=new Ji;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),$f(this,f),this.m=l.m}else l&&(h=String(l).match(Bf))?(this.h=!1,Oo(this,h[1]||"",!0),this.o=Yi(h[2]||""),this.g=Yi(h[3]||"",!0),Mo(this,h[4]),this.l=Yi(h[5]||"",!0),$f(this,h[6]||"",!0),this.m=Yi(h[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}mr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Xi(h,Hf,!0),":");var f=this.g;return(f||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Xi(h,Hf,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(Xi(f,f.charAt(0)=="/"?Dw:Nw,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",Xi(f,Ow)),l.join("")};function on(l){return new mr(l)}function Oo(l,h,f){l.j=f?Yi(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Mo(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function $f(l,h,f){h instanceof Ji?(l.i=h,Mw(l.i,l.h)):(f||(h=Xi(h,Vw)),l.i=new Ji(h,l.h))}function ge(l,h,f){l.i.set(h,f)}function Lo(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Yi(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Xi(l,h,f){return typeof l=="string"?(l=encodeURI(l).replace(h,xw),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function xw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Hf=/[#\/\?@]/g,Nw=/[#\?:]/g,Dw=/[#\?]/g,Vw=/[#\?@]/g,Ow=/#/g;function Ji(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function xn(l){l.g||(l.g=new Map,l.h=0,l.i&&Pw(l.i,function(h,f){l.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ji.prototype,t.add=function(l,h){xn(this),this.i=null,l=$r(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(h),this.h+=1,this};function qf(l,h){xn(l),h=$r(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Wf(l,h){return xn(l),h=$r(l,h),l.g.has(h)}t.forEach=function(l,h){xn(this),this.g.forEach(function(f,m){f.forEach(function(N){l.call(h,N,m,this)},this)},this)},t.na=function(){xn(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const N=l[m];for(let V=0;V<N.length;V++)f.push(h[m])}return f},t.V=function(l){xn(this);let h=[];if(typeof l=="string")Wf(this,l)&&(h=h.concat(this.g.get($r(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)h=h.concat(l[f])}return h},t.set=function(l,h){return xn(this),this.i=null,l=$r(this,l),Wf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Kf(l,h,f){qf(l,h),0<f.length&&(l.i=null,l.g.set($r(l,h),D(f)),l.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const V=encodeURIComponent(String(m)),B=this.V(m);for(m=0;m<B.length;m++){var N=V;B[m]!==""&&(N+="="+encodeURIComponent(String(B[m]))),l.push(N)}}return this.i=l.join("&")};function $r(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function Mw(l,h){h&&!l.j&&(xn(l),l.i=null,l.g.forEach(function(f,m){var N=m.toLowerCase();m!=N&&(qf(this,m),Kf(this,N,f))},l)),l.j=h}function Lw(l,h){const f=new Gi;if(u.Image){const m=new Image;m.onload=R(Nn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=R(Nn,f,"TestLoadImage: error",!1,h,m),m.onabort=R(Nn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=R(Nn,f,"TestLoadImage: timeout",!1,h,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=l}else h(!1)}function bw(l,h){const f=new Gi,m=new AbortController,N=setTimeout(()=>{m.abort(),Nn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:m.signal}).then(V=>{clearTimeout(N),V.ok?Nn(f,"TestPingServer: ok",!0,h):Nn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Nn(f,"TestPingServer: error",!1,h)})}function Nn(l,h,f,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(f)}catch{}}function Fw(){this.g=new ww}function Uw(l,h,f){const m=f||"";try{zf(l,function(N,V){let B=N;d(N)&&(B=uu(N)),h.push(m+V+"="+encodeURIComponent(B))})}catch(N){throw h.push(m+"type="+encodeURIComponent("_badmap")),N}}function bo(l){this.l=l.Ub||null,this.j=l.eb||!1}P(bo,cu),bo.prototype.g=function(){return new Fo(this.l,this.j)},bo.prototype.i=function(l){return function(){return l}}({});function Fo(l,h){Ge.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Fo,Ge),t=Fo.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,es(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||u).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,es(this)),this.g&&(this.readyState=3,es(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Zi(this):es(this),this.readyState==3&&Gf(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Zi(this))},t.Qa=function(l){this.g&&(this.response=l,Zi(this))},t.ga=function(){this.g&&Zi(this)};function Zi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,es(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=h.next();return l.join(`\r
`)};function es(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Qf(l){let h="";return z(l,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function wu(l,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Qf(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):ge(l,h,f))}function Ae(l){Ge.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ae,Ge);var jw=/^https?$/i,zw=["POST","PUT"];t=Ae.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fu.g(),this.v=this.o?Sf(this.o):Sf(fu),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(V){Yf(this,V);return}if(l=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)f.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())f.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),N=u.FormData&&l instanceof u.FormData,!(0<=Array.prototype.indexOf.call(zw,h,void 0))||m||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of f)this.g.setRequestHeader(V,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zf(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){Yf(this,V)}};function Yf(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Xf(l),Uo(l)}function Xf(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,st(this,"complete"),st(this,"abort"),Uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uo(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jf(this):this.bb())},t.bb=function(){Jf(this)};function Jf(l){if(l.h&&typeof a<"u"&&(!l.v[1]||an(l)!=4||l.Z()!=2)){if(l.u&&an(l)==4)wf(l.Ea,0,l);else if(st(l,"readystatechange"),an(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=B===0){var N=String(l.D).match(Bf)[1]||null;!N&&u.self&&u.self.location&&(N=u.self.location.protocol.slice(0,-1)),m=!jw.test(N?N.toLowerCase():"")}f=m}if(f)st(l,"complete"),st(l,"success");else{l.m=6;try{var V=2<an(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",Xf(l)}}finally{Uo(l)}}}}function Uo(l,h){if(l.g){Zf(l);const f=l.g,m=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||st(l,"ready");try{f.onreadystatechange=m}catch{}}}function Zf(l){l.I&&(u.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function an(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),vw(h)}};function ep(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Bw(l){const h={};l=(l.g&&2<=an(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<l.length;m++){if(w(l[m]))continue;var f=C(l[m]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[N]||[];h[N]=V,V.push(f)}E(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ts(l,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||h}function tp(l){this.Aa=0,this.i=[],this.j=new Gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ts("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ts("baseRetryDelayMs",5e3,l),this.cb=ts("retryDelaySeedMs",1e4,l),this.Wa=ts("forwardChannelMaxRetries",2,l),this.wa=ts("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Lf(l&&l.concurrentRequestLimit),this.Da=new Fw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=tp.prototype,t.la=8,t.G=1,t.connect=function(l,h,f,m){ot(0),this.W=l,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=cp(this,null,this.W),zo(this)};function Eu(l){if(np(l),l.G==3){var h=l.U++,f=on(l.I);if(ge(f,"SID",l.K),ge(f,"RID",h),ge(f,"TYPE","terminate"),ns(l,f),h=new Pn(l,l.j,h),h.L=2,h.v=Lo(on(f)),f=!1,u.navigator&&u.navigator.sendBeacon)try{f=u.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&u.Image&&(new Image().src=h.v,f=!0),f||(h.g=hp(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Vo(h)}up(l)}function jo(l){l.g&&(Iu(l),l.g.cancel(),l.g=null)}function np(l){jo(l),l.u&&(u.clearTimeout(l.u),l.u=null),Bo(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&u.clearTimeout(l.s),l.s=null)}function zo(l){if(!bf(l.h)&&!l.s){l.s=!0;var h=l.Ga;oe||G(),U||(oe(),U=!0),K.add(h,l),l.B=0}}function $w(l,h){return Ff(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ki(_(l.Ga,l,h),lp(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new Pn(this,this.j,l);let V=this.o;if(this.S&&(V?(V=y(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=ip(this,N,h),f=on(this.I),ge(f,"RID",l),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),ns(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(Qf(V)))+"&"+h:this.m&&wu(f,this.m,V)),vu(this.h,N),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",h),ge(f,"SID","null"),N.T=!0,mu(N,f,null)):mu(N,f,h),this.G=2}}else this.G==3&&(l?rp(this,l):this.i.length==0||bf(this.h)||rp(this))};function rp(l,h){var f;h?f=h.l:f=l.U++;const m=on(l.I);ge(m,"SID",l.K),ge(m,"RID",f),ge(m,"AID",l.T),ns(l,m),l.m&&l.o&&wu(m,l.m,l.o),f=new Pn(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),h&&(l.i=h.D.concat(l.i)),h=ip(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),vu(l.h,f),mu(f,m,h)}function ns(l,h){l.H&&z(l.H,function(f,m){ge(h,m,f)}),l.l&&zf({},function(f,m){ge(h,m,f)})}function ip(l,h,f){f=Math.min(l.i.length,f);var m=l.l?_(l.l.Na,l.l,l):null;e:{var N=l.i;let V=-1;for(;;){const B=["count="+f];V==-1?0<f?(V=N[0].g,B.push("ofs="+V)):V=0:B.push("ofs="+V);let pe=!0;for(let Fe=0;Fe<f;Fe++){let ae=N[Fe].g;const Qe=N[Fe].map;if(ae-=V,0>ae)V=Math.max(0,N[Fe].g-100),pe=!1;else try{Uw(Qe,B,"req"+ae+"_")}catch{m&&m(Qe)}}if(pe){m=B.join("&");break e}}}return l=l.i.splice(0,f),h.D=l,m}function sp(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;oe||G(),U||(oe(),U=!0),K.add(h,l),l.v=0}}function Tu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ki(_(l.Fa,l),lp(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,op(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ki(_(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),jo(this),op(this))};function Iu(l){l.A!=null&&(u.clearTimeout(l.A),l.A=null)}function op(l){l.g=new Pn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=on(l.qa);ge(h,"RID","rpc"),ge(h,"SID",l.K),ge(h,"AID",l.T),ge(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(h,"TO",l.ja),ge(h,"TYPE","xmlhttp"),ns(l,h),l.m&&l.o&&wu(h,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=Lo(on(h)),f.m=null,f.P=!0,Vf(f,l)}t.Za=function(){this.C!=null&&(this.C=null,jo(this),Tu(this),ot(19))};function Bo(l){l.C!=null&&(u.clearTimeout(l.C),l.C=null)}function ap(l,h){var f=null;if(l.g==h){Bo(l),Iu(l),l.g=null;var m=2}else if(_u(l.h,h))f=h.D,Uf(l.h,h),m=1;else return;if(l.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=l.B;m=xo(),st(m,new Pf(m,f)),zo(l)}else sp(l);else if(N=h.s,N==3||N==0&&0<h.X||!(m==1&&$w(l,h)||m==2&&Tu(l)))switch(f&&0<f.length&&(h=l.h,h.i=h.i.concat(f)),N){case 1:gr(l,5);break;case 4:gr(l,10);break;case 3:gr(l,6);break;default:gr(l,2)}}}function lp(l,h){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*h}function gr(l,h){if(l.j.info("Error code "+h),h==2){var f=_(l.fb,l),m=l.Xa;const N=!m;m=new mr(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Oo(m,"https"),Lo(m),N?Lw(m.toString(),f):bw(m.toString(),f)}else ot(2);l.G=0,l.l&&l.l.sa(h),up(l),np(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function up(l){if(l.G=0,l.ka=[],l.l){const h=jf(l.h);(h.length!=0||l.i.length!=0)&&(O(l.ka,h),O(l.ka,l.i),l.h.i.length=0,D(l.i),l.i.length=0),l.l.ra()}}function cp(l,h,f){var m=f instanceof mr?on(f):new mr(f);if(m.g!="")h&&(m.g=h+"."+m.g),Mo(m,m.s);else{var N=u.location;m=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var V=new mr(null);m&&Oo(V,m),h&&(V.g=h),N&&Mo(V,N),f&&(V.l=f),m=V}return f=l.D,h=l.ya,f&&h&&ge(m,f,h),ge(m,"VER",l.la),ns(l,m),m}function hp(l,h,f){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ae(new bo({eb:f})):new Ae(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dp(){}t=dp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $o(){}$o.prototype.g=function(l,h){return new vt(l,h)};function vt(l,h){Ge.call(this),this.g=new tp(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Hr(this)}P(vt,Ge),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Eu(this.g)},vt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=uu(l),l=f);h.i.push(new kw(h.Ya++,l)),h.G==3&&zo(h)},vt.prototype.N=function(){this.g.l=null,delete this.j,Eu(this.g),delete this.g,vt.aa.N.call(this)};function fp(l){hu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const f in h){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}P(fp,hu);function pp(){du.call(this),this.status=1}P(pp,du);function Hr(l){this.g=l}P(Hr,dp),Hr.prototype.ua=function(){st(this.g,"a")},Hr.prototype.ta=function(l){st(this.g,new fp(l))},Hr.prototype.sa=function(l){st(this.g,new pp)},Hr.prototype.ra=function(){st(this.g,"b")},$o.prototype.createWebChannel=$o.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Yv=function(){return new $o},Qv=function(){return xo()},Gv=fr,ch={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},No.NO_ERROR=0,No.TIMEOUT=8,No.HTTP_ERROR=6,Pa=No,xf.COMPLETE="complete",Kv=xf,Af.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,gs=Af,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,Wv=Ae}).apply(typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{});const Jm="@firebase/firestore";/**
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
 */let et=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let ji="10.14.0";/**
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
 */const Mr=new wd("@firebase/firestore");function hs(){return Mr.logLevel}function q(t,...e){if(Mr.logLevel<=ne.DEBUG){const n=e.map(Dd);Mr.debug(`Firestore (${ji}): ${t}`,...n)}}function An(t,...e){if(Mr.logLevel<=ne.ERROR){const n=e.map(Dd);Mr.error(`Firestore (${ji}): ${t}`,...n)}}function Ri(t,...e){if(Mr.logLevel<=ne.WARN){const n=e.map(Dd);Mr.warn(`Firestore (${ji}): ${t}`,...n)}}function Dd(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function he(t,e){t||Y()}function Z(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Xv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ek{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class tk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nk{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let o=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Rr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Rr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new Xv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new et(e)}}class rk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ik{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new rk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ok{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){he(this.o===void 0);const r=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new sk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ak(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Jv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ak(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Ci(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Oe(0,0))}static max(){return new J(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),a=n.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends Zs{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const lk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Zs{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return lk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(_e.fromString(e))}static fromName(e){return new W(_e.fromString(e).popFirst(5))}static empty(){return new W(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new _e(e.slice()))}}function uk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new or(i,W.empty(),e)}function ck(t){return new or(t.readTime,t.key,-1)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(J.min(),W.empty(),-1)}static max(){return new or(J.max(),W.empty(),-1)}}function hk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const dk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==dk)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&n()},c=>r(c))}),a=!0,o===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let c=0;c<o;c++){const d=c;n(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,n){return new b((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function pk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vd.oe=-1;function zl(t){return t==null}function fl(t){return t===0&&1/t==-1/0}function mk(t){return typeof t=="number"&&Number.isInteger(t)&&!fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ca(this.root,e,this.comparator,!0)}}class ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=o??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new je(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,o){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new eg(this.data.getIterator())}getIteratorFrom(e){return new eg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class eg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new $e(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ci(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class e0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new e0("Invalid base64 string: "+o):o}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const gk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(he(!!t),typeof t=="string"){let e=0;const n=gk.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function Od(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Md(t){const e=t.mapValue.fields.__previous_value__;return Od(e)?Md(e):e}function eo(t){const e=ar(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class yk{constructor(e,n,r,i,o,a,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class to{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof to&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ha={mapValue:{}};function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Od(t)?4:vk(t)?9007199254740991:_k(t)?10:11:Y()}function nn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return eo(t).isEqual(eo(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ar(i.timestampValue),u=ar(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Lr(i.bytesValue).isEqual(Lr(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Re(i.geoPointValue.latitude)===Re(o.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Re(i.integerValue)===Re(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Re(i.doubleValue),u=Re(o.doubleValue);return a===u?fl(a)===fl(u):isNaN(a)&&isNaN(u)}return!1}(t,e);case 9:return Ci(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Zm(a)!==Zm(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!nn(a[c],u[c])))return!1;return!0}(t,e);default:return Y()}}function no(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function Pi(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(o,a){const u=Re(o.integerValue||o.doubleValue),c=Re(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(t,e);case 3:return tg(t.timestampValue,e.timestampValue);case 4:return tg(eo(t),eo(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(o,a){const u=Lr(o),c=Lr(a);return u.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const p=le(u[d],c[d]);if(p!==0)return p}return le(u.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,a){const u=le(Re(o.latitude),Re(a.latitude));return u!==0?u:le(Re(o.longitude),Re(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ng(t.arrayValue,e.arrayValue);case 10:return function(o,a){var u,c,d,p;const g=o.fields||{},_=a.fields||{},R=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=(c=_.value)===null||c===void 0?void 0:c.arrayValue,D=le(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:ng(R,P)}(t.mapValue,e.mapValue);case 11:return function(o,a){if(o===ha.mapValue&&a===ha.mapValue)return 0;if(o===ha.mapValue)return 1;if(a===ha.mapValue)return-1;const u=o.fields||{},c=Object.keys(u),d=a.fields||{},p=Object.keys(d);c.sort(),p.sort();for(let g=0;g<c.length&&g<p.length;++g){const _=le(c[g],p[g]);if(_!==0)return _;const R=Pi(u[c[g]],d[p[g]]);if(R!==0)return R}return le(c.length,p.length)}(t.mapValue,e.mapValue);default:throw Y()}}function tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=ar(t),r=ar(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function ng(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Pi(n[i],r[i]);if(o)return o}return le(n.length,r.length)}function xi(t){return hh(t)}function hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=hh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${hh(n.fields[a])}`;return i+"}"}(t.mapValue):Y()}function rg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dh(t){return!!t&&"integerValue"in t}function Ld(t){return!!t&&"arrayValue"in t}function ig(t){return!!t&&"nullValue"in t}function sg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function _k(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function xs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xs(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!n.isImmediateParentOf(u)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=u.popLast()}a?r[u.lastSegment()]=xs(a):i.push(u.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){jr(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new ft(xs(this.value))}}function t0(t){const e=[];return jr(t.fields,(n,r)=>{const i=new ze([n]);if(xa(r)){const o=t0(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Tt(e)}/**
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
 */class nt{constructor(e,n,r,i,o,a,u){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new nt(e,0,J.min(),J.min(),J.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,J.min(),J.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,J.min(),J.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pl{constructor(e,n){this.position=e,this.inclusive=n}}function og(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],a=t.position[i];if(o.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),n.key):r=Pi(a,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ag(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function wk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */let n0=class{};class Ne extends n0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Tk(e,n,r):n==="array-contains"?new Ak(e,r):n==="in"?new kk(e,r):n==="not-in"?new Rk(e,r):n==="array-contains-any"?new Ck(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ik(e,r):new Sk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pi(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(Pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends n0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ht(e,n)}matches(e){return r0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r0(t){return t.op==="and"}function i0(t){return Ek(t)&&r0(t)}function Ek(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function fh(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+xi(t.value);if(i0(t))return t.filters.map(e=>fh(e)).join(",");{const e=t.filters.map(n=>fh(n)).join(",");return`${t.op}(${e})`}}function s0(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&nn(r.value,i.value)}(t,e):t instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&s0(a,i.filters[u]),!0):!1}(t,e):void Y()}function o0(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${xi(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(o0).join(" ,")+"}"}(t):"Filter"}class Tk extends Ne{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ik extends Ne{constructor(e,n){super(e,"in",n),this.keys=a0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sk extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=a0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class Ak extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ld(n)&&no(n.arrayValue,this.value)}}class kk extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&no(this.value.arrayValue,n)}}class Rk extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!no(this.value.arrayValue,n)}}class Ck extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ld(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>no(this.value.arrayValue,r))}}/**
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
 */class Pk{constructor(e,n=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function lg(t,e=null,n=[],r=[],i=null,o=null,a=null){return new Pk(t,e,n,r,i,o,a)}function bd(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xi(r)).join(",")),e.ue=n}return e.ue}function Fd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!s0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ag(t.startAt,e.startAt)&&ag(t.endAt,e.endAt)}function ph(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Eo{constructor(e,n=null,r=[],i=[],o=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xk(t,e,n,r,i,o,a,u){return new Eo(t,e,n,r,i,o,a,u)}function Ud(t){return new Eo(t)}function ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function l0(t){return t.collectionGroup!==null}function Ns(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new $e(ze.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new ml(o,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new ml(ze.keyField(),r))}return e.ce}function en(t){const e=Z(t);return e.le||(e.le=Nk(e,Ns(t))),e.le}function Nk(t,e){if(t.limitType==="F")return lg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ml(i.field,o)});const n=t.endAt?new pl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pl(t.startAt.position,t.startAt.inclusive):null;return lg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mh(t,e){const n=t.filters.concat([e]);return new Eo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gh(t,e,n){return new Eo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bl(t,e){return Fd(en(t),en(e))&&t.limitType===e.limitType}function u0(t){return`${bd(en(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>o0(i)).join(", ")}]`),zl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xi(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function $l(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):W.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Ns(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,u,c){const d=og(a,u,c);return a.inclusive?d<=0:d<0}(r.startAt,Ns(r),i)||r.endAt&&!function(a,u,c){const d=og(a,u,c);return a.inclusive?d>=0:d>0}(r.endAt,Ns(r),i))}(t,e)}function Dk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function c0(t){return(e,n)=>{let r=!1;for(const i of Ns(t)){const o=Vk(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Vk(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(o,a,u){const c=a.data.field(o),d=u.data.field(o);return c!==null&&d!==null?Pi(c,d):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Zv(this.inner)}size(){return this.innerSize}}/**
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
 */const Ok=new Se(W.comparator);function kn(){return Ok}const h0=new Se(W.comparator);function ys(...t){let e=h0;for(const n of t)e=e.insert(n.key,n);return e}function d0(t){let e=h0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return Ds()}function f0(){return Ds()}function Ds(){return new zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mk=new Se(W.comparator),Lk=new $e(W.comparator);function te(...t){let e=Lk;for(const n of t)e=e.add(n);return e}const bk=new $e(le);function Fk(){return bk}/**
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
 */function jd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fl(e)?"-0":e}}function p0(t){return{integerValue:""+t}}function Uk(t,e){return mk(e)?p0(e):jd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this._=void 0}}function jk(t,e,n){return t instanceof ro?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Od(o)&&(o=Md(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(n,e):t instanceof io?g0(t,e):t instanceof so?y0(t,e):function(i,o){const a=m0(i,o),u=cg(a)+cg(i.Pe);return dh(a)&&dh(i.Pe)?p0(u):jd(i.serializer,u)}(t,e)}function zk(t,e,n){return t instanceof io?g0(t,e):t instanceof so?y0(t,e):n}function m0(t,e){return t instanceof gl?function(r){return dh(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ro extends Hl{}class io extends Hl{constructor(e){super(),this.elements=e}}function g0(t,e){const n=_0(e);for(const r of t.elements)n.some(i=>nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class so extends Hl{constructor(e){super(),this.elements=e}}function y0(t,e){let n=_0(e);for(const r of t.elements)n=n.filter(i=>!nn(i,r));return{arrayValue:{values:n}}}class gl extends Hl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function cg(t){return Re(t.integerValue||t.doubleValue)}function _0(t){return Ld(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Bk{constructor(e,n){this.field=e,this.transform=n}}function $k(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof io&&i instanceof io||r instanceof so&&i instanceof so?Ci(r.elements,i.elements,nn):r instanceof gl&&i instanceof gl?nn(r.Pe,i.Pe):r instanceof ro&&i instanceof ro}(t.transform,e.transform)}class Hk{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ql{}function v0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zd(t.key,Bt.none()):new To(t.key,t.data,Bt.none());{const n=t.data,r=ft.empty();let i=new $e(ze.comparator);for(let o of e.fields)if(!i.has(o)){let a=n.field(o);a===null&&o.length>1&&(o=o.popLast(),a=n.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new dr(t.key,r,new Tt(i.toArray()),Bt.none())}}function qk(t,e,n){t instanceof To?function(i,o,a){const u=i.value.clone(),c=dg(i.fieldTransforms,o,a.transformResults);u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(i,o,a){if(!Na(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=dg(i.fieldTransforms,o,a.transformResults),c=o.data;c.setAll(w0(i)),c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Vs(t,e,n,r){return t instanceof To?function(o,a,u,c){if(!Na(o.precondition,a))return u;const d=o.value.clone(),p=fg(o.fieldTransforms,c,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof dr?function(o,a,u,c){if(!Na(o.precondition,a))return u;const d=fg(o.fieldTransforms,c,a),p=a.data;return p.setAll(w0(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(o,a,u){return Na(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(t,e,n)}function Wk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=m0(r.transform,i||null);o!=null&&(n===null&&(n=ft.empty()),n.set(r.field,o))}return n||null}function hg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ci(r,i,(o,a)=>$k(o,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class To extends ql{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class dr extends ql{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function w0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dg(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,zk(a,u,n[i]))}return r}function fg(t,e,n){const r=new Map;for(const i of t){const o=i.transform,a=n.data.field(i.field);r.set(i.field,jk(o,a,e))}return r}class zd extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kk extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&qk(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=f0();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=n.has(i.key)?null:u;const c=v0(a,u);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ci(this.mutations,e.mutations,(n,r)=>hg(n,r))&&Ci(this.baseMutations,e.baseMutations,(n,r)=>hg(n,r))}}class Bd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return Mk}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Bd(e,n,r,i)}}/**
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
 */class Qk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Yk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,re;function Xk(t){switch(t){default:return Y();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function E0(t){if(t===void 0)return An("GRPC error has no .code"),L.UNKNOWN;switch(t){case Pe.OK:return L.OK;case Pe.CANCELLED:return L.CANCELLED;case Pe.UNKNOWN:return L.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return L.INTERNAL;case Pe.UNAVAILABLE:return L.UNAVAILABLE;case Pe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Pe.NOT_FOUND:return L.NOT_FOUND;case Pe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Pe.ABORTED:return L.ABORTED;case Pe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Pe.DATA_LOSS:return L.DATA_LOSS;default:return Y()}}(re=Pe||(Pe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jk(){return new TextEncoder}/**
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
 */const Zk=new kr([4294967295,4294967295],0);function pg(t){const e=Jk().encode(t),n=new qv;return n.update(e),new Uint8Array(n.digest())}function mg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new kr([n,r],0),new kr([i,o],0)]}class $d{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _s(`Invalid padding: ${n}`);if(r<0)throw new _s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _s(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _s(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=kr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(kr.fromNumber(r)));return i.compare(Zk)===1&&(i=new kr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pg(e),[r,i]=mg(n);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new $d(o,i,n);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const n=pg(e),[r,i]=mg(n);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wl{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wl(J.min(),i,new Se(le),kn(),te())}}class Io{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Io(r,n,te(),te(),te())}}/**
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
 */class Da{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class T0{constructor(e,n){this.targetId=e,this.me=n}}class I0{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gg{constructor(){this.fe=0,this.ge=_g(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Io(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=_g()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class eR{constructor(e){this.Le=e,this.Be=new Map,this.ke=kn(),this.qe=yg(),this.Qe=new Se(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(ph(o))if(r===0){const a=new W(o.path);this.Ue(n,a,nt.newNoDocument(a,J.min()))}else he(r===1);else{const a=this.Ye(n);if(a!==r){const u=this.Ze(e),c=u?this.Xe(u,e,a):1;if(c!==0){this.je(n);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let a,u;try{a=Lr(r).toUint8Array()}catch(c){if(c instanceof e0)return Ri("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new $d(a,i,o)}catch(c){return Ri(c instanceof _s?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ie===0?null:u}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&ph(u.target)){const c=new W(u.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,nt.newNoDocument(c,e))}o.be&&(n.set(a,o.ve()),o.Ce())}});let r=te();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new Wl(e,n,this.Qe,this.ke,r);return this.ke=kn(),this.qe=yg(),this.Qe=new Se(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $e(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yg(){return new Se(W.comparator)}function _g(){return new Se(W.comparator)}const tR={asc:"ASCENDING",desc:"DESCENDING"},nR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rR={and:"AND",or:"OR"};class iR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yh(t,e){return t.useProto3Json||zl(e)?e:{value:e}}function yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sR(t,e){return yl(t,e.toTimestamp())}function tn(t){return he(!!t),J.fromTimestamp(function(n){const r=ar(n);return new Oe(r.seconds,r.nanos)}(t))}function Hd(t,e){return _h(t,e).canonicalString()}function _h(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function A0(t){const e=_e.fromString(t);return he(x0(e)),e}function vh(t,e){return Hd(t.databaseId,e.path)}function ic(t,e){const n=A0(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(R0(n))}function k0(t,e){return Hd(t.databaseId,e)}function oR(t){const e=A0(t);return e.length===4?_e.emptyPath():R0(e)}function wh(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function R0(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vg(t,e,n){return{name:vh(t,e),fields:n.value.mapValue.fields}}function aR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(he(p===void 0||typeof p=="string"),We.fromBase64String(p||"")):(he(p===void 0||p instanceof Buffer||p instanceof Uint8Array),We.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?L.UNKNOWN:E0(d.code);return new H(p,d.message||"")}(a);n=new I0(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ic(t,r.document.name),o=tn(r.document.updateTime),a=r.document.createTime?tn(r.document.createTime):J.min(),u=new ft({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];n=new Da(d,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ic(t,r.document),o=r.readTime?tn(r.readTime):J.min(),a=nt.newNoDocument(i,o),u=r.removedTargetIds||[];n=new Da([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ic(t,r.document),o=r.removedTargetIds||[];n=new Da([],o,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Yk(i,o),u=r.targetId;n=new T0(u,a)}}return n}function lR(t,e){let n;if(e instanceof To)n={update:vg(t,e.key,e.value)};else if(e instanceof zd)n={delete:vh(t,e.key)};else if(e instanceof dr)n={update:vg(t,e.key,e.data),updateMask:yR(e.fieldMask)};else{if(!(e instanceof Kk))return Y();n={verify:vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof ro)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof io)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof so)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof gl)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:sR(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Y()}(t,e.precondition)),n}function uR(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,o){let a=i.updateTime?tn(i.updateTime):tn(o);return a.isEqual(J.min())&&(a=tn(o)),new Hk(a,i.transformResults||[])}(n,e))):[]}function cR(t,e){return{documents:[k0(t,e.path)]}}function hR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k0(t,i);const o=function(d){if(d.length!==0)return P0(Ht.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(_){return{field:Gr(_.field),direction:pR(_.dir)}}(p))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const u=yh(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function dR(t){let e=oR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];n.where&&(o=function(g){const _=C0(g);return _ instanceof Ht&&i0(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(_=>function(P){return new ml(Qr(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(n.orderBy));let u=null;n.limit&&(u=function(g){let _;return _=typeof g=="object"?g.value:g,zl(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(g){const _=!!g.before,R=g.values||[];return new pl(R,_)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const _=!g.before,R=g.values||[];return new pl(R,_)}(n.endAt)),xk(e,i,a,o,u,"F",c,d)}function fR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qr(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qr(n.unaryFilter.field);return Ne.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qr(n.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Qr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>C0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function pR(t){return tR[t]}function mR(t){return nR[t]}function gR(t){return rR[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return ze.fromServerFormat(t.fieldPath)}function P0(t){return t instanceof Ne?function(n){if(n.op==="=="){if(sg(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(ig(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sg(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(ig(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:mR(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(i=>P0(i));return r.length===1?r[0]:{compositeFilter:{op:gR(n.op),filters:r}}}(t):Y()}function yR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hn{constructor(e,n,r,i,o=J.min(),a=J.min(),u=We.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _R{constructor(e){this.ct=e}}function vR(t){const e=dR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gh(e,e.limit,"L"):e}/**
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
 */class wR{constructor(){this.un=new ER}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(or.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class ER{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(_e.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(_e.comparator)).toArray()}}/**
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
 */class Ni{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ni(0)}static kn(){return new Ni(-1)}}/**
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
 */class TR{constructor(){this.changes=new zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class IR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class SR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Vs(r.mutation,i,Tt.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let a=ys();return o.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{n.set(a,u)})})}computeViews(e,n,r,i){let o=kn();const a=Ds(),u=function(){return Ds()}();return n.forEach((c,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof dr)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Vs(p.mutation,d,p.mutation.getFieldMask(),Oe.now())):a.set(d.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((d,p)=>a.set(d,p)),n.forEach((d,p)=>{var g;return u.set(d,new IR(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(e,n){const r=Ds();let i=new Se((a,u)=>a-u),o=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const u of a)u.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let p=r.get(c)||Tt.empty();p=u.applyToLocalView(d,p),r.set(c,p);const g=(i.get(u.batchId)||te()).add(c);i=i.insert(u.batchId,g)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,p=c.value,g=f0();p.forEach(_=>{if(!o.has(_)){const R=v0(n.get(_),r.get(_));R!==null&&g.set(_,R),o=o.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):l0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):b.resolve(Ir());let u=-1,c=o;return a.next(d=>b.forEach(d,(p,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),o.get(p)?b.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{c=c.insert(p,_)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,c,d,te())).next(p=>({batchId:u,changes:d0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=ys();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let a=ys();return this.indexManager.getCollectionParents(e,o).next(u=>b.forEach(u,c=>{const d=function(g,_){return new Eo(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(a=>{o.forEach((c,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,nt.newInvalidDocument(p)))});let u=ys();return a.forEach((c,d)=>{const p=o.get(c);p!==void 0&&Vs(p.mutation,d,Tt.empty(),Oe.now()),$l(n,d)&&(u=u.insert(c,d))}),u})}}/**
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
 */class AR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:tn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:vR(i.bundledQuery),readTime:tn(i.readTime)}}(n)),b.resolve()}}/**
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
 */class kR{constructor(){this.overlays=new Se(W.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return b.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Ir(),o=n.length+1,a=new W(n.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&c.largestBatchId>r&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Se((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Ir(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Ir(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return b.resolve(u)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Qk(n,r));let o=this.Ir.get(n);o===void 0&&(o=te(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
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
 */class qd{constructor(){this.Tr=new $e(Me.Er),this.dr=new $e(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new _e([])),r=new Me(n,e),i=new Me(n,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new _e([])),r=new Me(n,e),i=new Me(n,e+1);let o=te();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
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
 */class CR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $e(Me.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gk(o,n,r,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new Me(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const u=this.Dr(a.wr);o.push(u)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(le);return n.forEach(i=>{const o=new Me(i,0),a=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;W.isDocumentKey(o)||(o=o.child(""));const a=new Me(new W(o),0);let u=new $e(le);return this.br.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(c.wr)),!0)},a),b.resolve(this.Cr(u))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(n.mutations,i=>{const o=new Me(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class PR{constructor(e){this.Mr=e,this.docs=function(){return new Se(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():nt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=kn();const a=n.path,u=new W(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:p}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||hk(ck(p),r)<=0||(i.has(p.key)||$l(n,p))&&(o=o.insert(p.key,p.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xR(this)}getSize(e){return b.resolve(this.size)}}class xR extends TR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class NR{constructor(e){this.persistence=e,this.Nr=new zi(n=>bd(n),Fd),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qd,this.targetCount=0,this.kr=Ni.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ni(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
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
 */class DR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Vd(0),this.Kr=!1,this.Kr=!0,this.$r=new RR,this.referenceDelegate=e(this),this.Ur=new NR(this),this.indexManager=new wR,this.remoteDocumentCache=function(i){return new PR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new _R(n),this.Gr=new AR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new CR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new VR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class VR extends fk{constructor(e){super(),this.currentSequenceNumber=e}}class Wd{constructor(e){this.persistence=e,this.Jr=new qd,this.Yr=null}static Zr(e){return new Wd(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Kd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Kd(e,n.fromCache,r,i)}}/**
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
 */class OR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class MR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return OI()?8:pk(it())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new OR;return this.Xi(e,n,a).next(u=>{if(o.result=u,this.zi)return this.es(e,n,a,u.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(hs()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(hs()<=ne.DEBUG&&q("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(hs()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):b.resolve())}Yi(e,n){if(ug(n))return b.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gh(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=te(...o);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.ts(n,u);return this.ns(n,d,a,c.readTime)?this.Yi(e,gh(n,null,"F")):this.rs(e,d,n,c)}))})))}Zi(e,n,r,i){return ug(n)||i.isEqual(J.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(n,o);return this.ns(n,a,r,i)?b.resolve(null):(hs()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kr(n)),this.rs(e,a,n,uk(i,-1)).next(u=>u))})}ts(e,n){let r=new $e(c0(e));return n.forEach((i,o)=>{$l(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return hs()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.Ji.getDocumentsMatchingQuery(e,n,or.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class LR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Se(le),this._s=new zi(o=>bd(o),Fd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function bR(t,e,n,r){return new LR(t,e,n,r)}async function N0(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let c=te();for(const d of i){a.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}return n.localDocuments.getDocuments(r,c).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function FR(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,p){const g=d.batch,_=g.keys();let R=b.resolve();return _.forEach(P=>{R=R.next(()=>p.getEntry(c,P)).next(D=>{const O=d.docVersions.get(P);he(O!==null),D.version.compareTo(O)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let c=te();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function D0(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function UR(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const u=[];e.targetChanges.forEach((p,g)=>{const _=i.get(g);if(!_)return;u.push(n.Ur.removeMatchingKeys(o,p.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(o,p.addedDocuments,g)));let R=_.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(We.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(g,R),function(D,O,S){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(_,R,p)&&u.push(n.Ur.updateTargetData(o,R))});let c=kn(),d=te();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(jR(o,a,e.documentUpdates).next(p=>{c=p.Ps,d=p.Is})),!r.isEqual(J.min())){const p=n.Ur.getLastRemoteSnapshotVersion(o).next(g=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return b.waitFor(u).next(()=>a.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,c,d)).next(()=>c)}).then(o=>(n.os=i,o))}function jR(t,e,n){let r=te(),i=te();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let a=kn();return n.forEach((u,c)=>{const d=o.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):q("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Ps:a,Is:i}})}function zR(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,b.resolve(i)):n.Ur.allocateTargetId(r).next(a=>(i=new Hn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Eh(t,e,n){const r=Z(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!wo(a))throw a;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function wg(t,e,n){const r=Z(t);let i=J.min(),o=te();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,p){const g=Z(c),_=g._s.get(p);return _!==void 0?b.resolve(g.os.get(_)):g.Ur.getTargetData(d,p)}(r,a,en(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(c=>{o=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?i:J.min(),n?o:te())).next(u=>($R(r,Dk(e),u),{documents:u,Ts:o})))}function $R(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class Eg{constructor(){this.activeTargetIds=Fk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HR{constructor(){this.so=new Eg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Eg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qR{_o(e){}shutdown(){}}/**
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
 */class Tg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let da=null;function sc(){return da===null?da=function(){return 268435456+Math.round(2147483648*Math.random())}():da++,"0x"+da.toString(16)}/**
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
 */const WR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class KR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ze="WebChannelConnection";class GR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,a){const u=sc(),c=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${u}:`,c,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(n,c,d,i).then(p=>(q("RestConnection",`Received RPC '${n}' ${u}: `,p),p),p=>{throw Ri("RestConnection",`RPC '${n}' ${u} failed with error: `,p,"url: ",c,"request:",i),p})}Lo(n,r,i,o,a,u){return this.Mo(n,r,i,o,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ji}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>n[a]=o),i&&i.headers.forEach((o,a)=>n[a]=o)}xo(n,r){const i=WR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=sc();return new Promise((a,u)=>{const c=new Wv;c.setWithCredentials(!0),c.listenOnce(Kv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Pa.NO_ERROR:const p=c.getResponseJson();q(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Pa.TIMEOUT:q(Ze,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Pa.HTTP_ERROR:const g=c.getStatus();if(q(Ze,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const P=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(S)>=0?S:L.UNKNOWN}(R.status);u(new H(P,R.message))}else u(new H(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{q(Ze,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);q(Ze,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=sc(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Yv(),u=Qv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const p=o.join("");q(Ze,`Creating RPC '${e}' stream ${i}: ${p}`,c);const g=a.createWebChannel(p,c);let _=!1,R=!1;const P=new KR({Io:O=>{R?q(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(_||(q(Ze,`Opening RPC '${e}' stream ${i} transport.`),g.open(),_=!0),q(Ze,`RPC '${e}' stream ${i} sending:`,O),g.send(O))},To:()=>g.close()}),D=(O,S,w)=>{O.listen(S,A=>{try{w(A)}catch(M){setTimeout(()=>{throw M},0)}})};return D(g,gs.EventType.OPEN,()=>{R||(q(Ze,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),D(g,gs.EventType.CLOSE,()=>{R||(R=!0,q(Ze,`RPC '${e}' stream ${i} transport closed`),P.So())}),D(g,gs.EventType.ERROR,O=>{R||(R=!0,Ri(Ze,`RPC '${e}' stream ${i} transport errored:`,O),P.So(new H(L.UNAVAILABLE,"The operation could not be completed")))}),D(g,gs.EventType.MESSAGE,O=>{var S;if(!R){const w=O.data[0];he(!!w);const A=w,M=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(M){q(Ze,`RPC '${e}' stream ${i} received error:`,M);const j=M.status;let z=function(v){const T=Pe[v];if(T!==void 0)return E0(T)}(j),E=M.message;z===void 0&&(z=L.INTERNAL,E="Unknown error status: "+j+" with message "+M.message),R=!0,P.So(new H(z,E)),g.close()}else q(Ze,`RPC '${e}' stream ${i} received:`,w),P.bo(w)}}),D(u,Gv.STAT_EVENT,O=>{O.stat===ch.PROXY?q(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===ch.NOPROXY&&q(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function oc(){return typeof document<"u"?document:null}/**
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
 */function Kl(t){return new iR(t,!0)}/**
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
 */class V0{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class O0{constructor(e,n,r,i,o,a,u,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new V0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QR extends O0{constructor(e,n,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=aR(this.serializer,e),r=function(o){if(!("targetChange"in o))return J.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?J.min():a.readTime?tn(a.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=wh(this.serializer),n.addTarget=function(o,a){let u;const c=a.target;if(u=ph(c)?{documents:cR(o,c)}:{query:hR(o,c)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=S0(o,a.resumeToken);const d=yh(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(J.min())>0){u.readTime=yl(o,a.snapshotVersion.toTimestamp());const d=yh(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=fR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=wh(this.serializer),n.removeTarget=e,this.a_(n)}}class YR extends O0{constructor(e,n,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=uR(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=wh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lR(this.serializer,r))};this.a_(n)}}/**
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
 */class XR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,_h(n,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,_h(n,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(L.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class JR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(An(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class ZR{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{zr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=Z(c);d.L_.add(4),await So(d),d.q_.set("Unknown"),d.L_.delete(4),await Gl(d)}(this))})}),this.q_=new JR(r,i)}}async function Gl(t){if(zr(t))for(const e of t.B_)await e(!0)}async function So(t){for(const e of t.B_)await e(!1)}function M0(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Xd(n)?Yd(n):Bi(n).r_()&&Qd(n,e))}function Gd(t,e){const n=Z(t),r=Bi(n);n.N_.delete(e),r.r_()&&L0(n,e),n.N_.size===0&&(r.r_()?r.o_():zr(n)&&n.q_.set("Unknown"))}function Qd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bi(t).A_(e)}function L0(t,e){t.Q_.xe(e),Bi(t).R_(e)}function Yd(t){t.Q_=new eR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Bi(t).start(),t.q_.v_()}function Xd(t){return zr(t)&&!Bi(t).n_()&&t.N_.size>0}function zr(t){return Z(t).L_.size===0}function b0(t){t.Q_=void 0}async function eC(t){t.q_.set("Online")}async function tC(t){t.N_.forEach((e,n)=>{Qd(t,e)})}async function nC(t,e){b0(t),Xd(t)?(t.q_.M_(e),Yd(t)):t.q_.set("Unknown")}async function rC(t,e,n){if(t.q_.set("Online"),e instanceof I0&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _l(t,r)}else if(e instanceof Da?t.Q_.Ke(e):e instanceof T0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await D0(t.localStore);n.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,d)=>{const p=o.N_.get(c);if(!p)return;o.N_.set(c,p.withResumeToken(We.EMPTY_BYTE_STRING,p.snapshotVersion)),L0(o,c);const g=new Hn(p.target,c,d,p.sequenceNumber);Qd(o,g)}),o.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await _l(t,r)}}async function _l(t,e,n){if(!wo(e))throw e;t.L_.add(1),await So(t),t.q_.set("Offline"),n||(n=()=>D0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Gl(t)})}function F0(t,e){return e().catch(n=>_l(t,n,e))}async function Ql(t){const e=Z(t),n=lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;iC(e);)try{const i=await zR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,sC(e,i)}catch(i){await _l(e,i)}U0(e)&&j0(e)}function iC(t){return zr(t)&&t.O_.length<10}function sC(t,e){t.O_.push(e);const n=lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function U0(t){return zr(t)&&!lr(t).n_()&&t.O_.length>0}function j0(t){lr(t).start()}async function oC(t){lr(t).p_()}async function aC(t){const e=lr(t);for(const n of t.O_)e.m_(n.mutations)}async function lC(t,e,n){const r=t.O_.shift(),i=Bd.from(r,e,n);await F0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ql(t)}async function uC(t,e){e&&lr(t).V_&&await async function(r,i){if(function(a){return Xk(a)&&a!==L.ABORTED}(i.code)){const o=r.O_.shift();lr(r).s_(),await F0(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ql(r)}}(t,e),U0(t)&&j0(t)}async function Ig(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=zr(n);n.L_.add(3),await So(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Gl(n)}async function cC(t,e){const n=Z(t);e?(n.L_.delete(2),await Gl(n)):e||(n.L_.add(2),await So(n),n.q_.set("Unknown"))}function Bi(t){return t.K_||(t.K_=function(n,r,i){const o=Z(n);return o.w_(),new QR(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:eC.bind(null,t),Ro:tC.bind(null,t),mo:nC.bind(null,t),d_:rC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Xd(t)?Yd(t):t.q_.set("Unknown")):(await t.K_.stop(),b0(t))})),t.K_}function lr(t){return t.U_||(t.U_=function(n,r,i){const o=Z(n);return o.w_(),new YR(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:oC.bind(null,t),mo:uC.bind(null,t),f_:aC.bind(null,t),g_:lC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ql(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Jd{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const a=Date.now()+r,u=new Jd(e,n,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zd(t,e){if(An("AsyncQueue",`${e}: ${t}`),wo(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class _i{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=ys(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new _i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Sg{constructor(){this.W_=new Se(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Di{constructor(e,n,r,i,o,a,u,c,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const a=[];return n.forEach(u=>{a.push({type:0,doc:u})}),new Di(e,n,_i.emptySet(n),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class hC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class dC{constructor(){this.queries=Ag(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),o=i.queries;i.queries=Ag(),o.forEach((a,u)=>{for(const c of u.j_)c.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function Ag(){return new zi(t=>u0(t),Bl)}async function fC(t,e){const n=Z(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new hC,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const u=Zd(a,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(u)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&ef(n)}async function pC(t,e){const n=Z(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mC(t,e){const n=Z(t);let r=!1;for(const i of e){const o=i.query,a=n.queries.get(o);if(a){for(const u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&ef(n)}function gC(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function ef(t){t.Y_.forEach(e=>{e.next()})}var Th,kg;(kg=Th||(Th={})).ea="default",kg.Cache="cache";class yC{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Di(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Th.Cache}}/**
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
 */class z0{constructor(e){this.key=e}}class B0{constructor(e){this.key=e}}class _C{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=c0(e),this.Ra=new _i(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Sg,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const _=i.get(p),R=$l(this.query,g)?g:null,P=!!_&&this.mutatedKeys.has(_.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let O=!1;_&&R?_.data.isEqual(R.data)?P!==D&&(r.track({type:3,doc:R}),O=!0):this.ga(_,R)||(r.track({type:2,doc:R}),O=!0,(c&&this.Aa(R,c)>0||d&&this.Aa(R,d)<0)&&(u=!0)):!_&&R?(r.track({type:0,doc:R}),O=!0):_&&!R&&(r.track({type:1,doc:_}),O=!0,(c||d)&&(u=!0)),O&&(R?(a=a.add(R),o=D?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,g)=>function(R,P){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return D(R)-D(P)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),i=i!=null&&i;const u=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,d=c!==this.Ea;return this.Ea=c,a.length!==0||d?{snapshot:new Di(this.query,e.Ra,o,a,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Sg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new B0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new z0(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Di.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wC{constructor(e){this.key=e,this.va=!1}}class EC{constructor(e,n,r,i,o,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new zi(u=>u0(u),Bl),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(W.comparator),this.Na=new Map,this.La=new qd,this.Ba={},this.ka=new Map,this.qa=Ni.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function TC(t,e,n=!0){const r=G0(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await $0(r,e,n,!0),i}async function IC(t,e){const n=G0(t);await $0(n,e,!0,!1)}async function $0(t,e,n,r){const i=await BR(t.localStore,en(e)),o=i.targetId,a=t.sharedClientState.addLocalQueryTarget(o,n);let u;return r&&(u=await SC(t,e,o,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&M0(t.remoteStore,i),u}async function SC(t,e,n,r,i){t.Ka=(g,_,R)=>async function(D,O,S,w){let A=O.view.ma(S);A.ns&&(A=await wg(D.localStore,O.query,!1).then(({documents:E})=>O.view.ma(E,A)));const M=w&&w.targetChanges.get(O.targetId),j=w&&w.targetMismatches.get(O.targetId)!=null,z=O.view.applyChanges(A,D.isPrimaryClient,M,j);return Cg(D,O.targetId,z.wa),z.snapshot}(t,g,_,R);const o=await wg(t.localStore,e,!0),a=new _C(e,o.Ts),u=a.ma(o.documents),c=Io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=a.applyChanges(u,t.isPrimaryClient,c);Cg(t,n,d.wa);const p=new vC(e,n,a);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function AC(t,e,n){const r=Z(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!Bl(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Eh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Gd(r.remoteStore,i.targetId),Ih(r,i.targetId)}).catch(vo)):(Ih(r,i.targetId),await Eh(r.localStore,i.targetId,!0))}async function kC(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gd(n.remoteStore,r.targetId))}async function RC(t,e,n){const r=OC(t);try{const i=await function(a,u){const c=Z(a),d=Oe.now(),p=u.reduce((R,P)=>R.add(P.key),te());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=kn(),D=te();return c.cs.getEntries(R,p).next(O=>{P=O,P.forEach((S,w)=>{w.isValidDocument()||(D=D.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,P)).next(O=>{g=O;const S=[];for(const w of u){const A=Wk(w,g.get(w.key).overlayedDocument);A!=null&&S.push(new dr(w.key,A,t0(A.value.mapValue),Bt.exists(!0)))}return c.mutationQueue.addMutationBatch(R,d,S,u)}).next(O=>{_=O;const S=O.applyToLocalDocumentSet(g,D);return c.documentOverlayCache.saveOverlays(R,O.batchId,S)})}).then(()=>({batchId:_.batchId,changes:d0(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let d=a.Ba[a.currentUser.toKey()];d||(d=new Se(le)),d=d.insert(u,c),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,n),await Ao(r,i.changes),await Ql(r.remoteStore)}catch(i){const o=Zd(i,"Failed to persist write");n.reject(o)}}async function H0(t,e){const n=Z(t);try{const r=await UR(n.localStore,e);e.targetChanges.forEach((i,o)=>{const a=n.Na.get(o);a&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?he(a.va):i.removedDocuments.size>0&&(he(a.va),a.va=!1))}),await Ao(n,r,e)}catch(r){await vo(r)}}function Rg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=Z(a);c.onlineState=u;let d=!1;c.queries.forEach((p,g)=>{for(const _ of g.j_)_.Z_(u)&&(d=!0)}),d&&ef(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CC(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let a=new Se(W.comparator);a=a.insert(o,nt.newNoDocument(o,J.min()));const u=te().add(o),c=new Wl(J.min(),new Map,new Se(le),a,u);await H0(r,c),r.Oa=r.Oa.remove(o),r.Na.delete(e),tf(r)}else await Eh(r.localStore,e,!1).then(()=>Ih(r,e,n)).catch(vo)}async function PC(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await FR(n.localStore,e);W0(n,r,null),q0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ao(n,i)}catch(i){await vo(i)}}async function xC(t,e,n){const r=Z(t);try{const i=await function(a,u){const c=Z(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return c.mutationQueue.lookupMutationBatch(d,u).next(g=>(he(g!==null),p=g.keys(),c.mutationQueue.removeMutationBatch(d,g))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>c.localDocuments.getDocuments(d,p))})}(r.localStore,e);W0(r,e,n),q0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ao(r,i)}catch(i){await vo(i)}}function q0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function W0(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||K0(t,r)})}function K0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Gd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),tf(t))}function Cg(t,e,n){for(const r of n)r instanceof z0?(t.La.addReference(r.key,e),NC(t,r)):r instanceof B0?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||K0(t,r.key)):Y()}function NC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),tf(t))}function tf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new wC(n)),t.Oa=t.Oa.insert(n,r),M0(t.remoteStore,new Hn(en(Ud(n.path)),r,"TargetPurposeLimboResolution",Vd.oe))}}async function Ao(t,e,n){const r=Z(t),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,c)=>{a.push(r.Ka(c,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(c.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Kd.Wi(c.targetId,d);o.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(c,d){const p=Z(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>b.forEach(d,_=>b.forEach(_.$i,R=>p.persistence.referenceDelegate.addReference(g,_.targetId,R)).next(()=>b.forEach(_.Ui,R=>p.persistence.referenceDelegate.removeReference(g,_.targetId,R)))))}catch(g){if(!wo(g))throw g;q("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const _=g.targetId;if(!g.fromCache){const R=p.os.get(_),P=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(P);p.os=p.os.insert(_,D)}}}(r.localStore,o))}async function DC(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await N0(n.localStore,e);n.currentUser=e,function(o,a){o.ka.forEach(u=>{u.forEach(c=>{c.reject(new H(L.CANCELLED,a))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ao(n,r.hs)}}function VC(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const o=n.Ma.get(e);if(!o)return i;for(const a of o){const u=n.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function G0(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=H0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CC.bind(null,e),e.Ca.d_=mC.bind(null,e.eventManager),e.Ca.$a=gC.bind(null,e.eventManager),e}function OC(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xC.bind(null,e),e}class vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return bR(this.persistence,new MR,e.initialUser,this.serializer)}Ga(e){return new DR(Wd.Zr,this.serializer)}Wa(e){return new HR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vl.provider={build:()=>new vl};class Sh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DC.bind(null,this.syncEngine),await cC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dC}()}createDatastore(e){const n=Kl(e.databaseInfo.databaseId),r=function(o){return new GR(o)}(e.databaseInfo);return function(o,a,u,c){return new XR(o,a,u,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,a,u){return new ZR(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,n=>Rg(this.syncEngine,n,0),function(){return Tg.D()?new Tg:new qR}())}createSyncEngine(e,n){return function(i,o,a,u,c,d,p){const g=new EC(i,o,a,u,c,d);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=Z(i);q("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await So(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Sh.provider={build:()=>new Sh};/**
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
 *//**
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
 */class MC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class LC{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Jv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ac(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await N0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bC(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ig(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ig(e.remoteStore,i)),t._onlineComponents=e}async function bC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await ac(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ri("Error using user provided cache. Falling back to memory cache: "+n),await ac(t,new vl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await ac(t,new vl);return t._offlineComponents}async function Q0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Pg(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Pg(t,new Sh))),t._onlineComponents}function FC(t){return Q0(t).then(e=>e.syncEngine)}async function xg(t){const e=await Q0(t),n=e.eventManager;return n.onListen=TC.bind(null,e.syncEngine),n.onUnlisten=AC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=IC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=kC.bind(null,e.syncEngine),n}/**
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
 */function Y0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ng=new Map;/**
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
 */function X0(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UC(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dg(t){if(!W.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vg(t){if(W.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yl(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Og{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Y0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Og({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Og(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ek;switch(r.type){case"firstParty":return new ik(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ng.get(n);r&&(q("ComponentProvider","Removing Datastore"),Ng.delete(n),r.terminate())}(this),Promise.resolve()}}function jC(t,e,n,r={}){var i;const o=(t=nr(t,Xl))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,c;if(typeof r.mockUserToken=="string")u=r.mockUserToken,c=et.MOCK_USER;else{u=RI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new et(d)}t._authCredentials=new tk(new Xv(u,c))}}/**
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
 */class $i{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $i(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class rr extends $i{constructor(e,n,r){super(e,n,Ud(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new W(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function nf(t,e,...n){if(t=qe(t),X0("collection","path",e),t instanceof Xl){const r=_e.fromString(e,...n);return Vg(r),new rr(t,null,r)}{if(!(t instanceof _t||t instanceof rr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Vg(r),new rr(t.firestore,null,r)}}function rf(t,e,...n){if(t=qe(t),arguments.length===1&&(e=Jv.newId()),X0("doc","path",e),t instanceof Xl){const r=_e.fromString(e,...n);return Dg(r),new _t(t,null,new W(r))}{if(!(t instanceof _t||t instanceof rr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Dg(r),new _t(t.firestore,t instanceof rr?t.converter:null,new W(r))}}/**
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
 */class Mg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new V0(this,"async_queue_retry"),this.Vu=()=>{const r=oc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Rr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw An("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Jd.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Lg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class Vi extends Xl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Mg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mg(e),this._firestoreClient=void 0,await e}}}function zC(t,e){const n=typeof t=="object"?t:cv(),r=typeof t=="string"?t:"(default)",i=Td(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=AI("firestore");o&&jC(i,...o)}return i}function J0(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BC(t),t._firestoreClient}function BC(t){var e,n,r;const i=t._freezeSettings(),o=function(u,c,d,p){return new yk(u,c,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Y0(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new LC(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(We.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oi(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Jl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zl{constructor(e){this._methodName=e}}/**
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
 */class sf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const $C=/^__.*__$/;class HC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}class Z0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ew(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class af{constructor(e,n,r,i,o,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return wl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ew(this.Cu)&&$C.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class qC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kl(e)}Qu(e,n,r,i=!1){return new af({Cu:e,methodName:n,qu:r,path:ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lf(t){const e=t._freezeSettings(),n=Kl(t._databaseId);return new qC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WC(t,e,n,r,i,o={}){const a=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);cf("Data must be an object, but it was:",a,r);const u=tw(r,a);let c,d;if(o.merge)c=new Tt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const g of o.mergeFields){const _=Ah(e,g,n);if(!a.contains(_))throw new H(L.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);rw(p,_)||p.push(_)}c=new Tt(p),d=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,d=a.fieldTransforms;return new HC(new ft(u),c,d)}class eu extends Zl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eu}}class uf extends Zl{_toFieldTransform(e){return new Bk(e.path,new ro)}isEqual(e){return e instanceof uf}}function KC(t,e,n,r){const i=t.Qu(1,e,n);cf("Data must be an object, but it was:",i,r);const o=[],a=ft.empty();jr(r,(c,d)=>{const p=hf(e,c,n);d=qe(d);const g=i.Nu(p);if(d instanceof eu)o.push(p);else{const _=ko(d,g);_!=null&&(o.push(p),a.set(p,_))}});const u=new Tt(o);return new Z0(a,u,i.fieldTransforms)}function GC(t,e,n,r,i,o){const a=t.Qu(1,e,n),u=[Ah(e,r,n)],c=[i];if(o.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<o.length;_+=2)u.push(Ah(e,o[_])),c.push(o[_+1]);const d=[],p=ft.empty();for(let _=u.length-1;_>=0;--_)if(!rw(d,u[_])){const R=u[_];let P=c[_];P=qe(P);const D=a.Nu(R);if(P instanceof eu)d.push(R);else{const O=ko(P,D);O!=null&&(d.push(R),p.set(R,O))}}const g=new Tt(d);return new Z0(p,g,a.fieldTransforms)}function QC(t,e,n,r=!1){return ko(n,t.Qu(r?4:3,e))}function ko(t,e){if(nw(t=qe(t)))return cf("Unsupported field value:",e,t),tw(t,e);if(t instanceof Zl)return function(r,i){if(!ew(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let c=ko(u,i.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Uk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Oe.fromDate(r);return{timestampValue:yl(i.serializer,o)}}if(r instanceof Oe){const o=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yl(i.serializer,o)}}if(r instanceof sf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oi)return{bytesValue:S0(i.serializer,r._byteString)};if(r instanceof _t){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Hd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof of)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.Bu("VectorValues must only contain numeric values.");return jd(u.serializer,c)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Yl(r)}`)}(t,e)}function tw(t,e){const n={};return Zv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,(r,i)=>{const o=ko(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function nw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof sf||t instanceof Oi||t instanceof _t||t instanceof Zl||t instanceof of)}function cf(t,e,n){if(!nw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yl(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ah(t,e,n){if((e=qe(e))instanceof Jl)return e._internalPath;if(typeof e=="string")return hf(t,e);throw wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const YC=new RegExp("[~\\*/\\[\\]]");function hf(t,e,n){if(e.search(YC)>=0)throw wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jl(...e.split("."))._internalPath}catch{throw wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wl(t,e,n,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(o||a)&&(c+=" (found",o&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new H(L.INVALID_ARGUMENT,u+t+c)}function rw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iw{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XC extends iw{data(){return super.data()}}function sw(t,e){return typeof e=="string"?hf(t,e):e instanceof Jl?e._internalPath:e._delegate._internalPath}/**
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
 */function JC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class df{}class ZC extends df{}function eP(t,e,...n){let r=[];e instanceof df&&r.push(e),r=r.concat(n),function(o){const a=o.filter(c=>c instanceof pf).length,u=o.filter(c=>c instanceof ff).length;if(a>1||a>0&&u>0)throw new H(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ff extends ZC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ff(e,n,r)}_apply(e){const n=this._parse(e);return ow(e._query,n),new $i(e.firestore,e.converter,mh(e._query,n))}_parse(e){const n=lf(e.firestore);return function(o,a,u,c,d,p,g){let _;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new H(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Fg(g,p);const R=[];for(const P of g)R.push(bg(c,o,P));_={arrayValue:{values:R}}}else _=bg(c,o,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Fg(g,p),_=QC(u,a,g,p==="in"||p==="not-in");return Ne.create(d,p,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class pf extends df{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new pf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let a=i;const u=o.getFlattenedFilters();for(const c of u)ow(a,c),a=mh(a,c)}(e._query,n),new $i(e.firestore,e.converter,mh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function bg(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new H(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!l0(e)&&n.indexOf("/")!==-1)throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!W.isDocumentKey(r))throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rg(t,new W(r))}if(n instanceof _t)return rg(t,n._key);throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yl(n)}.`)}function Fg(t,e){if(!Array.isArray(t)||t.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ow(t,e){const n=function(i,o){for(const a of i)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class tP{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return jr(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Re(a.doubleValue));return new of(o)}convertGeoPoint(e){return new sf(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Md(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const n=ar(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);he(x0(r));const i=new to(r.get(1),r.get(3)),o=new W(r.popFirst(5));return i.isEqual(n)||An(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function nP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aw extends iw{constructor(e,n,r,i,o,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Va extends aw{data(e={}){return super.data(e)}}class rP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new vs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new Va(i._firestore,i._userDataWriter,u.doc.key,u.doc,new vs(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const c=new Va(i._firestore,i._userDataWriter,u.doc.key,u.doc,new vs(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:iP(u.type),doc:c,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class lw extends tP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function sP(t,e,n,...r){t=nr(t,_t);const i=nr(t.firestore,Vi),o=lf(i);let a;return a=typeof(e=qe(e))=="string"||e instanceof Jl?GC(o,"updateDoc",t._key,e,n,r):KC(o,"updateDoc",t._key,e),mf(i,[a.toMutation(t._key,Bt.exists(!0))])}function oP(t){return mf(nr(t.firestore,Vi),[new zd(t._key,Bt.none())])}function uw(t,e){const n=nr(t.firestore,Vi),r=rf(t),i=nP(t.converter,e);return mf(n,[WC(lf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function aP(t,...e){var n,r,i;t=qe(t);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Lg(e[a])||(o=e[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Lg(e[a])){const g=e[a];e[a]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let c,d,p;if(t instanceof _t)d=nr(t.firestore,Vi),p=Ud(t._key.path),c={next:g=>{e[a]&&e[a](lP(d,t,g))},error:e[a+1],complete:e[a+2]};else{const g=nr(t,$i);d=nr(g.firestore,Vi),p=g._query;const _=new lw(d);c={next:R=>{e[a]&&e[a](new rP(d,_,g,R))},error:e[a+1],complete:e[a+2]},JC(t._query)}return function(_,R,P,D){const O=new MC(D),S=new yC(R,O,P);return _.asyncQueue.enqueueAndForget(async()=>fC(await xg(_),S)),()=>{O.Za(),_.asyncQueue.enqueueAndForget(async()=>pC(await xg(_),S))}}(J0(d),p,u,c)}function mf(t,e){return function(r,i){const o=new Rr;return r.asyncQueue.enqueueAndForget(async()=>RC(await FC(r),i,o)),o.promise}(J0(t),e)}function lP(t,e,n){const r=n.docs.get(e._key),i=new lw(t);return new aw(t,i,e._key,r,new vs(n.hasPendingWrites,n.fromCache),e.converter)}function El(){return new uf("serverTimestamp")}(function(e,n=!0){(function(i){ji=i})(Fi),ki(new Vr("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Vi(new nk(r.getProvider("auth-internal")),new ok(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),tr(Jm,"4.7.3",e),tr(Jm,"4.7.3","esm2017")})();/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ke=(t,e)=>{const n=ue.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:u="",children:c,...d},p)=>ue.createElement("svg",{ref:p,...uP,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${cP(t)}`,u].join(" "),...d},[...e.map(([g,_])=>ue.createElement(g,_)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=Ke("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=Ke("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=Ke("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=Ke("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=Ke("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=Ke("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=Ke("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=Ke("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=Ke("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=Ke("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=Ke("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=Ke("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=Ke("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=Ke("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=Ke("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=Ke("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=Ke("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),TP={apiKey:"AIzaSyCEcu-um43cfv89xX8znl2DYinlR8KHrlU",authDomain:"srt-people.firebaseapp.com",projectId:"srt-people",storageBucket:"srt-people.firebasestorage.app",messagingSenderId:"246383141664",appId:"1:246383141664:web:bc0f03928643b866f3ad45"},dw=uv(TP),lc=JA(dw),tu=zC(dw),Oa="srt-people-prod",IP=()=>nf(tu,"artifacts",Oa,"public","data","srt_members"),SP=`1 54 남 양갑섭 금남면
2 57 남 신웅철 천안
3 60 남 김만환 한솔동
4 60 남 정흠진 해밀동
5 61 남 김천식 나성동
6 61 남 이일상 대전
7 62 남 민경직 다정동
8 62 남 최부웅 대전
9 63 남 민경일 세종
10 63 남 송시범 세종
11 63 남 우상돈 도담동
12 63 남 차창석 나성동
13 63 남 홍성호 한솔동
14 64 남 김성호 아름동
15 64 남 오동영 금남면
16 65 남 최우혁 오송
17 66 남 김동주 나성동
18 66 남 채승필 조치원
19 68 남 임남규 오송
20 69 남 김명국 도담동
21 69 여 김자영 새롬동
22 69 남 박종문 보람동
23 69 여 서문정화 어진동
24 69 남 이석휘 아름동
25 69 남 임주열 소담동
26 69 여 황경연 해밀동
27 70 남 권길호 도담동
28 70 남 김수현 새롬동
29 70 남 김유성 한솔동
30 70 남 김형태 도담동
31 70 남 노재호 한솔동
32 70 여 박진희 대평동
33 70 여 서정화 보람동
34 70 여 신명순 다정동
35 70 남 이용문 보람동
36 70 남 이중원 청주
37 71 남 김기항 고운동
38 71 남 김덕겸 새롬동
39 71 남 김상남 공주
40 71 여 양승란 아름동
41 71 여 이신영 한솔동
42 71 여 이춘화 새롬동
43 71 남 이현배 나성동
44 71 남 장혁동 계룡시
45 71 남 전세환 새롬동
46 71 남 주환종 한솔동
47 72 남 김병찬 새롬동
48 72 남 김연갑 종촌동
49 72 여 김점옥 새롬동
50 72 남 박재곤 고운동
51 72 여 서현미 다정동
52 72 남 신영섭 한솔동
53 72 남 엄주언 보람동
54 72 남 윤여홍 소담동
55 72 여 이윤희 새롬동
56 72 남 이증희 보람동
57 72 남 정웅호 반곡동
58 72 남 정지철 나성동
59 72 남 조남수 둔곡동
60 73 남 김용민 아름동
61 73 남 김재산 고운동
62 73 남 도재협 고운동
63 73 여 방희선 보람동
64 73 남 서주식 새롬동
65 73 남 신기섭 아름동
66 73 남 안길석 소담동
67 73 여 윤수정 고운동
68 73 남 윤오중 공주
69 73 여 윤희순 조치원
70 73 여 이경민 소담동
71 73 남 이성관 도담동
72 73 여 이윤경 소담동
73 73 남 임정식 보람동
74 73 남 천기우 대평동
75 73 남 최광영 도담동
76 74 여 김미영 한솔동
77 74 여 김성옥 대전
78 74 남 김수완 조치원
79 74 여 김영아 나성동
80 74 남 김용호 광명
81 74 여 김운선 청주
82 74 여 김유미 아름동
83 74 여 김은희 도담동
84 74 남 김호종 다정동
85 74 남 민병구 관평동
86 74 남 서한석 한솔동
87 74 여 송부자 종촌동
88 74 남 이병희 반곡동
89 74 여 이정연 종촌동
90 74 남 이진 대전
91 74 남 이환혁 보람동
92 74 여 이효실 종촌동
93 75 남 김병식 대전
94 75 여 김준희 새롬동
95 75 남 유창우 종촌동
96 75 남 이희연 고운동
97 75 남 최승욱 새롬동
98 76 남 곽비룡 도담동
99 76 여 김민재 다정동
100 76 남 박재성 아름동
101 76 여 방성경 대전
102 76 여 백수미 종촌동
103 76 남 손수돈 종촌동
104 76 여 유경희 보람동
105 76 남 이병찬 어진동
106 76 남 이연규 새롬동
107 76 남 최정훈 종촌동
108 76 여 허현정 도담동
109 77 여 강은영 새롬동
110 77 남 김광진 다정동
111 77 여 김미화 새롬동
112 77 남 김종승 새롬동
113 77 여 류영덕 아름동
114 77 여 박명선 고운동
115 77 여 박은정 고운동
116 77 남 서인수 다정동
117 77 남 손홍기 다정동
118 77 여 송채한 어진동
119 77 남 신현규 대평동
120 77 남 이용구 논산
121 77 남 이의명 보람동
122 77 여 전미옥 대전
123 77 남 정찬진 아름동
124 77 남 조기욱 한솔동
125 77 남 주성해 종촌동
126 77 여 표영숙 새롬동
127 77 여 홍수연 봉명동
128 78 남 김정남 한솔동
129 78 여 김희연 다정동
130 78 여 마세정 종촌동
131 78 남 박무영 아름동
132 78 남 박재영 해밀동
133 78 남 박지원 소담동
134 78 남 소병득 새롬동
135 78 남 안지훈 종촌동
136 78 여 윤은정 도담동
137 78 남 이상훈 도담동
138 78 남 이승철 나성동
139 78 여 전영선 다정동
140 78 여 천미혜 한솔동
141 78 남 한태희 해밀동
142 79 남 강동현 종촌동
143 79 남 강전문 종촌동
144 79 여 고정현 새롬동
145 79 남 권수안 대평동
146 79 여 김남희 한솔동
147 79 남 김민기 대전
148 79 남 김병기 새롬동
149 79 남 김성균 도담동
150 79 여 김외선 어진동
151 79 남 김용섭 도담동
152 79 남 박범진 공주
153 79 남 박찬성 한솔동
154 79 남 변영수 새롬동
155 79 남 성규동 종촌동
156 79 남 신철 한솔동
157 79 남 오길선 대평동
158 79 남 오완목 논산
159 79 남 윤종성 반곡동
160 79 남 윤태수 종촌동
161 79 남 이준엽 대평동
162 79 남 임종오 도담동
163 79 남 전찬규 고운동
164 79 남 정덕수 연서면
165 79 여 조원경 종촌동
166 79 남 조홍석 새롬동
167 79 남 진중현 나성동
168 79 여 한혜수 도담동
169 80 여 강현정 도담동
170 80 남 고명백 청주
171 80 남 고찬민 아름동
172 80 남 박종희 다정동
173 80 여 전영란 아름동
174 80 여 정미 반곡동
175 80 남 정우열 도담동
176 80 여 최혜정 고운동
177 81 남 강동훈 고운동
178 81 남 고영근 대전
179 81 여 기희연 청주
180 81 남 김윤식 나성동
181 81 남 김진우 어진동
182 81 여 민수경 나성동
183 81 남 박경현 다정동
184 81 남 박성환 산울동
185 81 여 박은정 다정동
186 81 남 박종봉 보람동
187 81 남 신천은 대평동
188 81 남 양정국 아름동
189 81 여 윤혜림 보람동
190 81 남 이승준 집현동
191 81 남 이우용 아름동
192 81 여 장윤미 종촌동
193 81 여 전정화 고운동
194 81 여 전해경 새롬동
195 82 남 김성환 보람동
196 82 남 김영석 종촌동
197 82 남 김오태  
198 82 남 박창선 보람동
199 82 남 유기수 대평동
200 82 남 유기화 새롬동
201 82 남 이현진 오송
202 82 남 정한수 집현동
203 83 남 김지성 대전
204 83 남 김진용 해밀동
205 83 남 김행석 나성동
206 83 여 김현희 한솔동
207 83 남 박건우 종촌동
208 83 여 손수련 대전
209 83 남 윤종석 한솔동
210 83 남 윤호근 대전
211 83 여 이아련 다정동
212 83 남 이준우 도담동
213 83 여 임지영 세종
214 83 남 주효석 집현동
215 84 남 강수환 조치원
216 84 남 권해훈 집현동
217 84 남 김병오 집현동
218 84 여 손미연 종촌동
219 84 남 천상준 반곡동
220 84 남 허성무 대전
221 85 남 김요한 다정동
222 85 여 김유라 나성동
223 85 남 서항석 보람동
224 85 남 오성 아름동
225 85 여 이선옥 다정동
226 85 남 이진희 도담동
227 86 여 김민주 보람동
228 86 여 안태경 청주
229 86 남 이종섭 청주
230 86 남 전민규 해밀동
231 87 남 김태영 다정동
232 87 여 김한나 집현동
233 87 남 심민국 대전
234 87 남 정진우 종촌동
235 87 남 천둥 고운동
236 88 여 김소연 청주
237 88 남 안경현 계룡시
238 88 남 이진호 조치원
239 89 남 이승훈 나성동
240 89 남 임경훈 대전
241 90 남 공지환 집현동
242 90 여 오은경 부강
243 90 남 유우열 나성동
244 90 여 이은진 반곡동
245 90 남 이형우 산울동
246 91 남 김대용 보람동
247 91 여 김도운 반곡동
248 91 여 김수연 다정동
249 92 남 변성현 나성동
250 92 남 임장혁 공주
251 93 여 김송희 오송
252 94 남 김찬석 조치원
253 00 남 한상지 청주`;function AP(){var qt;const[t,e]=ue.useState(null),[n,r]=ue.useState([]),[i,o]=ue.useState(!0),[a,u]=ue.useState(""),[c,d]=ue.useState("All"),[p,g]=ue.useState("default"),[_,R]=ue.useState(!1),[P,D]=ue.useState(""),[O,S]=ue.useState(!1),[w,A]=ue.useState(!1),[M,j]=ue.useState(!1),[z,E]=ue.useState(null);ue.useEffect(()=>{sessionStorage.getItem("srt_auth")==="true"&&R(!0)},[]);const y=X=>{X.preventDefault(),P==="20251214"?(R(!0),S(!1),sessionStorage.setItem("srt_auth","true")):S(!0)};ue.useEffect(()=>{(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await FS(lc,__initial_auth_token):await VS(lc)}catch(U){console.error("Auth failed",U)}})();const oe=zS(lc,U=>{e(U)});return()=>oe()},[]),ue.useEffect(()=>{if(!t)return;const X=eP(IP()),oe=aP(X,U=>{const K=U.docs.map(G=>({id:G.id,...G.data()}));K.sort((G,de)=>{const ie=G.imageUrl||G.phone?1:0,fe=de.imageUrl||de.phone?1:0;return ie!==fe?fe-ie:(G.name||"").localeCompare(de.name||"")}),r(K),o(!1)},U=>{console.error("Firestore Error:",U),o(!1)});return()=>oe()},[t]);const v=ue.useMemo(()=>{const X=new Set(n.map(oe=>oe.region||oe.group).filter(Boolean));return["All",...Array.from(X).sort()]},[n]),T=[{value:"default",label:"기본 (이름순)"},{value:"k1",label:"1km 랭킹"},{value:"k3",label:"3km 랭킹"},{value:"k5",label:"5km 랭킹"},{value:"k10",label:"10km 랭킹"},{value:"half",label:"Half 랭킹"},{value:"full",label:"Full 랭킹"}],C=ue.useMemo(()=>{let X=n.filter(oe=>{var ie,fe,Rt,Ct;const U=a.toLowerCase(),K=((ie=oe.name)==null?void 0:ie.toLowerCase().includes(U))||((fe=oe.phone)==null?void 0:fe.includes(a))||((Rt=oe.region)==null?void 0:Rt.toLowerCase().includes(U))||((Ct=oe.birthYear)==null?void 0:Ct.includes(a)),G=oe.region||oe.group;return K&&(c==="All"||G===c)});return p!=="default"&&(X=X.filter(oe=>oe.records&&oe.records[p]&&oe.records[p].trim()!==""),X.sort((oe,U)=>{const K=oe.records[p],G=U.records[p];return K.localeCompare(G)})),X},[n,a,c,p]),x=X=>{E(X),A(!0)},I=()=>{E(null),A(!0)},ht=async X=>{if(window.confirm("정말 이 회원 정보를 삭제하시겠습니까?"))try{await oP(rf(tu,"artifacts",Oa,"public","data","srt_members",X))}catch{alert("삭제 중 오류가 발생했습니다.")}};return _?k.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-800 font-sans",children:[k.jsx("header",{className:"bg-gradient-to-r from-indigo-900 to-purple-800 text-white shadow-lg sticky top-0 z-10",children:k.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4",children:[k.jsxs("div",{className:"flex items-center space-x-3",children:[k.jsx("div",{className:"bg-white/10 p-2 rounded-full backdrop-blur-sm",children:k.jsx(Bg,{size:24,className:"text-white"})}),k.jsxs("div",{children:[k.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"SRT 동호회 마스터 DB"}),k.jsx("p",{className:"text-xs text-indigo-200",children:"2025년 정회원 리스트"})]})]}),k.jsxs("div",{className:"flex items-center space-x-2 w-full sm:w-auto",children:[k.jsxs("button",{onClick:()=>j(!0),className:"flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition backdrop-blur-sm",children:[k.jsx(cw,{size:16}),k.jsx("span",{children:"엑셀 등록"})]}),k.jsxs("button",{onClick:I,className:"flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-white text-indigo-900 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-semibold transition shadow-sm",children:[k.jsx(mP,{size:16}),k.jsx("span",{children:"신규 회원"})]})]})]})}),k.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[k.jsxs("div",{className:"mb-8 flex flex-col gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 sticky top-[80px] z-0",children:[k.jsxs("div",{className:"flex flex-col md:flex-row gap-3",children:[k.jsxs("div",{className:"relative flex-grow",children:[k.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:k.jsx(gP,{className:"h-5 w-5 text-slate-400"})}),k.jsx("input",{type:"text",className:"block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"이름, 지역(동), 00년생 검색...",value:a,onChange:X=>u(X.target.value)})]}),k.jsxs("div",{className:"relative min-w-[140px]",children:[k.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:k.jsx(fP,{className:"h-5 w-5 text-indigo-500"})}),k.jsx("select",{value:p,onChange:X=>g(X.target.value),className:`block w-full pl-10 pr-8 py-2 border rounded-lg leading-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none cursor-pointer
                  ${p!=="default"?"bg-indigo-50 border-indigo-300 text-indigo-700 font-bold":"bg-white border-slate-300 text-slate-700"}`,children:T.map(X=>k.jsx("option",{value:X.value,children:X.label},X.value))})]})]}),k.jsxs("div",{className:"flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar",children:[k.jsx(dP,{className:"h-5 w-5 text-slate-400 flex-shrink-0"}),k.jsx("div",{className:"flex space-x-2",children:v.map(X=>k.jsx("button",{onClick:()=>d(X),className:`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${c===X?"bg-indigo-100 text-indigo-800 ring-1 ring-indigo-500":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:X},X))})]})]}),k.jsxs("div",{className:"mb-6 flex items-center justify-between text-sm text-slate-500 px-1",children:[k.jsxs("span",{children:[p!=="default"?k.jsxs(k.Fragment,{children:[k.jsx("span",{className:"text-indigo-600 font-bold",children:(qt=T.find(X=>X.value===p))==null?void 0:qt.label})," 결과: "]}):"총 회원: ",k.jsx("strong",{className:"text-slate-900",children:C.length}),"명"]}),k.jsx("span",{className:"text-xs bg-slate-100 px-2 py-1 rounded hidden sm:inline-block",children:p!=="default"?"기록 순으로 정렬되었습니다.":"검색 후 본인 이름을 클릭하여 정보를 업데이트하세요."})]}),i?k.jsxs("div",{className:"text-center py-20",children:[k.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-900 mx-auto"}),k.jsx("p",{className:"mt-4 text-slate-500",children:"데이터를 불러오는 중입니다..."})]}):C.length===0?k.jsxs("div",{className:"text-center py-20 bg-white rounded-xl border border-dashed border-slate-300",children:[k.jsx(Bg,{className:"mx-auto h-12 w-12 text-slate-300"}),k.jsx("h3",{className:"mt-2 text-sm font-medium text-slate-900",children:"결과 없음"}),k.jsx("p",{className:"mt-1 text-sm text-slate-500",children:p!=="default"?"해당 거리에 등록된 기록이 없습니다.":"조건에 맞는 회원이 없거나 아직 등록되지 않았습니다."}),n.length===0&&k.jsx("button",{onClick:()=>j(!0),className:"mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition",children:"기본 데이터 불러오기"})]}):k.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:C.map((X,oe)=>k.jsx(kP,{member:X,rank:p!=="default"?oe+1:null,highlightRecord:p!=="default"?p:null,onEdit:()=>x(X),onDelete:()=>ht(X.id)},X.id))})]}),w&&k.jsx(RP,{isOpen:w,onClose:()=>A(!1),member:z,appId:Oa,groups:v}),M&&k.jsx(CP,{isOpen:M,onClose:()=>j(!1),appId:Oa})]}):k.jsx("div",{className:"min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans",children:k.jsxs("div",{className:"bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden p-8 border border-slate-200",children:[k.jsxs("div",{className:"text-center mb-8",children:[k.jsx("div",{className:"bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-700 shadow-sm",children:k.jsx(pP,{size:32})}),k.jsx("h1",{className:"text-2xl font-bold text-slate-900",children:"SRT 회원 명부"}),k.jsxs("p",{className:"text-slate-500 text-sm mt-2",children:["회원 전용 공간입니다.",k.jsx("br",{}),"공지된 비밀번호를 입력해주세요."]})]}),k.jsxs("form",{onSubmit:y,className:"space-y-4",children:[k.jsxs("div",{children:[k.jsx("input",{type:"password",value:P,onChange:X=>D(X.target.value),className:`w-full px-4 py-3 border rounded-xl focus:ring-2 outline-none transition text-center text-lg tracking-widest placeholder:tracking-normal
                   ${O?"border-red-300 focus:ring-red-200 focus:border-red-500 bg-red-50":"border-slate-300 focus:ring-indigo-200 focus:border-indigo-500 bg-slate-50"}`,placeholder:"비밀번호 입력",autoFocus:!0}),O&&k.jsx("p",{className:"text-red-500 text-xs mt-2 text-center font-medium animate-pulse",children:"비밀번호가 올바르지 않습니다."})]}),k.jsx("button",{type:"submit",className:"w-full bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-indigo-200/50",children:"입장하기"})]}),k.jsx("div",{className:"mt-8 text-center pt-6 border-t border-slate-100",children:k.jsx("p",{className:"text-xs text-slate-400",children:"SRT Sejong Running Team"})})]})})}function kP({member:t,onEdit:e,onDelete:n,highlightRecord:r,rank:i}){const o=!t.phone,a=t.records||{};let u=null,c=null;const d={k1:"1K",k3:"3K",k5:"5K",k10:"10K",half:"Half",full:"Full"};return r&&a[r]?(u=d[r],c=a[r]):a.full?(u="Full",c=a.full):a.half?(u="Half",c=a.half):a.k10&&(u="10K",c=a.k10),k.jsxs("div",{className:`bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition group relative flex flex-col justify-between
      ${o?"border-slate-200":"border-indigo-100"}
    `,children:[i&&k.jsxs("div",{className:"absolute top-0 left-0 bg-indigo-600 text-white px-3 py-1 rounded-br-xl text-sm font-bold z-10 shadow-sm",children:["#",i]}),k.jsxs("div",{children:[k.jsx("div",{className:`h-24 relative ${o?"bg-slate-100":"bg-gradient-to-r from-indigo-500 to-purple-600"}`,children:k.jsxs("div",{className:"absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1",children:[k.jsx("button",{onClick:p=>{p.stopPropagation(),e()},className:"p-1.5 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm",children:k.jsx(jg,{size:14})}),k.jsx("button",{onClick:p=>{p.stopPropagation(),n()},className:"p-1.5 bg-red-500/50 hover:bg-red-500/80 text-white rounded-full backdrop-blur-sm",children:k.jsx(_P,{size:14})})]})}),k.jsxs("div",{className:"px-5 pb-2",children:[k.jsxs("div",{className:"relative flex justify-between items-end -mt-10 mb-3",children:[k.jsxs("div",{className:"relative",children:[t.imageUrl?k.jsx("img",{src:t.imageUrl,alt:t.name,className:"h-20 w-20 rounded-full border-4 border-white object-cover shadow-sm bg-white"}):k.jsx("div",{className:`h-20 w-20 rounded-full border-4 border-white flex items-center justify-center shadow-sm 
                  ${t.gender==="여"?"bg-pink-50 text-pink-300":"bg-blue-50 text-blue-300"}`,children:k.jsx(EP,{size:32})}),k.jsx("div",{className:`absolute bottom-0 right-0 h-5 w-5 border-2 border-white rounded-full 
                ${o?"bg-slate-300":"bg-green-400"}`,title:o?"미등록":"정보 등록됨"})]}),k.jsxs("div",{className:"flex flex-col items-end",children:[k.jsx("span",{className:"mb-1 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600",children:t.birthYear?`${t.birthYear}년생`:"연도미상"}),k.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-700",children:t.region||t.group||"지역없음"})]})]}),k.jsxs("div",{className:"flex items-baseline justify-between",children:[k.jsx("h3",{className:"text-lg font-bold text-slate-900",children:t.name}),k.jsx("span",{className:"text-xs text-slate-500",children:t.gender==="여"?"여성":"남성"})]}),k.jsxs("div",{className:"mt-3 space-y-2",children:[t.phone?k.jsxs("div",{className:"flex items-center text-sm text-slate-600",children:[k.jsx(zg,{size:14,className:"mr-2 text-slate-400"}),k.jsx("a",{href:`tel:${t.phone}`,className:"hover:text-indigo-600 hover:underline font-medium",children:t.phone})]}):k.jsxs("div",{className:"flex items-center text-sm text-slate-400 italic",children:[k.jsx(zg,{size:14,className:"mr-2 opacity-50"}),k.jsx("span",{children:"연락처 미등록"})]}),u&&k.jsxs("div",{className:`flex items-center text-sm px-2 py-1.5 rounded-md mt-2 transition-colors
                ${r?"bg-indigo-600 text-white shadow-sm":"bg-amber-50 text-amber-700"}`,children:[k.jsx(vP,{size:14,className:`mr-2 ${r?"text-indigo-200":"text-amber-500"}`}),k.jsx("span",{className:"font-bold mr-1",children:u}),k.jsx("span",{className:"font-mono",children:c})]})]})]})]}),k.jsx("div",{className:"px-5 pb-5",children:k.jsx("button",{onClick:e,className:`mt-4 w-full py-2 px-4 text-sm font-medium rounded-lg border transition flex justify-center items-center
            ${o?"bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100":"bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}
          `,children:o?k.jsxs(k.Fragment,{children:[k.jsx(jg,{size:14,className:"mr-1.5"})," 정보 업데이트"]}):"정보 수정"})})]})}function RP({isOpen:t,onClose:e,member:n,appId:r,groups:i}){const[o,a]=ue.useState({name:"",phone:"",role:"",group:"",region:"",email:"",imageUrl:"",birthYear:"",gender:"남",records:{k1:"",k3:"",k5:"",k10:"",half:"",full:""}}),[u,c]=ue.useState(!1),d=ue.useRef(null);ue.useEffect(()=>{var P,D,O,S,w,A;a(n?{name:n.name||"",phone:n.phone||"",role:n.role||"회원",group:n.group||"",region:n.region||"",email:n.email||"",imageUrl:n.imageUrl||"",birthYear:n.birthYear||"",gender:n.gender||"남",records:{k1:((P=n.records)==null?void 0:P.k1)||"",k3:((D=n.records)==null?void 0:D.k3)||"",k5:((O=n.records)==null?void 0:O.k5)||"",k10:((S=n.records)==null?void 0:S.k10)||"",half:((w=n.records)==null?void 0:w.half)||"",full:((A=n.records)==null?void 0:A.full)||""}}:{name:"",phone:"",role:"회원",group:"일반",region:"",email:"",imageUrl:"",birthYear:"",gender:"남",records:{k1:"",k3:"",k5:"",k10:"",half:"",full:""}})},[n]);const p=P=>{const{name:D,value:O}=P.target;a(S=>({...S,[D]:O}))},g=P=>{const{name:D,value:O}=P.target;a(S=>({...S,records:{...S.records,[D]:O}}))},_=P=>{const D=P.target.files[0];if(D){if(D.size>1024*1024){alert("이미지 크기는 1MB 이하여야 합니다.");return}const O=new FileReader;O.onloadend=()=>{a(S=>({...S,imageUrl:O.result}))},O.readAsDataURL(D)}},R=async P=>{P.preventDefault(),c(!0);try{const D=nf(tu,"artifacts",r,"public","data","srt_members"),O={...o,group:o.region||o.group,updatedAt:El()};n?await sP(rf(D,n.id),O):await uw(D,{...O,createdAt:El()}),e()}catch(D){console.error("Save failed",D),alert("저장에 실패했습니다.")}finally{c(!1)}};return t?k.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",children:k.jsxs("div",{className:"bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fade-in-up",children:[k.jsxs("div",{className:"px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50",children:[k.jsx("h2",{className:"text-lg font-bold text-slate-800",children:n?`${n.name}님 정보 수정`:"새 회원 등록"}),k.jsx("button",{onClick:e,className:"text-slate-400 hover:text-slate-600 transition",children:k.jsx(hw,{size:20})})]}),k.jsxs("form",{onSubmit:R,className:"p-6 space-y-4 max-h-[80vh] overflow-y-auto",children:[k.jsxs("div",{className:"flex flex-col items-center justify-center mb-6",children:[k.jsxs("div",{className:"relative w-28 h-28 rounded-full border-4 border-slate-100 bg-slate-50 overflow-hidden cursor-pointer hover:border-indigo-200 transition group",onClick:()=>{var P;return(P=d.current)==null?void 0:P.click()},children:[o.imageUrl?k.jsx("img",{src:o.imageUrl,alt:"Preview",className:"w-full h-full object-cover"}):k.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center text-slate-300",children:[k.jsx(Ug,{size:32}),k.jsx("span",{className:"text-[10px] mt-1",children:"사진 추가"})]}),k.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center",children:k.jsx(Ug,{size:24,className:"text-white opacity-0 group-hover:opacity-100"})})]}),k.jsx("input",{type:"file",ref:d,className:"hidden",accept:"image/*",onChange:_})]}),k.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[k.jsxs("div",{className:"space-y-1",children:[k.jsxs("label",{className:"text-xs font-semibold text-slate-500",children:["이름 ",k.jsx("span",{className:"text-red-500",children:"*"})]}),k.jsx("input",{required:!0,name:"name",value:o.name,onChange:p,className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs font-semibold text-slate-500",children:"연락처"}),k.jsx("input",{name:"phone",value:o.phone,onChange:p,placeholder:"010-0000-0000",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"})]})]}),k.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs font-semibold text-slate-500",children:"생년(YY)"}),k.jsx("input",{name:"birthYear",value:o.birthYear,onChange:p,placeholder:"71",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs font-semibold text-slate-500",children:"성별"}),k.jsxs("select",{name:"gender",value:o.gender,onChange:p,className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white",children:[k.jsx("option",{value:"남",children:"남성"}),k.jsx("option",{value:"여",children:"여성"})]})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs font-semibold text-slate-500",children:"지역(동)"}),k.jsx("input",{name:"region",value:o.region,onChange:p,list:"region-options",placeholder:"한솔동",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"}),k.jsx("datalist",{id:"region-options",children:i.filter(P=>P!=="All").map(P=>k.jsx("option",{value:P},P))})]})]}),k.jsx("div",{className:"border-t border-slate-100 my-4"}),k.jsxs("div",{children:[k.jsxs("div",{className:"flex items-center mb-3",children:[k.jsx(yP,{className:"text-indigo-600 mr-2",size:16}),k.jsx("label",{className:"text-sm font-bold text-slate-800",children:"개인 최고 기록 (PB)"})]}),k.jsxs("div",{className:"grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl",children:[k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs text-slate-500",children:"1km"}),k.jsx("input",{name:"k1",value:o.records.k1,onChange:g,placeholder:"00:00",className:"w-full px-2 py-1.5 text-sm border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 outline-none"})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs text-slate-500",children:"3km"}),k.jsx("input",{name:"k3",value:o.records.k3,onChange:g,placeholder:"00:00",className:"w-full px-2 py-1.5 text-sm border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 outline-none"})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs text-slate-500",children:"5km"}),k.jsx("input",{name:"k5",value:o.records.k5,onChange:g,placeholder:"00:00:00",className:"w-full px-2 py-1.5 text-sm border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 outline-none"})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs text-slate-500",children:"10km"}),k.jsx("input",{name:"k10",value:o.records.k10,onChange:g,placeholder:"00:00:00",className:"w-full px-2 py-1.5 text-sm border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 outline-none"})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs text-slate-500",children:"Half Marathon"}),k.jsx("input",{name:"half",value:o.records.half,onChange:g,placeholder:"00:00:00",className:"w-full px-2 py-1.5 text-sm border border-slate-200 rounded focus:ring-1 focus:ring-indigo-500 outline-none"})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsx("label",{className:"text-xs font-semibold text-indigo-600",children:"Full Marathon"}),k.jsx("input",{name:"full",value:o.records.full,onChange:g,placeholder:"00:00:00",className:"w-full px-2 py-1.5 text-sm border-2 border-indigo-100 rounded focus:ring-1 focus:ring-indigo-500 outline-none bg-white"})]})]})]}),k.jsxs("div",{className:"pt-4 flex gap-3",children:[k.jsx("button",{type:"button",onClick:e,className:"flex-1 py-2.5 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 font-medium transition",children:"취소"}),k.jsx("button",{type:"submit",disabled:u,className:"flex-1 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium shadow-md shadow-indigo-200 transition flex justify-center items-center",children:u?"저장 중...":"저장하기"})]})]})]})}):null}function CP({isOpen:t,onClose:e,appId:n}){const[r,i]=ue.useState(""),[o,a]=ue.useState(!1),u=()=>{i(SP)},c=async()=>{if(!r.trim())return;a(!0);const d=r.trim().split(`
`);let p=0;try{const g=d.map(async _=>{const R=_.trim();if(!R)return null;const P=R.split(/\s+/);if(P.length<4)return null;const D=P[1],O=P[2],S=P[3],w=P.length>4?P[4]:"";if(!S)return null;await uw(nf(tu,"artifacts",n,"public","data","srt_members"),{name:S,birthYear:D,gender:O,region:w,group:w||"일반",role:"회원",phone:"",email:"",imageUrl:"",createdAt:El(),updatedAt:El()}),p++});await Promise.all(g),alert(`${p}명의 회원이 추가되었습니다.`),e(),i("")}catch(g){console.error(g),alert("데이터 처리 중 오류가 발생했습니다.")}finally{a(!1)}};return t?k.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",children:k.jsxs("div",{className:"bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-fade-in-up",children:[k.jsxs("div",{className:"px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50",children:[k.jsxs("div",{className:"flex items-center space-x-2",children:[k.jsx(hP,{className:"text-indigo-600",size:24}),k.jsx("h2",{className:"text-lg font-bold text-slate-800",children:"회원 DB 초기화"})]}),k.jsx("button",{onClick:e,className:"text-slate-400 hover:text-slate-600 transition",children:k.jsx(hw,{size:20})})]}),k.jsxs("div",{className:"p-6",children:[k.jsxs("div",{className:"flex justify-between items-center mb-4",children:[k.jsx("div",{className:"text-sm text-slate-600",children:"아래 텍스트 상자에 데이터를 붙여넣거나 버튼을 클릭하세요."}),k.jsxs("button",{onClick:u,className:"text-xs bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full font-bold hover:bg-indigo-100 transition flex items-center",children:[k.jsx(cw,{size:12,className:"mr-1"}),"2025 SRT 명단 불러오기"]})]}),k.jsx("textarea",{className:"w-full h-64 p-4 border border-slate-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none bg-slate-50",placeholder:"데이터 형식: 순번 생년 성별 이름 지역 (띄어쓰기 구분)",value:r,onChange:d=>i(d.target.value)}),k.jsxs("div",{className:"mt-4 flex justify-end gap-3",children:[k.jsx("button",{onClick:e,className:"px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition",children:"취소"}),k.jsx("button",{onClick:c,disabled:o||!r,className:"px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center",children:o?"처리 중...":k.jsxs(k.Fragment,{children:[k.jsx(wP,{size:18,className:"mr-2"})," 일괄 등록하기"]})})]})]})]})}):null}s;uc.createRoot(document.getElementById("root")).render(k.jsx(oE.StrictMode,{children:k.jsx(AP,{})}));
