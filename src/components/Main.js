import React from "react";

import heroImage from "../images/image-hero-mobile.png";

import classes from "./Main.module.css";

function Main() {
  return (
    <div className={classes.main}>
      <img src={heroImage} alt="fred" />
      <h1>Make remote work</h1>
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button>Learn more</button>
    </div>
  );
}

export default Main;
