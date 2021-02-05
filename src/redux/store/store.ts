import { applyMiddleware, createStore } from "redux";
import rootReducer from "redux/reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { userAuth } from "redux/sagas/saga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userAuth);
