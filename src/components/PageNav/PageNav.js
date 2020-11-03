import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./PageNav.module.css";

const PageNav = ({ header, url, links = []}) => {

    const listEls = links.map( link => {
      return (
        <li key={link.id} className={`${classes.item}`}>
          <NavLink 
            className={classes.link}
            to={`${url}/${link.subPath}`}
            activeClassName={classes.active}>
              {link.text}
          </NavLink>
        </li>
      )
  });

  return (
    <nav className={classes.nav}>
      <span className={classes.header}>{header}</span>
      <ul className={classes.items}>
        {listEls}
      </ul>
    </nav>
  )
};

export default PageNav;