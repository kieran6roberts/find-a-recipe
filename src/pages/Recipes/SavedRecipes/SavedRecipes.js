import React from "react";
import RecipeContainer from "../../../components/RecipeContainer/RecipeContainer";
import RecipeCard from "../../../components/RecipeCard/RecipeCard";
import { useStore, useStoreUpdate } from "../../../hooks/StorageContext";
import classes from "./SavedRecipes.module.css";

const SavedRecipes = () => {
  const { storedLocal } = useStore();
  const { setResults } = useStoreUpdate();

  const findRecipeMatch = (items, check) => [ items.find( item => item.id.toString() === check) ];

  const submitDeleteHandler = e => {
    const recipeID = e.currentTarget.closest("li").id;
    const match = findRecipeMatch(storedLocal, recipeID);
    const newSavedRecipes = storedLocal.filter( recipe => recipe.id !== match[0].id);
    setResults(newSavedRecipes, "local");
  }

  return (
    <RecipeContainer>
      {storedLocal.length > 0
      ? storedLocal.map( recipe => <RecipeCard 
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        save={submitDeleteHandler}
        deleteIcon
        image={recipe.image}
        steps={recipe.analyzedInstructions[0].steps}
        ready={recipe.readyInMinutes}
        ingredients={recipe.extendedIngredients}/>)
      : <li className={classes.emptyList}>results are empty</li>
      }
    </RecipeContainer>
  )
};

export default SavedRecipes;