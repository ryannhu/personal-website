import React from "react";
import "../styles/About.css";
import image from "../images/IMG_0007.jpg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1,
  });

  return (
    <div>
      <div className={`about ${inView ? "about-visible" : ""}`} ref={ref}>
        <div className="container-about">
          <div className="item1">
            <div className="myimg">
              <img src={image} alt="ME!" />
            </div>
          </div>
          <div className="item2">
            <h1>About Me</h1>
            <p>
              Hi! My name is Ryan Hu and I&#39;m a computer science student at
              the University of Waterloo (2021 - 2026).
            </p>
            <p>
              My interest in software development started when I took my first
              computer science course in high school where I learned about the
              important applications of technology. I currently have expierence
              with front-end and web development with React, but I am trying to
              learn more about back-end development and machine learning.
              Currently, I&#39;m working on a
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
