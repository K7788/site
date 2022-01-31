import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <p>Бурназова Ю. С.</p>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
      </div>
    </Navbar>
  );
}
