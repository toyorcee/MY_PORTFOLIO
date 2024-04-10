import React, { useRef, useState } from "react";
import "./contact.css";
import Walmart from "../../asset/walmart.png";
import Adobe from "../../asset/adobe.png";
import Microsoft from "../../asset/microsoft.png";
import Facebook from "../../asset/facebook.png";
import Facebookicon from "../../asset/facebook-icon.png";
import instagramicon from "../../asset/instagram.png";
import twittericon from "../../asset/twitter.png";
import youtubeicon from "../../asset/youtube.png";
import emailjs from "@emailjs/browser";
import { Container, Button, Form } from "react-bootstrap";

const Contact = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const formFields = { ...fields };
    const formErrors = {};
    let formIsValid = true;

    //Name
    if (!formFields["name"]) {
      formIsValid = false;
      formErrors["name"] = "Cannot be empty";
    }

    if (typeof formFields["name"] !== "undefined") {
      if (!formFields["name"].match(/^[a-zA-Z\s]+$/)) {
        formIsValid = false;
        formErrors["name"] = "Enter First Name";
      }
    }

    //Email
    if (!formFields["email"]) {
      formIsValid = false;
      formErrors["email"] = "Cannot be empty";
    }

    if (typeof formFields["email"] !== "undefined") {
      let lastAtPos = formFields["email"].lastIndexOf("@");
      let lastDotPos = formFields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formFields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        formFields["email"] = "Email is not valid";
      }
    }
    setErrors(formErrors);
    return formIsValid;
  };

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value,
    });
  };

  const form = useRef();
  const cancelCourse = () => {
    document.getElementById("cancel").reset();
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      emailjs
        .sendForm(
          "service_a8uy089",
          "template_fixnw4a",
          form.current,
          "6LQ1D9J7wHR5JRJOK"
        )
        .then(
          (result) => {
            console.log(result.text);
            cancelCourse();
            alert("Email Sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Form has errors.");
    }
  };
  return (
    <Container>
      <section id="contactPage">
        <div id="clients">
          <h1 className="contactPageTitle">My Clients</h1>
          <p className="clientDesc">
            I have had the opportunity to work with a diverse group of companies
            as well as individual business owners. Some of the notable companies
            i have worked with include
          </p>
          <div className="clientImgs">
            <img src={Walmart} alt="Clients" className="clientImg" />
            <img src={Adobe} alt="Clients" className="clientImg" />
            <img src={Microsoft} alt="Clients" className="clientImg" />
            <img src={Facebook} alt="Clients" className="clientImg" />
          </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
          </span>
          <Form
            className="contactForm"
            ref={form}
            onSubmit={sendEmail}
            id="cancel"
          >
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                className="name"
                placeholder="Your first Name"
                name="name"
                onChange={(e) => handleChange("name", e.target.value)}
                value={fields["name"]}
              />
              <span className="error">{errors["name"]}</span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className="email"
                placeholder="Your Email"
                name="your_email"
                onChange={(e) => handleChange("email", e.target.value)}
                value={fields["email"]}
              />
              <span className="error">{errors["email"]}</span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                className="msg"
                placeholder="Your Message"
                name="message"
              />
            </Form.Group>
            <Button
              type="submit"
              className="submitBtn"
              value="Send"
              onClick={(e) => sendEmail(e)}
            >
              Submit
            </Button>
            <div className="links">
              <img src={Facebookicon} alt="facebook" className="link" />
              <img src={instagramicon} alt="instagram" className="link" />
              <img src={twittericon} alt="twitter" className="link" />
              <img src={youtubeicon} alt="youtube" className="link" />
            </div>
          </Form>
        </div>
      </section>
    </Container>
  );
};

export default Contact;