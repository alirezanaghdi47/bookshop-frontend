import {useState} from 'react';
import PropTypes from 'prop-types';


const PasswordInput = ({value, onChange, name, label, placeholder, error}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>

            <label htmlFor={`text-${name}`} className="form-label">
                {label}
            </label>

            <div className="position-relative w-100">

                <input
                    type={showPassword ? 'text' : 'password'}
                    id={`text-${name}`}
                    name={name}
                    className="form-control form-control-lg pe-3 ps-5"
                    autoComplete="off"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />

                <button
                    className="position-absolute btn btn-icon btn-sm"
                    style={{top: 7, left: 7}}
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <i className={`far ${showPassword ? 'fa-eye-slash' : 'fa-eye'} fs-4 text-gray`}/>
                </button>

            </div>

            <div className="fs-6 fw-bold text-danger mt-2">{error}</div>

        </>
    );
};

PasswordInput.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.string
};

export default PasswordInput;
