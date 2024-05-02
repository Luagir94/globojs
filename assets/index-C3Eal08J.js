import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as h,d,e as c}from"./index-C-1OGmOA.js";import{u as l,E as m}from"./index.stories-CoxcOio2.js";import{T as r}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-BcZ1H5Sl.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";const o={headers:["Name","Type","Description"],data:[["ref","`React.MutableRefObject<HTMLElement>`","The reference to the element you want to detect hover on."],["handler","`() => void`","The function to call when a click outside is detected."]]},s={headers:["Name","Type","Description"],data:[["isHovered","boolean","Whether the element is currently hovered."]]};function a(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
`,e.jsx(n.h1,{id:"usehover",children:"useHover"}),`
`,e.jsx(n.p,{children:"This hook allows you to detect when the mouse is hovering over an element."}),`
`,e.jsx(n.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ref = useRef<HTMLButtonElement>(null)
const isHovered = useHover(ref)
return (
	<Button ref={ref} className="w-40 font-bold">
		{isHovered ? "It's hovered🎈" : 'Hover!'}
	</Button>
)
`})}),`
`,e.jsx(n.h2,{id:"api",children:e.jsx(n.strong,{children:"API"})}),`
`,e.jsxs(n.p,{children:["▸ ",e.jsx(n.strong,{children:"useHover"})," (",e.jsx(n.code,{children:"ref"}),"): ",e.jsx(n.em,{children:"boolean"})]}),`
`,e.jsx(n.p,{children:"This hook allows you to detect when the mouse is hovering over an element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsx(r,{headers:o.headers,data:o.data}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsx(r,{headers:s.headers,data:s.data}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(c,{})]})}function E(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{E as default};
