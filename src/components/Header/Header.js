import React from 'react'; 
import {Container,Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div>
    <Navbar bg="info" variant="info" className="p-3">
    <Container>
    <Navbar.Brand className="fw-bold"> <NavLink exact to="/" className="text-light text-decoration-none fs-3">EducationsCenter</NavLink></Navbar.Brand>
    <Nav className="fw-bold">
      <NavLink to="/home" className="text-light p-3 text-decoration-none">Home</NavLink>
      <NavLink to="/services" className="text-light p-3 text-decoration-none">Services</NavLink>
      <NavLink to="/about" className="text-light p-3 text-decoration-none">About</NavLink>
      <NavLink to="/contact" className="text-light p-3 text-decoration-none">Contact</NavLink>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;