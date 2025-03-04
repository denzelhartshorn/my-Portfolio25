// src/components/Layout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Layout() {
  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#f0f0f0" }} // Gray background
        variant="light"
      >
        <Container>
          {/* If you have a brand/logo, keep it here. Remove or comment out if not needed */}
          <Navbar.Brand as={Link} to="/">
            Portfolio Home
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            {/* Center the remaining nav links by using mx-auto on the Nav */}
            <Nav className="mx-auto">
              {/* Home link removed */}
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* All child routes/pages appear here */}
      <main>
        <Outlet />
      </main>
    </>
  );
}