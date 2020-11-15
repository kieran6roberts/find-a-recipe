import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageNav from "../../components/PageNav/PageNav";
import { useRouteMatch, Switch, Route, useLocation, Link } from "react-router-dom";
import Search from "./Search/Search";
import Results from "./Results/Results";
import classes from "./Browse.module.css";
import listImg from "../../assets/list.png";
import InfoCard from "../../components/InfoCard/InfoCard";
import searchImg from "../../assets/search.PNG";
import resultsImg from "../../assets/results.PNG";

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
          <InfoCard
            title="Search from thousands of recipes"
            imgsrc={searchImg}
            imgclass={classes.searchImg}>
              navigate to the <Link to="/browse/search" className={classes.link}>search page</Link> to begin searching for recipes.
              search by keywords that would included in the name of the recipe.
          </InfoCard>
          <InfoCard
            title="Choose your next meal"
            imgsrc={resultsImg}
            imgclass={classes.resultsImg}>
              view each recipes ingredient list and cooking instructions as well as the time to cook.
              Like what you see, click the heart icon to save and navigate to your 
              <Link to="/recipes/saved" className={classes.link}>saved recipes.</Link>
          </InfoCard>
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