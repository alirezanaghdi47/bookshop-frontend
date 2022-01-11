import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

//=====================//
//===== component =====//
//=====================//

import Logo from './header/Logo';
import Tooltip from "../../core/Tooltip";


const AuthLayout = ({children}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const token = useSelector(state => state.user.profile.token);

    useEffect(() => {
        if (token) navigate("/" , {replace: true});
        // eslint-disable-next-line
    } , [location.pathname]);

    return (
        <>

            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 min-vh-100 p-3">

                {/* header */}
                <header className="d-flex justify-content-between align-items-center w-100 p-3" style={{maxWidth: 450}}>

                    <Logo/>

                    <Tooltip
                        content={
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h3 className="fs-5 fw-bold text-dark mb-2">اطلاعات مدیر سایت</h3>
                                <p className="fs-6 fw-bold text-gray mb-1">ایمیل ( alirezanaghdi47@gmail.com
                                    )</p>
                                <p className="fs-6 fw-bold text-gray">رمز عبور ( 1234567890 )</p>
                            </div>
                        }
                        placement="top"
                    >
                        <button className="btn btn-icon btn-sm btn-rounded btn-link link-gray">
                            راهنما
                        </button>
                    </Tooltip>

                </header>

                {/* main */}
                <main className="card w-100 p-3" style={{maxWidth: 450}}>
                    {children}
                </main>

            </div>

        </>
    );
};

export default AuthLayout;
