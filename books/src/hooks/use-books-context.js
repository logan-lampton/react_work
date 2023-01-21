import { useContext } from 'react';
import BooksContext from '../context/books';

// creating a custom hook to save writing out useContext(BooksContext) in most components
function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;