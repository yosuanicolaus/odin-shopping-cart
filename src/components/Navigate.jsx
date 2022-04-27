import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";

function Navigate() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" dark color="primary">
      <NavbarBrand>Elegant</NavbarBrand>
      <NavbarToggler onClick={toggle} className="shadow" />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="w-100">
          <NavItem className="ms-auto">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to={"/"} className="nav-link">
              Shop
            </Link>
          </NavItem>
          <NavItem>
            <Link to={"/"} className="nav-link">
              Cart
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigate;
