import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to ="/">Task Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to ="/tasks">Tasks</Nav.Link>
            <Nav.Link as={Link} to ="/employees">Employees</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;