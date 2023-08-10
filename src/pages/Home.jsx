import CarouselApp from "../components/CarouselApp"
import Image from "react-bootstrap/Image";
import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import imagenVertical from '../assets/img/pizzaVertical.jpg';

export const Home = () => {
    return (
        <>
        <div>
            <CarouselApp />
        </div>

        <Card className="m-2">
        <div>
            <h1 className="text-center m-2">Especialidades</h1>
            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente atque quis eos necessitatibus commodi doloribus impedit modi ipsum nemo, nostrum, placeat nihil optio dolorem. Consequatur voluptatibus illo quas alias.</p>
            <h3 className="text-center m-2">Subtitulo</h3>
            <p className="p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis fugit architecto, minus eaque necessitatibus ipsa porro ducimus totam illum atque itaque quod, vitae deserunt. Unde dolorum aliquid quaerat sit quisquam.</p>
        </div>
        </Card>

        <Container>
            <Row>
                <Col>
                <Card style={{ width: 'auto' }}>
                  <Card.Body>
                      <Image src={imagenVertical} />
                  </Card.Body>
                </Card>
                </Col>


                <Col>
                <Card style={{ width: 'auto' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
                </Col>
            </Row>


        </Container>
        </>
    );
};