import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo32 from "../../assets/flaticons/logo32x32.png";
import logo64 from "../../assets/flaticons/logo64x64.png";

const PrimaryNavbar = () => {
  return (
    <nav className={classes.nav}>
      <Link 
      to="/"
      className={classes.logo}>
        <img 
          srcSet={`${logo32} 32w, ${logo64} 64w`} 
          sizes="(max-height: 800px) 32px, 64px" 
          src={logo64}
          className={classes.image}
          alt="Chef holding utensil" />
        <span className={classes.title}>Find a recipe</span>
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