import React from 'react';
import {Container,Navbar} from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="mt-5">
          <Navbar>
  <Container>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end ">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Footer;