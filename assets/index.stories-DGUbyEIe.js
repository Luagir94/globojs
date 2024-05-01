import{j as p}from"./jsx-runtime-QvZ8i92b.js";import{B as f}from"./index-D6si0Ahr.js";import{r as s}from"./index-uubelm5h.js";const d=(r,n)=>{const[u,c]=s.useState(0),e=s.useRef(null),m=()=>{e.current&&clearInterval(e.current),c(0)};return s.useEffect(()=>()=>{e.current&&clearInterval(e.current)},[]),s.useEffect(()=>(c(0),e.current&&clearInterval(e.current),e.current=setInterval(()=>{n(),c(i=>i+1)},r),()=>{e.current&&clearInterval(e.current)}),[n,r]),{cicles:u,clear:m}},v=r=>{const{cicles:n}=d(r.miliseconds,r.callback);return p.jsxs(f,{className:"font-bold",children:["Cicles: ",n]})},I={title:"Hooks/useSetInterval",component:v,parameters:{layout:"centered"}},t={args:{miliseconds:1e3,callback:()=>console.log("Done!")}};var o,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    miliseconds: 1000,
    callback: () => console.log('Done!')
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const x=["Example"],g=Object.freeze(Object.defineProperty({__proto__:null,Example:t,__namedExportsOrder:x,default:I},Symbol.toStringTag,{value:"Module"}));export{t as E,g as u};
