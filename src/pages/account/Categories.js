import {useLayoutEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {readCategories} from '../../stores/action/categoryAction';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../components/modules/animation/PageAnimation";
import AccountLayout from '../../components/layouts/AccountLayout';
import CategoriesTable from '../../components/ui/CategoriesTable';
import Pagination from '../../components/modules/Pagination';
import EmptyPlaceholder from '../../components/modules/EmptyPlaceholder';
import TablePlaceholder from '../../components/ui/placeholder/TablePlaceholder';
import PaginationPlaceholder from '../../components/ui/placeholder/PaginationPlaceholder';


const Categories = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const {
        data: categories,
        count: categoriesCount,
        isLoading: categoriesIsLoading
    } = useSelector((state) => state.category.categories);

    useLayoutEffect(() => {
        dispatch(readCategories(`page=${page}&&limit=${5}`));
        // eslint-disable-next-line
    }, [page]);

    return (
        <>

            <Helmet>
                <title>دسته بندی ها</title>
                <meta name="description" content="صفحه دسته بندی ها"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h1 className="fs-4 fw-bold text-primary">دسته بندی ها</h1>

                            <Link to="/account/categories/add" className="btn btn-sm btn-link link-primary">
                                <i className="far fa-plus fs-5 ms-2"/>
                                افزودن
                            </Link>

                        </div>

                        {/* placeholder */}
                        {
                            categoriesIsLoading && (
                                <>
                                    <TablePlaceholder/>
                                    <PaginationPlaceholder/>
                                </>
                            )
                        }

                        {/* categories table */}
                        {
                            !categoriesIsLoading && categoriesCount > 0 && categories?.length > 0 && (
                                <CategoriesTable categories={categories}/>
                            )
                        }

                        {/* pagination */}
                        {
                            !categoriesIsLoading && categoriesCount > 5 && categories?.length !== 0 &&  (
                                <Pagination
                                    pageCount={Math.ceil(categoriesCount / 5)}
                                    page={page}
                                    onPageChange={(page) => setPage(page)}
                                />
                            )
                        }

                        {/* no data */}
                        {
                            !categoriesIsLoading && categories?.length === 0 && (
                                <EmptyPlaceholder
                                    src={process.env.PUBLIC_URL + '/images/no-data.svg'}
                                    alt="دسته بندی یافت نشد"
                                    title="دسته بندی یافت نشد"
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

export default Categories;
