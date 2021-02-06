import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { userAuth } from "redux/sagas/saga";
import {userState} from "../reducers/loginReducer";
import {persistReducer, persistStore} from "redux-persist"
import {newReducer} from "../reducers/rootReducer";



const sagaMiddleware = createSagaMiddleware();

export const store:any = createStore(newReducer, applyMiddleware(sagaMiddleware));

export const persistor = persistStore(store);


sagaMiddleware.run(userAuth);
