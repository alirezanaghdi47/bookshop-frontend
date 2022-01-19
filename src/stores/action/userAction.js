import * as t from '../actionType';
import axios from 'axios';
import {hideLoading, showLoading , startTimer} from './otherAction';
import jwtDecode from 'jwt-decode';
import {toast} from 'react-toastify';
import {delay} from "../../utils/functions";
import {endpoint, admin_acl} from "../../utils/variables";


// read users
export const readUsers = (query) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_USERS});
    await delay(250);

    await axios
        .get(`${endpoint}/user/users?${query}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({type: t.SET_USERS, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read chart
export const readChart = () => async (dispatch, getState) => {

    const {token, acl} = getState().user.profile;

    await dispatch({type: t.GET_CHART});
    await delay(250);

    await axios
        .get(acl === admin_acl ? `${endpoint}/admin-chart` : `${endpoint}/chart`, {headers: {'x-auth-token': token}})
        .then(async (res) => {
            await dispatch({type: t.SET_CHART, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// register
export const register = (payload, navigate) => async (dispatch) => {

    await dispatch(showLoading());
    await delay(250);

    await axios
        .post(`${endpoint}/user/register`, payload)
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/login');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await navigate('/register');
            await toast.error(err.response.data);
        });
};

// login
export const login = (payload, navigate) => async (dispatch) => {

    await dispatch(showLoading());
    await delay(250);

    await axios
        .post(`${endpoint}/user/login`, payload)
        .then(async (res) => {
            await dispatch({
                type: t.LOGIN,
                payload: {token: res.data.data, ...jwtDecode(res.data.data)}
            });
            await dispatch(hideLoading());
            await navigate('/');
            await toast.success(res.data.message);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await navigate('/login');
            await toast.error(err.response.data);
        });
};

// forget password
export const forgetPassword = (payload, navigate) => async (dispatch) => {

    await dispatch(showLoading());
    await delay(250);

    await axios
        .post(`${endpoint}/user/forget-password`, payload)
        .then(async (res) => {
            await dispatch({type: t.FORGET_PASSWORD, payload: res.data.data});
            await dispatch(hideLoading());
            await navigate('/verify-key');
            await dispatch(startTimer());
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await navigate('/forget-password');
            await toast.error(err.response.data);
        });
};

// resend key
export const resendKey = (navigate) => async (dispatch, getState) => {

    const email = getState().user.profile.email;

    await dispatch(showLoading());
    await delay(250);

    if (!email) {
        await dispatch(hideLoading());
        await navigate('/forget-password');
        await toast.error('ابتدا باید ایمیل خود را وارد کنید');
        return;
    }

    await axios
        .post(`${endpoint}/user/resend-key`, {email: email})
        .then(async (res) => {
            await dispatch({type: t.FORGET_PASSWORD, payload: res.data.data});
            await dispatch(hideLoading());
            await dispatch(startTimer());
            await toast.success(res.data.message);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// verify key
export const verifyKey = (payload, navigate) => async (dispatch, getState) => {

    const email = getState().user.profile.email;

    await dispatch(showLoading());
    await delay(250);

    if (!email) {
        await dispatch(hideLoading());
        await navigate('/forget-password');
        await toast.error('ابتدا باید ایمیل خود را وارد کنید');
        return;
    }

    await axios
        .post(`${endpoint}/user/verify-key`, {
            email: email,
            forgetKey: payload.forgetKey
        })
        .then(async (res) => {
            await dispatch({type: t.VERIFY_KEY, payload: payload.forgetKey});
            await dispatch(hideLoading());
            await navigate('/verify-password');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await navigate('/verify-key');
            await toast.error(err.response.data);
        });
};

// confirm password
export const confirmPassword = (payload, navigate) => async (dispatch, getState) => {

    const {email, forgetKey} = getState().user.profile;

    await dispatch(showLoading());
    await delay(250);

    if (!email) {
        await dispatch(hideLoading());
        await navigate('/forget-password');
        await toast.error('ابتدا باید ایمیل خود را وارد کنید');
        return;
    }

    if (!forgetKey) {
        await dispatch(hideLoading());
        await navigate('/verify-key');
        await toast.error('ابتدا باید کد بازیابی خود را وارد کنید');
        return;
    }

    await axios
        .post(`${endpoint}/user/confirm-password`, {
            email: email,
            password: payload.password
        })
        .then(async (res) => {
            await dispatch({type: t.CONFIRM_PASSWORD});
            await dispatch(hideLoading());
            await navigate('/login');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await navigate('/forget-password');
            await toast.error(err.response.data);
        });
};

// logout
export const logout = (navigate) => async (dispatch) => {
    await navigate('/');
    await delay(500);
    await dispatch({type: t.LOGOUT});
    await toast.error('شما از اکانت خود خارج شدید');
};

// expire
export const expire = (navigate) => async (dispatch) => {
    await navigate('/');
    await delay(500);
    await dispatch({type: t.EXPIRE});
};

// update user
export const updateUser = (payload) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(250);

    await axios
        .put(`${endpoint}/user/edit-user`, payload, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({
                type: t.UPDATE_USER,
                payload: {token: res.data.data, ...jwtDecode(res.data.data)}
            });
            await dispatch(hideLoading());
            await toast.success(res.data.message);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// delete avatar user
export const deleteAvatarUser = (navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(250);

    await axios
        .delete(`${endpoint}/user/delete-avatar-user`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({
                type: t.DELETE_USER_AVATAR,
                payload: {token: res.data.data, ...jwtDecode(res.data.data)}
            });
            await dispatch(hideLoading());
            await navigate('/account/profile');
            await toast.success(res.data.message);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};
