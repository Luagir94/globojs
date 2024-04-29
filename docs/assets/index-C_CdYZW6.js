import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as o,C as l,d as i}from"./index-BPB9T_ZN.js";import{u as d,E as a}from"./index.stories-3wAro4VJ.js";import"./index-uubelm5h.js";import"./iframe-CaeJXAJZ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";function n(r){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(o,{of:d}),`
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
`,t.jsx(l,{of:a}),`
`,t.jsx(e.h2,{id:"api",children:t.jsx(e.strong,{children:"API"})}),`
`,t.jsxs(e.p,{children:["▸ ",t.jsx(e.strong,{children:"usePrevious"}),"  (",t.jsx(e.code,{children:"value"}),"): ",t.jsx(e.em,{children:"string"})]}),`
`,t.jsx(e.p,{children:"This hook allows you to get the previous value of a state variable."}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Parameters:"})}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Name "}),t.jsx("th",{children:" Type "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:" value "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"string"})," "]}),t.jsx("td",{children:" The value to get the previous value from. "})]})})]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Returns:"})}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Name "}),t.jsx("th",{children:" Type "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:" default "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"string"})," "]}),t.jsx("td",{children:" The previous value of the state variable. "})]})})]}),`
`,t.jsx(i,{})]})}function N(r={}){const{wrapper:e}={...s(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(n,{...r})}):n(r)}export{N as default};
