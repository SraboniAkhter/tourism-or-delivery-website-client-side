import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../../images/home-5-slider-graphic.png'
import img2 from '../../../images/home-5-slider-image-2.jpg'
import img3 from '../../../images/home-5-slider-image-3.jpg'

const HeaderMain = () => {
    return (
        <div style={{ height: '100%' }}>
            <Carousel>
  <Carousel.Item>
    <img
        style={{ height: '500px' }}
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{ height: '500px' }}
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 className="text-warning">Welcome To Roam</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{ height: '500px' }}
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className="text-warning">We'er provide you a exiting tour</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default HeaderMain;