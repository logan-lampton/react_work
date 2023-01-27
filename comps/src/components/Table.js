function Table({ data, config }) {
    
    const fruitData = data.map((fruit) => {
        return (
            <tr className="border-b" key={fruit.name}>
                <td className="p-3">{fruit.name}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${fruit.color}`}></div>
                </td>
                <td className="p-3">{fruit.score}</td>
            </tr>
        );
    });

    const renderedHeaders = config.map((column) => {
        return (
            <th key={column.label}>{column.label}</th>    
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
                    {fruitData}
                </tbody>
            </table>
        </>
    );
};

export default Table;