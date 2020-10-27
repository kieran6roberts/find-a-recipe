import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PageNav from "../components/PageNav/PageNav";
import { useRouteMatch, Switch, Route} from "react-router-dom";
import SavedRecipes from "./nestedPages/SavedRecipes";
import AddRecipes from "./nestedPages/AddRecipes";

const Recipes = () => {
  const { path, url } = useRouteMatch();
  const SubLinks = [
    {
      id: 1,
      subPath: "saved-recipes",
      text: "saved recipes"
    },
    {
      id: 2,
      subPath: "add-recipes",
      text: "add a recipe"
    }
  ];
  return (
    <>
      <Navbar />
      <PageNav 
      links={SubLinks}
      url={url}
      header="My Recipes" />
        <Switch>
          <Route path={`${path}/saved-recipes`} component={SavedRecipes} />
          <Route path={`${path}/add-recipes`} component={AddRecipes} />
      </Switch>
    </>

  )
};

export default Recipes;