import * as t from './../actionType';
import axios from 'axios';
import {showLoading, hideLoading} from './otherAction';
import {delay} from '../../utils/functions';
import {toast} from 'react-toastify';

const {REACT_APP_ENDPOINT} = process.env;

// read published books
export const readPublishedBooks = (query) => async (dispatch) => {

    await dispatch({type: t.GET_PUBLISHED_BOOKS});
    await delay(500);

    await axios
        .get(`${REACT_APP_ENDPOINT}/book/published-books?${query}`)
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
    await delay(500);

    await axios
        .get(`${REACT_APP_ENDPOINT}/book/published-books/${id}`)
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
    await delay(500);

    await axios
        .get(`${REACT_APP_ENDPOINT}/book/relative-books/${id}`)
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
    await delay(500);

    await axios
        .get(`${REACT_APP_ENDPOINT}/book/books?${query}`, {
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
    await delay(500);

    await axios
        .get(`${REACT_APP_ENDPOINT}/book/books/${id}`)
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
    await delay(500);

    await axios
        .post(`${REACT_APP_ENDPOINT}/book/add-book`, payload, {
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
    await delay(500);

    await axios
        .put(`${REACT_APP_ENDPOINT}/book/edit-book/${id}`, payload, {
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
    await delay(500);

    await axios
        .delete(`${REACT_APP_ENDPOINT}/book/delete-book/${id}`, {
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