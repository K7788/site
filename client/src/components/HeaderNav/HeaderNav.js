import React from "react";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";

import "./HeaderNav.css";

export default function HeaderNav() {
  return (
    <div className="container-bg container-before">
      <Container fluid>
        <Header />
        <Row>
          <Col className="headerNavPt">
            <p fluid className="text-center">
              <h1>Я Бурназова Юлия Сергеевна</h1>
              <h2>Добро пожаловать</h2>
            </p>
          </Col>
        </Row>
      </Container>
     
    </div>
  
  );
}
