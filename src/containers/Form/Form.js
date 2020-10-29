import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import useSessionStorage from "../../hooks/useSessionStorage";
import { API_KEY, BASE_URL } from "../../settings";
import classes from "./Form.module.css"

const Form = () => {
  const history = useHistory();

  const [ recipes, setRecipes ] = useState("");
  const [ storedResults, setStoredResults ] = useSessionStorage("searchResults");

  //init values for form inputs
  const initValues = {
    name: ""
  };

  useEffect( () => {
    if (recipes) { 
      setStoredResults(recipes);
      history.push({
        pathname: "/browse/results"
      });
    }
  })

  const fetchData = async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/recipes/complexSearch?query=${query}&number=5&apiKey=${API_KEY}`);
      const { results } = await response.json();
      setRecipes(results);
    } catch (err) {
      console.log(err);
    }
  }; 
  
  const { 
    values, 
    changeFormHandler, 
    submitFormHandler } = useCustomForm({ 
      initValues,
      onSubmit: (values) => fetchData(values.name)
     });

  return (
    <form  
      onSubmit={submitFormHandler}
      className={classes.form}>
      <label 
        htmlFor="name" 
        className={classes.searchLabel}>
          search
      </label>
      <input 
        id="name"
        name="search"
        onChange={changeFormHandler}
        value={values.name}
        type="search"
        className={classes.searchInput} />
      <input type="submit" className={classes.submit} value="Submit" />
    </form>
  )
};

export default Form;