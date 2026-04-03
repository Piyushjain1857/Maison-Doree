# Notes

1. Component first letter must be capital.
2. After creating react project delete the existing code in APP.jsx and write RAFCE to create sample component.
3. Run the project by writting npm run dev in terminal.
4. Always create the component inside the src.



## Virtual Dom

1. The Changes will no directly change in real DOM, so the frequent changes made by user will not affect to the page or server. Because the changes will manage by virtual DOM. That's why React acts faster.

## JSX & Babel

JSX is the extension to execute htmland js code in one page.

```jsx
const demo()=>{
    //logic
        return(
            <HTML>
        )
}
```

Babel is a JS compiler. Babel can compile JSX code into plain JS code that can be run in any modern wen browser.

## Named Export & Default Export 

Named export component must be rapped in a {} at the time of export and import. 