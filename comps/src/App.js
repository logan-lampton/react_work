import Link from './components/Link';
import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

function App() {
    
    return ( 
        <>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Dropdown</Link>
        <Link to="/buttons">Buttons</Link>
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