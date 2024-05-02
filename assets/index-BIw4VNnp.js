import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as a,d as i,e as l}from"./index-C7Osh1g5.js";import{u as g,E as h}from"./index.stories-_4UJpIvT.js";import{T as c}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-BDPGHngB.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";const o={headers:["Name","Type","Description"],data:[["value","boolean","The value to toggle."],["handleToggle","() => void","The function to toggle the value."]]};function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:g}),`
`,e.jsx(t.h1,{id:"usetoggle",children:"useToggle"}),`
`,e.jsx(t.p,{children:"This hook is used to toggle between two states. It returns an object with the current state and a function to toggle the state."}),`
`,e.jsx(t.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const { toggle, handleToggle } = useToggle()
return <Button onClick={handleToggle}>{JSON.stringify(toggle)}</Button>
`})}),`
`,e.jsx(t.h2,{id:"api",children:e.jsx(t.strong,{children:"API"})}),`
`,e.jsxs(t.p,{children:["▸ ",e.jsx(t.strong,{children:"useToggle"})," (): ",e.jsx(t.code,{children:"{toggle: boolean, handleToggle: function}"})]}),`
`,e.jsx(t.p,{children:"This hook is used to toggle between two states. It returns an object with the current state and a function to toggle the state."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Returns:"})}),`
`,e.jsx(c,{headers:o.headers,data:o.data}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(l,{})]})}function D(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{D as default};
