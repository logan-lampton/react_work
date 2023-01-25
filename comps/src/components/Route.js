import useNavigation from '../hooks/use-navigation';

function Route({ path, children }) {
    const { currentPath } = useNavigation();
    
    // if current path is equal to the path provided, return the children content, otherwise return nothing
    if(path === currentPath) {
        return children;
    }
    return null;
};

export default Route;