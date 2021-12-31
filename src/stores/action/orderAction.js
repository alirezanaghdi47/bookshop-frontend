import axios from 'axios';
import {hideLoading, showLoading} from './otherAction';
import {delay} from '../../utils/functions';
import {toast} from 'react-toastify';

const {REACT_APP_ENDPOINT} = process.env;

// create order
export const createOrder = (book) => async (dispatch, getState) => {

    const token = getState().user.profile.token;
    const {data: cart} = getState().cart.openCart;

    const order = cart?.orders?.find((item) => item.book._id === book._id);

    await dispatch(showLoading());
    await delay(500);

    if (order?.entity === 5) {
        await dispatch(hideLoading());
        await toast.error('حداکثر تعداد سفارش برای هر کتاب ۵ جلد است');
        return;
    }

    await axios
        .post(
            `${REACT_APP_ENDPOINT}/order/add-order`,
            {book: book},
            {headers: {'x-auth-token': token}}
        )
        .then(async (res) => {
            await dispatch(hideLoading());
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// update order
export const updateOrder = (order, book) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(500);

    await axios
        .put(
            `${REACT_APP_ENDPOINT}/order/edit-order/${order._id}`,
            {book: book},
            {headers: {'x-auth-token': token}}
        )
        .then(async (res) => {
            await dispatch(hideLoading());
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};

// delete order
export const deleteOrder = (order, book) => async (dispatch, getState) => {

    const token = getState().user.profile.token;

    await dispatch(showLoading());
    await delay(500);

    await axios
        .delete(`${REACT_APP_ENDPOINT}/order/delete-order/${order._id}`, {
            data: {book: book},
            headers: {'x-auth-token': token}
        })
        .then(async (res) => {
            await dispatch(hideLoading());
            await toast.success(res.data);
        })
        .catch(async (err) => {
            await dispatch(hideLoading());
            await toast.error(err.response.data);
        });
};
