import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as c,C as i,d as o}from"./index-BPB9T_ZN.js";import{u as l,E as d}from"./index.stories-BSSY6kpu.js";import"./index-uubelm5h.js";import"./iframe-CaeJXAJZ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:l}),`
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
`,t.jsx(i,{of:d}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsxs(e.p,{children:["▸ ",t.jsx(e.strong,{children:"useCounter"})," (",t.jsx(e.code,{children:"initialValue"}),", ",t.jsx(e.code,{children:"hasNegatives"}),"): ",t.jsx(e.code,{children:"{ value: number, increment: function, decrement: function, reset: function, setValue: function }"})]}),`
`,t.jsx(e.p,{children:"This hook allows you to create a counter with increment, decrement, reset, and set value functions."}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Parameters:"})}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Name "}),t.jsx("th",{children:" Type "}),t.jsx("th",{children:" Description "})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:" initialValue "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"number"})," "]}),t.jsx("td",{children:" The initial value of the counter. "})]}),t.jsxs("tr",{children:[t.jsx("td",{children:" hasNegatives "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"boolean"})," "]}),t.jsx("td",{children:" If true, allows negative values. "})]})]})]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Returns:"})}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Name "}),t.jsx("th",{children:" Type "}),t.jsx("th",{children:" Description "})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:" value "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"number"})," "]}),t.jsx("td",{children:" The current value of the counter. "})]}),t.jsxs("tr",{children:[t.jsx("td",{children:" increment "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"function"})," "]}),t.jsx("td",{children:" A function that increments the counter by 1. "})]}),t.jsxs("tr",{children:[t.jsx("td",{children:" decrement "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"function"})," "]}),t.jsx("td",{children:" A function that decrements the counter by 1. "})]}),t.jsxs("tr",{children:[t.jsx("td",{children:" reset "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"function"})," "]}),t.jsx("td",{children:" A function that resets the counter to its initial value. "})]}),t.jsxs("tr",{children:[t.jsx("td",{children:" setValue "}),t.jsxs("td",{children:[" ",t.jsx(e.code,{children:"function"})," "]}),t.jsx("td",{children:" A function that sets the counter to a specified value. "})]})]})]}),`
`,t.jsx(o,{})]})}function C(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{C as default};
