import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

import imagen01 from '../assets/img/imagen01.jpeg'
import imagen02 from '../assets/img/imagen02.jpeg'
import imagen03 from '../assets/img/imagen03.jpeg'

import jugo01 from '../assets/img/jugo01.jpeg'
import jugo02 from '../assets/img/jugo02.jpeg'

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
                    <Row>
                        <Col>
                            <Card className='p-3 m-3 text-center w-100 h-100'>
                                <h2>EL MONTE</h2>
                                Queso de Cabra – Albahaca – Tomate – Pesto
                                $11.700.-

                                <Badge pill bg="danger" className='p-2'>NUEVA !!!</Badge>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='p-3 m-3 text-center'>
                                <h2>A LO POBRE</h2>
                                Entraña a la plancha – Huevo – Cebolla asada – Papas chip
                                $11.800.-

                                <Badge pill bg="warning" className='p-2'>RECOMENDADA</Badge>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='p-3 m-3 text-center'>
                                <h2>EL MONTE</h2>
                                Queso de Cabra – Albahaca – Tomate – Pesto
                                $11.700.-

                            </Card>
                        </Col>
                        <Col>
                            <Card className='p-3 m-3 text-center'>
                                <h2>PAISANA</h2>
                                Jamón Acaramelado – Champiñón – Aceituna
                                $10.800.-

                            </Card>
                        </Col>

                    </Row>

                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
                <Accordion.Header>Bebestibles</Accordion.Header>
                <Accordion.Body>

                    <Row>
                        <Col className='m-3'>
                            <Card className='p-3 m-3 text-center w-100 h-100'>
                                <Image src={jugo01} style={{ width: '20%' }} />
                                <h2>Jugo Franbuesa</h2>
                                $1.700.-


                            </Card>
                        </Col>
                        <Col className='m-3'>
                            <Card className='p-3 m-3 text-center w-100 h-100'>
                                <Image src={jugo02} style={{ width: '20%' }} />
                                <h2>Jugo Limonada</h2>
                                Entraña a la plancha – Huevo – Cebolla asada – Papas chip
                                $11.800.-


                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col className='m-3'>
                            <Card className='p-3 m-3 text-center w-100 h-100'>
                                <h2>Gaseosas</h2>
                                Queso de Cabra – Albahaca – Tomate – Pesto
                                $11.700.-


                            </Card>
                        </Col>
                        <Col className='m-3'>
                            <Card className='p-3 m-3 text-center w-100 h-100'>
                                <h2>A LO POBRE</h2>
                                Entraña a la plancha – Huevo – Cebolla asada – Papas chip
                                $11.800.-


                            </Card>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
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