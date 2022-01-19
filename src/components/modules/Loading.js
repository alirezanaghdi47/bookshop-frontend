import {useSelector} from 'react-redux';
import Modal from "react-modal";

//=================//
//===== style =====//
//=================//

import '../../styles/module/react-modal.scss';
import '../../styles/module/react-animation.scss';


const Loading = () => {

    const showingLoading = useSelector((state) => state.other.showingLoading);

    return (
        <Modal
            isOpen={showingLoading}
            shouldFocusAfterRender={false}
            ariaHideApp={false}
            parentSelector={() => document.querySelector('#portal')}
            className="ReactModal__Loading"
        >

            <div
                className="d-flex flex-column justify-content-center align-items-center bg-white rounded w-100 h-100"
                style={{maxWidth: 300, maxHeight: 150}}
            >

                <div className="loader">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>

                <p className="fs-4 fw-bold text-primary">لطفا کمی صبر کنید</p>

            </div>

        </Modal>
    );
};

// Modal.setAppElement('#portal');

export default Loading;
