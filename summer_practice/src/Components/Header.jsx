import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand} from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import logo from './logo1.png';

function Header () {
    return (
        <>
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
                <Breadcrumb.Item href="/welcome"><Link to='/'>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item href="/stories"><Link to='/stories'>Stories</Link></Breadcrumb.Item>
                <Breadcrumb.Item href="/account"><Link to='/account'>Account</Link></Breadcrumb.Item>
            </Breadcrumb>
            </Container>
        </Navbar>
        </>
    );
}

export default Header;