import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from '../../stores/action/userAction';
import {useFormik} from 'formik';
import {loginSchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AuthLayout from '../../components/layout/AuthLayout';
import TextInput from '../../core/form/TextInput';
import PasswordInput from '../../core/form/PasswordInput';


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            await dispatch(login(values, navigate));
        },
        validationSchema: loginSchema
    });

    return (
        <>

            <Helmet>
                <title>ورود</title>
                <meta name="description" content="صفحه ورود کاربر"/>
            </Helmet>

            <PageAnimation>

                <AuthLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h2 className="fs-1 fw-bold text-primary">ورود</h2>

                            <Link to="/register" className="btn btn-link btn-sm link-gray">
                                عضویت
                            </Link>

                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-start w-100">
                            <TextInput
                                label="ایمیل"
                                name="email"
                                placeholder=""
                                value={formik.values?.email}
                                onChange={formik.handleChange}
                                error={formik.errors?.email}
                            />
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-start w-100">
                            <PasswordInput
                                label="رمز عبور"
                                name="password"
                                placeholder=""
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
                                ورود
                            </button>
                        </div>

                    </div>

                </AuthLayout>

            </PageAnimation>

        </>
    );
};

export default Login;
