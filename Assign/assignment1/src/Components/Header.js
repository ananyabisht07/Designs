import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header(){
    return(
        <div>
            <Navbar className="nav-header fixed-top">
                <Navbar.Brand className=" nav-text mx-auto" style={{color: "#404040"}} href="#home">The BierGarten  <span className="fa fa-map-marker fa-lg"></span>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header;