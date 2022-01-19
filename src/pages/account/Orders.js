import {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {readCarts} from '../../stores/action/cartAction';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../components/modules/animation/PageAnimation";
import AccountLayout from '../../components/layouts/AccountLayout';
import OrdersTable from '../../components/ui/OrdersTable';
import Pagination from '../../components/modules/Pagination';
import EmptyPlaceholder from '../../components/modules/EmptyPlaceholder';
import TablePlaceholder from '../../components/ui/placeholder/TablePlaceholder';
import PaginationPlaceholder from '../../components/ui/placeholder/PaginationPlaceholder';


const Orders = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const {
        data: carts,
        count: cartsCount,
        isLoading: cartsIsLoading
    } = useSelector((state) => state.cart.carts);

    useLayoutEffect(() => {
        dispatch(readCarts(`page=${page}&&limit=${5}`));
        // eslint-disable-next-line
    }, [page]);

    return (
        <>

            <Helmet>
                <title>سفارشات</title>
                <meta name="description" content="صفحه سفارشات"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <h1 className="fs-4 fw-bold text-primary">سفارشات</h1>

                        {/* placeholder */}
                        {
                            cartsIsLoading && (
                                <>
                                    <TablePlaceholder/>
                                    <PaginationPlaceholder/>
                                </>
                            )
                        }

                        {/* orders table */}
                        {
                            !cartsIsLoading && cartsCount > 0 && carts?.length > 0 && (
                                <OrdersTable carts={carts}/>
                            )
                        }

                        {/* pagination */}
                        {
                            !cartsIsLoading && cartsCount > 5 && carts?.length !== 0 && (
                                <Pagination
                                    pageCount={Math.ceil(cartsCount / 5)}
                                    page={page}
                                    onPageChange={(page) => setPage(page)}
                                />
                            )
                        }

                        {/* no data */}
                        {
                            !cartsIsLoading && carts?.length === 0 &&  (
                                <EmptyPlaceholder
                                    src={process.env.PUBLIC_URL + '/images/no-data.svg'}
                                    alt="سفارشی یافت نشد"
                                    title="سفارشی یافت نشد"
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

export default Orders;
