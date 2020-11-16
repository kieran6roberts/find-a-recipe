import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import { useStoreUpdate } from "../../hooks/StorageContext";
import classes from "./Form.module.css";
const { API_KEY, BASE_URL } = process.env;

const Form = () => {
  const history = useHistory();
  const [ recipes, setRecipes ] = useState("");
  const { setResults } = useStoreUpdate();

  const initValues = {
    name: ""
  };

  const { 
    values,
    buttonValid,
    changeFormHandler, 
    submitFormHandler } = useCustomForm({ 
      initValues,
      onSubmit: (values) => fetchData(values.name)
     });

  useEffect( () => {
    if (recipes) { 
      setResults(recipes, "session");
      history.push({
        pathname: "/browse/results",
        state: {
          data: values.name
        }
      });
    }
  })

  const fetchData = async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/recipes/complexSearch?query=${query}&number=25&fillIngredients=true&addRecipeInformation=true&apiKey=${API_KEY}`);
      const { results } = await response.json();
      return setRecipes(results);
    } catch (err) {
      console.log(err);
      return null;
    }
  }; 

  return (
      <form  
        onSubmit={submitFormHandler}
        className={classes.form}>
        <label 
          htmlFor="name" 
          className={classes.searchLabel}>
            keywords:
        </label>
        <input 
          id="name"
          name="search"
          onChange={changeFormHandler}
          value={values.name}
          type="search"
          placeholder="thai red curry, pizza etc."
          className={classes.searchInput} />
        <input 
        type="submit" 
        className={`${classes.submit} 
        ${!buttonValid ? classes.valid : ""}`} 
        value="Submit" 
        disabled={buttonValid}/>
      </form>
  )
};

export default Form;