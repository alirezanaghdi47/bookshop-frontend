//=====================//
//===== component =====//
//=====================//

import Logo from "./header/Logo";


const OtherLayout = ({children}) => {

    return (

        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 min-vh-100">

            {/* header */}
            <header className="d-flex justify-content-center align-items-center w-100">
                <Logo/>
            </header>

            {/* main */}
            <main>
                {children}
            </main>

        </div>
    );
};

export default OtherLayout;
