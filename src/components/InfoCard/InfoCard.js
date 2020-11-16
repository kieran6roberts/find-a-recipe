import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import classes from "./InfoCard.module.css";

const InfoCard = ({ children, title, srcSet, sizes, src, imgclass, alt}) => {
  return(
    <div className={classes.flexItem}>
      <SubHeader>
        {title}
      </SubHeader>
      <div className={classes.info}>
        {children}
      </div>
      <img 
      srcSet={srcSet}
      sizes={sizes}
      src={src} 
      className={imgclass} 
      alt={alt} />
  </div>
  )
};

export default InfoCard;