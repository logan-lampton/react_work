import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown( {options, value, onChange} ) {
    // define state
    const [isOpen, setIsOpen] = useState(false);

    // directly references where we put this in the JSX in the Dropdown component return
    const divEl = useRef();

    // The purpose of this function is to close the dropdown if the user clicks somewhere else while it is open
    // empty array to only call on the first page render ([])
    // use a cleanUp function
    useEffect(() => {
        const handler = (event) => {
            // check to make sure that the element that useRef() is assigned to is rendered Ex: it might be hidden sometimes
            if(!divEl.current) {
                return;
            }
            if(!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

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
            <div ref={divEl} className="w-48 relative">
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