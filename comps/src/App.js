import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import Sidebar from './components/Sidebar';

function App() {
    
    return ( 
        <>
        <Sidebar />
        <div>
            <Route path="/">
                <DropdownPage />
            </Route>
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/buttons">
                <ButtonPage />
            </Route>
        </div>
        </>
    )
}

export default App;