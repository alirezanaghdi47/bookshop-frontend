
//=====================//
//===== component =====//
//=====================//

import Header from './header/Header';
import Footer from './footer/Footer';


const MainLayout = ({children}) => {

    return (
        <>

            {/* header */}
            <header
                className="d-flex justify-content-center align-items-center w-100 h-100 bg-white shadow-sm"
                style={{minHeight: 80}}
            >
                <Header/>
            </header>

            {/* main */}
            <main className="container-xl p-3" style={{minHeight: 'calc(100vh - 140px)'}}>
                {children}
            </main>

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

export default MainLayout;
