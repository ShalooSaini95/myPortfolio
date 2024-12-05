import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand to="/" className="text-primary"><Nav.Link to="/" as={Link}><h3 style={{fontFamily:"helvetica", fontWeight:"bold"}}>SHALOO SAINI</h3></Nav.Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link to="/" className="text-dark" as={Link}>Home</Nav.Link>
       
            <Nav.Link to="/about" className="text-dark" as={Link} >About</Nav.Link>
            <Nav.Link to="/projects" className="text-dark" as={Link}>Projects</Nav.Link>
            <Nav.Link to="/contact" as={Link} className="text-dark" >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
  )
}

export default Header
