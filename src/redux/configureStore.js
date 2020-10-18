import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducers} from 'redux/reducers/index';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user: reducers.user,
            chats: reducers.chats,
        }), {},
        applyMiddleware(reduxThunk, logger)
    );

    return store;
};