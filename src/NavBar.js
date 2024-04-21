// NavBar Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, InputGroup, Input, Button } from 'reactstrap';

// Components & Necessary Files 
import './NavBar.css';

// NavBar Component 
function NavBar() {

    return(
        <div>
          <Navbar> 
            <div className = 'brand-container'>
                <NavbarBrand className = 'brand'> Restaurant </NavbarBrand>
            </div>
                <Nav className = 'links-container' navbar>
                    <NavItem className = 'link-container'> 
                            <NavLink to = '/' className = 'nav-link'> Home </NavLink>    
                    </NavItem>
                    <NavItem className = 'link-container'> 
                            <NavLink to = '/snacks' className = 'nav-link'> Snacks </NavLink>
                    </NavItem>
                    <NavItem className = 'link-container'> 
                        <NavLink to = '/drinks' className = 'nav-link'> Drinks </NavLink>
                    </NavItem>
                    <InputGroup className = 'search-container'>
                        <Input type = 'search' placeholder = 'Search'></Input>
                        <Button type = 'submit'> Search </Button>
                    </InputGroup>
                </Nav>
          </Navbar>
        </div>
    )
}

export default NavBar;