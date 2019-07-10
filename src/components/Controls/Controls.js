import React from "react";
import Control from "./Control/Control";
import classes from "./Controls.module.css";

const Buttons = ({ onClick }) => {
  const array = ["red", "blue", "green", "orange", "yellow"];
  const renderButton = array.map(color => (
    <Control color={color} onClick={onClick} key={color} />
  ));

  return <div className={classes.controls}>{renderButton}</div>;
};

export default Buttons;
