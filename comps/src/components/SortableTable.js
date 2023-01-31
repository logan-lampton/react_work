import { useState } from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

// take all the props and pass them through to Table.js
function SortableTable(props) {
    // by default the table is unsorted
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        if(sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if(sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if(sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if(sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }
        
        return {
            ...column, 
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        };
    });

    // Only sort data if sortOrder && sortBy are not null
    // Make a copy of the data prop
        // NEVER modify a prop
    let sortedData = data;
    if(sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1: -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            };
        });
    };

    // by passing in config as a prop AFTER ...props, it will override any differences
    return (
        <>
            <Table {...props} config={updatedConfig} data={sortedData}/>
        </>
    )
};

function getIcons(label, sortBy, sortOrder) {
    if(label !== sortBy) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        )
    }

    if(sortOrder === null) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        )
    } else if (sortOrder === 'asc') {
        return <GoArrowSmallUp />
    } else {
        return <GoArrowSmallDown />
    }
}

export default SortableTable;