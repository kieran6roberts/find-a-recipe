import React from "react";
import RecipeContainer from "../../../components/RecipeContainer/RecipeContainer";
import RecipeCard from "../../../components/RecipeCard/RecipeCard";
import { useStore, useStoreUpdate } from "../../../hooks/StorageContext";
import classes from "./Results.module.css";

const Results = () => {
  const { storedSession, storedLocal  } = useStore();
  const { setResults } = useStoreUpdate();

  const findRecipeMatch = (items, check) => [ items.find( item => item.id.toString() === check) ];

  const submitSaveHandler = e => {
    const recipeID = e.currentTarget.closest("li").id;
    const match = findRecipeMatch(storedSession, recipeID);

    if (!storedLocal) return setResults(match, "local");
    if (storedLocal.some( recipe => recipe.id === match[0].id)) return;

    try {
        setResults([ ...storedLocal, ...match], "local");
    } catch (err) {
        console.error(err);
      }
  };

  return (
    <RecipeContainer>
      {storedSession.length > 0
      ? storedSession.map( recipe => <RecipeCard 
        key={recipe.id}
        id={recipe.id}
        title={recipe.title} 
        image={recipe.image}
        save={submitSaveHandler}
        steps={recipe.analyzedInstructions[0].steps}
        ready={recipe.readyInMinutes}
        ingredients={recipe.extendedIngredients} />)
      : <li className={classes.emptyList}>results are empty</li>
      }
    </RecipeContainer>
  )

};

export default Results;