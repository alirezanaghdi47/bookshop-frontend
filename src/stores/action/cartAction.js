import * as t from '../actionType';
import axios from 'axios';
import {hideLoading, showLoading} from './otherAction';
import {toast} from 'react-toastify';
import {delay} from "../../utils/functions";
import {endpoint} from "../../utils/variables";


// read carts
export const readCarts = (query) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_CARTS});
    await delay(500);

    await axios
        .get(`${endpoint}/cart/carts?${query}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({type: t.SET_CARTS, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read cart
export const readCart = (id, navigate) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_CART});
    await delay(500);

    await axios
        .get(`${endpoint}/cart/carts/${id}`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            if (!res.data) await navigate('/404');
            await dispatch({type: t.SET_CART, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// read open cart
export const readOpenCart = () => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch({type: t.GET_OPEN_CART});
    await delay(500);

    await axios
        .get(`${endpoint}/cart/open-cart`, {
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch({type: t.SET_OPEN_CART, payload: res.data});
        })
        .catch(async (err) => {
            console.log(err);
        });
};

// update cart
export const updateCart = (cart, navigate) => async (dispatch, getState) => {

    const {token, address, postalCode} = getState().user.profile;

    await dispatch(showLoading());
    await delay(500);

    if (!address && !postalCode) {
        await dispatch(hideLoading());
        await toast.error('ابتدا باید اطلاعات گیرنده را تکمیل نمایید');
        return;
    }

    await axios
        .patch(
            `${endpoint}/cart/edit-cart/${cart._id}`,
            {},
            {headers: {'x-auth-token': token}}
        )
        .then(async (res) => {
            await dispatch(hideLoading());
            await navigate('/');
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};
