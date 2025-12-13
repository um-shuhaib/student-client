import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-person"></i>
            {' '}
            STUDENT APP
          </Navbar.Brand>
          <Link to={'add'} className='btn btn-warning'>Add Student</Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header