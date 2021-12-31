import PropTypes from 'prop-types';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteBook, readBooks} from '../../stores/action/bookAction';
import {formatPrice} from '../../utils/functions';


const BooksTable = ({books}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteBook = async (id) => {
        await dispatch(deleteBook(id, navigate));
        await dispatch(readBooks(`page=0&&limit=5`));
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
                                <th className="fs-5 fw-bold text-center text-truncate">موجودیت ( جلد )</th>
                                <th className="fs-5 fw-bold text-center text-truncate">قیمت ( تومان )</th>
                                <th className="fs-5 fw-bold text-center text-truncate">تخفیف</th>
                                <th className="fs-5 fw-bold text-center text-truncate">وضعیت انتشار</th>
                                <th className="text-center text-truncate">...</th>
                            </tr>
                            </thead>

                            <tbody className="table-white">

                                {
                                    books && books?.map((book, index) => (
                                            <tr key={index}>
                                                <td className="fs-5 text-center text-truncate">{book?.name}</td>
                                                <td className="fs-5 text-center text-truncate">{book?.numberInStock}</td>
                                                <td className="fs-5 text-center text-truncate">{formatPrice(book?.price)}</td>
                                                <td className="fs-5 text-center text-truncate">{book?.discount} %</td>
                                                <td className="fs-5 text-center text-truncate">
                                                    <span className={`badge w-max-content fs-6 fw-bold ${book?.isPublished ? 'bg-success text-white' : 'bg-warning text-dark'}  p-2 mx-auto`}>
                                                      {book?.isPublished ? 'منتشر شده' : 'منتشر نشده'}
                                                    </span>
                                                </td>
                                                <td className="text-center text-truncate">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <Link
                                                            to={`/books/${book?._id}`}
                                                            className="btn btn-link btn-sm link-primary ms-2"
                                                        >
                                                            <i className="far fa-info fs-5"/>
                                                        </Link>
                                                        <Link
                                                            to={`/account/books/${book?._id}/edit`}
                                                            className="btn btn-link btn-sm link-warning ms-2"
                                                        >
                                                            <i className="far fa-pen fs-5"/>
                                                        </Link>
                                                        <button
                                                            className="btn btn-link btn-sm link-danger ms-2"
                                                            onClick={() => handleDeleteBook(book?._id)}
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

BooksTable.prototype = {
    books: PropTypes.array
};

export default BooksTable;
