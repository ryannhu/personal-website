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
      <h1>3 - Projects</h1>
      <div className="container">
        <div className="card">
          <h2>TikTok TLDR</h2>
          <p>
            A web application that summarizes TikTok usage data and provides a
            dashboard for users to view their usage statistics.
          </p>
          <div className="technologies">
            <span>React</span>
            <span>Express.js</span>
            <span>Python</span>
          </div>
        </div>

        <div className="card">
          <h2>MySpotify</h2>
          <p>
            A Next.js web application that uses the Spotify API to display user
            data and provide a dashboard for users to view their usage.
          </p>
          <div className="technologies">
            <span>Next.js</span>
            <span>Tailwind</span>
            <span>Vercel</span>
          </div>
        </div>
        <div className="card">
          <h2>GameBoy Emulator</h2>
          <p>
            A GameBoy emulator built with C++ and the SDL library to render
            graphics and handle input.
          </p>
          <div className="technologies">
            <span>C++</span>
            <span>SDL2</span>
            <span>CMake</span>
          </div>
        </div>
        <div className="card">
          <h2>Personal Website</h2>
          <p>
            This website here! Built with Vite, three.js and React, and deployed
            with Netlify.
          </p>
          <div className="technologies">
            <span>Vite</span>
            <span>three.js</span>
            <span>Netlify</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
