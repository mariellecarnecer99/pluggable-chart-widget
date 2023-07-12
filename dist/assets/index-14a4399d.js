import{importShared as X}from"./__federation_fn_import.js";import st,{I as ee,m as we,S as Dt,c as kt,a as Ct,b as Ot,d as Mt,e as xt,f as _t,D as xe,T as _e,g as Te,L as Le,h as Tt}from"./__federation_expose_App-972621b7.js";import{_ as me}from"./preload-helper-cf010ec4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();async function Lt(){(await me(()=>import("./webfontloader-523643f5.js").then(t=>t.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const{inject:kr,reactive:It,shallowRef:ue,toRefs:Nt,watchEffect:Bt}=await X("vue"),Cr=["sm","md","lg","xl","xxl"],Ie=Symbol.for("vuetify:display"),Ne={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Ht=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ne;return we(Ne,e)};function Be(e){return ee&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function He(e){return ee&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function Ue(e){const t=ee&&!e?window.navigator.userAgent:"ssr";function n(y){return!!t.match(y)}const r=n(/android/i),o=n(/iphone|ipad|ipod/i),c=n(/cordova/i),l=n(/electron/i),h=n(/chrome/i),i=n(/edge/i),f=n(/firefox/i),s=n(/opera/i),u=n(/win/i),d=n(/mac/i),m=n(/linux/i);return{android:r,ios:o,cordova:c,electron:l,chrome:h,edge:i,firefox:f,opera:s,win:u,mac:d,linux:m,touch:Dt,ssr:t==="ssr"}}function Ut(e,t){const{thresholds:n,mobileBreakpoint:r}=Ht(e),o=ue(He(t)),c=ue(Ue(t)),l=It({}),h=ue(Be(t));function i(){o.value=He(),h.value=Be()}function f(){i(),c.value=Ue()}return Bt(()=>{const s=h.value<n.sm,u=h.value<n.md&&!s,d=h.value<n.lg&&!(u||s),m=h.value<n.xl&&!(d||u||s),y=h.value<n.xxl&&!(m||d||u||s),E=h.value>=n.xxl,b=s?"xs":u?"sm":d?"md":m?"lg":y?"xl":"xxl",w=typeof r=="number"?r:n[r],S=h.value<w;l.xs=s,l.sm=u,l.md=d,l.lg=m,l.xl=y,l.xxl=E,l.smAndUp=!s,l.mdAndUp=!(s||u),l.lgAndUp=!(s||u||d),l.xlAndUp=!(s||u||d||m),l.smAndDown=!(d||m||y||E),l.mdAndDown=!(m||y||E),l.lgAndDown=!(y||E),l.xlAndDown=!E,l.name=b,l.height=o.value,l.width=h.value,l.mobile=S,l.mobileBreakpoint=r,l.platform=c.value,l.thresholds=n}),ee&&window.addEventListener("resize",i,{passive:!0}),{...Nt(l),update:f,ssr:!!t}}const ge={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function $t(e,t){const n=[];let r=[];const o=it(e),c=at(e),l=o.getDay()-ge[t.slice(-2).toUpperCase()],h=c.getDay()-ge[t.slice(-2).toUpperCase()];for(let i=0;i<l;i++){const f=new Date(o);f.setDate(f.getDate()-(l-i)),r.push(f)}for(let i=1;i<=c.getDate();i++){const f=new Date(e.getFullYear(),e.getMonth(),i);r.push(f),r.length===7&&(n.push(r),r=[])}for(let i=1;i<7-h;i++){const f=new Date(c);f.setDate(f.getDate()+i),r.push(f)}return n.push(r),n}function it(e){return new Date(e.getFullYear(),e.getMonth(),1)}function at(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function Ft(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){const t=Date.parse(e);if(!isNaN(t))return new Date(t)}return null}const $e=new Date(2e3,0,2);function jt(e){const t=ge[e.slice(-2).toUpperCase()];return kt(7).map(n=>{const r=new Date($e);return r.setDate($e.getDate()+t+n),new Intl.DateTimeFormat(e,{weekday:"short"}).format(r)})}function Wt(e,t,n){const r=new Date(e);let o={};switch(t){case"fullDateWithWeekday":o={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":o={};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"dayOfMonth":o={day:"numeric"};break;default:o={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function Yt(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function Vt(e,t){const n=new Date(e);return n.setMonth(n.getMonth()+t),n}function Gt(e){return e.getFullYear()}function Kt(e){return e.getMonth()}function zt(e){return new Date(e.getFullYear(),0,1)}function qt(e){return new Date(e.getFullYear(),11,31)}function Zt(e,t){return ye(e,t[0])&&Jt(e,t[1])}function Qt(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function ye(e,t){return e.getTime()>t.getTime()}function Jt(e,t){return e.getTime()<t.getTime()}function Fe(e,t){return e.getTime()===t.getTime()}function Xt(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function en(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function tn(e,t,n){const r=new Date(e),o=new Date(t);return n==="month"?r.getMonth()-o.getMonth()+(r.getFullYear()-o.getFullYear())*12:Math.floor((r.getTime()-o.getTime())/(1e3*60*60*24))}function nn(e,t){const n=new Date(e);return n.setFullYear(t),n}class rn{constructor(t){this.locale=t.locale}date(t){return Ft(t)}toJsDate(t){return t}addDays(t,n){return Yt(t,n)}addMonths(t,n){return Vt(t,n)}getWeekArray(t){return $t(t,this.locale)}startOfMonth(t){return it(t)}endOfMonth(t){return at(t)}format(t,n){return Wt(t,n,this.locale)}isEqual(t,n){return Fe(t,n)}isValid(t){return Qt(t)}isWithinRange(t,n){return Zt(t,n)}isAfter(t,n){return ye(t,n)}isBefore(t,n){return!ye(t,n)&&!Fe(t,n)}isSameDay(t,n){return Xt(t,n)}isSameMonth(t,n){return en(t,n)}setYear(t,n){return nn(t,n)}getDiff(t,n,r){return tn(t,n,r)}getWeekdays(){return jt(this.locale)}getYear(t){return Gt(t)}getMonth(t){return Kt(t)}startOfYear(t){return zt(t)}endOfYear(t){return qt(t)}}await X("vue");const je=Symbol.for("vuetify:date-adapter");function on(e){return we({adapter:rn,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"nn-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e)}const{nextTick:sn,reactive:an}=await X("vue");function ct(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:t,...n}=e,r=we(t,n),{aliases:o={},components:c={},directives:l={}}=r,h=Ct(r.defaults),i=Ut(r.display,r.ssr),f=Ot(r.theme),s=Mt(r.icons),u=xt(r.locale),d=on(r.date);return{install:y=>{for(const E in l)y.directive(E,l[E]);for(const E in c)y.component(E,c[E]);for(const E in o)y.component(E,_t({...o[E],name:E,aliasName:o[E].name}));if(f.install(y),y.provide(xe,h),y.provide(Ie,i),y.provide(_e,f),y.provide(Te,s),y.provide(Le,u),y.provide(je,d),ee&&r.ssr)if(y.$nuxt)y.$nuxt.hook("app:suspense:resolve",()=>{i.update()});else{const{mount:E}=y;y.mount=function(){const b=E(...arguments);return sn(()=>i.update()),y.mount=E,b}}Tt.reset(),y.mixin({computed:{$vuetify(){return an({defaults:$.call(this,xe),display:$.call(this,Ie),theme:$.call(this,_e),icons:$.call(this,Te),locale:$.call(this,Le),date:$.call(this,je)})}}})},defaults:h,display:i,theme:f,icons:s,locale:u,date:d}}const cn="3.3.7";ct.version=cn;function $(e){const t=this.$,n=t.parent?.provides??t.vnode.appContext?.provides;if(n&&e in n)return n[e]}const ln=ct({theme:{themes:{light:{colors:{primary:"#1867C0",secondary:"#5CBBF6"}}}}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const{getCurrentInstance:Or,inject:Q,onUnmounted:Mr,onDeactivated:xr,onActivated:_r,computed:T,unref:z,watchEffect:Tr,defineComponent:lt,reactive:un,h:ut,provide:fe,ref:fn,watch:dn,shallowRef:hn,shallowReactive:pn,nextTick:mn}=await X("vue"),F=typeof window<"u";function gn(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const A=Object.assign;function de(e,t){const n={};for(const r in t){const o=t[r];n[r]=_(o)?o.map(e):e(o)}return n}const q=()=>{},_=Array.isArray,yn=/\/$/,vn=e=>e.replace(yn,"");function he(e,t,n="/"){let r,o={},c="",l="";const h=t.indexOf("#");let i=t.indexOf("?");return h<i&&h>=0&&(i=-1),i>-1&&(r=t.slice(0,i),c=t.slice(i+1,h>-1?h:t.length),o=e(c)),h>-1&&(r=r||t.slice(0,h),l=t.slice(h,t.length)),r=Sn(r??t,n),{fullPath:r+(c&&"?")+c+l,path:r,query:o,hash:l}}function En(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function We(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Rn(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&j(t.matched[r],n.matched[o])&&ft(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function j(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ft(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!wn(e[n],t[n]))return!1;return!0}function wn(e,t){return _(e)?Ye(e,t):_(t)?Ye(t,e):e===t}function Ye(e,t){return _(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Sn(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let c=n.length-1,l,h;for(l=0;l<r.length;l++)if(h=r[l],h!==".")if(h==="..")c>1&&c--;else break;return n.slice(0,c).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var J;(function(e){e.pop="pop",e.push="push"})(J||(J={}));var Z;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Z||(Z={}));function Pn(e){if(!e)if(F){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),vn(e)}const An=/^[^#]+#/;function bn(e,t){return e.replace(An,"#")+t}function Dn(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const oe=()=>({left:window.pageXOffset,top:window.pageYOffset});function kn(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Dn(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ve(e,t){return(history.state?history.state.position-t:-1)+e}const ve=new Map;function Cn(e,t){ve.set(e,t)}function On(e){const t=ve.get(e);return ve.delete(e),t}let Mn=()=>location.protocol+"//"+location.host;function dt(e,t){const{pathname:n,search:r,hash:o}=t,c=e.indexOf("#");if(c>-1){let h=o.includes(e.slice(c))?e.slice(c).length:1,i=o.slice(h);return i[0]!=="/"&&(i="/"+i),We(i,"")}return We(n,e)+r+o}function xn(e,t,n,r){let o=[],c=[],l=null;const h=({state:d})=>{const m=dt(e,location),y=n.value,E=t.value;let b=0;if(d){if(n.value=m,t.value=d,l&&l===y){l=null;return}b=E?d.position-E.position:0}else r(m);o.forEach(w=>{w(n.value,y,{delta:b,type:J.pop,direction:b?b>0?Z.forward:Z.back:Z.unknown})})};function i(){l=n.value}function f(d){o.push(d);const m=()=>{const y=o.indexOf(d);y>-1&&o.splice(y,1)};return c.push(m),m}function s(){const{history:d}=window;d.state&&d.replaceState(A({},d.state,{scroll:oe()}),"")}function u(){for(const d of c)d();c=[],window.removeEventListener("popstate",h),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",h),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:i,listen:f,destroy:u}}function Ge(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?oe():null}}function _n(e){const{history:t,location:n}=window,r={value:dt(e,n)},o={value:t.state};o.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function c(i,f,s){const u=e.indexOf("#"),d=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+i:Mn()+e+i;try{t[s?"replaceState":"pushState"](f,"",d),o.value=f}catch(m){console.error(m),n[s?"replace":"assign"](d)}}function l(i,f){const s=A({},t.state,Ge(o.value.back,i,o.value.forward,!0),f,{position:o.value.position});c(i,s,!0),r.value=i}function h(i,f){const s=A({},o.value,t.state,{forward:i,scroll:oe()});c(s.current,s,!0);const u=A({},Ge(r.value,i,null),{position:s.position+1},f);c(i,u,!1),r.value=i}return{location:r,state:o,push:h,replace:l}}function Tn(e){e=Pn(e);const t=_n(e),n=xn(e,t.state,t.location,t.replace);function r(c,l=!0){l||n.pauseListeners(),history.go(c)}const o=A({location:"",base:e,go:r,createHref:bn.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Ln(e){return typeof e=="string"||e&&typeof e=="object"}function ht(e){return typeof e=="string"||typeof e=="symbol"}const N={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pt=Symbol("");var Ke;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ke||(Ke={}));function W(e,t){return A(new Error,{type:e,[pt]:!0},t)}function I(e,t){return e instanceof Error&&pt in e&&(t==null||!!(e.type&t))}const ze="[^/]+?",In={sensitive:!1,strict:!1,start:!0,end:!0},Nn=/[.+*?^${}()[\]/\\]/g;function Bn(e,t){const n=A({},In,t),r=[];let o=n.start?"^":"";const c=[];for(const f of e){const s=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let u=0;u<f.length;u++){const d=f[u];let m=40+(n.sensitive?.25:0);if(d.type===0)u||(o+="/"),o+=d.value.replace(Nn,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:E,optional:b,regexp:w}=d;c.push({name:y,repeatable:E,optional:b});const S=w||ze;if(S!==ze){m+=10;try{new RegExp(`(${S})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${y}" (${S}): `+x.message)}}let O=E?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;u||(O=b&&f.length<2?`(?:/${O})`:"/"+O),b&&(O+="?"),o+=O,m+=20,b&&(m+=-8),E&&(m+=-20),S===".*"&&(m+=-50)}s.push(m)}r.push(s)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const l=new RegExp(o,n.sensitive?"":"i");function h(f){const s=f.match(l),u={};if(!s)return null;for(let d=1;d<s.length;d++){const m=s[d]||"",y=c[d-1];u[y.name]=m&&y.repeatable?m.split("/"):m}return u}function i(f){let s="",u=!1;for(const d of e){(!u||!s.endsWith("/"))&&(s+="/"),u=!1;for(const m of d)if(m.type===0)s+=m.value;else if(m.type===1){const{value:y,repeatable:E,optional:b}=m,w=y in f?f[y]:"";if(_(w)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const S=_(w)?w.join("/"):w;if(!S)if(b)d.length<2&&(s.endsWith("/")?s=s.slice(0,-1):u=!0);else throw new Error(`Missing required param "${y}"`);s+=S}}return s||"/"}return{re:l,score:r,keys:c,parse:h,stringify:i}}function Hn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Un(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const c=Hn(r[n],o[n]);if(c)return c;n++}if(Math.abs(o.length-r.length)===1){if(qe(r))return 1;if(qe(o))return-1}return o.length-r.length}function qe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const $n={type:0,value:""},Fn=/[a-zA-Z0-9_]/;function jn(e){if(!e)return[[]];if(e==="/")return[[$n]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,r=n;const o=[];let c;function l(){c&&o.push(c),c=[]}let h=0,i,f="",s="";function u(){f&&(n===0?c.push({type:0,value:f}):n===1||n===2||n===3?(c.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:f,regexp:s,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function d(){f+=i}for(;h<e.length;){if(i=e[h++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&u(),l()):i===":"?(u(),n=1):d();break;case 4:d(),n=r;break;case 1:i==="("?n=2:Fn.test(i)?d():(u(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&h--);break;case 2:i===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+i:n=3:s+=i;break;case 3:u(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&h--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),u(),l(),o}function Wn(e,t,n){const r=Bn(jn(e.path),n),o=A(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Yn(e,t){const n=[],r=new Map;t=Je({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function c(s,u,d){const m=!d,y=Vn(s);y.aliasOf=d&&d.record;const E=Je(t,s),b=[y];if("alias"in s){const O=typeof s.alias=="string"?[s.alias]:s.alias;for(const x of O)b.push(A({},y,{components:d?d.record.components:y.components,path:x,aliasOf:d?d.record:y}))}let w,S;for(const O of b){const{path:x}=O;if(u&&x[0]!=="/"){const H=u.record.path,L=H[H.length-1]==="/"?"":"/";O.path=u.record.path+(x&&L+x)}if(w=Wn(O,u,E),d?d.alias.push(w):(S=S||w,S!==w&&S.alias.push(w),m&&s.name&&!Qe(w)&&l(s.name)),y.children){const H=y.children;for(let L=0;L<H.length;L++)c(H[L],w,d&&d.children[L])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&i(w)}return S?()=>{l(S)}:q}function l(s){if(ht(s)){const u=r.get(s);u&&(r.delete(s),n.splice(n.indexOf(u),1),u.children.forEach(l),u.alias.forEach(l))}else{const u=n.indexOf(s);u>-1&&(n.splice(u,1),s.record.name&&r.delete(s.record.name),s.children.forEach(l),s.alias.forEach(l))}}function h(){return n}function i(s){let u=0;for(;u<n.length&&Un(s,n[u])>=0&&(s.record.path!==n[u].record.path||!mt(s,n[u]));)u++;n.splice(u,0,s),s.record.name&&!Qe(s)&&r.set(s.record.name,s)}function f(s,u){let d,m={},y,E;if("name"in s&&s.name){if(d=r.get(s.name),!d)throw W(1,{location:s});E=d.record.name,m=A(Ze(u.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),s.params&&Ze(s.params,d.keys.map(S=>S.name))),y=d.stringify(m)}else if("path"in s)y=s.path,d=n.find(S=>S.re.test(y)),d&&(m=d.parse(y),E=d.record.name);else{if(d=u.name?r.get(u.name):n.find(S=>S.re.test(u.path)),!d)throw W(1,{location:s,currentLocation:u});E=d.record.name,m=A({},u.params,s.params),y=d.stringify(m)}const b=[];let w=d;for(;w;)b.unshift(w.record),w=w.parent;return{name:E,path:y,params:m,matched:b,meta:Kn(b)}}return e.forEach(s=>c(s)),{addRoute:c,resolve:f,removeRoute:l,getRoutes:h,getRecordMatcher:o}}function Ze(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Vn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Gn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Gn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Qe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Kn(e){return e.reduce((t,n)=>A(t,n.meta),{})}function Je(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function mt(e,t){return t.children.some(n=>n===e||mt(e,n))}const gt=/#/g,zn=/&/g,qn=/\//g,Zn=/=/g,Qn=/\?/g,yt=/\+/g,Jn=/%5B/g,Xn=/%5D/g,vt=/%5E/g,er=/%60/g,Et=/%7B/g,tr=/%7C/g,Rt=/%7D/g,nr=/%20/g;function Se(e){return encodeURI(""+e).replace(tr,"|").replace(Jn,"[").replace(Xn,"]")}function rr(e){return Se(e).replace(Et,"{").replace(Rt,"}").replace(vt,"^")}function Ee(e){return Se(e).replace(yt,"%2B").replace(nr,"+").replace(gt,"%23").replace(zn,"%26").replace(er,"`").replace(Et,"{").replace(Rt,"}").replace(vt,"^")}function or(e){return Ee(e).replace(Zn,"%3D")}function sr(e){return Se(e).replace(gt,"%23").replace(Qn,"%3F")}function ir(e){return e==null?"":sr(e).replace(qn,"%2F")}function re(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ar(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const c=r[o].replace(yt," "),l=c.indexOf("="),h=re(l<0?c:c.slice(0,l)),i=l<0?null:re(c.slice(l+1));if(h in t){let f=t[h];_(f)||(f=t[h]=[f]),f.push(i)}else t[h]=i}return t}function Xe(e){let t="";for(let n in e){const r=e[n];if(n=or(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(_(r)?r.map(c=>c&&Ee(c)):[r&&Ee(r)]).forEach(c=>{c!==void 0&&(t+=(t.length?"&":"")+n,c!=null&&(t+="="+c))})}return t}function cr(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=_(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const lr=Symbol(""),et=Symbol(""),Pe=Symbol(""),wt=Symbol(""),Re=Symbol("");function K(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function B(e,t,n,r,o){const c=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((l,h)=>{const i=u=>{u===!1?h(W(4,{from:n,to:t})):u instanceof Error?h(u):Ln(u)?h(W(2,{from:t,to:u})):(c&&r.enterCallbacks[o]===c&&typeof u=="function"&&c.push(u),l())},f=e.call(r&&r.instances[o],t,n,i);let s=Promise.resolve(f);e.length<3&&(s=s.then(i)),s.catch(u=>h(u))})}function pe(e,t,n,r){const o=[];for(const c of e)for(const l in c.components){let h=c.components[l];if(!(t!=="beforeRouteEnter"&&!c.instances[l]))if(ur(h)){const f=(h.__vccOpts||h)[t];f&&o.push(B(f,n,r,c,l))}else{let i=h();o.push(()=>i.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${c.path}"`));const s=gn(f)?f.default:f;c.components[l]=s;const d=(s.__vccOpts||s)[t];return d&&B(d,n,r,c,l)()}))}}return o}function ur(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tt(e){const t=Q(Pe),n=Q(wt),r=T(()=>t.resolve(z(e.to))),o=T(()=>{const{matched:i}=r.value,{length:f}=i,s=i[f-1],u=n.matched;if(!s||!u.length)return-1;const d=u.findIndex(j.bind(null,s));if(d>-1)return d;const m=nt(i[f-2]);return f>1&&nt(s)===m&&u[u.length-1].path!==m?u.findIndex(j.bind(null,i[f-2])):d}),c=T(()=>o.value>-1&&pr(n.params,r.value.params)),l=T(()=>o.value>-1&&o.value===n.matched.length-1&&ft(n.params,r.value.params));function h(i={}){return hr(i)?t[z(e.replace)?"replace":"push"](z(e.to)).catch(q):Promise.resolve()}return{route:r,href:T(()=>r.value.href),isActive:c,isExactActive:l,navigate:h}}const fr=lt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tt,setup(e,{slots:t}){const n=un(tt(e)),{options:r}=Q(Pe),o=T(()=>({[rt(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rt(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=t.default&&t.default(n);return e.custom?c:ut("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},c)}}}),dr=fr;function hr(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function pr(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!_(o)||o.length!==r.length||r.some((c,l)=>c!==o[l]))return!1}return!0}function nt(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const rt=(e,t,n)=>e??t??n,mr=lt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Q(Re),o=T(()=>e.route||r.value),c=Q(et,0),l=T(()=>{let f=z(c);const{matched:s}=o.value;let u;for(;(u=s[f])&&!u.components;)f++;return f}),h=T(()=>o.value.matched[l.value]);fe(et,T(()=>l.value+1)),fe(lr,h),fe(Re,o);const i=fn();return dn(()=>[i.value,h.value,e.name],([f,s,u],[d,m,y])=>{s&&(s.instances[u]=f,m&&m!==s&&f&&f===d&&(s.leaveGuards.size||(s.leaveGuards=m.leaveGuards),s.updateGuards.size||(s.updateGuards=m.updateGuards))),f&&s&&(!m||!j(s,m)||!d)&&(s.enterCallbacks[u]||[]).forEach(E=>E(f))},{flush:"post"}),()=>{const f=o.value,s=e.name,u=h.value,d=u&&u.components[s];if(!d)return ot(n.default,{Component:d,route:f});const m=u.props[s],y=m?m===!0?f.params:typeof m=="function"?m(f):m:null,b=ut(d,A({},y,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(u.instances[s]=null)},ref:i}));return ot(n.default,{Component:b,route:f})||b}}});function ot(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const gr=mr;function yr(e){const t=Yn(e.routes,e),n=e.parseQuery||ar,r=e.stringifyQuery||Xe,o=e.history,c=K(),l=K(),h=K(),i=hn(N);let f=N;F&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=de.bind(null,a=>""+a),u=de.bind(null,ir),d=de.bind(null,re);function m(a,g){let p,v;return ht(a)?(p=t.getRecordMatcher(a),v=g):v=a,t.addRoute(v,p)}function y(a){const g=t.getRecordMatcher(a);g&&t.removeRoute(g)}function E(){return t.getRoutes().map(a=>a.record)}function b(a){return!!t.getRecordMatcher(a)}function w(a,g){if(g=A({},g||i.value),typeof a=="string"){const R=he(n,a,g.path),C=t.resolve({path:R.path},g),G=o.createHref(R.fullPath);return A(R,C,{params:d(C.params),hash:re(R.hash),redirectedFrom:void 0,href:G})}let p;if("path"in a)p=A({},a,{path:he(n,a.path,g.path).path});else{const R=A({},a.params);for(const C in R)R[C]==null&&delete R[C];p=A({},a,{params:u(R)}),g.params=u(g.params)}const v=t.resolve(p,g),D=a.hash||"";v.params=s(d(v.params));const k=En(r,A({},a,{hash:rr(D),path:v.path})),P=o.createHref(k);return A({fullPath:k,hash:D,query:r===Xe?cr(a.query):a.query||{}},v,{redirectedFrom:void 0,href:P})}function S(a){return typeof a=="string"?he(n,a,i.value.path):A({},a)}function O(a,g){if(f!==a)return W(8,{from:g,to:a})}function x(a){return Y(a)}function H(a){return x(A(S(a),{replace:!0}))}function L(a){const g=a.matched[a.matched.length-1];if(g&&g.redirect){const{redirect:p}=g;let v=typeof p=="function"?p(a):p;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=S(v):{path:v},v.params={}),A({query:a.query,hash:a.hash,params:"path"in v?{}:a.params},v)}}function Y(a,g){const p=f=w(a),v=i.value,D=a.state,k=a.force,P=a.replace===!0,R=L(p);if(R)return Y(A(S(R),{state:typeof R=="object"?A({},D,R.state):D,force:k,replace:P}),g||p);const C=p;C.redirectedFrom=g;let G;return!k&&Rn(r,v,p)&&(G=W(16,{to:C,from:v}),Oe(v,v,!0,!1)),(G?Promise.resolve(G):be(C,v)).catch(M=>I(M)?I(M,2)?M:ae(M):ie(M,C,v)).then(M=>{if(M){if(I(M,2))return Y(A({replace:P},S(M.to),{state:typeof M.to=="object"?A({},D,M.to.state):D,force:k}),g||C)}else M=ke(C,v,!0,P,D);return De(C,v,M),M})}function Pt(a,g){const p=O(a,g);return p?Promise.reject(p):Promise.resolve()}function Ae(a){const g=ne.values().next().value;return g&&typeof g.runWithContext=="function"?g.runWithContext(a):a()}function be(a,g){let p;const[v,D,k]=vr(a,g);p=pe(v.reverse(),"beforeRouteLeave",a,g);for(const R of v)R.leaveGuards.forEach(C=>{p.push(B(C,a,g))});const P=Pt.bind(null,a,g);return p.push(P),U(p).then(()=>{p=[];for(const R of c.list())p.push(B(R,a,g));return p.push(P),U(p)}).then(()=>{p=pe(D,"beforeRouteUpdate",a,g);for(const R of D)R.updateGuards.forEach(C=>{p.push(B(C,a,g))});return p.push(P),U(p)}).then(()=>{p=[];for(const R of k)if(R.beforeEnter)if(_(R.beforeEnter))for(const C of R.beforeEnter)p.push(B(C,a,g));else p.push(B(R.beforeEnter,a,g));return p.push(P),U(p)}).then(()=>(a.matched.forEach(R=>R.enterCallbacks={}),p=pe(k,"beforeRouteEnter",a,g),p.push(P),U(p))).then(()=>{p=[];for(const R of l.list())p.push(B(R,a,g));return p.push(P),U(p)}).catch(R=>I(R,8)?R:Promise.reject(R))}function De(a,g,p){h.list().forEach(v=>Ae(()=>v(a,g,p)))}function ke(a,g,p,v,D){const k=O(a,g);if(k)return k;const P=g===N,R=F?history.state:{};p&&(v||P?o.replace(a.fullPath,A({scroll:P&&R&&R.scroll},D)):o.push(a.fullPath,D)),i.value=a,Oe(a,g,p,P),ae()}let V;function At(){V||(V=o.listen((a,g,p)=>{if(!Me.listening)return;const v=w(a),D=L(v);if(D){Y(A(D,{replace:!0}),v).catch(q);return}f=v;const k=i.value;F&&Cn(Ve(k.fullPath,p.delta),oe()),be(v,k).catch(P=>I(P,12)?P:I(P,2)?(Y(P.to,v).then(R=>{I(R,20)&&!p.delta&&p.type===J.pop&&o.go(-1,!1)}).catch(q),Promise.reject()):(p.delta&&o.go(-p.delta,!1),ie(P,v,k))).then(P=>{P=P||ke(v,k,!1),P&&(p.delta&&!I(P,8)?o.go(-p.delta,!1):p.type===J.pop&&I(P,20)&&o.go(-1,!1)),De(v,k,P)}).catch(q)}))}let se=K(),Ce=K(),te;function ie(a,g,p){ae(a);const v=Ce.list();return v.length?v.forEach(D=>D(a,g,p)):console.error(a),Promise.reject(a)}function bt(){return te&&i.value!==N?Promise.resolve():new Promise((a,g)=>{se.add([a,g])})}function ae(a){return te||(te=!a,At(),se.list().forEach(([g,p])=>a?p(a):g()),se.reset()),a}function Oe(a,g,p,v){const{scrollBehavior:D}=e;if(!F||!D)return Promise.resolve();const k=!p&&On(Ve(a.fullPath,0))||(v||!p)&&history.state&&history.state.scroll||null;return mn().then(()=>D(a,g,k)).then(P=>P&&kn(P)).catch(P=>ie(P,a,g))}const ce=a=>o.go(a);let le;const ne=new Set,Me={currentRoute:i,listening:!0,addRoute:m,removeRoute:y,hasRoute:b,getRoutes:E,resolve:w,options:e,push:x,replace:H,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:c.add,beforeResolve:l.add,afterEach:h.add,onError:Ce.add,isReady:bt,install(a){const g=this;a.component("RouterLink",dr),a.component("RouterView",gr),a.config.globalProperties.$router=g,Object.defineProperty(a.config.globalProperties,"$route",{enumerable:!0,get:()=>z(i)}),F&&!le&&i.value===N&&(le=!0,x(o.location).catch(D=>{}));const p={};for(const D in N)Object.defineProperty(p,D,{get:()=>i.value[D],enumerable:!0});a.provide(Pe,g),a.provide(wt,pn(p)),a.provide(Re,i);const v=a.unmount;ne.add(a),a.unmount=function(){ne.delete(a),ne.size<1&&(f=N,V&&V(),V=null,i.value=N,le=!1,te=!1),v()}}};function U(a){return a.reduce((g,p)=>g.then(()=>Ae(p)),Promise.resolve())}return Me}function vr(e,t){const n=[],r=[],o=[],c=Math.max(t.matched.length,e.matched.length);for(let l=0;l<c;l++){const h=t.matched[l];h&&(e.matched.find(f=>j(f,h))?r.push(h):n.push(h));const i=e.matched[l];i&&(t.matched.find(f=>j(f,i))||o.push(i))}return[n,r,o]}const Er=[{path:"/",component:()=>me(()=>import("./Default-5ebc071c.js"),["assets/Default-5ebc071c.js","assets/__federation_fn_import.js","assets/preload-helper-cf010ec4.js","assets/__federation_expose_App-972621b7.js","assets/runtime-core.esm-bundler-35391e07.js","assets/App-f1870b25.css","assets/resizeObserver-288a8c49.js","assets/Default-389ed61d.css"]),children:[{path:"",name:"Home",component:()=>me(()=>import("./Home-59dd602e.js"),["assets/Home-59dd602e.js","assets/__federation_fn_import.js","assets/preload-helper-cf010ec4.js","assets/__federation_expose_App-972621b7.js","assets/runtime-core.esm-bundler-35391e07.js","assets/App-f1870b25.css","assets/resizeObserver-288a8c49.js","assets/Home-f1d340d0.css"])}]}],Rr=yr({history:Tn({}.BASE_URL),routes:Er});function wr(e){Lt(),e.use(ln).use(Rr)}const{createApp:Sr,defineCustomElement:Pr}=await X("vue");customElements.define("chart-widget",Pr(st));const St=Sr(st);wr(St);St.mount("#app");export{Cr as b};
