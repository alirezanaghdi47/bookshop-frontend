import * as t from './../actionType';
import axios from 'axios';
import {showLoading, hideLoading} from './otherAction';
import {toast} from 'react-toastify';
import {delay} from "../../utils/functions";
import {endpoint} from "../../utils/variables";


// read published books
export const readPublishedBooks = (query) => async (dispatch) => {

    await dispatch({type: t.GET_PUBLISHED_BOOKS});
    await delay(250);

    await axios
        .get(`${endpoint}/book/published-books?${query}`)
        .then(async (res) => {
            await dispatch({type: t.SET_PUBLISHED_BOOKS, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read published book
export const readPublishedBook = (id, navigate) => async (dispatch) => {

    await dispatch({type: t.GET_BOOK});
    await delay(250);

    await axios
        .get(`${endpoint}/book/published-books/${id}`)
        .then(async (res) => {
            if (!res.data) await navigate('/404');
            await dispatch({type: t.SET_BOOK, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read relative books
export const readRelativeBooks = (id) => async (dispatch) => {

    await dispatch({type: t.GET_RELATIVE_BOOKS});
    await delay(250);

    await axios
        .get(`${endpoint}/book/relative-books/${id}`)
        .then(async (res) => {
            await dispatch({type: t.SET_RELATIVE_BOOKS, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read books
export const readBooks = (query) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_BOOKS});
    await delay(250);

    await axios
        .get(`${endpoint}/book/books?${query}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({type: t.SET_BOOKS, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read book
export const readBook = (id) => async (dispatch) => {

    await dispatch({type: t.GET_BOOK});
    await delay(250);

    await axios
        .get(`${endpoint}/book/books/${id}`)
        .then(async (res) => {
            await dispatch({type: t.SET_BOOK, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// create book
export const createBook = (payload, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(250);

    await axios
        .post(`${endpoint}/book/add-book`, payload, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/account/books');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// update book
export const updateBook = (id, payload, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(250);

    await axios
        .put(`${endpoint}/book/edit-book/${id}`, payload, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/account/books');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// delete book
export const deleteBook = (id, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(250);

    await axios
        .delete(`${endpoint}/book/delete-book/${id}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/account/books');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};