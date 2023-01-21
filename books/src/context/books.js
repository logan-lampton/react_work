import { createContext, useState } from 'react';
// be sure to import axios
import axios from 'axios';
const BooksContext = createContext();

function Provider({ children }) {

    // create a state array for all the books, called 'books'
    const [books, setBooks] = useState([]);

    const showBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

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
    const deleteBookById = async (id) => {
       await axios.delete(`http://localhost:3001/books/${id}`);
       
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    // edit using map
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return { ...book, ...response.data };
            } return book;
        });
        setBooks(updatedBooks);
    };

    return(
        <BooksContext.Provider value={{}}>
            {children}
        </BooksContext.Provider>

    )
};

// Provider exported with a named export
export { Provider };
export default BooksContext;