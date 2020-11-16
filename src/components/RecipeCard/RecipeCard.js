import React from "react";
import { FaHeart, FaTrash, FaArrowDown } from "react-icons/fa";
import { useButton, useButtonUpdate } from "../../hooks/ButtonContext";
import Button from "../Button/Button";
import classes from "./RecipeCard.module.css";

const RecipeCard = ({ id, title, image, save, deleteIcon, steps, ready, ingredients }) => {
  const { activeItem, openIngredients, openInstructions } = useButton();
  const { toggleActiveItem, toggleOpenIngredients, toggleOpenInstructions } = useButtonUpdate();

  return (
    <li key={id}  className={classes.item} id={id}>
      <div className={classes.header}>
        <h2 className={classes.name}>{title} <span className={classes.serve}>(time to serve: {ready})</span></h2>
        <Button onClickFunc={save}>
          {deleteIcon
          ? <FaTrash color="fff" className={classes.icon}/>
          : <FaHeart color="fff" className={classes.icon}/>
          }
        </Button>
      </div>

      <span className={classes.dividerTitle} />

      <img src={image} alt={`${title}`} className={classes.image} />

      <span className={classes.divider} />

      <div className={classes.subHeader}>
        <h3 className={classes.ingredientHeader}>ingredients</h3>
        <Button onClickFunc={() => {
          toggleActiveItem(id);
          toggleOpenIngredients();
        }}>
          <FaArrowDown color="fff" className={classes.icon}/>
        </Button>
      </div>

      <ul className={`${classes.ingredientList} 
                      ${openIngredients &&
                        activeItem === id &&
                        classes.open}`}>

        {ingredients
        ?  ingredients.map( (ingredient, index) => <li key={index} className={classes.ingredients}>{ingredient.name}, </li>)
        : <span>Ingredients not available for this recipe</span>
      }
      </ul>

      <span className={classes.divider} />

      <div className={classes.subHeader}>
        <h3 className={classes.instructionHeader}>instructions</h3>
        <Button onClickFunc={() => {
          toggleActiveItem(id);
          toggleOpenInstructions();
        }}>
          <FaArrowDown color="fff" className={classes.icon}/>
        </Button>
      </div>

      <ul className={`${classes.instructionList} 
                      ${openInstructions &&
                        activeItem === id &&
                        classes.open}`}>
        {steps
        ?  steps.map( step => <li key={step.number} className={classes.instruction}>{step.step}</li>)
        : <span>No instructions for this recipe</span>
       }
      </ul>
    </li>
  )
};

export default RecipeCard;