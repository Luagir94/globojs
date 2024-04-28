import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as a,C as s,d as l}from"./index-BU8AWNBC.js";import{u,E as c}from"./index.stories-iJZKiW3d.js";import"./index-uubelm5h.js";import"./iframe-Cv4Re9Kd.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";function r(n){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:u}),`
`,t.jsx(e.h1,{id:"uselocalstorage",children:"useLocalStorage"}),`
`,t.jsx(e.p,{children:"This hook allows you to set a value in the LocalStorage and get it."}),`
`,t.jsx(e.h3,{id:"example-",children:"Example :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`	const [value, setValue] = useState('')\r
	const [lsValue, setLsValue] = useLocalStorage('key', 'value')\r
	const handleStorage = (value: string) => {\r
		setValue(value)\r
		setLsValue(value)\r
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
			<p>{lsValue}</p>\r
			<p>Check Localstorage!</p>\r
		</div>\r
	)
`})}),`
`,t.jsx(s,{of:c}),`
`,t.jsx(l,{})]})}function L(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{L as default};
