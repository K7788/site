import React from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">King</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home">Главная</Link>
            <Link to="/work">Работы</Link>
            <Link to="/about">Обо мне</Link>
            <Link to="/projects">Проекты</Link>
            <Link to="/contacts">Контакты</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
