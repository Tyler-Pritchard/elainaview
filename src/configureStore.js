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


// import configureStore from './configureStore';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware} from 'redux';
// import reduxThunk from 'redux-thunk';

// import reducers from './redux/reducers';

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));