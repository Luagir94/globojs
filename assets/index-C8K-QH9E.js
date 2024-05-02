import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as c,d as r}from"./index-C7Osh1g5.js";import{u as l,E as d}from"./index.stories-DUz-05Bc.js";import{T as a}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-BDPGHngB.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";const n={headers:["Name","Type","Description"],data:[["ref","React.MutableRefObject<HTMLElement>","The reference to the element you want to detect clicks outside of."],["handler","`() => void`","The function to call when a click outside is detected."]]};function o(s){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(t.h1,{id:"useclickoutside",children:e.jsx(t.strong,{children:"useClickOutside"})}),`
`,e.jsx(t.p,{children:"This hook allows you to detect clicks outside of a specified element."}),`
`,e.jsxs(t.h2,{id:"example-",children:[e.jsx(t.strong,{children:"Example"})," :"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const ref = useRef<HTMLButtonElement>(null)
const [clicksOutside, setClicksOutside] = useState(0)
const callback = () => {
	setClicksOutside(prev => prev + 1)
}
const hook = useClickOutside(ref, callback)
return (
	<>
		<Button ref={ref} className="font-bold">
			Click outside!
		</Button>

		<p>Clicks outside: {clicksOutside}</p>
	</>
)
`})}),`
`,e.jsx(t.h2,{id:"api",children:e.jsx(t.strong,{children:"API"})}),`
`,e.jsxs(t.p,{children:["▸ ",e.jsx(t.strong,{children:"useClickOutside"}),"(",e.jsx(t.code,{children:"ref"}),", ",e.jsx(t.code,{children:"callback"}),"): ",e.jsx(t.em,{children:"void"})]}),`
`,e.jsx(t.p,{children:"This hook allows you to detect clicks outside of a specified element."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsx(a,{headers:n.headers,data:n.data}),`
`,e.jsx(r,{of:d,preview:!0})]})}function b(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{b as default};
