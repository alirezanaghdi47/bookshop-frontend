import * as t from './../actionType';

const initialState = {
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
