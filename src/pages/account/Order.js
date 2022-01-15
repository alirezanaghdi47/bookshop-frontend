import {useLayoutEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {readCart} from '../../stores/action/cartAction';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AccountLayout from '../../components/layout/AccountLayout';
import Bill from '../../components/ui/Bill';
import Catcher from "../../components/ui/Catcher";
import OrderList from '../../components/ui/OrderList';
import BooksPlaceholder from '../../components/ui/placeholder/BooksPlaceholder';
import Placeholder from '../../core/Placeholder';


const Order = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const {data: cart, isLoading: cartIsLoading} = useSelector((state) => state.cart.cart);

    useLayoutEffect(() => {
        dispatch(readCart(params.id, navigate));
        // eslint-disable-next-line
    }, []);

    return (
        <>

            <Helmet>
                <title>سفارش</title>
                <meta name="description" content="صفحه سفارش"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h1 className="fs-4 fw-bold text-primary">صورت حساب</h1>

                            <Link to="/account/orders" className="btn btn-sm btn-link link-danger">
                                بازگشت
                                <i className="far fa-arrow-left fs-5 me-3"/>
                            </Link>

                        </div>

                        {/* bill + bill placeholder */}
                        {
                            cartIsLoading ? (
                                <Placeholder
                                    backgroundColor="#e0e0e0"
                                    animationColor="#eeeeee"
                                    borderRadius="0.5rem"
                                    height={180}
                                />
                            ) : (
                                <Bill cart={cart}/>
                            )
                        }

                        <h1 className="fs-4 fw-bold text-primary">اطلاعات گیرنده</h1>

                        {/* catcher + catcher placeholder */}
                        {
                            cartIsLoading ? (
                                <Placeholder
                                    backgroundColor="#e0e0e0"
                                    animationColor="#eeeeee"
                                    borderRadius="0.5rem"
                                    height={180}
                                />
                            ) : (
                                <Catcher user={cart?.user}/>
                            )
                        }

                        <h1 className="fs-4 fw-bold text-primary">سبد خرید</h1>

                        {/* order list + order list placeholder */}
                        {
                            cartIsLoading ? (
                                <BooksPlaceholder count={2} xs={24} sm={12} md={12} lg={8} xl={8}/>
                            ) : (
                                <OrderList cart={cart}/>
                            )
                        }

                    </div>

                </AccountLayout>

            </PageAnimation>

        </>
    );
};

export default Order;
