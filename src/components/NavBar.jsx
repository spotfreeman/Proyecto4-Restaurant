import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Proyecto 4 - Restaurant APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/Menu">Menu</NavLink>
                            <NavLink to="/Reservas">Reservas</NavLink>
                            <NavLink to="/About">About</NavLink>
                            <NavLink to="/Admin">Admin</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbar;