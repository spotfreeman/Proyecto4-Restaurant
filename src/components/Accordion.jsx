import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

import imagen01 from '../assets/img/imagen01.jpeg'
import imagen02 from '../assets/img/imagen02.jpeg'
import imagen03 from '../assets/img/imagen03.jpeg'

function BasicExample() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Introduccion</Accordion.Header>
                <Accordion.Body>
                    La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que tradicionalmente se cubre con salsa de tomate y mozzarella y se hornea a alta temperatura en un horno de leña.1​2​3​ El lugar donde se venden pizzas se denomina «pizzería» y al obrador, «pizzero» (pizzaiolo en italiano). Aunque se considera que su origen está en la gastronomía italiana,2​ específicamente la napolitana,1​ su consumo está extendido a casi todos los países del mundo con diversas variantes locales que incorporan distintos ingredientes para cubrir la masa.4​ Junto con la hamburguesa, la pizza está considerada la comida más difundida del mundo,5​6​ como consecuencia de la diáspora italiana que se estableció en América a lo largo del siglo xx principalmente en Nueva York,2​ Buenos Aires o Chicago.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Pizzas</Accordion.Header>

                <Accordion.Body>
                    <Image src={imagen01} style={{ width: '100%' }} />

                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Full Queso <Badge pill bg="danger">Nueva !!!</Badge> </ListGroup.Item>
                            <ListGroup.Item>Napolitana</ListGroup.Item>
                            <ListGroup.Item>Full Carne</ListGroup.Item>
                            <ListGroup.Item>Full Pollo</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco labori
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Hamburguesas</Accordion.Header>
                <Accordion.Body>
                    <Image src={imagen02} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Bebestibles</Accordion.Header>
                <Accordion.Body>
                    <Image src={imagen03} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>Postres</Accordion.Header>
                <Accordion.Body>
                    <Image src={imagen01} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default BasicExample;