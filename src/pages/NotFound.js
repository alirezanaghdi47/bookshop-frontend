import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../core/animation/PageAnimation";
import OtherLayout from "../components/layout/OtherLayout";
import EmptyPlaceholder from '../core/EmptyPlaceholder';


const NotFound = () => {

    return (
        <>

            <Helmet>
                <title>صفحه مورد نظر یافت نشد</title>
                <meta name="description" content="صفحه ۴۰۴"/>
            </Helmet>

            <PageAnimation>

                <OtherLayout>

                    <EmptyPlaceholder
                        src={process.env.PUBLIC_URL + '/images/not-found.svg'}
                        alt="صفحه مورد نظر یافت نشد"
                        title="صفحه مورد نظر یافت نشد"
                        width={300}
                        height={300}
                    />

                </OtherLayout>

            </PageAnimation>

        </>
    );
};

export default NotFound;
