//=====================//
//===== component =====//
//=====================//

import Navbar from './Navbar';
import Logo from './Logo';
import Actionbar from './Actionbar';


const Header = () => {

    return (
        <div className="container-xl">

            <div className="row g-3">

                {/* navbar */}
                <div className="col-6 col-md-8 d-flex justify-content-start align-items-center">
                    <Navbar/>
                </div>

                {/* logo */}
                <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
                    <Logo/>
                </div>

                {/* actionbar */}
                <div className="col-6 col-md-8 d-flex justify-content-end align-items-center">
                    <Actionbar/>
                </div>

            </div>

        </div>
    );
};

export default Header;
