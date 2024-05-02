import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as d,d as c,e as l}from"./index-D_qAVvzG.js";import{u as m,E as h}from"./index.stories-B047rIIi.js";import{T as o}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe--8_b4d-b.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";const s={headers:["Name","Type","Description"],data:[["miliseconds","number","The delay in milliseconds."],["callback","`() => void`","The function to clear timeout."]]},r={headers:["Name","Type","Description"],data:[["clear","() => void","The function to clear the interval."],["isDone","boolean","If the timeout has been cleared."]]};function a(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:m}),`
`,e.jsx(n.h1,{id:"usesettimeout",children:"useSetTimeout"}),`
`,e.jsx(n.p,{children:"This hook allows you to set a timeout and get a boolean value when the timeout is done."}),`
`,e.jsx(n.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const isDone = useSetTimeout(args.miliseconds, args.callback)
return <Button>{isDone ? 'Done' : 'Not done'}</Button>
`})}),`
`,e.jsx(n.h2,{id:"api",children:e.jsx(n.strong,{children:"API"})}),`
`,e.jsxs(n.p,{children:["▸ ",e.jsx(n.strong,{children:"useSetTimeout"})," (",e.jsx(n.code,{children:"miliseconds"}),", ",e.jsx(n.code,{children:"callback"}),"): ",e.jsx(n.em,{children:"boolean"})]}),`
`,e.jsx(n.p,{children:"This hook allows you to set a timeout and get a boolean value when the timeout is done."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsx(o,{headers:s.headers,data:s.data}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsx(o,{headers:r.headers,data:r.data}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(l,{})]})}function w(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{w as default};
