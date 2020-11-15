import React from "react";
import Form from "../../../containers/Form/Form";
import eating from "../../../assets/eating.png";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <section className={classes.container} id="search">  
      <h2 className={classes.title}>find your recipes</h2>
      <Form 
      initValues={{ name: "" }}
      />
      <img
      src={eating}
      className={classes.image}
      alt="couple eating meal at the table" />
    </section>
  )
};

export default Search;