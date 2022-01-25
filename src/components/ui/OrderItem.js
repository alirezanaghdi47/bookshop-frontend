import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {formatPrice} from '../../utils/functions';

//=====================//
//===== component =====//
//=====================//

import Image from '../modules/Image';


const OrderItem = ({order}) => {

    return (
        <article className="card h-100">

            <div className="card-header">

                <Link
                    to={`/books/${order?.book?._id}`}
                    className="d-flex justify-content-center align-items-center p-3">
                    <Image
                        src={order?.book?.imageUrl}
                        alt={order?.book?.name}
                        width="100%"
                        height="100%"
                        className="img-fluid bg-light rounded object-cover object-center"
                        style={{minHeight: 130}}
                        placeholderSrc={process.env.PUBLIC_URL + '/images/placeholder.png'}
                    />
                </Link>

            </div>

            <div className="card-body vstack gap-3">

                <Link
                    to={`/books/${order?.book?._id}`}
                    className="fs-4 fw-bold text-dark text-center text-decoration-none">
                    {order?.book?.name}
                </Link>

                <div className="d-flex justify-content-center align-items-center mb-2">
                      <span className="badge bg-secondary fs-5 fw-bold text-dark rounded px-2 py-1 ms-3">
                        x {order?.entity}
                      </span>
                    <span className="fs-3 fw-bold text-dark ms-2">{formatPrice(order?.orderPrice)}</span>
                    <span className="fs-5 fw-bold text-gray">تومان</span>
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

OrderItem.prototype = {
    order: PropTypes.object
};

export default OrderItem;
