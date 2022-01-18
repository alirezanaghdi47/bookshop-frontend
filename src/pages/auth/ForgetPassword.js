import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {forgetPassword} from '../../stores/action/userAction';
import {useFormik} from 'formik';
import {forgetPasswordSchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AuthLayout from '../../components/layout/AuthLayout';
import TextInput from '../../core/form/TextInput';


const ForgetPassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: (values) => {
            dispatch(forgetPassword(values, navigate));
        },
        validationSchema: forgetPasswordSchema
    });

    return (
        <>

            <Helmet>
                <title>فراموشی رمز</title>
                <meta name="description" content="صفحه فراموشی رمز عبور"/>
            </Helmet>

            <PageAnimation>

                <AuthLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h2 className="fs-2 fw-bold text-primary">فراموشی رمز</h2>

                            <Link to="/login" className="btn btn-sm btn-link link-danger text-decoration-none">
                                بازگشت
                                <i className="far fa-arrow-left fs-5 me-3"/>
                            </Link>

                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-start w-100">
                            <TextInput
                                label="ایمیل"
                                name="email"
                                value={formik.values?.email}
                                onChange={formik.handleChange}
                                error={formik.errors?.email}
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

                        <div className="d-flex justify-content-between align-items-center w-100">
                            <Link to="/login" className="btn btn-link btn-sm link-gray">
                                ورود
                            </Link>
                            <Link to="/register" className="btn btn-link btn-sm link-gray">
                                عضویت
                            </Link>
                        </div>

                    </div>

                </AuthLayout>

            </PageAnimation>

        </>
    );
};

export default ForgetPassword;