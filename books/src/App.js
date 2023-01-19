import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
    // create a state array for all the books, called 'books'
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('Need to add book with title of ', title)
    };

    return(
        <div>
            <BookCreate onCreate={createBook} />
        </div>
    )
};

export default App;