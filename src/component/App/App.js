import React from 'react';
import './App.scss';
import Main from '../Main/Main'
import Banner from '../Banner/Banner'
import Navigation from '../Navigation/Navigation'
import ScrollArrow from '../ScrollArrow/ScrollArrow'

function App() {
	return (
		<div className='App'>
			<Banner />
			<Navigation />
			<Main />
      <ScrollArrow />
		</div>
	)
}

export default App;
