import React from "react";
import { FaHeart, FaTrash, FaArrowDown } from "react-icons/fa";
import classes from "./RecipeCard.module.css";

const RecipeCard = ({ id, title, image, save, icon, steps, ready, ingredients }) => {
  return (
    <li key={id}  className={classes.item} id={id}>
      <div className={classes.header}>
        <h2 className={classes.name}>{title} <span className={classes.serve}>(time to serve: {ready})</span></h2>
        <button onClick={save} className={classes.btn}>
          {icon === "save"
          ? <FaHeart color="#333" />
          : <FaTrash color="#333" />}
        </button>
      </div>

      <span className={classes.dividerTitle} />
      <div className={classes.flexWrapper}>
        <img src={image} alt={`${title}`} className={classes.image}></img>
      </div>
      <span className={classes.divider} />
      <div className={classes.subHeader}>
        <h3 className={classes.ingredientHeader}>ingredients</h3>
        <FaArrowDown />
      </div>
      <span>
      </span>
      <ul className={classes.ingredientList}>
        {ingredients
        ?  ingredients.map( ingredient => <li className={classes.ingredients}>{ingredient.name}, </li>)
        : <span>No instructions for this recipe</span>
      }
      </ul>
      <span className={classes.divider} />
      <div className={classes.subHeader}>
        <h3 className={classes.ingredientHeader}>instructions</h3>
        <FaArrowDown />
      </div>
      <ul className={classes.instructionList}>
        {steps
        ?  steps.map( step => <li className={classes.instruction}>{step.step}</li>)
        : <span>No instructions for this recipe</span>
       }
      </ul>
    </li>
  )
};

export default RecipeCard;