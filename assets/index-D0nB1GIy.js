import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as i,d}from"./index-C-1OGmOA.js";import{u as a,E as c}from"./index.stories-CehHMCSU.js";import{T as m}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-BcZ1H5Sl.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-B5NtYy47.js";import"./index-D6si0Ahr.js";const t={headers:["Name","Type","Description"],data:[["default","boolean","Returns a boolean value indicating if the component is on its first render."]]};function s(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"usefirstrender",children:"useFirstRender"}),`
`,e.jsx(n.p,{children:"This hook is used to check if the component is rendered for the first time or not."}),`
`,e.jsx(n.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { value, increment } = useCounter(0)
const isFirstRender = useFirstRender()

return (
	<div className="flex flex-col items-center gap-4">
		<Button onClick={() => increment()}>Rerender</Button>

		<p>Number of renders {value}</p>
		<p>Is first render: {isFirstRender ? 'true' : 'false'}</p>
	</div>
)
`})}),`
`,e.jsx(n.h2,{id:"api",children:e.jsx(n.strong,{children:"API"})}),`
`,e.jsxs(n.p,{children:["▸ ",e.jsx(n.strong,{children:"useFirstRender"})," () : ",e.jsx(n.em,{children:e.jsx(n.code,{children:"boolean"})})]}),`
`,e.jsx(n.p,{children:"This hook is used to check if the component is rendered for the first time or not."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsx(m,{headers:t.headers,data:t.data}),`
`,e.jsx(d,{of:c})]})}function k(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{k as default};
