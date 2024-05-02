import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{r as c}from"./index-uubelm5h.js";import{I as u}from"./index-tBptrbbq.js";const l=(e,o)=>{const[s,a]=c.useState(e);return c.useEffect(()=>{const n=setTimeout(()=>{a(e)},o);return()=>{clearTimeout(n)}},[e,o]),s};try{l.displayName="useDebounce",l.__docgenInfo={description:"Custom hook that debounces a value.",displayName:"useDebounce",props:{}}}catch{}const i=e=>{const[o,s]=c.useState("Globo"),a=l(o,e.miliseconds);return t.jsxs("div",{className:"flex flex-col items-center gap-4",children:[t.jsxs("label",{htmlFor:"debounceInput",className:"flex flex-col gap-2 font-bold",children:["Input:",t.jsx(u,{id:"debounceInput",type:"text",className:"w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded",value:o,onChange:n=>s(n.target.value)})]}),t.jsxs("label",{htmlFor:"debounceOutput",className:"flex flex-col gap-2 font-bold ",children:["Output:",t.jsx(u,{type:"text",className:"w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded",value:a})]})]})},b={title:"Hooks/useDebounce",component:i,parameters:{layout:"centered"}},r={args:{miliseconds:500}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    miliseconds: 500
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const x=["Example"],h=Object.freeze(Object.defineProperty({__proto__:null,Example:r,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{r as E,h as u};