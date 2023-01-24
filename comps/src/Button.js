// Using the prop-types library
// npm install prop-types
// import PropTypes from 'prop-types';

// npm install classnames
import classnames from 'classnames';

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

    // JS keys can't have a dash (-) unless it is wrapped as a string ('')
    // first argument is any styling that we want for all buttons
    const classes = classnames('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger
    })

    return( 
        // use tailwind rules for:
            // padding, border-width, border-color, background-color, text-color
        <button className={classes}>{children}</button>
    );
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