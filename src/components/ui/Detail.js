import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {createOrder} from '../../stores/action/orderAction';
import {readOpenCart} from '../../stores/action/cartAction';
import {discountPrice, formatPrice} from '../../utils/functions';


const Detail = ({book}) => {

    const dispatch = useDispatch();

    const handleCreateOrder = async (book) => {
        await dispatch(createOrder(book));
        await dispatch(readOpenCart());
    };

    return (
        <div
            className="col-24 col-sm-12 col-md-12 col-lg-12 col-xl-14 d-flex flex-column justify-content-center align-items-center">

            <div className="d-flex justify-content-center align-items-center mb-4">
                <h1 className="fs-2 fw-bold text-dark text-center line-height">{book?.name}</h1>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-4">
                <span className="fs-5 fw-bold text-gray w-max-content">دسته بندی :</span>
                <span className="fs-5 fw-bold text-dark text-truncate me-2">{book?.category?.name}</span>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-4">
                <span className="fs-5 fw-bold text-gray w-max-content">نویسنده :</span>
                <span className="fs-5 fw-bold text-dark text-truncate me-2">{book?.authors}</span>
            </div>

            {
                book?.numberInStock > 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center mb-2">
                        {
                            book.discount > 0 && (
                                <div className="d-flex justify-content-center align-items-center mb-1">
                                      <span className="badge bg-danger fs-6 fw-bold text-white rounded px-2 py-1 ms-3">
                                        {book?.discount} %
                                      </span>

                                      <span className="fs-4 fw-bold text-gray text-decoration-line-through">
                                        {formatPrice(book?.price)}
                                      </span>
                                </div>
                            )
                        }

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <span className="fs-2 fw-bold text-dark ms-2">
                              {formatPrice(discountPrice(book?.price, book?.discount))}
                            </span>
                            <span className="fs-5 fw-bold text-gray">تومان</span>
                        </div>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <span className="fs-3 fw-bold text-gray">ناموجود</span>
                    </div>
                )}

            <div className="d-flex justify-content-center align-items-center">
                <button
                    className="btn btn-primary"
                    disabled={book?.numberInStock === 0}
                    onClick={() => handleCreateOrder(book)}
                >
                    <i className="fas fa-shopping-bag fs-5 ms-3"/>
                    افزودن به سبد خرید
                </button>
            </div>

        </div>
    );
};

Detail.prototype = {
    book: PropTypes.object
};

export default Detail;
