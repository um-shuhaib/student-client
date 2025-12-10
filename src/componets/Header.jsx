import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-person"></i>
            {' '}
            STUDENT APP
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header