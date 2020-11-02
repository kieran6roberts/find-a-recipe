import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <h1 className={classes.header}>
          find a recipe
        </h1>
        <div className={classes.info}>don't know what to cook and need some ideas?</div>
        <Link 
        to="/browse"
        className={classes.link}>
          find your next recipe
        </Link>
      </main>
    </>
  )
};

export default Home;