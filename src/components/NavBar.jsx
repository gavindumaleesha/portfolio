import React from 'react';
import './navBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home" spy={true} smooth={true} duration={3000}>Gavindu Maleesha</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-end">
            <Nav.Link href="#home" spy={true} smooth={true} duration={1000}>Home</Nav.Link>
            <Nav.Link href="#about" spy={true} smooth={true} duration={1000}>About</Nav.Link>
            <Nav.Link href="#education" spy={true} smooth={true} duration={1000}>Education</Nav.Link>
            <Nav.Link href="#projects" spy={true} smooth={true} duration={1000}>Projects</Nav.Link>
            <Nav.Link href="#contact" spy={true} smooth={true} duration={1000}>Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
