import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {register} from '../../stores/action/userAction';
import {useFormik} from 'formik';
import {registerSchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AuthLayout from '../../components/layout/AuthLayout';
import TextInput from '../../core/form/TextInput';
import PasswordInput from '../../core/form/PasswordInput';


const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            dispatch(register(values, navigate));
        },
        validationSchema: registerSchema
    });

    return (
        <>

            <Helmet>
                <title>عضویت</title>
                <meta name="description" content="صفحه عضویت کاربر جدید"/>
            </Helmet>

            <PageAnimation>

                <AuthLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h2 className="fs-2 fw-bold text-primary">عضویت</h2>

                            <Link to="/login" className="btn btn-sm btn-link link-danger text-decoration-none">
                                بازگشت
                            </Link>

                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-start w-100">
                            <TextInput
                                label="نام و نام خانوادگی ( فارسی )"
                                name="name"
                                value={formik.values?.name}
                                onChange={formik.handleChange}
                                error={formik.errors?.name}
                            />
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

                        <div className="d-flex flex-column justify-content-center align-items-start w-100">
                            <PasswordInput
                                label="رمز عبور"
                                name="password"
                                value={formik.values?.password}
                                onChange={formik.handleChange}
                                error={formik.errors?.password}
                            />
                        </div>

                        <div className="d-flex justify-content-center align-items-center w-100">
                            <button
                                className="btn btn-lg btn-primary w-100"
                                type="submit"
                                onClick={formik.handleSubmit}
                            >
                                عضویت
                            </button>
                        </div>

                        <div className="d-flex justify-content-between align-items-center w-100">
                            <Link to="/login" className="btn btn-link btn-sm link-gray">
                                ورود
                            </Link>
                            <Link to="/forget-password" className="btn btn-link btn-sm link-gray">
                                فراموشی رمز
                            </Link>
                        </div>

                    </div>

                </AuthLayout>

            </PageAnimation>

        </>
    );
};

export default Register;
