import React from "react";

import imageHeroMobile from "../images/image-hero-mobile.png";
import imageHeroDesktop from "../images/image-hero-desktop.png";

import Footer from "./Footer";

import classes from "./Main.module.css";

function Main() {
  return (
    <main role="main" className={classes.main}>
      <article className={classes.imgContainer}>
        <picture>
          <source media="(min-width: 768px)" srcSet={imageHeroDesktop} />
          <img
            className={classes.img}
            src={imageHeroMobile}
            alt="young man holding laptop"
          />
        </picture>
      </article>

      <article className={classes.textContainer}>
        <h1 className={classes.heading}>Make remote work</h1>
        <p className={classes.text}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className={classes.button}>Learn more</button>
        <Footer />
      </article>
    </main>
  );
}

export default Main;
