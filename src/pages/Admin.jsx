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

            <div className="card m-3">
                <h5 className='card-header'> Listado de Reservas </h5>
                <div className="card-body">  </div>
                <p className='card-text'>Texto caja</p>

                <Table striped border hover className='m-3'>
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
            </div>

        </>
    );
};