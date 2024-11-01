import React from "react";
import Brain from "./Brain";
import { TypeAnimation } from "react-type-animation";
import "../styles/Introduction.css";

const Introduction = () => {
  return (
    <div className="intro-container" id="home">
      <div className="intro-left">
        <Brain />
      </div>
      <div className="intro-right">
        <div className="intro">
          <div className="text-container">
            <div className="intro-text">
              <div className="hello">
                <h4>Hi, my name is</h4>
              </div>
              <div className="name">
                <h1>Ryan Hu</h1>
              </div>
              <TypeAnimation
                sequence={[
                  "I'm a Runner",
                  2000,
                  "I'm a Developer",
                  2000,
                  "I'm a Student",
                  2000,
                  "I love watching baseketball!",
                  2000,
                ]}
                speed={30}
                repeat={Infinity}
              />
              <p>This is the homepage for my website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
