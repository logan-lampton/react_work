function App() {

    const handleClick = () => {
        console.log('Button was clicked!');
    }

    return(
        <div>
            {/* handleClick is a prop for the button below */}
            <button onClick={handleClick}>Add Animal
            </button>
        </div>
    )
}

export default App;