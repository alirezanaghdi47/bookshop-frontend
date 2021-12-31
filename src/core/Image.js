import PropTypes from 'prop-types';
import {LazyLoadImage} from 'react-lazy-load-image-component';

//=================//
//===== style =====//
//=================//

import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import '../styles/core/react-lazy-load-image.scss';


const Image = ({src, alt, placeholderSrc, width, height, style, className}) => {

    return (
        <LazyLoadImage
            src={src}
            alt={alt}
            placeholderSrc={placeholderSrc}
            effect="black-and-white"
            width={width}
            height={height}
            className={className}
            style={style}
        />
    );
};

Image.prototype = {
    src: PropTypes.string,
    placeholderSrc: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string || PropTypes.number,
    height: PropTypes.string || PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Image;
