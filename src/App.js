import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './redux/actions/ActionCreators';

import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Admin from './layouts/Admin';
import Customer from './layouts/Customer';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/admin" component={Admin} />
            <Route path ="/customer" component={Customer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);