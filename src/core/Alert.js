import {useDispatch, useSelector} from "react-redux";
import {hideAlert} from "../stores/action/otherAction";


const Alert = ({children}) => {

    const dispatch = useDispatch();
    const showingAlert = useSelector(state => state.other.showingAlert);

    return !showingAlert ? null : (

        <div className="w-100 bg-warning p-2">

            <div className="container-xl d-flex justify-content-between align-items-center">

                <p className="fs-5 fw-bold text-dark">
                    {children}
                </p>

                <button
                    className="btn btn-icon btn-sm btn-danger"
                    onClick={() => dispatch(hideAlert())}
                >
                    <i className="far fa-times fs-5"/>
                </button>

            </div>

        </div>
    );
};

export default Alert;
