import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as i,C as h,d}from"./index-KLjg69Wx.js";import{u as c,E as o}from"./index.stories-CkYwC17n.js";import"./index-uubelm5h.js";import"./iframe-BxR5b1zE.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(n.h1,{id:"usescreensize",children:"useScreenSize"}),`
`,e.jsx(n.p,{children:`This hook is used to get the screen size of the window. It returns an object with the height and width of the screen.
SSR compatible.`}),`
`,e.jsx(n.h3,{id:"example-",children:"Example :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`    const { height, width} =useScreensize()
	return (
		<div className="flex flex-col items-center gap-4">
            <p>
                Height: {height}
            </p>
            <p>
                Width: {width}
            </p>
		</div>
	)
`})}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(n.h2,{id:"api",children:e.jsx(n.strong,{children:"API"})}),`
`,e.jsxs(n.p,{children:["▸ ",e.jsx(n.strong,{children:"useScreenSize"}),"  (): ",e.jsx(n.code,{children:"{height: number, width: number}"})]}),`
`,e.jsx(n.p,{children:"This hook is used to get the screen size of the window. It returns an object with the height and width of the screen."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsx(n.p,{children:"None"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:" height "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"number"})," "]}),e.jsx("td",{children:" The height of the screen. "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:" width "}),e.jsxs("td",{children:[" ",e.jsx(n.code,{children:"number"})," "]}),e.jsx("td",{children:" The width of the screen. "})]})]})]}),`
`,e.jsx(d,{})]})}function S(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{S as default};
