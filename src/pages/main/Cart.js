import {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {readOpenCart} from '../../stores/action/cartAction';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import MainLayout from '../../components/layout/MainLayout';
import Recipient from '../../components/ui/Recipient';
import ShoppingList from '../../components/ui/ShoppingList';
import Price from '../../components/ui/Price';
import EmptyPlaceholder from '../../core/EmptyPlaceholder';
import BooksPlaceholder from '../../components/ui/placeholder/BooksPlaceholder';
import Placeholder from "../../core/Placeholder";


const Cart = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.profile);
    const {
        data: cart,
        isLoading: cartIsLoading
    } = useSelector((state) => state.cart.openCart);

    useLayoutEffect(() => {
        dispatch(readOpenCart());
        // eslint-disable-next-line
    }, []);

    return (
        <>

            <Helmet>
                <title>سبد خرید</title>
                <meta name="description" content="صفحه سبد خرید"/>
            </Helmet>

            <PageAnimation>

                <MainLayout>

                    <div className="row g-3">

                        <div className="col-24 col-md-15 col-lg-17">

                            <div className="vstack gap-3">

                                {/* recipient + recipient placeholder */}
                                <h1 className="fs-4 fw-bold text-primary">اطلاعات گیرنده</h1>

                                <Recipient user={user}/>

                                {/* shopping list */}
                                <h1 className="fs-4 fw-bold text-primary"> سبد خرید</h1>

                                {
                                    cartIsLoading ? (
                                        <BooksPlaceholder count={3} xs={24} sm={12} md={12} lg={8} xl={8}/>
                                    ) : (
                                        <ShoppingList orders={cart?.orders}/>
                                    )
                                }

                                {/* empty cart */}
                                {
                                    !cartIsLoading && (!cart || cart?.orders?.length === 0) && (
                                        <EmptyPlaceholder
                                            src={process.env.PUBLIC_URL + "/images/empty-cart.svg"}
                                            alt="سبد خرید خالی است"
                                            title="سبد خرید خالی است"
                                            width={250}
                                            height={250}
                                        />
                                    )
                                }

                            </div>

                        </div>

                        <div className="col-24 col-md-9 col-lg-7">

                            <div className="position-sticky vstack gap-3" style={{top: 15}}>

                                {/* price */}
                                <h1 className="fs-4 fw-bold text-primary">هزینه</h1>

                                {
                                    cartIsLoading ? (
                                        <Placeholder
                                            backgroundColor="#e0e0e0"
                                            animationColor="#eeeeee"
                                            borderRadius="0.5rem"
                                            height={90}
                                        />
                                    ) : (
                                        <Price cart={cart}/>
                                    )
                                }

                            </div>

                        </div>

                    </div>

                </MainLayout>

            </PageAnimation>

        </>
    );
};

export default Cart;
