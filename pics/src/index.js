import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';

// run the function with the get request for the Unsplash API
searchImages();

// boilerplate to create the React app
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(<App />);