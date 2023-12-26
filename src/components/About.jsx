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
        <div className="container">
          <div className="item1">
            <div className="myimg">
              <img src={image} alt="ME!" />
            </div>
          </div>
          <div className="item2">
            <h1>About Me</h1>
            <p>
              Hi! My name is Ryan Hu and I&#39;m a computer science student at
              the University of Waterloo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
