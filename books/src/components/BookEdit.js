// input values always use state
import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
    // use book.title, as 'book is an object with key value pairs of more than the title'
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useBooksContext;

    // handleChange to grab what the user types as the new title
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // handleSubmit, which updates state when the user submits the title
    // 'title' is in scope in the BookEdit function
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    };
    
    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;