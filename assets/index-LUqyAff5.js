import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as h,d as o,e as c}from"./index-C7Osh1g5.js";import{u as d,E as a}from"./index.stories-CkYwC17n.js";import{T as m}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-BDPGHngB.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";const s={headers:["Name","Type","Description"],data:[["height","number","The height of the screen."],["width","number","The width of the screen."]]};function r(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
`,e.jsx(t.h1,{id:"usescreensize",children:"useScreenSize"}),`
`,e.jsx(t.p,{children:`This hook is used to get the screen size of the window. It returns an object with the height and width of the screen.
SSR compatible.`}),`
`,e.jsx(t.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const { height, width } = useScreensize()
return (
	<div className="flex flex-col items-center gap-4">
		<p>Height: {height}</p>
		<p>Width: {width}</p>
	</div>
)
`})}),`
`,e.jsx(t.h2,{id:"api",children:e.jsx(t.strong,{children:"API"})}),`
`,e.jsxs(t.p,{children:["▸ ",e.jsx(t.strong,{children:"useScreenSize"})," (): ",e.jsx(t.code,{children:"{height: number, width: number}"})]}),`
`,e.jsx(t.p,{children:"This hook is used to get the screen size of the window. It returns an object with the height and width of the screen."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Returns:"})}),`
`,e.jsx(m,{headers:s.headers,data:s.data}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(c,{})]})}function M(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{M as default};
