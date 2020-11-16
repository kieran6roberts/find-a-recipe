import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Home.module.css";
import chefHatImg from "../../assets/chef-hat.svg";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={classes.home}>
        <img 
        src={chefHatImg} 
        className={classes.chefHatImg} 
        alt="man sitting on chef hat"/>
        <h1 className={classes.header}>
          find a recipe
        </h1>
        <div className={classes.info}>
          don't know what to cook and need some ideas?
        </div>
        <Link 
        to="/browse"
        className={classes.link}>
          find your next recipe
        </Link>
      </section>
    </>
  )
};

export default Home;