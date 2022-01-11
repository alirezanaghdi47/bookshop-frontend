import * as t from './../actionType';

const initialState = {
    showingLoading: false,
    showingAlert: true,
};

const otherReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.SHOW_LOADING:
            return {
                ...state,
                showingLoading: true
            };
        case t.HIDE_LOADING:
            return {
                ...state,
                showingLoading: false
            };
        case t.SHOW_ALERT:
            return {
                ...state,
                showingAlert: true
            };
        case t.HIDE_ALERT:
            return {
                ...state,
                showingAlert: false
            };
        default:
            return state;
    }
};

export default otherReducer;
