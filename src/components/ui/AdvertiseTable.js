import PropTypes from 'prop-types';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteAdvertise, readAdvertises} from '../../stores/action/advertiseAction';


const AdvertiseTable = ({advertises}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteAdvertise = async (id) => {
        await dispatch(deleteAdvertise(id, navigate));
        await dispatch(readAdvertises(`page=0&&limit=5`));
    };

    return (
        <div className="container-fluid p-0">

            <div className="row g-3">

                <div className="col-24">

                    <div className="table-responsive remove-scrollbar">

                        <table className="table">

                            <thead className="table-primary">
                                <tr>
                                    <th className="fs-5 fw-bold text-center text-truncate">تبلیغ متعلق به</th>
                                    <th className="fs-5 fw-bold text-center text-truncate">وضعیت انتشار</th>
                                    <th className="text-center text-truncate">...</th>
                                </tr>
                            </thead>

                            <tbody className="table-white">
                                {
                                    advertises && advertises?.map((advertise, index) => (
                                            <tr key={index}>
                                                <td className="fs-5 text-center text-truncate">{advertise?.book?.name}</td>
                                                <td className="fs-5 text-center text-truncate">
                                                    <span className={`badge w-max-content fs-6 fw-bold ${advertise?.isPublished ? 'bg-success text-white' : 'bg-warning text-dark'} p-2 mx-auto`}>
                                                      {advertise?.isPublished ? 'منتشر شده' : 'منتشر نشده'}
                                                    </span>
                                                </td>
                                                <td className="text-center text-truncate">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <Link
                                                            to={`/account/advertises/${advertise?._id}/edit`}
                                                            className="btn btn-link btn-sm link-warning ms-2"
                                                        >
                                                            <i className="far fa-pen fs-5"/>
                                                        </Link>
                                                        <button
                                                            className="btn btn-link btn-sm link-danger ms-2"
                                                            onClick={() => handleDeleteAdvertise(advertise?._id)}
                                                        >
                                                            <i className="far fa-trash-alt fs-5"/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
};

AdvertiseTable.prototype = {
    advertises: PropTypes.array
};

export default AdvertiseTable;
