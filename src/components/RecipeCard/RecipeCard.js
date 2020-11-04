import React, { useState } from "react";
import { FaHeart, FaTrash, FaArrowDown } from "react-icons/fa";
import classes from "./RecipeCard.module.css";

const RecipeCard = ({ id, title, image, save, icon, steps, ready, ingredients }) => {
  const [ openIngredients, setOpenIngredients ] = useState(false);
  const [ openInstructions, setOpenInstructions ] = useState(false);

  return (
    <li key={id}  className={classes.item} id={id}>
      <div className={classes.header}>
        <h2 className={classes.name}>{title} <span className={classes.serve}>(time to serve: {ready})</span></h2>
        <button onClick={save} className={classes.btn}>
          {icon === "save"
          ? <FaHeart color="fff" />
          : <FaTrash color="#fff" />}
        </button>
      </div>

      <span className={classes.dividerTitle} />
      <div className={classes.flexWrapper}>
        <img src={image} alt={`${title}`} className={classes.image}></img>
      </div>
      <span className={classes.divider} />
      <div className={classes.subHeader}>
        <h3 className={classes.ingredientHeader}>ingredients</h3>
        <button onClick={() => setOpenIngredients(!openIngredients)} className={classes.btnList}>
          <FaArrowDown className={classes.iconArrow}/>
        </button>
      </div>
      <span>
      </span>
      <ul className={`${classes.ingredientList} ${openIngredients ? classes.open : ""}`}>
        {ingredients
        ?  ingredients.map( (ingredient, index) => <li key={index} className={classes.ingredients}>{ingredient.name}, </li>)
        : <span>Ingredients not available for this recipe</span>
      }
      </ul>
      <span className={classes.divider} />
      <div className={classes.subHeader}>
        <h3 className={classes.ingredientHeader}>instructions</h3>
        <button onClick={() => setOpenInstructions(!openInstructions)} className={classes.btnList}>
          <FaArrowDown className={classes.iconArrow}/>
        </button>
      </div>
      <ul className={`${classes.instructionList} ${openInstructions ? classes.open : ""}`}>
        {steps
        ?  steps.map( step => <li key={step.number} className={classes.instruction}>{step.step}</li>)
        : <span>No instructions for this recipe</span>
       }
      </ul>
    </li>
  )
};

export default RecipeCard;