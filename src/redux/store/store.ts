import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {userAuth} from "redux/sagas/saga";
import {persistStore} from "redux-persist"
import {persistedRootReducer} from "../reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const store: any = createStore(persistedRootReducer, applyMiddleware(sagaMiddleware));

export const persistor = persistStore(store);

sagaMiddleware.run(userAuth);
