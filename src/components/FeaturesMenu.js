import React from "react";

import imgTodo from "../images/icon-todo.svg";
import imgCalendar from "../images/icon-calendar.svg";
import imgReminders from "../images/icon-reminders.svg";
import imgPlanning from "../images/icon-planning.svg";

import classes from "./FeaturesMenu.module.css";

function FeaturesMenu() {
  return (
    <div className={classes.menuContainer}>
      <div className={classes.menuItemContainer}>
        <img src={imgTodo} alt="to do icon" />
        <a href="/dummy">Todo</a>
      </div>
      <div className={classes.menuItemContainer}>
        <img src={imgCalendar} alt="to do icon" />
        <a href="/dummy">Calendar</a>
      </div>
      <div className={classes.menuItemContainer}>
        <img src={imgReminders} alt="calendar icon" />
        <a href="/dummy">Reminders</a>
      </div>
      <div className={classes.menuItemContainer}>
        <img src={imgPlanning} alt="to do icon" />
        <a href="/dummy">Planning</a>
      </div>
    </div>
  );
}

export default FeaturesMenu;
