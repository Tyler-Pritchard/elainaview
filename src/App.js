import React from 'react';
import { Route } from 'react-router-dom';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Admin from './layouts/Admin';
import Customer from './layouts/Customer';

export default () => {
  return (
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/admin" component={Admin} />
      <Route path ="/customer" component={Customer} />
    </div>
  );
};
