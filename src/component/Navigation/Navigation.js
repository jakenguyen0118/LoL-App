import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './navigation.scss'

const Navigation = () => {
	return (
		<>
			<Navbar expand='sm' bg='dark' variant='dark' fixed='top'>
				<Navbar.Brand href='/'>LoL App</Navbar.Brand>
			</Navbar>
		</>
	)
}

export default Navigation
