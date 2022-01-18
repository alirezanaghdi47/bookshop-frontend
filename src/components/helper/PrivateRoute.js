import {Navigate, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {admin_acl} from "../../utils/variables";


const PrivateRoute = ({children , requiredAuth, requiredAdmin}) => {

    const location = useLocation();
    const {token, acl} = useSelector((state) => state.user.profile);

    if (requiredAuth && !token) {
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }

    if (requiredAdmin && !token && acl !== admin_acl) {
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }

    return children;

}

export default PrivateRoute;
