const __vite__fileDeps=["./index-Uq92YqhX.js","./jsx-runtime-QvZ8i92b.js","./index-uubelm5h.js","./index-FeUjBnvO.js","./index-D_qAVvzG.js","./index-Dei0BBcc.js","./index-DXimoRZY.js","./index-D0OBZnxu.js","./index-DrFu-skq.js","./index.stories-DUz-05Bc.js","./index-D6si0Ahr.js","./index-BCQa5bFN.js","./index-BexaWgFD.js","./index.stories-U4taWeuh.js","./index-RzJ3tUak.js","./index.stories-JezsZKgD.js","./index-B5NtYy47.js","./index-Bd4gunzN.js","./index.stories-DNOLa1he.js","./index-tBptrbbq.js","./index-Bcc4zlbM.js","./index.stories-CehHMCSU.js","./index-BPWmprR5.js","./index.stories-CoxcOio2.js","./index-CHjdW7Y7.js","./index.stories-iJZKiW3d.js","./index-DNywSLHH.js","./index.stories-3wAro4VJ.js","./index-C4CMdZ9Y.js","./index.stories-CkYwC17n.js","./index-BpxuZ18H.js","./index.stories-XihQ3o7V.js","./index-CpKbql_W.js","./index.stories-DGUbyEIe.js","./index-CYHUIQnl.js","./index.stories-B047rIIi.js","./index-BpP3U840.js","./index.stories-_4UJpIvT.js","./changelog-DOQpZZl6.js","./gettingStarted-CwK8Mg2u.js","./installation-CJDSviSz.js","./entry-preview-C8ewSyH8.js","./react-18-BwV7Zf3K.js","./entry-preview-docs-CYbEFbZd.js","./preview-TCN6m6T-.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-FjemcqJ5.js","./preview-C1cggpqK.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function u(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=u(r);fetch(r.href,o)}})();const R="modulepreload",h=function(t,n){return new URL(t,n).href},p={},e=function(n,u,m){let r=Promise.resolve();if(u&&u.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),E=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(u.map(s=>{if(s=h(s,m),s in p)return;p[s]=!0;const c=s.endsWith(".css"),O=c?'[rel="stylesheet"]':"";if(!!m)for(let a=o.length-1;a>=0;a--){const d=o[a];if(d.href===s&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${O}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":R,c||(_.as="script",_.crossOrigin=""),_.href=s,E&&_.setAttribute("nonce",E),document.head.appendChild(_),c)return new Promise((a,d)=>{_.addEventListener("load",a),_.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return r.then(()=>n()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,l=P({page:"preview"});T.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const v={"./src/hooks/useClickOutside/index.mdx":async()=>e(()=>import("./index-Uq92YqhX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),"./src/hooks/useClickOutside/index.stories.tsx":async()=>e(()=>import("./index.stories-DUz-05Bc.js").then(t=>t.u),__vite__mapDeps([9,1,2,10]),import.meta.url),"./src/hooks/useCopyToClipboard/index.mdx":async()=>e(()=>import("./index-BexaWgFD.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,13,10,11]),import.meta.url),"./src/hooks/useCopyToClipboard/index.stories.tsx":async()=>e(()=>import("./index.stories-U4taWeuh.js").then(t=>t.u),__vite__mapDeps([13,1,2,10]),import.meta.url),"./src/hooks/useCounter/index.mdx":async()=>e(()=>import("./index-RzJ3tUak.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,15,16,10,11]),import.meta.url),"./src/hooks/useCounter/index.stories.tsx":async()=>e(()=>import("./index.stories-JezsZKgD.js").then(t=>t.u),__vite__mapDeps([15,1,2,16,10]),import.meta.url),"./src/hooks/useDebounce/index.mdx":async()=>e(()=>import("./index-Bd4gunzN.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8,18,19,11]),import.meta.url),"./src/hooks/useDebounce/index.stories.tsx":async()=>e(()=>import("./index.stories-DNOLa1he.js").then(t=>t.u),__vite__mapDeps([18,1,2,19]),import.meta.url),"./src/hooks/useFirstRender/index.mdx":async()=>e(()=>import("./index-Bcc4zlbM.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8,21,16,10,11]),import.meta.url),"./src/hooks/useFirstRender/index.stories.tsx":async()=>e(()=>import("./index.stories-CehHMCSU.js").then(t=>t.u),__vite__mapDeps([21,1,2,16,10]),import.meta.url),"./src/hooks/useHover/index.mdx":async()=>e(()=>import("./index-BPWmprR5.js"),__vite__mapDeps([22,1,2,3,4,5,6,7,8,23,10,11]),import.meta.url),"./src/hooks/useHover/index.stories.tsx":async()=>e(()=>import("./index.stories-CoxcOio2.js").then(t=>t.u),__vite__mapDeps([23,1,2,10]),import.meta.url),"./src/hooks/useLocalStorage/index.mdx":async()=>e(()=>import("./index-CHjdW7Y7.js"),__vite__mapDeps([24,1,2,3,4,5,6,7,8,25,19,11]),import.meta.url),"./src/hooks/useLocalStorage/index.stories.tsx":async()=>e(()=>import("./index.stories-iJZKiW3d.js").then(t=>t.u),__vite__mapDeps([25,1,2,19]),import.meta.url),"./src/hooks/usePrevious/index.mdx":async()=>e(()=>import("./index-DNywSLHH.js"),__vite__mapDeps([26,1,2,3,4,5,6,7,8,27,19,11]),import.meta.url),"./src/hooks/usePrevious/index.stories.tsx":async()=>e(()=>import("./index.stories-3wAro4VJ.js").then(t=>t.u),__vite__mapDeps([27,1,2,19]),import.meta.url),"./src/hooks/useScreenSize/index.mdx":async()=>e(()=>import("./index-C4CMdZ9Y.js"),__vite__mapDeps([28,1,2,3,4,5,6,7,8,29,11]),import.meta.url),"./src/hooks/useScreenSize/index.stories.tsx":async()=>e(()=>import("./index.stories-CkYwC17n.js").then(t=>t.u),__vite__mapDeps([29,1,2]),import.meta.url),"./src/hooks/useSessionStorage/index.mdx":async()=>e(()=>import("./index-BpxuZ18H.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8,11,31,19]),import.meta.url),"./src/hooks/useSessionStorage/index.stories.tsx":async()=>e(()=>import("./index.stories-XihQ3o7V.js").then(t=>t.u),__vite__mapDeps([31,1,2,19]),import.meta.url),"./src/hooks/useSetInterval/index.mdx":async()=>e(()=>import("./index-CpKbql_W.js"),__vite__mapDeps([32,1,2,3,4,5,6,7,8,33,10,11]),import.meta.url),"./src/hooks/useSetInterval/index.stories.tsx":async()=>e(()=>import("./index.stories-DGUbyEIe.js").then(t=>t.u),__vite__mapDeps([33,1,2,10]),import.meta.url),"./src/hooks/useSetTimeout/index.mdx":async()=>e(()=>import("./index-CYHUIQnl.js"),__vite__mapDeps([34,1,2,3,4,5,6,7,8,35,10,11]),import.meta.url),"./src/hooks/useSetTimeout/index.stories.tsx":async()=>e(()=>import("./index.stories-B047rIIi.js").then(t=>t.u),__vite__mapDeps([35,1,2,10]),import.meta.url),"./src/hooks/useToggle/index.mdx":async()=>e(()=>import("./index-BpP3U840.js"),__vite__mapDeps([36,1,2,3,4,5,6,7,8,37,10,11]),import.meta.url),"./src/hooks/useToggle/index.stories.tsx":async()=>e(()=>import("./index.stories-_4UJpIvT.js").then(t=>t.u),__vite__mapDeps([37,1,2,10]),import.meta.url),"./src/stories/changelog.mdx":async()=>e(()=>import("./changelog-DOQpZZl6.js"),__vite__mapDeps([38,1,2,3,4,5,6,7,8]),import.meta.url),"./src/stories/gettingStarted.mdx":async()=>e(()=>import("./gettingStarted-CwK8Mg2u.js"),__vite__mapDeps([39,1,2,3,4,5,6,7,8]),import.meta.url),"./src/stories/installation.mdx":async()=>e(()=>import("./installation-CJDSviSz.js"),__vite__mapDeps([40,1,2,3,4,5,6,7,8]),import.meta.url)};async function L(t){return v[t]()}const{composeConfigs:x,PreviewWeb:y,ClientApi:V}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const t=await Promise.all([e(()=>import("./entry-preview-C8ewSyH8.js"),__vite__mapDeps([41,2,42,5]),import.meta.url),e(()=>import("./entry-preview-docs-CYbEFbZd.js"),__vite__mapDeps([43,7,2,8]),import.meta.url),e(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([44,6]),import.meta.url),e(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([45,8]),import.meta.url),e(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),e(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),e(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([46,8]),import.meta.url),e(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),e(()=>import("./preview-rKahGEic.js"),[],import.meta.url),e(()=>import("./preview-CxvKb1fX.js"),[],import.meta.url),e(()=>import("./preview-CBGjgnh2.js"),[],import.meta.url),e(()=>import("./preview-FjemcqJ5.js"),__vite__mapDeps([47,48]),import.meta.url)]);return x(t)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y(L,A);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{e as _};
