import {Helmet} from "react-helmet";

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../core/animation/PageAnimation";
import OtherLayout from "../components/layout/OtherLayout";
import EmptyPlaceholder from '../core/EmptyPlaceholder';


const ConnectionLost = () => {

    return (
        <>

            <Helmet>
                <title>شما به اینترنت متصل نیستید</title>
                <meta name="description" content="شما به اینترنت متصل نیستید"/>
            </Helmet>

            <PageAnimation>

                <OtherLayout>

                    <EmptyPlaceholder
                        src={process.env.PUBLIC_URL + '/images/connection-lost.svg'}
                        alt="اتصال خود را به اینترنت بررسی کنید"
                        title="اتصال خود را به اینترنت بررسی کنید"
                        width={300}
                        height={300}
                    />

                </OtherLayout>

            </PageAnimation>

        </>
    );
};

export default ConnectionLost;
