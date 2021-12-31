import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAvatarUser, updateUser} from '../../stores/action/userAction';
import {useFormik} from 'formik';
import {profileSchema} from '../../utils/validations';
import {Helmet} from 'react-helmet';

//=====================//
//===== component =====//
//=====================//

import PageAnimation from "../../core/animation/PageAnimation";
import AccountLayout from '../../components/layout/AccountLayout';
import AvatarInput from '../../core/form/AvatarInput';
import SelectBox from '../../core/form/SelectBox';
import NumberInput from '../../core/form/NumberInput';
import TextInput from '../../core/form/TextInput';
import Textarea from '../../core/form/Textarea';

//====================//
//===== variable =====//
//====================//

const genders = [
    {value: 'مرد', label: 'مرد'},
    {value: 'زن', label: 'زن'}
];


const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.profile);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            avatar: undefined,
            name: user.name,
            email: user.email,
            gender: user.gender,
            melliCode: user.melliCode,
            postalCode: user.postalCode,
            address: user.address
        },
        onSubmit: async (values, {resetForm}) => {
            const formData = new FormData();

            formData.append('avatar', values.avatar);
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('gender', values.gender);
            formData.append('melliCode', values.melliCode);
            formData.append('postalCode', values.postalCode);
            formData.append('address', values.address);

            await dispatch(updateUser(formData));
            await resetForm();
        },
        validationSchema: profileSchema
    });

    return (
        <>

            <Helmet>
                <title>اطلاعات کاربری</title>
                <meta name="description" content="صفحه پروفایل کاربر"/>
            </Helmet>

            <PageAnimation>

                <AccountLayout>

                    <div className="vstack gap-3">

                        <h1 className="fs-4 fw-bold text-primary">اطلاعات کاربری</h1>

                        <div className="card vstack gap-3 p-3">

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <AvatarInput
                                    label="عکس پروفایل"
                                    name="avatar"
                                    placeholder="عکس خود انتخاب کنید"
                                    preview={user.avatarUrl}
                                    acceptFiles={'.jpeg , .jpg , .png'}
                                    maxSize={1000000}
                                    value={formik.values?.avatar}
                                    setFieldValue={formik.setFieldValue}
                                    error={formik.errors?.avatar}
                                    onRemove={() => dispatch(deleteAvatarUser(navigate))}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <TextInput
                                    label="نام و نام خانوادگی"
                                    name="name"
                                    value={formik.values?.name}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.name}
                                    disabled
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <TextInput
                                    label="ایمیل"
                                    name="email"
                                    value={formik.values?.email}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.email}
                                    disabled
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <NumberInput
                                    label="کد ملی"
                                    name="melliCode"
                                    value={formik.values?.melliCode}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.melliCode}
                                    options={{
                                        delimiter: '-',
                                        blocks: [3, 4, 3]
                                    }}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <SelectBox
                                    label="جنسیت"
                                    name="gender"
                                    placeholder="انتخاب کنید"
                                    options={genders}
                                    value={formik.values?.gender}
                                    setFieldValue={formik.setFieldValue}
                                    error={formik.errors?.gender}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <NumberInput
                                    label="کد پستی"
                                    name="postalCode"
                                    value={formik.values?.postalCode}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.postalCode}
                                    options={{
                                        blocks: [10]
                                    }}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <Textarea
                                    label="آدرس"
                                    name="address"
                                    value={formik.values?.address}
                                    onChange={formik.handleChange}
                                    error={formik.errors?.address}
                                    rows={10}
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

export default Profile;
