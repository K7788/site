import React from "react";
import { Navbar, Nav, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Row>
          <Col>
            <p>Бурназова Ю. С.</p>
          </Col>
          <Col>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <ul>
                  <li>
                    <Link to="/">Главная</Link>
                  </li>
                  <li>
                    <Link to="/work">Работы</Link>
                  </li>
                  <li>
                    <Link to="/about">Обо мне</Link>
                  </li>
                  <li>
                    <Link to="/projects">Проекты</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Контакты</Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
