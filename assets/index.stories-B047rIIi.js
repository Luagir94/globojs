import{j as m}from"./jsx-runtime-QvZ8i92b.js";import{r as n}from"./index-uubelm5h.js";import{B as i}from"./index-D6si0Ahr.js";const p=(e,r)=>{const[l,s]=n.useState(!1),o=n.useRef(null);return n.useEffect(()=>(s(!1),o.current=setTimeout(()=>{r(),s(!0)},e),()=>{o.current&&clearTimeout(o.current)}),[r,e]),{isDone:l,clear:()=>{o.current&&clearTimeout(o.current),s(!0)}}},d=e=>{const{isDone:r}=p(e.miliseconds,e.callback);return m.jsx(i,{children:r?"Done":"Not done"})},f={title:"Hooks/useSetTimeout",component:d,parameters:{layout:"centered"}},t={args:{miliseconds:3e3,callback:()=>console.log("Done!")}};var c,a,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    miliseconds: 3000,
    callback: () => console.log('Done!')
  }
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const x=["Example"],T=Object.freeze(Object.defineProperty({__proto__:null,Example:t,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{t as E,T as u};
