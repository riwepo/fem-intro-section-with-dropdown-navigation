import React, { useState } from "react";

import openIcon from "../images/icon-arrow-up.svg";
import closedIcon from "../images/icon-arrow-down.svg";

import classes from "./MenuItemCollapsible.module.css";

function MenuItemCollapsible({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openToggleHandler = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className={classes.menuItemContainer}>
      <button className={classes.button} onClick={openToggleHandler}>
        <div className={classes.buttonContentContainer}>
          <p>{label}</p>
          {!isOpen && <img src={closedIcon} alt="closed icon" />}
          {isOpen && <img src={openIcon} alt="open icon" />}
        </div>
      </button>
      {isOpen && children}
    </div>
  );
}

export default MenuItemCollapsible;
