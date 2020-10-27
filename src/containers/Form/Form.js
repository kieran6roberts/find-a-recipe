import React, { useEffect, useState } from "react";
import { API_KEY, APP_ID, BASE_URL } from "../../settings";
import classes from "./Form.module.css"

const Form = () => {

/*
  useEffect(fetchData) ;

  const fetchData = async () => {
    const recipes = await fetch(`${BASE_URL}/search`) 
  };*/


  return (
    <form className={classes.form} role="find recipes">
      <label for="name" className={classes.searchLabel}>
        got anything in mind. go ahead and search for it!
      </label>
      <input id="name" type="search" className={classes.searchInput}></input>
      <input type="submit"></input>
    </form>
  )
};

export default Form;