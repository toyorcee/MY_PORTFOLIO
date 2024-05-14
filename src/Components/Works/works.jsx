import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./works.css";
import robot from "../../asset/robot.png";
import ecomm from "../../asset/ecomm.webp";
import gallery04 from "../../asset/gallery04.png";
import possibility from "../../asset/possibility.png";
import shopper_img from "../../asset/smiling.webp";
import womaneating from "../../assets/womaneating.jpg";
import penthouse from "../../asset/penthouse7.jpg";
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
            <br />
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
                <Card.Img src={penthouse} className="worksImg" />
                <Card.Body>
                  <Card.Title>Traveller</Card.Title>
                  <Card.Text>
                    <p>Responsive MERN Travel Web Application.</p>
                  </Card.Text>
                  <a href="https://traveltorelax.netlify.app/" target="blank_">
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
                <Card.Img src={ecomm} className="worksImg" />
                <Card.Body>
                  <Card.Title>E-commerce</Card.Title>
                  <Card.Text>
                    <p>Responsive E-commerce Web Application.</p>
                  </Card.Text>
                  <a href="https://ecommerce4-two.vercel.app/" target="blank_">
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
                <Card.Img
                  src={womaneating}
                  className="worksImg food-ordering"
                />
                <Card.Body>
                  <Card.Title>Toyosi's Kitchen</Card.Title>
                  <Card.Text>
                    <p>Responsive MERN Food-Ordering-App</p>
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
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={shopper_img} className="worksImg" />
                <Card.Body>
                  <Card.Title>SHOPPER</Card.Title>
                  <Card.Text>
                    <p>Responsive MERN E-commerce App</p>
                  </Card.Text>
                  <a
                    href="https://toyorcee-shopper.netlify.app/"
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
                <Card.Img src={robot} className="worksImg" />
                <Card.Body>
                  <Card.Title>HooBank</Card.Title>
                  <Card.Text>
                    <p>Responsive Bank Web Application.</p>
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
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={possibility} className="worksImg" />
                <Card.Body className="py-1 my-1">
                  <Card.Title>GPT-3</Card.Title>
                  <Card.Text>
                    <p>Fully Responsive Modern UI/UX Website.</p>
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
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card className="worksImgs">
                <Card.Img src={gallery04} className="worksImg" />
                <Card.Body className="py-1 my-1">
                  <Card.Title>GERICHT</Card.Title>
                  <Card.Text>
                    <p>Responsive FoodApp Application.</p>
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
