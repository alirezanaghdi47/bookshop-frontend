import {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {readPublishedBooks} from '../../stores/action/bookAction';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import MainLayout from '../../components/layout/MainLayout';
import BookList from '../../components/ui/BookList';
import Searchbar from '../../components/ui/Searchbar';
import Pagination from '../../core/Pagination';
import EmptyPlaceholder from '../../core/EmptyPlaceholder';
import SliderPlaceholder from '../../components/ui/placeholder/BooksPlaceholder';
import PaginationPlaceholder from '../../components/ui/placeholder/PaginationPlaceholder';


const Home = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const {
        data: publishedBooks,
        count: publishedBooksCount,
        isLoading: publishedBooksIsLoading
    } = useSelector((state) => state.book.publishedBooks);

    useLayoutEffect(() => {
        dispatch(readPublishedBooks(`page=${page}&&limit=${12}`));
        // eslint-disable-next-line
    }, [page]);

    return (
        <>

            <Helmet>
                <title>فروشگاه کتاب</title>
                <meta name="description" content="صفحه اصلی فروشگاه کتاب"/>
            </Helmet>

            <PageAnimation>

                <MainLayout>

                    <div className="vstack gap-3">

                        {/* searchbar */}
                        <Searchbar page={page}/>

                        {/* placeholder */}
                        {
                            publishedBooksIsLoading && (
                                <>
                                    <SliderPlaceholder count={12} xs={24} sm={12} md={8} lg={8} xl={6}/>
                                    <PaginationPlaceholder/>
                                </>
                            )
                        }

                        {/* book list */}
                        {
                            !publishedBooksIsLoading && publishedBooksCount > 0 && publishedBooks?.length > 0 && (
                                <BookList books={publishedBooks}/>
                            )
                        }

                        {/* pagination */}
                        {
                            !publishedBooksIsLoading && publishedBooksCount > 12 && publishedBooks?.length !== 0 && (
                                <Pagination
                                    pageCount={Math.ceil(publishedBooksCount / 5)}
                                    page={page}
                                    onPageChange={(page) => setPage(page)}
                                />
                            )
                        }

                        {/* no data */}
                        {
                            !publishedBooksIsLoading && publishedBooks?.length === 0 && (
                                <EmptyPlaceholder
                                    src={process.env.PUBLIC_URL + '/images/no-data.svg'}
                                    alt="کتابی یافت نشد"
                                    title="کتابی یافت نشد"
                                    width={150}
                                    heeight={150}
                                />
                            )
                        }

                    </div>

                </MainLayout>

            </PageAnimation>

        </>
    );
};

export default Home;
