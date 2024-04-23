import React from "react";
import "./intro.css";
import bg from "../../assets/bg.jpeg";
import { Link } from "react-scroll";
import hireme from "../../asset/hireme.png";
import { Container, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section id="intro">
      <Container>
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Toyosi</span>
            <br />
          </span>
          <p className="introPara">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full-Stack DEVELOPER",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Specialized in front-end",
                1000,
                "Specialized in back-end",
                1000,
                "I use React & Django.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
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
        </div>
        <img src={bg} alt="profile" className="bg" />
      </Container>
    </section>
  );
};

export default Intro;
