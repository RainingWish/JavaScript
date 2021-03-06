import {createStore,applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import TodoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose;

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));

const store = createStore(reducer,enhancer);
sagaMiddleware.run(TodoSagas);

export default store;