
//=====================//
//===== component =====//
//=====================//

import CopyRight from "./CopyRight";
import Links from "./Links";


const Footer = () => {

    return (
        <div className="container-xl">

            <div className="row g-3">

                {/* copyright */}
                <div className="col-12 d-flex justify-content-start align-items-center">
                    <CopyRight/>
                </div>

                {/* links */}
                <div className="col-12 d-flex justify-content-end align-items-center">
                    <Links/>
                </div>

            </div>

        </div>
    );
};

export default Footer;
