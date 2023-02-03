// useDispatch to pass to state
    // passing to formSlice
// useSelector to access state
    // accessing the name values in carsSlice
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
    const dispatch = useDispatch();

    // destructure out the name and cost
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    // || 0, is error handling for if the result is not a number
    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }))
    };

    return(
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name:</label>
                        <input 
                            className="input is-expanded" 
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost:</label>
                        <input 
                            className="input is-expanded" 
                            // cost || '' gets rid of a '0' always showing in the input
                            value={cost || ''}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                </div>
                <div>
                    <button className='button is-link'>Submit</button>
                </div>
            </form>
        </div>
    )
};

export default CarForm;