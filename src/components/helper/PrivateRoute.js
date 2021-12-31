import {Navigate, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

//====================//
//===== variable =====//
//====================//

const {REACT_APP_ADMIN_ACL} = process.env;


const PrivateRoute = ({children , requiredAuth, requiredAdmin}) => {

    const location = useLocation();
    const {token, acl} = useSelector((state) => state.user.profile);

    if (requiredAuth && !token) {
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }

    if (requiredAdmin && !token && acl !== REACT_APP_ADMIN_ACL) {
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }

    return children;

}

export default PrivateRoute;
