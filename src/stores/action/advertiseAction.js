import * as t from './../actionType';
import axios from 'axios';
import {showLoading, hideLoading} from './otherAction';
import {delay} from '../../utils/functions';
import {toast} from 'react-toastify';

const {REACT_APP_ENDPOINT} = process.env;

// read advertises
export const readAdvertises = (query) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_ADVERTISES});
    await delay(500);

    await axios
        .get(`${REACT_APP_ENDPOINT}/advertise/advertises?${query}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({type: t.SET_ADVERTISES, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read published advertises
export const readPublishedAdvertises = (query) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_PUBLISHED_ADVERTISES});
    await delay(500);

    await axios
        .get(`${REACT_APP_ENDPOINT}/advertise/published-advertises?${query}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({
                type: t.SET_PUBLISHED_ADVERTISES,
                payload: res.data
            });
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read advertise
export const readAdvertise = (id) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_ADVERTISE});
    await delay(500);

    await axios
        .get(`${REACT_APP_ENDPOINT}/advertise/advertises/${id}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({type: t.SET_ADVERTISE, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// create advertise
export const createAdvertise = (payload, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(500);

    await axios
        .post(`${REACT_APP_ENDPOINT}/advertise/add-advertise`, payload, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/account/advertises');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// update advertise
export const updateAdvertise = (id, payload, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(500);

    await axios
        .put(`${REACT_APP_ENDPOINT}/advertise/edit-advertise/${id}`, payload, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/account/advertises');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// delete advertise
export const deleteAdvertise = (id, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(500);

    await axios
        .delete(`${REACT_APP_ENDPOINT}/advertise/delete-advertise/${id}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/account/advertises');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};
