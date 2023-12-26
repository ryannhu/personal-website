import React from "react";
import About from "./About";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Footer from "./Footer";
import Contact from "./Contact";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Introduction />
      <div>
        <About />
      </div>
      <div>
        <Experience />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
