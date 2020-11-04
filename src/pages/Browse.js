import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PageNav from "../components/PageNav/PageNav";
import { useRouteMatch, Switch, Route, useLocation, Link} from "react-router-dom";
import Search from "../pages/nestedPages/Search";
import Results from "../pages/nestedPages/Results";
import classes from "./Browse.module.css";
import searchImg from "../assets/search.PNG";
import resultsImg from "../assets/results.PNG";
import listImg from "../assets/list.png";

const Browse = () => {
  const { path, url } = useRouteMatch();
  const { pathname } = useLocation();

  const SubLinks = [
    {
      id: 1,
      subPath: "search",
      text: "search"
    },
    {
      id: 2,
      subPath: "results",
      text: "results"
    },
  ];
  
  return (
    <>
      <Navbar />
      <PageNav 
      links={SubLinks}
      header="Browse"
      url={url} />
      {pathname === "/browse" &&
        <section className={classes.container} id="browse">
          <img src={listImg} className={classes.listImg} alt="recipe list illustration" />

          <div className={classes.flexItem}>
            <h2 className={classes.header}>
              Search from thousands of recipes
            </h2>
            <div className={classes.info}>
              navigate to the <Link to="/browse/search" className={classes.link}>search page</Link> to begin searching for recipes.
              Search by keywords that would included in the name of the recipe.
            </div>
            <img src={searchImg} className={classes.searchImg} alt="screenshot of search page" />
          </div>

          <div className={classes.flexItem}>
            <h2 className={classes.header}>
              choose your next meal
            </h2>
            <div className={classes.info}>
              view each recipes ingredient list and cooking instructions as well as the time to cook.
              Like what you see, click the heart icon to save and navigate to your <Link to="/recipes/saved" className={classes.link}>saved recipes.</Link>
            </div>
            <img src={resultsImg} className={classes.resultsImg} alt="screenshot of results page" />
          </div>
      </section>
      }
      <Switch>
        <Route path={`${path}/search`} component={Search} />
        <Route path={`${path}/results`} component={Results} />
      </Switch>
    </>
  )
};

export default Browse;