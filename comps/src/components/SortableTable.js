import Table from './Table';

// take all the props and pass them through to Table.js
function SortableTable(props) {
    const { config } = props;

    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }
        return {
            ...column, header: () => <th>{column.label} IS SORTABLE</th>
        };
    });

    // by passing in config as a prop AFTER ...props, it will override any differences
    return <Table {...props} config={updatedConfig} />
};

export default SortableTable;