import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import imagen01 from '../assets/img/imagen01.jpeg';
import imagen02 from '../assets/img/imagen02.jpeg';
import imagen03 from '../assets/img/imagen03.jpeg';

function CarouselApp() {
  return (
    <Carousel>

      <Carousel.Item>
        <Image src={imagen01} style={{ width: '100%' }} />
        <Carousel.Caption>
          <h3>Las mejores pizzas de la comuna</h3>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={imagen02} style={{ width: '100%' }} />
        <Carousel.Caption>
          <h3>Gran variedad de ingredientes</h3>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={imagen03} style={{ width: '100%' }} />
        <Carousel.Caption>
          <h3>Jugos naturales de todos los sabores</h3>

        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselApp;