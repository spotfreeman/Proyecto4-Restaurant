import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase'
import { Table } from 'react-bootstrap';

export const Admin = () => {
    const [inicial, setInicial] = useState([])

    const getReservas = async () => {
        db.collection('reserva').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setInicial(docs)
        }
        );
    };
    useEffect(() => {
        getReservas()
    }, [])

    return (
        <>
            {/* Ejemplo de lectura de DOCUMENTO FIREBASE
            <h1>Reservas</h1>
            {inicial.map((reservas) => (
                <ul>
                    <li>{reservas.nombre}</li>
                    <li>{reservas.fecha}</li>
                    <li>{reservas.comensales}</li>
                </ul>
            ))} 
            */}

            <Table striped border hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Comensales</th>
                    </tr>
                </thead>
                <tbody>

                    {inicial.map((reservas) => (
                        <tr>
                            <td>{reservas.nombre}</td>
                            <td>{reservas.fecha}</td>
                            <td>{reservas.comensales}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    );
};