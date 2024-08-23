import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css';

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel showThumbs={false}>
        <div>
          <img src="./images/p4.png" alt="Gamepad 1" />
        </div>
        <div>
          <img src="./images/p4.png" alt="Gamepad 2" />
        </div>
        <div>
          <img src="./images/p4.png" alt="Gamepad 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
