import React, { useState } from "react";

import iconCloseMenu from "../images/icon-close-menu.svg";
import iconMenu from "../images/icon-menu.svg";

import MenuItemCollapsible from "./MenuItemCollapsible";
import FeaturesMenu from "./FeaturesMenu";
import CompanyMenu from "./CompanyMenu";

import classes from "./Navbar.module.css";

function NavBarOpen() {
  return (
    <>
      <div className={classes.menuItemsContainer}>
        <MenuItemCollapsible label="Features">
          <FeaturesMenu />
        </MenuItemCollapsible>
        <MenuItemCollapsible label="Company">
          <CompanyMenu />
        </MenuItemCollapsible>
      </div>
      <button className={`${classes.button} ${classes.loginButton}`}>
        Login
      </button>
      <button className={`${classes.button} ${classes.registerButton}`}>
        Register
      </button>
      <div className={classes.openOverlay}></div>
    </>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function openCloseClickHandler() {
    setIsOpen((current) => !current);
  }
  return (
    <>
      <nav className={classes.nav}>
        <button className={classes.button} onClick={openCloseClickHandler}>
          {!isOpen && <img src={iconMenu} alt="open menu icon" />}
          {isOpen && <img src={iconCloseMenu} alt="close menu icon" />}
        </button>

        {isOpen && <NavBarOpen />}
      </nav>
      {isOpen && <div className={classes.openOverlay}></div>}
    </>
  );
}

export default NavBar;
