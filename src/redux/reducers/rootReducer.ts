import {combineReducers} from "redux";
import {errorMessageReducer} from "./errorMessageReducer";
import {imagesReducer} from "./imagesReducer";
import {userStateReducer} from "./userStateReducer";
import {persistReducer} from "redux-persist";
import {signUpReducer} from "./signUpReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["userStateReducer"]
}

const rootReducer = combineReducers({
    errorMessageReducer,
    userStateReducer,
    imagesReducer,
    signUpReducer
});


export const persistedRootReducer = persistReducer(persistConfig, rootReducer)