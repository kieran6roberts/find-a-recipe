import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageNav from "../../components/PageNav/PageNav";
import { useRouteMatch, Switch, Route, useLocation, Link } from "react-router-dom";
import Search from "./Search/Search";
import Results from "./Results/Results";
import classes from "./Browse.module.css";
import listImg from "../../assets/list.svg";
import InfoCard from "../../components/InfoCard/InfoCard";
import searchImg500 from "../../assets/search500x210.jpg";
import searchImg900 from "../../assets/search900x378.jpg";
import searchImg from "../../assets/search.jpg";
import resultsImg500 from "../../assets/results500x242.jpg";
import resultsImg900 from "../../assets/results900x436.jpg";
import resultsImg from "../../assets/results.jpg";

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
        <section 
        className={classes.container} 
        id="browse">
          <img 
          src={listImg} 
          className={classes.listImg} 
          alt="recipe list illustration" />
          <InfoCard 
          title="1. Search from thousands of recipes"
          srcSet={`${searchImg500} 500w,
                   ${searchImg900} 900w,
                   ${searchImg} 1696w`}
          sizes={`(max-width: 900px) 500px, 65vw`}
          src={`${searchImg900}`}
          imgclass={classes.searchImg}
          alt="screenshot of search page">
              Navigate to the <Link to="/browse/search" className={classes.link}>search page</Link> to begin searching for recipes.
              Search by keywords that would included in the name of the recipe.
          </InfoCard>
          <InfoCard 
          title="2. Choose your next meal"
          srcSet={`${resultsImg500} 500w,
          ${resultsImg900} 900w,
          ${resultsImg} 1741w`}
          sizes={`(max-width: 900px) 500px, 65vw`}
          src={`${resultsImg900}`}
          imgclass={classes.resultsImg}
          alt="screenshot of results page">
              View each recipes ingredient list and cooking instructions as well as the time to cook.
              Like what you see, click the heart icon to save and navigate to your 
              <Link to="/recipes/saved" className={classes.link}> saved recipes.</Link>
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