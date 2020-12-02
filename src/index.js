import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import App from './App';
import './index.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Root><App /></Root>,
    document.querySelector('#root')
);

serviceWorker.unregister();

// console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
// console.log('ENVIRONMENT VARIABLE IS', process.env.NODE_ENV);
