
## Virtual DOM

The Virtual DOM is a lightweight copy of the real DOM maintained by React.

- When changes occur, React first updates the Virtual DOM instead of the real DOM.
- It then compares the updated Virtual DOM with the previous version (diffing process).
- Only the changed parts are updated in the real DOM.

👉 This makes React faster and more efficient because it avoids unnecessary updates to the actual DOM.

## JSX & Babel

### JSX
JSX (JavaScript XML) is a syntax extension that allows us to write HTML-like code inside JavaScript.

Example:
```jsx
const Demo = () => {
    return <h1>Hello World</h1>;
};
```

👉 JSX is not understood by browsers directly.

---

### Babel
Babel is a JavaScript compiler (transpiler) that converts JSX and modern JavaScript into browser-compatible JavaScript.

Example conversion:
```jsx
const element = <h1>Hello</h1>;
```

becomes:

```js
const element = React.createElement("h1", null, "Hello");
```

👉 Babel makes sure our React code works in all browsers.