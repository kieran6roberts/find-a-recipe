import React from "react";
import { useLocation } from "react-router-dom";
import RecipeContainer from "../../components/RecipeContainer/RecipeContainer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Results = () => {
  const { recipes } = useLocation();
  console.log(recipes);
  return (
    <ul>
      {recipes ?
        recipes.forEach( recipe => {
          <div>recipe</div>
        }) : <h2>no recipes</h2>
        }
    </ul>
  
  )
};

export default Results;