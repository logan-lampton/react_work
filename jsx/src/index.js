// 1) Import the React and ReactDOM libraries
// React library defines what a component is and how multiple components work together
import React from 'react';
// ReactDOM library knows how to get a component to show up in the browser
// ReactDOM is for computers, React Native is for mobile devices
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
// (referencing the element of root in the index.html file)
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
    const inputType = 'number';
    const minValue = 5;

    // props declared in the return must have:
        // double quotes for strings
        // curly braces for numbers

    // can't display an object ex: {config}, but you CAN use an object as a prop of something else
        // ex: <input abc={config} />
    return (
        <input style={{border: '3px solid red'}} type={inputType} min={minValue} max={10}/>
    );
}

// 5) Show the component on the screen
root.render(<App />)


// JSX rules
// 1. All prop names follow camelCase
    // Ex: <input maxLength={5} />
// 2. Number attributes use curly braces
    // Ex: {50}
// 3. Boolean 'true' can be written with just the property name. False should be written with curly braces
    // Ex for true: <input spellCheck />
    // Ex for false: <input spellCheck={false} />
// 4. The 'class attribute is written as 'className'
    // Ex: <li className="item" />
// 5. In-line styles are provided as objects
    // Ex: <div style={{ textDecoration: 'none', padding: '5px' }}/>