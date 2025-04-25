import React, { useState } from "react";
import "./footer.css";
import toTop from "../../assets/deploy1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showSplash, setShowSplash] = useState(false);

  const scrollToTop = () => {
    setShowSplash(true);

    // Simple direct scroll
    window.scrollTo(0, 0);

    setTimeout(() => {
      setShowSplash(false);
    }, 500);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        Copyright &#169; {currentYear}
        <span className="yosi">'YOSI.</span> All Rights Reserved
      </div>
      <div className="back-to-top-container">
        <button onClick={scrollToTop} id="backToTop">
          <img src={toTop} alt="Back to top" className="totop" />
        </button>
        {showSplash && <div className="splash-effect" />}
      </div>
    </footer>
  );
};

export default Footer;
