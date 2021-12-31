import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {stopTimer} from '../stores/action/otherAction';
import Countdown from 'react-countdown';


const Counterdown = ({date}) => {

    const dispatch = useDispatch();

    const renderer = ({minutes, seconds}) => (
        <div
            className="d-flex justify-content-center align-items-center text-ltr bg-light rounded"
            style={{width: 60, height: 30}}
        >
            <span className="fs-5 fw-bold text-primary">{minutes}</span>
            <span className="fs-5 fw-bold text-primary mx-1">:</span>
            <span className="fs-5 fw-bold text-primary">{seconds}</span>
        </div>
    );

    return (
        <Countdown
            date={date}
            renderer={renderer}
            onComplete={() => dispatch(stopTimer())}
        />
    );
};

Counterdown.prototype = {
    date: PropTypes.number
};

export default Counterdown;
