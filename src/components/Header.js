import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/logo.png";

const names = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/About",
  },
  {
    name: "Menu",
    url: "/Menu",
  },
  {
    name: "Reservations",
    url: "/Reservations",
  },
  {
    name: "Order-Online",
    url: "/Order-Online",
  },
  {
    name: "Login",
    url: "/Login",
  },
];
function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse className="justify-content-end">
          <Nav variant="underline" className="navbar-custom">
            {names.map((data) => {
              return (
                <Nav.Link href={data.url} className="custom-toggler">
                  {data.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;