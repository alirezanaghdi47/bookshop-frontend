import {useLayoutEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {createBook} from '../../stores/action/bookAction';
import {readCategories} from '../../stores/action/categoryAction';
import {range} from '../../utils/functions';
import {useFormik} from 'formik';
import {addBookSchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AccountLayout from '../../components/layout/AccountLayout';
import FileInput from '../../core/form/FileInput';
import SelectBox from '../../core/form/SelectBox';
import NumberInput from '../../core/form/NumberInput';
import TextInput from '../../core/form/TextInput';
import Textarea from "../../core/form/Textarea";

//====================//
//===== variable =====//
//====================//

const languages = [
    {value: 'فارسی', label: 'فارسی'},
    {value: 'انگلیسی', label: 'انگلیسی'}
];

const isPublished = [
    {value: true, label: 'منتشر شود'},
    {value: false, label: 'منتشر نشود'}
];

const years = range(1300, 1401).map((year) => ({
    value: `${year}`,
    label: `${year}`
}));


const AddBook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data: categories} = useSelector((state) => state.category.categories);
    const formik = useFormik({
        initialValues: {
            name: '',
            image: undefined,
            year: '',
            lang: '',
            pageCount: undefined,
            shabak: '',
            price: undefined,
            discount: undefined,
            numberInStock: undefined,
            detail: '',
            authors: '',
            isPublished: '',
            category: ''
        },
        onSubmit: async (values) => {
            const formData = new FormData();

            formData.append('name', values.name);
            formData.append('image', values.image);
            formData.append('year', values.year);
            formData.append('lang', values.lang);
            formData.append('pageCount', parseInt(values.pageCount));
            formData.append('shabak', values.shabak);
            formData.append('price', parseInt(values.price.replace(',', '')));
            formData.append('discount', parseInt(values.discount) || 0);
            formData.append('numberInStock', parseInt(values.numberInStock));
            formData.append('detail', values.detail);
            formData.append('authors', values.authors);
            formData.append('isPublished', values.isPublished);
            formData.append('category', values.category);

            await dispatch(createBook(formData, navigate));
        },
        validationSchema: addBookSchema
    });

    useLayoutEffect(() => {
        dispatch(readCategories());
        // eslint-disable-next-line
    }, []);

    return (
        <>

            <Helmet>
                <title>افزودن کتاب</title>
                <meta name="description" content="صفحه افزودن تبلیغ"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <div className="d-flex justify-content-between align-items-center w-100">

                            <h1 className="fs-4 fw-bold text-primary">افزودن کتاب</h1>

                            <Link to="/account/books" className="btn btn-sm btn-link link-danger">
                                بازگشت
                                <i className="far fa-arrow-left fs-5 me-3"/>
                            </Link>

                        </div>

                        <div className="card vstack gap-3 p-3">

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <FileInput
                                    label="عکس جلد کتاب"
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
                                <TextInput
                                    label="عنوان کتاب"
                                    name="name"
                                    value={formik.values?.name}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.name}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <TextInput
                                    label="نویسنده های کتاب"
                                    name="authors"
                                    value={formik.values?.authors}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.authors}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <SelectBox
                                    label="زبان کتاب"
                                    name="lang"
                                    placeholder="انتخاب کنید"
                                    options={languages}
                                    value={formik.values?.lang}
                                    setFieldValue={formik.setFieldValue}
                                    error={formik.errors?.lang}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <SelectBox
                                    label="دسته بندی کتاب"
                                    name="category"
                                    placeholder="انتخاب کنید"
                                    options={categories.map((category) => ({
                                        value: category._id,
                                        label: category.name
                                    }))}
                                    value={formik.values?.category}
                                    setFieldValue={formik.setFieldValue}
                                    error={formik.errors?.category}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <SelectBox
                                    label="سال انتشار کتاب"
                                    name="year"
                                    placeholder="انتخاب کنید"
                                    options={years}
                                    value={formik.values?.year}
                                    setFieldValue={formik.setFieldValue}
                                    error={formik.errors?.year}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <NumberInput
                                    label="تعداد صفحات کتاب"
                                    name="pageCount"
                                    value={formik.values?.pageCount}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.pageCount}
                                    options={{}}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <NumberInput
                                    label="شابک کتاب"
                                    name="shabak"
                                    value={formik.values?.shabak}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.shabak}
                                    options={{
                                        delimiter: '-',
                                        blocks: [3, 1, 2, 6, 1]
                                    }}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <NumberInput
                                    label="قیمت کتاب ( تومان )"
                                    name="price"
                                    value={formik.values?.price}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.price}
                                    options={{
                                        numeral: true,
                                        numeralThousandsGroupStyle: 'thousand'
                                    }}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <NumberInput
                                    label="تخفیف قیمت کتاب ( % )"
                                    name="discount"
                                    value={formik.values?.discount}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.discount}
                                    options={{}}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <NumberInput
                                    label="موجودیت کتاب ( جلد )"
                                    name="numberInStock"
                                    value={formik.values?.numberInStock}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.numberInStock}
                                    options={{}}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <Textarea
                                    label="جزییات کتاب"
                                    name="detail"
                                    value={formik.values?.detail}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.detail}
                                    rows={10}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <SelectBox
                                    label="وضعیت انتشار کتاب"
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

export default AddBook;
