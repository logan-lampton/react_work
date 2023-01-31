import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleChange = (event) => {
        // might want to use parseFloat instead
        // OR 0, makes the value 0 if the user doesn't provide one
        const value = parseInt(event.target.value) || 0;
        setValueToAdd(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCount(count + valueToAdd);
        setValueToAdd(0);
    };

    return (
        <>
            <Panel className="m-3">
                <h1 className="text-lg">Count is {count}</h1>
                <div className="flex flex-row">
                    <Button onClick={increment}>Increment</Button>
                    <Button onClick={decrement}>Decrement</Button>
                </div>
            </Panel>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                // || "" prevents the input from always having a "0"
                    value={valueToAdd || ""}
                    onChange={handleChange}
                    type="number" 
                    className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button>Add it!</Button>
            </form>
        </>
    );
}

export default CounterPage;