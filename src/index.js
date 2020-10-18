import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';
import App from './App';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
// console.log('ENVIRONMENT VARIABLE IS', process.env.NODE_ENV);
