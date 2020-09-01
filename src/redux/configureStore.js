import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import {chats, user} from 'redux/reducers/index';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            // user: user,
            // chats: chats,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};