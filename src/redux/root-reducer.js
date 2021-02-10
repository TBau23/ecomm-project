import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // using local storage as default storage - could use session storage as well

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // only reducer we want to persist is the cart - user is being handled by FireBase
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
