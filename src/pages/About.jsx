import Card from 'react-bootstrap/Card'

export const About = () => {
    return (
        <>
            <div>
                <h1>About</h1>
                <h3>Ubicacion en Maps</h3>
            </div>



            <div>
                <Card>
                    <Card.Header>Nos encontramos en...</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante.{' '}
                            </p>
                            <div>
                                {/* <iframe src=""  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                <div class="embed-responsive">  <iframe className="embed-responsive-item" style={{ width: "600px", height: "450px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2187.0154637669407!2d-70.59614069889044!3d-33.45501437432873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfbf04ab4a7b%3A0x5a99e4565277755f!2zUGxhemEgw5F1w7FvYQ!5e0!3m2!1ses-419!2scl!4v1691814238546!5m2!1ses-419!2scl" ></iframe> </div>
                            </div>

                        </blockquote>
                    </Card.Body>
                </Card>

            </div>

        </>
    );
};