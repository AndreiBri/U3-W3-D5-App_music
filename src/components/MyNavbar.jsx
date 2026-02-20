import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import musiclogo from "../assets/logos/music.png";

import "./MyNavbar.css";

const MyNavbar = function () {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="d-flex align-items-center">
        <Navbar.Toggle aria-controls="navbarScroll" className="order-1" />

        <Navbar.Brand className="mx-auto order-2 text-light">
          <img src={musiclogo} alt="Logo" className="text-light" />
        </Navbar.Brand>

        <div className="order-3">
          <a href="/login" className="text-danger fw-semibold text-decoration-none">
            Accedi
          </a>
        </div>

        <Navbar.Collapse id="navbarScroll" className="order-4 w-100">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Novitá</Nav.Link>
            <Nav.Link href="#link">Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
