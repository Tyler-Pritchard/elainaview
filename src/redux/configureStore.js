import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './reducers';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user: User,
            chats: Chats,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};