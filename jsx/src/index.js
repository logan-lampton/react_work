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
    let message = 'Bye there!'
    if(Math.random() > 0.5){
        message = 'Hello there!';
    }
    return <h1>{message}</h1>;
}

// 5) Show the component on the screen
root.render(<App />)