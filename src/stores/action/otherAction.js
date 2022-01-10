import * as t from './../actionType';

export const showLoading = () => {
    return {type: t.SHOW_LOADING};
};

export const hideLoading = () => {
    return {type: t.HIDE_LOADING};
};
