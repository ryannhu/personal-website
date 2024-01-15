import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css"; // Assuming you have a CSS file for styles

const Contact = () => {
  return (
    <div id="contact">
      <h1>4 - Contact Me</h1>
      <p>I would love to get in touch, feel free to reach out!</p>
      <div className="contact-links">
        <a
          href="https://www.github.com/ryannhu"
          aria-label="Visit my GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faGithub} size="5x" />
        </a>
        <a
          href="https://www.linkedin.com/in/ryannhu"
          aria-label="Visit my LinkedIn profile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="5x" />
        </a>
        <a
          href="mailto:ryannhu3@gmail.com"
          aria-label="Email me"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} size="5x" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
