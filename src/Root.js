import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

import axios from 'axios';
window.axios = axios;

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(async, stateValidator, reduxThunk)
    );
    return (<Provider store={store}>{children}</Provider>);
};