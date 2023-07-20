import React from "react";

import classes from "./CompanyMenu.module.css";

function CompanyMenu() {
  return (
    <div className={classes.menuContainer}>
      <a href="/dummy">History</a>
      <a href="/dummy">Out Team</a>
      <a href="/dummy">Blog</a>
    </div>
  );
}

export default CompanyMenu;
