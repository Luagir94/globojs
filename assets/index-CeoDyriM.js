import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as o,C as h,d as i}from"./index-PXwDmgVS.js";import{u as d,E as l}from"./index.stories-0hJBhEAU.js";import"./index-uubelm5h.js";import"./iframe-3WSc1KCg.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";function r(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"usehover",children:"useHover"}),`
`,e.jsx(n.p,{children:"This hook allows you to detect when the mouse is hovering over an element."}),`
`,e.jsx(n.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`	const ref = useRef<HTMLButtonElement>(null)
	const isHovered = useHover(ref)
	return (
		<Button ref={ref} className="w-40 font-bold">
			{isHovered ? "It's hovered🎈" : 'Hover!'}
		</Button>
	)
`})}),`
`,e.jsx(h,{of:l}),`
`,e.jsx(n.h2,{id:"api",children:e.jsx(n.strong,{children:"API"})}),`
`,e.jsxs(n.p,{children:["▸ ",e.jsx(n.strong,{children:"useHover"})," (",e.jsx(n.code,{children:"ref"}),"): ",e.jsx(n.em,{children:"boolean"})]}),`
`,e.jsx(n.p,{children:"This hook allows you to detect when the mouse is hovering over an element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:" ref "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"React.MutableRefObject<HTMLElement>"})," "]}),e.jsx("td",{children:" The reference to the element you want to detect hover on. "})]})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:" default "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"boolean"})," "]}),e.jsx("td",{children:" A boolean that is true when the mouse is hovering over the element. "})]})})]}),`
`,e.jsx(i,{})]})}function M(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{M as default};
