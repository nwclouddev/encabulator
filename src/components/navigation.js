import React, { Component } from 'react'
import {FormControl, Button, Nav, Form, Navbar} from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Encabulator</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/assets">Assets</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
  )}


}
export default Navigation;