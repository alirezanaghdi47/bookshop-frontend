import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {confirmPassword} from '../../stores/action/userAction';
import {useFormik} from 'formik';
import {verifyPasswordSchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AuthLayout from '../../components/layout/AuthLayout';
import PasswordInput from '../../core/form/PasswordInput';


const VerifyPassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: '',
            passwordRepeat: ''
        },
        onSubmit: async (values) => {
            await dispatch(confirmPassword(values, navigate));
        },
        validationSchema: verifyPasswordSchema
    });

    return (
        <>

            <Helmet>
                <title>تغییر رمز</title>
                <meta name="description" content="صفحه تغییر رمز عبور قدیم"/>
            </Helmet>

            <PageAnimation>

                <AuthLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h2 className="fs-2 fw-bold text-primary">رمز عبور جدید</h2>

                            <Link to="/verify-key" className="btn btn-sm btn-link link-danger text-decoration-none">
                                بازگشت
                                <i className="far fa-arrow-left fs-5 me-3"/>
                            </Link>

                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-start w-100">
                            <PasswordInput
                                label="رمز عبور"
                                name="password"
                                value={formik.values?.password}
                                onChange={formik.handleChange}
                                error={formik.errors?.password}
                            />
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-start w-100">
                            <PasswordInput
                                label="تکرار رمز عبور"
                                name="passwordRepeat"
                                value={formik.values?.passwordRepeat}
                                onChange={formik.handleChange}
                                error={formik.errors?.passwordRepeat}
                            />
                        </div>

                        <div className="d-flex justify-content-center align-items-center w-100">
                            <button
                                className="btn btn-lg btn-primary w-100"
                                type="submit"
                                onClick={formik.handleSubmit}
                            >
                                <i className="fas fa-arrow-right fs-5 ms-3"/>
                                ثبت رمز عبور جدید
                            </button>
                        </div>

                    </div>

                </AuthLayout>

            </PageAnimation>

        </>
    );
};

export default VerifyPassword;