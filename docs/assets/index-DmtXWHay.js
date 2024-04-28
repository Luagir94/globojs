import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as r,C as i,d as c}from"./index-BU8AWNBC.js";import{u as l,E as u}from"./index.stories-_xT2CzdY.js";import"./index-uubelm5h.js";import"./iframe-Cv4Re9Kd.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";function n(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...o(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l}),`
`,t.jsx(e.h1,{id:"useclickoutside",children:"useClickOutside"}),`
`,t.jsx(e.h2,{id:"this-hook-allows-you-to-detect-clicks-outside-of-a-specified-element",children:"This hook allows you to detect clicks outside of a specified element."}),`
`,t.jsx(e.h3,{id:"example-",children:"Example :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`	const ref = useRef<HTMLButtonElement>(null)\r
	const [clicksOutside, setClicksOutside] = useState(0)\r
	const callback = () => {\r
		setClicksOutside(prev => prev + 1)\r
	}\r
	useClickOutside(ref, callback)\r
	return (\r
		<>\r
			<Button ref={ref} className="font-bold">\r
				Click outside!\r
			</Button>\r
\r
			<p>Clicks outside: {clicksOutside}</p>\r
		</>\r
	)
`})}),`
`,t.jsx(i,{of:u,preview:!0}),`
`,t.jsx(c,{})]})}function E(s={}){const{wrapper:e}={...o(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(n,{...s})}):n(s)}export{E as default};
