import{j as m}from"./jsx-runtime-DRTy3Uxn.js";import{r}from"./index-BBkUAzwr.js";import{B as i}from"./index-CNIeKKsl.js";const p=(e,t)=>{const[l,n]=r.useState(!1),s=r.useRef(null);return r.useEffect(()=>(n(!1),s.current=setTimeout(()=>{t(),n(!0)},e),()=>{s.current&&clearTimeout(s.current)}),[t,e]),l},d=e=>{const t=p(e.miliseconds,e.callback);return m.jsx(i,{children:t?"Done":"Not done"})},f={title:"Hooks/useSetTimeout",component:d,parameters:{layout:"centered"}},o={args:{miliseconds:3e3,callback:()=>console.log("Done!")}};var c,a,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    miliseconds: 3000,
    callback: () => console.log('Done!')
  }
}`,...(u=(a=o.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const x=["Example"],D=Object.freeze(Object.defineProperty({__proto__:null,Example:o,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{o as E,D as u};
