import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Test</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Characters</Nav.Link>
            <Nav.Link href="/characters">Favourites</Nav.Link>
            <Nav.Link href="/404">404</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
