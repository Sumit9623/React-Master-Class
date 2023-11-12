
// React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
// React is a tool for building UI components.

// Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory,
// where it does all the necessary manipulating, before making the changes in the browser DOM.

// React finds out what changes have been made, and changes only what needs to be changed.

// React lets you create components, reusable UI elements for your app.
// In a React app, every piece of UI is a component.
// React components are regular JavaScript functions except:
    // Their names always begin with a capital letter.
    // They return JSX markup.


// Rules
// 1) It is good practice to make one Js file for one component
// 2) use export defualt for single component file
// 3) Component name start with Capital letter


// Importing and exporting
// Make a new JS file to put the components in.
// Export your function component from that file (using either default or named exports).
// Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).

// Default	--->     export default function Button() {}    --->	import Button from './Button.js';
// Named	--->     export function Button() {}	        --->    import { Button } from './Button.js';

