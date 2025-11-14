(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var ah={exports:{}},Do={};var wx;function BS(){if(wx)return Do;wx=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var Dx;function IS(){return Dx||(Dx=1,ah.exports=BS()),ah.exports}var xt=IS(),rh={exports:{}},lt={};var Ux;function HS(){if(Ux)return lt;Ux=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function _(O,ie,Se){this.props=O,this.context=ie,this.refs=y,this.updater=Se||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=_.prototype;function U(O,ie,Se){this.props=O,this.context=ie,this.refs=y,this.updater=Se||E}var z=U.prototype=new D;z.constructor=U,A(z,_.prototype),z.isPureReactComponent=!0;var k=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(O,ie,Se){var Te=Se.ref;return{$$typeof:s,type:O,key:ie,ref:Te!==void 0?Te:null,props:Se}}function C(O,ie){return w(O.type,ie,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function te(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return ie[Se]})}var se=/\/+/g;function he(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?te(""+O.key):ie.toString(36)}function ce(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,ie,Se,Te,Ne){var ee=typeof O;(ee==="undefined"||ee==="boolean")&&(O=null);var oe=!1;if(O===null)oe=!0;else switch(ee){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(O.$$typeof){case s:case t:oe=!0;break;case x:return oe=O._init,F(oe(O._payload),ie,Se,Te,Ne)}}if(oe)return Ne=Ne(O),oe=Te===""?"."+he(O,0):Te,k(Ne)?(Se="",oe!=null&&(Se=oe.replace(se,"$&/")+"/"),F(Ne,ie,Se,"",function(He){return He})):Ne!=null&&(V(Ne)&&(Ne=C(Ne,Se+(Ne.key==null||O&&O.key===Ne.key?"":(""+Ne.key).replace(se,"$&/")+"/")+oe)),ie.push(Ne)),1;oe=0;var we=Te===""?".":Te+":";if(k(O))for(var ze=0;ze<O.length;ze++)Te=O[ze],ee=we+he(Te,ze),oe+=F(Te,ie,Se,ee,Ne);else if(ze=M(O),typeof ze=="function")for(O=ze.call(O),ze=0;!(Te=O.next()).done;)Te=Te.value,ee=we+he(Te,ze++),oe+=F(Te,ie,Se,ee,Ne);else if(ee==="object"){if(typeof O.then=="function")return F(ce(O),ie,Se,Te,Ne);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return oe}function Y(O,ie,Se){if(O==null)return O;var Te=[],Ne=0;return F(O,Te,"","",function(ee){return ie.call(Se,ee,Ne++)}),Te}function H(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var _e=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ve={map:Y,forEach:function(O,ie,Se){Y(O,function(){ie.apply(this,arguments)},Se)},count:function(O){var ie=0;return Y(O,function(){ie++}),ie},toArray:function(O){return Y(O,function(ie){return ie})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return lt.Activity=g,lt.Children=ve,lt.Component=_,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=U,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,lt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},lt.cache=function(O){return function(){return O.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(O,ie,Se){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Te=A({},O.props),Ne=O.key;if(ie!=null)for(ee in ie.key!==void 0&&(Ne=""+ie.key),ie)!W.call(ie,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&ie.ref===void 0||(Te[ee]=ie[ee]);var ee=arguments.length-2;if(ee===1)Te.children=Se;else if(1<ee){for(var oe=Array(ee),we=0;we<ee;we++)oe[we]=arguments[we+2];Te.children=oe}return w(O.type,Ne,Te)},lt.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},lt.createElement=function(O,ie,Se){var Te,Ne={},ee=null;if(ie!=null)for(Te in ie.key!==void 0&&(ee=""+ie.key),ie)W.call(ie,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Ne[Te]=ie[Te]);var oe=arguments.length-2;if(oe===1)Ne.children=Se;else if(1<oe){for(var we=Array(oe),ze=0;ze<oe;ze++)we[ze]=arguments[ze+2];Ne.children=we}if(O&&O.defaultProps)for(Te in oe=O.defaultProps,oe)Ne[Te]===void 0&&(Ne[Te]=oe[Te]);return w(O,ee,Ne)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(O){return{$$typeof:d,render:O}},lt.isValidElement=V,lt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:H}},lt.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},lt.startTransition=function(O){var ie=P.T,Se={};P.T=Se;try{var Te=O(),Ne=P.S;Ne!==null&&Ne(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,_e)}catch(ee){_e(ee)}finally{ie!==null&&Se.types!==null&&(ie.types=Se.types),P.T=ie}},lt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},lt.use=function(O){return P.H.use(O)},lt.useActionState=function(O,ie,Se){return P.H.useActionState(O,ie,Se)},lt.useCallback=function(O,ie){return P.H.useCallback(O,ie)},lt.useContext=function(O){return P.H.useContext(O)},lt.useDebugValue=function(){},lt.useDeferredValue=function(O,ie){return P.H.useDeferredValue(O,ie)},lt.useEffect=function(O,ie){return P.H.useEffect(O,ie)},lt.useEffectEvent=function(O){return P.H.useEffectEvent(O)},lt.useId=function(){return P.H.useId()},lt.useImperativeHandle=function(O,ie,Se){return P.H.useImperativeHandle(O,ie,Se)},lt.useInsertionEffect=function(O,ie){return P.H.useInsertionEffect(O,ie)},lt.useLayoutEffect=function(O,ie){return P.H.useLayoutEffect(O,ie)},lt.useMemo=function(O,ie){return P.H.useMemo(O,ie)},lt.useOptimistic=function(O,ie){return P.H.useOptimistic(O,ie)},lt.useReducer=function(O,ie,Se){return P.H.useReducer(O,ie,Se)},lt.useRef=function(O){return P.H.useRef(O)},lt.useState=function(O){return P.H.useState(O)},lt.useSyncExternalStore=function(O,ie,Se){return P.H.useSyncExternalStore(O,ie,Se)},lt.useTransition=function(){return P.H.useTransition()},lt.version="19.2.0",lt}var Lx;function Nd(){return Lx||(Lx=1,rh.exports=HS()),rh.exports}var de=Nd(),sh={exports:{}},Uo={},oh={exports:{}},lh={};var Nx;function GS(){return Nx||(Nx=1,(function(s){function t(F,Y){var H=F.length;F.push(Y);e:for(;0<H;){var _e=H-1>>>1,ve=F[_e];if(0<l(ve,Y))F[_e]=Y,F[H]=ve,H=_e;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],H=F.pop();if(H!==Y){F[0]=H;e:for(var _e=0,ve=F.length,O=ve>>>1;_e<O;){var ie=2*(_e+1)-1,Se=F[ie],Te=ie+1,Ne=F[Te];if(0>l(Se,H))Te<ve&&0>l(Ne,Se)?(F[_e]=Ne,F[Te]=H,_e=Te):(F[_e]=Se,F[ie]=H,_e=ie);else if(Te<ve&&0>l(Ne,H))F[_e]=Ne,F[Te]=H,_e=Te;else break e}}return Y}function l(F,Y){var H=F.sortIndex-Y.sortIndex;return H!==0?H:F.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,g=null,S=3,M=!1,E=!1,A=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function z(F){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=F)r(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function k(F){if(A=!1,z(F),!E)if(i(m)!==null)E=!0,N||(N=!0,te());else{var Y=i(p);Y!==null&&ce(k,Y.startTime-F)}}var N=!1,P=-1,W=5,w=-1;function C(){return y?!0:!(s.unstable_now()-w<W)}function V(){if(y=!1,N){var F=s.unstable_now();w=F;var Y=!0;try{e:{E=!1,A&&(A=!1,D(P),P=-1),M=!0;var H=S;try{t:{for(z(F),g=i(m);g!==null&&!(g.expirationTime>F&&C());){var _e=g.callback;if(typeof _e=="function"){g.callback=null,S=g.priorityLevel;var ve=_e(g.expirationTime<=F);if(F=s.unstable_now(),typeof ve=="function"){g.callback=ve,z(F),Y=!0;break t}g===i(m)&&r(m),z(F)}else r(m);g=i(m)}if(g!==null)Y=!0;else{var O=i(p);O!==null&&ce(k,O.startTime-F),Y=!1}}break e}finally{g=null,S=H,M=!1}Y=void 0}}finally{Y?te():N=!1}}}var te;if(typeof U=="function")te=function(){U(V)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,he=se.port2;se.port1.onmessage=V,te=function(){he.postMessage(null)}}else te=function(){_(V,0)};function ce(F,Y){P=_(function(){F(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(F){switch(S){case 1:case 2:case 3:var Y=3;break;default:Y=S}var H=S;S=Y;try{return F()}finally{S=H}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=S;S=F;try{return Y()}finally{S=H}},s.unstable_scheduleCallback=function(F,Y,H){var _e=s.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?_e+H:_e):H=_e,F){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=H+ve,F={id:x++,callback:Y,priorityLevel:F,startTime:H,expirationTime:ve,sortIndex:-1},H>_e?(F.sortIndex=H,t(p,F),i(m)===null&&F===i(p)&&(A?(D(P),P=-1):A=!0,ce(k,H-_e))):(F.sortIndex=ve,t(m,F),E||M||(E=!0,N||(N=!0,te()))),F},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(F){var Y=S;return function(){var H=S;S=Y;try{return F.apply(this,arguments)}finally{S=H}}}})(lh)),lh}var Ox;function VS(){return Ox||(Ox=1,oh.exports=GS()),oh.exports}var uh={exports:{}},Dn={};var Px;function kS(){if(Px)return Dn;Px=1;var s=Nd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,x)},Dn.flushSync=function(m){var p=h.T,x=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=x,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.2.0",Dn}var zx;function XS(){if(zx)return uh.exports;zx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),uh.exports=kS(),uh.exports}var Fx;function WS(){if(Fx)return Uo;Fx=1;var s=VS(),t=Nd(),i=XS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,o=f;break}if(T===o){v=!0,o=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,o=c;break}if(T===o){v=!0,o=f,a=c;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}var ce=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},_e=[],ve=-1;function O(e){return{current:e}}function ie(e){0>ve||(e.current=_e[ve],_e[ve]=null,ve--)}function Se(e,n){ve++,_e[ve]=e.current,e.current=n}var Te=O(null),Ne=O(null),ee=O(null),oe=O(null);function we(e,n){switch(Se(ee,n),Se(Ne,e),Se(Te,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?J0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=J0(n),e=$0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ie(Te),Se(Te,e)}function ze(){ie(Te),ie(Ne),ie(ee)}function He(e){e.memoizedState!==null&&Se(oe,e);var n=Te.current,a=$0(n,e.type);n!==a&&(Se(Ne,e),Se(Te,a))}function rt(e){Ne.current===e&&(ie(Te),ie(Ne)),oe.current===e&&(ie(oe),Ao._currentValue=H)}var Zt,st;function Tt(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+st}var I=!1;function it(e,n){if(!e||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(re){var ne=re}Reflect.construct(e,[],xe)}else{try{xe.call()}catch(re){ne=re}e.call(xe.prototype)}}else{try{throw Error()}catch(re){ne=re}(xe=e())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(re){if(re&&ne&&typeof re.stack=="string")return[re.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),J=T.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===J.length)for(o=B.length-1,c=J.length-1;1<=o&&0<=c&&B[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==J[c]){var fe=`
`+B[o].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=o&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Tt(a):""}function ft(e,n){switch(e.tag){case 26:case 27:case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return e.child!==n&&n!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return it(e.type,!1);case 11:return it(e.type.render,!1);case 1:return it(e.type,!0);case 31:return Tt("Activity");default:return""}}function Ot(e){try{var n="",a=null;do n+=ft(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ve=Object.prototype.hasOwnProperty,Xt=s.unstable_scheduleCallback,je=s.unstable_cancelCallback,ot=s.unstable_shouldYield,L=s.unstable_requestPaint,b=s.unstable_now,Q=s.unstable_getCurrentPriorityLevel,me=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,le=s.unstable_NormalPriority,qe=s.unstable_LowPriority,Le=s.unstable_IdlePriority,Qe=s.log,We=s.unstable_setDisableYieldValue,Me=null,Ee=null;function Ye(e){if(typeof Qe=="function"&&We(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Me,e)}catch{}}var ke=Math.clz32?Math.clz32:G,Pe=Math.log,nt=Math.LN2;function G(e){return e>>>=0,e===0?32:31-(Pe(e)/nt|0)|0}var De=256,Re=262144,Ce=4194304;function be(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ge(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=be(o):(v&=T,v!==0?c=be(v):a||(a=T&~e,a!==0&&(c=be(a))))):(T=o&~f,T!==0?c=be(T):v!==0?c=be(v):a||(a=o&~e,a!==0&&(c=be(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Be(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function at(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var e=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wn(e,n,a,o,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=v&~a;0<a;){var fe=31-ke(a),xe=1<<fe;T[fe]=0,B[fe]=-1;var ne=J[fe];if(ne!==null)for(J[fe]=null,fe=0;fe<ne.length;fe++){var re=ne[fe];re!==null&&(re.lane&=-536870913)}a&=~xe}o!==0&&el(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function el(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ke(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Fs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-ke(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Bs(e,n){var a=n&-n;return a=(a&42)!==0?1:mi(a),(a&(e.suspendedLanes|n))!==0?0:a}function mi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Is(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Mx(e.type))}function Hs(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var qn=Math.random().toString(36).slice(2),on="__reactFiber$"+qn,dn="__reactProps$"+qn,Pi="__reactContainer$"+qn,Nr="__reactEvents$"+qn,Qu="__reactListeners$"+qn,Ju="__reactHandles$"+qn,tl="__reactResources$"+qn,nr="__reactMarker$"+qn;function Gs(e){delete e[on],delete e[dn],delete e[Nr],delete e[Qu],delete e[Ju]}function va(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=sx(e);e!==null;){if(a=e[on])return a;e=sx(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[on]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ae(e){var n=e[tl];return n||(n=e[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $(e){e[nr]=!0}var Z=new Set,Ae={};function Ue(e,n){Fe(e,n),Fe(e+"Capture",n)}function Fe(e,n){for(Ae[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ze(e){return Ve.call(tt,e)?!0:Ve.call($e,e)?!1:Ie.test(e)?tt[e]=!0:($e[e]=!0,!1)}function ht(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function At(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ct(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){if(!e._valueTracker){var n=Nt(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Mt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Nt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sa=/[\n"\\]/g;function Yt(e){return e.replace(Sa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zi(e,n,a,o,c,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+yt(n)):e.value!==""+yt(n)&&(e.value=""+yt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,v,yt(n)):a!=null?Sn(e,v,yt(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+yt(T):e.removeAttribute("name")}function jt(e,n,a,o,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(e);return}a=a!=null?""+yt(a):"",n=n!=null?""+yt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Wt(e)}function Sn(e,n,a){n==="number"&&vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+yt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+yt(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ce(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=yt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Wt(e)}function Ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Kd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Zd(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Zd(e,f,n[f])}function $u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return P_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var ec=null;function tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Pr=null;function Qd(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[dn]||null;e:switch(e=n.stateNode,n.type){case"input":if(zi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[dn]||null;if(!c)throw Error(r(90));zi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Mt(o)}break e;case"textarea":yn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&pn(e,!!a.multiple,n,!1)}}}var nc=!1;function Jd(e,n,a){if(nc)return e(n,a);nc=!0;try{var o=e(n);return o}finally{if(nc=!1,(Or!==null||Pr!==null)&&(kl(),Or&&(n=Or,e=Pr,Pr=Or=null,Qd(n),e)))for(n=0;n<e.length;n++)Qd(e[n])}}function Vs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[dn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=!1;if(Ii)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){ic=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{ic=!1}var ya=null,ac=null,il=null;function $d(){if(il)return il;var e,n=ac,a=n.length,o,c="value"in ya?ya.value:ya.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===c[f-o];o++);return il=c.slice(e,1<o?1-o:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function ep(){return!1}function zn(e){function n(a,o,c,f,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:ep,this.isPropagationStopped=ep,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=zn(ir),Xs=g({},ir,{view:0,detail:0}),z_=zn(Xs),rc,sc,Ws,ol=g({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(rc=e.screenX-Ws.screenX,sc=e.screenY-Ws.screenY):sc=rc=0,Ws=e),rc)},movementY:function(e){return"movementY"in e?e.movementY:sc}}),tp=zn(ol),F_=g({},ol,{dataTransfer:0}),B_=zn(F_),I_=g({},Xs,{relatedTarget:0}),oc=zn(I_),H_=g({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),G_=zn(H_),V_=g({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k_=zn(V_),X_=g({},ir,{data:0}),np=zn(X_),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Y_[e])?!!n[e]:!1}function lc(){return j_}var Z_=g({},Xs,{key:function(e){if(e.key){var n=W_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K_=zn(Z_),Q_=g({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=zn(Q_),J_=g({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),$_=zn(J_),ev=g({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=zn(ev),nv=g({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=zn(nv),av=g({},ir,{newState:0,oldState:0}),rv=zn(av),sv=[9,13,27,32],uc=Ii&&"CompositionEvent"in window,qs=null;Ii&&"documentMode"in document&&(qs=document.documentMode);var ov=Ii&&"TextEvent"in window&&!qs,ap=Ii&&(!uc||qs&&8<qs&&11>=qs),rp=" ",sp=!1;function op(e,n){switch(e){case"keyup":return sv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function lv(e,n){switch(e){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(sp=!0,rp);case"textInput":return e=n.data,e===rp&&sp?null:e;default:return null}}function uv(e,n){if(zr)return e==="compositionend"||!uc&&op(e,n)?(e=$d(),il=ac=ya=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cv[e.type]:n==="textarea"}function cp(e,n,a,o){Or?Pr?Pr.push(o):Pr=[o]:Or=o,n=Kl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ys=null,js=null;function fv(e){q0(e,0)}function ll(e){var n=q(e);if(Mt(n))return e}function fp(e,n){if(e==="change")return n}var hp=!1;if(Ii){var cc;if(Ii){var fc="oninput"in document;if(!fc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),fc=typeof dp.oninput=="function"}cc=fc}else cc=!1;hp=cc&&(!document.documentMode||9<document.documentMode)}function pp(){Ys&&(Ys.detachEvent("onpropertychange",mp),js=Ys=null)}function mp(e){if(e.propertyName==="value"&&ll(js)){var n=[];cp(n,js,e,tc(e)),Jd(fv,n)}}function hv(e,n,a){e==="focusin"?(pp(),Ys=n,js=a,Ys.attachEvent("onpropertychange",mp)):e==="focusout"&&pp()}function dv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(js)}function pv(e,n){if(e==="click")return ll(n)}function mv(e,n){if(e==="input"||e==="change")return ll(n)}function xv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:xv;function Zs(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ve.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gp(e,n){var a=xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xp(a)}}function _p(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_p(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vn(e.document)}return n}function hc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gv=Ii&&"documentMode"in document&&11>=document.documentMode,Fr=null,dc=null,Ks=null,pc=!1;function Sp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||Fr==null||Fr!==vn(o)||(o=Fr,"selectionStart"in o&&hc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=Kl(dc,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fr)))}function ar(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Br={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},mc={},yp={};Ii&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function rr(e){if(mc[e])return mc[e];if(!Br[e])return e;var n=Br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return mc[e]=n[a];return e}var Mp=rr("animationend"),bp=rr("animationiteration"),Ep=rr("animationstart"),_v=rr("transitionrun"),vv=rr("transitionstart"),Sv=rr("transitioncancel"),Tp=rr("transitionend"),Ap=new Map,xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xc.push("scrollEnd");function xi(e,n){Ap.set(e,n),Ue(n,[e])}var ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Ir=0,gc=0;function cl(){for(var e=Ir,n=gc=Ir=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}f!==0&&Rp(a,c,f)}}function fl(e,n,a,o){ii[Ir++]=e,ii[Ir++]=n,ii[Ir++]=a,ii[Ir++]=o,gc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function _c(e,n,a,o){return fl(e,n,a,o),hl(e)}function sr(e,n){return fl(e,null,null,n),hl(e)}function Rp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ke(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(e){if(50<vo)throw vo=0,Cf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hr={};function yv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,o){return new yv(e,n,a,o)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,a,o,c,f){var v=0;if(o=e,typeof e=="function")vc(e)&&(v=1);else if(typeof e=="string")v=AS(e,a,Te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=jn(31,a,n,c),e.elementType=w,e.lanes=f,e;case A:return or(a.children,c,f,n);case y:v=8,c|=24;break;case _:return e=jn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case k:return e=jn(13,a,n,c),e.elementType=k,e.lanes=f,e;case N:return e=jn(19,a,n,c),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:v=10;break e;case D:v=9;break e;case z:v=11;break e;case P:v=14;break e;case W:v=16,o=null;break e}v=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=jn(v,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function or(e,n,a,o){return e=jn(7,e,o,n),e.lanes=a,e}function Sc(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function wp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function yc(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Dp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=Dp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ot(n)},Dp.set(e,n),n)}return{value:e,source:n,stack:Ot(n)}}var Gr=[],Vr=0,pl=null,Qs=0,ri=[],si=0,Ma=null,Ti=1,Ai="";function Gi(e,n){Gr[Vr++]=Qs,Gr[Vr++]=pl,pl=e,Qs=n}function Up(e,n,a){ri[si++]=Ti,ri[si++]=Ai,ri[si++]=Ma,Ma=e;var o=Ti;e=Ai;var c=32-ke(o)-1;o&=~(1<<c),a+=1;var f=32-ke(n)+c;if(30<f){var v=c-c%5;f=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Ti=1<<32-ke(n)+c|a<<c|o,Ai=f+e}else Ti=1<<f|a<<c|o,Ai=e}function Mc(e){e.return!==null&&(Gi(e,1),Up(e,1,0))}function bc(e){for(;e===pl;)pl=Gr[--Vr],Gr[Vr]=null,Qs=Gr[--Vr],Gr[Vr]=null;for(;e===Ma;)Ma=ri[--si],ri[si]=null,Ai=ri[--si],ri[si]=null,Ti=ri[--si],ri[si]=null}function Lp(e,n){ri[si++]=Ti,ri[si++]=Ai,ri[si++]=Ma,Ti=n.id,Ai=n.overflow,Ma=e}var Tn=null,Kt=null,bt=!1,ba=null,oi=!1,Ec=Error(r(519));function Ea(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Js(ai(n,e)),Ec}function Np(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[dn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)_t(yo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),jt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||K0(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||Ea(e,!0)}function Op(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Tn=Tn.return}}function kr(e){if(e!==Tn)return!1;if(!bt)return Op(e),bt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kf(e.type,e.memoizedProps)),a=!a),a&&Kt&&Ea(e),Op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Kt=rx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Kt=rx(e)}else n===27?(n=Kt,Ba(e.type)?(e=jf,jf=null,Kt=e):Kt=n):Kt=Tn?ui(e.stateNode.nextSibling):null;return!0}function lr(){Kt=Tn=null,bt=!1}function Tc(){var e=ba;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),ba=null),e}function Js(e){ba===null?ba=[e]:ba.push(e)}var Ac=O(null),ur=null,Vi=null;function Ta(e,n,a){Se(Ac,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=Ac.current,ie(Ac)}function Rc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Cc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Rc(f.return,a,e),o||(v=null);break e}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Rc(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Xr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=c.type;Yn(c.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(c===oe.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}c=c.return}e!==null&&Cc(n,e,a,o),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){ur=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Pp(ur,e)}function xl(e,n){return ur===null&&cr(e),Pp(e,n)}function Pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(r(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var Mv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},bv=s.unstable_scheduleCallback,Ev=s.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new Mv,data:new Map,refCount:0}}function $s(e){e.refCount--,e.refCount===0&&bv(Ev,function(){e.controller.abort()})}var eo=null,Dc=0,Wr=0,qr=null;function Tv(e,n){if(eo===null){var a=eo=[];Dc=0,Wr=Of(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Dc++,n.then(zp,zp),n}function zp(){if(--Dc===0&&eo!==null){qr!==null&&(qr.status="fulfilled");var e=eo;eo=null,Wr=0,qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Av(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Fp=F.S;F.S=function(e,n){S0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Tv(e,n),Fp!==null&&Fp(e,n)};var fr=O(null);function Uc(){var e=fr.current;return e!==null?e:qt.pooledCache}function gl(e,n){n===null?Se(fr,fr.current):Se(fr,n.pool)}function Bp(){var e=Uc();return e===null?null:{parent:ln._currentValue,pool:e}}var Yr=Error(r(460)),Lc=Error(r(474)),_l=Error(r(542)),vl={then:function(){}};function Ip(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=qt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e}throw dr=n,Yr}}function hr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dr=a,Yr):a}}var dr=null;function Gp(){if(dr===null)throw Error(r(459));var e=dr;return dr=null,e}function Vp(e){if(e===Yr||e===_l)throw Error(r(483))}var jr=null,to=0;function Sl(e){var n=to;return to+=1,jr===null&&(jr=[]),Hp(jr,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function kp(e){function n(j,X){if(e){var K=j.deletions;K===null?(j.deletions=[X],j.flags|=16):K.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function c(j,X){return j=Hi(j,X),j.index=0,j.sibling=null,j}function f(j,X,K){return j.index=K,e?(K=j.alternate,K!==null?(K=K.index,K<X?(j.flags|=67108866,X):K):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function v(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function T(j,X,K,pe){return X===null||X.tag!==6?(X=Sc(K,j.mode,pe),X.return=j,X):(X=c(X,K),X.return=j,X)}function B(j,X,K,pe){var Ke=K.type;return Ke===A?fe(j,X,K.props.children,pe,K.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===W&&hr(Ke)===X.type)?(X=c(X,K.props),no(X,K),X.return=j,X):(X=dl(K.type,K.key,K.props,null,j.mode,pe),no(X,K),X.return=j,X)}function J(j,X,K,pe){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=yc(K,j.mode,pe),X.return=j,X):(X=c(X,K.children||[]),X.return=j,X)}function fe(j,X,K,pe,Ke){return X===null||X.tag!==7?(X=or(K,j.mode,pe,Ke),X.return=j,X):(X=c(X,K),X.return=j,X)}function xe(j,X,K){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Sc(""+X,j.mode,K),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return K=dl(X.type,X.key,X.props,null,j.mode,K),no(K,X),K.return=j,K;case E:return X=yc(X,j.mode,K),X.return=j,X;case W:return X=hr(X),xe(j,X,K)}if(ce(X)||te(X))return X=or(X,j.mode,K,null),X.return=j,X;if(typeof X.then=="function")return xe(j,Sl(X),K);if(X.$$typeof===U)return xe(j,xl(j,X),K);yl(j,X)}return null}function ne(j,X,K,pe){var Ke=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ke!==null?null:T(j,X,""+K,pe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Ke?B(j,X,K,pe):null;case E:return K.key===Ke?J(j,X,K,pe):null;case W:return K=hr(K),ne(j,X,K,pe)}if(ce(K)||te(K))return Ke!==null?null:fe(j,X,K,pe,null);if(typeof K.then=="function")return ne(j,X,Sl(K),pe);if(K.$$typeof===U)return ne(j,X,xl(j,K),pe);yl(j,K)}return null}function re(j,X,K,pe,Ke){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return j=j.get(K)||null,T(X,j,""+pe,Ke);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case M:return j=j.get(pe.key===null?K:pe.key)||null,B(X,j,pe,Ke);case E:return j=j.get(pe.key===null?K:pe.key)||null,J(X,j,pe,Ke);case W:return pe=hr(pe),re(j,X,K,pe,Ke)}if(ce(pe)||te(pe))return j=j.get(K)||null,fe(X,j,pe,Ke,null);if(typeof pe.then=="function")return re(j,X,K,Sl(pe),Ke);if(pe.$$typeof===U)return re(j,X,K,xl(X,pe),Ke);yl(X,pe)}return null}function Ge(j,X,K,pe){for(var Ke=null,wt=null,Xe=X,dt=X=0,St=null;Xe!==null&&dt<K.length;dt++){Xe.index>dt?(St=Xe,Xe=null):St=Xe.sibling;var Dt=ne(j,Xe,K[dt],pe);if(Dt===null){Xe===null&&(Xe=St);break}e&&Xe&&Dt.alternate===null&&n(j,Xe),X=f(Dt,X,dt),wt===null?Ke=Dt:wt.sibling=Dt,wt=Dt,Xe=St}if(dt===K.length)return a(j,Xe),bt&&Gi(j,dt),Ke;if(Xe===null){for(;dt<K.length;dt++)Xe=xe(j,K[dt],pe),Xe!==null&&(X=f(Xe,X,dt),wt===null?Ke=Xe:wt.sibling=Xe,wt=Xe);return bt&&Gi(j,dt),Ke}for(Xe=o(Xe);dt<K.length;dt++)St=re(Xe,j,dt,K[dt],pe),St!==null&&(e&&St.alternate!==null&&Xe.delete(St.key===null?dt:St.key),X=f(St,X,dt),wt===null?Ke=St:wt.sibling=St,wt=St);return e&&Xe.forEach(function(ka){return n(j,ka)}),bt&&Gi(j,dt),Ke}function et(j,X,K,pe){if(K==null)throw Error(r(151));for(var Ke=null,wt=null,Xe=X,dt=X=0,St=null,Dt=K.next();Xe!==null&&!Dt.done;dt++,Dt=K.next()){Xe.index>dt?(St=Xe,Xe=null):St=Xe.sibling;var ka=ne(j,Xe,Dt.value,pe);if(ka===null){Xe===null&&(Xe=St);break}e&&Xe&&ka.alternate===null&&n(j,Xe),X=f(ka,X,dt),wt===null?Ke=ka:wt.sibling=ka,wt=ka,Xe=St}if(Dt.done)return a(j,Xe),bt&&Gi(j,dt),Ke;if(Xe===null){for(;!Dt.done;dt++,Dt=K.next())Dt=xe(j,Dt.value,pe),Dt!==null&&(X=f(Dt,X,dt),wt===null?Ke=Dt:wt.sibling=Dt,wt=Dt);return bt&&Gi(j,dt),Ke}for(Xe=o(Xe);!Dt.done;dt++,Dt=K.next())Dt=re(Xe,j,dt,Dt.value,pe),Dt!==null&&(e&&Dt.alternate!==null&&Xe.delete(Dt.key===null?dt:Dt.key),X=f(Dt,X,dt),wt===null?Ke=Dt:wt.sibling=Dt,wt=Dt);return e&&Xe.forEach(function(FS){return n(j,FS)}),bt&&Gi(j,dt),Ke}function Ht(j,X,K,pe){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:e:{for(var Ke=K.key;X!==null;){if(X.key===Ke){if(Ke=K.type,Ke===A){if(X.tag===7){a(j,X.sibling),pe=c(X,K.props.children),pe.return=j,j=pe;break e}}else if(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===W&&hr(Ke)===X.type){a(j,X.sibling),pe=c(X,K.props),no(pe,K),pe.return=j,j=pe;break e}a(j,X);break}else n(j,X);X=X.sibling}K.type===A?(pe=or(K.props.children,j.mode,pe,K.key),pe.return=j,j=pe):(pe=dl(K.type,K.key,K.props,null,j.mode,pe),no(pe,K),pe.return=j,j=pe)}return v(j);case E:e:{for(Ke=K.key;X!==null;){if(X.key===Ke)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){a(j,X.sibling),pe=c(X,K.children||[]),pe.return=j,j=pe;break e}else{a(j,X);break}else n(j,X);X=X.sibling}pe=yc(K,j.mode,pe),pe.return=j,j=pe}return v(j);case W:return K=hr(K),Ht(j,X,K,pe)}if(ce(K))return Ge(j,X,K,pe);if(te(K)){if(Ke=te(K),typeof Ke!="function")throw Error(r(150));return K=Ke.call(K),et(j,X,K,pe)}if(typeof K.then=="function")return Ht(j,X,Sl(K),pe);if(K.$$typeof===U)return Ht(j,X,xl(j,K),pe);yl(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,X!==null&&X.tag===6?(a(j,X.sibling),pe=c(X,K),pe.return=j,j=pe):(a(j,X),pe=Sc(K,j.mode,pe),pe.return=j,j=pe),v(j)):a(j,X)}return function(j,X,K,pe){try{to=0;var Ke=Ht(j,X,K,pe);return jr=null,Ke}catch(Xe){if(Xe===Yr||Xe===_l)throw Xe;var wt=jn(29,Xe,null,j.mode);return wt.lanes=pe,wt.return=j,wt}finally{}}}var pr=kp(!0),Xp=kp(!1),Aa=!1;function Nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=hl(e),Rp(e,null,a),n}return fl(e,o,n,a),hl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Fs(e,a)}}function Pc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var zc=!1;function ao(){if(zc){var e=qr;if(e!==null)throw e}}function ro(e,n,a,o){zc=!1;var c=e.updateQueue;Aa=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,J=B.next;B.next=null,v===null?f=J:v.next=J,v=B;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,T=fe.lastBaseUpdate,T!==v&&(T===null?fe.firstBaseUpdate=J:T.next=J,fe.lastBaseUpdate=B))}if(f!==null){var xe=c.baseState;v=0,fe=J=B=null,T=f;do{var ne=T.lane&-536870913,re=ne!==T.lane;if(re?(vt&ne)===ne:(o&ne)===ne){ne!==0&&ne===Wr&&(zc=!0),fe!==null&&(fe=fe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ge=e,et=T;ne=n;var Ht=a;switch(et.tag){case 1:if(Ge=et.payload,typeof Ge=="function"){xe=Ge.call(Ht,xe,ne);break e}xe=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=et.payload,ne=typeof Ge=="function"?Ge.call(Ht,xe,ne):Ge,ne==null)break e;xe=g({},xe,ne);break e;case 2:Aa=!0}}ne=T.callback,ne!==null&&(e.flags|=64,re&&(e.flags|=8192),re=c.callbacks,re===null?c.callbacks=[ne]:re.push(ne))}else re={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},fe===null?(J=fe=re,B=xe):fe=fe.next=re,v|=ne;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;re=T,T=re.next,re.next=null,c.lastBaseUpdate=re,c.shared.pending=null}}while(!0);fe===null&&(B=xe),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=fe,f===null&&(c.shared.lanes=0),Na|=v,e.lanes=v,e.memoizedState=xe}}function Wp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wp(a[e],n)}var Zr=O(null),Ml=O(0);function Yp(e,n){e=Ji,Se(Ml,e),Se(Zr,n),Ji=e|n.baseLanes}function Fc(){Se(Ml,Ji),Se(Zr,Zr.current)}function Bc(){Ji=Ml.current,ie(Zr),ie(Ml)}var Zn=O(null),li=null;function wa(e){var n=e.alternate;Se(nn,nn.current&1),Se(Zn,e),li===null&&(n===null||Zr.current!==null||n.memoizedState!==null)&&(li=e)}function Ic(e){Se(nn,nn.current),Se(Zn,e),li===null&&(li=e)}function jp(e){e.tag===22?(Se(nn,nn.current),Se(Zn,e),li===null&&(li=e)):Da()}function Da(){Se(nn,nn.current),Se(Zn,Zn.current)}function Kn(e){ie(Zn),li===e&&(li=null),ie(nn)}var nn=O(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qf(a)||Yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xi=0,ut=null,Bt=null,un=null,El=!1,Kr=!1,mr=!1,Tl=0,so=0,Qr=null,Rv=0;function en(){throw Error(r(321))}function Hc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Gc(e,n,a,o,c,f){return Xi=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?Um:nf,mr=!1,f=a(o,c),mr=!1,Kr&&(f=Kp(n,a,o,c)),Zp(e),f}function Zp(e){F.H=uo;var n=Bt!==null&&Bt.next!==null;if(Xi=0,un=Bt=ut=null,El=!1,so=0,Qr=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&ml(e)&&(cn=!0))}function Kp(e,n,a,o){ut=e;var c=0;do{if(Kr&&(Qr=null),so=0,Kr=!1,25<=c)throw Error(r(301));if(c+=1,un=Bt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Lm,f=n(a,o)}while(Kr);return f}function Cv(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(ut.flags|=1024),n}function Vc(){var e=Tl!==0;return Tl=0,e}function kc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Xc(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}Xi=0,un=Bt=ut=null,Kr=!1,so=Tl=0,Qr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ut.memoizedState=un=e:un=un.next=e,un}function an(){if(Bt===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var n=un===null?ut.memoizedState:un.next;if(n!==null)un=n,Bt=e;else{if(e===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},un===null?ut.memoizedState=un=e:un=un.next=e}return un}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=so;return so+=1,Qr===null&&(Qr=[]),e=Hp(Qr,e,n),n=ut,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Um:nf),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===U)return An(e)}throw Error(r(438,String(e)))}function Wc(e){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=an();return qc(n,Bt,e)}function qc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=v=null,B=null,J=n,fe=!1;do{var xe=J.lane&-536870913;if(xe!==J.lane?(vt&xe)===xe:(Xi&xe)===xe){var ne=J.revertLane;if(ne===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),xe===Wr&&(fe=!0);else if((Xi&ne)===ne){J=J.next,ne===Wr&&(fe=!0);continue}else xe={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=xe,v=f):B=B.next=xe,ut.lanes|=ne,Na|=ne;xe=J.action,mr&&a(f,xe),f=J.hasEagerState?J.eagerState:a(f,xe)}else ne={lane:xe,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=ne,v=f):B=B.next=ne,ut.lanes|=xe,Na|=xe;J=J.next}while(J!==null&&J!==n);if(B===null?v=f:B.next=T,!Yn(f,e.memoizedState)&&(cn=!0,fe&&(a=qr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Yc(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Qp(e,n,a){var o=ut,c=an(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Yn((Bt||c).memoizedState,a);if(v&&(c.memoizedState=a,cn=!0),c=c.queue,Kc(em.bind(null,o,c,e),[e]),c.getSnapshot!==n||v||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,Jr(9,{destroy:void 0},$p.bind(null,o,c,a,n),null),qt===null)throw Error(r(349));f||(Xi&127)!==0||Jp(o,n,a)}return a}function Jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Al(),ut.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $p(e,n,a,o){n.value=a,n.getSnapshot=o,tm(n)&&nm(e)}function em(e,n,a){return a(function(){tm(n)&&nm(e)})}function tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function nm(e){var n=sr(e,2);n!==null&&Gn(n,e,2)}function jc(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),mr){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function im(e,n,a,o){return e.baseState=a,qc(e,Bt,typeof o=="function"?o:Wi)}function wv(e,n,a,o,c){if(Ul(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=F.T,v={};F.T=v;try{var T=a(c,o),B=F.S;B!==null&&B(v,T),rm(e,n,T)}catch(J){Zc(e,n,J)}finally{f!==null&&v.types!==null&&(f.types=v.types),F.T=f}}else try{f=a(c,o),rm(e,n,f)}catch(J){Zc(e,n,J)}}function rm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sm(e,n,o)},function(o){return Zc(e,n,o)}):sm(e,n,a)}function sm(e,n,a){n.status="fulfilled",n.value=a,om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,am(e,a)))}function Zc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==o)}e.action=null}function om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lm(e,n){return n}function um(e,n){if(bt){var a=qt.formState;if(a!==null){e:{var o=ut;if(bt){if(Kt){t:{for(var c=Kt,f=oi;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Kt=ui(c.nextSibling),o=c.data==="F!";break e}}Ea(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=o,a=Cm.bind(null,ut,o),o.dispatch=a,o=jc(!1),f=tf.bind(null,ut,!1,o.queue),o=On(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=wv.bind(null,ut,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function cm(e){var n=an();return fm(n,Bt,e)}function fm(e,n,a){if(n=qc(e,n,lm)[0],e=Cl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(v){throw v===Yr?_l:v}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,Jr(9,{destroy:void 0},Dv.bind(null,c,a),null)),[o,f,e]}function Dv(e,n){e.action=n}function hm(e){var n=an(),a=Bt;if(a!==null)return fm(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Jr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Al(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function dm(){return an().memoizedState}function wl(e,n,a,o){var c=On();ut.flags|=e,c.memoizedState=Jr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Dl(e,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Bt!==null&&o!==null&&Hc(o,Bt.memoizedState.deps)?c.memoizedState=Jr(n,f,a,o):(ut.flags|=e,c.memoizedState=Jr(1|n,f,a,o))}function pm(e,n){wl(8390656,8,e,n)}function Kc(e,n){Dl(2048,8,e,n)}function Uv(e){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Al(),ut.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function mm(e){var n=an().memoizedState;return Uv({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function xm(e,n){return Dl(4,2,e,n)}function gm(e,n){return Dl(4,4,e,n)}function _m(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vm(e,n,a){a=a!=null?a.concat([e]):null,Dl(4,4,_m.bind(null,n,e),a)}function Qc(){}function Sm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Hc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function ym(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Hc(n,o[1]))return o[0];if(o=e(),mr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[o,n],o}function Jc(e,n,a){return a===void 0||(Xi&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=M0(),ut.lanes|=e,Na|=e,a)}function Mm(e,n,a,o){return Yn(a,n)?a:Zr.current!==null?(e=Jc(e,a,o),Yn(e,n)||(cn=!0),e):(Xi&42)===0||(Xi&1073741824)!==0&&(vt&261930)===0?(cn=!0,e.memoizedState=a):(e=M0(),ut.lanes|=e,Na|=e,n)}function bm(e,n,a,o,c){var f=Y.p;Y.p=f!==0&&8>f?f:8;var v=F.T,T={};F.T=T,tf(e,!1,n,a);try{var B=c(),J=F.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var fe=Av(B,o);lo(e,n,fe,$n(e))}else lo(e,n,o,$n(e))}catch(xe){lo(e,n,{then:function(){},status:"rejected",reason:xe},$n())}finally{Y.p=f,v!==null&&T.types!==null&&(v.types=T.types),F.T=v}}function Lv(){}function $c(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Em(e).queue;bm(e,c,n,H,a===null?Lv:function(){return Tm(e),a(o)})}function Em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:H},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Tm(e){var n=Em(e);n.next===null&&(n=e.alternate.memoizedState),lo(e,n.next.queue,{},$n())}function ef(){return An(Ao)}function Am(){return an().memoizedState}function Rm(){return an().memoizedState}function Nv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Ra(a);var o=Ca(n,e,a);o!==null&&(Gn(o,n,a),io(o,n,a)),n={cache:wc()},e.payload=n;return}n=n.return}}function Ov(e,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?wm(n,a):(a=_c(e,n,a,o),a!==null&&(Gn(a,e,o),Dm(a,n,o)))}function Cm(e,n,a){var o=$n();lo(e,n,a,o)}function lo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))wm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Yn(T,v))return fl(e,n,c,0),qt===null&&cl(),!1}catch{}finally{}if(a=_c(e,n,c,o),a!==null)return Gn(a,e,o),Dm(a,n,o),!0}return!1}function tf(e,n,a,o){if(o={lane:2,revertLane:Of(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(r(479))}else n=_c(e,a,o,2),n!==null&&Gn(n,e,2)}function Ul(e){var n=e.alternate;return e===ut||n!==null&&n===ut}function wm(e,n){Kr=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Dm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Fs(e,a)}}var uo={readContext:An,use:Rl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};uo.useEffectEvent=en;var Um={readContext:An,use:Rl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,_m.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var o=e();if(mr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=On();if(a!==void 0){var c=a(n);if(mr){Ye(!0);try{a(n)}finally{Ye(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Ov.bind(null,ut,e),[o.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=jc(e);var n=e.queue,a=Cm.bind(null,ut,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Qc,useDeferredValue:function(e,n){var a=On();return Jc(a,e,n)},useTransition:function(){var e=jc(!1);return e=bm.bind(null,ut,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ut,c=On();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(vt&127)!==0||Jp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,pm(em.bind(null,o,f,e),[e]),o.flags|=2048,Jr(9,{destroy:void 0},$p.bind(null,o,f,a,n),null),a},useId:function(){var e=On(),n=qt.identifierPrefix;if(bt){var a=Ai,o=Ti;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Rv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ef,useFormState:um,useActionState:um,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,ut,!0,a),a.dispatch=n,[e,n]},useMemoCache:Wc,useCacheRefresh:function(){return On().memoizedState=Nv.bind(null,ut)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},nf={readContext:An,use:Rl,useCallback:Sm,useContext:An,useEffect:Kc,useImperativeHandle:vm,useInsertionEffect:xm,useLayoutEffect:gm,useMemo:ym,useReducer:Cl,useRef:dm,useState:function(){return Cl(Wi)},useDebugValue:Qc,useDeferredValue:function(e,n){var a=an();return Mm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Cl(Wi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:ef,useFormState:cm,useActionState:cm,useOptimistic:function(e,n){var a=an();return im(a,Bt,e,n)},useMemoCache:Wc,useCacheRefresh:Rm};nf.useEffectEvent=mm;var Lm={readContext:An,use:Rl,useCallback:Sm,useContext:An,useEffect:Kc,useImperativeHandle:vm,useInsertionEffect:xm,useLayoutEffect:gm,useMemo:ym,useReducer:Yc,useRef:dm,useState:function(){return Yc(Wi)},useDebugValue:Qc,useDeferredValue:function(e,n){var a=an();return Bt===null?Jc(a,e,n):Mm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Yc(Wi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:ef,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=an();return Bt!==null?im(a,Bt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wc,useCacheRefresh:Rm};Lm.useEffectEvent=mm;function af(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),c=Ra(o);c.payload=n,a!=null&&(c.callback=a),n=Ca(e,c,o),n!==null&&(Gn(n,e,o),io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),c=Ra(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ca(e,c,o),n!==null&&(Gn(n,e,o),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=Ra(a);o.tag=2,n!=null&&(o.callback=n),n=Ca(e,o,a),n!==null&&(Gn(n,e,a),io(n,e,a))}};function Nm(e,n,a,o,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(c,f):!0}function Om(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&rf.enqueueReplaceState(n,n.state,null)}function xr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Pm(e){ul(e)}function zm(e){console.error(e)}function Fm(e){ul(e)}function Ll(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function sf(e,n,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(e,n)},a}function Im(e){return e=Ra(e),e.tag=3,e}function Hm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Bm(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Bm(n,a,o),typeof c!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Pv(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Xl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Uf(e,o,c)),!1;case 22:return a.flags|=65536,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Uf(e,o,c)),!1}throw Error(r(435,a.tag))}return Uf(e,o,c),Xl(),!1}if(bt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Ec&&(e=Error(r(422),{cause:o}),Js(ai(e,a)))):(o!==Ec&&(n=Error(r(423),{cause:o}),Js(ai(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ai(o,a),c=sf(e.stateNode,o,c),Pc(e,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=ai(f,a),_o===null?_o=[f]:_o.push(f),tn!==4&&(tn=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=sf(a.stateNode,o,e),Pc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Oa===null||!Oa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Im(c),Hm(c,e,a,o),Pc(a,c),!1}a=a.return}while(a!==null);return!1}var of=Error(r(461)),cn=!1;function Rn(e,n,a,o){n.child=e===null?Xp(n,null,a,o):pr(n,e.child,a,o)}function Gm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return cr(n),o=Gc(e,n,a,v,f,c),T=Vc(),e!==null&&!cn?(kc(e,n,c),qi(e,n,c)):(bt&&T&&Mc(n),n.flags|=1,Rn(e,n,o,c),n.child)}function Vm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!vc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,km(e,n,f,o,c)):(e=dl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!mf(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(v,o)&&e.ref===n.ref)return qi(e,n,c)}return n.flags|=1,e=Hi(f,o),e.ref=n.ref,e.return=n,n.child=e}function km(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Zs(f,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=f,mf(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,qi(e,n,c)}return lf(e,n,a,o,c)}function Xm(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return Wm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Yp(n,f):Fc(),jp(n);else return o=n.lanes=536870912,Wm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(gl(n,f.cachePool),Yp(n,f),Da(),n.memoizedState=null):(e!==null&&gl(n,null),Fc(),Da());return Rn(e,n,c,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wm(e,n,a,o,c){var f=Uc();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&gl(n,null),Fc(),jp(n),e!==null&&Xr(e,n,o,!0),n.childLanes=c,null}function Nl(e,n){return n=Pl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function qm(e,n,a){return pr(n,e.child,null,a),e=Nl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function zv(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(bt){if(o.mode==="hidden")return e=Nl(n,o),n.lanes=536870912,co(null,e);if(Ic(n),(e=Kt)?(e=ax(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,Tn=n,Kt=null)):e=null,e===null)throw Ea(n);return n.lanes=536870912,null}return Nl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Ic(n),c)if(n.flags&256)n.flags&=-257,n=qm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Xr(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(o=qt,o!==null&&(v=Bs(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,sr(e,v),Gn(o,e,v),of;Xl(),n=qm(e,n,a)}else e=f.treeContext,Kt=ui(v.nextSibling),Tn=n,bt=!0,ba=null,oi=!1,e!==null&&Lp(n,e),n=Nl(n,o),n.flags|=4096;return n}return e=Hi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ol(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function lf(e,n,a,o,c){return cr(n),a=Gc(e,n,a,o,void 0,c),o=Vc(),e!==null&&!cn?(kc(e,n,c),qi(e,n,c)):(bt&&o&&Mc(n),n.flags|=1,Rn(e,n,a,c),n.child)}function Ym(e,n,a,o,c,f){return cr(n),n.updateQueue=null,a=Kp(n,o,a,c),Zp(e),o=Vc(),e!==null&&!cn?(kc(e,n,f),qi(e,n,f)):(bt&&o&&Mc(n),n.flags|=1,Rn(e,n,a,f),n.child)}function jm(e,n,a,o,c){if(cr(n),n.stateNode===null){var f=Hr,v=a.contextType;typeof v=="object"&&v!==null&&(f=An(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Nc(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?An(v):Hr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(af(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&rf.enqueueReplaceState(f,f.state,null),ro(n,o,f,c),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=xr(a,T);f.props=B;var J=f.context,fe=a.contextType;v=Hr,typeof fe=="object"&&fe!==null&&(v=An(fe));var xe=a.getDerivedStateFromProps;fe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==v)&&Om(n,f,o,v),Aa=!1;var ne=n.memoizedState;f.state=ne,ro(n,o,f,c),ao(),J=n.memoizedState,T||ne!==J||Aa?(typeof xe=="function"&&(af(n,a,xe,o),J=n.memoizedState),(B=Aa||Nm(n,a,B,o,ne,J,v))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=v,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Oc(e,n),v=n.memoizedProps,fe=xr(a,v),f.props=fe,xe=n.pendingProps,ne=f.context,J=a.contextType,B=Hr,typeof J=="object"&&J!==null&&(B=An(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xe||ne!==B)&&Om(n,f,o,B),Aa=!1,ne=n.memoizedState,f.state=ne,ro(n,o,f,c),ao();var re=n.memoizedState;v!==xe||ne!==re||Aa||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof T=="function"&&(af(n,a,T,o),re=n.memoizedState),(fe=Aa||Nm(n,a,fe,o,ne,re,B)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,re,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,re,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=re),f.props=o,f.state=re,f.context=B,o=fe):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ol(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=pr(n,e.child,null,c),n.child=pr(n,null,a,c)):Rn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=qi(e,n,c),e}function Zm(e,n,a,o){return lr(),n.flags|=256,Rn(e,n,a,o),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(e){return{baseLanes:e,cachePool:Bp()}}function ff(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Km(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(bt){if(c?wa(n):Da(),(e=Kt)?(e=ax(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,Tn=n,Kt=null)):e=null,e===null)throw Ea(n);return Yf(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(Da(),c=n.mode,T=Pl({mode:"hidden",children:T},c),o=or(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=cf(a),o.childLanes=ff(e,v,a),n.memoizedState=uf,co(null,o)):(wa(n),hf(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(wa(n),n.flags&=-257,n=df(e,n,a)):n.memoizedState!==null?(Da(),n.child=e.child,n.flags|=128,n=null):(Da(),T=o.fallback,c=n.mode,o=Pl({mode:"visible",children:o.children},c),T=or(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,pr(n,e.child,null,a),o=n.child,o.memoizedState=cf(a),o.childLanes=ff(e,v,a),n.memoizedState=uf,n=co(null,o));else if(wa(n),Yf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var J=v.dgst;v=J,o=Error(r(419)),o.stack="",o.digest=v,Js({value:o,source:null,stack:null}),n=df(e,n,a)}else if(cn||Xr(e,n,a,!1),v=(a&e.childLanes)!==0,cn||v){if(v=qt,v!==null&&(o=Bs(v,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,sr(e,o),Gn(v,e,o),of;qf(T)||Xl(),n=df(e,n,a)}else qf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Kt=ui(T.nextSibling),Tn=n,bt=!0,ba=null,oi=!1,e!==null&&Lp(n,e),n=hf(n,o.children),n.flags|=4096);return n}return c?(Da(),T=o.fallback,c=n.mode,B=e.child,J=B.sibling,o=Hi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,J!==null?T=Hi(J,T):(T=or(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,co(null,o),o=n.child,T=e.child.memoizedState,T===null?T=cf(a):(c=T.cachePool,c!==null?(B=ln._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Bp(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=ff(e,v,a),n.memoizedState=uf,co(e.child,o)):(wa(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function hf(e,n){return n=Pl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function df(e,n,a){return pr(n,e.child,null,a),e=hf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Rc(e.return,n,a)}function pf(e,n,a,o,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Jm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var v=nn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,Se(nn,v),Rn(e,n,o,a),o=bt?Qs:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,a,n);else if(e.tag===19)Qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),pf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&bl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}pf(n,!0,a,null,f,o);break;case"together":pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Na|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function Fv(e,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),Ta(n,ln,e.memoizedState.cache),lr();break;case 27:case 5:He(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ic(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(e,n,a):(wa(n),e=qi(e,n,a),e!==null?e.sibling:null);wa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Jm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(nn,nn.current),o)break;return null;case 22:return n.lanes=0,Xm(e,n,a,n.pendingProps);case 24:Ta(n,ln,e.memoizedState.cache)}return qi(e,n,a)}function $m(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!mf(e,a)&&(n.flags&128)===0)return cn=!1,Fv(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,bt&&(n.flags&1048576)!==0&&Up(n,Qs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=hr(n.elementType),n.type=e,typeof e=="function")vc(e)?(o=xr(e,o),n.tag=1,n=jm(null,n,e,o,a)):(n.tag=0,n=lf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===z){n.tag=11,n=Gm(null,n,e,o,a);break e}else if(c===P){n.tag=14,n=Vm(null,n,e,o,a);break e}}throw n=he(e)||e,Error(r(306,n,""))}}return n;case 0:return lf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=xr(o,n.pendingProps),jm(e,n,o,c,a);case 3:e:{if(we(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Oc(e,n),ro(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ta(n,ln,o),o!==f.cache&&Cc(n,[ln],a,!0),ao(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zm(e,n,o,a);break e}else if(o!==c){c=ai(Error(r(424)),n),Js(c),n=Zm(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Kt=ui(e.firstChild),Tn=n,bt=!0,ba=null,oi=!0,a=Xp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(lr(),o===c){n=qi(e,n,a);break e}Rn(e,n,o,a)}n=n.child}return n;case 26:return Ol(e,n),e===null?(a=cx(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,e=n.pendingProps,o=Ql(ee.current).createElement(a),o[on]=n,o[dn]=e,Cn(o,a,e),$(o),n.stateNode=o):n.memoizedState=cx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return He(n),e===null&&bt&&(o=n.stateNode=ox(n.type,n.pendingProps,ee.current),Tn=n,oi=!0,c=Kt,Ba(n.type)?(jf=c,Kt=ui(o.firstChild)):Kt=c),Rn(e,n,n.pendingProps.children,a),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&bt&&((c=o=Kt)&&(o=dS(o,n.type,n.pendingProps,oi),o!==null?(n.stateNode=o,Tn=n,Kt=ui(o.firstChild),oi=!1,c=!0):c=!1),c||Ea(n)),He(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,kf(c,f)?o=null:v!==null&&kf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Gc(e,n,Cv,null,null,a),Ao._currentValue=c),Ol(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&bt&&((e=a=Kt)&&(a=pS(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Tn=n,Kt=null,e=!0):e=!1),e||Ea(n)),null;case 13:return Km(e,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=pr(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return Gm(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,cr(n),c=An(c),o=o(c),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return Vm(e,n,n.type,n.pendingProps,a);case 15:return km(e,n,n.type,n.pendingProps,a);case 19:return Jm(e,n,a);case 31:return zv(e,n,a);case 22:return Xm(e,n,a,n.pendingProps);case 24:return cr(n),o=An(ln),e===null?(c=Uc(),c===null&&(c=qt,f=wc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Nc(n),Ta(n,ln,c)):((e.lanes&a)!==0&&(Oc(e,n),ro(n,null,null,a),ao()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ta(n,ln,o)):(o=f.cache,Ta(n,ln,o),o!==c.cache&&Cc(n,[ln],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(e){e.flags|=4}function xf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(A0())e.flags|=8192;else throw dr=vl,Lc}else e.flags&=-16777217}function e0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mx(n))if(A0())e.flags|=8192;else throw dr=vl,Lc}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ft():536870912,e.lanes|=n,ns|=n)}function fo(e,n){if(!bt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Bv(e,n,a){var o=n.pendingProps;switch(bc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(ln),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tc())),Qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Yi(n),f!==null?(Qt(n),e0(n,f)):(Qt(n),xf(n,c,null,o,a))):f?f!==e.memoizedState?(Yi(n),Qt(n),e0(n,f)):(Qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Yi(n),Qt(n),xf(n,c,e,o,a)),null;case 27:if(rt(n),a=ee.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}e=Te.current,kr(n)?Np(n):(e=ox(c,o,a),n.stateNode=e,Yi(n))}return Qt(n),null;case 5:if(rt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(f=Te.current,kr(n))Np(n);else{var v=Ql(ee.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}f[on]=n,f[dn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Yi(n)}}return Qt(n),xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ee.current,kr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||K0(e.nodeValue,a)),e||Ea(n,!0)}else e=Ql(e).createTextNode(o),e[on]=n,n.stateNode=e}return Qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=kr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[on]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),e=!1}else a=Tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=kr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),c=!1}else c=Tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),Qt(n),null);case 4:return ze(),e===null&&Bf(n.stateNode.containerInfo),Qt(n),null;case 10:return ki(n.type),Qt(n),null;case 19:if(ie(nn),o=n.memoizedState,o===null)return Qt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)fo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,fo(o,!1),e=f.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Cp(a,e),a=a.sibling;return Se(nn,nn.current&1|2),bt&&Gi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Gl&&(n.flags|=128,c=!0,fo(o,!1),n.lanes=4194304)}else{if(!c)if(e=bl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return Qt(n),null}else 2*b()-o.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,c=!0,fo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=nn.current,Se(nn,c?a&1|2:a&1),bt&&Gi(n,o.treeForkCount),e):(Qt(n),null);case 22:case 23:return Kn(n),Bc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ie(fr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(ln),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Iv(e,n){switch(bc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(ln),ze(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return rt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(nn),null;case 4:return ze(),null;case 10:return ki(n.type),null;case 22:case 23:return Kn(n),Bc(),e!==null&&ie(fr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(ln),null;case 25:return null;default:return null}}function t0(e,n){switch(bc(n),n.tag){case 3:ki(ln),ze();break;case 26:case 27:case 5:rt(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:ie(nn);break;case 10:ki(n.type);break;case 22:case 23:Kn(n),Bc(),e!==null&&ie(fr);break;case 24:ki(ln)}}function ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==c)}}catch(T){zt(n,n.return,T)}}function Ua(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var B=a,J=T;try{J()}catch(fe){zt(c,B,fe)}}}o=o.next}while(o!==f)}}catch(fe){zt(n,n.return,fe)}}function n0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{qp(n,a)}catch(o){zt(e,e.return,o)}}}function i0(e,n,a){a.props=xr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){zt(e,n,o)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){zt(e,n,c)}}function Ri(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function a0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function gf(e,n,a){try{var o=e.stateNode;oS(o,e.type,a,n),o[dn]=n}catch(c){zt(e,e.return,c)}}function r0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function _f(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||r0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(vf(e,n,a),e=e.sibling;e!==null;)vf(e,n,a),e=e.sibling}function Fl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fl(e,n,a),e=e.sibling;e!==null;)Fl(e,n,a),e=e.sibling}function s0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,o,a),n[on]=e,n[dn]=a}catch(f){zt(e,e.return,f)}}var ji=!1,fn=!1,Sf=!1,o0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Hv(e,n){if(e=e.containerInfo,Gf=au,e=vp(e),hc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,B=-1,J=0,fe=0,xe=e,ne=null;t:for(;;){for(var re;xe!==a||c!==0&&xe.nodeType!==3||(T=v+c),xe!==f||o!==0&&xe.nodeType!==3||(B=v+o),xe.nodeType===3&&(v+=xe.nodeValue.length),(re=xe.firstChild)!==null;)ne=xe,xe=re;for(;;){if(xe===e)break t;if(ne===a&&++J===c&&(T=v),ne===f&&++fe===o&&(B=v),(re=xe.nextSibling)!==null)break;xe=ne,ne=xe.parentNode}xe=re}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:e,selectionRange:a},au=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ge=xr(a.type,c);e=o.getSnapshotBeforeUpdate(Ge,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(et){zt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function l0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(e,a),o&4&&ho(5,a);break;case 1:if(Ki(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){zt(a,a.return,v)}else{var c=xr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){zt(a,a.return,v)}}o&64&&n0(a),o&512&&po(a,a.return);break;case 3:if(Ki(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(e,n)}catch(v){zt(a,a.return,v)}}break;case 27:n===null&&o&4&&s0(a);case 26:case 5:Ki(e,a),n===null&&o&4&&a0(a),o&512&&po(a,a.return);break;case 12:Ki(e,a);break;case 31:Ki(e,a),o&4&&f0(e,a);break;case 13:Ki(e,a),o&4&&h0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zv.bind(null,a),mS(e,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||fn,c=ji;var f=fn;ji=o,(fn=n)&&!f?Qi(e,a,(a.subtreeFlags&8772)!==0):Ki(e,a),ji=c,fn=f}break;case 30:break;default:Ki(e,a)}}function u0(e){var n=e.alternate;n!==null&&(e.alternate=null,u0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Gs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Fn=!1;function Zi(e,n,a){for(a=a.child;a!==null;)c0(e,n,a),a=a.sibling}function c0(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:fn||Ri(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ri(a,n);var o=Jt,c=Fn;Ba(a.type)&&(Jt=a.stateNode,Fn=!1),Zi(e,n,a),bo(a.stateNode),Jt=o,Fn=c;break;case 5:fn||Ri(a,n);case 6:if(o=Jt,c=Fn,Jt=null,Zi(e,n,a),Jt=o,Fn=c,Jt!==null)if(Fn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Jt!==null&&(Fn?(e=Jt,nx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cs(e)):nx(Jt,a.stateNode));break;case 4:o=Jt,c=Fn,Jt=a.stateNode.containerInfo,Fn=!0,Zi(e,n,a),Jt=o,Fn=c;break;case 0:case 11:case 14:case 15:Ua(2,a,n),fn||Ua(4,a,n),Zi(e,n,a);break;case 1:fn||(Ri(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&i0(a,n,o)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,Zi(e,n,a),fn=o;break;default:Zi(e,n,a)}}function f0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cs(e)}catch(a){zt(n,n.return,a)}}}function h0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cs(e)}catch(a){zt(n,n.return,a)}}function Gv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new o0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new o0),n;default:throw Error(r(435,e.tag))}}function Bl(e,n){var a=Gv(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Kv.bind(null,e,o);o.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ba(T.type)){Jt=T.stateNode,Fn=!1;break e}break;case 5:Jt=T.stateNode,Fn=!1;break e;case 3:case 4:Jt=T.stateNode.containerInfo,Fn=!0;break e}T=T.return}if(Jt===null)throw Error(r(160));c0(f,v,c),Jt=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d0(n,e),n=n.sibling}var gi=null;function d0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),In(e),o&4&&(Ua(3,e,e.return),ho(3,e),Ua(5,e,e.return));break;case 1:Bn(n,e),In(e),o&512&&(fn||a===null||Ri(a,a.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=gi;if(Bn(n,e),In(e),o&512&&(fn||a===null||Ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[nr]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,o,a),f[on]=e,$(f),o=f;break e;case"link":var v=dx("link","href",c).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=c.createElement(o),Cn(f,o,a),c.head.appendChild(f);break;case"meta":if(v=dx("meta","content",c).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=c.createElement(o),Cn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=e,$(f),o=f}e.stateNode=o}else px(c,e.type,e.stateNode);else e.stateNode=hx(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?px(c,e.type,e.stateNode):hx(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&gf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),In(e),o&512&&(fn||a===null||Ri(a,a.return)),a!==null&&o&4&&gf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),In(e),o&512&&(fn||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{Ei(c,"")}catch(Ge){zt(e,e.return,Ge)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,gf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Sf=!0);break;case 6:if(Bn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ge){zt(e,e.return,Ge)}}break;case 3:if(eu=null,c=gi,gi=Jl(n.containerInfo),Bn(n,e),gi=c,In(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{cs(n.containerInfo)}catch(Ge){zt(e,e.return,Ge)}Sf&&(Sf=!1,p0(e));break;case 4:o=gi,gi=Jl(e.stateNode.containerInfo),Bn(n,e),In(e),gi=o;break;case 12:Bn(n,e),In(e);break;case 31:Bn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 13:Bn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=ji,fe=fn;if(ji=J||c,fn=fe||B,Bn(n,e),fn=fe,ji=J,In(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ji||fn||gr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var xe=B.memoizedProps.style,ne=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(Ge){zt(B,B.return,Ge)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ge){zt(B,B.return,Ge)}}}else if(n.tag===18){if(a===null){B=n;try{var re=B.stateNode;c?ix(re,!0):ix(B.stateNode,!1)}catch(Ge){zt(B,B.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bl(e,a))));break;case 19:Bn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 30:break;case 21:break;default:Bn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(r0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=_f(e);Fl(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Ei(v,""),a.flags&=-33);var T=_f(e);Fl(e,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,J=_f(e);vf(e,J,B);break;default:throw Error(r(161))}}catch(fe){zt(e,e.return,fe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function p0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;p0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l0(e,n.alternate,n),n=n.sibling}function gr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),gr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&i0(n,n.return,a),gr(n);break;case 27:bo(n.stateNode);case 26:case 5:Ri(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}e=e.sibling}}function Qi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Qi(c,f,a),ho(4,f);break;case 1:if(Qi(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){zt(o,o.return,J)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Wp(B[c],T)}catch(J){zt(o,o.return,J)}}a&&v&64&&n0(f),po(f,f.return);break;case 27:s0(f);case 26:case 5:Qi(c,f,a),a&&o===null&&v&4&&a0(f),po(f,f.return);break;case 12:Qi(c,f,a);break;case 31:Qi(c,f,a),a&&v&4&&f0(c,f);break;case 13:Qi(c,f,a),a&&v&4&&h0(c,f);break;case 22:f.memoizedState===null&&Qi(c,f,a),po(f,f.return);break;case 30:break;default:Qi(c,f,a)}n=n.sibling}}function yf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$s(a))}function Mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e))}function _i(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m0(e,n,a,o),n=n.sibling}function m0(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,o),c&2048&&ho(9,n);break;case 1:_i(e,n,a,o);break;case 3:_i(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e)));break;case 12:if(c&2048){_i(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else _i(e,n,a,o);break;case 31:_i(e,n,a,o);break;case 13:_i(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?_i(e,n,a,o):mo(e,n):f._visibility&2?_i(e,n,a,o):(f._visibility|=2,$r(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&yf(v,n);break;case 24:_i(e,n,a,o),c&2048&&Mf(n.alternate,n);break;default:_i(e,n,a,o)}}function $r(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,B=o,J=v.flags;switch(v.tag){case 0:case 11:case 15:$r(f,v,T,B,c),ho(8,v);break;case 23:break;case 22:var fe=v.stateNode;v.memoizedState!==null?fe._visibility&2?$r(f,v,T,B,c):mo(f,v):(fe._visibility|=2,$r(f,v,T,B,c)),c&&J&2048&&yf(v.alternate,v);break;case 24:$r(f,v,T,B,c),c&&J&2048&&Mf(v.alternate,v);break;default:$r(f,v,T,B,c)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:mo(a,o),c&2048&&yf(o.alternate,o);break;case 24:mo(a,o),c&2048&&Mf(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var xo=8192;function es(e,n,a){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)x0(e,n,a),e=e.sibling}function x0(e,n,a){switch(e.tag){case 26:es(e,n,a),e.flags&xo&&e.memoizedState!==null&&RS(a,gi,e.memoizedState,e.memoizedProps);break;case 5:es(e,n,a);break;case 3:case 4:var o=gi;gi=Jl(e.stateNode.containerInfo),es(e,n,a),gi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=xo,xo=16777216,es(e,n,a),xo=o):es(e,n,a));break;default:es(e,n,a)}}function g0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,v0(o,e)}g0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_0(e),e=e.sibling}function _0(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Il(e)):go(e);break;default:go(e)}}function Il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,v0(o,e)}g0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}e=e.sibling}}function v0(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=e;Mn!==null;){o=Mn;var c=o.sibling,f=o.return;if(u0(o),o===a){Mn=null;break e}if(c!==null){c.return=f,Mn=c;break e}Mn=f}}}var Vv={getCacheForType:function(e){var n=An(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(ln).controller.signal}},kv=typeof WeakMap=="function"?WeakMap:Map,Lt=0,qt=null,gt=null,vt=0,Pt=0,Qn=null,La=!1,ts=!1,bf=!1,Ji=0,tn=0,Na=0,_r=0,Ef=0,Jn=0,ns=0,_o=null,Hn=null,Tf=!1,Hl=0,S0=0,Gl=1/0,Vl=null,Oa=null,mn=0,Pa=null,is=null,$i=0,Af=0,Rf=null,y0=null,vo=0,Cf=null;function $n(){return(Lt&2)!==0&&vt!==0?vt&-vt:F.T!==null?Of():Is()}function M0(){if(Jn===0)if((vt&536870912)===0||bt){var e=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Gn(e,n,a){(e===qt&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)&&(as(e,0),za(e,vt,Jn,!1)),wn(e,a),((Lt&2)===0||e!==qt)&&(e===qt&&((Lt&2)===0&&(_r|=a),tn===4&&za(e,vt,Jn,!1)),Ci(e))}function b0(e,n,a){if((Lt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Be(e,n),c=o?qv(e,n):Df(e,n,!0),f=o;do{if(c===0){ts&&!o&&za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Xv(a)){c=Df(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=e;c=_o;var B=T.current.memoizedState.isDehydrated;if(B&&(as(T,v).flags|=256),v=Df(T,v,!1),v!==2){if(bf&&!B){T.errorRecoveryDisabledLanes|=f,_r|=f,c=4;break e}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){as(e,0),za(e,n,0,!0);break}e:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:za(o,n,Jn,!La);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Hl+300-b(),10<c)){if(za(o,n,Jn,!La),ge(o,0,!0)!==0)break e;$i=n,o.timeoutHandle=ex(E0.bind(null,o,a,Hn,Vl,Tf,n,Jn,_r,ns,La,f,"Throttled",-0,0),c);break e}E0(o,a,Hn,Vl,Tf,n,Jn,_r,ns,La,f,null,-0,0)}}break}while(!0);Ci(e)}function E0(e,n,a,o,c,f,v,T,B,J,fe,xe,ne,re){if(e.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},x0(n,f,xe);var Ge=(f&62914560)===f?Hl-b():(f&4194048)===f?S0-b():0;if(Ge=CS(xe,Ge),Ge!==null){$i=f,e.cancelPendingCommit=Ge(L0.bind(null,e,n,f,a,o,c,v,T,B,fe,xe,null,ne,re)),za(e,f,v,!J);return}}L0(e,n,f,a,o,c,v,T,B)}function Xv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(e,n,a,o){n&=~Ef,n&=~_r,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-ke(c),v=1<<f;o[f]=-1,c&=~v}a!==0&&el(e,a,n)}function kl(){return(Lt&6)===0?(So(0),!1):!0}function wf(){if(gt!==null){if(Pt===0)var e=gt.return;else e=gt,Vi=ur=null,Xc(e),jr=null,to=0,e=gt;for(;e!==null;)t0(e.alternate,e),e=e.return;gt=null}}function as(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$i=0,wf(),qt=e,gt=a=Hi(e.current,null),vt=n,Pt=0,Qn=null,La=!1,ts=Be(e,n),bf=!1,ns=Jn=Ef=_r=Na=tn=0,Hn=_o=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-ke(o),f=1<<c;n|=e[c],o&=~f}return Ji=n,cl(),a}function T0(e,n){ut=null,F.H=uo,n===Yr||n===_l?(n=Gp(),Pt=3):n===Lc?(n=Gp(),Pt=4):Pt=n===of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&(tn=1,Ll(e,ai(n,e.current)))}function A0(){var e=Zn.current;return e===null?!0:(vt&4194048)===vt?li===null:(vt&62914560)===vt||(vt&536870912)!==0?e===li:!1}function R0(){var e=F.H;return F.H=uo,e===null?uo:e}function C0(){var e=F.A;return F.A=Vv,e}function Xl(){tn=4,La||(vt&4194048)!==vt&&Zn.current!==null||(ts=!0),(Na&134217727)===0&&(_r&134217727)===0||qt===null||za(qt,vt,Jn,!1)}function Df(e,n,a){var o=Lt;Lt|=2;var c=R0(),f=C0();(qt!==e||vt!==n)&&(Vl=null,as(e,n)),n=!1;var v=tn;e:do try{if(Pt!==0&&gt!==null){var T=gt,B=Qn;switch(Pt){case 8:wf(),v=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var J=Pt;if(Pt=0,Qn=null,rs(e,T,B,J),a&&ts){v=0;break e}break;default:J=Pt,Pt=0,Qn=null,rs(e,T,B,J)}}Wv(),v=tn;break}catch(fe){T0(e,fe)}while(!0);return n&&e.shellSuspendCounter++,Vi=ur=null,Lt=o,F.H=c,F.A=f,gt===null&&(qt=null,vt=0,cl()),v}function Wv(){for(;gt!==null;)w0(gt)}function qv(e,n){var a=Lt;Lt|=2;var o=R0(),c=C0();qt!==e||vt!==n?(Vl=null,Gl=b()+500,as(e,n)):ts=Be(e,n);e:do try{if(Pt!==0&&gt!==null){n=gt;var f=Qn;t:switch(Pt){case 1:Pt=0,Qn=null,rs(e,n,f,1);break;case 2:case 9:if(Ip(f)){Pt=0,Qn=null,D0(n);break}n=function(){Pt!==2&&Pt!==9||qt!==e||(Pt=7),Ci(e)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:Ip(f)?(Pt=0,Qn=null,D0(n)):(Pt=0,Qn=null,rs(e,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var T=gt;if(v?mx(v):T.stateNode.complete){Pt=0,Qn=null;var B=T.sibling;if(B!==null)gt=B;else{var J=T.return;J!==null?(gt=J,Wl(J)):gt=null}break t}}Pt=0,Qn=null,rs(e,n,f,5);break;case 6:Pt=0,Qn=null,rs(e,n,f,6);break;case 8:wf(),tn=6;break e;default:throw Error(r(462))}}Yv();break}catch(fe){T0(e,fe)}while(!0);return Vi=ur=null,F.H=o,F.A=c,Lt=a,gt!==null?0:(qt=null,vt=0,cl(),tn)}function Yv(){for(;gt!==null&&!ot();)w0(gt)}function w0(e){var n=$m(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?Wl(e):gt=n}function D0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ym(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Ym(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Xc(n);default:t0(a,n),n=gt=Cp(n,Ji),n=$m(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?Wl(e):gt=n}function rs(e,n,a,o){Vi=ur=null,Xc(n),jr=null,to=0;var c=n.return;try{if(Pv(e,c,n,a,vt)){tn=1,Ll(e,ai(a,e.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;tn=1,Ll(e,ai(a,e.current)),gt=null;return}n.flags&32768?(bt||o===1?e=!0:ts||(vt&536870912)!==0?e=!1:(La=e=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),U0(n,e)):Wl(n)}function Wl(e){var n=e;do{if((n.flags&32768)!==0){U0(n,La);return}e=n.return;var a=Bv(n.alternate,n,Ji);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);tn===0&&(tn=5)}function U0(e,n){do{var a=Iv(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);tn=6,gt=null}function L0(e,n,a,o,c,f,v,T,B){e.cancelPendingCommit=null;do ql();while(mn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=gc,Wn(e,a,f,v,T,B),e===qt&&(gt=qt=null,vt=0),is=n,Pa=e,$i=a,Af=f,Rf=c,y0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qv(le,function(){return F0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,c=Y.p,Y.p=2,v=Lt,Lt|=4;try{Hv(e,n,a)}finally{Lt=v,Y.p=c,F.T=o}}mn=1,N0(),O0(),P0()}}function N0(){if(mn===1){mn=0;var e=Pa,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=Y.p;Y.p=2;var c=Lt;Lt|=4;try{d0(n,e);var f=Vf,v=vp(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&_p(T.ownerDocument.documentElement,T)){if(B!==null&&hc(T)){var J=B.start,fe=B.end;if(fe===void 0&&(fe=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(fe,T.value.length);else{var xe=T.ownerDocument||document,ne=xe&&xe.defaultView||window;if(ne.getSelection){var re=ne.getSelection(),Ge=T.textContent.length,et=Math.min(B.start,Ge),Ht=B.end===void 0?et:Math.min(B.end,Ge);!re.extend&&et>Ht&&(v=Ht,Ht=et,et=v);var j=gp(T,et),X=gp(T,Ht);if(j&&X&&(re.rangeCount!==1||re.anchorNode!==j.node||re.anchorOffset!==j.offset||re.focusNode!==X.node||re.focusOffset!==X.offset)){var K=xe.createRange();K.setStart(j.node,j.offset),re.removeAllRanges(),et>Ht?(re.addRange(K),re.extend(X.node,X.offset)):(K.setEnd(X.node,X.offset),re.addRange(K))}}}}for(xe=[],re=T;re=re.parentNode;)re.nodeType===1&&xe.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xe.length;T++){var pe=xe[T];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}au=!!Gf,Vf=Gf=null}finally{Lt=c,Y.p=o,F.T=a}}e.current=n,mn=2}}function O0(){if(mn===2){mn=0;var e=Pa,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=Y.p;Y.p=2;var c=Lt;Lt|=4;try{l0(e,n.alternate,n)}finally{Lt=c,Y.p=o,F.T=a}}mn=3}}function P0(){if(mn===4||mn===3){mn=0,L();var e=Pa,n=is,a=$i,o=y0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,is=Pa=null,z0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Oa=null),tr(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,c=Y.p,Y.p=2,F.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var T=o[v];f(T.value,{componentStack:T.stack})}}finally{F.T=n,Y.p=c}}($i&3)!==0&&ql(),Ci(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Cf?vo++:(vo=0,Cf=e):vo=0,So(0)}}function z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function ql(){return N0(),O0(),P0(),F0()}function F0(){if(mn!==5)return!1;var e=Pa,n=Af;Af=0;var a=tr($i),o=F.T,c=Y.p;try{Y.p=32>a?32:a,F.T=null,a=Rf,Rf=null;var f=Pa,v=$i;if(mn=0,is=Pa=null,$i=0,(Lt&6)!==0)throw Error(r(331));var T=Lt;if(Lt|=4,_0(f.current),m0(f,f.current,v,a),Lt=T,So(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{Y.p=c,F.T=o,z0(e,n)}}function B0(e,n,a){n=ai(a,n),n=sf(e.stateNode,n,2),e=Ca(e,n,2),e!==null&&(wn(e,2),Ci(e))}function zt(e,n,a){if(e.tag===3)B0(e,e,a);else for(;n!==null;){if(n.tag===3){B0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){e=ai(a,e),a=Im(2),o=Ca(n,a,2),o!==null&&(Hm(a,o,n,e),wn(o,2),Ci(o));break}}n=n.return}}function Uf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new kv;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(bf=!0,c.add(a),e=jv.bind(null,e,n,a),n.then(e,e))}function jv(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qt===e&&(vt&a)===a&&(tn===4||tn===3&&(vt&62914560)===vt&&300>b()-Hl?(Lt&2)===0&&as(e,0):Ef|=a,ns===vt&&(ns=0)),Ci(e)}function I0(e,n){n===0&&(n=Ft()),e=sr(e,n),e!==null&&(wn(e,n),Ci(e))}function Zv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),I0(e,a)}function Kv(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),I0(e,a)}function Qv(e,n){return Xt(e,n)}var Yl=null,ss=null,Lf=!1,jl=!1,Nf=!1,Fa=0;function Ci(e){e!==ss&&e.next===null&&(ss===null?Yl=ss=e:ss=ss.next=e),jl=!0,Lf||(Lf=!0,$v())}function So(e,n){if(!Nf&&jl){Nf=!0;do for(var a=!1,o=Yl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var v=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-ke(42|e)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,k0(o,f))}else f=vt,f=ge(o,o===qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Be(o,f)||(a=!0,k0(o,f));o=o.next}while(a);Nf=!1}}function Jv(){H0()}function H0(){jl=Lf=!1;var e=0;Fa!==0&&uS()&&(e=Fa);for(var n=b(),a=null,o=Yl;o!==null;){var c=o.next,f=G0(o,n);f===0?(o.next=null,a===null?Yl=c:a.next=c,c===null&&(ss=a)):(a=o,(e!==0||(f&3)!==0)&&(jl=!0)),o=c}mn!==0&&mn!==5||So(e),Fa!==0&&(Fa=0)}function G0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-ke(f),T=1<<v,B=c[v];B===-1?((T&a)===0||(T&o)!==0)&&(c[v]=at(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=qt,a=vt,a=ge(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&je(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Be(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&je(o),tr(a)){case 2:case 8:a=ye;break;case 32:a=le;break;case 268435456:a=Le;break;default:a=le}return o=V0.bind(null,e),a=Xt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&je(o),e.callbackPriority=2,e.callbackNode=null,2}function V0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var o=vt;return o=ge(e,e===qt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(b0(e,o,n),G0(e,b()),e.callbackNode!=null&&e.callbackNode===a?V0.bind(null,e):null)}function k0(e,n){if(ql())return null;b0(e,n,!0)}function $v(){fS(function(){(Lt&6)!==0?Xt(me,Jv):H0()})}function Of(){if(Fa===0){var e=Wr;e===0&&(e=De,De<<=1,(De&261888)===0&&(De=256)),Fa=e}return Fa}function X0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function W0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function eS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=X0((c[dn]||null).action),v=o.submitter;v&&(n=(n=v[dn]||null)?X0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new sl("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fa!==0){var B=v?W0(c,v):new FormData(c);$c(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?W0(c,v):new FormData(c),$c(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Pf=0;Pf<xc.length;Pf++){var zf=xc[Pf],tS=zf.toLowerCase(),nS=zf[0].toUpperCase()+zf.slice(1);xi(tS,"on"+nS)}xi(Mp,"onAnimationEnd"),xi(bp,"onAnimationIteration"),xi(Ep,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(_v,"onTransitionRun"),xi(vv,"onTransitionStart"),xi(Sv,"onTransitionCancel"),xi(Tp,"onTransitionEnd"),Fe("onMouseEnter",["mouseout","mouseover"]),Fe("onMouseLeave",["mouseout","mouseover"]),Fe("onPointerEnter",["pointerout","pointerover"]),Fe("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function q0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var T=o[v],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=J;try{f(c)}catch(fe){ul(fe)}c.currentTarget=null,f=B}else for(v=0;v<o.length;v++){if(T=o[v],B=T.instance,J=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=J;try{f(c)}catch(fe){ul(fe)}c.currentTarget=null,f=B}}}}function _t(e,n){var a=n[Nr];a===void 0&&(a=n[Nr]=new Set);var o=e+"__bubble";a.has(o)||(Y0(n,e,2,!1),a.add(o))}function Ff(e,n,a){var o=0;n&&(o|=4),Y0(a,e,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Bf(e){if(!e[Zl]){e[Zl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(iS.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Ff("selectionchange",!1,n))}}function Y0(e,n,a,o){switch(Mx(n)){case 2:var c=US;break;case 8:c=LS;break;default:c=$f}a=c.bind(null,n,a,e),c=void 0,!ic||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function If(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=o.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=va(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){o=f=v;continue e}T=T.parentNode}}o=o.return}Jd(function(){var J=f,fe=tc(a),xe=[];e:{var ne=Ap.get(e);if(ne!==void 0){var re=sl,Ge=e;switch(e){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":re=K_;break;case"focusin":Ge="focus",re=oc;break;case"focusout":Ge="blur",re=oc;break;case"beforeblur":case"afterblur":re=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=B_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=$_;break;case Mp:case bp:case Ep:re=G_;break;case Tp:re=tv;break;case"scroll":case"scrollend":re=z_;break;case"wheel":re=iv;break;case"copy":case"cut":case"paste":re=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=ip;break;case"toggle":case"beforetoggle":re=rv}var et=(n&4)!==0,Ht=!et&&(e==="scroll"||e==="scrollend"),j=et?ne!==null?ne+"Capture":null:ne;et=[];for(var X=J,K;X!==null;){var pe=X;if(K=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||K===null||j===null||(pe=Vs(X,j),pe!=null&&et.push(Mo(X,pe,K))),Ht)break;X=X.return}0<et.length&&(ne=new re(ne,Ge,null,a,fe),xe.push({event:ne,listeners:et}))}}if((n&7)===0){e:{if(ne=e==="mouseover"||e==="pointerover",re=e==="mouseout"||e==="pointerout",ne&&a!==ec&&(Ge=a.relatedTarget||a.fromElement)&&(va(Ge)||Ge[Pi]))break e;if((re||ne)&&(ne=fe.window===fe?fe:(ne=fe.ownerDocument)?ne.defaultView||ne.parentWindow:window,re?(Ge=a.relatedTarget||a.toElement,re=J,Ge=Ge?va(Ge):null,Ge!==null&&(Ht=u(Ge),et=Ge.tag,Ge!==Ht||et!==5&&et!==27&&et!==6)&&(Ge=null)):(re=null,Ge=J),re!==Ge)){if(et=tp,pe="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(et=ip,pe="onPointerLeave",j="onPointerEnter",X="pointer"),Ht=re==null?ne:q(re),K=Ge==null?ne:q(Ge),ne=new et(pe,X+"leave",re,a,fe),ne.target=Ht,ne.relatedTarget=K,pe=null,va(fe)===J&&(et=new et(j,X+"enter",Ge,a,fe),et.target=K,et.relatedTarget=Ht,pe=et),Ht=pe,re&&Ge)t:{for(et=aS,j=re,X=Ge,K=0,pe=j;pe;pe=et(pe))K++;pe=0;for(var Ke=X;Ke;Ke=et(Ke))pe++;for(;0<K-pe;)j=et(j),K--;for(;0<pe-K;)X=et(X),pe--;for(;K--;){if(j===X||X!==null&&j===X.alternate){et=j;break t}j=et(j),X=et(X)}et=null}else et=null;re!==null&&j0(xe,ne,re,et,!1),Ge!==null&&Ht!==null&&j0(xe,Ht,Ge,et,!0)}}e:{if(ne=J?q(J):window,re=ne.nodeName&&ne.nodeName.toLowerCase(),re==="select"||re==="input"&&ne.type==="file")var wt=fp;else if(up(ne))if(hp)wt=mv;else{wt=dv;var Xe=hv}else re=ne.nodeName,!re||re.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?J&&$u(J.elementType)&&(wt=fp):wt=pv;if(wt&&(wt=wt(e,J))){cp(xe,wt,a,fe);break e}Xe&&Xe(e,ne,J),e==="focusout"&&J&&ne.type==="number"&&J.memoizedProps.value!=null&&Sn(ne,"number",ne.value)}switch(Xe=J?q(J):window,e){case"focusin":(up(Xe)||Xe.contentEditable==="true")&&(Fr=Xe,dc=J,Ks=null);break;case"focusout":Ks=dc=Fr=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Sp(xe,a,fe);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":Sp(xe,a,fe)}var dt;if(uc)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else zr?op(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(ap&&a.locale!=="ko"&&(zr||St!=="onCompositionStart"?St==="onCompositionEnd"&&zr&&(dt=$d()):(ya=fe,ac="value"in ya?ya.value:ya.textContent,zr=!0)),Xe=Kl(J,St),0<Xe.length&&(St=new np(St,e,null,a,fe),xe.push({event:St,listeners:Xe}),dt?St.data=dt:(dt=lp(a),dt!==null&&(St.data=dt)))),(dt=ov?lv(e,a):uv(e,a))&&(St=Kl(J,"onBeforeInput"),0<St.length&&(Xe=new np("onBeforeInput","beforeinput",null,a,fe),xe.push({event:Xe,listeners:St}),Xe.data=dt)),eS(xe,e,J,a,fe)}q0(xe,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vs(e,a),c!=null&&o.unshift(Mo(e,c,f)),c=Vs(e,n),c!=null&&o.push(Mo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function aS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function j0(e,n,a,o,c){for(var f=n._reactName,v=[];a!==null&&a!==o;){var T=a,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||J===null||(B=J,c?(J=Vs(a,f),J!=null&&v.unshift(Mo(a,J,B))):c||(J=Vs(a,f),J!=null&&v.push(Mo(a,J,B)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var rS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function Z0(e){return(typeof e=="string"?e:""+e).replace(rS,`
`).replace(sS,"")}function K0(e,n){return n=Z0(n),Z0(e)===n}function It(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ei(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ei(e,""+o);break;case"className":At(e,"class",o);break;case"tabIndex":At(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":At(e,a,o);break;case"style":Kd(e,o,f);break;case"data":if(n!=="object"){At(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"onScroll":o!=null&&_t("scroll",e);break;case"onScrollEnd":o!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=nl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_t("beforetoggle",e),_t("toggle",e),ht(e,"popover",o);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ht(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=O_.get(a)||a,ht(e,a,o))}}function Hf(e,n,a,o,c,f){switch(a){case"style":Kd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ei(e,o):(typeof o=="number"||typeof o=="bigint")&&Ei(e,""+o);break;case"onScroll":o!=null&&_t("scroll",e);break;case"onScrollEnd":o!=null&&_t("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ae.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ht(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,f,v,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),o&&It(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var T=f=v=c=null,B=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var fe=a[o];if(fe!=null)switch(o){case"name":c=fe;break;case"type":v=fe;break;case"checked":B=fe;break;case"defaultChecked":J=fe;break;case"value":f=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:It(e,n,o,fe,a,null)}}jt(e,f,T,B,J,v,c,!1);return;case"select":_t("invalid",e),o=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:It(e,n,c,T,a,null)}n=f,a=v,e.multiple=!!o,n!=null?pn(e,!!o,n,!1):a!=null&&pn(e,!!o,a,!0);return;case"textarea":_t("invalid",e),f=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:It(e,n,v,T,a,null)}En(e,o,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:It(e,n,B,o,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)_t(yo[o],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,J,o,a,null)}return;default:if($u(n)){for(fe in a)a.hasOwnProperty(fe)&&(o=a[fe],o!==void 0&&Hf(e,n,fe,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&It(e,n,T,o,a,null))}function oS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,B=null,J=null,fe=null;for(re in a){var xe=a[re];if(a.hasOwnProperty(re)&&xe!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":B=xe;default:o.hasOwnProperty(re)||It(e,n,re,null,o,xe)}}for(var ne in o){var re=o[ne];if(xe=a[ne],o.hasOwnProperty(ne)&&(re!=null||xe!=null))switch(ne){case"type":f=re;break;case"name":c=re;break;case"checked":J=re;break;case"defaultChecked":fe=re;break;case"value":v=re;break;case"defaultValue":T=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:re!==xe&&It(e,n,ne,re,o,xe)}}zi(e,v,T,B,J,fe,f,c);return;case"select":re=v=T=ne=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":re=B;default:o.hasOwnProperty(f)||It(e,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ne=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&It(e,n,c,f,o,B)}n=T,a=v,o=re,ne!=null?pn(e,!!a,ne,!1):!!o!=!!a&&(n!=null?pn(e,!!a,n,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":re=ne=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:It(e,n,T,null,o,c)}for(v in o)if(c=o[v],f=a[v],o.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":ne=c;break;case"defaultValue":re=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(e,n,v,c,o,f)}yn(e,ne,re);return;case"option":for(var Ge in a)if(ne=a[Ge],a.hasOwnProperty(Ge)&&ne!=null&&!o.hasOwnProperty(Ge))switch(Ge){case"selected":e.selected=!1;break;default:It(e,n,Ge,null,o,ne)}for(B in o)if(ne=o[B],re=a[B],o.hasOwnProperty(B)&&ne!==re&&(ne!=null||re!=null))switch(B){case"selected":e.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:It(e,n,B,ne,o,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ne=a[et],a.hasOwnProperty(et)&&ne!=null&&!o.hasOwnProperty(et)&&It(e,n,et,null,o,ne);for(J in o)if(ne=o[J],re=a[J],o.hasOwnProperty(J)&&ne!==re&&(ne!=null||re!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:It(e,n,J,ne,o,re)}return;default:if($u(n)){for(var Ht in a)ne=a[Ht],a.hasOwnProperty(Ht)&&ne!==void 0&&!o.hasOwnProperty(Ht)&&Hf(e,n,Ht,void 0,o,ne);for(fe in o)ne=o[fe],re=a[fe],!o.hasOwnProperty(fe)||ne===re||ne===void 0&&re===void 0||Hf(e,n,fe,ne,o,re);return}}for(var j in a)ne=a[j],a.hasOwnProperty(j)&&ne!=null&&!o.hasOwnProperty(j)&&It(e,n,j,null,o,ne);for(xe in o)ne=o[xe],re=a[xe],!o.hasOwnProperty(xe)||ne===re||ne==null&&re==null||It(e,n,xe,ne,o,re)}function Q0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&Q0(v)){for(v=0,T=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],J=B.startTime;if(J>T)break;var fe=B.transferSize,xe=B.initiatorType;fe&&Q0(xe)&&(B=B.responseEnd,v+=fe*(B<T?1:(T-J)/(B-J)))}if(--o,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gf=null,Vf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function J0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function uS(){var e=window.event;return e&&e.type==="popstate"?e===Xf?!1:(Xf=e,!0):(Xf=null,!1)}var ex=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,tx=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof tx<"u"?function(e){return tx.resolve(null).then(e).catch(hS)}:ex;function hS(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function nx(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),cs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[nr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&bo(e.ownerDocument.body);a=c}while(a);cs(n)}function ix(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Wf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wf(a),Gs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[nr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function pS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function ax(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function qf(e){return e.data==="$?"||e.data==="$~"}function Yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var jf=null;function rx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function sx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ox(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gs(e)}var ci=new Map,lx=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=Y.d;Y.d={f:xS,r:gS,D:_S,C:vS,L:SS,m:yS,X:bS,S:MS,M:ES};function xS(){var e=ea.f(),n=kl();return e||n}function gS(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?Tm(n):ea.r(e)}var os=typeof document>"u"?null:document;function ux(e,n,a){var o=os;if(o&&typeof n=="string"&&n){var c=Yt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),lx.has(c)||(lx.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Cn(n,"link",e),$(n),o.head.appendChild(n)))}}function _S(e){ea.D(e),ux("dns-prefetch",e,null)}function vS(e,n){ea.C(e,n),ux("preconnect",e,n)}function SS(e,n,a){ea.L(e,n,a);var o=os;if(o&&e&&n){var c='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Yt(a.imageSizes)+'"]')):c+='[href="'+Yt(e)+'"]';var f=c;switch(n){case"style":f=ls(e);break;case"script":f=us(e)}ci.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Eo(f))||n==="script"&&o.querySelector(To(f))||(n=o.createElement("link"),Cn(n,"link",e),$(n),o.head.appendChild(n)))}}function yS(e,n){ea.m(e,n);var a=os;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Yt(o)+'"][href="'+Yt(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(e)}if(!ci.has(f)&&(e=g({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}o=a.createElement("link"),Cn(o,"link",e),$(o),a.head.appendChild(o)}}}function MS(e,n,a){ea.S(e,n,a);var o=os;if(o&&e){var c=ae(o).hoistableStyles,f=ls(e);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(Eo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Zf(e,a);var B=v=o.createElement("link");$(B),Cn(B,"link",e),B._p=new Promise(function(J,fe){B.onload=J,B.onerror=fe}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,$l(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function bS(e,n){ea.X(e,n);var a=os;if(a&&e){var o=ae(a).hoistableScripts,c=us(e),f=o.get(c);f||(f=a.querySelector(To(c)),f||(e=g({src:e,async:!0},n),(n=ci.get(c))&&Kf(e,n),f=a.createElement("script"),$(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function ES(e,n){ea.M(e,n);var a=os;if(a&&e){var o=ae(a).hoistableScripts,c=us(e),f=o.get(c);f||(f=a.querySelector(To(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&Kf(e,n),f=a.createElement("script"),$(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function cx(e,n,a,o){var c=(c=ee.current)?Jl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=ae(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ls(a.href);var f=ae(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(Eo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||TS(c,e,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=ae(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ls(e){return'href="'+Yt(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function fx(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function TS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),$(n),e.head.appendChild(n))}function us(e){return'[src="'+Yt(e)+'"]'}function To(e){return"script[async]"+e}function hx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(o)return n.instance=o,$(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),$(o),Cn(o,"style",c),$l(o,a.precedence,e),n.instance=o;case"stylesheet":c=ls(a.href);var f=e.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,$(f),f;o=fx(a),(c=ci.get(c))&&Zf(o,c),f=(e.ownerDocument||e).createElement("link"),$(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Cn(f,"link",o),n.state.loading|=4,$l(f,a.precedence,e),n.instance=f;case"script":return f=us(a.src),(c=e.querySelector(To(f)))?(n.instance=c,$(c),c):(o=a,(c=ci.get(f))&&(o=g({},a),Kf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),$(c),Cn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,e));return n.instance}function $l(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var eu=null;function dx(e,n,a){if(eu===null){var o=new Map,c=eu=new Map;c.set(a,o)}else c=eu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[nr]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=o.get(v);T?T.push(f):o.set(v,[f])}}return o}function px(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function AS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function RS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ls(o.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=tu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,$(f);return}f=n.ownerDocument||n,o=fx(o),(c=ci.get(c))&&Zf(o,c),f=f.createElement("link"),$(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Cn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function CS(e,n){return e.stylesheets&&e.count===0&&iu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&iu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Qf===0&&(Qf=62500*lS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&iu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Qf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)iu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nu=null;function iu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nu=new Map,n.forEach(wS,e),nu=null,tu.call(e))}function wS(e,n){if(!(n.state.loading&4)){var a=nu.get(e);if(a)var o=a.get(null);else{a=new Map,nu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,c),a.set(v,c),this.count++,o=tu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:U,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function DS(e,n,a,o,c,f,v,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function xx(e,n,a,o,c,f,v,T,B,J,fe,xe){return e=new DS(e,n,a,v,B,J,fe,xe,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=wc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Nc(f),e}function gx(e){return e?(e=Hr,e):Hr}function _x(e,n,a,o,c,f){c=gx(c),o.context===null?o.context=c:o.pendingContext=c,o=Ra(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ca(e,o,n),a!==null&&(Gn(a,e,n),io(a,e,n))}function vx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jf(e,n){vx(e,n),(e=e.alternate)&&vx(e,n)}function Sx(e){if(e.tag===13||e.tag===31){var n=sr(e,67108864);n!==null&&Gn(n,e,67108864),Jf(e,67108864)}}function yx(e){if(e.tag===13||e.tag===31){var n=$n();n=mi(n);var a=sr(e,n);a!==null&&Gn(a,e,n),Jf(e,n)}}var au=!0;function US(e,n,a,o){var c=F.T;F.T=null;var f=Y.p;try{Y.p=2,$f(e,n,a,o)}finally{Y.p=f,F.T=c}}function LS(e,n,a,o){var c=F.T;F.T=null;var f=Y.p;try{Y.p=8,$f(e,n,a,o)}finally{Y.p=f,F.T=c}}function $f(e,n,a,o){if(au){var c=eh(o);if(c===null)If(e,n,o,ru,a),bx(e,o);else if(OS(c,e,n,a,o))o.stopPropagation();else if(bx(e,o),n&4&&-1<NS.indexOf(e)){for(;c!==null;){var f=R(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=be(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-ke(v);T.entanglements[1]|=B,v&=~B}Ci(f),(Lt&6)===0&&(Gl=b()+500,So(0))}}break;case 31:case 13:T=sr(f,2),T!==null&&Gn(T,f,2),kl(),Jf(f,2)}if(f=eh(o),f===null&&If(e,n,o,ru,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else If(e,n,o,null,a)}}function eh(e){return e=tc(e),th(e)}var ru=null;function th(e){if(ru=null,e=va(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ru=e,null}function Mx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case me:return 2;case ye:return 8;case le:case qe:return 32;case Le:return 268435456;default:return 32}default:return 32}}var nh=!1,Ia=null,Ha=null,Ga=null,Ro=new Map,Co=new Map,Va=[],NS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bx(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=R(n),n!==null&&Sx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function OS(e,n,a,o,c){switch(n){case"focusin":return Ia=wo(Ia,e,n,a,o,c),!0;case"dragenter":return Ha=wo(Ha,e,n,a,o,c),!0;case"mouseover":return Ga=wo(Ga,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,o,c)),!0}return!1}function Ex(e){var n=va(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Hs(e.priority,function(){yx(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Hs(e.priority,function(){yx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function su(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ec=o,a.target.dispatchEvent(o),ec=null}else return n=R(a),n!==null&&Sx(n),e.blockedOn=a,!1;n.shift()}return!0}function Tx(e,n,a){su(e)&&a.delete(n)}function PS(){nh=!1,Ia!==null&&su(Ia)&&(Ia=null),Ha!==null&&su(Ha)&&(Ha=null),Ga!==null&&su(Ga)&&(Ga=null),Ro.forEach(Tx),Co.forEach(Tx)}function ou(e,n){e.blockedOn===n&&(e.blockedOn=null,nh||(nh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,PS)))}var lu=null;function Ax(e){lu!==e&&(lu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lu===e&&(lu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(th(o||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,$c(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function cs(e){function n(B){return ou(B,e)}Ia!==null&&ou(Ia,e),Ha!==null&&ou(Ha,e),Ga!==null&&ou(Ga,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Va.length;a++){var o=Va[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)Ex(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],v=c[dn]||null;if(typeof f=="function")v||Ax(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[dn]||null)T=v.formAction;else if(th(c)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Ax(a)}}}function Rx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ih(e){this._internalRoot=e}uu.prototype.render=ih.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();_x(a,o,e,n,null,null)},uu.prototype.unmount=ih.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_x(e.current,2,null,e,null,null),kl(),n[Pi]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Is();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,e),a===0&&Ex(e)}};var Cx=t.version;if(Cx!=="19.2.0")throw Error(r(527,Cx,"19.2.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var zS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Me=cu.inject(zS),Ee=cu}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Pm,f=zm,v=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=xx(e,1,!1,null,null,a,o,null,c,f,v,Rx),e[Pi]=n.current,Bf(e),new ih(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=Pm,v=zm,T=Fm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=xx(e,1,!0,n,a??null,o,c,B,f,v,T,Rx),n.context=gx(null),a=n.current,o=$n(),o=mi(o),c=Ra(o),c.callback=null,Ca(a,c,o),a=o,n.current.lanes=a,wn(n,a),Ci(n),e[Pi]=n.current,Bf(e),new uu(n)},Uo.version="19.2.0",Uo}var Bx;function qS(){if(Bx)return sh.exports;Bx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),sh.exports=WS(),sh.exports}var YS=qS();var Ix="popstate";function jS(s={}){function t(r,l){let{pathname:u,search:h,hash:d}=r.location;return Vh("",{pathname:u,search:h,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Ho(l)}return KS(t,i,null,s)}function $t(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Li(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ZS(){return Math.random().toString(36).substring(2,10)}function Hx(s,t){return{usr:s.state,key:s.key,idx:t}}function Vh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Ls(t):t,state:i,key:t&&t.key||r||ZS()}}function Ho({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ls(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function KS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",m=null,p=x();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function x(){return(h.state||{idx:null}).idx}function g(){d="POP";let y=x(),_=y==null?null:y-p;p=y,m&&m({action:d,location:A.location,delta:_})}function S(y,_){d="PUSH";let D=Vh(A.location,y,_);p=x()+1;let U=Hx(D,p),z=A.createHref(D);try{h.pushState(U,"",z)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(z)}u&&m&&m({action:d,location:A.location,delta:1})}function M(y,_){d="REPLACE";let D=Vh(A.location,y,_);p=x();let U=Hx(D,p),z=A.createHref(D);h.replaceState(U,"",z),u&&m&&m({action:d,location:A.location,delta:0})}function E(y){return QS(y)}let A={get action(){return d},get location(){return s(l,h)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Ix,g),m=y,()=>{l.removeEventListener(Ix,g),m=null}},createHref(y){return t(l,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:S,replace:M,go(y){return h.go(y)}};return A}function QS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Ho(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Vg(s,t,i="/"){return JS(s,t,i,!1)}function JS(s,t,i,r){let l=typeof t=="string"?Ls(t):t,u=pa(l.pathname||"/",i);if(u==null)return null;let h=kg(s);$S(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let p=cy(u);d=ly(h[m],p,r)}return d}function kg(s,t=[],i=[],r="",l=!1){let u=(h,d,m=l,p)=>{let x={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:d,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(r)&&m)return;$t(x.relativePath.startsWith(r),`Absolute route path "${x.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(r.length)}let g=fa([r,x.relativePath]),S=i.concat(x);h.children&&h.children.length>0&&($t(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),kg(h.children,t,S,g,m)),!(h.path==null&&!h.index)&&t.push({path:g,score:sy(g,h.index),routesMeta:S})};return s.forEach((h,d)=>{if(h.path===""||!h.path?.includes("?"))u(h,d);else for(let m of Xg(h.path))u(h,d,!0,m)}),t}function Xg(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=Xg(r.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...h),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function $S(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:oy(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var ey=/^:[\w-]+$/,ty=3,ny=2,iy=1,ay=10,ry=-2,Gx=s=>s==="*";function sy(s,t){let i=s.split("/"),r=i.length;return i.some(Gx)&&(r+=ry),t&&(r+=ny),i.filter(l=>!Gx(l)).reduce((l,u)=>l+(ey.test(u)?ty:u===""?iy:ay),r)}function oy(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function ly(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,x=u==="/"?t:t.slice(u.length)||"/",g=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),S=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(l,g.params),h.push({params:l,pathname:fa([u,g.pathname]),pathnameBase:py(fa([u,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(u=fa([u,g.pathnameBase]))}return h}function Gu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=uy(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:x,isOptional:g},S)=>{if(x==="*"){let E=d[S]||"";h=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[S];return g&&!M?p[x]=void 0:p[x]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:h,pattern:s}}function uy(s,t=!1,i=!0){Li(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function cy(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Li(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function pa(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function fy(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ls(s):s;return{pathname:i?i.startsWith("/")?i:hy(i,t):t,search:my(r),hash:xy(l)}}function hy(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ch(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dy(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Wg(s){let t=dy(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function qg(s,t,i,r=!1){let l;typeof s=="string"?l=Ls(s):(l={...s},$t(!l.pathname||!l.pathname.includes("?"),ch("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),ch("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),ch("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let g=t.length-1;if(!r&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),g-=1;l.pathname=S.join("/")}d=g>=0?t[g]:"/"}let m=fy(l,d),p=h&&h!=="/"&&h.endsWith("/"),x=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var fa=s=>s.join("/").replace(/\/\/+/g,"/"),py=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),my=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,xy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function gy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Yg=["POST","PUT","PATCH","DELETE"];new Set(Yg);var _y=["GET",...Yg];new Set(_y);var Ns=de.createContext(null);Ns.displayName="DataRouter";var Wu=de.createContext(null);Wu.displayName="DataRouterState";de.createContext(!1);var jg=de.createContext({isTransitioning:!1});jg.displayName="ViewTransition";var vy=de.createContext(new Map);vy.displayName="Fetchers";var Sy=de.createContext(null);Sy.displayName="Await";var Oi=de.createContext(null);Oi.displayName="Navigation";var qo=de.createContext(null);qo.displayName="Location";var _a=de.createContext({outlet:null,matches:[],isDataRoute:!1});_a.displayName="Route";var Od=de.createContext(null);Od.displayName="RouteError";function yy(s,{relative:t}={}){$t(Yo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=de.useContext(Oi),{hash:l,pathname:u,search:h}=jo(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:fa([i,u])),r.createHref({pathname:d,search:h,hash:l})}function Yo(){return de.useContext(qo)!=null}function Lr(){return $t(Yo(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(qo).location}var Zg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kg(s){de.useContext(Oi).static||de.useLayoutEffect(s)}function My(){let{isDataRoute:s}=de.useContext(_a);return s?Py():by()}function by(){$t(Yo(),"useNavigate() may be used only in the context of a <Router> component.");let s=de.useContext(Ns),{basename:t,navigator:i}=de.useContext(Oi),{matches:r}=de.useContext(_a),{pathname:l}=Lr(),u=JSON.stringify(Wg(r)),h=de.useRef(!1);return Kg(()=>{h.current=!0}),de.useCallback((m,p={})=>{if(Li(h.current,Zg),!h.current)return;if(typeof m=="number"){i.go(m);return}let x=qg(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:fa([t,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[t,i,u,l,s])}de.createContext(null);function jo(s,{relative:t}={}){let{matches:i}=de.useContext(_a),{pathname:r}=Lr(),l=JSON.stringify(Wg(i));return de.useMemo(()=>qg(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function Ey(s,t){return Qg(s,t)}function Qg(s,t,i,r,l){$t(Yo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=de.useContext(Oi),{matches:h}=de.useContext(_a),d=h[h.length-1],m=d?d.params:{},p=d?d.pathname:"/",x=d?d.pathnameBase:"/",g=d&&d.route;{let D=g&&g.path||"";Jg(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let S=Lr(),M;if(t){let D=typeof t=="string"?Ls(t):t;$t(x==="/"||D.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=S;let E=M.pathname||"/",A=E;if(x!=="/"){let D=x.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=Vg(s,{pathname:A});Li(g||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Li(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=wy(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:fa([x,u.encodeLocation?u.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?x:fa([x,u.encodeLocation?u.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),h,i,r,l);return t&&_?de.createElement(qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function Ty(){let s=Oy(),t=gy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:u},"ErrorBoundary")," or"," ",de.createElement("code",{style:u},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},t),i?de.createElement("pre",{style:l},i):null,h)}var Ay=de.createElement(Ty,null),Ry=class extends de.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.unstable_onError?this.props.unstable_onError(s,t):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?de.createElement(_a.Provider,{value:this.props.routeContext},de.createElement(Od.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Cy({routeContext:s,match:t,children:i}){let r=de.useContext(Ns);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),de.createElement(_a.Provider,{value:s},i)}function wy(s,t=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,h=i?.errors;if(h!=null){let p=u.findIndex(x=>x.route.id&&h?.[x.route.id]!==void 0);$t(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,m=-1;if(i)for(let p=0;p<u.length;p++){let x=u[p];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=p),x.route.id){let{loaderData:g,errors:S}=i,M=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!S||S[x.route.id]===void 0);if(x.route.lazy||M){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((p,x,g)=>{let S,M=!1,E=null,A=null;i&&(S=h&&x.route.id?h[x.route.id]:void 0,E=x.route.errorElement||Ay,d&&(m<0&&g===0?(Jg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,A=null):m===g&&(M=!0,A=x.route.hydrateFallbackElement||null)));let y=t.concat(u.slice(0,g+1)),_=()=>{let D;return S?D=E:M?D=A:x.route.Component?D=de.createElement(x.route.Component,null):x.route.element?D=x.route.element:D=p,de.createElement(Cy,{match:x,routeContext:{outlet:p,matches:y,isDataRoute:i!=null},children:D})};return i&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?de.createElement(Ry,{location:i.location,revalidation:i.revalidation,component:E,error:S,children:_(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:r}):_()},null)}function Pd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dy(s){let t=de.useContext(Ns);return $t(t,Pd(s)),t}function Uy(s){let t=de.useContext(Wu);return $t(t,Pd(s)),t}function Ly(s){let t=de.useContext(_a);return $t(t,Pd(s)),t}function zd(s){let t=Ly(s),i=t.matches[t.matches.length-1];return $t(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Ny(){return zd("useRouteId")}function Oy(){let s=de.useContext(Od),t=Uy("useRouteError"),i=zd("useRouteError");return s!==void 0?s:t.errors?.[i]}function Py(){let{router:s}=Dy("useNavigate"),t=zd("useNavigate"),i=de.useRef(!1);return Kg(()=>{i.current=!0}),de.useCallback(async(l,u={})=>{Li(i.current,Zg),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var Vx={};function Jg(s,t,i){!t&&!Vx[s]&&(Vx[s]=!0,Li(!1,i))}de.memo(zy);function zy({routes:s,future:t,state:i,unstable_onError:r}){return Qg(s,void 0,i,r,t)}function Nu(s){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fy({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){$t(!Yo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=de.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=Ls(i));let{pathname:m="/",search:p="",hash:x="",state:g=null,key:S="default"}=i,M=de.useMemo(()=>{let E=pa(m,h);return E==null?null:{location:{pathname:E,search:p,hash:x,state:g,key:S},navigationType:r}},[h,m,p,x,g,S,r]);return Li(M!=null,`<Router basename="${h}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:de.createElement(Oi.Provider,{value:d},de.createElement(qo.Provider,{children:t,value:M}))}function By({children:s,location:t}){return Ey(kh(s),t)}function kh(s,t=[]){let i=[];return de.Children.forEach(s,(r,l)=>{if(!de.isValidElement(r))return;let u=[...t,l];if(r.type===de.Fragment){i.push.apply(i,kh(r.props.children,u));return}$t(r.type===Nu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=kh(r.props.children,u)),i.push(h)}),i}var Ou="get",Pu="application/x-www-form-urlencoded";function qu(s){return s!=null&&typeof s.tagName=="string"}function Iy(s){return qu(s)&&s.tagName.toLowerCase()==="button"}function Hy(s){return qu(s)&&s.tagName.toLowerCase()==="form"}function Gy(s){return qu(s)&&s.tagName.toLowerCase()==="input"}function Vy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ky(s,t){return s.button===0&&(!t||t==="_self")&&!Vy(s)}var fu=null;function Xy(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var Wy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fh(s){return s!=null&&!Wy.has(s)?(Li(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pu}"`),null):s}function qy(s,t){let i,r,l,u,h;if(Hy(s)){let d=s.getAttribute("action");r=d?pa(d,t):null,i=s.getAttribute("method")||Ou,l=fh(s.getAttribute("enctype"))||Pu,u=new FormData(s)}else if(Iy(s)||Gy(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?pa(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Ou,l=fh(s.getAttribute("formenctype"))||fh(d.getAttribute("enctype"))||Pu,u=new FormData(d,s),!Xy()){let{name:p,type:x,value:g}=s;if(x==="image"){let S=p?`${p}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else p&&u.append(p,g)}}else{if(qu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ou,r=null,l=Pu,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Yy(s,t,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:t&&pa(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function jy(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Ky(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let h=await jy(u,i);return h.links?h.links():[]}return[]}));return eM(r.flat(1).filter(Zy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function kx(s,t,i,r,l,u){let h=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,p)=>h(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{let x=r.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(h(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Qy(s,t,{includeHydrateFallback:i}={}){return Jy(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Jy(s){return[...new Set(s)]}function $y(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function eM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify($y(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function $g(){let s=de.useContext(Ns);return Fd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function tM(){let s=de.useContext(Wu);return Fd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Bd=de.createContext(void 0);Bd.displayName="FrameworkContext";function e_(){let s=de.useContext(Bd);return Fd(s,"You must render this element inside a <HydratedRouter> element"),s}function nM(s,t){let i=de.useContext(Bd),[r,l]=de.useState(!1),[u,h]=de.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=t,S=de.useRef(null);de.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let A=_=>{_.forEach(D=>{h(D.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return S.current&&y.observe(S.current),()=>{y.disconnect()}}},[s]),de.useEffect(()=>{if(r){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,S,{}]:[u,S,{onFocus:Lo(d,M),onBlur:Lo(m,E),onMouseEnter:Lo(p,M),onMouseLeave:Lo(x,E),onTouchStart:Lo(g,M)}]:[!1,S,{}]}function Lo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function iM({page:s,...t}){let{router:i}=$g(),r=de.useMemo(()=>Vg(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?de.createElement(rM,{page:s,matches:r,...t}):null}function aM(s){let{manifest:t,routeModules:i}=e_(),[r,l]=de.useState([]);return de.useEffect(()=>{let u=!1;return Ky(s,t,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,t,i]),r}function rM({page:s,matches:t,...i}){let r=Lr(),{manifest:l,routeModules:u}=e_(),{basename:h}=$g(),{loaderData:d,matches:m}=tM(),p=de.useMemo(()=>kx(s,t,m,l,r,"data"),[s,t,m,l,r]),x=de.useMemo(()=>kx(s,t,m,l,r,"assets"),[s,t,m,l,r]),g=de.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(t.forEach(_=>{let D=l.routes[_.route.id];!D||!D.hasLoader||(!p.some(U=>U.route.id===_.route.id)&&_.route.id in d&&u[_.route.id]?.shouldRevalidate||D.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let y=Yy(s,h,"data");return A&&E.size>0&&y.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[h,d,r,l,p,t,s,u]),S=de.useMemo(()=>Qy(x,l),[x,l]),M=aM(x);return de.createElement(de.Fragment,null,g.map(E=>de.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),S.map(E=>de.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:A})=>de.createElement("link",{key:E,nonce:i.nonce,...A})))}function sM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var t_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t_&&(window.__reactRouterVersion="7.9.4")}catch{}function oM({basename:s,children:t,window:i}){let r=de.useRef();r.current==null&&(r.current=jS({window:i,v5Compat:!0}));let l=r.current,[u,h]=de.useState({action:l.action,location:l.location}),d=de.useCallback(m=>{de.startTransition(()=>h(m))},[h]);return de.useLayoutEffect(()=>l.listen(d),[l,d]),de.createElement(Fy,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var n_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,i_=de.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:m,to:p,preventScrollReset:x,viewTransition:g,...S},M){let{basename:E}=de.useContext(Oi),A=typeof p=="string"&&n_.test(p),y,_=!1;if(typeof p=="string"&&A&&(y=p,t_))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),V=pa(C.pathname,E);C.origin===w.origin&&V!=null?p=V+C.search+C.hash:_=!0}catch{Li(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=yy(p,{relative:l}),[U,z,k]=nM(r,S),N=fM(p,{replace:h,state:d,target:m,preventScrollReset:x,relative:l,viewTransition:g});function P(w){t&&t(w),w.defaultPrevented||N(w)}let W=de.createElement("a",{...S,...k,href:y||D,onClick:_||u?t:P,ref:sM(M,z),target:m,"data-discover":!A&&i==="render"?"true":void 0});return U&&!A?de.createElement(de.Fragment,null,W,de.createElement(iM,{page:D})):W});i_.displayName="Link";var lM=de.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:m,...p},x){let g=jo(h,{relative:p.relative}),S=Lr(),M=de.useContext(Wu),{navigator:E,basename:A}=de.useContext(Oi),y=M!=null&&xM(g)&&d===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,D=S.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(D=D.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&A&&(U=pa(U,A)||U);const z=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let k=D===_||!l&&D.startsWith(_)&&D.charAt(z)==="/",N=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),P={isActive:k,isPending:N,isTransitioning:y},W=k?t:void 0,w;typeof r=="function"?w=r(P):w=[r,k?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(P):u;return de.createElement(i_,{...p,"aria-current":W,className:w,ref:x,style:C,to:h,viewTransition:d},typeof m=="function"?m(P):m)});lM.displayName="NavLink";var uM=de.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:h=Ou,action:d,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,...S},M)=>{let E=pM(),A=mM(d,{relative:p}),y=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&n_.test(d),D=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let z=U.nativeEvent.submitter,k=z?.getAttribute("formmethod")||h;E(z||U.currentTarget,{fetcherKey:t,method:k,navigate:i,replace:l,state:u,relative:p,preventScrollReset:x,viewTransition:g})};return de.createElement("form",{ref:M,method:y,action:A,onSubmit:r?m:D,...S,"data-discover":!_&&s==="render"?"true":void 0})});uM.displayName="Form";function cM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function a_(s){let t=de.useContext(Ns);return $t(t,cM(s)),t}function fM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=My(),m=Lr(),p=jo(s,{relative:u});return de.useCallback(x=>{if(ky(x,t)){x.preventDefault();let g=i!==void 0?i:Ho(m)===Ho(p);d(s,{replace:g,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[m,d,p,i,r,t,s,l,u,h])}var hM=0,dM=()=>`__${String(++hM)}__`;function pM(){let{router:s}=a_("useSubmit"),{basename:t}=de.useContext(Oi),i=Ny();return de.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:m,body:p}=qy(r,t);if(l.navigate===!1){let x=l.fetcherKey||dM();await s.fetch(x,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function mM(s,{relative:t}={}){let{basename:i}=de.useContext(Oi),r=de.useContext(_a);$t(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...jo(s||".",{relative:t})},h=Lr();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(x=>x==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let x=d.toString();u.search=x?`?${x}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:fa([i,u.pathname])),Ho(u)}function xM(s,{relative:t}={}){let i=de.useContext(jg);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=a_("useViewTransitionState"),l=jo(s,{relative:t});if(!i.isTransitioning)return!1;let u=pa(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=pa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Gu(l.pathname,h)!=null||Gu(l.pathname,u)!=null}const Id="181",gM=0,Xx=1,_M=2,r_=1,vM=2,oa=3,$a=0,kn=1,la=2,ha=0,Ts=1,Wx=2,qx=3,Yx=4,SM=5,Ar=100,yM=101,MM=102,bM=103,EM=104,TM=200,AM=201,RM=202,CM=203,Xh=204,Wh=205,wM=206,DM=207,UM=208,LM=209,NM=210,OM=211,PM=212,zM=213,FM=214,qh=0,Yh=1,jh=2,Rs=3,Zh=4,Kh=5,Qh=6,Jh=7,s_=0,BM=1,IM=2,Ja=0,HM=1,GM=2,VM=3,kM=4,XM=5,WM=6,qM=7,o_=300,Cs=301,ws=302,$h=303,ed=304,Yu=306,td=1e3,ua=1001,nd=1002,Xn=1003,YM=1004,hu=1005,pi=1006,hh=1007,Cr=1008,ma=1009,l_=1010,u_=1011,Go=1012,Hd=1013,Dr=1014,ca=1015,Os=1016,Gd=1017,Vd=1018,Vo=1020,c_=35902,f_=35899,h_=1021,d_=1022,bi=1023,ko=1026,Xo=1027,p_=1028,kd=1029,Xd=1030,Wd=1031,qd=1033,zu=33776,Fu=33777,Bu=33778,Iu=33779,id=35840,ad=35841,rd=35842,sd=35843,od=36196,ld=37492,ud=37496,cd=37808,fd=37809,hd=37810,dd=37811,pd=37812,md=37813,xd=37814,gd=37815,_d=37816,vd=37817,Sd=37818,yd=37819,Md=37820,bd=37821,Ed=36492,Td=36494,Ad=36495,Rd=36283,Cd=36284,wd=36285,Dd=36286,jM=3200,ZM=3201,KM=0,QM=1,Ka="",hi="srgb",Ds="srgb-linear",Vu="linear",Gt="srgb",fs=7680,jx=519,JM=512,$M=513,eb=514,m_=515,tb=516,nb=517,ib=518,ab=519,Zx=35044,Kx="300 es",Di=2e3,ku=2001;function x_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rb(){const s=Xu("canvas");return s.style.display="block",s}const Qx={};function Jx(...s){const t="THREE."+s.shift();console.log(t,...s)}function ct(...s){const t="THREE."+s.shift();console.warn(t,...s)}function rn(...s){const t="THREE."+s.shift();console.error(t,...s)}function Wo(...s){const t=s.join(" ");t in Qx||(Qx[t]=!0,ct(...s))}function sb(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,Ud=180/Math.PI;function Zo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Et(s,t,i){return Math.max(t,Math.min(i,s))}function ob(s,t){return(s%t+t)%t}function ph(s,t,i){return(1-i)*s+i*t}function No(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,i=0){kt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ko{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3],S=u[h+0],M=u[h+1],E=u[h+2],A=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g;return}if(d>=1){t[i+0]=S,t[i+1]=M,t[i+2]=E,t[i+3]=A;return}if(g!==A||m!==S||p!==M||x!==E){let y=m*S+p*M+x*E+g*A;y<0&&(S=-S,M=-M,E=-E,A=-A,y=-y);let _=1-d;if(y<.9995){const D=Math.acos(y),U=Math.sin(D);_=Math.sin(_*D)/U,d=Math.sin(d*D)/U,m=m*_+S*d,p=p*_+M*d,x=x*_+E*d,g=g*_+A*d}else{m=m*_+S*d,p=p*_+M*d,x=x*_+E*d,g=g*_+A*d;const D=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=D,p*=D,x*=D,g*=D}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=u[h],S=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+x*g+m*M-p*S,t[i+1]=m*E+x*S+p*g-d*M,t[i+2]=p*E+x*M+d*S-m*g,t[i+3]=x*E-d*g-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(l/2),g=d(u/2),S=m(r/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=S*x*g+p*M*E,this._y=p*M*g-S*x*E,this._z=p*x*E+S*M*g,this._w=p*x*g-S*M*E;break;case"YXZ":this._x=S*x*g+p*M*E,this._y=p*M*g-S*x*E,this._z=p*x*E-S*M*g,this._w=p*x*g+S*M*E;break;case"ZXY":this._x=S*x*g-p*M*E,this._y=p*M*g+S*x*E,this._z=p*x*E+S*M*g,this._w=p*x*g-S*M*E;break;case"ZYX":this._x=S*x*g-p*M*E,this._y=p*M*g+S*x*E,this._z=p*x*E-S*M*g,this._w=p*x*g+S*M*E;break;case"YZX":this._x=S*x*g+p*M*E,this._y=p*M*g+S*x*E,this._z=p*x*E-S*M*g,this._w=p*x*g-S*M*E;break;case"XZY":this._x=S*x*g-p*M*E,this._y=p*M*g-S*x*E,this._z=p*x*E+S*M*g,this._w=p*x*g+S*M*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=r+d+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Et(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+h*d+l*p-u*m,this._y=l*x+h*m+u*d-r*p,this._z=u*x+h*p+r*m-l*d,this._w=h*x-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(t=0,i=0,r=0){ue.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($x.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($x.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),x=2*(d*i-u*l),g=2*(u*r-h*i);return this.x=i+m*p+h*g-d*x,this.y=r+m*x+d*p-u*g,this.z=l+m*g+u*x-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return mh.copy(this).projectOnVector(t),this.sub(mh)}reflect(t){return this.sub(mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new ue,$x=new Ko;class pt{constructor(t,i,r,l,u,h,d,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],x=r[4],g=r[7],S=r[2],M=r[5],E=r[8],A=l[0],y=l[3],_=l[6],D=l[1],U=l[4],z=l[7],k=l[2],N=l[5],P=l[8];return u[0]=h*A+d*D+m*k,u[3]=h*y+d*U+m*N,u[6]=h*_+d*z+m*P,u[1]=p*A+x*D+g*k,u[4]=p*y+x*U+g*N,u[7]=p*_+x*z+g*P,u[2]=S*A+M*D+E*k,u[5]=S*y+M*U+E*N,u[8]=S*_+M*z+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8];return i*h*x-i*d*p-r*u*x+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],g=x*h-d*p,S=d*m-x*u,M=p*u-h*m,E=i*g+r*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=g*A,t[1]=(l*p-x*r)*A,t[2]=(d*r-l*h)*A,t[3]=S*A,t[4]=(x*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(xh.makeScale(t,i)),this}rotate(t){return this.premultiply(xh.makeRotation(-t)),this}translate(t,i){return this.premultiply(xh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new pt,eg=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tg=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lb(){const s={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Gt&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Gt&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?Vu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ds]:{primaries:t,whitePoint:r,transfer:Vu,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:Gt,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Ut=lb();function da(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class ub{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=Xu("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=da(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(da(i[r]/255)*255):i[r]=da(i[r]);return{data:i,width:t.width,height:t.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cb=0;class Yd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=Zo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(gh(l[h].image)):u.push(gh(l[h]))}else u=gh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function gh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ub.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let fb=0;const _h=new ue;class Nn extends Ps{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=ua,l=ua,u=pi,h=Cr,d=bi,m=ma,p=Nn.DEFAULT_ANISOTROPY,x=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Zo(),this.name="",this.source=new Yd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==o_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case td:t.x=t.x-Math.floor(t.x);break;case ua:t.x=t.x<0?0:1;break;case nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case td:t.y=t.y-Math.floor(t.y);break;case ua:t.y=t.y<0?0:1;break;case nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=o_;Nn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],x=m[4],g=m[8],S=m[1],M=m[5],E=m[9],A=m[2],y=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,z=(M+1)/2,k=(_+1)/2,N=(x+S)/4,P=(g+A)/4,W=(E+y)/4;return U>z&&U>k?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=N/r,u=P/r):z>k?z<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(z),r=N/l,u=W/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=P/u,l=W/u),this.set(r,l,u,i),this}let D=Math.sqrt((y-E)*(y-E)+(g-A)*(g-A)+(S-x)*(S-x));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(g-A)/D,this.z=(S-x)/D,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this.w=Et(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this.w=Et(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hb extends Ps{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Nn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Yd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends hb{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class g_ extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class db extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(t=new ue(1/0,1/0,1/0),i=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(u,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),du.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),du.copy(r.boundingBox)),du.applyMatrix4(t.matrixWorld),this.union(du)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),pu.subVectors(this.max,Oo),ds.subVectors(t.a,Oo),ps.subVectors(t.b,Oo),ms.subVectors(t.c,Oo),Xa.subVectors(ps,ds),Wa.subVectors(ms,ps),vr.subVectors(ds,ms);let i=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-vr.z,vr.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,vr.z,0,-vr.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-vr.y,vr.x,0];return!vh(i,ds,ps,ms,pu)||(i=[1,0,0,0,1,0,0,0,1],!vh(i,ds,ps,ms,pu))?!1:(mu.crossVectors(Xa,Wa),i=[mu.x,mu.y,mu.z],vh(i,ds,ps,ms,pu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ta=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],vi=new ue,du=new Qo,ds=new ue,ps=new ue,ms=new ue,Xa=new ue,Wa=new ue,vr=new ue,Oo=new ue,pu=new ue,mu=new ue,Sr=new ue;function vh(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){Sr.fromArray(s,u);const d=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),m=t.dot(Sr),p=i.dot(Sr),x=r.dot(Sr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const pb=new Qo,Po=new ue,Sh=new ue;class jd{constructor(t=new ue,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):pb.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(Sh)),this.expandByPoint(Po.copy(t.center).sub(Sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new ue,yh=new ue,xu=new ue,qa=new ue,Mh=new ue,gu=new ue,bh=new ue;class mb{constructor(t=new ue,i=new ue(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){yh.copy(t).add(i).multiplyScalar(.5),xu.copy(i).sub(t).normalize(),qa.copy(this.origin).sub(yh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(xu),d=qa.dot(this.direction),m=-qa.dot(xu),p=qa.lengthSq(),x=Math.abs(1-h*h);let g,S,M,E;if(x>0)if(g=h*m-d,S=h*d-m,E=u*x,g>=0)if(S>=-E)if(S<=E){const A=1/x;g*=A,S*=A,M=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S<=-E?(g=Math.max(0,-(-h*u+d)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=E?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(h*u+d)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=h>0?-u:u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(yh).addScaledVector(xu,S),M}intersectSphere(t,i){na.subVectors(t.center,this.origin);const r=na.dot(this.direction),l=na.dot(na)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(u=(t.min.y-S.y)*x,h=(t.max.y-S.y)*x):(u=(t.max.y-S.y)*x,h=(t.min.y-S.y)*x),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(d=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,r,l,u){Mh.subVectors(i,t),gu.subVectors(r,t),bh.crossVectors(Mh,gu);let h=this.direction.dot(bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;qa.subVectors(this.origin,t);const m=d*this.direction.dot(gu.crossVectors(qa,gu));if(m<0)return null;const p=d*this.direction.dot(Mh.cross(qa));if(p<0||m+p>h)return null;const x=-d*qa.dot(bh);return x<0?null:this.at(x/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn{constructor(t,i,r,l,u,h,d,m,p,x,g,S,M,E,A,y){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,x,g,S,M,E,A,y)}set(t,i,r,l,u,h,d,m,p,x,g,S,M,E,A,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=S,_[3]=M,_[7]=E,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/xs.setFromMatrixColumn(t,0).length(),u=1/xs.setFromMatrixColumn(t,1).length(),h=1/xs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=h*x,M=h*g,E=d*x,A=d*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=S-A*p,i[9]=-d*m,i[2]=A-S*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*x,M=m*g,E=p*x,A=p*g;i[0]=S+A*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=M*d-E,i[6]=A+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*x,M=m*g,E=p*x,A=p*g;i[0]=S-A*d,i[4]=-h*g,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*x,i[9]=A-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*x,M=h*g,E=d*x,A=d*g;i[0]=m*x,i[4]=E*p-M,i[8]=S*p+A,i[1]=m*g,i[5]=A*p+S,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*x,i[4]=A-S*g,i[8]=E*g+M,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=M*g+E,i[10]=S-A*g}else if(t.order==="XZY"){const S=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+A,i[5]=h*x,i[9]=M*g-E,i[2]=E*g-M,i[6]=d*x,i[10]=A*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xb,t,gb)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ya.crossVectors(r,ei),Ya.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ya.crossVectors(r,ei)),Ya.normalize(),_u.crossVectors(ei,Ya),l[0]=Ya.x,l[4]=_u.x,l[8]=ei.x,l[1]=Ya.y,l[5]=_u.y,l[9]=ei.y,l[2]=Ya.z,l[6]=_u.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],x=r[1],g=r[5],S=r[9],M=r[13],E=r[2],A=r[6],y=r[10],_=r[14],D=r[3],U=r[7],z=r[11],k=r[15],N=l[0],P=l[4],W=l[8],w=l[12],C=l[1],V=l[5],te=l[9],se=l[13],he=l[2],ce=l[6],F=l[10],Y=l[14],H=l[3],_e=l[7],ve=l[11],O=l[15];return u[0]=h*N+d*C+m*he+p*H,u[4]=h*P+d*V+m*ce+p*_e,u[8]=h*W+d*te+m*F+p*ve,u[12]=h*w+d*se+m*Y+p*O,u[1]=x*N+g*C+S*he+M*H,u[5]=x*P+g*V+S*ce+M*_e,u[9]=x*W+g*te+S*F+M*ve,u[13]=x*w+g*se+S*Y+M*O,u[2]=E*N+A*C+y*he+_*H,u[6]=E*P+A*V+y*ce+_*_e,u[10]=E*W+A*te+y*F+_*ve,u[14]=E*w+A*se+y*Y+_*O,u[3]=D*N+U*C+z*he+k*H,u[7]=D*P+U*V+z*ce+k*_e,u[11]=D*W+U*te+z*F+k*ve,u[15]=D*w+U*se+z*Y+k*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],x=t[2],g=t[6],S=t[10],M=t[14],E=t[3],A=t[7],y=t[11],_=t[15];return E*(+u*m*g-l*p*g-u*d*S+r*p*S+l*d*M-r*m*M)+A*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*x-u*m*x)+y*(+i*p*g-i*d*M-u*h*g+r*h*M+u*d*x-r*p*x)+_*(-l*d*x-i*m*g+i*d*S+l*h*g-r*h*S+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],g=t[9],S=t[10],M=t[11],E=t[12],A=t[13],y=t[14],_=t[15],D=g*y*p-A*S*p+A*m*M-d*y*M-g*m*_+d*S*_,U=E*S*p-x*y*p-E*m*M+h*y*M+x*m*_-h*S*_,z=x*A*p-E*g*p+E*d*M-h*A*M-x*d*_+h*g*_,k=E*g*m-x*A*m-E*d*S+h*A*S+x*d*y-h*g*y,N=i*D+r*U+l*z+u*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/N;return t[0]=D*P,t[1]=(A*S*u-g*y*u-A*l*M+r*y*M+g*l*_-r*S*_)*P,t[2]=(d*y*u-A*m*u+A*l*p-r*y*p-d*l*_+r*m*_)*P,t[3]=(g*m*u-d*S*u-g*l*p+r*S*p+d*l*M-r*m*M)*P,t[4]=U*P,t[5]=(x*y*u-E*S*u+E*l*M-i*y*M-x*l*_+i*S*_)*P,t[6]=(E*m*u-h*y*u-E*l*p+i*y*p+h*l*_-i*m*_)*P,t[7]=(h*S*u-x*m*u+x*l*p-i*S*p-h*l*M+i*m*M)*P,t[8]=z*P,t[9]=(E*g*u-x*A*u-E*r*M+i*A*M+x*r*_-i*g*_)*P,t[10]=(h*A*u-E*d*u+E*r*p-i*A*p-h*r*_+i*d*_)*P,t[11]=(x*d*u-h*g*u-x*r*p+i*g*p+h*r*M-i*d*M)*P,t[12]=k*P,t[13]=(x*A*l-E*g*l+E*r*S-i*A*S-x*r*y+i*g*y)*P,t[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*y-i*d*y)*P,t[15]=(h*g*l-x*d*l+x*r*m-i*g*m-h*r*S+i*d*S)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,x=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+r,x*m-l*h,0,p*m-l*d,x*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,x=h+h,g=d+d,S=u*p,M=u*x,E=u*g,A=h*x,y=h*g,_=d*g,D=m*p,U=m*x,z=m*g,k=r.x,N=r.y,P=r.z;return l[0]=(1-(A+_))*k,l[1]=(M+z)*k,l[2]=(E-U)*k,l[3]=0,l[4]=(M-z)*N,l[5]=(1-(S+_))*N,l[6]=(y+D)*N,l[7]=0,l[8]=(E+U)*P,l[9]=(y-D)*P,l[10]=(1-(S+A))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=xs.set(l[0],l[1],l[2]).length();const h=xs.set(l[4],l[5],l[6]).length(),d=xs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const p=1/u,x=1/h,g=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=x,Si.elements[5]*=x,Si.elements[6]*=x,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,i.setFromRotationMatrix(Si),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=Di,m=!1){const p=this.elements,x=2*u/(i-t),g=2*u/(r-l),S=(i+t)/(i-t),M=(r+l)/(r-l);let E,A;if(m)E=u/(h-u),A=h*u/(h-u);else if(d===Di)E=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===ku)E=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=Di,m=!1){const p=this.elements,x=2/(i-t),g=2/(r-l),S=-(i+t)/(i-t),M=-(r+l)/(r-l);let E,A;if(m)E=1/(h-u),A=h/(h-u);else if(d===Di)E=-2/(h-u),A=-(h+u)/(h-u);else if(d===ku)E=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const xs=new ue,Si=new xn,xb=new ue(0,0,0),gb=new ue(1,1,1),Ya=new ue,_u=new ue,ei=new ue,ng=new xn,ig=new Ko;class xa{constructor(t=0,i=0,r=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ng.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ng,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ig.setFromEuler(this),this.setFromQuaternion(ig,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class __{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _b=0;const ag=new ue,gs=new Ko,ia=new xn,vu=new ue,zo=new ue,vb=new ue,Sb=new Ko,rg=new ue(1,0,0),sg=new ue(0,1,0),og=new ue(0,0,1),lg={type:"added"},yb={type:"removed"},_s={type:"childadded",child:null},Eh={type:"childremoved",child:null};class ni extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new ue,i=new xa,r=new Ko,l=new ue(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new xn},normalMatrix:{value:new pt}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new __,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(rg,t)}rotateY(t){return this.rotateOnAxis(sg,t)}rotateZ(t){return this.rotateOnAxis(og,t)}translateOnAxis(t,i){return ag.copy(t).applyQuaternion(this.quaternion),this.position.add(ag.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(rg,t)}translateY(t){return this.translateOnAxis(sg,t)}translateZ(t){return this.translateOnAxis(og,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?vu.copy(t):vu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(zo,vu,this.up):ia.lookAt(vu,zo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(ia),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(rn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lg),_s.child=t,this.dispatchEvent(_s),_s.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(yb),Eh.child=t,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lg),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,vb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,Sb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),x=h(t.images),g=h(t.shapes),S=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new ue(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new ue,aa=new ue,Th=new ue,ra=new ue,vs=new ue,Ss=new ue,ug=new ue,Ah=new ue,Rh=new ue,Ch=new ue,wh=new sn,Dh=new sn,Uh=new sn;class Mi{constructor(t=new ue,i=new ue,r=new ue){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),yi.subVectors(t,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){yi.subVectors(l,i),aa.subVectors(r,i),Th.subVectors(t,i);const h=yi.dot(yi),d=yi.dot(aa),m=yi.dot(Th),p=aa.dot(aa),x=aa.dot(Th),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-d*x)*S,E=(h*x-d*m)*S;return u.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ra.x),m.addScaledVector(h,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return wh.setScalar(0),Dh.setScalar(0),Uh.setScalar(0),wh.fromBufferAttribute(t,i),Dh.fromBufferAttribute(t,r),Uh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(wh,u.x),h.addScaledVector(Dh,u.y),h.addScaledVector(Uh,u.z),h}static isFrontFacing(t,i,r,l){return yi.subVectors(r,i),aa.subVectors(t,i),yi.cross(aa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),yi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;vs.subVectors(l,r),Ss.subVectors(u,r),Ah.subVectors(t,r);const m=vs.dot(Ah),p=Ss.dot(Ah);if(m<=0&&p<=0)return i.copy(r);Rh.subVectors(t,l);const x=vs.dot(Rh),g=Ss.dot(Rh);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(r).addScaledVector(vs,h);Ch.subVectors(t,u);const M=vs.dot(Ch),E=Ss.dot(Ch);if(E>=0&&M<=E)return i.copy(u);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Ss,d);const y=x*E-M*g;if(y<=0&&g-x>=0&&M-E>=0)return ug.subVectors(u,l),d=(g-x)/(g-x+(M-E)),i.copy(l).addScaledVector(ug,d);const _=1/(y+A+S);return h=A*_,d=S*_,i.copy(r).addScaledVector(vs,h).addScaledVector(Ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const v_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Lh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Vt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ut.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ut.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ut.workingColorSpace){if(t=ob(t,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Lh(h,u,t+1/3),this.g=Lh(h,u,t),this.b=Lh(h,u,t-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&ct("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ct("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const r=v_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Ut.workingToColorSpace(Ln.copy(this),t),Math.round(Et(Ln.r*255,0,255))*65536+Math.round(Et(Ln.g*255,0,255))*256+Math.round(Et(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ut.workingColorSpace){Ut.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=x<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){Ut.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ja),this.setHSL(ja.h+t,ja.s+i,ja.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ja),t.getHSL(Su);const r=ph(ja.h,Su.h,i),l=ph(ja.s,Su.s,i),u=ph(ja.l,Su.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Vt;Vt.NAMES=v_;let Mb=0;class ju extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=Ts,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Wh,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Wh&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class S_ extends ju{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new ue,yu=new kt;let bb=0;class Ui{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Zx,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yu.fromBufferAttribute(this,i),yu.applyMatrix3(t),this.setXY(i,yu.x,yu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=No(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zx&&(t.usage=this.usage),t}}class y_ extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class M_ extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class wr extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Eb=0;const fi=new xn,Nh=new ni,ys=new ue,ti=new Qo,Fo=new Qo,bn=new ue;class er extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(x_(t)?M_:y_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,r){return fi.makeTranslation(t,i,r),this.applyMatrix4(fi),this}scale(t,i,r){return fi.makeScale(t,i,r),this.applyMatrix4(fi),this}lookAt(t){return Nh.lookAt(t),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new wr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(ti.min,Fo.min),ti.expandByPoint(bn),bn.addVectors(ti.max,Fo.max),ti.expandByPoint(bn)):(ti.expandByPoint(Fo.min),ti.expandByPoint(Fo.max))}ti.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)bn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)bn.fromBufferAttribute(d,p),m&&(ys.fromBufferAttribute(t,p),bn.add(ys)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new ue,m[W]=new ue;const p=new ue,x=new ue,g=new ue,S=new kt,M=new kt,E=new kt,A=new ue,y=new ue;function _(W,w,C){p.fromBufferAttribute(r,W),x.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),S.fromBufferAttribute(u,W),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),x.sub(p),g.sub(p),M.sub(S),E.sub(S);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(A.copy(x).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(V),d[W].add(A),d[w].add(A),d[C].add(A),m[W].add(y),m[w].add(y),m[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let W=0,w=D.length;W<w;++W){const C=D[W],V=C.start,te=C.count;for(let se=V,he=V+te;se<he;se+=3)_(t.getX(se+0),t.getX(se+1),t.getX(se+2))}const U=new ue,z=new ue,k=new ue,N=new ue;function P(W){k.fromBufferAttribute(l,W),N.copy(k);const w=d[W];U.copy(w),U.sub(k.multiplyScalar(k.dot(w))).normalize(),z.crossVectors(N,w);const V=z.dot(m[W])<0?-1:1;h.setXYZW(W,U.x,U.y,U.z,V)}for(let W=0,w=D.length;W<w;++W){const C=D[W],V=C.start,te=C.count;for(let se=V,he=V+te;se<he;se+=3)P(t.getX(se+0)),P(t.getX(se+1)),P(t.getX(se+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new ue,u=new ue,h=new ue,d=new ue,m=new ue,p=new ue,x=new ue,g=new ue;if(t)for(let S=0,M=t.count;S<M;S+=3){const E=t.getX(S+0),A=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),x.subVectors(h,u),g.subVectors(l,u),x.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(x),m.add(x),p.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,u),g.subVectors(l,u),x.cross(g),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(d,m){const p=d.array,x=d.itemSize,g=d.normalized,S=new p.constructor(m.length*x);let M=0,E=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*x;for(let _=0;_<x;_++)S[E++]=p[M++]}return new Ui(S,x,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new er,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let x=0,g=p.length;x<g;x++){const S=p[x],M=t(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];x.push(M.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=t.morphAttributes;for(const p in u){const x=[],g=u[p];for(let S=0,M=g.length;S<M;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,x=h.length;p<x;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cg=new xn,yr=new mb,Mu=new jd,fg=new ue,bu=new ue,Eu=new ue,Tu=new ue,Oh=new ue,Au=new ue,hg=new ue,Ru=new ue;class ga extends ni{constructor(t=new er,i=new S_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Au.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=d[m],g=u[m];x!==0&&(Oh.fromBufferAttribute(g,t),h?Au.addScaledVector(Oh,x):Au.addScaledVector(Oh.sub(i),x))}i.add(Au)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Mu.copy(r.boundingSphere),Mu.applyMatrix4(u),yr.copy(t.ray).recast(t.near),!(Mu.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Mu,fg)===null||yr.origin.distanceToSquared(fg)>(t.far-t.near)**2))&&(cg.copy(u).invert(),yr.copy(t.ray).applyMatrix4(cg),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,yr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=S.length;E<A;E++){const y=S[E],_=h[y.materialIndex],D=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let z=D,k=U;z<k;z+=3){const N=d.getX(z),P=d.getX(z+1),W=d.getX(z+2);l=Cu(this,_,t,r,p,x,g,N,P,W),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=E,_=A;y<_;y+=3){const D=d.getX(y),U=d.getX(y+1),z=d.getX(y+2);l=Cu(this,h,t,r,p,x,g,D,U,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=S.length;E<A;E++){const y=S[E],_=h[y.materialIndex],D=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let z=D,k=U;z<k;z+=3){const N=z,P=z+1,W=z+2;l=Cu(this,_,t,r,p,x,g,N,P,W),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=E,_=A;y<_;y+=3){const D=y,U=y+1,z=y+2;l=Cu(this,h,t,r,p,x,g,D,U,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Tb(s,t,i,r,l,u,h,d){let m;if(t.side===kn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===$a,d),m===null)return null;Ru.copy(d),Ru.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Ru);return p<i.near||p>i.far?null:{distance:p,point:Ru.clone(),object:s}}function Cu(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,bu),s.getVertexPosition(m,Eu),s.getVertexPosition(p,Tu);const x=Tb(s,t,i,r,bu,Eu,Tu,hg);if(x){const g=new ue;Mi.getBarycoord(hg,bu,Eu,Tu,g),l&&(x.uv=Mi.getInterpolatedAttribute(l,d,m,p,g,new kt)),u&&(x.uv1=Mi.getInterpolatedAttribute(u,d,m,p,g,new kt)),h&&(x.normal=Mi.getInterpolatedAttribute(h,d,m,p,g,new ue),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new ue,materialIndex:0};Mi.getNormal(bu,Eu,Tu,S.normal),x.face=S,x.barycoord=g}return x}class Jo extends er{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],x=[],g=[];let S=0,M=0;E("z","y","x",-1,-1,r,i,t,h,u,0),E("z","y","x",1,-1,r,i,-t,h,u,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new wr(p,3)),this.setAttribute("normal",new wr(x,3)),this.setAttribute("uv",new wr(g,2));function E(A,y,_,D,U,z,k,N,P,W,w){const C=z/P,V=k/W,te=z/2,se=k/2,he=N/2,ce=P+1,F=W+1;let Y=0,H=0;const _e=new ue;for(let ve=0;ve<F;ve++){const O=ve*V-se;for(let ie=0;ie<ce;ie++){const Se=ie*C-te;_e[A]=Se*D,_e[y]=O*U,_e[_]=he,p.push(_e.x,_e.y,_e.z),_e[A]=0,_e[y]=0,_e[_]=N>0?1:-1,x.push(_e.x,_e.y,_e.z),g.push(ie/P),g.push(1-ve/W),Y+=1}}for(let ve=0;ve<W;ve++)for(let O=0;O<P;O++){const ie=S+O+ce*ve,Se=S+O+ce*(ve+1),Te=S+(O+1)+ce*(ve+1),Ne=S+(O+1)+ce*ve;m.push(ie,Se,Ne),m.push(Se,Te,Ne),H+=6}d.addGroup(M,H,w),M+=H,S+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Pn(s){const t={};for(let i=0;i<s.length;i++){const r=Us(s[i]);for(const l in r)t[l]=r[l]}return t}function Ab(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function b_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}const Rb={clone:Us,merge:Pn};var Cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends ju{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cb,this.fragmentShader=wb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Ab(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class E_ extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new ue,dg=new kt,pg=new kt;class di extends E_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Za.x,Za.y).multiplyScalar(-t/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Za.x,Za.y).multiplyScalar(-t/Za.z)}getViewSize(t,i){return this.getViewBounds(t,dg,pg),i.subVectors(pg,dg)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,bs=1;class Db extends ni{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Ms,bs,t,i);l.layers=this.layers,this.add(l);const u=new di(Ms,bs,t,i);u.layers=this.layers,this.add(u);const h=new di(Ms,bs,t,i);h.layers=this.layers,this.add(h);const d=new di(Ms,bs,t,i);d.layers=this.layers,this.add(d);const m=new di(Ms,bs,t,i);m.layers=this.layers,this.add(m);const p=new di(Ms,bs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Di)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ku)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,x]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(g,S,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class T_ extends Nn{constructor(t=[],i=Cs,r,l,u,h,d,m,p,x){super(t,i,r,l,u,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ub extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new T_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jo(5,5,5),u=new Ni({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ha});u.uniforms.tEquirect.value=i;const h=new ga(l,u),d=i.minFilter;return i.minFilter===Cr&&(i.minFilter=pi),new Db(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class wu extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lb={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,r),_=this._getHandJoint(p,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&S>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Lb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new wu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Nb extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ob extends Nn{constructor(t=null,i=1,r=1,l,u,h,d,m,p=Xn,x=Xn,g,S){super(null,h,d,m,p,x,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new ue,Pb=new ue,zb=new pt;class Tr{constructor(t=new ue(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=zh.subVectors(r,i).cross(Pb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(zh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||zb.getNormalMatrix(t),l=this.coplanarPoint(zh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new jd,Fb=new kt(.5,.5),Du=new ue;class A_{constructor(t=new Tr,i=new Tr,r=new Tr,l=new Tr,u=new Tr,h=new Tr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Di,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],x=u[4],g=u[5],S=u[6],M=u[7],E=u[8],A=u[9],y=u[10],_=u[11],D=u[12],U=u[13],z=u[14],k=u[15];if(l[0].setComponents(p-h,M-x,_-E,k-D).normalize(),l[1].setComponents(p+h,M+x,_+E,k+D).normalize(),l[2].setComponents(p+d,M+g,_+A,k+U).normalize(),l[3].setComponents(p-d,M-g,_-A,k-U).normalize(),r)l[4].setComponents(m,S,y,z).normalize(),l[5].setComponents(p-m,M-S,_-y,k-z).normalize();else if(l[4].setComponents(p-m,M-S,_-y,k-z).normalize(),i===Di)l[5].setComponents(p+m,M+S,_+y,k+z).normalize();else if(i===ku)l[5].setComponents(m,S,y,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);const i=Fb.distanceTo(t.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Du.x=l.normal.x>0?t.max.x:t.min.x,Du.y=l.normal.y>0?t.max.y:t.min.y,Du.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bb extends Nn{constructor(t,i,r,l,u,h,d,m,p){super(t,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class R_ extends Nn{constructor(t,i,r=Dr,l,u,h,d=Xn,m=Xn,p,x=ko,g=1){if(x!==ko&&x!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,h,d,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class C_ extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $o extends er{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,x=m+1,g=t/d,S=i/m,M=[],E=[],A=[],y=[];for(let _=0;_<x;_++){const D=_*S-h;for(let U=0;U<p;U++){const z=U*g-u;E.push(z,-D,0),A.push(0,0,1),y.push(U/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<d;D++){const U=D+p*_,z=D+p*(_+1),k=D+1+p*(_+1),N=D+1+p*_;M.push(U,z,N),M.push(z,k,N)}this.setIndex(M),this.setAttribute("position",new wr(E,3)),this.setAttribute("normal",new wr(A,3)),this.setAttribute("uv",new wr(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ib extends ju{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hb extends ju{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gb extends E_{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Vb extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function mg(s,t,i,r){const l=kb(r);switch(i){case h_:return s*t;case p_:return s*t/l.components*l.byteLength;case kd:return s*t/l.components*l.byteLength;case Xd:return s*t*2/l.components*l.byteLength;case Wd:return s*t*2/l.components*l.byteLength;case d_:return s*t*3/l.components*l.byteLength;case bi:return s*t*4/l.components*l.byteLength;case qd:return s*t*4/l.components*l.byteLength;case zu:case Fu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bu:case Iu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ad:case sd:return Math.max(s,16)*Math.max(t,8)/4;case id:case rd:return Math.max(s,8)*Math.max(t,8)/2;case od:case ld:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ud:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case dd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case gd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _d:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Md:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ed:case Td:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rd:case Cd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case wd:case Dd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kb(s){switch(s){case ma:case l_:return{byteLength:1,components:1};case Go:case u_:case Os:return{byteLength:2,components:1};case Gd:case Vd:return{byteLength:2,components:4};case Dr:case Hd:case ca:return{byteLength:4,components:1};case c_:case f_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);function w_(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function Xb(s){const t=new WeakMap;function i(d,m){const p=d.array,x=d.usage,g=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const x=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,x);else{g.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<g.length;M++){const E=g[S],A=g[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++S,g[S]=A)}g.length=S+1;for(let M=0,E=g.length;M<E;M++){const A=g[M];s.bufferSubData(p,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Wb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
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
#endif`,Yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
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
#endif`,Jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
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
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aE=`#ifdef USE_IRIDESCENCE
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
#endif`,rE=`#ifdef USE_BUMPMAP
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
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pE=`#define PI 3.141592653589793
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
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xE=`vec3 transformedNormal = objectNormal;
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
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
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
}`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zE=`uniform bool receiveShadow;
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
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
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
#endif`,kE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,XE=`
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
#endif`,WE=`#if defined( RE_IndirectDiffuse )
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e3=`#if defined( USE_POINTS_UV )
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
#endif`,t3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s3=`#ifdef USE_MORPHTARGETS
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
#endif`,o3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d3=`#ifdef USE_NORMALMAP
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
#endif`,p3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,R3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w3=`float getShadowMask() {
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
}`,D3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U3=`#ifdef USE_SKINNING
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
#endif`,L3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N3=`#ifdef USE_SKINNING
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
#endif`,O3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B3=`#ifdef USE_TRANSMISSION
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
#endif`,I3=`#ifdef USE_TRANSMISSION
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
#endif`,H3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W3=`uniform sampler2D t2D;
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
}`,q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`#include <common>
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
}`,Q3=`#if DEPTH_PACKING == 3200
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
}`,J3=`#define DISTANCE
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
}`,$3=`#define DISTANCE
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
}`,a1=`#include <common>
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
}`,r1=`uniform vec3 diffuse;
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
}`,s1=`#define LAMBERT
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
}`,u1=`#define MATCAP
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
}`,c1=`#define NORMAL
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
}`,f1=`#define NORMAL
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
}`,h1=`#define PHONG
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
}`,x1=`#define TOON
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
}`,g1=`#define TOON
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
}`,_1=`uniform float size;
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
}`,v1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,y1=`uniform vec3 color;
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
}`,b1=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Wb,alphahash_pars_fragment:qb,alphamap_fragment:Yb,alphamap_pars_fragment:jb,alphatest_fragment:Zb,alphatest_pars_fragment:Kb,aomap_fragment:Qb,aomap_pars_fragment:Jb,batching_pars_vertex:$b,batching_vertex:eE,begin_vertex:tE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:aE,bumpmap_pars_fragment:rE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:uE,color_fragment:cE,color_pars_fragment:fE,color_pars_vertex:hE,color_vertex:dE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:xE,displacementmap_pars_vertex:gE,displacementmap_vertex:_E,emissivemap_fragment:vE,emissivemap_pars_fragment:SE,colorspace_fragment:yE,colorspace_pars_fragment:ME,envmap_fragment:bE,envmap_common_pars_fragment:EE,envmap_pars_fragment:TE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:FE,envmap_vertex:RE,fog_vertex:CE,fog_pars_vertex:wE,fog_fragment:DE,fog_pars_fragment:UE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:NE,lights_lambert_fragment:OE,lights_lambert_pars_fragment:PE,lights_pars_begin:zE,lights_toon_fragment:BE,lights_toon_pars_fragment:IE,lights_phong_fragment:HE,lights_phong_pars_fragment:GE,lights_physical_fragment:VE,lights_physical_pars_fragment:kE,lights_fragment_begin:XE,lights_fragment_maps:WE,lights_fragment_end:qE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:ZE,logdepthbuf_vertex:KE,map_fragment:QE,map_pars_fragment:JE,map_particle_fragment:$E,map_particle_pars_fragment:e3,metalnessmap_fragment:t3,metalnessmap_pars_fragment:n3,morphinstance_vertex:i3,morphcolor_vertex:a3,morphnormal_vertex:r3,morphtarget_pars_vertex:s3,morphtarget_vertex:o3,normal_fragment_begin:l3,normal_fragment_maps:u3,normal_pars_fragment:c3,normal_pars_vertex:f3,normal_vertex:h3,normalmap_pars_fragment:d3,clearcoat_normal_fragment_begin:p3,clearcoat_normal_fragment_maps:m3,clearcoat_pars_fragment:x3,iridescence_pars_fragment:g3,opaque_fragment:_3,packing:v3,premultiplied_alpha_fragment:S3,project_vertex:y3,dithering_fragment:M3,dithering_pars_fragment:b3,roughnessmap_fragment:E3,roughnessmap_pars_fragment:T3,shadowmap_pars_fragment:A3,shadowmap_pars_vertex:R3,shadowmap_vertex:C3,shadowmask_pars_fragment:w3,skinbase_vertex:D3,skinning_pars_vertex:U3,skinning_vertex:L3,skinnormal_vertex:N3,specularmap_fragment:O3,specularmap_pars_fragment:P3,tonemapping_fragment:z3,tonemapping_pars_fragment:F3,transmission_fragment:B3,transmission_pars_fragment:I3,uv_pars_fragment:H3,uv_pars_vertex:G3,uv_vertex:V3,worldpos_vertex:k3,background_vert:X3,background_frag:W3,backgroundCube_vert:q3,backgroundCube_frag:Y3,cube_vert:j3,cube_frag:Z3,depth_vert:K3,depth_frag:Q3,distanceRGBA_vert:J3,distanceRGBA_frag:$3,equirect_vert:e1,equirect_frag:t1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:a1,meshbasic_frag:r1,meshlambert_vert:s1,meshlambert_frag:o1,meshmatcap_vert:l1,meshmatcap_frag:u1,meshnormal_vert:c1,meshnormal_frag:f1,meshphong_vert:h1,meshphong_frag:d1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:x1,meshtoon_frag:g1,points_vert:_1,points_frag:v1,shadow_vert:S1,shadow_frag:y1,sprite_vert:M1,sprite_frag:b1},Oe={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},wi={basic:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Vt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Pn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Pn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Vt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Pn([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Pn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Pn([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Pn([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Pn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Pn([Oe.lights,Oe.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};wi.physical={uniforms:Pn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Uu={r:0,b:0,g:0},br=new xa,E1=new xn;function T1(s,t,i,r,l,u,h){const d=new Vt(0);let m=u===!0?0:1,p,x,g=null,S=0,M=null;function E(U){let z=U.isScene===!0?U.background:null;return z&&z.isTexture&&(z=(U.backgroundBlurriness>0?i:t).get(z)),z}function A(U){let z=!1;const k=E(U);k===null?_(d,m):k&&k.isColor&&(_(k,1),z=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,h):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||z)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,z){const k=E(z);k&&(k.isCubeTexture||k.mapping===Yu)?(x===void 0&&(x=new ga(new Jo(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Us(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(N,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),br.copy(z.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),x.material.uniforms.envMap.value=k,x.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(br)),x.material.toneMapped=Ut.getTransfer(k.colorSpace)!==Gt,(g!==k||S!==k.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,g=k,S=k.version,M=s.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new ga(new $o(2,2),new Ni({name:"BackgroundMaterial",uniforms:Us(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(k.colorSpace)!==Gt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||S!==k.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=k,S=k.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,z){U.getRGB(Uu,b_(s)),r.buffers.color.setClear(Uu.r,Uu.g,Uu.b,z,h)}function D(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,z=1){d.set(U),m=z,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:A,addToRenderList:y,dispose:D}}function A1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(C,V,te,se,he){let ce=!1;const F=g(se,te,V);u!==F&&(u=F,p(u.object)),ce=M(C,se,te,he),ce&&E(C,se,te,he),he!==null&&t.update(he,s.ELEMENT_ARRAY_BUFFER),(ce||h)&&(h=!1,z(C,V,te,se),he!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(he).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function x(C){return s.deleteVertexArray(C)}function g(C,V,te){const se=te.wireframe===!0;let he=r[C.id];he===void 0&&(he={},r[C.id]=he);let ce=he[V.id];ce===void 0&&(ce={},he[V.id]=ce);let F=ce[se];return F===void 0&&(F=S(m()),ce[se]=F),F}function S(C){const V=[],te=[],se=[];for(let he=0;he<i;he++)V[he]=0,te[he]=0,se[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:se,object:C,attributes:{},index:null}}function M(C,V,te,se){const he=u.attributes,ce=V.attributes;let F=0;const Y=te.getAttributes();for(const H in Y)if(Y[H].location>=0){const ve=he[H];let O=ce[H];if(O===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ve===void 0||ve.attribute!==O||O&&ve.data!==O.data)return!0;F++}return u.attributesNum!==F||u.index!==se}function E(C,V,te,se){const he={},ce=V.attributes;let F=0;const Y=te.getAttributes();for(const H in Y)if(Y[H].location>=0){let ve=ce[H];ve===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor));const O={};O.attribute=ve,ve&&ve.data&&(O.data=ve.data),he[H]=O,F++}u.attributes=he,u.attributesNum=F,u.index=se}function A(){const C=u.newAttributes;for(let V=0,te=C.length;V<te;V++)C[V]=0}function y(C){_(C,0)}function _(C,V){const te=u.newAttributes,se=u.enabledAttributes,he=u.attributeDivisors;te[C]=1,se[C]===0&&(s.enableVertexAttribArray(C),se[C]=1),he[C]!==V&&(s.vertexAttribDivisor(C,V),he[C]=V)}function D(){const C=u.newAttributes,V=u.enabledAttributes;for(let te=0,se=V.length;te<se;te++)V[te]!==C[te]&&(s.disableVertexAttribArray(te),V[te]=0)}function U(C,V,te,se,he,ce,F){F===!0?s.vertexAttribIPointer(C,V,te,he,ce):s.vertexAttribPointer(C,V,te,se,he,ce)}function z(C,V,te,se){A();const he=se.attributes,ce=te.getAttributes(),F=V.defaultAttributeValues;for(const Y in ce){const H=ce[Y];if(H.location>=0){let _e=he[Y];if(_e===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor)),_e!==void 0){const ve=_e.normalized,O=_e.itemSize,ie=t.get(_e);if(ie===void 0)continue;const Se=ie.buffer,Te=ie.type,Ne=ie.bytesPerElement,ee=Te===s.INT||Te===s.UNSIGNED_INT||_e.gpuType===Hd;if(_e.isInterleavedBufferAttribute){const oe=_e.data,we=oe.stride,ze=_e.offset;if(oe.isInstancedInterleavedBuffer){for(let He=0;He<H.locationSize;He++)_(H.location+He,oe.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let He=0;He<H.locationSize;He++)y(H.location+He);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let He=0;He<H.locationSize;He++)U(H.location+He,O/H.locationSize,Te,ve,we*Ne,(ze+O/H.locationSize*He)*Ne,ee)}else{if(_e.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)_(H.location+oe,_e.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let oe=0;oe<H.locationSize;oe++)y(H.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let oe=0;oe<H.locationSize;oe++)U(H.location+oe,O/H.locationSize,Te,ve,O*Ne,O/H.locationSize*oe*Ne,ee)}}else if(F!==void 0){const ve=F[Y];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(H.location,ve);break;case 3:s.vertexAttrib3fv(H.location,ve);break;case 4:s.vertexAttrib4fv(H.location,ve);break;default:s.vertexAttrib1fv(H.location,ve)}}}}D()}function k(){W();for(const C in r){const V=r[C];for(const te in V){const se=V[te];for(const he in se)x(se[he].object),delete se[he];delete V[te]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const te in V){const se=V[te];for(const he in se)x(se[he].object),delete se[he];delete V[te]}delete r[C.id]}function P(C){for(const V in r){const te=r[V];if(te[C.id]===void 0)continue;const se=te[C.id];for(const he in se)x(se[he].object),delete se[he];delete te[C.id]}}function W(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:y,disableUnusedAttributes:D}}function R1(s,t,i){let r;function l(p){r=p}function u(p,x){s.drawArrays(r,p,x),i.update(x,r,1)}function h(p,x,g){g!==0&&(s.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function d(p,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let M=0;for(let E=0;E<g;E++)M+=x[E];i.update(M,r,1)}function m(p,x,g,S){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],x[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,g);let E=0;for(let A=0;A<g;A++)E+=x[A]*S[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function C1(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==bi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const W=P===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ma&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ca&&!W)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ct("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),z=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:z,vertexTextures:k,maxSamples:N}}function w1(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Tr,d=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||r!==0||l;return l=S,r=g.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,M){const E=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,_=s.get(g);if(!l||E===null||E.length===0||u&&!y)u?x(null):p();else{const D=u?0:r,U=D*4;let z=_.clippingState||null;m.value=z,z=x(E,S,U,M);for(let k=0;k!==U;++k)z[k]=i[k];_.clippingState=z,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(g,S,M,E){const A=g!==null?g.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const _=M+A*4,D=S.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,z=M;U!==A;++U,z+=4)h.copy(g[U]).applyMatrix4(D,d),h.normal.toArray(y,z),y[z+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function D1(s){let t=new WeakMap;function i(h,d){return d===$h?h.mapping=Cs:d===ed&&(h.mapping=ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===$h||d===ed)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ub(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Qa=4,xg=[.125,.215,.35,.446,.526,.582],Rr=20,U1=256,Bo=new Gb,gg=new Vt;let Fh=null,Bh=0,Ih=0,Hh=!1;const L1=new ue;class _g{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=L1}=u;Fh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fh,Bh,Ih),this._renderer.xr.enabled=Hh,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Os,format:bi,colorSpace:Ds,depthBuffer:!1},l=vg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N1(u)),this._blurMaterial=P1(u,t,i)}return l}_compileMaterial(t){const i=new ga(new er,t);this._renderer.compile(i,Bo)}_sceneToCubeUV(t,i,r,l,u){const m=new di(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(gg),g.toneMapping=Ja,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ga(new Jo,new S_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let _=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,_=!0):(y.color.copy(gg),_=!0);for(let U=0;U<6;U++){const z=U%3;z===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[U],u.y,u.z)):z===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[U]));const k=this._cubeSize;Es(l,z*k,U>2?k:0,k,k),g.setRenderTarget(l),_&&g.render(A,m),g.render(t,m)}g.toneMapping=M,g.autoClear=S,t.background=D}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Cs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Es(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Bo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const D=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=O1(this._lodMax,D,U)}const h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),S=.05+p*.95,M=g*S,{_lodMax:E}=this,A=this._sizeLods[r],y=3*A*(r>E-Qa?r-E+Qa:0),_=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=E-i,Es(u,y,_,3*A,2*A),l.setRenderTarget(u),l.render(d,Bo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-r,Es(t,y,_,3*A,2*A),l.setRenderTarget(t),l.render(d,Bo)}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Rr-1),A=u/E,y=isFinite(u)?1+Math.floor(x*A):Rr;y>Rr&&ct(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rr}`);const _=[];let D=0;for(let P=0;P<Rr;++P){const W=P/A,w=Math.exp(-W*W/2);_.push(w),P===0?D+=w:P<y&&(D+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/D;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=E,S.mipInt.value=U-r;const z=this._sizeLods[l],k=3*z*(l>U-Qa?l-U+Qa:0),N=4*(this._cubeSize-z);Es(i,k,N,3*z,2*z),m.setRenderTarget(i),m.render(g,Bo)}}function N1(s){const t=[],i=[],r=[];let l=s;const u=s-Qa+1+xg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>s-Qa?m=xg[h-s+Qa-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,E=6,A=3,y=2,_=1,D=new Float32Array(A*E*M),U=new Float32Array(y*E*M),z=new Float32Array(_*E*M);for(let N=0;N<M;N++){const P=N%3*2/3-1,W=N>2?0:-1,w=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];D.set(w,A*E*N),U.set(S,y*E*N);const C=[N,N,N,N,N,N];z.set(C,_*E*N)}const k=new er;k.setAttribute("position",new Ui(D,A)),k.setAttribute("uv",new Ui(U,y)),k.setAttribute("faceIndex",new Ui(z,_)),r.push(new ga(k,null)),l>Qa&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function vg(s,t,i){const r=new Ur(s,t,i);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Es(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function O1(s,t,i){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function P1(s,t,i){const r=new Float32Array(Rr),l=new ue(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Sg(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function yg(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Zu(){return`

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
	`}function z1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===$h||m===ed,x=m===Cs||m===ws;if(p||x){let g=t.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new _g(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new _g(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function F1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Wo("WebGLRenderer: "+r+" extension not supported."),l}}}function B1(s,t,i,r){const l={},u=new WeakMap;function h(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)t.update(S[M],s.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,E=g.attributes.position;let A=0;if(M!==null){const D=M.array;A=M.version;for(let U=0,z=D.length;U<z;U+=3){const k=D[U+0],N=D[U+1],P=D[U+2];S.push(k,N,N,P,P,k)}}else if(E!==void 0){const D=E.array;A=E.version;for(let U=0,z=D.length/3-1;U<z;U+=3){const k=U+0,N=U+1,P=U+2;S.push(k,N,N,P,P,k)}}else return;const y=new(x_(S)?M_:y_)(S,1);y.version=A;const _=u.get(g);_&&t.remove(_),u.set(g,y)}function x(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function I1(s,t,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){s.drawElements(r,M,u,S*h),i.update(M,r,1)}function p(S,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,S*h,E),i.update(M,r,E))}function x(S,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,E);let y=0;for(let _=0;_<E;_++)y+=M[_];i.update(y,r,1)}function g(S,M,E,A){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,A,0,E);let _=0;for(let D=0;D<E;D++)_+=M[D]*A[D];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function H1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:rn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function G1(s,t,i){const r=new WeakMap,l=new sn;function u(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let S=r.get(d);if(S===void 0||S.count!==g){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let z=0;E===!0&&(z=1),A===!0&&(z=2),y===!0&&(z=3);let k=d.attributes.position.count*z,N=1;k>t.maxTextureSize&&(N=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const P=new Float32Array(k*N*4*g),W=new g_(P,k,N,g);W.type=ca,W.needsUpdate=!0;const w=z*4;for(let V=0;V<g;V++){const te=_[V],se=D[V],he=U[V],ce=k*N*4*V;for(let F=0;F<te.count;F++){const Y=F*w;E===!0&&(l.fromBufferAttribute(te,F),P[ce+Y+0]=l.x,P[ce+Y+1]=l.y,P[ce+Y+2]=l.z,P[ce+Y+3]=0),A===!0&&(l.fromBufferAttribute(se,F),P[ce+Y+4]=l.x,P[ce+Y+5]=l.y,P[ce+Y+6]=l.z,P[ce+Y+7]=0),y===!0&&(l.fromBufferAttribute(he,F),P[ce+Y+8]=l.x,P[ce+Y+9]=l.y,P[ce+Y+10]=l.z,P[ce+Y+11]=he.itemSize===4?l.w:1)}}S={count:g,texture:W,size:new kt(k,N)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:u}}function V1(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,g=t.get(m,x);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const D_=new Nn,Mg=new R_(1,1),U_=new g_,L_=new db,N_=new T_,bg=[],Eg=[],Tg=new Float32Array(16),Ag=new Float32Array(9),Rg=new Float32Array(4);function zs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=bg[l];if(u===void 0&&(u=new Float32Array(l),bg[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function gn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function _n(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Ku(s,t){let i=Eg[t];i===void 0&&(i=new Int32Array(t),Eg[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function k1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function X1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2fv(this.addr,t),_n(i,t)}}function W1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;s.uniform3fv(this.addr,t),_n(i,t)}}function q1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4fv(this.addr,t),_n(i,t)}}function Y1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;Rg.set(r),s.uniformMatrix2fv(this.addr,!1,Rg),_n(i,r)}}function j1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;Ag.set(r),s.uniformMatrix3fv(this.addr,!1,Ag),_n(i,r)}}function Z1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;Tg.set(r),s.uniformMatrix4fv(this.addr,!1,Tg),_n(i,r)}}function K1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function Q1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2iv(this.addr,t),_n(i,t)}}function J1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3iv(this.addr,t),_n(i,t)}}function $1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4iv(this.addr,t),_n(i,t)}}function eT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function tT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2uiv(this.addr,t),_n(i,t)}}function nT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3uiv(this.addr,t),_n(i,t)}}function iT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4uiv(this.addr,t),_n(i,t)}}function aT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Mg.compareFunction=m_,u=Mg):u=D_,i.setTexture2D(t||u,l)}function rT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||L_,l)}function sT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||N_,l)}function oT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||U_,l)}function lT(s){switch(s){case 5126:return k1;case 35664:return X1;case 35665:return W1;case 35666:return q1;case 35674:return Y1;case 35675:return j1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return $1;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return oT}}function uT(s,t){s.uniform1fv(this.addr,t)}function cT(s,t){const i=zs(t,this.size,2);s.uniform2fv(this.addr,i)}function fT(s,t){const i=zs(t,this.size,3);s.uniform3fv(this.addr,i)}function hT(s,t){const i=zs(t,this.size,4);s.uniform4fv(this.addr,i)}function dT(s,t){const i=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function pT(s,t){const i=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function mT(s,t){const i=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function xT(s,t){s.uniform1iv(this.addr,t)}function gT(s,t){s.uniform2iv(this.addr,t)}function _T(s,t){s.uniform3iv(this.addr,t)}function vT(s,t){s.uniform4iv(this.addr,t)}function ST(s,t){s.uniform1uiv(this.addr,t)}function yT(s,t){s.uniform2uiv(this.addr,t)}function MT(s,t){s.uniform3uiv(this.addr,t)}function bT(s,t){s.uniform4uiv(this.addr,t)}function ET(s,t,i){const r=this.cache,l=t.length,u=Ku(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||D_,u[h])}function TT(s,t,i){const r=this.cache,l=t.length,u=Ku(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||L_,u[h])}function AT(s,t,i){const r=this.cache,l=t.length,u=Ku(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||N_,u[h])}function RT(s,t,i){const r=this.cache,l=t.length,u=Ku(i,l);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||U_,u[h])}function CT(s){switch(s){case 5126:return uT;case 35664:return cT;case 35665:return fT;case 35666:return hT;case 35674:return dT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return xT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return ST;case 36294:return yT;case 36295:return MT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return RT}}class wT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=lT(i.type)}}class DT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=CT(i.type)}}class UT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function Cg(s,t){s.seq.push(t),s.map[t.id]=t}function LT(s,t,i){const r=s.name,l=r.length;for(Gh.lastIndex=0;;){const u=Gh.exec(r),h=Gh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Cg(i,p===void 0?new wT(d,s,t):new DT(d,s,t));break}else{let g=i.map[d];g===void 0&&(g=new UT(d),Cg(i,g)),i=g}}}class Hu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);LT(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function wg(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const NT=37297;let OT=0;function PT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Dg=new pt;function zT(s){Ut._getMatrix(Dg,Ut.workingColorSpace,s);const t=`mat3( ${Dg.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(s)){case Vu:return[t,"LinearTransferOETF"];case Gt:return[t,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ug(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+PT(s.getShaderSource(t),d)}else return u}function FT(s,t){const i=zT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function BT(s,t){let i;switch(t){case HM:i="Linear";break;case GM:i="Reinhard";break;case VM:i="Cineon";break;case kM:i="ACESFilmic";break;case WM:i="AgX";break;case qM:i="Neutral";break;case XM:i="Custom";break;default:ct("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lu=new ue;function IT(){Ut.getLuminanceCoefficients(Lu);const s=Lu.x.toFixed(4),t=Lu.y.toFixed(4),i=Lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function GT(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function VT(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Io(s){return s!==""}function Lg(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ng(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(s){return s.replace(kT,WT)}const XT=new Map;function WT(s,t){let i=mt[t];if(i===void 0){const r=XT.get(t);if(r!==void 0)i=mt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ld(i)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(s){return s.replace(qT,YT)}function YT(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Pg(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jT(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===r_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===vM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function ZT(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case ws:t="ENVMAP_TYPE_CUBE";break;case Yu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KT(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function QT(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case s_:t="ENVMAP_BLENDING_MULTIPLY";break;case BM:t="ENVMAP_BLENDING_MIX";break;case IM:t="ENVMAP_BLENDING_ADD";break}return t}function JT(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $T(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=jT(i),p=ZT(i),x=KT(i),g=QT(i),S=JT(i),M=HT(i),E=GT(u),A=l.createProgram();let y,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Io).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Io).join(`
`),_.length>0&&(_+=`
`)):(y=[Pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),_=[Pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ja?"#define TONE_MAPPING":"",i.toneMapping!==Ja?mt.tonemapping_pars_fragment:"",i.toneMapping!==Ja?BT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,FT("linearToOutputTexel",i.outputColorSpace),IT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=Ld(h),h=Lg(h,i),h=Ng(h,i),d=Ld(d),d=Lg(d,i),d=Ng(d,i),h=Og(h),d=Og(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===Kx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Kx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=D+y+h,z=D+_+d,k=wg(l,l.VERTEX_SHADER,U),N=wg(l,l.FRAGMENT_SHADER,z);l.attachShader(A,k),l.attachShader(A,N),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(V){if(s.debug.checkShaderErrors){const te=l.getProgramInfoLog(A)||"",se=l.getShaderInfoLog(k)||"",he=l.getShaderInfoLog(N)||"",ce=te.trim(),F=se.trim(),Y=he.trim();let H=!0,_e=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,k,N);else{const ve=Ug(l,k,"vertex"),O=Ug(l,N,"fragment");rn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+ve+`
`+O)}else ce!==""?ct("WebGLProgram: Program Info Log:",ce):(F===""||Y==="")&&(_e=!1);_e&&(V.diagnostics={runnable:H,programLog:ce,vertexShader:{log:F,prefix:y},fragmentShader:{log:Y,prefix:_}})}l.deleteShader(k),l.deleteShader(N),W=new Hu(l,A),w=VT(l,A)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,NT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=OT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=k,this.fragmentShader=N,this}let e2=0;class t2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new n2(t),i.set(t,r)),r}}class n2{constructor(t){this.id=e2++,this.code=t,this.usedTimes=0}}function i2(s,t,i,r,l,u,h){const d=new __,m=new t2,p=new Set,x=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,V,te,se){const he=te.fog,ce=se.geometry,F=w.isMeshStandardMaterial?te.environment:null,Y=(w.isMeshStandardMaterial?i:t).get(w.envMap||F),H=Y&&Y.mapping===Yu?Y.image.height:null,_e=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ve=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=ve!==void 0?ve.length:0;let ie=0;ce.morphAttributes.position!==void 0&&(ie=1),ce.morphAttributes.normal!==void 0&&(ie=2),ce.morphAttributes.color!==void 0&&(ie=3);let Se,Te,Ne,ee;if(_e){const Rt=wi[_e];Se=Rt.vertexShader,Te=Rt.fragmentShader}else Se=w.vertexShader,Te=w.fragmentShader,m.update(w),Ne=m.getVertexShaderID(w),ee=m.getFragmentShaderID(w);const oe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),ze=se.isInstancedMesh===!0,He=se.isBatchedMesh===!0,rt=!!w.map,Zt=!!w.matcap,st=!!Y,Tt=!!w.aoMap,I=!!w.lightMap,it=!!w.bumpMap,ft=!!w.normalMap,Ot=!!w.displacementMap,Ve=!!w.emissiveMap,Xt=!!w.metalnessMap,je=!!w.roughnessMap,ot=w.anisotropy>0,L=w.clearcoat>0,b=w.dispersion>0,Q=w.iridescence>0,me=w.sheen>0,ye=w.transmission>0,le=ot&&!!w.anisotropyMap,qe=L&&!!w.clearcoatMap,Le=L&&!!w.clearcoatNormalMap,Qe=L&&!!w.clearcoatRoughnessMap,We=Q&&!!w.iridescenceMap,Me=Q&&!!w.iridescenceThicknessMap,Ee=me&&!!w.sheenColorMap,Ye=me&&!!w.sheenRoughnessMap,ke=!!w.specularMap,Pe=!!w.specularColorMap,nt=!!w.specularIntensityMap,G=ye&&!!w.transmissionMap,De=ye&&!!w.thicknessMap,Re=!!w.gradientMap,Ce=!!w.alphaMap,be=w.alphaTest>0,ge=!!w.alphaHash,Be=!!w.extensions;let at=Ja;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(at=s.toneMapping);const Ft={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:Se,fragmentShader:Te,defines:w.defines,customVertexShaderID:Ne,customFragmentShaderID:ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:He,batchingColor:He&&se._colorsTexture!==null,instancing:ze,instancingColor:ze&&se.instanceColor!==null,instancingMorph:ze&&se.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ds,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:Zt,envMap:st,envMapMode:st&&Y.mapping,envMapCubeUVHeight:H,aoMap:Tt,lightMap:I,bumpMap:it,normalMap:ft,displacementMap:S&&Ot,emissiveMap:Ve,normalMapObjectSpace:ft&&w.normalMapType===QM,normalMapTangentSpace:ft&&w.normalMapType===KM,metalnessMap:Xt,roughnessMap:je,anisotropy:ot,anisotropyMap:le,clearcoat:L,clearcoatMap:qe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Qe,dispersion:b,iridescence:Q,iridescenceMap:We,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:Ee,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:Pe,specularIntensityMap:nt,transmission:ye,transmissionMap:G,thicknessMap:De,gradientMap:Re,opaque:w.transparent===!1&&w.blending===Ts&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:be,alphaHash:ge,combine:w.combine,mapUv:rt&&A(w.map.channel),aoMapUv:Tt&&A(w.aoMap.channel),lightMapUv:I&&A(w.lightMap.channel),bumpMapUv:it&&A(w.bumpMap.channel),normalMapUv:ft&&A(w.normalMap.channel),displacementMapUv:Ot&&A(w.displacementMap.channel),emissiveMapUv:Ve&&A(w.emissiveMap.channel),metalnessMapUv:Xt&&A(w.metalnessMap.channel),roughnessMapUv:je&&A(w.roughnessMap.channel),anisotropyMapUv:le&&A(w.anisotropyMap.channel),clearcoatMapUv:qe&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&A(w.sheenRoughnessMap.channel),specularMapUv:ke&&A(w.specularMap.channel),specularColorMapUv:Pe&&A(w.specularColorMap.channel),specularIntensityMapUv:nt&&A(w.specularIntensityMap.channel),transmissionMapUv:G&&A(w.transmissionMap.channel),thicknessMapUv:De&&A(w.thicknessMap.channel),alphaMapUv:Ce&&A(w.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ft||ot),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!ce.attributes.uv&&(rt||Ce),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:we,skinning:se.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&Ut.getTransfer(w.map.colorSpace)===Gt,decodeVideoTextureEmissive:Ve&&w.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(w.emissiveMap.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===la,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=p.has(1),Ft.vertexUv2s=p.has(2),Ft.vertexUv3s=p.has(3),p.clear(),Ft}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(D(C,w),U(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function D(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function z(w){const C=E[w.type];let V;if(C){const te=wi[C];V=Rb.clone(te.uniforms)}else V=w.uniforms;return V}function k(w,C){let V;for(let te=0,se=x.length;te<se;te++){const he=x[te];if(he.cacheKey===C){V=he,++V.usedTimes;break}}return V===void 0&&(V=new $T(s,C,w,u),x.push(V)),V}function N(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function P(w){m.remove(w)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:z,acquireProgram:k,releaseProgram:N,releaseShaderCache:P,programs:x,dispose:W}}function a2(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function r2(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Fg(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(g,S,M,E,A,y){let _=s[t];return _===void 0?(_={id:g.id,object:g,geometry:S,material:M,groupOrder:E,renderOrder:g.renderOrder,z:A,group:y},s[t]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=M,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=A,_.group=y),t++,_}function d(g,S,M,E,A,y){const _=h(g,S,M,E,A,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,S,M,E,A,y){const _=h(g,S,M,E,A,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||r2),r.length>1&&r.sort(S||zg),l.length>1&&l.sort(S||zg)}function x(){for(let g=t,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:x,sort:p}}function s2(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new Fg,s.set(r,[h])):l>=u.length?(h=new Fg,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function o2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ue,color:new Vt};break;case"SpotLight":i={position:new ue,direction:new ue,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ue,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ue,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":i={color:new Vt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return s[t.id]=i,i}}}function l2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let u2=0;function c2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function f2(s){const t=new o2,i=l2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ue);const l=new ue,u=new xn,h=new xn;function d(p){let x=0,g=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,E=0,A=0,y=0,_=0,D=0,U=0,z=0,k=0,N=0,P=0;p.sort(c2);for(let w=0,C=p.length;w<C;w++){const V=p[w],te=V.color,se=V.intensity,he=V.distance,ce=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)x+=te.r*se,g+=te.g*se,S+=te.b*se;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],se);P++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Y=V.shadow,H=i.get(V);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=V.shadow.matrix,D++}r.directional[M]=F,M++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(te).multiplyScalar(se),F.distance=he,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[A]=F;const Y=V.shadow;if(V.map&&(r.spotLightMap[k]=V.map,k++,Y.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[A]=Y.matrix,V.castShadow){const H=i.get(V);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,r.spotShadow[A]=H,r.spotShadowMap[A]=ce,z++}A++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(te).multiplyScalar(se),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=F,y++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const Y=V.shadow,H=i.get(V);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=ce,r.pointShadowMatrix[E]=V.shadow.matrix,U++}r.point[E]=F,E++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(se),F.groundColor.copy(V.groundColor).multiplyScalar(se),r.hemi[_]=F,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=S;const W=r.hash;(W.directionalLength!==M||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==y||W.hemiLength!==_||W.numDirectionalShadows!==D||W.numPointShadows!==U||W.numSpotShadows!==z||W.numSpotMaps!==k||W.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=z,r.spotShadowMap.length=z,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=z+k-N,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=P,W.directionalLength=M,W.pointLength=E,W.spotLength=A,W.rectAreaLength=y,W.hemiLength=_,W.numDirectionalShadows=D,W.numPointShadows=U,W.numSpotShadows=z,W.numSpotMaps=k,W.numLightProbes=P,r.version=u2++)}function m(p,x){let g=0,S=0,M=0,E=0,A=0;const y=x.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const U=p[_];if(U.isDirectionalLight){const z=r.directional[g];z.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),g++}else if(U.isSpotLight){const z=r.spot[M];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(y),z.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const z=r.rectArea[E];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(y),h.identity(),u.copy(U.matrixWorld),u.premultiply(y),h.extractRotation(u),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const z=r.point[S];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const z=r.hemi[A];z.direction.setFromMatrixPosition(U.matrixWorld),z.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function Bg(s){const t=new f2(s),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function h(x){r.push(x)}function d(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function h2(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Bg(s),t.set(l,[d])):u>=h.length?(d=new Bg(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const d2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p2=`uniform sampler2D shadow_pass;
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
}`;function m2(s,t,i){let r=new A_;const l=new kt,u=new kt,h=new sn,d=new Ib({depthPacking:ZM}),m=new Hb,p={},x=i.maxTextureSize,g={[$a]:kn,[kn]:$a,[la]:la},S=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:d2,fragmentShader:p2}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new er;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ga(E,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r_;let _=this.type;this.render=function(N,P,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),te=s.state;te.setBlending(ha),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const se=_!==oa&&this.type===oa,he=_===oa&&this.type!==oa;for(let ce=0,F=N.length;ce<F;ce++){const Y=N[ce],H=Y.shadow;if(H===void 0){ct("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const _e=H.getFrameExtents();if(l.multiply(_e),u.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/_e.x),l.x=u.x*_e.x,H.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/_e.y),l.y=u.y*_e.y,H.mapSize.y=u.y)),H.map===null||se===!0||he===!0){const O=this.type!==oa?{minFilter:Xn,magFilter:Xn}:{};H.map!==null&&H.map.dispose(),H.map=new Ur(l.x,l.y,O),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ve=H.getViewportCount();for(let O=0;O<ve;O++){const ie=H.getViewport(O);h.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),te.viewport(h),H.updateMatrices(Y,O),r=H.getFrustum(),z(P,W,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===oa&&D(H,W),H.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(w,C,V)};function D(N,P){const W=t.update(A);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ur(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(P,null,W,S,A,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(P,null,W,M,A,null)}function U(N,P,W,w){let C=null;const V=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)C=V;else if(C=W.isPointLight===!0?m:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const te=C.uuid,se=P.uuid;let he=p[te];he===void 0&&(he={},p[te]=he);let ce=he[se];ce===void 0&&(ce=C.clone(),he[se]=ce,P.addEventListener("dispose",k)),C=ce}if(C.visible=P.visible,C.wireframe=P.wireframe,w===oa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:g[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const te=s.properties.get(C);te.light=W}return C}function z(N,P,W,w,C){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===oa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);const se=t.update(N),he=N.material;if(Array.isArray(he)){const ce=se.groups;for(let F=0,Y=ce.length;F<Y;F++){const H=ce[F],_e=he[H.materialIndex];if(_e&&_e.visible){const ve=U(N,_e,w,C);N.onBeforeShadow(s,N,P,W,se,ve,H),s.renderBufferDirect(W,null,se,ve,N,H),N.onAfterShadow(s,N,P,W,se,ve,H)}}}else if(he.visible){const ce=U(N,he,w,C);N.onBeforeShadow(s,N,P,W,se,ce,null),s.renderBufferDirect(W,null,se,ce,N,null),N.onAfterShadow(s,N,P,W,se,ce,null)}}const te=N.children;for(let se=0,he=te.length;se<he;se++)z(te[se],P,W,w,C)}function k(N){N.target.removeEventListener("dispose",k);for(const W in p){const w=p[W],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const x2={[qh]:Yh,[jh]:Qh,[Zh]:Jh,[Rs]:Kh,[Yh]:qh,[Qh]:jh,[Jh]:Zh,[Kh]:Rs};function g2(s,t){function i(){let G=!1;const De=new sn;let Re=null;const Ce=new sn(0,0,0,0);return{setMask:function(be){Re!==be&&!G&&(s.colorMask(be,be,be,be),Re=be)},setLocked:function(be){G=be},setClear:function(be,ge,Be,at,Ft){Ft===!0&&(be*=at,ge*=at,Be*=at),De.set(be,ge,Be,at),Ce.equals(De)===!1&&(s.clearColor(be,ge,Be,at),Ce.copy(De))},reset:function(){G=!1,Re=null,Ce.set(-1,0,0,0)}}}function r(){let G=!1,De=!1,Re=null,Ce=null,be=null;return{setReversed:function(ge){if(De!==ge){const Be=t.get("EXT_clip_control");ge?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),De=ge;const at=be;be=null,this.setClear(at)}},getReversed:function(){return De},setTest:function(ge){ge?oe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(ge){Re!==ge&&!G&&(s.depthMask(ge),Re=ge)},setFunc:function(ge){if(De&&(ge=x2[ge]),Ce!==ge){switch(ge){case qh:s.depthFunc(s.NEVER);break;case Yh:s.depthFunc(s.ALWAYS);break;case jh:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case Zh:s.depthFunc(s.EQUAL);break;case Kh:s.depthFunc(s.GEQUAL);break;case Qh:s.depthFunc(s.GREATER);break;case Jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=ge}},setLocked:function(ge){G=ge},setClear:function(ge){be!==ge&&(De&&(ge=1-ge),s.clearDepth(ge),be=ge)},reset:function(){G=!1,Re=null,Ce=null,be=null,De=!1}}}function l(){let G=!1,De=null,Re=null,Ce=null,be=null,ge=null,Be=null,at=null,Ft=null;return{setTest:function(Rt){G||(Rt?oe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Rt){De!==Rt&&!G&&(s.stencilMask(Rt),De=Rt)},setFunc:function(Rt,wn,Wn){(Re!==Rt||Ce!==wn||be!==Wn)&&(s.stencilFunc(Rt,wn,Wn),Re=Rt,Ce=wn,be=Wn)},setOp:function(Rt,wn,Wn){(ge!==Rt||Be!==wn||at!==Wn)&&(s.stencilOp(Rt,wn,Wn),ge=Rt,Be=wn,at=Wn)},setLocked:function(Rt){G=Rt},setClear:function(Rt){Ft!==Rt&&(s.clearStencil(Rt),Ft=Rt)},reset:function(){G=!1,De=null,Re=null,Ce=null,be=null,ge=null,Be=null,at=null,Ft=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,M=[],E=null,A=!1,y=null,_=null,D=null,U=null,z=null,k=null,N=null,P=new Vt(0,0,0),W=0,w=!1,C=null,V=null,te=null,se=null,he=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=Y>=2);let _e=null,ve={};const O=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Se=new sn().fromArray(O),Te=new sn().fromArray(ie);function Ne(G,De,Re,Ce){const be=new Uint8Array(4),ge=s.createTexture();s.bindTexture(G,ge),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<Re;Be++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(De+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return ge}const ee={};ee[s.TEXTURE_2D]=Ne(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=Ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),oe(s.DEPTH_TEST),h.setFunc(Rs),it(!1),ft(Xx),oe(s.CULL_FACE),Tt(ha);function oe(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function we(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function ze(G,De){return g[G]!==De?(s.bindFramebuffer(G,De),g[G]=De,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function He(G,De){let Re=M,Ce=!1;if(G){Re=S.get(De),Re===void 0&&(Re=[],S.set(De,Re));const be=G.textures;if(Re.length!==be.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Be=be.length;ge<Be;ge++)Re[ge]=s.COLOR_ATTACHMENT0+ge;Re.length=be.length,Ce=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(Re)}function rt(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const Zt={[Ar]:s.FUNC_ADD,[yM]:s.FUNC_SUBTRACT,[MM]:s.FUNC_REVERSE_SUBTRACT};Zt[bM]=s.MIN,Zt[EM]=s.MAX;const st={[TM]:s.ZERO,[AM]:s.ONE,[RM]:s.SRC_COLOR,[Xh]:s.SRC_ALPHA,[NM]:s.SRC_ALPHA_SATURATE,[UM]:s.DST_COLOR,[wM]:s.DST_ALPHA,[CM]:s.ONE_MINUS_SRC_COLOR,[Wh]:s.ONE_MINUS_SRC_ALPHA,[LM]:s.ONE_MINUS_DST_COLOR,[DM]:s.ONE_MINUS_DST_ALPHA,[OM]:s.CONSTANT_COLOR,[PM]:s.ONE_MINUS_CONSTANT_COLOR,[zM]:s.CONSTANT_ALPHA,[FM]:s.ONE_MINUS_CONSTANT_ALPHA};function Tt(G,De,Re,Ce,be,ge,Be,at,Ft,Rt){if(G===ha){A===!0&&(we(s.BLEND),A=!1);return}if(A===!1&&(oe(s.BLEND),A=!0),G!==SM){if(G!==y||Rt!==w){if((_!==Ar||z!==Ar)&&(s.blendEquation(s.FUNC_ADD),_=Ar,z=Ar),Rt)switch(G){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wx:s.blendFunc(s.ONE,s.ONE);break;case qx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rn("WebGLState: Invalid blending: ",G);break}else switch(G){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wx:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qx:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yx:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",G);break}D=null,U=null,k=null,N=null,P.set(0,0,0),W=0,y=G,w=Rt}return}be=be||De,ge=ge||Re,Be=Be||Ce,(De!==_||be!==z)&&(s.blendEquationSeparate(Zt[De],Zt[be]),_=De,z=be),(Re!==D||Ce!==U||ge!==k||Be!==N)&&(s.blendFuncSeparate(st[Re],st[Ce],st[ge],st[Be]),D=Re,U=Ce,k=ge,N=Be),(at.equals(P)===!1||Ft!==W)&&(s.blendColor(at.r,at.g,at.b,Ft),P.copy(at),W=Ft),y=G,w=!1}function I(G,De){G.side===la?we(s.CULL_FACE):oe(s.CULL_FACE);let Re=G.side===kn;De&&(Re=!Re),it(Re),G.blending===Ts&&G.transparent===!1?Tt(ha):Tt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),u.setMask(G.colorWrite);const Ce=G.stencilWrite;d.setTest(Ce),Ce&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ve(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function ft(G){G!==gM?(oe(s.CULL_FACE),G!==V&&(G===Xx?s.cullFace(s.BACK):G===_M?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),V=G}function Ot(G){G!==te&&(F&&s.lineWidth(G),te=G)}function Ve(G,De,Re){G?(oe(s.POLYGON_OFFSET_FILL),(se!==De||he!==Re)&&(s.polygonOffset(De,Re),se=De,he=Re)):we(s.POLYGON_OFFSET_FILL)}function Xt(G){G?oe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function je(G){G===void 0&&(G=s.TEXTURE0+ce-1),_e!==G&&(s.activeTexture(G),_e=G)}function ot(G,De,Re){Re===void 0&&(_e===null?Re=s.TEXTURE0+ce-1:Re=_e);let Ce=ve[Re];Ce===void 0&&(Ce={type:void 0,texture:void 0},ve[Re]=Ce),(Ce.type!==G||Ce.texture!==De)&&(_e!==Re&&(s.activeTexture(Re),_e=Re),s.bindTexture(G,De||ee[G]),Ce.type=G,Ce.texture=De)}function L(){const G=ve[_e];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Q(){try{s.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function me(){try{s.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function ye(){try{s.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Le(){try{s.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Qe(){try{s.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function We(){try{s.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Me(){try{s.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ee(G){Se.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Se.copy(G))}function Ye(G){Te.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Te.copy(G))}function ke(G,De){let Re=p.get(De);Re===void 0&&(Re=new WeakMap,p.set(De,Re));let Ce=Re.get(G);Ce===void 0&&(Ce=s.getUniformBlockIndex(De,G.name),Re.set(G,Ce))}function Pe(G,De){const Ce=p.get(De).get(G);m.get(De)!==Ce&&(s.uniformBlockBinding(De,Ce,G.__bindingPointIndex),m.set(De,Ce))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},_e=null,ve={},g={},S=new WeakMap,M=[],E=null,A=!1,y=null,_=null,D=null,U=null,z=null,k=null,N=null,P=new Vt(0,0,0),W=0,w=!1,C=null,V=null,te=null,se=null,he=null,Se.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:oe,disable:we,bindFramebuffer:ze,drawBuffers:He,useProgram:rt,setBlending:Tt,setMaterial:I,setFlipSided:it,setCullFace:ft,setLineWidth:Ot,setPolygonOffset:Ve,setScissorTest:Xt,activeTexture:je,bindTexture:ot,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:Q,texImage2D:We,texImage3D:Me,updateUBOMapping:ke,uniformBlockBinding:Pe,texStorage2D:Le,texStorage3D:Qe,texSubImage2D:me,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:qe,scissor:Ee,viewport:Ye,reset:nt}}function _2(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new kt,x=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return M?new OffscreenCanvas(L,b):Xu("canvas")}function A(L,b,Q){let me=1;const ye=ot(L);if((ye.width>Q||ye.height>Q)&&(me=Q/Math.max(ye.width,ye.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const le=Math.floor(me*ye.width),qe=Math.floor(me*ye.height);g===void 0&&(g=E(le,qe));const Le=b?E(le,qe):g;return Le.width=le,Le.height=qe,Le.getContext("2d").drawImage(L,0,0,le,qe),ct("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+le+"x"+qe+")."),Le}else return"data"in L&&ct("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,b,Q,me,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=b;if(b===s.RED&&(Q===s.FLOAT&&(le=s.R32F),Q===s.HALF_FLOAT&&(le=s.R16F),Q===s.UNSIGNED_BYTE&&(le=s.R8)),b===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(le=s.R8UI),Q===s.UNSIGNED_SHORT&&(le=s.R16UI),Q===s.UNSIGNED_INT&&(le=s.R32UI),Q===s.BYTE&&(le=s.R8I),Q===s.SHORT&&(le=s.R16I),Q===s.INT&&(le=s.R32I)),b===s.RG&&(Q===s.FLOAT&&(le=s.RG32F),Q===s.HALF_FLOAT&&(le=s.RG16F),Q===s.UNSIGNED_BYTE&&(le=s.RG8)),b===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(le=s.RG8UI),Q===s.UNSIGNED_SHORT&&(le=s.RG16UI),Q===s.UNSIGNED_INT&&(le=s.RG32UI),Q===s.BYTE&&(le=s.RG8I),Q===s.SHORT&&(le=s.RG16I),Q===s.INT&&(le=s.RG32I)),b===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(le=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(le=s.RGB16UI),Q===s.UNSIGNED_INT&&(le=s.RGB32UI),Q===s.BYTE&&(le=s.RGB8I),Q===s.SHORT&&(le=s.RGB16I),Q===s.INT&&(le=s.RGB32I)),b===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),Q===s.UNSIGNED_INT&&(le=s.RGBA32UI),Q===s.BYTE&&(le=s.RGBA8I),Q===s.SHORT&&(le=s.RGBA16I),Q===s.INT&&(le=s.RGBA32I)),b===s.RGB&&(Q===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),b===s.RGBA){const qe=ye?Vu:Ut.getTransfer(me);Q===s.FLOAT&&(le=s.RGBA32F),Q===s.HALF_FLOAT&&(le=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(le=qe===Gt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&t.get("EXT_color_buffer_float"),le}function z(L,b){let Q;return L?b===null||b===Dr||b===Vo?Q=s.DEPTH24_STENCIL8:b===ca?Q=s.DEPTH32F_STENCIL8:b===Go&&(Q=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Dr||b===Vo?Q=s.DEPTH_COMPONENT24:b===ca?Q=s.DEPTH_COMPONENT32F:b===Go&&(Q=s.DEPTH_COMPONENT16),Q}function k(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xn&&L.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function N(L){const b=L.target;b.removeEventListener("dispose",N),W(b),b.isVideoTexture&&x.delete(b)}function P(L){const b=L.target;b.removeEventListener("dispose",P),C(b)}function W(L){const b=r.get(L);if(b.__webglInit===void 0)return;const Q=L.source,me=S.get(Q);if(me){const ye=me[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&w(L),Object.keys(me).length===0&&S.delete(Q)}r.remove(L)}function w(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const Q=L.source,me=S.get(Q);delete me[b.__cacheKey],h.memory.textures--}function C(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(b.__webglFramebuffer[me]))for(let ye=0;ye<b.__webglFramebuffer[me].length;ye++)s.deleteFramebuffer(b.__webglFramebuffer[me][ye]);else s.deleteFramebuffer(b.__webglFramebuffer[me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[me])}else{if(Array.isArray(b.__webglFramebuffer))for(let me=0;me<b.__webglFramebuffer.length;me++)s.deleteFramebuffer(b.__webglFramebuffer[me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let me=0;me<b.__webglColorRenderbuffer.length;me++)b.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=L.textures;for(let me=0,ye=Q.length;me<ye;me++){const le=r.get(Q[me]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),h.memory.textures--),r.remove(Q[me])}r.remove(L)}let V=0;function te(){V=0}function se(){const L=V;return L>=l.maxTextures&&ct("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function he(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ce(L,b){const Q=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const me=L.image;if(me===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Q,L,b);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+b)}function F(L,b){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){ee(Q,L,b);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){ee(Q,L,b);return}i.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+b)}function H(L,b){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){oe(Q,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+b)}const _e={[td]:s.REPEAT,[ua]:s.CLAMP_TO_EDGE,[nd]:s.MIRRORED_REPEAT},ve={[Xn]:s.NEAREST,[YM]:s.NEAREST_MIPMAP_NEAREST,[hu]:s.NEAREST_MIPMAP_LINEAR,[pi]:s.LINEAR,[hh]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},O={[JM]:s.NEVER,[ab]:s.ALWAYS,[$M]:s.LESS,[m_]:s.LEQUAL,[eb]:s.EQUAL,[ib]:s.GEQUAL,[tb]:s.GREATER,[nb]:s.NOTEQUAL};function ie(L,b){if(b.type===ca&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===pi||b.magFilter===hh||b.magFilter===hu||b.magFilter===Cr||b.minFilter===pi||b.minFilter===hh||b.minFilter===hu||b.minFilter===Cr)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,_e[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,_e[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,_e[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ve[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xn||b.minFilter!==hu&&b.minFilter!==Cr||b.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Se(L,b){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",N));const me=b.source;let ye=S.get(me);ye===void 0&&(ye={},S.set(me,ye));const le=he(b);if(le!==L.__cacheKey){ye[le]===void 0&&(ye[le]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),ye[le].usedTimes++;const qe=ye[L.__cacheKey];qe!==void 0&&(ye[L.__cacheKey].usedTimes--,qe.usedTimes===0&&w(b)),L.__cacheKey=le,L.__webglTexture=ye[le].texture}return Q}function Te(L,b,Q){return Math.floor(Math.floor(L/Q)/b)}function Ne(L,b,Q,me){const le=L.updateRanges;if(le.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Q,me,b.data);else{le.sort((Me,Ee)=>Me.start-Ee.start);let qe=0;for(let Me=1;Me<le.length;Me++){const Ee=le[qe],Ye=le[Me],ke=Ee.start+Ee.count,Pe=Te(Ye.start,b.width,4),nt=Te(Ee.start,b.width,4);Ye.start<=ke+1&&Pe===nt&&Te(Ye.start+Ye.count-1,b.width,4)===Pe?Ee.count=Math.max(Ee.count,Ye.start+Ye.count-Ee.start):(++qe,le[qe]=Ye)}le.length=qe+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),Qe=s.getParameter(s.UNPACK_SKIP_PIXELS),We=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Me=0,Ee=le.length;Me<Ee;Me++){const Ye=le[Me],ke=Math.floor(Ye.start/4),Pe=Math.ceil(Ye.count/4),nt=ke%b.width,G=Math.floor(ke/b.width),De=Pe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),i.texSubImage2D(s.TEXTURE_2D,0,nt,G,De,Re,Q,me,b.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,We)}}function ee(L,b,Q){let me=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=s.TEXTURE_3D);const ye=Se(L,b),le=b.source;i.bindTexture(me,L.__webglTexture,s.TEXTURE0+Q);const qe=r.get(le);if(le.version!==qe.__version||ye===!0){i.activeTexture(s.TEXTURE0+Q);const Le=Ut.getPrimaries(Ut.workingColorSpace),Qe=b.colorSpace===Ka?null:Ut.getPrimaries(b.colorSpace),We=b.colorSpace===Ka||Le===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Me=A(b.image,!1,l.maxTextureSize);Me=je(b,Me);const Ee=u.convert(b.format,b.colorSpace),Ye=u.convert(b.type);let ke=U(b.internalFormat,Ee,Ye,b.colorSpace,b.isVideoTexture);ie(me,b);let Pe;const nt=b.mipmaps,G=b.isVideoTexture!==!0,De=qe.__version===void 0||ye===!0,Re=le.dataReady,Ce=k(b,Me);if(b.isDepthTexture)ke=z(b.format===Xo,b.type),De&&(G?i.texStorage2D(s.TEXTURE_2D,1,ke,Me.width,Me.height):i.texImage2D(s.TEXTURE_2D,0,ke,Me.width,Me.height,0,Ee,Ye,null));else if(b.isDataTexture)if(nt.length>0){G&&De&&i.texStorage2D(s.TEXTURE_2D,Ce,ke,nt[0].width,nt[0].height);for(let be=0,ge=nt.length;be<ge;be++)Pe=nt[be],G?Re&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Pe.width,Pe.height,Ee,Ye,Pe.data):i.texImage2D(s.TEXTURE_2D,be,ke,Pe.width,Pe.height,0,Ee,Ye,Pe.data);b.generateMipmaps=!1}else G?(De&&i.texStorage2D(s.TEXTURE_2D,Ce,ke,Me.width,Me.height),Re&&Ne(b,Me,Ee,Ye)):i.texImage2D(s.TEXTURE_2D,0,ke,Me.width,Me.height,0,Ee,Ye,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,ke,nt[0].width,nt[0].height,Me.depth);for(let be=0,ge=nt.length;be<ge;be++)if(Pe=nt[be],b.format!==bi)if(Ee!==null)if(G){if(Re)if(b.layerUpdates.size>0){const Be=mg(Pe.width,Pe.height,b.format,b.type);for(const at of b.layerUpdates){const Ft=Pe.data.subarray(at*Be/Pe.data.BYTES_PER_ELEMENT,(at+1)*Be/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,at,Pe.width,Pe.height,1,Ee,Ft)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Pe.width,Pe.height,Me.depth,Ee,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,ke,Pe.width,Pe.height,Me.depth,0,Pe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Pe.width,Pe.height,Me.depth,Ee,Ye,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,be,ke,Pe.width,Pe.height,Me.depth,0,Ee,Ye,Pe.data)}else{G&&De&&i.texStorage2D(s.TEXTURE_2D,Ce,ke,nt[0].width,nt[0].height);for(let be=0,ge=nt.length;be<ge;be++)Pe=nt[be],b.format!==bi?Ee!==null?G?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,Pe.width,Pe.height,Ee,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,be,ke,Pe.width,Pe.height,0,Pe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Re&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Pe.width,Pe.height,Ee,Ye,Pe.data):i.texImage2D(s.TEXTURE_2D,be,ke,Pe.width,Pe.height,0,Ee,Ye,Pe.data)}else if(b.isDataArrayTexture)if(G){if(De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,ke,Me.width,Me.height,Me.depth),Re)if(b.layerUpdates.size>0){const be=mg(Me.width,Me.height,b.format,b.type);for(const ge of b.layerUpdates){const Be=Me.data.subarray(ge*be/Me.data.BYTES_PER_ELEMENT,(ge+1)*be/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Me.width,Me.height,1,Ee,Ye,Be)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ee,Ye,Me.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,Me.width,Me.height,Me.depth,0,Ee,Ye,Me.data);else if(b.isData3DTexture)G?(De&&i.texStorage3D(s.TEXTURE_3D,Ce,ke,Me.width,Me.height,Me.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ee,Ye,Me.data)):i.texImage3D(s.TEXTURE_3D,0,ke,Me.width,Me.height,Me.depth,0,Ee,Ye,Me.data);else if(b.isFramebufferTexture){if(De)if(G)i.texStorage2D(s.TEXTURE_2D,Ce,ke,Me.width,Me.height);else{let be=Me.width,ge=Me.height;for(let Be=0;Be<Ce;Be++)i.texImage2D(s.TEXTURE_2D,Be,ke,be,ge,0,Ee,Ye,null),be>>=1,ge>>=1}}else if(nt.length>0){if(G&&De){const be=ot(nt[0]);i.texStorage2D(s.TEXTURE_2D,Ce,ke,be.width,be.height)}for(let be=0,ge=nt.length;be<ge;be++)Pe=nt[be],G?Re&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Ee,Ye,Pe):i.texImage2D(s.TEXTURE_2D,be,ke,Ee,Ye,Pe);b.generateMipmaps=!1}else if(G){if(De){const be=ot(Me);i.texStorage2D(s.TEXTURE_2D,Ce,ke,be.width,be.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Ye,Me)}else i.texImage2D(s.TEXTURE_2D,0,ke,Ee,Ye,Me);y(b)&&_(me),qe.__version=le.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function oe(L,b,Q){if(b.image.length!==6)return;const me=Se(L,b),ye=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const le=r.get(ye);if(ye.version!==le.__version||me===!0){i.activeTexture(s.TEXTURE0+Q);const qe=Ut.getPrimaries(Ut.workingColorSpace),Le=b.colorSpace===Ka?null:Ut.getPrimaries(b.colorSpace),Qe=b.colorSpace===Ka||qe===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const We=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let ge=0;ge<6;ge++)!We&&!Me?Ee[ge]=A(b.image[ge],!0,l.maxCubemapSize):Ee[ge]=Me?b.image[ge].image:b.image[ge],Ee[ge]=je(b,Ee[ge]);const Ye=Ee[0],ke=u.convert(b.format,b.colorSpace),Pe=u.convert(b.type),nt=U(b.internalFormat,ke,Pe,b.colorSpace),G=b.isVideoTexture!==!0,De=le.__version===void 0||me===!0,Re=ye.dataReady;let Ce=k(b,Ye);ie(s.TEXTURE_CUBE_MAP,b);let be;if(We){G&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,nt,Ye.width,Ye.height);for(let ge=0;ge<6;ge++){be=Ee[ge].mipmaps;for(let Be=0;Be<be.length;Be++){const at=be[Be];b.format!==bi?ke!==null?G?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,0,0,at.width,at.height,ke,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,nt,at.width,at.height,0,at.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,0,0,at.width,at.height,ke,Pe,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,nt,at.width,at.height,0,ke,Pe,at.data)}}}else{if(be=b.mipmaps,G&&De){be.length>0&&Ce++;const ge=ot(Ee[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,nt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Me){G?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ee[ge].width,Ee[ge].height,ke,Pe,Ee[ge].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Ee[ge].width,Ee[ge].height,0,ke,Pe,Ee[ge].data);for(let Be=0;Be<be.length;Be++){const Ft=be[Be].image[ge].image;G?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,0,0,Ft.width,Ft.height,ke,Pe,Ft.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,nt,Ft.width,Ft.height,0,ke,Pe,Ft.data)}}else{G?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ke,Pe,Ee[ge]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,ke,Pe,Ee[ge]);for(let Be=0;Be<be.length;Be++){const at=be[Be];G?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,0,0,ke,Pe,at.image[ge]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,nt,ke,Pe,at.image[ge])}}}y(b)&&_(s.TEXTURE_CUBE_MAP),le.__version=ye.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function we(L,b,Q,me,ye,le){const qe=u.convert(Q.format,Q.colorSpace),Le=u.convert(Q.type),Qe=U(Q.internalFormat,qe,Le,Q.colorSpace),We=r.get(b),Me=r.get(Q);if(Me.__renderTarget=b,!We.__hasExternalTextures){const Ee=Math.max(1,b.width>>le),Ye=Math.max(1,b.height>>le);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,le,Qe,Ee,Ye,b.depth,0,qe,Le,null):i.texImage2D(ye,le,Qe,Ee,Ye,0,qe,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Ve(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ye,Me.__webglTexture,0,Ot(b)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ye,Me.__webglTexture,le),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(L,b,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const me=b.depthTexture,ye=me&&me.isDepthTexture?me.type:null,le=z(b.stencilBuffer,ye),qe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=Ot(b);Ve(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,le,b.width,b.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,le,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,le,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,L)}else{const me=b.textures;for(let ye=0;ye<me.length;ye++){const le=me[ye],qe=u.convert(le.format,le.colorSpace),Le=u.convert(le.type),Qe=U(le.internalFormat,qe,Le,le.colorSpace),We=Ot(b);Q&&Ve(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Qe,b.width,b.height):Ve(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,Qe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Qe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(b.depthTexture);me.__renderTarget=b,(!me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce(b.depthTexture,0);const ye=me.__webglTexture,le=Ot(b);if(b.depthTexture.format===ko)Ve(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(b.depthTexture.format===Xo)Ve(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function rt(L){const b=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),me){const ye=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,me.removeEventListener("dispose",ye)};me.addEventListener("dispose",ye),b.__depthDisposeCallback=ye}b.__boundDepthTexture=me}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const me=L.texture.mipmaps;me&&me.length>0?He(b.__webglFramebuffer[0],L):He(b.__webglFramebuffer,L)}else if(Q){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]===void 0)b.__webglDepthbuffer[me]=s.createRenderbuffer(),ze(b.__webglDepthbuffer[me],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,le)}}else{const me=L.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ze(b.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,le)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(L,b,Q){const me=r.get(L);b!==void 0&&we(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&rt(L)}function st(L){const b=L.texture,Q=r.get(L),me=r.get(b);L.addEventListener("dispose",P);const ye=L.textures,le=L.isWebGLCubeRenderTarget===!0,qe=ye.length>1;if(qe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=b.version,h.memory.textures++),le){Q.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[Le]=[];for(let Qe=0;Qe<b.mipmaps.length;Qe++)Q.__webglFramebuffer[Le][Qe]=s.createFramebuffer()}else Q.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Le=0;Le<b.mipmaps.length;Le++)Q.__webglFramebuffer[Le]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Le=0,Qe=ye.length;Le<Qe;Le++){const We=r.get(ye[Le]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&Ve(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Le=0;Le<ye.length;Le++){const Qe=ye[Le];Q.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Le]);const We=u.convert(Qe.format,Qe.colorSpace),Me=u.convert(Qe.type),Ee=U(Qe.internalFormat,We,Me,Qe.colorSpace,L.isXRRenderTarget===!0),Ye=Ot(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Ee,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(Q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){i.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,b);for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qe=0;Qe<b.mipmaps.length;Qe++)we(Q.__webglFramebuffer[Le][Qe],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Qe);else we(Q.__webglFramebuffer[Le],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Le=0,Qe=ye.length;Le<Qe;Le++){const We=ye[Le],Me=r.get(We);let Ee=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ee,Me.__webglTexture),ie(Ee,We),we(Q.__webglFramebuffer,L,We,s.COLOR_ATTACHMENT0+Le,Ee,0),y(We)&&_(Ee)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Le=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,me.__webglTexture),ie(Le,b),b.mipmaps&&b.mipmaps.length>0)for(let Qe=0;Qe<b.mipmaps.length;Qe++)we(Q.__webglFramebuffer[Qe],L,b,s.COLOR_ATTACHMENT0,Le,Qe);else we(Q.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Le,0);y(b)&&_(Le),i.unbindTexture()}L.depthBuffer&&rt(L)}function Tt(L){const b=L.textures;for(let Q=0,me=b.length;Q<me;Q++){const ye=b[Q];if(y(ye)){const le=D(L),qe=r.get(ye).__webglTexture;i.bindTexture(le,qe),_(le),i.unbindTexture()}}}const I=[],it=[];function ft(L){if(L.samples>0){if(Ve(L)===!1){const b=L.textures,Q=L.width,me=L.height;let ye=s.COLOR_BUFFER_BIT;const le=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(L),Le=b.length>1;if(Le)for(let We=0;We<b.length;We++)i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Qe=L.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let We=0;We<b.length;We++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const Me=r.get(b[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,Q,me,0,0,Q,me,ye,s.NEAREST),m===!0&&(I.length=0,it.length=0,I.push(s.COLOR_ATTACHMENT0+We),L.depthBuffer&&L.resolveDepthBuffer===!1&&(I.push(le),it.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,it)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let We=0;We<b.length;We++){i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const Me=r.get(b[We]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,Me,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ot(L){return Math.min(l.maxSamples,L.samples)}function Ve(L){const b=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(L){const b=h.render.frame;x.get(L)!==b&&(x.set(L,b),L.update())}function je(L,b){const Q=L.colorSpace,me=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==Ds&&Q!==Ka&&(Ut.getTransfer(Q)===Gt?(me!==bi||ye!==ma)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",Q)),b}function ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=te,this.setTexture2D=ce,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Zt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ve}function v2(s,t){function i(r,l=Ka){let u;const h=Ut.getTransfer(l);if(r===ma)return s.UNSIGNED_BYTE;if(r===Gd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===c_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===f_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===l_)return s.BYTE;if(r===u_)return s.SHORT;if(r===Go)return s.UNSIGNED_SHORT;if(r===Hd)return s.INT;if(r===Dr)return s.UNSIGNED_INT;if(r===ca)return s.FLOAT;if(r===Os)return s.HALF_FLOAT;if(r===h_)return s.ALPHA;if(r===d_)return s.RGB;if(r===bi)return s.RGBA;if(r===ko)return s.DEPTH_COMPONENT;if(r===Xo)return s.DEPTH_STENCIL;if(r===p_)return s.RED;if(r===kd)return s.RED_INTEGER;if(r===Xd)return s.RG;if(r===Wd)return s.RG_INTEGER;if(r===qd)return s.RGBA_INTEGER;if(r===zu||r===Fu||r===Bu||r===Iu)if(h===Gt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===zu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===zu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===id||r===ad||r===rd||r===sd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===id)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===od||r===ld||r===ud)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===od||r===ld)return h===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ud)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===xd||r===gd||r===_d||r===vd||r===Sd||r===yd||r===Md||r===bd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===cd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===md)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_d)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Md)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ed||r===Td||r===Ad)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Ed)return h===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Td)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ad)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rd||r===Cd||r===wd||r===Dd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Rd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Cd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const S2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y2=`
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

}`;class M2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new C_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ni({vertexShader:S2,fragmentShader:y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ga(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b2 extends Ps{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,x=null,g=null,S=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",y=new M2,_={},D=i.getContextAttributes();let U=null,z=null;const k=[],N=[],P=new kt;let W=null;const w=new di;w.viewport=new sn;const C=new di;C.viewport=new sn;const V=[w,C],te=new Vb;let se=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let oe=k[ee];return oe===void 0&&(oe=new Ph,k[ee]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ee){let oe=k[ee];return oe===void 0&&(oe=new Ph,k[ee]=oe),oe.getGripSpace()},this.getHand=function(ee){let oe=k[ee];return oe===void 0&&(oe=new Ph,k[ee]=oe),oe.getHandSpace()};function ce(ee){const oe=N.indexOf(ee.inputSource);if(oe===-1)return;const we=k[oe];we!==void 0&&(we.update(ee.inputSource,ee.frame,p||h),we.dispatchEvent({type:ee.type,data:ee.inputSource}))}function F(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",Y);for(let ee=0;ee<k.length;ee++){const oe=N[ee];oe!==null&&(N[ee]=null,k[ee].disconnect(oe))}se=null,he=null,y.reset();for(const ee in _)delete _[ee];t.setRenderTarget(U),M=null,S=null,g=null,l=null,z=null,Ne.stop(),r.isPresenting=!1,t.setPixelRatio(W),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",F),l.addEventListener("inputsourceschange",Y),D.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,ze=null,He=null;D.depth&&(He=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=D.stencil?Xo:ko,ze=D.stencil?Vo:Dr);const rt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(rt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),z=new Ur(S.textureWidth,S.textureHeight,{format:bi,type:ma,depthTexture:new R_(S.textureWidth,S.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const we={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Ur(M.framebufferWidth,M.framebufferHeight,{format:bi,type:ma,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ne.setContext(l),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(ee){for(let oe=0;oe<ee.removed.length;oe++){const we=ee.removed[oe],ze=N.indexOf(we);ze>=0&&(N[ze]=null,k[ze].disconnect(we))}for(let oe=0;oe<ee.added.length;oe++){const we=ee.added[oe];let ze=N.indexOf(we);if(ze===-1){for(let rt=0;rt<k.length;rt++)if(rt>=N.length){N.push(we),ze=rt;break}else if(N[rt]===null){N[rt]=we,ze=rt;break}if(ze===-1)break}const He=k[ze];He&&He.connect(we)}}const H=new ue,_e=new ue;function ve(ee,oe,we){H.setFromMatrixPosition(oe.matrixWorld),_e.setFromMatrixPosition(we.matrixWorld);const ze=H.distanceTo(_e),He=oe.projectionMatrix.elements,rt=we.projectionMatrix.elements,Zt=He[14]/(He[10]-1),st=He[14]/(He[10]+1),Tt=(He[9]+1)/He[5],I=(He[9]-1)/He[5],it=(He[8]-1)/He[0],ft=(rt[8]+1)/rt[0],Ot=Zt*it,Ve=Zt*ft,Xt=ze/(-it+ft),je=Xt*-it;if(oe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(je),ee.translateZ(Xt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),He[10]===-1)ee.projectionMatrix.copy(oe.projectionMatrix),ee.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ot=Zt+Xt,L=st+Xt,b=Ot-je,Q=Ve+(ze-je),me=Tt*st/L*ot,ye=I*st/L*ot;ee.projectionMatrix.makePerspective(b,Q,me,ye,ot,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function O(ee,oe){oe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(oe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let oe=ee.near,we=ee.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(we=y.depthFar)),te.near=C.near=w.near=oe,te.far=C.far=w.far=we,(se!==te.near||he!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),se=te.near,he=te.far),te.layers.mask=ee.layers.mask|6,w.layers.mask=te.layers.mask&3,C.layers.mask=te.layers.mask&5;const ze=ee.parent,He=te.cameras;O(te,ze);for(let rt=0;rt<He.length;rt++)O(He[rt],ze);He.length===2?ve(te,w,C):te.projectionMatrix.copy(w.projectionMatrix),ie(ee,te,ze)};function ie(ee,oe,we){we===null?ee.matrix.copy(oe.matrixWorld):(ee.matrix.copy(we.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(oe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(oe.projectionMatrix),ee.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ud*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(ee){m=ee,S!==null&&(S.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(ee){return _[ee]};let Se=null;function Te(ee,oe){if(x=oe.getViewerPose(p||h),E=oe,x!==null){const we=x.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let ze=!1;we.length!==te.cameras.length&&(te.cameras.length=0,ze=!0);for(let st=0;st<we.length;st++){const Tt=we[st];let I=null;if(M!==null)I=M.getViewport(Tt);else{const ft=g.getViewSubImage(S,Tt);I=ft.viewport,st===0&&(t.setRenderTargetTextures(z,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(z))}let it=V[st];it===void 0&&(it=new di,it.layers.enable(st),it.viewport=new sn,V[st]=it),it.matrix.fromArray(Tt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Tt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(I.x,I.y,I.width,I.height),st===0&&(te.matrix.copy(it.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),ze===!0&&te.cameras.push(it)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const st=g.getDepthInformation(we[0]);st&&st.isValid&&st.texture&&y.init(st,l.renderState)}if(He&&He.includes("camera-access")&&A){t.state.unbindTexture(),g=r.getBinding();for(let st=0;st<we.length;st++){const Tt=we[st].camera;if(Tt){let I=_[Tt];I||(I=new C_,_[Tt]=I);const it=g.getCameraImage(Tt);I.sourceTexture=it}}}}for(let we=0;we<k.length;we++){const ze=N[we],He=k[we];ze!==null&&He!==void 0&&He.update(ze,oe,p||h)}Se&&Se(ee,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),E=null}const Ne=new w_;Ne.setAnimationLoop(Te),this.setAnimationLoop=function(ee){Se=ee},this.dispose=function(){}}}const Er=new xa,E2=new xn;function T2(s,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,b_(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,D,U,z){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),g(y,_)):_.isMeshPhongMaterial?(u(y,_),x(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,z)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),A(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,D,U):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===kn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===kn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const D=t.get(_),U=D.envMap,z=D.envMapRotation;U&&(y.envMap.value=U,Er.copy(z),Er.x*=-1,Er.y*=-1,Er.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(E2.makeRotationFromEuler(Er)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,D,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*D,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,D){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const D=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function A2(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const z=U.program;r.uniformBlockBinding(D,z)}function p(D,U){let z=l[D.id];z===void 0&&(E(D),z=x(D),l[D.id]=z,D.addEventListener("dispose",y));const k=U.program;r.updateUBOMapping(D,k);const N=t.render.frame;u[D.id]!==N&&(S(D),u[D.id]=N)}function x(D){const U=g();D.__bindingPointIndex=U;const z=s.createBuffer(),k=D.__size,N=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,z),s.bufferData(s.UNIFORM_BUFFER,k,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,z),z}function g(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const U=l[D.id],z=D.uniforms,k=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let N=0,P=z.length;N<P;N++){const W=Array.isArray(z[N])?z[N]:[z[N]];for(let w=0,C=W.length;w<C;w++){const V=W[w];if(M(V,N,w,k)===!0){const te=V.__offset,se=Array.isArray(V.value)?V.value:[V.value];let he=0;for(let ce=0;ce<se.length;ce++){const F=se[ce],Y=A(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,te+he,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,he),he+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,U,z,k){const N=D.value,P=U+"_"+z;if(k[P]===void 0)return typeof N=="number"||typeof N=="boolean"?k[P]=N:k[P]=N.clone(),!0;{const W=k[P];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return k[P]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function E(D){const U=D.uniforms;let z=0;const k=16;for(let P=0,W=U.length;P<W;P++){const w=Array.isArray(U[P])?U[P]:[U[P]];for(let C=0,V=w.length;C<V;C++){const te=w[C],se=Array.isArray(te.value)?te.value:[te.value];for(let he=0,ce=se.length;he<ce;he++){const F=se[he],Y=A(F),H=z%k,_e=H%Y.boundary,ve=H+_e;z+=_e,ve!==0&&k-ve<Y.storage&&(z+=k-ve),te.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=z,z+=Y.storage}}}const N=z%k;return N>0&&(z+=k-N),D.__size=z,D.__cache={},this}function A(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",D),U}function y(D){const U=D.target;U.removeEventListener("dispose",y);const z=h.indexOf(U.__bindingPointIndex);h.splice(z,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const D in l)s.deleteBuffer(l[D]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}const R2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let sa=null;function C2(){return sa===null&&(sa=new Ob(R2,32,32,Xd,Os),sa.minFilter=pi,sa.magFilter=pi,sa.wrapS=ua,sa.wrapT=ua,sa.generateMipmaps=!1,sa.needsUpdate=!0),sa}class w2{constructor(t={}){const{canvas:i=rb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const E=new Set([qd,Wd,kd]),A=new Set([ma,Dr,Go,Vo,Gd,Vd]),y=new Uint32Array(4),_=new Int32Array(4);let D=null,U=null;const z=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1;this._outputColorSpace=hi;let W=0,w=0,C=null,V=-1,te=null;const se=new sn,he=new sn;let ce=null;const F=new Vt(0);let Y=0,H=i.width,_e=i.height,ve=1,O=null,ie=null;const Se=new sn(0,0,H,_e),Te=new sn(0,0,H,_e);let Ne=!1;const ee=new A_;let oe=!1,we=!1;const ze=new xn,He=new ue,rt=new sn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Tt(){return C===null?ve:1}let I=r;function it(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Id}`),i.addEventListener("webglcontextlost",be,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",Be,!1),I===null){const q="webgl2";if(I=it(q,R),I===null)throw it(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ft,Ot,Ve,Xt,je,ot,L,b,Q,me,ye,le,qe,Le,Qe,We,Me,Ee,Ye,ke,Pe,nt,G,De;function Re(){ft=new F1(I),ft.init(),nt=new v2(I,ft),Ot=new C1(I,ft,t,nt),Ve=new g2(I,ft),Ot.reversedDepthBuffer&&S&&Ve.buffers.depth.setReversed(!0),Xt=new H1(I),je=new a2,ot=new _2(I,ft,Ve,je,Ot,nt,Xt),L=new D1(N),b=new z1(N),Q=new Xb(I),G=new A1(I,Q),me=new B1(I,Q,Xt,G),ye=new V1(I,me,Q,Xt),Ye=new G1(I,Ot,ot),We=new w1(je),le=new i2(N,L,b,ft,Ot,G,We),qe=new T2(N,je),Le=new s2,Qe=new h2(ft),Ee=new T1(N,L,b,Ve,ye,M,m),Me=new m2(N,ye,Ot),De=new A2(I,Xt,Ot,Ve),ke=new R1(I,ft,Xt),Pe=new I1(I,ft,Xt),Xt.programs=le.programs,N.capabilities=Ot,N.extensions=ft,N.properties=je,N.renderLists=Le,N.shadowMap=Me,N.state=Ve,N.info=Xt}Re();const Ce=new b2(N,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ft.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ft.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(H,_e,!1))},this.getSize=function(R){return R.set(H,_e)},this.setSize=function(R,q,ae=!0){if(Ce.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,_e=q,i.width=Math.floor(R*ve),i.height=Math.floor(q*ve),ae===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(H*ve,_e*ve).floor()},this.setDrawingBufferSize=function(R,q,ae){H=R,_e=q,ve=ae,i.width=Math.floor(R*ae),i.height=Math.floor(q*ae),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(se)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,q,ae,$){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,q,ae,$),Ve.viewport(se.copy(Se).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,q,ae,$){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,q,ae,$),Ve.scissor(he.copy(Te).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(R){Ve.setScissorTest(Ne=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ae=!0){let $=0;if(R){let Z=!1;if(C!==null){const Ae=C.texture.format;Z=E.has(Ae)}if(Z){const Ae=C.texture.type,Ue=A.has(Ae),Fe=Ee.getClearColor(),Ie=Ee.getClearAlpha(),$e=Fe.r,tt=Fe.g,Ze=Fe.b;Ue?(y[0]=$e,y[1]=tt,y[2]=Ze,y[3]=Ie,I.clearBufferuiv(I.COLOR,0,y)):(_[0]=$e,_[1]=tt,_[2]=Ze,_[3]=Ie,I.clearBufferiv(I.COLOR,0,_))}else $|=I.COLOR_BUFFER_BIT}q&&($|=I.DEPTH_BUFFER_BIT),ae&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",be,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),Ee.dispose(),Le.dispose(),Qe.dispose(),je.dispose(),L.dispose(),b.dispose(),ye.dispose(),G.dispose(),De.dispose(),le.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Fs),Ce.removeEventListener("sessionend",Bs),mi.stop()};function be(R){R.preventDefault(),Jx("WebGLRenderer: Context Lost."),P=!0}function ge(){Jx("WebGLRenderer: Context Restored."),P=!1;const R=Xt.autoReset,q=Me.enabled,ae=Me.autoUpdate,$=Me.needsUpdate,Z=Me.type;Re(),Xt.autoReset=R,Me.enabled=q,Me.autoUpdate=ae,Me.needsUpdate=$,Me.type=Z}function Be(R){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const q=R.target;q.removeEventListener("dispose",at),Ft(q)}function Ft(R){Rt(R),je.remove(R)}function Rt(R){const q=je.get(R).programs;q!==void 0&&(q.forEach(function(ae){le.releaseProgram(ae)}),R.isShaderMaterial&&le.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ae,$,Z,Ae){q===null&&(q=Zt);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,Fe=Qu(R,q,ae,$,Z);Ve.setMaterial($,Ue);let Ie=ae.index,$e=1;if($.wireframe===!0){if(Ie=me.getWireframeAttribute(ae),Ie===void 0)return;$e=2}const tt=ae.drawRange,Ze=ae.attributes.position;let ht=tt.start*$e,At=(tt.start+tt.count)*$e;Ae!==null&&(ht=Math.max(ht,Ae.start*$e),At=Math.min(At,(Ae.start+Ae.count)*$e)),Ie!==null?(ht=Math.max(ht,0),At=Math.min(At,Ie.count)):Ze!=null&&(ht=Math.max(ht,0),At=Math.min(At,Ze.count));const Ct=At-ht;if(Ct<0||Ct===1/0)return;G.setup(Z,$,Fe,ae,Ie);let yt,Nt=ke;if(Ie!==null&&(yt=Q.get(Ie),Nt=Pe,Nt.setIndex(yt)),Z.isMesh)$.wireframe===!0?(Ve.setLineWidth($.wireframeLinewidth*Tt()),Nt.setMode(I.LINES)):Nt.setMode(I.TRIANGLES);else if(Z.isLine){let Je=$.linewidth;Je===void 0&&(Je=1),Ve.setLineWidth(Je*Tt()),Z.isLineSegments?Nt.setMode(I.LINES):Z.isLineLoop?Nt.setMode(I.LINE_LOOP):Nt.setMode(I.LINE_STRIP)}else Z.isPoints?Nt.setMode(I.POINTS):Z.isSprite&&Nt.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Wo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Je=Z._multiDrawStarts,Wt=Z._multiDrawCounts,Mt=Z._multiDrawCount,vn=Ie?Q.get(Ie).bytesPerElement:1,Sa=je.get($).currentProgram.getUniforms();for(let Yt=0;Yt<Mt;Yt++)Sa.setValue(I,"_gl_DrawID",Yt),Nt.render(Je[Yt]/vn,Wt[Yt])}else if(Z.isInstancedMesh)Nt.renderInstances(ht,Ct,Z.count);else if(ae.isInstancedBufferGeometry){const Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Wt=Math.min(ae.instanceCount,Je);Nt.renderInstances(ht,Ct,Wt)}else Nt.render(ht,Ct)};function wn(R,q,ae){R.transparent===!0&&R.side===la&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,dn(R,q,ae),R.side=$a,R.needsUpdate=!0,dn(R,q,ae),R.side=la):dn(R,q,ae)}this.compile=function(R,q,ae=null){ae===null&&(ae=R),U=Qe.get(ae),U.init(q),k.push(U),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),R!==ae&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),U.setupLights();const $=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const Fe=Ae[Ue];wn(Fe,ae,Z),$.add(Fe)}else wn(Ae,ae,Z),$.add(Ae)}),U=k.pop(),$},this.compileAsync=function(R,q,ae=null){const $=this.compile(R,q,ae);return new Promise(Z=>{function Ae(){if($.forEach(function(Ue){je.get(Ue).currentProgram.isReady()&&$.delete(Ue)}),$.size===0){Z(R);return}setTimeout(Ae,10)}ft.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Wn=null;function el(R){Wn&&Wn(R)}function Fs(){mi.stop()}function Bs(){mi.start()}const mi=new w_;mi.setAnimationLoop(el),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(R){Wn=R,Ce.setAnimationLoop(R),R===null?mi.stop():mi.start()},Ce.addEventListener("sessionstart",Fs),Ce.addEventListener("sessionend",Bs),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,q,C),U=Qe.get(R,k.length),U.init(q),k.push(U),ze.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ee.setFromProjectionMatrix(ze,Di,q.reversedDepth),we=this.localClippingEnabled,oe=We.init(this.clippingPlanes,we),D=Le.get(R,z.length),D.init(),z.push(D),Ce.enabled===!0&&Ce.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&tr(Ae,q,-1/0,N.sortObjects)}tr(R,q,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(O,ie),st=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,st&&Ee.addToRenderList(D,R),this.info.render.frame++,oe===!0&&We.beginShadows();const ae=U.state.shadowsArray;Me.render(ae,R,q),oe===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=D.opaque,Z=D.transmissive;if(U.setupLights(),q.isArrayCamera){const Ae=q.cameras;if(Z.length>0)for(let Ue=0,Fe=Ae.length;Ue<Fe;Ue++){const Ie=Ae[Ue];Hs($,Z,R,Ie)}st&&Ee.render(R);for(let Ue=0,Fe=Ae.length;Ue<Fe;Ue++){const Ie=Ae[Ue];Is(D,R,Ie,Ie.viewport)}}else Z.length>0&&Hs($,Z,R,q),st&&Ee.render(R),Is(D,R,q);C!==null&&w===0&&(ot.updateMultisampleRenderTarget(C),ot.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(N,R,q),G.resetDefaultState(),V=-1,te=null,k.pop(),k.length>0?(U=k[k.length-1],oe===!0&&We.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,z.pop(),z.length>0?D=z[z.length-1]:D=null};function tr(R,q,ae,$){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){$&&rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ze);const Ue=ye.update(R),Fe=R.material;Fe.visible&&D.push(R,Ue,Fe,ae,rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const Ue=ye.update(R),Fe=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),rt.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),rt.copy(Ue.boundingSphere.center)),rt.applyMatrix4(R.matrixWorld).applyMatrix4(ze)),Array.isArray(Fe)){const Ie=Ue.groups;for(let $e=0,tt=Ie.length;$e<tt;$e++){const Ze=Ie[$e],ht=Fe[Ze.materialIndex];ht&&ht.visible&&D.push(R,Ue,ht,ae,rt.z,Ze)}}else Fe.visible&&D.push(R,Ue,Fe,ae,rt.z,null)}}const Ae=R.children;for(let Ue=0,Fe=Ae.length;Ue<Fe;Ue++)tr(Ae[Ue],q,ae,$)}function Is(R,q,ae,$){const{opaque:Z,transmissive:Ae,transparent:Ue}=R;U.setupLightsView(ae),oe===!0&&We.setGlobalState(N.clippingPlanes,ae),$&&Ve.viewport(se.copy($)),Z.length>0&&qn(Z,q,ae),Ae.length>0&&qn(Ae,q,ae),Ue.length>0&&qn(Ue,q,ae),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Hs(R,q,ae,$){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[$.id]===void 0&&(U.state.transmissionRenderTarget[$.id]=new Ur(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Os:ma,minFilter:Cr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ae=U.state.transmissionRenderTarget[$.id],Ue=$.viewport||se;Ae.setSize(Ue.z*N.transmissionResolutionScale,Ue.w*N.transmissionResolutionScale);const Fe=N.getRenderTarget(),Ie=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Ae),N.getClearColor(F),Y=N.getClearAlpha(),Y<1&&N.setClearColor(16777215,.5),N.clear(),st&&Ee.render(ae);const tt=N.toneMapping;N.toneMapping=Ja;const Ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),U.setupLightsView($),oe===!0&&We.setGlobalState(N.clippingPlanes,$),qn(R,ae,$),ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let At=0,Ct=q.length;At<Ct;At++){const yt=q[At],{object:Nt,geometry:Je,material:Wt,group:Mt}=yt;if(Wt.side===la&&Nt.layers.test($.layers)){const vn=Wt.side;Wt.side=kn,Wt.needsUpdate=!0,on(Nt,ae,$,Je,Wt,Mt),Wt.side=vn,Wt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae))}N.setRenderTarget(Fe,Ie,$e),N.setClearColor(F,Y),Ze!==void 0&&($.viewport=Ze),N.toneMapping=tt}function qn(R,q,ae){const $=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ae=R.length;Z<Ae;Z++){const Ue=R[Z],{object:Fe,geometry:Ie,group:$e}=Ue;let tt=Ue.material;tt.allowOverride===!0&&$!==null&&(tt=$),Fe.layers.test(ae.layers)&&on(Fe,q,ae,Ie,tt,$e)}}function on(R,q,ae,$,Z,Ae){R.onBeforeRender(N,q,ae,$,Z,Ae),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(N,q,ae,$,R,Ae),Z.transparent===!0&&Z.side===la&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,N.renderBufferDirect(ae,q,$,Z,R,Ae),Z.side=$a,Z.needsUpdate=!0,N.renderBufferDirect(ae,q,$,Z,R,Ae),Z.side=la):N.renderBufferDirect(ae,q,$,Z,R,Ae),R.onAfterRender(N,q,ae,$,Z,Ae)}function dn(R,q,ae){q.isScene!==!0&&(q=Zt);const $=je.get(R),Z=U.state.lights,Ae=U.state.shadowsArray,Ue=Z.state.version,Fe=le.getParameters(R,Z.state,Ae,q,ae),Ie=le.getProgramCacheKey(Fe);let $e=$.programs;$.environment=R.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(R.isMeshStandardMaterial?b:L).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",at),$e=new Map,$.programs=$e);let tt=$e.get(Ie);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Ue)return Nr(R,Fe),tt}else Fe.uniforms=le.getUniforms(R),R.onBeforeCompile(Fe,N),tt=le.acquireProgram(Fe,Ie),$e.set(Ie,tt),$.uniforms=Fe.uniforms;const Ze=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=We.uniform),Nr(R,Fe),$.needsLights=tl(R),$.lightsStateVersion=Ue,$.needsLights&&(Ze.ambientLightColor.value=Z.state.ambient,Ze.lightProbe.value=Z.state.probe,Ze.directionalLights.value=Z.state.directional,Ze.directionalLightShadows.value=Z.state.directionalShadow,Ze.spotLights.value=Z.state.spot,Ze.spotLightShadows.value=Z.state.spotShadow,Ze.rectAreaLights.value=Z.state.rectArea,Ze.ltc_1.value=Z.state.rectAreaLTC1,Ze.ltc_2.value=Z.state.rectAreaLTC2,Ze.pointLights.value=Z.state.point,Ze.pointLightShadows.value=Z.state.pointShadow,Ze.hemisphereLights.value=Z.state.hemi,Ze.directionalShadowMap.value=Z.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ze.spotShadowMap.value=Z.state.spotShadowMap,Ze.spotLightMatrix.value=Z.state.spotLightMatrix,Ze.spotLightMap.value=Z.state.spotLightMap,Ze.pointShadowMap.value=Z.state.pointShadowMap,Ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=tt,$.uniformsList=null,tt}function Pi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Hu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Nr(R,q){const ae=je.get(R);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function Qu(R,q,ae,$,Z){q.isScene!==!0&&(q=Zt),ot.resetTextureUnits();const Ae=q.fog,Ue=$.isMeshStandardMaterial?q.environment:null,Fe=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ds,Ie=($.isMeshStandardMaterial?b:L).get($.envMap||Ue),$e=$.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,tt=!!ae.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ze=!!ae.morphAttributes.position,ht=!!ae.morphAttributes.normal,At=!!ae.morphAttributes.color;let Ct=Ja;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ct=N.toneMapping);const yt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Nt=yt!==void 0?yt.length:0,Je=je.get($),Wt=U.state.lights;if(oe===!0&&(we===!0||R!==te)){const yn=R===te&&$.id===V;We.setState($,R,yn)}let Mt=!1;$.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Wt.state.version||Je.outputColorSpace!==Fe||Z.isBatchedMesh&&Je.batching===!1||!Z.isBatchedMesh&&Je.batching===!0||Z.isBatchedMesh&&Je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Je.instancing===!1||!Z.isInstancedMesh&&Je.instancing===!0||Z.isSkinnedMesh&&Je.skinning===!1||!Z.isSkinnedMesh&&Je.skinning===!0||Z.isInstancedMesh&&Je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Je.instancingMorph===!1&&Z.morphTexture!==null||Je.envMap!==Ie||$.fog===!0&&Je.fog!==Ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==We.numPlanes||Je.numIntersection!==We.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==ht||Je.morphColors!==At||Je.toneMapping!==Ct||Je.morphTargetsCount!==Nt)&&(Mt=!0):(Mt=!0,Je.__version=$.version);let vn=Je.currentProgram;Mt===!0&&(vn=dn($,q,Z));let Sa=!1,Yt=!1,zi=!1;const jt=vn.getUniforms(),Sn=Je.uniforms;if(Ve.useProgram(vn.program)&&(Sa=!0,Yt=!0,zi=!0),$.id!==V&&(V=$.id,Yt=!0),Sa||te!==R){Ve.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),jt.setValue(I,"projectionMatrix",R.projectionMatrix),jt.setValue(I,"viewMatrix",R.matrixWorldInverse);const En=jt.map.cameraPosition;En!==void 0&&En.setValue(I,He.setFromMatrixPosition(R.matrixWorld)),Ot.logarithmicDepthBuffer&&jt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&jt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,Yt=!0,zi=!0)}if(Z.isSkinnedMesh){jt.setOptional(I,Z,"bindMatrix"),jt.setOptional(I,Z,"bindMatrixInverse");const yn=Z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),jt.setValue(I,"boneTexture",yn.boneTexture,ot))}Z.isBatchedMesh&&(jt.setOptional(I,Z,"batchingTexture"),jt.setValue(I,"batchingTexture",Z._matricesTexture,ot),jt.setOptional(I,Z,"batchingIdTexture"),jt.setValue(I,"batchingIdTexture",Z._indirectTexture,ot),jt.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&jt.setValue(I,"batchingColorTexture",Z._colorsTexture,ot));const pn=ae.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ye.update(Z,ae,vn),(Yt||Je.receiveShadow!==Z.receiveShadow)&&(Je.receiveShadow=Z.receiveShadow,jt.setValue(I,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=Ie,Sn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=C2()),Yt&&(jt.setValue(I,"toneMappingExposure",N.toneMappingExposure),Je.needsLights&&Ju(Sn,zi),Ae&&$.fog===!0&&qe.refreshFogUniforms(Sn,Ae),qe.refreshMaterialUniforms(Sn,$,ve,_e,U.state.transmissionRenderTarget[R.id]),Hu.upload(I,Pi(Je),Sn,ot)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Hu.upload(I,Pi(Je),Sn,ot),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&jt.setValue(I,"center",Z.center),jt.setValue(I,"modelViewMatrix",Z.modelViewMatrix),jt.setValue(I,"normalMatrix",Z.normalMatrix),jt.setValue(I,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const yn=$.uniformsGroups;for(let En=0,Ei=yn.length;En<Ei;En++){const Fi=yn[En];De.update(Fi,vn),De.bind(Fi,vn)}}return vn}function Ju(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function tl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,ae){const $=je.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),je.get(R.texture).__webglTexture=q,je.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ae,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ae=je.get(R);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const nr=I.createFramebuffer();this.setRenderTarget=function(R,q=0,ae=0){C=R,W=q,w=ae;let $=!0,Z=null,Ae=!1,Ue=!1;if(R){const Ie=je.get(R);if(Ie.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Ie.__webglFramebuffer===void 0)ot.setupRenderTarget(R);else if(Ie.__hasExternalTextures)ot.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(Ie.__boundDepthTexture!==Ze){if(Ze!==null&&je.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const tt=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?Z=tt[q][ae]:Z=tt[q],Ae=!0):R.samples>0&&ot.useMultisampledRTT(R)===!1?Z=je.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?Z=tt[ae]:Z=tt,se.copy(R.viewport),he.copy(R.scissor),ce=R.scissorTest}else se.copy(Se).multiplyScalar(ve).floor(),he.copy(Te).multiplyScalar(ve).floor(),ce=Ne;if(ae!==0&&(Z=nr),Ve.bindFramebuffer(I.FRAMEBUFFER,Z)&&$&&Ve.drawBuffers(R,Z),Ve.viewport(se),Ve.scissor(he),Ve.setScissorTest(ce),Ae){const Ie=je.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,ae)}else if(Ue){const Ie=q;for(let $e=0;$e<R.textures.length;$e++){const tt=je.get(R.textures[$e]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$e,tt.__webglTexture,ae,Ie)}}else if(R!==null&&ae!==0){const Ie=je.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,ae)}V=-1},this.readRenderTargetPixels=function(R,q,ae,$,Z,Ae,Ue,Fe=0){if(!(R&&R.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie){Ve.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const $e=R.textures[Fe],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ze)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-$&&ae>=0&&ae<=R.height-Z&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),I.readPixels(q,ae,$,Z,nt.convert(tt),nt.convert(Ze),Ae))}finally{const $e=C!==null?je.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(I.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,q,ae,$,Z,Ae,Ue,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie)if(q>=0&&q<=R.width-$&&ae>=0&&ae<=R.height-Z){Ve.bindFramebuffer(I.FRAMEBUFFER,Ie);const $e=R.textures[Fe],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.bufferData(I.PIXEL_PACK_BUFFER,Ae.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),I.readPixels(q,ae,$,Z,nt.convert(tt),nt.convert(Ze),0);const At=C!==null?je.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(I.FRAMEBUFFER,At);const Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sb(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ae),I.deleteBuffer(ht),I.deleteSync(Ct),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ae=0){const $=Math.pow(2,-ae),Z=Math.floor(R.image.width*$),Ae=Math.floor(R.image.height*$),Ue=q!==null?q.x:0,Fe=q!==null?q.y:0;ot.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,ae,0,0,Ue,Fe,Z,Ae),Ve.unbindTexture()};const Gs=I.createFramebuffer(),va=I.createFramebuffer();this.copyTextureToTexture=function(R,q,ae=null,$=null,Z=0,Ae=null){Ae===null&&(Z!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Z,Z=0):Ae=0);let Ue,Fe,Ie,$e,tt,Ze,ht,At,Ct;const yt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(ae!==null)Ue=ae.max.x-ae.min.x,Fe=ae.max.y-ae.min.y,Ie=ae.isBox3?ae.max.z-ae.min.z:1,$e=ae.min.x,tt=ae.min.y,Ze=ae.isBox3?ae.min.z:0;else{const pn=Math.pow(2,-Z);Ue=Math.floor(yt.width*pn),Fe=Math.floor(yt.height*pn),R.isDataArrayTexture?Ie=yt.depth:R.isData3DTexture?Ie=Math.floor(yt.depth*pn):Ie=1,$e=0,tt=0,Ze=0}$!==null?(ht=$.x,At=$.y,Ct=$.z):(ht=0,At=0,Ct=0);const Nt=nt.convert(q.format),Je=nt.convert(q.type);let Wt;q.isData3DTexture?(ot.setTexture3D(q,0),Wt=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),Wt=I.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),Wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const Mt=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sa=I.getParameter(I.UNPACK_SKIP_PIXELS),Yt=I.getParameter(I.UNPACK_SKIP_ROWS),zi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze);const jt=R.isDataArrayTexture||R.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const pn=je.get(R),yn=je.get(q),En=je.get(pn.__renderTarget),Ei=je.get(yn.__renderTarget);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Fi=0;Fi<Ie;Fi++)jt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(R).__webglTexture,Z,Ze+Fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(q).__webglTexture,Ae,Ct+Fi)),I.blitFramebuffer($e,tt,Ue,Fe,ht,At,Ue,Fe,I.DEPTH_BUFFER_BIT,I.NEAREST);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||je.has(R)){const pn=je.get(R),yn=je.get(q);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,Gs),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,va);for(let En=0;En<Ie;En++)jt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,Z,Ze+En):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,Z),Sn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yn.__webglTexture,Ae,Ct+En):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yn.__webglTexture,Ae),Z!==0?I.blitFramebuffer($e,tt,Ue,Fe,ht,At,Ue,Fe,I.COLOR_BUFFER_BIT,I.NEAREST):Sn?I.copyTexSubImage3D(Wt,Ae,ht,At,Ct+En,$e,tt,Ue,Fe):I.copyTexSubImage2D(Wt,Ae,ht,At,$e,tt,Ue,Fe);Ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Wt,Ae,ht,At,Ct,Ue,Fe,Ie,Nt,Je,yt.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(Wt,Ae,ht,At,Ct,Ue,Fe,Ie,Nt,yt.data):I.texSubImage3D(Wt,Ae,ht,At,Ct,Ue,Fe,Ie,Nt,Je,yt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ae,ht,At,Ue,Fe,Nt,Je,yt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ae,ht,At,yt.width,yt.height,Nt,yt.data):I.texSubImage2D(I.TEXTURE_2D,Ae,ht,At,Ue,Fe,Nt,Je,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sa),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,zi),Ae===0&&q.generateMipmaps&&I.generateMipmap(Wt),Ve.unbindTexture()},this.initRenderTarget=function(R){je.get(R).__webglFramebuffer===void 0&&ot.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ot.setTextureCube(R,0):R.isData3DTexture?ot.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ot.setTexture2DArray(R,0):ot.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){W=0,w=0,C=null,Ve.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const D2=`
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;

    float waveFactor = uEnableWaves;

    vec3 transformed = position;

    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`,U2=`
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    
    float move = sin(time + mouse) * 0.01;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;function Ig(s,t,i,r,l){return(s-t)/(i-t)*(l-r)+r}const Hg=typeof window<"u"?window.devicePixelRatio:1;class L2{renderer;domElement;pre;canvas;context;deg;invert;fontSize;fontFamily;charset;width=0;height=0;center={x:0,y:0};mouse={x:0,y:0};cols=0;rows=0;constructor(t,{fontSize:i,fontFamily:r,charset:l,invert:u}={}){this.renderer=t,this.domElement=document.createElement("div"),this.domElement.style.position="absolute",this.domElement.style.top="0",this.domElement.style.left="0",this.domElement.style.width="100%",this.domElement.style.height="100%",this.pre=document.createElement("pre"),this.domElement.appendChild(this.pre),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.domElement.appendChild(this.canvas),this.deg=0,this.invert=u??!0,this.fontSize=i??12,this.fontFamily=r??"'Courier New', monospace",this.charset=l??" .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",this.context&&(this.context.imageSmoothingEnabled=!1,this.context.imageSmoothingEnabled=!1),this.onMouseMove=this.onMouseMove.bind(this),document.addEventListener("mousemove",this.onMouseMove)}setSize(t,i){this.width=t,this.height=i,this.renderer.setSize(t,i),this.reset(),this.center={x:t/2,y:i/2},this.mouse={x:this.center.x,y:this.center.y}}reset(){if(this.context){this.context.font=`${this.fontSize}px ${this.fontFamily}`;const t=this.context.measureText("A").width;this.cols=Math.floor(this.width/(this.fontSize*(t/this.fontSize))),this.rows=Math.floor(this.height/this.fontSize),this.canvas.width=this.cols,this.canvas.height=this.rows,this.pre.style.fontFamily=this.fontFamily,this.pre.style.fontSize=`${this.fontSize}px`,this.pre.style.margin="0",this.pre.style.padding="0",this.pre.style.lineHeight="1em",this.pre.style.position="absolute",this.pre.style.left="50%",this.pre.style.top="50%",this.pre.style.transform="translate(-50%, -50%)",this.pre.style.zIndex="9",this.pre.style.backgroundAttachment="fixed",this.pre.style.mixBlendMode="difference"}}render(t,i){this.renderer.render(t,i);const r=this.canvas.width,l=this.canvas.height;this.context&&(this.context.clearRect(0,0,r,l),this.context.drawImage(this.renderer.domElement,0,0,r,l),this.asciify(this.context,r,l),this.hue())}onMouseMove(t){this.mouse={x:t.clientX*Hg,y:t.clientY*Hg}}get dx(){return this.mouse.x-this.center.x}get dy(){return this.mouse.y-this.center.y}hue(){const t=Math.atan2(this.dy,this.dx)*180/Math.PI;this.deg+=(t-this.deg)*.075,this.domElement.style.filter=`hue-rotate(${this.deg.toFixed(1)}deg)`}asciify(t,i,r){const l=t.getImageData(0,0,i,r).data;let u="";for(let h=0;h<r;h++){for(let d=0;d<i;d++){const m=d*4+h*4*i,[p,x,g,S]=[l[m],l[m+1],l[m+2],l[m+3]];if(S===0){u+=" ";continue}const M=(.3*p+.6*x+.1*g)/255;let E=Math.floor((1-M)*(this.charset.length-1));this.invert&&(E=this.charset.length-E-1),u+=this.charset[E]}u+=`
`}this.pre.innerHTML=u}dispose(){document.removeEventListener("mousemove",this.onMouseMove)}}class N2{canvas;context;txt;fontSize;fontFamily;color;font;constructor(t,{fontSize:i=200,fontFamily:r="Arial",color:l="#fdf9f3"}={}){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.txt=t,this.fontSize=i,this.fontFamily=r,this.color=l,this.font=`600 ${this.fontSize}px ${this.fontFamily}`}resize(){if(this.context){this.context.font=this.font;const t=this.context.measureText(this.txt),i=Math.ceil(t.width)+20,r=Math.ceil(t.actualBoundingBoxAscent+t.actualBoundingBoxDescent)+20;this.canvas.width=i,this.canvas.height=r}}render(){if(this.context){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.font=this.font;const i=10+this.context.measureText(this.txt).actualBoundingBoxAscent;this.context.fillText(this.txt,10,i)}}get width(){return this.canvas.width}get height(){return this.canvas.height}get texture(){return this.canvas}}class Gg{textString;asciiFontSize;textFontSize;textColor;planeBaseHeight;container;width;height;enableWaves;camera;scene;mouse;textCanvas;texture;geometry;material;mesh;renderer;filter;center={x:0,y:0};animationFrameId=0;constructor({text:t,asciiFontSize:i,textFontSize:r,textColor:l,planeBaseHeight:u,enableWaves:h},d,m,p){this.textString=t,this.asciiFontSize=i,this.textFontSize=r,this.textColor=l,this.planeBaseHeight=u,this.container=d,this.width=m,this.height=p,this.enableWaves=h,this.camera=new di(45,this.width/this.height,1,1e3),this.camera.position.z=30,this.scene=new Nb,this.mouse={x:0,y:0},this.onMouseMove=this.onMouseMove.bind(this),this.setMesh(),this.setRenderer()}setMesh(){this.textCanvas=new N2(this.textString,{fontSize:this.textFontSize,fontFamily:"IBM Plex Mono",color:this.textColor}),this.textCanvas.resize(),this.textCanvas.render(),this.texture=new Bb(this.textCanvas.texture),this.texture.minFilter=Xn;const t=this.textCanvas.width/this.textCanvas.height,i=this.planeBaseHeight,r=i*t,l=i;this.geometry=new $o(r,l,36,36),this.material=new Ni({vertexShader:D2,fragmentShader:U2,transparent:!0,uniforms:{uTime:{value:0},mouse:{value:1},uTexture:{value:this.texture},uEnableWaves:{value:this.enableWaves?1:0}}}),this.mesh=new ga(this.geometry,this.material),this.scene.add(this.mesh)}setRenderer(){this.renderer=new w2({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,0),this.filter=new L2(this.renderer,{fontFamily:"IBM Plex Mono",fontSize:this.asciiFontSize,invert:!0}),this.container.appendChild(this.filter.domElement),this.setSize(this.width,this.height),this.container.addEventListener("mousemove",this.onMouseMove),this.container.addEventListener("touchmove",this.onMouseMove)}setSize(t,i){this.width=t,this.height=i,this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.filter.setSize(t,i),this.center={x:t/2,y:i/2}}load(){this.animate()}onMouseMove(t){const i=t.touches?t.touches[0]:t,r=this.container.getBoundingClientRect(),l=i.clientX-r.left,u=i.clientY-r.top;this.mouse={x:l,y:u}}animate(){const t=()=>{this.animationFrameId=requestAnimationFrame(t),this.render()};t()}render(){const t=new Date().getTime()*.001;this.textCanvas.render(),this.texture.needsUpdate=!0,this.mesh.material.uniforms.uTime.value=Math.sin(t),this.updateRotation(),this.filter.render(this.scene,this.camera)}updateRotation(){const t=Ig(this.mouse.y,0,this.height,.5,-.5),i=Ig(this.mouse.x,0,this.width,-.5,.5);this.mesh.rotation.x+=(t-this.mesh.rotation.x)*.05,this.mesh.rotation.y+=(i-this.mesh.rotation.y)*.05}clear(){this.scene.traverse(t=>{const i=t;i.isMesh&&([i.material].flat().forEach(r=>{r.dispose(),Object.keys(r).forEach(l=>{const u=r[l];u&&typeof u=="object"&&"dispose"in u&&typeof u.dispose=="function"&&u.dispose()})}),i.geometry.dispose())}),this.scene.clear()}dispose(){cancelAnimationFrame(this.animationFrameId),this.filter.dispose(),this.container.removeChild(this.filter.domElement),this.container.removeEventListener("mousemove",this.onMouseMove),this.container.removeEventListener("touchmove",this.onMouseMove),this.clear(),this.renderer.dispose()}}function O2({text:s="David!",asciiFontSize:t=8,textFontSize:i=200,textColor:r="#fdf9f3",planeBaseHeight:l=8,enableWaves:u=!0}){const h=de.useRef(null),d=de.useRef(null);return de.useEffect(()=>{if(!h.current)return;const{width:m,height:p}=h.current.getBoundingClientRect();if(m===0||p===0){const g=new IntersectionObserver(([S])=>{if(S.isIntersecting&&S.boundingClientRect.width>0&&S.boundingClientRect.height>0){const{width:M,height:E}=S.boundingClientRect;d.current=new Gg({text:s,asciiFontSize:t,textFontSize:i,textColor:r,planeBaseHeight:l,enableWaves:u},h.current,M,E),d.current.load(),g.disconnect()}},{threshold:.1});return g.observe(h.current),()=>{g.disconnect(),d.current&&d.current.dispose()}}d.current=new Gg({text:s,asciiFontSize:t,textFontSize:i,textColor:r,planeBaseHeight:l,enableWaves:u},h.current,m,p),d.current.load();const x=new ResizeObserver(g=>{if(!g[0]||!d.current)return;const{width:S,height:M}=g[0].contentRect;S>0&&M>0&&d.current.setSize(S,M)});return x.observe(h.current),()=>{x.disconnect(),d.current?.dispose()}},[s,t,i,r,l,u]),xt.jsx("div",{ref:h,className:"ascii-text-container",style:{position:"absolute",width:"100%",height:"100%"},children:xt.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap');

		body {
		margin: 0;
		padding: 0;
		}

		.ascii-text-container {
		position: relative; /* keep relative for inner overlaying elements */
		display: flex;       /* enable flex for normal layout */
		justify-content: center;
		align-items: center;
		width: 100%;         /* container width can now follow parent */
		height: 100%;        /* container height can now follow parent */
		}

		/* canvas fills the container but stays in flow */
		.ascii-text-container canvas {
		width: 100%;
		height: 100%;
		image-rendering: optimizeSpeed;
		image-rendering: -moz-crisp-edges;
		image-rendering: -o-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: optimize-contrast;
		image-rendering: crisp-edges;
		image-rendering: pixelated;
		/* remove absolute positioning */
		}

		/* pre overlays canvas but participates in layout */
		.ascii-text-container pre {
		margin: 0;
		user-select: none;
		padding: 0;
		line-height: 1em;
		text-align: center; /* center text */
		position: relative; /* use relative so it can move normally */
		background-image: radial-gradient(circle, #ff6188 0%, #fc9867 50%, #ffd866 100%);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		z-index: 1;
		mix-blend-mode: difference;
		}
      `})})}const P2=()=>xt.jsxs("main",{className:"container glass-card paragraph-font",children:[xt.jsx("div",{className:"paragraph-font1",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font2",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font3",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font4",children:"Hi, I’m Leo!"}),xt.jsx(O2,{text:"Leo_Lai",enableWaves:!0,asciiFontSize:8}),xt.jsx("div",{className:"paragraph-font2",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font3",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraragraph-font1",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font2",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font3",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraragraph-font1",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font2",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font3",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraragraph-font1",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font2",children:"Hi, I’m Leo!"}),xt.jsx("div",{className:"paragraph-font3",children:"Hi, I’m Leo!"})]}),z2=()=>xt.jsx("div",{children:"CV"}),F2=()=>xt.jsx("nav",{className:"navbar",children:xt.jsxs("div",{className:"navbar--content",children:[xt.jsx("div",{className:"logoFont",children:"Leo Lai".split("").map((s,t,i)=>{const r=i.slice(0,t).filter(l=>l!==" ").length;return xt.jsxs("span",{style:{transitionDelay:`${r*.05}s`},children:[s===" "?" ":s," "]},t)})}),xt.jsx("div",{children:"buttons"})]})});function B2(s){if(typeof window>"u")return console.warn(`getCssVariableValue called on server for "${s}"`),"";const t=getComputedStyle(document.documentElement).getPropertyValue(s).trim();return t||console.warn(`CSS variable "${s}" not found or empty`),t}const I2=({numBoids:s,density:t=3,glyph:i="➤",baseSize:r=25,opacity:l=.55,color:u="--color-boids",speed:h=.5-.1,maxSpeed:d=.7-.1,separation:m=.5,cohesion:p=3e-4,alignment:x=.03,perception:g=80,jitter:S=.001,paused:M=!1})=>{const E=de.useRef(null),A=de.useRef(null),y=de.useRef([]),_=de.useRef(1),D=de.useMemo(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,[]),U=40,z=()=>{const P=E.current,W=P.getBoundingClientRect(),w=Math.max(1,Math.min(2,window.devicePixelRatio||1));_.current=w,P.width=Math.max(1,Math.floor(W.width*w)),P.height=Math.max(1,Math.floor(W.height*w)),P.style.width=`${Math.floor(W.width)}px`,P.style.height=`${Math.floor(W.height)}px`},k=()=>{const P=E.current,W=P.width,w=P.height,C=U*_.current,V=W*w/(_.current*_.current),te=s??Math.max(8,Math.round(V/1e5*t));y.current=Array.from({length:te},()=>{const se=Math.random()*Math.PI*2,he=.5+Math.random()*1.2;return{x:Math.random()*(W+2*C)-C,y:Math.random()*(w+2*C)-C,vx:Math.cos(se)*he,vy:Math.sin(se)*he,glyph:i.length===1?i:i[Math.random()*i.length|0]}})},N=()=>{const P=E.current;if(!P)return;const W=P.getContext("2d");if(!W)return;const w=P.width,C=P.height,V=U*_.current,te=w+2*V,se=C+2*V,he=y.current,ce=g*_.current;for(let Y=0;Y<he.length;Y++){const H=he[Y];let _e=0,ve=0,O=0,ie=0,Se=0,Te=0,Ne=0;for(let ze=0;ze<he.length;ze++){if(Y===ze)continue;const He=he[ze],rt=He.x-H.x,Zt=He.y-H.y,st=rt*rt+Zt*Zt;if(st<ce*ce&&st>.01){const Tt=Math.sqrt(st),I=Math.min(1,Tt/ce),it=1-I*I;_e+=He.vx*it,ve+=He.vy*it,O+=He.x*it,ie+=He.y*it,Ne+=it;const ft=1/st;Se-=rt*ft,Te-=Zt*ft}}Ne>0&&(H.vx+=(_e/Ne-H.vx)*x,H.vy+=(ve/Ne-H.vy)*x,H.vx+=(O/Ne-H.x)*p,H.vy+=(ie/Ne-H.y)*p,H.vx+=Se*m,H.vy+=Te*m),H.vx+=(Math.random()-.5)*S,H.vy+=(Math.random()-.5)*S;const ee=Math.hypot(H.vx,H.vy)||1e-6,oe=d*h*_.current,we=.2*oe;ee>oe?(H.vx=H.vx/ee*oe,H.vy=H.vy/ee*oe):ee<we&&(H.vx=H.vx/ee*we,H.vy=H.vy/ee*we),H.x+=H.vx,H.y+=H.vy,H.x<-V&&(H.x+=te),H.x>w+V&&(H.x-=te),H.y<-V&&(H.y+=se),H.y>C+V&&(H.y-=se)}W.clearRect(0,0,w,C),W.save(),W.fillStyle=B2(u);const F=Math.max(8,r*_.current);W.font=`bold ${F}px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"`,W.textAlign="center",W.textBaseline="middle";for(const Y of he){const H=Math.atan2(Y.vy,Y.vx);W.globalAlpha=l,W.save(),W.translate(Y.x,Y.y),W.rotate(H),W.fillText(Y.glyph??"?",0,0),W.restore()}W.restore(),A.current=requestAnimationFrame(N)};return de.useEffect(()=>{const P=E.current;if(!P)return;const W=()=>{const C=y.current.length;if(z(),k(),typeof s=="number"&&y.current.length!==C)for(y.current=y.current.slice(0,s);y.current.length<s;)y.current.push({x:Math.random()*P.width,y:Math.random()*P.height,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2})};W();const w=new ResizeObserver(W);return w.observe(P),!M&&!D&&(A.current=requestAnimationFrame(N)),()=>{w.disconnect(),A.current&&cancelAnimationFrame(A.current)}},[s,t,i,r,l,u,h,m,p,x,d,g,M,D,S]),de.useEffect(()=>{E.current&&(M||D?(A.current&&cancelAnimationFrame(A.current),A.current=null):A.current||(A.current=requestAnimationFrame(N)))},[M,D]),xt.jsx("canvas",{ref:E,"aria-hidden":"true",className:"boidsBackground"})},H2=()=>xt.jsxs("div",{className:".container--NavAndPageContent",children:[xt.jsx(F2,{}),xt.jsx(I2,{color:"--color-boids"}),xt.jsx("div",{className:".container--pageContent",children:xt.jsxs(By,{children:[xt.jsx(Nu,{path:"/",element:xt.jsx(P2,{})}),xt.jsx(Nu,{path:"/cv",element:xt.jsx(z2,{})}),xt.jsx(Nu,{path:"*",element:xt.jsx("div",{children:"Not Found"})})]})})]}),G2="/Portfolio/";YS.createRoot(document.getElementById("root")).render(xt.jsx(de.StrictMode,{children:xt.jsx(oM,{basename:G2,children:xt.jsx(H2,{})})}));
//# sourceMappingURL=index-BoMSP9xv.js.map
