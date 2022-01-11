import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

//=====================//
//===== component =====//
//=====================//

import Header from './header/Header';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';
import Alert from "../../core/Alert";


const AccountLayout = ({children}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const token = useSelector(state => state.user.profile.token);

    useEffect(() => {
        if (!token) navigate("/" , {replace: true});
        // eslint-disable-next-line
    } , [location.pathname]);

    return (

        <>

            {/* alert */}
            <Alert>
                برای کارکرد درست وب سایت از vpn استفاده نمایید
            </Alert>

            {/* header */}
            <header
                className="d-flex justify-content-center align-items-center w-100 h-100 bg-white shadow-sm"
                style={{minHeight: 80}}
            >
                <Header/>
            </header>

            {/* content */}
            <div className="container-xl p-3" style={{minHeight: 'calc(100vh - 140px)'}}>

                <div className="row g-3">

                    {/* sidebar */}
                    <aside className="col-24 col-md-7 col-lg-6 col-xl-5">
                        <Sidebar/>
                    </aside>

                    {/* main */}
                    <main className="col-24 col-md-17 col-lg-18 col-xl-19">
                        {children}
                    </main>

                </div>

            </div>

            {/* footer */}
            <footer
                className="d-flex justify-content-center align-items-center w-100 h-100 bg-white shadow-sm"
                style={{minHeight: 60}}
            >
                <Footer/>
            </footer>

        </>
    );
};

export default AccountLayout;
