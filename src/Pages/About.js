import React from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';
import chars from '../assets/Characters.jpg';
import films from '../assets/Films.jpg';
import map from '../assets/Map.png';
import CarouselBoxVehicles from "../Components/CarouselBoxVehicles";

const About = () => {
  return (
    <Container className="pt-3">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column mt-2"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Characters</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Films</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Starships</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Vehicles</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Galactic map</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <a href={chars}>
                  <img
                    src={chars}
                    alt="Characters"
                    width="100%"
                  />
                </a>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <a href={films}>
                  <img
                    src={films}
                    alt="Films"
                    width="100%"
                  />
                </a>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <iframe width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/obOO2GFWNKk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <CarouselBoxVehicles />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <a href={map}>
                  <img
                    src={map}
                    alt="Map"
                    height="600"
                  />
                </a>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default About;