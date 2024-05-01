import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{r as u}from"./index-uubelm5h.js";import{I as S}from"./index-tBptrbbq.js";const i=(t,n)=>{const[s,c]=u.useState(()=>{try{const e=window.sessionStorage.getItem(t);return e?JSON.parse(e):n}catch(e){return console.error(e),n}});return[s,e=>{try{const o=e instanceof Function?e(s):e;c(o),window.sessionStorage.setItem(t,JSON.stringify(o))}catch(o){console.error(o)}}]};try{i.displayName="useSessionStorage",i.__docgenInfo={description:"Custom hook for managing a value in session storage.",displayName:"useSessionStorage",props:{}}}catch{}const g=t=>{const[n,s]=u.useState(""),[c,l]=i("default","initialValue"),e=o=>{s(o),l(o)};return u.useEffect(()=>{s(t.value),l(t.value)},[t.value]),r.jsxs("div",{className:"flex flex-col items-center gap-4",children:[r.jsxs("label",{htmlFor:"debounceInput",className:"flex flex-col gap-2 font-bold",children:["Input:",r.jsx(S,{id:"debounceInput",type:"text",className:"w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded",value:n,onChange:o=>e(o.target.value)})]}),r.jsx("p",{children:c}),r.jsx("p",{children:"Check SessionStorage!"})]})},f={title:"Hooks/useSessionStorage",component:g,parameters:{layout:"centered"}},a={args:{value:"value"}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 'value'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const x=["Example"],v=Object.freeze(Object.defineProperty({__proto__:null,Example:a,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{a as E,v as u};
