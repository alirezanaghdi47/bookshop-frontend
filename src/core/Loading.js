import {useSelector} from 'react-redux';
import Modal from 'react-modal';
import SyncLoader from 'react-spinners/SyncLoader';

//=================//
//===== style =====//
//=================//

import '../styles/core/react-modal.scss';


const Loading = () => {

    const showingLoading = useSelector((state) => state.other.showingLoading);

    return (
        <Modal isOpen={showingLoading}>

            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">

                <div
                    className="d-flex flex-column justify-content-center align-items-center bg-white rounded w-100 h-100"
                    style={{maxWidth: 300, maxHeight: 150}}
                >

                    <SyncLoader color="#4D1DFE" loading={true} size={12} margin={3}/>

                    <p className="fs-4 fw-bold text-primary mt-4">لطفا کمی صبر کنید</p>

                </div>

            </div>

        </Modal>
    );
};

Modal.setAppElement('#portal');

export default Loading;
