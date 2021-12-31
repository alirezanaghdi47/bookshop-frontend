import PropTypes from 'prop-types';
import Cleave from 'cleave.js/react';


const NumberInput = ({value, onChange, name, label, placeholder, error, options}) => {

    return (
        <>

            <label htmlFor={`number-${name}`} className="form-label">
                {label}
            </label>

            <Cleave
                id={`number-${name}`}
                name={name}
                className="form-control form-control-lg"
                autoComplete="off"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                options={options}
            />

            <div className="fs-6 fw-bold text-danger mt-2">{error}</div>

        </>
    );
};

NumberInput.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.object
};

export default NumberInput;
