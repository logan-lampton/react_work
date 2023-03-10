import Button from '../components/Button';

// npm install react-icons
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    
    const handleClick = () => {
        console.log('Clicked!');
    }

    // button props
        // rounded: true or false
        // outline: true or false
        // purpose: generally a string that says what the purpose of the button is: "primary, secondary, success, warning, danger."

    return (
        <>
        <div>
            <Button className = "mb-5" primary rounded onClick={handleClick}><GoBell />Click Me!</Button>
        </div>
        <div>
            <Button className = "mb-5" warning outline><GoCloudDownload />No Me!</Button>
        </div>
        <div>
            <Button className = "mb-5" success><GoDatabase />I'm the Button to Click!</Button>
        </div>
        <div>
            <Button className = "mb-5" danger rounded>Not Me Please</Button>
        </div>
        <div>
            <Button className = "mb-5" secondary outline>These buttons, Amiright?!?</Button>
        </div>
        </>
    )
}

export default ButtonPage;