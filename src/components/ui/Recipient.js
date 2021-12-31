import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Recipient = ({user}) => {

    return (
        <div className="card vstack gap-3 h-100 p-3">

            <div className="d-flex justify-content-start align-items-center">
                <div className="d-flex justify-content-start align-items-center">
                    <i className="far fa-user-circle fs-5 text-gray w-max-content ms-2"/>
                    <span className="fs-5 fw-bold text-gray w-max-content">نام و نام خانوادگی :</span>
                </div>

                <span className="fs-5 fw-bold text-dark text-truncate me-2">{user?.name}</span>
            </div>

            <div className="d-flex justify-content-start align-items-center">
                <div className="d-flex justify-content-start align-items-center">
                    <i className="far fa-building fs-5 text-gray w-max-content ms-2"/>
                    <span className="fs-5 fw-bold text-gray w-max-content">کد پستی :</span>
                </div>

                <span className="fs-5 fw-bold text-dark text-truncate me-2">{user?.postalCode}</span>
            </div>

            <div className="d-flex justify-content-start align-items-center">
                <div className="d-flex justify-content-start align-items-center">
                    <i className="far fa-map-marker-alt fs-5 text-gray w-max-content ms-2"/>
                    <span className="fs-5 fw-bold text-gray w-max-content">آدرس :</span>
                </div>

                <span className="fs-5 fw-bold text-dark text-truncate me-2">{user?.address}</span>
            </div>

            <div className="d-flex justify-content-start align-items-center">
                <Link to="/account/profile" className="fs-6 fw-bold text-danger text-decoration-none">
                    اگر مشخصات صحیح نیست کلیک کنید
                </Link>
            </div>

        </div>
    );
};

Recipient.prototype = {
    user: PropTypes.object
};

export default Recipient;
