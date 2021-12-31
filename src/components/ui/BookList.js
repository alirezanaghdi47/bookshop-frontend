import PropTypes from 'prop-types';

//=====================//
//===== component =====//
//=====================//

import BookItem from './BookItem';


const BookList = ({books}) => {

    return (
        <div className="container-fluid p-0">

            <div className="row g-3 h-100">
                {
                    books && books?.map((book, index) => (
                            <div className="col-24 col-sm-12 col-md-8 col-xl-6 h-available" key={index}>
                                <BookItem book={book}/>
                            </div>
                        )
                    )
                }
            </div>

        </div>
    );
};

BookItem.prototype = {
    books: PropTypes.array
};

export default BookList;
