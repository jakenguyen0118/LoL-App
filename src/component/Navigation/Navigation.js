import React from 'react'
import Search from '../Search/Search'
import { Navbar, Nav } from 'react-bootstrap'
import './navigation.scss'

const Navigation = () => {
	// https://i.redd.it/jy350deq13a51.jpg
	return (
		<>
			<Navbar expand='sm' bg='dark' variant='dark' fixed='top'>
				<Navbar.Brand href='/'>LoL App</Navbar.Brand>
			</Navbar>
		</>
	)
}

export default Navigation
