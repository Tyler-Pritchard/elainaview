import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import * as actions from "./redux/actions/ActionCreators";
import "assets/scss/material-kit-react.scss?v=1.9.0";

import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Admin from "./layouts/Admin";
import Customer from "./layouts/Customer";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Privacy from "views/Privacy/Privacy.js";

var hist = createBrowserHistory();

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter history={hist}>
                    <Route exact path="/" component={Components} />
                    <Route path="/landing-page" component={LandingPage} />
                    <Route path="/profile-page" component={ProfilePage} />
                    <Route path="/login-page" component={LoginPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/customer" component={Customer} />
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
