import {useLayoutEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {createAdvertise} from '../../stores/action/advertiseAction';
import {readBooks} from '../../stores/action/bookAction';
import {useFormik} from 'formik';
import {addAdvertiseSchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AccountLayout from '../../components/layout/AccountLayout';
import FileInput from '../../core/form/FileInput';
import SelectBox from '../../core/form/SelectBox';

//====================//
//===== variable =====//
//====================//

const isPublished = [
    {value: true, label: 'منتشر شود'},
    {value: false, label: 'منتشر نشود'}
];


const AddAdvertise = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data: books} = useSelector((state) => state.book.books);
    const formik = useFormik({
        initialValues: {
            image: undefined,
            book: '',
            isPublished: ''
        },
        onSubmit: async (values) => {
            const formData = new FormData();

            formData.append('image', values.image);
            formData.append('book', values.book);
            formData.append('isPublished', values.isPublished);

            await dispatch(createAdvertise(formData, navigate));
        },
        validationSchema: addAdvertiseSchema
    });

    useLayoutEffect(() => {
        dispatch(readBooks(`page=${0}&&limit=${100}`));
        // eslint-disable-next-line
    }, []);

    return (
        <>

            <Helmet>
                <title>افزودن تبلیغ</title>
                <meta name="description" content="صفحه افزودن تبلیغات"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h1 className="fs-4 fw-bold text-primary">افزودن تبلیغ</h1>

                            <Link to="/account/advertises" className="btn btn-sm btn-link link-danger">
                                بازگشت
                                <i className="far fa-arrow-left fs-5 me-3"/>
                            </Link>

                        </div>

                        <div className="card vstack gap-3 p-3">

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <FileInput
                                    label="عکس تبلیغ"
                                    name="image"
                                    placeholder="عکس خود انتخاب کنید"
                                    acceptFiles={'.jpeg , .jpg , .png'}
                                    maxSize={1000000}
                                    value={formik.values?.image}
                                    setFieldValue={formik.setFieldValue}
                                    error={formik.errors?.image}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <SelectBox
                                    label="کتاب مورد تبلیغ"
                                    name="book"
                                    placeholder="انتخاب کنید"
                                    options={books.map((book) => ({
                                        value: book._id,
                                        label: book.name
                                    }))}
                                    value={formik.values?.book}
                                    setFieldValue={formik.setFieldValue}
                                    error={formik.errors?.book}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <SelectBox
                                    label="وضعیت انتشار تبلیغ"
                                    name="isPublished"
                                    placeholder="انتخاب کنید"
                                    options={isPublished}
                                    value={formik.values?.isPublished}
                                    setFieldValue={formik.setFieldValue}
                                    error={formik.errors?.isPublished}
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

export default AddAdvertise;
