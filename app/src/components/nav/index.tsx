import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import AccountContainer from "./accountContainer";

const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/">Boilerplate</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <AccountContainer />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
