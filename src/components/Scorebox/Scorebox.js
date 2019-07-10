import React from "react";
import classes from "./Scorebox.module.css";

const ScoreBox = ({ score }) => {
  return (
    <div className={classes.scorebox}>
      <p>Score</p>
      {score}
    </div>
  );
};

export default ScoreBox;
