import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import classes from "./InfoCard.module.css";
import PropTypes from 'prop-types';

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

InfoCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  imgclass: PropTypes.string,
  alt: PropTypes.string.isRequired
};

export default InfoCard;