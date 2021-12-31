import * as t from './../actionType';

const initialState = {
    categories: {
        data: [],
        count: 0,
        isLoading: false
    },
    category: {
        data: {},
        isLoading: false
    }
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_CATEGORIES:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    isLoading: true
                }
            };
        case t.SET_CATEGORIES:
            return {
                ...state,
                categories: {
                    data: action.payload.data,
                    count: action.payload.count,
                    isLoading: false
                }
            };
        case t.GET_CATEGORY:
            return {
                ...state,
                category: {
                    ...state.category,
                    isLoading: true
                }
            };
        case t.SET_CATEGORY:
            return {
                ...state,
                category: {
                    data: action.payload,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};

export default categoryReducer;
