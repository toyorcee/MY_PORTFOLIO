import React from "react";
import "./intro.css";
import bg from "../../asset/Office_pic.jpeg";
import { Link } from "react-scroll";
import hireme from "../../asset/hireme.png";
import { Container, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { Box } from "@mui/material";

const Intro = () => {
  return (
    <section id="intro">
      <Container>
        <Box className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Toyosi</span>
            <br />
          </span>
          <p className="introPara">
            <TypeAnimation
              sequence={[
                "MERN Full-Stack DEVELOPER",
                1000,
                "Front-End Specialist",
                1000,
                "Back-End Developer",
                1000,
                "Figma to Code Expert",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
                color: "#007bff",
              }}
              repeat={Infinity}
              className="seq"
            />
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button className="btn" size="lg">
              <img src={hireme} alt="Hire Me" className="btnhire" />
              <b className="hiire">Hire Me</b>
            </Button>
          </Link>
        </Box>
        <img src={bg} alt="profile" className="bg mine" />
      </Container>
    </section>
  );
};

export default Intro;
