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

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: "Home", to: "intro", offset: -50 },
    { label: "About", to: "skills", offset: -80 },
    { label: "Portfolio", to: "works", offset: -20 },
    { label: "Clients", to: "clients", offset: -10 },
    { label: "Contact", to: "contact", offset: -50 },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgb(30, 30, 30)",
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
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {item.label}
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
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "2rem",
                padding: "0.5rem 1rem",
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
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            sx={{
              display: { xs: "block", md: "none" },
              color: "white",
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
            backgroundColor: "rgb(40, 40, 40)",
            color: "white",
            height: "100%",
            padding: "1rem",
          }}
        >
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => setDrawerOpen(false)}
              sx={{
                "&:hover": {
                  backgroundColor: "rgb(30, 30, 30)",
                  color: "yellow",
                },
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
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
