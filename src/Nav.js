// Navigation.js

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./logo without background.png";
import "./Nav.css";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-nav">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            alt="Your Logo"
            height="80" // Adjust the height as needed
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><strong>Home</strong></Nav.Link>
            <Nav.Link href="#projects"><strong>Projects</strong></Nav.Link>
            <Nav.Link href="#about"><strong>About Me</strong></Nav.Link>
            <Nav.Link href="#contact"><strong>Contact</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}