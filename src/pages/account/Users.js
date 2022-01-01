import {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {readUsers} from '../../stores/action/userAction';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AccountLayout from '../../components/layout/AccountLayout';
import UsersTable from '../../components/ui/UsersTable';
import Pagination from '../../core/Pagination';
import EmptyPlaceholder from '../../core/EmptyPlaceholder';
import TablePlaceholder from '../../components/ui/placeholder/TablePlaceholder';
import PaginationPlaceholder from '../../components/ui/placeholder/PaginationPlaceholder';


const Users = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const {
        data: users,
        count: usersCount,
        isLoading: usersIsLoading
    } = useSelector((state) => state.user.users);

    useLayoutEffect(() => {
        dispatch(readUsers(`page=${page}&&limit=5`));
        // eslint-disable-next-line
    }, [page]);

    return (
        <>

            <Helmet>
                <title>کاربران</title>
                <meta name="description" content="صفحه کاربران"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <h1 className="fs-4 fw-bold text-primary">کاربران</h1>

                        {/* placeholder */}
                        {
                            usersIsLoading && (
                                <>
                                    <TablePlaceholder/>
                                    <PaginationPlaceholder/>
                                </>
                            )
                        }

                        {/* users table */}
                        {
                            !usersIsLoading && usersCount > 0 && users?.length > 0 && (
                                <UsersTable users={users}/>
                            )
                        }

                        {/* pagination */}
                        {
                            !usersIsLoading && usersCount > 5 && users?.length !== 0 && (
                                <Pagination
                                    pageCount={Math.ceil(usersCount / 5)}
                                    page={page}
                                    onPageChange={(page) => setPage(page)}
                                />
                            )
                        }

                        {/* no data */}
                        {
                            !usersIsLoading && users?.length === 0 &&  (
                                <EmptyPlaceholder
                                    src={process.env.PUBLIC_URL + '/images/no-data.svg'}
                                    alt="کاربری یافت نشد"
                                    title="کاربری یافت نشد"
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

export default Users;
