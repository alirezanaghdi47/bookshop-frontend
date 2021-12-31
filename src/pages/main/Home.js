import {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {readPublishedAdvertises} from '../../stores/action/advertiseAction';
import {readDiscountedBooks, readNewestBooks} from '../../stores/action/bookAction';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import MainLayout from "../../components/layout/MainLayout";
import Carousel from '../../core/slider/Carousel';
import Swiper from '../../core/slider/Swiper';
import SliderPlaceholder from '../../components/ui/placeholder/SliderPlaceholder';


const Home = () => {

    const dispatch = useDispatch();
    const {
        data: publishedAdvertises,
        isLoading: publishedAdvertisesIsLoading
    } = useSelector((state) => state.advertise.publishedAdvertises);
    const {
        data: discountedBooks,
        isLoading: discountedBooksIsLoading
    } = useSelector((state) => state.book.discountedBooks);
    const {
        data: newestBooks,
        isLoading: newestBooksIsLoading
    } = useSelector((state) => state.book.newestBooks);

    useLayoutEffect(() => {
        dispatch(readPublishedAdvertises(`page=${0}&&limit=${5}`));
        dispatch(readDiscountedBooks(`page=${0}&&limit=${5}`));
        dispatch(readNewestBooks(`page=${0}&&limit=${5}`));
        // eslint-disable-next-line
    }, []);

    return (
        <>

            <Helmet>
                <title>فروشگاه کتاب</title>
                <meta name="description" content="فروشگاه کتاب"/>
            </Helmet>

            <PageAnimation>

                <MainLayout>

                    <div className="vstack gap-3">

                        {/* carousel + carousel placeholder */}
                        {
                            publishedAdvertisesIsLoading ? (
                                <SliderPlaceholder/>
                            ) : (
                                <Carousel advertises={publishedAdvertises}/>
                            )
                        }

                        {/* slider discount + slider placeholder */}
                        <h1 className="fs-4 fw-bold text-primary">تخفیف های شگفت انگیز</h1>

                        {
                            discountedBooksIsLoading ? (
                                <SliderPlaceholder/>
                            ) : (
                                <Swiper books={discountedBooks}/>
                            )
                        }

                        {/* slider newest + slider placeholder */}
                        <h1 className="fs-4 fw-bold text-primary">جدیدترین ها</h1>

                        {
                            newestBooksIsLoading ? (
                                <SliderPlaceholder/>
                            ) : (
                                <Swiper books={newestBooks}/>
                            )
                        }

                    </div>

                </MainLayout>

            </PageAnimation>

        </>
    );
};

export default Home;
