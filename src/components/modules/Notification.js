import {useMediaQuery} from 'react-responsive';
import {ToastContainer} from "react-toastify";

//=================//
//===== style =====//
//=================//

import 'react-toastify/dist/ReactToastify.min.css';
import '../../styles/module/react-toastify.scss';


const Notification = () => {

    const isMobile = useMediaQuery({maxWidth: 576});

    return (
        <ToastContainer
            rtl
            position={isMobile ? 'bottom-center' : 'bottom-right'}
            autoClose={2000}
            closeButton={false}
            pauseOnHover={false}
            draggableDirection="y"
            bodyClassName="fs-5 fw-bold"
            theme="colored"
        />
    );
};

export default Notification;
