import Button from './Button';

function App() {
    
    // button props
        // rounded: true or false
        // outline: true or false
        // purpose: generally a string that says what the purpose of the button is: "primary, secondary, success, warning, danger."

    return (
        <>
        <div>
            <Button primary rounded>Click Me!</Button>
        </div>
        <div>
            <Button warning outline>No Me!</Button>
        </div>
        <div>
            <Button success>I'm the Button to Click!</Button>
        </div>
        <div>
            <Button danger rounded>Not Me Please</Button>
        </div>
        <div>
            <Button secondary outline>These buttons, Amiright?!?</Button>
        </div>
        </>
    )
}

export default App;