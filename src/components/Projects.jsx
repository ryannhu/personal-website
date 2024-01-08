import React from "react";
import "../styles/Projects.css";
import { useInView } from "react-intersection-observer";

// TODO use #cd4b76 for highlight coloring

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Adjust as needed, represents the percentage of the element's visibility
  });

  return (
    <div className={`projects ${inView ? "visible" : ""}`} ref={ref}>
      <h1>Projects</h1>
      <div className="container">
        <div className="card">
          <h2>Digitize</h2>
          <p>
            A 2 player C++ command line game built with the MVC architecture and
            X11 graphics.
          </p>
          <div className="technologies">
            <span>C++</span>
            <span>X11 Graphics</span>
          </div>
        </div>

        <div className="card">
          <h2>Digitize</h2>
          <p>
            A 2 player C++ command line game built with the MVC architecture and
            X11 graphics.
          </p>
          <div className="technologies">
            <span>C++</span>
            <span>X11 Graphics</span>
          </div>
        </div>
        <div className="card">
          <h2>Digitize</h2>
          <p>
            A 2 player C++ command line game built with the MVC architecture and
            X11 graphics.
          </p>
          <div className="technologies">
            <span>C++</span>
            <span>X11 Graphics</span>
          </div>
        </div>
        <div className="card">
          <h2>Digitize</h2>
          <p>
            A 2 player C++ command line game built with the MVC architecture and
            X11 graphics.
          </p>
          <div className="technologies">
            <span>C++</span>
            <span>X11 Graphics</span>
          </div>
        </div>
        <div className="card">
          <h2>Digitize</h2>
          <p>
            A 2 player C++ command line game built with the MVC architecture and
            X11 graphics.
          </p>
          <div className="technologies">
            <span>C++</span>
            <span>X11 Graphics</span>
          </div>
        </div>
        <div className="card">
          <h2>Digitize</h2>
          <p>
            A 2 player C++ command line game built with the MVC architecture and
            X11 graphics.
          </p>
          <div className="technologies">
            <span>C++</span>
            <span>X11 Graphics</span>
          </div>
        </div>
        <div className="card">
          <h2>Digitize</h2>
          <p>
            A 2 player C++ command line game built with the MVC architecture and
            X11 graphics.
          </p>
          <div className="technologies">
            <span>C++</span>
            <span>X11 Graphics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
