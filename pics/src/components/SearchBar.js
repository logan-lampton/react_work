// component contains a text input that a user will type into
// when a user presses the 'enter' key in the text input, we need to do a search

// Function will turn a search term into an array of image objects
// Array of image objects needs to get into the ImageList component

function SearchBar() {
    // be sure to use the method preventDefault() to prevent the page from reloading
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('I need to tell the parent about some data');
    }

    return ( 
    <div>
        {/* if you put an input within a form and press 'enter', a submit event is triggered */}
        <form onSubmit={handleFormSubmit}>
            <input />
        </form>
    </div>
    );
}

export default SearchBar;