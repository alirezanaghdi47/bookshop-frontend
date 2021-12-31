import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createOrder, updateOrder, deleteOrder} from '../../stores/action/orderAction';
import {readOpenCart} from '../../stores/action/cartAction';
import {discountPrice, formatPrice} from '../../utils/functions';

//=====================//
//===== component =====//
//=====================//

import Image from '../../core/Image';


const ShoppingItem = ({order}) => {

    const dispatch = useDispatch();

    const handleCreateOrder = async (book) => {
        await dispatch(createOrder(book));
        await dispatch(readOpenCart());
    };

    const handleUpdateOrder = async (order, book) => {
        await dispatch(updateOrder(order, book));
        await dispatch(readOpenCart());
    };

    const handleDeleteOrder = async (order, book) => {
        await dispatch(deleteOrder(order, book));
        await dispatch(readOpenCart());
    };

    return (
        <article className="card h-100" style={{minHeight: 360}}>

            <div className="card-header">

                <div
                    className="position-absolute z-index-400 d-flex flex-column justify-content-center align-items-center"
                    style={{top: '1.5rem', right: '1.5rem'}}
                >

                    <button
                        className="btn btn-sm btn-icon btn-rounded btn-primary"
                        onClick={() => handleCreateOrder(order?.book)}>
                        <i className="far fa-plus fs-5"/>
                    </button>

                    <button
                        className="btn btn-sm btn-icon btn-rounded btn-primary my-2"
                        onClick={() => handleUpdateOrder(order, order?.book)}>
                        <i className="far fa-minus fs-5"/>
                    </button>

                    <button
                        className="btn btn-sm btn-icon btn-rounded btn-danger"
                        onClick={() => handleDeleteOrder(order, order?.book)}>
                        <i className="far fa-trash-alt fs-5"/>
                    </button>

                </div>

                <Link
                    to={`/books/${order?.book?._id}`}
                    className="d-flex justify-content-center align-items-center p-3">
                    <Image
                        src={order?.book?.imageUrl}
                        alt={order?.book?.name}
                        width="100%"
                        height="100%"
                        className="img-fluid bg-light rounded object-center object-cover"
                        style={{minHeight: 130}}
                        placeholderSrc={process.env.PUBLIC_URL + '/images/placeholder.png'}
                    />
                </Link>

            </div>

            <div className="card-body vstack gap-2">

                <Link
                    to={`/books/${order?.book?._id}`}
                    className="fs-4 fw-bold text-dark text-center text-truncate text-decoration-none mb-2">
                    {order?.book?.name}
                </Link>

                {
                    order?.book?.discount > 0 && (
                        <div className="d-flex justify-content-center align-items-center">
                            <span className="fs-5 fw-bold text-gray text-decoration-line-through">
                              {formatPrice(order?.book?.price)}
                            </span>

                            <span className="badge bg-danger fs-6 fw-bold text-white px-2 py-1 me-2">
                              {order?.book?.discount} %
                            </span>
                        </div>
                    )
                }

                <div className="d-flex justify-content-center align-items-center">
                      <span className="badge bg-secondary fs-5 fw-bold text-dark rounded px-2 py-1 ms-3">
                        x {order?.entity}
                      </span>

                     <span className="fs-3 fw-bold text-dark ms-2">
                        {formatPrice(discountPrice(order?.book?.price, order?.book?.discount))}
                      </span>

                      <span className="fs-6 fw-bold text-gray">تومان</span>
                </div>

            </div>

            <div className="card-footer hstack gap-3 p-3">

                <div className="d-flex justify-content-center align-items-center text-truncate w-50">
                    <span className="fs-6 fw-bold text-dark text-truncate">{order?.book?.authors}</span>
                </div>

                <span className="hr bg-secondary"/>

                <div className="d-flex justify-content-center align-items-center text-truncate w-50">
                  <span className="fs-6 fw-bold text-dark text-truncate">
                    {order?.book?.category?.name}
                  </span>
                </div>

            </div>

        </article>
    );
};

ShoppingItem.prototype = {
    order: PropTypes.object
};

export default ShoppingItem;
