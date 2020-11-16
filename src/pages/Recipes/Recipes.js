import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageNav from "../../components/PageNav/PageNav";
import { useRouteMatch, Switch, Route, useLocation } from "react-router-dom";
import SavedRecipes from "./SavedRecipes/SavedRecipes";
import classes from "./Recipes.module.css";

const Recipes = () => {
  const { path, url } = useRouteMatch();
  const { pathname } = useLocation();

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
      {pathname === "/recipes" &&
        <div className={classes.wrapper}>
          <h1 className={classes.header}>
            Find all of your saved recipes here!
          </h1>
        </div>
      }
        <Switch>
          <Route 
          path={`${path}/saved-recipes`} 
          component={SavedRecipes} />
      </Switch>
    </>

  )
};

export default Recipes;