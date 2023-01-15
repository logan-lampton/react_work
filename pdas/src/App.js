import ProfileCard from './ProfileCard';
// import Bulma CSS library we downloaded with "npm install bulma" in the terminal
// add extension to files that aren't JS files
import 'bulma/css/bulma.css';

// if we are including images in our project itself, we will use the format below to import it.
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
              <section className="section">
                <div className="columns">
                    <div className="column is-3">
                        <ProfileCard 
                            title="Alexa"
                            handle="@alexa99"
                            image={AlexaImage}
                            description="Alexa was created by Amazon and helps you buy things"
                        />
                    </div>
                    <div className="column is-3">
                        <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage}
                            description="Cortana was made by Microsoft and helps Master Chief"
                        />
                    </div>
                    <div className="column is-3">
                        <ProfileCard 
                            title="Siri" 
                            handle="@siri01" 
                            image={SiriImage}
                            description="Siri was created by Apple to help answer life's questions"
                        />
                    </div>
                </div>
              </section>
            </div>

        </div>
    );
}

export default App;