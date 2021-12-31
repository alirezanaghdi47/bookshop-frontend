import PropTypes from 'prop-types';
import {formatPrice, formatDate} from '../../utils/functions';


const Bill = ({cart}) => {

    return (
        <div className="card vstack gap-3 p-3">

            <div className="d-flex justify-content-start align-items-center">
                <div className="d-flex justify-content-start align-items-center">
                    <i className="far fa-receipt fs-5 text-gray w-max-content ms-2"/>
                    <span className="fs-5 fw-bold text-gray w-max-content">کد پیگیری :</span>
                </div>

                <span className="fs-5 fw-bold text-dark text-truncate me-2">{cart?._id}</span>
            </div>

            <div className="d-flex justify-content-start align-items-center">
                <div className="d-flex justify-content-start align-items-center">
                    <i className="far fa-clock fs-5 text-gray w-max-content ms-2"/>
                    <span className="fs-5 fw-bold text-gray w-max-content">زمان سفارش :</span>
                </div>

                <span className="fs-5 fw-bold text-dark text-truncate me-2">
                  {formatDate(cart?.updatedAt)}
                </span>
            </div>

            <div className="d-flex justify-content-start align-items-center">
                <div className="d-flex justify-content-start align-items-center">
                    <i className="far fa-dollar-sign fs-5 text-gray w-max-content ms-2"/>
                    <span className="fs-5 fw-bold text-gray w-max-content">مبلغ کل :</span>
                </div>

                <div className="d-flex align-items-center text-truncate me-2">
                    <span className="fs-4 fw-bold text-dark ms-2">{formatPrice(cart?.totalPrice)}</span>
                    <span className="fs-6 fw-bold text-gray">تومان</span>
                </div>
            </div>

        </div>
    );
};

Bill.prototype = {
    cart: PropTypes.object
};

export default Bill;
