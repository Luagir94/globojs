import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as c}from"./index-FeUjBnvO.js";import{M as i,d as l,e as d}from"./index-kGY2S5lc.js";import{u as h,E as m}from"./index.stories-DGUbyEIe.js";import{T as t}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-chiYoU6N.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";const a={headers:["Name","Type","Description"],data:[["miliseconds","number","The delay in milliseconds between each call of the handler."],["callback","`() => void`","The function to call at each interval."]]},r={headers:["Name","Type","Description"],data:[["clear","() => void","The function to clear the interval."],["cicles","number","The number of cicles that have passed."]]};function o(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:h}),`
`,e.jsx(n.h1,{id:"usesetinterval",children:"useSetInterval"}),`
`,e.jsx(n.p,{children:"This hook allows you to set an interval and get the number of cicles that have passed."}),`
`,e.jsx(n.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const cicles = useSetInterval(args.miliseconds, args.callback)

return <Button className="font-bold">Cicles: {cicles}</Button>
`})}),`
`,e.jsx(n.h2,{id:"api",children:e.jsx(n.strong,{children:"API"})}),`
`,e.jsxs(n.p,{children:["▸ ",e.jsx(n.strong,{children:"useSetInterval"})," (",e.jsx(n.code,{children:"miliseconds"}),", ",e.jsx(n.code,{children:"callback"}),"): ",e.jsx(n.em,{children:"number"})]}),`
`,e.jsx(n.p,{children:"This hook allows you to set an interval and get the number of cicles that have passed."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsx(t,{headers:a.headers,data:a.data}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsx(t,{headers:r.headers,data:r.data}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(d,{})]})}function D(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{D as default};
