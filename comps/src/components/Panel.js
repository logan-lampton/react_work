// utilize classnames library
import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    );

    return(
        // ...rest will pass through any additional props passed through
        <div {...rest} className={finalClassNames}>
            {children}
        </div>
    )
}

export default Panel;