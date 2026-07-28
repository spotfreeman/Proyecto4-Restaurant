import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

export const NavBar = () => {
    return (
        <Navbar expand="lg" sticky="top" variant="dark" className="custom-navbar">
            <Container>
                <NavLink to="/" className="custom-brand">
                    <div className="brand-icon-wrapper">
                        <i className="bi bi-shop"></i>
                    </div>
                    <div className="brand-title-group">
                        <span className="brand-text">Gourmet Bistro</span>
                        <span className="brand-badge">Restaurant & Bar</span>
                    </div>
                </NavLink>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-lg-center my-2 my-lg-0">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? 'nav-link-custom active' : 'nav-link-custom')}
                            end
                        >
                            <i className="bi bi-house-door-fill nav-icon"></i>
                            <span>Inicio</span>
                        </NavLink>

                        <NavLink 
                            to="/menu" 
                            className={({ isActive }) => (isActive ? 'nav-link-custom active' : 'nav-link-custom')}
                        >
                            <i className="bi bi-journal-richtext nav-icon"></i>
                            <span>Menú</span>
                        </NavLink>

                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => (isActive ? 'nav-link-custom active' : 'nav-link-custom')}
                        >
                            <i className="bi bi-people-fill nav-icon"></i>
                            <span>Nosotros</span>
                        </NavLink>

                        <NavLink 
                            to="/admin" 
                            className={({ isActive }) => (isActive ? 'nav-link-custom active' : 'nav-link-custom')}
                        >
                            <i className="bi bi-shield-lock-fill nav-icon"></i>
                            <span>Admin</span>
                        </NavLink>

                        <NavLink 
                            to="/reservas" 
                            className={({ isActive }) => (isActive ? 'nav-cta-btn active' : 'nav-cta-btn')}
                        >
                            <i className="bi bi-calendar2-check-fill nav-icon"></i>
                            <span>Reservar Mesa</span>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;