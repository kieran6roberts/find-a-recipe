import React from "react";
import classes from "./Button.module.css";
import PropTypes from 'prop-types';

const Button = ({ onClickFunc, children }) => {
  return(
    <button onClick={onClickFunc} className={classes.btn}>
      {children}
    </button>
  )
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClickFunc: PropTypes.func
};

export default Button;