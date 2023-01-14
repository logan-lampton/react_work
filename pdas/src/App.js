import ProfileCard from './ProfileCard';
// if we are including images in our project itself, we will use the format below to import it.
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}/>
            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}/>
            <ProfileCard title="Siri" handle="@siri01" image={SiriImage}/>
        </div>
    );
}

export default App;