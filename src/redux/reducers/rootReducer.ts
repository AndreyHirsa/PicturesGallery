import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { errorMessageReducer } from './errorMessageReducer';
import { imagesReducer } from './imagesReducer';
import { userStateReducer } from './userStateReducer';
import { signUpReducer } from './signUpReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userStateReducer'],
};

const rootReducer = combineReducers({
    errorMessageReducer,
    userStateReducer,
    imagesReducer,
    signUpReducer,
});

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
