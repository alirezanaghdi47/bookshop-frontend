import PropTypes from 'prop-types';
import Select from "react-select";

//=================//
//===== style =====//
//=================//

import '../../../styles/module/react-select.scss';


const SelectBox = ({value, setFieldValue, name, label, placeholder, error, options}) => {

    const selected = options && options.find((option) => option.value === value);

    return (
        <>

            <label htmlFor={`select-${name}`} className="form-label">
                {label}
            </label>

            <Select
                options={options}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder={selected ? selected?.label : placeholder}
                defaultValue={selected?.value}
                onChange={(option) => setFieldValue(name, option.value)}
            />

            <div className="fs-6 fw-bold text-danger mt-2">{error}</div>

        </>
    );
};

SelectBox.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    setFieldValue: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.array
};

export default SelectBox;
