import React from 'react';
import './App.scss';
import Main from '../Main/Main'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
