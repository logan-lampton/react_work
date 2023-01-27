function Table({ data, config }) {
    // render the column headers
    const renderedHeaders = config.map((column) => {
        return (
            <th key={column.label}>{column.label}</th>    
        );
    });

    const renderedRows = data.map((fruit) => {
        // render the data for each row into each column
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(fruit)}</td>
        });
        return (
            <tr className="border-b" key={fruit.name}>
                {renderedCells}
            </tr>
        );
    });
    
    return (
        <>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
        </>
    );
};

export default Table;