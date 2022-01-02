import {useDispatch, useSelector} from "react-redux";
import {hideAlert} from "../stores/action/otherAction";

const Alert = () => {

    const dispatch = useDispatch();
    const showingAlert = useSelector(state => state.other.showingAlert);
    const showingMessage = useSelector(state => state.other.showingMessage);

    return !showingAlert ? null : (

        <div
            className="d-flex justify-content-center align-items-center w-100 h-100 bg-warning shadow-sm"
            style={{minHeight: 40}}
        >

            <div className="container-xl">

                <div className="d-flex justify-content-between align-items-center py-2">

                    <p className="fs-5 fw-bold text-dark">{showingMessage}</p>

                    <button
                        className="btn btn-icon btn-sm btn-danger"
                        onClick={() => dispatch(hideAlert())}
                    >
                        <i className="far fa-times fs-5"/>
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Alert;
