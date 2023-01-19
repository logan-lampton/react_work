import { useState } from 'react';
import BookCreate from './components/BookCreate';

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

    return(
        <div>
            <BookCreate onCreate={createBook} />
        </div>
    )
};

export default App;