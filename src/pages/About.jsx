import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

// Import assets
import restaurantImg from '../assets/img/restaurant.jpeg';
import pizzaVertical from '../assets/img/pizzaVertical.jpg';
import './About.css';

export const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero-banner">
        <Container>
          <span className="about-hero-badge">
            <i className="bi bi-shop me-1"></i> Conócenos
          </span>
          <h1 className="about-hero-title">Nuestra Historia & Esencia</h1>
          <p className="about-hero-subtitle">
            Pasión por la cocina artesanal, ingredientes de origen local y un ambiente pensado para compartir grandes momentos.
          </p>
        </Container>
      </section>

      {/* Story & Philosophy */}
      <section className="about-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="about-img-box">
                <img src={restaurantImg} alt="Interior de Gourmet Bistro" />
              </div>
            </Col>

            <Col lg={6}>
              <h2 className="about-content-heading">El Origen de Gourmet Bistro</h2>
              <p className="about-paragraph">
                Nacimos en el corazón de Ñuñoa con una visión muy clara: rendir homenaje a la auténtica pizzería italiana y la gastronomía de autor, utilizando harinas seleccionadas y fermentaciones naturales prolongadas de 48 horas.
              </p>
              <p className="about-paragraph">
                Cada día encendemos nuestro horno de piedra para ofrecer recetas crujientes, sabrosas y acompañadas por jugos recién exprimidos y una cuidada selección de bebestibles. Nos apasiona brindar un servicio cálido y cercano que haga sentir a cada comensal como en su propia casa.
              </p>

              <div className="mt-4">
                <Link to="/menu" className="btn-hero-primary me-3">
                  <i className="bi bi-journal-richtext"></i> Ver Menú
                </Link>
                <Link to="/reservas" className="btn-hero-secondary">
                  <i className="bi bi-calendar2-check"></i> Reservar Mesa
                </Link>
              </div>
            </Col>
          </Row>

          {/* Values Grid */}
          <Row className="g-4 mt-5">
            <Col md={4}>
              <div className="value-card">
                <i className="bi bi-fire value-icon"></i>
                <h3 className="value-title">Tradición & Fuego</h3>
                <p className="value-desc">
                  Horneo tradicional a alta temperatura que garantiza el sellado perfecto y bordes crujientes.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="value-card">
                <i className="bi bi-tree-fill value-icon"></i>
                <h3 className="value-title">Ingredientes Frescos</h3>
                <p className="value-desc">
                  Apoyamos a productores locales seleccionando vegetales frescos y quesos artesanales del día.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="value-card">
                <i className="bi bi-heart-fill value-icon"></i>
                <h3 className="value-title">Hospitalidad Cálida</h3>
                <p className="value-desc">
                  Servicio atento y humano enfocado en crear experiencias memorables para cada visita.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Location & Interactive Map Section */}
      <section className="location-section">
        <Container>
          <div className="text-center mb-5">
            <span className="about-hero-badge">
              <i className="bi bi-geo-alt-fill me-1"></i> Dónde Encontrarnos
            </span>
            <h2 className="about-hero-title">Ubicación & Contacto</h2>
          </div>

          <Row className="g-4 align-items-center">
            <Col lg={5}>
              <div className="location-info-card">
                <div className="info-item">
                  <div className="info-icon-box">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h4 className="info-title">Dirección</h4>
                    <p className="info-text">
                      Av. Irarrázaval N° 9999, Plaza Ñuñoa<br />
                      Santiago, Chile
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h4 className="info-title">Teléfonos de Atención</h4>
                    <p className="info-text">
                      Mesa central: +56 2 2555 5555<br />
                      WhatsApp: +56 9 8765 4321
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <h4 className="info-title">Correo Electrónico</h4>
                    <p className="info-text">contacto@gourmetbistro.cl</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div>
                    <h4 className="info-title">Horario Comercial</h4>
                    <p className="info-text">
                      Lunes a Domingo: 12:00 - 23:30 hrs
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="responsive-map-container">
                <iframe
                  title="Mapa de Ubicación Plaza Ñuñoa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2187.0154637669407!2d-70.59614069889044!3d-33.45501437432873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfbf04ab4a7b%3A0x5a99e4565277755f!2zUGxhemEgw5F1w7FvYQ!5e0!3m2!1ses-419!2scl!4v1691814238546!5m2!1ses-419!2scl"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;