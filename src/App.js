import React, { Component } from 'react';
import Admin from './layouts/Admin';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <BrowserRouter>
          <div>
            <Admin />
          </div>
         </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
