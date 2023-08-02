import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase'


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
            <h1>Reservas</h1>
            {reserva.map((reserva) => (
                <ul>
                    <li>{reserva.nombre}</li>
                    <li>{reserva.fecha}</li>
                    <li>{reserva.comensales}</li>
                </ul>
            ))}
        </>
    );
};