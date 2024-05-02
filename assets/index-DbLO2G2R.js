import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as d}from"./index-FeUjBnvO.js";import{M as l,d as c,e as i}from"./index-C7Osh1g5.js";import{u,E as h}from"./index.stories-DNOLa1he.js";import{T as o}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-BDPGHngB.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-tBptrbbq.js";const s={headers:["Name","Type","Description"],data:[["ref","`React.MutableRefObject<HTMLElement>`","The reference to the element you want to detect clicks outside of."],["handler","`() => void`","The function to call when a click outside is detected."]]},r={headers:["Name","Type","Description"],data:[["default","string","The debounced value."]]};function a(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:u}),`
`,e.jsx(t.h1,{id:"usedebounce",children:"useDebounce"}),`
`,e.jsx(t.p,{children:"This hook allows you to debounce a value."}),`
`,e.jsx(t.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const [text, setText] = useState<string>('Globo')
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
		<label htmlFor="debounceOutput" className="flex flex-col gap-2 font-bold ">
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
`,e.jsx(t.h2,{id:"api",children:e.jsx(t.strong,{children:"API"})}),`
`,e.jsxs(t.p,{children:["▸ ",e.jsx(t.strong,{children:"useDebounce"}),"(",e.jsx(t.code,{children:"value"}),", ",e.jsx(t.code,{children:"delay"}),"): string"]}),`
`,e.jsx(t.p,{children:"This hook allows you to debounce a value."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsx(o,{headers:s.headers,data:s.data}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Returns:"})}),`
`,e.jsx(o,{headers:r.headers,data:r.data}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(i,{})]})}function w(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{w as default};
