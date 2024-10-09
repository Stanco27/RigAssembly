import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PciCard } from "react-bootstrap-icons";
import './NavigationBar.css'

const NavigationBar = () => {
  return (
<Navbar className="navigation-bar" expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/Home"><PciCard size={38}/> RigAssembly</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="/Guide">Guide</Nav.Link>
            <Nav.Link href="/Compatibility_Checker">Compatibility Checker</Nav.Link>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
