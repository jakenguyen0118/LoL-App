import React from 'react';
import './App.scss';
import Main from '../Main/Main'
import Navigation from '../Navigation/Navigation'
import ScrollArrow from '../ScrollArrow/ScrollArrow'


function App() {
	return (
		<div className='App'>
			<Navigation />
			<Main />
      		<ScrollArrow />
		</div>
	)
}

export default App;
