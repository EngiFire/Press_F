import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from './logo1.png';
import Carousel from 'react-bootstrap/Carousel';

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Container>
            <NavbarBrand href='/'>
                <img
                    src={logo}
                    height='60'
                    width='60'
                    alt='Logo'
                />
            </NavbarBrand>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/stories">Stories</Breadcrumb.Item>
            <Breadcrumb.Item href="/account">Account</Breadcrumb.Item>
          </Breadcrumb>
      </Container>
      </Navbar>
    )
  }
}

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
