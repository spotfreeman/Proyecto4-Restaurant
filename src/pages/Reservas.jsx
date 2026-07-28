import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { db } from '../firebase/firebase';
import imagenRestaurant from '../assets/img/restaurant.jpeg';
import './Reservas.css';

export const Reservas = () => {
    const initialReserva = {
        nombre: '',
        comensales: '',
        fecha: '',
        mesa: '1',
        correo: ''
    };

    const [reserva, setReserva] = useState(initialReserva);
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setErrorMessage('');
        setSuccessMessage(false);

        try {
            await db.collection('reserva').add(reserva);
            setReserva(initialReserva);
            setSuccessMessage(true);
        } catch (error) {
            console.error('Error guardando reserva:', error);
            setErrorMessage('Ocurrió un error al enviar la reserva. Por favor intenta nuevamente.');
        } finally {
            setSubmitting(false);
        }
    };

    const onChange = (e) => {
        setReserva({ ...reserva, [e.target.name]: e.target.value });
    };

    const handleSelectMesa = (mesaNum) => {
        setReserva({ ...reserva, mesa: mesaNum.toString() });
    };

    return (
        <div className="reservas-page">
            {/* Hero Header Banner */}
            <section className="reservas-hero-banner text-center">
                <Container>
                    <span className="reservas-badge">
                        <i className="bi bi-calendar2-check-fill me-1"></i> Reservas en Línea
                    </span>
                    <h1 className="reservas-title">Agenda tu Mesa</h1>
                    <p className="reservas-subtitle">
                        Asegura tu experiencia gastronómica en Gourmet Bistro de forma rápida y sencilla.
                    </p>
                </Container>
            </section>

            <Container className="py-5">
                {successMessage && (
                    <Alert variant="success" onClose={() => setSuccessMessage(false)} dismissible className="mb-4 text-center">
                        <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                        <strong>¡Reserva realizada con éxito!</strong> Hemos registrado tu solicitud. Te esperamos el día agendado.
                    </Alert>
                )}

                {errorMessage && (
                    <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible className="mb-4 text-center">
                        <i className="bi bi-exclamation-triangle-fill me-2 fs-5"></i>
                        {errorMessage}
                    </Alert>
                )}

                <Row className="g-4">
                    {/* Left Column: Form Card */}
                    <Col lg={7}>
                        <div className="reservas-form-card">
                            <h3 className="form-card-title">
                                <i className="bi bi-card-checklist text-warning"></i> Datos de la Reserva
                            </h3>

                            <form onSubmit={onSubmit}>
                                {/* Nombre */}
                                <div className="reservas-input-group">
                                    <i className="bi bi-person-fill"></i>
                                    <Form.Control
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre completo *"
                                        value={reserva.nombre}
                                        onChange={onChange}
                                        required
                                        className="reservas-input"
                                    />
                                </div>

                                {/* Correo */}
                                <div className="reservas-input-group">
                                    <i className="bi bi-envelope-fill"></i>
                                    <Form.Control
                                        type="email"
                                        name="correo"
                                        placeholder="Correo electrónico de contacto *"
                                        value={reserva.correo}
                                        onChange={onChange}
                                        required
                                        className="reservas-input"
                                    />
                                </div>

                                <Row className="g-3">
                                    {/* Comensales */}
                                    <Col sm={6}>
                                        <div className="reservas-input-group">
                                            <i className="bi bi-people-fill"></i>
                                            <Form.Control
                                                type="number"
                                                name="comensales"
                                                placeholder="Cantidad personas *"
                                                min="1"
                                                max="20"
                                                value={reserva.comensales}
                                                onChange={onChange}
                                                required
                                                className="reservas-input"
                                            />
                                        </div>
                                    </Col>

                                    {/* Fecha */}
                                    <Col sm={6}>
                                        <div className="reservas-input-group">
                                            <i className="bi bi-calendar-event-fill"></i>
                                            <Form.Control
                                                type="date"
                                                name="fecha"
                                                value={reserva.fecha}
                                                onChange={onChange}
                                                required
                                                className="reservas-input"
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                {/* Seleccionar Mesa Grid */}
                                <h4 className="table-selection-heading">
                                    <i className="bi bi-grid-3x3-gap-fill me-1 text-warning"></i> Selecciona tu Mesa
                                </h4>

                                <div className="table-cards-grid">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <div
                                            key={num}
                                            className={`table-option-card ${reserva.mesa === num.toString() ? 'selected' : ''}`}
                                            onClick={() => handleSelectMesa(num)}
                                        >
                                            <i className="bi bi-grid-fill table-card-icon"></i>
                                            <span className="table-card-label">Mesa {num}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Submit Button */}
                                <button type="submit" disabled={submitting} className="btn-submit-reserva">
                                    {submitting ? (
                                        <>
                                            <Spinner animation="border" size="sm" className="me-2" />
                                            Guardando Reserva...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-calendar2-check-fill"></i> Confirmar Reserva
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </Col>

                    {/* Right Column: Restaurant Info Card */}
                    <Col lg={5}>
                        <div className="reservas-info-card">
                            <div className="reservas-img-wrapper">
                                <img src={imagenRestaurant} alt="Ambiente de Gourmet Bistro" />
                            </div>
                            <div className="reservas-info-body">
                                <h4 className="fw-bold text-white mb-2">Información Importante</h4>
                                <p className="text-secondary small">
                                    Tu reserva será procesada y confirmada en tiempo real.
                                </p>

                                <ul className="policy-list">
                                    <li className="policy-item">
                                        <i className="bi bi-clock-history policy-icon"></i>
                                        <span>
                                            <strong>15 min de tolerancia:</strong> Guardamos tu mesa durante 15 minutos pasados de la hora reservada.
                                        </span>
                                    </li>
                                    <li className="policy-item">
                                        <i className="bi bi-envelope-check policy-icon"></i>
                                        <span>
                                            <strong>Confirmación:</strong> Recibirás los detalles de tu mesa al correo electrónico registrado.
                                        </span>
                                    </li>
                                    <li className="policy-item">
                                        <i className="bi bi-people policy-icon"></i>
                                        <span>
                                            <strong>Grupos grandes (8+ personas):</strong> Para reservas especiales o eventos privados, por favor contáctanos al WhatsApp +56 9 8765 4321.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Reservas;
