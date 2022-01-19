import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {register} from '../../stores/action/userAction';
import {useFormik} from 'formik';
import {registerSchema} from '../../utils/validations';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../components/modules/animation/PageAnimation";
import Seo from "../../components/modules/Seo";
import AuthLayout from '../../components/layouts/AuthLayout';
import TextInput from '../../components/modules/form/TextInput';
import PasswordInput from '../../components/modules/form/PasswordInput';


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

            <Seo>
                <title>عضویت</title>
                <meta name="description" content="صفحه عضویت کاربر جدید"/>
            </Seo>

            <PageAnimation>

                <AuthLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h2 className="fs-2 fw-bold text-primary">عضویت</h2>

                            <Link to="/login" className="btn btn-sm btn-link link-danger text-decoration-none">
                                بازگشت
                                <i className="far fa-arrow-left fs-5 me-3"/>
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
                                <i className="fas fa-arrow-right fs-5 ms-3"/>
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
