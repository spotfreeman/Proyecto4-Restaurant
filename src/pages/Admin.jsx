import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase'
import { Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

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
        <Card>

            <div className="card m-3">
                <h5 className='card-header'> Listado de Reservas </h5>
                <div className="card-body">  </div>

                <Table striped border hover className='m-'>
                    <thead>
                        <tr>
                            <th style={{ width: '20px' }} >Nombre</th>
                            <th style={{ width: '10px' }}  >Fecha</th>
                            <th style={{ width: '5px' }}  >Comensales</th>
                            <th style={{ width: '5px' }}  >Mesa</th>
                        </tr>
                    </thead>
                    <tbody>

                        {inicial.map((reservas) => (
                            <tr>
                                <td>{reservas.nombre}</td>
                                <td>{reservas.fecha}</td>
                                <td>{reservas.comensales}</td>
                                <td>{reservas.mesa}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        </Card>



        </>
    );
};