import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
// import { Navbar, Nav, Form, Button, FormControl } from 'react-boostrap'
import './navigation.scss'

const Navigation = () => {
	// https://i.redd.it/jy350deq13a51.jpg
	return (
		<>
			<Navbar expand='sm' bg='dark' variant='dark' fixed='bottom'>
				<Navbar.Brand href='/'>LoL App</Navbar.Brand>
				<Nav className='mr-auto'>
					{/* <Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/features'>Features</Nav.Link>
					<Nav.Link href='/pricing'>Pricing</Nav.Link> */}
				</Nav>
				<Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					{/* <Button variant='outline-info'>Search</Button> */}
				</Form>
			</Navbar>
		</>
	)
}

export default Navigation
