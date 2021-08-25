import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
export default function MyNav(){
    return <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Browser</Nav.Link>
    </Nav>
  </Navbar>
}