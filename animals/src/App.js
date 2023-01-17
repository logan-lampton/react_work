import { useState } from 'react';

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

    return(
        <div>
            {/* handleClick is a prop for the button below */}
            {/* handleClick is a reference; doesn't call immediately; want to call in the future when the user clicks, NOT when the app is rendered */}
            <button onClick={handleClick}>Add Animal</button>
            <div>{animals}</div>
        </div>
    )
}

export default App;