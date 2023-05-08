import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo/logo.svg";
import { Image } from "react-bootstrap";
import "../styles/navbar/Navbar.css";
const NavbarGeneral = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid className="backgroundNavbar">
        <Navbar.Brand href="#">
          <Image src={logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Generos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Acción</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Aventuras</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Comedia</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Familiar</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Terror</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Romance</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Peliculas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Tendencias</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Estrenos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Últimas publicadas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2 searchLogo"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarGeneral;
