import * as t from './../actionType';

const initialState = {
    carts: {
        data: [],
        count: 0,
        isLoading: false
    },
    cart: {
        data: {},
        isLoading: false
    },
    openCart: {
        data: {
            totalPrice: 0,
            orders: []
        },
        isLoading: false
    }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_CARTS:
            return {
                ...state,
                carts: {
                    ...state.carts,
                    isLoading: true
                }
            };
        case t.SET_CARTS:
            return {
                ...state,
                carts: {
                    data: action.payload.data,
                    count: action.payload.count,
                    isLoading: false
                }
            };
        case t.GET_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    isLoading: true
                }
            };
        case t.SET_CART:
            return {
                ...state,
                cart: {
                    data: action.payload,
                    isLoading: false
                }
            };
        case t.GET_OPEN_CART:
            return {
                ...state,
                openCart: {
                    ...state.cart,
                    isLoading: true
                }
            };
        case t.SET_OPEN_CART:
            return {
                ...state,
                openCart: {
                    data: action.payload,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};

export default cartReducer;
