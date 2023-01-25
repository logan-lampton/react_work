import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

// 'to' is the path to navigate to, 'children' is any text to display in the anchor element
function Link({ to, children }) {
    // we are grabbing the navigate function from NavigationContext, via useContext and using destructuring to declare it all on one line
    const { navigate } = useNavigation();

    const classes = classNames('text-blue-500');
    
    const handleClick = (event) => {
        // to allow Ctrl+C or metaKey (Mac) to open a new window
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };
    
    return (
        <div>
            <a className={classes} href={to} onClick={handleClick}>{children}</a>
        </div>
    )    
}

export default Link;