import {Link, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useMediaQuery} from 'react-responsive';

//=====================//
//===== component =====//
//=====================//

import Image from "../../../core/Image";


const Actionbar = () => {

    const location = useLocation();
    const isMobile = useMediaQuery({maxWidth: 576});
    const {token, name, avatarUrl} = useSelector((state) => state.user.profile);

    return (
        <>

            <Link
                to="/cart"
                className={`btn btn-sm btn-link ${location.pathname === '/cart' ? 'link-primary' : 'link-gray'} position-relative ms-2`}
            >
                <i className={`far fa-shopping-bag fs-3 ${!isMobile ? 'ms-2' : ''}`}/>
                {!isMobile && 'سبد خرید'}
            </Link>

            {
                token ? (
                    <Link
                        to="/account/dashboard"
                        className={`btn btn-sm btn-link ${location.pathname === '/account/dashboard' ? 'link-primary' : 'link-gray'}`}
                    >
                        {
                            avatarUrl ? (
                                <>
                                    <div
                                        className={`d-flex justify-content-center align-items-center ${!isMobile ? 'ms-2' : ''}`}
                                        style={{width: 25, height: 25}}
                                    >
                                        <Image
                                            src={avatarUrl}
                                            alt="آواتار"
                                            width="100%"
                                            height="100%"
                                            className="img-fluid bg-light object-center object-cover rounded-circle"
                                            placeholderSrc={process.env.PUBLIC_URL + '/images/placeholder.png'}
                                        />
                                    </div>
                                    {!isMobile && name}
                                </>
                            ) : (
                                <>
                                    <i className={`far fa-user fs-4 ${location.pathname === '/account/dashboard' ? 'text-primary' : 'text-gray'} ${!isMobile ? 'ms-2' : ''}`}/>
                                    {!isMobile && name}
                                </>
                            )
                        }
                    </Link>
                ) : (
                    <Link to="/login" className="btn btn-sm btn-link link-gray me-2">
                        <i className={`far fa-sign-in fs-4 ${!isMobile ? 'ms-2' : ''}`}/>
                        {!isMobile && 'ورود | عضویت'}
                    </Link>
                )
            }

        </>
    );
};

export default Actionbar;
