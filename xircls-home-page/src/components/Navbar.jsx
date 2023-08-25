import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaAngleDown } from "react-icons/fa";
import logo from "../images/xircls-logo.png";
// import './Navbar.css'
// import DropDown from '../images/dropdownicon.png'
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <Navbar className="bg-white py-0 shadow-sm sticky-top">
        <Container className="container my-0">
          <Navbar.Brand href="#home">
            <img
              src="https://www.xircls.com/static/images/website-slide/logo-dark2.png"
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center fs-10">
              <Nav.Link className="py-5" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="py-5" href="#link">
                About Us
              </Nav.Link>
              <FaAngleDown className="ms-1" />

              <Nav.Link className="py-5" href="#link">
                Products
              </Nav.Link>
              <FaAngleDown />

              <Nav.Link className="py-5" href="#link">
                Blog
              </Nav.Link>
              <Nav.Link className="py-5" href="#link">
                Team
              </Nav.Link>
              <Nav.Link className="py-5" href="#link">
                Sign-up
              </Nav.Link>
              <FaAngleDown />

              <Nav.Link className="py-5" href="#link">
                Login
              </Nav.Link>
              <FaAngleDown />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
