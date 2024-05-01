import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as c,d as l,e as u}from"./index-BSBaF1Kh.js";import{u as d,E as m}from"./index.stories-D8ad5O9c.js";import{T as o}from"./index-BCQa5bFN.js";import"./index-uubelm5h.js";import"./iframe-OlD4JLSQ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";const s={headers:["Name","Type","Description"],data:[["initialValue","number","The initial value of the counter."],["hasNegatives","boolean","If true, allows negative values."]]},a={headers:["Name","Type","Description"],data:[["value","number","The current value of the counter."],["increment","`() => void`","A function to increment the counter."],["decrement","`() => void`","A function to decrement the counter."],["reset","`() => void`","A function to reset the counter to its initial value."],["setValue","`(value: number) => void`","A function to set the counter to a specific value."]]};function r(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:d}),`
`,t.jsx(e.h1,{id:"usecounter",children:"useCounter"}),`
`,t.jsx(e.h2,{id:"this-hook-allows-you-to-create-a-counter-with-increment-decrement-reset-and-set-value-functions",children:"This hook allows you to create a counter with increment, decrement, reset, and set value functions."}),`
`,t.jsx(e.h3,{id:"example-",children:"Example :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`const { value, increment, decrement, reset, setValue } = useCounter(
	args.initialValue,
)
return (
	<div className="flex items-center gap-4">
		<Button onClick={() => reset()} className="w-20 font-bold">
			Reset
		</Button>
		<Button onClick={() => decrement()} className="w-10 font-bold">
			-1
		</Button>
		<p className="w-4 font-bold text-center">{value}</p>
		<Button onClick={() => increment()} className="w-10 font-bold">
			+1
		</Button>
		<Button onClick={() => setValue(73)} className="w-20 font-bold">
			Set 73
		</Button>
	</div>
)
`})}),`
`,t.jsx(e.h2,{id:"also-you-can-set-attr-hasnegatives-to-true-to-allow-negative-values",children:'Also you can set Attr "hasNegatives" to true to allow negative values.'}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`const { value, increment, decrement, reset, setValue } = useCounter(
	args.initialValue,
	true,
)
return (
	<div className="flex items-center gap-4">
		<Button onClick={() => reset()} className="w-20 font-bold">
			Reset
		</Button>
		<Button onClick={() => decrement()} className="w-10 font-bold">
			-1
		</Button>
		<p className="w-4 font-bold text-center">{value}</p>
		<Button onClick={() => increment()} className="w-10 font-bold">
			+1
		</Button>
		<Button onClick={() => setValue(73)} className="w-20 font-bold">
			Set 73
		</Button>
	</div>
)
`})}),`
`,t.jsxs(e.h2,{id:"api",children:["API"," "]}),`
`,t.jsxs(e.p,{children:["▸ ",t.jsx(e.strong,{children:"useCounter"})," (",t.jsx(e.code,{children:"initialValue"}),", ",t.jsx(e.code,{children:"hasNegatives"}),"): ",t.jsx(e.code,{children:"{ value: number, increment: function, decrement: function, reset: function, setValue: function }"})]}),`
`,t.jsx(e.p,{children:"This hook allows you to create a counter with increment, decrement, reset, and set value functions."}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Parameters:"})}),`
`,t.jsx(o,{headers:s.headers,data:s.data}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Returns:"})}),`
`,t.jsx(o,{headers:a.headers,data:a.data}),`
`,t.jsx(l,{of:m}),`
`,t.jsx(u,{})]})}function V(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{V as default};
