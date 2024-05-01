import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as r,C as i,d as l}from"./index-KLjg69Wx.js";import{u as h,E as c}from"./index.stories-_4UJpIvT.js";import"./index-uubelm5h.js";import"./iframe-BxR5b1zE.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:h}),`
`,e.jsx(t.h1,{id:"usetoggle",children:"useToggle"}),`
`,e.jsx(t.p,{children:"This hook is used to toggle between two states. It returns an object with the current state and a function to toggle the state."}),`
`,e.jsx(t.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`	const {toggle, handleToggle } = useToggle()
	return <Button onClick={handleToggle}>{JSON.stringify(toggle)}</Button>
`})}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h2,{id:"api",children:e.jsx(t.strong,{children:"API"})}),`
`,e.jsxs(t.p,{children:["▸ ",e.jsx(t.strong,{children:"useToggle"}),"  (): ",e.jsx(t.code,{children:"{toggle: boolean, handleToggle: function}"})]}),`
`,e.jsx(t.p,{children:"This hook is used to toggle between two states. It returns an object with the current state and a function to toggle the state."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsx(t.p,{children:"None"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Returns:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:" toggle "}),e.jsxs("td",{children:[" ",e.jsx(t.code,{children:"boolean"})," "]}),e.jsx("td",{children:" The current state of the toggle. "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:" handleToggle "}),e.jsxs("td",{children:[" ",e.jsx(t.code,{children:"function"})," "]}),e.jsx("td",{children:" The function to toggle the state. "})]})]})]}),`
`,e.jsx(l,{})]})}function C(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{C as default};
