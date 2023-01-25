import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    // initial state is whatever pathname the user was going to
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);
        // clean up function
        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    // 'to' is the path we are navigating to
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return(
        // sharing currentPath and navigate with the entire app
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;