import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as o}from"./index-z5U8iC57.js";import{M as s,C as a,d as l}from"./index-fyM3hxw3.js";import{u as i,E as u}from"./index.stories-CVOjpXh0.js";import"./index-BBkUAzwr.js";import"./iframe-CKnPhD8E.js";import"../sb-preview/runtime.js";import"./index-Ctx6sqdB.js";import"./index-COebWTXQ.js";import"./index-Bl1AO4J4.js";import"./index-DrFu-skq.js";import"./index-bwlRHdLe.js";function r(n){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:i}),`
`,t.jsx(e.h1,{id:"usesessionstorage",children:"useSessionStorage"}),`
`,t.jsx(e.p,{children:"This hook allows you to set a value in the SessionStorage and get it."}),`
`,t.jsx(e.h3,{id:"example-",children:"Example :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`	const [value, setValue] = useState('')\r
	const [ssValue, setSsValue] = useSessionStorage('key', 'value')\r
	const handleStorage = (value: string) => {\r
		setValue(value)\r
		setSsValue(value)\r
	}\r
\r
	return (\r
		<div className="flex flex-col items-center gap-4">\r
			<label htmlFor="debounceInput" className="flex flex-col gap-2 font-bold">\r
				Input:\r
				<Input\r
					id="debounceInput"\r
					type="text"\r
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"\r
					value={value}\r
					onChange={e => handleStorage(e.target.value)}\r
				/>\r
			</label>\r
			<p>{ssValue}</p>\r
			<p>Check SessionStorage!</p>\r
		</div>\r
	)
`})}),`
`,t.jsx(a,{of:u}),`
`,t.jsx(l,{})]})}function C(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{C as default};
