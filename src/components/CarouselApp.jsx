import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import imagen01 from '../assets/img/imagen01.jpeg'
import imagen02 from '../assets/img/imagen02.jpeg'
import imagen03 from '../assets/img/imagen03.jpeg'

function CarouselApp() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={imagen01} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={imagen02} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={imagen03} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselApp;