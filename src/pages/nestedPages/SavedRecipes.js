import React from "react";
import RecipeContainer from "../../components/RecipeContainer/RecipeContainer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useLocalStorage from "../../hooks/useLocalStorage";

const SavedRecipes = () => {
  const [ savedRecipes ] = useLocalStorage("savedRecipes");

  return (
    <RecipeContainer>
      {savedRecipes
      ? savedRecipes.map( recipe => <RecipeCard 
        key={recipe.id}
        id={recipe.id}
        title={recipe.title} 
        image={recipe.image}/>)
      : <li>Empty</li>
      }
    </RecipeContainer>
  )
};

export default SavedRecipes;