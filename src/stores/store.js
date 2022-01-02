import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

// reducers
import bookReducer from './reducer/bookReducer';
import cartReducer from './reducer/cartReducer';
import categoryReducer from './reducer/categoryReducer';
import otherReducer from './reducer/otherReducer';
import userReducer from './reducer/userReducer';

// persist config
const userPersist = createFilter('user', ['profile'], ['profile', 'users', 'chart']);
const cartPersist = createFilter('cart', ['openCart'], ['openCart', 'carts', 'cart']);

const persistConfig = {
    key: 'bookshop',
    storage: storage,
    whitelist: ['user', 'cart'],
    transforms: [userPersist, cartPersist],
    stateReconciler: autoMergeLevel2,
};

// reducer config
const reducers = combineReducers({
    book: bookReducer,
    cart: cartReducer,
    category: categoryReducer,
    other: otherReducer,
    user: userReducer
});

const reducer = persistReducer(persistConfig, reducers);

// preloaded state config
const preloadedState = {};

// enhancer config
const enhancer = composeWithDevTools(applyMiddleware(thunk));

// stores & persistor
export const store = createStore(reducer, preloadedState, enhancer);

export const persistor = persistStore(store);
