import {useLayoutEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {readBooks} from "../../stores/action/bookAction";
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AccountLayout from '../../components/layout/AccountLayout';
import BooksTable from '../../components/ui/BooksTable';
import Pagination from '../../core/Pagination';
import EmptyPlaceholder from '../../core/EmptyPlaceholder';
import TablePlaceholder from '../../components/ui/placeholder/TablePlaceholder';
import PaginationPlaceholder from '../../components/ui/placeholder/PaginationPlaceholder';


const Books = () => {

    const dispatch = useDispatch();
    const [page , setPage] = useState(0);
    const {
        data: books,
        count: booksCount,
        isLoading: booksIsLoading
    } = useSelector((state) => state.book.books);

    useLayoutEffect(() => {
        dispatch(readBooks(`page=${page}&&limit=${5}`));
        // eslint-disable-next-line
    }, [page]);

    return (
        <>
            <Helmet>
                <title>کتاب ها</title>
                <meta name="description" content="صفحه کتاب ها"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h1 className="fs-4 fw-bold text-primary">کتاب ها</h1>

                            <Link to="/account/books/add" className="btn btn-sm btn-link link-primary">
                                <i className="far fa-plus fs-5 ms-2"/>
                                افزودن
                            </Link>

                        </div>

                        {/* placeholder */}
                        {
                            booksIsLoading && (
                                <>
                                    <TablePlaceholder/>
                                    <PaginationPlaceholder/>
                                </>
                            )
                        }

                        {/* books table */}
                        {
                            !booksIsLoading && booksCount > 0 && books?.length > 0 && (
                                <BooksTable books={books}/>
                            )
                        }

                        {/* pagination */}
                        {
                            !booksIsLoading && booksCount > 5 && books?.length !== 0 && (
                                <Pagination
                                    pageCount={Math.ceil(booksCount / 5)}
                                    page={page}
                                    onPageChange={(page) => setPage(page)}
                                />
                            )
                        }

                        {/* no data */}
                        {
                            !booksIsLoading && books?.length === 0 && (
                                <EmptyPlaceholder
                                    src={process.env.PUBLIC_URL + '/images/no-data.svg'}
                                    alt=" کتابی یافت نشد"
                                    title=" کتابی یافت نشد"
                                    width={150}
                                    height={150}
                                />
                            )
                        }

                    </div>

                </AccountLayout>

            </PageAnimation>

        </>
    );
};

export default Books;
