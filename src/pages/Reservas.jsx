import { useState } from "react";
import { db } from '../firebase/firebase'
import Form from 'react-bootstrap/Form'
import Image from "react-bootstrap/Image";
import imagenRestaurant from '../assets/img/imagenRestaurant.jpg'

export const Reservas = () => {
    const initialReserva = {
        nombre: '',
        comensales: '',
        fecha: '',
        mesa: '',
        correo: ''
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
            <div className="card m-2 border-0">
                <h5 className='card-header text-center border-0'> RESERVAS </h5>

                <form className="form gap-5 p-2" onSubmit={onSubmit}>
                    <input
                        style={{ width: '18rem' }}
                        type="text"
                        className="form-control mt-3"
                        name="nombre"
                        placeholder="Ingrese su nombre"
                        value={reserva.nombre}
                        onChange={onChange}
                        required
                    />

                    <input
                        style={{ width: '18rem' }}
                        type="number"
                        className="form-control mt-3"
                        name="comensales"
                        placeholder="Cantidad de clientes"
                        value={reserva.comensales}
                        onChange={onChange}
                        required
                    />

                    <input
                        style={{ width: '18rem' }}
                        type="date"
                        className="form-control mt-3"
                        name="fecha"
                        placeholder="Fecha de su reserva"
                        value={reserva.fecha}
                        onChange={onChange}
                        required
                    />

                    <input
                        style={{ width: '18rem' }}
                        type="text"
                        className="form-control mt-3"
                        name="correo"
                        placeholder="Correo"
                        value={reserva.correo}
                        onChange={onChange}
                        required
                    />


                    <div>
                        <h3></h3>
                        <h6>Escoge tu mesa</h6>
                        <Form>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="1"
                                        name="mesa"
                                        type={type}
                                        id={`inline-${type}-1`}
                                        value='1'
                                        onChange={onChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="2"
                                        name="mesa"
                                        type={type}
                                        id={`inline-${type}-2`}
                                        value='2'
                                        onChange={onChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="3"
                                        name="mesa"
                                        type={type}
                                        id={`inline-${type}-3`}
                                        value='3'
                                        onChange={onChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="4"
                                        name="mesa"
                                        type={type}
                                        id={`inline-${type}-4`}
                                        value='4'
                                        onChange={onChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="5"
                                        name="mesa"
                                        type={type}
                                        id={`inline-${type}-4`}
                                        value='5'
                                        onChange={onChange}
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary mt-3"> Enviar Reserva </button>
                </form>
                <div className="text-center">
                    <Image src={imagenRestaurant} />
                </div>
            </div>


        </>
    );
};
