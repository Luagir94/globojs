import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as r}from"./index-z5U8iC57.js";import{M as s,C as m,d as i}from"./index-fyM3hxw3.js";import{u as a,E as c}from"./index.stories-Dw-ps351.js";import"./index-BBkUAzwr.js";import"./iframe-CKnPhD8E.js";import"../sb-preview/runtime.js";import"./index-Ctx6sqdB.js";import"./index-COebWTXQ.js";import"./index-Bl1AO4J4.js";import"./index-DrFu-skq.js";import"./index-CNIeKKsl.js";function n(o){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(t.h1,{id:"usehover",children:"useHover"}),`
`,e.jsx(t.p,{children:"This hook allows you to detect when the mouse is hovering over an element."}),`
`,e.jsx(t.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`	const ref = useRef<HTMLButtonElement>(null)\r
	const isHovered = useHover(ref)\r
	return (\r
		<Button ref={ref} className="w-40 font-bold">\r
			{isHovered ? "It's hovered🎈" : 'Hover!'}\r
		</Button>\r
	)
`})}),`
`,e.jsx(m,{of:c}),`
`,e.jsx(i,{})]})}function E(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{E as default};
