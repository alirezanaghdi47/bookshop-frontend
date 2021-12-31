import * as t from './../actionType';

const initialState = {
    advertises: {
        data: [],
        count: 0,
        isLoading: false
    },
    publishedAdvertises: {
        data: [],
        count: 0,
        isLoading: false
    },
    advertise: {
        data: {},
        isLoading: false
    }
};

const advertiseReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_ADVERTISES:
            return {
                ...state,
                advertises: {
                    ...state.advertises,
                    isLoading: true
                }
            };
        case t.SET_ADVERTISES:
            return {
                ...state,
                advertises: {
                    data: action.payload.data,
                    count: action.payload.count,
                    isLoading: false
                }
            };
        case t.GET_PUBLISHED_ADVERTISES:
            return {
                ...state,
                publishedAdvertises: {
                    ...state.advertises,
                    isLoading: true
                }
            };
        case t.SET_PUBLISHED_ADVERTISES:
            return {
                ...state,
                publishedAdvertises: {
                    data: action.payload.data,
                    count: action.payload.count,
                    isLoading: false
                }
            };
        case t.GET_ADVERTISE:
            return {
                ...state,
                advertise: {
                    ...state.advertise,
                    isLoading: true
                }
            };
        case t.SET_ADVERTISE:
            return {
                ...state,
                advertise: {
                    data: action.payload,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};

export default advertiseReducer;
