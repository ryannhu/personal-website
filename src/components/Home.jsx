import React from "react";
import About from "./About";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Footer from "./Footer";
import Contact from "./Contact";
import Header from "./Header";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="flex-items">
        <Introduction />
      </div>
      <div className="flex-items" id="about">
        <About />
      </div>
      <div className="flex-items" id="experience">
        <Experience />
      </div>
      <div className="flex-items" id="projects">
        <Projects />
      </div>
      <div className="flex-items">
        <Contact />
      </div>
      <div className="flex-items">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
