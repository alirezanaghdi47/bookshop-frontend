import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {discountPrice, formatPrice} from '../../utils/functions';

//=====================//
//===== component =====//
//=====================//

import Image from '../../core/Image';


const BookItem = ({book}) => {

    return (
        <article className="card h-100">

            <div className="card-header">

                <Link
                    to={`/books/${book?._id}`}
                    className="d-flex justify-content-center align-items-center p-3">
                    <Image
                        src={book?.imageUrl}
                        alt={book?.name}
                        width="100%"
                        height="100%"
                        className="img-fluid bg-light rounded object-cover object-center"
                        style={{minHeight: 130}}
                        placeholderSrc={process.env.PUBLIC_URL + '/images/placeholder.png'}
                    />
                </Link>

            </div>

            <div className="card-body vstack gap-2">

                <Link
                    to={`/books/${book?._id}`}
                    className="fs-4 fw-bold text-dark text-center text-truncate text-decoration-none mb-2"
                >
                    {book?.name}
                </Link>

                {
                    book?.numberInStock > 0 ? (
                        <>
                            {
                                book?.discount > 0 && (
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="fs-5 fw-bold text-gray text-decoration-line-through">
                                          {formatPrice(book?.price)}
                                        </span>

                                        <span className="badge bg-danger fs-6 fw-bold text-white px-2 py-1 me-2">
                                          {book?.discount} %
                                        </span>
                                    </div>
                                )
                            }

                            <div className="d-flex justify-content-center align-items-center">
                                  <span className="fs-3 fw-bold text-dark ms-2">
                                    {formatPrice(discountPrice(book?.price, book?.discount))}
                                  </span>

                                  <span className="fs-6 fw-bold text-gray">تومان</span>
                            </div>
                        </>
                    ) : (
                        <span className="fs-3 fw-bold text-gray">ناموجود</span>
                    )
                }
            </div>

            <div className="card-footer hstack gap-3 p-3">

                <div className="d-flex justify-content-center align-items-center text-truncate w-50">
                    <span className="fs-6 fw-bold text-dark text-truncate">{book?.authors}</span>
                </div>

                <span className="hr bg-secondary"/>

                <div className="d-flex justify-content-center align-items-center text-truncate w-50">
                    <span className="fs-6 fw-bold text-dark text-truncate">{book?.category?.name}</span>
                </div>

            </div>

        </article>
    );
};

BookItem.prototype = {
    book: PropTypes.object
};

export default BookItem;
