import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Addressbar = ({book}) => {

    return (

        <ul className="list-group list-group-horizontal text-truncate">

            <li className="list-group-item">
                <Link to="/" className="fs-5 fw-bold text-gray text-decoration-none">
                    خانه
                </Link>
            </li>

            <li className="list-group-item px-0">
                <i className="far fa-chevron-left fs-5 text-gray my-1"/>
            </li>

            <li className="list-group-item">
                <Link to="/books" className="fs-5 fw-bold text-gray text-decoration-none">
                    کتاب ها
                </Link>
            </li>

            <li className="list-group-item px-0">
                <i className="far fa-chevron-left fs-5 text-gray my-1"/>
            </li>

            <li className="list-group-item">
                <span className="fs-5 fw-bold text-dark">{book?.name}</span>
            </li>

        </ul>
    );
};

Addressbar.prototype = {
    book: PropTypes.object
};

export default Addressbar;
