import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const About = () => {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='text-center'> <h2>Nos encontramos en...</h2></Card.Header>
                        <Row>
                            <Col>
                                <Card className='border-0 p-4'>
                                    <h3> Encuentranos en...</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, at fugiat veniam, ducimus animi quas asperiores sit magnam minus voluptates quibusdam, et pariatur quo consequuntur accusantium? Earum voluptas a mollitia?</p>
                                </Card>
                            </Col>


                            <Col>
                                <Card className='border-0 p-4'>
                                    <blockquote className="blockquote mb-0">
                                        <div >
                                            <div class="embed-responsive text-center">  <iframe className="embed-responsive-item" style={{ width: "600px", height: "600px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2187.0154637669407!2d-70.59614069889044!3d-33.45501437432873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfbf04ab4a7b%3A0x5a99e4565277755f!2zUGxhemEgw5F1w7FvYQ!5e0!3m2!1ses-419!2scl!4v1691814238546!5m2!1ses-419!2scl" ></iframe> </div>
                                        </div>

                                    </blockquote>
                                </Card>
                            </Col>
                        </Row>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};