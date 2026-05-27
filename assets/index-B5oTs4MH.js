const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-CpJuhlHF.js","assets/SectionHeading-BVkjGecf.js","assets/Projects-BgTfUPzB.js","assets/Experience-1scfnchi.js","assets/Certifications-64D_k04-.js"])))=>i.map(i=>d[i]);
var c1=Object.defineProperty;var f1=(o,e,t)=>e in o?c1(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var st=(o,e,t)=>f1(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Ty(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var rp={exports:{}},su={},sp={exports:{}},Dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function d1(){if(Ev)return Dt;Ev=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function y(O,ie,be){this.props=O,this.context=ie,this.refs=S,this.updater=be||_}y.prototype.isReactComponent={},y.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function R(O,ie,be){this.props=O,this.context=ie,this.refs=S,this.updater=be||_}var C=R.prototype=new x;C.constructor=R,E(C,y.prototype),C.isPureReactComponent=!0;var w=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function k(O,ie,be){var Q,de={},ve=null,ge=null;if(ie!=null)for(Q in ie.ref!==void 0&&(ge=ie.ref),ie.key!==void 0&&(ve=""+ie.key),ie)F.call(ie,Q)&&!D.hasOwnProperty(Q)&&(de[Q]=ie[Q]);var we=arguments.length-2;if(we===1)de.children=be;else if(1<we){for(var Le=Array(we),Je=0;Je<we;Je++)Le[Je]=arguments[Je+2];de.children=Le}if(O&&O.defaultProps)for(Q in we=O.defaultProps,we)de[Q]===void 0&&(de[Q]=we[Q]);return{$$typeof:o,type:O,key:ve,ref:ge,props:de,_owner:N.current}}function b(O,ie){return{$$typeof:o,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function T(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function H(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(be){return ie[be]})}var G=/\/+/g;function j(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?H(""+O.key):ie.toString(36)}function K(O,ie,be,Q,de){var ve=typeof O;(ve==="undefined"||ve==="boolean")&&(O=null);var ge=!1;if(O===null)ge=!0;else switch(ve){case"string":case"number":ge=!0;break;case"object":switch(O.$$typeof){case o:case e:ge=!0}}if(ge)return ge=O,de=de(ge),O=Q===""?"."+j(ge,0):Q,w(de)?(be="",O!=null&&(be=O.replace(G,"$&/")+"/"),K(de,ie,be,"",function(Je){return Je})):de!=null&&(T(de)&&(de=b(de,be+(!de.key||ge&&ge.key===de.key?"":(""+de.key).replace(G,"$&/")+"/")+O)),ie.push(de)),1;if(ge=0,Q=Q===""?".":Q+":",w(O))for(var we=0;we<O.length;we++){ve=O[we];var Le=Q+j(ve,we);ge+=K(ve,ie,be,Le,de)}else if(Le=m(O),typeof Le=="function")for(O=Le.call(O),we=0;!(ve=O.next()).done;)ve=ve.value,Le=Q+j(ve,we++),ge+=K(ve,ie,be,Le,de);else if(ve==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ge}function ue(O,ie,be){if(O==null)return O;var Q=[],de=0;return K(O,Q,"","",function(ve){return ie.call(be,ve,de++)}),Q}function J(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(be){(O._status===0||O._status===-1)&&(O._status=1,O._result=be)},function(be){(O._status===0||O._status===-1)&&(O._status=2,O._result=be)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var q={current:null},z={transition:null},te={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:z,ReactCurrentOwner:N};function I(){throw Error("act(...) is not supported in production builds of React.")}return Dt.Children={map:ue,forEach:function(O,ie,be){ue(O,function(){ie.apply(this,arguments)},be)},count:function(O){var ie=0;return ue(O,function(){ie++}),ie},toArray:function(O){return ue(O,function(ie){return ie})||[]},only:function(O){if(!T(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Dt.Component=y,Dt.Fragment=t,Dt.Profiler=r,Dt.PureComponent=R,Dt.StrictMode=n,Dt.Suspense=f,Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Dt.act=I,Dt.cloneElement=function(O,ie,be){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Q=E({},O.props),de=O.key,ve=O.ref,ge=O._owner;if(ie!=null){if(ie.ref!==void 0&&(ve=ie.ref,ge=N.current),ie.key!==void 0&&(de=""+ie.key),O.type&&O.type.defaultProps)var we=O.type.defaultProps;for(Le in ie)F.call(ie,Le)&&!D.hasOwnProperty(Le)&&(Q[Le]=ie[Le]===void 0&&we!==void 0?we[Le]:ie[Le])}var Le=arguments.length-2;if(Le===1)Q.children=be;else if(1<Le){we=Array(Le);for(var Je=0;Je<Le;Je++)we[Je]=arguments[Je+2];Q.children=we}return{$$typeof:o,type:O.type,key:de,ref:ve,props:Q,_owner:ge}},Dt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},Dt.createElement=k,Dt.createFactory=function(O){var ie=k.bind(null,O);return ie.type=O,ie},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(O){return{$$typeof:c,render:O}},Dt.isValidElement=T,Dt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:J}},Dt.memo=function(O,ie){return{$$typeof:h,type:O,compare:ie===void 0?null:ie}},Dt.startTransition=function(O){var ie=z.transition;z.transition={};try{O()}finally{z.transition=ie}},Dt.unstable_act=I,Dt.useCallback=function(O,ie){return q.current.useCallback(O,ie)},Dt.useContext=function(O){return q.current.useContext(O)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(O){return q.current.useDeferredValue(O)},Dt.useEffect=function(O,ie){return q.current.useEffect(O,ie)},Dt.useId=function(){return q.current.useId()},Dt.useImperativeHandle=function(O,ie,be){return q.current.useImperativeHandle(O,ie,be)},Dt.useInsertionEffect=function(O,ie){return q.current.useInsertionEffect(O,ie)},Dt.useLayoutEffect=function(O,ie){return q.current.useLayoutEffect(O,ie)},Dt.useMemo=function(O,ie){return q.current.useMemo(O,ie)},Dt.useReducer=function(O,ie,be){return q.current.useReducer(O,ie,be)},Dt.useRef=function(O){return q.current.useRef(O)},Dt.useState=function(O){return q.current.useState(O)},Dt.useSyncExternalStore=function(O,ie,be){return q.current.useSyncExternalStore(O,ie,be)},Dt.useTransition=function(){return q.current.useTransition()},Dt.version="18.3.1",Dt}var wv;function _g(){return wv||(wv=1,sp.exports=d1()),sp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function h1(){if(Tv)return su;Tv=1;var o=_g(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,f,h){var p,v={},m=null,_=null;h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(_=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(v[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)v[p]===void 0&&(v[p]=f[p]);return{$$typeof:e,type:c,key:m,ref:_,props:v,_owner:r.current}}return su.Fragment=t,su.jsx=u,su.jsxs=u,su}var Av;function p1(){return Av||(Av=1,rp.exports=h1()),rp.exports}var Re=p1(),nt=_g();const m1=Ty(nt);var sf={},op={exports:{}},Ai={},ap={exports:{}},lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function g1(){return Cv||(Cv=1,(function(o){function e(z,te){var I=z.length;z.push(te);e:for(;0<I;){var O=I-1>>>1,ie=z[O];if(0<r(ie,te))z[O]=te,z[I]=ie,I=O;else break e}}function t(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var te=z[0],I=z.pop();if(I!==te){z[0]=I;e:for(var O=0,ie=z.length,be=ie>>>1;O<be;){var Q=2*(O+1)-1,de=z[Q],ve=Q+1,ge=z[ve];if(0>r(de,I))ve<ie&&0>r(ge,de)?(z[O]=ge,z[ve]=I,O=ve):(z[O]=de,z[Q]=I,O=Q);else if(ve<ie&&0>r(ge,I))z[O]=ge,z[ve]=I,O=ve;else break e}}return te}function r(z,te){var I=z.sortIndex-te.sortIndex;return I!==0?I:z.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var f=[],h=[],p=1,v=null,m=3,_=!1,E=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var te=t(h);te!==null;){if(te.callback===null)n(h);else if(te.startTime<=z)n(h),te.sortIndex=te.expirationTime,e(f,te);else break;te=t(h)}}function w(z){if(S=!1,C(z),!E)if(t(f)!==null)E=!0,J(F);else{var te=t(h);te!==null&&q(w,te.startTime-z)}}function F(z,te){E=!1,S&&(S=!1,x(k),k=-1),_=!0;var I=m;try{for(C(te),v=t(f);v!==null&&(!(v.expirationTime>te)||z&&!H());){var O=v.callback;if(typeof O=="function"){v.callback=null,m=v.priorityLevel;var ie=O(v.expirationTime<=te);te=o.unstable_now(),typeof ie=="function"?v.callback=ie:v===t(f)&&n(f),C(te)}else n(f);v=t(f)}if(v!==null)var be=!0;else{var Q=t(h);Q!==null&&q(w,Q.startTime-te),be=!1}return be}finally{v=null,m=I,_=!1}}var N=!1,D=null,k=-1,b=5,T=-1;function H(){return!(o.unstable_now()-T<b)}function G(){if(D!==null){var z=o.unstable_now();T=z;var te=!0;try{te=D(!0,z)}finally{te?j():(N=!1,D=null)}}else N=!1}var j;if(typeof R=="function")j=function(){R(G)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ue=K.port2;K.port1.onmessage=G,j=function(){ue.postMessage(null)}}else j=function(){y(G,0)};function J(z){D=z,N||(N=!0,j())}function q(z,te){k=y(function(){z(o.unstable_now())},te)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){E||_||(E=!0,J(F))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return m},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(z){switch(m){case 1:case 2:case 3:var te=3;break;default:te=m}var I=m;m=te;try{return z()}finally{m=I}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,te){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=m;m=z;try{return te()}finally{m=I}},o.unstable_scheduleCallback=function(z,te,I){var O=o.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?O+I:O):I=O,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,z={id:p++,callback:te,priorityLevel:z,startTime:I,expirationTime:ie,sortIndex:-1},I>O?(z.sortIndex=I,e(h,z),t(f)===null&&z===t(h)&&(S?(x(k),k=-1):S=!0,q(w,I-O))):(z.sortIndex=ie,e(f,z),E||_||(E=!0,J(F))),z},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(z){var te=m;return function(){var I=m;m=te;try{return z.apply(this,arguments)}finally{m=I}}}})(lp)),lp}var Rv;function _1(){return Rv||(Rv=1,ap.exports=g1()),ap.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function v1(){if(bv)return Ai;bv=1;var o=_g(),e=_1();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(r[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function m(i){return f.call(v,i)?!0:f.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function _(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,d){if(s===null||typeof s>"u"||_(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function S(i,s,l,d,g,M,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=M,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new S(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new S(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new S(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new S(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new S(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new S(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new S(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new S(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new S(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,R);y[s]=new S(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,R);y[s]=new S(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,R);y[s]=new S(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new S(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new S(i,1,!1,i.toLowerCase(),null,!0,!0)});function C(i,s,l,d){var g=y.hasOwnProperty(s)?y[s]:null;(g!==null?g.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,g,d)&&(l=null),d||g===null?m(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):g.mustUseProperty?i[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,d=g.attributeNamespace,l===null?i.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),H=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),z=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var I=Object.assign,O;function ie(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var be=!1;function Q(i,s){if(!i||be)return"";be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ce){var d=ce}Reflect.construct(i,[],s)}else{try{s.call()}catch(ce){d=ce}i.call(s.prototype)}else{try{throw Error()}catch(ce){d=ce}i()}}catch(ce){if(ce&&d&&typeof ce.stack=="string"){for(var g=ce.stack.split(`
`),M=d.stack.split(`
`),A=g.length-1,B=M.length-1;1<=A&&0<=B&&g[A]!==M[B];)B--;for(;1<=A&&0<=B;A--,B--)if(g[A]!==M[B]){if(A!==1||B!==1)do if(A--,B--,0>B||g[A]!==M[B]){var W=`
`+g[A].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=A&&0<=B);break}}}finally{be=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ie(i):""}function de(i){switch(i.tag){case 5:return ie(i.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return i=Q(i.type,!1),i;case 11:return i=Q(i.type.render,!1),i;case 1:return i=Q(i.type,!0),i;default:return""}}function ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case N:return"Portal";case b:return"Profiler";case k:return"StrictMode";case j:return"Suspense";case K:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case H:return(i.displayName||"Context")+".Consumer";case T:return(i._context.displayName||"Context")+".Provider";case G:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ue:return s=i.displayName||null,s!==null?s:ve(i.type)||"Memo";case J:s=i._payload,i=i._init;try{return ve(i(s))}catch{}}return null}function ge(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function we(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Le(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Le(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,M=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(A){d=""+A,M.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Mt(i){i._valueTracker||(i._valueTracker=Je(i))}function ut(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=Le(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function et(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function X(i,s){var l=s.checked;return I({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Xt(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=we(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ht(i,s){s=s.checked,s!=null&&C(i,"checked",s,!1)}function ee(i,s){ht(i,s);var l=we(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Rt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Rt(i,s.type,we(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function We(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Rt(i,s,l){(s!=="number"||et(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var je=Array.isArray;function U(i,s,l,d){if(i=i.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<i.length;l++)g=s.hasOwnProperty("$"+i[l].value),i[l].selected!==g&&(i[l].selected=g),g&&d&&(i[l].defaultSelected=!0)}else{for(l=""+we(l),s=null,g=0;g<i.length;g++){if(i[g].value===l){i[g].selected=!0,d&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function P(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function oe(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(je(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:we(l)}}function _e(i,s){var l=we(s.value),d=we(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function me(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function pe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ne(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?pe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,Oe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,g){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function gt(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){Pe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function ot(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function it(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,g=ot(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,g):i[l]=g}}var Ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function St(i,s){if(s){if(Ve[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function at(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function V(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var De=null,fe=null,he=null;function Ie(i){if(i=Wl(i)){if(typeof De!="function")throw Error(t(280));var s=i.stateNode;s&&(s=xc(s),De(i.stateNode,i.type,s))}}function Ue(i){fe?he?he.push(i):he=[i]:fe=i}function pt(){if(fe){var i=fe,s=he;if(he=fe=null,Ie(i),s)for(i=0;i<s.length;i++)Ie(s[i])}}function Ft(i,s){return i(s)}function an(){}var ze=!1;function $e(i,s,l){if(ze)return i(s,l);ze=!0;try{return Ft(i,s,l)}finally{ze=!1,(fe!==null||he!==null)&&(an(),pt())}}function vt(i,s){var l=i.stateNode;if(l===null)return null;var d=xc(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Fe=!1;if(c)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",ct,ct),window.removeEventListener("test",ct,ct)}catch{Fe=!1}function Ze(i,s,l,d,g,M,A,B,W){var ce=Array.prototype.slice.call(arguments,3);try{s.apply(l,ce)}catch(Se){this.onError(Se)}}var lt=!1,sn=null,Et=!1,Yt=null,Sn={onError:function(i){lt=!0,sn=i}};function qt(i,s,l,d,g,M,A,B,W){lt=!1,sn=null,Ze.apply(Sn,arguments)}function $t(i,s,l,d,g,M,A,B,W){if(qt.apply(this,arguments),lt){if(lt){var ce=sn;lt=!1,sn=null}else throw Error(t(198));Et||(Et=!0,Yt=ce)}}function Lt(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function $n(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Qt(i){if(Lt(i)!==i)throw Error(t(188))}function Wn(i){var s=i.alternate;if(!s){if(s=Lt(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var g=l.return;if(g===null)break;var M=g.alternate;if(M===null){if(d=g.return,d!==null){l=d;continue}break}if(g.child===M.child){for(M=g.child;M;){if(M===l)return Qt(g),i;if(M===d)return Qt(g),s;M=M.sibling}throw Error(t(188))}if(l.return!==d.return)l=g,d=M;else{for(var A=!1,B=g.child;B;){if(B===l){A=!0,l=g,d=M;break}if(B===d){A=!0,d=g,l=M;break}B=B.sibling}if(!A){for(B=M.child;B;){if(B===l){A=!0,l=M,d=g;break}if(B===d){A=!0,d=M,l=g;break}B=B.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function L(i){return i=Wn(i),i!==null?Y(i):null}function Y(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Y(i);if(s!==null)return s;i=i.sibling}return null}var se=e.unstable_scheduleCallback,ae=e.unstable_cancelCallback,Z=e.unstable_shouldYield,Te=e.unstable_requestPaint,xe=e.unstable_now,ke=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,mt=e.unstable_UserBlockingPriority,_t=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Ot=null,Tt=null;function ln(i){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Ot,i,void 0,(i.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Vt,rt=Math.log,yr=Math.LN2;function Vt(i){return i>>>=0,i===0?32:31-(rt(i)/yr|0)|0}var Kn=64,Sr=4194304;function bn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Or(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,g=i.suspendedLanes,M=i.pingedLanes,A=l&268435455;if(A!==0){var B=A&~g;B!==0?d=bn(B):(M&=A,M!==0&&(d=bn(M)))}else A=l&~g,A!==0?d=bn(A):M!==0&&(d=bn(M));if(d===0)return 0;if(s!==0&&s!==d&&(s&g)===0&&(g=d&-d,M=s&-s,g>=M||g===16&&(M&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-wt(s),g=1<<l,d|=i[l],s&=~g;return d}function tn(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,g=i.expirationTimes,M=i.pendingLanes;0<M;){var A=31-wt(M),B=1<<A,W=g[A];W===-1?((B&l)===0||(B&d)!==0)&&(g[A]=tn(B,s)):W<=s&&(i.expiredLanes|=B),M&=~B}}function Zr(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ui(){var i=Kn;return Kn<<=1,(Kn&4194240)===0&&(Kn=64),i}function or(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function yi(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-wt(s),i[s]=l}function ic(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var g=31-wt(l),M=1<<g;s[g]=0,d[g]=-1,i[g]=-1,l&=~M}}function Cd(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-wt(l),g=1<<d;g&s|i[d]&s&&(i[d]|=s),l&=~g}}var Kt=0;function t_(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var n_,Rd,i_,r_,s_,bd=!1,rc=[],Ts=null,As=null,Cs=null,Rl=new Map,bl=new Map,Rs=[],DM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function o_(i,s){switch(i){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Cs=null;break;case"pointerover":case"pointerout":Rl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(s.pointerId)}}function Pl(i,s,l,d,g,M){return i===null||i.nativeEvent!==M?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:M,targetContainers:[g]},s!==null&&(s=Wl(s),s!==null&&Rd(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function IM(i,s,l,d,g){switch(s){case"focusin":return Ts=Pl(Ts,i,s,l,d,g),!0;case"dragenter":return As=Pl(As,i,s,l,d,g),!0;case"mouseover":return Cs=Pl(Cs,i,s,l,d,g),!0;case"pointerover":var M=g.pointerId;return Rl.set(M,Pl(Rl.get(M)||null,i,s,l,d,g)),!0;case"gotpointercapture":return M=g.pointerId,bl.set(M,Pl(bl.get(M)||null,i,s,l,d,g)),!0}return!1}function a_(i){var s=go(i.target);if(s!==null){var l=Lt(s);if(l!==null){if(s=l.tag,s===13){if(s=$n(l),s!==null){i.blockedOn=s,s_(i.priority,function(){i_(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function sc(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Ld(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);Pt=d,l.target.dispatchEvent(d),Pt=null}else return s=Wl(l),s!==null&&Rd(s),i.blockedOn=l,!1;s.shift()}return!0}function l_(i,s,l){sc(i)&&l.delete(s)}function NM(){bd=!1,Ts!==null&&sc(Ts)&&(Ts=null),As!==null&&sc(As)&&(As=null),Cs!==null&&sc(Cs)&&(Cs=null),Rl.forEach(l_),bl.forEach(l_)}function Ll(i,s){i.blockedOn===s&&(i.blockedOn=null,bd||(bd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,NM)))}function Dl(i){function s(g){return Ll(g,i)}if(0<rc.length){Ll(rc[0],i);for(var l=1;l<rc.length;l++){var d=rc[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Ts!==null&&Ll(Ts,i),As!==null&&Ll(As,i),Cs!==null&&Ll(Cs,i),Rl.forEach(s),bl.forEach(s),l=0;l<Rs.length;l++)d=Rs[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Rs.length&&(l=Rs[0],l.blockedOn===null);)a_(l),l.blockedOn===null&&Rs.shift()}var la=w.ReactCurrentBatchConfig,oc=!0;function UM(i,s,l,d){var g=Kt,M=la.transition;la.transition=null;try{Kt=1,Pd(i,s,l,d)}finally{Kt=g,la.transition=M}}function OM(i,s,l,d){var g=Kt,M=la.transition;la.transition=null;try{Kt=4,Pd(i,s,l,d)}finally{Kt=g,la.transition=M}}function Pd(i,s,l,d){if(oc){var g=Ld(i,s,l,d);if(g===null)qd(i,s,d,ac,l),o_(i,d);else if(IM(g,i,s,l,d))d.stopPropagation();else if(o_(i,d),s&4&&-1<DM.indexOf(i)){for(;g!==null;){var M=Wl(g);if(M!==null&&n_(M),M=Ld(i,s,l,d),M===null&&qd(i,s,d,ac,l),M===g)break;g=M}g!==null&&d.stopPropagation()}else qd(i,s,d,null,l)}}var ac=null;function Ld(i,s,l,d){if(ac=null,i=V(d),i=go(i),i!==null)if(s=Lt(i),s===null)i=null;else if(l=s.tag,l===13){if(i=$n(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ac=i,null}function u_(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ke()){case He:return 1;case mt:return 4;case _t:case Xe:return 16;case yt:return 536870912;default:return 16}default:return 16}}var bs=null,Dd=null,lc=null;function c_(){if(lc)return lc;var i,s=Dd,l=s.length,d,g="value"in bs?bs.value:bs.textContent,M=g.length;for(i=0;i<l&&s[i]===g[i];i++);var A=l-i;for(d=1;d<=A&&s[l-d]===g[M-d];d++);return lc=g.slice(i,1<d?1-d:void 0)}function uc(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function cc(){return!0}function f_(){return!1}function zi(i){function s(l,d,g,M,A){this._reactName=l,this._targetInst=g,this.type=d,this.nativeEvent=M,this.target=A,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(l=i[B],this[B]=l?l(M):M[B]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?cc:f_,this.isPropagationStopped=f_,this}return I(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),s}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=zi(ua),Il=I({},ua,{view:0,detail:0}),FM=zi(Il),Nd,Ud,Nl,fc=I({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Nl&&(Nl&&i.type==="mousemove"?(Nd=i.screenX-Nl.screenX,Ud=i.screenY-Nl.screenY):Ud=Nd=0,Nl=i),Nd)},movementY:function(i){return"movementY"in i?i.movementY:Ud}}),d_=zi(fc),kM=I({},fc,{dataTransfer:0}),zM=zi(kM),BM=I({},Il,{relatedTarget:0}),Od=zi(BM),HM=I({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),VM=zi(HM),GM=I({},ua,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),WM=zi(GM),XM=I({},ua,{data:0}),h_=zi(XM),YM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $M(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=qM[i])?!!s[i]:!1}function Fd(){return $M}var KM=I({},Il,{key:function(i){if(i.key){var s=YM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=uc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?jM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fd,charCode:function(i){return i.type==="keypress"?uc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?uc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),ZM=zi(KM),QM=I({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),p_=zi(QM),JM=I({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fd}),eE=zi(JM),tE=I({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),nE=zi(tE),iE=I({},fc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),rE=zi(iE),sE=[9,13,27,32],kd=c&&"CompositionEvent"in window,Ul=null;c&&"documentMode"in document&&(Ul=document.documentMode);var oE=c&&"TextEvent"in window&&!Ul,m_=c&&(!kd||Ul&&8<Ul&&11>=Ul),g_=" ",__=!1;function v_(i,s){switch(i){case"keyup":return sE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ca=!1;function aE(i,s){switch(i){case"compositionend":return x_(s);case"keypress":return s.which!==32?null:(__=!0,g_);case"textInput":return i=s.data,i===g_&&__?null:i;default:return null}}function lE(i,s){if(ca)return i==="compositionend"||!kd&&v_(i,s)?(i=c_(),lc=Dd=bs=null,ca=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return m_&&s.locale!=="ko"?null:s.data;default:return null}}var uE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y_(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!uE[i.type]:s==="textarea"}function S_(i,s,l,d){Ue(d),s=gc(s,"onChange"),0<s.length&&(l=new Id("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var Ol=null,Fl=null;function cE(i){z_(i,0)}function dc(i){var s=ma(i);if(ut(s))return i}function fE(i,s){if(i==="change")return s}var M_=!1;if(c){var zd;if(c){var Bd="oninput"in document;if(!Bd){var E_=document.createElement("div");E_.setAttribute("oninput","return;"),Bd=typeof E_.oninput=="function"}zd=Bd}else zd=!1;M_=zd&&(!document.documentMode||9<document.documentMode)}function w_(){Ol&&(Ol.detachEvent("onpropertychange",T_),Fl=Ol=null)}function T_(i){if(i.propertyName==="value"&&dc(Fl)){var s=[];S_(s,Fl,i,V(i)),$e(cE,s)}}function dE(i,s,l){i==="focusin"?(w_(),Ol=s,Fl=l,Ol.attachEvent("onpropertychange",T_)):i==="focusout"&&w_()}function hE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return dc(Fl)}function pE(i,s){if(i==="click")return dc(s)}function mE(i,s){if(i==="input"||i==="change")return dc(s)}function gE(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Mr=typeof Object.is=="function"?Object.is:gE;function kl(i,s){if(Mr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var g=l[d];if(!f.call(s,g)||!Mr(i[g],s[g]))return!1}return!0}function A_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function C_(i,s){var l=A_(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=A_(l)}}function R_(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?R_(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function b_(){for(var i=window,s=et();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=et(i.document)}return s}function Hd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function _E(i){var s=b_(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&R_(l.ownerDocument.documentElement,l)){if(d!==null&&Hd(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=l.textContent.length,M=Math.min(d.start,g);d=d.end===void 0?M:Math.min(d.end,g),!i.extend&&M>d&&(g=d,d=M,M=g),g=C_(l,M);var A=C_(l,d);g&&A&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),M>d?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var vE=c&&"documentMode"in document&&11>=document.documentMode,fa=null,Vd=null,zl=null,Gd=!1;function P_(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Gd||fa==null||fa!==et(d)||(d=fa,"selectionStart"in d&&Hd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),zl&&kl(zl,d)||(zl=d,d=gc(Vd,"onSelect"),0<d.length&&(s=new Id("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=fa)))}function hc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var da={animationend:hc("Animation","AnimationEnd"),animationiteration:hc("Animation","AnimationIteration"),animationstart:hc("Animation","AnimationStart"),transitionend:hc("Transition","TransitionEnd")},Wd={},L_={};c&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function pc(i){if(Wd[i])return Wd[i];if(!da[i])return i;var s=da[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in L_)return Wd[i]=s[l];return i}var D_=pc("animationend"),I_=pc("animationiteration"),N_=pc("animationstart"),U_=pc("transitionend"),O_=new Map,F_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ps(i,s){O_.set(i,s),a(s,[i])}for(var Xd=0;Xd<F_.length;Xd++){var Yd=F_[Xd],xE=Yd.toLowerCase(),yE=Yd[0].toUpperCase()+Yd.slice(1);Ps(xE,"on"+yE)}Ps(D_,"onAnimationEnd"),Ps(I_,"onAnimationIteration"),Ps(N_,"onAnimationStart"),Ps("dblclick","onDoubleClick"),Ps("focusin","onFocus"),Ps("focusout","onBlur"),Ps(U_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bl));function k_(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,$t(d,s,void 0,i),i.currentTarget=null}function z_(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],g=d.event;d=d.listeners;e:{var M=void 0;if(s)for(var A=d.length-1;0<=A;A--){var B=d[A],W=B.instance,ce=B.currentTarget;if(B=B.listener,W!==M&&g.isPropagationStopped())break e;k_(g,B,ce),M=W}else for(A=0;A<d.length;A++){if(B=d[A],W=B.instance,ce=B.currentTarget,B=B.listener,W!==M&&g.isPropagationStopped())break e;k_(g,B,ce),M=W}}}if(Et)throw i=Yt,Et=!1,Yt=null,i}function un(i,s){var l=s[eh];l===void 0&&(l=s[eh]=new Set);var d=i+"__bubble";l.has(d)||(B_(s,i,2,!1),l.add(d))}function jd(i,s,l){var d=0;s&&(d|=4),B_(l,i,d,s)}var mc="_reactListening"+Math.random().toString(36).slice(2);function Hl(i){if(!i[mc]){i[mc]=!0,n.forEach(function(l){l!=="selectionchange"&&(SE.has(l)||jd(l,!1,i),jd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[mc]||(s[mc]=!0,jd("selectionchange",!1,s))}}function B_(i,s,l,d){switch(u_(s)){case 1:var g=UM;break;case 4:g=OM;break;default:g=Pd}l=g.bind(null,s,l,i),g=void 0,!Fe||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),d?g!==void 0?i.addEventListener(s,l,{capture:!0,passive:g}):i.addEventListener(s,l,!0):g!==void 0?i.addEventListener(s,l,{passive:g}):i.addEventListener(s,l,!1)}function qd(i,s,l,d,g){var M=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var B=d.stateNode.containerInfo;if(B===g||B.nodeType===8&&B.parentNode===g)break;if(A===4)for(A=d.return;A!==null;){var W=A.tag;if((W===3||W===4)&&(W=A.stateNode.containerInfo,W===g||W.nodeType===8&&W.parentNode===g))return;A=A.return}for(;B!==null;){if(A=go(B),A===null)return;if(W=A.tag,W===5||W===6){d=M=A;continue e}B=B.parentNode}}d=d.return}$e(function(){var ce=M,Se=V(l),Ee=[];e:{var ye=O_.get(i);if(ye!==void 0){var Ge=Id,Ke=i;switch(i){case"keypress":if(uc(l)===0)break e;case"keydown":case"keyup":Ge=ZM;break;case"focusin":Ke="focus",Ge=Od;break;case"focusout":Ke="blur",Ge=Od;break;case"beforeblur":case"afterblur":Ge=Od;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=d_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=zM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=eE;break;case D_:case I_:case N_:Ge=VM;break;case U_:Ge=nE;break;case"scroll":Ge=FM;break;case"wheel":Ge=rE;break;case"copy":case"cut":case"paste":Ge=WM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=p_}var Qe=(s&4)!==0,Mn=!Qe&&i==="scroll",re=Qe?ye!==null?ye+"Capture":null:ye;Qe=[];for(var $=ce,le;$!==null;){le=$;var Ae=le.stateNode;if(le.tag===5&&Ae!==null&&(le=Ae,re!==null&&(Ae=vt($,re),Ae!=null&&Qe.push(Vl($,Ae,le)))),Mn)break;$=$.return}0<Qe.length&&(ye=new Ge(ye,Ke,null,l,Se),Ee.push({event:ye,listeners:Qe}))}}if((s&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",Ge=i==="mouseout"||i==="pointerout",ye&&l!==Pt&&(Ke=l.relatedTarget||l.fromElement)&&(go(Ke)||Ke[Qr]))break e;if((Ge||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ge?(Ke=l.relatedTarget||l.toElement,Ge=ce,Ke=Ke?go(Ke):null,Ke!==null&&(Mn=Lt(Ke),Ke!==Mn||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(Ge=null,Ke=ce),Ge!==Ke)){if(Qe=d_,Ae="onMouseLeave",re="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(Qe=p_,Ae="onPointerLeave",re="onPointerEnter",$="pointer"),Mn=Ge==null?ye:ma(Ge),le=Ke==null?ye:ma(Ke),ye=new Qe(Ae,$+"leave",Ge,l,Se),ye.target=Mn,ye.relatedTarget=le,Ae=null,go(Se)===ce&&(Qe=new Qe(re,$+"enter",Ke,l,Se),Qe.target=le,Qe.relatedTarget=Mn,Ae=Qe),Mn=Ae,Ge&&Ke)t:{for(Qe=Ge,re=Ke,$=0,le=Qe;le;le=ha(le))$++;for(le=0,Ae=re;Ae;Ae=ha(Ae))le++;for(;0<$-le;)Qe=ha(Qe),$--;for(;0<le-$;)re=ha(re),le--;for(;$--;){if(Qe===re||re!==null&&Qe===re.alternate)break t;Qe=ha(Qe),re=ha(re)}Qe=null}else Qe=null;Ge!==null&&H_(Ee,ye,Ge,Qe,!1),Ke!==null&&Mn!==null&&H_(Ee,Mn,Ke,Qe,!0)}}e:{if(ye=ce?ma(ce):window,Ge=ye.nodeName&&ye.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&ye.type==="file")var tt=fE;else if(y_(ye))if(M_)tt=mE;else{tt=hE;var ft=dE}else(Ge=ye.nodeName)&&Ge.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(tt=pE);if(tt&&(tt=tt(i,ce))){S_(Ee,tt,l,Se);break e}ft&&ft(i,ye,ce),i==="focusout"&&(ft=ye._wrapperState)&&ft.controlled&&ye.type==="number"&&Rt(ye,"number",ye.value)}switch(ft=ce?ma(ce):window,i){case"focusin":(y_(ft)||ft.contentEditable==="true")&&(fa=ft,Vd=ce,zl=null);break;case"focusout":zl=Vd=fa=null;break;case"mousedown":Gd=!0;break;case"contextmenu":case"mouseup":case"dragend":Gd=!1,P_(Ee,l,Se);break;case"selectionchange":if(vE)break;case"keydown":case"keyup":P_(Ee,l,Se)}var dt;if(kd)e:{switch(i){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ca?v_(i,l)&&(xt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(xt="onCompositionStart");xt&&(m_&&l.locale!=="ko"&&(ca||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ca&&(dt=c_()):(bs=Se,Dd="value"in bs?bs.value:bs.textContent,ca=!0)),ft=gc(ce,xt),0<ft.length&&(xt=new h_(xt,i,null,l,Se),Ee.push({event:xt,listeners:ft}),dt?xt.data=dt:(dt=x_(l),dt!==null&&(xt.data=dt)))),(dt=oE?aE(i,l):lE(i,l))&&(ce=gc(ce,"onBeforeInput"),0<ce.length&&(Se=new h_("onBeforeInput","beforeinput",null,l,Se),Ee.push({event:Se,listeners:ce}),Se.data=dt))}z_(Ee,s)})}function Vl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function gc(i,s){for(var l=s+"Capture",d=[];i!==null;){var g=i,M=g.stateNode;g.tag===5&&M!==null&&(g=M,M=vt(i,l),M!=null&&d.unshift(Vl(i,M,g)),M=vt(i,s),M!=null&&d.push(Vl(i,M,g))),i=i.return}return d}function ha(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function H_(i,s,l,d,g){for(var M=s._reactName,A=[];l!==null&&l!==d;){var B=l,W=B.alternate,ce=B.stateNode;if(W!==null&&W===d)break;B.tag===5&&ce!==null&&(B=ce,g?(W=vt(l,M),W!=null&&A.unshift(Vl(l,W,B))):g||(W=vt(l,M),W!=null&&A.push(Vl(l,W,B)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var ME=/\r\n?/g,EE=/\u0000|\uFFFD/g;function V_(i){return(typeof i=="string"?i:""+i).replace(ME,`
`).replace(EE,"")}function _c(i,s,l){if(s=V_(s),V_(i)!==s&&l)throw Error(t(425))}function vc(){}var $d=null,Kd=null;function Zd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Qd=typeof setTimeout=="function"?setTimeout:void 0,wE=typeof clearTimeout=="function"?clearTimeout:void 0,G_=typeof Promise=="function"?Promise:void 0,TE=typeof queueMicrotask=="function"?queueMicrotask:typeof G_<"u"?function(i){return G_.resolve(null).then(i).catch(AE)}:Qd;function AE(i){setTimeout(function(){throw i})}function Jd(i,s){var l=s,d=0;do{var g=l.nextSibling;if(i.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(d===0){i.removeChild(g),Dl(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=g}while(l);Dl(s)}function Ls(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function W_(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var pa=Math.random().toString(36).slice(2),Fr="__reactFiber$"+pa,Gl="__reactProps$"+pa,Qr="__reactContainer$"+pa,eh="__reactEvents$"+pa,CE="__reactListeners$"+pa,RE="__reactHandles$"+pa;function go(i){var s=i[Fr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Qr]||l[Fr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=W_(i);i!==null;){if(l=i[Fr])return l;i=W_(i)}return s}i=l,l=i.parentNode}return null}function Wl(i){return i=i[Fr]||i[Qr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ma(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function xc(i){return i[Gl]||null}var th=[],ga=-1;function Ds(i){return{current:i}}function cn(i){0>ga||(i.current=th[ga],th[ga]=null,ga--)}function on(i,s){ga++,th[ga]=i.current,i.current=s}var Is={},Zn=Ds(Is),Si=Ds(!1),_o=Is;function _a(i,s){var l=i.type.contextTypes;if(!l)return Is;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var g={},M;for(M in l)g[M]=s[M];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Mi(i){return i=i.childContextTypes,i!=null}function yc(){cn(Si),cn(Zn)}function X_(i,s,l){if(Zn.current!==Is)throw Error(t(168));on(Zn,s),on(Si,l)}function Y_(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var g in d)if(!(g in s))throw Error(t(108,ge(i)||"Unknown",g));return I({},l,d)}function Sc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Is,_o=Zn.current,on(Zn,i),on(Si,Si.current),!0}function j_(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=Y_(i,s,_o),d.__reactInternalMemoizedMergedChildContext=i,cn(Si),cn(Zn),on(Zn,i)):cn(Si),on(Si,l)}var Jr=null,Mc=!1,nh=!1;function q_(i){Jr===null?Jr=[i]:Jr.push(i)}function bE(i){Mc=!0,q_(i)}function Ns(){if(!nh&&Jr!==null){nh=!0;var i=0,s=Kt;try{var l=Jr;for(Kt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}Jr=null,Mc=!1}catch(g){throw Jr!==null&&(Jr=Jr.slice(i+1)),se(He,Ns),g}finally{Kt=s,nh=!1}}return null}var va=[],xa=0,Ec=null,wc=0,ar=[],lr=0,vo=null,es=1,ts="";function xo(i,s){va[xa++]=wc,va[xa++]=Ec,Ec=i,wc=s}function $_(i,s,l){ar[lr++]=es,ar[lr++]=ts,ar[lr++]=vo,vo=i;var d=es;i=ts;var g=32-wt(d)-1;d&=~(1<<g),l+=1;var M=32-wt(s)+g;if(30<M){var A=g-g%5;M=(d&(1<<A)-1).toString(32),d>>=A,g-=A,es=1<<32-wt(s)+g|l<<g|d,ts=M+i}else es=1<<M|l<<g|d,ts=i}function ih(i){i.return!==null&&(xo(i,1),$_(i,1,0))}function rh(i){for(;i===Ec;)Ec=va[--xa],va[xa]=null,wc=va[--xa],va[xa]=null;for(;i===vo;)vo=ar[--lr],ar[lr]=null,ts=ar[--lr],ar[lr]=null,es=ar[--lr],ar[lr]=null}var Bi=null,Hi=null,dn=!1,Er=null;function K_(i,s){var l=dr(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Z_(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Bi=i,Hi=Ls(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Bi=i,Hi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=vo!==null?{id:es,overflow:ts}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=dr(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Bi=i,Hi=null,!0):!1;default:return!1}}function sh(i){return(i.mode&1)!==0&&(i.flags&128)===0}function oh(i){if(dn){var s=Hi;if(s){var l=s;if(!Z_(i,s)){if(sh(i))throw Error(t(418));s=Ls(l.nextSibling);var d=Bi;s&&Z_(i,s)?K_(d,l):(i.flags=i.flags&-4097|2,dn=!1,Bi=i)}}else{if(sh(i))throw Error(t(418));i.flags=i.flags&-4097|2,dn=!1,Bi=i}}}function Q_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Bi=i}function Tc(i){if(i!==Bi)return!1;if(!dn)return Q_(i),dn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Zd(i.type,i.memoizedProps)),s&&(s=Hi)){if(sh(i))throw J_(),Error(t(418));for(;s;)K_(i,s),s=Ls(s.nextSibling)}if(Q_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Hi=Ls(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Hi=null}}else Hi=Bi?Ls(i.stateNode.nextSibling):null;return!0}function J_(){for(var i=Hi;i;)i=Ls(i.nextSibling)}function ya(){Hi=Bi=null,dn=!1}function ah(i){Er===null?Er=[i]:Er.push(i)}var PE=w.ReactCurrentBatchConfig;function Xl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var g=d,M=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===M?s.ref:(s=function(A){var B=g.refs;A===null?delete B[M]:B[M]=A},s._stringRef=M,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Ac(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function e0(i){var s=i._init;return s(i._payload)}function t0(i){function s(re,$){if(i){var le=re.deletions;le===null?(re.deletions=[$],re.flags|=16):le.push($)}}function l(re,$){if(!i)return null;for(;$!==null;)s(re,$),$=$.sibling;return null}function d(re,$){for(re=new Map;$!==null;)$.key!==null?re.set($.key,$):re.set($.index,$),$=$.sibling;return re}function g(re,$){return re=Vs(re,$),re.index=0,re.sibling=null,re}function M(re,$,le){return re.index=le,i?(le=re.alternate,le!==null?(le=le.index,le<$?(re.flags|=2,$):le):(re.flags|=2,$)):(re.flags|=1048576,$)}function A(re){return i&&re.alternate===null&&(re.flags|=2),re}function B(re,$,le,Ae){return $===null||$.tag!==6?($=Qh(le,re.mode,Ae),$.return=re,$):($=g($,le),$.return=re,$)}function W(re,$,le,Ae){var tt=le.type;return tt===D?Se(re,$,le.props.children,Ae,le.key):$!==null&&($.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===J&&e0(tt)===$.type)?(Ae=g($,le.props),Ae.ref=Xl(re,$,le),Ae.return=re,Ae):(Ae=Kc(le.type,le.key,le.props,null,re.mode,Ae),Ae.ref=Xl(re,$,le),Ae.return=re,Ae)}function ce(re,$,le,Ae){return $===null||$.tag!==4||$.stateNode.containerInfo!==le.containerInfo||$.stateNode.implementation!==le.implementation?($=Jh(le,re.mode,Ae),$.return=re,$):($=g($,le.children||[]),$.return=re,$)}function Se(re,$,le,Ae,tt){return $===null||$.tag!==7?($=Co(le,re.mode,Ae,tt),$.return=re,$):($=g($,le),$.return=re,$)}function Ee(re,$,le){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Qh(""+$,re.mode,le),$.return=re,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case F:return le=Kc($.type,$.key,$.props,null,re.mode,le),le.ref=Xl(re,null,$),le.return=re,le;case N:return $=Jh($,re.mode,le),$.return=re,$;case J:var Ae=$._init;return Ee(re,Ae($._payload),le)}if(je($)||te($))return $=Co($,re.mode,le,null),$.return=re,$;Ac(re,$)}return null}function ye(re,$,le,Ae){var tt=$!==null?$.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return tt!==null?null:B(re,$,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case F:return le.key===tt?W(re,$,le,Ae):null;case N:return le.key===tt?ce(re,$,le,Ae):null;case J:return tt=le._init,ye(re,$,tt(le._payload),Ae)}if(je(le)||te(le))return tt!==null?null:Se(re,$,le,Ae,null);Ac(re,le)}return null}function Ge(re,$,le,Ae,tt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return re=re.get(le)||null,B($,re,""+Ae,tt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case F:return re=re.get(Ae.key===null?le:Ae.key)||null,W($,re,Ae,tt);case N:return re=re.get(Ae.key===null?le:Ae.key)||null,ce($,re,Ae,tt);case J:var ft=Ae._init;return Ge(re,$,le,ft(Ae._payload),tt)}if(je(Ae)||te(Ae))return re=re.get(le)||null,Se($,re,Ae,tt,null);Ac($,Ae)}return null}function Ke(re,$,le,Ae){for(var tt=null,ft=null,dt=$,xt=$=0,zn=null;dt!==null&&xt<le.length;xt++){dt.index>xt?(zn=dt,dt=null):zn=dt.sibling;var Gt=ye(re,dt,le[xt],Ae);if(Gt===null){dt===null&&(dt=zn);break}i&&dt&&Gt.alternate===null&&s(re,dt),$=M(Gt,$,xt),ft===null?tt=Gt:ft.sibling=Gt,ft=Gt,dt=zn}if(xt===le.length)return l(re,dt),dn&&xo(re,xt),tt;if(dt===null){for(;xt<le.length;xt++)dt=Ee(re,le[xt],Ae),dt!==null&&($=M(dt,$,xt),ft===null?tt=dt:ft.sibling=dt,ft=dt);return dn&&xo(re,xt),tt}for(dt=d(re,dt);xt<le.length;xt++)zn=Ge(dt,re,xt,le[xt],Ae),zn!==null&&(i&&zn.alternate!==null&&dt.delete(zn.key===null?xt:zn.key),$=M(zn,$,xt),ft===null?tt=zn:ft.sibling=zn,ft=zn);return i&&dt.forEach(function(Gs){return s(re,Gs)}),dn&&xo(re,xt),tt}function Qe(re,$,le,Ae){var tt=te(le);if(typeof tt!="function")throw Error(t(150));if(le=tt.call(le),le==null)throw Error(t(151));for(var ft=tt=null,dt=$,xt=$=0,zn=null,Gt=le.next();dt!==null&&!Gt.done;xt++,Gt=le.next()){dt.index>xt?(zn=dt,dt=null):zn=dt.sibling;var Gs=ye(re,dt,Gt.value,Ae);if(Gs===null){dt===null&&(dt=zn);break}i&&dt&&Gs.alternate===null&&s(re,dt),$=M(Gs,$,xt),ft===null?tt=Gs:ft.sibling=Gs,ft=Gs,dt=zn}if(Gt.done)return l(re,dt),dn&&xo(re,xt),tt;if(dt===null){for(;!Gt.done;xt++,Gt=le.next())Gt=Ee(re,Gt.value,Ae),Gt!==null&&($=M(Gt,$,xt),ft===null?tt=Gt:ft.sibling=Gt,ft=Gt);return dn&&xo(re,xt),tt}for(dt=d(re,dt);!Gt.done;xt++,Gt=le.next())Gt=Ge(dt,re,xt,Gt.value,Ae),Gt!==null&&(i&&Gt.alternate!==null&&dt.delete(Gt.key===null?xt:Gt.key),$=M(Gt,$,xt),ft===null?tt=Gt:ft.sibling=Gt,ft=Gt);return i&&dt.forEach(function(u1){return s(re,u1)}),dn&&xo(re,xt),tt}function Mn(re,$,le,Ae){if(typeof le=="object"&&le!==null&&le.type===D&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case F:e:{for(var tt=le.key,ft=$;ft!==null;){if(ft.key===tt){if(tt=le.type,tt===D){if(ft.tag===7){l(re,ft.sibling),$=g(ft,le.props.children),$.return=re,re=$;break e}}else if(ft.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===J&&e0(tt)===ft.type){l(re,ft.sibling),$=g(ft,le.props),$.ref=Xl(re,ft,le),$.return=re,re=$;break e}l(re,ft);break}else s(re,ft);ft=ft.sibling}le.type===D?($=Co(le.props.children,re.mode,Ae,le.key),$.return=re,re=$):(Ae=Kc(le.type,le.key,le.props,null,re.mode,Ae),Ae.ref=Xl(re,$,le),Ae.return=re,re=Ae)}return A(re);case N:e:{for(ft=le.key;$!==null;){if($.key===ft)if($.tag===4&&$.stateNode.containerInfo===le.containerInfo&&$.stateNode.implementation===le.implementation){l(re,$.sibling),$=g($,le.children||[]),$.return=re,re=$;break e}else{l(re,$);break}else s(re,$);$=$.sibling}$=Jh(le,re.mode,Ae),$.return=re,re=$}return A(re);case J:return ft=le._init,Mn(re,$,ft(le._payload),Ae)}if(je(le))return Ke(re,$,le,Ae);if(te(le))return Qe(re,$,le,Ae);Ac(re,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,$!==null&&$.tag===6?(l(re,$.sibling),$=g($,le),$.return=re,re=$):(l(re,$),$=Qh(le,re.mode,Ae),$.return=re,re=$),A(re)):l(re,$)}return Mn}var Sa=t0(!0),n0=t0(!1),Cc=Ds(null),Rc=null,Ma=null,lh=null;function uh(){lh=Ma=Rc=null}function ch(i){var s=Cc.current;cn(Cc),i._currentValue=s}function fh(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function Ea(i,s){Rc=i,lh=Ma=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Ei=!0),i.firstContext=null)}function ur(i){var s=i._currentValue;if(lh!==i)if(i={context:i,memoizedValue:s,next:null},Ma===null){if(Rc===null)throw Error(t(308));Ma=i,Rc.dependencies={lanes:0,firstContext:i}}else Ma=Ma.next=i;return s}var yo=null;function dh(i){yo===null?yo=[i]:yo.push(i)}function i0(i,s,l,d){var g=s.interleaved;return g===null?(l.next=l,dh(s)):(l.next=g.next,g.next=l),s.interleaved=l,ns(i,d)}function ns(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Us=!1;function hh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r0(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function is(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Os(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Bt&2)!==0){var g=d.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),d.pending=s,ns(i,l)}return g=d.interleaved,g===null?(s.next=s,dh(d)):(s.next=g.next,g.next=s),d.interleaved=s,ns(i,l)}function bc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,Cd(i,l)}}function s0(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var g=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?g=M=A:M=M.next=A,l=l.next}while(l!==null);M===null?g=M=s:M=M.next=s}else g=M=s;l={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:M,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Pc(i,s,l,d){var g=i.updateQueue;Us=!1;var M=g.firstBaseUpdate,A=g.lastBaseUpdate,B=g.shared.pending;if(B!==null){g.shared.pending=null;var W=B,ce=W.next;W.next=null,A===null?M=ce:A.next=ce,A=W;var Se=i.alternate;Se!==null&&(Se=Se.updateQueue,B=Se.lastBaseUpdate,B!==A&&(B===null?Se.firstBaseUpdate=ce:B.next=ce,Se.lastBaseUpdate=W))}if(M!==null){var Ee=g.baseState;A=0,Se=ce=W=null,B=M;do{var ye=B.lane,Ge=B.eventTime;if((d&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ge,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ke=i,Qe=B;switch(ye=s,Ge=l,Qe.tag){case 1:if(Ke=Qe.payload,typeof Ke=="function"){Ee=Ke.call(Ge,Ee,ye);break e}Ee=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Qe.payload,ye=typeof Ke=="function"?Ke.call(Ge,Ee,ye):Ke,ye==null)break e;Ee=I({},Ee,ye);break e;case 2:Us=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,ye=g.effects,ye===null?g.effects=[B]:ye.push(B))}else Ge={eventTime:Ge,lane:ye,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Se===null?(ce=Se=Ge,W=Ee):Se=Se.next=Ge,A|=ye;if(B=B.next,B===null){if(B=g.shared.pending,B===null)break;ye=B,B=ye.next,ye.next=null,g.lastBaseUpdate=ye,g.shared.pending=null}}while(!0);if(Se===null&&(W=Ee),g.baseState=W,g.firstBaseUpdate=ce,g.lastBaseUpdate=Se,s=g.shared.interleaved,s!==null){g=s;do A|=g.lane,g=g.next;while(g!==s)}else M===null&&(g.shared.lanes=0);Eo|=A,i.lanes=A,i.memoizedState=Ee}}function o0(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],g=d.callback;if(g!==null){if(d.callback=null,d=l,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var Yl={},kr=Ds(Yl),jl=Ds(Yl),ql=Ds(Yl);function So(i){if(i===Yl)throw Error(t(174));return i}function ph(i,s){switch(on(ql,s),on(jl,i),on(kr,Yl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ne(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ne(s,i)}cn(kr),on(kr,s)}function wa(){cn(kr),cn(jl),cn(ql)}function a0(i){So(ql.current);var s=So(kr.current),l=Ne(s,i.type);s!==l&&(on(jl,i),on(kr,l))}function mh(i){jl.current===i&&(cn(kr),cn(jl))}var pn=Ds(0);function Lc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var gh=[];function _h(){for(var i=0;i<gh.length;i++)gh[i]._workInProgressVersionPrimary=null;gh.length=0}var Dc=w.ReactCurrentDispatcher,vh=w.ReactCurrentBatchConfig,Mo=0,mn=null,Pn=null,Fn=null,Ic=!1,$l=!1,Kl=0,LE=0;function Qn(){throw Error(t(321))}function xh(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Mr(i[l],s[l]))return!1;return!0}function yh(i,s,l,d,g,M){if(Mo=M,mn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Dc.current=i===null||i.memoizedState===null?UE:OE,i=l(d,g),$l){M=0;do{if($l=!1,Kl=0,25<=M)throw Error(t(301));M+=1,Fn=Pn=null,s.updateQueue=null,Dc.current=FE,i=l(d,g)}while($l)}if(Dc.current=Oc,s=Pn!==null&&Pn.next!==null,Mo=0,Fn=Pn=mn=null,Ic=!1,s)throw Error(t(300));return i}function Sh(){var i=Kl!==0;return Kl=0,i}function zr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fn===null?mn.memoizedState=Fn=i:Fn=Fn.next=i,Fn}function cr(){if(Pn===null){var i=mn.alternate;i=i!==null?i.memoizedState:null}else i=Pn.next;var s=Fn===null?mn.memoizedState:Fn.next;if(s!==null)Fn=s,Pn=i;else{if(i===null)throw Error(t(310));Pn=i,i={memoizedState:Pn.memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null},Fn===null?mn.memoizedState=Fn=i:Fn=Fn.next=i}return Fn}function Zl(i,s){return typeof s=="function"?s(i):s}function Mh(i){var s=cr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=Pn,g=d.baseQueue,M=l.pending;if(M!==null){if(g!==null){var A=g.next;g.next=M.next,M.next=A}d.baseQueue=g=M,l.pending=null}if(g!==null){M=g.next,d=d.baseState;var B=A=null,W=null,ce=M;do{var Se=ce.lane;if((Mo&Se)===Se)W!==null&&(W=W.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),d=ce.hasEagerState?ce.eagerState:i(d,ce.action);else{var Ee={lane:Se,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};W===null?(B=W=Ee,A=d):W=W.next=Ee,mn.lanes|=Se,Eo|=Se}ce=ce.next}while(ce!==null&&ce!==M);W===null?A=d:W.next=B,Mr(d,s.memoizedState)||(Ei=!0),s.memoizedState=d,s.baseState=A,s.baseQueue=W,l.lastRenderedState=d}if(i=l.interleaved,i!==null){g=i;do M=g.lane,mn.lanes|=M,Eo|=M,g=g.next;while(g!==i)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Eh(i){var s=cr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,g=l.pending,M=s.memoizedState;if(g!==null){l.pending=null;var A=g=g.next;do M=i(M,A.action),A=A.next;while(A!==g);Mr(M,s.memoizedState)||(Ei=!0),s.memoizedState=M,s.baseQueue===null&&(s.baseState=M),l.lastRenderedState=M}return[M,d]}function l0(){}function u0(i,s){var l=mn,d=cr(),g=s(),M=!Mr(d.memoizedState,g);if(M&&(d.memoizedState=g,Ei=!0),d=d.queue,wh(d0.bind(null,l,d,i),[i]),d.getSnapshot!==s||M||Fn!==null&&Fn.memoizedState.tag&1){if(l.flags|=2048,Ql(9,f0.bind(null,l,d,g,s),void 0,null),kn===null)throw Error(t(349));(Mo&30)!==0||c0(l,s,g)}return g}function c0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=mn.updateQueue,s===null?(s={lastEffect:null,stores:null},mn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function f0(i,s,l,d){s.value=l,s.getSnapshot=d,h0(s)&&p0(i)}function d0(i,s,l){return l(function(){h0(s)&&p0(i)})}function h0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Mr(i,l)}catch{return!0}}function p0(i){var s=ns(i,1);s!==null&&Cr(s,i,1,-1)}function m0(i){var s=zr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zl,lastRenderedState:i},s.queue=i,i=i.dispatch=NE.bind(null,mn,i),[s.memoizedState,i]}function Ql(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=mn.updateQueue,s===null?(s={lastEffect:null,stores:null},mn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function g0(){return cr().memoizedState}function Nc(i,s,l,d){var g=zr();mn.flags|=i,g.memoizedState=Ql(1|s,l,void 0,d===void 0?null:d)}function Uc(i,s,l,d){var g=cr();d=d===void 0?null:d;var M=void 0;if(Pn!==null){var A=Pn.memoizedState;if(M=A.destroy,d!==null&&xh(d,A.deps)){g.memoizedState=Ql(s,l,M,d);return}}mn.flags|=i,g.memoizedState=Ql(1|s,l,M,d)}function _0(i,s){return Nc(8390656,8,i,s)}function wh(i,s){return Uc(2048,8,i,s)}function v0(i,s){return Uc(4,2,i,s)}function x0(i,s){return Uc(4,4,i,s)}function y0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function S0(i,s,l){return l=l!=null?l.concat([i]):null,Uc(4,4,y0.bind(null,s,i),l)}function Th(){}function M0(i,s){var l=cr();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&xh(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function E0(i,s){var l=cr();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&xh(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function w0(i,s,l){return(Mo&21)===0?(i.baseState&&(i.baseState=!1,Ei=!0),i.memoizedState=l):(Mr(l,s)||(l=ui(),mn.lanes|=l,Eo|=l,i.baseState=!0),s)}function DE(i,s){var l=Kt;Kt=l!==0&&4>l?l:4,i(!0);var d=vh.transition;vh.transition={};try{i(!1),s()}finally{Kt=l,vh.transition=d}}function T0(){return cr().memoizedState}function IE(i,s,l){var d=Bs(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},A0(i))C0(s,l);else if(l=i0(i,s,l,d),l!==null){var g=fi();Cr(l,i,d,g),R0(l,s,d)}}function NE(i,s,l){var d=Bs(i),g={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(A0(i))C0(s,g);else{var M=i.alternate;if(i.lanes===0&&(M===null||M.lanes===0)&&(M=s.lastRenderedReducer,M!==null))try{var A=s.lastRenderedState,B=M(A,l);if(g.hasEagerState=!0,g.eagerState=B,Mr(B,A)){var W=s.interleaved;W===null?(g.next=g,dh(s)):(g.next=W.next,W.next=g),s.interleaved=g;return}}catch{}finally{}l=i0(i,s,g,d),l!==null&&(g=fi(),Cr(l,i,d,g),R0(l,s,d))}}function A0(i){var s=i.alternate;return i===mn||s!==null&&s===mn}function C0(i,s){$l=Ic=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function R0(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,Cd(i,l)}}var Oc={readContext:ur,useCallback:Qn,useContext:Qn,useEffect:Qn,useImperativeHandle:Qn,useInsertionEffect:Qn,useLayoutEffect:Qn,useMemo:Qn,useReducer:Qn,useRef:Qn,useState:Qn,useDebugValue:Qn,useDeferredValue:Qn,useTransition:Qn,useMutableSource:Qn,useSyncExternalStore:Qn,useId:Qn,unstable_isNewReconciler:!1},UE={readContext:ur,useCallback:function(i,s){return zr().memoizedState=[i,s===void 0?null:s],i},useContext:ur,useEffect:_0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Nc(4194308,4,y0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Nc(4194308,4,i,s)},useInsertionEffect:function(i,s){return Nc(4,2,i,s)},useMemo:function(i,s){var l=zr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=zr();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=IE.bind(null,mn,i),[d.memoizedState,i]},useRef:function(i){var s=zr();return i={current:i},s.memoizedState=i},useState:m0,useDebugValue:Th,useDeferredValue:function(i){return zr().memoizedState=i},useTransition:function(){var i=m0(!1),s=i[0];return i=DE.bind(null,i[1]),zr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=mn,g=zr();if(dn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),kn===null)throw Error(t(349));(Mo&30)!==0||c0(d,s,l)}g.memoizedState=l;var M={value:l,getSnapshot:s};return g.queue=M,_0(d0.bind(null,d,M,i),[i]),d.flags|=2048,Ql(9,f0.bind(null,d,M,l,s),void 0,null),l},useId:function(){var i=zr(),s=kn.identifierPrefix;if(dn){var l=ts,d=es;l=(d&~(1<<32-wt(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=Kl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=LE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},OE={readContext:ur,useCallback:M0,useContext:ur,useEffect:wh,useImperativeHandle:S0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:E0,useReducer:Mh,useRef:g0,useState:function(){return Mh(Zl)},useDebugValue:Th,useDeferredValue:function(i){var s=cr();return w0(s,Pn.memoizedState,i)},useTransition:function(){var i=Mh(Zl)[0],s=cr().memoizedState;return[i,s]},useMutableSource:l0,useSyncExternalStore:u0,useId:T0,unstable_isNewReconciler:!1},FE={readContext:ur,useCallback:M0,useContext:ur,useEffect:wh,useImperativeHandle:S0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:E0,useReducer:Eh,useRef:g0,useState:function(){return Eh(Zl)},useDebugValue:Th,useDeferredValue:function(i){var s=cr();return Pn===null?s.memoizedState=i:w0(s,Pn.memoizedState,i)},useTransition:function(){var i=Eh(Zl)[0],s=cr().memoizedState;return[i,s]},useMutableSource:l0,useSyncExternalStore:u0,useId:T0,unstable_isNewReconciler:!1};function wr(i,s){if(i&&i.defaultProps){s=I({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Ah(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:I({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Fc={isMounted:function(i){return(i=i._reactInternals)?Lt(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=fi(),g=Bs(i),M=is(d,g);M.payload=s,l!=null&&(M.callback=l),s=Os(i,M,g),s!==null&&(Cr(s,i,g,d),bc(s,i,g))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=fi(),g=Bs(i),M=is(d,g);M.tag=1,M.payload=s,l!=null&&(M.callback=l),s=Os(i,M,g),s!==null&&(Cr(s,i,g,d),bc(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=fi(),d=Bs(i),g=is(l,d);g.tag=2,s!=null&&(g.callback=s),s=Os(i,g,d),s!==null&&(Cr(s,i,d,l),bc(s,i,d))}};function b0(i,s,l,d,g,M,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,M,A):s.prototype&&s.prototype.isPureReactComponent?!kl(l,d)||!kl(g,M):!0}function P0(i,s,l){var d=!1,g=Is,M=s.contextType;return typeof M=="object"&&M!==null?M=ur(M):(g=Mi(s)?_o:Zn.current,d=s.contextTypes,M=(d=d!=null)?_a(i,g):Is),s=new s(l,M),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Fc,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=M),s}function L0(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&Fc.enqueueReplaceState(s,s.state,null)}function Ch(i,s,l,d){var g=i.stateNode;g.props=l,g.state=i.memoizedState,g.refs={},hh(i);var M=s.contextType;typeof M=="object"&&M!==null?g.context=ur(M):(M=Mi(s)?_o:Zn.current,g.context=_a(i,M)),g.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Ah(i,s,M,l),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Fc.enqueueReplaceState(g,g.state,null),Pc(i,l,g,d),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Ta(i,s){try{var l="",d=s;do l+=de(d),d=d.return;while(d);var g=l}catch(M){g=`
Error generating stack: `+M.message+`
`+M.stack}return{value:i,source:s,stack:g,digest:null}}function Rh(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function bh(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var kE=typeof WeakMap=="function"?WeakMap:Map;function D0(i,s,l){l=is(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Wc||(Wc=!0,Wh=d),bh(i,s)},l}function I0(i,s,l){l=is(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var g=s.value;l.payload=function(){return d(g)},l.callback=function(){bh(i,s)}}var M=i.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){bh(i,s),typeof d!="function"&&(ks===null?ks=new Set([this]):ks.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function N0(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new kE;var g=new Set;d.set(s,g)}else g=d.get(s),g===void 0&&(g=new Set,d.set(s,g));g.has(l)||(g.add(l),i=QE.bind(null,i,s,l),s.then(i,i))}function U0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function O0(i,s,l,d,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=is(-1,1),s.tag=2,Os(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var zE=w.ReactCurrentOwner,Ei=!1;function ci(i,s,l,d){s.child=i===null?n0(s,null,l,d):Sa(s,i.child,l,d)}function F0(i,s,l,d,g){l=l.render;var M=s.ref;return Ea(s,g),d=yh(i,s,l,d,M,g),l=Sh(),i!==null&&!Ei?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,rs(i,s,g)):(dn&&l&&ih(s),s.flags|=1,ci(i,s,d,g),s.child)}function k0(i,s,l,d,g){if(i===null){var M=l.type;return typeof M=="function"&&!Zh(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=M,z0(i,s,M,d,g)):(i=Kc(l.type,null,d,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(M=i.child,(i.lanes&g)===0){var A=M.memoizedProps;if(l=l.compare,l=l!==null?l:kl,l(A,d)&&i.ref===s.ref)return rs(i,s,g)}return s.flags|=1,i=Vs(M,d),i.ref=s.ref,i.return=s,s.child=i}function z0(i,s,l,d,g){if(i!==null){var M=i.memoizedProps;if(kl(M,d)&&i.ref===s.ref)if(Ei=!1,s.pendingProps=d=M,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Ei=!0);else return s.lanes=i.lanes,rs(i,s,g)}return Ph(i,s,l,d,g)}function B0(i,s,l){var d=s.pendingProps,g=d.children,M=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},on(Ca,Vi),Vi|=l;else{if((l&1073741824)===0)return i=M!==null?M.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,on(Ca,Vi),Vi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=M!==null?M.baseLanes:l,on(Ca,Vi),Vi|=d}else M!==null?(d=M.baseLanes|l,s.memoizedState=null):d=l,on(Ca,Vi),Vi|=d;return ci(i,s,g,l),s.child}function H0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Ph(i,s,l,d,g){var M=Mi(l)?_o:Zn.current;return M=_a(s,M),Ea(s,g),l=yh(i,s,l,d,M,g),d=Sh(),i!==null&&!Ei?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,rs(i,s,g)):(dn&&d&&ih(s),s.flags|=1,ci(i,s,l,g),s.child)}function V0(i,s,l,d,g){if(Mi(l)){var M=!0;Sc(s)}else M=!1;if(Ea(s,g),s.stateNode===null)zc(i,s),P0(s,l,d),Ch(s,l,d,g),d=!0;else if(i===null){var A=s.stateNode,B=s.memoizedProps;A.props=B;var W=A.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=ur(ce):(ce=Mi(l)?_o:Zn.current,ce=_a(s,ce));var Se=l.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ee||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==d||W!==ce)&&L0(s,A,d,ce),Us=!1;var ye=s.memoizedState;A.state=ye,Pc(s,d,A,g),W=s.memoizedState,B!==d||ye!==W||Si.current||Us?(typeof Se=="function"&&(Ah(s,l,Se,d),W=s.memoizedState),(B=Us||b0(s,l,B,d,ye,W,ce))?(Ee||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=W),A.props=d,A.state=W,A.context=ce,d=B):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{A=s.stateNode,r0(i,s),B=s.memoizedProps,ce=s.type===s.elementType?B:wr(s.type,B),A.props=ce,Ee=s.pendingProps,ye=A.context,W=l.contextType,typeof W=="object"&&W!==null?W=ur(W):(W=Mi(l)?_o:Zn.current,W=_a(s,W));var Ge=l.getDerivedStateFromProps;(Se=typeof Ge=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==Ee||ye!==W)&&L0(s,A,d,W),Us=!1,ye=s.memoizedState,A.state=ye,Pc(s,d,A,g);var Ke=s.memoizedState;B!==Ee||ye!==Ke||Si.current||Us?(typeof Ge=="function"&&(Ah(s,l,Ge,d),Ke=s.memoizedState),(ce=Us||b0(s,l,ce,d,ye,Ke,W)||!1)?(Se||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,Ke,W),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,Ke,W)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=Ke),A.props=d,A.state=Ke,A.context=W,d=ce):(typeof A.componentDidUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),d=!1)}return Lh(i,s,l,d,M,g)}function Lh(i,s,l,d,g,M){H0(i,s);var A=(s.flags&128)!==0;if(!d&&!A)return g&&j_(s,l,!1),rs(i,s,M);d=s.stateNode,zE.current=s;var B=A&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&A?(s.child=Sa(s,i.child,null,M),s.child=Sa(s,null,B,M)):ci(i,s,B,M),s.memoizedState=d.state,g&&j_(s,l,!0),s.child}function G0(i){var s=i.stateNode;s.pendingContext?X_(i,s.pendingContext,s.pendingContext!==s.context):s.context&&X_(i,s.context,!1),ph(i,s.containerInfo)}function W0(i,s,l,d,g){return ya(),ah(g),s.flags|=256,ci(i,s,l,d),s.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Ih(i){return{baseLanes:i,cachePool:null,transitions:null}}function X0(i,s,l){var d=s.pendingProps,g=pn.current,M=!1,A=(s.flags&128)!==0,B;if((B=A)||(B=i!==null&&i.memoizedState===null?!1:(g&2)!==0),B?(M=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),on(pn,g&1),i===null)return oh(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=d.children,i=d.fallback,M?(d=s.mode,M=s.child,A={mode:"hidden",children:A},(d&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=A):M=Zc(A,d,0,null),i=Co(i,d,l,null),M.return=s,i.return=s,M.sibling=i,s.child=M,s.child.memoizedState=Ih(l),s.memoizedState=Dh,i):Nh(s,A));if(g=i.memoizedState,g!==null&&(B=g.dehydrated,B!==null))return BE(i,s,A,d,B,g,l);if(M){M=d.fallback,A=s.mode,g=i.child,B=g.sibling;var W={mode:"hidden",children:d.children};return(A&1)===0&&s.child!==g?(d=s.child,d.childLanes=0,d.pendingProps=W,s.deletions=null):(d=Vs(g,W),d.subtreeFlags=g.subtreeFlags&14680064),B!==null?M=Vs(B,M):(M=Co(M,A,l,null),M.flags|=2),M.return=s,d.return=s,d.sibling=M,s.child=d,d=M,M=s.child,A=i.child.memoizedState,A=A===null?Ih(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},M.memoizedState=A,M.childLanes=i.childLanes&~l,s.memoizedState=Dh,d}return M=i.child,i=M.sibling,d=Vs(M,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function Nh(i,s){return s=Zc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function kc(i,s,l,d){return d!==null&&ah(d),Sa(s,i.child,null,l),i=Nh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function BE(i,s,l,d,g,M,A){if(l)return s.flags&256?(s.flags&=-257,d=Rh(Error(t(422))),kc(i,s,A,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(M=d.fallback,g=s.mode,d=Zc({mode:"visible",children:d.children},g,0,null),M=Co(M,g,A,null),M.flags|=2,d.return=s,M.return=s,d.sibling=M,s.child=d,(s.mode&1)!==0&&Sa(s,i.child,null,A),s.child.memoizedState=Ih(A),s.memoizedState=Dh,M);if((s.mode&1)===0)return kc(i,s,A,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var B=d.dgst;return d=B,M=Error(t(419)),d=Rh(M,d,void 0),kc(i,s,A,d)}if(B=(A&i.childLanes)!==0,Ei||B){if(d=kn,d!==null){switch(A&-A){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|A))!==0?0:g,g!==0&&g!==M.retryLane&&(M.retryLane=g,ns(i,g),Cr(d,i,g,-1))}return Kh(),d=Rh(Error(t(421))),kc(i,s,A,d)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=JE.bind(null,i),g._reactRetry=s,null):(i=M.treeContext,Hi=Ls(g.nextSibling),Bi=s,dn=!0,Er=null,i!==null&&(ar[lr++]=es,ar[lr++]=ts,ar[lr++]=vo,es=i.id,ts=i.overflow,vo=s),s=Nh(s,d.children),s.flags|=4096,s)}function Y0(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),fh(i.return,s,l)}function Uh(i,s,l,d,g){var M=i.memoizedState;M===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:g}:(M.isBackwards=s,M.rendering=null,M.renderingStartTime=0,M.last=d,M.tail=l,M.tailMode=g)}function j0(i,s,l){var d=s.pendingProps,g=d.revealOrder,M=d.tail;if(ci(i,s,d.children,l),d=pn.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Y0(i,l,s);else if(i.tag===19)Y0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(on(pn,d),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)i=l.alternate,i!==null&&Lc(i)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),Uh(s,!1,g,l,M);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&Lc(i)===null){s.child=g;break}i=g.sibling,g.sibling=l,l=g,g=i}Uh(s,!0,l,null,M);break;case"together":Uh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function zc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function rs(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Eo|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Vs(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vs(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function HE(i,s,l){switch(s.tag){case 3:G0(s),ya();break;case 5:a0(s);break;case 1:Mi(s.type)&&Sc(s);break;case 4:ph(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,g=s.memoizedProps.value;on(Cc,d._currentValue),d._currentValue=g;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(on(pn,pn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?X0(i,s,l):(on(pn,pn.current&1),i=rs(i,s,l),i!==null?i.sibling:null);on(pn,pn.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return j0(i,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),on(pn,pn.current),d)break;return null;case 22:case 23:return s.lanes=0,B0(i,s,l)}return rs(i,s,l)}var q0,Oh,$0,K0;q0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Oh=function(){},$0=function(i,s,l,d){var g=i.memoizedProps;if(g!==d){i=s.stateNode,So(kr.current);var M=null;switch(l){case"input":g=X(i,g),d=X(i,d),M=[];break;case"select":g=I({},g,{value:void 0}),d=I({},d,{value:void 0}),M=[];break;case"textarea":g=P(i,g),d=P(i,d),M=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=vc)}St(l,d);var A;l=null;for(ce in g)if(!d.hasOwnProperty(ce)&&g.hasOwnProperty(ce)&&g[ce]!=null)if(ce==="style"){var B=g[ce];for(A in B)B.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(r.hasOwnProperty(ce)?M||(M=[]):(M=M||[]).push(ce,null));for(ce in d){var W=d[ce];if(B=g!=null?g[ce]:void 0,d.hasOwnProperty(ce)&&W!==B&&(W!=null||B!=null))if(ce==="style")if(B){for(A in B)!B.hasOwnProperty(A)||W&&W.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in W)W.hasOwnProperty(A)&&B[A]!==W[A]&&(l||(l={}),l[A]=W[A])}else l||(M||(M=[]),M.push(ce,l)),l=W;else ce==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,B=B?B.__html:void 0,W!=null&&B!==W&&(M=M||[]).push(ce,W)):ce==="children"?typeof W!="string"&&typeof W!="number"||(M=M||[]).push(ce,""+W):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(r.hasOwnProperty(ce)?(W!=null&&ce==="onScroll"&&un("scroll",i),M||B===W||(M=[])):(M=M||[]).push(ce,W))}l&&(M=M||[]).push("style",l);var ce=M;(s.updateQueue=ce)&&(s.flags|=4)}},K0=function(i,s,l,d){l!==d&&(s.flags|=4)};function Jl(i,s){if(!dn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Jn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var g=i.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function VE(i,s,l){var d=s.pendingProps;switch(rh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jn(s),null;case 1:return Mi(s.type)&&yc(),Jn(s),null;case 3:return d=s.stateNode,wa(),cn(Si),cn(Zn),_h(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Tc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Er!==null&&(jh(Er),Er=null))),Oh(i,s),Jn(s),null;case 5:mh(s);var g=So(ql.current);if(l=s.type,i!==null&&s.stateNode!=null)$0(i,s,l,d,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Jn(s),null}if(i=So(kr.current),Tc(s)){d=s.stateNode,l=s.type;var M=s.memoizedProps;switch(d[Fr]=s,d[Gl]=M,i=(s.mode&1)!==0,l){case"dialog":un("cancel",d),un("close",d);break;case"iframe":case"object":case"embed":un("load",d);break;case"video":case"audio":for(g=0;g<Bl.length;g++)un(Bl[g],d);break;case"source":un("error",d);break;case"img":case"image":case"link":un("error",d),un("load",d);break;case"details":un("toggle",d);break;case"input":Xt(d,M),un("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!M.multiple},un("invalid",d);break;case"textarea":oe(d,M),un("invalid",d)}St(l,M),g=null;for(var A in M)if(M.hasOwnProperty(A)){var B=M[A];A==="children"?typeof B=="string"?d.textContent!==B&&(M.suppressHydrationWarning!==!0&&_c(d.textContent,B,i),g=["children",B]):typeof B=="number"&&d.textContent!==""+B&&(M.suppressHydrationWarning!==!0&&_c(d.textContent,B,i),g=["children",""+B]):r.hasOwnProperty(A)&&B!=null&&A==="onScroll"&&un("scroll",d)}switch(l){case"input":Mt(d),We(d,M,!0);break;case"textarea":Mt(d),me(d);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(d.onclick=vc)}d=g,s.updateQueue=d,d!==null&&(s.flags|=4)}else{A=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=pe(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=A.createElement(l,{is:d.is}):(i=A.createElement(l),l==="select"&&(A=i,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):i=A.createElementNS(i,l),i[Fr]=s,i[Gl]=d,q0(i,s,!1,!1),s.stateNode=i;e:{switch(A=at(l,d),l){case"dialog":un("cancel",i),un("close",i),g=d;break;case"iframe":case"object":case"embed":un("load",i),g=d;break;case"video":case"audio":for(g=0;g<Bl.length;g++)un(Bl[g],i);g=d;break;case"source":un("error",i),g=d;break;case"img":case"image":case"link":un("error",i),un("load",i),g=d;break;case"details":un("toggle",i),g=d;break;case"input":Xt(i,d),g=X(i,d),un("invalid",i);break;case"option":g=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},g=I({},d,{value:void 0}),un("invalid",i);break;case"textarea":oe(i,d),g=P(i,d),un("invalid",i);break;default:g=d}St(l,g),B=g;for(M in B)if(B.hasOwnProperty(M)){var W=B[M];M==="style"?it(i,W):M==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Oe(i,W)):M==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&gt(i,W):typeof W=="number"&&gt(i,""+W):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(r.hasOwnProperty(M)?W!=null&&M==="onScroll"&&un("scroll",i):W!=null&&C(i,M,W,A))}switch(l){case"input":Mt(i),We(i,d,!1);break;case"textarea":Mt(i),me(i);break;case"option":d.value!=null&&i.setAttribute("value",""+we(d.value));break;case"select":i.multiple=!!d.multiple,M=d.value,M!=null?U(i,!!d.multiple,M,!1):d.defaultValue!=null&&U(i,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=vc)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Jn(s),null;case 6:if(i&&s.stateNode!=null)K0(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=So(ql.current),So(kr.current),Tc(s)){if(d=s.stateNode,l=s.memoizedProps,d[Fr]=s,(M=d.nodeValue!==l)&&(i=Bi,i!==null))switch(i.tag){case 3:_c(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&_c(d.nodeValue,l,(i.mode&1)!==0)}M&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Fr]=s,s.stateNode=d}return Jn(s),null;case 13:if(cn(pn),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(dn&&Hi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)J_(),ya(),s.flags|=98560,M=!1;else if(M=Tc(s),d!==null&&d.dehydrated!==null){if(i===null){if(!M)throw Error(t(318));if(M=s.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[Fr]=s}else ya(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Jn(s),M=!1}else Er!==null&&(jh(Er),Er=null),M=!0;if(!M)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(pn.current&1)!==0?Ln===0&&(Ln=3):Kh())),s.updateQueue!==null&&(s.flags|=4),Jn(s),null);case 4:return wa(),Oh(i,s),i===null&&Hl(s.stateNode.containerInfo),Jn(s),null;case 10:return ch(s.type._context),Jn(s),null;case 17:return Mi(s.type)&&yc(),Jn(s),null;case 19:if(cn(pn),M=s.memoizedState,M===null)return Jn(s),null;if(d=(s.flags&128)!==0,A=M.rendering,A===null)if(d)Jl(M,!1);else{if(Ln!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=Lc(i),A!==null){for(s.flags|=128,Jl(M,!1),d=A.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)M=l,i=d,M.flags&=14680066,A=M.alternate,A===null?(M.childLanes=0,M.lanes=i,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=A.childLanes,M.lanes=A.lanes,M.child=A.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=A.memoizedProps,M.memoizedState=A.memoizedState,M.updateQueue=A.updateQueue,M.type=A.type,i=A.dependencies,M.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return on(pn,pn.current&1|2),s.child}i=i.sibling}M.tail!==null&&xe()>Ra&&(s.flags|=128,d=!0,Jl(M,!1),s.lanes=4194304)}else{if(!d)if(i=Lc(A),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Jl(M,!0),M.tail===null&&M.tailMode==="hidden"&&!A.alternate&&!dn)return Jn(s),null}else 2*xe()-M.renderingStartTime>Ra&&l!==1073741824&&(s.flags|=128,d=!0,Jl(M,!1),s.lanes=4194304);M.isBackwards?(A.sibling=s.child,s.child=A):(l=M.last,l!==null?l.sibling=A:s.child=A,M.last=A)}return M.tail!==null?(s=M.tail,M.rendering=s,M.tail=s.sibling,M.renderingStartTime=xe(),s.sibling=null,l=pn.current,on(pn,d?l&1|2:l&1),s):(Jn(s),null);case 22:case 23:return $h(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(Vi&1073741824)!==0&&(Jn(s),s.subtreeFlags&6&&(s.flags|=8192)):Jn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function GE(i,s){switch(rh(s),s.tag){case 1:return Mi(s.type)&&yc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return wa(),cn(Si),cn(Zn),_h(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return mh(s),null;case 13:if(cn(pn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ya()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return cn(pn),null;case 4:return wa(),null;case 10:return ch(s.type._context),null;case 22:case 23:return $h(),null;case 24:return null;default:return null}}var Bc=!1,ei=!1,WE=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Aa(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){xn(i,s,d)}else l.current=null}function Fh(i,s,l){try{l()}catch(d){xn(i,s,d)}}var Z0=!1;function XE(i,s){if($d=oc,i=b_(),Hd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var g=d.anchorOffset,M=d.focusNode;d=d.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var A=0,B=-1,W=-1,ce=0,Se=0,Ee=i,ye=null;t:for(;;){for(var Ge;Ee!==l||g!==0&&Ee.nodeType!==3||(B=A+g),Ee!==M||d!==0&&Ee.nodeType!==3||(W=A+d),Ee.nodeType===3&&(A+=Ee.nodeValue.length),(Ge=Ee.firstChild)!==null;)ye=Ee,Ee=Ge;for(;;){if(Ee===i)break t;if(ye===l&&++ce===g&&(B=A),ye===M&&++Se===d&&(W=A),(Ge=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=Ge}l=B===-1||W===-1?null:{start:B,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(Kd={focusedElem:i,selectionRange:l},oc=!1,Ye=s;Ye!==null;)if(s=Ye,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ye=i;else for(;Ye!==null;){s=Ye;try{var Ke=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Qe=Ke.memoizedProps,Mn=Ke.memoizedState,re=s.stateNode,$=re.getSnapshotBeforeUpdate(s.elementType===s.type?Qe:wr(s.type,Qe),Mn);re.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var le=s.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){xn(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,Ye=i;break}Ye=s.return}return Ke=Z0,Z0=!1,Ke}function eu(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&i)===i){var M=g.destroy;g.destroy=void 0,M!==void 0&&Fh(s,l,M)}g=g.next}while(g!==d)}}function Hc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function kh(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Q0(i){var s=i.alternate;s!==null&&(i.alternate=null,Q0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Fr],delete s[Gl],delete s[eh],delete s[CE],delete s[RE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function J0(i){return i.tag===5||i.tag===3||i.tag===4}function ev(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||J0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function zh(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=vc));else if(d!==4&&(i=i.child,i!==null))for(zh(i,s,l),i=i.sibling;i!==null;)zh(i,s,l),i=i.sibling}function Bh(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Bh(i,s,l),i=i.sibling;i!==null;)Bh(i,s,l),i=i.sibling}var Xn=null,Tr=!1;function Fs(i,s,l){for(l=l.child;l!==null;)tv(i,s,l),l=l.sibling}function tv(i,s,l){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Ot,l)}catch{}switch(l.tag){case 5:ei||Aa(l,s);case 6:var d=Xn,g=Tr;Xn=null,Fs(i,s,l),Xn=d,Tr=g,Xn!==null&&(Tr?(i=Xn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Xn.removeChild(l.stateNode));break;case 18:Xn!==null&&(Tr?(i=Xn,l=l.stateNode,i.nodeType===8?Jd(i.parentNode,l):i.nodeType===1&&Jd(i,l),Dl(i)):Jd(Xn,l.stateNode));break;case 4:d=Xn,g=Tr,Xn=l.stateNode.containerInfo,Tr=!0,Fs(i,s,l),Xn=d,Tr=g;break;case 0:case 11:case 14:case 15:if(!ei&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var M=g,A=M.destroy;M=M.tag,A!==void 0&&((M&2)!==0||(M&4)!==0)&&Fh(l,s,A),g=g.next}while(g!==d)}Fs(i,s,l);break;case 1:if(!ei&&(Aa(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(B){xn(l,s,B)}Fs(i,s,l);break;case 21:Fs(i,s,l);break;case 22:l.mode&1?(ei=(d=ei)||l.memoizedState!==null,Fs(i,s,l),ei=d):Fs(i,s,l);break;default:Fs(i,s,l)}}function nv(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new WE),s.forEach(function(d){var g=e1.bind(null,i,d);l.has(d)||(l.add(d),d.then(g,g))})}}function Ar(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var g=l[d];try{var M=i,A=s,B=A;e:for(;B!==null;){switch(B.tag){case 5:Xn=B.stateNode,Tr=!1;break e;case 3:Xn=B.stateNode.containerInfo,Tr=!0;break e;case 4:Xn=B.stateNode.containerInfo,Tr=!0;break e}B=B.return}if(Xn===null)throw Error(t(160));tv(M,A,g),Xn=null,Tr=!1;var W=g.alternate;W!==null&&(W.return=null),g.return=null}catch(ce){xn(g,s,ce)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)iv(s,i),s=s.sibling}function iv(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ar(s,i),Br(i),d&4){try{eu(3,i,i.return),Hc(3,i)}catch(Qe){xn(i,i.return,Qe)}try{eu(5,i,i.return)}catch(Qe){xn(i,i.return,Qe)}}break;case 1:Ar(s,i),Br(i),d&512&&l!==null&&Aa(l,l.return);break;case 5:if(Ar(s,i),Br(i),d&512&&l!==null&&Aa(l,l.return),i.flags&32){var g=i.stateNode;try{gt(g,"")}catch(Qe){xn(i,i.return,Qe)}}if(d&4&&(g=i.stateNode,g!=null)){var M=i.memoizedProps,A=l!==null?l.memoizedProps:M,B=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{B==="input"&&M.type==="radio"&&M.name!=null&&ht(g,M),at(B,A);var ce=at(B,M);for(A=0;A<W.length;A+=2){var Se=W[A],Ee=W[A+1];Se==="style"?it(g,Ee):Se==="dangerouslySetInnerHTML"?Oe(g,Ee):Se==="children"?gt(g,Ee):C(g,Se,Ee,ce)}switch(B){case"input":ee(g,M);break;case"textarea":_e(g,M);break;case"select":var ye=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!M.multiple;var Ge=M.value;Ge!=null?U(g,!!M.multiple,Ge,!1):ye!==!!M.multiple&&(M.defaultValue!=null?U(g,!!M.multiple,M.defaultValue,!0):U(g,!!M.multiple,M.multiple?[]:"",!1))}g[Gl]=M}catch(Qe){xn(i,i.return,Qe)}}break;case 6:if(Ar(s,i),Br(i),d&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,M=i.memoizedProps;try{g.nodeValue=M}catch(Qe){xn(i,i.return,Qe)}}break;case 3:if(Ar(s,i),Br(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Dl(s.containerInfo)}catch(Qe){xn(i,i.return,Qe)}break;case 4:Ar(s,i),Br(i);break;case 13:Ar(s,i),Br(i),g=i.child,g.flags&8192&&(M=g.memoizedState!==null,g.stateNode.isHidden=M,!M||g.alternate!==null&&g.alternate.memoizedState!==null||(Gh=xe())),d&4&&nv(i);break;case 22:if(Se=l!==null&&l.memoizedState!==null,i.mode&1?(ei=(ce=ei)||Se,Ar(s,i),ei=ce):Ar(s,i),Br(i),d&8192){if(ce=i.memoizedState!==null,(i.stateNode.isHidden=ce)&&!Se&&(i.mode&1)!==0)for(Ye=i,Se=i.child;Se!==null;){for(Ee=Ye=Se;Ye!==null;){switch(ye=Ye,Ge=ye.child,ye.tag){case 0:case 11:case 14:case 15:eu(4,ye,ye.return);break;case 1:Aa(ye,ye.return);var Ke=ye.stateNode;if(typeof Ke.componentWillUnmount=="function"){d=ye,l=ye.return;try{s=d,Ke.props=s.memoizedProps,Ke.state=s.memoizedState,Ke.componentWillUnmount()}catch(Qe){xn(d,l,Qe)}}break;case 5:Aa(ye,ye.return);break;case 22:if(ye.memoizedState!==null){ov(Ee);continue}}Ge!==null?(Ge.return=ye,Ye=Ge):ov(Ee)}Se=Se.sibling}e:for(Se=null,Ee=i;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{g=Ee.stateNode,ce?(M=g.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(B=Ee.stateNode,W=Ee.memoizedProps.style,A=W!=null&&W.hasOwnProperty("display")?W.display:null,B.style.display=ot("display",A))}catch(Qe){xn(i,i.return,Qe)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=ce?"":Ee.memoizedProps}catch(Qe){xn(i,i.return,Qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===i)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===i)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===i)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Ar(s,i),Br(i),d&4&&nv(i);break;case 21:break;default:Ar(s,i),Br(i)}}function Br(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(J0(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(gt(g,""),d.flags&=-33);var M=ev(i);Bh(i,M,g);break;case 3:case 4:var A=d.stateNode.containerInfo,B=ev(i);zh(i,B,A);break;default:throw Error(t(161))}}catch(W){xn(i,i.return,W)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function YE(i,s,l){Ye=i,rv(i)}function rv(i,s,l){for(var d=(i.mode&1)!==0;Ye!==null;){var g=Ye,M=g.child;if(g.tag===22&&d){var A=g.memoizedState!==null||Bc;if(!A){var B=g.alternate,W=B!==null&&B.memoizedState!==null||ei;B=Bc;var ce=ei;if(Bc=A,(ei=W)&&!ce)for(Ye=g;Ye!==null;)A=Ye,W=A.child,A.tag===22&&A.memoizedState!==null?av(g):W!==null?(W.return=A,Ye=W):av(g);for(;M!==null;)Ye=M,rv(M),M=M.sibling;Ye=g,Bc=B,ei=ce}sv(i)}else(g.subtreeFlags&8772)!==0&&M!==null?(M.return=g,Ye=M):sv(i)}}function sv(i){for(;Ye!==null;){var s=Ye;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:ei||Hc(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!ei)if(l===null)d.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:wr(s.type,l.memoizedProps);d.componentDidUpdate(g,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var M=s.updateQueue;M!==null&&o0(s,M,d);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}o0(s,A,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var W=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ce=s.alternate;if(ce!==null){var Se=ce.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&Dl(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ei||s.flags&512&&kh(s)}catch(ye){xn(s,s.return,ye)}}if(s===i){Ye=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function ov(i){for(;Ye!==null;){var s=Ye;if(s===i){Ye=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function av(i){for(;Ye!==null;){var s=Ye;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Hc(4,s)}catch(W){xn(s,l,W)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var g=s.return;try{d.componentDidMount()}catch(W){xn(s,g,W)}}var M=s.return;try{kh(s)}catch(W){xn(s,M,W)}break;case 5:var A=s.return;try{kh(s)}catch(W){xn(s,A,W)}}}catch(W){xn(s,s.return,W)}if(s===i){Ye=null;break}var B=s.sibling;if(B!==null){B.return=s.return,Ye=B;break}Ye=s.return}}var jE=Math.ceil,Vc=w.ReactCurrentDispatcher,Hh=w.ReactCurrentOwner,fr=w.ReactCurrentBatchConfig,Bt=0,kn=null,Tn=null,Yn=0,Vi=0,Ca=Ds(0),Ln=0,tu=null,Eo=0,Gc=0,Vh=0,nu=null,wi=null,Gh=0,Ra=1/0,ss=null,Wc=!1,Wh=null,ks=null,Xc=!1,zs=null,Yc=0,iu=0,Xh=null,jc=-1,qc=0;function fi(){return(Bt&6)!==0?xe():jc!==-1?jc:jc=xe()}function Bs(i){return(i.mode&1)===0?1:(Bt&2)!==0&&Yn!==0?Yn&-Yn:PE.transition!==null?(qc===0&&(qc=ui()),qc):(i=Kt,i!==0||(i=window.event,i=i===void 0?16:u_(i.type)),i)}function Cr(i,s,l,d){if(50<iu)throw iu=0,Xh=null,Error(t(185));yi(i,l,d),((Bt&2)===0||i!==kn)&&(i===kn&&((Bt&2)===0&&(Gc|=l),Ln===4&&Hs(i,Yn)),Ti(i,d),l===1&&Bt===0&&(s.mode&1)===0&&(Ra=xe()+500,Mc&&Ns()))}function Ti(i,s){var l=i.callbackNode;sr(i,s);var d=Or(i,i===kn?Yn:0);if(d===0)l!==null&&ae(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&ae(l),s===1)i.tag===0?bE(uv.bind(null,i)):q_(uv.bind(null,i)),TE(function(){(Bt&6)===0&&Ns()}),l=null;else{switch(t_(d)){case 1:l=He;break;case 4:l=mt;break;case 16:l=_t;break;case 536870912:l=yt;break;default:l=_t}l=_v(l,lv.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function lv(i,s){if(jc=-1,qc=0,(Bt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(ba()&&i.callbackNode!==l)return null;var d=Or(i,i===kn?Yn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=$c(i,d);else{s=d;var g=Bt;Bt|=2;var M=fv();(kn!==i||Yn!==s)&&(ss=null,Ra=xe()+500,To(i,s));do try{KE();break}catch(B){cv(i,B)}while(!0);uh(),Vc.current=M,Bt=g,Tn!==null?s=0:(kn=null,Yn=0,s=Ln)}if(s!==0){if(s===2&&(g=Zr(i),g!==0&&(d=g,s=Yh(i,g))),s===1)throw l=tu,To(i,0),Hs(i,d),Ti(i,xe()),l;if(s===6)Hs(i,d);else{if(g=i.current.alternate,(d&30)===0&&!qE(g)&&(s=$c(i,d),s===2&&(M=Zr(i),M!==0&&(d=M,s=Yh(i,M))),s===1))throw l=tu,To(i,0),Hs(i,d),Ti(i,xe()),l;switch(i.finishedWork=g,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Ao(i,wi,ss);break;case 3:if(Hs(i,d),(d&130023424)===d&&(s=Gh+500-xe(),10<s)){if(Or(i,0)!==0)break;if(g=i.suspendedLanes,(g&d)!==d){fi(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Qd(Ao.bind(null,i,wi,ss),s);break}Ao(i,wi,ss);break;case 4:if(Hs(i,d),(d&4194240)===d)break;for(s=i.eventTimes,g=-1;0<d;){var A=31-wt(d);M=1<<A,A=s[A],A>g&&(g=A),d&=~M}if(d=g,d=xe()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*jE(d/1960))-d,10<d){i.timeoutHandle=Qd(Ao.bind(null,i,wi,ss),d);break}Ao(i,wi,ss);break;case 5:Ao(i,wi,ss);break;default:throw Error(t(329))}}}return Ti(i,xe()),i.callbackNode===l?lv.bind(null,i):null}function Yh(i,s){var l=nu;return i.current.memoizedState.isDehydrated&&(To(i,s).flags|=256),i=$c(i,s),i!==2&&(s=wi,wi=l,s!==null&&jh(s)),i}function jh(i){wi===null?wi=i:wi.push.apply(wi,i)}function qE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var g=l[d],M=g.getSnapshot;g=g.value;try{if(!Mr(M(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Hs(i,s){for(s&=~Vh,s&=~Gc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-wt(s),d=1<<l;i[l]=-1,s&=~d}}function uv(i){if((Bt&6)!==0)throw Error(t(327));ba();var s=Or(i,0);if((s&1)===0)return Ti(i,xe()),null;var l=$c(i,s);if(i.tag!==0&&l===2){var d=Zr(i);d!==0&&(s=d,l=Yh(i,d))}if(l===1)throw l=tu,To(i,0),Hs(i,s),Ti(i,xe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ao(i,wi,ss),Ti(i,xe()),null}function qh(i,s){var l=Bt;Bt|=1;try{return i(s)}finally{Bt=l,Bt===0&&(Ra=xe()+500,Mc&&Ns())}}function wo(i){zs!==null&&zs.tag===0&&(Bt&6)===0&&ba();var s=Bt;Bt|=1;var l=fr.transition,d=Kt;try{if(fr.transition=null,Kt=1,i)return i()}finally{Kt=d,fr.transition=l,Bt=s,(Bt&6)===0&&Ns()}}function $h(){Vi=Ca.current,cn(Ca)}function To(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,wE(l)),Tn!==null)for(l=Tn.return;l!==null;){var d=l;switch(rh(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&yc();break;case 3:wa(),cn(Si),cn(Zn),_h();break;case 5:mh(d);break;case 4:wa();break;case 13:cn(pn);break;case 19:cn(pn);break;case 10:ch(d.type._context);break;case 22:case 23:$h()}l=l.return}if(kn=i,Tn=i=Vs(i.current,null),Yn=Vi=s,Ln=0,tu=null,Vh=Gc=Eo=0,wi=nu=null,yo!==null){for(s=0;s<yo.length;s++)if(l=yo[s],d=l.interleaved,d!==null){l.interleaved=null;var g=d.next,M=l.pending;if(M!==null){var A=M.next;M.next=g,d.next=A}l.pending=d}yo=null}return i}function cv(i,s){do{var l=Tn;try{if(uh(),Dc.current=Oc,Ic){for(var d=mn.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}Ic=!1}if(Mo=0,Fn=Pn=mn=null,$l=!1,Kl=0,Hh.current=null,l===null||l.return===null){Ln=1,tu=s,Tn=null;break}e:{var M=i,A=l.return,B=l,W=s;if(s=Yn,B.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ce=W,Se=B,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ge=U0(A);if(Ge!==null){Ge.flags&=-257,O0(Ge,A,B,M,s),Ge.mode&1&&N0(M,ce,s),s=Ge,W=ce;var Ke=s.updateQueue;if(Ke===null){var Qe=new Set;Qe.add(W),s.updateQueue=Qe}else Ke.add(W);break e}else{if((s&1)===0){N0(M,ce,s),Kh();break e}W=Error(t(426))}}else if(dn&&B.mode&1){var Mn=U0(A);if(Mn!==null){(Mn.flags&65536)===0&&(Mn.flags|=256),O0(Mn,A,B,M,s),ah(Ta(W,B));break e}}M=W=Ta(W,B),Ln!==4&&(Ln=2),nu===null?nu=[M]:nu.push(M),M=A;do{switch(M.tag){case 3:M.flags|=65536,s&=-s,M.lanes|=s;var re=D0(M,W,s);s0(M,re);break e;case 1:B=W;var $=M.type,le=M.stateNode;if((M.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(ks===null||!ks.has(le)))){M.flags|=65536,s&=-s,M.lanes|=s;var Ae=I0(M,B,s);s0(M,Ae);break e}}M=M.return}while(M!==null)}hv(l)}catch(tt){s=tt,Tn===l&&l!==null&&(Tn=l=l.return);continue}break}while(!0)}function fv(){var i=Vc.current;return Vc.current=Oc,i===null?Oc:i}function Kh(){(Ln===0||Ln===3||Ln===2)&&(Ln=4),kn===null||(Eo&268435455)===0&&(Gc&268435455)===0||Hs(kn,Yn)}function $c(i,s){var l=Bt;Bt|=2;var d=fv();(kn!==i||Yn!==s)&&(ss=null,To(i,s));do try{$E();break}catch(g){cv(i,g)}while(!0);if(uh(),Bt=l,Vc.current=d,Tn!==null)throw Error(t(261));return kn=null,Yn=0,Ln}function $E(){for(;Tn!==null;)dv(Tn)}function KE(){for(;Tn!==null&&!Z();)dv(Tn)}function dv(i){var s=gv(i.alternate,i,Vi);i.memoizedProps=i.pendingProps,s===null?hv(i):Tn=s,Hh.current=null}function hv(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=VE(l,s,Vi),l!==null){Tn=l;return}}else{if(l=GE(l,s),l!==null){l.flags&=32767,Tn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ln=6,Tn=null;return}}if(s=s.sibling,s!==null){Tn=s;return}Tn=s=i}while(s!==null);Ln===0&&(Ln=5)}function Ao(i,s,l){var d=Kt,g=fr.transition;try{fr.transition=null,Kt=1,ZE(i,s,l,d)}finally{fr.transition=g,Kt=d}return null}function ZE(i,s,l,d){do ba();while(zs!==null);if((Bt&6)!==0)throw Error(t(327));l=i.finishedWork;var g=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var M=l.lanes|l.childLanes;if(ic(i,M),i===kn&&(Tn=kn=null,Yn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Xc||(Xc=!0,_v(_t,function(){return ba(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=fr.transition,fr.transition=null;var A=Kt;Kt=1;var B=Bt;Bt|=4,Hh.current=null,XE(i,l),iv(l,i),_E(Kd),oc=!!$d,Kd=$d=null,i.current=l,YE(l),Te(),Bt=B,Kt=A,fr.transition=M}else i.current=l;if(Xc&&(Xc=!1,zs=i,Yc=g),M=i.pendingLanes,M===0&&(ks=null),ln(l.stateNode),Ti(i,xe()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)g=s[l],d(g.value,{componentStack:g.stack,digest:g.digest});if(Wc)throw Wc=!1,i=Wh,Wh=null,i;return(Yc&1)!==0&&i.tag!==0&&ba(),M=i.pendingLanes,(M&1)!==0?i===Xh?iu++:(iu=0,Xh=i):iu=0,Ns(),null}function ba(){if(zs!==null){var i=t_(Yc),s=fr.transition,l=Kt;try{if(fr.transition=null,Kt=16>i?16:i,zs===null)var d=!1;else{if(i=zs,zs=null,Yc=0,(Bt&6)!==0)throw Error(t(331));var g=Bt;for(Bt|=4,Ye=i.current;Ye!==null;){var M=Ye,A=M.child;if((Ye.flags&16)!==0){var B=M.deletions;if(B!==null){for(var W=0;W<B.length;W++){var ce=B[W];for(Ye=ce;Ye!==null;){var Se=Ye;switch(Se.tag){case 0:case 11:case 15:eu(8,Se,M)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,Ye=Ee;else for(;Ye!==null;){Se=Ye;var ye=Se.sibling,Ge=Se.return;if(Q0(Se),Se===ce){Ye=null;break}if(ye!==null){ye.return=Ge,Ye=ye;break}Ye=Ge}}}var Ke=M.alternate;if(Ke!==null){var Qe=Ke.child;if(Qe!==null){Ke.child=null;do{var Mn=Qe.sibling;Qe.sibling=null,Qe=Mn}while(Qe!==null)}}Ye=M}}if((M.subtreeFlags&2064)!==0&&A!==null)A.return=M,Ye=A;else e:for(;Ye!==null;){if(M=Ye,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:eu(9,M,M.return)}var re=M.sibling;if(re!==null){re.return=M.return,Ye=re;break e}Ye=M.return}}var $=i.current;for(Ye=$;Ye!==null;){A=Ye;var le=A.child;if((A.subtreeFlags&2064)!==0&&le!==null)le.return=A,Ye=le;else e:for(A=$;Ye!==null;){if(B=Ye,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Hc(9,B)}}catch(tt){xn(B,B.return,tt)}if(B===A){Ye=null;break e}var Ae=B.sibling;if(Ae!==null){Ae.return=B.return,Ye=Ae;break e}Ye=B.return}}if(Bt=g,Ns(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Ot,i)}catch{}d=!0}return d}finally{Kt=l,fr.transition=s}}return!1}function pv(i,s,l){s=Ta(l,s),s=D0(i,s,1),i=Os(i,s,1),s=fi(),i!==null&&(yi(i,1,s),Ti(i,s))}function xn(i,s,l){if(i.tag===3)pv(i,i,l);else for(;s!==null;){if(s.tag===3){pv(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ks===null||!ks.has(d))){i=Ta(l,i),i=I0(s,i,1),s=Os(s,i,1),i=fi(),s!==null&&(yi(s,1,i),Ti(s,i));break}}s=s.return}}function QE(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=fi(),i.pingedLanes|=i.suspendedLanes&l,kn===i&&(Yn&l)===l&&(Ln===4||Ln===3&&(Yn&130023424)===Yn&&500>xe()-Gh?To(i,0):Vh|=l),Ti(i,s)}function mv(i,s){s===0&&((i.mode&1)===0?s=1:(s=Sr,Sr<<=1,(Sr&130023424)===0&&(Sr=4194304)));var l=fi();i=ns(i,s),i!==null&&(yi(i,s,l),Ti(i,l))}function JE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),mv(i,l)}function e1(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,g=i.memoizedState;g!==null&&(l=g.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),mv(i,l)}var gv;gv=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Si.current)Ei=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Ei=!1,HE(i,s,l);Ei=(i.flags&131072)!==0}else Ei=!1,dn&&(s.flags&1048576)!==0&&$_(s,wc,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;zc(i,s),i=s.pendingProps;var g=_a(s,Zn.current);Ea(s,l),g=yh(null,s,d,i,g,l);var M=Sh();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Mi(d)?(M=!0,Sc(s)):M=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,hh(s),g.updater=Fc,s.stateNode=g,g._reactInternals=s,Ch(s,d,i,l),s=Lh(null,s,d,!0,M,l)):(s.tag=0,dn&&M&&ih(s),ci(null,s,g,l),s=s.child),s;case 16:d=s.elementType;e:{switch(zc(i,s),i=s.pendingProps,g=d._init,d=g(d._payload),s.type=d,g=s.tag=n1(d),i=wr(d,i),g){case 0:s=Ph(null,s,d,i,l);break e;case 1:s=V0(null,s,d,i,l);break e;case 11:s=F0(null,s,d,i,l);break e;case 14:s=k0(null,s,d,wr(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:wr(d,g),Ph(i,s,d,g,l);case 1:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:wr(d,g),V0(i,s,d,g,l);case 3:e:{if(G0(s),i===null)throw Error(t(387));d=s.pendingProps,M=s.memoizedState,g=M.element,r0(i,s),Pc(s,d,null,l);var A=s.memoizedState;if(d=A.element,M.isDehydrated)if(M={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=M,s.memoizedState=M,s.flags&256){g=Ta(Error(t(423)),s),s=W0(i,s,d,l,g);break e}else if(d!==g){g=Ta(Error(t(424)),s),s=W0(i,s,d,l,g);break e}else for(Hi=Ls(s.stateNode.containerInfo.firstChild),Bi=s,dn=!0,Er=null,l=n0(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ya(),d===g){s=rs(i,s,l);break e}ci(i,s,d,l)}s=s.child}return s;case 5:return a0(s),i===null&&oh(s),d=s.type,g=s.pendingProps,M=i!==null?i.memoizedProps:null,A=g.children,Zd(d,g)?A=null:M!==null&&Zd(d,M)&&(s.flags|=32),H0(i,s),ci(i,s,A,l),s.child;case 6:return i===null&&oh(s),null;case 13:return X0(i,s,l);case 4:return ph(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=Sa(s,null,d,l):ci(i,s,d,l),s.child;case 11:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:wr(d,g),F0(i,s,d,g,l);case 7:return ci(i,s,s.pendingProps,l),s.child;case 8:return ci(i,s,s.pendingProps.children,l),s.child;case 12:return ci(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,g=s.pendingProps,M=s.memoizedProps,A=g.value,on(Cc,d._currentValue),d._currentValue=A,M!==null)if(Mr(M.value,A)){if(M.children===g.children&&!Si.current){s=rs(i,s,l);break e}}else for(M=s.child,M!==null&&(M.return=s);M!==null;){var B=M.dependencies;if(B!==null){A=M.child;for(var W=B.firstContext;W!==null;){if(W.context===d){if(M.tag===1){W=is(-1,l&-l),W.tag=2;var ce=M.updateQueue;if(ce!==null){ce=ce.shared;var Se=ce.pending;Se===null?W.next=W:(W.next=Se.next,Se.next=W),ce.pending=W}}M.lanes|=l,W=M.alternate,W!==null&&(W.lanes|=l),fh(M.return,l,s),B.lanes|=l;break}W=W.next}}else if(M.tag===10)A=M.type===s.type?null:M.child;else if(M.tag===18){if(A=M.return,A===null)throw Error(t(341));A.lanes|=l,B=A.alternate,B!==null&&(B.lanes|=l),fh(A,l,s),A=M.sibling}else A=M.child;if(A!==null)A.return=M;else for(A=M;A!==null;){if(A===s){A=null;break}if(M=A.sibling,M!==null){M.return=A.return,A=M;break}A=A.return}M=A}ci(i,s,g.children,l),s=s.child}return s;case 9:return g=s.type,d=s.pendingProps.children,Ea(s,l),g=ur(g),d=d(g),s.flags|=1,ci(i,s,d,l),s.child;case 14:return d=s.type,g=wr(d,s.pendingProps),g=wr(d.type,g),k0(i,s,d,g,l);case 15:return z0(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,g=s.pendingProps,g=s.elementType===d?g:wr(d,g),zc(i,s),s.tag=1,Mi(d)?(i=!0,Sc(s)):i=!1,Ea(s,l),P0(s,d,g),Ch(s,d,g,l),Lh(null,s,d,!0,i,l);case 19:return j0(i,s,l);case 22:return B0(i,s,l)}throw Error(t(156,s.tag))};function _v(i,s){return se(i,s)}function t1(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dr(i,s,l,d){return new t1(i,s,l,d)}function Zh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function n1(i){if(typeof i=="function")return Zh(i)?1:0;if(i!=null){if(i=i.$$typeof,i===G)return 11;if(i===ue)return 14}return 2}function Vs(i,s){var l=i.alternate;return l===null?(l=dr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Kc(i,s,l,d,g,M){var A=2;if(d=i,typeof i=="function")Zh(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case D:return Co(l.children,g,M,s);case k:A=8,g|=8;break;case b:return i=dr(12,l,s,g|2),i.elementType=b,i.lanes=M,i;case j:return i=dr(13,l,s,g),i.elementType=j,i.lanes=M,i;case K:return i=dr(19,l,s,g),i.elementType=K,i.lanes=M,i;case q:return Zc(l,g,M,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case T:A=10;break e;case H:A=9;break e;case G:A=11;break e;case ue:A=14;break e;case J:A=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=dr(A,l,s,g),s.elementType=i,s.type=d,s.lanes=M,s}function Co(i,s,l,d){return i=dr(7,i,d,s),i.lanes=l,i}function Zc(i,s,l,d){return i=dr(22,i,d,s),i.elementType=q,i.lanes=l,i.stateNode={isHidden:!1},i}function Qh(i,s,l){return i=dr(6,i,null,s),i.lanes=l,i}function Jh(i,s,l){return s=dr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function i1(i,s,l,d,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=or(0),this.expirationTimes=or(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=or(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function ep(i,s,l,d,g,M,A,B,W){return i=new i1(i,s,l,B,W),s===1?(s=1,M===!0&&(s|=8)):s=0,M=dr(3,null,null,s),i.current=M,M.stateNode=i,M.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},hh(M),i}function r1(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function vv(i){if(!i)return Is;i=i._reactInternals;e:{if(Lt(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Mi(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Mi(l))return Y_(i,l,s)}return s}function xv(i,s,l,d,g,M,A,B,W){return i=ep(l,d,!0,i,g,M,A,B,W),i.context=vv(null),l=i.current,d=fi(),g=Bs(l),M=is(d,g),M.callback=s??null,Os(l,M,g),i.current.lanes=g,yi(i,g,d),Ti(i,d),i}function Qc(i,s,l,d){var g=s.current,M=fi(),A=Bs(g);return l=vv(l),s.context===null?s.context=l:s.pendingContext=l,s=is(M,A),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Os(g,s,A),i!==null&&(Cr(i,g,A,M),bc(i,g,A)),A}function Jc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function yv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function tp(i,s){yv(i,s),(i=i.alternate)&&yv(i,s)}function s1(){return null}var Sv=typeof reportError=="function"?reportError:function(i){console.error(i)};function np(i){this._internalRoot=i}ef.prototype.render=np.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Qc(i,s,null,null)},ef.prototype.unmount=np.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;wo(function(){Qc(null,i,null,null)}),s[Qr]=null}};function ef(i){this._internalRoot=i}ef.prototype.unstable_scheduleHydration=function(i){if(i){var s=r_();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Rs.length&&s!==0&&s<Rs[l].priority;l++);Rs.splice(l,0,i),l===0&&a_(i)}};function ip(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function tf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Mv(){}function o1(i,s,l,d,g){if(g){if(typeof d=="function"){var M=d;d=function(){var ce=Jc(A);M.call(ce)}}var A=xv(s,d,i,0,null,!1,!1,"",Mv);return i._reactRootContainer=A,i[Qr]=A.current,Hl(i.nodeType===8?i.parentNode:i),wo(),A}for(;g=i.lastChild;)i.removeChild(g);if(typeof d=="function"){var B=d;d=function(){var ce=Jc(W);B.call(ce)}}var W=ep(i,0,!1,null,null,!1,!1,"",Mv);return i._reactRootContainer=W,i[Qr]=W.current,Hl(i.nodeType===8?i.parentNode:i),wo(function(){Qc(s,W,l,d)}),W}function nf(i,s,l,d,g){var M=l._reactRootContainer;if(M){var A=M;if(typeof g=="function"){var B=g;g=function(){var W=Jc(A);B.call(W)}}Qc(s,A,i,g)}else A=o1(l,s,i,g,d);return Jc(A)}n_=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=bn(s.pendingLanes);l!==0&&(Cd(s,l|1),Ti(s,xe()),(Bt&6)===0&&(Ra=xe()+500,Ns()))}break;case 13:wo(function(){var d=ns(i,1);if(d!==null){var g=fi();Cr(d,i,1,g)}}),tp(i,1)}},Rd=function(i){if(i.tag===13){var s=ns(i,134217728);if(s!==null){var l=fi();Cr(s,i,134217728,l)}tp(i,134217728)}},i_=function(i){if(i.tag===13){var s=Bs(i),l=ns(i,s);if(l!==null){var d=fi();Cr(l,i,s,d)}tp(i,s)}},r_=function(){return Kt},s_=function(i,s){var l=Kt;try{return Kt=i,s()}finally{Kt=l}},De=function(i,s,l){switch(s){case"input":if(ee(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var g=xc(d);if(!g)throw Error(t(90));ut(d),ee(d,g)}}}break;case"textarea":_e(i,l);break;case"select":s=l.value,s!=null&&U(i,!!l.multiple,s,!1)}},Ft=qh,an=wo;var a1={usingClientEntryPoint:!1,Events:[Wl,ma,xc,Ue,pt,qh]},ru={findFiberByHostInstance:go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l1={bundleType:ru.bundleType,version:ru.version,rendererPackageName:ru.rendererPackageName,rendererConfig:ru.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=L(i),i===null?null:i.stateNode},findFiberByHostInstance:ru.findFiberByHostInstance||s1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rf.isDisabled&&rf.supportsFiber)try{Ot=rf.inject(l1),Tt=rf}catch{}}return Ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a1,Ai.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(s))throw Error(t(200));return r1(i,s,null,l)},Ai.createRoot=function(i,s){if(!ip(i))throw Error(t(299));var l=!1,d="",g=Sv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=ep(i,1,!1,null,null,l,!1,d,g),i[Qr]=s.current,Hl(i.nodeType===8?i.parentNode:i),new np(s)},Ai.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=L(s),i=i===null?null:i.stateNode,i},Ai.flushSync=function(i){return wo(i)},Ai.hydrate=function(i,s,l){if(!tf(s))throw Error(t(200));return nf(null,i,s,!0,l)},Ai.hydrateRoot=function(i,s,l){if(!ip(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,g=!1,M="",A=Sv;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=xv(s,null,i,1,l??null,g,!1,M,A),i[Qr]=s.current,Hl(i),d)for(i=0;i<d.length;i++)l=d[i],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new ef(s)},Ai.render=function(i,s,l){if(!tf(s))throw Error(t(200));return nf(null,i,s,!1,l)},Ai.unmountComponentAtNode=function(i){if(!tf(i))throw Error(t(40));return i._reactRootContainer?(wo(function(){nf(null,null,i,!1,function(){i._reactRootContainer=null,i[Qr]=null})}),!0):!1},Ai.unstable_batchedUpdates=qh,Ai.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!tf(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return nf(i,s,l,!1,d)},Ai.version="18.3.1-next-f1338f8080-20240426",Ai}var Pv;function x1(){if(Pv)return op.exports;Pv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),op.exports=v1(),op.exports}var Lv;function y1(){if(Lv)return sf;Lv=1;var o=x1();return sf.createRoot=o.createRoot,sf.hydrateRoot=o.hydrateRoot,sf}var S1=y1();const M1=Ty(S1),E1="modulepreload",w1=function(o){return"/portfolio/"+o},Dv={},$u=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=u(t.map(h=>{if(h=w1(h),h in Dv)return;Dv[h]=!0;const p=h.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":E1,p||(m.as="script"),m.crossOrigin="",m.href=h,f&&m.setAttribute("nonce",f),document.head.appendChild(m),p)return new Promise((_,E)=>{m.addEventListener("load",_),m.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return r.then(u=>{for(const c of u||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};var Iv="1.3.23";function Ay(o,e,t){return Math.max(o,Math.min(e,t))}function T1(o,e,t){return(1-t)*o+t*e}function A1(o,e,t,n){return T1(o,e,1-Math.exp(-t*n))}function C1(o,e){return(o%e+e)%e}var R1=class{constructor(){st(this,"isRunning",!1);st(this,"value",0);st(this,"from",0);st(this,"to",0);st(this,"currentTime",0);st(this,"lerp");st(this,"duration");st(this,"easing");st(this,"onUpdate")}advance(o){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=o;const n=Ay(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=A1(this.value,this.to,this.lerp*60,o),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(o,e,{lerp:t,duration:n,easing:r,onStart:a,onUpdate:u}){this.from=this.value=o,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=u}};function b1(o,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,o.apply(this,n)},e)}}var P1=class{constructor(o,e,{autoResize:t=!0,debounce:n=250}={}){st(this,"width",0);st(this,"height",0);st(this,"scrollHeight",0);st(this,"scrollWidth",0);st(this,"debouncedResize");st(this,"wrapperResizeObserver");st(this,"contentResizeObserver");st(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});st(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});st(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=o,this.content=e,t&&(this.debouncedResize=b1(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var o,e;(o=this.wrapperResizeObserver)==null||o.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Cy=class{constructor(){st(this,"events",{})}emit(o,...e){var n;const t=this.events[o]||[];for(let r=0,a=t.length;r<a;r++)(n=t[r])==null||n.call(t,...e)}on(o,e){return this.events[o]?this.events[o].push(e):this.events[o]=[e],()=>{var t;this.events[o]=(t=this.events[o])==null?void 0:t.filter(n=>e!==n)}}off(o,e){var t;this.events[o]=(t=this.events[o])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const L1=100/6,Ws={passive:!1};function Nv(o,e){return o===1?L1:o===2?e:1}var D1=class{constructor(o,e={wheelMultiplier:1,touchMultiplier:1}){st(this,"touchStart",{x:0,y:0});st(this,"lastDelta",{x:0,y:0});st(this,"window",{width:0,height:0});st(this,"emitter",new Cy);st(this,"onTouchStart",o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:o})});st(this,"onTouchMove",o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:o})});st(this,"onTouchEnd",o=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:o})});st(this,"onWheel",o=>{let{deltaX:e,deltaY:t,deltaMode:n}=o;const r=Nv(n,this.window.width),a=Nv(n,this.window.height);e*=r,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:o})});st(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=o,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ws),this.element.addEventListener("touchstart",this.onTouchStart,Ws),this.element.addEventListener("touchmove",this.onTouchMove,Ws),this.element.addEventListener("touchend",this.onTouchEnd,Ws)}on(o,e){return this.emitter.on(o,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ws),this.element.removeEventListener("touchstart",this.onTouchStart,Ws),this.element.removeEventListener("touchmove",this.onTouchMove,Ws),this.element.removeEventListener("touchend",this.onTouchEnd,Ws)}};const Uv=o=>Math.min(1,1.001-2**(-10*o));var I1=class{constructor({wrapper:o=window,content:e=document.documentElement,eventsTarget:t=o,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:a=.075,touchInertiaExponent:u=1.7,duration:c,easing:f,lerp:h=.1,infinite:p=!1,orientation:v="vertical",gestureOrientation:m=v==="horizontal"?"both":"vertical",touchMultiplier:_=1,wheelMultiplier:E=1,autoResize:S=!0,prevent:y,virtualScroll:x,overscroll:R=!0,autoRaf:C=!1,anchors:w=!1,autoToggle:F=!1,allowNestedScroll:N=!1,__experimental__naiveDimensions:D=!1,naiveDimensions:k=D,stopInertiaOnNavigate:b=!1}={}){st(this,"_isScrolling",!1);st(this,"_isStopped",!1);st(this,"_isLocked",!1);st(this,"_preventNextNativeScrollEvent",!1);st(this,"_resetVelocityTimeout",null);st(this,"_rafId",null);st(this,"isTouching");st(this,"time",0);st(this,"userData",{});st(this,"lastVelocity",0);st(this,"velocity",0);st(this,"direction",0);st(this,"options");st(this,"targetScroll");st(this,"animatedScroll");st(this,"animate",new R1);st(this,"emitter",new Cy);st(this,"dimensions");st(this,"virtualScroll");st(this,"onScrollEnd",o=>{o instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&o.stopPropagation()});st(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});st(this,"onTransitionEnd",o=>{var e;(e=o.propertyName)!=null&&e.includes("overflow")&&o.target===this.rootElement&&this.checkOverflow()});st(this,"onClick",o=>{const e=o.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${n.hash.split("#")[1]}`;this.scrollTo(a,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});st(this,"onPointerDown",o=>{o.button===1&&this.reset()});st(this,"onVirtualScroll",o=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(o)===!1)return;const{deltaX:e,deltaY:t,event:n}=o;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),a=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const u=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const c=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||c)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const h=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(f.find(E=>{var S,y,x,R,C;return E instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(E))||((S=E.hasAttribute)==null?void 0:S.call(E,"data-lenis-prevent"))||p==="vertical"&&((y=E.hasAttribute)==null?void 0:y.call(E,"data-lenis-prevent-vertical"))||p==="horizontal"&&((x=E.hasAttribute)==null?void 0:x.call(E,"data-lenis-prevent-horizontal"))||r&&((R=E.hasAttribute)==null?void 0:R.call(E,"data-lenis-prevent-touch"))||a&&((C=E.hasAttribute)==null?void 0:C.call(E,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let v=t;this.options.gestureOrientation==="both"?v=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(v=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const m=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(v=Math.sign(v)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+v,{programmatic:!1,...m?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});st(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const o=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-o,this.direction=Math.sign(this.animatedScroll-o),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});st(this,"raf",o=>{const e=o-(this.time||o);this.time=o,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Iv,window.lenis||(window.lenis={}),window.lenis.version=Iv,v==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!o||o===document.documentElement)&&(o=window),typeof c=="number"&&typeof f!="function"?f=Uv:typeof f=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:o,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:a,touchInertiaExponent:u,duration:c,easing:f,lerp:h,infinite:p,gestureOrientation:m,orientation:v,touchMultiplier:_,wheelMultiplier:E,autoResize:S,prevent:y,virtualScroll:x,overscroll:R,autoRaf:C,anchors:w,autoToggle:F,allowNestedScroll:N,naiveDimensions:k,stopInertiaOnNavigate:b},this.dimensions=new P1(o,e,{autoResize:S}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new D1(t,{touchMultiplier:_,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(o,e){return this.emitter.on(o,e)}off(o,e){return this.emitter.off(o,e)}get overflow(){const o=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[o]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(o){this.isHorizontal?this.options.wrapper.scrollTo({left:o,behavior:"instant"}):this.options.wrapper.scrollTo({top:o,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(o,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:a=r?this.options.lerp:void 0,duration:u=r?this.options.duration:void 0,easing:c=r?this.options.easing:void 0,onStart:f,onComplete:h,force:p=!1,userData:v}={}){if((this.isStopped||this.isLocked)&&!p)return;let m=o,_=e;if(typeof m=="string"&&["top","left","start","#"].includes(m))m=0;else if(typeof m=="string"&&["bottom","right","end"].includes(m))m=this.limit;else{let E=null;if(typeof m=="string"?(E=document.querySelector(m),E||(m==="#top"?m=0:console.warn("Lenis: Target not found",m))):m instanceof HTMLElement&&(m!=null&&m.nodeType)&&(E=m),E){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();_-=this.isHorizontal?w.left:w.top}const S=E.getBoundingClientRect(),y=getComputedStyle(E),x=this.isHorizontal?Number.parseFloat(y.scrollMarginLeft):Number.parseFloat(y.scrollMarginTop),R=getComputedStyle(this.rootElement),C=this.isHorizontal?Number.parseFloat(R.scrollPaddingLeft):Number.parseFloat(R.scrollPaddingTop);m=(this.isHorizontal?S.left:S.top)+this.animatedScroll-(Number.isNaN(x)?0:x)-(Number.isNaN(C)?0:C)}}if(typeof m=="number"){if(m+=_,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const E=m-this.animatedScroll;E>this.limit/2?m-=this.limit:E<-this.limit/2&&(m+=this.limit)}}else m=Ay(0,m,this.limit);if(m===this.targetScroll){f==null||f(this),h==null||h(this);return}if(this.userData=v??{},t){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=m),typeof u=="number"&&typeof c!="function"?c=Uv:typeof c=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,m,{duration:u,easing:c,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",f==null||f(this)},onUpdate:(E,S)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),r&&(this.targetScroll=E),S||this.emit(),S&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(o,{deltaX:e,deltaY:t}){const n=Date.now();o._lenis||(o._lenis={});const r=o._lenis;let a,u,c,f,h,p,v,m,_,E;if(n-(r.time??0)>2e3){r.time=Date.now();const N=window.getComputedStyle(o);if(r.computedStyle=N,a=["auto","overlay","scroll"].includes(N.overflowX),u=["auto","overlay","scroll"].includes(N.overflowY),h=["auto"].includes(N.overscrollBehaviorX),p=["auto"].includes(N.overscrollBehaviorY),r.hasOverflowX=a,r.hasOverflowY=u,!(a||u))return!1;v=o.scrollWidth,m=o.scrollHeight,_=o.clientWidth,E=o.clientHeight,c=v>_,f=m>E,r.isScrollableX=c,r.isScrollableY=f,r.scrollWidth=v,r.scrollHeight=m,r.clientWidth=_,r.clientHeight=E,r.hasOverscrollBehaviorX=h,r.hasOverscrollBehaviorY=p}else c=r.isScrollableX,f=r.isScrollableY,a=r.hasOverflowX,u=r.hasOverflowY,v=r.scrollWidth,m=r.scrollHeight,_=r.clientWidth,E=r.clientHeight,h=r.hasOverscrollBehaviorX,p=r.hasOverscrollBehaviorY;if(!(a&&c||u&&f))return!1;const S=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let y,x,R,C,w,F;if(S==="horizontal")y=Math.round(o.scrollLeft),x=v-_,R=e,C=a,w=c,F=h;else if(S==="vertical")y=Math.round(o.scrollTop),x=m-E,R=t,C=u,w=f,F=p;else return!1;return!F&&(y>=x||y<=0)?!0:(R>0?y<x:y>0)&&C&&w}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const o=this.options.wrapper;return this.isHorizontal?o.scrollX??o.scrollLeft:o.scrollY??o.scrollTop}get scroll(){return this.options.infinite?C1(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(o){this._isScrolling!==o&&(this._isScrolling=o,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(o){this._isStopped!==o&&(this._isStopped=o,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(o){this._isLocked!==o&&(this._isLocked=o,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let o="lenis";return this.options.autoToggle&&(o+=" lenis-autoToggle"),this.isStopped&&(o+=" lenis-stopped"),this.isLocked&&(o+=" lenis-locked"),this.isScrolling&&(o+=" lenis-scrolling"),this.isScrolling==="smooth"&&(o+=" lenis-smooth"),o}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(o=>{this.rootElement.classList.add(o)})}cleanUpClassName(){for(const o of Array.from(this.rootElement.classList))(o==="lenis"||o.startsWith("lenis-"))&&this.rootElement.classList.remove(o)}};function ds(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Ry(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var tr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fu={duration:.5,overwrite:!1,delay:0},vg,qn,hn,_r=1e8,rn=1/_r,rm=Math.PI*2,N1=rm/4,U1=0,by=Math.sqrt,O1=Math.cos,F1=Math.sin,Gn=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},Ss=function(e){return typeof e=="number"},xg=function(e){return typeof e>"u"},$r=function(e){return typeof e=="object"},Li=function(e){return e!==!1},yg=function(){return typeof window<"u"},of=function(e){return yn(e)||Gn(e)},Py=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ai=Array.isArray,k1=/random\([^)]+\)/g,z1=/,\s*/g,Ov=/(?:-?\.?\d|\.)+/gi,Ly=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ka=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,up=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dy=/[+-]=-?[.\d]+/,B1=/[^,'"\[\]\s]+/gi,H1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_n,Hr,sm,Sg,ir={},sd={},Iy,Ny=function(e){return(sd=dl(e,ir))&&ki},Mg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ku=function(e,t){return!t&&console.warn(e)},Uy=function(e,t){return e&&(ir[e]=t)&&sd&&(sd[e]=t)||ir},zu=function(){return 0},V1={suppressEvents:!0,isStart:!0,kill:!1},Wf={suppressEvents:!0,kill:!1},G1={suppressEvents:!0},Eg={},ro=[],om={},Oy,ji={},cp={},Fv=30,Xf=[],wg="",Tg=function(e){var t=e[0],n,r;if($r(t)||yn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Xf.length;r--&&!Xf[r].targetTest(t););n=Xf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new rS(e[r],n)))||e.splice(r,1);return e},qo=function(e){return e._gsap||Tg(vr(e))[0]._gsap},Fy=function(e,t,n){return(n=e[t])&&yn(n)?e[t]():xg(n)&&e.getAttribute&&e.getAttribute(t)||n},Di=function(e,t){return(e=e.split(",")).forEach(t)||e},En=function(e){return Math.round(e*1e5)/1e5||0},gn=function(e){return Math.round(e*1e7)/1e7||0},nl=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},W1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},od=function(){var e=ro.length,t=ro.slice(0),n,r;for(om={},ro.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ag=function(e){return!!(e._initted||e._startAt||e.add)},ky=function(e,t,n,r){ro.length&&!qn&&od(),e.render(t,n,!!(qn&&t<0&&Ag(e))),ro.length&&!qn&&od()},zy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(B1).length<2?t:Gn(e)?e.trim():e},By=function(e){return e},rr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},X1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},dl=function(e,t){for(var n in t)e[n]=t[n];return e},kv=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$r(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ad=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Tu=function(e){var t=e.parent||_n,n=e.keyframes?X1(ai(e.keyframes)):rr;if(Li(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Y1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Hy=function(e,t,n,r,a){var u=e[r],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=u,t.parent=t._dp=e,t},yd=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},uo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$o=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},j1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},am=function(e,t,n,r){return e._startAt&&(qn?e._startAt.revert(Wf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},q1=function o(e){return!e||e._ts&&o(e.parent)},zv=function(e){return e._repeat?hl(e._tTime,e=e.duration()+e._rDelay)*e:0},hl=function(e,t){var n=Math.floor(e=gn(e/t));return e&&n===e?n-1:n},ld=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sd=function(e){return e._end=gn(e._start+(e._tDur/Math.abs(e._ts||e._rts||rn)||0))},Md=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=gn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sd(e),n._dirty||$o(n,e)),e},Vy=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ld(e.rawTime(),t),(!t._dur||Ku(0,t.totalDuration(),n)-t._tTime>rn)&&t.render(n,!0)),$o(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-rn}},Wr=function(e,t,n,r){return t.parent&&uo(t),t._start=gn((Ss(n)?n:n||e!==_n?pr(e,n,t):e._time)+t._delay),t._end=gn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hy(e,t,"_first","_last",e._sort?"_start":0),lm(t)||(e._recent=t),r||Vy(e,t),e._ts<0&&Md(e,e._tTime),e},Gy=function(e,t){return(ir.ScrollTrigger||Mg("scrollTrigger",t))&&ir.ScrollTrigger.create(t,e)},Wy=function(e,t,n,r,a){if(Rg(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!qn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Oy!==Zi.frame)return ro.push(e),e._lazy=[a,r],1},$1=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},lm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},K1=function(e,t,n,r){var a=e.ratio,u=t<0||!t&&(!e._start&&$1(e)&&!(!e._initted&&lm(e))||(e._ts<0||e._dp._ts<0)&&!lm(e))?0:1,c=e._rDelay,f=0,h,p,v;if(c&&e._repeat&&(f=Ku(0,e._tDur,t),p=hl(f,c),e._yoyo&&p&1&&(u=1-u),p!==hl(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||qn||r||e._zTime===rn||!t&&e._zTime){if(!e._initted&&Wy(e,t,r,n,f))return;for(v=e._zTime,e._zTime=t||(n?rn:0),n||(n=t&&!v),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=f,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&am(e,t,n,!0),e._onUpdate&&!n&&Ji(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&Ji(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&uo(e,1),!n&&!qn&&(Ji(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Z1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},pl=function(e,t,n,r){var a=e._repeat,u=gn(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:gn(u*(a+1)+e._rDelay*a):u,c>0&&!r&&Md(e,e._tTime=e._tDur*c),e.parent&&Sd(e),n||$o(e.parent,e),e},Bv=function(e){return e instanceof Pi?$o(e):pl(e,e._dur)},Q1={_start:0,endTime:zu,totalDuration:zu},pr=function o(e,t,n){var r=e.labels,a=e._recent||Q1,u=e.duration()>=_r?a.endTime(!1):e._dur,c,f,h;return Gn(t)&&(isNaN(t)||t in r)?(f=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),f==="<"||f===">"?(c>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=u),r[t]):(f=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(f=f/100*(ai(n)?n[0]:n).totalDuration()),c>1?o(e,t.substr(0,c-1),n)+f:u+f)):t==null?u:+t},Au=function(e,t,n){var r=Ss(t[1]),a=(r?2:1)+(e<2?0:1),u=t[a],c,f;if(r&&(u.duration=t[1]),u.parent=n,e){for(c=u,f=n;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=Li(f.vars.inherit)&&f.parent;u.immediateRender=Li(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new Rn(t[0],u,t[a+1])},mo=function(e,t){return e||e===0?t(e):t},Ku=function(e,t,n){return n<e?e:n>t?t:n},si=function(e,t){return!Gn(e)||!(t=H1.exec(e))?"":t[1]},J1=function(e,t,n){return mo(n,function(r){return Ku(e,t,r)})},um=[].slice,Xy=function(e,t){return e&&$r(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$r(e[0]))&&!e.nodeType&&e!==Hr},ew=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return Gn(r)&&!t||Xy(r,1)?(a=n).push.apply(a,vr(r)):n.push(r)})||n},vr=function(e,t,n){return hn&&!t&&hn.selector?hn.selector(e):Gn(e)&&!n&&(sm||!ml())?um.call((t||Sg).querySelectorAll(e),0):ai(e)?ew(e,n):Xy(e)?um.call(e,0):e?[e]:[]},cm=function(e){return e=vr(e)[0]||ku("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vr(t,n.querySelectorAll?n:n===e?ku("Invalid scope")||Sg.createElement("div"):e)}},Yy=function(e){return e.sort(function(){return .5-Math.random()})},jy=function(e){if(yn(e))return e;var t=$r(e)?e:{each:e},n=Ko(t.ease),r=t.from||0,a=parseFloat(t.base)||0,u={},c=r>0&&r<1,f=isNaN(r)||c,h=t.axis,p=r,v=r;return Gn(r)?p=v={center:.5,edges:.5,end:1}[r]||0:!c&&f&&(p=r[0],v=r[1]),function(m,_,E){var S=(E||t).length,y=u[S],x,R,C,w,F,N,D,k,b;if(!y){if(b=t.grid==="auto"?0:(t.grid||[1,_r])[1],!b){for(D=-_r;D<(D=E[b++].getBoundingClientRect().left)&&b<S;);b<S&&b--}for(y=u[S]=[],x=f?Math.min(b,S)*p-.5:r%b,R=b===_r?0:f?S*v/b-.5:r/b|0,D=0,k=_r,N=0;N<S;N++)C=N%b-x,w=R-(N/b|0),y[N]=F=h?Math.abs(h==="y"?w:C):by(C*C+w*w),F>D&&(D=F),F<k&&(k=F);r==="random"&&Yy(y),y.max=D-k,y.min=k,y.v=S=(parseFloat(t.amount)||parseFloat(t.each)*(b>S?S-1:h?h==="y"?S/b:b:Math.max(b,S/b))||0)*(r==="edges"?-1:1),y.b=S<0?a-S:a,y.u=si(t.amount||t.each)||0,n=n&&S<0?hw(n):n}return S=(y[m]-y.min)/y.max||0,gn(y.b+(n?n(S):S)*y.v)+y.u}},fm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=gn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ss(n)?0:si(n))}},qy=function(e,t){var n=ai(e),r,a;return!n&&$r(e)&&(r=n=e.radius||_r,e.values?(e=vr(e.values),(a=!Ss(e[0]))&&(r*=r)):e=fm(e.increment)),mo(t,n?yn(e)?function(u){return a=e(u),Math.abs(a-u)<=r?a:u}:function(u){for(var c=parseFloat(a?u.x:u),f=parseFloat(a?u.y:0),h=_r,p=0,v=e.length,m,_;v--;)a?(m=e[v].x-c,_=e[v].y-f,m=m*m+_*_):m=Math.abs(e[v]-c),m<h&&(h=m,p=v);return p=!r||h<=r?e[p]:u,a||p===u||Ss(u)?p:p+si(u)}:fm(e))},$y=function(e,t,n,r){return mo(ai(e)?!t:n===!0?!!(n=0):!r,function(){return ai(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},tw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,u){return u(a)},r)}},nw=function(e,t){return function(n){return e(parseFloat(n))+(t||si(n))}},iw=function(e,t,n){return Zy(e,t,0,1,n)},Ky=function(e,t,n){return mo(n,function(r){return e[~~t(r)]})},rw=function o(e,t,n){var r=t-e;return ai(e)?Ky(e,o(0,e.length),t):mo(n,function(a){return(r+(a-e)%r)%r+e})},sw=function o(e,t,n){var r=t-e,a=r*2;return ai(e)?Ky(e,o(0,e.length-1),t):mo(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>r?a-u:u)})},Bu=function(e){return e.replace(k1,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(z1);return $y(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Zy=function(e,t,n,r,a){var u=t-e,c=r-n;return mo(a,function(f){return n+((f-e)/u*c||0)})},ow=function o(e,t,n,r){var a=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!a){var u=Gn(e),c={},f,h,p,v,m;if(n===!0&&(r=1)&&(n=null),u)e={p:e},t={p:t};else if(ai(e)&&!ai(t)){for(p=[],v=e.length,m=v-2,h=1;h<v;h++)p.push(o(e[h-1],e[h]));v--,a=function(E){E*=v;var S=Math.min(m,~~E);return p[S](E-S)},n=t}else r||(e=dl(ai(e)?[]:{},e));if(!p){for(f in t)Cg.call(c,e,f,"get",t[f]);a=function(E){return Lg(E,c)||(u?e.p:e)}}}return mo(n,a)},Hv=function(e,t,n){var r=e.labels,a=_r,u,c,f;for(u in r)c=r[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(f=u,a=c);return f},Ji=function(e,t,n){var r=e.vars,a=r[t],u=hn,c=e._ctx,f,h,p;if(a)return f=r[t+"Params"],h=r.callbackScope||e,n&&ro.length&&od(),c&&(hn=c),p=f?a.apply(h,f):a.call(h),hn=u,p},gu=function(e){return uo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qn),e.progress()<1&&Ji(e,"onInterrupt"),e},Za,Qy=[],Jy=function(e){if(e)if(e=!e.name&&e.default||e,yg()||e.headless){var t=e.name,n=yn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:zu,render:Lg,add:Cg,kill:Ew,modifier:Mw,rawVars:0},u={targetTest:0,get:0,getSetter:Pg,aliases:{},register:0};if(ml(),e!==r){if(ji[t])return;rr(r,rr(ad(e,a),u)),dl(r.prototype,dl(a,ad(e,u))),ji[r.prop=t]=r,e.targetTest&&(Xf.push(r),Eg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Uy(t,r),e.register&&e.register(ki,r,Ii)}else Qy.push(e)},nn=255,_u={aqua:[0,nn,nn],lime:[0,nn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nn],navy:[0,0,128],white:[nn,nn,nn],olive:[128,128,0],yellow:[nn,nn,0],orange:[nn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nn,0,0],pink:[nn,192,203],cyan:[0,nn,nn],transparent:[nn,nn,nn,0]},fp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*nn+.5|0},eS=function(e,t,n){var r=e?Ss(e)?[e>>16,e>>8&nn,e&nn]:0:_u.black,a,u,c,f,h,p,v,m,_,E;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_u[e])r=_u[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&nn,r&nn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&nn,e&nn]}else if(e.substr(0,3)==="hsl"){if(r=E=e.match(Ov),!t)f=+r[0]%360/360,h=+r[1]/100,p=+r[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,r.length>3&&(r[3]*=1),r[0]=fp(f+1/3,a,u),r[1]=fp(f,a,u),r[2]=fp(f-1/3,a,u);else if(~e.indexOf("="))return r=e.match(Ly),n&&r.length<4&&(r[3]=1),r}else r=e.match(Ov)||_u.transparent;r=r.map(Number)}return t&&!E&&(a=r[0]/nn,u=r[1]/nn,c=r[2]/nn,v=Math.max(a,u,c),m=Math.min(a,u,c),p=(v+m)/2,v===m?f=h=0:(_=v-m,h=p>.5?_/(2-v-m):_/(v+m),f=v===a?(u-c)/_+(u<c?6:0):v===u?(c-a)/_+2:(a-u)/_+4,f*=60),r[0]=~~(f+.5),r[1]=~~(h*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},tS=function(e){var t=[],n=[],r=-1;return e.split(so).forEach(function(a){var u=a.match(Ka)||[];t.push.apply(t,u),n.push(r+=u.length+1)}),t.c=n,t},Vv=function(e,t,n){var r="",a=(e+r).match(so),u=t?"hsla(":"rgba(",c=0,f,h,p,v;if(!a)return e;if(a=a.map(function(m){return(m=eS(m,t,1))&&u+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(p=tS(e),f=n.c,f.join(r)!==p.c.join(r)))for(h=e.replace(so,"1").split(Ka),v=h.length-1;c<v;c++)r+=h[c]+(~f.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(so),v=h.length-1;c<v;c++)r+=h[c]+a[c];return r+h[v]},so=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _u)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),aw=/hsl[a]?\(/,nS=function(e){var t=e.join(" "),n;if(so.lastIndex=0,so.test(t))return n=aw.test(t),e[1]=Vv(e[1],n),e[0]=Vv(e[0],n,tS(e[1])),!0},Hu,Zi=(function(){var o=Date.now,e=500,t=33,n=o(),r=n,a=1e3/240,u=a,c=[],f,h,p,v,m,_,E=function S(y){var x=o()-r,R=y===!0,C,w,F,N;if((x>e||x<0)&&(n+=x-t),r+=x,F=r-n,C=F-u,(C>0||R)&&(N=++v.frame,m=F-v.time*1e3,v.time=F=F/1e3,u+=C+(C>=a?4:a-C),w=1),R||(f=h(S)),w)for(_=0;_<c.length;_++)c[_](F,m,N,y)};return v={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return m/(1e3/(y||60))},wake:function(){Iy&&(!sm&&yg()&&(Hr=sm=window,Sg=Hr.document||{},ir.gsap=ki,(Hr.gsapVersions||(Hr.gsapVersions=[])).push(ki.version),Ny(sd||Hr.GreenSockGlobals||!Hr.gsap&&Hr||{}),Qy.forEach(Jy)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&v.sleep(),h=p||function(y){return setTimeout(y,u-v.time*1e3+1|0)},Hu=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),Hu=0,h=zu},lagSmoothing:function(y,x){e=y||1/0,t=Math.min(x||33,e)},fps:function(y){a=1e3/(y||240),u=v.time*1e3+a},add:function(y,x,R){var C=x?function(w,F,N,D){y(w,F,N,D),v.remove(C)}:y;return v.remove(y),c[R?"unshift":"push"](C),ml(),C},remove:function(y,x){~(x=c.indexOf(y))&&c.splice(x,1)&&_>=x&&_--},_listeners:c},v})(),ml=function(){return!Hu&&Zi.wake()},kt={},lw=/^[\d.\-M][\d.\-,\s]/,uw=/["']/g,cw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,u=n.length,c,f,h;a<u;a++)f=n[a],c=a!==u-1?f.lastIndexOf(","):f.length,h=f.substr(0,c),t[r]=isNaN(h)?h.replace(uw,"").trim():+h,r=f.substr(c+1).trim();return t},fw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},dw=function(e){var t=(e+"").split("("),n=kt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[cw(t[1])]:fw(e).split(",").map(zy)):kt._CE&&lw.test(e)?kt._CE("",e):n},hw=function(e){return function(t){return 1-e(1-t)}},Ko=function(e,t){return e&&(yn(e)?e:kt[e]||dw(e))||t},oa=function(e,t,n,r){n===void 0&&(n=function(f){return 1-t(1-f)}),r===void 0&&(r=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},u;return Di(e,function(c){kt[c]=ir[c]=a,kt[u=c.toLowerCase()]=n;for(var f in a)kt[u+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=kt[c+"."+f]=a[f]}),a},iS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},dp=function o(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/rm*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*F1((p-u)*a)+1},f=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:iS(c);return a=rm/a,f.config=function(h,p){return o(e,h,p)},f},hp=function o(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:iS(n);return r.config=function(a){return o(e,a)},r};Di("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;oa(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});kt.Linear.easeNone=kt.none=kt.Linear.easeIn;oa("Elastic",dp("in"),dp("out"),dp());(function(o,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?o*c*c:c<n?o*Math.pow(c-1.5/e,2)+.75:c<r?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};oa("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);oa("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});oa("Circ",function(o){return-(by(1-o*o)-1)});oa("Sine",function(o){return o===1?1:-O1(o*N1)+1});oa("Back",hp("in"),hp("out"),hp());kt.SteppedEase=kt.steps=ir.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,u=1-rn;return function(c){return((r*Ku(0,u,c)|0)+a)*n}}};Fu.ease=kt["quad.out"];Di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return wg+=o+","+o+"Params,"});var rS=function(e,t){this.id=U1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Fy,this.set=t?t.getSetter:Pg},Vu=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,pl(this,+t.duration,1,1),this.data=t.data,hn&&(this._ctx=hn,hn.data.push(this)),Hu||Zi.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,pl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ml(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Md(this,n),!a._dp||a.parent||Vy(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rn||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ky(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zv(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?hl(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-rn?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?ld(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-rn?0:this._rts,this.totalTime(Ku(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),Sd(this),j1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ml(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rn&&(this._tTime-=rn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=gn(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Wr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Li(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ld(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=G1);var r=qn;return qn=n,Ag(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qn=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Bv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(pr(this,n),Li(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Li(r)),this._dur||(this._zTime=-rn),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-rn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rn,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-rn)},e.eventCallback=function(n,r,a){var u=this.vars;return arguments.length>1?(r?(u[n]=r,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete u[n],this):u[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(u){var c=yn(n)?n:By,f=function(){var p=r.then;r.then=null,a&&a(),yn(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=p),u(c),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},e.kill=function(){gu(this)},o})();rr(Vu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rn,_prom:0,_ps:!1,_rts:1});var Pi=(function(o){Ry(e,o);function e(n,r){var a;return n===void 0&&(n={}),a=o.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Li(n.sortChildren),_n&&Wr(n.parent||_n,ds(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Gy(ds(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,u){return Au(0,arguments,this),this},t.from=function(r,a,u){return Au(1,arguments,this),this},t.fromTo=function(r,a,u,c){return Au(2,arguments,this),this},t.set=function(r,a,u){return a.duration=0,a.parent=this,Tu(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Rn(r,a,pr(this,u),1),this},t.call=function(r,a,u){return Wr(this,Rn.delayedCall(0,r,a),u)},t.staggerTo=function(r,a,u,c,f,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new Rn(r,u,pr(this,f)),this},t.staggerFrom=function(r,a,u,c,f,h,p){return u.runBackwards=1,Tu(u).immediateRender=Li(u.immediateRender),this.staggerTo(r,a,u,c,f,h,p)},t.staggerFromTo=function(r,a,u,c,f,h,p,v){return c.startAt=u,Tu(c).immediateRender=Li(c.immediateRender),this.staggerTo(r,a,c,f,h,p,v)},t.render=function(r,a,u){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=r<=0?0:gn(r),v=this._zTime<0!=r<0&&(this._initted||!h),m,_,E,S,y,x,R,C,w,F,N,D;if(this!==_n&&p>f&&r>=0&&(p=f),p!==this._tTime||u||v){if(c!==this._time&&h&&(p+=this._time-c,r+=this._time-c),m=p,w=this._start,C=this._ts,x=!C,v&&(h||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(N=this._yoyo,y=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,a,u);if(m=gn(p%y),p===f?(S=this._repeat,m=h):(F=gn(p/y),S=~~F,S&&S===F&&(m=h,S--),m>h&&(m=h)),F=hl(this._tTime,y),!c&&this._tTime&&F!==S&&this._tTime-F*y-this._dur<=0&&(F=S),N&&S&1&&(m=h-m,D=1),S!==F&&!this._lock){var k=N&&F&1,b=k===(N&&S&1);if(S<F&&(k=!k),c=k?0:p%h?h:p,this._lock=1,this.render(c||(D?0:gn(S*y)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&Ji(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,F=S),c&&c!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,b&&(this._lock=2,c=k?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=Z1(this,gn(c),gn(m)),R&&(p-=m-(m=R._start))),this._tTime=p,this._time=m,this._act=!!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&h&&!a&&!F&&(Ji(this,"onStart"),this._tTime!==p))return this;if(m>=c&&r>=0)for(_=this._first;_;){if(E=_._next,(_._act||m>=_._start)&&_._ts&&R!==_){if(_.parent!==this)return this.render(r,a,u);if(_.render(_._ts>0?(m-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(m-_._start)*_._ts,a,u),m!==this._time||!this._ts&&!x){R=0,E&&(p+=this._zTime=-rn);break}}_=E}else{_=this._last;for(var T=r<0?r:m;_;){if(E=_._prev,(_._act||T<=_._end)&&_._ts&&R!==_){if(_.parent!==this)return this.render(r,a,u);if(_.render(_._ts>0?(T-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(T-_._start)*_._ts,a,u||qn&&Ag(_)),m!==this._time||!this._ts&&!x){R=0,E&&(p+=this._zTime=T?-rn:rn);break}}_=E}}if(R&&!a&&(this.pause(),R.render(m>=c?0:-rn)._zTime=m>=c?1:-1,this._ts))return this._start=w,Sd(this),this.render(r,a,u);this._onUpdate&&!a&&Ji(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&c)&&(w===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(p===f&&this._ts>0||!p&&this._ts<0)&&uo(this,1),!a&&!(r<0&&!c)&&(p||c||!f)&&(Ji(this,p===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var u=this;if(Ss(a)||(a=pr(this,a,r)),!(r instanceof Vu)){if(ai(r))return r.forEach(function(c){return u.add(c,a)}),this;if(Gn(r))return this.addLabel(r,a);if(yn(r))r=Rn.delayedCall(0,r);else return this}return this!==r?Wr(this,r,a):this},t.getChildren=function(r,a,u,c){r===void 0&&(r=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-_r);for(var f=[],h=this._first;h;)h._start>=c&&(h instanceof Rn?a&&f.push(h):(u&&f.push(h),r&&f.push.apply(f,h.getChildren(!0,a,u)))),h=h._next;return f},t.getById=function(r){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===r)return a[u]},t.remove=function(r){return Gn(r)?this.removeLabel(r):yn(r)?this.killTweensOf(r):(r.parent===this&&yd(this,r),r===this._recent&&(this._recent=this._last),$o(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gn(Zi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=pr(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,u){var c=Rn.delayedCall(0,a||zu,u);return c.data="isPause",this._hasPause=1,Wr(this,c,pr(this,r))},t.removePause=function(r){var a=this._first;for(r=pr(this,r);a;)a._start===r&&a.data==="isPause"&&uo(a),a=a._next},t.killTweensOf=function(r,a,u){for(var c=this.getTweensOf(r,u),f=c.length;f--;)Js!==c[f]&&c[f].kill(r,a);return this},t.getTweensOf=function(r,a){for(var u=[],c=vr(r),f=this._first,h=Ss(a),p;f;)f instanceof Rn?W1(f._targets,c)&&(h?(!Js||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&u.push(f):(p=f.getTweensOf(c,a)).length&&u.push.apply(u,p),f=f._next;return u},t.tweenTo=function(r,a){a=a||{};var u=this,c=pr(u,r),f=a,h=f.startAt,p=f.onStart,v=f.onStartParams,m=f.immediateRender,_,E=Rn.to(u,rr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||rn,onStart:function(){if(u.pause(),!_){var y=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==y&&pl(E,y,0,1).render(E._time,!0,!0),_=1}p&&p.apply(E,v||[])}},a));return m?E.render(0):E},t.tweenFromTo=function(r,a,u){return this.tweenTo(a,rr({startAt:{time:pr(this,r)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Hv(this,pr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Hv(this,pr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rn)},t.shiftChildren=function(r,a,u){u===void 0&&(u=0);var c=this._first,f=this.labels,h;for(r=gn(r);c;)c._start>=u&&(c._start+=r,c._end+=r),c=c._next;if(a)for(h in f)f[h]>=u&&(f[h]+=r);return $o(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return o.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),$o(this)},t.totalDuration=function(r){var a=0,u=this,c=u._last,f=_r,h,p,v;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(v=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>f&&u._sort&&c._ts&&!u._lock?(u._lock=1,Wr(u,c,p-c._delay,1)._lock=0):f=p,p<0&&c._ts&&(a-=p,(!v&&!u._dp||v&&v.smoothChildTiming)&&(u._start+=gn(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),f=0),c._end>a&&c._ts&&(a=c._end),c=h;pl(u,u===_n&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(r){if(_n._ts&&(ky(_n,ld(r,_n)),Oy=Zi.frame),Zi.frame>=Fv){Fv+=tr.autoSleep||120;var a=_n._first;if((!a||!a._ts)&&tr.autoSleep&&Zi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Zi.sleep()}}},e})(Vu);rr(Pi.prototype,{_lock:0,_hasPause:0,_forcing:0});var pw=function(e,t,n,r,a,u,c){var f=new Ii(this._pt,e,t,0,1,cS,null,a),h=0,p=0,v,m,_,E,S,y,x,R;for(f.b=n,f.e=r,n+="",r+="",(x=~r.indexOf("random("))&&(r=Bu(r)),u&&(R=[n,r],u(R,e,t),n=R[0],r=R[1]),m=n.match(up)||[];v=up.exec(r);)E=v[0],S=r.substring(h,v.index),_?_=(_+1)%5:S.substr(-5)==="rgba("&&(_=1),E!==m[p++]&&(y=parseFloat(m[p-1])||0,f._pt={_next:f._pt,p:S||p===1?S:",",s:y,c:E.charAt(1)==="="?nl(y,E)-y:parseFloat(E)-y,m:_&&_<4?Math.round:0},h=up.lastIndex);return f.c=h<r.length?r.substring(h,r.length):"",f.fp=c,(Dy.test(r)||x)&&(f.e=0),this._pt=f,f},Cg=function(e,t,n,r,a,u,c,f,h,p){yn(r)&&(r=r(a||0,e,u));var v=e[t],m=n!=="get"?n:yn(v)?h?e[t.indexOf("set")||!yn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():v,_=yn(v)?h?xw:lS:bg,E;if(Gn(r)&&(~r.indexOf("random(")&&(r=Bu(r)),r.charAt(1)==="="&&(E=nl(m,r)+(si(m)||0),(E||E===0)&&(r=E))),!p||m!==r||dm)return!isNaN(m*r)&&r!==""?(E=new Ii(this._pt,e,t,+m||0,r-(m||0),typeof v=="boolean"?Sw:uS,0,_),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!v&&!(t in e)&&Mg(t,r),pw.call(this,e,t,m,r,_,f||tr.stringFilter,h))},mw=function(e,t,n,r,a){if(yn(e)&&(e=Cu(e,a,t,n,r)),!$r(e)||e.style&&e.nodeType||ai(e)||Py(e))return Gn(e)?Cu(e,a,t,n,r):e;var u={},c;for(c in e)u[c]=Cu(e[c],a,t,n,r);return u},sS=function(e,t,n,r,a,u){var c,f,h,p;if(ji[e]&&(c=new ji[e]).init(a,c.rawVars?t[e]:mw(t[e],r,a,u,n),n,r,u)!==!1&&(n._pt=f=new Ii(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==Za))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=f;return c},Js,dm,Rg=function o(e,t,n){var r=e.vars,a=r.ease,u=r.startAt,c=r.immediateRender,f=r.lazy,h=r.onUpdate,p=r.runBackwards,v=r.yoyoEase,m=r.keyframes,_=r.autoRevert,E=e._dur,S=e._startAt,y=e._targets,x=e.parent,R=x&&x.data==="nested"?x.vars.targets:y,C=e._overwrite==="auto"&&!vg,w=e.timeline,F=r.easeReverse||v,N,D,k,b,T,H,G,j,K,ue,J,q,z;if(w&&(!m||!a)&&(a="none"),e._ease=Ko(a,Fu.ease),e._rEase=F&&(Ko(F)||e._ease),e._from=!w&&!!r.runBackwards,e._from&&(e.ratio=1),!w||m&&!r.stagger){if(j=y[0]?qo(y[0]).harness:0,q=j&&r[j.prop],N=ad(r,Eg),S&&(S._zTime<0&&S.progress(1),t<0&&p&&c&&!_?S.render(-1,!0):S.revert(p&&E?Wf:V1),S._lazy=0),u){if(uo(e._startAt=Rn.set(y,rr({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!S&&Li(f),startAt:null,delay:0,onUpdate:h&&function(){return Ji(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qn||!c&&!_)&&e._startAt.revert(Wf),c&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!S){if(t&&(c=!1),k=rr({overwrite:!1,data:"isFromStart",lazy:c&&!S&&Li(f),immediateRender:c,stagger:0,parent:x},N),q&&(k[j.prop]=q),uo(e._startAt=Rn.set(y,k)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qn?e._startAt.revert(Wf):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,rn,rn);else if(!t)return}for(e._pt=e._ptCache=0,f=E&&Li(f)||f&&!E,D=0;D<y.length;D++){if(T=y[D],G=T._gsap||Tg(y)[D]._gsap,e._ptLookup[D]=ue={},om[G.id]&&ro.length&&od(),J=R===y?D:R.indexOf(T),j&&(K=new j).init(T,q||N,e,J,R)!==!1&&(e._pt=b=new Ii(e._pt,T,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(te){ue[te]=b}),K.priority&&(H=1)),!j||q)for(k in N)ji[k]&&(K=sS(k,N,e,J,T,R))?K.priority&&(H=1):ue[k]=b=Cg.call(e,T,k,"get",N[k],J,R,0,r.stringFilter);e._op&&e._op[D]&&e.kill(T,e._op[D]),C&&e._pt&&(Js=e,_n.killTweensOf(T,ue,e.globalTime(t)),z=!e.parent,Js=0),e._pt&&f&&(om[G.id]=1)}H&&fS(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!z,m&&t<=0&&w.render(_r,!0,!0)},gw=function(e,t,n,r,a,u,c,f){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,v,m,_;if(!h)for(h=e._ptCache[t]=[],m=e._ptLookup,_=e._targets.length;_--;){if(p=m[_][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return dm=1,e.vars[t]="+=0",Rg(e,c),dm=0,f?ku(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(p)}for(_=h.length;_--;)v=h[_],p=v._pt||v,p.s=(r||r===0)&&!a?r:p.s+(r||0)+u*p.c,p.c=n-p.s,v.e&&(v.e=En(n)+si(v.e)),v.b&&(v.b=p.s+si(v.b))},_w=function(e,t){var n=e[0]?qo(e[0]).harness:0,r=n&&n.aliases,a,u,c,f;if(!r)return t;a=dl({},t);for(u in r)if(u in a)for(f=r[u].split(","),c=f.length;c--;)a[f[c]]=a[u];return a},vw=function(e,t,n,r){var a=t.ease||r||"power1.inOut",u,c;if(ai(t))c=n[e]||(n[e]=[]),t.forEach(function(f,h){return c.push({t:h/(t.length-1)*100,v:f,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},Cu=function(e,t,n,r,a){return yn(e)?e.call(t,n,r,a):Gn(e)&&~e.indexOf("random(")?Bu(e):e},oS=wg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",aS={};Di(oS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return aS[o]=1});var Rn=(function(o){Ry(e,o);function e(n,r,a,u){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=o.call(this,u?r:Tu(r))||this;var f=c.vars,h=f.duration,p=f.delay,v=f.immediateRender,m=f.stagger,_=f.overwrite,E=f.keyframes,S=f.defaults,y=f.scrollTrigger,x=r.parent||_n,R=(ai(n)||Py(n)?Ss(n[0]):"length"in r)?[n]:vr(n),C,w,F,N,D,k,b,T;if(c._targets=R.length?Tg(R):ku("GSAP target "+n+" not found. https://gsap.com",!tr.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=_,E||m||of(h)||of(p)){r=c.vars;var H=r.easeReverse||r.yoyoEase;if(C=c.timeline=new Pi({data:"nested",defaults:S||{},targets:x&&x.data==="nested"?x.vars.targets:R}),C.kill(),C.parent=C._dp=ds(c),C._start=0,m||of(h)||of(p)){if(N=R.length,b=m&&jy(m),$r(m))for(D in m)~oS.indexOf(D)&&(T||(T={}),T[D]=m[D]);for(w=0;w<N;w++)F=ad(r,aS),F.stagger=0,H&&(F.easeReverse=H),T&&dl(F,T),k=R[w],F.duration=+Cu(h,ds(c),w,k,R),F.delay=(+Cu(p,ds(c),w,k,R)||0)-c._delay,!m&&N===1&&F.delay&&(c._delay=p=F.delay,c._start+=p,F.delay=0),C.to(k,F,b?b(w,k,R):0),C._ease=kt.none;C.duration()?h=p=0:c.timeline=0}else if(E){Tu(rr(C.vars.defaults,{ease:"none"})),C._ease=Ko(E.ease||r.ease||"none");var G=0,j,K,ue;if(ai(E))E.forEach(function(J){return C.to(R,J,">")}),C.duration();else{F={};for(D in E)D==="ease"||D==="easeEach"||vw(D,E[D],F,E.easeEach);for(D in F)for(j=F[D].sort(function(J,q){return J.t-q.t}),G=0,w=0;w<j.length;w++)K=j[w],ue={ease:K.e,duration:(K.t-(w?j[w-1].t:0))/100*h},ue[D]=K.v,C.to(R,ue,G),G+=ue.duration;C.duration()<h&&C.to({},{duration:h-C.duration()})}}h||c.duration(h=C.duration())}else c.timeline=0;return _===!0&&!vg&&(Js=ds(c),_n.killTweensOf(R),Js=0),Wr(x,ds(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(v||!h&&!E&&c._start===gn(x._time)&&Li(v)&&q1(ds(c))&&x.data!=="nested")&&(c._tTime=-rn,c.render(Math.max(0,-p)||0)),y&&Gy(ds(c),y),c}var t=e.prototype;return t.render=function(r,a,u){var c=this._time,f=this._tDur,h=this._dur,p=r<0,v=r>f-rn&&!p?f:r<rn?0:r,m,_,E,S,y,x,R,C;if(!h)K1(this,r,a,u);else if(v!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(m=v,C=this.timeline,this._repeat){if(S=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(S*100+r,a,u);if(m=gn(v%S),v===f?(E=this._repeat,m=h):(y=gn(v/S),E=~~y,E&&E===y?(m=h,E--):m>h&&(m=h)),x=this._yoyo&&E&1,x&&(m=h-m),y=hl(this._tTime,S),m===c&&!u&&this._initted&&E===y)return this._tTime=v,this;E!==y&&this.vars.repeatRefresh&&!x&&!this._lock&&m!==S&&this._initted&&(this._lock=u=1,this.render(gn(S*E),!0).invalidate()._lock=0)}if(!this._initted){if(Wy(this,p?r:m,u,a,v))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==y))return this;if(h!==this._dur)return this.render(r,a,u)}if(this._rEase){var w=m<c;if(w!==this._inv){var F=w?c:h-c;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=F?(w?-1:1)/F:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=R=this._invRatio+this._invScale*this._invEase((m-this._invTime)*this._invRecip)}else this.ratio=R=this._ease(m/h);if(this._from&&(this.ratio=R=1-R),this._tTime=v,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&v&&!a&&!y&&(Ji(this,"onStart"),this._tTime!==v))return this;for(_=this._pt;_;)_.r(R,_.d),_=_._next;C&&C.render(r<0?r:C._dur*C._ease(m/this._dur),a,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&am(this,r,a,u),Ji(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!a&&this.parent&&Ji(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(p&&!this._onUpdate&&am(this,r,!0,!0),(r||!h)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&uo(this,1),!a&&!(p&&!c)&&(v||c||x)&&(Ji(this,v===f?"onComplete":"onReverseComplete",!0),this._prom&&!(v<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,u,c,f){Hu||Zi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Rg(this,h),p=this._ease(h/this._dur),gw(this,r,a,u,c,p,h,f)?this.resetTo(r,a,u,c,1):(Md(this,0),this.parent||Hy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?gu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!qn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,Js&&Js.vars.overwrite!==!0)._first||gu(this),this.parent&&u!==this.timeline.totalDuration()&&pl(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,f=r?vr(r):c,h=this._ptLookup,p=this._pt,v,m,_,E,S,y,x;if((!a||a==="all")&&Y1(c,f))return a==="all"&&(this._pt=0),gu(this);for(v=this._op=this._op||[],a!=="all"&&(Gn(a)&&(S={},Di(a,function(R){return S[R]=1}),a=S),a=_w(c,a)),x=c.length;x--;)if(~f.indexOf(c[x])){m=h[x],a==="all"?(v[x]=a,E=m,_={}):(_=v[x]=v[x]||{},E=a);for(S in E)y=m&&m[S],y&&((!("kill"in y.d)||y.d.kill(S)===!0)&&yd(this,y,"_pt"),delete m[S]),_!=="all"&&(_[S]=1)}return this._initted&&!this._pt&&p&&gu(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Au(1,arguments)},e.delayedCall=function(r,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(r,a,u){return Au(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,u){return _n.killTweensOf(r,a,u)},e})(Vu);rr(Rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Di("staggerTo,staggerFrom,staggerFromTo",function(o){Rn[o]=function(){var e=new Pi,t=um.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var bg=function(e,t,n){return e[t]=n},lS=function(e,t,n){return e[t](n)},xw=function(e,t,n,r){return e[t](r.fp,n)},yw=function(e,t,n){return e.setAttribute(t,n)},Pg=function(e,t){return yn(e[t])?lS:xg(e[t])&&e.setAttribute?yw:bg},uS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Sw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},cS=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Lg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Mw=function(e,t,n,r){for(var a=this._pt,u;a;)u=a._next,a.p===r&&a.modifier(e,t,n),a=u},Ew=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?yd(this,t,"_pt"):t.dep||(n=1),t=r;return!n},ww=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},fS=function(e){for(var t=e._pt,n,r,a,u;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:u)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:u=t,t=n}e._pt=a},Ii=(function(){function o(t,n,r,a,u,c,f,h,p){this.t=n,this.s=a,this.c=u,this.p=r,this.r=c||uS,this.d=f||this,this.set=h||bg,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=ww,this.m=n,this.mt=a,this.tween=r},o})();Di(wg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return Eg[o]=1});ir.TweenMax=ir.TweenLite=Rn;ir.TimelineLite=ir.TimelineMax=Pi;_n=new Pi({sortChildren:!1,defaults:Fu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tr.stringFilter=nS;var Zo=[],Yf={},Tw=[],Gv=0,Aw=0,pp=function(e){return(Yf[e]||Tw).map(function(t){return t()})},hm=function(){var e=Date.now(),t=[];e-Gv>2&&(pp("matchMediaInit"),Zo.forEach(function(n){var r=n.queries,a=n.conditions,u,c,f,h;for(c in r)u=Hr.matchMedia(r[c]).matches,u&&(f=1),u!==a[c]&&(a[c]=u,h=1);h&&(n.revert(),f&&t.push(n))}),pp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Gv=e,pp("matchMedia"))},dS=(function(){function o(t,n){this.selector=n&&cm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Aw++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,r,a){yn(n)&&(a=r,r=n,n=yn);var u=this,c=function(){var h=hn,p=u.selector,v;return h&&h!==u&&h.data.push(u),a&&(u.selector=cm(a)),hn=u,v=r.apply(u,arguments),yn(v)&&u._r.push(v),hn=h,u.selector=p,u.isReverted=!1,v};return u.last=c,n===yn?c(u,function(f){return u.add(null,f)}):n?u[n]=c:c},e.ignore=function(n){var r=hn;hn=null,n(this),hn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof o?n.push.apply(n,r.getTweens()):r instanceof Rn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var c=a.getTweens(),f=a.data.length,h;f--;)h=a.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,v){return v.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)h=a.data[f],h instanceof Pi?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Rn)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var u=Zo.length;u--;)Zo[u].id===this.id&&Zo.splice(u,1)},e.revert=function(n){this.kill(n||{})},o})(),Cw=(function(){function o(t){this.contexts=[],this.scope=t,hn&&hn.data.push(this)}var e=o.prototype;return e.add=function(n,r,a){$r(n)||(n={matches:n});var u=new dS(0,a||this.scope),c=u.conditions={},f,h,p;hn&&!u.selector&&(u.selector=hn.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=n;for(h in n)h==="all"?p=1:(f=Hr.matchMedia(n[h]),f&&(Zo.indexOf(u)<0&&Zo.push(u),(c[h]=f.matches)&&(p=1),f.addListener?f.addListener(hm):f.addEventListener("change",hm)));return p&&r(u,function(v){return u.add(null,v)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},o})(),ud={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Jy(r)})},timeline:function(e){return new Pi(e)},getTweensOf:function(e,t){return _n.getTweensOf(e,t)},getProperty:function(e,t,n,r){Gn(e)&&(e=vr(e)[0]);var a=qo(e||{}).get,u=n?By:zy;return n==="native"&&(n=""),e&&(t?u((ji[t]&&ji[t].get||a)(e,t,n,r)):function(c,f,h){return u((ji[c]&&ji[c].get||a)(e,c,f,h))})},quickSetter:function(e,t,n){if(e=vr(e),e.length>1){var r=e.map(function(p){return ki.quickSetter(p,t,n)}),a=r.length;return function(p){for(var v=a;v--;)r[v](p)}}e=e[0]||{};var u=ji[t],c=qo(e),f=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var v=new u;Za._pt=0,v.init(e,n?p+n:p,Za,0,[e]),v.render(1,v),Za._pt&&Lg(1,Za)}:c.set(e,f);return u?h:function(p){return h(e,f,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=ki.to(e,rr((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),u=function(f,h,p){return a.resetTo(t,f,h,p)};return u.tween=a,u},isTweening:function(e){return _n.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ko(e.ease,Fu.ease)),kv(Fu,e||{})},config:function(e){return kv(tr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,u=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!ji[c]&&!ir[c]&&ku(t+" effect requires "+c+" plugin.")}),cp[t]=function(c,f,h){return n(vr(c),rr(f||{},a),h)},u&&(Pi.prototype[t]=function(c,f,h){return this.add(cp[t](c,$r(f)?f:(h=f)&&{},this),h)})},registerEase:function(e,t){kt[e]=Ko(t)},parseEase:function(e,t){return arguments.length?Ko(e,t):kt},getById:function(e){return _n.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pi(e),r,a;for(n.smoothChildTiming=Li(e.smoothChildTiming),_n.remove(n),n._dp=0,n._time=n._tTime=_n._time,r=_n._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Rn&&r.vars.onComplete===r._targets[0]))&&Wr(n,r,r._start-r._delay),r=a;return Wr(_n,n,0),n},context:function(e,t){return e?new dS(e,t):hn},matchMedia:function(e){return new Cw(e)},matchMediaRefresh:function(){return Zo.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||hm()},addEventListener:function(e,t){var n=Yf[e]||(Yf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Yf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:rw,wrapYoyo:sw,distribute:jy,random:$y,snap:qy,normalize:iw,getUnit:si,clamp:J1,splitColor:eS,toArray:vr,selector:cm,mapRange:Zy,pipe:tw,unitize:nw,interpolate:ow,shuffle:Yy},install:Ny,effects:cp,ticker:Zi,updateRoot:Pi.updateRoot,plugins:ji,globalTimeline:_n,core:{PropTween:Ii,globals:Uy,Tween:Rn,Timeline:Pi,Animation:Vu,getCache:qo,_removeLinkedListItem:yd,reverting:function(){return qn},context:function(e){return e&&hn&&(hn.data.push(e),e._ctx=hn),hn},suppressOverwrites:function(e){return vg=e}}};Di("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ud[o]=Rn[o]});Zi.add(Pi.updateRoot);Za=ud.to({},{duration:0});var Rw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},bw=function(e,t){var n=e._targets,r,a,u;for(r in t)for(a=n.length;a--;)u=e._ptLookup[a][r],u&&(u=u.d)&&(u._pt&&(u=Rw(u,r)),u&&u.modifier&&u.modifier(t[r],e,n[a],r))},mp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,u){u._onInit=function(c){var f,h;if(Gn(a)&&(f={},Di(a,function(p){return f[p]=1}),a=f),t){f={};for(h in a)f[h]=t(a[h]);a=f}bw(c,a)}}}},ki=ud.registerPlugin({name:"attr",init:function(e,t,n,r,a){var u,c,f;this.tween=n;for(u in t)f=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(f||0)+"",t[u],r,a,0,0,u),c.op=u,c.b=f,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)qn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},mp("roundProps",fm),mp("modifiers"),mp("snap",qy))||ud;Rn.version=Pi.version=ki.version="3.15.0";Iy=1;yg()&&ml();kt.Power0;kt.Power1;kt.Power2;kt.Power3;kt.Power4;kt.Linear;kt.Quad;kt.Cubic;kt.Quart;kt.Quint;kt.Strong;kt.Elastic;kt.Back;kt.SteppedEase;kt.Bounce;kt.Sine;kt.Expo;kt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wv,eo,il,Dg,Go,Xv,Ig,Pw=function(){return typeof window<"u"},Ms={},Oo=180/Math.PI,rl=Math.PI/180,Pa=Math.atan2,Yv=1e8,Ng=/([A-Z])/g,Lw=/(left|right|width|margin|padding|x)/i,Dw=/[\s,\(]\S/,Xr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Iw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Uw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ow=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},hS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},pS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Fw=function(e,t,n){return e.style[t]=n},kw=function(e,t,n){return e.style.setProperty(t,n)},zw=function(e,t,n){return e._gsap[t]=n},Bw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Hw=function(e,t,n,r,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},Vw=function(e,t,n,r,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},vn="transform",Ni=vn+"Origin",Gw=function o(e,t){var n=this,r=this.target,a=r.style,u=r._gsap;if(e in Ms&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Xr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=hs(r,c)}):this.tfm[e]=u.x?u[e]:hs(r,e),e===Ni&&(this.tfm.zOrigin=u.zOrigin);else return Xr.transform.split(",").forEach(function(c){return o.call(n,c,t)});if(this.props.indexOf(vn)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ni,t,"")),e=vn}(a||t)&&this.props.push(e,t,a[e])},mS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ww=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Ng,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Ig(),(!a||!a.isStart)&&!n[vn]&&(mS(n),r.zOrigin&&n[Ni]&&(n[Ni]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},gS=function(e,t){var n={target:e,props:[],revert:Ww,save:Gw};return e._gsap||ki.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},_S,mm=function(e,t){var n=eo.createElementNS?eo.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):eo.createElement(e);return n&&n.style?n:eo.createElement(e)},er=function o(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ng,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&o(e,gl(t)||t,1)||""},jv="O,Moz,ms,Ms,Webkit".split(","),gl=function(e,t,n){var r=t||Go,a=r.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(jv[u]+e in a););return u<0?null:(u===3?"ms":u>=0?jv[u]:"")+e},gm=function(){Pw()&&window.document&&(Wv=window,eo=Wv.document,il=eo.documentElement,Go=mm("div")||{style:{}},mm("div"),vn=gl(vn),Ni=vn+"Origin",Go.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_S=!!gl("perspective"),Ig=ki.core.reverting,Dg=1)},qv=function(e){var t=e.ownerSVGElement,n=mm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),il.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),il.removeChild(n),a},$v=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},vS=function(e){var t,n;try{t=e.getBBox()}catch{t=qv(e),n=1}return t&&(t.width||t.height)||n||(t=qv(e)),t&&!t.width&&!t.x&&!t.y?{x:+$v(e,["x","cx","x1"])||0,y:+$v(e,["y","cy","y1"])||0,width:0,height:0}:t},xS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vS(e))},co=function(e,t){if(t){var n=e.style,r;t in Ms&&t!==Ni&&(t=vn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Ng,"-$1").toLowerCase())):n.removeAttribute(t)}},to=function(e,t,n,r,a,u){var c=new Ii(e._pt,t,n,0,1,u?pS:hS);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},Kv={deg:1,rad:1,turn:1},Xw={grid:1,flex:1},fo=function o(e,t,n,r){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=Go.style,f=Lw.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(f?"Width":"Height"),v=100,m=r==="px",_=r==="%",E,S,y,x;if(r===u||!a||Kv[r]||Kv[u])return a;if(u!=="px"&&!m&&(a=o(e,t,n,"px")),x=e.getCTM&&xS(e),(_||u==="%")&&(Ms[t]||~t.indexOf("adius")))return E=x?e.getBBox()[f?"width":"height"]:e[p],En(_?a/E*v:a/100*E);if(c[f?"width":"height"]=v+(m?u:r),S=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(S=(e.ownerSVGElement||{}).parentNode),(!S||S===eo||!S.appendChild)&&(S=eo.body),y=S._gsap,y&&_&&y.width&&f&&y.time===Zi.time&&!y.uncache)return En(a/y.width*v);if(_&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=v+r,E=e[p],R?e.style[t]=R:co(e,t)}else(_||u==="%")&&!Xw[er(S,"display")]&&(c.position=er(e,"position")),S===e&&(c.position="static"),S.appendChild(Go),E=Go[p],S.removeChild(Go),c.position="absolute";return f&&_&&(y=qo(S),y.time=Zi.time,y.width=S[p]),En(m?E*a/v:E&&a?v/E*a:0)},hs=function(e,t,n,r){var a;return Dg||gm(),t in Xr&&t!=="transform"&&(t=Xr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ms[t]&&t!=="transform"?(a=Wu(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:fd(er(e,Ni))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=cd[t]&&cd[t](e,t,n)||er(e,t)||Fy(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?fo(e,t,a,n)+n:a},Yw=function(e,t,n,r){if(!n||n==="none"){var a=gl(t,e,1),u=a&&er(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=er(e,"borderTopColor"))}var c=new Ii(this._pt,e.style,t,0,1,cS),f=0,h=0,p,v,m,_,E,S,y,x,R,C,w,F;if(c.b=n,c.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=er(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(S=e.style[t],e.style[t]=r,r=er(e,t)||r,S?e.style[t]=S:co(e,t)),p=[n,r],nS(p),n=p[0],r=p[1],m=n.match(Ka)||[],F=r.match(Ka)||[],F.length){for(;v=Ka.exec(r);)y=v[0],R=r.substring(f,v.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),y!==(S=m[h++]||"")&&(_=parseFloat(S)||0,w=S.substr((_+"").length),y.charAt(1)==="="&&(y=nl(_,y)+w),x=parseFloat(y),C=y.substr((x+"").length),f=Ka.lastIndex-C.length,C||(C=C||tr.units[t]||w,f===r.length&&(r+=C,c.e+=C)),w!==C&&(_=fo(e,t,S,C)||0),c._pt={_next:c._pt,p:R||h===1?R:",",s:_,c:x-_,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=f<r.length?r.substring(f,r.length):""}else c.r=t==="display"&&r==="none"?pS:hS;return Dy.test(r)&&(c.e=0),this._pt=c,c},Zv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jw=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Zv[n]||n,t[1]=Zv[r]||r,t.join(" ")},qw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,u=n._gsap,c,f,h;if(a==="all"||a===!0)r.cssText="",f=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],Ms[c]&&(f=1,c=c==="transformOrigin"?Ni:vn),co(n,c);f&&(co(n,vn),u&&(u.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Wu(n,1),u.uncache=1,mS(r)))}},cd={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var u=e._pt=new Ii(e._pt,t,n,0,0,qw);return u.u=r,u.pr=-10,u.tween=a,e._props.push(n),1}}},Gu=[1,0,0,1,0,0],yS={},SS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qv=function(e){var t=er(e,vn);return SS(t)?Gu:t.substr(7).match(Ly).map(En)},Ug=function(e,t){var n=e._gsap||qo(e),r=e.style,a=Qv(e),u,c,f,h;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?Gu:a):(a===Gu&&!e.offsetParent&&e!==il&&!n.svg&&(f=r.display,r.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,il.appendChild(e)),a=Qv(e),f?r.display=f:co(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):il.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},_m=function(e,t,n,r,a,u){var c=e._gsap,f=a||Ug(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,v=c.xOffset||0,m=c.yOffset||0,_=f[0],E=f[1],S=f[2],y=f[3],x=f[4],R=f[5],C=t.split(" "),w=parseFloat(C[0])||0,F=parseFloat(C[1])||0,N,D,k,b;n?f!==Gu&&(D=_*y-E*S)&&(k=w*(y/D)+F*(-S/D)+(S*R-y*x)/D,b=w*(-E/D)+F*(_/D)-(_*R-E*x)/D,w=k,F=b):(N=vS(e),w=N.x+(~C[0].indexOf("%")?w/100*N.width:w),F=N.y+(~(C[1]||C[0]).indexOf("%")?F/100*N.height:F)),r||r!==!1&&c.smooth?(x=w-h,R=F-p,c.xOffset=v+(x*_+R*S)-x,c.yOffset=m+(x*E+R*y)-R):c.xOffset=c.yOffset=0,c.xOrigin=w,c.yOrigin=F,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Ni]="0px 0px",u&&(to(u,c,"xOrigin",h,w),to(u,c,"yOrigin",p,F),to(u,c,"xOffset",v,c.xOffset),to(u,c,"yOffset",m,c.yOffset)),e.setAttribute("data-svg-origin",w+" "+F)},Wu=function(e,t){var n=e._gsap||new rS(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,u="px",c="deg",f=getComputedStyle(e),h=er(e,Ni)||"0",p,v,m,_,E,S,y,x,R,C,w,F,N,D,k,b,T,H,G,j,K,ue,J,q,z,te,I,O,ie,be,Q,de;return p=v=m=S=y=x=R=C=w=0,_=E=1,n.svg=!!(e.getCTM&&xS(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[vn]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[vn]!=="none"?f[vn]:"")),r.scale=r.rotate=r.translate="none"),D=Ug(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),h=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),_m(e,q||h,!!q||n.originIsAbsolute,n.smooth!==!1,D)),F=n.xOrigin||0,N=n.yOrigin||0,D!==Gu&&(H=D[0],G=D[1],j=D[2],K=D[3],p=ue=D[4],v=J=D[5],D.length===6?(_=Math.sqrt(H*H+G*G),E=Math.sqrt(K*K+j*j),S=H||G?Pa(G,H)*Oo:0,R=j||K?Pa(j,K)*Oo+S:0,R&&(E*=Math.abs(Math.cos(R*rl))),n.svg&&(p-=F-(F*H+N*j),v-=N-(F*G+N*K))):(de=D[6],be=D[7],I=D[8],O=D[9],ie=D[10],Q=D[11],p=D[12],v=D[13],m=D[14],k=Pa(de,ie),y=k*Oo,k&&(b=Math.cos(-k),T=Math.sin(-k),q=ue*b+I*T,z=J*b+O*T,te=de*b+ie*T,I=ue*-T+I*b,O=J*-T+O*b,ie=de*-T+ie*b,Q=be*-T+Q*b,ue=q,J=z,de=te),k=Pa(-j,ie),x=k*Oo,k&&(b=Math.cos(-k),T=Math.sin(-k),q=H*b-I*T,z=G*b-O*T,te=j*b-ie*T,Q=K*T+Q*b,H=q,G=z,j=te),k=Pa(G,H),S=k*Oo,k&&(b=Math.cos(k),T=Math.sin(k),q=H*b+G*T,z=ue*b+J*T,G=G*b-H*T,J=J*b-ue*T,H=q,ue=z),y&&Math.abs(y)+Math.abs(S)>359.9&&(y=S=0,x=180-x),_=En(Math.sqrt(H*H+G*G+j*j)),E=En(Math.sqrt(J*J+de*de)),k=Pa(ue,J),R=Math.abs(k)>2e-4?k*Oo:0,w=Q?1/(Q<0?-Q:Q):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!SS(er(e,vn)),q&&e.setAttribute("transform",q))),Math.abs(R)>90&&Math.abs(R)<270&&(a?(_*=-1,R+=S<=0?180:-180,S+=S<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=v-((n.yPercent=v&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-v)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=m+u,n.scaleX=En(_),n.scaleY=En(E),n.rotation=En(S)+c,n.rotationX=En(y)+c,n.rotationY=En(x)+c,n.skewX=R+c,n.skewY=C+c,n.transformPerspective=w+u,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Ni]=fd(h)),n.xOffset=n.yOffset=0,n.force3D=tr.force3D,n.renderTransform=n.svg?Kw:_S?MS:$w,n.uncache=0,n},fd=function(e){return(e=e.split(" "))[0]+" "+e[1]},gp=function(e,t,n){var r=si(t);return En(parseFloat(t)+parseFloat(fo(e,"x",n+"px",r)))+r},$w=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,MS(e,t)},Ro="0deg",ou="0px",bo=") ",MS=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,f=n.z,h=n.rotation,p=n.rotationY,v=n.rotationX,m=n.skewX,_=n.skewY,E=n.scaleX,S=n.scaleY,y=n.transformPerspective,x=n.force3D,R=n.target,C=n.zOrigin,w="",F=x==="auto"&&e&&e!==1||x===!0;if(C&&(v!==Ro||p!==Ro)){var N=parseFloat(p)*rl,D=Math.sin(N),k=Math.cos(N),b;N=parseFloat(v)*rl,b=Math.cos(N),u=gp(R,u,D*b*-C),c=gp(R,c,-Math.sin(N)*-C),f=gp(R,f,k*b*-C+C)}y!==ou&&(w+="perspective("+y+bo),(r||a)&&(w+="translate("+r+"%, "+a+"%) "),(F||u!==ou||c!==ou||f!==ou)&&(w+=f!==ou||F?"translate3d("+u+", "+c+", "+f+") ":"translate("+u+", "+c+bo),h!==Ro&&(w+="rotate("+h+bo),p!==Ro&&(w+="rotateY("+p+bo),v!==Ro&&(w+="rotateX("+v+bo),(m!==Ro||_!==Ro)&&(w+="skew("+m+", "+_+bo),(E!==1||S!==1)&&(w+="scale("+E+", "+S+bo),R.style[vn]=w||"translate(0, 0)"},Kw=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,f=n.rotation,h=n.skewX,p=n.skewY,v=n.scaleX,m=n.scaleY,_=n.target,E=n.xOrigin,S=n.yOrigin,y=n.xOffset,x=n.yOffset,R=n.forceCSS,C=parseFloat(u),w=parseFloat(c),F,N,D,k,b;f=parseFloat(f),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,f+=p),f||h?(f*=rl,h*=rl,F=Math.cos(f)*v,N=Math.sin(f)*v,D=Math.sin(f-h)*-m,k=Math.cos(f-h)*m,h&&(p*=rl,b=Math.tan(h-p),b=Math.sqrt(1+b*b),D*=b,k*=b,p&&(b=Math.tan(p),b=Math.sqrt(1+b*b),F*=b,N*=b)),F=En(F),N=En(N),D=En(D),k=En(k)):(F=v,k=m,N=D=0),(C&&!~(u+"").indexOf("px")||w&&!~(c+"").indexOf("px"))&&(C=fo(_,"x",u,"px"),w=fo(_,"y",c,"px")),(E||S||y||x)&&(C=En(C+E-(E*F+S*D)+y),w=En(w+S-(E*N+S*k)+x)),(r||a)&&(b=_.getBBox(),C=En(C+r/100*b.width),w=En(w+a/100*b.height)),b="matrix("+F+","+N+","+D+","+k+","+C+","+w+")",_.setAttribute("transform",b),R&&(_.style[vn]=b)},Zw=function(e,t,n,r,a){var u=360,c=Gn(a),f=parseFloat(a)*(c&&~a.indexOf("rad")?Oo:1),h=f-r,p=r+h+"deg",v,m;return c&&(v=a.split("_")[1],v==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),v==="cw"&&h<0?h=(h+u*Yv)%u-~~(h/u)*u:v==="ccw"&&h>0&&(h=(h-u*Yv)%u-~~(h/u)*u)),e._pt=m=new Ii(e._pt,t,n,r,h,Iw),m.e=p,m.u="deg",e._props.push(n),m},Jv=function(e,t){for(var n in t)e[n]=t[n];return e},Qw=function(e,t,n){var r=Jv({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,f,h,p,v,m,_,E;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),u[vn]=t,c=Wu(n,1),co(n,vn),n.setAttribute("transform",h)):(h=getComputedStyle(n)[vn],u[vn]=t,c=Wu(n,1),u[vn]=h);for(f in Ms)h=r[f],p=c[f],h!==p&&a.indexOf(f)<0&&(_=si(h),E=si(p),v=_!==E?fo(n,f,h,E):parseFloat(h),m=parseFloat(p),e._pt=new Ii(e._pt,c,f,v,m-v,pm),e._pt.u=E||0,e._props.push(f));Jv(c,r)};Di("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",r="Bottom",a="Left",u=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?o+c:"border"+c+o});cd[e>1?"border"+o:o]=function(c,f,h,p,v){var m,_;if(arguments.length<4)return m=u.map(function(E){return hs(c,E,h)}),_=m.join(" "),_.split(m[0]).length===5?m[0]:_;m=(p+"").split(" "),_={},u.forEach(function(E,S){return _[E]=m[S]=m[S]||m[(S-1)/2|0]}),c.init(f,_,v)}});var ES={name:"css",register:gm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var u=this._props,c=e.style,f=n.vars.startAt,h,p,v,m,_,E,S,y,x,R,C,w,F,N,D,k,b;Dg||gm(),this.styles=this.styles||gS(e),k=this.styles.props,this.tween=n;for(S in t)if(S!=="autoRound"&&(p=t[S],!(ji[S]&&sS(S,t,n,r,e,a)))){if(_=typeof p,E=cd[S],_==="function"&&(p=p.call(n,r,e,a),_=typeof p),_==="string"&&~p.indexOf("random(")&&(p=Bu(p)),E)E(this,e,S,p,n)&&(D=1);else if(S.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(S)+"").trim(),p+="",so.lastIndex=0,so.test(h)||(y=si(h),x=si(p),x?y!==x&&(h=fo(e,S,h,x)+x):y&&(p+=y)),this.add(c,"setProperty",h,p,r,a,0,0,S),u.push(S),k.push(S,0,c[S]);else if(_!=="undefined"){if(f&&S in f?(h=typeof f[S]=="function"?f[S].call(n,r,e,a):f[S],Gn(h)&&~h.indexOf("random(")&&(h=Bu(h)),si(h+"")||h==="auto"||(h+=tr.units[S]||si(hs(e,S))||""),(h+"").charAt(1)==="="&&(h=hs(e,S))):h=hs(e,S),m=parseFloat(h),R=_==="string"&&p.charAt(1)==="="&&p.substr(0,2),R&&(p=p.substr(2)),v=parseFloat(p),S in Xr&&(S==="autoAlpha"&&(m===1&&hs(e,"visibility")==="hidden"&&v&&(m=0),k.push("visibility",0,c.visibility),to(this,c,"visibility",m?"inherit":"hidden",v?"inherit":"hidden",!v)),S!=="scale"&&S!=="transform"&&(S=Xr[S],~S.indexOf(",")&&(S=S.split(",")[0]))),C=S in Ms,C){if(this.styles.save(S),b=p,_==="string"&&p.substring(0,6)==="var(--"){if(p=er(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=p,p=er(e,"perspective"),T?e.style.perspective=T:co(e,"perspective")}v=parseFloat(p)}if(w||(F=e._gsap,F.renderTransform&&!t.parseTransform||Wu(e,t.parseTransform),N=t.smoothOrigin!==!1&&F.smooth,w=this._pt=new Ii(this._pt,c,vn,0,1,F.renderTransform,F,0,-1),w.dep=1),S==="scale")this._pt=new Ii(this._pt,F,"scaleY",F.scaleY,(R?nl(F.scaleY,R+v):v)-F.scaleY||0,pm),this._pt.u=0,u.push("scaleY",S),S+="X";else if(S==="transformOrigin"){k.push(Ni,0,c[Ni]),p=jw(p),F.svg?_m(e,p,0,N,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==F.zOrigin&&to(this,F,"zOrigin",F.zOrigin,x),to(this,c,S,fd(h),fd(p)));continue}else if(S==="svgOrigin"){_m(e,p,1,N,0,this);continue}else if(S in yS){Zw(this,F,S,m,R?nl(m,R+p):p);continue}else if(S==="smoothOrigin"){to(this,F,"smooth",F.smooth,p);continue}else if(S==="force3D"){F[S]=p;continue}else if(S==="transform"){Qw(this,p,e);continue}}else S in c||(S=gl(S)||S);if(C||(v||v===0)&&(m||m===0)&&!Dw.test(p)&&S in c)y=(h+"").substr((m+"").length),v||(v=0),x=si(p)||(S in tr.units?tr.units[S]:y),y!==x&&(m=fo(e,S,h,x)),this._pt=new Ii(this._pt,C?F:c,S,m,(R?nl(m,R+v):v)-m,!C&&(x==="px"||S==="zIndex")&&t.autoRound!==!1?Ow:pm),this._pt.u=x||0,C&&b!==p?(this._pt.b=h,this._pt.e=b,this._pt.r=Uw):y!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=Nw);else if(S in c)Yw.call(this,e,S,h,R?R+p:p);else if(S in e)this.add(e,S,h||e[S],R?R+p:p,r,a);else if(S!=="parseTransform"){Mg(S,p);continue}C||(S in c?k.push(S,0,c[S]):typeof e[S]=="function"?k.push(S,2,e[S]()):k.push(S,1,h||e[S])),u.push(S)}}D&&fS(this)},render:function(e,t){if(t.tween._time||!Ig())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hs,aliases:Xr,getSetter:function(e,t,n){var r=Xr[t];return r&&r.indexOf(",")<0&&(t=r),t in Ms&&t!==Ni&&(e._gsap.x||hs(e,"x"))?n&&Xv===n?t==="scale"?Bw:zw:(Xv=n||{})&&(t==="scale"?Hw:Vw):e.style&&!xg(e.style[t])?Fw:~t.indexOf("-")?kw:Pg(e,t)},core:{_removeProperty:co,_getMatrix:Ug}};ki.utils.checkPrefix=gl;ki.core.getStyleSaver=gS;(function(o,e,t,n){var r=Di(o+","+e+","+t,function(a){Ms[a]=1});Di(e,function(a){tr.units[a]="deg",yS[a]=1}),Xr[r[13]]=o+","+e,Di(n,function(a){var u=a.split(":");Xr[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){tr.units[o]="px"});ki.registerPlugin(ES);var Nn=ki.registerPlugin(ES)||ki;Nn.core.Tween;function Jw(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function eT(o,e,t){return e&&Jw(o.prototype,e),o}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn,jf,Qi,no,io,sl,wS,Fo,ol,TS,gs,Lr,AS,CS=function(){return jn||typeof window<"u"&&(jn=window.gsap)&&jn.registerPlugin&&jn},RS=1,Qa=[],Nt=[],qr=[],Ru=Date.now,vm=function(e,t){return t},tT=function(){var e=ol.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Nt),r.push.apply(r,qr),Nt=n,qr=r,vm=function(u,c){return t[u](c)}},oo=function(e,t){return~qr.indexOf(e)&&qr[qr.indexOf(e)+1][t]},bu=function(e){return!!~TS.indexOf(e)},hi=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},di=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},af="scrollLeft",lf="scrollTop",xm=function(){return gs&&gs.isPressed||Nt.cache++},dd=function(e,t){var n=function r(a){if(a||a===0){RS&&(Qi.history.scrollRestoration="manual");var u=gs&&gs.isPressed;a=r.v=Math.round(a)||(gs&&gs.iOS?1:0),e(a),r.cacheID=Nt.cache,u&&vm("ss",a)}else(t||Nt.cache!==r.cacheID||vm("ref"))&&(r.cacheID=Nt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},xi={s:af,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:dd(function(o){return arguments.length?Qi.scrollTo(o,In.sc()):Qi.pageXOffset||no[af]||io[af]||sl[af]||0})},In={s:lf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xi,sc:dd(function(o){return arguments.length?Qi.scrollTo(xi.sc(),o):Qi.pageYOffset||no[lf]||io[lf]||sl[lf]||0})},Ri=function(e,t){return(t&&t._ctx&&t._ctx.selector||jn.utils.toArray)(e)[0]||(typeof e=="string"&&jn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},nT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ho=function(e,t){var n=t.s,r=t.sc;bu(e)&&(e=no.scrollingElement||io);var a=Nt.indexOf(e),u=r===In.sc?1:2;!~a&&(a=Nt.push(e)-1),Nt[a+u]||hi(e,"scroll",xm);var c=Nt[a+u],f=c||(Nt[a+u]=dd(oo(e,n),!0)||(bu(e)?r:dd(function(h){return arguments.length?e[n]=h:e[n]})));return f.target=e,c||(f.smooth=jn.getProperty(e,"scrollBehavior")==="smooth"),f},ym=function(e,t,n){var r=e,a=e,u=Ru(),c=u,f=t||50,h=Math.max(500,f*3),p=function(E,S){var y=Ru();S||y-u>f?(a=r,r=E,c=u,u=y):n?r+=E:r=a+(E-a)/(y-c)*(u-c)},v=function(){a=r=n?0:r,c=u=0},m=function(E){var S=c,y=a,x=Ru();return(E||E===0)&&E!==r&&p(E),u===c||x-c>h?0:(r+(n?y:-y))/((n?x:u)-S)*1e3};return{update:p,reset:v,getVelocity:m}},au=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ex=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},bS=function(){ol=jn.core.globals().ScrollTrigger,ol&&ol.core&&tT()},PS=function(e){return jn=e||CS(),!jf&&jn&&typeof document<"u"&&document.body&&(Qi=window,no=document,io=no.documentElement,sl=no.body,TS=[Qi,no,io,sl],jn.utils.clamp,AS=jn.core.context||function(){},Fo="onpointerenter"in sl?"pointer":"mouse",wS=wn.isTouch=Qi.matchMedia&&Qi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Lr=wn.eventTypes=("ontouchstart"in io?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in io?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return RS=0},500),jf=1),ol||bS(),jf};xi.op=In;Nt.cache=0;var wn=(function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){jf||PS(jn)||console.warn("Please gsap.registerPlugin(Observer)"),ol||bS();var r=n.tolerance,a=n.dragMinimum,u=n.type,c=n.target,f=n.lineHeight,h=n.debounce,p=n.preventDefault,v=n.onStop,m=n.onStopDelay,_=n.ignore,E=n.wheelSpeed,S=n.event,y=n.onDragStart,x=n.onDragEnd,R=n.onDrag,C=n.onPress,w=n.onRelease,F=n.onRight,N=n.onLeft,D=n.onUp,k=n.onDown,b=n.onChangeX,T=n.onChangeY,H=n.onChange,G=n.onToggleX,j=n.onToggleY,K=n.onHover,ue=n.onHoverEnd,J=n.onMove,q=n.ignoreCheck,z=n.isNormalizer,te=n.onGestureStart,I=n.onGestureEnd,O=n.onWheel,ie=n.onEnable,be=n.onDisable,Q=n.onClick,de=n.scrollSpeed,ve=n.capture,ge=n.allowClicks,we=n.lockAxis,Le=n.onLockAxis;this.target=c=Ri(c)||io,this.vars=n,_&&(_=jn.utils.toArray(_)),r=r||1e-9,a=a||0,E=E||1,de=de||1,u=u||"wheel,touch,pointer",h=h!==!1,f||(f=parseFloat(Qi.getComputedStyle(sl).lineHeight)||22);var Je,Mt,ut,et,X,Xt,ht,ee=this,We=0,Rt=0,je=n.passive||!p&&n.passive!==!1,U=ho(c,xi),P=ho(c,In),oe=U(),_e=P(),me=~u.indexOf("touch")&&!~u.indexOf("pointer")&&Lr[0]==="pointerdown",pe=bu(c),Ne=c.ownerDocument||no,Ce=[0,0,0],Oe=[0,0,0],gt=0,Me=function(){return gt=Ru()},Pe=function($e,vt){return(ee.event=$e)&&_&&nT($e.target,_)||vt&&me&&$e.pointerType!=="touch"||q&&q($e,vt)},ot=function(){ee._vx.reset(),ee._vy.reset(),Mt.pause(),v&&v(ee)},it=function(){var $e=ee.deltaX=ex(Ce),vt=ee.deltaY=ex(Oe),Fe=Math.abs($e)>=r,ct=Math.abs(vt)>=r;H&&(Fe||ct)&&H(ee,$e,vt,Ce,Oe),Fe&&(F&&ee.deltaX>0&&F(ee),N&&ee.deltaX<0&&N(ee),b&&b(ee),G&&ee.deltaX<0!=We<0&&G(ee),We=ee.deltaX,Ce[0]=Ce[1]=Ce[2]=0),ct&&(k&&ee.deltaY>0&&k(ee),D&&ee.deltaY<0&&D(ee),T&&T(ee),j&&ee.deltaY<0!=Rt<0&&j(ee),Rt=ee.deltaY,Oe[0]=Oe[1]=Oe[2]=0),(et||ut)&&(J&&J(ee),ut&&(y&&ut===1&&y(ee),R&&R(ee),ut=0),et=!1),Xt&&!(Xt=!1)&&Le&&Le(ee),X&&(O(ee),X=!1),Je=0},Ve=function($e,vt,Fe){Ce[Fe]+=$e,Oe[Fe]+=vt,ee._vx.update($e),ee._vy.update(vt),h?Je||(Je=requestAnimationFrame(it)):it()},St=function($e,vt){we&&!ht&&(ee.axis=ht=Math.abs($e)>Math.abs(vt)?"x":"y",Xt=!0),ht!=="y"&&(Ce[2]+=$e,ee._vx.update($e,!0)),ht!=="x"&&(Oe[2]+=vt,ee._vy.update(vt,!0)),h?Je||(Je=requestAnimationFrame(it)):it()},at=function($e){if(!Pe($e,1)){$e=au($e,p);var vt=$e.clientX,Fe=$e.clientY,ct=vt-ee.x,Ze=Fe-ee.y,lt=ee.isDragging;ee.x=vt,ee.y=Fe,(lt||(ct||Ze)&&(Math.abs(ee.startX-vt)>=a||Math.abs(ee.startY-Fe)>=a))&&(ut||(ut=lt?2:1),lt||(ee.isDragging=!0),St(ct,Ze))}},Pt=ee.onPress=function(ze){Pe(ze,1)||ze&&ze.button||(ee.axis=ht=null,Mt.pause(),ee.isPressed=!0,ze=au(ze),We=Rt=0,ee.startX=ee.x=ze.clientX,ee.startY=ee.y=ze.clientY,ee._vx.reset(),ee._vy.reset(),hi(z?c:Ne,Lr[1],at,je,!0),ee.deltaX=ee.deltaY=0,C&&C(ee))},V=ee.onRelease=function(ze){if(!Pe(ze,1)){di(z?c:Ne,Lr[1],at,!0);var $e=!isNaN(ee.y-ee.startY),vt=ee.isDragging,Fe=vt&&(Math.abs(ee.x-ee.startX)>3||Math.abs(ee.y-ee.startY)>3),ct=au(ze);!Fe&&$e&&(ee._vx.reset(),ee._vy.reset(),p&&ge&&jn.delayedCall(.08,function(){if(Ru()-gt>300&&!ze.defaultPrevented){if(ze.target.click)ze.target.click();else if(Ne.createEvent){var Ze=Ne.createEvent("MouseEvents");Ze.initMouseEvent("click",!0,!0,Qi,1,ct.screenX,ct.screenY,ct.clientX,ct.clientY,!1,!1,!1,!1,0,null),ze.target.dispatchEvent(Ze)}}})),ee.isDragging=ee.isGesturing=ee.isPressed=!1,v&&vt&&!z&&Mt.restart(!0),ut&&it(),x&&vt&&x(ee),w&&w(ee,Fe)}},De=function($e){return $e.touches&&$e.touches.length>1&&(ee.isGesturing=!0)&&te($e,ee.isDragging)},fe=function(){return(ee.isGesturing=!1)||I(ee)},he=function($e){if(!Pe($e)){var vt=U(),Fe=P();Ve((vt-oe)*de,(Fe-_e)*de,1),oe=vt,_e=Fe,v&&Mt.restart(!0)}},Ie=function($e){if(!Pe($e)){$e=au($e,p),O&&(X=!0);var vt=($e.deltaMode===1?f:$e.deltaMode===2?Qi.innerHeight:1)*E;Ve($e.deltaX*vt,$e.deltaY*vt,0),v&&!z&&Mt.restart(!0)}},Ue=function($e){if(!Pe($e)){var vt=$e.clientX,Fe=$e.clientY,ct=vt-ee.x,Ze=Fe-ee.y;ee.x=vt,ee.y=Fe,et=!0,v&&Mt.restart(!0),(ct||Ze)&&St(ct,Ze)}},pt=function($e){ee.event=$e,K(ee)},Ft=function($e){ee.event=$e,ue(ee)},an=function($e){return Pe($e)||au($e,p)&&Q(ee)};Mt=ee._dc=jn.delayedCall(m||.25,ot).pause(),ee.deltaX=ee.deltaY=0,ee._vx=ym(0,50,!0),ee._vy=ym(0,50,!0),ee.scrollX=U,ee.scrollY=P,ee.isDragging=ee.isGesturing=ee.isPressed=!1,AS(this),ee.enable=function(ze){return ee.isEnabled||(hi(pe?Ne:c,"scroll",xm),u.indexOf("scroll")>=0&&hi(pe?Ne:c,"scroll",he,je,ve),u.indexOf("wheel")>=0&&hi(c,"wheel",Ie,je,ve),(u.indexOf("touch")>=0&&wS||u.indexOf("pointer")>=0)&&(hi(c,Lr[0],Pt,je,ve),hi(Ne,Lr[2],V),hi(Ne,Lr[3],V),ge&&hi(c,"click",Me,!0,!0),Q&&hi(c,"click",an),te&&hi(Ne,"gesturestart",De),I&&hi(Ne,"gestureend",fe),K&&hi(c,Fo+"enter",pt),ue&&hi(c,Fo+"leave",Ft),J&&hi(c,Fo+"move",Ue)),ee.isEnabled=!0,ee.isDragging=ee.isGesturing=ee.isPressed=et=ut=!1,ee._vx.reset(),ee._vy.reset(),oe=U(),_e=P(),ze&&ze.type&&Pt(ze),ie&&ie(ee)),ee},ee.disable=function(){ee.isEnabled&&(Qa.filter(function(ze){return ze!==ee&&bu(ze.target)}).length||di(pe?Ne:c,"scroll",xm),ee.isPressed&&(ee._vx.reset(),ee._vy.reset(),di(z?c:Ne,Lr[1],at,!0)),di(pe?Ne:c,"scroll",he,ve),di(c,"wheel",Ie,ve),di(c,Lr[0],Pt,ve),di(Ne,Lr[2],V),di(Ne,Lr[3],V),di(c,"click",Me,!0),di(c,"click",an),di(Ne,"gesturestart",De),di(Ne,"gestureend",fe),di(c,Fo+"enter",pt),di(c,Fo+"leave",Ft),di(c,Fo+"move",Ue),ee.isEnabled=ee.isPressed=ee.isDragging=!1,be&&be(ee))},ee.kill=ee.revert=function(){ee.disable();var ze=Qa.indexOf(ee);ze>=0&&Qa.splice(ze,1),gs===ee&&(gs=0)},Qa.push(ee),z&&bu(c)&&(gs=ee),ee.enable(S)},eT(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();wn.version="3.15.0";wn.create=function(o){return new wn(o)};wn.register=PS;wn.getAll=function(){return Qa.slice()};wn.getById=function(o){return Qa.filter(function(e){return e.vars.id===o})[0]};CS()&&jn.registerPlugin(wn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qe,qa,It,Zt,$i,jt,Og,hd,Xu,Pu,vu,uf,ii,Ed,Sm,gi,tx,nx,$a,LS,_p,DS,mi,Mm,IS,NS,Zs,Em,Fg,al,kg,Lu,wm,vp,cf=1,ri=Date.now,xp=ri(),xr=0,xu=0,ix=function(e,t,n){var r=Yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},rx=function(e,t){return t&&(!Yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},iT=function o(){return xu&&requestAnimationFrame(o)},sx=function(){return Ed=1},ox=function(){return Ed=0},Vr=function(e){return e},yu=function(e){return Math.round(e*1e5)/1e5||0},US=function(){return typeof window<"u"},OS=function(){return qe||US()&&(qe=window.gsap)&&qe.registerPlugin&&qe},ta=function(e){return!!~Og.indexOf(e)},FS=function(e){return(e==="Height"?kg:It["inner"+e])||$i["client"+e]||jt["client"+e]},kS=function(e){return oo(e,"getBoundingClientRect")||(ta(e)?function(){return Qf.width=It.innerWidth,Qf.height=kg,Qf}:function(){return ps(e)})},rT=function(e,t,n){var r=n.d,a=n.d2,u=n.a;return(u=oo(e,"getBoundingClientRect"))?function(){return u()[r]}:function(){return(t?FS(a):e["client"+a])||0}},sT=function(e,t){return!t||~qr.indexOf(e)?kS(e):function(){return Qf}},Yr=function(e,t){var n=t.s,r=t.d2,a=t.d,u=t.a;return Math.max(0,(n="scroll"+r)&&(u=oo(e,n))?u()-kS(e)()[a]:ta(e)?($i[n]||jt[n])-FS(r):e[n]-e["offset"+r])},ff=function(e,t){for(var n=0;n<$a.length;n+=3)(!t||~t.indexOf($a[n+1]))&&e($a[n],$a[n+1],$a[n+2])},Yi=function(e){return typeof e=="string"},oi=function(e){return typeof e=="function"},Su=function(e){return typeof e=="number"},ko=function(e){return typeof e=="object"},lu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},La=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Da=Math.abs,zS="left",BS="top",zg="right",Bg="bottom",Qo="width",Jo="height",Du="Right",Iu="Left",Nu="Top",Uu="Bottom",Cn="padding",mr="margin",_l="Width",Hg="Height",Dn="px",gr=function(e){return It.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},oT=function(e){var t=gr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ax=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ps=function(e,t){var n=t&&gr(e)[Sm]!=="matrix(1, 0, 0, 1, 0, 0)"&&qe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},pd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},HS=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},aT=function(e){return function(t){return qe.utils.snap(HS(e),t)}},Vg=function(e){var t=qe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,u){u===void 0&&(u=.001);var c;if(!a)return t(r);if(a>0){for(r-=u,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=u;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,u){u===void 0&&(u=.001);var c=t(r);return!a||Math.abs(c-r)<u||c-r<0==a<0?c:t(a<0?r-e:r+e)}},lT=function(e){return function(t,n){return Vg(HS(e))(t,n.direction)}},df=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},Vn=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},Hn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},hf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},lx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},pf={toggleActions:"play",anticipatePin:0},md={top:0,left:0,center:.5,bottom:1,right:1},qf=function(e,t){if(Yi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in md?md[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},mf=function(e,t,n,r,a,u,c,f){var h=a.startColor,p=a.endColor,v=a.fontSize,m=a.indent,_=a.fontWeight,E=Zt.createElement("div"),S=ta(n)||oo(n,"pinType")==="fixed",y=e.indexOf("scroller")!==-1,x=S?jt:n.tagName==="IFRAME"?n.contentDocument.body:n,R=e.indexOf("start")!==-1,C=R?h:p,w="border-color:"+C+";font-size:"+v+";color:"+C+";font-weight:"+_+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((y||f)&&S?"fixed;":"absolute;"),(y||f||!S)&&(w+=(r===In?zg:Bg)+":"+(u+parseFloat(m))+"px;"),c&&(w+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),E._isStart=R,E.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),E.style.cssText=w,E.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(E,x.children[0]):x.appendChild(E),E._offset=E["offset"+r.op.d2],$f(E,0,r,R),E},$f=function(e,t,n,r){var a={display:"block"},u=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+u+_l]=1,a["border"+c+_l]=0,a[n.p]=t+"px",qe.set(e,a)},bt=[],Tm={},Yu,ux=function(){return ri()-xr>34&&(Yu||(Yu=requestAnimationFrame(xs)))},Ia=function(){(!mi||!mi.isPressed||mi.startX>jt.clientWidth)&&(Nt.cache++,mi?Yu||(Yu=requestAnimationFrame(xs)):xs(),xr||ia("scrollStart"),xr=ri())},yp=function(){NS=It.innerWidth,IS=It.innerHeight},Mu=function(e){Nt.cache++,(e===!0||!ii&&!DS&&!Zt.fullscreenElement&&!Zt.webkitFullscreenElement&&(!Mm||NS!==It.innerWidth||Math.abs(It.innerHeight-IS)>It.innerHeight*.25))&&hd.restart(!0)},na={},uT=[],VS=function o(){return Hn(Ut,"scrollEnd",o)||Wo(!0)},ia=function(e){return na[e]&&na[e].map(function(t){return t()})||uT},Xi=[],GS=function(e){for(var t=0;t<Xi.length;t+=5)(!e||Xi[t+4]&&Xi[t+4].query===e)&&(Xi[t].style.cssText=Xi[t+1],Xi[t].getBBox&&Xi[t].setAttribute("transform",Xi[t+2]||""),Xi[t+3].uncache=1)},WS=function(){return Nt.forEach(function(e){return oi(e)&&++e.cacheID&&(e.rec=e())})},Gg=function(e,t){var n;for(gi=0;gi<bt.length;gi++)n=bt[gi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Lu=!0,t&&GS(t),t||ia("revert")},XS=function(e,t){Nt.cache++,(t||!_i)&&Nt.forEach(function(n){return oi(n)&&n.cacheID++&&(n.rec=0)}),Yi(e)&&(It.history.scrollRestoration=Fg=e)},_i,ea=0,cx,cT=function(){if(cx!==ea){var e=cx=ea;requestAnimationFrame(function(){return e===ea&&Wo(!0)})}},YS=function(){jt.appendChild(al),kg=!mi&&al.offsetHeight||It.innerHeight,jt.removeChild(al)},fx=function(e){return Xu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Wo=function(e,t){if($i=Zt.documentElement,jt=Zt.body,Og=[It,Zt,$i,jt],xr&&!e&&!Lu){Vn(Ut,"scrollEnd",VS);return}YS(),_i=Ut.isRefreshing=!0,Lu||WS();var n=ia("refreshInit");LS&&Ut.sort(),t||Gg(),Nt.forEach(function(r){oi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),bt.slice(0).forEach(function(r){return r.refresh()}),Lu=!1,bt.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",u=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-u),r.refresh()}}),wm=1,fx(!0),bt.forEach(function(r){var a=Yr(r.scroller,r._dir),u=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(u||c)&&r.setPositions(c?a-1:r.start,u?Math.max(c?a:r.start+1,a):r.end,!0)}),fx(!1),wm=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Nt.forEach(function(r){oi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),XS(Fg,1),hd.pause(),ea++,_i=2,xs(2),bt.forEach(function(r){return oi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),_i=Ut.isRefreshing=!1,ia("refresh")},Am=0,Kf=1,Ou,xs=function(e){if(e===2||!_i&&!Lu){Ut.isUpdating=!0,Ou&&Ou.update(0);var t=bt.length,n=ri(),r=n-xp>=50,a=t&&bt[0].scroll();if(Kf=Am>a?-1:1,_i||(Am=a),r&&(xr&&!Ed&&n-xr>200&&(xr=0,ia("scrollEnd")),vu=xp,xp=n),Kf<0){for(gi=t;gi-- >0;)bt[gi]&&bt[gi].update(0,r);Kf=1}else for(gi=0;gi<t;gi++)bt[gi]&&bt[gi].update(0,r);Ut.isUpdating=!1}Yu=0},Cm=[zS,BS,Bg,zg,mr+Uu,mr+Du,mr+Nu,mr+Iu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Zf=Cm.concat([Qo,Jo,"boxSizing","max"+_l,"max"+Hg,"position",mr,Cn,Cn+Nu,Cn+Du,Cn+Uu,Cn+Iu]),fT=function(e,t,n){ll(n);var r=e._gsap;if(r.spacerIsNative)ll(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},Sp=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=Cm.length,u=t.style,c=e.style,f;a--;)f=Cm[a],u[f]=n[f];u.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(u.display="inline-block"),c[Bg]=c[zg]="auto",u.flexBasis=n.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[Qo]=pd(e,xi)+Dn,u[Jo]=pd(e,In)+Dn,u[Cn]=c[mr]=c[BS]=c[zS]="0",ll(r),c[Qo]=c["max"+_l]=n[Qo],c[Jo]=c["max"+Hg]=n[Jo],c[Cn]=n[Cn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},dT=/([A-Z])/g,ll=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,u;for((e.t._gsap||qe.core.getCache(e.t)).uncache=1;r<n;r+=2)u=e[r+1],a=e[r],u?t[a]=u:t[a]&&t.removeProperty(a.replace(dT,"-$1").toLowerCase())}},gf=function(e){for(var t=Zf.length,n=e.style,r=[],a=0;a<t;a++)r.push(Zf[a],n[Zf[a]]);return r.t=e,r},hT=function(e,t,n){for(var r=[],a=e.length,u=n?8:0,c;u<a;u+=2)c=e[u],r.push(c,c in t?t[c]:e[u+1]);return r.t=e.t,r},Qf={left:0,top:0},dx=function(e,t,n,r,a,u,c,f,h,p,v,m,_,E){oi(e)&&(e=e(f)),Yi(e)&&e.substr(0,3)==="max"&&(e=m+(e.charAt(4)==="="?qf("0"+e.substr(3),n):0));var S=_?_.time():0,y,x,R;if(_&&_.seek(0),isNaN(e)||(e=+e),Su(e))_&&(e=qe.utils.mapRange(_.scrollTrigger.start,_.scrollTrigger.end,0,m,e)),c&&$f(c,n,r,!0);else{oi(t)&&(t=t(f));var C=(e||"0").split(" "),w,F,N,D;R=Ri(t,f)||jt,w=ps(R)||{},(!w||!w.left&&!w.top)&&gr(R).display==="none"&&(D=R.style.display,R.style.display="block",w=ps(R),D?R.style.display=D:R.style.removeProperty("display")),F=qf(C[0],w[r.d]),N=qf(C[1]||"0",n),e=w[r.p]-h[r.p]-p+F+a-N,c&&$f(c,N,r,n-N<20||c._isStart&&N>20),n-=n-N}if(E&&(f[E]=e||-.001,e<0&&(e=0)),u){var k=e+n,b=u._isStart;y="scroll"+r.d2,$f(u,k,r,b&&k>20||!b&&(v?Math.max(jt[y],$i[y]):u.parentNode[y])<=k+1),v&&(h=ps(c),v&&(u.style[r.op.p]=h[r.op.p]-r.op.m-u._offset+Dn))}return _&&R&&(y=ps(R),_.seek(m),x=ps(R),_._caScrollDist=y[r.p]-x[r.p],e=e/_._caScrollDist*m),_&&_.seek(S),_?e:Math.round(e)},pT=/(webkit|moz|length|cssText|inset)/i,hx=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,u,c;if(t===jt){e._stOrig=a.cssText,c=gr(e);for(u in c)!+u&&!pT.test(u)&&c[u]&&typeof a[u]=="string"&&u!=="0"&&(a[u]=c[u]);a.top=n,a.left=r}else a.cssText=e._stOrig;qe.core.getCache(e).uncache=1,t.appendChild(e)}},jS=function(e,t,n){var r=t,a=r;return function(u){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(u=c,n&&n()),a=r,r=Math.round(u),r}},_f=function(e,t,n){var r={};r[t.p]="+="+n,qe.set(e,r)},px=function(e,t){var n=ho(e,t),r="_scroll"+t.p2,a=function u(c,f,h,p,v){var m=u.tween,_=f.onComplete,E={};h=h||n();var S=jS(n,h,function(){m.kill(),u.tween=0});return v=p&&v||0,p=p||c-h,m&&m.kill(),f[r]=c,f.inherit=!1,f.modifiers=E,E[r]=function(){return S(h+p*m.ratio+v*m.ratio*m.ratio)},f.onUpdate=function(){Nt.cache++,u.tween&&xs()},f.onComplete=function(){u.tween=0,_&&_.call(m)},m=u.tween=qe.to(e,f),m};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Vn(e,"wheel",n.wheelHandler),Ut.isTouch&&Vn(e,"touchmove",n.wheelHandler),a},Ut=(function(){function o(t,n){qa||o.register(qe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Em(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xu){this.update=this.refresh=this.kill=Vr;return}n=ax(Yi(n)||Su(n)||n.nodeType?{trigger:n}:n,pf);var a=n,u=a.onUpdate,c=a.toggleClass,f=a.id,h=a.onToggle,p=a.onRefresh,v=a.scrub,m=a.trigger,_=a.pin,E=a.pinSpacing,S=a.invalidateOnRefresh,y=a.anticipatePin,x=a.onScrubComplete,R=a.onSnapComplete,C=a.once,w=a.snap,F=a.pinReparent,N=a.pinSpacer,D=a.containerAnimation,k=a.fastScrollEnd,b=a.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xi:In,H=!v&&v!==0,G=Ri(n.scroller||It),j=qe.core.getCache(G),K=ta(G),ue=("pinType"in n?n.pinType:oo(G,"pinType")||K&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=H&&n.toggleActions.split(" "),z="markers"in n?n.markers:pf.markers,te=K?0:parseFloat(gr(G)["border"+T.p2+_l])||0,I=this,O=n.onRefreshInit&&function(){return n.onRefreshInit(I)},ie=rT(G,K,T),be=sT(G,K),Q=0,de=0,ve=0,ge=ho(G,T),we,Le,Je,Mt,ut,et,X,Xt,ht,ee,We,Rt,je,U,P,oe,_e,me,pe,Ne,Ce,Oe,gt,Me,Pe,ot,it,Ve,St,at,Pt,V,De,fe,he,Ie,Ue,pt,Ft;if(I._startClamp=I._endClamp=!1,I._dir=T,y*=45,I.scroller=G,I.scroll=D?D.time.bind(D):ge,Mt=ge(),I.vars=n,r=r||n.animation,"refreshPriority"in n&&(LS=1,n.refreshPriority===-9999&&(Ou=I)),j.tweenScroll=j.tweenScroll||{top:px(G,In),left:px(G,xi)},I.tweenTo=we=j.tweenScroll[T.p],I.scrubDuration=function(Fe){De=Su(Fe)&&Fe,De?V?V.duration(Fe):V=qe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:De,paused:!0,onComplete:function(){return x&&x(I)}}):(V&&V.progress(1).kill(),V=0)},r&&(r.vars.lazy=!1,r._initted&&!I.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),I.animation=r.pause(),r.scrollTrigger=I,I.scrubDuration(v),at=0,f||(f=r.vars.id)),w&&((!ko(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in jt.style&&qe.set(K?[jt,$i]:G,{scrollBehavior:"auto"}),Nt.forEach(function(Fe){return oi(Fe)&&Fe.target===(K?Zt.scrollingElement||$i:G)&&(Fe.smooth=!1)}),Je=oi(w.snapTo)?w.snapTo:w.snapTo==="labels"?aT(r):w.snapTo==="labelsDirectional"?lT(r):w.directional!==!1?function(Fe,ct){return Vg(w.snapTo)(Fe,ri()-de<500?0:ct.direction)}:qe.utils.snap(w.snapTo),fe=w.duration||{min:.1,max:2},fe=ko(fe)?Pu(fe.min,fe.max):Pu(fe,fe),he=qe.delayedCall(w.delay||De/2||.1,function(){var Fe=ge(),ct=ri()-de<500,Ze=we.tween;if((ct||Math.abs(I.getVelocity())<10)&&!Ze&&!Ed&&Q!==Fe){var lt=(Fe-et)/U,sn=r&&!H?r.totalProgress():lt,Et=ct?0:(sn-Pt)/(ri()-vu)*1e3||0,Yt=qe.utils.clamp(-lt,1-lt,Da(Et/2)*Et/.185),Sn=lt+(w.inertia===!1?0:Yt),qt,$t,Lt=w,$n=Lt.onStart,Qt=Lt.onInterrupt,Wn=Lt.onComplete;if(qt=Je(Sn,I),Su(qt)||(qt=Sn),$t=Math.max(0,Math.round(et+qt*U)),Fe<=X&&Fe>=et&&$t!==Fe){if(Ze&&!Ze._initted&&Ze.data<=Da($t-Fe))return;w.inertia===!1&&(Yt=qt-lt),we($t,{duration:fe(Da(Math.max(Da(Sn-sn),Da(qt-sn))*.185/Et/.05||0)),ease:w.ease||"power3",data:Da($t-Fe),onInterrupt:function(){return he.restart(!0)&&Qt&&La(I,Qt)},onComplete:function(){I.update(),Q=ge(),r&&!H&&(V?V.resetTo("totalProgress",qt,r._tTime/r._tDur):r.progress(qt)),at=Pt=r&&!H?r.totalProgress():I.progress,R&&R(I),Wn&&La(I,Wn)}},Fe,Yt*U,$t-Fe-Yt*U),$n&&La(I,$n,we.tween)}}else I.isActive&&Q!==Fe&&he.restart(!0)}).pause()),f&&(Tm[f]=I),m=I.trigger=Ri(m||_!==!0&&_),Ft=m&&m._gsap&&m._gsap.stRevert,Ft&&(Ft=Ft(I)),_=_===!0?m:Ri(_),Yi(c)&&(c={targets:m,className:c}),_&&(E===!1||E===mr||(E=!E&&_.parentNode&&_.parentNode.style&&gr(_.parentNode).display==="flex"?!1:Cn),I.pin=_,Le=qe.core.getCache(_),Le.spacer?P=Le.pinState:(N&&(N=Ri(N),N&&!N.nodeType&&(N=N.current||N.nativeElement),Le.spacerIsNative=!!N,N&&(Le.spacerState=gf(N))),Le.spacer=me=N||Zt.createElement("div"),me.classList.add("pin-spacer"),f&&me.classList.add("pin-spacer-"+f),Le.pinState=P=gf(_)),n.force3D!==!1&&qe.set(_,{force3D:!0}),I.spacer=me=Le.spacer,St=gr(_),Me=St[E+T.os2],Ne=qe.getProperty(_),Ce=qe.quickSetter(_,T.a,Dn),Sp(_,me,St),_e=gf(_)),z){Rt=ko(z)?ax(z,lx):lx,ee=mf("scroller-start",f,G,T,Rt,0),We=mf("scroller-end",f,G,T,Rt,0,ee),pe=ee["offset"+T.op.d2];var an=Ri(oo(G,"content")||G);Xt=this.markerStart=mf("start",f,an,T,Rt,pe,0,D),ht=this.markerEnd=mf("end",f,an,T,Rt,pe,0,D),D&&(pt=qe.quickSetter([Xt,ht],T.a,Dn)),!ue&&!(qr.length&&oo(G,"fixedMarkers")===!0)&&(oT(K?jt:G),qe.set([ee,We],{force3D:!0}),ot=qe.quickSetter(ee,T.a,Dn),Ve=qe.quickSetter(We,T.a,Dn))}if(D){var ze=D.vars.onUpdate,$e=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){I.update(0,0,1),ze&&ze.apply(D,$e||[])})}if(I.previous=function(){return bt[bt.indexOf(I)-1]},I.next=function(){return bt[bt.indexOf(I)+1]},I.revert=function(Fe,ct){if(!ct)return I.kill(!0);var Ze=Fe!==!1||!I.enabled,lt=ii;Ze!==I.isReverted&&(Ze&&(Ie=Math.max(ge(),I.scroll.rec||0),ve=I.progress,Ue=r&&r.progress()),Xt&&[Xt,ht,ee,We].forEach(function(sn){return sn.style.display=Ze?"none":"block"}),Ze&&(ii=I,I.update(Ze)),_&&(!F||!I.isActive)&&(Ze?fT(_,me,P):Sp(_,me,gr(_),Pe)),Ze||I.update(Ze),ii=lt,I.isReverted=Ze)},I.refresh=function(Fe,ct,Ze,lt){if(!((ii||!I.enabled)&&!ct)){if(_&&Fe&&xr){Vn(o,"scrollEnd",VS);return}!_i&&O&&O(I),ii=I,we.tween&&!Ze&&(we.tween.kill(),we.tween=0),V&&V.pause(),S&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ln){return ln.vars.immediateRender&&ln.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var sn=ie(),Et=be(),Yt=D?D.duration():Yr(G,T),Sn=U<=.01||!U,qt=0,$t=lt||0,Lt=ko(Ze)?Ze.end:n.end,$n=n.endTrigger||m,Qt=ko(Ze)?Ze.start:n.start||(n.start===0||!m?0:_?"0 0":"0 100%"),Wn=I.pinnedContainer=n.pinnedContainer&&Ri(n.pinnedContainer,I),L=m&&Math.max(0,bt.indexOf(I))||0,Y=L,se,ae,Z,Te,xe,ke,He,mt,_t,Xe,yt,Ot,Tt;for(z&&ko(Ze)&&(Ot=qe.getProperty(ee,T.p),Tt=qe.getProperty(We,T.p));Y-- >0;)ke=bt[Y],ke.end||ke.refresh(0,1)||(ii=I),He=ke.pin,He&&(He===m||He===_||He===Wn)&&!ke.isReverted&&(Xe||(Xe=[]),Xe.unshift(ke),ke.revert(!0,!0)),ke!==bt[Y]&&(L--,Y--);for(oi(Qt)&&(Qt=Qt(I)),Qt=ix(Qt,"start",I),et=dx(Qt,m,sn,T,ge(),Xt,ee,I,Et,te,ue,Yt,D,I._startClamp&&"_startClamp")||(_?-.001:0),oi(Lt)&&(Lt=Lt(I)),Yi(Lt)&&!Lt.indexOf("+=")&&(~Lt.indexOf(" ")?Lt=(Yi(Qt)?Qt.split(" ")[0]:"")+Lt:(qt=qf(Lt.substr(2),sn),Lt=Yi(Qt)?Qt:(D?qe.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,et):et)+qt,$n=m)),Lt=ix(Lt,"end",I),X=Math.max(et,dx(Lt||($n?"100% 0":Yt),$n,sn,T,ge()+qt,ht,We,I,Et,te,ue,Yt,D,I._endClamp&&"_endClamp"))||-.001,qt=0,Y=L;Y--;)ke=bt[Y]||{},He=ke.pin,He&&ke.start-ke._pinPush<=et&&!D&&ke.end>0&&(se=ke.end-(I._startClamp?Math.max(0,ke.start):ke.start),(He===m&&ke.start-ke._pinPush<et||He===Wn)&&isNaN(Qt)&&(qt+=se*(1-ke.progress)),He===_&&($t+=se));if(et+=qt,X+=qt,I._startClamp&&(I._startClamp+=qt),I._endClamp&&!_i&&(I._endClamp=X||-.001,X=Math.min(X,Yr(G,T))),U=X-et||(et-=.01)&&.001,Sn&&(ve=qe.utils.clamp(0,1,qe.utils.normalize(et,X,Ie))),I._pinPush=$t,Xt&&qt&&(se={},se[T.a]="+="+qt,Wn&&(se[T.p]="-="+ge()),qe.set([Xt,ht],se)),_&&!(wm&&I.end>=Yr(G,T)))se=gr(_),Te=T===In,Z=ge(),Oe=parseFloat(Ne(T.a))+$t,!Yt&&X>1&&(yt=(K?Zt.scrollingElement||$i:G).style,yt={style:yt,value:yt["overflow"+T.a.toUpperCase()]},K&&gr(jt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(yt.style["overflow"+T.a.toUpperCase()]="scroll")),Sp(_,me,se),_e=gf(_),ae=ps(_,!0),mt=ue&&ho(G,Te?xi:In)(),E?(Pe=[E+T.os2,U+$t+Dn],Pe.t=me,Y=E===Cn?pd(_,T)+U+$t:0,Y&&(Pe.push(T.d,Y+Dn),me.style.flexBasis!=="auto"&&(me.style.flexBasis=Y+Dn)),ll(Pe),Wn&&bt.forEach(function(ln){ln.pin===Wn&&ln.vars.pinSpacing!==!1&&(ln._subPinOffset=!0)}),ue&&ge(Ie)):(Y=pd(_,T),Y&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=Y+Dn)),ue&&(xe={top:ae.top+(Te?Z-et:mt)+Dn,left:ae.left+(Te?mt:Z-et)+Dn,boxSizing:"border-box",position:"fixed"},xe[Qo]=xe["max"+_l]=Math.ceil(ae.width)+Dn,xe[Jo]=xe["max"+Hg]=Math.ceil(ae.height)+Dn,xe[mr]=xe[mr+Nu]=xe[mr+Du]=xe[mr+Uu]=xe[mr+Iu]="0",xe[Cn]=se[Cn],xe[Cn+Nu]=se[Cn+Nu],xe[Cn+Du]=se[Cn+Du],xe[Cn+Uu]=se[Cn+Uu],xe[Cn+Iu]=se[Cn+Iu],oe=hT(P,xe,F),_i&&ge(0)),r?(_t=r._initted,_p(1),r.render(r.duration(),!0,!0),gt=Ne(T.a)-Oe+U+$t,it=Math.abs(U-gt)>1,ue&&it&&oe.splice(oe.length-2,2),r.render(0,!0,!0),_t||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),_p(0)):gt=U,yt&&(yt.value?yt.style["overflow"+T.a.toUpperCase()]=yt.value:yt.style.removeProperty("overflow-"+T.a));else if(m&&ge()&&!D)for(ae=m.parentNode;ae&&ae!==jt;)ae._pinOffset&&(et-=ae._pinOffset,X-=ae._pinOffset),ae=ae.parentNode;Xe&&Xe.forEach(function(ln){return ln.revert(!1,!0)}),I.start=et,I.end=X,Mt=ut=_i?Ie:ge(),!D&&!_i&&(Mt<Ie&&ge(Ie),I.scroll.rec=0),I.revert(!1,!0),de=ri(),he&&(Q=-1,he.restart(!0)),ii=0,r&&H&&(r._initted||Ue)&&r.progress()!==Ue&&r.progress(Ue||0,!0).render(r.time(),!0,!0),(Sn||ve!==I.progress||D||S||r&&!r._initted)&&(r&&!H&&(r._initted||ve||r.vars.immediateRender!==!1)&&r.totalProgress(D&&et<-.001&&!ve?qe.utils.normalize(et,X,0):ve,!0),I.progress=Sn||(Mt-et)/U===ve?0:ve),_&&E&&(me._pinOffset=Math.round(I.progress*gt)),V&&V.invalidate(),isNaN(Ot)||(Ot-=qe.getProperty(ee,T.p),Tt-=qe.getProperty(We,T.p),_f(ee,T,Ot),_f(Xt,T,Ot-(lt||0)),_f(We,T,Tt),_f(ht,T,Tt-(lt||0))),Sn&&!_i&&I.update(),p&&!_i&&!je&&(je=!0,p(I),je=!1)}},I.getVelocity=function(){return(ge()-ut)/(ri()-vu)*1e3||0},I.endAnimation=function(){lu(I.callbackAnimation),r&&(V?V.progress(1):r.paused()?H||lu(r,I.direction<0,1):lu(r,r.reversed()))},I.labelToScroll=function(Fe){return r&&r.labels&&(et||I.refresh()||et)+r.labels[Fe]/r.duration()*U||0},I.getTrailing=function(Fe){var ct=bt.indexOf(I),Ze=I.direction>0?bt.slice(0,ct).reverse():bt.slice(ct+1);return(Yi(Fe)?Ze.filter(function(lt){return lt.vars.preventOverlaps===Fe}):Ze).filter(function(lt){return I.direction>0?lt.end<=et:lt.start>=X})},I.update=function(Fe,ct,Ze){if(!(D&&!Ze&&!Fe)){var lt=_i===!0?Ie:I.scroll(),sn=Fe?0:(lt-et)/U,Et=sn<0?0:sn>1?1:sn||0,Yt=I.progress,Sn,qt,$t,Lt,$n,Qt,Wn,L;if(ct&&(ut=Mt,Mt=D?ge():lt,w&&(Pt=at,at=r&&!H?r.totalProgress():Et)),y&&_&&!ii&&!cf&&xr&&(!Et&&et<lt+(lt-ut)/(ri()-vu)*y?Et=1e-4:Et===1&&X>lt+(lt-ut)/(ri()-vu)*y&&(Et=.9999)),Et!==Yt&&I.enabled){if(Sn=I.isActive=!!Et&&Et<1,qt=!!Yt&&Yt<1,Qt=Sn!==qt,$n=Qt||!!Et!=!!Yt,I.direction=Et>Yt?1:-1,I.progress=Et,$n&&!ii&&($t=Et&&!Yt?0:Et===1?1:Yt===1?2:3,H&&(Lt=!Qt&&q[$t+1]!=="none"&&q[$t+1]||q[$t],L=r&&(Lt==="complete"||Lt==="reset"||Lt in r))),b&&(Qt||L)&&(L||v||!r)&&(oi(b)?b(I):I.getTrailing(b).forEach(function(Z){return Z.endAnimation()})),H||(V&&!ii&&!cf?(V._dp._time-V._start!==V._time&&V.render(V._dp._time-V._start),V.resetTo?V.resetTo("totalProgress",Et,r._tTime/r._tDur):(V.vars.totalProgress=Et,V.invalidate().restart())):r&&r.totalProgress(Et,!!(ii&&(de||Fe)))),_){if(Fe&&E&&(me.style[E+T.os2]=Me),!ue)Ce(yu(Oe+gt*Et));else if($n){if(Wn=!Fe&&Et>Yt&&X+1>lt&&lt+1>=Yr(G,T),F)if(!Fe&&(Sn||Wn)){var Y=ps(_,!0),se=lt-et;hx(_,jt,Y.top+(T===In?se:0)+Dn,Y.left+(T===In?0:se)+Dn)}else hx(_,me);ll(Sn||Wn?oe:_e),it&&Et<1&&Sn||Ce(Oe+(Et===1&&!Wn?gt:0))}}w&&!we.tween&&!ii&&!cf&&he.restart(!0),c&&(Qt||C&&Et&&(Et<1||!vp))&&Xu(c.targets).forEach(function(Z){return Z.classList[Sn||C?"add":"remove"](c.className)}),u&&!H&&!Fe&&u(I),$n&&!ii?(H&&(L&&(Lt==="complete"?r.pause().totalProgress(1):Lt==="reset"?r.restart(!0).pause():Lt==="restart"?r.restart(!0):r[Lt]()),u&&u(I)),(Qt||!vp)&&(h&&Qt&&La(I,h),J[$t]&&La(I,J[$t]),C&&(Et===1?I.kill(!1,1):J[$t]=0),Qt||($t=Et===1?1:3,J[$t]&&La(I,J[$t]))),k&&!Sn&&Math.abs(I.getVelocity())>(Su(k)?k:2500)&&(lu(I.callbackAnimation),V?V.progress(1):lu(r,Lt==="reverse"?1:!Et,1))):H&&u&&!ii&&u(I)}if(Ve){var ae=D?lt/D.duration()*(D._caScrollDist||0):lt;ot(ae+(ee._isFlipped?1:0)),Ve(ae)}pt&&pt(-lt/D.duration()*(D._caScrollDist||0))}},I.enable=function(Fe,ct){I.enabled||(I.enabled=!0,Vn(G,"resize",Mu),K||Vn(G,"scroll",Ia),O&&Vn(o,"refreshInit",O),Fe!==!1&&(I.progress=ve=0,Mt=ut=Q=ge()),ct!==!1&&I.refresh())},I.getTween=function(Fe){return Fe&&we?we.tween:V},I.setPositions=function(Fe,ct,Ze,lt){if(D){var sn=D.scrollTrigger,Et=D.duration(),Yt=sn.end-sn.start;Fe=sn.start+Yt*Fe/Et,ct=sn.start+Yt*ct/Et}I.refresh(!1,!1,{start:rx(Fe,Ze&&!!I._startClamp),end:rx(ct,Ze&&!!I._endClamp)},lt),I.update()},I.adjustPinSpacing=function(Fe){if(Pe&&Fe){var ct=Pe.indexOf(T.d)+1;Pe[ct]=parseFloat(Pe[ct])+Fe+Dn,Pe[1]=parseFloat(Pe[1])+Fe+Dn,ll(Pe)}},I.disable=function(Fe,ct){if(Fe!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,ct||V&&V.pause(),Ie=0,Le&&(Le.uncache=1),O&&Hn(o,"refreshInit",O),he&&(he.pause(),we.tween&&we.tween.kill()&&(we.tween=0)),!K)){for(var Ze=bt.length;Ze--;)if(bt[Ze].scroller===G&&bt[Ze]!==I)return;Hn(G,"resize",Mu),K||Hn(G,"scroll",Ia)}},I.kill=function(Fe,ct){I.disable(Fe,ct),V&&!ct&&V.kill(),f&&delete Tm[f];var Ze=bt.indexOf(I);Ze>=0&&bt.splice(Ze,1),Ze===gi&&Kf>0&&gi--,Ze=0,bt.forEach(function(lt){return lt.scroller===I.scroller&&(Ze=1)}),Ze||_i||(I.scroll.rec=0),r&&(r.scrollTrigger=null,Fe&&r.revert({kill:!1}),ct||r.kill()),Xt&&[Xt,ht,ee,We].forEach(function(lt){return lt.parentNode&&lt.parentNode.removeChild(lt)}),Ou===I&&(Ou=0),_&&(Le&&(Le.uncache=1),Ze=0,bt.forEach(function(lt){return lt.pin===_&&Ze++}),Ze||(Le.spacer=0)),n.onKill&&n.onKill(I)},bt.push(I),I.enable(!1,!1),Ft&&Ft(I),r&&r.add&&!U){var vt=I.update;I.update=function(){I.update=vt,Nt.cache++,et||X||I.refresh()},qe.delayedCall(.01,I.update),U=.01,et=X=0}else I.refresh();_&&cT()},o.register=function(n){return qa||(qe=n||OS(),US()&&window.document&&o.enable(),qa=xu),qa},o.defaults=function(n){if(n)for(var r in n)pf[r]=n[r];return pf},o.disable=function(n,r){xu=0,bt.forEach(function(u){return u[r?"kill":"disable"](n)}),Hn(It,"wheel",Ia),Hn(Zt,"scroll",Ia),clearInterval(uf),Hn(Zt,"touchcancel",Vr),Hn(jt,"touchstart",Vr),df(Hn,Zt,"pointerdown,touchstart,mousedown",sx),df(Hn,Zt,"pointerup,touchend,mouseup",ox),hd.kill(),ff(Hn);for(var a=0;a<Nt.length;a+=3)hf(Hn,Nt[a],Nt[a+1]),hf(Hn,Nt[a],Nt[a+2])},o.enable=function(){if(It=window,Zt=document,$i=Zt.documentElement,jt=Zt.body,qe){if(Xu=qe.utils.toArray,Pu=qe.utils.clamp,Em=qe.core.context||Vr,_p=qe.core.suppressOverwrites||Vr,Fg=It.history.scrollRestoration||"auto",Am=It.pageYOffset||0,qe.core.globals("ScrollTrigger",o),jt){xu=1,al=document.createElement("div"),al.style.height="100vh",al.style.position="absolute",YS(),iT(),wn.register(qe),o.isTouch=wn.isTouch,Zs=wn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Mm=wn.isTouch===1,Vn(It,"wheel",Ia),Og=[It,Zt,$i,jt],qe.matchMedia?(o.matchMedia=function(p){var v=qe.matchMedia(),m;for(m in p)v.add(m,p[m]);return v},qe.addEventListener("matchMediaInit",function(){WS(),Gg()}),qe.addEventListener("matchMediaRevert",function(){return GS()}),qe.addEventListener("matchMedia",function(){Wo(0,1),ia("matchMedia")}),qe.matchMedia().add("(orientation: portrait)",function(){return yp(),yp})):console.warn("Requires GSAP 3.11.0 or later"),yp(),Vn(Zt,"scroll",Ia);var n=jt.hasAttribute("style"),r=jt.style,a=r.borderTopStyle,u=qe.core.Animation.prototype,c,f;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",c=ps(jt),In.m=Math.round(c.top+In.sc())||0,xi.m=Math.round(c.left+xi.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(jt.setAttribute("style",""),jt.removeAttribute("style")),uf=setInterval(ux,250),qe.delayedCall(.5,function(){return cf=0}),Vn(Zt,"touchcancel",Vr),Vn(jt,"touchstart",Vr),df(Vn,Zt,"pointerdown,touchstart,mousedown",sx),df(Vn,Zt,"pointerup,touchend,mouseup",ox),Sm=qe.utils.checkPrefix("transform"),Zf.push(Sm),qa=ri(),hd=qe.delayedCall(.2,Wo).pause(),$a=[Zt,"visibilitychange",function(){var p=It.innerWidth,v=It.innerHeight;Zt.hidden?(tx=p,nx=v):(tx!==p||nx!==v)&&Mu()},Zt,"DOMContentLoaded",Wo,It,"load",Wo,It,"resize",Mu],ff(Vn),bt.forEach(function(p){return p.enable(0,1)}),f=0;f<Nt.length;f+=3)hf(Hn,Nt[f],Nt[f+1]),hf(Hn,Nt[f],Nt[f+2])}else if(Zt){var h=function p(){o.enable(),Zt.removeEventListener("DOMContentLoaded",p)};Zt.addEventListener("DOMContentLoaded",h)}}},o.config=function(n){"limitCallbacks"in n&&(vp=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(uf)||(uf=r)&&setInterval(ux,r),"ignoreMobileResize"in n&&(Mm=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ff(Hn)||ff(Vn,n.autoRefreshEvents||"none"),DS=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,r){var a=Ri(n),u=Nt.indexOf(a),c=ta(a);~u&&Nt.splice(u,c?6:2),r&&(c?qr.unshift(It,r,jt,r,$i,r):qr.unshift(a,r))},o.clearMatchMedia=function(n){bt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},o.isInViewport=function(n,r,a){var u=(Yi(n)?Ri(n):n).getBoundingClientRect(),c=u[a?Qo:Jo]*r||0;return a?u.right-c>0&&u.left+c<It.innerWidth:u.bottom-c>0&&u.top+c<It.innerHeight},o.positionInViewport=function(n,r,a){Yi(n)&&(n=Ri(n));var u=n.getBoundingClientRect(),c=u[a?Qo:Jo],f=r==null?c/2:r in md?md[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(u.left+f)/It.innerWidth:(u.top+f)/It.innerHeight},o.killAll=function(n){if(bt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=na.killAll||[];na={},r.forEach(function(a){return a()})}},o})();Ut.version="3.15.0";Ut.saveStyles=function(o){return o?Xu(o).forEach(function(e){if(e&&e.style){var t=Xi.indexOf(e);t>=0&&Xi.splice(t,5),Xi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),qe.core.getCache(e),Em())}}):Xi};Ut.revert=function(o,e){return Gg(!o,e)};Ut.create=function(o,e){return new Ut(o,e)};Ut.refresh=function(o){return o?Mu(!0):(qa||Ut.register())&&Wo(!0)};Ut.update=function(o){return++Nt.cache&&xs(o===!0?2:0)};Ut.clearScrollMemory=XS;Ut.maxScroll=function(o,e){return Yr(o,e?xi:In)};Ut.getScrollFunc=function(o,e){return ho(Ri(o),e?xi:In)};Ut.getById=function(o){return Tm[o]};Ut.getAll=function(){return bt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Ut.isScrolling=function(){return!!xr};Ut.snapDirectional=Vg;Ut.addEventListener=function(o,e){var t=na[o]||(na[o]=[]);~t.indexOf(e)||t.push(e)};Ut.removeEventListener=function(o,e){var t=na[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ut.batch=function(o,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,u=function(h,p){var v=[],m=[],_=qe.delayedCall(r,function(){p(v,m),v=[],m=[]}).pause();return function(E){v.length||_.restart(!0),v.push(E.trigger),m.push(E),a<=v.length&&_.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&oi(e[c])&&c!=="onRefreshInit"?u(c,e[c]):e[c];return oi(a)&&(a=a(),Vn(Ut,"refresh",function(){return a=e.batchMax()})),Xu(o).forEach(function(f){var h={};for(c in n)h[c]=n[c];h.trigger=f,t.push(Ut.create(h))}),t};var mx=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Mp=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(wn.isTouch?" pinch-zoom":""):"none",e===$i&&o(jt,t)},vf={auto:1,scroll:1},mT=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,u=a._gsap||qe.core.getCache(a),c=ri(),f;if(!u._isScrollT||c-u._isScrollT>2e3){for(;a&&a!==jt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(vf[(f=gr(a)).overflowY]||vf[f.overflowX]));)a=a.parentNode;u._isScroll=a&&a!==n&&!ta(a)&&(vf[(f=gr(a)).overflowY]||vf[f.overflowX]),u._isScrollT=c}(u._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},qS=function(e,t,n,r){return wn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&mT,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Vn(Zt,wn.eventTypes[0],_x,!1,!0)},onDisable:function(){return Hn(Zt,wn.eventTypes[0],_x,!0)}})},gT=/(input|label|select|textarea)/i,gx,_x=function(e){var t=gT.test(e.target.tagName);(t||gx)&&(e._gsapAllow=!0,gx=t)},_T=function(e){ko(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,u=t.onRelease,c,f,h=Ri(e.target)||$i,p=qe.core.globals().ScrollSmoother,v=p&&p.get(),m=Zs&&(e.content&&Ri(e.content)||v&&e.content!==!1&&!v.smooth()&&v.content()),_=ho(h,In),E=ho(h,xi),S=1,y=(wn.isTouch&&It.visualViewport?It.visualViewport.scale*It.visualViewport.width:It.outerWidth)/It.innerWidth,x=0,R=oi(r)?function(){return r(c)}:function(){return r||2.8},C,w,F=qS(h,e.type,!0,a),N=function(){return w=!1},D=Vr,k=Vr,b=function(){f=Yr(h,In),k=Pu(Zs?1:0,f),n&&(D=Pu(0,Yr(h,xi))),C=ea},T=function(){m._gsap.y=yu(parseFloat(m._gsap.y)+_.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",_.offset=_.cacheID=0},H=function(){if(w){requestAnimationFrame(N);var z=yu(c.deltaY/2),te=k(_.v-z);if(m&&te!==_.v+_.offset){_.offset=te-_.v;var I=yu((parseFloat(m&&m._gsap.y)||0)-_.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",m._gsap.y=I+"px",_.cacheID=Nt.cache,xs()}return!0}_.offset&&T(),w=!0},G,j,K,ue,J=function(){b(),G.isActive()&&G.vars.scrollY>f&&(_()>f?G.progress(1)&&_(f):G.resetTo("scrollY",f))};return m&&qe.set(m,{y:"+=0"}),e.ignoreCheck=function(q){return Zs&&q.type==="touchmove"&&H()||S>1.05&&q.type!=="touchstart"||c.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){w=!1;var q=S;S=yu((It.visualViewport&&It.visualViewport.scale||1)/y),G.pause(),q!==S&&Mp(h,S>1.01?!0:n?!1:"x"),j=E(),K=_(),b(),C=ea},e.onRelease=e.onGestureStart=function(q,z){if(_.offset&&T(),!z)ue.restart(!0);else{Nt.cache++;var te=R(),I,O;n&&(I=E(),O=I+te*.05*-q.velocityX/.227,te*=mx(E,I,O,Yr(h,xi)),G.vars.scrollX=D(O)),I=_(),O=I+te*.05*-q.velocityY/.227,te*=mx(_,I,O,Yr(h,In)),G.vars.scrollY=k(O),G.invalidate().duration(te).play(.01),(Zs&&G.vars.scrollY>=f||I>=f-1)&&qe.to({},{onUpdate:J,duration:te})}u&&u(q)},e.onWheel=function(){G._ts&&G.pause(),ri()-x>1e3&&(C=0,x=ri())},e.onChange=function(q,z,te,I,O){if(ea!==C&&b(),z&&n&&E(D(I[2]===z?j+(q.startX-q.x):E()+z-I[1])),te){_.offset&&T();var ie=O[2]===te,be=ie?K+q.startY-q.y:_()+te-O[1],Q=k(be);ie&&be!==Q&&(K+=Q-be),_(Q)}(te||z)&&xs()},e.onEnable=function(){Mp(h,n?!1:"x"),Ut.addEventListener("refresh",J),Vn(It,"resize",J),_.smooth&&(_.target.style.scrollBehavior="auto",_.smooth=E.smooth=!1),F.enable()},e.onDisable=function(){Mp(h,!0),Hn(It,"resize",J),Ut.removeEventListener("refresh",J),F.kill()},e.lockAxis=e.lockAxis!==!1,c=new wn(e),c.iOS=Zs,Zs&&!_()&&_(1),Zs&&qe.ticker.add(Vr),ue=c._dc,G=qe.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:jS(_,_(),function(){return G.pause()})},onUpdate:xs,onComplete:ue.vars.onComplete}),c};Ut.sort=function(o){if(oi(o))return bt.sort(o);var e=It.pageYOffset||0;return Ut.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+It.innerHeight}),bt.sort(o||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ut.observe=function(o){return new wn(o)};Ut.normalizeScroll=function(o){if(typeof o>"u")return mi;if(o===!0&&mi)return mi.enable();if(o===!1){mi&&mi.kill(),mi=o;return}var e=o instanceof wn?o:_T(o);return mi&&mi.target===e.target&&mi.kill(),ta(e.target)&&(mi=e),e};Ut.core={_getVelocityProp:ym,_inputObserver:qS,_scrollers:Nt,_proxies:qr,bridge:{ss:function(){xr||ia("scrollStart"),xr=ri()},ref:function(){return ii}}};OS()&&qe.registerPlugin(Ut);Nn.registerPlugin(Ut);function vT(){const o=nt.useRef(null);return nt.useEffect(()=>{const e=new I1({duration:1.2,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),touchMultiplier:2,infinite:!1});o.current=e,e.on("scroll",Ut.update);const t=n=>{e.raf(n*1e3)};return Nn.ticker.add(t),Nn.ticker.lagSmoothing(0),()=>{Nn.ticker.remove(t),e.destroy(),o.current=null}},[]),o.current}const xT=()=>{const o=nt.useRef(null),e=nt.useRef(null),t=nt.useRef(null),n=nt.useRef({x:-100,y:-100}),r=nt.useRef({x:-100,y:-100}),a=nt.useRef(0),u=nt.useRef("default"),c=nt.useRef(!1),f=.12,h=6,p=32,v=60,m=(x,R,C)=>x+(R-x)*C,_=nt.useCallback(x=>{n.current={x:x.clientX,y:x.clientY}},[]),E=nt.useCallback(x=>{const C=x.target.closest("[data-cursor]");C?u.current=C.getAttribute("data-cursor")||"default":u.current="default"},[]),S=nt.useCallback(()=>{n.current={x:-100,y:-100}},[]),y=nt.useCallback(()=>{r.current.x=m(r.current.x,n.current.x,f),r.current.y=m(r.current.y,n.current.y,f),o.current&&(o.current.style.transform=`translate(${n.current.x-h/2}px, ${n.current.y-h/2}px)`);const x=u.current,R=x==="click",C=x==="link",w=R?v:p;e.current&&(e.current.style.transform=`translate(${r.current.x-w/2}px, ${r.current.y-w/2}px)`,e.current.style.width=`${w}px`,e.current.style.height=`${w}px`,e.current.style.backgroundColor=R?"#00f5ff33":"transparent",e.current.style.borderStyle=C?"dashed":"solid",e.current.style.borderColor=R||C?"#00f5ff":"rgba(0, 245, 255, 0.5)"),t.current&&(t.current.style.opacity=R?"1":"0"),a.current=requestAnimationFrame(y)},[]);return nt.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0){c.current=!0;return}document.addEventListener("mousemove",_,{passive:!0}),document.addEventListener("mouseover",E,{passive:!0}),document.addEventListener("mouseleave",S),a.current=requestAnimationFrame(y);const x=document.createElement("style");return x.textContent=`
      *, *::before, *::after {
        cursor: none !important;
      }
    `,document.head.appendChild(x),()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseover",E),document.removeEventListener("mouseleave",S),cancelAnimationFrame(a.current),x.parentNode&&document.head.removeChild(x)}},[_,E,S,y]),typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0)?null:Re.jsxs(Re.Fragment,{children:[Re.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:`${h}px`,height:`${h}px`,backgroundColor:"#00f5ff",borderRadius:"50%",pointerEvents:"none",zIndex:9999,willChange:"transform",transition:"none"}}),Re.jsx("div",{ref:e,style:{position:"fixed",top:0,left:0,width:`${p}px`,height:`${p}px`,border:"1px solid rgba(0, 245, 255, 0.5)",borderRadius:"50%",pointerEvents:"none",zIndex:9999,willChange:"transform",transition:"width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-style 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:Re.jsx("span",{ref:t,style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"8px",color:"#00f5ff",letterSpacing:"0.1em",opacity:0,transition:"opacity 0.2s ease",pointerEvents:"none",userSelect:"none"},children:"CLICK"})})]})},Ep=[{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Experience",href:"#experience"},{label:"Certifications",href:"#certifications"},{label:"Contact",href:"#contact"}],yT=10,ST=({visible:o})=>{const e=nt.useRef(null),t=nt.useRef(null),n=nt.useRef([]),[r,a]=nt.useState(!1),[u,c]=nt.useState(!1),[f,h]=nt.useState(""),p=nt.useRef(0),v=nt.useRef(!1);nt.useEffect(()=>{const _=()=>{const E=window.scrollY;Math.abs(E-p.current)<yT||(E>p.current&&E>80?c(!0):c(!1),p.current=E)};return window.addEventListener("scroll",_,{passive:!0}),()=>window.removeEventListener("scroll",_)},[]),nt.useEffect(()=>{o&&!v.current&&e.current&&(v.current=!0,Nn.fromTo(e.current,{y:"-100%",opacity:0},{y:"0%",opacity:1,duration:.8,ease:"power3.out",delay:.1}))},[o]),nt.useEffect(()=>{const _=Ep.map(S=>S.href.replace("#","")),E=[];return _.forEach(S=>{const y=document.getElementById(S);if(!y)return;const x=new IntersectionObserver(R=>{R.forEach(C=>{C.isIntersecting&&h(S)})},{rootMargin:"-40% 0px -55% 0px"});x.observe(y),E.push(x)}),()=>E.forEach(S=>S.disconnect())},[]),nt.useEffect(()=>{if(t.current)if(r){Nn.to(t.current,{opacity:1,visibility:"visible",duration:.4,ease:"power2.out"});const _=n.current.filter(Boolean);Nn.fromTo(_,{y:40,opacity:0},{y:0,opacity:1,stagger:.1,duration:.5,ease:"power3.out",delay:.15})}else Nn.to(t.current,{opacity:0,duration:.3,ease:"power2.in",onComplete:()=>{t.current&&(t.current.style.visibility="hidden")}})},[r]);const m=nt.useCallback((_,E)=>{_.preventDefault();const S=document.querySelector(E);S&&S.scrollIntoView({behavior:"smooth"}),a(!1)},[]);return Re.jsxs(Re.Fragment,{children:[Re.jsxs("nav",{ref:e,className:"fixed top-0 left-0 w-full px-6 md:px-12 py-4 flex items-center justify-between",style:{zIndex:1e3,backgroundColor:"rgba(5, 5, 5, 0.8)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",transform:o?u?"translateY(-100%)":"translateY(0)":"translateY(-100%)",transition:v.current?"transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)":"none",opacity:v.current?1:0,borderBottom:"1px solid rgba(255, 255, 255, 0.04)"},children:[Re.jsx("a",{href:"#hero","data-cursor":"click",onClick:_=>m(_,"#hero"),className:"relative",style:{fontFamily:"'Orbitron', sans-serif",fontSize:"1.25rem",fontWeight:800,color:"#00f5ff",textDecoration:"none",letterSpacing:"0.1em",textShadow:"0 0 10px rgba(0, 245, 255, 0.6), 0 0 20px rgba(0, 245, 255, 0.2)"},children:"HV"}),Re.jsx("div",{className:"hidden md:flex items-center gap-8",children:Ep.map(_=>{const E=_.href.replace("#",""),S=f===E;return Re.jsxs("a",{href:_.href,"data-cursor":"link",onClick:y=>m(y,_.href),className:"relative group",style:{fontFamily:"'DM Sans', sans-serif",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.2em",color:S?"#00f5ff":"#888888",textDecoration:"none",transition:"color 0.3s ease",paddingBottom:"4px"},onMouseEnter:y=>{S||(y.currentTarget.style.color="#f0f0f0")},onMouseLeave:y=>{S||(y.currentTarget.style.color="#888888")},children:[_.label,Re.jsx("span",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"1px",backgroundColor:"#00f5ff",transform:S?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"group-hover:!scale-x-100"})]},_.href)})}),Re.jsxs("button",{className:"md:hidden flex flex-col justify-center items-center w-8 h-8 relative","data-cursor":"click",onClick:()=>a(_=>!_),"aria-label":"Toggle menu",style:{background:"none",border:"none"},children:[Re.jsx("span",{style:{display:"block",width:"20px",height:"1.5px",backgroundColor:"#f0f0f0",transition:"all 0.3s ease",position:"absolute",transform:r?"rotate(45deg)":"translateY(-5px)"}}),Re.jsx("span",{style:{display:"block",width:"20px",height:"1.5px",backgroundColor:"#f0f0f0",transition:"all 0.3s ease",position:"absolute",opacity:r?0:1}}),Re.jsx("span",{style:{display:"block",width:"20px",height:"1.5px",backgroundColor:"#f0f0f0",transition:"all 0.3s ease",position:"absolute",transform:r?"rotate(-45deg)":"translateY(5px)"}})]})]}),Re.jsx("div",{ref:t,className:"md:hidden fixed inset-0 flex flex-col items-center justify-center gap-8",style:{zIndex:999,backgroundColor:"rgba(5, 5, 5, 0.96)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",opacity:0,visibility:"hidden"},children:Ep.map((_,E)=>{const S=_.href.replace("#",""),y=f===S;return Re.jsx("a",{ref:x=>{n.current[E]=x},href:_.href,"data-cursor":"click",onClick:x=>m(x,_.href),style:{fontFamily:"'Orbitron', sans-serif",fontSize:"1.5rem",textTransform:"uppercase",letterSpacing:"0.25em",color:y?"#00f5ff":"#f0f0f0",textDecoration:"none",opacity:0,transition:"color 0.3s ease"},children:_.label},_.href)})})]})},MT=({onComplete:o})=>{const e=nt.useRef(null),t=nt.useRef(null),n=nt.useRef(null),r=nt.useRef(null),a=nt.useRef(null),u=nt.useRef(null),[c,f]=nt.useState(!0);return nt.useEffect(()=>{var m;const h=Nn.timeline({onComplete:()=>{f(!1),o()}}),p=(m=t.current)==null?void 0:m.querySelectorAll("path");p&&p.forEach(_=>{const E=_.getTotalLength();Nn.set(_,{strokeDasharray:E,strokeDashoffset:E,fill:"transparent"}),h.to(_,{strokeDashoffset:0,duration:.9,ease:"power2.inOut"},0),h.to(_,{fill:"#00f5ff",fillOpacity:.15,duration:.4,ease:"power1.in"},.7)});const v={value:0};return h.to(v,{value:100,duration:2,ease:"power1.inOut",onUpdate:()=>{n.current&&(n.current.textContent=String(Math.floor(v.value)).padStart(3,"0"))}},0),r.current&&(Nn.set(r.current,{top:"0%",opacity:.6}),h.to(r.current,{top:"100%",duration:.5,ease:"none"},1.5),h.to(r.current,{opacity:0,duration:.2},1.9)),a.current&&h.to(a.current,{yPercent:-100,duration:.5,ease:"power4.inOut"},2),u.current&&h.to(u.current,{yPercent:100,duration:.5,ease:"power4.inOut"},2),h.to(e.current,{opacity:0,duration:.1,ease:"none"},2.45),()=>{h.kill()}},[o]),c?Re.jsxs("div",{ref:e,style:{position:"fixed",inset:0,zIndex:9999,pointerEvents:"all"},children:[Re.jsx("div",{ref:a,style:{position:"absolute",top:0,left:0,width:"100%",height:"50%",backgroundColor:"#000000",display:"flex",alignItems:"flex-end",justifyContent:"center"},children:Re.jsxs("svg",{ref:t,viewBox:"0 0 200 100",className:"preloader-monogram",style:{width:"160px",height:"80px",overflow:"visible",transform:"translateY(50%)",position:"relative",zIndex:2},children:[Re.jsx("path",{d:"M 20 10 L 20 90 M 20 50 L 60 50 M 60 10 L 60 90",fill:"none",stroke:"#00f5ff",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),Re.jsx("path",{d:"M 110 10 L 140 90 M 140 90 L 170 10",fill:"none",stroke:"#00f5ff",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]})}),Re.jsx("div",{ref:u,style:{position:"absolute",bottom:0,left:0,width:"100%",height:"50%",backgroundColor:"#000000"}}),Re.jsx("div",{ref:r,className:"scan-line",style:{position:"absolute",left:0,width:"100%",height:"1px",backgroundColor:"#00f5ff",opacity:0,filter:"blur(2px)",boxShadow:"0 0 8px #00f5ff, 0 0 16px rgba(0, 245, 255, 0.3)",zIndex:3,pointerEvents:"none"}}),Re.jsx("span",{ref:n,style:{position:"absolute",bottom:"2rem",left:"2rem",fontFamily:"'JetBrains Mono', monospace",fontSize:"14px",color:"#00f5ff",letterSpacing:"0.15em",zIndex:4,opacity:.8},children:"000"}),Re.jsx("div",{style:{position:"absolute",top:"2rem",left:"2rem",width:"20px",height:"20px",borderTop:"1px solid rgba(0, 245, 255, 0.3)",borderLeft:"1px solid rgba(0, 245, 255, 0.3)",zIndex:4}}),Re.jsx("div",{style:{position:"absolute",top:"2rem",right:"2rem",width:"20px",height:"20px",borderTop:"1px solid rgba(0, 245, 255, 0.3)",borderRight:"1px solid rgba(0, 245, 255, 0.3)",zIndex:4}}),Re.jsx("div",{style:{position:"absolute",bottom:"2rem",right:"2rem",width:"20px",height:"20px",borderBottom:"1px solid rgba(0, 245, 255, 0.3)",borderRight:"1px solid rgba(0, 245, 255, 0.3)",zIndex:4}}),Re.jsx("div",{style:{position:"absolute",bottom:"2rem",left:"5rem",width:"20px",height:"20px",borderBottom:"1px solid rgba(0, 245, 255, 0.3)",borderLeft:"1px solid rgba(0, 245, 255, 0.3)",zIndex:4}})]}):null};function wp({text:o,className:e}){return Re.jsx(Re.Fragment,{children:o.split("").map((t,n)=>Re.jsx("span",{className:`inline-block opacity-0 ${e??""}`,style:{display:t===" "?"inline":void 0},children:t===" "?" ":t},`${t}-${n}`))})}const ET=["Generative AI","LLM","RAG","Prompt Engineering"];function wT({startAnimation:o,onAnimationComplete:e}){const t=nt.useRef(null),n=nt.useRef(null),r=nt.useRef(null),a=nt.useRef(null),u=nt.useCallback(()=>{const c=t.current;c&&(a.current=Nn.context(()=>{const f=Nn.timeline({onComplete:()=>e==null?void 0:e()});n.current=f;const h=c.querySelectorAll('[data-anim="name"] span');f.fromTo(h,{opacity:0,x:()=>Nn.utils.random(-200,200),y:()=>Nn.utils.random(-200,200)},{opacity:1,x:0,y:0,duration:.6,stagger:.04,ease:"back.out(1.7)"},0);const p=c.querySelectorAll('[data-anim="last"] span');f.fromTo(p,{opacity:0,x:()=>Nn.utils.random(-200,200),y:()=>Nn.utils.random(-200,200)},{opacity:1,x:0,y:0,duration:.7,stagger:.05,ease:"back.out(1.7)"},.8);const v=c.querySelector('[data-anim="line"]');f.fromTo(v,{scaleX:0},{scaleX:1,duration:.5,ease:"power2.out"},1.4);const m=c.querySelector('[data-anim="subtitle"]');f.fromTo(m,{opacity:0,y:30},{opacity:1,y:0,duration:.5,ease:"power2.out"},1.6);const _=c.querySelectorAll('[data-anim="pill"]');f.fromTo(_,{scale:0,opacity:0},{scale:1,opacity:1,duration:.4,stagger:.1,ease:"back.out(2)"},1.9);const E=c.querySelectorAll('[data-anim="cta"]');f.fromTo(E,{opacity:0,y:20},{opacity:1,y:0,duration:.5,stagger:.12,ease:"power2.out"},2.4);const S=document.querySelector('[data-anim="scroll-indicator"]');S&&f.to(S,{opacity:1,duration:.5},2.7)},c))},[e]);return nt.useEffect(()=>{o&&u()},[o,u]),nt.useEffect(()=>{var h,p;const c=(h=t.current)==null?void 0:h.querySelector('[data-anim="name"]'),f=(p=t.current)==null?void 0:p.querySelector('[data-anim="last"]');if(!(!c||!f))return r.current=setInterval(()=>{c.classList.add("glitch-active"),f.classList.add("glitch-active"),setTimeout(()=>{c.classList.remove("glitch-active"),f.classList.remove("glitch-active")},300)},4e3),()=>{r.current&&clearInterval(r.current)}},[]),nt.useEffect(()=>()=>{var c;(c=a.current)==null||c.revert()},[]),Re.jsxs("div",{ref:t,className:"flex flex-col gap-4 z-10 relative",children:[Re.jsxs("h1",{className:"leading-tight flex flex-col gap-1 md:gap-3",children:[Re.jsxs("div",{"data-anim":"name",className:"font-[Orbitron] font-bold text-[clamp(2.2rem,5vw,4.5rem)] text-[var(--text-primary,#f0f0f0)] whitespace-nowrap",style:{letterSpacing:"0.08em",display:"block"},children:[Re.jsx("span",{className:"inline-block whitespace-nowrap",children:Re.jsx(wp,{text:"HARSHA"})})," ",Re.jsx("span",{className:"inline-block whitespace-nowrap",children:Re.jsx(wp,{text:"VARDHAN"})})]}),Re.jsx("div",{"data-anim":"last",className:"font-[Orbitron] font-bold text-[clamp(2.2rem,5vw,4.5rem)] text-[#00f5ff] whitespace-nowrap",style:{letterSpacing:"0.08em",display:"block"},children:Re.jsx("span",{className:"inline-block whitespace-nowrap",children:Re.jsx(wp,{text:"MUCHERLA"})})})]}),Re.jsx("div",{"data-anim":"line",className:"h-[2px] w-[120px] bg-[#00f5ff] origin-left my-2",style:{transform:"scaleX(0)"}}),Re.jsxs("p",{"data-anim":"subtitle",className:"font-[DM_Sans] text-[1.1rem] md:text-[1.3rem] text-[var(--text-secondary,#888888)] tracking-wide opacity-0 flex flex-wrap items-center gap-x-2",children:[Re.jsx("span",{children:"AI Full Stack Developer"}),Re.jsx("span",{className:"text-[#00f5ff] font-bold select-none",children:"•"}),Re.jsx("span",{children:"Generative AI"}),Re.jsx("span",{className:"text-[#00f5ff] font-bold select-none",children:"•"}),Re.jsx("span",{children:"LLM"}),Re.jsx("span",{className:"text-[#00f5ff] font-bold select-none",children:"•"}),Re.jsx("span",{children:"RAG"})]}),Re.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:ET.map(c=>Re.jsx("span",{"data-anim":"pill",className:"rounded-full px-4 py-1 font-mono text-xs text-[#00f5ff] border border-[#00f5ff33] opacity-0",style:{backgroundColor:"#00f5ff11",transform:"scale(0)"},children:c},c))}),Re.jsxs("div",{className:"flex flex-wrap gap-4 mt-4",children:[Re.jsx("a",{href:"#projects","data-anim":"cta","data-cursor":"click",className:`\r
            rounded-full px-6 py-3 font-mono text-sm uppercase tracking-wider\r
            border border-[#00f5ff] text-[#00f5ff] bg-transparent\r
            hover:scale-105 transition-transform duration-200\r
            opacity-0\r
          `,children:"View My Work ↓"}),Re.jsx("a",{href:"#contact","data-anim":"cta","data-cursor":"click",className:`\r
            rounded-full px-6 py-3 font-mono text-sm uppercase tracking-wider\r
            bg-[#00f5ff] text-[#050505] border border-[#00f5ff]\r
            hover:scale-105 transition-transform duration-200\r
            opacity-0\r
          `,children:"Let's Connect →"})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wg="170",TT=0,vx=1,AT=2,$S=1,CT=2,fs=3,po=0,Ui=1,ms=2,ao=0,ul=1,ju=2,xx=3,yx=4,RT=5,Ho=100,bT=101,PT=102,LT=103,DT=104,IT=200,NT=201,UT=202,OT=203,Rm=204,bm=205,FT=206,kT=207,zT=208,BT=209,HT=210,VT=211,GT=212,WT=213,XT=214,Pm=0,Lm=1,Dm=2,vl=3,Im=4,Nm=5,Um=6,Om=7,KS=0,YT=1,jT=2,lo=0,qT=1,$T=2,KT=3,ZT=4,QT=5,JT=6,eA=7,ZS=300,xl=301,yl=302,Fm=303,km=304,wd=306,zm=1e3,Xo=1001,Bm=1002,Nr=1003,tA=1004,xf=1005,jr=1006,Tp=1007,Yo=1008,Es=1009,QS=1010,JS=1011,qu=1012,Xg=1013,ra=1014,_s=1015,Zu=1016,Yg=1017,jg=1018,Sl=1020,eM=35902,tM=1021,nM=1022,Ir=1023,iM=1024,rM=1025,cl=1026,Ml=1027,sM=1028,qg=1029,oM=1030,$g=1031,Kg=1033,Jf=33776,ed=33777,td=33778,nd=33779,Hm=35840,Vm=35841,Gm=35842,Wm=35843,Xm=36196,Ym=37492,jm=37496,qm=37808,$m=37809,Km=37810,Zm=37811,Qm=37812,Jm=37813,eg=37814,tg=37815,ng=37816,ig=37817,rg=37818,sg=37819,og=37820,ag=37821,id=36492,lg=36494,ug=36495,aM=36283,cg=36284,fg=36285,dg=36286,nA=3200,iA=3201,lM=0,rA=1,Qs="",qi="srgb",wl="srgb-linear",Td="linear",Jt="srgb",Na=7680,Sx=519,sA=512,oA=513,aA=514,uM=515,lA=516,uA=517,cA=518,fA=519,Mx=35044,Ex="300 es",vs=2e3,gd=2001;class Tl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ap=Math.PI/180,hg=180/Math.PI;function Qu(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ti[o&255]+ti[o>>8&255]+ti[o>>16&255]+ti[o>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]).toLowerCase()}function bi(o,e,t){return Math.max(e,Math.min(t,o))}function dA(o,e){return(o%e+e)%e}function Cp(o,e,t){return(1-t)*o+t*e}function uu(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ci(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(e=0,t=0){Wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*r+e.x,this.y=a*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(e,t,n,r,a,u,c,f,h){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,f,h)}set(e,t,n,r,a,u,c,f,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[3],f=n[6],h=n[1],p=n[4],v=n[7],m=n[2],_=n[5],E=n[8],S=r[0],y=r[3],x=r[6],R=r[1],C=r[4],w=r[7],F=r[2],N=r[5],D=r[8];return a[0]=u*S+c*R+f*F,a[3]=u*y+c*C+f*N,a[6]=u*x+c*w+f*D,a[1]=h*S+p*R+v*F,a[4]=h*y+p*C+v*N,a[7]=h*x+p*w+v*D,a[2]=m*S+_*R+E*F,a[5]=m*y+_*C+E*N,a[8]=m*x+_*w+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],f=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*a*p+n*c*f+r*a*h-r*u*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],f=e[6],h=e[7],p=e[8],v=p*u-c*h,m=c*f-p*a,_=h*a-u*f,E=t*v+n*m+r*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=v*S,e[1]=(r*h-p*n)*S,e[2]=(c*n-r*u)*S,e[3]=m*S,e[4]=(p*t-r*f)*S,e[5]=(r*a-c*t)*S,e[6]=_*S,e[7]=(n*f-h*t)*S,e[8]=(u*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,u,c){const f=Math.cos(a),h=Math.sin(a);return this.set(n*f,n*h,-n*(f*u+h*c)+u+e,-r*h,r*f,-r*(-h*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Rp.makeScale(e,t)),this}rotate(e){return this.premultiply(Rp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rp=new At;function cM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _d(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hA(){const o=_d("canvas");return o.style.display="block",o}const wx={};function Eu(o){o in wx||(wx[o]=!0,console.warn(o))}function pA(o,e,t){return new Promise(function(n,r){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function mA(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gA(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ht={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Jt&&(o.r=ys(o.r),o.g=ys(o.g),o.b=ys(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Jt&&(o.r=fl(o.r),o.g=fl(o.g),o.b=fl(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qs?Td:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function ys(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Tx=[.64,.33,.3,.6,.15,.06],Ax=[.2126,.7152,.0722],Cx=[.3127,.329],Rx=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bx=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ht.define({[wl]:{primaries:Tx,whitePoint:Cx,transfer:Td,toXYZ:Rx,fromXYZ:bx,luminanceCoefficients:Ax,workingColorSpaceConfig:{unpackColorSpace:qi},outputColorSpaceConfig:{drawingBufferColorSpace:qi}},[qi]:{primaries:Tx,whitePoint:Cx,transfer:Jt,toXYZ:Rx,fromXYZ:bx,luminanceCoefficients:Ax,outputColorSpaceConfig:{drawingBufferColorSpace:qi}}});let Ua;class _A{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ua===void 0&&(Ua=_d("canvas")),Ua.width=e.width,Ua.height=e.height;const n=Ua.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ua}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_d("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=ys(a[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ys(t[n]/255)*255):t[n]=ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vA=0;class fM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=Qu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,c=r.length;u<c;u++)r[u].isDataTexture?a.push(bp(r[u].image)):a.push(bp(r[u]))}else a=bp(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function bp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_A.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xA=0;class Oi extends Tl{constructor(e=Oi.DEFAULT_IMAGE,t=Oi.DEFAULT_MAPPING,n=Xo,r=Xo,a=jr,u=Yo,c=Ir,f=Es,h=Oi.DEFAULT_ANISOTROPY,p=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=Qu(),this.name="",this.source=new fM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ZS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zm:e.x=e.x-Math.floor(e.x);break;case Xo:e.x=e.x<0?0:1;break;case Bm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zm:e.y=e.y-Math.floor(e.y);break;case Xo:e.y=e.y<0?0:1;break;case Bm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Oi.DEFAULT_IMAGE=null;Oi.DEFAULT_MAPPING=ZS;Oi.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,n=0,r=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,h=f[0],p=f[4],v=f[8],m=f[1],_=f[5],E=f[9],S=f[2],y=f[6],x=f[10];if(Math.abs(p-m)<.01&&Math.abs(v-S)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+m)<.1&&Math.abs(v+S)<.1&&Math.abs(E+y)<.1&&Math.abs(h+_+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,w=(_+1)/2,F=(x+1)/2,N=(p+m)/4,D=(v+S)/4,k=(E+y)/4;return C>w&&C>F?C<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(C),r=N/n,a=D/n):w>F?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=N/r,a=k/r):F<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),n=D/a,r=k/a),this.set(n,r,a,t),this}let R=Math.sqrt((y-E)*(y-E)+(v-S)*(v-S)+(m-p)*(m-p));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(v-S)/R,this.z=(m-p)/R,this.w=Math.acos((h+_+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yA extends Tl{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Oi(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends yA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dM extends Oi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nr,this.minFilter=Nr,this.wrapR=Xo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SA extends Oi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nr,this.minFilter=Nr,this.wrapR=Xo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ju{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,u,c){let f=n[r+0],h=n[r+1],p=n[r+2],v=n[r+3];const m=a[u+0],_=a[u+1],E=a[u+2],S=a[u+3];if(c===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=v;return}if(c===1){e[t+0]=m,e[t+1]=_,e[t+2]=E,e[t+3]=S;return}if(v!==S||f!==m||h!==_||p!==E){let y=1-c;const x=f*m+h*_+p*E+v*S,R=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const F=Math.sqrt(C),N=Math.atan2(F,x*R);y=Math.sin(y*N)/F,c=Math.sin(c*N)/F}const w=c*R;if(f=f*y+m*w,h=h*y+_*w,p=p*y+E*w,v=v*y+S*w,y===1-c){const F=1/Math.sqrt(f*f+h*h+p*p+v*v);f*=F,h*=F,p*=F,v*=F}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,a,u){const c=n[r],f=n[r+1],h=n[r+2],p=n[r+3],v=a[u],m=a[u+1],_=a[u+2],E=a[u+3];return e[t]=c*E+p*v+f*_-h*m,e[t+1]=f*E+p*m+h*v-c*_,e[t+2]=h*E+p*_+c*m-f*v,e[t+3]=p*E-c*v-f*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,h=c(n/2),p=c(r/2),v=c(a/2),m=f(n/2),_=f(r/2),E=f(a/2);switch(u){case"XYZ":this._x=m*p*v+h*_*E,this._y=h*_*v-m*p*E,this._z=h*p*E+m*_*v,this._w=h*p*v-m*_*E;break;case"YXZ":this._x=m*p*v+h*_*E,this._y=h*_*v-m*p*E,this._z=h*p*E-m*_*v,this._w=h*p*v+m*_*E;break;case"ZXY":this._x=m*p*v-h*_*E,this._y=h*_*v+m*p*E,this._z=h*p*E+m*_*v,this._w=h*p*v-m*_*E;break;case"ZYX":this._x=m*p*v-h*_*E,this._y=h*_*v+m*p*E,this._z=h*p*E-m*_*v,this._w=h*p*v+m*_*E;break;case"YZX":this._x=m*p*v+h*_*E,this._y=h*_*v+m*p*E,this._z=h*p*E-m*_*v,this._w=h*p*v-m*_*E;break;case"XZY":this._x=m*p*v-h*_*E,this._y=h*_*v-m*p*E,this._z=h*p*E+m*_*v,this._w=h*p*v+m*_*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],u=t[1],c=t[5],f=t[9],h=t[2],p=t[6],v=t[10],m=n+c+v;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-f)*_,this._y=(a-h)*_,this._z=(u-r)*_}else if(n>c&&n>v){const _=2*Math.sqrt(1+n-c-v);this._w=(p-f)/_,this._x=.25*_,this._y=(r+u)/_,this._z=(a+h)/_}else if(c>v){const _=2*Math.sqrt(1+c-n-v);this._w=(a-h)/_,this._x=(r+u)/_,this._y=.25*_,this._z=(f+p)/_}else{const _=2*Math.sqrt(1+v-n-c);this._w=(u-r)/_,this._x=(a+h)/_,this._y=(f+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bi(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,u=e._w,c=t._x,f=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+r*h-a*f,this._y=r*p+u*f+a*c-n*h,this._z=a*p+u*h+n*f-r*c,this._w=u*p-n*c-r*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=r,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const _=1-t;return this._w=_*u+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,c),v=Math.sin((1-t)*p)/h,m=Math.sin(t*p)/h;return this._w=u*v+this._w*m,this._x=n*v+this._x*m,this._y=r*v+this._y*m,this._z=a*v+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,n=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Px.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Px.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,u=e.y,c=e.z,f=e.w,h=2*(u*r-c*n),p=2*(c*t-a*r),v=2*(a*n-u*t);return this.x=t+f*h+u*v-c*p,this.y=n+f*p+c*h-a*v,this.z=r+f*v+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=r*f-a*c,this.y=a*u-n*f,this.z=n*c-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pp.copy(this).projectOnVector(e),this.sub(Pp)}reflect(e){return this.sub(Pp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pp=new ne,Px=new Ju;class ec{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Rr):Rr.fromBufferAttribute(a,u),Rr.applyMatrix4(e.matrixWorld),this.expandByPoint(Rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yf.copy(n.boundingBox)),yf.applyMatrix4(e.matrixWorld),this.union(yf)}const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rr),Rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cu),Sf.subVectors(this.max,cu),Oa.subVectors(e.a,cu),Fa.subVectors(e.b,cu),ka.subVectors(e.c,cu),Xs.subVectors(Fa,Oa),Ys.subVectors(ka,Fa),Po.subVectors(Oa,ka);let t=[0,-Xs.z,Xs.y,0,-Ys.z,Ys.y,0,-Po.z,Po.y,Xs.z,0,-Xs.x,Ys.z,0,-Ys.x,Po.z,0,-Po.x,-Xs.y,Xs.x,0,-Ys.y,Ys.x,0,-Po.y,Po.x,0];return!Lp(t,Oa,Fa,ka,Sf)||(t=[1,0,0,0,1,0,0,0,1],!Lp(t,Oa,Fa,ka,Sf))?!1:(Mf.crossVectors(Xs,Ys),t=[Mf.x,Mf.y,Mf.z],Lp(t,Oa,Fa,ka,Sf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const os=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Rr=new ne,yf=new ec,Oa=new ne,Fa=new ne,ka=new ne,Xs=new ne,Ys=new ne,Po=new ne,cu=new ne,Sf=new ne,Mf=new ne,Lo=new ne;function Lp(o,e,t,n,r){for(let a=0,u=o.length-3;a<=u;a+=3){Lo.fromArray(o,a);const c=r.x*Math.abs(Lo.x)+r.y*Math.abs(Lo.y)+r.z*Math.abs(Lo.z),f=e.dot(Lo),h=t.dot(Lo),p=n.dot(Lo);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>c)return!1}return!0}const MA=new ec,fu=new ne,Dp=new ne;class tc{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):MA.setFromPoints(e).getCenter(n);let r=0;for(let a=0,u=e.length;a<u;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fu.subVectors(e,this.center);const t=fu.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(fu,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fu.copy(e.center).add(Dp)),this.expandByPoint(fu.copy(e.center).sub(Dp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const as=new ne,Ip=new ne,Ef=new ne,js=new ne,Np=new ne,wf=new ne,Up=new ne;class Zg{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ip.copy(e).add(t).multiplyScalar(.5),Ef.copy(t).sub(e).normalize(),js.copy(this.origin).sub(Ip);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Ef),c=js.dot(this.direction),f=-js.dot(Ef),h=js.lengthSq(),p=Math.abs(1-u*u);let v,m,_,E;if(p>0)if(v=u*f-c,m=u*c-f,E=a*p,v>=0)if(m>=-E)if(m<=E){const S=1/p;v*=S,m*=S,_=v*(v+u*m+2*c)+m*(u*v+m+2*f)+h}else m=a,v=Math.max(0,-(u*m+c)),_=-v*v+m*(m+2*f)+h;else m=-a,v=Math.max(0,-(u*m+c)),_=-v*v+m*(m+2*f)+h;else m<=-E?(v=Math.max(0,-(-u*a+c)),m=v>0?-a:Math.min(Math.max(-a,-f),a),_=-v*v+m*(m+2*f)+h):m<=E?(v=0,m=Math.min(Math.max(-a,-f),a),_=m*(m+2*f)+h):(v=Math.max(0,-(u*a+c)),m=v>0?a:Math.min(Math.max(-a,-f),a),_=-v*v+m*(m+2*f)+h);else m=u>0?-a:a,v=Math.max(0,-(u*m+c)),_=-v*v+m*(m+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(Ip).addScaledVector(Ef,m),_}intersectSphere(e,t){as.subVectors(e.center,this.origin);const n=as.dot(this.direction),r=as.dot(as)-n*n,a=e.radius*e.radius;if(r>a)return null;const u=Math.sqrt(a-r),c=n-u,f=n+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,u,c,f;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,r=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,r=(e.min.x-m.x)*h),p>=0?(a=(e.min.y-m.y)*p,u=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,u=(e.min.y-m.y)*p),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),v>=0?(c=(e.min.z-m.z)*v,f=(e.max.z-m.z)*v):(c=(e.max.z-m.z)*v,f=(e.min.z-m.z)*v),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,r,a){Np.subVectors(t,e),wf.subVectors(n,e),Up.crossVectors(Np,wf);let u=this.direction.dot(Up),c;if(u>0){if(r)return null;c=1}else if(u<0)c=-1,u=-u;else return null;js.subVectors(this.origin,e);const f=c*this.direction.dot(wf.crossVectors(js,wf));if(f<0)return null;const h=c*this.direction.dot(Np.cross(js));if(h<0||f+h>u)return null;const p=-c*js.dot(Up);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,t,n,r,a,u,c,f,h,p,v,m,_,E,S,y){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,f,h,p,v,m,_,E,S,y)}set(e,t,n,r,a,u,c,f,h,p,v,m,_,E,S,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=a,x[5]=u,x[9]=c,x[13]=f,x[2]=h,x[6]=p,x[10]=v,x[14]=m,x[3]=_,x[7]=E,x[11]=S,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/za.setFromMatrixColumn(e,0).length(),a=1/za.setFromMatrixColumn(e,1).length(),u=1/za.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),f=Math.cos(r),h=Math.sin(r),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=u*p,_=u*v,E=c*p,S=c*v;t[0]=f*p,t[4]=-f*v,t[8]=h,t[1]=_+E*h,t[5]=m-S*h,t[9]=-c*f,t[2]=S-m*h,t[6]=E+_*h,t[10]=u*f}else if(e.order==="YXZ"){const m=f*p,_=f*v,E=h*p,S=h*v;t[0]=m+S*c,t[4]=E*c-_,t[8]=u*h,t[1]=u*v,t[5]=u*p,t[9]=-c,t[2]=_*c-E,t[6]=S+m*c,t[10]=u*f}else if(e.order==="ZXY"){const m=f*p,_=f*v,E=h*p,S=h*v;t[0]=m-S*c,t[4]=-u*v,t[8]=E+_*c,t[1]=_+E*c,t[5]=u*p,t[9]=S-m*c,t[2]=-u*h,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const m=u*p,_=u*v,E=c*p,S=c*v;t[0]=f*p,t[4]=E*h-_,t[8]=m*h+S,t[1]=f*v,t[5]=S*h+m,t[9]=_*h-E,t[2]=-h,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const m=u*f,_=u*h,E=c*f,S=c*h;t[0]=f*p,t[4]=S-m*v,t[8]=E*v+_,t[1]=v,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=_*v+E,t[10]=m-S*v}else if(e.order==="XZY"){const m=u*f,_=u*h,E=c*f,S=c*h;t[0]=f*p,t[4]=-v,t[8]=h*p,t[1]=m*v+S,t[5]=u*p,t[9]=_*v-E,t[2]=E*v-_,t[6]=c*p,t[10]=S*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EA,e,wA)}lookAt(e,t,n){const r=this.elements;return Gi.subVectors(e,t),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),qs.crossVectors(n,Gi),qs.lengthSq()===0&&(Math.abs(n.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),qs.crossVectors(n,Gi)),qs.normalize(),Tf.crossVectors(Gi,qs),r[0]=qs.x,r[4]=Tf.x,r[8]=Gi.x,r[1]=qs.y,r[5]=Tf.y,r[9]=Gi.y,r[2]=qs.z,r[6]=Tf.z,r[10]=Gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[4],f=n[8],h=n[12],p=n[1],v=n[5],m=n[9],_=n[13],E=n[2],S=n[6],y=n[10],x=n[14],R=n[3],C=n[7],w=n[11],F=n[15],N=r[0],D=r[4],k=r[8],b=r[12],T=r[1],H=r[5],G=r[9],j=r[13],K=r[2],ue=r[6],J=r[10],q=r[14],z=r[3],te=r[7],I=r[11],O=r[15];return a[0]=u*N+c*T+f*K+h*z,a[4]=u*D+c*H+f*ue+h*te,a[8]=u*k+c*G+f*J+h*I,a[12]=u*b+c*j+f*q+h*O,a[1]=p*N+v*T+m*K+_*z,a[5]=p*D+v*H+m*ue+_*te,a[9]=p*k+v*G+m*J+_*I,a[13]=p*b+v*j+m*q+_*O,a[2]=E*N+S*T+y*K+x*z,a[6]=E*D+S*H+y*ue+x*te,a[10]=E*k+S*G+y*J+x*I,a[14]=E*b+S*j+y*q+x*O,a[3]=R*N+C*T+w*K+F*z,a[7]=R*D+C*H+w*ue+F*te,a[11]=R*k+C*G+w*J+F*I,a[15]=R*b+C*j+w*q+F*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],u=e[1],c=e[5],f=e[9],h=e[13],p=e[2],v=e[6],m=e[10],_=e[14],E=e[3],S=e[7],y=e[11],x=e[15];return E*(+a*f*v-r*h*v-a*c*m+n*h*m+r*c*_-n*f*_)+S*(+t*f*_-t*h*m+a*u*m-r*u*_+r*h*p-a*f*p)+y*(+t*h*v-t*c*_-a*u*v+n*u*_+a*c*p-n*h*p)+x*(-r*c*p-t*f*v+t*c*m+r*u*v-n*u*m+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],f=e[6],h=e[7],p=e[8],v=e[9],m=e[10],_=e[11],E=e[12],S=e[13],y=e[14],x=e[15],R=v*y*h-S*m*h+S*f*_-c*y*_-v*f*x+c*m*x,C=E*m*h-p*y*h-E*f*_+u*y*_+p*f*x-u*m*x,w=p*S*h-E*v*h+E*c*_-u*S*_-p*c*x+u*v*x,F=E*v*f-p*S*f-E*c*m+u*S*m+p*c*y-u*v*y,N=t*R+n*C+r*w+a*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=R*D,e[1]=(S*m*a-v*y*a-S*r*_+n*y*_+v*r*x-n*m*x)*D,e[2]=(c*y*a-S*f*a+S*r*h-n*y*h-c*r*x+n*f*x)*D,e[3]=(v*f*a-c*m*a-v*r*h+n*m*h+c*r*_-n*f*_)*D,e[4]=C*D,e[5]=(p*y*a-E*m*a+E*r*_-t*y*_-p*r*x+t*m*x)*D,e[6]=(E*f*a-u*y*a-E*r*h+t*y*h+u*r*x-t*f*x)*D,e[7]=(u*m*a-p*f*a+p*r*h-t*m*h-u*r*_+t*f*_)*D,e[8]=w*D,e[9]=(E*v*a-p*S*a-E*n*_+t*S*_+p*n*x-t*v*x)*D,e[10]=(u*S*a-E*c*a+E*n*h-t*S*h-u*n*x+t*c*x)*D,e[11]=(p*c*a-u*v*a-p*n*h+t*v*h+u*n*_-t*c*_)*D,e[12]=F*D,e[13]=(p*S*r-E*v*r+E*n*m-t*S*m-p*n*y+t*v*y)*D,e[14]=(E*c*r-u*S*r-E*n*f+t*S*f+u*n*y-t*c*y)*D,e[15]=(u*v*r-p*c*r+p*n*f-t*v*f-u*n*m+t*c*m)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,u=e.x,c=e.y,f=e.z,h=a*u,p=a*c;return this.set(h*u+n,h*c-r*f,h*f+r*c,0,h*c+r*f,p*c+n,p*f-r*u,0,h*f-r*c,p*f+r*u,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,u){return this.set(1,n,a,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,h=a+a,p=u+u,v=c+c,m=a*h,_=a*p,E=a*v,S=u*p,y=u*v,x=c*v,R=f*h,C=f*p,w=f*v,F=n.x,N=n.y,D=n.z;return r[0]=(1-(S+x))*F,r[1]=(_+w)*F,r[2]=(E-C)*F,r[3]=0,r[4]=(_-w)*N,r[5]=(1-(m+x))*N,r[6]=(y+R)*N,r[7]=0,r[8]=(E+C)*D,r[9]=(y-R)*D,r[10]=(1-(m+S))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=za.set(r[0],r[1],r[2]).length();const u=za.set(r[4],r[5],r[6]).length(),c=za.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],br.copy(this);const h=1/a,p=1/u,v=1/c;return br.elements[0]*=h,br.elements[1]*=h,br.elements[2]*=h,br.elements[4]*=p,br.elements[5]*=p,br.elements[6]*=p,br.elements[8]*=v,br.elements[9]*=v,br.elements[10]*=v,t.setFromRotationMatrix(br),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,r,a,u,c=vs){const f=this.elements,h=2*a/(t-e),p=2*a/(n-r),v=(t+e)/(t-e),m=(n+r)/(n-r);let _,E;if(c===vs)_=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===gd)_=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=h,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=p,f[9]=m,f[13]=0,f[2]=0,f[6]=0,f[10]=_,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,a,u,c=vs){const f=this.elements,h=1/(t-e),p=1/(n-r),v=1/(u-a),m=(t+e)*h,_=(n+r)*p;let E,S;if(c===vs)E=(u+a)*v,S=-2*v;else if(c===gd)E=a*v,S=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-m,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-_,f[2]=0,f[6]=0,f[10]=S,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const za=new ne,br=new fn,EA=new ne(0,0,0),wA=new ne(1,1,1),qs=new ne,Tf=new ne,Gi=new ne,Lx=new fn,Dx=new Ju;class Kr{constructor(e=0,t=0,n=0,r=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],u=r[4],c=r[8],f=r[1],h=r[5],p=r[9],v=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(bi(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-bi(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(bi(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-bi(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(bi(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-bi(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dx.setFromEuler(this),this.setFromQuaternion(Dx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class hM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TA=0;const Ix=new ne,Ba=new Ju,ls=new fn,Af=new ne,du=new ne,AA=new ne,CA=new Ju,Nx=new ne(1,0,0),Ux=new ne(0,1,0),Ox=new ne(0,0,1),Fx={type:"added"},RA={type:"removed"},Ha={type:"childadded",child:null},Op={type:"childremoved",child:null};class li extends Tl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=Qu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new ne,t=new Kr,n=new Ju,r=new ne(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fn},normalMatrix:{value:new At}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.multiply(Ba),this}rotateOnWorldAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.premultiply(Ba),this}rotateX(e){return this.rotateOnAxis(Nx,e)}rotateY(e){return this.rotateOnAxis(Ux,e)}rotateZ(e){return this.rotateOnAxis(Ox,e)}translateOnAxis(e,t){return Ix.copy(e).applyQuaternion(this.quaternion),this.position.add(Ix.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nx,e)}translateY(e){return this.translateOnAxis(Ux,e)}translateZ(e){return this.translateOnAxis(Ox,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Af.copy(e):Af.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),du.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(du,Af,this.up):ls.lookAt(Af,du,this.up),this.quaternion.setFromRotationMatrix(ls),r&&(ls.extractRotation(r.matrixWorld),Ba.setFromRotationMatrix(ls),this.quaternion.premultiply(Ba.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fx),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RA),Op.child=e,this.dispatchEvent(Op),Op.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fx),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(du,e,AA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(du,CA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const v=f[h];a(e.shapes,v)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(a(e.materials,this.material[f]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),h=u(e.textures),p=u(e.images),v=u(e.shapes),m=u(e.skeletons),_=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),v.length>0&&(n.shapes=v),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),E.length>0&&(n.nodes=E)}return n.object=r,n;function u(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}li.DEFAULT_UP=new ne(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pr=new ne,us=new ne,Fp=new ne,cs=new ne,Va=new ne,Ga=new ne,kx=new ne,kp=new ne,zp=new ne,Bp=new ne,Hp=new en,Vp=new en,Gp=new en;class Dr{constructor(e=new ne,t=new ne,n=new ne){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pr.subVectors(e,t),r.cross(Pr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Pr.subVectors(r,t),us.subVectors(n,t),Fp.subVectors(e,t);const u=Pr.dot(Pr),c=Pr.dot(us),f=Pr.dot(Fp),h=us.dot(us),p=us.dot(Fp),v=u*h-c*c;if(v===0)return a.set(0,0,0),null;const m=1/v,_=(h*f-c*p)*m,E=(u*p-c*f)*m;return a.set(1-_-E,E,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,n,r,a,u,c,f){return this.getBarycoord(e,t,n,r,cs)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,cs.x),f.addScaledVector(u,cs.y),f.addScaledVector(c,cs.z),f)}static getInterpolatedAttribute(e,t,n,r,a,u){return Hp.setScalar(0),Vp.setScalar(0),Gp.setScalar(0),Hp.fromBufferAttribute(e,t),Vp.fromBufferAttribute(e,n),Gp.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(Hp,a.x),u.addScaledVector(Vp,a.y),u.addScaledVector(Gp,a.z),u}static isFrontFacing(e,t,n,r){return Pr.subVectors(n,t),us.subVectors(e,t),Pr.cross(us).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pr.subVectors(this.c,this.b),us.subVectors(this.a,this.b),Pr.cross(us).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Dr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let u,c;Va.subVectors(r,n),Ga.subVectors(a,n),kp.subVectors(e,n);const f=Va.dot(kp),h=Ga.dot(kp);if(f<=0&&h<=0)return t.copy(n);zp.subVectors(e,r);const p=Va.dot(zp),v=Ga.dot(zp);if(p>=0&&v<=p)return t.copy(r);const m=f*v-p*h;if(m<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(n).addScaledVector(Va,u);Bp.subVectors(e,a);const _=Va.dot(Bp),E=Ga.dot(Bp);if(E>=0&&_<=E)return t.copy(a);const S=_*h-f*E;if(S<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(n).addScaledVector(Ga,c);const y=p*E-_*v;if(y<=0&&v-p>=0&&_-E>=0)return kx.subVectors(a,r),c=(v-p)/(v-p+(_-E)),t.copy(r).addScaledVector(kx,c);const x=1/(y+S+m);return u=S*x,c=m*x,t.copy(n).addScaledVector(Va,u).addScaledVector(Ga,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},Cf={h:0,s:0,l:0};function Wp(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class zt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ht.workingColorSpace){if(e=dA(e,1),t=bi(t,0,1),n=bi(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Wp(u,a,e+1/3),this.g=Wp(u,a,e),this.b=Wp(u,a,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,t=qi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=r[1],c=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qi){const n=pM[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=fl(e.r),this.g=fl(e.g),this.b=fl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qi){return Ht.fromWorkingColorSpace(ni.copy(this),e),Math.round(bi(ni.r*255,0,255))*65536+Math.round(bi(ni.g*255,0,255))*256+Math.round(bi(ni.b*255,0,255))}getHexString(e=qi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(ni.copy(this),t);const n=ni.r,r=ni.g,a=ni.b,u=Math.max(n,r,a),c=Math.min(n,r,a);let f,h;const p=(c+u)/2;if(c===u)f=0,h=0;else{const v=u-c;switch(h=p<=.5?v/(u+c):v/(2-u-c),u){case n:f=(r-a)/v+(r<a?6:0);break;case r:f=(a-n)/v+2;break;case a:f=(n-r)/v+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=qi){Ht.fromWorkingColorSpace(ni.copy(this),e);const t=ni.r,n=ni.g,r=ni.b;return e!==qi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($s),this.setHSL($s.h+e,$s.s+t,$s.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($s),e.getHSL(Cf);const n=Cp($s.h,Cf.h,t),r=Cp($s.s,Cf.s,t),a=Cp($s.l,Cf.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new zt;zt.NAMES=pM;let bA=0;class aa extends Tl{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=Qu(),this.name="",this.blending=ul,this.side=po,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rm,this.blendDst=bm,this.blendEquation=Ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ul&&(n.blending=this.blending),this.side!==po&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rm&&(n.blendSrc=this.blendSrc),this.blendDst!==bm&&(n.blendDst=this.blendDst),this.blendEquation!==Ho&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Na&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Na&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Na&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=r(e.textures),u=r(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ja extends aa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=KS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=new ne,Rf=new Wt;class nr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mx,this.updateRanges=[],this.gpuType=_s,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rf.fromBufferAttribute(this,t),Rf.applyMatrix3(e),this.setXY(t,Rf.x,Rf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=uu(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ci(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=uu(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=uu(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=uu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=uu(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ci(t,this.array),n=Ci(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ci(t,this.array),n=Ci(n,this.array),r=Ci(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Ci(t,this.array),n=Ci(n,this.array),r=Ci(r,this.array),a=Ci(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mx&&(e.usage=this.usage),e}}class mM extends nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gM extends nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ur extends nr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let PA=0;const hr=new fn,Xp=new li,Wa=new ne,Wi=new ec,hu=new ec,Bn=new ne;class Fi extends Tl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=Qu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cM(e)?gM:mM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new At().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hr.makeRotationFromQuaternion(e),this.applyMatrix4(hr),this}rotateX(e){return hr.makeRotationX(e),this.applyMatrix4(hr),this}rotateY(e){return hr.makeRotationY(e),this.applyMatrix4(hr),this}rotateZ(e){return hr.makeRotationZ(e),this.applyMatrix4(hr),this}translate(e,t,n){return hr.makeTranslation(e,t,n),this.applyMatrix4(hr),this}scale(e,t,n){return hr.makeScale(e,t,n),this.applyMatrix4(hr),this}lookAt(e){return Xp.lookAt(e),Xp.updateMatrix(),this.applyMatrix4(Xp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wa).negate(),this.translate(Wa.x,Wa.y,Wa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ur(n,3))}else{for(let n=0,r=t.count;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Wi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Wi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Wi.min),this.boundingBox.expandByPoint(Wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const n=this.boundingSphere.center;if(Wi.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];hu.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(Wi.min,hu.min),Wi.expandByPoint(Bn),Bn.addVectors(Wi.max,hu.max),Wi.expandByPoint(Bn)):(Wi.expandByPoint(hu.min),Wi.expandByPoint(hu.max))}Wi.getCenter(n);let r=0;for(let a=0,u=e.count;a<u;a++)Bn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Bn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Bn.fromBufferAttribute(c,h),f&&(Wa.fromBufferAttribute(e,h),Bn.add(Wa)),r=Math.max(r,n.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nr(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let k=0;k<n.count;k++)c[k]=new ne,f[k]=new ne;const h=new ne,p=new ne,v=new ne,m=new Wt,_=new Wt,E=new Wt,S=new ne,y=new ne;function x(k,b,T){h.fromBufferAttribute(n,k),p.fromBufferAttribute(n,b),v.fromBufferAttribute(n,T),m.fromBufferAttribute(a,k),_.fromBufferAttribute(a,b),E.fromBufferAttribute(a,T),p.sub(h),v.sub(h),_.sub(m),E.sub(m);const H=1/(_.x*E.y-E.x*_.y);isFinite(H)&&(S.copy(p).multiplyScalar(E.y).addScaledVector(v,-_.y).multiplyScalar(H),y.copy(v).multiplyScalar(_.x).addScaledVector(p,-E.x).multiplyScalar(H),c[k].add(S),c[b].add(S),c[T].add(S),f[k].add(y),f[b].add(y),f[T].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let k=0,b=R.length;k<b;++k){const T=R[k],H=T.start,G=T.count;for(let j=H,K=H+G;j<K;j+=3)x(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const C=new ne,w=new ne,F=new ne,N=new ne;function D(k){F.fromBufferAttribute(r,k),N.copy(F);const b=c[k];C.copy(b),C.sub(F.multiplyScalar(F.dot(b))).normalize(),w.crossVectors(N,b);const H=w.dot(f[k])<0?-1:1;u.setXYZW(k,C.x,C.y,C.z,H)}for(let k=0,b=R.length;k<b;++k){const T=R[k],H=T.start,G=T.count;for(let j=H,K=H+G;j<K;j+=3)D(e.getX(j+0)),D(e.getX(j+1)),D(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new ne,a=new ne,u=new ne,c=new ne,f=new ne,h=new ne,p=new ne,v=new ne;if(e)for(let m=0,_=e.count;m<_;m+=3){const E=e.getX(m+0),S=e.getX(m+1),y=e.getX(m+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,S),u.fromBufferAttribute(t,y),p.subVectors(u,a),v.subVectors(r,a),p.cross(v),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),c.add(p),f.add(p),h.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(S,f.x,f.y,f.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),p.subVectors(u,a),v.subVectors(r,a),p.cross(v),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(c,f){const h=c.array,p=c.itemSize,v=c.normalized,m=new h.constructor(f.length*p);let _=0,E=0;for(let S=0,y=f.length;S<y;S++){c.isInterleavedBufferAttribute?_=f[S]*c.data.stride+c.offset:_=f[S]*p;for(let x=0;x<p;x++)m[E++]=h[_++]}return new nr(m,p,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fi,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],h=e(f,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const f=[],h=a[c];for(let p=0,v=h.length;p<v;p++){const m=h[p],_=e(m,n);f.push(_)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let v=0,m=h.length;v<m;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(r[f]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let m=0,_=v.length;m<_;m++)p.push(v[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zx=new fn,Do=new Zg,bf=new tc,Bx=new ne,Pf=new ne,Lf=new ne,Df=new ne,Yp=new ne,If=new ne,Hx=new ne,Nf=new ne;class vi extends li{constructor(e=new Fi,t=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){If.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=c[f],v=a[f];p!==0&&(Yp.fromBufferAttribute(v,e),u?If.addScaledVector(Yp,p):If.addScaledVector(Yp.sub(t),p))}t.add(If)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bf.copy(n.boundingSphere),bf.applyMatrix4(a),Do.copy(e.ray).recast(e.near),!(bf.containsPoint(Do.origin)===!1&&(Do.intersectSphere(bf,Bx)===null||Do.origin.distanceToSquared(Bx)>(e.far-e.near)**2))&&(zx.copy(a).invert(),Do.copy(e.ray).applyMatrix4(zx),!(n.boundingBox!==null&&Do.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Do)))}_computeIntersections(e,t,n){let r;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,m=a.groups,_=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,S=m.length;E<S;E++){const y=m[E],x=u[y.materialIndex],R=Math.max(y.start,_.start),C=Math.min(c.count,Math.min(y.start+y.count,_.start+_.count));for(let w=R,F=C;w<F;w+=3){const N=c.getX(w),D=c.getX(w+1),k=c.getX(w+2);r=Uf(this,x,e,n,h,p,v,N,D,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const E=Math.max(0,_.start),S=Math.min(c.count,_.start+_.count);for(let y=E,x=S;y<x;y+=3){const R=c.getX(y),C=c.getX(y+1),w=c.getX(y+2);r=Uf(this,u,e,n,h,p,v,R,C,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,S=m.length;E<S;E++){const y=m[E],x=u[y.materialIndex],R=Math.max(y.start,_.start),C=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let w=R,F=C;w<F;w+=3){const N=w,D=w+1,k=w+2;r=Uf(this,x,e,n,h,p,v,N,D,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const E=Math.max(0,_.start),S=Math.min(f.count,_.start+_.count);for(let y=E,x=S;y<x;y+=3){const R=y,C=y+1,w=y+2;r=Uf(this,u,e,n,h,p,v,R,C,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function LA(o,e,t,n,r,a,u,c){let f;if(e.side===Ui?f=n.intersectTriangle(u,a,r,!0,c):f=n.intersectTriangle(r,a,u,e.side===po,c),f===null)return null;Nf.copy(c),Nf.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Nf);return h<t.near||h>t.far?null:{distance:h,point:Nf.clone(),object:o}}function Uf(o,e,t,n,r,a,u,c,f,h){o.getVertexPosition(c,Pf),o.getVertexPosition(f,Lf),o.getVertexPosition(h,Df);const p=LA(o,e,t,n,Pf,Lf,Df,Hx);if(p){const v=new ne;Dr.getBarycoord(Hx,Pf,Lf,Df,v),r&&(p.uv=Dr.getInterpolatedAttribute(r,c,f,h,v,new Wt)),a&&(p.uv1=Dr.getInterpolatedAttribute(a,c,f,h,v,new Wt)),u&&(p.normal=Dr.getInterpolatedAttribute(u,c,f,h,v,new ne),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:c,b:f,c:h,normal:new ne,materialIndex:0};Dr.getNormal(Pf,Lf,Df,m.normal),p.face=m,p.barycoord=v}return p}class Al extends Fi{constructor(e=1,t=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const c=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const f=[],h=[],p=[],v=[];let m=0,_=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,r,u,2),E("x","z","y",1,-1,e,n,-t,r,u,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new Ur(h,3)),this.setAttribute("normal",new Ur(p,3)),this.setAttribute("uv",new Ur(v,2));function E(S,y,x,R,C,w,F,N,D,k,b){const T=w/D,H=F/k,G=w/2,j=F/2,K=N/2,ue=D+1,J=k+1;let q=0,z=0;const te=new ne;for(let I=0;I<J;I++){const O=I*H-j;for(let ie=0;ie<ue;ie++){const be=ie*T-G;te[S]=be*R,te[y]=O*C,te[x]=K,h.push(te.x,te.y,te.z),te[S]=0,te[y]=0,te[x]=N>0?1:-1,p.push(te.x,te.y,te.z),v.push(ie/D),v.push(1-I/k),q+=1}}for(let I=0;I<k;I++)for(let O=0;O<D;O++){const ie=m+O+ue*I,be=m+O+ue*(I+1),Q=m+(O+1)+ue*(I+1),de=m+(O+1)+ue*I;f.push(ie,be,de),f.push(be,Q,de),z+=6}c.addGroup(_,z,b),_+=z,m+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function El(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pi(o){const e={};for(let t=0;t<o.length;t++){const n=El(o[t]);for(const r in n)e[r]=n[r]}return e}function DA(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function _M(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const IA={clone:El,merge:pi};var NA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ws extends aa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NA,this.fragmentShader=UA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=El(e.uniforms),this.uniformsGroups=DA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vM extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=vs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ks=new ne,Vx=new Wt,Gx=new Wt;class Ki extends vM{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ap*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hg*2*Math.atan(Math.tan(Ap*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z)}getViewSize(e,t){return this.getViewBounds(e,Vx,Gx),t.subVectors(Gx,Vx)}setViewOffset(e,t,n,r,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ap*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,h=u.fullHeight;a+=u.offsetX*r/f,t-=u.offsetY*n/h,r*=u.width/f,n*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xa=-90,Ya=1;class OA extends li{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ki(Xa,Ya,e,t);r.layers=this.layers,this.add(r);const a=new Ki(Xa,Ya,e,t);a.layers=this.layers,this.add(a);const u=new Ki(Xa,Ya,e,t);u.layers=this.layers,this.add(u);const c=new Ki(Xa,Ya,e,t);c.layers=this.layers,this.add(c);const f=new Ki(Xa,Ya,e,t);f.layers=this.layers,this.add(f);const h=new Ki(Xa,Ya,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,u,c,f]=t;for(const h of t)this.remove(h);if(e===vs)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===gd)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,h,p]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,u),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(v,m,_),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class xM extends Oi{constructor(e,t,n,r,a,u,c,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:xl,super(e,t,n,r,a,u,c,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FA extends sa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Al(5,5,5),a=new ws({name:"CubemapFromEquirect",uniforms:El(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ui,blending:ao});a.uniforms.tEquirect.value=t;const u=new vi(r,a),c=t.minFilter;return t.minFilter===Yo&&(t.minFilter=jr),new OA(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(a)}}const jp=new ne,kA=new ne,zA=new At;class zo{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=jp.subVectors(n,t).cross(kA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jp),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zA.getNormalMatrix(e),r=this.coplanarPoint(jp).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Io=new tc,Of=new ne;class Qg{constructor(e=new zo,t=new zo,n=new zo,r=new zo,a=new zo,u=new zo){this.planes=[e,t,n,r,a,u]}set(e,t,n,r,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vs){const n=this.planes,r=e.elements,a=r[0],u=r[1],c=r[2],f=r[3],h=r[4],p=r[5],v=r[6],m=r[7],_=r[8],E=r[9],S=r[10],y=r[11],x=r[12],R=r[13],C=r[14],w=r[15];if(n[0].setComponents(f-a,m-h,y-_,w-x).normalize(),n[1].setComponents(f+a,m+h,y+_,w+x).normalize(),n[2].setComponents(f+u,m+p,y+E,w+R).normalize(),n[3].setComponents(f-u,m-p,y-E,w-R).normalize(),n[4].setComponents(f-c,m-v,y-S,w-C).normalize(),t===vs)n[5].setComponents(f+c,m+v,y+S,w+C).normalize();else if(t===gd)n[5].setComponents(c,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Io)}intersectsSprite(e){return Io.center.set(0,0,0),Io.radius=.7071067811865476,Io.applyMatrix4(e.matrixWorld),this.intersectsSphere(Io)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Of.x=r.normal.x>0?e.max.x:e.min.x,Of.y=r.normal.y>0?e.max.y:e.min.y,Of.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Of)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yM(){let o=null,e=!1,t=null,n=null;function r(a,u){t(a,u),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function BA(o){const e=new WeakMap;function t(c,f){const h=c.array,p=c.usage,v=h.byteLength,m=o.createBuffer();o.bindBuffer(f,m),o.bufferData(f,h,p),c.onUploadCallback();let _;if(h instanceof Float32Array)_=o.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?_=o.HALF_FLOAT:_=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=o.SHORT;else if(h instanceof Uint32Array)_=o.UNSIGNED_INT;else if(h instanceof Int32Array)_=o.INT;else if(h instanceof Int8Array)_=o.BYTE;else if(h instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function n(c,f,h){const p=f.array,v=f.updateRanges;if(o.bindBuffer(h,c),v.length===0)o.bufferSubData(h,0,p);else{v.sort((_,E)=>_.start-E.start);let m=0;for(let _=1;_<v.length;_++){const E=v[m],S=v[_];S.start<=E.start+E.count+1?E.count=Math.max(E.count,S.start+S.count-E.start):(++m,v[m]=S)}v.length=m+1;for(let _=0,E=v.length;_<E;_++){const S=v[_];o.bufferSubData(h,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(o.deleteBuffer(f.buffer),e.delete(c))}function u(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,f),h.version=c.version}}return{get:r,remove:a,update:u}}class nc extends Fi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,u=t/2,c=Math.floor(n),f=Math.floor(r),h=c+1,p=f+1,v=e/c,m=t/f,_=[],E=[],S=[],y=[];for(let x=0;x<p;x++){const R=x*m-u;for(let C=0;C<h;C++){const w=C*v-a;E.push(w,-R,0),S.push(0,0,1),y.push(C/c),y.push(1-x/f)}}for(let x=0;x<f;x++)for(let R=0;R<c;R++){const C=R+h*x,w=R+h*(x+1),F=R+1+h*(x+1),N=R+1+h*x;_.push(C,w,N),_.push(w,F,N)}this.setIndex(_),this.setAttribute("position",new Ur(E,3)),this.setAttribute("normal",new Ur(S,3)),this.setAttribute("uv",new Ur(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.widthSegments,e.heightSegments)}}var HA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VA=`#ifdef USE_ALPHAHASH
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
#endif`,GA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jA=`#ifdef USE_AOMAP
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
#endif`,qA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$A=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,KA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eC=`#ifdef USE_IRIDESCENCE
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
#endif`,tC=`#ifdef USE_BUMPMAP
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
#endif`,nC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cC=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,fC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dC=`vec3 transformedNormal = objectNormal;
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
#endif`,hC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_C="gl_FragColor = linearToOutputTexel( gl_FragColor );",vC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xC=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SC=`#ifdef USE_ENVMAP
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
#endif`,MC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EC=`#ifdef USE_ENVMAP
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
#endif`,wC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RC=`#ifdef USE_GRADIENTMAP
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
}`,bC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DC=`uniform bool receiveShadow;
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
#endif`,IC=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,NC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,zC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BC=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,VC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$C=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KC=`#if defined( USE_POINTS_UV )
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
#endif`,ZC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nR=`#ifdef USE_MORPHTARGETS
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
#endif`,iR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uR=`#ifdef USE_NORMALMAP
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
#endif`,cR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ER=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,TR=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,AR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CR=`#ifdef USE_SKINNING
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
#endif`,RR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bR=`#ifdef USE_SKINNING
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
#endif`,PR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NR=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UR=`#ifdef USE_TRANSMISSION
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
#endif`,OR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HR=`uniform sampler2D t2D;
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
}`,VR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YR=`#include <common>
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
}`,jR=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qR=`#define DISTANCE
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
}`,$R=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,KR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QR=`uniform float scale;
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
}`,JR=`uniform vec3 diffuse;
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
}`,eb=`#include <common>
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
}`,tb=`uniform vec3 diffuse;
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,rb=`#define MATCAP
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
}`,sb=`#define MATCAP
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
}`,ob=`#define NORMAL
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
}`,ab=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lb=`#define PHONG
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
}`,ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,cb=`#define STANDARD
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
}`,fb=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,db=`#define TOON
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
}`,hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,pb=`uniform float size;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,_b=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vb=`uniform float rotation;
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
}`,xb=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:HA,alphahash_pars_fragment:VA,alphamap_fragment:GA,alphamap_pars_fragment:WA,alphatest_fragment:XA,alphatest_pars_fragment:YA,aomap_fragment:jA,aomap_pars_fragment:qA,batching_pars_vertex:$A,batching_vertex:KA,begin_vertex:ZA,beginnormal_vertex:QA,bsdfs:JA,iridescence_fragment:eC,bumpmap_pars_fragment:tC,clipping_planes_fragment:nC,clipping_planes_pars_fragment:iC,clipping_planes_pars_vertex:rC,clipping_planes_vertex:sC,color_fragment:oC,color_pars_fragment:aC,color_pars_vertex:lC,color_vertex:uC,common:cC,cube_uv_reflection_fragment:fC,defaultnormal_vertex:dC,displacementmap_pars_vertex:hC,displacementmap_vertex:pC,emissivemap_fragment:mC,emissivemap_pars_fragment:gC,colorspace_fragment:_C,colorspace_pars_fragment:vC,envmap_fragment:xC,envmap_common_pars_fragment:yC,envmap_pars_fragment:SC,envmap_pars_vertex:MC,envmap_physical_pars_fragment:IC,envmap_vertex:EC,fog_vertex:wC,fog_pars_vertex:TC,fog_fragment:AC,fog_pars_fragment:CC,gradientmap_pars_fragment:RC,lightmap_pars_fragment:bC,lights_lambert_fragment:PC,lights_lambert_pars_fragment:LC,lights_pars_begin:DC,lights_toon_fragment:NC,lights_toon_pars_fragment:UC,lights_phong_fragment:OC,lights_phong_pars_fragment:FC,lights_physical_fragment:kC,lights_physical_pars_fragment:zC,lights_fragment_begin:BC,lights_fragment_maps:HC,lights_fragment_end:VC,logdepthbuf_fragment:GC,logdepthbuf_pars_fragment:WC,logdepthbuf_pars_vertex:XC,logdepthbuf_vertex:YC,map_fragment:jC,map_pars_fragment:qC,map_particle_fragment:$C,map_particle_pars_fragment:KC,metalnessmap_fragment:ZC,metalnessmap_pars_fragment:QC,morphinstance_vertex:JC,morphcolor_vertex:eR,morphnormal_vertex:tR,morphtarget_pars_vertex:nR,morphtarget_vertex:iR,normal_fragment_begin:rR,normal_fragment_maps:sR,normal_pars_fragment:oR,normal_pars_vertex:aR,normal_vertex:lR,normalmap_pars_fragment:uR,clearcoat_normal_fragment_begin:cR,clearcoat_normal_fragment_maps:fR,clearcoat_pars_fragment:dR,iridescence_pars_fragment:hR,opaque_fragment:pR,packing:mR,premultiplied_alpha_fragment:gR,project_vertex:_R,dithering_fragment:vR,dithering_pars_fragment:xR,roughnessmap_fragment:yR,roughnessmap_pars_fragment:SR,shadowmap_pars_fragment:MR,shadowmap_pars_vertex:ER,shadowmap_vertex:wR,shadowmask_pars_fragment:TR,skinbase_vertex:AR,skinning_pars_vertex:CR,skinning_vertex:RR,skinnormal_vertex:bR,specularmap_fragment:PR,specularmap_pars_fragment:LR,tonemapping_fragment:DR,tonemapping_pars_fragment:IR,transmission_fragment:NR,transmission_pars_fragment:UR,uv_pars_fragment:OR,uv_pars_vertex:FR,uv_vertex:kR,worldpos_vertex:zR,background_vert:BR,background_frag:HR,backgroundCube_vert:VR,backgroundCube_frag:GR,cube_vert:WR,cube_frag:XR,depth_vert:YR,depth_frag:jR,distanceRGBA_vert:qR,distanceRGBA_frag:$R,equirect_vert:KR,equirect_frag:ZR,linedashed_vert:QR,linedashed_frag:JR,meshbasic_vert:eb,meshbasic_frag:tb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:rb,meshmatcap_frag:sb,meshnormal_vert:ob,meshnormal_frag:ab,meshphong_vert:lb,meshphong_frag:ub,meshphysical_vert:cb,meshphysical_frag:fb,meshtoon_vert:db,meshtoon_frag:hb,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:_b,sprite_vert:vb,sprite_frag:xb},Be={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Gr={basic:{uniforms:pi([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:pi([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:pi([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:pi([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:pi([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:pi([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:pi([Be.points,Be.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:pi([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:pi([Be.common,Be.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:pi([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:pi([Be.sprite,Be.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:pi([Be.common,Be.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:pi([Be.lights,Be.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Gr.physical={uniforms:pi([Gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Ff={r:0,b:0,g:0},No=new Kr,yb=new fn;function Sb(o,e,t,n,r,a,u){const c=new zt(0);let f=a===!0?0:1,h,p,v=null,m=0,_=null;function E(R){let C=R.isScene===!0?R.background:null;return C&&C.isTexture&&(C=(R.backgroundBlurriness>0?t:e).get(C)),C}function S(R){let C=!1;const w=E(R);w===null?x(c,f):w&&w.isColor&&(x(w,1),C=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(o.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(R,C){const w=E(C);w&&(w.isCubeTexture||w.mapping===wd)?(p===void 0&&(p=new vi(new Al(1,1,1),new ws({name:"BackgroundCubeMaterial",uniforms:El(Gr.backgroundCube.uniforms),vertexShader:Gr.backgroundCube.vertexShader,fragmentShader:Gr.backgroundCube.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),No.copy(C.backgroundRotation),No.x*=-1,No.y*=-1,No.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(No.y*=-1,No.z*=-1),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(yb.makeRotationFromEuler(No)),p.material.toneMapped=Ht.getTransfer(w.colorSpace)!==Jt,(v!==w||m!==w.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,v=w,m=w.version,_=o.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new vi(new nc(2,2),new ws({name:"BackgroundMaterial",uniforms:El(Gr.background.uniforms),vertexShader:Gr.background.vertexShader,fragmentShader:Gr.background.fragmentShader,side:po,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Ht.getTransfer(w.colorSpace)!==Jt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||m!==w.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,v=w,m=w.version,_=o.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,C){R.getRGB(Ff,_M(o)),n.buffers.color.setClear(Ff.r,Ff.g,Ff.b,C,u)}return{getClearColor:function(){return c},setClearColor:function(R,C=1){c.set(R),f=C,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(c,f)},render:S,addToRenderList:y}}function Mb(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},r=m(null);let a=r,u=!1;function c(T,H,G,j,K){let ue=!1;const J=v(j,G,H);a!==J&&(a=J,h(a.object)),ue=_(T,j,G,K),ue&&E(T,j,G,K),K!==null&&e.update(K,o.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,w(T,H,G,j),K!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function f(){return o.createVertexArray()}function h(T){return o.bindVertexArray(T)}function p(T){return o.deleteVertexArray(T)}function v(T,H,G){const j=G.wireframe===!0;let K=n[T.id];K===void 0&&(K={},n[T.id]=K);let ue=K[H.id];ue===void 0&&(ue={},K[H.id]=ue);let J=ue[j];return J===void 0&&(J=m(f()),ue[j]=J),J}function m(T){const H=[],G=[],j=[];for(let K=0;K<t;K++)H[K]=0,G[K]=0,j[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:j,object:T,attributes:{},index:null}}function _(T,H,G,j){const K=a.attributes,ue=H.attributes;let J=0;const q=G.getAttributes();for(const z in q)if(q[z].location>=0){const I=K[z];let O=ue[z];if(O===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(O=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(O=T.instanceColor)),I===void 0||I.attribute!==O||O&&I.data!==O.data)return!0;J++}return a.attributesNum!==J||a.index!==j}function E(T,H,G,j){const K={},ue=H.attributes;let J=0;const q=G.getAttributes();for(const z in q)if(q[z].location>=0){let I=ue[z];I===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(I=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(I=T.instanceColor));const O={};O.attribute=I,I&&I.data&&(O.data=I.data),K[z]=O,J++}a.attributes=K,a.attributesNum=J,a.index=j}function S(){const T=a.newAttributes;for(let H=0,G=T.length;H<G;H++)T[H]=0}function y(T){x(T,0)}function x(T,H){const G=a.newAttributes,j=a.enabledAttributes,K=a.attributeDivisors;G[T]=1,j[T]===0&&(o.enableVertexAttribArray(T),j[T]=1),K[T]!==H&&(o.vertexAttribDivisor(T,H),K[T]=H)}function R(){const T=a.newAttributes,H=a.enabledAttributes;for(let G=0,j=H.length;G<j;G++)H[G]!==T[G]&&(o.disableVertexAttribArray(G),H[G]=0)}function C(T,H,G,j,K,ue,J){J===!0?o.vertexAttribIPointer(T,H,G,K,ue):o.vertexAttribPointer(T,H,G,j,K,ue)}function w(T,H,G,j){S();const K=j.attributes,ue=G.getAttributes(),J=H.defaultAttributeValues;for(const q in ue){const z=ue[q];if(z.location>=0){let te=K[q];if(te===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(te=T.instanceColor)),te!==void 0){const I=te.normalized,O=te.itemSize,ie=e.get(te);if(ie===void 0)continue;const be=ie.buffer,Q=ie.type,de=ie.bytesPerElement,ve=Q===o.INT||Q===o.UNSIGNED_INT||te.gpuType===Xg;if(te.isInterleavedBufferAttribute){const ge=te.data,we=ge.stride,Le=te.offset;if(ge.isInstancedInterleavedBuffer){for(let Je=0;Je<z.locationSize;Je++)x(z.location+Je,ge.meshPerAttribute);T.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Je=0;Je<z.locationSize;Je++)y(z.location+Je);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Je=0;Je<z.locationSize;Je++)C(z.location+Je,O/z.locationSize,Q,I,we*de,(Le+O/z.locationSize*Je)*de,ve)}else{if(te.isInstancedBufferAttribute){for(let ge=0;ge<z.locationSize;ge++)x(z.location+ge,te.meshPerAttribute);T.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<z.locationSize;ge++)y(z.location+ge);o.bindBuffer(o.ARRAY_BUFFER,be);for(let ge=0;ge<z.locationSize;ge++)C(z.location+ge,O/z.locationSize,Q,I,O*de,O/z.locationSize*ge*de,ve)}}else if(J!==void 0){const I=J[q];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(z.location,I);break;case 3:o.vertexAttrib3fv(z.location,I);break;case 4:o.vertexAttrib4fv(z.location,I);break;default:o.vertexAttrib1fv(z.location,I)}}}}R()}function F(){k();for(const T in n){const H=n[T];for(const G in H){const j=H[G];for(const K in j)p(j[K].object),delete j[K];delete H[G]}delete n[T]}}function N(T){if(n[T.id]===void 0)return;const H=n[T.id];for(const G in H){const j=H[G];for(const K in j)p(j[K].object),delete j[K];delete H[G]}delete n[T.id]}function D(T){for(const H in n){const G=n[H];if(G[T.id]===void 0)continue;const j=G[T.id];for(const K in j)p(j[K].object),delete j[K];delete G[T.id]}}function k(){b(),u=!0,a!==r&&(a=r,h(a.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:k,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:y,disableUnusedAttributes:R}}function Eb(o,e,t){let n;function r(h){n=h}function a(h,p){o.drawArrays(n,h,p),t.update(p,n,1)}function u(h,p,v){v!==0&&(o.drawArraysInstanced(n,h,p,v),t.update(p,n,v))}function c(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,v);let _=0;for(let E=0;E<v;E++)_+=p[E];t.update(_,n,1)}function f(h,p,v,m){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let E=0;E<h.length;E++)u(h[E],p[E],m[E]);else{_.multiDrawArraysInstancedWEBGL(n,h,0,p,0,m,0,v);let E=0;for(let S=0;S<v;S++)E+=p[S]*m[S];t.update(E,n,1)}}this.setMode=r,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function wb(o,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(D){return!(D!==Ir&&n.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const k=D===Zu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Es&&n.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==_s&&!k)}function f(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:v,reverseDepthBuffer:m,maxTextures:_,maxVertexTextures:E,maxTextureSize:S,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:w,vertexTextures:F,maxSamples:N}}function Tb(o){const e=this;let t=null,n=0,r=!1,a=!1;const u=new zo,c=new At,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const _=v.length!==0||m||n!==0||r;return r=m,n=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=p(v,m,0)},this.setState=function(v,m,_){const E=v.clippingPlanes,S=v.clipIntersection,y=v.clipShadows,x=o.get(v);if(!r||E===null||E.length===0||a&&!y)a?p(null):h();else{const R=a?0:n,C=R*4;let w=x.clippingState||null;f.value=w,w=p(E,m,C,_);for(let F=0;F!==C;++F)w[F]=t[F];x.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(v,m,_,E){const S=v!==null?v.length:0;let y=null;if(S!==0){if(y=f.value,E!==!0||y===null){const x=_+S*4,R=m.matrixWorldInverse;c.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let C=0,w=_;C!==S;++C,w+=4)u.copy(v[C]).applyMatrix4(R,c),u.normal.toArray(y,w),y[w+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,y}}function Ab(o){let e=new WeakMap;function t(u,c){return c===Fm?u.mapping=xl:c===km&&(u.mapping=yl),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Fm||c===km)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const h=new FA(f.height);return h.fromEquirectangularTexture(o,u),e.set(u,h),u.addEventListener("dispose",r),t(h.texture,u.mapping)}else return null}}return u}function r(u){const c=u.target;c.removeEventListener("dispose",r);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class SM extends vM{constructor(e=-1,t=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const el=4,Wx=[.125,.215,.35,.446,.526,.582],Vo=20,qp=new SM,Xx=new zt;let $p=null,Kp=0,Zp=0,Qp=!1;const Bo=(1+Math.sqrt(5))/2,ja=1/Bo,Yx=[new ne(-Bo,ja,0),new ne(Bo,ja,0),new ne(-ja,0,Bo),new ne(ja,0,Bo),new ne(0,Bo,-ja),new ne(0,Bo,ja),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class jx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){$p=this._renderer.getRenderTarget(),Kp=this._renderer.getActiveCubeFace(),Zp=this._renderer.getActiveMipmapLevel(),Qp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($p,Kp,Zp),this._renderer.xr.enabled=Qp,e.scissorTest=!1,kf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xl||e.mapping===yl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$p=this._renderer.getRenderTarget(),Kp=this._renderer.getActiveCubeFace(),Zp=this._renderer.getActiveMipmapLevel(),Qp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jr,minFilter:jr,generateMipmaps:!1,type:Zu,format:Ir,colorSpace:wl,depthBuffer:!1},r=qx(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qx(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(a)),this._blurMaterial=Rb(a,e,t)}return r}_compileMaterial(e){const t=new vi(this._lodPlanes[0],e);this._renderer.compile(t,qp)}_sceneToCubeUV(e,t,n,r){const c=new Ki(90,1,t,n),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,m=p.toneMapping;p.getClearColor(Xx),p.toneMapping=lo,p.autoClear=!1;const _=new Ja({name:"PMREM.Background",side:Ui,depthWrite:!1,depthTest:!1}),E=new vi(new Al,_);let S=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,S=!0):(_.color.copy(Xx),S=!0);for(let x=0;x<6;x++){const R=x%3;R===0?(c.up.set(0,f[x],0),c.lookAt(h[x],0,0)):R===1?(c.up.set(0,0,f[x]),c.lookAt(0,h[x],0)):(c.up.set(0,f[x],0),c.lookAt(0,0,h[x]));const C=this._cubeSize;kf(r,R*C,x>2?C:0,C,C),p.setRenderTarget(r),S&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=m,p.autoClear=v,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===xl||e.mapping===yl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$x());const a=r?this._cubemapMaterial:this._equirectMaterial,u=new vi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;kf(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(u,qp)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Yx[(r-a-1)%Yx.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",a),this._halfBlur(u,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,u,c){const f=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,v=new vi(this._lodPlanes[r],h),m=h.uniforms,_=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Vo-1),S=a/E,y=isFinite(a)?1+Math.floor(p*S):Vo;y>Vo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vo}`);const x=[];let R=0;for(let D=0;D<Vo;++D){const k=D/S,b=Math.exp(-k*k/2);x.push(b),D===0?R+=b:D<y&&(R+=2*b)}for(let D=0;D<x.length;D++)x[D]=x[D]/R;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=x,m.latitudinal.value=u==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:C}=this;m.dTheta.value=E,m.mipInt.value=C-n;const w=this._sizeLods[r],F=3*w*(r>C-el?r-C+el:0),N=4*(this._cubeSize-w);kf(t,F,N,3*w,2*w),f.setRenderTarget(t),f.render(v,qp)}}function Cb(o){const e=[],t=[],n=[];let r=o;const a=o-el+1+Wx.length;for(let u=0;u<a;u++){const c=Math.pow(2,r);t.push(c);let f=1/c;u>o-el?f=Wx[u-o+el-1]:u===0&&(f=0),n.push(f);const h=1/(c-2),p=-h,v=1+h,m=[p,p,v,p,v,v,p,p,v,v,p,v],_=6,E=6,S=3,y=2,x=1,R=new Float32Array(S*E*_),C=new Float32Array(y*E*_),w=new Float32Array(x*E*_);for(let N=0;N<_;N++){const D=N%3*2/3-1,k=N>2?0:-1,b=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];R.set(b,S*E*N),C.set(m,y*E*N);const T=[N,N,N,N,N,N];w.set(T,x*E*N)}const F=new Fi;F.setAttribute("position",new nr(R,S)),F.setAttribute("uv",new nr(C,y)),F.setAttribute("faceIndex",new nr(w,x)),e.push(F),r>el&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qx(o,e,t){const n=new sa(o,e,t);return n.texture.mapping=wd,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kf(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function Rb(o,e,t){const n=new Float32Array(Vo),r=new ne(0,1,0);return new ws({name:"SphericalGaussianBlur",defines:{n:Vo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jg(),fragmentShader:`

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
		`,blending:ao,depthTest:!1,depthWrite:!1})}function $x(){return new ws({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jg(),fragmentShader:`

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
		`,blending:ao,depthTest:!1,depthWrite:!1})}function Kx(){return new ws({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ao,depthTest:!1,depthWrite:!1})}function Jg(){return`

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
	`}function bb(o){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,h=f===Fm||f===km,p=f===xl||f===yl;if(h||p){let v=e.get(c);const m=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new jx(o)),v=h?t.fromEquirectangular(c,v):t.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),v.texture;if(v!==void 0)return v.texture;{const _=c.image;return h&&_&&_.height>0||p&&_&&r(_)?(t===null&&(t=new jx(o)),v=h?t.fromEquirectangular(c):t.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),c.addEventListener("dispose",a),v.texture):null}}}return c}function r(c){let f=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&f++;return f===h}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Pb(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Eu("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Lb(o,e,t,n){const r={},a=new WeakMap;function u(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);for(const E in m.morphAttributes){const S=m.morphAttributes[E];for(let y=0,x=S.length;y<x;y++)e.remove(S[y])}m.removeEventListener("dispose",u),delete r[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(v,m){return r[m.id]===!0||(m.addEventListener("dispose",u),r[m.id]=!0,t.memory.geometries++),m}function f(v){const m=v.attributes;for(const E in m)e.update(m[E],o.ARRAY_BUFFER);const _=v.morphAttributes;for(const E in _){const S=_[E];for(let y=0,x=S.length;y<x;y++)e.update(S[y],o.ARRAY_BUFFER)}}function h(v){const m=[],_=v.index,E=v.attributes.position;let S=0;if(_!==null){const R=_.array;S=_.version;for(let C=0,w=R.length;C<w;C+=3){const F=R[C+0],N=R[C+1],D=R[C+2];m.push(F,N,N,D,D,F)}}else if(E!==void 0){const R=E.array;S=E.version;for(let C=0,w=R.length/3-1;C<w;C+=3){const F=C+0,N=C+1,D=C+2;m.push(F,N,N,D,D,F)}}else return;const y=new(cM(m)?gM:mM)(m,1);y.version=S;const x=a.get(v);x&&e.remove(x),a.set(v,y)}function p(v){const m=a.get(v);if(m){const _=v.index;_!==null&&m.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:c,update:f,getWireframeAttribute:p}}function Db(o,e,t){let n;function r(m){n=m}let a,u;function c(m){a=m.type,u=m.bytesPerElement}function f(m,_){o.drawElements(n,_,a,m*u),t.update(_,n,1)}function h(m,_,E){E!==0&&(o.drawElementsInstanced(n,_,a,m*u,E),t.update(_,n,E))}function p(m,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,m,0,E);let y=0;for(let x=0;x<E;x++)y+=_[x];t.update(y,n,1)}function v(m,_,E,S){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<m.length;x++)h(m[x]/u,_[x],S[x]);else{y.multiDrawElementsInstancedWEBGL(n,_,0,a,m,0,S,0,E);let x=0;for(let R=0;R<E;R++)x+=_[R]*S[R];t.update(x,n,1)}}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function Ib(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Nb(o,e,t){const n=new WeakMap,r=new en;function a(u,c,f){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=p!==void 0?p.length:0;let m=n.get(c);if(m===void 0||m.count!==v){let b=function(){D.dispose(),n.delete(c),c.removeEventListener("dispose",b)};m!==void 0&&m.texture.dispose();const _=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let C=0;_===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let w=c.attributes.position.count*C,F=1;w>e.maxTextureSize&&(F=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const N=new Float32Array(w*F*4*v),D=new dM(N,w,F,v);D.type=_s,D.needsUpdate=!0;const k=C*4;for(let T=0;T<v;T++){const H=y[T],G=x[T],j=R[T],K=w*F*4*T;for(let ue=0;ue<H.count;ue++){const J=ue*k;_===!0&&(r.fromBufferAttribute(H,ue),N[K+J+0]=r.x,N[K+J+1]=r.y,N[K+J+2]=r.z,N[K+J+3]=0),E===!0&&(r.fromBufferAttribute(G,ue),N[K+J+4]=r.x,N[K+J+5]=r.y,N[K+J+6]=r.z,N[K+J+7]=0),S===!0&&(r.fromBufferAttribute(j,ue),N[K+J+8]=r.x,N[K+J+9]=r.y,N[K+J+10]=r.z,N[K+J+11]=j.itemSize===4?r.w:1)}}m={count:v,texture:D,size:new Wt(w,F)},n.set(c,m),c.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let _=0;for(let S=0;S<h.length;S++)_+=h[S];const E=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(o,"morphTargetBaseInfluence",E),f.getUniforms().setValue(o,"morphTargetInfluences",h)}f.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}return{update:a}}function Ub(o,e,t,n){let r=new WeakMap;function a(f){const h=n.render.frame,p=f.geometry,v=e.get(f,p);if(r.get(v)!==h&&(e.update(v),r.set(v,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),r.get(f)!==h&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),r.set(f,h))),f.isSkinnedMesh){const m=f.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return v}function u(){r=new WeakMap}function c(f){const h=f.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}class MM extends Oi{constructor(e,t,n,r,a,u,c,f,h,p=cl){if(p!==cl&&p!==Ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===cl&&(n=ra),n===void 0&&p===Ml&&(n=Sl),super(null,r,a,u,c,f,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Nr,this.minFilter=f!==void 0?f:Nr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const EM=new Oi,Zx=new MM(1,1),wM=new dM,TM=new SA,AM=new xM,Qx=[],Jx=[],ey=new Float32Array(16),ty=new Float32Array(9),ny=new Float32Array(4);function Cl(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=Qx[r];if(a===void 0&&(a=new Float32Array(r),Qx[r]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function Un(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function On(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ad(o,e){let t=Jx[e];t===void 0&&(t=new Int32Array(e),Jx[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Ob(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Fb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;o.uniform2fv(this.addr,e),On(t,e)}}function kb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Un(t,e))return;o.uniform3fv(this.addr,e),On(t,e)}}function zb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;o.uniform4fv(this.addr,e),On(t,e)}}function Bb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),On(t,e)}else{if(Un(t,n))return;ny.set(n),o.uniformMatrix2fv(this.addr,!1,ny),On(t,n)}}function Hb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),On(t,e)}else{if(Un(t,n))return;ty.set(n),o.uniformMatrix3fv(this.addr,!1,ty),On(t,n)}}function Vb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),On(t,e)}else{if(Un(t,n))return;ey.set(n),o.uniformMatrix4fv(this.addr,!1,ey),On(t,n)}}function Gb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Wb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;o.uniform2iv(this.addr,e),On(t,e)}}function Xb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;o.uniform3iv(this.addr,e),On(t,e)}}function Yb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;o.uniform4iv(this.addr,e),On(t,e)}}function jb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function qb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;o.uniform2uiv(this.addr,e),On(t,e)}}function $b(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;o.uniform3uiv(this.addr,e),On(t,e)}}function Kb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;o.uniform4uiv(this.addr,e),On(t,e)}}function Zb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r);let a;this.type===o.SAMPLER_2D_SHADOW?(Zx.compareFunction=uM,a=Zx):a=EM,t.setTexture2D(e||a,r)}function Qb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||TM,r)}function Jb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||AM,r)}function eP(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wM,r)}function tP(o){switch(o){case 5126:return Ob;case 35664:return Fb;case 35665:return kb;case 35666:return zb;case 35674:return Bb;case 35675:return Hb;case 35676:return Vb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return Yb;case 5125:return jb;case 36294:return qb;case 36295:return $b;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return eP}}function nP(o,e){o.uniform1fv(this.addr,e)}function iP(o,e){const t=Cl(e,this.size,2);o.uniform2fv(this.addr,t)}function rP(o,e){const t=Cl(e,this.size,3);o.uniform3fv(this.addr,t)}function sP(o,e){const t=Cl(e,this.size,4);o.uniform4fv(this.addr,t)}function oP(o,e){const t=Cl(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function aP(o,e){const t=Cl(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function lP(o,e){const t=Cl(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function uP(o,e){o.uniform1iv(this.addr,e)}function cP(o,e){o.uniform2iv(this.addr,e)}function fP(o,e){o.uniform3iv(this.addr,e)}function dP(o,e){o.uniform4iv(this.addr,e)}function hP(o,e){o.uniform1uiv(this.addr,e)}function pP(o,e){o.uniform2uiv(this.addr,e)}function mP(o,e){o.uniform3uiv(this.addr,e)}function gP(o,e){o.uniform4uiv(this.addr,e)}function _P(o,e,t){const n=this.cache,r=e.length,a=Ad(t,r);Un(n,a)||(o.uniform1iv(this.addr,a),On(n,a));for(let u=0;u!==r;++u)t.setTexture2D(e[u]||EM,a[u])}function vP(o,e,t){const n=this.cache,r=e.length,a=Ad(t,r);Un(n,a)||(o.uniform1iv(this.addr,a),On(n,a));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||TM,a[u])}function xP(o,e,t){const n=this.cache,r=e.length,a=Ad(t,r);Un(n,a)||(o.uniform1iv(this.addr,a),On(n,a));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||AM,a[u])}function yP(o,e,t){const n=this.cache,r=e.length,a=Ad(t,r);Un(n,a)||(o.uniform1iv(this.addr,a),On(n,a));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||wM,a[u])}function SP(o){switch(o){case 5126:return nP;case 35664:return iP;case 35665:return rP;case 35666:return sP;case 35674:return oP;case 35675:return aP;case 35676:return lP;case 5124:case 35670:return uP;case 35667:case 35671:return cP;case 35668:case 35672:return fP;case 35669:case 35673:return dP;case 5125:return hP;case 36294:return pP;case 36295:return mP;case 36296:return gP;case 35678:case 36198:case 36298:case 36306:case 35682:return _P;case 35679:case 36299:case 36307:return vP;case 35680:case 36300:case 36308:case 36293:return xP;case 36289:case 36303:case 36311:case 36292:return yP}}class MP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tP(t.type)}}class EP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SP(t.type)}}class wP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Jp=/(\w+)(\])?(\[|\.)?/g;function iy(o,e){o.seq.push(e),o.map[e.id]=e}function TP(o,e,t){const n=o.name,r=n.length;for(Jp.lastIndex=0;;){const a=Jp.exec(n),u=Jp.lastIndex;let c=a[1];const f=a[2]==="]",h=a[3];if(f&&(c=c|0),h===void 0||h==="["&&u+2===r){iy(t,h===void 0?new MP(c,o,e):new EP(c,o,e));break}else{let v=t.map[c];v===void 0&&(v=new wP(c),iy(t,v)),t=v}}}class rd{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),u=e.getUniformLocation(t,a.name);TP(a,u,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function ry(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const AP=37297;let CP=0;function RP(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=r;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const sy=new At;function bP(o){Ht._getMatrix(sy,Ht.workingColorSpace,o);const e=`mat3( ${sy.elements.map(t=>t.toFixed(4))} )`;switch(Ht.getTransfer(o)){case Td:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function oy(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+RP(o.getShaderSource(e),u)}else return r}function PP(o,e){const t=bP(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function LP(o,e){let t;switch(e){case qT:t="Linear";break;case $T:t="Reinhard";break;case KT:t="Cineon";break;case ZT:t="ACESFilmic";break;case JT:t="AgX";break;case eA:t="Neutral";break;case QT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zf=new ne;function DP(){Ht.getLuminanceCoefficients(zf);const o=zf.x.toFixed(4),e=zf.y.toFixed(4),t=zf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IP(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wu).join(`
`)}function NP(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function UP(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function wu(o){return o!==""}function ay(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ly(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OP=/^[ \t]*#include +<([\w\d./]+)>/gm;function pg(o){return o.replace(OP,kP)}const FP=new Map;function kP(o,e){let t=Ct[e];if(t===void 0){const n=FP.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pg(t)}const zP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uy(o){return o.replace(zP,BP)}function BP(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function cy(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HP(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===$S?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===CT?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===fs&&(e="SHADOWMAP_TYPE_VSM"),e}function VP(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case xl:case yl:e="ENVMAP_TYPE_CUBE";break;case wd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GP(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case yl:e="ENVMAP_MODE_REFRACTION";break}return e}function WP(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case KS:e="ENVMAP_BLENDING_MULTIPLY";break;case YT:e="ENVMAP_BLENDING_MIX";break;case jT:e="ENVMAP_BLENDING_ADD";break}return e}function XP(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YP(o,e,t,n){const r=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=HP(t),h=VP(t),p=GP(t),v=WP(t),m=XP(t),_=IP(t),E=NP(a),S=r.createProgram();let y,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(wu).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(wu).join(`
`),x.length>0&&(x+=`
`)):(y=[cy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wu).join(`
`),x=[cy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lo?"#define TONE_MAPPING":"",t.toneMapping!==lo?Ct.tonemapping_pars_fragment:"",t.toneMapping!==lo?LP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,PP("linearToOutputTexel",t.outputColorSpace),DP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wu).join(`
`)),u=pg(u),u=ay(u,t),u=ly(u,t),c=pg(c),c=ay(c,t),c=ly(c,t),u=uy(u),c=uy(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Ex?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ex?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=R+y+u,w=R+x+c,F=ry(r,r.VERTEX_SHADER,C),N=ry(r,r.FRAGMENT_SHADER,w);r.attachShader(S,F),r.attachShader(S,N),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function D(H){if(o.debug.checkShaderErrors){const G=r.getProgramInfoLog(S).trim(),j=r.getShaderInfoLog(F).trim(),K=r.getShaderInfoLog(N).trim();let ue=!0,J=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ue=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,S,F,N);else{const q=oy(r,F,"vertex"),z=oy(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+G+`
`+q+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(j===""||K==="")&&(J=!1);J&&(H.diagnostics={runnable:ue,programLog:G,vertexShader:{log:j,prefix:y},fragmentShader:{log:K,prefix:x}})}r.deleteShader(F),r.deleteShader(N),k=new rd(r,S),b=UP(r,S)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(S,AP)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CP++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=F,this.fragmentShader=N,this}let jP=0;class qP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $P(e),t.set(e,n)),n}}class $P{constructor(e){this.id=jP++,this.code=e,this.usedTimes=0}}function KP(o,e,t,n,r,a,u){const c=new hM,f=new qP,h=new Set,p=[],v=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return h.add(b),b===0?"uv":`uv${b}`}function y(b,T,H,G,j){const K=G.fog,ue=j.geometry,J=b.isMeshStandardMaterial?G.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||J),z=q&&q.mapping===wd?q.image.height:null,te=E[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const I=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=I!==void 0?I.length:0;let ie=0;ue.morphAttributes.position!==void 0&&(ie=1),ue.morphAttributes.normal!==void 0&&(ie=2),ue.morphAttributes.color!==void 0&&(ie=3);let be,Q,de,ve;if(te){const ze=Gr[te];be=ze.vertexShader,Q=ze.fragmentShader}else be=b.vertexShader,Q=b.fragmentShader,f.update(b),de=f.getVertexShaderID(b),ve=f.getFragmentShaderID(b);const ge=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),Le=j.isInstancedMesh===!0,Je=j.isBatchedMesh===!0,Mt=!!b.map,ut=!!b.matcap,et=!!q,X=!!b.aoMap,Xt=!!b.lightMap,ht=!!b.bumpMap,ee=!!b.normalMap,We=!!b.displacementMap,Rt=!!b.emissiveMap,je=!!b.metalnessMap,U=!!b.roughnessMap,P=b.anisotropy>0,oe=b.clearcoat>0,_e=b.dispersion>0,me=b.iridescence>0,pe=b.sheen>0,Ne=b.transmission>0,Ce=P&&!!b.anisotropyMap,Oe=oe&&!!b.clearcoatMap,gt=oe&&!!b.clearcoatNormalMap,Me=oe&&!!b.clearcoatRoughnessMap,Pe=me&&!!b.iridescenceMap,ot=me&&!!b.iridescenceThicknessMap,it=pe&&!!b.sheenColorMap,Ve=pe&&!!b.sheenRoughnessMap,St=!!b.specularMap,at=!!b.specularColorMap,Pt=!!b.specularIntensityMap,V=Ne&&!!b.transmissionMap,De=Ne&&!!b.thicknessMap,fe=!!b.gradientMap,he=!!b.alphaMap,Ie=b.alphaTest>0,Ue=!!b.alphaHash,pt=!!b.extensions;let Ft=lo;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ft=o.toneMapping);const an={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:be,fragmentShader:Q,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Je,batchingColor:Je&&j._colorsTexture!==null,instancing:Le,instancingColor:Le&&j.instanceColor!==null,instancingMorph:Le&&j.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ge===null?o.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:wl,alphaToCoverage:!!b.alphaToCoverage,map:Mt,matcap:ut,envMap:et,envMapMode:et&&q.mapping,envMapCubeUVHeight:z,aoMap:X,lightMap:Xt,bumpMap:ht,normalMap:ee,displacementMap:m&&We,emissiveMap:Rt,normalMapObjectSpace:ee&&b.normalMapType===rA,normalMapTangentSpace:ee&&b.normalMapType===lM,metalnessMap:je,roughnessMap:U,anisotropy:P,anisotropyMap:Ce,clearcoat:oe,clearcoatMap:Oe,clearcoatNormalMap:gt,clearcoatRoughnessMap:Me,dispersion:_e,iridescence:me,iridescenceMap:Pe,iridescenceThicknessMap:ot,sheen:pe,sheenColorMap:it,sheenRoughnessMap:Ve,specularMap:St,specularColorMap:at,specularIntensityMap:Pt,transmission:Ne,transmissionMap:V,thicknessMap:De,gradientMap:fe,opaque:b.transparent===!1&&b.blending===ul&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Ie,alphaHash:Ue,combine:b.combine,mapUv:Mt&&S(b.map.channel),aoMapUv:X&&S(b.aoMap.channel),lightMapUv:Xt&&S(b.lightMap.channel),bumpMapUv:ht&&S(b.bumpMap.channel),normalMapUv:ee&&S(b.normalMap.channel),displacementMapUv:We&&S(b.displacementMap.channel),emissiveMapUv:Rt&&S(b.emissiveMap.channel),metalnessMapUv:je&&S(b.metalnessMap.channel),roughnessMapUv:U&&S(b.roughnessMap.channel),anisotropyMapUv:Ce&&S(b.anisotropyMap.channel),clearcoatMapUv:Oe&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:it&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&S(b.sheenRoughnessMap.channel),specularMapUv:St&&S(b.specularMap.channel),specularColorMapUv:at&&S(b.specularColorMap.channel),specularIntensityMapUv:Pt&&S(b.specularIntensityMap.channel),transmissionMapUv:V&&S(b.transmissionMap.channel),thicknessMapUv:De&&S(b.thicknessMap.channel),alphaMapUv:he&&S(b.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ee||P),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ue.attributes.uv&&(Mt||he),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:j.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Mt&&b.map.isVideoTexture===!0&&Ht.getTransfer(b.map.colorSpace)===Jt,decodeVideoTextureEmissive:Rt&&b.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(b.emissiveMap.colorSpace)===Jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ms,flipSided:b.side===Ui,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:pt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&b.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return an.vertexUv1s=h.has(1),an.vertexUv2s=h.has(2),an.vertexUv3s=h.has(3),h.clear(),an}function x(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)T.push(H),T.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(R(T,b),C(T,b),T.push(o.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function R(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function C(b,T){c.disableAll(),T.supportsVertexTextures&&c.enable(0),T.instancing&&c.enable(1),T.instancingColor&&c.enable(2),T.instancingMorph&&c.enable(3),T.matcap&&c.enable(4),T.envMap&&c.enable(5),T.normalMapObjectSpace&&c.enable(6),T.normalMapTangentSpace&&c.enable(7),T.clearcoat&&c.enable(8),T.iridescence&&c.enable(9),T.alphaTest&&c.enable(10),T.vertexColors&&c.enable(11),T.vertexAlphas&&c.enable(12),T.vertexUv1s&&c.enable(13),T.vertexUv2s&&c.enable(14),T.vertexUv3s&&c.enable(15),T.vertexTangents&&c.enable(16),T.anisotropy&&c.enable(17),T.alphaHash&&c.enable(18),T.batching&&c.enable(19),T.dispersion&&c.enable(20),T.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),T.fog&&c.enable(0),T.useFog&&c.enable(1),T.flatShading&&c.enable(2),T.logarithmicDepthBuffer&&c.enable(3),T.reverseDepthBuffer&&c.enable(4),T.skinning&&c.enable(5),T.morphTargets&&c.enable(6),T.morphNormals&&c.enable(7),T.morphColors&&c.enable(8),T.premultipliedAlpha&&c.enable(9),T.shadowMapEnabled&&c.enable(10),T.doubleSided&&c.enable(11),T.flipSided&&c.enable(12),T.useDepthPacking&&c.enable(13),T.dithering&&c.enable(14),T.transmission&&c.enable(15),T.sheen&&c.enable(16),T.opaque&&c.enable(17),T.pointsUvs&&c.enable(18),T.decodeVideoTexture&&c.enable(19),T.decodeVideoTextureEmissive&&c.enable(20),T.alphaToCoverage&&c.enable(21),b.push(c.mask)}function w(b){const T=E[b.type];let H;if(T){const G=Gr[T];H=IA.clone(G.uniforms)}else H=b.uniforms;return H}function F(b,T){let H;for(let G=0,j=p.length;G<j;G++){const K=p[G];if(K.cacheKey===T){H=K,++H.usedTimes;break}}return H===void 0&&(H=new YP(o,T,b,a),p.push(H)),H}function N(b){if(--b.usedTimes===0){const T=p.indexOf(b);p[T]=p[p.length-1],p.pop(),b.destroy()}}function D(b){f.remove(b)}function k(){f.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:w,acquireProgram:F,releaseProgram:N,releaseShaderCache:D,programs:p,dispose:k}}function ZP(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function n(u){o.delete(u)}function r(u,c,f){o.get(u)[c]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function QP(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function fy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function dy(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function u(v,m,_,E,S,y){let x=o[e];return x===void 0?(x={id:v.id,object:v,geometry:m,material:_,groupOrder:E,renderOrder:v.renderOrder,z:S,group:y},o[e]=x):(x.id=v.id,x.object=v,x.geometry=m,x.material=_,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=S,x.group=y),e++,x}function c(v,m,_,E,S,y){const x=u(v,m,_,E,S,y);_.transmission>0?n.push(x):_.transparent===!0?r.push(x):t.push(x)}function f(v,m,_,E,S,y){const x=u(v,m,_,E,S,y);_.transmission>0?n.unshift(x):_.transparent===!0?r.unshift(x):t.unshift(x)}function h(v,m){t.length>1&&t.sort(v||QP),n.length>1&&n.sort(m||fy),r.length>1&&r.sort(m||fy)}function p(){for(let v=e,m=o.length;v<m;v++){const _=o[v];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:f,finish:p,sort:h}}function JP(){let o=new WeakMap;function e(n,r){const a=o.get(n);let u;return a===void 0?(u=new dy,o.set(n,[u])):r>=a.length?(u=new dy,a.push(u)):u=a[r],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function e2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new zt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new zt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":t={color:new zt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return o[e.id]=t,t}}}function t2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let n2=0;function i2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function r2(o){const e=new e2,t=t2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ne);const r=new ne,a=new fn,u=new fn;function c(h){let p=0,v=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let _=0,E=0,S=0,y=0,x=0,R=0,C=0,w=0,F=0,N=0,D=0;h.sort(i2);for(let b=0,T=h.length;b<T;b++){const H=h[b],G=H.color,j=H.intensity,K=H.distance,ue=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)p+=G.r*j,v+=G.g*j,m+=G.b*j;else if(H.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(H.sh.coefficients[J],j);D++}else if(H.isDirectionalLight){const J=e.get(H);if(J.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const q=H.shadow,z=t.get(H);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.directionalShadow[_]=z,n.directionalShadowMap[_]=ue,n.directionalShadowMatrix[_]=H.shadow.matrix,R++}n.directional[_]=J,_++}else if(H.isSpotLight){const J=e.get(H);J.position.setFromMatrixPosition(H.matrixWorld),J.color.copy(G).multiplyScalar(j),J.distance=K,J.coneCos=Math.cos(H.angle),J.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),J.decay=H.decay,n.spot[S]=J;const q=H.shadow;if(H.map&&(n.spotLightMap[F]=H.map,F++,q.updateMatrices(H),H.castShadow&&N++),n.spotLightMatrix[S]=q.matrix,H.castShadow){const z=t.get(H);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.spotShadow[S]=z,n.spotShadowMap[S]=ue,w++}S++}else if(H.isRectAreaLight){const J=e.get(H);J.color.copy(G).multiplyScalar(j),J.halfWidth.set(H.width*.5,0,0),J.halfHeight.set(0,H.height*.5,0),n.rectArea[y]=J,y++}else if(H.isPointLight){const J=e.get(H);if(J.color.copy(H.color).multiplyScalar(H.intensity),J.distance=H.distance,J.decay=H.decay,H.castShadow){const q=H.shadow,z=t.get(H);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,n.pointShadow[E]=z,n.pointShadowMap[E]=ue,n.pointShadowMatrix[E]=H.shadow.matrix,C++}n.point[E]=J,E++}else if(H.isHemisphereLight){const J=e.get(H);J.skyColor.copy(H.color).multiplyScalar(j),J.groundColor.copy(H.groundColor).multiplyScalar(j),n.hemi[x]=J,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=m;const k=n.hash;(k.directionalLength!==_||k.pointLength!==E||k.spotLength!==S||k.rectAreaLength!==y||k.hemiLength!==x||k.numDirectionalShadows!==R||k.numPointShadows!==C||k.numSpotShadows!==w||k.numSpotMaps!==F||k.numLightProbes!==D)&&(n.directional.length=_,n.spot.length=S,n.rectArea.length=y,n.point.length=E,n.hemi.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=w+F-N,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=D,k.directionalLength=_,k.pointLength=E,k.spotLength=S,k.rectAreaLength=y,k.hemiLength=x,k.numDirectionalShadows=R,k.numPointShadows=C,k.numSpotShadows=w,k.numSpotMaps=F,k.numLightProbes=D,n.version=n2++)}function f(h,p){let v=0,m=0,_=0,E=0,S=0;const y=p.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const C=h[x];if(C.isDirectionalLight){const w=n.directional[v];w.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(y),v++}else if(C.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(y),_++}else if(C.isRectAreaLight){const w=n.rectArea[E];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(y),u.identity(),a.copy(C.matrixWorld),a.premultiply(y),u.extractRotation(a),w.halfWidth.set(C.width*.5,0,0),w.halfHeight.set(0,C.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(C.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(y),m++}else if(C.isHemisphereLight){const w=n.hemi[S];w.direction.setFromMatrixPosition(C.matrixWorld),w.direction.transformDirection(y),S++}}}return{setup:c,setupView:f,state:n}}function hy(o){const e=new r2(o),t=[],n=[];function r(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:u}}function s2(o){let e=new WeakMap;function t(r,a=0){const u=e.get(r);let c;return u===void 0?(c=new hy(o),e.set(r,[c])):a>=u.length?(c=new hy(o),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class o2 extends aa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a2 extends aa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const l2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c2(o,e,t){let n=new Qg;const r=new Wt,a=new Wt,u=new en,c=new o2({depthPacking:iA}),f=new a2,h={},p=t.maxTextureSize,v={[po]:Ui,[Ui]:po,[ms]:ms},m=new ws({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:l2,fragmentShader:u2}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const E=new Fi;E.setAttribute("position",new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new vi(E,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$S;let x=this.type;this.render=function(N,D,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const b=o.getRenderTarget(),T=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),G=o.state;G.setBlending(ao),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const j=x!==fs&&this.type===fs,K=x===fs&&this.type!==fs;for(let ue=0,J=N.length;ue<J;ue++){const q=N[ue],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const te=z.getFrameExtents();if(r.multiply(te),a.copy(z.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/te.x),r.x=a.x*te.x,z.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/te.y),r.y=a.y*te.y,z.mapSize.y=a.y)),z.map===null||j===!0||K===!0){const O=this.type!==fs?{minFilter:Nr,magFilter:Nr}:{};z.map!==null&&z.map.dispose(),z.map=new sa(r.x,r.y,O),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const I=z.getViewportCount();for(let O=0;O<I;O++){const ie=z.getViewport(O);u.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),G.viewport(u),z.updateMatrices(q,O),n=z.getFrustum(),w(D,k,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===fs&&R(z,k),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(b,T,H)};function R(N,D){const k=e.update(S);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new sa(r.x,r.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(D,null,k,m,S,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(D,null,k,_,S,null)}function C(N,D,k,b){let T=null;const H=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)T=H;else if(T=k.isPointLight===!0?f:c,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const G=T.uuid,j=D.uuid;let K=h[G];K===void 0&&(K={},h[G]=K);let ue=K[j];ue===void 0&&(ue=T.clone(),K[j]=ue,D.addEventListener("dispose",F)),T=ue}if(T.visible=D.visible,T.wireframe=D.wireframe,b===fs?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:v[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=o.properties.get(T);G.light=k}return T}function w(N,D,k,b,T){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===fs)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const j=e.update(N),K=N.material;if(Array.isArray(K)){const ue=j.groups;for(let J=0,q=ue.length;J<q;J++){const z=ue[J],te=K[z.materialIndex];if(te&&te.visible){const I=C(N,te,b,T);N.onBeforeShadow(o,N,D,k,j,I,z),o.renderBufferDirect(k,null,j,I,N,z),N.onAfterShadow(o,N,D,k,j,I,z)}}}else if(K.visible){const ue=C(N,K,b,T);N.onBeforeShadow(o,N,D,k,j,ue,null),o.renderBufferDirect(k,null,j,ue,N,null),N.onAfterShadow(o,N,D,k,j,ue,null)}}const G=N.children;for(let j=0,K=G.length;j<K;j++)w(G[j],D,k,b,T)}function F(N){N.target.removeEventListener("dispose",F);for(const k in h){const b=h[k],T=N.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const f2={[Pm]:Lm,[Dm]:Um,[Im]:Om,[vl]:Nm,[Lm]:Pm,[Um]:Dm,[Om]:Im,[Nm]:vl};function d2(o,e){function t(){let V=!1;const De=new en;let fe=null;const he=new en(0,0,0,0);return{setMask:function(Ie){fe!==Ie&&!V&&(o.colorMask(Ie,Ie,Ie,Ie),fe=Ie)},setLocked:function(Ie){V=Ie},setClear:function(Ie,Ue,pt,Ft,an){an===!0&&(Ie*=Ft,Ue*=Ft,pt*=Ft),De.set(Ie,Ue,pt,Ft),he.equals(De)===!1&&(o.clearColor(Ie,Ue,pt,Ft),he.copy(De))},reset:function(){V=!1,fe=null,he.set(-1,0,0,0)}}}function n(){let V=!1,De=!1,fe=null,he=null,Ie=null;return{setReversed:function(Ue){if(De!==Ue){const pt=e.get("EXT_clip_control");De?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ie;Ie=null,this.setClear(Ft)}De=Ue},getReversed:function(){return De},setTest:function(Ue){Ue?ge(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!V&&(o.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(De&&(Ue=f2[Ue]),he!==Ue){switch(Ue){case Pm:o.depthFunc(o.NEVER);break;case Lm:o.depthFunc(o.ALWAYS);break;case Dm:o.depthFunc(o.LESS);break;case vl:o.depthFunc(o.LEQUAL);break;case Im:o.depthFunc(o.EQUAL);break;case Nm:o.depthFunc(o.GEQUAL);break;case Um:o.depthFunc(o.GREATER);break;case Om:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}he=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){Ie!==Ue&&(De&&(Ue=1-Ue),o.clearDepth(Ue),Ie=Ue)},reset:function(){V=!1,fe=null,he=null,Ie=null,De=!1}}}function r(){let V=!1,De=null,fe=null,he=null,Ie=null,Ue=null,pt=null,Ft=null,an=null;return{setTest:function(ze){V||(ze?ge(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(ze){De!==ze&&!V&&(o.stencilMask(ze),De=ze)},setFunc:function(ze,$e,vt){(fe!==ze||he!==$e||Ie!==vt)&&(o.stencilFunc(ze,$e,vt),fe=ze,he=$e,Ie=vt)},setOp:function(ze,$e,vt){(Ue!==ze||pt!==$e||Ft!==vt)&&(o.stencilOp(ze,$e,vt),Ue=ze,pt=$e,Ft=vt)},setLocked:function(ze){V=ze},setClear:function(ze){an!==ze&&(o.clearStencil(ze),an=ze)},reset:function(){V=!1,De=null,fe=null,he=null,Ie=null,Ue=null,pt=null,Ft=null,an=null}}}const a=new t,u=new n,c=new r,f=new WeakMap,h=new WeakMap;let p={},v={},m=new WeakMap,_=[],E=null,S=!1,y=null,x=null,R=null,C=null,w=null,F=null,N=null,D=new zt(0,0,0),k=0,b=!1,T=null,H=null,G=null,j=null,K=null;const ue=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,q=0;const z=o.getParameter(o.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),J=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),J=q>=2);let te=null,I={};const O=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),be=new en().fromArray(O),Q=new en().fromArray(ie);function de(V,De,fe,he){const Ie=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(V,Ue),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let pt=0;pt<fe;pt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,he,0,o.RGBA,o.UNSIGNED_BYTE,Ie):o.texImage2D(De+pt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ie);return Ue}const ve={};ve[o.TEXTURE_2D]=de(o.TEXTURE_2D,o.TEXTURE_2D,1),ve[o.TEXTURE_CUBE_MAP]=de(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[o.TEXTURE_2D_ARRAY]=de(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ve[o.TEXTURE_3D]=de(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ge(o.DEPTH_TEST),u.setFunc(vl),ht(!1),ee(vx),ge(o.CULL_FACE),X(ao);function ge(V){p[V]!==!0&&(o.enable(V),p[V]=!0)}function we(V){p[V]!==!1&&(o.disable(V),p[V]=!1)}function Le(V,De){return v[V]!==De?(o.bindFramebuffer(V,De),v[V]=De,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=De),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=De),!0):!1}function Je(V,De){let fe=_,he=!1;if(V){fe=m.get(De),fe===void 0&&(fe=[],m.set(De,fe));const Ie=V.textures;if(fe.length!==Ie.length||fe[0]!==o.COLOR_ATTACHMENT0){for(let Ue=0,pt=Ie.length;Ue<pt;Ue++)fe[Ue]=o.COLOR_ATTACHMENT0+Ue;fe.length=Ie.length,he=!0}}else fe[0]!==o.BACK&&(fe[0]=o.BACK,he=!0);he&&o.drawBuffers(fe)}function Mt(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const ut={[Ho]:o.FUNC_ADD,[bT]:o.FUNC_SUBTRACT,[PT]:o.FUNC_REVERSE_SUBTRACT};ut[LT]=o.MIN,ut[DT]=o.MAX;const et={[IT]:o.ZERO,[NT]:o.ONE,[UT]:o.SRC_COLOR,[Rm]:o.SRC_ALPHA,[HT]:o.SRC_ALPHA_SATURATE,[zT]:o.DST_COLOR,[FT]:o.DST_ALPHA,[OT]:o.ONE_MINUS_SRC_COLOR,[bm]:o.ONE_MINUS_SRC_ALPHA,[BT]:o.ONE_MINUS_DST_COLOR,[kT]:o.ONE_MINUS_DST_ALPHA,[VT]:o.CONSTANT_COLOR,[GT]:o.ONE_MINUS_CONSTANT_COLOR,[WT]:o.CONSTANT_ALPHA,[XT]:o.ONE_MINUS_CONSTANT_ALPHA};function X(V,De,fe,he,Ie,Ue,pt,Ft,an,ze){if(V===ao){S===!0&&(we(o.BLEND),S=!1);return}if(S===!1&&(ge(o.BLEND),S=!0),V!==RT){if(V!==y||ze!==b){if((x!==Ho||w!==Ho)&&(o.blendEquation(o.FUNC_ADD),x=Ho,w=Ho),ze)switch(V){case ul:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ju:o.blendFunc(o.ONE,o.ONE);break;case xx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case yx:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ul:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ju:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case xx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case yx:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,C=null,F=null,N=null,D.set(0,0,0),k=0,y=V,b=ze}return}Ie=Ie||De,Ue=Ue||fe,pt=pt||he,(De!==x||Ie!==w)&&(o.blendEquationSeparate(ut[De],ut[Ie]),x=De,w=Ie),(fe!==R||he!==C||Ue!==F||pt!==N)&&(o.blendFuncSeparate(et[fe],et[he],et[Ue],et[pt]),R=fe,C=he,F=Ue,N=pt),(Ft.equals(D)===!1||an!==k)&&(o.blendColor(Ft.r,Ft.g,Ft.b,an),D.copy(Ft),k=an),y=V,b=!1}function Xt(V,De){V.side===ms?we(o.CULL_FACE):ge(o.CULL_FACE);let fe=V.side===Ui;De&&(fe=!fe),ht(fe),V.blending===ul&&V.transparent===!1?X(ao):X(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const he=V.stencilWrite;c.setTest(he),he&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Rt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){T!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),T=V)}function ee(V){V!==TT?(ge(o.CULL_FACE),V!==H&&(V===vx?o.cullFace(o.BACK):V===AT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),H=V}function We(V){V!==G&&(J&&o.lineWidth(V),G=V)}function Rt(V,De,fe){V?(ge(o.POLYGON_OFFSET_FILL),(j!==De||K!==fe)&&(o.polygonOffset(De,fe),j=De,K=fe)):we(o.POLYGON_OFFSET_FILL)}function je(V){V?ge(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function U(V){V===void 0&&(V=o.TEXTURE0+ue-1),te!==V&&(o.activeTexture(V),te=V)}function P(V,De,fe){fe===void 0&&(te===null?fe=o.TEXTURE0+ue-1:fe=te);let he=I[fe];he===void 0&&(he={type:void 0,texture:void 0},I[fe]=he),(he.type!==V||he.texture!==De)&&(te!==fe&&(o.activeTexture(fe),te=fe),o.bindTexture(V,De||ve[V]),he.type=V,he.texture=De)}function oe(){const V=I[te];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function _e(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(V){be.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),be.copy(V))}function Ve(V){Q.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function St(V,De){let fe=h.get(De);fe===void 0&&(fe=new WeakMap,h.set(De,fe));let he=fe.get(V);he===void 0&&(he=o.getUniformBlockIndex(De,V.name),fe.set(V,he))}function at(V,De){const he=h.get(De).get(V);f.get(De)!==he&&(o.uniformBlockBinding(De,he,V.__bindingPointIndex),f.set(De,he))}function Pt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},te=null,I={},v={},m=new WeakMap,_=[],E=null,S=!1,y=null,x=null,R=null,C=null,w=null,F=null,N=null,D=new zt(0,0,0),k=0,b=!1,T=null,H=null,G=null,j=null,K=null,be.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ge,disable:we,bindFramebuffer:Le,drawBuffers:Je,useProgram:Mt,setBlending:X,setMaterial:Xt,setFlipSided:ht,setCullFace:ee,setLineWidth:We,setPolygonOffset:Rt,setScissorTest:je,activeTexture:U,bindTexture:P,unbindTexture:oe,compressedTexImage2D:_e,compressedTexImage3D:me,texImage2D:Pe,texImage3D:ot,updateUBOMapping:St,uniformBlockBinding:at,texStorage2D:gt,texStorage3D:Me,texSubImage2D:pe,texSubImage3D:Ne,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:it,viewport:Ve,reset:Pt}}function py(o,e,t,n){const r=h2(n);switch(t){case tM:return o*e;case iM:return o*e;case rM:return o*e*2;case sM:return o*e/r.components*r.byteLength;case qg:return o*e/r.components*r.byteLength;case oM:return o*e*2/r.components*r.byteLength;case $g:return o*e*2/r.components*r.byteLength;case nM:return o*e*3/r.components*r.byteLength;case Ir:return o*e*4/r.components*r.byteLength;case Kg:return o*e*4/r.components*r.byteLength;case Jf:case ed:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case td:case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vm:case Wm:return Math.max(o,16)*Math.max(e,8)/4;case Hm:case Gm:return Math.max(o,8)*Math.max(e,8)/2;case Xm:case Ym:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case jm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $m:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Km:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Zm:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qm:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Jm:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case eg:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case tg:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ng:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ig:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case rg:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case sg:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case og:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ag:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case id:case lg:case ug:return Math.ceil(o/4)*Math.ceil(e/4)*16;case aM:case cg:return Math.ceil(o/4)*Math.ceil(e/4)*8;case fg:case dg:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h2(o){switch(o){case Es:case QS:return{byteLength:1,components:1};case qu:case JS:case Zu:return{byteLength:2,components:1};case Yg:case jg:return{byteLength:2,components:4};case ra:case Xg:case _s:return{byteLength:4,components:1};case eM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function p2(o,e,t,n,r,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Wt,p=new WeakMap;let v;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,P){return _?new OffscreenCanvas(U,P):_d("canvas")}function S(U,P,oe){let _e=1;const me=je(U);if((me.width>oe||me.height>oe)&&(_e=oe/Math.max(me.width,me.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pe=Math.floor(_e*me.width),Ne=Math.floor(_e*me.height);v===void 0&&(v=E(pe,Ne));const Ce=P?E(pe,Ne):v;return Ce.width=pe,Ce.height=Ne,Ce.getContext("2d").drawImage(U,0,0,pe,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+pe+"x"+Ne+")."),Ce}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(U,P,oe,_e,me=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pe=P;if(P===o.RED&&(oe===o.FLOAT&&(pe=o.R32F),oe===o.HALF_FLOAT&&(pe=o.R16F),oe===o.UNSIGNED_BYTE&&(pe=o.R8)),P===o.RED_INTEGER&&(oe===o.UNSIGNED_BYTE&&(pe=o.R8UI),oe===o.UNSIGNED_SHORT&&(pe=o.R16UI),oe===o.UNSIGNED_INT&&(pe=o.R32UI),oe===o.BYTE&&(pe=o.R8I),oe===o.SHORT&&(pe=o.R16I),oe===o.INT&&(pe=o.R32I)),P===o.RG&&(oe===o.FLOAT&&(pe=o.RG32F),oe===o.HALF_FLOAT&&(pe=o.RG16F),oe===o.UNSIGNED_BYTE&&(pe=o.RG8)),P===o.RG_INTEGER&&(oe===o.UNSIGNED_BYTE&&(pe=o.RG8UI),oe===o.UNSIGNED_SHORT&&(pe=o.RG16UI),oe===o.UNSIGNED_INT&&(pe=o.RG32UI),oe===o.BYTE&&(pe=o.RG8I),oe===o.SHORT&&(pe=o.RG16I),oe===o.INT&&(pe=o.RG32I)),P===o.RGB_INTEGER&&(oe===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),oe===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),oe===o.UNSIGNED_INT&&(pe=o.RGB32UI),oe===o.BYTE&&(pe=o.RGB8I),oe===o.SHORT&&(pe=o.RGB16I),oe===o.INT&&(pe=o.RGB32I)),P===o.RGBA_INTEGER&&(oe===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),oe===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),oe===o.UNSIGNED_INT&&(pe=o.RGBA32UI),oe===o.BYTE&&(pe=o.RGBA8I),oe===o.SHORT&&(pe=o.RGBA16I),oe===o.INT&&(pe=o.RGBA32I)),P===o.RGB&&oe===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),P===o.RGBA){const Ne=me?Td:Ht.getTransfer(_e);oe===o.FLOAT&&(pe=o.RGBA32F),oe===o.HALF_FLOAT&&(pe=o.RGBA16F),oe===o.UNSIGNED_BYTE&&(pe=Ne===Jt?o.SRGB8_ALPHA8:o.RGBA8),oe===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),oe===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function w(U,P){let oe;return U?P===null||P===ra||P===Sl?oe=o.DEPTH24_STENCIL8:P===_s?oe=o.DEPTH32F_STENCIL8:P===qu&&(oe=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ra||P===Sl?oe=o.DEPTH_COMPONENT24:P===_s?oe=o.DEPTH_COMPONENT32F:P===qu&&(oe=o.DEPTH_COMPONENT16),oe}function F(U,P){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Nr&&U.minFilter!==jr?Math.log2(Math.max(P.width,P.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?P.mipmaps.length:1}function N(U){const P=U.target;P.removeEventListener("dispose",N),k(P),P.isVideoTexture&&p.delete(P)}function D(U){const P=U.target;P.removeEventListener("dispose",D),T(P)}function k(U){const P=n.get(U);if(P.__webglInit===void 0)return;const oe=U.source,_e=m.get(oe);if(_e){const me=_e[P.__cacheKey];me.usedTimes--,me.usedTimes===0&&b(U),Object.keys(_e).length===0&&m.delete(oe)}n.remove(U)}function b(U){const P=n.get(U);o.deleteTexture(P.__webglTexture);const oe=U.source,_e=m.get(oe);delete _e[P.__cacheKey],u.memory.textures--}function T(U){const P=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(P.__webglFramebuffer[_e]))for(let me=0;me<P.__webglFramebuffer[_e].length;me++)o.deleteFramebuffer(P.__webglFramebuffer[_e][me]);else o.deleteFramebuffer(P.__webglFramebuffer[_e]);P.__webglDepthbuffer&&o.deleteRenderbuffer(P.__webglDepthbuffer[_e])}else{if(Array.isArray(P.__webglFramebuffer))for(let _e=0;_e<P.__webglFramebuffer.length;_e++)o.deleteFramebuffer(P.__webglFramebuffer[_e]);else o.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&o.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&o.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let _e=0;_e<P.__webglColorRenderbuffer.length;_e++)P.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(P.__webglColorRenderbuffer[_e]);P.__webglDepthRenderbuffer&&o.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const oe=U.textures;for(let _e=0,me=oe.length;_e<me;_e++){const pe=n.get(oe[_e]);pe.__webglTexture&&(o.deleteTexture(pe.__webglTexture),u.memory.textures--),n.remove(oe[_e])}n.remove(U)}let H=0;function G(){H=0}function j(){const U=H;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),H+=1,U}function K(U){const P=[];return P.push(U.wrapS),P.push(U.wrapT),P.push(U.wrapR||0),P.push(U.magFilter),P.push(U.minFilter),P.push(U.anisotropy),P.push(U.internalFormat),P.push(U.format),P.push(U.type),P.push(U.generateMipmaps),P.push(U.premultiplyAlpha),P.push(U.flipY),P.push(U.unpackAlignment),P.push(U.colorSpace),P.join()}function ue(U,P){const oe=n.get(U);if(U.isVideoTexture&&We(U),U.isRenderTargetTexture===!1&&U.version>0&&oe.__version!==U.version){const _e=U.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(oe,U,P);return}}t.bindTexture(o.TEXTURE_2D,oe.__webglTexture,o.TEXTURE0+P)}function J(U,P){const oe=n.get(U);if(U.version>0&&oe.__version!==U.version){Q(oe,U,P);return}t.bindTexture(o.TEXTURE_2D_ARRAY,oe.__webglTexture,o.TEXTURE0+P)}function q(U,P){const oe=n.get(U);if(U.version>0&&oe.__version!==U.version){Q(oe,U,P);return}t.bindTexture(o.TEXTURE_3D,oe.__webglTexture,o.TEXTURE0+P)}function z(U,P){const oe=n.get(U);if(U.version>0&&oe.__version!==U.version){de(oe,U,P);return}t.bindTexture(o.TEXTURE_CUBE_MAP,oe.__webglTexture,o.TEXTURE0+P)}const te={[zm]:o.REPEAT,[Xo]:o.CLAMP_TO_EDGE,[Bm]:o.MIRRORED_REPEAT},I={[Nr]:o.NEAREST,[tA]:o.NEAREST_MIPMAP_NEAREST,[xf]:o.NEAREST_MIPMAP_LINEAR,[jr]:o.LINEAR,[Tp]:o.LINEAR_MIPMAP_NEAREST,[Yo]:o.LINEAR_MIPMAP_LINEAR},O={[sA]:o.NEVER,[fA]:o.ALWAYS,[oA]:o.LESS,[uM]:o.LEQUAL,[aA]:o.EQUAL,[cA]:o.GEQUAL,[lA]:o.GREATER,[uA]:o.NOTEQUAL};function ie(U,P){if(P.type===_s&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===jr||P.magFilter===Tp||P.magFilter===xf||P.magFilter===Yo||P.minFilter===jr||P.minFilter===Tp||P.minFilter===xf||P.minFilter===Yo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,te[P.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,te[P.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,te[P.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,I[P.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,I[P.minFilter]),P.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Nr||P.minFilter!==xf&&P.minFilter!==Yo||P.type===_s&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function be(U,P){let oe=!1;U.__webglInit===void 0&&(U.__webglInit=!0,P.addEventListener("dispose",N));const _e=P.source;let me=m.get(_e);me===void 0&&(me={},m.set(_e,me));const pe=K(P);if(pe!==U.__cacheKey){me[pe]===void 0&&(me[pe]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,oe=!0),me[pe].usedTimes++;const Ne=me[U.__cacheKey];Ne!==void 0&&(me[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&b(P)),U.__cacheKey=pe,U.__webglTexture=me[pe].texture}return oe}function Q(U,P,oe){let _e=o.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),P.isData3DTexture&&(_e=o.TEXTURE_3D);const me=be(U,P),pe=P.source;t.bindTexture(_e,U.__webglTexture,o.TEXTURE0+oe);const Ne=n.get(pe);if(pe.version!==Ne.__version||me===!0){t.activeTexture(o.TEXTURE0+oe);const Ce=Ht.getPrimaries(Ht.workingColorSpace),Oe=P.colorSpace===Qs?null:Ht.getPrimaries(P.colorSpace),gt=P.colorSpace===Qs||Ce===Oe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,P.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,P.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Me=S(P.image,!1,r.maxTextureSize);Me=Rt(P,Me);const Pe=a.convert(P.format,P.colorSpace),ot=a.convert(P.type);let it=C(P.internalFormat,Pe,ot,P.colorSpace,P.isVideoTexture);ie(_e,P);let Ve;const St=P.mipmaps,at=P.isVideoTexture!==!0,Pt=Ne.__version===void 0||me===!0,V=pe.dataReady,De=F(P,Me);if(P.isDepthTexture)it=w(P.format===Ml,P.type),Pt&&(at?t.texStorage2D(o.TEXTURE_2D,1,it,Me.width,Me.height):t.texImage2D(o.TEXTURE_2D,0,it,Me.width,Me.height,0,Pe,ot,null));else if(P.isDataTexture)if(St.length>0){at&&Pt&&t.texStorage2D(o.TEXTURE_2D,De,it,St[0].width,St[0].height);for(let fe=0,he=St.length;fe<he;fe++)Ve=St[fe],at?V&&t.texSubImage2D(o.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,Pe,ot,Ve.data):t.texImage2D(o.TEXTURE_2D,fe,it,Ve.width,Ve.height,0,Pe,ot,Ve.data);P.generateMipmaps=!1}else at?(Pt&&t.texStorage2D(o.TEXTURE_2D,De,it,Me.width,Me.height),V&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Pe,ot,Me.data)):t.texImage2D(o.TEXTURE_2D,0,it,Me.width,Me.height,0,Pe,ot,Me.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){at&&Pt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,it,St[0].width,St[0].height,Me.depth);for(let fe=0,he=St.length;fe<he;fe++)if(Ve=St[fe],P.format!==Ir)if(Pe!==null)if(at){if(V)if(P.layerUpdates.size>0){const Ie=py(Ve.width,Ve.height,P.format,P.type);for(const Ue of P.layerUpdates){const pt=Ve.data.subarray(Ue*Ie/Ve.data.BYTES_PER_ELEMENT,(Ue+1)*Ie/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,Ue,Ve.width,Ve.height,1,Pe,pt)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,Me.depth,Pe,Ve.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,fe,it,Ve.width,Ve.height,Me.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?V&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,Me.depth,Pe,ot,Ve.data):t.texImage3D(o.TEXTURE_2D_ARRAY,fe,it,Ve.width,Ve.height,Me.depth,0,Pe,ot,Ve.data)}else{at&&Pt&&t.texStorage2D(o.TEXTURE_2D,De,it,St[0].width,St[0].height);for(let fe=0,he=St.length;fe<he;fe++)Ve=St[fe],P.format!==Ir?Pe!==null?at?V&&t.compressedTexSubImage2D(o.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,Pe,Ve.data):t.compressedTexImage2D(o.TEXTURE_2D,fe,it,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?V&&t.texSubImage2D(o.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,Pe,ot,Ve.data):t.texImage2D(o.TEXTURE_2D,fe,it,Ve.width,Ve.height,0,Pe,ot,Ve.data)}else if(P.isDataArrayTexture)if(at){if(Pt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,it,Me.width,Me.height,Me.depth),V)if(P.layerUpdates.size>0){const fe=py(Me.width,Me.height,P.format,P.type);for(const he of P.layerUpdates){const Ie=Me.data.subarray(he*fe/Me.data.BYTES_PER_ELEMENT,(he+1)*fe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Pe,ot,Ie)}P.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Pe,ot,Me.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,it,Me.width,Me.height,Me.depth,0,Pe,ot,Me.data);else if(P.isData3DTexture)at?(Pt&&t.texStorage3D(o.TEXTURE_3D,De,it,Me.width,Me.height,Me.depth),V&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Pe,ot,Me.data)):t.texImage3D(o.TEXTURE_3D,0,it,Me.width,Me.height,Me.depth,0,Pe,ot,Me.data);else if(P.isFramebufferTexture){if(Pt)if(at)t.texStorage2D(o.TEXTURE_2D,De,it,Me.width,Me.height);else{let fe=Me.width,he=Me.height;for(let Ie=0;Ie<De;Ie++)t.texImage2D(o.TEXTURE_2D,Ie,it,fe,he,0,Pe,ot,null),fe>>=1,he>>=1}}else if(St.length>0){if(at&&Pt){const fe=je(St[0]);t.texStorage2D(o.TEXTURE_2D,De,it,fe.width,fe.height)}for(let fe=0,he=St.length;fe<he;fe++)Ve=St[fe],at?V&&t.texSubImage2D(o.TEXTURE_2D,fe,0,0,Pe,ot,Ve):t.texImage2D(o.TEXTURE_2D,fe,it,Pe,ot,Ve);P.generateMipmaps=!1}else if(at){if(Pt){const fe=je(Me);t.texStorage2D(o.TEXTURE_2D,De,it,fe.width,fe.height)}V&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,ot,Me)}else t.texImage2D(o.TEXTURE_2D,0,it,Pe,ot,Me);y(P)&&x(_e),Ne.__version=pe.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function de(U,P,oe){if(P.image.length!==6)return;const _e=be(U,P),me=P.source;t.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+oe);const pe=n.get(me);if(me.version!==pe.__version||_e===!0){t.activeTexture(o.TEXTURE0+oe);const Ne=Ht.getPrimaries(Ht.workingColorSpace),Ce=P.colorSpace===Qs?null:Ht.getPrimaries(P.colorSpace),Oe=P.colorSpace===Qs||Ne===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,P.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,P.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const gt=P.isCompressedTexture||P.image[0].isCompressedTexture,Me=P.image[0]&&P.image[0].isDataTexture,Pe=[];for(let he=0;he<6;he++)!gt&&!Me?Pe[he]=S(P.image[he],!0,r.maxCubemapSize):Pe[he]=Me?P.image[he].image:P.image[he],Pe[he]=Rt(P,Pe[he]);const ot=Pe[0],it=a.convert(P.format,P.colorSpace),Ve=a.convert(P.type),St=C(P.internalFormat,it,Ve,P.colorSpace),at=P.isVideoTexture!==!0,Pt=pe.__version===void 0||_e===!0,V=me.dataReady;let De=F(P,ot);ie(o.TEXTURE_CUBE_MAP,P);let fe;if(gt){at&&Pt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,De,St,ot.width,ot.height);for(let he=0;he<6;he++){fe=Pe[he].mipmaps;for(let Ie=0;Ie<fe.length;Ie++){const Ue=fe[Ie];P.format!==Ir?it!==null?at?V&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,Ue.width,Ue.height,it,Ue.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,St,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,Ue.width,Ue.height,it,Ve,Ue.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,St,Ue.width,Ue.height,0,it,Ve,Ue.data)}}}else{if(fe=P.mipmaps,at&&Pt){fe.length>0&&De++;const he=je(Pe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,De,St,he.width,he.height)}for(let he=0;he<6;he++)if(Me){at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe[he].width,Pe[he].height,it,Ve,Pe[he].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,St,Pe[he].width,Pe[he].height,0,it,Ve,Pe[he].data);for(let Ie=0;Ie<fe.length;Ie++){const pt=fe[Ie].image[he].image;at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,pt.width,pt.height,it,Ve,pt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,St,pt.width,pt.height,0,it,Ve,pt.data)}}else{at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,it,Ve,Pe[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,St,it,Ve,Pe[he]);for(let Ie=0;Ie<fe.length;Ie++){const Ue=fe[Ie];at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,it,Ve,Ue.image[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,St,it,Ve,Ue.image[he])}}}y(P)&&x(o.TEXTURE_CUBE_MAP),pe.__version=me.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function ve(U,P,oe,_e,me,pe){const Ne=a.convert(oe.format,oe.colorSpace),Ce=a.convert(oe.type),Oe=C(oe.internalFormat,Ne,Ce,oe.colorSpace),gt=n.get(P),Me=n.get(oe);if(Me.__renderTarget=P,!gt.__hasExternalTextures){const Pe=Math.max(1,P.width>>pe),ot=Math.max(1,P.height>>pe);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?t.texImage3D(me,pe,Oe,Pe,ot,P.depth,0,Ne,Ce,null):t.texImage2D(me,pe,Oe,Pe,ot,0,Ne,Ce,null)}t.bindFramebuffer(o.FRAMEBUFFER,U),ee(P)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,me,Me.__webglTexture,0,ht(P)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,me,Me.__webglTexture,pe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(U,P,oe){if(o.bindRenderbuffer(o.RENDERBUFFER,U),P.depthBuffer){const _e=P.depthTexture,me=_e&&_e.isDepthTexture?_e.type:null,pe=w(P.stencilBuffer,me),Ne=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=ht(P);ee(P)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ce,pe,P.width,P.height):oe?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,pe,P.width,P.height):o.renderbufferStorage(o.RENDERBUFFER,pe,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ne,o.RENDERBUFFER,U)}else{const _e=P.textures;for(let me=0;me<_e.length;me++){const pe=_e[me],Ne=a.convert(pe.format,pe.colorSpace),Ce=a.convert(pe.type),Oe=C(pe.internalFormat,Ne,Ce,pe.colorSpace),gt=ht(P);oe&&ee(P)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,Oe,P.width,P.height):ee(P)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,Oe,P.width,P.height):o.renderbufferStorage(o.RENDERBUFFER,Oe,P.width,P.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(U,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,U),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=n.get(P.depthTexture);_e.__renderTarget=P,(!_e.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ue(P.depthTexture,0);const me=_e.__webglTexture,pe=ht(P);if(P.depthTexture.format===cl)ee(P)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,me,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,me,0);else if(P.depthTexture.format===Ml)ee(P)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,me,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Le(U){const P=n.get(U),oe=U.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==U.depthTexture){const _e=U.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),_e){const me=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,_e.removeEventListener("dispose",me)};_e.addEventListener("dispose",me),P.__depthDisposeCallback=me}P.__boundDepthTexture=_e}if(U.depthTexture&&!P.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");we(P.__webglFramebuffer,U)}else if(oe){P.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(o.FRAMEBUFFER,P.__webglFramebuffer[_e]),P.__webglDepthbuffer[_e]===void 0)P.__webglDepthbuffer[_e]=o.createRenderbuffer(),ge(P.__webglDepthbuffer[_e],U,!1);else{const me=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=P.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=o.createRenderbuffer(),ge(P.__webglDepthbuffer,U,!1);else{const _e=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,me=P.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,me),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,me)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(U,P,oe){const _e=n.get(U);P!==void 0&&ve(_e.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),oe!==void 0&&Le(U)}function Mt(U){const P=U.texture,oe=n.get(U),_e=n.get(P);U.addEventListener("dispose",D);const me=U.textures,pe=U.isWebGLCubeRenderTarget===!0,Ne=me.length>1;if(Ne||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=P.version,u.memory.textures++),pe){oe.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0){oe.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<P.mipmaps.length;Oe++)oe.__webglFramebuffer[Ce][Oe]=o.createFramebuffer()}else oe.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Ce=0;Ce<P.mipmaps.length;Ce++)oe.__webglFramebuffer[Ce]=o.createFramebuffer()}else oe.__webglFramebuffer=o.createFramebuffer();if(Ne)for(let Ce=0,Oe=me.length;Ce<Oe;Ce++){const gt=n.get(me[Ce]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),u.memory.textures++)}if(U.samples>0&&ee(U)===!1){oe.__webglMultisampledFramebuffer=o.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Ce=0;Ce<me.length;Ce++){const Oe=me[Ce];oe.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,oe.__webglColorRenderbuffer[Ce]);const gt=a.convert(Oe.format,Oe.colorSpace),Me=a.convert(Oe.type),Pe=C(Oe.internalFormat,gt,Me,Oe.colorSpace,U.isXRRenderTarget===!0),ot=ht(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ot,Pe,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,oe.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(oe.__webglDepthRenderbuffer=o.createRenderbuffer(),ge(oe.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pe){t.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),ie(o.TEXTURE_CUBE_MAP,P);for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0)for(let Oe=0;Oe<P.mipmaps.length;Oe++)ve(oe.__webglFramebuffer[Ce][Oe],U,P,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else ve(oe.__webglFramebuffer[Ce],U,P,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(P)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Ce=0,Oe=me.length;Ce<Oe;Ce++){const gt=me[Ce],Me=n.get(gt);t.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ie(o.TEXTURE_2D,gt),ve(oe.__webglFramebuffer,U,gt,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,0),y(gt)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ce,_e.__webglTexture),ie(Ce,P),P.mipmaps&&P.mipmaps.length>0)for(let Oe=0;Oe<P.mipmaps.length;Oe++)ve(oe.__webglFramebuffer[Oe],U,P,o.COLOR_ATTACHMENT0,Ce,Oe);else ve(oe.__webglFramebuffer,U,P,o.COLOR_ATTACHMENT0,Ce,0);y(P)&&x(Ce),t.unbindTexture()}U.depthBuffer&&Le(U)}function ut(U){const P=U.textures;for(let oe=0,_e=P.length;oe<_e;oe++){const me=P[oe];if(y(me)){const pe=R(U),Ne=n.get(me).__webglTexture;t.bindTexture(pe,Ne),x(pe),t.unbindTexture()}}}const et=[],X=[];function Xt(U){if(U.samples>0){if(ee(U)===!1){const P=U.textures,oe=U.width,_e=U.height;let me=o.COLOR_BUFFER_BIT;const pe=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=n.get(U),Ce=P.length>1;if(Ce)for(let Oe=0;Oe<P.length;Oe++)t.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Oe=0;Oe<P.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[Oe]);const gt=n.get(P[Oe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,gt,0)}o.blitFramebuffer(0,0,oe,_e,0,0,oe,_e,me,o.NEAREST),f===!0&&(et.length=0,X.length=0,et.push(o.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(et.push(pe),X.push(pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,X)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<P.length;Oe++){t.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[Oe]);const gt=n.get(P[Oe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,gt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const P=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[P])}}}function ht(U){return Math.min(r.maxSamples,U.samples)}function ee(U){const P=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function We(U){const P=u.render.frame;p.get(U)!==P&&(p.set(U,P),U.update())}function Rt(U,P){const oe=U.colorSpace,_e=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||oe!==wl&&oe!==Qs&&(Ht.getTransfer(oe)===Jt?(_e!==Ir||me!==Es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),P}function je(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=G,this.setTexture2D=ue,this.setTexture2DArray=J,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=Je,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ee}function m2(o,e){function t(n,r=Qs){let a;const u=Ht.getTransfer(r);if(n===Es)return o.UNSIGNED_BYTE;if(n===Yg)return o.UNSIGNED_SHORT_4_4_4_4;if(n===jg)return o.UNSIGNED_SHORT_5_5_5_1;if(n===eM)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===QS)return o.BYTE;if(n===JS)return o.SHORT;if(n===qu)return o.UNSIGNED_SHORT;if(n===Xg)return o.INT;if(n===ra)return o.UNSIGNED_INT;if(n===_s)return o.FLOAT;if(n===Zu)return o.HALF_FLOAT;if(n===tM)return o.ALPHA;if(n===nM)return o.RGB;if(n===Ir)return o.RGBA;if(n===iM)return o.LUMINANCE;if(n===rM)return o.LUMINANCE_ALPHA;if(n===cl)return o.DEPTH_COMPONENT;if(n===Ml)return o.DEPTH_STENCIL;if(n===sM)return o.RED;if(n===qg)return o.RED_INTEGER;if(n===oM)return o.RG;if(n===$g)return o.RG_INTEGER;if(n===Kg)return o.RGBA_INTEGER;if(n===Jf||n===ed||n===td||n===nd)if(u===Jt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Jf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Jf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ed)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===td)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hm||n===Vm||n===Gm||n===Wm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Hm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xm||n===Ym||n===jm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Xm||n===Ym)return u===Jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===jm)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qm||n===$m||n===Km||n===Zm||n===Qm||n===Jm||n===eg||n===tg||n===ng||n===ig||n===rg||n===sg||n===og||n===ag)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===qm)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$m)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Km)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zm)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qm)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jm)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eg)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tg)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ng)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ig)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rg)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sg)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===og)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ag)return u===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===id||n===lg||n===ug)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===id)return u===Jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ug)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aM||n===cg||n===fg||n===dg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===id)return a.COMPRESSED_RED_RGTC1_EXT;if(n===cg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sl?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class g2 extends Ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jo extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _2={type:"move"};class em{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,u=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const S of e.hand.values()){const y=t.getJointPose(S,n),x=this._getHandJoint(h,S);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=p.position.distanceTo(v.position),_=.02,E=.005;h.inputState.pinching&&m>_+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(_2)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const v2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x2=`
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

}`;class y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Oi,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ws({vertexShader:v2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new nc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S2 extends Tl{constructor(e,t){super();const n=this;let r=null,a=1,u=null,c="local-floor",f=1,h=null,p=null,v=null,m=null,_=null,E=null;const S=new y2,y=t.getContextAttributes();let x=null,R=null;const C=[],w=[],F=new Wt;let N=null;const D=new Ki;D.viewport=new en;const k=new Ki;k.viewport=new en;const b=[D,k],T=new g2;let H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=C[Q];return de===void 0&&(de=new em,C[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=C[Q];return de===void 0&&(de=new em,C[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=C[Q];return de===void 0&&(de=new em,C[Q]=de),de.getHandSpace()};function j(Q){const de=w.indexOf(Q.inputSource);if(de===-1)return;const ve=C[de];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,h||u),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",ue);for(let Q=0;Q<C.length;Q++){const de=w[Q];de!==null&&(w[Q]=null,C[Q].disconnect(de))}H=null,G=null,S.reset(),e.setRenderTarget(x),_=null,m=null,v=null,r=null,R=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",K),r.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new sa(_.framebufferWidth,_.framebufferHeight,{format:Ir,type:Es,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,ve=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?Ml:cl,ve=y.stencil?Sl:ra);const we={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};v=new XRWebGLBinding(r,t),m=v.createProjectionLayer(we),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new sa(m.textureWidth,m.textureHeight,{format:Ir,type:Es,depthTexture:new MM(m.textureWidth,m.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),h=null,u=await r.requestReferenceSpace(c),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ue(Q){for(let de=0;de<Q.removed.length;de++){const ve=Q.removed[de],ge=w.indexOf(ve);ge>=0&&(w[ge]=null,C[ge].disconnect(ve))}for(let de=0;de<Q.added.length;de++){const ve=Q.added[de];let ge=w.indexOf(ve);if(ge===-1){for(let Le=0;Le<C.length;Le++)if(Le>=w.length){w.push(ve),ge=Le;break}else if(w[Le]===null){w[Le]=ve,ge=Le;break}if(ge===-1)break}const we=C[ge];we&&we.connect(ve)}}const J=new ne,q=new ne;function z(Q,de,ve){J.setFromMatrixPosition(de.matrixWorld),q.setFromMatrixPosition(ve.matrixWorld);const ge=J.distanceTo(q),we=de.projectionMatrix.elements,Le=ve.projectionMatrix.elements,Je=we[14]/(we[10]-1),Mt=we[14]/(we[10]+1),ut=(we[9]+1)/we[5],et=(we[9]-1)/we[5],X=(we[8]-1)/we[0],Xt=(Le[8]+1)/Le[0],ht=Je*X,ee=Je*Xt,We=ge/(-X+Xt),Rt=We*-X;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Rt),Q.translateZ(We),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=Je+We,U=Mt+We,P=ht-Rt,oe=ee+(ge-Rt),_e=ut*Mt/U*je,me=et*Mt/U*je;Q.projectionMatrix.makePerspective(P,oe,_e,me,je,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function te(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let de=Q.near,ve=Q.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),T.near=k.near=D.near=de,T.far=k.far=D.far=ve,(H!==T.near||G!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,G=T.far),D.layers.mask=Q.layers.mask|2,k.layers.mask=Q.layers.mask|4,T.layers.mask=D.layers.mask|k.layers.mask;const ge=Q.parent,we=T.cameras;te(T,ge);for(let Le=0;Le<we.length;Le++)te(we[Le],ge);we.length===2?z(T,D,k):T.projectionMatrix.copy(D.projectionMatrix),I(Q,T,ge)};function I(Q,de,ve){ve===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hg*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&_===null))return f},this.setFoveation=function(Q){f=Q,m!==null&&(m.fixedFoveation=Q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(T)};let O=null;function ie(Q,de){if(p=de.getViewerPose(h||u),E=de,p!==null){const ve=p.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let ge=!1;ve.length!==T.cameras.length&&(T.cameras.length=0,ge=!0);for(let Le=0;Le<ve.length;Le++){const Je=ve[Le];let Mt=null;if(_!==null)Mt=_.getViewport(Je);else{const et=v.getViewSubImage(m,Je);Mt=et.viewport,Le===0&&(e.setRenderTargetTextures(R,et.colorTexture,m.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(R))}let ut=b[Le];ut===void 0&&(ut=new Ki,ut.layers.enable(Le),ut.viewport=new en,b[Le]=ut),ut.matrix.fromArray(Je.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Je.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Le===0&&(T.matrix.copy(ut.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ge===!0&&T.cameras.push(ut)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Le=v.getDepthInformation(ve[0]);Le&&Le.isValid&&Le.texture&&S.init(e,Le,r.renderState)}}for(let ve=0;ve<C.length;ve++){const ge=w[ve],we=C[ve];ge!==null&&we!==void 0&&we.update(ge,de,h||u)}O&&O(Q,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),E=null}const be=new yM;be.setAnimationLoop(ie),this.setAnimationLoop=function(Q){O=Q},this.dispose=function(){}}}const Uo=new Kr,M2=new fn;function E2(o,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,_M(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function r(y,x,R,C,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),v(y,x)):x.isMeshPhongMaterial?(a(y,x),p(y,x)):x.isMeshStandardMaterial?(a(y,x),m(y,x),x.isMeshPhysicalMaterial&&_(y,x,w)):x.isMeshMatcapMaterial?(a(y,x),E(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),S(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?f(y,x,R,C):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Ui&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Ui&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const R=e.get(x),C=R.envMap,w=R.envMapRotation;C&&(y.envMap.value=C,Uo.copy(w),Uo.x*=-1,Uo.y*=-1,Uo.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Uo.y*=-1,Uo.z*=-1),y.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(Uo)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function f(y,x,R,C){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=C*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function m(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function _(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Ui&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function S(y,x){const R=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function w2(o,e,t,n){let r={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,C){const w=C.program;n.uniformBlockBinding(R,w)}function h(R,C){let w=r[R.id];w===void 0&&(E(R),w=p(R),r[R.id]=w,R.addEventListener("dispose",y));const F=C.program;n.updateUBOMapping(R,F);const N=e.render.frame;a[R.id]!==N&&(m(R),a[R.id]=N)}function p(R){const C=v();R.__bindingPointIndex=C;const w=o.createBuffer(),F=R.__size,N=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,w),w}function v(){for(let R=0;R<c;R++)if(u.indexOf(R)===-1)return u.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const C=r[R.id],w=R.uniforms,F=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let N=0,D=w.length;N<D;N++){const k=Array.isArray(w[N])?w[N]:[w[N]];for(let b=0,T=k.length;b<T;b++){const H=k[b];if(_(H,N,b,F)===!0){const G=H.__offset,j=Array.isArray(H.value)?H.value:[H.value];let K=0;for(let ue=0;ue<j.length;ue++){const J=j[ue],q=S(J);typeof J=="number"||typeof J=="boolean"?(H.__data[0]=J,o.bufferSubData(o.UNIFORM_BUFFER,G+K,H.__data)):J.isMatrix3?(H.__data[0]=J.elements[0],H.__data[1]=J.elements[1],H.__data[2]=J.elements[2],H.__data[3]=0,H.__data[4]=J.elements[3],H.__data[5]=J.elements[4],H.__data[6]=J.elements[5],H.__data[7]=0,H.__data[8]=J.elements[6],H.__data[9]=J.elements[7],H.__data[10]=J.elements[8],H.__data[11]=0):(J.toArray(H.__data,K),K+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,G,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(R,C,w,F){const N=R.value,D=C+"_"+w;if(F[D]===void 0)return typeof N=="number"||typeof N=="boolean"?F[D]=N:F[D]=N.clone(),!0;{const k=F[D];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return F[D]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function E(R){const C=R.uniforms;let w=0;const F=16;for(let D=0,k=C.length;D<k;D++){const b=Array.isArray(C[D])?C[D]:[C[D]];for(let T=0,H=b.length;T<H;T++){const G=b[T],j=Array.isArray(G.value)?G.value:[G.value];for(let K=0,ue=j.length;K<ue;K++){const J=j[K],q=S(J),z=w%F,te=z%q.boundary,I=z+te;w+=te,I!==0&&F-I<q.storage&&(w+=F-I),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=q.storage}}}const N=w%F;return N>0&&(w+=F-N),R.__size=w,R.__cache={},this}function S(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function y(R){const C=R.target;C.removeEventListener("dispose",y);const w=u.indexOf(C.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(r[C.id]),delete r[C.id],delete a[C.id]}function x(){for(const R in r)o.deleteBuffer(r[R]);u=[],r={},a={}}return{bind:f,update:h,dispose:x}}class CM{constructor(e={}){const{canvas:t=hA(),context:n=null,depth:r=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=u;const E=new Uint32Array(4),S=new Int32Array(4);let y=null,x=null;const R=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qi,this.toneMapping=lo,this.toneMappingExposure=1;const w=this;let F=!1,N=0,D=0,k=null,b=-1,T=null;const H=new en,G=new en;let j=null;const K=new zt(0);let ue=0,J=t.width,q=t.height,z=1,te=null,I=null;const O=new en(0,0,J,q),ie=new en(0,0,J,q);let be=!1;const Q=new Qg;let de=!1,ve=!1;const ge=new fn,we=new fn,Le=new ne,Je=new en,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function et(){return k===null?z:1}let X=n;function Xt(L,Y){return t.getContext(L,Y)}try{const L={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wg}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),X===null){const Y="webgl2";if(X=Xt(Y,L),X===null)throw Xt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ht,ee,We,Rt,je,U,P,oe,_e,me,pe,Ne,Ce,Oe,gt,Me,Pe,ot,it,Ve,St,at,Pt,V;function De(){ht=new Pb(X),ht.init(),at=new m2(X,ht),ee=new wb(X,ht,e,at),We=new d2(X,ht),ee.reverseDepthBuffer&&m&&We.buffers.depth.setReversed(!0),Rt=new Ib(X),je=new ZP,U=new p2(X,ht,We,je,ee,at,Rt),P=new Ab(w),oe=new bb(w),_e=new BA(X),Pt=new Mb(X,_e),me=new Lb(X,_e,Rt,Pt),pe=new Ub(X,me,_e,Rt),it=new Nb(X,ee,U),Me=new Tb(je),Ne=new KP(w,P,oe,ht,ee,Pt,Me),Ce=new E2(w,je),Oe=new JP,gt=new s2(ht),ot=new Sb(w,P,oe,We,pe,_,f),Pe=new c2(w,pe,ee),V=new w2(X,Rt,ee,We),Ve=new Eb(X,ht,Rt),St=new Db(X,ht,Rt),Rt.programs=Ne.programs,w.capabilities=ee,w.extensions=ht,w.properties=je,w.renderLists=Oe,w.shadowMap=Pe,w.state=We,w.info=Rt}De();const fe=new S2(w,X);this.xr=fe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=ht.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ht.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(J,q,!1))},this.getSize=function(L){return L.set(J,q)},this.setSize=function(L,Y,se=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=L,q=Y,t.width=Math.floor(L*z),t.height=Math.floor(Y*z),se===!0&&(t.style.width=L+"px",t.style.height=Y+"px"),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(J*z,q*z).floor()},this.setDrawingBufferSize=function(L,Y,se){J=L,q=Y,z=se,t.width=Math.floor(L*se),t.height=Math.floor(Y*se),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(H)},this.getViewport=function(L){return L.copy(O)},this.setViewport=function(L,Y,se,ae){L.isVector4?O.set(L.x,L.y,L.z,L.w):O.set(L,Y,se,ae),We.viewport(H.copy(O).multiplyScalar(z).round())},this.getScissor=function(L){return L.copy(ie)},this.setScissor=function(L,Y,se,ae){L.isVector4?ie.set(L.x,L.y,L.z,L.w):ie.set(L,Y,se,ae),We.scissor(G.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(L){We.setScissorTest(be=L)},this.setOpaqueSort=function(L){te=L},this.setTransparentSort=function(L){I=L},this.getClearColor=function(L){return L.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(L=!0,Y=!0,se=!0){let ae=0;if(L){let Z=!1;if(k!==null){const Te=k.texture.format;Z=Te===Kg||Te===$g||Te===qg}if(Z){const Te=k.texture.type,xe=Te===Es||Te===ra||Te===qu||Te===Sl||Te===Yg||Te===jg,ke=ot.getClearColor(),He=ot.getClearAlpha(),mt=ke.r,_t=ke.g,Xe=ke.b;xe?(E[0]=mt,E[1]=_t,E[2]=Xe,E[3]=He,X.clearBufferuiv(X.COLOR,0,E)):(S[0]=mt,S[1]=_t,S[2]=Xe,S[3]=He,X.clearBufferiv(X.COLOR,0,S))}else ae|=X.COLOR_BUFFER_BIT}Y&&(ae|=X.DEPTH_BUFFER_BIT),se&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Oe.dispose(),gt.dispose(),je.dispose(),P.dispose(),oe.dispose(),pe.dispose(),Pt.dispose(),V.dispose(),Ne.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Fe),fe.removeEventListener("sessionend",ct),Ze.stop()};function he(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const L=Rt.autoReset,Y=Pe.enabled,se=Pe.autoUpdate,ae=Pe.needsUpdate,Z=Pe.type;De(),Rt.autoReset=L,Pe.enabled=Y,Pe.autoUpdate=se,Pe.needsUpdate=ae,Pe.type=Z}function Ue(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function pt(L){const Y=L.target;Y.removeEventListener("dispose",pt),Ft(Y)}function Ft(L){an(L),je.remove(L)}function an(L){const Y=je.get(L).programs;Y!==void 0&&(Y.forEach(function(se){Ne.releaseProgram(se)}),L.isShaderMaterial&&Ne.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,se,ae,Z,Te){Y===null&&(Y=Mt);const xe=Z.isMesh&&Z.matrixWorld.determinant()<0,ke=$n(L,Y,se,ae,Z);We.setMaterial(ae,xe);let He=se.index,mt=1;if(ae.wireframe===!0){if(He=me.getWireframeAttribute(se),He===void 0)return;mt=2}const _t=se.drawRange,Xe=se.attributes.position;let yt=_t.start*mt,Ot=(_t.start+_t.count)*mt;Te!==null&&(yt=Math.max(yt,Te.start*mt),Ot=Math.min(Ot,(Te.start+Te.count)*mt)),He!==null?(yt=Math.max(yt,0),Ot=Math.min(Ot,He.count)):Xe!=null&&(yt=Math.max(yt,0),Ot=Math.min(Ot,Xe.count));const Tt=Ot-yt;if(Tt<0||Tt===1/0)return;Pt.setup(Z,ae,ke,se,He);let ln,wt=Ve;if(He!==null&&(ln=_e.get(He),wt=St,wt.setIndex(ln)),Z.isMesh)ae.wireframe===!0?(We.setLineWidth(ae.wireframeLinewidth*et()),wt.setMode(X.LINES)):wt.setMode(X.TRIANGLES);else if(Z.isLine){let rt=ae.linewidth;rt===void 0&&(rt=1),We.setLineWidth(rt*et()),Z.isLineSegments?wt.setMode(X.LINES):Z.isLineLoop?wt.setMode(X.LINE_LOOP):wt.setMode(X.LINE_STRIP)}else Z.isPoints?wt.setMode(X.POINTS):Z.isSprite&&wt.setMode(X.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)wt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))wt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const rt=Z._multiDrawStarts,yr=Z._multiDrawCounts,Vt=Z._multiDrawCount,Kn=He?_e.get(He).bytesPerElement:1,Sr=je.get(ae).currentProgram.getUniforms();for(let bn=0;bn<Vt;bn++)Sr.setValue(X,"_gl_DrawID",bn),wt.render(rt[bn]/Kn,yr[bn])}else if(Z.isInstancedMesh)wt.renderInstances(yt,Tt,Z.count);else if(se.isInstancedBufferGeometry){const rt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,yr=Math.min(se.instanceCount,rt);wt.renderInstances(yt,Tt,yr)}else wt.render(yt,Tt)};function ze(L,Y,se){L.transparent===!0&&L.side===ms&&L.forceSinglePass===!1?(L.side=Ui,L.needsUpdate=!0,qt(L,Y,se),L.side=po,L.needsUpdate=!0,qt(L,Y,se),L.side=ms):qt(L,Y,se)}this.compile=function(L,Y,se=null){se===null&&(se=L),x=gt.get(se),x.init(Y),C.push(x),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),L!==se&&L.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const ae=new Set;return L.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let xe=0;xe<Te.length;xe++){const ke=Te[xe];ze(ke,se,Z),ae.add(ke)}else ze(Te,se,Z),ae.add(Te)}),C.pop(),x=null,ae},this.compileAsync=function(L,Y,se=null){const ae=this.compile(L,Y,se);return new Promise(Z=>{function Te(){if(ae.forEach(function(xe){je.get(xe).currentProgram.isReady()&&ae.delete(xe)}),ae.size===0){Z(L);return}setTimeout(Te,10)}ht.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let $e=null;function vt(L){$e&&$e(L)}function Fe(){Ze.stop()}function ct(){Ze.start()}const Ze=new yM;Ze.setAnimationLoop(vt),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(L){$e=L,fe.setAnimationLoop(L),L===null?Ze.stop():Ze.start()},fe.addEventListener("sessionstart",Fe),fe.addEventListener("sessionend",ct),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Y),Y=fe.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,Y,k),x=gt.get(L,C.length),x.init(Y),C.push(x),we.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(we),ve=this.localClippingEnabled,de=Me.init(this.clippingPlanes,ve),y=Oe.get(L,R.length),y.init(),R.push(y),fe.enabled===!0&&fe.isPresenting===!0){const Te=w.xr.getDepthSensingMesh();Te!==null&&lt(Te,Y,-1/0,w.sortObjects)}lt(L,Y,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(te,I),ut=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ut&&ot.addToRenderList(y,L),this.info.render.frame++,de===!0&&Me.beginShadows();const se=x.state.shadowsArray;Pe.render(se,L,Y),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,Z=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const Te=Y.cameras;if(Z.length>0)for(let xe=0,ke=Te.length;xe<ke;xe++){const He=Te[xe];Et(ae,Z,L,He)}ut&&ot.render(L);for(let xe=0,ke=Te.length;xe<ke;xe++){const He=Te[xe];sn(y,L,He,He.viewport)}}else Z.length>0&&Et(ae,Z,L,Y),ut&&ot.render(L),sn(y,L,Y);k!==null&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),L.isScene===!0&&L.onAfterRender(w,L,Y),Pt.resetDefaultState(),b=-1,T=null,C.pop(),C.length>0?(x=C[C.length-1],de===!0&&Me.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function lt(L,Y,se,ae){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Q.intersectsSprite(L)){ae&&Je.setFromMatrixPosition(L.matrixWorld).applyMatrix4(we);const xe=pe.update(L),ke=L.material;ke.visible&&y.push(L,xe,ke,se,Je.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Q.intersectsObject(L))){const xe=pe.update(L),ke=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Je.copy(L.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Je.copy(xe.boundingSphere.center)),Je.applyMatrix4(L.matrixWorld).applyMatrix4(we)),Array.isArray(ke)){const He=xe.groups;for(let mt=0,_t=He.length;mt<_t;mt++){const Xe=He[mt],yt=ke[Xe.materialIndex];yt&&yt.visible&&y.push(L,xe,yt,se,Je.z,Xe)}}else ke.visible&&y.push(L,xe,ke,se,Je.z,null)}}const Te=L.children;for(let xe=0,ke=Te.length;xe<ke;xe++)lt(Te[xe],Y,se,ae)}function sn(L,Y,se,ae){const Z=L.opaque,Te=L.transmissive,xe=L.transparent;x.setupLightsView(se),de===!0&&Me.setGlobalState(w.clippingPlanes,se),ae&&We.viewport(H.copy(ae)),Z.length>0&&Yt(Z,Y,se),Te.length>0&&Yt(Te,Y,se),xe.length>0&&Yt(xe,Y,se),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Et(L,Y,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new sa(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Zu:Es,minFilter:Yo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const Te=x.state.transmissionRenderTarget[ae.id],xe=ae.viewport||H;Te.setSize(xe.z,xe.w);const ke=w.getRenderTarget();w.setRenderTarget(Te),w.getClearColor(K),ue=w.getClearAlpha(),ue<1&&w.setClearColor(16777215,.5),w.clear(),ut&&ot.render(se);const He=w.toneMapping;w.toneMapping=lo;const mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),de===!0&&Me.setGlobalState(w.clippingPlanes,ae),Yt(L,se,ae),U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te),ht.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let Xe=0,yt=Y.length;Xe<yt;Xe++){const Ot=Y[Xe],Tt=Ot.object,ln=Ot.geometry,wt=Ot.material,rt=Ot.group;if(wt.side===ms&&Tt.layers.test(ae.layers)){const yr=wt.side;wt.side=Ui,wt.needsUpdate=!0,Sn(Tt,se,ae,ln,wt,rt),wt.side=yr,wt.needsUpdate=!0,_t=!0}}_t===!0&&(U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te))}w.setRenderTarget(ke),w.setClearColor(K,ue),mt!==void 0&&(ae.viewport=mt),w.toneMapping=He}function Yt(L,Y,se){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Te=L.length;Z<Te;Z++){const xe=L[Z],ke=xe.object,He=xe.geometry,mt=ae===null?xe.material:ae,_t=xe.group;ke.layers.test(se.layers)&&Sn(ke,Y,se,He,mt,_t)}}function Sn(L,Y,se,ae,Z,Te){L.onBeforeRender(w,Y,se,ae,Z,Te),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Z.onBeforeRender(w,Y,se,ae,L,Te),Z.transparent===!0&&Z.side===ms&&Z.forceSinglePass===!1?(Z.side=Ui,Z.needsUpdate=!0,w.renderBufferDirect(se,Y,ae,Z,L,Te),Z.side=po,Z.needsUpdate=!0,w.renderBufferDirect(se,Y,ae,Z,L,Te),Z.side=ms):w.renderBufferDirect(se,Y,ae,Z,L,Te),L.onAfterRender(w,Y,se,ae,Z,Te)}function qt(L,Y,se){Y.isScene!==!0&&(Y=Mt);const ae=je.get(L),Z=x.state.lights,Te=x.state.shadowsArray,xe=Z.state.version,ke=Ne.getParameters(L,Z.state,Te,Y,se),He=Ne.getProgramCacheKey(ke);let mt=ae.programs;ae.environment=L.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(L.isMeshStandardMaterial?oe:P).get(L.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,mt===void 0&&(L.addEventListener("dispose",pt),mt=new Map,ae.programs=mt);let _t=mt.get(He);if(_t!==void 0){if(ae.currentProgram===_t&&ae.lightsStateVersion===xe)return Lt(L,ke),_t}else ke.uniforms=Ne.getUniforms(L),L.onBeforeCompile(ke,w),_t=Ne.acquireProgram(ke,He),mt.set(He,_t),ae.uniforms=ke.uniforms;const Xe=ae.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),Lt(L,ke),ae.needsLights=Wn(L),ae.lightsStateVersion=xe,ae.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.directionalShadowMap.value=Z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotShadowMap.value=Z.state.spotShadowMap,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMap.value=Z.state.pointShadowMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ae.currentProgram=_t,ae.uniformsList=null,_t}function $t(L){if(L.uniformsList===null){const Y=L.currentProgram.getUniforms();L.uniformsList=rd.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function Lt(L,Y){const se=je.get(L);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function $n(L,Y,se,ae,Z){Y.isScene!==!0&&(Y=Mt),U.resetTextureUnits();const Te=Y.fog,xe=ae.isMeshStandardMaterial?Y.environment:null,ke=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:wl,He=(ae.isMeshStandardMaterial?oe:P).get(ae.envMap||xe),mt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,_t=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!se.morphAttributes.position,yt=!!se.morphAttributes.normal,Ot=!!se.morphAttributes.color;let Tt=lo;ae.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Tt=w.toneMapping);const ln=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,wt=ln!==void 0?ln.length:0,rt=je.get(ae),yr=x.state.lights;if(de===!0&&(ve===!0||L!==T)){const ui=L===T&&ae.id===b;Me.setState(ae,L,ui)}let Vt=!1;ae.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==yr.state.version||rt.outputColorSpace!==ke||Z.isBatchedMesh&&rt.batching===!1||!Z.isBatchedMesh&&rt.batching===!0||Z.isBatchedMesh&&rt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&rt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&rt.instancing===!1||!Z.isInstancedMesh&&rt.instancing===!0||Z.isSkinnedMesh&&rt.skinning===!1||!Z.isSkinnedMesh&&rt.skinning===!0||Z.isInstancedMesh&&rt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&rt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&rt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&rt.instancingMorph===!1&&Z.morphTexture!==null||rt.envMap!==He||ae.fog===!0&&rt.fog!==Te||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Me.numPlanes||rt.numIntersection!==Me.numIntersection)||rt.vertexAlphas!==mt||rt.vertexTangents!==_t||rt.morphTargets!==Xe||rt.morphNormals!==yt||rt.morphColors!==Ot||rt.toneMapping!==Tt||rt.morphTargetsCount!==wt)&&(Vt=!0):(Vt=!0,rt.__version=ae.version);let Kn=rt.currentProgram;Vt===!0&&(Kn=qt(ae,Y,Z));let Sr=!1,bn=!1,Or=!1;const tn=Kn.getUniforms(),sr=rt.uniforms;if(We.useProgram(Kn.program)&&(Sr=!0,bn=!0,Or=!0),ae.id!==b&&(b=ae.id,bn=!0),Sr||T!==L){We.buffers.depth.getReversed()?(ge.copy(L.projectionMatrix),mA(ge),gA(ge),tn.setValue(X,"projectionMatrix",ge)):tn.setValue(X,"projectionMatrix",L.projectionMatrix),tn.setValue(X,"viewMatrix",L.matrixWorldInverse);const or=tn.map.cameraPosition;or!==void 0&&or.setValue(X,Le.setFromMatrixPosition(L.matrixWorld)),ee.logarithmicDepthBuffer&&tn.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&tn.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),T!==L&&(T=L,bn=!0,Or=!0)}if(Z.isSkinnedMesh){tn.setOptional(X,Z,"bindMatrix"),tn.setOptional(X,Z,"bindMatrixInverse");const ui=Z.skeleton;ui&&(ui.boneTexture===null&&ui.computeBoneTexture(),tn.setValue(X,"boneTexture",ui.boneTexture,U))}Z.isBatchedMesh&&(tn.setOptional(X,Z,"batchingTexture"),tn.setValue(X,"batchingTexture",Z._matricesTexture,U),tn.setOptional(X,Z,"batchingIdTexture"),tn.setValue(X,"batchingIdTexture",Z._indirectTexture,U),tn.setOptional(X,Z,"batchingColorTexture"),Z._colorsTexture!==null&&tn.setValue(X,"batchingColorTexture",Z._colorsTexture,U));const Zr=se.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&it.update(Z,se,Kn),(bn||rt.receiveShadow!==Z.receiveShadow)&&(rt.receiveShadow=Z.receiveShadow,tn.setValue(X,"receiveShadow",Z.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(sr.envMap.value=He,sr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(sr.envMapIntensity.value=Y.environmentIntensity),bn&&(tn.setValue(X,"toneMappingExposure",w.toneMappingExposure),rt.needsLights&&Qt(sr,Or),Te&&ae.fog===!0&&Ce.refreshFogUniforms(sr,Te),Ce.refreshMaterialUniforms(sr,ae,z,q,x.state.transmissionRenderTarget[L.id]),rd.upload(X,$t(rt),sr,U)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(rd.upload(X,$t(rt),sr,U),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&tn.setValue(X,"center",Z.center),tn.setValue(X,"modelViewMatrix",Z.modelViewMatrix),tn.setValue(X,"normalMatrix",Z.normalMatrix),tn.setValue(X,"modelMatrix",Z.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const ui=ae.uniformsGroups;for(let or=0,yi=ui.length;or<yi;or++){const ic=ui[or];V.update(ic,Kn),V.bind(ic,Kn)}}return Kn}function Qt(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function Wn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(L,Y,se){je.get(L.texture).__webglTexture=Y,je.get(L.depthTexture).__webglTexture=se;const ae=je.get(L);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Y){const se=je.get(L);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,se=0){k=L,N=Y,D=se;let ae=!0,Z=null,Te=!1,xe=!1;if(L){const He=je.get(L);if(He.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(X.FRAMEBUFFER,null),ae=!1;else if(He.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(He.__hasExternalTextures)U.rebindTextures(L,je.get(L.texture).__webglTexture,je.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Xe=L.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&je.has(Xe)&&(L.width!==Xe.image.width||L.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}const mt=L.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(xe=!0);const _t=je.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(_t[Y])?Z=_t[Y][se]:Z=_t[Y],Te=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?Z=je.get(L).__webglMultisampledFramebuffer:Array.isArray(_t)?Z=_t[se]:Z=_t,H.copy(L.viewport),G.copy(L.scissor),j=L.scissorTest}else H.copy(O).multiplyScalar(z).floor(),G.copy(ie).multiplyScalar(z).floor(),j=be;if(We.bindFramebuffer(X.FRAMEBUFFER,Z)&&ae&&We.drawBuffers(L,Z),We.viewport(H),We.scissor(G),We.setScissorTest(j),Te){const He=je.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,se)}else if(xe){const He=je.get(L.texture),mt=Y||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,He.__webglTexture,se||0,mt)}b=-1},this.readRenderTargetPixels=function(L,Y,se,ae,Z,Te,xe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=je.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&xe!==void 0&&(ke=ke[xe]),ke){We.bindFramebuffer(X.FRAMEBUFFER,ke);try{const He=L.texture,mt=He.format,_t=He.type;if(!ee.textureFormatReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-ae&&se>=0&&se<=L.height-Z&&X.readPixels(Y,se,ae,Z,at.convert(mt),at.convert(_t),Te)}finally{const He=k!==null?je.get(k).__webglFramebuffer:null;We.bindFramebuffer(X.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(L,Y,se,ae,Z,Te,xe){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=je.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&xe!==void 0&&(ke=ke[xe]),ke){const He=L.texture,mt=He.format,_t=He.type;if(!ee.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=L.width-ae&&se>=0&&se<=L.height-Z){We.bindFramebuffer(X.FRAMEBUFFER,ke);const Xe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Xe),X.bufferData(X.PIXEL_PACK_BUFFER,Te.byteLength,X.STREAM_READ),X.readPixels(Y,se,ae,Z,at.convert(mt),at.convert(_t),0);const yt=k!==null?je.get(k).__webglFramebuffer:null;We.bindFramebuffer(X.FRAMEBUFFER,yt);const Ot=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await pA(X,Ot,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Xe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Te),X.deleteBuffer(Xe),X.deleteSync(Ot),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Y=null,se=0){L.isTexture!==!0&&(Eu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,L=arguments[1]);const ae=Math.pow(2,-se),Z=Math.floor(L.image.width*ae),Te=Math.floor(L.image.height*ae),xe=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;U.setTexture2D(L,0),X.copyTexSubImage2D(X.TEXTURE_2D,se,0,0,xe,ke,Z,Te),We.unbindTexture()},this.copyTextureToTexture=function(L,Y,se=null,ae=null,Z=0){L.isTexture!==!0&&(Eu("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,L=arguments[1],Y=arguments[2],Z=arguments[3]||0,se=null);let Te,xe,ke,He,mt,_t,Xe,yt,Ot;const Tt=L.isCompressedTexture?L.mipmaps[Z]:L.image;se!==null?(Te=se.max.x-se.min.x,xe=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,He=se.min.x,mt=se.min.y,_t=se.isBox3?se.min.z:0):(Te=Tt.width,xe=Tt.height,ke=Tt.depth||1,He=0,mt=0,_t=0),ae!==null?(Xe=ae.x,yt=ae.y,Ot=ae.z):(Xe=0,yt=0,Ot=0);const ln=at.convert(Y.format),wt=at.convert(Y.type);let rt;Y.isData3DTexture?(U.setTexture3D(Y,0),rt=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),rt=X.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),rt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const yr=X.getParameter(X.UNPACK_ROW_LENGTH),Vt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Kn=X.getParameter(X.UNPACK_SKIP_PIXELS),Sr=X.getParameter(X.UNPACK_SKIP_ROWS),bn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Tt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,He),X.pixelStorei(X.UNPACK_SKIP_ROWS,mt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,_t);const Or=L.isDataArrayTexture||L.isData3DTexture,tn=Y.isDataArrayTexture||Y.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const sr=je.get(L),Zr=je.get(Y),ui=je.get(sr.__renderTarget),or=je.get(Zr.__renderTarget);We.bindFramebuffer(X.READ_FRAMEBUFFER,ui.__webglFramebuffer),We.bindFramebuffer(X.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let yi=0;yi<ke;yi++)Or&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.get(L).__webglTexture,Z,_t+yi),L.isDepthTexture?(tn&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.get(Y).__webglTexture,Z,Ot+yi),X.blitFramebuffer(He,mt,Te,xe,Xe,yt,Te,xe,X.DEPTH_BUFFER_BIT,X.NEAREST)):tn?X.copyTexSubImage3D(rt,Z,Xe,yt,Ot+yi,He,mt,Te,xe):X.copyTexSubImage2D(rt,Z,Xe,yt,Ot+yi,He,mt,Te,xe);We.bindFramebuffer(X.READ_FRAMEBUFFER,null),We.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else tn?L.isDataTexture||L.isData3DTexture?X.texSubImage3D(rt,Z,Xe,yt,Ot,Te,xe,ke,ln,wt,Tt.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(rt,Z,Xe,yt,Ot,Te,xe,ke,ln,Tt.data):X.texSubImage3D(rt,Z,Xe,yt,Ot,Te,xe,ke,ln,wt,Tt):L.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Z,Xe,yt,Te,xe,ln,wt,Tt.data):L.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Z,Xe,yt,Tt.width,Tt.height,ln,Tt.data):X.texSubImage2D(X.TEXTURE_2D,Z,Xe,yt,Te,xe,ln,wt,Tt);X.pixelStorei(X.UNPACK_ROW_LENGTH,yr),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Vt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Kn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Sr),X.pixelStorei(X.UNPACK_SKIP_IMAGES,bn),Z===0&&Y.generateMipmaps&&X.generateMipmap(rt),We.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,se=null,ae=null,Z=0){return L.isTexture!==!0&&(Eu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,L=arguments[2],Y=arguments[3],Z=arguments[4]||0),Eu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Y,se,ae,Z)},this.initRenderTarget=function(L){je.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),We.unbindTexture()},this.resetState=function(){N=0,D=0,k=null,We.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ht._getUnpackColorSpace()}}class RM extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mg extends aa{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vd=new ne,xd=new ne,my=new fn,pu=new Zg,Bf=new tc,tm=new ne,gy=new ne;class _y extends li{constructor(e=new Fi,t=new mg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)vd.fromBufferAttribute(t,r-1),xd.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=vd.distanceTo(xd);e.setAttribute("lineDistance",new Ur(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bf.copy(n.boundingSphere),Bf.applyMatrix4(r),Bf.radius+=a,e.ray.intersectsSphere(Bf)===!1)return;my.copy(r).invert(),pu.copy(e.ray).applyMatrix4(my);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const _=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let S=_,y=E-1;S<y;S+=h){const x=p.getX(S),R=p.getX(S+1),C=Hf(this,e,pu,f,x,R);C&&t.push(C)}if(this.isLineLoop){const S=p.getX(E-1),y=p.getX(_),x=Hf(this,e,pu,f,S,y);x&&t.push(x)}}else{const _=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let S=_,y=E-1;S<y;S+=h){const x=Hf(this,e,pu,f,S,S+1);x&&t.push(x)}if(this.isLineLoop){const S=Hf(this,e,pu,f,E-1,_);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Hf(o,e,t,n,r,a){const u=o.geometry.attributes.position;if(vd.fromBufferAttribute(u,r),xd.fromBufferAttribute(u,a),t.distanceSqToSegment(vd,xd,tm,gy)>n)return;tm.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(tm);if(!(f<e.near||f>e.far))return{distance:f,point:gy.clone().applyMatrix4(o.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:o}}class e_ extends aa{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vy=new fn,gg=new Zg,Vf=new tc,Gf=new ne;class bM extends li{constructor(e=new Fi,t=new e_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vf.copy(n.boundingSphere),Vf.applyMatrix4(r),Vf.radius+=a,e.ray.intersectsSphere(Vf)===!1)return;vy.copy(r).invert(),gg.copy(e.ray).applyMatrix4(vy);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=n.index,v=n.attributes.position;if(h!==null){const m=Math.max(0,u.start),_=Math.min(h.count,u.start+u.count);for(let E=m,S=_;E<S;E++){const y=h.getX(E);Gf.fromBufferAttribute(v,y),xy(Gf,y,f,r,e,t,this)}}else{const m=Math.max(0,u.start),_=Math.min(v.count,u.start+u.count);for(let E=m,S=_;E<S;E++)Gf.fromBufferAttribute(v,E),xy(Gf,E,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function xy(o,e,t,n,r,a,u){const c=gg.distanceSqToPoint(o);if(c<t){const f=new ne;gg.closestPointToPoint(o,f),f.applyMatrix4(n);const h=r.ray.origin.distanceTo(f);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class tl extends Fi{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(u+c,Math.PI);let h=0;const p=[],v=new ne,m=new ne,_=[],E=[],S=[],y=[];for(let x=0;x<=n;x++){const R=[],C=x/n;let w=0;x===0&&u===0?w=.5/t:x===n&&f===Math.PI&&(w=-.5/t);for(let F=0;F<=t;F++){const N=F/t;v.x=-e*Math.cos(r+N*a)*Math.sin(u+C*c),v.y=e*Math.cos(u+C*c),v.z=e*Math.sin(r+N*a)*Math.sin(u+C*c),E.push(v.x,v.y,v.z),m.copy(v).normalize(),S.push(m.x,m.y,m.z),y.push(N+w,1-C),R.push(h++)}p.push(R)}for(let x=0;x<n;x++)for(let R=0;R<t;R++){const C=p[x][R+1],w=p[x][R],F=p[x+1][R],N=p[x+1][R+1];(x!==0||u>0)&&_.push(C,w,N),(x!==n-1||f<Math.PI)&&_.push(w,F,N)}this.setIndex(_),this.setAttribute("position",new Ur(E,3)),this.setAttribute("normal",new Ur(S,3)),this.setAttribute("uv",new Ur(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class T2 extends aa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lM,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PM extends li{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const nm=new fn,yy=new ne,Sy=new ne;class A2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qg,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yy.setFromMatrixPosition(e.matrixWorld),t.position.copy(yy),Sy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sy),t.updateMatrixWorld(),nm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nm),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const My=new fn,mu=new ne,im=new ne;class C2 extends A2{constructor(){super(new Ki(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new en(2,1,1,1),new en(0,1,1,1),new en(3,1,1,1),new en(1,1,1,1),new en(3,0,1,1),new en(1,0,1,1)],this._cubeDirections=[new ne(1,0,0),new ne(-1,0,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,1,0),new ne(0,-1,0)],this._cubeUps=[new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,0,1),new ne(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),mu.setFromMatrixPosition(e.matrixWorld),n.position.copy(mu),im.copy(n.position),im.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(im),n.updateMatrixWorld(),r.makeTranslation(-mu.x,-mu.y,-mu.z),My.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(My)}}class Ey extends PM{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new C2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class R2 extends PM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class LM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wy();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wy(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wg);function b2(){const o=nt.useRef(null);return nt.useEffect(()=>{const e=o.current;if(!e)return;const t=new CM({antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(e.clientWidth,e.clientHeight),e.appendChild(t.domElement);const n=new RM,r=e.clientWidth/e.clientHeight,a=20,u=new SM(-a*r/2,a*r/2,a/2,-a/2,.1,100);u.position.z=10;const c=40,f=c*c,h=.5,p=(c-1)*h/2,v=new Float32Array(f*3),m=new Float32Array(f*3),_=new Float32Array(f*3),E=new Float32Array(f),S=new zt(62975);for(let H=0;H<c;H++)for(let G=0;G<c;G++){const j=H*c+G,K=j*3,ue=H*h-p,J=G*h-p;v[K]=ue,v[K+1]=J,v[K+2]=0,m[K]=ue,m[K+1]=J,m[K+2]=0,_[K]=S.r,_[K+1]=S.g,_[K+2]=S.b,E[j]=Math.random()*Math.PI*2}const y=new Fi;y.setAttribute("position",new nr(m,3)),y.setAttribute("color",new nr(_,3));const x=new e_({size:2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.7,blending:ju,depthWrite:!1}),R=new bM(y,x);n.add(R);const C=new Wt(9999,9999);function w(H){if(!e)return;const G=e.getBoundingClientRect(),j=(H.clientX-G.left)/G.width*2-1,K=-((H.clientY-G.top)/G.height)*2+1;C.x=j*(a*r)*.5,C.y=K*a*.5}window.addEventListener("mousemove",w);function F(){if(!e)return;const H=e.clientWidth,G=e.clientHeight,j=H/G;u.left=-a*j/2,u.right=a*j/2,u.top=a/2,u.bottom=-a/2,u.updateProjectionMatrix(),t.setSize(H,G)}window.addEventListener("resize",F);const N=new LM;let D;const k=2.5,b=.8;function T(){D=requestAnimationFrame(T);const H=N.getElapsedTime(),G=y.getAttribute("position"),j=y.getAttribute("color");for(let K=0;K<f;K++){const ue=K*3,J=v[ue],q=v[ue+1],z=.4+.6*(.5+.5*Math.sin(H*1.5+E[K]));j.array[ue]=S.r*z,j.array[ue+1]=S.g*z,j.array[ue+2]=S.b*z;const te=J-C.x,I=q-C.y,O=Math.sqrt(te*te+I*I);let ie=0,be=0;if(O<k&&O>.001){const Q=(1-O/k)*b;ie=te/O*Q,be=I/O*Q}G.array[ue]=J+ie,G.array[ue+1]=q+be}G.needsUpdate=!0,j.needsUpdate=!0,t.render(n,u)}return T(),()=>{cancelAnimationFrame(D),window.removeEventListener("mousemove",w),window.removeEventListener("resize",F),y.dispose(),x.dispose(),t.dispose(),e.contains(t.domElement)&&e.removeChild(t.domElement)}},[]),Re.jsx("div",{ref:o,className:"absolute inset-0 opacity-40 pointer-events-none",style:{zIndex:0},"aria-hidden":"true"})}const P2=()=>{const o=nt.useRef(null);return nt.useEffect(()=>{if(!o.current)return;const e=o.current,t=new CM({antialias:!0,alpha:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.outputColorSpace=qi,e.appendChild(t.domElement);const n=new RM,r=new Ki(45,e.clientWidth/e.clientHeight,.1,100);r.position.set(0,0,5.5),n.add(new R2(16777215,.2));const a=new Ey(62975,1.5);a.position.set(-3,2,2),n.add(a);const u=new Ey(16777215,.4);u.position.set(3,-1,3),n.add(u);const c=new jo;n.add(c);const f=new jo;c.add(f);const h=new tl(1.2,64,64),p=new T2({color:2068,emissive:62975,emissiveIntensity:.15,roughness:.1,metalness:.9});f.add(new vi(h,p));const v=new tl(1.25,24,24),m=new Ja({color:62975,wireframe:!0,transparent:!0,opacity:.12});f.add(new vi(v,m));const _=[{radius:1.8,tiltX:Math.PI*.15,tiltZ:0,opacity:.25,speed:.004,cycle:4},{radius:2.1,tiltX:Math.PI*.5,tiltZ:Math.PI*.3,opacity:.15,speed:-.003,cycle:6},{radius:2.5,tiltX:Math.PI*.7,tiltZ:Math.PI*.6,opacity:.08,speed:.002,cycle:8}],E=[];for(const q of _){const z=new jo;z.rotation.x=q.tiltX,z.rotation.z=q.tiltZ;const te=[];for(let de=0;de<=360;de++){const ve=de/360*Math.PI*2;te.push(new ne(Math.cos(ve)*q.radius,0,Math.sin(ve)*q.radius))}const I=new Fi().setFromPoints(te);z.add(new _y(I,new mg({color:62975,transparent:!0,opacity:q.opacity})));const O=new tl(.035,12,12),ie=new Ja({color:62975}),be=new vi(new tl(.07,12,12),new Ja({color:62975,transparent:!0,opacity:.25,blending:ju,depthWrite:!1})),Q=new vi(O,ie);Q.add(be),Q.position.set(q.radius,0,0),z.add(Q),c.add(z),E.push({group:z,dot:Q,radius:q.radius,speed:q.speed,dotCycleDuration:q.cycle,dotAngle:0})}const S=80,y=new Float32Array(S*3);for(let q=0;q<S;q++){const z=Math.random()*Math.PI*2,te=Math.acos(2*Math.random()-1),I=1.8+Math.random()*1.7;y[q*3]=I*Math.sin(te)*Math.cos(z),y[q*3+1]=I*Math.sin(te)*Math.sin(z),y[q*3+2]=I*Math.cos(te)}const x=new Fi;x.setAttribute("position",new nr(y,3));const R=new e_({color:62975,size:.018,transparent:!0,opacity:.3,blending:ju,depthWrite:!1});c.add(new bM(x,R));const C=new nc(3,3),w=new ws({transparent:!0,depthWrite:!1,uniforms:{},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        void main() {
          vec2 center = vUv - 0.5;
          float dist = length(center) * 2.0;
          float alpha = smoothstep(1.0, 0.0, dist) * 0.08;
          gl_FragColor = vec4(0.0, 0.96, 1.0, alpha);
        }
      `}),F=new vi(C,w);F.position.z=-.5,n.add(F);const N=[],D=[new ne(0,1,0),new ne(1,0,0),new ne(0,-1,0),new ne(-1,0,0)];for(let q=0;q<4;q++){const z=D[q],te=z.clone().multiplyScalar(1.25),I=z.clone().multiplyScalar(1.25+.8),O=new mg({color:62975,transparent:!0,opacity:.4}),ie=new Fi().setFromPoints([te,I]),be=new _y(ie,O);f.add(be);const Q=new Ja({color:62975,transparent:!0,opacity:.4}),de=new vi(new Al(.04,.04,.04),Q);de.position.copy(I),f.add(de),N.push({line:be,marker:de,lineMat:O,markerMat:Q,phaseOffset:q*Math.PI/2})}const k={x:0,y:0},b={x:0,y:0},T=8*Math.PI/180,H=q=>{k.x=(q.clientX/window.innerWidth-.5)*2,k.y=-(q.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",H);const G=()=>window.innerWidth<768?.7:1,j=new LM;let K;const ue=()=>{K=requestAnimationFrame(ue);const q=j.getElapsedTime();f.rotation.y+=.0015;const z=k.y*T,te=k.x*T;b.x+=(z-b.x)*.03,b.y+=(te-b.y)*.03,c.rotation.x=b.x,c.rotation.y=b.y;for(const O of E)O.group.rotation.y+=O.speed,O.dotAngle=q%O.dotCycleDuration/O.dotCycleDuration*Math.PI*2,O.dot.position.set(Math.cos(O.dotAngle)*O.radius,0,Math.sin(O.dotAngle)*O.radius);for(const O of N){const ie=.2+(Math.sin(q*1.5+O.phaseOffset)*.5+.5)*.4;O.lineMat.opacity=ie,O.markerMat.opacity=ie}F.lookAt(r.position);const I=G();c.scale.setScalar(I),t.render(n,r)};ue();const J=()=>{if(!e)return;const q=e.clientWidth,z=e.clientHeight;r.aspect=q/z,r.updateProjectionMatrix(),t.setSize(q,z)};return window.addEventListener("resize",J),()=>{cancelAnimationFrame(K),window.removeEventListener("mousemove",H),window.removeEventListener("resize",J),n.traverse(q=>{var z;if(q.isMesh||q.isLine){const te=q;(z=te.geometry)==null||z.dispose();const I=te.material;Array.isArray(I)?I.forEach(O=>O.dispose()):I==null||I.dispose()}}),x.dispose(),R.dispose(),t.dispose(),e.contains(t.domElement)&&e.removeChild(t.domElement)}},[]),Re.jsx("div",{ref:o,style:{width:"100%",height:"100%",position:"relative"}})};function L2(){return Re.jsxs("div",{"data-anim":"scroll-indicator",className:"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0",style:{zIndex:10},children:[Re.jsx("svg",{className:"w-5 h-5 text-[#00f5ff] animate-[hero-bounce_1.5s_ease-in-out_infinite]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Re.jsx("polyline",{points:"6 9 12 15 18 9"})}),Re.jsx("span",{className:"absolute -right-12 top-1/2 font-[JetBrains_Mono] text-[10px] tracking-widest text-[var(--text-secondary,#888888)] select-none",style:{transform:"rotate(90deg) translateX(-50%)",transformOrigin:"center center"},children:"SCROLL"})]})}function D2(){const o=nt.useRef(null),[e,t]=nt.useState(!1);return nt.useEffect(()=>{const n=Nn.context(()=>{const r=setTimeout(()=>t(!0),300);return()=>clearTimeout(r)},o);return()=>n.revert()},[]),Re.jsxs("section",{id:"hero",ref:o,className:"relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden",style:{backgroundColor:"var(--bg-primary, #050505)"},children:[Re.jsx(b2,{}),Re.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] pointer-events-none rounded-full",style:{background:"radial-gradient(circle, rgba(0, 245, 255, 0.15) 0%, transparent 70%)",zIndex:1,animation:"radial-glow-pulse 3s ease-in-out infinite alternate"}}),Re.jsx("div",{className:"absolute right-[10%] md:right-[20%] bottom-[10%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] pointer-events-none rounded-full",style:{background:"radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 60%)",zIndex:1}}),Re.jsx("div",{className:"relative z-10 flex items-center justify-start w-full md:w-[50%] px-6 md:px-16 pt-[100px] pb-12 md:py-0 md:pt-[80px] min-h-[50vh] md:min-h-0",children:Re.jsx(wT,{startAnimation:e,onAnimationComplete:()=>{}})}),Re.jsx("div",{className:"relative z-10 w-full md:w-[50%] h-[50vh] md:h-screen",children:Re.jsx(P2,{})}),Re.jsx(L2,{})]})}const I2=nt.lazy(()=>$u(()=>import("./About-CpJuhlHF.js"),__vite__mapDeps([0,1]))),N2=nt.lazy(()=>$u(()=>import("./Projects-BgTfUPzB.js"),__vite__mapDeps([2,1]))),U2=nt.lazy(()=>$u(()=>import("./Experience-1scfnchi.js"),__vite__mapDeps([3,1]))),O2=nt.lazy(()=>$u(()=>import("./Certifications-64D_k04-.js"),__vite__mapDeps([4,1]))),F2=nt.lazy(()=>$u(()=>import("./Contact-CK8gwbUx.js"),[]));function k2(){const[o,e]=nt.useState(!1),t=vT();return nt.useEffect(()=>{t&&(o?t.start():t.stop())},[t,o]),Re.jsxs(Re.Fragment,{children:[Re.jsx(xT,{}),Re.jsx(MT,{onComplete:()=>e(!0)}),Re.jsx(ST,{visible:o}),Re.jsxs("main",{className:"noise-overlay min-h-screen bg-[#050505] text-[#f0f0f0] overflow-x-hidden selection:bg-[#00f5ff22] selection:text-white",children:[Re.jsx(D2,{}),Re.jsxs(nt.Suspense,{fallback:Re.jsx("div",{className:"w-full h-screen bg-[#050505] flex items-center justify-center font-mono text-[var(--accent)]",children:"LOADING EXPERIENCE..."}),children:[Re.jsx(I2,{}),Re.jsx(N2,{}),Re.jsx(U2,{}),Re.jsx(O2,{}),Re.jsx(F2,{})]})]})]})}M1.createRoot(document.getElementById("root")).render(Re.jsx(m1.StrictMode,{children:Re.jsx(k2,{})}));export{Ut as S,Nn as g,Re as j,nt as r};
