import {Link, useLocation} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';


const Navbar = () => {

    const location = useLocation();
    const isTablet = useMediaQuery({maxWidth: 768});

    return (
        <Link
            to="/books"
            className={`btn btn-sm btn-link ${location.pathname === '/books' ? 'link-primary' : 'link-gray'}`}
        >
            <i className={`far fa-book fs-3 ${!isTablet ? 'ms-2' : ''}`}/>

            {!isTablet && 'کتاب ها'}

        </Link>
    );
};

export default Navbar;
