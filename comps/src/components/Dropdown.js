import { useState } from 'react';

function Dropdown( {options} ) {
    // define state
    const [isOpen, setIsOpen] = useState(false);

    // create event handler
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    // map the options prop; use option.value as the key
    const renderedOptions = options.map((option) => {
        return (
            <div key={option.value}>
                {option.label}
            </div>
        )
    })
    
    return (
        <>
            <div onClick={handleClick}>Select...</div>
            {/* JS Boolean expression; won't render if !isOpen */}
            {isOpen && <div>{renderedOptions}</div>}
        </>
    )
}

export default Dropdown;