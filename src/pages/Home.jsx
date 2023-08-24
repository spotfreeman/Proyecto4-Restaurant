import CarouselApp from "../components/CarouselApp"
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import imagenVertical from '../assets/img/pizzaVertical.jpg';
import imagenIcon from '../assets/img/icon.png'

export const Home = () => {
    return (
        <>
            <CarouselApp />

            <Card className="border-0" >
                <h1 className="text-center p-3">Un poco de historia...</h1>
                <Card className="border-0">
                    <h3 className="p-4">La historia de la pizza está ligada al consumo del pan por parte de la humanidad. En el antiguo Egipto al descubrir la levadura empiezan a prepararse una especie de panes con la forma y el color del sol, con harina, agua y miel. En la antigua Grecia este pan fue evolucionando y le añadían grasa, especias, ajo y cebolla. </h3>
                </Card>
                <Card className="border-0">
                    <Image src={imagenIcon} style={{ width: '20%', padding: '15px', margin: 'auto' }} />
                </Card>
                <Card className="border-0">

                </Card>
            </Card>


            <div className="bg-black">

                <Container className="bg-black ">
                    <Row >
                        <Col >
                            <Card className="text-center bg-black border-0" style={{ width: '100%' }}>
                                <Card.Body>
                                    <Image src={imagenVertical} />
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col>
                            <Card className="text-center bg-black" style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title className="text-white">Las mejores Pizzas!</Card.Title>
                                    <Card.Text className="text-white">
                                        QUE ESPERAS !!! VEN POR LA TUYA.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>

            </div>
        </>
    );
};