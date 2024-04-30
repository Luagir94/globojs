import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as r,C as i,d as c}from"./index-PXwDmgVS.js";import{u as d,E as l}from"./index.stories--hq6OqE3.js";import"./index-uubelm5h.js";import"./iframe-3WSc1KCg.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";function e(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{of:d}),`
`,o.jsx(t.h1,{id:"usecopytoclipboard",children:"useCopyToClipboard"}),`
`,o.jsx(t.h2,{id:"this-hook-allows-you-to-copy-text-to-the-clipboard",children:"This hook allows you to copy text to the clipboard."}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`	const { copy } = useCopyToClipboard()
	const handleCopy = () => {
		copy('Globo🎈')
		alert('Copied to clipboard!')
	}

	return (
		<Button onClick={handleCopy} className="font-bold">
			{' '}
			Copy Globo🎈
		</Button>
	)
`})}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(t.h2,{id:"api",children:o.jsx(t.strong,{children:"API"})}),`
`,o.jsxs(t.p,{children:["▸ ",o.jsx(t.strong,{children:"useCopyToClipboard"})," (   ): ",o.jsx(t.code,{children:"*{ copy:function}*"})]}),`
`,o.jsx(t.p,{children:"This hook allows you to copy text to the clipboard."}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Returns:"})}),`
`,o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:" Name "}),o.jsx("th",{children:" Type "}),o.jsx("th",{children:" Description "})]})}),o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsx("td",{children:" copy "}),o.jsxs("td",{children:[" ",o.jsx(t.code,{children:"function"})," "]}),o.jsx("td",{children:" A function that takes a string and copies it to the clipboard. "})]})})]}),`
`,o.jsx(c,{})]})}function T(n={}){const{wrapper:t}={...s(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{T as default};
