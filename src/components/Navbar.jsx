import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useNavigate, useLocation } from "react-router-dom"; // Importa useNavigate y useLocation
import useUserStore from "./contexts/userContexts"; // Importa la tienda de Zustand

function Navbar1() {
  const { currentUser } = useUserStore((state) => state);
  const navigate = useNavigate(); // Utiliza useNavigate para la navegación
  const location = useLocation(); // Utiliza useLocation para obtener la ubicación actual

  const handleRestrictedLinkClick = (e, path) => {
    if (!currentUser) {
      e.preventDefault(); // Evita que se navegue al link
      const redirectTo = encodeURIComponent(path); // Codifica la ruta a la que el usuario intentaba acceder
      navigate(`/signin?redirectTo=${redirectTo}`); // Redirige a la página de inicio de sesión con la ruta codificada
    } else {
      navigate(path); // Navega a la ruta si el usuario está autenticado
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link
              href="/hombre"
              onClick={(e) => handleRestrictedLinkClick(e, "/hombre")}
            >
              Hombre
            </Nav.Link>
            <Nav.Link href="/mujer">Mujer</Nav.Link>

            <Nav.Link href="/complementos">Complementos</Nav.Link>

            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/signin">SignIn</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
