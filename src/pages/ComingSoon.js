import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../core/animation/PageAnimation";
import OtherLayout from "../components/layout/OtherLayout";
import EmptyPlaceholder from '../core/EmptyPlaceholder';


const ComingSoon = () => {

    return (
        <>

            <Helmet>
                <title>صفحه در دست ساخت است</title>
                <meta name="description" content="صفحه در دست ساخت است"/>
            </Helmet>

            <PageAnimation>

                <OtherLayout>

                    <EmptyPlaceholder
                        src={process.env.PUBLIC_URL + '/images/coming-soon.svg'}
                        alt="صفحه در دست ساخت است"
                        title="صفحه در دست ساخت است"
                        width={300}
                        height={300}
                    />

                    <Link
                        to="/"
                        className="btn btn-sm btn-primary w-max-content mt-4 mx-auto"
                    >
                        بازگشت به صفحه اصلی
                    </Link>

                </OtherLayout>

            </PageAnimation>

        </>
    );
};

export default ComingSoon;
