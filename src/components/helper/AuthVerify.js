import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {expire} from '../../stores/action/userAction';


export default function AuthVerify() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const expireToken = useSelector((state) => state.user.profile.expireToken);

    useEffect(() => {
        if (expireToken !== 0 && expireToken < Math.ceil(Date.now() / 1000)) {
            dispatch(expire(navigate));
        }
        // eslint-disable-next-line
    }, [location.key]);

    return null;
}
