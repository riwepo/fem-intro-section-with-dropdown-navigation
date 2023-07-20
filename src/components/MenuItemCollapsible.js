import React, { useState } from "react";

import openIcon from "../images/icon-arrow-up.svg";
import closedIcon from "../images/icon-arrow-down.svg";

import classes from "./MenuItemCollapsible.module.css";

function MenuItemCollapsible({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openToggleHandler = () => {
    console.log("openToggleHandler");
    setIsOpen((current) => !current);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <p>{label}</p>
        <button onClick={openToggleHandler}>
          {!isOpen && <img src={closedIcon} alt="closed icon" />}
          {isOpen && <img src={openIcon} alt="open icon" />}
        </button>
      </div>
      {isOpen && children}
    </>
  );
}

export default MenuItemCollapsible;
