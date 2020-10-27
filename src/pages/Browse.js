import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PageNav from "../components/PageNav/PageNav";
import { useRouteMatch, Switch, Route} from "react-router-dom";
import Search from "../pages/nestedPages/Search";
import Results from "../pages/nestedPages/Results";

const Browse = () => {
  const { path, url } = useRouteMatch();

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
      <Switch>
        <Route path={`${path}/search`} component={Search} />
        <Route path={`${path}/results`} component={Results} />
      </Switch>
    </>
  )
};

export default Browse;