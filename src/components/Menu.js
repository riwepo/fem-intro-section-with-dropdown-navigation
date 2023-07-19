import React, { useState } from "react";

import imgMenu from "../images/icon-menu.svg";

import classes from "./Menu.module.css";
import MenuActive from "./MenuActive";

function Menu() {
  function hamburgerClickHandler() {
    setIsMenuActive((current) => !current);
  }

  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className={classes.menu}>
      {!isMenuActive && (
        <img
          src={imgMenu}
          alt="hamburger menu"
          onClick={hamburgerClickHandler}
        />
      )}
      {isMenuActive && (
        <MenuActive onMenuClose={() => setIsMenuActive(false)} />
      )}
    </div>
  );
}

export default Menu;
