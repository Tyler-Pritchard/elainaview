import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './layouts/Landing';
import Admin from './layouts/Admin';
import Customer from './layouts/Customer';

export default () => {
  return (
    <div>
      <Route path="/" exact component={Landing} />
      <Route path="/admin" component={Admin} />
      <Route path ="/customer" component={Customer} />
    </div>
  );
};
