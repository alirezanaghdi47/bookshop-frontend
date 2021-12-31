import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

//=====================//
//===== component =====//
//=====================//

import Logo from './header/Logo';
import CopyRight from "./footer/CopyRight";
import EmptyPlaceholder from "../../core/EmptyPlaceholder";


const AuthLayout = ({children}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const token = useSelector(state => state.user.profile.token);

    useEffect(() => {
        if (token) navigate("/" , {replace: true});
        // eslint-disable-next-line
    } , [location.pathname]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">

            <div className="container-fluid">

                <div className="row">

                    {/* content */}
                    <div className="col-24 col-md-12 col-lg-10 col-xl-8 bg-white min-vh-100">

                       <div className="d-flex flex-column justify-content-between align-items-center w-100 h-100">

                           {/* header */}
                           <header className="d-flex justify-content-center align-items-center w-100 p-3">
                               <Logo/>
                           </header>

                           {/* main */}
                           <main className="d-flex justify-content-center align-items-center w-100 p-3" style={{maxWidth: 450}}>
                               {children}
                           </main>

                           {/* footer */}
                           <footer className="d-flex justify-content-center align-items-center w-100 p-3">
                               <CopyRight/>
                           </footer>

                       </div>

                    </div>

                    {/* sidebar */}
                    <div className="col-md-12 col-lg-14 col-xl-16 d-none d-md-flex min-vh-100">

                        <div className="d-flex flex-column justify-content-center align-items-center w-100">

                            <EmptyPlaceholder
                                src={process.env.PUBLIC_URL + '/images/auth-background.svg'}
                                alt="فروشگاه کتاب"
                                title="فروشگاه کتاب ساده و مینیمال"
                                width={300}
                                height={300}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AuthLayout;
