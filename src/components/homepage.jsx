import React from "react";
import About from "./About";
import Experience from "./Experience";

const Home = () => {
  return (
    <div>
      <h1>Hi, my name is Ryan! Welcome to my personal website!</h1>
      <p>This is the homepage for my website.</p>
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
