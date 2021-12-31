import {useLayoutEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {readAdvertises} from '../../stores/action/advertiseAction';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AccountLayout from '../../components/layout/AccountLayout';
import AdvertiseTable from '../../components/ui/AdvertiseTable';
import Pagination from '../../core/Pagination';
import EmptyPlaceholder from '../../core/EmptyPlaceholder';
import TablePlaceholder from '../../components/ui/placeholder/TablePlaceholder';
import PaginationPlaceholder from '../../components/ui/placeholder/PaginationPlaceholder';


const Advertises = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const {
        data: advertises,
        count: advertisesCount,
        isLoading: advertisesIsLoading
    } = useSelector((state) => state.advertise.advertises);

    useLayoutEffect(() => {
        dispatch(readAdvertises(`page=${0}&&limit=${5}`));
        // eslint-disable-next-line
    }, [page]);

    return (
        <>

            <Helmet>
                <title>تبلیغ ها</title>
                <meta name="description" content="صفحه تبلیغات ها"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h1 className="fs-4 fw-bold text-primary">تبلیغ ها</h1>
                            <Link to="/account/advertises/add" className="btn btn-sm btn-link link-primary">
                                <i className="far fa-plus fs-5 ms-2"/>
                                افزودن
                            </Link>
                        </div>

                        {/* placeholder */}
                        {
                            advertisesIsLoading && (
                                <>
                                    <TablePlaceholder/>
                                    <PaginationPlaceholder/>
                                </>
                            )
                        }

                        {/* advertises table */}
                        {
                            !advertisesIsLoading && advertisesCount > 0 && advertises.length > 0 && (
                                <AdvertiseTable advertises={advertises}/>
                            )
                        }

                        {/* pagination */}
                        {
                            !advertisesIsLoading && advertisesCount > 5 && advertises.length !== 0 && (
                                <Pagination
                                    pageCount={Math.ceil(advertisesCount / 5)}
                                    page={page}
                                    onPageChange={(page) => setPage(page)}
                                />
                            )
                        }

                        {/* no data */}
                        {
                            !advertisesIsLoading && advertises.length === 0 &&  (
                                <EmptyPlaceholder
                                    src={process.env.PUBLIC_URL + '/images/no-data.svg'}
                                    alt="تبلیغی یافت نشد"
                                    title="تبلیغی یافت نشد"
                                    width={150}
                                    heeight={150}
                                />
                            )
                        }

                    </div>

                </AccountLayout>

            </PageAnimation>

        </>
    );
};

export default Advertises;
