import PropTypes from 'prop-types';

//=====================//
//===== component =====//
//=====================//

import Image from '../../core/Image';


const Preview = ({book}) => {

    return (
        <div className="col-24 col-sm-12 col-md-12 col-lg-12 col-xl-10">

            <div className="d-flex justify-content-center justify-content-sm-start align-items-center h-100">

                <Image
                    alt={book?.name}
                    src={book?.imageUrl}
                    width="100%"
                    height="100%"
                    className="img-fluid bg-light rounded object-cover object-center"
                    style={{minHeight: 250}}
                    placeholderSrc={process.env.PUBLIC_URL + '/images/placeholder.png'}
                />

            </div>

        </div>
    );
};

Preview.prototype = {
    book: PropTypes.object
};

export default Preview;
