import { useEffect, useContext, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';
import axios from 'axios';

function App() {
    // utilize useContext; make a variable destructuring the showBooks function from BooksContext file
    const { fetchBooks } = useContext(BooksContext);

    // utilize useEffect to only fetch the books array, when the page is first rendered
    // [] as second argument means it is never called again after the first render
    useEffect(() => {
        fetchBooks()
    }, []);

    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate />
            <BookList />
        </div>
    )
};

export default App;