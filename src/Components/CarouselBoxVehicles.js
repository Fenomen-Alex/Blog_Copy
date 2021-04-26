import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import {CarouselItem} from "react-bootstrap";
import v1 from '../assets/Vehicles.jpg';
import v2 from '../assets/Vehicles2.jpg';
import v3 from '../assets/Vehicles3.jpg';
import v4 from '../assets/Vehicles4.jpg';
import v5 from '../assets/VehiclesEmp.jpg';
import v6 from '../assets/VehiclesRebel.jpg';
import v7 from '../assets/VehiclesDroid.jpg';



const CarouselBoxVehicles = () => {
  return (
    <Carousel>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={v1}
          alt="Item1"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={v2}
          alt="Item1"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={v3}
          alt="Item1"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={v4}
          alt="Item1"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={v5}
          alt="Item1"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={v6}
          alt="Item1"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100"
          src={v7}
          alt="Item1"
        />
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselBoxVehicles;