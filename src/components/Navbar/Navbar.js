import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const PrimaryNavbar = () => {
  return (
    <nav className={classes.nav}>
      <Link 
      to="/browse"
      className={classes.logo}>
        Recipe Finder
      </Link>
      <ul className={classes.items}>
        <li className={classes.item}>
          <NavLink 
          to="/browse" 
          className={classes.link}
          activeClassName={classes.active}>
            browse
          </NavLink>
        </li>
        <li className={classes.marginLeft}>
          <NavLink 
          to="/recipes" 
          className={classes.link}
          activeClassName={classes.active}>
            my recipes
            </NavLink>
          </li>
      </ul>
    </nav>
  )
};

export default PrimaryNavbar;