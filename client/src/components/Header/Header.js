import React from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

import "./Header.css";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">King</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="Work.js">Работы</Nav.Link>
            <Nav.Link href="#link">Обо мне</Nav.Link>
            <Nav.Link href="#link">Проекты</Nav.Link>
            <Nav.Link href="#link">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
