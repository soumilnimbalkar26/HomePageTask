import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaAngleDown } from "react-icons/fa";
import logo from "../images/xircls-logo.png";
// import './Navbar.css'
// import DropDown from '../images/dropdownicon.png'
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      {/* <navbar className="navbar container bg-secondary ">
        <ul className="list">
          <div className="spacing">
            <div className="logo">
              <li>
                <a href="#">
                  <img src={logo} alt="img" />
                </a>
              </li>
            </div>

            <div className="navlinks ms-auto d-flex px-1 py-2">
              <li className="linktext">
                <a href="#">Home</a>
              </li>

              <li className="linktext">
                <a href="#">About us</a>
                <img className='dropdown' src={DropDown} alt="" />
              </li>

              <li className="linktext">
                <a href="#">Products</a>
                <img className='dropdown' src={DropDown} alt="" />
              </li>

              <li className="linktext">
                <a href="#">Blog<FaAngleDown/></a>
              </li>

              <li className="linktext">
                <a href="#">Team</a>
              </li>

              <li className="linktext">
                <a href="#">Sign-Up</a>
                <img className='dropdown' src={DropDown} alt="" />
              </li>

              <li className="linktext">
                <a href="#">Login</a>
                <img className='dropdown' src={DropDown} alt="" />
              </li>
            </div>
          </div>
        </ul>
      </navbar> */}

      <Navbar className="bg-white py-0 shadow-sm">
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
