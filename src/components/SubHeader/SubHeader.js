import React from "react";
import classes from "./SubHeader.module.css";

const SubHeader = ({ children }) => {
  return(
    <>
      <h2 className={classes.header}>
        {children}
      </h2>
    </>
  )
};

export default SubHeader;