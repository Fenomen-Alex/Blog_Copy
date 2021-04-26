import React from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";

const Home = () => {
  return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4"> Our teams</h2>
        <CardDeck className="m-4">
          <Card bg="dark" text="danger">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/51/e6/88/51e6886da3c4ed381ca7130da837d638.jpg"
            />
            <Card.Body>
              <Card.Title>Dark Side</Card.Title>
              <Card.Text>
                "I Am Altering The Deal. Pray I Don't Alter It Any Further!"
              </Card.Text>
              <Button variant="danger">About</Button>
            </Card.Body>
          </Card>
          <Card bg="warning" text="dark">
            <Card.Body>
              <Card.Title>Droids</Card.Title>
              <Card.Text>
                “We Seem To Be Made To Suffer. It’s Our Lot In Life.”
              </Card.Text>
              <Button variant="dark">About</Button>
              <Card.Img
                variant="bottom"
                src="https://wallpapercave.com/wp/wp7697486.jpg"
              />
            </Card.Body>
          </Card>
          <Card bg="info"  text="light">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/3f/6f/85/3f6f854d4cc516e14f88ee88659b3d70.jpg"
            />
            <Card.Body>
              <Card.Title>Light Side</Card.Title>
              <Card.Text>
                “Do. Or Do Not. There Is No Try.”
              </Card.Text>
              <Button variant="primary">About</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
};

export default Home;