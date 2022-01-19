import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createCategory} from '../../stores/action/categoryAction';
import {useFormik} from 'formik';
import {addCategorySchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../components/modules/animation/PageAnimation";
import AccountLayout from '../../components/layouts/AccountLayout';
import TextInput from '../../components/modules/form/TextInput';


const AddCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            slug: ''
        },
        onSubmit: (values) => {
            dispatch(createCategory(values, navigate));
        },
        validationSchema: addCategorySchema
    });

    return (
        <>

            <Helmet>
                <title>افزودن دسته بندی</title>
                <meta name="description" content="صفحه افزودن دسته بندی"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h1 className="fs-4 fw-bold text-primary">افزودن دسته بندی</h1>

                            <Link to="/account/categories" className="btn btn-sm btn-link link-danger">
                                بازگشت
                                <i className="far fa-arrow-left fs-5 me-3"/>
                            </Link>

                        </div>

                        <div className="card vstack gap-3 p-3">

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <TextInput
                                    label="عنوان دسته بندی"
                                    name="name"
                                    value={formik.values?.name}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.name}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <TextInput
                                    label="عنوان انگلیسی دسته بندی"
                                    name="slug"
                                    value={formik.values?.slug}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.slug}
                                />
                            </div>

                            <div className="d-flex justify-content-end align-items-center w-100">
                                <button className="btn btn-primary" type="submit" onClick={formik.handleSubmit}>
                                    <i className="far fa-check fs-5 ms-2"/>
                                    اضافه کنید
                                </button>
                            </div>

                        </div>

                    </div>

                </AccountLayout>

            </PageAnimation>

        </>
    );
};

export default AddCategory;
