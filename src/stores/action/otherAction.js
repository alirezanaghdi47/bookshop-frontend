import * as t from './../actionType';


export const showLoading = () => {
    return {type: t.SHOW_LOADING};
};

export const hideLoading = () => {
    return {type: t.HIDE_LOADING};
};

export const startTimer = () => {
    return {type: t.STARTING_TIMER};
};

export const stopTimer = () => {
    return {type: t.STOPPING_TIMER};
};