import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as l,C as o,d as a}from"./index-BPB9T_ZN.js";import{u as i,E as d}from"./index.stories-iJZKiW3d.js";import"./index-uubelm5h.js";import"./iframe-CaeJXAJZ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";function r(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:i}),`
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
`,t.jsx(o,{of:d}),`
`,t.jsx(e.h2,{id:"api",children:t.jsx(e.strong,{children:"API"})}),`
`,t.jsxs(e.p,{children:["▸ ",t.jsx(e.strong,{children:"useLocalStorage"})," (",t.jsx(e.code,{children:"key"}),", ",t.jsx(e.code,{children:"initialValue"}),"): ",t.jsx(e.em,{children:"string"})]}),`
`,t.jsx(e.p,{children:"This hook allows you to set a value in the LocalStorage and get it."}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Parameters:"})}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Name "}),t.jsx("th",{children:" Type "}),t.jsx("th",{children:" Description "})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:" key "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"string"})," "]}),t.jsx("td",{children:" The key to store the value in the LocalStorage. "})]}),t.jsxs("tr",{children:[t.jsx("td",{children:" initialValue "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"string"})," "]}),t.jsx("td",{children:" The initial value of the LocalStorage. "})]})]})]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Returns:"})}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Name "}),t.jsx("th",{children:" Type "}),t.jsx("th",{children:" Description "})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:" lsValue "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"string"})," "]}),t.jsx("td",{children:" The value stored in the LocalStorage. "})]}),t.jsxs("tr",{children:[t.jsx("td",{children:" setLsValue "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"function"})," "]}),t.jsx("td",{children:" A function that sets the value in the LocalStorage. "})]})]})]}),`
`,t.jsx(a,{})]})}function b(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{b as default};
