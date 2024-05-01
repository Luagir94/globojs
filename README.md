


# GloboJS

![globojslogo](./public/imagotipos/imagotipo1bg.png)

Momentarily, this is a React Hooks library that provides a set of hooks to help you build your React applications. Opportunely this library
can migrate to a full-fledged UI with hooks library in the future. It's a work in progress, and we are working hard to make it better every day.

## Installation

To install the package, run:

```bash
npm install globojs
```

```bash
yarn add globojs
```

```bash
pnpm add globojs
```

```bash
bun add globojs
```

## Usage

To use the package, import the package and use the hooks:

```jsx

import { useClickOutside } from 'globojs';

function App() {
  const ref = useRef();
  useClickOutside(ref, () => {
    console.log('Clicked outside');
  });

  return <div ref={ref}>Click outside me</div>;
}
```

## Demo

See the [Demo](https://luagir94.github.io/globojs/)

## Repository

See the [Repository](https://github.com/Luagir94/globojs) to see the source code.

## Changelog

See the [Changelog](https://github.com/Luagir94/globojs/releases) to see the latest changes.

## The creator

This library was created by [Luciano Giraudi](https://lucianogiraudi.com). He is a full-stack developer and loves to build things that help others.
