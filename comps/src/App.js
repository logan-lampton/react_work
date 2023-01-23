import Button from './Button';

function App() {
    
    // button props
        // rounded: true or false
        // outline: true or false
        // purpose: generally a string that says what the purpose of the button is: "primary, secondary, success, warning, danger."

    return (
        <>
        <div>
            <Button success rounded outline>Click Me!</Button>
        </div>
        <div>
            <Button danger outline>No Me!</Button>
        </div>
        <div>
            <Button warning>I'm the Button to Click!</Button>
        </div>
        <div>
            <Button primary rounded>Not Me Please</Button>
        </div>
        <div>
            <Button danger outline>These buttons, Amiright?!?</Button>
        </div>
        </>
    )
}

export default App;