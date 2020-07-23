import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Main from './components/Main';
import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={() => <Redirect to="/main" />} />

          <Sidebar />
          <Route exact path="/main" component={() => <Main />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
