// Using the prop-types library
// npm install prop-types
import PropTypes from 'prop-types';

// CSS box model
    // margin -> border -> padding -> content

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

    return( 
        // use tailwind rules for:
            // padding, border-width, border-color, background-color, text-color
        <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>
    )
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