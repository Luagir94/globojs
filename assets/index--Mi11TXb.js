import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as i,C as o,d as l}from"./index-KLjg69Wx.js";import{u as d,E as a}from"./index.stories-Bsa0PWyJ.js";import"./index-uubelm5h.js";import"./iframe-BxR5b1zE.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";function s(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(t.h1,{id:"usesessionstorage",children:"useSessionStorage"}),`
`,e.jsx(t.p,{children:"This hook allows you to set a value in the SessionStorage and get it."}),`
`,e.jsx(t.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`	const [value, setValue] = useState('')
	const [ssValue, setSsValue] = useSessionStorage('key', 'value')
	const handleStorage = (value: string) => {
		setValue(value)
		setSsValue(value)
	}

	return (
		<div className="flex flex-col items-center gap-4">
			<label htmlFor="debounceInput" className="flex flex-col gap-2 font-bold">
				Input:
				<Input
					id="debounceInput"
					type="text"
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
					value={value}
					onChange={e => handleStorage(e.target.value)}
				/>
			</label>
			<p>{ssValue}</p>
			<p>Check SessionStorage!</p>
		</div>
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
