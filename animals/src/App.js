import { useState } from 'react';

function App() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return(
        <div>
            {/* handleClick is a prop for the button below */}
            {/* handleClick is a reference; doesn't call immediately; want to call in the future when the user clicks, NOT when the app is rendered */}
            <button onClick={handleClick}>Add Animal</button>
            <div>
                Number of animals: {count}
            </div>
        </div>
    )
}

export default App;