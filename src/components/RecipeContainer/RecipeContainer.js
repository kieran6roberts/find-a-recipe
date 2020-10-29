import React from "react";
import classes from "./RecipeContainer.module.css";

const RecipeContainer = ({ children }) => {
  return (
      <ul className={classes.container}>
        {children}
      </ul>
  )
};

export default RecipeContainer;