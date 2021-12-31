import {memo} from "react";
import {useDispatch} from 'react-redux';
import {readPublishedBooks} from '../../stores/action/bookAction';
import {useFormik} from 'formik';

//=====================//
//===== component =====//
//=====================//

import SearchInput from '../../core/form/SearchInput';
import SortMenu from '../../core/SortMenu';


const Searchbar = ({page}) => {

    const dispatch = useDispatch();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            search: '',
            sort: ''
        },
        onSubmit: (values) => {
            dispatch(readPublishedBooks(`search=${values.search}&&sort=${values.sort}&&page=${page}&&limit=${12}`));
        }
    });

    return (
        <div className="d-flex justify-content-end align-items-center">

            {/* search input */}
            <SearchInput
                name="search"
                placeholder="جستجوی عنوان کتاب"
                value={formik.values.search}
                onChange={(value) => formik.setFieldValue('search', value)}
                onSubmit={formik.handleSubmit}
            />

            {/* sort menu */}
            <SortMenu
                value={formik.values.sort}
                onClick={(value) => formik.setFieldValue('sort', value)}
                onSubmit={formik.handleSubmit}
            />

        </div>
    );
};

export default memo(Searchbar);
