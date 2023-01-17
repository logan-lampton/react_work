import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

// console.log(getRandomAnimal());

function App() {

    // array destructuring to set the initial state value and update it in the function call
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    // .map takes an array and returns a new array with properties we assign
    const renderedAnimals = animals.map(((animal, index) => {
        // the type and key are properties
        // key={index} is a property that we should add to all maps
        return <AnimalShow type={animal} key={index} />
    }))

    return(
        <div>
            {/* handleClick is a prop for the button below */}
            {/* handleClick is a reference; doesn't call immediately; want to call in the future when the user clicks, NOT when the app is rendered */}
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimals}</div>
        </div>
    )
}

export default App;