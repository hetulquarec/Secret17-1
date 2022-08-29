/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import "./header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <a href="/">
        <img src={Logo} className="Logo" alt="logo" />
      </a>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/services">Services</a>

          {/* <div className="dropdown" href="/services">
            <button className="dropbtn">Services</button>

            <div className="dropdown-content">
              <a href="/">Break My Lease</a>
              <a href="/">Sell My Machine</a>
            </div>
          </div> */}
          <a href="/portfolio">Portfolio</a>
          <a href="/blogs">Blogs</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>

        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <span>D</span>
      </button>
    </header>
  );
}
