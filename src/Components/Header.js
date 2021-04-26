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
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

class Header extends Component {
  render() {
    return (
      <>
        <Router basename="/">
          <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
              <Link className="nav-link" to="/"><Navbar.Brand href="/">
                <img
                  src={logo}
                  alt="Logo"
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                /> My Blog
              </Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Link className="nav-link" to="/"><Nav.Link href="/">Home</Nav.Link></Link>
                  <Link className="nav-link" to="/about"><Nav.Link href="/">About</Nav.Link></Link>
                  <Link className="nav-link" to="/contacts"><Nav.Link href="/">Contacts</Nav.Link></Link>
                  <Link className="nav-link" to="/blog"><Nav.Link href="/">Blog</Nav.Link></Link>

                  {/*<Nav.Link href="/Blog_Copy/about">About</Nav.Link>*/}
                  {/*<Nav.Link href="/Blog_Copy/contacts">Contacts</Nav.Link>*/}
                  {/*<Nav.Link href="/Blog_Copy/blog">Blog</Nav.Link>*/}
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
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/blog" component={Blog}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Header;