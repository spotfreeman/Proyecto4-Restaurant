import { CarouselApp } from "../components/CarouselApp"
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { imagenVertical } from '../assets/img/pizzaVertical.jpg';

export const Home = () => {
    return (
        <>
            <CarouselApp />
            <Card className="border-0" >
                <h1 className="text-center p-3">Especialidades</h1>
                <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente atque quis eos necessitatibus commodi doloribus impedit modi ipsum nemo, nostrum, placeat nihil optio dolorem. Consequatur voluptatibus illo quas alias.</p>
                <h3 className="text-center p-3 ">Subtitulo</h3>
                <p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis fugit architecto, minus eaque necessitatibus ipsa porro ducimus totam illum atque itaque quod, vitae deserunt. Unde dolorum aliquid quaerat sit quisquam.</p>
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
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
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