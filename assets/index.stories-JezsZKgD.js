import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{u as d}from"./index-B5NtYy47.js";import{B as t}from"./index-D6si0Ahr.js";const p=a=>{const{value:l,increment:c,decrement:i,reset:m,setValue:u}=d(a.initialValue,a.hasNegatives);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{onClick:()=>m(),className:"w-20 font-bold",children:"Reset"}),e.jsx(t,{onClick:()=>i(),className:"w-10 font-bold",children:"-1"}),e.jsx("p",{className:"w-4 font-bold text-center",children:l}),e.jsx(t,{onClick:()=>c(),className:"w-10 font-bold",children:"+1"}),e.jsx(t,{onClick:()=>u(73),className:"w-20 font-bold",children:"Set 73"})]})},f={title:"Hooks/useCounter",component:p,parameters:{layout:"centered"}},s={args:{initialValue:0,hasNegatives:!1}};var o,n,r;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    initialValue: 0,
    hasNegatives: false
  }
}`,...(r=(n=s.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const x=["Example"],b=Object.freeze(Object.defineProperty({__proto__:null,Example:s,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{s as E,b as u};
