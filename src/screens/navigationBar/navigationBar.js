import React from 'react'

// importing css
import './navigation.css';

//importing Navbar from bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { navigationLinks } from '../../helpers/navigationLinks';


function createLinks() {
    return navigationLinks.map((ele, idx)=> (
        <Nav.Link key= {idx} href ={ele.ref}>{ele.name}</Nav.Link>
    ))
}

function navigationBar() {
  return (
    <div id = "home">
        <Navbar className='navigation_container' expand="md">
            <Navbar.Brand style = {{marginLeft : '1rem'}}href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style ={{ justifyContent : 'flex-end', marginRight : '1rem'}}>
                <Nav className='links' style = {{margin : "0 1rem"}}>
                    {createLinks()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default navigationBar