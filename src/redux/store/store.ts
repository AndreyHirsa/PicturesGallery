import { applyMiddleware, createStore } from "redux";
import { errorMessageReducer} from "redux/reducers/errorMessageReducer";
import createSagaMiddleware from "redux-saga";
import { userAuth } from "redux/sagas/saga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(errorMessageReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(userAuth);
