import React from "react";
import "./footer.css";
import toTop from "../../assets/deploy1.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      Copyright &#169; 2023<span className="yosi">'YOSI.</span> All Rights
      Reserved
      <Link to="naav" smooth={true} spy={true} duration={700} id="backToTop">
        <img src={toTop} alt="deployment" className="totop" />
      </Link>
    </footer>
  );
};

export default Footer;
