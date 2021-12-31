import {useLayoutEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {readCategory, updateCategory} from '../../stores/action/categoryAction';
import {useFormik} from 'formik';
import {editCategorySchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AccountLayout from '../../components/layout/AccountLayout';
import TextInput from '../../core/form/TextInput';


const EditCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const {data: category} = useSelector((state) => state.category.category);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: category?.name || '',
            slug: category?.slug || ''
        },
        onSubmit: async (values) => {
            await dispatch(updateCategory(params.id, values, navigate));
        },
        validationSchema: editCategorySchema
    });

    useLayoutEffect(() => {
        dispatch(readCategory(params.id));
        // eslint-disable-next-line
    }, [params]);

    return (
        <>

            <Helmet>
                <title>ویرایش دسته بندی</title>
                <meta name="description" content="صفحه ویرایش دسته بندی"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h1 className="fs-4 fw-bold text-primary">ویرایش دسته بندی</h1>

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
                                <button className="btn btn-warning" type="submit" onClick={formik.handleSubmit}>
                                    <i className="far fa-pen fs-5 ms-2"/>
                                    ویرایش کنید
                                </button>
                            </div>

                        </div>

                    </div>

                </AccountLayout>

            </PageAnimation>

        </>
    );
};

export default EditCategory;
