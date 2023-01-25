import { useState } from 'react';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import Dropdown from './components/Dropdown';

function App() {
    const [selection, setSelection] = useState(null);

    // updates selection, based on what the user selects
    const handleSelect = (option) => {
        setSelection(option);
    };
    
    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'}
    ];

    return ( 
        <>
        <ButtonPage />
        <AccordionPage />
        <Dropdown options={options} selection={selection} onSelect={handleSelect}/>
        </>
    )
}

export default App;