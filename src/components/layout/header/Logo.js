import {Link, useLocation} from 'react-router-dom';

//=====================//
//===== component =====//
//=====================//

import Image from "../../../core/Image";


const Logo = () => {

    const location = useLocation();

    return (
        <Link
            to="/"
            className={`text-inline text-decoration-none`}
        >

            <Image
                src={process.env.PUBLIC_URL + '/images/logo192.png'}
                alt="فروشگاه کتاب"
                width={30}
                height={30}
                className="img-fluid bg-light rounded object-center object-cover me-3"
                placeholderSrc={process.env.PUBLIC_URL + '/images/placeholder.png'}
            />

            <span className={`fs-5 fw-bold ${location.pathname === '/' ? 'text-primary' : 'text-dark'} me-3`}>
                فروشگاه کتاب
            </span>

        </Link>
    );
};

export default Logo;
