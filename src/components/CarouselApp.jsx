import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import imagen01 from '../assets/img/imagen01.jpeg';
import restaurantImg from '../assets/img/restaurant.jpeg';
import jugo01 from '../assets/img/jugo01.jpeg';
import './CarouselApp.css';

function CarouselApp() {
  return (
    <Carousel fade interval={5000} className="hero-carousel">
      {/* Slide 1 */}
      <Carousel.Item>
        <div className="hero-slide-wrapper">
          <img src={imagen01} alt="Pizzas Artesanales" className="hero-slide-img" />
          <div className="hero-overlay">
            <Container>
              <div className="hero-caption-content">
                <span className="hero-badge">
                  <i className="bi bi-fire me-1"></i> Especialidad de la Casa
                </span>
                <h1 className="hero-title">
                  Pizzas Artesanales <br /> Horneadas a la Leña
                </h1>
                <p className="hero-subtitle">
                  Masa madre fermentada por 48 horas, ingredientes seleccionados y el auténtico sabor tradicional de nuestra cocina.
                </p>
                <div className="hero-btn-group">
                  <Link to="/menu" className="btn-hero-primary">
                    <i className="bi bi-journal-text"></i> Ver Menú Completo
                  </Link>
                  <Link to="/reservas" className="btn-hero-secondary">
                    <i className="bi bi-calendar-check"></i> Reservar Mesa
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="hero-slide-wrapper">
          <img src={restaurantImg} alt="Nuestro Restaurante" className="hero-slide-img" />
          <div className="hero-overlay">
            <Container>
              <div className="hero-caption-content">
                <span className="hero-badge">
                  <i className="bi bi-stars me-1"></i> Ambiente & Tradición
                </span>
                <h1 className="hero-title">
                  Una Experiencia <br /> Gastronómica Única
                </h1>
                <p className="hero-subtitle">
                  Disfruta de una velada inolvidable en un ambiente acogedor, con la mejor atención y los más exquisitos sabores.
                </p>
                <div className="hero-btn-group">
                  <Link to="/reservas" className="btn-hero-primary">
                    <i className="bi bi-calendar2-plus"></i> Agendar tu Mesa
                  </Link>
                  <Link to="/about" className="btn-hero-secondary">
                    <i className="bi bi-info-circle"></i> Conoce Nuestra Historia
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div className="hero-slide-wrapper">
          <img src={jugo01} alt="Jugos y Coctelería" className="hero-slide-img" />
          <div className="hero-overlay">
            <Container>
              <div className="hero-caption-content">
                <span className="hero-badge">
                  <i className="bi bi-cup-straw me-1"></i> 100% Fresco & Natural
                </span>
                <h1 className="hero-title">
                  Jugos Naturales & <br /> Coctelería de Autor
                </h1>
                <p className="hero-subtitle">
                  El maridaje perfecto para tus platillos con nuestra selección de jugos preparados en el momento con fruta fresca.
                </p>
                <div className="hero-btn-group">
                  <Link to="/menu" className="btn-hero-primary">
                    <i className="bi bi-card-checklist"></i> Explorar Bebidas
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselApp;