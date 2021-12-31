import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {formatDate, formatPrice} from '../../utils/functions';


const OrdersTable = ({carts}) => {

    return (
        <div className="container-fluid p-0">

            <div className="row g-3">

                <div className="col-24">

                    <div className="table-responsive remove-scrollbar">

                        <table className="table">

                            <thead className="table-primary">
                            <tr>
                                <th className="fs-5 fw-bold text-center text-truncate">کد پیگیری</th>
                                <th className="fs-5 fw-bold text-center text-truncate">زمان سفارش</th>
                                <th className="fs-5 fw-bold text-center text-truncate">مبلغ کل ( تومان )</th>
                                <th className="text-center text-truncate">...</th>
                            </tr>
                            </thead>

                            <tbody className="table-white">
                            {
                                carts && carts?.map((cart, index) => (
                                        <tr key={index}>
                                            <td className="fs-5 text-center text-truncate">{cart?._id}</td>
                                            <td className="fs-5 text-center text-truncate">
                                                {formatDate(cart?.updatedAt)}
                                            </td>
                                            <td className="fs-5 text-center text-truncate">
                                                {formatPrice(cart?.totalPrice)}
                                            </td>
                                            <td className="text-center text-truncate">
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <Link
                                                        to={`/account/orders/${cart?._id}`}
                                                        className="btn btn-link btn-sm link-primary ms-2"
                                                    >
                                                        <i className="far fa-info fs-5"/>
                                                    </Link>
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

OrdersTable.prototype = {
    carts: PropTypes.array
};

export default OrdersTable;
