import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageNav from "../../components/PageNav/PageNav";
import { useRouteMatch, Switch, Route} from "react-router-dom";
import SavedRecipes from "./SavedRecipes/SavedRecipes";

const Recipes = () => {
  const { path, url } = useRouteMatch();
  const SubLinks = [
    {
      id: 1,
      subPath: "saved-recipes",
      text: "saved recipes"
    },
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
      </Switch>
    </>

  )
};

export default Recipes;