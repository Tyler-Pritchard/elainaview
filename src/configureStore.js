import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as reducers from 'redux/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducers: reducers,
        }),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );

    return store;
}; 