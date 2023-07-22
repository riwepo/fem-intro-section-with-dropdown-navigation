import React from "react";

import MenuItemCollapsible from "./MenuItemCollapsible";
import FeaturesMenu from "./FeaturesMenu";
import CompanyMenu from "./CompanyMenu";

import classes from "./Navbar.module.css";

function Navbar({ isOpen }) {
  return (
    <>
      <nav className={`${classes.nav} ${isOpen && classes.open}`}>
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
      </nav>
      {isOpen && <div className={classes.openOverlay}></div>}
    </>
  );
}

export default Navbar;
