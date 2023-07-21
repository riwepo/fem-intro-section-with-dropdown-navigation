import React from "react";

import Menu from "./Menu";

import logo from "../images/logo.svg";

import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <img src={logo} alt="snap logo" />
      <Menu />
    </div>
  );
}

export default Header;
