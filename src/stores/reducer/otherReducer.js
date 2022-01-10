import * as t from './../actionType';

const initialState = {
    showingLoading: false,
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
        default:
            return state;
    }
};

export default otherReducer;
