import {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {readChart} from '../../stores/action/userAction';
import {useMediaQuery} from 'react-responsive';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../components/modules/animation/PageAnimation";
import AccountLayout from '../../components/layouts/AccountLayout';
import DashboardChart from '../../components/ui/DashboardChart';
import Placeholder from '../../components/modules/Placeholder';


const Dashboard = () => {

    const dispatch = useDispatch();
    const isMobile = useMediaQuery({maxWidth: 576});
    const {
        data: chart,
        isLoading: chartIsLoading
    } = useSelector((state) => state.user.chart);

    useLayoutEffect(() => {
        dispatch(readChart());
        // eslint-disable-next-line
    }, []);

    return (
        <>

            <Helmet>
                <title>داشبورد</title>
                <meta name="description" content="صفحه داشبورد پنل کاربر"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <h1 className="fs-4 fw-bold text-primary">داشبورد</h1>

                        {/* dashboard + dashboard placeholder */}
                        {
                            chartIsLoading ? (
                                <Placeholder
                                    backgroundColor="#e0e0e0"
                                    animationColor="#eeeeee"
                                    borderRadius="0.5rem"
                                    height={isMobile ? 480 : 180}
                                />
                            ) : (
                                <DashboardChart dashboard={chart}/>
                            )
                        }

                    </div>

                </AccountLayout>

            </PageAnimation>

        </>
    );
};

export default Dashboard;
