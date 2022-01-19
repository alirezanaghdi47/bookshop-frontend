import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {resendKey, verifyKey} from '../../stores/action/userAction';
import {useFormik} from 'formik';
import {verifyKeySchema} from '../../utils/validations';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../components/modules/animation/PageAnimation";
import Seo from "../../components/modules/Seo";
import AuthLayout from '../../components/layouts/AuthLayout';
import NumberInput from '../../components/modules/form/NumberInput';
import Counterdown from '../../components/modules/Counterdown';


const VerifyKey = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const startingTimer = useSelector((state) => state.other.startingTimer);
    const expireForgetKey = useSelector((state) => state.user.profile.expireForgetKey);
    const formik = useFormik({
        initialValues: {
            forgetKey: ''
        },
        onSubmit: (values) => {
            dispatch(verifyKey(values, navigate));
        },
        validationSchema: verifyKeySchema
    });

    return (
        <>

            <Seo>
                <title>احراز هویت</title>
                <meta name="description" content="صفحه احراز هویت کاربر"/>
            </Seo>

            <PageAnimation>

                <AuthLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <div className="d-flex justify-content-start align-items-center">

                                <h2 className="fs-2 fw-bold text-primary ms-3">احراز هویت</h2>

                                {
                                    expireForgetKey < Date.now() || !startingTimer ? (
                                        <button
                                            className="btn btn-sm btn-warning"
                                            onClick={() => dispatch(resendKey(navigate))}
                                        >
                                            کد بازیابی جدید
                                        </button>
                                    ) : (
                                        <Counterdown date={expireForgetKey}/>
                                    )
                                }

                            </div>

                            <Link
                                to="/forget-password"
                                className="btn btn-sm btn-link link-danger text-decoration-none"
                            >
                                بازگشت
                                <i className="far fa-arrow-left fs-5 me-3"/>
                            </Link>

                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-start w-100">
                            <NumberInput
                                label="کد بازیابی رمز عبور"
                                name="forgetKey"
                                value={formik.values?.forgetKey}
                                onChange={formik.handleChange}
                                error={formik.errors?.forgetKey}
                                options={{}}
                            />
                        </div>

                        <div className="d-flex justify-content-center align-items-center w-100">
                            <button
                                className="btn btn-lg btn-primary w-100"
                                type="submit"
                                onClick={formik.handleSubmit}
                            >
                                <i className="fas fa-arrow-right fs-5 ms-3"/>
                                بعدی
                            </button>
                        </div>

                    </div>

                </AuthLayout>

            </PageAnimation>

        </>
    );
};

export default VerifyKey;