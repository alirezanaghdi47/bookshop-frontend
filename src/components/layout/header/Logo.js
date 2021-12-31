import {Link, useLocation} from 'react-router-dom';
import {useMediaQuery} from "react-responsive";

//=====================//
//===== component =====//
//=====================//

import Image from "../../../core/Image";


const Logo = () => {

    const location = useLocation();
    const isMobile = useMediaQuery({minWidth: 576});

    return (
        <Link
            to="/"
            className={`text-inline fs-5 fw-bold ${ location.pathname === '/' ? 'text-primary' : 'text-dark'} text-decoration-none`}
        >

            <Image
                src={process.env.PUBLIC_URL + '/images/logo192.png'}
                alt="فروشگاه کتاب"
                width={30}
                height={30}
                className="img-fluid bg-light rounded object-center object-cover ms-3"
                placeholderSrc={process.env.PUBLIC_URL + '/images/placeholder.png'}
            />

            {isMobile && "فروشگاه کتاب"}

        </Link>
    );
};

export default Logo;
