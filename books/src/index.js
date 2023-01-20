import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

// App component and all of its children can make use of the values from the Provider
root.render(
    <Provider>
        <App />
    </Provider>
);