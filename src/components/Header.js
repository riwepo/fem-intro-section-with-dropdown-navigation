import React, { useState } from "react";

import logo from "../images/logo.svg";
import iconCloseMenu from "../images/icon-close-menu.svg";
import iconMenu from "../images/icon-menu.svg";

import Navbar from "./Navbar";

import classes from "./Header.module.css";

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  function openCloseNavbarHandler() {
    setIsNavbarOpen((current) => !current);
  }
  return (
    <header className={classes.header}>
      <img src={logo} alt="snap logo" />
      <Navbar isOpen={isNavbarOpen} />
      <button
        className={classes.openCloseNavbarButton}
        onClick={openCloseNavbarHandler}
      >
        {!isNavbarOpen && <img src={iconMenu} alt="open menu icon" />}
        {isNavbarOpen && <img src={iconCloseMenu} alt="close menu icon" />}
      </button>
    </header>
  );
}

export default Header;
