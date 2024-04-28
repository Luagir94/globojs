import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as t}from"./index-BU8AWNBC.js";import"./index-uubelm5h.js";import"./iframe-Cv4Re9Kd.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Installation",parameters:{viewMode:"docs"}}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`\r
import { useClickOutside } from 'globojs';\r
\r
function App() {\r
  const ref = useRef();\r
  useClickOutside(ref, () => {\r
    console.log('Clicked outside');\r
  });\r
\r
  return <div ref={ref}>Click outside me</div>;\r
}
`})}),`
`,e.jsx(n.h2,{id:"documentation",children:"Documentation"}),`
`,e.jsxs(n.p,{children:["For more information, check out the ",e.jsx(n.a,{href:"https://github.com/Luagir94/globojs",rel:"nofollow",children:"documentation"}),"."]})]})}function x(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{x as default};
