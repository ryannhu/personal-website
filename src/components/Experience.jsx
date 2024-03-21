/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/Experience.css";
import { useInView } from "react-intersection-observer";

const data = [
  {
    a: "Zomp",
    content: [
      "Developed and maintained .NET application used for analyzing gas and oil pipeline data",
      "Created an ASP.NET API to allow remote database access, enabling the use of a shared Azure database",
      "Designed a feature that automatically data from disk into database eliminating the need to manually add data",
      "Improved the runtime of data generation algorithm by 80% by using multithreading and data caching",
    ],
    date: "January 2024 - Present",
    job: "Software Developer",
  },
  {
    a: "JSI Telecom",
    content: [
      `Maintained the core .NET application that validates and processes work items from Azure DevOps\n`,
      `Migrated the application backend from SOAP to Azure REST API, improving performance by 30%`,
      `Developed and executed unit and integration tests in NUnit to ensure code functionality`,
      `Automated software status reports for over 30+ teams by using VBA macros, reducing manual effort by 80%`,
    ],
    date: "May 2023 - August 2023",
    job: "Software Developer Intern",
  },
  {
    a: "LabsCubed",
    content: [
      `Implemented layout enhancements to the portal React web application by improving navigation, refactoring components and fixing UI inconsistencies`,
      "Designed an in-device video player that streamlines the diagnosis of system failures by automatically processing and streaming system videos on Flask server",
      "Built a system monitor page that records and displays basic system information about the device such as CPU usage, providing comprehensive benchmark testing during usage",
      `Improved Redis performance by 20% in benchmark testing by implementing pipelining and optimizing memory usage`,
    ],
    date: "September 2022 - December 2022",
    job: "Software Developer Intern",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [transition, setTransition] = useState(false);
  const [hoverTab, setHoverTab] = useState(false);
  const nodeRef = useRef(null);
  {
    console.log(transition);
  }

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Adjust as needed, represents the percentage of the element's visibility
  });

  useEffect(() => {
    setTransition(true);
    const timer = setTimeout(() => {
      setTransition(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className={`exp-container ${inView ? "visible" : ""}`} ref={ref}>
      <h1>2 - Experience</h1>
      <div className="inner">
        <div className="vertical-tabs">
          {data.map((node, i) => {
            const value = node.a;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                onMouseOver={() => setHoverTab(i)}
                onMouseOut={() => setHoverTab(-1)}
                className={
                  i == activeTab
                    ? "tab-button active"
                    : i == hoverTab
                      ? "tab-button hover"
                      : "tab-button"
                }
              >
                {value}
              </button>
            );
          })}

          {/* <button className="tab-button">Tab 2</button>
          <button className="tab-button">Tab 3</button> */}
        </div>
        <div className="styledTabPanels">
          <CSSTransition ref={nodeRef} in={transition} classNames="fade">
            <div ref={nodeRef} className="styledTabPanel">
              <h2>
                {data[activeTab].job} @ {data[activeTab].a}
              </h2>
              <h4>{data[activeTab].date}</h4>
              <div className="content">
              {data[activeTab].content.map((item, i) => {
                return <div className="experiencePoint">
                <p key={i}>- {item}</p>
                </div>;
              })}
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Experience;
