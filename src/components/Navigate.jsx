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

function Navigate({ cartSize }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((open) => !open);

  return (
    <Navbar expand="md" dark color="primary" className="sticky-top">
      <NavbarBrand>Elegant</NavbarBrand>
      <NavbarToggler onClick={toggle} className="shadow" />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="w-100 justify-content-end">
          <NavItem>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to={"/shop"} className="nav-link">
              Shop
            </Link>
          </NavItem>
          <NavItem>
            <Link to={"/cart"} className="nav-link">
              Cart{" "}
              {cartSize > 0 && (
                <div className="badge badge-pill bg-opacity-75 bg-secondary">
                  {cartSize}
                </div>
              )}
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigate;
