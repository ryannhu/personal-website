/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./Experience.css";


const data = [
  {
    a: "a",
  },
  {
    a: "b",
  },
  {
    a: "323"
  }
];

const Experience = () => {
const [activeTab, setActiveTab] = useState(0);
  {
    console.log(data);
  }
  return (
    <div>
      <div className="vertical-tabs">
        {data.map((node, i) => {
          console.log(node);
          const value = node.a;
          return (
            <button key={i} onClick={() => setActiveTab(i)} className={i == activeTab ? "tab-button active" : "tab-button"}>
              {value} {i}
            </button>
          );
        })}

        <button className="tab-button">Tab 2</button>
        <button className="tab-button">Tab 3</button>
      </div>
    </div>
  );
};

export default Experience;
