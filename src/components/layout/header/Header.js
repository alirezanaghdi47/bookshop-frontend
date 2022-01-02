//=====================//
//===== component =====//
//=====================//

import Logo from './Logo';
import Actionbar from './Actionbar';


const Header = () => {

    return (
        <div className="container-xl">

            <div className="row g-3">

                {/* logo */}
                <div className="col-14 col-sm-8 d-flex justify-content-start align-items-center">
                    <Logo/>
                </div>

                {/* actionbar */}
                <div className="col-10 col-sm-16 d-flex justify-content-end align-items-center">
                    <Actionbar/>
                </div>

            </div>

        </div>
    );
};

export default Header;
