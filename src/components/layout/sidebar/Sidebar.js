import {useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {logout} from "../../../stores/action/userAction";
import {useMediaQuery} from 'react-responsive';
import {admin_acl , user_acl} from "../../../utils/variables";

//=====================//
//===== component =====//
//=====================//

import CollapseAnimation from '../../../core/animation/CollapseAnimation';
import Image from "../../../core/Image";


const adminRoutes = [
    {
        id: 1,
        title: 'داشبورد',
        icon: 'far fa-tachometer-alt fs-5',
        href: '/account/dashboard'
    },
    {
        id: 2,
        title: 'کتاب ها',
        icon: 'far fa-book fs-5',
        href: '/account/books'
    },
    {
        id: 3,
        title: 'دسته بندی ها',
        icon: 'far fa-list fs-5',
        href: '/account/categories'
    },
    {
        id: 4,
        title: 'کاربران',
        icon: 'far fa-user-circle fs-5',
        href: '/account/users'
    },
    {
        id: 5,
        title: 'سفارشات',
        icon: 'far fa-shopping-basket fs-5',
        href: '/account/orders'
    },
    {
        id: 6,
        title: 'اطلاعات کاربری',
        icon: 'far fa-info-circle fs-5',
        href: '/account/profile'
    }
];

const userRoutes = [
    {
        id: 1,
        title: 'داشبورد',
        icon: 'far fa-tachometer-alt fs-5',
        href: '/account/dashboard'
    },
    {
        id: 2,
        title: 'سفارشات',
        icon: 'far fa-shopping-basket fs-5',
        href: '/account/orders'
    },
    {
        id: 3,
        title: 'اطلاعات کاربری',
        icon: 'far fa-info-circle fs-5',
        href: '/account/profile'
    }
];


const Sidebar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const isTablet = useMediaQuery({maxWidth: 768});
    const {name, avatarUrl, acl} = useSelector((state) => state.user.profile);
    const [showingSidebar, setShowingSidebar] = useState(false);

    return (
        <div className="card position-sticky h-max-content p-2" style={{top: 15}}>

            <div className="card-header d-flex justify-content-between align-items-start">

                <div className="d-flex justify-content-start align-items-start p-2">

                    <div
                        className="d-flex justify-content-center align-items-center bg-light rounded-circle ms-3"
                        style={{width: 50, height: 50}}
                    >
                        {
                            avatarUrl ? (
                                <Image
                                    src={avatarUrl}
                                    alt="آواتار"
                                    width={50}
                                    height={50}
                                    className="img-fluid bg-light object-center object-cover rounded-circle"
                                    placeholderSrc={process.env.PUBLIC_URL + '/images/placeholder.png'}
                                />
                            ) : (
                                <i className="fas fa-user fs-3 text-gray"/>
                            )
                        }
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-start">

                        <p className="fs-5 fw-bold text-dark mb-1">{name}</p>

                        <span className="badge bg-primary fs-6 fw-bold text-white">
                          {acl === admin_acl ? 'مدیر' : 'کاربر'}
                        </span>

                    </div>

                </div>

                {
                    isTablet && (
                        <button
                            className="btn btn-icon btn-rounded btn-secondary mx-2 my-3"
                            onClick={() => setShowingSidebar(!showingSidebar)}
                        >
                            <i className={`far ${showingSidebar ? 'fa-chevron-up' : 'fa-chevron-down'}`}/>
                        </button>
                    )
                }

            </div>

            <CollapseAnimation show={showingSidebar || !isTablet}>

                <ul className="list-group w-100">

                    {
                        acl === admin_acl && adminRoutes.map((route) => (
                                <li className="list-group-item" key={route.id}>
                                    <Link
                                        to={route.href}
                                        className={`btn btn-sm btn-link btn-start w-max-content ${
                                            route.href === location.pathname ? 'link-primary' : 'link-gray'
                                        }`}
                                    >
                                        <i className={`${route.icon} ms-2`}/>
                                        {route.title}
                                    </Link>
                                </li>
                            )
                        )
                    }

                    {
                        acl === user_acl && userRoutes.map((route) => (
                                <li className="list-group-item" key={route.id}>
                                    <Link
                                        to={route.href}
                                        className={`btn btn-sm btn-link btn-start w-max-content ${
                                            route.href === location.pathname ? 'link-primary' : 'link-gray'
                                        }`}
                                    >
                                        <i className={`${route.icon} ms-2`}/>
                                        {route.title}
                                    </Link>
                                </li>
                            )
                        )
                    }

                    <li className="list-group-item">
                        <button
                            className="btn btn-sm btn-link btn-start w-max-content link-danger"
                            onClick={() => dispatch(logout(navigate))}
                        >
                            <i className="far fa-sign-out ms-2"/>
                            خروج
                        </button>
                    </li>

                </ul>

            </CollapseAnimation>

        </div>
    );
};

export default Sidebar;
