// will create a submit callback function to pass to SearchBar via props, in order to detect the user term/pressing 'enter'
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        // calling term in the input as passed from SearchBar.js
        const result = await searchImages(term);

        setImages(result);
    };
    
    return <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images} />
    </div>
}

export default App;