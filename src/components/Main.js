import React, { Component } from 'react'
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={() => <Redirect to="/main" />} />
                    <Route exact path="/main" component={() => <Main />} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect)(Main);