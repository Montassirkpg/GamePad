// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="gamepad\ASSETS\GB\FRONT\GB-Front-Front_USBC-02.png" alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src="C:\Users\monta\OneDrive\Bureau\t2.png" alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src="C:\Users\monta\OneDrive\Bureau\t2.png" alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
