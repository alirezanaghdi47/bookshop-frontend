import * as t from './../actionType';
import axios from 'axios';
import {showLoading, hideLoading} from './otherAction';
import {toast} from 'react-toastify';

const {REACT_APP_ENDPOINT} = process.env;

// read published books
export const readPublishedBooks = (query) => async (dispatch) => {

    await dispatch({type: t.GET_PUBLISHED_BOOKS});

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

// read discounted books
export const readDiscountedBooks = (query) => async (dispatch) => {

    await dispatch({type: t.GET_DISCOUNTED_BOOKS});

    await axios
        .get(`${REACT_APP_ENDPOINT}/book/discounted-books?${query}`)
        .then(async (res) => {
            await dispatch({type: t.SET_DISCOUNTED_BOOKS, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read newest books
export const readNewestBooks = (query) => async (dispatch) => {

    await dispatch({type: t.GET_NEWEST_BOOKS});

    await axios
        .get(`${REACT_APP_ENDPOINT}/book/newest-books?${query}`)
        .then(async (res) => {
            await dispatch({type: t.SET_NEWEST_BOOKS, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read books
export const readBooks = (query) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_BOOKS});

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