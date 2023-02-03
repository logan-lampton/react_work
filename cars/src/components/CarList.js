import { useSelector, useDispatch } from 'react-redux';
// the action creators
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();
    
    const cars = useSelector(({ cars: {data, searchTerm} }) => {
        // filter
        return data.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // the carsSlice big state object was named 'cars' and has an array with a key of 'data'
    });
    
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>{car.name} - ${car.cost}
                </p>
                <button 
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        );
    });

    return(
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    )
};

export default CarList;