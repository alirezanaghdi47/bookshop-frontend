import {Link} from "react-router-dom";

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../components/modules/animation/PageAnimation";
import Seo from "../components/modules/Seo";
import OtherLayout from "../components/layouts/OtherLayout";
import EmptyPlaceholder from '../components/modules/EmptyPlaceholder';


const NotFound = () => {

    return (
        <>

            <Seo>
                <title>صفحه مورد نظر یافت نشد</title>
                <meta name="description" content="صفحه ۴۰۴"/>
            </Seo>

            <PageAnimation>

                <OtherLayout>

                    <EmptyPlaceholder
                        src={process.env.PUBLIC_URL + '/images/not-found.svg'}
                        alt="صفحه مورد نظر یافت نشد"
                        title="صفحه مورد نظر یافت نشد"
                        width={300}
                        height={300}
                    />

                    <Link
                        to="/"
                        className="btn btn-primary w-max-content mt-4 mx-auto"
                    >
                        بازگشت به صفحه اصلی
                        <i className="far fa-arrow-left fs-5 me-2"/>
                    </Link>

                </OtherLayout>

            </PageAnimation>

        </>
    );
};

export default NotFound;
