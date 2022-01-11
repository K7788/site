import React from 'react'
import  { Button, Navbar, Container, Link , Nav , NavDropdown, Collapse , Brand , Toggle, Item, Divider , expand , variant , bg}  from  'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Header() {
    return (
        <Navbar  bg="light" expand="lg">
  <Container>
      
    <Navbar.Brand href="#home">King</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Главная</Nav.Link>
        <Nav.Link href="#link">Работы</Nav.Link>
        <Nav.Link href="#link">Обо мне</Nav.Link>
        <Nav.Link href="#link">Проекты</Nav.Link>
        <Nav.Link href="#link">Контакты</Nav.Link>
        <Button variant="dark">Dark</Button>{' '}
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

