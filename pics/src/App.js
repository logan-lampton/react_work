// will create a submit callback function to pass to SearchBar via props, in order to detect the user term/pressing 'enter'

import SearchBar from './components/SearchBar';

function App() {

    const handleSubmit = (term) => {
        console.log('Do a search with', term);
    };
    
    return <div>
        <SearchBar onSubmit={handleSubmit}/>
    </div>
}

export default App;