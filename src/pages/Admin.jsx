import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { db } from '../firebase/firebase';
import './Admin.css';

export const Admin = () => {
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const getReservas = () => {
        try {
            const unsubscribe = db.collection('reserva').onSnapshot((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                setReservas(docs);
                setLoading(false);
            }, (error) => {
                console.error("Error fetching reservas:", error);
                setLoading(false);
            });
            return unsubscribe;
        } catch (err) {
            console.error("Firebase Connection Error:", err);
            setLoading(false);
        }
    };

    const handleDeleteReserva = async (id, nombre) => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar la reserva de "${nombre}"?`)) {
            try {
                await db.collection('reserva').doc(id).delete();
            } catch (error) {
                console.error("Error eliminando reserva:", error);
                alert("Ocurrió un error al intentar eliminar la reserva.");
            }
        }
    };

    useEffect(() => {
        const unsubscribe = getReservas();
        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    // Filter reservations by search term
    const filteredReservas = reservas.filter((r) => {
        const nameMatch = r.nombre ? r.nombre.toLowerCase().includes(searchTerm.toLowerCase()) : false;
        const emailMatch = r.correo ? r.correo.toLowerCase().includes(searchTerm.toLowerCase()) : false;
        const tableMatch = r.mesa ? r.mesa.toString().includes(searchTerm) : false;
        return nameMatch || emailMatch || tableMatch;
    });

    // Calculated Dashboard Metrics
    const totalReservas = reservas.length;
    const totalComensales = reservas.reduce((acc, curr) => acc + (parseInt(curr.comensales) || 0), 0);
    const mesasReservadasCount = new Set(reservas.map(r => r.mesa)).size;

    return (
        <div className="admin-page">
            {/* Hero Header Banner */}
            <section className="admin-hero-banner text-center">
                <Container>
                    <span className="admin-badge">
                        <i className="bi bi-shield-lock-fill me-1"></i> Panel de Administración
                    </span>
                    <h1 className="admin-title">Gestión de Reservas</h1>
                    <p className="admin-subtitle">
                        Sincronización en tiempo real con Firebase Cloud Firestore
                    </p>
                </Container>
            </section>

            {/* Live Stats Cards */}
            <Container className="admin-stats-wrapper">
                <Row className="g-3">
                    <Col md={4} lg={4}>
                        <div className="admin-stat-card">
                            <div className="stat-icon-wrapper">
                                <i className="bi bi-calendar-check-fill"></i>
                            </div>
                            <div>
                                <h3 className="stat-val">{totalReservas}</h3>
                                <p className="stat-title">Reservas Registradas</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} lg={4}>
                        <div className="admin-stat-card">
                            <div className="stat-icon-wrapper">
                                <i className="bi bi-people-fill"></i>
                            </div>
                            <div>
                                <h3 className="stat-val">{totalComensales}</h3>
                                <p className="stat-title">Total Comensales</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} lg={4}>
                        <div className="admin-stat-card">
                            <div className="stat-icon-wrapper">
                                <i className="bi bi-grid-3x3-gap-fill"></i>
                            </div>
                            <div>
                                <h3 className="stat-val">{mesasReservadasCount}</h3>
                                <p className="stat-title">Mesas Solicitadas</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Table Container */}
            <Container>
                <div className="admin-table-container">
                    <div className="admin-table-header">
                        <h3 className="admin-table-title">
                            <i className="bi bi-list-stars"></i> Listado de Reservas
                        </h3>

                        <div className="admin-search-box">
                            <i className="bi bi-search"></i>
                            <Form.Control
                                type="text"
                                placeholder="Buscar por cliente, correo o mesa..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="admin-search-input"
                            />
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-warning" role="status">
                                <span className="visually-hidden">Cargando reservas...</span>
                            </div>
                            <p className="mt-3 text-secondary">Cargando información desde Firebase...</p>
                        </div>
                    ) : filteredReservas.length === 0 ? (
                        <div className="empty-table-state">
                            <i className="bi bi-inbox empty-icon"></i>
                            <h4 className="empty-title">No se encontraron reservas</h4>
                            <p className="empty-text">
                                {searchTerm
                                    ? `No hay resultados que coincidan con "${searchTerm}".`
                                    : 'Aún no se han registrado reservas en el sistema.'}
                            </p>
                        </div>
                    ) : (
                        <Table responsive className="admin-custom-table">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th className="text-center">Fecha Reserva</th>
                                    <th className="text-center">Comensales</th>
                                    <th className="text-center">Mesa</th>
                                    <th>Correo Contacto</th>
                                    <th className="text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredReservas.map((item) => {
                                    const initial = item.nombre ? item.nombre.charAt(0).toUpperCase() : '?';
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="user-badge-cell">
                                                    <div className="user-avatar-circle">{initial}</div>
                                                    <div>
                                                        <strong className="d-block">{item.nombre || 'Sin nombre'}</strong>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <i className="bi bi-calendar-event me-1 text-warning"></i>
                                                {item.fecha || 'N/A'}
                                            </td>
                                            <td className="text-center">
                                                <span className="guests-badge">
                                                    <i className="bi bi-person-fill me-1"></i>
                                                    {item.comensales || 0} pers.
                                                </span>
                                            </td>
                                            <td className="text-center">
                                                <span className="table-badge-pill">
                                                    Mesa {item.mesa || 'N/A'}
                                                </span>
                                            </td>
                                            <td>
                                                <i className="bi bi-envelope me-1 text-secondary"></i>
                                                {item.correo || 'Sin correo'}
                                            </td>
                                            <td className="text-center">
                                                <button
                                                    onClick={() => handleDeleteReserva(item.id, item.nombre)}
                                                    className="btn-delete-reserva"
                                                    title="Eliminar Reserva"
                                                >
                                                    <i className="bi bi-trash3-fill me-1"></i> Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Admin;