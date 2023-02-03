import { useSelector, useDispatch } from 'react-redux';
// the action creators
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();
    
    const {cars, name} = useSelector(({form, cars: {data, searchTerm} }) => {
        // filter
        const filteredCars = data.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // the carsSlice big state object was named 'cars' and has an array with a key of 'data'
        return {
            cars: filteredCars,
            name: form.name
        };
    });
    
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        // decide if a car should be bold
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
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