import React from "react";
import classes from "./SubHeader.module.css";
import PropTypes from 'prop-types';

const SubHeader = ({ children }) => {
  return(
    <>
      <h2 className={classes.header}>
        {children}
      </h2>
    </>
  )
};

SubHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default SubHeader;