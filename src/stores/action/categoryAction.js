import * as t from '../actionType';
import axios from 'axios';
import {showLoading, hideLoading} from './otherAction';
import {toast} from 'react-toastify';

const {REACT_APP_ENDPOINT} = process.env;

// read categories
export const readCategories = (query) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_CATEGORIES});

    await axios
        .get(`${REACT_APP_ENDPOINT}/category/categories?${query}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({type: t.SET_CATEGORIES, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read category
export const readCategory = (id) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_CATEGORY});

    await axios
        .get(`${REACT_APP_ENDPOINT}/category/categories/${id}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({type: t.SET_CATEGORY, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// create category
export const createCategory = (payload, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());

    await axios
        .post(`${REACT_APP_ENDPOINT}/category/add-category`, payload, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/account/categories');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// update category
export const updateCategory = (id, payload, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());

    await axios
        .put(`${REACT_APP_ENDPOINT}/category/edit-category/${id}`, payload, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/account/categories');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// delete category
export const deleteCategory = (id, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());

    await axios
        .patch(
            `${REACT_APP_ENDPOINT}/category/edit-category-status/${id}`,
            {isRemoved: true},
            {headers: {'x-auth-token': token}}
        )
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/account/categories');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};
