import PropTypes from 'prop-types';


const Textarea = ({value, onChange, name, label, rows, error}) => {

    return (
        <>

            <label htmlFor={`text-${name}`} className="form-label">
                {label}
            </label>

            <textarea
                id={`text-${name}`}
                name={name}
                className="form-control form-control-lg"
                autoComplete="off"
                rows={rows}
                style={{resize: 'none'}}
                value={value || ''}
                onChange={onChange}
            />

            <div className="fs-6 fw-bold text-danger mt-2">{error}</div>

        </>
    );
};

Textarea.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    rows: PropTypes.number,
    error: PropTypes.string
};

export default Textarea;
