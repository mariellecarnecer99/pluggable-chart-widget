import{importShared as f}from"./__federation_fn_import.js";import{I as i,aa as s}from"./__federation_expose_App-972621b7.js";const{onBeforeUnmount:m,readonly:v,ref:c,watch:R}=await f("vue");function d(u){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const o=c(),t=c();if(i){const n=new ResizeObserver(e=>{u?.(e,n),e.length&&(a==="content"?t.value=e[0].contentRect:t.value=e[0].target.getBoundingClientRect())});m(()=>{n.disconnect()}),R(o,(e,r)=>{r&&(n.unobserve(s(r)),t.value=void 0),e&&n.observe(s(e))},{flush:"post"})}return{resizeRef:o,contentRect:v(t)}}export{d as u};