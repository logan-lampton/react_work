import { useState } from 'react';

function Dropdown( {options, selection, onSelect} ) {
    // define state
    const [isOpen, setIsOpen] = useState(false);

    // create event handler for clicking on 'Select...'
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    // event handler for clicking on an individual option
    const handleOptionClick = (option) => {
        // close dropdown
        setIsOpen(false);
        // what option was clicked on?
            // need to pass option from the map below
                // onClick={() => handleOptionClick(option)}
        onSelect(option);
    }

    // map the options prop; use option.value as the key
    const renderedOptions = options.map((option) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })
    
    let content = 'Select...';
    if(selection) {
        content = selection.label;
    }

    return (
        <>
            <div onClick={handleClick}>{content}</div>
            {/* JS Boolean expression; won't render if !isOpen */}
            {isOpen && <div>{renderedOptions}</div>}
        </>
    )
}

export default Dropdown;