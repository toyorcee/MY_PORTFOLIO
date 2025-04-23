import React from "react";
import "./skills.css";
import frontend from "../../assets/all4.jpg";
import node from "../../assets/node.png";
import api from "../../assets/api2.png";
import deploy from "../../assets/deployment2.png";
import git from "../../assets/gitbaby2.png";
import vercel from "../../assets/vercel.jpeg";
import security from "../../assets/security2.png";
import figma from "../../assets/figma.png";
import solve from "../../assets/trouble.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

const Skills = () => {
  return (
    <section id="skills">
      <h1>
        <span className="skillTitle">WHAT I DO</span>
      </h1>
      <motion.div
        className="md:w-full mx-auto py-8 rounded mb-32"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <span className="skillDesc">
          I am an innovative and detail-oriented Full Stack Developer with
          expertise in the MERN stack. I craft high-performance, secure web
          applications with an emphasis on seamless user experiences and modern
          UI designs. I excel at implementing Figma designs with precision and
          setting up robust CI/CD pipelines for scalable, maintainable code. My
          approach combines technical excellence with a commitment to best
          security practices, ensuring applications are both powerful and
          protected.
        </span>
      </motion.div>
      <div className="skillBars">
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="skillBar" id="allbg">
            <img src={frontend} alt="All Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2 className="h2">Front-End Development</h2>
              <p>
                I create responsive and interactive user interfaces using React,
                Next.js, TypeScript, Tailwind CSS, and Material-UI. I implement
                Figma designs with pixel-perfect precision, ensuring responsive
                design across all devices. I utilize React Hook Form for robust
                form validation, Framer Motion for engaging animations, and
                Skeleton Screens for optimized loading states to enhance user
                experience. I implement modern loading patterns with skeleton
                loaders and skimmers that provide visual feedback during data
                fetching, significantly improving perceived performance and user
                satisfaction.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="skillBar" id="djangobg">
            <img src={node} alt="node" className="skillBarImg" />
            <div className="skillBarText">
              <h2 className="h2">Back-End Development</h2>
              <p>
                I develop robust server-side applications using Node.js,
                Express.js, and Python (Django). I create RESTful APIs,
                implement authentication with Clerk and Firebase, and manage
                databases including MongoDB, PostgreSQL, MySQL, and Redis. I
                focus on building scalable architectures that support complex
                business logic and high transaction volumes.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="skillBar" id="apibg">
            <img src={api} alt="API" className="skillBarImg" />
            <div className="skillBarText">
              <h2 className="h2">API Development & Integration</h2>
              <p>
                I design and implement RESTful APIs for seamless communication
                between front-end and back-end. I integrate third-party services
                like EmailJS, Cloudinary, and payment gateways such as Paystack.
                I use React Query for optimized data fetching, caching, and
                background synchronization, significantly improving loading
                times and overall performance.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="skillBar" id="deploybg">
            <img src={deploy} alt="deploy" className="skillBarImg" />
            <div className="skillBarText">
              <h2 className="h2">CI/CD & Deployment</h2>
              <p>
                I set up and manage CI/CD pipelines using Vercel, GitLab CI/CD,
                and GitHub Actions for seamless deployment and workflow. I
                deploy applications to platforms like Vercel, Netlify, Render,
                and C-panel, ensuring high availability and performance. I
                implement automated testing and quality checks to maintain code
                integrity throughout the development lifecycle.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="skillBar" id="gitbg">
            <img src={git} alt="git" className="skillBarImg" />
            <div className="skillBarText">
              <h2 className="h2">Version Control & Collaboration</h2>
              <p>
                I use Git, GitHub, and GitLab for version control and
                collaboration. I work with teams using tools like Slack, Figma,
                and ClickUp to ensure smooth project management and delivery.
                I've successfully collaborated with cross-functional teams to
                deliver complex projects on time, maintaining clear
                communication and efficient workflows.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="skillBar" id="vercelbg">
            <img src={vercel} alt="test" className="skillBarImg" />
            <div className="skillBarText">
              <h2 className="h2">Performance Optimization</h2>
              <p>
                I optimize web applications for speed and performance using
                techniques like code splitting, lazy loading, and efficient
                state management with Redux and Context API. I implement SEO
                best practices and ensure cross-browser compatibility. I've
                successfully reduced loading times and improved user experience
                through strategic optimization techniques.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="skillBar" id="securitybg">
            <img src={security} alt="security" className="skillBarImg" />
            <div className="skillBarText">
              <h2 className="h2">Security & Authentication</h2>
              <p>
                I implement security best practices including data encryption,
                user authentication, and authorization mechanisms. I use OAuth,
                JWT, and Clerk for secure user management and protect
                applications from common vulnerabilities. I've implemented
                role-based access control systems with multiple user roles to
                ensure data security and privacy.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="skillBar" id="collabobg">
            <img src={figma} alt="figma" className="skillBarImg" />
            <div className="skillBarText">
              <h2 className="h2">Figma Implementation</h2>
              <p>
                I transform Figma designs into functional, responsive code with
                precision. I ensure that the implemented UI matches the design
                specifications while maintaining performance and accessibility.
                I've successfully translated complex Figma wireframes into
                pixel-perfect user interfaces for fintech applications and
                e-commerce platforms.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="skillBar" id="troublebg">
            <img src={solve} alt="trouble-shoot" className="skillBarImg" />
            <div className="skillBarText">
              <h2 className="h2">Problem Solving & Troubleshooting</h2>
              <p>
                I excel at debugging complex issues and implementing efficient
                solutions. I use algorithms for data analysis and optimization,
                ensuring applications run smoothly and efficiently. I've
                successfully refactored projects into MVC architecture,
                improving maintainability and scalability. My analytical
                approach allows me to identify and resolve performance
                bottlenecks quickly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
