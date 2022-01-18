import * as t from './../actionType';
import {user_acl} from "../../utils/variables";


const initialState = {
    chart: {
        data: {},
        isLoading: false
    },
    users: {
        data: [],
        count: 0,
        isLoading: false
    },
    profile: {
        _id: '',
        avatarUrl: '',
        name: '',
        email: '',
        acl: user_acl,
        gender: '',
        melliCode: '',
        address: '',
        postalCode: '',
        token: '',
        expireToken: 0,
        forgetKey: '',
        expireForgetKey: 0
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.LOGIN:
        case t.UPDATE_USER:
        case t.DELETE_USER_AVATAR:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    _id: action.payload._id,
                    avatarUrl: action.payload.avatarUrl,
                    name: action.payload.name,
                    email: action.payload.email,
                    acl: action.payload.acl,
                    gender: action.payload.gender,
                    melliCode: action.payload.melliCode,
                    address: action.payload.address,
                    postalCode: action.payload.postalCode,
                    token: action.payload.token,
                    expireToken: action.payload.exp
                }
            };
        case t.FORGET_PASSWORD:
        case t.RESEND_KEY:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    email: action.payload.email,
                    expireForgetKey: action.payload.expireForgetKey
                }
            };
        case t.VERIFY_KEY:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    forgetKey: action.payload
                }
            };
        case t.CONFIRM_PASSWORD:
        case t.LOGOUT:
        case t.EXPIRE:
            return {
                ...state,
                profile: initialState.profile
            };
        case t.GET_CHART:
            return {
                ...state,
                chart: {
                    ...state.chart,
                    isLoading: true
                }
            };
        case t.SET_CHART:
            return {
                ...state,
                chart: {
                    data: action.payload,
                    isLoading: false
                }
            };
        case t.GET_USERS:
            return {
                ...state,
                users: {
                    ...state.users,
                    isLoading: true
                }
            };
        case t.SET_USERS:
            return {
                ...state,
                users: {
                    data: action.payload.data,
                    count: action.payload.count,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};

export default userReducer;
