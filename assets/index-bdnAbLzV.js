import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as d,C as l,d as o}from"./index-PXwDmgVS.js";import{u as c,E as i}from"./index.stories-D--6yeuq.js";import"./index-uubelm5h.js";import"./iframe-3WSc1KCg.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";function s(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:c}),`
`,t.jsx(e.h1,{id:"usedebounce",children:"useDebounce"}),`
`,t.jsx(e.p,{children:"This hook allows you to debounce a value."}),`
`,t.jsx(e.h3,{id:"example-",children:"Example :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`	const [text, setText] = useState<string>('Globo')
	const debouncedValue = useDebounce(text, args.miliseconds)
	return (
		<div className="flex flex-col items-center gap-4">
			<label htmlFor="debounceInput" className="flex flex-col gap-2 font-bold">
				Input:
				<Input
					id="debounceInput"
					type="text"
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
					value={text}
					onChange={e => setText(e.target.value)}
				/>
			</label>
			<label
				htmlFor="debounceOutput"
				className="flex flex-col gap-2 font-bold "
			>
				Output:
				<Input
					type="text"
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
					value={debouncedValue}
				/>
			</label>
		</div>
	)
`})}),`
`,t.jsx(l,{of:i}),`
`,t.jsx(e.h2,{id:"api",children:t.jsx(e.strong,{children:"API"})}),`
`,t.jsxs(e.p,{children:["▸ ",t.jsx(e.strong,{children:"useDebounce"}),"(",t.jsx(e.code,{children:"value"}),", ",t.jsx(e.code,{children:"delay"}),"): string"]}),`
`,t.jsx(e.p,{children:"This hook allows you to debounce a value."}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Parameters:"})}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Name "}),t.jsx("th",{children:" Type "}),t.jsx("th",{children:" Description "})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:" value "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"string"})," "]}),t.jsx("td",{children:" The value you want to debounce. "})]}),t.jsxs("tr",{children:[t.jsx("td",{children:" delay "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"number"})," "]}),t.jsx("td",{children:" The delay in milliseconds. "})]})]})]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Returns:"})}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Name "}),t.jsx("th",{children:" Type "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:" string "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"string"})," "]}),t.jsx("td",{children:" The debounced value. "})]})})]}),`
`,t.jsx(o,{})]})}function D(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{D as default};
