import React from "react";

import imgAudioPhile from "../images/client-audiophile.svg";
import imgDataBiz from "../images/client-databiz.svg";
import imgMaker from "../images/client-maker.svg";
import imgMeet from "../images/client-meet.svg";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <img src={imgDataBiz} alt="databiz written logo" />
      <img src={imgAudioPhile} alt="audiophile written logo" />
      <img src={imgMeet} alt="meet written logo" />
      <img src={imgMaker} alt="maker written logo" />
    </footer>
  );
}

export default Footer;
