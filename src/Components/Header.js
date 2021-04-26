import React, {Component} from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar
} from 'react-bootstrap';
import logo from '../assets/star_wars_logo.png';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

class Header extends Component {
  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/Blog_Copy/">
                <img
                  src={logo}
                  alt="Logo"
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                /> My Blog
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/Blog_Copy/">Home</Nav.Link>
                  <Nav.Link href="/Blog_Copy/about">About</Nav.Link>
                  <Nav.Link href="/Blog_Copy/contacts">Contacts</Nav.Link>
                  <Nav.Link href="/Blog_Copy/blog">Blog</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>


          <Switch>
            <Route exact path="/Blog_Copy/" component={Home}/>
            <Route exact path="/Blog_Copy/about" component={About}/>
            <Route exact path="/Blog_Copy/contacts" component={Contacts}/>
            <Route exact path="/Blog_Copy/blog" component={Blog}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Header;