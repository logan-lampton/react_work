import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);
    
    // if current path is equal to the path provided, return the children content, otherwise return nothing
    if(path === currentPath) {
        return children;
    }
    return null;
};

export default Route;