import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ score }) => {
  return (
    <div className={classes.background}>
      <div className={classes.modal}>Your Final Score is {score}</div>
    </div>
  );
};

export default Modal;
