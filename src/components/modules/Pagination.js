import PropTypes from 'prop-types';
import ReactPaginate from "react-paginate";


const Pagination = ({pageCount, page, onPageChange}) => {

    return (
        <div className="d-flex justify-content-center align-items-center text-ltr">

            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                previousLabel={<i className="far fa-chevron-left fs-5"/>}
                nextLabel={<i className="far fa-chevron-right fs-5"/>}
                breakLabel="..."
                initialPage={page}
                onPageChange={(page) => onPageChange(page.selected)}
                containerClassName="pagination"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="page-item active"
                activeLinkClassName="page-link active"
            />

        </div>
    );
};

Pagination.prototype = {
    pageCount: PropTypes.number,
    page: PropTypes.number,
    onPageChange: PropTypes.func
};

export default Pagination;
