import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as i,C as o,d as l}from"./index-BPB9T_ZN.js";import{u as d,E as a}from"./index.stories-Bsa0PWyJ.js";import"./index-uubelm5h.js";import"./iframe-CaeJXAJZ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";function s(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(t.h1,{id:"usesessionstorage",children:"useSessionStorage"}),`
`,e.jsx(t.p,{children:"This hook allows you to set a value in the SessionStorage and get it."}),`
`,e.jsx(t.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`	const [value, setValue] = useState('')\r
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
`,e.jsx(o,{of:a}),`
`,e.jsx(t.h2,{id:"api",children:e.jsx(t.strong,{children:"API"})}),`
`,e.jsxs(t.p,{children:["▸ ",e.jsx(t.strong,{children:"useSessionStorage"})," (",e.jsx(t.code,{children:"key"}),", ",e.jsx(t.code,{children:"initialValue"}),"): ",e.jsx(t.em,{children:"string"})]}),`
`,e.jsx(t.p,{children:"This hook allows you to set a value in the SessionStorage and get it."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:" key "}),e.jsxs("td",{children:[" ",e.jsx(t.code,{children:"string"})," "]}),e.jsx("td",{children:" The key to store the value in the SessionStorage. "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:" initialValue "}),e.jsxs("td",{children:[" ",e.jsx(t.code,{children:"string"})," "]}),e.jsx("td",{children:" The initial value of the SessionStorage. "})]})]})]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Returns:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:" ssValue "}),e.jsxs("td",{children:[" ",e.jsx(t.code,{children:"string"})," "]}),e.jsx("td",{children:" The value stored in the SessionStorage. "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:" setSsValue "}),e.jsxs("td",{children:[" ",e.jsx(t.code,{children:"function"})," "]}),e.jsx("td",{children:" A function that sets the value in the SessionStorage. "})]})]})]}),`
`,e.jsx(l,{})]})}function y(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{y as default};
