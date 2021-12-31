import PropTypes from 'prop-types';


const Specification = ({book}) => {

    return (
        <div className="container-fluid card justify-content-center align-items-center h-100 p-4">

            <div className="row gx-3 gy-6 w-100">

                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <i className="fal fa-language fs-1 text-gray mb-1"/>
                        <span className="fs-5 fw-bold text-gray mb-2">زبان</span>
                        <span className="fs-5 fw-bold text-dark text-center">{book?.lang}</span>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <i className="fal fa-barcode fs-1 text-gray mb-1"/>
                        <span className="fs-5 fw-bold text-gray mb-2">شابک</span>
                        <span className="fs-5 fw-bold text-dark text-center">{book?.shabak}</span>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <i className="fal fa-calendar fs-1 text-gray mb-1"/>
                        <span className="fs-5 fw-bold text-gray mb-2">سال انتشار</span>
                        <span className="fs-5 fw-bold text-dark text-center">{book?.year}</span>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <i className="fal fa-book fs-1 text-gray mb-1"/>
                        <span className="fs-5 fw-bold text-gray mb-2">تعداد صفحات</span>
                        <span className="fs-5 fw-bold text-dark text-center">{book?.pageCount}</span>
                    </div>
                </div>

            </div>

        </div>
    );
};

Specification.prototype = {
    book: PropTypes.object
};

export default Specification;
