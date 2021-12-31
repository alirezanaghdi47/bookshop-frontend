import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {resendKey, verifyKey} from '../../stores/action/userAction';
import {useFormik} from 'formik';
import {verifyKeySchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AuthLayout from '../../components/layout/AuthLayout';
import NumberInput from '../../core/form/NumberInput';
import Counterdown from '../../core/Counterdown';


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

            <Helmet>
                <title>احراز هویت</title>
                <meta name="description" content="صفحه احراز هویت کاربر"/>
            </Helmet>

            <PageAnimation>

                <AuthLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <div className="d-flex justify-content-start align-items-center">

                                <h2 className="fs-2 fw-bold text-primary ms-3">احراز هویت</h2>

                                {
                                    expireForgetKey < Date.now() && !startingTimer ? (
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
