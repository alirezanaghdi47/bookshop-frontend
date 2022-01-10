import * as Yup from 'yup';

//================//
//===== auth =====//
//================//

export const loginSchema = Yup.object().shape({
    email: Yup.string().required('ایمیل الزامی است').email('فرمت ایمیل صحیح نمی باشد'),
    password: Yup.string()
        .required('رمز عبور الزامی است')
        .min(8, 'رمز عبور حداقل باید ۸ کاراکتر باشد')
        .max(20, 'رمز عبور حداکثر باید ۲۰ کاراکتر باشد')
});

export const registerSchema = Yup.object().shape({
    name: Yup.string()
        .required('نام و نام خانوادگی الزامی است')
        .min(3, 'نام و نام خانوادگی حداقل باید ۳ کاراکتر باشد')
        .max(60, 'نام و نام خانوادگی حداکثر باید ۶۰ کاراکتر باشد'),
    email: Yup.string().required('ایمیل الزامی است').email('فرمت ایمیل صحیح نمی باشد'),
    password: Yup.string()
        .required('رمز عبور الزامی است')
        .min(8, 'رمز عبور حداقل باید ۸ کاراکتر باشد')
        .max(20, 'رمز عبور حداکثر باید ۲۰ کاراکتر باشد')
});

export const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('ایمیل الزامی است').email('فرمت ایمیل صحیح نمی باشد')
});

export const verifyKeySchema = Yup.object().shape({
    forgetKey: Yup.string()
        .required('کد تایید الزامی است')
        .matches(/^\d{1,6}$/, 'کد تایید باید ۶ رقمی باشد')
});

export const verifyPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required('رمز عبور الزامی است')
        .min(8, 'رمز عبور حداقل باید ۸ کاراکتر باشد')
        .max(20, 'رمز عبور حداکثر باید ۲۰ کاراکتر باشد'),
    passwordRepeat: Yup.string()
        .required('تکرار رمز عبور الزامی است')
        .min(8, 'تکرار رمز عبور حداقل باید ۸ کاراکتر باشد')
        .max(20, 'تکرار رمز عبور حداکثر باید ۲۰ کاراکتر باشد')
        .oneOf([Yup.ref('password'), null], 'تکرار رمز عبور با رمز عبور یکسان نیست')
});

//===================//
//===== account =====//
//===================//

export const addCategorySchema = Yup.object().shape({
    name: Yup.string()
        .required('عنوان دسته بندی الزامی است')
        .min(3, 'عنوان دسته بندی حداقل باید ۳ کاراکتر باشد')
        .max(60, 'عنوان دسته بندی حداکثر باید ۶۰ کاراکتر باشد'),
    slug: Yup.string()
        .required('عنوان انگلیسی دسته بندی الزامی است')
        .min(3, 'عنوان انگلیسی دسته بندی حداقل باید ۳ کاراکتر باشد')
        .max(60, 'عنوان انگلیسی دسته بندی حداکثر باید ۶۰ کاراکتر باشد')
});

export const editCategorySchema = Yup.object().shape({
    name: Yup.string()
        .required('عنوان دسته بندی الزامی است')
        .min(3, 'عنوان دسته بندی حداقل باید ۳ کاراکتر باشد')
        .max(60, 'عنوان دسته بندی حداکثر باید ۶۰ کاراکتر باشد'),
    slug: Yup.string()
        .required('عنوان انگلیسی دسته بندی الزامی است')
        .min(3, 'عنوان انگلیسی دسته بندی حداقل باید ۳ کاراکتر باشد')
        .max(60, 'عنوان انگلیسی دسته بندی حداکثر باید ۶۰ کاراکتر باشد')
});

export const addBookSchema = Yup.object().shape({
    name: Yup.string()
        .required('عنوان کتاب الزامی است')
        .min(3, 'عنوان کتاب حداقل باید ۳ کاراکتر باشد')
        .max(60, 'عنوان کتاب حداکثر باید ۶۰ کاراکتر باشد'),
    image: Yup.mixed().required('عکس جلد کتاب الزامی است'),
    year: Yup.string().required('سال انتشار کتاب الزامی است'),
    lang: Yup.string().required('زبان کتاب الزامی است'),
    pageCount: Yup.number()
        .required('تعداد صفحات کتاب الزامی است')
        .typeError('تعداد صفحات کتاب باید از نوع عدد باشد')
        .min(0, 'تعداد صفحات کتاب باید بیشتر از ۰ باشد'),
    shabak: Yup.string()
        .required('شابک کتاب الزامی است')
        .matches(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/, 'شابک کتاب ۱۰ یا ۱۳ رقمی است'),
    price: Yup.string()
        .required('قیمت کتاب الزامی است')
        .typeError('قیمت کتاب باید از نوع عدد باشد')
        .min(0, 'حداقل قیمت کتاب ۰ است'),
    discount: Yup.number()
        .typeError('تخفیف کتاب باید از نوع عدد باشد')
        .min(0, 'حداقل میزان تخفیف ۰ درصد است')
        .max(100, 'حداکثر میزان تخفیف ۱۰۰ درصد است'),
    detail: Yup.string()
        .required('جزییات کتاب الزامی است')
        .min(10, 'توضیحات کتاب باید بیشتر از ۱۰ کاراکتر باشد'),
    numberInStock: Yup.number()
        .required('موجودیت کتاب الزامی است')
        .typeError('موجودیت کتاب باید از نوع عدد باشد')
        .min(0, 'حداقل موجودیت کتاب ۰ است'),
    authors: Yup.string()
        .required('نویسنده کتاب الزامی است')
        .min(3, 'نام نویسنده کتاب حداقل باید ۳ کاراکتر باشد')
        .max(60, 'نام نویسنده کتاب حداکثر باید ۶۰ کاراکتر باشد'),
    isPublished: Yup.boolean().required('وضعیت انتشار کتاب الزامی است'),
    category: Yup.string().required('دسته بندی کتاب الزامی است')
});

export const editBookSchema = Yup.object().shape({
    name: Yup.string()
        .required('عنوان کتاب الزامی است')
        .min(3, 'عنوان کتاب حداقل باید ۳ کاراکتر باشد')
        .max(60, 'عنوان کتاب حداکثر باید ۶۰ کاراکتر باشد'),
    image: Yup.mixed(),
    year: Yup.string().required('سال انتشار کتاب الزامی است'),
    lang: Yup.string().required('زبان کتاب الزامی است'),
    pageCount: Yup.number()
        .required('تعداد صفحات کتاب الزامی است')
        .typeError('تعداد صفحات کتاب باید از نوع عدد باشد')
        .min(0, 'تعداد صفحات کتاب باید بیشتر از ۰ باشد'),
    shabak: Yup.string()
        .required('شابک کتاب الزامی است')
        .matches(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/, 'شابک کتاب ۱۰ یا ۱۳ رقمی است'),
    price: Yup.string()
        .required('قیمت کتاب الزامی است')
        .typeError('قیمت کتاب باید از نوع عدد باشد')
        .min(0, 'حداقل قیمت کتاب ۰ است'),
    discount: Yup.number()
        .typeError('تخفیف کتاب باید از نوع عدد باشد')
        .min(0, 'حداقل میزان تخفیف ۰ درصد است')
        .max(100, 'حداکثر میزان تخفیف ۱۰۰ درصد است'),
    detail: Yup.string()
        .required('جزییات کتاب الزامی است')
        .min(10, 'توضیحات کتاب باید بیشتر از ۱۰ کاراکتر باشد'),
    numberInStock: Yup.number()
        .required('موجودیت کتاب الزامی است')
        .typeError('موجودیت کتاب باید از نوع عدد باشد')
        .min(0, 'حداقل موجودیت کتاب ۰ است'),
    authors: Yup.string()
        .required('نویسنده کتاب الزامی است')
        .min(3, 'نام نویسنده کتاب حداقل باید ۳ کاراکتر باشد')
        .max(60, 'نام نویسنده کتاب حداکثر باید ۶۰ کاراکتر باشد'),
    isPublished: Yup.boolean().required('وضعیت انتشار کتاب الزامی است'),
    category: Yup.string().required('دسته بندی کتاب الزامی است')
});

export const profileSchema = Yup.object().shape({
    avatar: Yup.mixed(),
    name: Yup.string(),
    email: Yup.string(),
    melliCode: Yup.string().matches(/^\d{3}-\d{4}-\d{3}$/, 'کد ملی ۱۰ رقمی است'),
    gender: Yup.string(),
    postalCode: Yup.string().matches(/^\d{10}$/, 'کد پستی ۱۰ رقمی است'),
    address: Yup.string().max(1000, 'آدرس حداکثر باید ۱۰۰۰ کاراکتر باشد')
});
