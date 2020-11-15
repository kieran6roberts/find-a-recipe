import React from "react";
import { Link } from "react-router-dom"
import SubHeader from "../SubHeader/SubHeader";
import classes from "./InfoCard.module.css";

const InfoCard = ({ children, imgsrc, imgclass, title }) => {
  return(
    <div className={classes.flexItem}>
      <SubHeader>
        {title}
      </SubHeader>
      <div className={classes.info}>
        {children}
      </div>
      <img src={imgsrc} className={imgclass} alt="screenshot of search page" />
  </div>
  )
};

export default InfoCard;