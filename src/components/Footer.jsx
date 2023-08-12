import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Footer = () => {
    return (
        <>
            <Card bg='dark text-white rounded-0'>
                <Row>
                    <Col>
                        <h3 className='text-center p-3'>Redes Sociales</h3>
                        <ul class="list-group text-center">
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i class="bi bi-twitter" style={{ fontSize: '5rem' }} ></i>
                            </li>
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i class="bi bi-facebook" style={{ fontSize: '5rem' }} ></i>
                            </li>
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i class="bi bi-instagram" style={{ fontSize: '5rem' }} ></i>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <h3 className='text-center p-3'>Contacto</h3>
                        <ul class="list-group text-center">
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i class="bi bi-geo-alt" style={{ fontSize: '2rem' }} > Irarrazaval N°9999, Ñuñoa</i>
                            </li>
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i class="bi bi-telephone-inbound" style={{ fontSize: '2rem' }} > Fono : 555-55-55</i>
                            </li>
                            <li className="list-group-item bg-transparent border-0 text-white">
                                <i class="bi bi-stopwatch" style={{ fontSize: '2rem' }} > Horarios : 09:00 - 18-00</i>
                            </li>
                        </ul>
                    </Col>

                </Row>

                <Card.Body>

                    <Card.Text>
                        <h5 className='text-center'>Proyecto 4 - Restaurant UDD -  Creado por ROB</h5>
                    </Card.Text>
                </Card.Body>
            </Card >
        </>
    )
}