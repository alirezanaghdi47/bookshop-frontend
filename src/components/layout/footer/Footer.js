
//=====================//
//===== component =====//
//=====================//

import CopyRight from "./CopyRight";


const Footer = () => {

    return (
        <div className="container-xl">

            <div className="row g-3">

                {/* copy right */}
                <div className="col-24 d-flex justify-content-center align-items-center">
                    <CopyRight/>
                </div>

            </div>

        </div>
    );
};

export default Footer;
