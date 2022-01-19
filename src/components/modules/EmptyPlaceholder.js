import PropTypes from 'prop-types';

//=====================//
//===== component =====//
//=====================//

import Image from './Image';


const EmptyPlaceholder = ({src, alt, title, style, width, height}) => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100 my-2">

            <Image
                src={src}
                alt={alt}
                width={width || 200}
                height={height || 200}
                className="img-fluid bg-light rounded object-center object-cover"
                style={style}
            />

            <p className="fs-4 fw-bold text-primary mt-4">{title}</p>

        </div>
    );
};

EmptyPlaceholder.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.number || PropTypes.string,
    height: PropTypes.number || PropTypes.string
};

export default EmptyPlaceholder;
