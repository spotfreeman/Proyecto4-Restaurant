import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


export const Footer = () => {
    return (
        <>
            <Card bg='dark text-white rounded-0'>
                <Card.Header>Footer</Card.Header>
                <Card.Body>
                    <Card.Title>Footer Titulo</Card.Title>
                    <Card.Text>
                        Direccion Irarrazaval 99999, Nunoa

                        Ubicacion MAPS
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}