import React from "react";
import About from "./About";
import Experience from "./Experience";
import Introduction from "./Introduction";

const Home = () => {
  return (
    <div>
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
