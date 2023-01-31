// If used (not used here), the immer library allows you to change state directly in reducer
    // (in terminal) npm install immer 
    // import produce from 'immer'
    // wrap reducer in useReducer witch produce
        // useReducer(produce(reducer), {...})
    // Ex: case INCREMENT COUNT:
        // state.count = state.count + 1;
        // return;

import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

// community conventions to prevent typos
    // variable mispellings throw error messages, unlike strings
const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

// No async/await, requests, promises or outside variables in reducer functions
// NEVER directly modify the state object
// could use if statements, switch statement is below
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT: 
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            };
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            };
        // add the value from the form to count, then reset the form (valueToAdd = 0)
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            };
        // no matter what, at least return the current state
        default: 
            return state;
    }
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
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handleChange = (event) => {
        // might want to use parseFloat instead
        // OR 0, makes the value 0 if the user doesn't provide one
        const value = parseInt(event.target.value) || 0;
        // if we need to pass a value, add a payload
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
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