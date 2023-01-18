// component contains a text input that a user will type into
// when a user presses the 'enter' key in the text input, we need to do a search

// Function will turn a search term into an array of image objects
// Array of image objects needs to get into the ImageList component

import { useState } from 'react';

function SearchBar({ onSubmit }) {
   const [term, setTerm] = useState('');
    
    // be sure to use the method preventDefault() to prevent the page from reloading
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit('dragons');
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return ( 
    <div>
        {/* if you put an input within a form and press 'enter', a submit event is triggered */}
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
    );
}

export default SearchBar;