const __vite__fileDeps=["./index-WxEWKtEV.js","./jsx-runtime-DRTy3Uxn.js","./index-BBkUAzwr.js","./index-z5U8iC57.js","./index-fyM3hxw3.js","./index-Ctx6sqdB.js","./index-COebWTXQ.js","./index-Bl1AO4J4.js","./index-DrFu-skq.js","./index.stories-GcD0OA8f.js","./index-CNIeKKsl.js","./index-B4AyqoNo.js","./index.stories-o7Ye5jqZ.js","./index-ROYANdS4.js","./index.stories-DS3VYH_g.js","./index-DT1acBhx.js","./index.stories-soHLPuTb.js","./index-bwlRHdLe.js","./index-BsBOfVOR.js","./index.stories-Dw-ps351.js","./index-CzkFlzYz.js","./index.stories-DwXxvz8T.js","./index-RRKL9Nk2.js","./index.stories-BT9rYOCc.js","./index-Dq8CnNJ5.js","./index.stories-CVOjpXh0.js","./index-DRqqgRpA.js","./index.stories-2_jIj9oK.js","./index-BOsoQSne.js","./index.stories-CD3U83Fy.js","./changelog-CSkzw0kL.js","./gettingStarted-impihVrF.js","./installation-BGn18mWM.js","./entry-preview-BcdWOevY.js","./react-18-8fFfcrTO.js","./entry-preview-docs-Bf92ezf6.js","./preview-DqN9aQ4U.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-BL4vj5xq.js","./preview-j-FkMzSk.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function u(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=u(r);fetch(r.href,o)}})();const R="modulepreload",P=function(t,n){return new URL(t,n).href},p={},e=function(n,u,m){let r=Promise.resolve();if(u&&u.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),E=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(u.map(_=>{if(_=P(_,m),_ in p)return;p[_]=!0;const c=_.endsWith(".css"),O=c?'[rel="stylesheet"]':"";if(!!m)for(let a=o.length-1;a>=0;a--){const d=o[a];if(d.href===_&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${O}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":R,c||(s.as="script",s.crossOrigin=""),s.href=_,E&&s.setAttribute("nonce",E),document.head.appendChild(s),c)return new Promise((a,d)=>{s.addEventListener("load",a),s.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${_}`)))})}))}return r.then(()=>n()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},{createBrowserChannel:h}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,l=h({page:"preview"});T.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const v={"./src/hooks/useClickOutside/index.mdx":async()=>e(()=>import("./index-WxEWKtEV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),"./src/hooks/useClickOutside/index.stories.tsx":async()=>e(()=>import("./index.stories-GcD0OA8f.js").then(t=>t.u),__vite__mapDeps([9,1,2,10]),import.meta.url),"./src/hooks/useCopyToClipboard/index.mdx":async()=>e(()=>import("./index-B4AyqoNo.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,12,10]),import.meta.url),"./src/hooks/useCopyToClipboard/index.stories.tsx":async()=>e(()=>import("./index.stories-o7Ye5jqZ.js").then(t=>t.u),__vite__mapDeps([12,1,2,10]),import.meta.url),"./src/hooks/useCounter/index.mdx":async()=>e(()=>import("./index-ROYANdS4.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,14,10]),import.meta.url),"./src/hooks/useCounter/index.stories.tsx":async()=>e(()=>import("./index.stories-DS3VYH_g.js").then(t=>t.u),__vite__mapDeps([14,1,2,10]),import.meta.url),"./src/hooks/useDebounce/index.mdx":async()=>e(()=>import("./index-DT1acBhx.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,16,17]),import.meta.url),"./src/hooks/useDebounce/index.stories.tsx":async()=>e(()=>import("./index.stories-soHLPuTb.js").then(t=>t.u),__vite__mapDeps([16,1,2,17]),import.meta.url),"./src/hooks/useHover/index.mdx":async()=>e(()=>import("./index-BsBOfVOR.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,8,19,10]),import.meta.url),"./src/hooks/useHover/index.stories.tsx":async()=>e(()=>import("./index.stories-Dw-ps351.js").then(t=>t.u),__vite__mapDeps([19,1,2,10]),import.meta.url),"./src/hooks/useLocalStorage/index.mdx":async()=>e(()=>import("./index-CzkFlzYz.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8,21,17]),import.meta.url),"./src/hooks/useLocalStorage/index.stories.tsx":async()=>e(()=>import("./index.stories-DwXxvz8T.js").then(t=>t.u),__vite__mapDeps([21,1,2,17]),import.meta.url),"./src/hooks/usePrevious/index.mdx":async()=>e(()=>import("./index-RRKL9Nk2.js"),__vite__mapDeps([22,1,2,3,4,5,6,7,8,23,17]),import.meta.url),"./src/hooks/usePrevious/index.stories.tsx":async()=>e(()=>import("./index.stories-BT9rYOCc.js").then(t=>t.u),__vite__mapDeps([23,1,2,17]),import.meta.url),"./src/hooks/useSessionStorage/index.mdx":async()=>e(()=>import("./index-Dq8CnNJ5.js"),__vite__mapDeps([24,1,2,3,4,5,6,7,8,25,17]),import.meta.url),"./src/hooks/useSessionStorage/index.stories.tsx":async()=>e(()=>import("./index.stories-CVOjpXh0.js").then(t=>t.u),__vite__mapDeps([25,1,2,17]),import.meta.url),"./src/hooks/useSetInterval/index.mdx":async()=>e(()=>import("./index-DRqqgRpA.js"),__vite__mapDeps([26,1,2,3,4,5,6,7,8,27,10]),import.meta.url),"./src/hooks/useSetInterval/index.stories.tsx":async()=>e(()=>import("./index.stories-2_jIj9oK.js").then(t=>t.u),__vite__mapDeps([27,1,2,10]),import.meta.url),"./src/hooks/useSetTimeout/index.mdx":async()=>e(()=>import("./index-BOsoQSne.js"),__vite__mapDeps([28,1,2,3,4,5,6,7,8,29,10]),import.meta.url),"./src/hooks/useSetTimeout/index.stories.tsx":async()=>e(()=>import("./index.stories-CD3U83Fy.js").then(t=>t.u),__vite__mapDeps([29,1,2,10]),import.meta.url),"./src/stories/changelog.mdx":async()=>e(()=>import("./changelog-CSkzw0kL.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8]),import.meta.url),"./src/stories/gettingStarted.mdx":async()=>e(()=>import("./gettingStarted-impihVrF.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8]),import.meta.url),"./src/stories/installation.mdx":async()=>e(()=>import("./installation-BGn18mWM.js"),__vite__mapDeps([32,1,2,3,4,5,6,7,8]),import.meta.url)};async function L(t){return v[t]()}const{composeConfigs:f,PreviewWeb:y,ClientApi:D}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const t=await Promise.all([e(()=>import("./entry-preview-BcdWOevY.js"),__vite__mapDeps([33,2,34,5]),import.meta.url),e(()=>import("./entry-preview-docs-Bf92ezf6.js"),__vite__mapDeps([35,7,2,8]),import.meta.url),e(()=>import("./preview-DqN9aQ4U.js"),__vite__mapDeps([36,6]),import.meta.url),e(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([37,8]),import.meta.url),e(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),e(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),e(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([38,8]),import.meta.url),e(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),e(()=>import("./preview-R_CrvmlC.js"),[],import.meta.url),e(()=>import("./preview-eXlPzN23.js"),[],import.meta.url),e(()=>import("./preview-CBGjgnh2.js"),[],import.meta.url),e(()=>import("./preview-BL4vj5xq.js"),__vite__mapDeps([39,40]),import.meta.url)]);return f(t)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y(L,A);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{e as _};
