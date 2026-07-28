import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

// Import asset images
import imagen01 from '../assets/img/imagen01.jpeg';
import imagen02 from '../assets/img/imagen02.jpeg';
import imagen03 from '../assets/img/imagen03.jpeg';
import jugo01 from '../assets/img/jugo01.jpeg';
import jugo02 from '../assets/img/jugo02.jpeg';
import pizzaVertical from '../assets/img/pizzaVertical.jpg';
import './Menu.css';

const menuItemsData = [
  {
    id: 1,
    title: 'Pizza Del Monte',
    category: 'pizzas',
    ingredients: 'Queso de Cabra, Albahaca fresca, Tomate deshidratado y Pesto artesanal de piñones.',
    price: '$11.700',
    badge: 'NUEVA',
    badgeClass: 'badge-new',
    image: imagen01,
  },
  {
    id: 2,
    title: 'Pizza A lo Pobre',
    category: 'pizzas',
    ingredients: 'Entraña a la plancha, Huevo frito de campo, Cebolla caramelizada y Papas hilos.',
    price: '$11.800',
    badge: 'RECOMENDADA',
    badgeClass: 'badge-chef',
    image: imagen02,
  },
  {
    id: 3,
    title: 'Pizza Del Peral',
    category: 'pizzas',
    ingredients: 'Peras caramelizadas, Queso Azul intenso, Rúcula fresca y reduccion de balsámico.',
    price: '$11.700',
    badge: 'GOURMET',
    badgeClass: 'badge-popular',
    image: imagen03,
  },
  {
    id: 4,
    title: 'Pizza Paisana',
    category: 'pizzas',
    ingredients: 'Jamón acaramelado, Champiñones parís frescos, Aceitunas negras y abundante Mozzarella.',
    price: '$10.800',
    badge: null,
    image: pizzaVertical,
  },
  {
    id: 5,
    title: 'Pizza Del Huerto',
    category: 'pizzas',
    ingredients: 'Palmitos enteros, Albahaca fresca, Tomates marinados y Orégano de la casa.',
    price: '$10.500',
    badge: 'VEGETARIANA',
    badgeClass: 'badge-popular',
    image: imagen01,
  },
  {
    id: 6,
    title: 'Pizza Cuatro Quesos',
    category: 'pizzas',
    ingredients: 'Mozzarella fundida, Queso Azul, Parmesano gratinado y suave Queso de Cabra.',
    price: '$12.500',
    badge: null,
    image: imagen02,
  },
  {
    id: 7,
    title: 'Jugo Natural de Frambuesa',
    category: 'bebidas',
    ingredients: 'Frambuesas naturales del sur preparadas al momento con hielo frappe.',
    price: '$1.700',
    badge: '100% NATURAL',
    badgeClass: 'badge-chef',
    image: jugo01,
  },
  {
    id: 8,
    title: 'Limonada Menta Jengibre',
    category: 'bebidas',
    ingredients: 'Limones recién exprimidos, hojas de menta frescas y toque aromático de jengibre.',
    price: '$1.800',
    badge: 'REFRESCANTE',
    badgeClass: 'badge-popular',
    image: jugo02,
  },
  {
    id: 9,
    title: 'Limonada Tradicional',
    category: 'bebidas',
    ingredients: 'Zumo de limón de pica natural con jarabe artesanal de la casa.',
    price: '$1.600',
    badge: null,
    image: jugo02,
  },
  {
    id: 10,
    title: 'Gaseosas & Aguas',
    category: 'bebidas',
    ingredients: 'Variedad de gaseosas en lata (350ml) y aguas minerales con o sin gas.',
    price: '$1.700',
    badge: null,
    image: jugo01,
  },
  {
    id: 11,
    title: 'Focaccia Rústica',
    category: 'entradas',
    ingredients: 'Pan plano italiano con albahaca, romero, sal de mar y aceite de oliva extra virgen.',
    price: '$6.900',
    badge: 'PARA COMPARTIR',
    badgeClass: 'badge-new',
    image: imagen03,
  },
  {
    id: 12,
    title: 'Provolone al Horno',
    category: 'entradas',
    ingredients: 'Queso provolone fundido a la leña en paella de hierro con orégano y crostinis.',
    price: '$8.500',
    badge: 'CALIENTE',
    badgeClass: 'badge-chef',
    image: pizzaVertical,
  },
];

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItemsData.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.ingredients.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-page">
      {/* Hero Banner */}
      <section className="menu-hero-banner">
        <Container>
          <span className="menu-hero-badge">
            <i className="bi bi-book me-1"></i> Nuestra Carta Gourmet
          </span>
          <h1 className="menu-hero-title">Menú & Especialidades</h1>
          <p className="menu-hero-subtitle">
            Pizzas horneadas a la leña con masa madre de 48 horas, acompañamientos artesanales y bebestibles frescos.
          </p>
        </Container>
      </section>

      {/* Filter Tabs & Search Bar */}
      <Container className="menu-controls-wrapper">
        <div className="menu-controls-card">
          <div className="category-nav">
            <button
              className={`category-btn ${activeCategory === 'todos' ? 'active' : ''}`}
              onClick={() => setActiveCategory('todos')}
            >
              <i className="bi bi-grid-fill"></i> Todos
            </button>
            <button
              className={`category-btn ${activeCategory === 'pizzas' ? 'active' : ''}`}
              onClick={() => setActiveCategory('pizzas')}
            >
              <i className="bi bi-pie-chart-fill"></i> Pizzas
            </button>
            <button
              className={`category-btn ${activeCategory === 'bebidas' ? 'active' : ''}`}
              onClick={() => setActiveCategory('bebidas')}
            >
              <i className="bi bi-cup-straw"></i> Jugos & Bebidas
            </button>
            <button
              className={`category-btn ${activeCategory === 'entradas' ? 'active' : ''}`}
              onClick={() => setActiveCategory('entradas')}
            >
              <i className="bi bi-egg-fried"></i> Entradas
            </button>
          </div>

          <div className="search-input-group">
            <i className="bi bi-search"></i>
            <Form.Control
              type="text"
              placeholder="Buscar plato o ingrediente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </Container>

      {/* Menu Grid Items */}
      <Container>
        {activeCategory === 'todos' || activeCategory === 'pizzas' ? (
          <div className="mb-5">
            <div className="category-title-header">
              <i className="bi bi-fire"></i>
              <h3>Pizzas Artesanales a la Leña</h3>
            </div>

            <Row className="g-4">
              {filteredItems
                .filter((item) => item.category === 'pizzas')
                .map((item) => (
                  <Col key={item.id} md={6} lg={4}>
                    <div className="menu-card">
                      <div className="menu-card-img-wrapper">
                        <img src={item.image} alt={item.title} className="menu-card-img" />
                        {item.badge && (
                          <span className={`menu-item-badge ${item.badgeClass}`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="menu-card-body">
                        <h4 className="menu-card-title">{item.title}</h4>
                        <p className="menu-card-ingredients">{item.ingredients}</p>
                        <div className="menu-card-footer">
                          <span className="menu-card-price">{item.price}</span>
                          <Link to="/reservas" className="btn-order-modal">
                            <i className="bi bi-calendar2-plus"></i> Reservar Mesa
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
        ) : null}

        {activeCategory === 'todos' || activeCategory === 'bebidas' ? (
          <div className="mb-5">
            <div className="category-title-header">
              <i className="bi bi-cup-straw"></i>
              <h3>Jugos Naturales & Bebestibles</h3>
            </div>

            <Row className="g-4">
              {filteredItems
                .filter((item) => item.category === 'bebidas')
                .map((item) => (
                  <Col key={item.id} md={6} lg={4}>
                    <div className="menu-card">
                      <div className="menu-card-img-wrapper">
                        <img src={item.image} alt={item.title} className="menu-card-img" />
                        {item.badge && (
                          <span className={`menu-item-badge ${item.badgeClass}`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="menu-card-body">
                        <h4 className="menu-card-title">{item.title}</h4>
                        <p className="menu-card-ingredients">{item.ingredients}</p>
                        <div className="menu-card-footer">
                          <span className="menu-card-price">{item.price}</span>
                          <Link to="/reservas" className="btn-order-modal">
                            <i className="bi bi-calendar2-plus"></i> Reservar Mesa
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
        ) : null}

        {activeCategory === 'todos' || activeCategory === 'entradas' ? (
          <div className="mb-5">
            <div className="category-title-header">
              <i className="bi bi-egg-fried"></i>
              <h3>Entradas & Acompañamientos</h3>
            </div>

            <Row className="g-4">
              {filteredItems
                .filter((item) => item.category === 'entradas')
                .map((item) => (
                  <Col key={item.id} md={6} lg={4}>
                    <div className="menu-card">
                      <div className="menu-card-img-wrapper">
                        <img src={item.image} alt={item.title} className="menu-card-img" />
                        {item.badge && (
                          <span className={`menu-item-badge ${item.badgeClass}`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="menu-card-body">
                        <h4 className="menu-card-title">{item.title}</h4>
                        <p className="menu-card-ingredients">{item.ingredients}</p>
                        <div className="menu-card-footer">
                          <span className="menu-card-price">{item.price}</span>
                          <Link to="/reservas" className="btn-order-modal">
                            <i className="bi bi-calendar2-plus"></i> Reservar Mesa
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
        ) : null}

        {/* Dietary Info Banner */}
        <div className="dietary-info-box">
          <i className="bi bi-info-circle-fill dietary-icon"></i>
          <p className="dietary-text">
            <strong>¿Tienes restricciones alimentarias o alergias?</strong> Consulta a nuestro equipo al llegar o al realizar tu reserva. Disponemos de opciones de masa sin gluten y alternativas vegetarianas/veganas preparadas de forma independiente.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
