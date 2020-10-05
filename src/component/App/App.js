import React from 'react';
import './App.scss';
import Main from '../Main/Main'
import Banner from '../Banner/Banner'
import Navbar from '../Navigation/Navigation'

function App() {
  return (
		<div className='App'>
			<Banner />
			<Navbar />
			<Main />
		</div>
	)
}

export default App;
