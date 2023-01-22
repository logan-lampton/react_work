// use the 'children' prop to have anything typed between the buttons appear, including other components like icons
function Button({ children }) {
    return <button>{children}</button>;
}

export default Button;