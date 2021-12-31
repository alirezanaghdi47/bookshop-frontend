import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {readOpenCart, updateCart} from '../../stores/action/cartAction';
import {formatPrice} from '../../utils/functions';


const Price = ({cart}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdateCart = async (cart) => {
        await dispatch(updateCart(cart, navigate));
        await dispatch(readOpenCart());
    };

    return (
        <div className="card p-3">

            <div className="container-fluid p-0">

                <div className="row g-3">

                    <div className="col-24 col-md-24 d-flex justify-content-between align-items-center">

                        <div className="d-flex align-items-center ms-2">
                            <i className="far fa-dollar-sign fs-5 text-gray ms-2"/>
                            <span className="fs-5 fw-bold text-gray">مبلغ پرداختی :</span>
                        </div>

                        <div className="d-flex align-items-center">
                              <span className="fs-4 fw-bold text-dark ms-2">
                                {formatPrice(cart?.totalPrice || 0)}
                              </span>
                            <span className="fs-6 fw-bold text-gray">تومان</span>
                        </div>

                    </div>

                    <div className="col-24 col-md-24 d-flex justify-content-center align-items-center">
                        <button
                            className={`btn btn-primary w-100 ${!cart || cart?.orders?.length === 0 ? 'disabled' : ''}`}
                            onClick={() => handleUpdateCart(cart)}
                        >
                            <i className="fas fa-credit-card-front fs-5 ms-3"/>
                            پرداخت کنید
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

Price.prototype = {
    cart: PropTypes.object
};

export default Price;
