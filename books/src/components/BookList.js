import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList() {
    // variables saved to the values from Provider
    // using destructuring to make variables assigned to those in Provider
    const { books } = useContext(BooksContext);

    // can use props alongside Context and in this case, far easier to map the exact book we want here, than to use Context in the BookShow component
    const renderedBooks = books?.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });
    
    return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;