import {combineReducers} from "redux";
import {errorMessageReducer} from "./errorMessageReducer";
import {loginReducer} from "./loginReducer";
import {imagesReducer} from "./imagesReducer";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["loginReducer"]
}

const rootReducer = combineReducers({
    errorMessageReducer,
    loginReducer,
    imagesReducer
});


export const newReducer = persistReducer(persistConfig, rootReducer)