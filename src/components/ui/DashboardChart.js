import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {formatPrice} from '../../utils/functions';
import {admin_acl} from "../../utils/variables";


const DashboardChart = ({dashboard}) => {

    const acl = useSelector((state) => state.user.profile.acl);

    return (
        <div className="container-fluid card justify-content-center align-items-center p-3">

            <div className="row gx-3 gy-5 w-100">

                <div
                    className={`${acl === admin_acl ? 'col-24 col-sm-6' : 'col-12'} d-flex flex-column justify-content-center align-items-center`}>

                    <i className="fal fa-dollar-sign fs-1 text-gray mb-2"/>

                    <span className="fs-5 fw-bold text-gray mb-2">
                        {acl === admin_acl ? 'فروش' : 'خرید'}
                    </span>

                    <div className="d-flex justify-content-center align-items-center">
                        <span className="fs-4 fw-bold text-dark ms-1">
                          {formatPrice(dashboard?.totalPrice)}
                        </span>

                        <span className="fs-6 fw-bold text-gray">تومان</span>
                    </div>

                </div>

                {
                    acl === admin_acl && (
                        <div className="col-24 col-sm-6 d-flex flex-column justify-content-center align-items-center">
                            <i className="fal fa-book fs-1 text-gray mb-2"/>
                            <span className="fs-5 fw-bold text-gray mb-2"> کتاب</span>
                            <span className="fs-3 fw-bold text-dark">{dashboard?.booksCount}</span>
                        </div>
                    )
                }

                {
                    acl === admin_acl && (
                        <div className="col-24 col-sm-6 d-flex flex-column justify-content-center align-items-center">
                            <i className="fal fa-user-circle fs-1 text-gray mb-2"/>
                            <span className="fs-5 fw-bold text-gray mb-2"> کاربر</span>
                            <span className="fs-3 fw-bold text-dark">{dashboard?.usersCount}</span>
                        </div>
                    )
                }

                <div className={`${acl === admin_acl ? 'col-24 col-sm-6' : 'col-12'} d-flex flex-column justify-content-center align-items-center`}>
                    <i className="fal fa-shopping-bag fs-1 text-gray mb-2"/>
                    <span className="fs-5 fw-bold text-gray mb-2"> سفارش</span>
                    <span className="fs-3 fw-bold text-dark">{dashboard?.cartsCount}</span>
                </div>

            </div>

        </div>
    );
};

DashboardChart.prototype = {
    cart: PropTypes.object
};

export default DashboardChart;
