import React from "react";
import "./skills.css";
import all from "../../assets/all4.jpg";
import django from "../../assets/django.jpeg";
import api from "../../assets/api2.png";
import deploy from "../../assets/deployment2.png";
import git from "../../assets/gitbaby2.png";
import vercel from "../../assets/vercel.jpeg";
import security from "../../assets/security2.png";
import collabo from "../../assets/partner.jpg";
import trouble from "../../assets/trouble.png";

const Skills = () => {
  return (
    <section id="skills">
      <h1>
        <span className="skillTitle">WHAT I DO</span>
      </h1>
      <span className="skillDesc">
        I am a skilled and passionate Developer with experience in creating
        visually appealing & user-friendly websites and Applications. I have a
        strong understanding of design & development and a keen eye for details.
        I am proficient in HTML, CSS, JavaScript & Python.
      </span>
      <div className="skillBars">
        <div className="skillBar" id="allbg">
          <img src={all} alt="All Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="h2">Client-Side (Front-End) Development</h2>
            <p>
              I create user interfaces and design of websites using HTML for
              structure, CSS for styling, JavaScript for interactivity, & also
              ensure that the website works well on various devices and screen
              sizes.
            </p>
          </div>
        </div>
        <div className="skillBar" id="djangobg">
          <img src={django} alt="django" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="h2">Server-Side (Back-End) Development</h2>
            <p>
              I develop server-side logic using languages like Node.js
              (JavaScript), Python (Django) & also Interact with databases using
              Mongoose.
            </p>
          </div>
        </div>
        <div className="skillBar" id="apibg">
          <img src={api} alt="API" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="h2">
              API (Application Programming Interface) Development
            </h2>
            <p>
              I create & use APIs that allow communication between the front-end
              and back-end, enabling data exchange and functionality using
              express and JWT.
            </p>
          </div>
        </div>
        <div className="skillBar" id="deploybg">
          <img src={deploy} alt="deploy" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="h2">Server Management and Deployment</h2>
            <p>
              I configure and manage servers to host web applications, websites
              & Deploy applications using platforms like Render, Netflify &
              other cloud services.
            </p>
          </div>
        </div>
        <div className="skillBar" id="gitbg">
          <img src={git} alt="git" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="h2">Version Control/Git</h2>
            <p>
              I use version control systems like Git to track changes in code
              and collaborate with other developers.
            </p>
          </div>
        </div>
        <div className="skillBar" id="vercelbg">
          <img src={vercel} alt="test" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="h2">Testing</h2>
            <p>
              I implement unit testing and integration testing to ensure the
              reliability and functionality of web applications.
            </p>
          </div>
        </div>
        <div className="skillBar" id="securitybg">
          <img src={security} alt="security" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="h2">Security</h2>
            <p>
              I implement security best practices to protect against common web
              vulnerabilities, such as SQL injection, and cross-site request
              forgery (CSRF).
            </p>
          </div>
        </div>
        <div className="skillBar" id="collabobg">
          <img src={collabo} alt="collabo" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="h2">Collaboration</h2>
            <p>
              I work closely with designers, other developers, and stakeholders
              to understand project requirements and ensure smooth
              collaboration.
            </p>
          </div>
        </div>
        <div className="skillBar" id="troublebg">
          <img src={trouble} alt="trouble-shoot" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="h2">Problem Solving and Troubleshooting</h2>
            <p>
              I debug issues and troubleshoot problems that may arise during the
              development and maintenance of web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
