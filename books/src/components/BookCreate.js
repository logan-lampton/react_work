// modify state for 'books' in the App.js component
import { useState, useContext } from 'react';
// the BooksContext import is from up one directory, so '..'
import BooksContext from '../context/books'

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // call createBook on the title provided; user creates a new book
    // to call on the submit event for the form
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;