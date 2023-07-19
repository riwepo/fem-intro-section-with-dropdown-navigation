import React from "react";

import imgCloseMenu from "../images/icon-close-menu.svg";

import classes from "./MenuActive.module.css";

function MenuActive({ onMenuClose }) {
  return (
    <>
      <div className={classes.menuActiveOverlay}></div>
      <div className={classes.menuActive}>
        <img
          className={classes.closeIcon}
          src={imgCloseMenu}
          alt="close icon"
          onClick={onMenuClose}
        />
        <div className={classes.MenuItemsContainer}>
          <p>Feature</p>
          <p>Company</p>
          <p>Careers</p>
          <p>About</p>
        </div>
        <p>Login</p>
        <button className={classes.button}>Register</button>
      </div>
    </>
  );
}

export default MenuActive;
