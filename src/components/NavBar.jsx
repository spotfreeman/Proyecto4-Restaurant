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
                    <Navbar.Brand href="/"><h2>Proyecto 4 - Restaurant APP</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/"><h3> Home </h3></NavLink>
                            <NavLink to="/Menu"><h3> Menu </h3></NavLink>
                            <NavLink to="/Reservas"><h3> Reservas </h3></NavLink>
                            <NavLink to="/About"><h3> Nosotros </h3></NavLink>
                            <NavLink to="/Admin"><h3> Admin </h3></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbar;