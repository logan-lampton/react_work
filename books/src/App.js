import { useState } from 'react';
// be sure to import axios
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    // create a state array for all the books, called 'books'
    const [books, setBooks] = useState([]);

    // instead of 'title: title' in updatedBooks, we can just write 'title'
    // React doesn't talk to the server, so we are using axios
    // For a request, we need async/await
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        const updatedBooks = [
            ...books, 
            response.data
        ];
        // response.data is the exact data we created
        setBooks(updatedBooks);
    };

    // delete using filter
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    // edit using map
    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return { ...book, title: newTitle };
            } return book;
        });
        setBooks(updatedBooks);
    };

    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate onCreate={createBook} />
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        </div>
    )
};

export default App;