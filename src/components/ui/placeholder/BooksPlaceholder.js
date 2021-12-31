import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {range} from '../../../utils/functions';

//=================//
//===== style =====//
//=================//

import 'react-loading-skeleton/dist/skeleton.css';


const SliderPlaceholder = ({count, xs, sm, md, lg, xl}) => {

    const items = range(0, count);

    return (
        <div className="container-fluid p-0">

            <div className="row g-3">

                {
                    items.map((item) => (
                            <div
                                className={`"col-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl}`}
                                style={{height: 320}}
                                key={item}
                            >
                                <Skeleton
                                    baseColor="#e0e0e0"
                                    highlightColor="#eeeeee"
                                    borderRadius="0.5rem"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        )
                    )
                }

            </div>

        </div>
    );
};

SliderPlaceholder.prototype = {
    count: PropTypes.number,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
};

export default SliderPlaceholder;
