import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as t}from"./index-FeUjBnvO.js";import{M as r}from"./index-C-1OGmOA.js";import"./index-uubelm5h.js";import"./iframe-BcZ1H5Sl.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Installation",parameters:{viewMode:"docs"}}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To install the package, run:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install globojs
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add globojs
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add globojs
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`bun add globojs
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"To use the package, import the package and use the hooks:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useClickOutside } from 'globojs'

function App() {
	const ref = useRef()
	useClickOutside(ref, () => {
		console.log('Clicked outside')
	})

	return <div ref={ref}>Click outside me</div>
}
`})}),`
`,e.jsx(n.h2,{id:"documentation",children:"Documentation"}),`
`,e.jsxs(n.p,{children:["For more information, check out the ",e.jsx(n.a,{href:"https://github.com/Luagir94/globojs",rel:"nofollow",children:"documentation"}),"."]})]})}function x(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{x as default};
