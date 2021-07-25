import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <ReactBootstrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand to="/">Test</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="me-auto">
                        <NavLink exact to="/">Home</NavLink>
                    </ReactBootstrap.Nav>
                        <NavLink exact  to="/adduser"><ReactBootstrap.Button variant="outline-success">Add</ReactBootstrap.Button></NavLink>
                    
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
    );
};
export default Navbar;