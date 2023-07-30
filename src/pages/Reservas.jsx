import { useState } from "react";
import { db } from '../firebase/firebase'

export const Reservas = () => {
    const initialReserva = {
        nombre: '',
        comensales: '',
        fecha: ''
    }

    const [reserva, setReserva] = useState(initialReserva)

    const onSubmit = async (e) => {
        e.preventDefault()

        await db.collection('reserva').add(reserva)
        setReserva(initialReserva)

        console.log('Formulario enviado')
        console.log(reserva)
    }

    const onChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setReserva({ ...reserva, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h1>Reservas</h1>
            <form className="form gap-5 p-5" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control mt-3"
                    name="nombre"
                    placeholder="Ingrese su nombre"
                    value={reserva.nombre}
                    onChange={onChange}
                />

                <input
                    type="number"
                    className="form-control mt-3"
                    name="comensales"
                    placeholder="Cantidad de clientes"
                    value={reserva.comensales}
                    onChange={onChange}
                />

                <input
                    type="datetime"
                    className="form-control mt-3"
                    name="fecha"
                    placeholder="Fecha de su reserva"
                    value={reserva.fecha}
                    onChange={onChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary mt-3">Enviar</button>
            </form>

        </>
    );
};
