import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as l}from"./index-FeUjBnvO.js";import{M as i,d as c,e as d}from"./index-D_qAVvzG.js";import{u,E as h}from"./index.stories-iJZKiW3d.js";import{T as a}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe--8_b4d-b.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";const o={headers:["Name","Type","Description"],data:[["key","string","The key to store the value in the LocalStorage."],["initalValue","string","The initial value to store in local storage."]]},s={headers:["Name","Type","Description"],data:[["lsValue","string","The value stored in LocalStorage."],["setValue","`(value: string) => void`","A function to set the value in LocalStorage."]]};function r(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:u}),`
`,e.jsx(t.h1,{id:"uselocalstorage",children:"useLocalStorage"}),`
`,e.jsx(t.p,{children:"This hook allows you to set a value in the LocalStorage and get it."}),`
`,e.jsx(t.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const [value, setValue] = useState('')
const [lsValue, setLsValue] = useLocalStorage('key', 'value')
const handleStorage = (value: string) => {
	setValue(value)
	setLsValue(value)
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
		<p>{lsValue}</p>
		<p>Check Localstorage!</p>
	</div>
)
`})}),`
`,e.jsx(t.h2,{id:"api",children:e.jsx(t.strong,{children:"API"})}),`
`,e.jsxs(t.p,{children:["▸ ",e.jsx(t.strong,{children:"useLocalStorage"})," (",e.jsx(t.code,{children:"key"}),", ",e.jsx(t.code,{children:"initialValue"}),"): ",e.jsx(t.em,{children:"string"})]}),`
`,e.jsx(t.p,{children:"This hook allows you to set a value in the LocalStorage and get it."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsx(a,{headers:o.headers,data:o.data}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Returns:"})}),`
`,e.jsx(a,{headers:s.headers,data:s.data}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(d,{})]})}function k(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{k as default};
