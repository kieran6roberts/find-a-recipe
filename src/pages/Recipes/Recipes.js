import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RecipeContainer from "../../components/RecipeContainer/RecipeContainer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import PageNav from "../../components/PageNav/PageNav";
import { useStore, useStoreUpdate } from "../../hooks/StorageContext";
import classes from "./Recipes.module.css";

const Recipes = () => {
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
    <>
      <Navbar />
      <PageNav header="Saved Recipes"/>
      <RecipeContainer>
        {storedLocal
        ? storedLocal.map( recipe => <RecipeCard 
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          save={submitDeleteHandler}
          deleteIcon
          image={recipe.image}
          steps={recipe.analyzedInstructions.length > 0 
            ? recipe.analyzedInstructions[0].steps
            : null}
          ready={recipe.readyInMinutes}
          ingredients={recipe.extendedIngredients}/>)
        : <li className={classes.emptyList}>results are empty</li>
        }
      </RecipeContainer>
    </>
  )
};

export default Recipes;