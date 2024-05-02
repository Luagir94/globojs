import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as i,d as a}from"./index-DG0CEvpq.js";import{u as p,E as c}from"./index.stories-U4taWeuh.js";import{T as d}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-B01_tvB-.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";const e={headers:["Name","Type","Description"],data:[["copy","`function`","A function that takes a string and copies it to the clipboard."]]};function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:p}),`
`,o.jsx(t.h1,{id:"usecopytoclipboard",children:"useCopyToClipboard"}),`
`,o.jsx(t.h2,{id:"this-hook-allows-you-to-copy-text-to-the-clipboard",children:"This hook allows you to copy text to the clipboard."}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`const { copy } = useCopyToClipboard()
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
`,o.jsx(t.h2,{id:"api",children:o.jsx(t.strong,{children:"API"})}),`
`,o.jsxs(t.p,{children:["▸ ",o.jsx(t.strong,{children:"useCopyToClipboard"})," ( ): ",o.jsx(t.code,{children:"*{ copy:function}*"})]}),`
`,o.jsx(t.p,{children:"This hook allows you to copy text to the clipboard."}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Returns:"})}),`
`,o.jsx(d,{headers:e.headers,data:e.data}),`
`,o.jsx(a,{of:c})]})}function k(n={}){const{wrapper:t}={...s(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{k as default};
