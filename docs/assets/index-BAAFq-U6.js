import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as s,C as a,d as l}from"./index-BU8AWNBC.js";import{u as c,E as i}from"./index.stories-BSSY6kpu.js";import"./index-uubelm5h.js";import"./iframe-Cv4Re9Kd.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(e.h1,{id:"usecounter",children:"useCounter"}),`
`,t.jsx(e.h2,{id:"this-hook-allows-you-to-create-a-counter-with-increment-decrement-reset-and-set-value-functions",children:"This hook allows you to create a counter with increment, decrement, reset, and set value functions."}),`
`,t.jsx(e.h3,{id:"example-",children:"Example :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`	const { value, increment, decrement, reset, setValue } = useCounter(\r
		args.initialValue\r
	)\r
	return (\r
		<div className="flex items-center gap-4">\r
			<Button onClick={() => reset()} className="w-20 font-bold">\r
				Reset\r
			</Button>\r
			<Button onClick={() => decrement()} className="w-10 font-bold">\r
				-1\r
			</Button>\r
			<p className="w-4 font-bold text-center">{value}</p>\r
			<Button onClick={() => increment()} className="w-10 font-bold">\r
				+1\r
			</Button>\r
			<Button onClick={() => setValue(73)} className="w-20 font-bold">\r
				Set 73\r
			</Button>\r
		</div>\r
	)
`})}),`
`,t.jsx(e.h2,{id:"also-you-can-set-attr-hasnegatives-to-true-to-allow-negative-values",children:'Also you can set Attr "hasNegatives" to true to allow negative values.'}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`	const { value, increment, decrement, reset, setValue } = useCounter(\r
		args.initialValue,\r
		true\r
	)\r
	return (\r
		<div className="flex items-center gap-4">\r
			<Button onClick={() => reset()} className="w-20 font-bold">\r
				Reset\r
			</Button>\r
			<Button onClick={() => decrement()} className="w-10 font-bold">\r
				-1\r
			</Button>\r
			<p className="w-4 font-bold text-center">{value}</p>\r
			<Button onClick={() => increment()} className="w-10 font-bold">\r
				+1\r
			</Button>\r
			<Button onClick={() => setValue(73)} className="w-20 font-bold">\r
				Set 73\r
			</Button>\r
		</div>\r
	)
`})}),`
`,t.jsx(a,{of:i}),`
`,t.jsx(l,{})]})}function N(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{N as default};
