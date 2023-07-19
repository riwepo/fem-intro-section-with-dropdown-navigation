import React from "react";

import heroImage from "../images/image-hero-mobile.png";

import classes from "./Main.module.css";

function Main() {
  return (
    <div className={classes.main}>
      <img src={heroImage} alt="young man holding laptop" />
      <div className={classes.textContainer}>
        <h1 className={classes.heading}>Make remote work</h1>
        <p className={classes.text}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className={classes.button}>Learn more</button>
      </div>
    </div>
  );
}

export default Main;
