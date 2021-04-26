import React from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";
import logo from '../assets/star_wars_logo.png'

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col md="9">
          <Media className="m-5">
            <img
              src={logo}
              alt=""
              width="150"
              height="150"
              className="mr-3"
            />
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Accusantium deserunt eius est
                exercitationem illum libero nihil
                odit optio quo repellendus!
                Ad blanditiis excepturi,
                exercitationem ipsa necessitatibus
                nobis numquam ratione voluptatum?
              </p>
            </Media.Body>
          </Media>
          <Media className="m-5">
            <img
              src={logo}
              alt=""
              width="150"
              height="150"
              className="mr-3"
            />
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Accusantium deserunt eius est
                exercitationem illum libero nihil
                odit optio quo repellendus!
                Ad blanditiis excepturi,
                exercitationem ipsa necessitatibus
                nobis numquam ratione voluptatum?
              </p>
            </Media.Body>
          </Media>
          <Media className="m-5">
            <img
              src={logo}
              alt=""
              width="150"
              height="150"
              className="mr-3"
            />
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Accusantium deserunt eius est
                exercitationem illum libero nihil
                odit optio quo repellendus!
                Ad blanditiis excepturi,
                exercitationem ipsa necessitatibus
                nobis numquam ratione voluptatum?
              </p>
            </Media.Body>
          </Media>
          <Media className="m-5">
            <img
              src={logo}
              alt=""
              width="150"
              height="150"
              className="mr-3"
            />
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Accusantium deserunt eius est
                exercitationem illum libero nihil
                odit optio quo repellendus!
                Ad blanditiis excepturi,
                exercitationem ipsa necessitatibus
                nobis numquam ratione voluptatum?
              </p>
            </Media.Body>
          </Media>
        </Col>
        <Col md="3">
          <h5 className="text-center mt-5">Categories</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Star Wars: Episode IV – A New Hope
              </ListGroup.Item>
              <ListGroup.Item>
                Star Wars: Episode V – The Empire Strikes Back              </ListGroup.Item>
              <ListGroup.Item>
                Star Wars: Episode VI – Return of the Jedi              </ListGroup.Item>
              <ListGroup.Item>
                Star Wars: Prequel
              </ListGroup.Item>
              <ListGroup.Item>
                Star Wars: Sequel
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className="mt-3" bg="light">
            <Card.Title>Side widget</Card.Title>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Animi asperiores culpa cupiditate, ducimus eligendi hic perspiciatis vel?
              Blanditiis, rerum, velit.
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;