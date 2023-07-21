import React from "react";

import Menu from "./Menu";
import NavBar from "./Navbar";

import logo from "../images/logo.svg";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="snap logo" />
      {/* <Menu /> */}
      <NavBar />
    </header>
  );
}

export default Header;
