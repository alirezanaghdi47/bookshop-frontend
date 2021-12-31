import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

//=================//
//===== style =====//
//=================//

import 'react-loading-skeleton/dist/skeleton.css';


const Placeholder = ({backgroundColor, animationColor, borderRadius, width, height, style, className}) => {

    return (
        <Skeleton
            baseColor={backgroundColor}
            highlightColor={animationColor}
            borderRadius={borderRadius}
            width={width}
            height={height}
            className={className}
            style={style}
        />
    );
};

Placeholder.prototype = {
    backgroundColor: PropTypes.string,
    animationColor: PropTypes.string,
    borderRadius: PropTypes.number,
    width: PropTypes.string || PropTypes.number,
    height: PropTypes.string || PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Placeholder;
