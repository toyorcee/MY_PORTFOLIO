import React from "react";
import "./intro.css";
import bg from "../../assets/bg.jpeg";
import { Link } from "react-scroll";
import hireme from "../../asset/hireme.png";
import { Container, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <section id="intro">
      <Container>
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Toyosi</span>
            <br />
            Full-Stack DEVELOPER
          </span>
          <p className="introPara">
            I'm a skilled web developer specialized in front-end and <br />{" "}
            back-end using React & Django.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button className="btn" size="lg">
              <img src={hireme} alt="Hire Me" className="btnhire" />
              <b className="hiire">Hire Me</b>
            </Button>
          </Link>
        </div>

        <img src={bg} alt="profile" className="bg" />
      </Container>
    </section>
  );
};

export default Intro;
