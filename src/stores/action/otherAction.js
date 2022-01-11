import * as t from './../actionType';

export const showLoading = () => {
    return {type: t.SHOW_LOADING};
};

export const hideLoading = () => {
    return {type: t.HIDE_LOADING};
};

export const showAlert = () => {
    return {type: t.SHOW_ALERT};
};

export const hideAlert = () => {
    return {type: t.HIDE_ALERT};
};
