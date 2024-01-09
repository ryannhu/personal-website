import React, { useState, useEffect } from 'react';
import '../styles/Header.css'; // Make sure to create a Header.css file for styling

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down hide the navbar
        setHideHeader(true);
      } else { // if scroll up show the navbar
        setHideHeader(false);
      }
      // remember current page location to compare with the new one
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`site-header ${hideHeader ? 'hide' : ''}`}>
      <div className="header-container">
        <h1>Ryan Hu</h1>
        <nav>
          <ul className={isNavVisible ? "nav-visible" : ""}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button onClick={toggleNav} className="nav-toggle">
                Menu
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
