import {useSelector} from 'react-redux';
import Modal from 'react-modal';

//=================//
//===== style =====//
//=================//

import '../styles/core/react-modal.scss';


const Loading = () => {

    const showingLoading = useSelector((state) => state.other.showingLoading);

    return (
        <Modal isOpen={showingLoading} className="ReactModal__Loading">

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

Modal.setAppElement('#portal');

export default Loading;
