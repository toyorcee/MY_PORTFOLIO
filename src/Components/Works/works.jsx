import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./works.css";
import robot from "../../asset/robot.png";
import ecomm from "../../asset/ecomm.webp";
import gallery04 from "../../asset/gallery04.png";
import man_studying from "../../asset/man-studying.jpg";
import possibility from "../../asset/possibility.png";
import blog_img from "../../asset/blog.webp";
import womaneating from "../../assets/womaneating.jpg";
import movieimg from "../../assets/th.jfif";
import crypto from "../../asset/hero-img.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

const Works = () => {
  return (
    <section id="works">
      <Container>
        <h2 className="workstitle">My Portfolio</h2>
        <motion.div
          className="md:w-full mx-auto py-8 rounded mb-32"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="worksDesc">
            I take pride in paying attention to the smallest details and making
            sure that my work is pixel perfect. I am excited to bring my skills
            & experience to help businesses achieve their goals and create a
            strong online presence.
          </span>
        </motion.div>
        <p className="what">What are you doing today?</p>
        <Row>
          <Col md={4}>
            <motion.div
              className="md:w-full mx-auto py-8 rounded mb-32"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={movieimg} className="worksImg" />
                <Card.Body>
                  <Card.Title>My MovieApp</Card.Title>
                  <Card.Text>
                    <p>
                      A modern movie discovery platform built with Next.js,
                      featuring real-time updates and a responsive design for
                      seamless browsing across devices.
                    </p>
                    <div className="tech-stack">
                      Tech: Next.js, API Integration, Responsive Design
                    </div>
                  </Card.Text>
                  <a
                    href="https://next-movies-fawn.vercel.app/"
                    target="blank_"
                  >
                    <Button className="workBtn">More Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="md:w-full mx-auto py-8 rounded mb-32"
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={blog_img} className="worksImg" />
                <Card.Body>
                  <Card.Title>Yosi's Blog</Card.Title>
                  <Card.Text>
                    <p>
                      A full-stack blog platform with user authentication, rich
                      text editing, and dynamic content management using the
                      MERN stack.
                    </p>
                    <div className="tech-stack">
                      Tech: MongoDB, Express.js, React, Node.js
                    </div>
                  </Card.Text>
                  <a href="https://yosisblog.onrender.com/" target="blank_">
                    <Button className="workBtn">More Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="md:w-full mx-auto py-8 rounded mb-32"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={ecomm} className="worksImg" />
                <Card.Body>
                  <Card.Title>E-commerce</Card.Title>
                  <Card.Text>
                    <p>
                      A feature-rich e-commerce platform with product
                      management, cart functionality, and secure payment
                      integration.
                    </p>
                    <div className="tech-stack">
                      Tech: React, Redux, Payment Gateway, Responsive UI
                    </div>
                  </Card.Text>
                  <a href="https://techxtrostore.vercel.app/" target="blank_">
                    <Button className="workBtn">More Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="md:w-full mx-auto py-8 rounded mb-32"
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={womaneating} className="worksImg" />
                <Card.Body>
                  <Card.Title>Toyosi's Kitchen</Card.Title>
                  <Card.Text>
                    <p>
                      A comprehensive food ordering system with real-time order
                      tracking, menu management, and secure payment processing.
                    </p>
                    <div className="tech-stack">
                      Tech: MERN Stack, Real-time Updates, Payment Integration
                    </div>
                  </Card.Text>
                  <a
                    href="https://toyorceeskitchen.netlify.app/"
                    target="blank_"
                  >
                    <Button className="workBtn">More Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="md:w-full mx-auto py-8 rounded mb-32"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={crypto} className="worksImg" />
                <Card.Body>
                  <Card.Title>TEFi</Card.Title>
                  <Card.Text>
                    <p>
                      A cryptocurrency tracking application with real-time price
                      updates, market analysis, and portfolio management
                      features.
                    </p>
                    <div className="tech-stack">
                      Tech: React, Crypto APIs, Charts, Real-time Data
                    </div>
                  </Card.Text>
                  <a
                    href="https://coingeckoproject.vercel.app/"
                    target="blank_"
                  >
                    <Button className="workBtn">More Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="md:w-full mx-auto py-8 rounded mb-32"
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={man_studying} className="worksImg" />
                <Card.Body>
                  <Card.Title>Skill Kernel</Card.Title>
                  <Card.Text>
                    <p>
                      An interactive learning platform with course management,
                      progress tracking, and multimedia content delivery.
                    </p>
                    <div className="tech-stack">
                      Tech: React, Node.js, Learning Management System
                    </div>
                  </Card.Text>
                  <a
                    href="https://skill-kernel-six.vercel.app/"
                    target="blank_"
                  >
                    <Button className="workBtn">More Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="md:w-full mx-auto py-8 rounded mb-32"
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={robot} className="worksImg" />
                <Card.Body>
                  <Card.Title>HooBank</Card.Title>
                  <Card.Text>
                    <p>
                      A modern banking interface showcasing next-generation
                      payment solutions with an emphasis on user experience.
                    </p>
                    <div className="tech-stack">
                      Tech: React, Tailwind CSS, Modern UI/UX
                    </div>
                  </Card.Text>
                  <a
                    href="https://hoo-bank-eight-lime.vercel.app/"
                    target="blank_"
                  >
                    <Button className="workBtn">More Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="md:w-full mx-auto py-8 rounded mb-32"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={possibility} className="worksImg" />
                <Card.Body>
                  <Card.Title>GPT-3</Card.Title>
                  <Card.Text>
                    <p>
                      A modern UI/UX showcase demonstrating the possibilities of
                      AI integration with sleek, responsive design.
                    </p>
                    <div className="tech-stack">
                      Tech: React, Modern UI/UX, Animation
                    </div>
                  </Card.Text>
                  <a href="https://gpt-3-pi-two.vercel.app/" target="blank_">
                    <Button className="workBtn">More Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="md:w-full mx-auto py-8 rounded mb-32"
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={gallery04} className="worksImg" />
                <Card.Body>
                  <Card.Title>GERICHT</Card.Title>
                  <Card.Text>
                    <p>
                      An elegant restaurant application featuring menu
                      management, reservation system, and beautiful UI design.
                    </p>
                    <div className="tech-stack">
                      Tech: React, Responsive Design, Custom Animations
                    </div>
                  </Card.Text>
                  <a href="https://toyo-gericht.vercel.app/" target="blank_">
                    <Button className="workBtn">More Details</Button>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Works;
