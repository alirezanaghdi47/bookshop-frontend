import PropTypes from 'prop-types';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteCategory, readCategories} from '../../stores/action/categoryAction';


const CategoriesTable = ({categories}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdateCategoryStatus = async (id) => {
        await dispatch(deleteCategory(id, navigate));
        await dispatch(readCategories(`page=0&&limit=5`));
    };

    return (
        <div className="container-fluid p-0">

            <div className="row g-3">

                <div className="col-24">

                    <div className="table-responsive remove-scrollbar">

                        <table className="table">

                            <thead className="table-primary">
                            <tr>
                                <th className="fs-5 fw-bold text-center text-truncate">عنوان</th>
                                <th className="fs-5 fw-bold text-center text-truncate">عنوان ( انگلیسی )</th>
                                <th className="text-center text-truncate">...</th>
                            </tr>
                            </thead>

                            <tbody className="table-white">
                                {
                                    categories && categories?.map((category, index) => (
                                            <tr key={index}>
                                                <td className="fs-5 text-center text-truncate">{category.name}</td>
                                                <td className="fs-5 text-center text-truncate">{category.slug}</td>
                                                <td className="text-center text-truncate">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <Link
                                                            to={`/account/categories/${category._id}/edit`}
                                                            className="btn btn-link btn-sm link-warning ms-2"
                                                        >
                                                            <i className="far fa-pen fs-5"/>
                                                        </Link>
                                                        <button
                                                            className="btn btn-link btn-sm link-danger ms-2"
                                                            onClick={() => handleUpdateCategoryStatus(category._id)}
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

CategoriesTable.prototype = {
    categories: PropTypes.array
};

export default CategoriesTable;
