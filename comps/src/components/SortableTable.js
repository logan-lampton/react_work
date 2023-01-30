import { useState } from 'react';
import Table from './Table';

// take all the props and pass them through to Table.js
function SortableTable(props) {
    // by default the table is unsorted
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        if(sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if(sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }
        return {
            ...column, header: () => <th onClick={() => handleClick(column.label)}>{column.label} IS SORTABLE</th>
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

            const reverseOrder = sortOrder === 'asc' ? 1: -1
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
            {sortOrder} - {sortBy}
            <Table {...props} config={updatedConfig} data={sortedData}/>
        </>
    )
};

export default SortableTable;