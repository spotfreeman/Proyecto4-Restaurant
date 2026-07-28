import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import CarouselApp from '../components/CarouselApp';

// Import asset images
import pizzaDelMonte from '../assets/img/imagen01.jpeg';
import pizzaPobre from '../assets/img/imagen02.jpeg';
import pizzaPeral from '../assets/img/imagen03.jpeg';
import jugoNatural from '../assets/img/jugo01.jpeg';
import restaurantImg from '../assets/img/restaurant.jpeg';
import pizzaVertical from '../assets/img/pizzaVertical.jpg';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Carousel Section */}
      <CarouselApp />

      {/* 2. Features / Values Section */}
      <section className="features-section">
        <Container>
          <div className="section-header text-center">
            <span className="section-tag">Nuestros Pilares</span>
            <h2 className="section-title">¿Por Qué Elegir Gourmet Bistro?</h2>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="feature-card">
                <div className="feature-icon-box">
                  <i className="bi bi-fire"></i>
                </div>
                <h3 className="feature-title">Masa Madre a la Leña</h3>
                <p className="feature-desc">
                  Fermentación lenta de 48 horas horneada a altas temperaturas para lograr bordes crujientes y textura perfecta.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="feature-card">
                <div className="feature-icon-box">
                  <i className="bi bi-tree"></i>
                </div>
                <h3 className="feature-title">Ingredientes Frescos</h3>
                <p className="feature-desc">
                  Seleccionamos a diario los mejores vegetales de huertos locales y quesos artesanales de máxima calidad.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="feature-card">
                <div className="feature-icon-box">
                  <i className="bi bi-cup-straw"></i>
                </div>
                <h3 className="feature-title">Coctelería & Jugos</h3>
                <p className="feature-desc">
                  Jugos 100% naturales exprimidos al momento y tragos de autor pensados para el maridaje ideal.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="feature-card">
                <div className="feature-icon-box">
                  <i className="bi bi-award"></i>
                </div>
                <h3 className="feature-title">Servicio Premium</h3>
                <p className="feature-desc">
                  Nos esforzamos por brindarte una atención impecable y un ambiente acogedor para compartir con tus seres queridos.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. Featured Specialties Section */}
      <section className="specialties-section">
        <Container>
          <div className="section-header text-center">
            <span className="section-tag">Platos Recomendados</span>
            <h2 className="section-title">Especialidades Destacadas de la Casa</h2>
          </div>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="specialty-card">
                <div className="specialty-img-wrapper">
                  <img src={pizzaDelMonte} alt="Pizza Del Monte" className="specialty-img" />
                  <span className="specialty-badge">⭐ Recomendado</span>
                </div>
                <div className="specialty-body">
                  <h3 className="specialty-title">Pizza Del Monte</h3>
                  <p className="specialty-text">
                    Queso de cabra fundido, hojas de albahaca fresca, tomates deshidratados y pesto artesanal de piñones.
                  </p>
                  <div className="specialty-footer">
                    <span className="specialty-price">$12.990</span>
                    <Link to="/menu" className="btn-order-item">
                      Ver Menú <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="specialty-card">
                <div className="specialty-img-wrapper">
                  <img src={pizzaPobre} alt="Pizza A lo Pobre" className="specialty-img" />
                  <span className="specialty-badge">🔥 Más Vendida</span>
                </div>
                <div className="specialty-body">
                  <h3 className="specialty-title">Pizza A lo Pobre</h3>
                  <p className="specialty-text">
                    Lomo de entraña a la plancha, cebolla caramelizada, huevo frito de campo y crujientes papas hilos.
                  </p>
                  <div className="specialty-footer">
                    <span className="specialty-price">$13.990</span>
                    <Link to="/menu" className="btn-order-item">
                      Ver Menú <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="specialty-card">
                <div className="specialty-img-wrapper">
                  <img src={pizzaPeral} alt="Pizza Del Peral" className="specialty-img" />
                  <span className="specialty-badge">🌿 Gourmet</span>
                </div>
                <div className="specialty-body">
                  <h3 className="specialty-title">Pizza Del Peral</h3>
                  <p className="specialty-text">
                    Láminas de peras caramelizadas, queso azul intenso, nueces tostadas y reducción de balsámico sobre rúcula.
                  </p>
                  <div className="specialty-footer">
                    <span className="specialty-price">$13.490</span>
                    <Link to="/menu" className="btn-order-item">
                      Ver Menú <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. Story & Tradition Section */}
      <section className="story-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="story-img-container">
                <img src={restaurantImg} alt="Historia del Restaurante" className="story-img" />
              </div>
            </Col>

            <Col lg={6}>
              <div className="story-content">
                <span className="section-tag">Nuestra Pasión & Origen</span>
                <h2 className="section-title mb-3">La Historia de Nuestra Cocina</h2>
                <p className="story-subtitle">
                  Inspirados en la milenaria tradición de la fermentación y el fuego, combinamos recetas ancestrales con técnicas gastronómicas modernas.
                </p>
                <p className="story-paragraph">
                  Desde los primeros panes horneados en el antiguo Egipto hasta la evolución de las pizzas gourmet actuales, seleccionamos cuidadosamente harinas de molienda fina y masa madre viva para lograr una preparación inolvidable. Cada pizza se elabora a mano con pasión en nuestro horno de piedra.
                </p>

                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-number">+10</span>
                    <span className="stat-label">Años de Pasión</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">48h</span>
                    <span className="stat-label">Fermentación</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Artesanal</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 5. Client Testimonials Section */}
      <section className="testimonials-section">
        <Container>
          <div className="section-header text-center">
            <span className="section-tag">Testimonios</span>
            <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <div className="testimonial-card">
                <div className="stars-rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="testimonial-text">
                  "La Pizza A lo Pobre es simplemente espectacular. La masa crocante y la calidad de la entraña superaron todas mis expectativas."
                </p>
                <div className="client-info">
                  <div className="client-avatar">MC</div>
                  <div>
                    <h4 className="client-name">Marcelo Contreras</h4>
                    <p className="client-role">Cliente Frecuente</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="testimonial-card">
                <div className="stars-rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="testimonial-text">
                  "Excelente atención y ambiente muy acogedor. Reservamos online fácilmente y nuestra mesa estaba lista cuando llegamos."
                </p>
                <div className="client-info">
                  <div className="client-avatar">CV</div>
                  <div>
                    <h4 className="client-name">Carolina Valenzuela</h4>
                    <p className="client-role">Comensal</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="testimonial-card">
                <div className="stars-rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="testimonial-text">
                  "Los jugos naturales recién preparados y la pizza Del Peral son el mejor maridaje que he probado en la comuna."
                </p>
                <div className="client-info">
                  <div className="client-avatar">RR</div>
                  <div>
                    <h4 className="client-name">Rodrigo Reyes</h4>
                    <p className="client-role">Crítico Gastronómico</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 6. Reservation CTA Banner */}
      <section className="cta-banner-section">
        <Container>
          <div className="cta-box">
            <h2 className="cta-title">¿Listo para Vivir una Experiencia Inolvidable?</h2>
            <p className="cta-text">
              Reserva tu mesa con anticipación en línea y asegura tu lugar para disfrutar de nuestras especialidades horneadas al momento.
            </p>
            <Link to="/reservas" className="btn-hero-primary">
              <i className="bi bi-calendar2-check-fill"></i> Reservar Mesa Ahora
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;