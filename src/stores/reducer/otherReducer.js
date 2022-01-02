import * as t from './../actionType';

const initialState = {
    showingAlert: true,
    showingMessage: "برای استفاده از وب سایت لطفا به VPN متصل شوید",
    showingLoading: false,
    startingTimer: false
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
        case t.STARTING_TIMER:
            return {
                ...state,
                startingTimer: true
            };
        case t.STOPPING_TIMER:
            return {
                ...state,
                startingTimer: false
            };
        default:
            return state;
    }
};

export default otherReducer;
