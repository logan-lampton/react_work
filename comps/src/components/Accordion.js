// define state in Accordion, since no other components need access
import { useState } from 'react';
// event handlers should be in the same component as the state it modifies

// React icons library imports
// They can then be used as components </> syntax
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

// NOTE: JS doesn't show booleans on the screen (true, false, null, undefined)
    // || gives the first truthy value
    //  && gives back the first falsey value or the last truthy value

function Accordion({ items }) {
    // state
    // by default the first item (index 0) will be expanded
    const [expandedIndex, setExpandedIndex] = useState(0);
    
    // good to have event handler outside of the mapping function to avoid cluttering it, if we want one that gets longer
    const handleClick = (nextIndex) => {
        setExpandedIndex(nextIndex);
    };

    // remember to assign a key using the id on the highest element
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = 
        <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
        return(
            <div key={item.id}>
                <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
                <br></br>
            </div>
        )
    })
    
    return (
        <div className="border-x border-t rounded">{renderedItems}</div>
    )
}

export default Accordion;