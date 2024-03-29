import PropTypes from 'prop-types';

//=====================//
//===== component =====//
//=====================//

import Gallery from './Gallery';
import Detail from './Detail';


const Summary = ({book}) => {

    return (
        <div className="container-fluid card justify-content-center align-items-center h-100 p-4">

            <div className="row g-3 gy-4 w-100">

                {/* gallery */}
                <Gallery book={book}/>

                {/* detail */}
                <Detail book={book}/>

            </div>

        </div>
    );
};

Summary.prototype = {
    book: PropTypes.object
};

export default Summary;
