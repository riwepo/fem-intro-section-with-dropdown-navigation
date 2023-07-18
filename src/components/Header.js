import React from "react";

import Menu from "./Menu";

import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <p>snap</p>
      <Menu />
    </div>
  );
}

export default Header;
