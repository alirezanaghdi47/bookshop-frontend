import * as t from '../actionType';
import axios from 'axios';
import {showLoading, hideLoading} from './otherAction';
import {toast} from 'react-toastify';
import {delay} from "../../utils/functions";
import {endpoint} from "../../utils/variables";


// read categories
export const readCategories = (query) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_CATEGORIES});
    await delay(250);

    await axios
        .get(`${endpoint}/category/categories?${query}`, {
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
    await delay(250);

    await axios
        .get(`${endpoint}/category/categories/${id}`, {
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
    await delay(250);

    await axios
        .post(`${endpoint}/category/add-category`, payload, {
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
    await delay(250);

    await axios
        .put(`${endpoint}/category/edit-category/${id}`, payload, {
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
    await delay(250);

    await axios
        .patch(
            `${endpoint}/category/edit-category-status/${id}`,
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
