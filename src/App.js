import React from 'react';
import { Route } from 'react-router-dom';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Admin from './layouts/Admin';
import Customer from './layouts/Customer';
import { Auth } from 'redux/reducers/auth';

export default () => {
  return (
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/auth/google" component={Auth} />
      <Route path="/admin" component={Admin} />
      <Route path ="/customer" component={Customer} />
    </div>
  );
};
