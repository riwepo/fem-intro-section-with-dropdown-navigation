import React from "react";

import imgCloseMenu from "../images/icon-close-menu.svg";

import classes from "./MenuActive.module.css";

function MenuActive({ onMenuClose }) {
  return (
    <div className={classes.menuActive}>
      <img
        className={classes.closeIcon}
        src={imgCloseMenu}
        alt="close icon"
        onClick={onMenuClose}
      />
      <p>menu active</p>
      <p>menu active</p>
      <p>menu active</p>
      <p>menu active</p>
      <p>menu active</p>
    </div>
  );
}

export default MenuActive;
