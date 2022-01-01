import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

//=====================//
//===== component =====//
//=====================//

import Logo from './header/Logo';
import CopyRight from "./footer/CopyRight";


const AuthLayout = ({children}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const token = useSelector(state => state.user.profile.token);

    useEffect(() => {
        if (token) navigate("/" , {replace: true});
        // eslint-disable-next-line
    } , [location.pathname]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 min-vh-100">

            {/* header */}
            <header className="d-flex justify-content-center align-items-center w-100 p-3">
                <Logo/>
            </header>

            {/* main */}
            <main className="card w-75 p-3" style={{maxWidth: 450}}>
                {children}
            </main>

            {/* footer */}
            <footer className="d-flex justify-content-center align-items-center w-100 p-3">
                <CopyRight/>
            </footer>

        </div>
    );
};

export default AuthLayout;
