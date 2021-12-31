import PropTypes from 'prop-types';


const Information = ({book}) => {

    return (
        <div className="container-fluid card p-3">

            <div className="row">

                <div className="col-24">

                    <div className="d-flex justify-content-start align-items-center">
                        <p className="fs-5 fw-bold text-dark line-height">{book?.detail}</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

Information.prototype = {
    book: PropTypes.object
};

export default Information;
