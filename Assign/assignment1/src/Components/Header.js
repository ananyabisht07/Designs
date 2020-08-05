import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header(){
    return(
        <div>
            <Navbar className="nav-header fixed-top">
                <Navbar.Brand className=" nav-text mx-auto" href="#home">The BierGarten  <span className="fa fa-map-marker fa-lg"></span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
        </div>
    )
}

export default Header;