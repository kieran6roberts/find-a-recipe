import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import classes from "./RecipeCard.module.css";

const RecipeCard = ({ id, title, image, save, icon }) => {

  return (
    <li key={id}  className={classes.item} id={id}>
      <div className={classes.header}>
        <h2 className={classes.name}>{title}</h2>
        <button onClick={save} className={classes.btn}>
          {icon === "save"
          ? <FaPlus color="#333" />
          : <FaTrash color="333" />}
        </button>
      </div>

      <span className={classes.divider} />
      
      <img src={image} alt={`${title}`} className={classes.image}></img>
    </li>
  )
};

export default RecipeCard;