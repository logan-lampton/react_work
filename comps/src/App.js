import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import Link from './components/Link';

function App() {
    
    return ( 
        <>
        <ButtonPage />
        <AccordionPage />
        <DropdownPage />
        <Link to="/accordion">Go to accordion</Link>
        <Link to="/dropdown">Go to dropdown</Link>
        </>
    )
}

export default App;