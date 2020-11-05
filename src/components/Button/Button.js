import React from "react";
import classes from "./Button.module.css";

const Button = ({ onClickFunc, children }) => {
  return(
    <button onClick={onClickFunc} className={classes.btn}>
      {children}
    </button>
  )
};

export default Button;