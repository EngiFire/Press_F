import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav} from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from './logo1.png';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from '../Pages/Home';
import Stories from '../Pages/Stories';
import Account from '../Pages/Account';

export default class Header extends Component {
  render() {
    return (
      <>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
          <NavbarBrand href='/'>
            <img
              src={logo}
              height='60'
              width='60'
              alt='Logo' />
          </NavbarBrand>
            <Nav className='mr-auto'>
              <Nav.Link as={Link} to="/welcome" > Home </Nav.Link>
              <Nav.Link as={Link} to="/stories" > Stories </Nav.Link>
              <Nav.Link as={Link} to="/account" > Account </Nav.Link>
            </Nav>
          {/* <Breadcrumb>
            <Breadcrumb.Item href="/welcome">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/stories">Stories</Breadcrumb.Item>
            <Breadcrumb.Item href="/account">Account</Breadcrumb.Item>
          </Breadcrumb> */}
        </Container>
      </Navbar>
      
      <Router>
          <Switch>
            <Route exact path="/welcome" Component={Home} />
            <Route exact path="/stories" Component={Stories} />
            <Route exact path="/account" Component={Account} />
          </Switch>
      </Router>
      </>
    )
  }
}