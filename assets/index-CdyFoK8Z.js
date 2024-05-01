import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as o,C as r,d}from"./index-KLjg69Wx.js";import{u as l,E as h}from"./index.stories-Dzqk-xBp.js";import"./index-uubelm5h.js";import"./iframe-BxR5b1zE.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";function s(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"usesettimeout",children:"useSetTimeout"}),`
`,e.jsx(n.p,{children:"This hook allows you to set a timeout and get a boolean value when the timeout is done."}),`
`,e.jsx(n.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`	const isDone = useSetTimeout(args.miliseconds, args.callback)
	return <Button>{isDone ? 'Done' : 'Not done'}</Button>
`})}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"api",children:e.jsx(n.strong,{children:"API"})}),`
`,e.jsxs(n.p,{children:["▸ ",e.jsx(n.strong,{children:"useSetTimeout"}),"  (",e.jsx(n.code,{children:"miliseconds"}),", ",e.jsx(n.code,{children:"callback"}),"): ",e.jsx(n.em,{children:"boolean"})]}),`
`,e.jsx(n.p,{children:"This hook allows you to set a timeout and get a boolean value when the timeout is done."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:" miliseconds "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"number"})," "]}),e.jsx("td",{children:" The time in miliseconds that the timeout will last. "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:" callback "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"function"})," "]}),e.jsx("td",{children:" The function that will be called when the timeout is done. "})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:" default "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"boolean"})," "]}),e.jsx("td",{children:e.jsx(n.p,{children:"The boolean value that indicates if the timeout is done."})})]})})]}),`
`,e.jsx(d,{})]})}function D(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{D as default};
