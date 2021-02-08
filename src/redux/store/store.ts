import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { userAuth } from 'redux/sagas/saga';
import { persistStore } from 'redux-persist';
import { persistedRootReducer } from 'redux/reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedRootReducer,
    applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store);

sagaMiddleware.run(userAuth);
