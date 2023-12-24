import React from "react";
import About from "./About";
import Experience from "./Experience";
import Introduction from "./Introduction";
import "./Home.css";

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
    </div>
  );
};

export default Home;
