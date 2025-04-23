import React from "react";
import "./footer.css";
import toTop from "../../assets/deploy1.png";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        Copyright &#169; {currentYear}
        <span className="yosi">'YOSI.</span> All Rights Reserved
      </div>
      <Link to="naav" smooth={true} spy={true} duration={700} id="backToTop">
        <img src={toTop} alt="Back to top" className="totop" />
      </Link>
    </footer>
  );
};

export default Footer;
