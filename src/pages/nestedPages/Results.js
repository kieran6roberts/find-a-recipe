import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useSessionStorage from "../../hooks/useSessionStorage";
import RecipeContainer from "../../components/RecipeContainer/RecipeContainer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Results = () => {
  const [ storedResults ] = useSessionStorage("searchResults");
  const [ savedRecipes, setSavedRecipes ] = useLocalStorage("savedRecipes");

  const submitSaveHandler = e => {
    const recipeID = e.currentTarget.closest("li").id;
    const match = storedResults.filter( recipe => recipe.id.toString() === recipeID);
    setSavedRecipes(match);
    return savedRecipes;
  };
  
  return (
    <RecipeContainer>
      {storedResults
      ? storedResults.map( recipe => <RecipeCard 
        key={recipe.id}
        id={recipe.id}
        title={recipe.title} 
        image={recipe.image}
        save={submitSaveHandler} />)
      : <li>Empty</li>
      }
    </RecipeContainer>
  )

};

export default Results;