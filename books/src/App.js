import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    // create a state array for all the books, called 'books'
    const [books, setBooks] = useState([]);

    // instead of 'title: title' in updatedBooks, we can just write 'title'
    const createBook = (title) => {
        const updatedBooks = [
            ...books, 
            { id: Math.floor(Math.random() * 999), title }
        ];
        setBooks(updatedBooks);
        console.log(books);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    return(
        <div className="app">
            <BookCreate onCreate={createBook} />
            <BookList books={books} onDelete={deleteBookById} />
        </div>
    )
};

export default App;