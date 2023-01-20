import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList({ books, onDelete, onEdit }) {
    // variables saved to the values from Provider
    // using destructuring to make variables assigned to those in Provider
    const { count, incrementCount } = useContext(BooksContext);
    
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />;
    });
    
    return (
        <div className="book-list">
            {/* show values from Context */}
            {count}
            <button onClick={incrementCount}>Click</button>
            {renderedBooks}
        </div>
    )
}

export default BookList;