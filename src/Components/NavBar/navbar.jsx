import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact-icon-png-0.png";
import menu from "../../asset/menu.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Container>
      <nav className="navbar" id="naav">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className="desktopMenuListItem"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="desktopMenuListItem"
          >
            Clients
          </Link>
        </div>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me{" "}
        </button>
        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Clients
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
