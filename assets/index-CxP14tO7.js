import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as l}from"./index-FeUjBnvO.js";import{M as i,d,e as u}from"./index-C-1OGmOA.js";import{u as p,E as c}from"./index.stories-3wAro4VJ.js";import{T as r}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-BcZ1H5Sl.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";const s={headers:["Name","Type","Description"],data:[["value","<T>","The value to get the previous value from."]]},o={headers:["Name","Type","Description"],data:[["default","<T>","The previous value."]]};function a(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...l(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:p}),`
`,t.jsx(e.h1,{id:"useprevious",children:"usePrevious"}),`
`,t.jsx(e.p,{children:"This hook allows you to get the previous value of a state variable."}),`
`,t.jsx(e.h3,{id:"example-",children:"Example :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`const [text, setText] = useState<string>('Globo')
const prevValue = usePrevious(text)
return (
	<div className="flex flex-col items-center gap-4">
		<label htmlFor="debounceInput" className="flex flex-col gap-2 font-bold">
			Value:
			<Input
				id="debounceInput"
				type="text"
				className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
				value={text}
				onChange={(e: { target: { value: SetStateAction<string> } }) =>
					setText(e.target.value)
				}
			/>
		</label>
		<label htmlFor="debounceOutput" className="flex flex-col gap-2 font-bold ">
			Previous Value:
			<Input
				type="text"
				className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
				value={prevValue}
			/>
		</label>
	</div>
)
`})}),`
`,t.jsx(e.h2,{id:"api",children:t.jsx(e.strong,{children:"API"})}),`
`,t.jsxs(e.p,{children:["▸ ",t.jsx(e.strong,{children:"usePrevious"})," (",t.jsx(e.code,{children:"value"}),"): ",t.jsx(e.em,{children:"string"})]}),`
`,t.jsx(e.p,{children:"This hook allows you to get the previous value of a state variable."}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Parameters:"})}),`
`,t.jsx(r,{headers:s.headers,data:s.data}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Returns:"})}),`
`,t.jsx(r,{headers:o.headers,data:o.data}),`
`,t.jsx(d,{of:c}),`
`,t.jsxs(e.p,{children:[t.jsx(u,{}),","," "]})]})}function M(n={}){const{wrapper:e}={...l(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}export{M as default};
