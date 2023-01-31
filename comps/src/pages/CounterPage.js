import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

// No async/await, requests, promises or outside variables in reducer functions
// NEVER directly modify the state object
const reducer = (state, action) => {
    if(action.type === 'increment') {
        return {
            ...state,
            count: state.count + 1
        };
    };
    if(action.type === 'decrement') {
        return {
            ...state,
            count: state.count - 1
        };
    };
    if(action.type === 'change-value-to-add') {
        return {
            ...state,
            valueToAdd: action.payload
        };
    };
    // no matter what, at least return the current state
    return state;
};

function CounterPage({ initialCount }) {
    // reducer state makes an object
        // state.count, state.valueToAdd
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            // can call the string whatever we want
            type: 'increment'
        });
    };

    const decrement = () => {
        dispatch({
            type: 'decrement'
        });
    };

    const handleChange = (event) => {
        // might want to use parseFloat instead
        // OR 0, makes the value 0 if the user doesn't provide one
        const value = parseInt(event.target.value) || 0;
        // if we need to pass a value, add a payload
        dispatch({
            type: 'change-value-to-add',
            payload: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    };

    return (
        <>
            <Panel className="m-3">
                <h1 className="text-lg">Count is {state.count}</h1>
                <div className="flex flex-row">
                    <Button onClick={increment}>Increment</Button>
                    <Button onClick={decrement}>Decrement</Button>
                </div>
            </Panel>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                // || "" prevents the input from always having a "0"
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number" 
                    className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button>Add it!</Button>
            </form>
        </>
    );
}

export default CounterPage;