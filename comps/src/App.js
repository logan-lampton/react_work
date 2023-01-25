import Link from './components/Link';
import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

function App() {
    
    return ( 
        <>
        <Link to="/accordion">Go to accordion</Link>
        <Link to="/dropdown">Go to dropdown</Link>
        <Link to="/buttons">Go to buttons</Link>
        <div>
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/dropdown">
                <DropdownPage />
            </Route>
            <Route path="/buttons">
                <ButtonPage />
            </Route>
        </div>
        </>
    )
}

export default App;