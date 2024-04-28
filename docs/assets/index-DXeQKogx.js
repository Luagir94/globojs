import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as s,C as a,d as l}from"./index-BU8AWNBC.js";import{u,E as i}from"./index.stories-3wAro4VJ.js";import"./index-uubelm5h.js";import"./iframe-Cv4Re9Kd.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";function n(r){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:u}),`
`,t.jsx(e.h1,{id:"useprevious",children:"usePrevious"}),`
`,t.jsx(e.p,{children:"This hook allows you to get the previous value of a state variable."}),`
`,t.jsx(e.h3,{id:"example-",children:"Example :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`	const [text, setText] = useState<string>('Globo')\r
	const prevValue = usePrevious(text)\r
	return (\r
		<div className="flex flex-col items-center gap-4">\r
			<label htmlFor="debounceInput" className="flex flex-col gap-2 font-bold">\r
				Value:\r
				<Input\r
					id="debounceInput"\r
					type="text"\r
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"\r
					value={text}\r
					onChange={(e: { target: { value: SetStateAction<string> } }) =>\r
						setText(e.target.value)\r
					}\r
				/>\r
			</label>\r
			<label\r
				htmlFor="debounceOutput"\r
				className="flex flex-col gap-2 font-bold "\r
			>\r
				Previous Value:\r
				<Input\r
					type="text"\r
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"\r
					value={prevValue}\r
				/>\r
			</label>\r
		</div>\r
	)
`})}),`
`,t.jsx(a,{of:i}),`
`,t.jsx(l,{})]})}function M(r={}){const{wrapper:e}={...o(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(n,{...r})}):n(r)}export{M as default};
