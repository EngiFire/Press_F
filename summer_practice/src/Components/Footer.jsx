import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Footer extends Component {
  render() {
    return (
      <div class='last_block'>
        <div class='inner_footer'>
          <Row xs={1} md={3}>
            <Col><a href='#' class='foot-item'>Пункт меню</a></Col>
            <Col><a href='#' class='foot-item'>Пункт меню</a></Col>
            <Col><a href='#' class='foot-item'>Пункт меню</a></Col>
            <Col><a href='#' class='foot-item'>Пункт меню</a></Col>
            <Col><a href='#' class='foot-item'>Пункт меню</a></Col>
            <Col><a href='#' class='foot-item'>Пункт меню</a></Col>
          </Row>
        </div>
      </div>
    )
  }
}
