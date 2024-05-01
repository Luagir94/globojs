import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as i,C as l,d as c}from"./index-KLjg69Wx.js";import{u as d,E as h}from"./index.stories-cJ3sh7l0.js";import"./index-uubelm5h.js";import"./iframe-BxR5b1zE.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";function t(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(n.h1,{id:"usesetinterval",children:"useSetInterval"}),`
`,e.jsx(n.p,{children:"This hook allows you to set an interval and get the number of cicles that have passed."}),`
`,e.jsx(n.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`	const cicles = useSetInterval(args.miliseconds, args.callback)

	return (
			<Button className="font-bold">Cicles: {cicles}</Button>
	)
`})}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h2,{id:"api",children:e.jsx(n.strong,{children:"API"})}),`
`,e.jsxs(n.p,{children:["▸ ",e.jsx(n.strong,{children:"useSetInterval"}),"  (",e.jsx(n.code,{children:"miliseconds"}),", ",e.jsx(n.code,{children:"callback"}),"): ",e.jsx(n.em,{children:"number"})]}),`
`,e.jsx(n.p,{children:"This hook allows you to set an interval and get the number of cicles that have passed."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:" miliseconds "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"number"})," "]}),e.jsx("td",{children:" The time in miliseconds that the interval will last. "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:" callback "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"function"})," "]}),e.jsx("td",{children:" The function that will be called every interval. "})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:" default "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"number"})," "]}),e.jsx("td",{children:e.jsx(n.p,{children:"The number of cicles that have passed."})})]})})]}),`
`,e.jsx(c,{})]})}function C(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{C as default};
