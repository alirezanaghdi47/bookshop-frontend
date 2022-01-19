import PropTypes from 'prop-types';


const RadioBox = ({value, selected, onChange, name, label}) => {

    return (
        <>

            <div className="form-check">

                <input
                    type="radio"
                    id={`radio-${value}`}
                    className="form-check-input"
                    name={name}
                    value={value}
                    onChange={onChange}
                    checked={value === selected}
                />

                <label className="form-check-label" htmlFor={`radio-${value}`}>
                    {label}
                </label>

            </div>

        </>
    );
};

RadioBox.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    selected: PropTypes.string
};

export default RadioBox;
