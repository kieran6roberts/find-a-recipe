import React from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./RecipeCard.module.css";

const RecipeCard = ({ id, title, image, save }) => {
  return (
    <li key={id}  className={classes.item} id={id}>
      <div className={classes.header}>
        <h2 className={classes.name}>{title}</h2>
        <button onClick={save} className={classes.btn}>
          <FaPlus className={classes.saveIcon} color="#333" />
        </button>
      </div>

      <span className={classes.divider} />
      
      <img src={image} alt={`${title}`} className={classes.image}></img>
    </li>
  )
};

export default RecipeCard;