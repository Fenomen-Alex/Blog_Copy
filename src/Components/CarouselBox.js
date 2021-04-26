import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import {CarouselItem} from "react-bootstrap";
import sw1 from '../assets/3399933.jpg';
import sw2 from '../assets/StarWars.jpg';
import sw3 from '../assets/StarWars2.jpg';
import sw4 from '../assets/StarWars3.jpg';


const CarouselBox = () => {
  return (
    <Carousel>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={sw4}
          alt="Item1"
          height="600"
        />
        <Carousel.Caption>
          <h3>May The Force Be With You!</h3>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={sw2}
          alt="Item2"
          height="600"
        />
        <Carousel.Caption>
          <h3>May The Force Be With You!</h3>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={sw3}
          alt="Item3"
          height="600"
        />
        <Carousel.Caption>
          <h3>May The Force Be With You!</h3>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={sw1}
          alt="Item4"
          height="600"
        />
        <Carousel.Caption>
          <h3>May The Force Be With You!</h3>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselBox;