import PropTypes from 'prop-types';


const TextInput = ({value, onChange, name, label, placeholder, error, disabled}) => {

    return (
        <>

            <label htmlFor={`text-${name}`} className="form-label">
                {label}
            </label>

            <input
                type="text"
                id={`text-${name}`}
                name={name}
                className="form-control form-control-lg"
                autoComplete="off"
                placeholder={placeholder}
                value={value || ''}
                onChange={onChange}
                disabled={disabled}
            />

            <div className="fs-6 fw-bold text-danger mt-2">{error}</div>

        </>
    );
};

TextInput.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool
};

export default TextInput;
