import Button from './Button';

// npm install react-icons
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
    
    // button props
        // rounded: true or false
        // outline: true or false
        // purpose: generally a string that says what the purpose of the button is: "primary, secondary, success, warning, danger."

    return (
        <>
        <div>
            <Button primary rounded><GoBell />Click Me!</Button>
        </div>
        <div>
            <Button warning outline><GoCloudDownload />No Me!</Button>
        </div>
        <div>
            <Button success><GoDatabase />I'm the Button to Click!</Button>
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