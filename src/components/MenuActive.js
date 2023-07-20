import React from "react";

import imgCloseMenu from "../images/icon-close-menu.svg";

import MenuItemCollapsible from "./MenuItemCollapsible";
import FeaturesMenu from "./FeaturesMenu";
import CompanyMenu from "./CompanyMenu";

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
        <div className={classes.menuItemsContainer}>
          <MenuItemCollapsible label="Features">
            <FeaturesMenu />
          </MenuItemCollapsible>
          <MenuItemCollapsible label="Company">
            <CompanyMenu />
          </MenuItemCollapsible>
          <a className={classes.anchor} href="/dummy">
            Careers
          </a>
          <a className={classes.anchor} href="/dummy">
            About
          </a>
        </div>
        <button className={`${classes.button} ${classes.loginButton}`}>
          Login
        </button>
        <button className={`${classes.button} ${classes.registerButton}`}>
          Register
        </button>
      </div>
    </>
  );
}

export default MenuActive;
