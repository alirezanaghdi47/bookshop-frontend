import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//=====================//
//===== component =====//
//=====================//

import Image from '../../core/Image';


const AdvertiseItem = ({advertise}) => {

    return (

        <Link to={`/books/${advertise?.book?._id}`}>

            <div className="ratio ratio-16x9">

                <Image
                    src={advertise.imageUrl}
                    alt={`تبلیغ ${advertise._id}`}
                    width="100%"
                    height="100%"
                    className="img-fluid bg-light rounded object-cover object-cover"
                    placeholderSrc={process.env.PUBLIC_URL + '/images/placeholder.png'}
                />

            </div>

        </Link>
    );
};

AdvertiseItem.prototype = {
    advertise: PropTypes.object
};

export default AdvertiseItem;
