import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact-icon-png-0.png";
import "./navbar.css";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const menuItems = [
    { label: "Home", to: "intro", offset: -50 },
    { label: "About", to: "skills", offset: -80 },
    { label: "Portfolio", to: "works", offset: -20 },
    { label: "Clients", to: "clients", offset: -10 },
    { label: "Contact", to: "contact", offset: -50 },
  ];

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setTimeout(() => setActiveLink(null), 500);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        padding: "0.5rem",
        zIndex: 5, // Ensure the navbar is above other elements
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: "3rem",
              width: "4rem",
              objectFit: "cover",
              position: "absolute",
              left: 0,
            }}
          />

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              flex: 1,
              gap: "1.5rem",
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                onClick={() => handleLinkClick(item.label)}
                className={`nav-link ${
                  activeLink === item.label ? "clicked" : ""
                }`}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "black",
                  position: "relative",
                }}
              >
                {item.label}
                <span className="nav-link-ripple"></span>
              </Link>
            ))}
          </Box>

          {/* Contact Button */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              right: 0,
            }}
          >
            <Button
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                handleLinkClick("contact");
              }}
              className={`contact-button ${
                activeLink === "contact" ? "clicked" : ""
              }`}
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "2rem",
                padding: "0.5rem 1rem",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: "yellow",
                  color: "black",
                },
              }}
            >
              <Box
                component="img"
                src={contactImg}
                alt="Contact"
                sx={{
                  height: "1rem",
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
              />
              Contact Me
              <span className="button-ripple"></span>
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            sx={{
              display: { xs: "block", md: "none" },
              color: "black",
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          sx={{
            width: 250,
            backgroundColor: "white",
            color: "black",
            height: "100%",
            padding: "1rem",
          }}
        >
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => {
                setDrawerOpen(false);
                handleLinkClick(item.label);
              }}
              className={`mobile-nav-link ${
                activeLink === item.label ? "clicked" : ""
              }`}
              sx={{
                "&:hover": {
                  backgroundColor: "rgb(240, 240, 240)",
                  color: "yellow",
                },
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <ListItemText primary={item.label} />
                <span className="mobile-nav-ripple"></span>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
