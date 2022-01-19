import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useDropzone} from "react-dropzone";

//=================//
//===== style =====//
//=================//

import '../../../styles/module/react-dropzone.scss';


const AvatarInput = ({
                         label,
                         name,
                         value,
                         setFieldValue,
                         placeholder,
                         preview,
                         acceptFiles,
                         maxSize,
                         onRemove,
                         error
                     }) => {

    const [file, setFile] = useState({});
    const {getRootProps, getInputProps} = useDropzone({
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

    const handleDelete = async (e) => {
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
                className="position-relative d-flex justify-content-center align-items-center form-control form-control-lg border-dashed p-2 cursor-pointer"
                style={{width: '10rem', height: '10rem'}}
            >
                {
                    ((file?.preview && value) || preview) && (
                        <aside className="w-100 h-100 bg-light rounded">
                            <img
                                src={file.preview || preview}
                                alt="عکس پروفایل"
                                width="100%"
                                height="100%"
                                style={{maxHeight: '8.75rem'}}
                                className="img-fluid bg-light rounded object-center object-cover"
                            />
                        </aside>
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
                    preview && (
                        <button
                            className="position-absolute top-0 start-0 btn btn-icon btn-rounded btn-danger m-3"
                            onClick={handleDelete}
                        >
                            <i className="far fa-trash-alt fs-5"/>
                        </button>
                    )
                }

                {
                    !file?.preview && !preview && (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div
                                className="d-flex justify-content-center align-items-center bg-light rounded-circle mb-2"
                                style={{width: 50, height: 50}}>
                                <i className="fas fa-user fs-3 text-gray"/>
                            </div>
                            <p className="fs-6 fw-bold text-gray">{placeholder}</p>
                        </div>
                    )
                }

                <input {...getInputProps()} id={`file-${name}`}/>

            </div>

            <div className="fs-6 fw-bold text-danger mt-2">{error}</div>

        </>
    );
};

AvatarInput.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.object || undefined,
    setFieldValue: PropTypes.func,
    onRemove: PropTypes.func,
    placeholder: PropTypes.string,
    preview: PropTypes.string,
    acceptFiles: PropTypes.string,
    maxSize: PropTypes.number,
    error: PropTypes.string
};

export default AvatarInput;
