import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


export const Footer = () => {
    return (
        <>
            <Card>
                <Card.Header>Footer</Card.Header>
                <Card.Body>
                    <Card.Title className=''>Footer Titulo</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}