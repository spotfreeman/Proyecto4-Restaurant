import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="custom-footer">
            <Container>
                <Row className="g-4">
                    {/* Brand & Bio Column */}
                    <Col lg={4} md={6}>
                        <Link to="/" className="footer-brand">
                            <div className="footer-brand-icon">
                                <i className="bi bi-shop"></i>
                            </div>
                            <span className="footer-brand-title">Gourmet Bistro</span>
                        </Link>
                        <p className="footer-desc">
                            Pizzas artesanales horneadas a la leña con masa madre, ingredientes 100% frescos y la mejor coctelería natural de la comuna.
                        </p>
                        <div className="social-links-group">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a href="https://wa.me/56987654321" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </Col>

                    {/* Quick Links Navigation Column */}
                    <Col lg={2} md={6}>
                        <h4 className="footer-heading">Navegación</h4>
                        <ul className="footer-links-list">
                            <li>
                                <Link to="/" className="footer-link">
                                    <i className="bi bi-chevron-right"></i> Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/menu" className="footer-link">
                                    <i className="bi bi-chevron-right"></i> Menú
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="footer-link">
                                    <i className="bi bi-chevron-right"></i> Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link to="/reservas" className="footer-link">
                                    <i className="bi bi-chevron-right"></i> Reservas
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin" className="footer-link">
                                    <i className="bi bi-chevron-right"></i> Administración
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Contact Info Column */}
                    <Col lg={3} md={6}>
                        <h4 className="footer-heading">Ubicación & Contacto</h4>
                        <div className="contact-item">
                            <i className="bi bi-geo-alt-fill contact-item-icon"></i>
                            <p className="contact-item-text">
                                Av. Irarrázaval N° 9999, Ñuñoa<br />Santiago, Chile
                            </p>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-telephone-fill contact-item-icon"></i>
                            <p className="contact-item-text">
                                +56 2 2555 5555<br />+56 9 8765 4321
                            </p>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-envelope-fill contact-item-icon"></i>
                            <p className="contact-item-text">
                                contacto@gourmetbistro.cl
                            </p>
                        </div>
                    </Col>

                    {/* Opening Hours Column */}
                    <Col lg={3} md={6}>
                        <h4 className="footer-heading">Horarios de Atención</h4>
                        <div className="contact-item">
                            <i className="bi bi-clock-fill contact-item-icon"></i>
                            <div>
                                <p className="contact-item-text"><strong>Lunes a Jueves:</strong></p>
                                <p className="contact-item-text">12:00 - 23:00 hrs</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-clock-history contact-item-icon"></i>
                            <div>
                                <p className="contact-item-text"><strong>Viernes y Sábados:</strong></p>
                                <p className="contact-item-text">12:00 - 00:30 hrs</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-calendar-event contact-item-icon"></i>
                            <div>
                                <p className="contact-item-text"><strong>Domingos:</strong></p>
                                <p className="contact-item-text">12:00 - 22:00 hrs</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="footer-divider"></div>

                <div className="footer-bottom-content">
                    <p className="footer-bottom-text">
                        © {new Date().getFullYear()} Gourmet Bistro. Todos los derechos reservados.
                    </p>
                    <p className="footer-bottom-text">
                        Proyecto UDD Restaurant - Creado por <span className="author-badge">Raúl Oyarzún (ROB)</span>
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;