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
            <BookCreate onCreate={createBook} />
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        </div>
    )
};

export default App;