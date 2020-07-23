import React from 'react';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Main from './components/Main';
import Footer from './components/common/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
