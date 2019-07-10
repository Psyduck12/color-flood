import React from "react";
import classes from "./Control.module.css";

const Control = ({ color, onClick }) => {
  return (
    <div
      className={[classes.control, classes[color]].join(" ")}
      onClick={() => onClick(color)}
    />
  );
};

export default Control;
