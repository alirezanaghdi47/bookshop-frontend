import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {formatBytes} from '../../../utils/functions';

//=================//
//===== style =====//
//=================//

import '../../../styles/module/react-dropzone.scss';


const FileInput = ({
                       label,
                       name,
                       value,
                       setFieldValue,
                       preview,
                       placeholder,
                       acceptFiles,
                       maxSize,
                       error
                   }) => {

    const [file, setFile] = useState({});
    const {getRootProps, getInputProps, open} = useDropzone({
        accept: acceptFiles,
        maxSize: maxSize,
        maxFiles: 1,
        onDrop: async (files) => {
            await setFieldValue(name, files[0]);
            await setFile(
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
                {...!preview ? getRootProps() : null}
                className={`position-relative d-flex ${(file?.preview && value) || preview ? 'justify-content-start' : 'justify-content-center'} align-items-center form-control form-control-lg border-dashed p-2 cursor-pointer`}
                style={{height: '10rem'}}
            >
                {
                    ((file?.preview && value) || preview) && (
                        <aside className="ms-3">
                            <img
                                src={file.preview || preview}
                                alt={file.name}
                                className="img-fluid bg-light rounded object-center object-cover"
                                style={{maxHeight: '8.75rem'}}
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
                    file?.preview && value && (
                        <button
                            className="position-absolute top-0 start-0 btn btn-icon btn-rounded btn-danger m-3"
                            onClick={handleClear}
                        >
                            <i className="far fa-trash-alt fs-5"/>
                        </button>
                    )
                }

                {
                    (!file?.preview || !value) && !preview && (
                        <p className="fs-6 fw-bold text-gray mb-2"> {placeholder} ( حداکثر ۱ مگابایت ) </p>
                    )
                }

                {
                    preview && (
                        <button
                            className="position-absolute top-0 start-0 btn btn-icon btn-rounded btn-warning m-3"
                            onClick={open}
                        >
                            <i className="far fa-pen fs-5"/>
                        </button>
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
    preview: PropTypes.string,
    placeholder: PropTypes.string,
    acceptFiles: PropTypes.string,
    maxSize: PropTypes.number,
    error: PropTypes.string
};

export default FileInput;
