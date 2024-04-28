import{j as i}from"./jsx-runtime-DRTy3Uxn.js";import{B as p}from"./index-CNIeKKsl.js";import{r as o}from"./index-BBkUAzwr.js";const d=(r,s)=>{const[u,n]=o.useState(0),e=o.useRef(null);return o.useEffect(()=>()=>{e.current&&clearInterval(e.current)},[]),o.useEffect(()=>(n(0),e.current&&clearInterval(e.current),e.current=setInterval(()=>{s(),n(m=>m+1)},r),()=>{e.current&&clearInterval(e.current)}),[s,r]),u},f=r=>{const s=d(r.miliseconds,r.callback);return i.jsxs(p,{className:"font-bold",children:["Cicles: ",s]})},v={title:"Hooks/useSetInterval",component:f,parameters:{layout:"centered"}},t={args:{miliseconds:1e3,callback:()=>console.log("Done!")}};var c,a,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    miliseconds: 1000,
    callback: () => console.log('Done!')
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const x=["Example"],b=Object.freeze(Object.defineProperty({__proto__:null,Example:t,__namedExportsOrder:x,default:v},Symbol.toStringTag,{value:"Module"}));export{t as E,b as u};
