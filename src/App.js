import React, { Component } from 'react';
import Admin from './layouts/Admin';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <BrowserRouter> 
            <Admin />
         </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
