import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import '../styles/Contact.css'; // Assuming you have a CSS file for styles

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
          className="github-link"
        >
          <FontAwesomeIcon icon={faGithub} size="5x"/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
