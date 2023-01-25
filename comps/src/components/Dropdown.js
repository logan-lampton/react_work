import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown( {options, value, onChange} ) {
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
        onChange(option);
    }

    // map the options prop; use option.value as the key
    const renderedOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })

    return (
        <>
            <div className="w-48 relative">
                <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    {/* if there is a selection, show value.label; OR (so, if not) show 'Select...' */}
                    {value?.label || 'Select...'}
                    <GoChevronDown className="text-lg"/>
                </Panel>
                {/* JS Boolean expression; won't render if !isOpen */}
                {isOpen && <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>}
            </div>
        </>
    )
}

export default Dropdown;