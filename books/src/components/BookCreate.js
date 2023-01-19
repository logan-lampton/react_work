// modify state for 'books' in the App.js component

import { useState } from 'react';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // call onCreate on the title provided; user creates a new book
    // to call on the submit event for the form
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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