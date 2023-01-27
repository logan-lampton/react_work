import Table from '../components/Table';

function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 3 },
        { name: 'Apple', color: 'bg-red-500', score: 5 },
        { name: 'Banna', color: 'bg-yellow-400', score: 4 },
        { name: 'Lime', color: 'bg-green-400', score: 4 },
    ];

    const config = [
        { 
            label: 'Name',
            render: (fruit) => fruit.name,
        },
        { 
            label: 'Color',
            render: (fruit) => fruit.color,
        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,
        },
    ];

    return(
        <div>
            <Table data={data} config={config} />
        </div>
    );
};

export default TablePage;