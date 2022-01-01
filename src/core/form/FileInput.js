import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {formatBytes} from '../../utils/functions';

//=================//
//===== style =====//
//=================//

import '../../styles/core/react-dropzone.scss';


const FileInput = ({
                       label,
                       name,
                       value,
                       setFieldValue,
                       placeholder,
                       acceptFiles,
                       maxSize,
                       error
                   }) => {

    const [file, setFile] = useState({});
    const {getRootProps, getInputProps} = useDropzone({
        accept: acceptFiles,
        maxSize: maxSize,
        maxFiles: 1,
        onDrop: (files) => {
            setFieldValue(name, files[0]);
            setFile(
                Object.assign(files[0], {
                    preview: URL.createObjectURL(files[0])
                })
            );
        }
    });

    const handleClear = async (e) => {
        e.stopPropagation();
        await setFile({});
        await setFieldValue(name, {});
    };

    useEffect(() => {
            URL.revokeObjectURL(file.preview);
            // eslint-disable-next-line
        }, [file]
    );

    return (
        <>
            <label htmlFor={`file-${name}`} className="form-label">
                {label}
            </label>

            <div
                {...getRootProps()}
                className={`position-relative d-flex ${file?.preview && value ? 'justify-content-start' : 'justify-content-center'} align-items-center form-control form-control-lg border-dashed p-2 cursor-pointer`}
                style={{height: '10rem'}}
            >
                {
                    file?.preview && value && (
                        <aside className="ms-3 me-1">
                            <img
                                src={file.preview}
                                alt={file.name}
                                className="img-fluid w-100 h-100 bg-light rounded object-center object-cover"
                                style={{maxHeight: '8rem'}}
                            />
                        </aside>
                    )
                }

                {
                    file?.preview && value && (
                        <div className="d-flex flex-column justify-content-center align-items-start text-truncate">
                            <p className="fs-4 fw-bold text-dark text-center mb-2">{value?.name}</p>
                            <span className="fs-6 fw-bold text-gray">{formatBytes(value?.size)}</span>
                        </div>
                    )
                }

                {
                    file?.preview && value ? (
                        <button
                            className="position-absolute top-0 start-0 btn btn-icon btn-rounded btn-danger m-2"
                            onClick={handleClear}>
                            <i className="far fa-trash-alt fs-5"/>
                        </button>
                    ) : (
                        <p className="fs-5 fw-bold text-gray">{placeholder}</p>
                    )
                }

                <input {...getInputProps()} id={`file-${name}`}/>

            </div>

            <div className="fs-6 fw-bold text-danger mt-2">{error}</div>

        </>
    );
};

FileInput.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.object || undefined,
    setFieldValue: PropTypes.func,
    placeholder: PropTypes.string,
    acceptFiles: PropTypes.string,
    maxSize: PropTypes.number,
    error: PropTypes.string
};

export default FileInput;
