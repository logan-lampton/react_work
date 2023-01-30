import { useState } from 'react';
import Table from './Table';

// take all the props and pass them through to Table.js
function SortableTable(props) {
    // by default the table is unsorted
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config } = props;

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

    // by passing in config as a prop AFTER ...props, it will override any differences
    return (
        <>
            {sortOrder} - {sortBy}
            <Table {...props} config={updatedConfig} />
        </>
    )
};

export default SortableTable;