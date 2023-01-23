// Using the prop-types library
// npm install prop-types
import PropTypes from 'prop-types';

// use the 'children' prop to have anything typed between the buttons appear, including other components like icons
function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    if(primary && secondary) {
        throw new Error('Primary and secondary should not be used on the same element');
    };

    return <button>{children}</button>;
}

// underneath the component
// Number() method is built in
// Number(true) = 1
// Number(!!undefined) = false / 0
Button.propTypes = {
    checkVariationProp: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!! success)
        + Number(!!danger)
        
        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, or danger can be true.')
        }
    }
};

export default Button;