import {useLayoutEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {readRelativeBooks, readPublishedBook} from '../../stores/action/bookAction';
import {useMediaQuery} from 'react-responsive';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import MainLayout from '../../components/layout/MainLayout';
import Addressbar from '../../components/ui/Addressbar';
import Summary from '../../components/ui/Summary';
import Specification from '../../components/ui/Specification';
import Information from '../../components/ui/Information';
import Swiper from "../../core/Swiper";
import Placeholder from '../../core/Placeholder';


const Book = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const isMobile = useMediaQuery({maxWidth: 576});
    const {
        data: book,
        isLoading: bookIsLoading
    } = useSelector((state) => state.book.book);
    const {
        data: relativeBooks,
        count: relativeBooksCount,
        isLoading: relativeBooksIsLoading
    } = useSelector((state) => state.book.relativeBooks);

    useLayoutEffect(() => {
        dispatch(readPublishedBook(params.id, navigate));
        dispatch(readRelativeBooks(params.id));
        // eslint-disable-next-line
    }, [params]);

    return (
        <>

            <Helmet>
                <title>{book?.name}</title>
                <meta property="og:site_name" content="book shop"/>
                <meta property="og:title" content={book?.name}/>
                <meta property="og:description" content={book?.detail}/>
                <meta property="og:image" content={book?.imageUrl}/>
                <meta property="og:url" content={`/book/b/${params.id}`}/>
                <meta property="og:type" content="book"/>
                <meta property="og:language" content={book?.lang}/>
                <meta property="og:isbn" content={book?.shabak}/>
                <meta property="og:author" content={book?.authors}/>
                <meta property="og:publish_date" content={book?.year}/>
            </Helmet>

            <PageAnimation>

                <MainLayout>

                    <div className="vstack gap-3">

                        {/* address bar */}
                        {
                            bookIsLoading ? (
                                <Placeholder
                                    backgroundColor="#e0e0e0"
                                    animationColor="#eeeeee"
                                    borderRadius="0.5rem"
                                    height={60}
                                />
                            ) : (
                                <Addressbar book={book}/>
                            )
                        }

                        {/* summary */}
                        <h1 className="fs-4 fw-bold text-primary">خلاصه ای از کتاب</h1>

                        {
                            bookIsLoading ? (
                                <Placeholder
                                    backgroundColor="#e0e0e0"
                                    animationColor="#eeeeee"
                                    borderRadius="0.5rem"
                                    height={isMobile ? 480 : 320}
                                />
                            ) : (
                                <Summary book={book}/>
                            )
                        }

                        {/* specification + specification placeholder */}
                        <h1 className="fs-4 fw-bold text-primary">مشخصات کتاب</h1>

                        {
                            bookIsLoading ? (
                                <Placeholder
                                    backgroundColor="#e0e0e0"
                                    animationColor="#eeeeee"
                                    borderRadius="0.5rem"
                                    height={isMobile ? 360 : 180}
                                />
                            ) : (
                                <Specification book={book}/>
                            )
                        }

                        {/* information + information placeholder */}
                        <h1 className="fs-4 fw-bold text-primary">بررسی کتاب</h1>

                        {
                            bookIsLoading ? (
                                <Placeholder
                                    backgroundColor="#e0e0e0"
                                    animationColor="#eeeeee"
                                    borderRadius="0.5rem"
                                    height={360}
                                />
                            ) : (
                                <Information book={book}/>
                            )
                        }

                        {/* relative books */}
                        {
                            (relativeBooksIsLoading || relativeBooksCount > 4) && (
                                <h1 className="fs-4 fw-bold text-primary"> کتاب های مرتبط</h1>
                            )
                        }

                        {
                            relativeBooksIsLoading ? (
                                <Placeholder
                                    backgroundColor="#e0e0e0"
                                    animationColor="#eeeeee"
                                    borderRadius="0.5rem"
                                    height={320}
                                />
                            ) : relativeBooksCount > 4 ? (
                                <Swiper books={relativeBooks}/>
                            ) : null
                        }

                    </div>

                </MainLayout>

            </PageAnimation>

        </>
    );
};

export default Book;
