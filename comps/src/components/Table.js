function Table({ data }) {
    
    const fruitData = data.map((fruit) => {
        return (
            <tr key={fruit.name}>
                <td>{fruit.name}</td>
                <td className={fruit.color}></td>
                <td>{fruit.score}</td>
            </tr>
        );
    });
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Fruit</th>
                        <th>Color</th>
                        <th>Score</th>
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