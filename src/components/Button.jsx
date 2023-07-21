const Button = ({ children, onClick, variation = 'primary', ...rest }) => {
    return (
        <button
            type="button"
            className={`btn ${variation}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
