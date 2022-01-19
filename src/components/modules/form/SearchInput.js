import PropTypes from 'prop-types';


const SearchInput = ({value, onChange, onSubmit, name, placeholder}) => {

    const handleChange = async (value) => {
        await onChange(value);
        await onSubmit();
    };

    const handleClear = async () => {
        await onChange('');
        await onSubmit();
    };

    return (
        <>
            <div className="position-relative w-100">

                {
                    value.length > 0 && (
                        <button
                            className="position-absolute btn btn-icon btn-sm"
                            style={{top: 7, right: 7}}
                            onClick={handleClear}
                            type="reset"
                        >
                            <i className="far fa-times fs-4 text-danger"/>
                        </button>
                    )
                }

                <input
                    type="text"
                    id={`text-${name}`}
                    name={name}
                    className={`form-control form-control-lg ${value.length > 0 ? 'pe-5' : 'pe-3'} ps-5`}
                    autoComplete="off"
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={(e) => handleChange(e.target.value)}
                />

                <i className="position-absolute" style={{top: 13, left: 13}}>
                    <i className="far fa-search fs-4 text-gray"/>
                </i>

            </div>

        </>
    );
};

SearchInput.prototype = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string
};

export default SearchInput;
