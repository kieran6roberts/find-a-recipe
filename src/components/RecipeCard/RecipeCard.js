import React from "react";

const RecipeCard = ({ title, image }) => {
  return (
    <li>
      <span>{title}</span>
      <img src={image} alt="Cooked recipe" />
    </li>
  )
};

export default RecipeCard;